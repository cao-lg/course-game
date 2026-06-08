#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取PDF教材内容并生成网站数据
"""

import os
import re
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
    # 移除多余空白
    text = re.sub(r'\s+', ' ', text)
    # 移除特殊字符
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
    return text.strip()

def parse_content(text):
    """解析内容为知识点"""
    lines = text.split('。')
    points = []
    for line in lines:
        line = line.strip()
        if len(line) > 10:  # 过滤太短的行
            points.append(line)
    return points

# 定义文件映射
pdf_files = [
    ("项目二任务一", "assets/教材/《金融产品营销实务》第三版项目二任务一.pdf"),
    ("项目二任务二", "assets/教材/《金融产品营销实务》第三版项目二任务二.pdf"),
    ("项目二任务三", "assets/教材/《金融产品营销实务》第三版项目二任务三.pdf"),
    ("项目二任务四", "assets/教材/《金融产品营销实务》第三版项目二任务四.pdf"),
    ("项目三任务一", "assets/教材/《金融产品营销实务》第三版项目三任务一.pdf"),
    ("项目三任务二", "assets/教材/《金融产品营销实务》第三版项目三任务二.pdf"),
    ("项目三任务三", "assets/教材/《金融产品营销实务》第三版项目三任务三.pdf"),
    ("项目四任务一", "assets/教材/《金融产品营销实务》第三版项目四任务一.pdf"),
    ("项目四任务二", "assets/教材/《金融产品营销实务》第三版项目四任务二.pdf"),
    ("项目四任务三", "assets/教材/《金融产品营销实务》第三版项目四任务三.pdf"),
    ("项目五任务一", "assets/教材/《金融产品营销实务》第三版项目五任务一.pdf"),
    ("项目五任务二", "assets/教材/《金融产品营销实务》第三版项目五任务二.pdf"),
    ("项目五任务三", "assets/教材/《金融产品营销实务》第三版项目五任务三.pdf"),
    ("项目五任务四", "assets/教材/《金融产品营销实务》第三版项目五任务四.pdf"),
    ("项目五任务五", "assets/教材/《金融产品营销实务》第三版项目五任务五.pdf"),
    ("项目五任务六", "assets/教材/《金融产品营销实务》第三版项目五任务六.pdf"),
    ("项目六任务一", "assets/教材/《金融产品营销实务》第三版项目六任务一.pdf"),
    ("项目六任务二", "assets/教材/《金融产品营销实务》第三版项目六任务二.pdf"),
    ("项目六任务三", "assets/教材/《金融产品营销实务》第三版项目六任务三.pdf"),
    ("项目七任务一", "assets/教材/《金融产品营销实务》（第三版）项目七任务一.pdf"),
    ("项目七任务二", "assets/教材/《金融产品营销实务》（第三版）项目七任务二.pdf"),
    ("项目七任务三", "assets/教材/《金融产品营销实务》（第三版）项目七任务三.pdf"),
    ("项目八任务一", "assets/教材/《金融产品营销实务》（第三版）项目八任务一.pdf"),
    ("项目八任务二", "assets/教材/《金融产品营销实务》（第三版）项目八任务二.pdf"),
    ("项目八任务三", "assets/教材/《金融产品营销实务》（第三版）项目八任务三.pdf"),
    ("项目九任务一", "assets/教材/《金融产品营销实务》第三版项目九任务一.pdf"),
    ("项目九任务二", "assets/教材/《金融产品营销实务》第三版项目九任务二.pdf"),
    ("项目九任务三", "assets/教材/《金融产品营销实务》第三版项目九任务三.pdf"),
]

# 提取所有内容
all_content = {}
for name, path in pdf_files:
    if os.path.exists(path):
        print(f"处理: {name}")
        content = extract_pdf_content(path)
        cleaned = clean_text(content)
        all_content[name] = cleaned
    else:
        print(f"文件不存在: {path}")

# 输出前100个字符作为预览
for name, content in list(all_content.items())[:3]:
    print(f"\n{name} 预览 (前500字符):")
    print(content[:500])
    print("...")
