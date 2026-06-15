#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取项目一6个PDF的关键内容
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
    """清理文本"""
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
    return text.strip()

# 项目一6个任务PDF
project_one_pdfs = [
    ("1.1", "《金融产品营销实务》（第三版）项目一任务一.pdf", "金融与金融机构认知", ["金融的含义与本质", "金融机构的分类", "政策性银行与商业银行的区别"]),
    ("1.2", "《金融产品营销实务》（第三版）项目一任务二.pdf", "金融产品的层次与特征", ["金融产品的三个层次", "金融产品的七大特征", "金融产品分类"]),
    ("1.3", "《金融产品营销实务》（第三版）项目一任务三.pdf", "金融产品营销基础", ["营销理念演变 4P→4C→7P→4E", "金融产品营销特征", "营销人员职业素养"]),
    ("1.4", "《金融产品营销实务》（第三版）项目一任务四.pdf", "金融营销环境分析", ["PESTEL宏观环境分析", "波特五力微观环境分析", "SWOT分析与战略选择"]),
    ("1.5", "《金融产品营销实务》（第三版）项目一任务五.pdf", "金融营销目标市场策略", ["金融市场细分", "目标市场选择", "市场定位"]),
    ("1.6", "《金融产品营销实务》（第三版）项目一任务六.pdf", "金融营销 4P 策略与营销方案策划", ["产品策略", "价格策略", "促销策略", "分销策略", "营销方案策划流程", "综合实战训练"]),
]

print("=" * 80)
print("项目一6个任务PDF内容提取")
print("=" * 80)

for task_id, filename, task_title, points in project_one_pdfs:
    path = os.path.join("assets/教材", filename)
    print(f"\n【{task_id} {task_title}】")
    print(f"文件: {filename}")
    print(f"路径: {path}")
    print(f"存在: {os.path.exists(path)}")
    if os.path.exists(path):
        content = extract_pdf_content(path)
        cleaned = clean_text(content)
        print(f"内容长度: {len(cleaned)} 字符")
        print(f"前800字符: {cleaned[:800]}")
        print("-" * 80)
