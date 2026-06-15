#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新data.js中项目一的任务，添加PDF文件链接和PDF中的关键内容
"""
import re
import os
from PyPDF2 import PdfReader

def extract_pdf_summary(pdf_path, max_chars=1500):
    """提取PDF前部分关键内容作为摘要"""
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages[:5]:  # 只读前5页
            text += page.extract_text() or ""
        # 清理
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
        return text[:max_chars]
    except Exception as e:
        return ""

# 项目一PDF映射
project_one_pdfs = {
    "1.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务一.pdf",
    "1.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务二.pdf",
    "1.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
    "1.4": "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
    "1.5": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "1.6": "assets/教材/《金融产品营销实务》（第三版）项目一任务六.pdf",
}

# 提取每个PDF的关键内容
for task_id, pdf_path in project_one_pdfs.items():
    if os.path.exists(pdf_path):
        print(f"\n=== {task_id} ===")
        summary = extract_pdf_summary(pdf_path)
        # 提取学习目标部分
        if "学习目标" in summary:
            start = summary.find("学习目标")
            end = summary.find("导入案例", start) if "导入案例" in summary[start:] else start + 800
            print(f"学习目标片段: {summary[start:end][:600]}")
