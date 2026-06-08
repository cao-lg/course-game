#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成完整的教学内容与测试题文档
"""

import re
import json

def parse_data_js(file_path):
    """解析data.js文件，提取学习内容"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 移除前导的const声明，只保留数组
    start = content.find('[')
    end = content.rfind('];') + 1
    json_content = content[start:end]
    
    # 将JavaScript对象转换为有效JSON
    json_content = re.sub(r'([{,])\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', json_content)
    
    return json.loads(json_content)

def generate_quiz_type(quiz_type):
    """将题目类型转换为中文"""
    type_map = {
        'single': '单选题',
        'multiple': '多选题',
        'judge': '判断题',
        'select-matching': '配对题',
        'matching': '匹配题',
        'ordering': '排序题',
        'case': '案例分析题'
    }
    return type_map.get(quiz_type, quiz_type)

def generate_markdown_document(levels_data):
    """生成Markdown文档"""
    doc = []
    doc.append("# 金融产品营销实务 - 完整教学内容与测试题库\n")
    doc.append("## 目录\n")
    
    # 生成目录
    for idx, level in enumerate(levels_data):
        doc.append(f"{idx + 1}. [{level['title']}](#项目-{idx + 1}-{level['title'].replace(' ', '-')})\n")
        for sub_idx, sub_level in enumerate(level.get('subLevels', [])):
            doc.append(f"   {idx + 1}.{sub_idx + 1} [{sub_level['title']}](#{idx + 1}{sub_idx + 1}-{sub_level['title'].replace(' ', '-')})\n")
    
    doc.append("\n---\n")
    
    # 生成每个项目的详细内容
    for level_idx, level in enumerate(levels_data):
        doc.append(f"\n## 项目 {level_idx + 1}：{level['title']}\n")
        doc.append(f"**说明**：{level['description']}\n")
        
        for sub_idx, sub_level in enumerate(level.get('subLevels', [])):
            doc.append(f"\n### {level_idx + 1}.{sub_idx + 1} {sub_level['title']}\n")
            doc.append(f"**任务说明**：{sub_level['description']}\n")
            
            # 学习内容
            doc.append("\n#### 📚 学习内容\n")
            for knowledge in sub_level.get('knowledge', []):
                doc.append(f"\n##### {knowledge['title']}\n")
                doc.append(f"{knowledge['content']}\n")
                
                # 知识点
                if knowledge.get('points'):
                    doc.append("\n**知识点：**\n")
                    for point in knowledge['points']:
                        doc.append(f"- **{point['title']}**：{point['text']}\n")
            
            # 测试题
            doc.append("\n#### 📝 测试题\n")
            for quiz_idx, quiz in enumerate(sub_level.get('quiz', []), 1):
                doc.append(f"\n**{quiz_idx}. [{generate_quiz_type(quiz['type'])}] {quiz['question']}**\n")
                
                # 选项
                if quiz.get('options'):
                    if quiz['type'] == 'select-matching' or quiz['type'] == 'matching':
                        doc.append("**配对选项：**\n")
                        for opt_idx, opt in enumerate(quiz['options'], 1):
                            doc.append(f"{opt_idx}. {opt['left']} —— {opt['right']}\n")
                    else:
                        for opt_idx, opt in enumerate(quiz['options'], 1):
                            doc.append(f"   {opt_idx}. {opt}\n")
                
                # 答案和解析
                doc.append(f"\n**答案**：")
                if 'answer' in quiz:
                    if isinstance(quiz['answer'], list):
                        doc.append(", ".join([str(a + 1) for a in quiz['answer']]))
                    elif isinstance(quiz['answer'], int):
                        doc.append(str(quiz['answer'] + 1))
                    else:
                        doc.append(str(quiz['answer']))
                else:
                    doc.append("见解析")
                
                if 'explanation' in quiz:
                    doc.append(f"\n**解析**：{quiz['explanation']}\n")
        
        doc.append("\n---\n")
    
    return "\n".join(doc)

def main():
    """主函数"""
    print("🔄 正在解析data.js文件...")
    levels_data = parse_data_js('/workspace/js/data.js')
    
    print("📝 正在生成Markdown文档...")
    document = generate_markdown_document(levels_data)
    
    # 保存文档
    output_path = '/workspace/金融产品营销实务-完整教学内容与测试题库.md'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(document)
    
    print(f"✅ 文档生成成功！共 {len(levels_data)} 个项目")
    print(f"📄 文档位置：{output_path}")

if __name__ == '__main__':
    main()
