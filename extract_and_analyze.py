#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取和分析28个PDF教材文件，生成结构化的内容摘要
"""

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
    """清理文本内容"""
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
    return text.strip()

def extract_learning_objectives(text):
    """提取学习目标"""
    objectives = []
    keywords = ['学习目标', '知识目标', '能力目标', '素养目标', '目标', '目的']
    for keyword in keywords:
        if keyword in text:
            start_idx = text.find(keyword)
            end_idx = find_next_section_end(text, start_idx)
            if end_idx > start_idx:
                segment = text[start_idx:end_idx]
                objectives.append(clean_text(segment))
    return '; '.join(objectives) if objectives else '根据PDF内容学习相关知识点'

def extract_concepts(text):
    """提取核心概念"""
    concepts = []
    keywords = ['核心概念', '概念', '定义', '概念界定', '基本概念']
    for keyword in keywords:
        if keyword in text:
            start_idx = text.find(keyword)
            end_idx = find_next_section_end(text, start_idx)
            if end_idx > start_idx:
                segment = text[start_idx:end_idx]
                concepts.append(clean_text(segment))
    return '; '.join(concepts) if concepts else '从PDF内容中识别并掌握金融产品营销相关的核心概念'

def extract_key_skills(text):
    """提取关键技能"""
    skills = []
    keywords = ['关键技能', '技能', '能力', '操作', '实践']
    for keyword in keywords:
        if keyword in text:
            start_idx = text.find(keyword)
            end_idx = find_next_section_end(text, start_idx)
            if end_idx > start_idx:
                segment = text[start_idx:end_idx]
                skills.append(clean_text(segment))
    return '; '.join(skills) if skills else '从PDF内容中掌握金融产品营销相关的关键技能'

def extract_key_points(text):
    """提取重点难点"""
    points = []
    keywords = ['重点', '难点', '重点难点', '重点与难点']
    for keyword in keywords:
        if keyword in text:
            start_idx = text.find(keyword)
            end_idx = find_next_section_end(text, start_idx)
            if end_idx > start_idx:
                segment = text[start_idx:end_idx]
                points.append(clean_text(segment))
    return '; '.join(points) if points else '从PDF内容中识别并掌握金融产品营销相关的重点和难点'

def find_next_section_end(text, start):
    """查找下一个章节的结束位置"""
    section_markers = ['任务', '导入案例', '任务描述', '任务分析', '知识准备', '案例', '思考与练习', '小结', '参考文献']
    min_pos = len(text)
    for marker in section_markers:
        pos = text.find(marker, start + 1)
        if pos != -1 and pos < min_pos:
            min_pos = pos
    return min_pos if min_pos != len(text) else start + 1000

# 定义28个PDF文件的路径和名称
pdf_files = [
    # 项目二
    ("项目二任务一", "assets/教材/《金融产品营销实务》第三版项目二任务一.pdf"),
    ("项目二任务二", "assets/教材/《金融产品营销实务》第三版项目二任务二.pdf"),
    ("项目二任务三", "assets/教材/《金融产品营销实务》第三版项目二任务三.pdf"),
    ("项目二任务四", "assets/教材/《金融产品营销实务》第三版项目二任务四.pdf"),
    # 项目三
    ("项目三任务一", "assets/教材/《金融产品营销实务》第三版项目三任务一.pdf"),
    ("项目三任务二", "assets/教材/《金融产品营销实务》第三版项目三任务二.pdf"),
    ("项目三任务三", "assets/教材/《金融产品营销实务》第三版项目三任务三.pdf"),
    # 项目四
    ("项目四任务一", "assets/教材/《金融产品营销实务》第三版项目四任务一.pdf"),
    ("项目四任务二", "assets/教材/《金融产品营销实务》第三版项目四任务二.pdf"),
    ("项目四任务三", "assets/教材/《金融产品营销实务》第三版项目四任务三.pdf"),
    # 项目五
    ("项目五任务一", "assets/教材/《金融产品营销实务》第三版项目五任务一.pdf"),
    ("项目五任务二", "assets/教材/《金融产品营销实务》第三版项目五任务二.pdf"),
    ("项目五任务三", "assets/教材/《金融产品营销实务》第三版项目五任务三.pdf"),
    ("项目五任务四", "assets/教材/《金融产品营销实务》第三版项目五任务四.pdf"),
    ("项目五任务五", "assets/教材/《金融产品营销实务》第三版项目五任务五.pdf"),
    ("项目五任务六", "assets/教材/《金融产品营销实务》第三版项目五任务六.pdf"),
    # 项目六
    ("项目六任务一", "assets/教材/《金融产品营销实务》第三版项目六任务一.pdf"),
    ("项目六任务二", "assets/教材/《金融产品营销实务》第三版项目六任务二.pdf"),
    ("项目六任务三", "assets/教材/《金融产品营销实务》第三版项目六任务三.pdf"),
    # 项目七
    ("项目七任务一", "assets/教材/《金融产品营销实务》（第三版）项目七任务一.pdf"),
    ("项目七任务二", "assets/教材/《金融产品营销实务》（第三版）项目七任务二.pdf"),
    ("项目七任务三", "assets/教材/《金融产品营销实务》（第三版）项目七任务三.pdf"),
    # 项目八
    ("项目八任务一", "assets/教材/《金融产品营销实务》（第三版）项目八任务一.pdf"),
    ("项目八任务二", "assets/教材/《金融产品营销实务》（第三版）项目八任务二.pdf"),
    ("项目八任务三", "assets/教材/《金融产品营销实务》（第三版）项目八任务三.pdf"),
    # 项目九
    ("项目九任务一", "assets/教材/《金融产品营销实务》第三版项目九任务一.pdf"),
    ("项目九任务二", "assets/教材/《金融产品营销实务》第三版项目九任务二.pdf"),
    ("项目九任务三", "assets/教材/《金融产品营销实务》第三版项目九任务三.pdf")
]

# 提取和处理所有PDF文件
results = []

print("开始提取和分析PDF文件...")
for name, path in pdf_files:
    print(f"处理: {name}")
    if os.path.exists(path):
        full_path = os.path.abspath(path)
        content = extract_pdf_content(path)
        cleaned_content = clean_text(content)
        
        # 提取结构化信息
        learning_objectives = extract_learning_objectives(content)
        core_concepts = extract_concepts(content)
        key_skills = extract_key_skills(content)
        key_points = extract_key_points(content)
        
        result = {
            "pdf_path": path,
            "extracted_text": cleaned_content,
            "learning_objectives": learning_objectives,
            "core_concepts": core_concepts,
            "key_skills": key_skills,
            "key_points": key_points
        }
        results.append(result)
        print(f"✓ {name} 处理完成")
    else:
        print(f"✗ 文件不存在: {path}")

# 保存为JSON文件
output_file = "structured_pdf_content.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"\n处理完成！共处理 {len(results)} 个PDF文件")
print(f"结果已保存到: {output_file}")
