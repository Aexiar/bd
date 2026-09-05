---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
lang: zh-CN
title: 许大仙的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

# 指定要为当前页面注入的额外头标签。将附加在站点级配置注入的头标签之后
head:
  - - meta
    - name: description
      content: 许大仙前端、Java、大数据、云原生
  - - meta
    - name: keywords
      content: 许大仙，许大仙的博客

hero:
  name: "大数据"
  text: "海量、多样、实时"
  image:  # text 和 tagline 区域旁的图片
    src: /logo.svg
    alt: "许大仙"
  # 按钮相关
  actions:
    - theme: brand
      text: "🏠首页"
      link: "/"
    - theme: alt
      text: "🎉快速开始"
      link: "/guide"

# 按钮下方的描述
features:
  - icon: 🗄️
    title: "数据底座"
    details: "从 Linux、Java 和数据库开始，理解大数据平台赖以运行的基础能力。"
  - icon: ⚡
    title: "批流计算"
    details: "串联 Hadoop、Spark 与 Flink，掌握离线计算和实时处理的核心原理。"
  - icon: 🧭
    title: "生态实践"
    details: "覆盖采集、存储、计算、调度与治理，沉淀可复用的大数据工程经验。"
---
