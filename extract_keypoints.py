#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从所有教材PDF中提取关键内容，生成思维导图笔记
"""
import os
import re
import json
from PyPDF2 import PdfReader

def extract_pdf_text(pdf_path, max_pages=8):
    """提取PDF前几页文本"""
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages[:max_pages]:
            text += page.extract_text() or ""
        # 清理
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
        return text
    except Exception as e:
        return ""

def extract_key_points(text):
    """从文本中提取关键要点"""
    points = []
    # 移除"导入案例"、"任务描述"等非核心内容
    # 重点提取"知识准备"后面的核心知识点
    sections = re.split(r'(知识准备|核心概念|学习目标|学习要点|核心要点)', text)
    if len(sections) > 1:
        knowledge_section = sections[-1]  # 最后一个知识准备部分
        # 提取关键定义和概念
        sentences = re.split(r'[。！？]', knowledge_section)
        for sent in sentences[:15]:
            sent = sent.strip()
            if 20 < len(sent) < 200 and not any(skip in sent for skip in ['案例', '资料来源', 'http', 'www', '.com', '.cn', '导入']):
                if any(keyword in sent for keyword in ['是指', '是', '包括', '通过', '具有', '需要', '应当', '可以', '分为', '类型', '特点', '原则', '作用', '因素', '环境', '营销', '产品', '客户', '市场', '策略']):
                    points.append(sent[:150])
                    if len(points) >= 8:
                        break
    return points

# 提取项目二到项目九的所有PDF
pdf_base = "/workspace/assets/教材"
project_files = {
    "2.1": "《金融产品营销实务》第三版项目二任务一.pdf",
    "2.2": "《金融产品营销实务》第三版项目二任务二.pdf",
    "2.3": "《金融产品营销实务》第三版项目二任务三.pdf",
    "2.4": "《金融产品营销实务》第三版项目二任务四.pdf",
    "3.1": "《金融产品营销实务》第三版项目三任务一.pdf",
    "3.2": "《金融产品营销实务》第三版项目三任务二.pdf",
    "3.3": "《金融产品营销实务》第三版项目三任务三.pdf",
    "4.1": "《金融产品营销实务》第三版项目四任务一.pdf",
    "4.2": "《金融产品营销实务》第三版项目四任务二.pdf",
    "4.3": "《金融产品营销实务》第三版项目四任务三.pdf",
    "5.1": "《金融产品营销实务》第三版项目五任务一.pdf",
    "5.2": "《金融产品营销实务》第三版项目五任务二.pdf",
    "5.3": "《金融产品营销实务》第三版项目五任务三.pdf",
    "5.4": "《金融产品营销实务》第三版项目五任务四.pdf",
    "5.5": "《金融产品营销实务》第三版项目五任务五.pdf",
    "5.6": "《金融产品营销实务》第三版项目五任务六.pdf",
    "6.1": "《金融产品营销实务》第三版项目六任务一.pdf",
    "6.2": "《金融产品营销实务》第三版项目六任务二.pdf",
    "6.3": "《金融产品营销实务》第三版项目六任务三.pdf",
    "7.1": "《金融产品营销实务》第三版项目七任务一.pdf",
    "7.2": "《金融产品营销实务》第三版项目七任务二.pdf",
    "7.3": "《金融产品营销实务》第三版项目七任务三.pdf",
    "8.1": "《金融产品营销实务》第三版项目八任务一.pdf",
    "8.2": "《金融产品营销实务》第三版项目八任务二.pdf",
    "8.3": "《金融产品营销实务》第三版项目八任务三.pdf",
    "9.1": "《金融产品营销实务》第三版项目九任务一.pdf",
    "9.2": "《金融产品营销实务》第三版项目九任务二.pdf",
    "9.3": "《金融产品营销实务》第三版项目九任务三.pdf",
}

all_points = {}
for sub_id, filename in pdf_files.items():
    pdf_path = os.path.join(pdf_base, filename)
    if os.path.exists(pdf_path):
        text = extract_pdf_text(pdf_path, max_pages=4)
        points = extract_key_points(text)
        all_points[sub_id] = points[:5]
    else:
        all_points[sub_id] = []

# 保存到文件
with open("/workspace/pdf_key_points.json", "w", encoding="utf-8") as f:
    json.dump(all_points, f, ensure_ascii=False, indent=2)

# 打印统计
for sub_id, points in all_points.items():
    print(f"\n=== {sub_id} ===")
    for p in points:
        print(f"  - {p[:100]}")
