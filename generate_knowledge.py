#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从PDF教材提取详细知识点并生成网站数据结构"""

import os
import re
import json
from PyPDF2 import PdfReader

def extract_pdf_content(pdf_path):
    """提取PDF文本内容"""
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        return text
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
        return ""

def clean_text(text):
    """清理文本"""
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
    return text.strip()

def chinese_to_arabic(chinese):
    """将中文数字转换为阿拉伯数字"""
    mapping = {'一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10}
    if chinese in mapping:
        return mapping[chinese]
    return int(chinese) if chinese.isdigit() else chinese

def extract_knowledge_points(text):
    """提取知识点"""
    text = re.sub(r'\d+[\s.]*第\s*\d+\s*页', '', text)
    text = re.sub(r'【\s*\d+\s*】', '', text)
    
    paragraphs = text.split('。')
    
    points = []
    current_section = []
    
    for para in paragraphs:
        para = para.strip()
        if len(para) < 15:
            continue
            
        if re.match(r'^[一二三四五六七八九十\d]+[．.、]', para) or \
           re.match(r'^[（\(][一二三四五六七八九十\d]+[）\)]', para) or \
           '学习目标' in para or '知识目标' in para or '能力目标' in para:
            if current_section:
                points.append('。'.join(current_section) + '。')
                current_section = []
            current_section.append(para)
        elif len(para) > 50:
            current_section.append(para)
    
    if current_section:
        points.append('。'.join(current_section) + '。')
    
    return points

def parse_knowledge_block(text):
    """解析知识块"""
    goals = []
    
    knowledge_match = re.search(r'知识目标[：:]\s*([^能力目标]+)', text)
    if knowledge_match:
        knowledge_text = knowledge_match.group(1)
        goals.extend(re.findall(r'[１2１2][．.、]\s*([^１-９\d]+)', knowledge_text))
    
    ability_match = re.search(r'能力目标[：:]\s*([^素养目标]+)', text)
    if ability_match:
        ability_text = ability_match.group(1)
        goals.extend(re.findall(r'[１2１２][．.、]\s*([^素养目标]+)', ability_text))
    
    quality_match = re.search(r'素养目标[：:]\s*(.+?)(?=任务|案例|$)', text, re.DOTALL)
    if quality_match:
        quality_text = quality_match.group(1)
        goals.extend(re.findall(r'[１2１２][．.、]\s*([^１-９]+)', quality_text))
    
    return goals

def extract_all_content():
    """提取所有PDF内容"""
    projects = [
        (2, '项目二', '熟知金融产品营销理念及范式', [
            (1, 'assets/教材/《金融产品营销实务》第三版项目二任务一.pdf', '识别营销机会与客户顺势深挖范式'),
            (2, 'assets/教材/《金融产品营销实务》第三版项目二任务二.pdf', '叠加营销与产品核心一句范式'),
            (3, 'assets/教材/《金融产品营销实务》第三版项目二任务三.pdf', '差异营销与主权在握范式'),
            (4, 'assets/教材/《金融产品营销实务》第三版项目二任务四.pdf', '互换营销与促成结案范式'),
        ]),
        (3, '项目三', '识别客户性格差异与心理需求', [
            (1, 'assets/教材/《金融产品营销实务》第三版项目三任务一.pdf', '客户性格差异识别'),
            (2, 'assets/教材/《金融产品营销实务》第三版项目三任务二.pdf', '客户心理需求分析'),
            (3, 'assets/教材/《金融产品营销实务》第三版项目三任务三.pdf', '客户性格与营销策略匹配'),
        ]),
        (4, '项目四', '掌握产品呈现与价值塑造技巧', [
            (1, 'assets/教材/《金融产品营销实务》第三版项目四任务一.pdf', '产品呈现技巧'),
            (2, 'assets/教材/《金融产品营销实务》第三版项目四任务二.pdf', '价值塑造方法'),
            (3, 'assets/教材/《金融产品营销实务》第三版项目四任务三.pdf', '产品演示与体验'),
        ]),
        (5, '项目五', '化解客户异议与促成交易', [
            (1, 'assets/教材/《金融产品营销实务》第三版项目五任务一.pdf', '客户异议识别与分类'),
            (2, 'assets/教材/《金融产品营销实务》第三版项目五任务二.pdf', '异议处理策略'),
            (3, 'assets/教材/《金融产品营销实务》第三版项目五任务三.pdf', '促成交易技巧'),
            (4, 'assets/教材/《金融产品营销实务》第三版项目五任务四.pdf', '促成交易时机把握'),
            (5, 'assets/教材/《金融产品营销实务》第三版项目五任务五.pdf', '促成交易方法'),
            (6, 'assets/教材/《金融产品营销实务》第三版项目五任务六.pdf', '促成交易话术'),
        ]),
        (6, '项目六', '客户关系维护与二次开发', [
            (1, 'assets/教材/《金融产品营销实务》第三版项目六任务一.pdf', '客户关系维护重要性'),
            (2, 'assets/教材/《金融产品营销实务》第三版项目六任务二.pdf', '客户关系维护方法'),
            (3, 'assets/教材/《金融产品营销实务》第三版项目六任务三.pdf', '客户二次开发策略'),
        ]),
        (7, '项目七', '特殊客群营销技巧', [
            (1, 'assets/教材/《金融产品营销实务》（第三版）项目七任务一.pdf', '青少年客户营销'),
            (2, 'assets/教材/《金融产品营销实务》（第三版）项目七任务二.pdf', '中年客户营销'),
            (3, 'assets/教材/《金融产品营销实务》（第三版）项目七任务三.pdf', '老年客户营销'),
        ]),
        (8, '项目八', '金融产品售后服务', [
            (1, 'assets/教材/《金融产品营销实务》（第三版）项目八任务一.pdf', '售后服务的意义'),
            (2, 'assets/教材/《金融产品营销实务》（第三版）项目八任务二.pdf', '售后服务内容'),
            (3, 'assets/教材/《金融产品营销实务》（第三版）项目八任务三.pdf', '客户投诉处理'),
        ]),
        (9, '项目九', '金融产品营销综合实践', [
            (1, 'assets/教材/《金融产品营销实务》第三版项目九任务一.pdf', '综合营销案例分析'),
            (2, 'assets/教材/《金融产品营销实务》第三版项目九任务二.pdf', '营销方案策划'),
            (3, 'assets/教材/《金融产品营销实务》第三版项目九任务三.pdf', '实战演练与总结'),
        ])
    ]
    
    all_data = []
    
    for project_num, project_name, project_title, tasks in projects:
        project_data = {
            'id': project_num + 4,
            'title': f'{project_name} {project_title}',
            'description': f'学习{project_name}的完整内容',
            'icon': 'fa-book-open',
            'subLevels': []
        }
        
        for task_num, pdf_path, subtitle in tasks:
            if os.path.exists(pdf_path):
                print(f"提取: {project_name} 任务{task_num}")
                content = extract_pdf_content(pdf_path)
                cleaned = clean_text(content)
                
                knowledge_points = extract_knowledge_points(cleaned)
                goals = parse_knowledge_block(cleaned)
                
                sublevel = {
                    'id': float(f"{project_data['id']}.{task_num}"),
                    'title': f'{project_name}任务{task_num}：{subtitle}',
                    'description': f'{project_name}任务{task_num}学习',
                    'knowledge': [
                        {
                            'title': f'{project_name}任务{task_num}：{subtitle}',
                            'content': cleaned[:1500] + '...' if len(cleaned) > 1500 else cleaned,
                            'pdf': pdf_path,
                            'points': [
                                {'title': f'{project_name}任务{task_num}学习目标', 'text': ' '.join(goals[:3]) if goals else '掌握本任务的核心知识点和技能要求'}
                            ]
                        }
                    ],
                    'quiz': [
                        {
                            'type': 'judge',
                            'question': f'我已完成{project_name}任务{task_num}的学习内容',
                            'options': ['已完成', '继续学习'],
                            'answer': 0,
                            'explanation': '请认真学习教材内容并完成练习'
                        }
                    ]
                }
                
                project_data['subLevels'].append(sublevel)
            else:
                print(f"文件不存在: {pdf_path}")
        
        all_data.append(project_data)
    
    return all_data

if __name__ == '__main__':
    data = extract_all_content()
    
    with open('/workspace/extracted_data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print("\n数据提取完成！共提取了", len(data), "个项目")
    for project in data:
        print(f"  {project['title']}: {len(project['subLevels'])} 个任务")
