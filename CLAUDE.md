# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 VitePress 和 Teek 主题构建的积木区管理系统官方文档项目。项目使用 Vue 3 + TypeScript，专注于提供企业级 Java 管理系统的技术文档。

## 常用命令

### 开发和构建
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览构建结果

### 开发环境要求
- Node.js 18.0.0+
- 必须先掌握 VitePress 基本使用和 Teek 主题配置

## 项目架构

### 技术栈
- **文档框架**: VitePress 1.6.3
- **主题**: vitepress-theme-teek 1.4.6
- **前端框架**: Vue 3.5.16
- **样式**: Sass 1.89.1
- **图表**: ECharts 5.6.0
- **插件**: vitepress-plugin-llms 1.7.3

### 关键配置文件
- `docs/.vitepress/config.ts` - VitePress 主配置
- `docs/.vitepress/teekConfig.ts` - Teek 主题配置
- `docs/.vitepress/teekConfig.template.ts` - 主题配置模板

### 目录结构
```
docs/
├── 01.指南/           # 使用指南文档
├── 10.配置/           # 配置说明文档
├── @pages/           # 功能页面
├── public/           # 静态资源
└── .vitepress/       # VitePress 配置
    ├── config.ts     # 主配置文件
    ├── teekConfig.ts # 主题配置
    └── theme/        # 主题组件和样式
```

## 核心功能

### Teek 主题特性
- **知识管理**: 支持结构化、碎片化、体系化知识管理
- **自动生成**: 侧边栏、目录页、frontmatter 等自动生成
- **博客功能**: 文章列表、分类、标签、归档等功能
- **主题风格**: 4种布局模式、8种主题风格
- **移动端适配**: 完全响应式设计

### 文档功能
- **Markdown 拓展**: 居中容器、卡片容器、Demo容器等
- **代码块**: 支持折叠展开、语法高亮
- **评论系统**: 支持多种评论提供商
- **搜索功能**: 基于 Algolia 的全文搜索

## Markdown 写法规则

### Frontmatter 配置

#### 基础配置
```yaml
---
title: 文章标题  # 支持HTML标签和Vue组件
date: 2025-03-07 01:16:28  # 创建时间
permalink: /pages/b1ad26  # 永久链接
categories:
  - 分类 1
  - 分类 2
tags:
  - 标签 1
  - 标签 2
---
```

#### 文章增强配置
```yaml
---
# 标题增强
titleTag: 原创  # 或使用组件：<Badge type="tip" text="原创" />

# 文章控制
top: true  # 精选文章
sticky: 1  # 置顶权重
sidebar: true  # 显示侧边栏
article: true  # 是否为文章页
comment: true  # 显示评论

# 文章信息
description: 文章摘要  # 首页列表显示
coverImg: /img/web.png  # 封面图片

# 功能控制
docAnalysis: true  # 站点分析
inCatalogue: true  # 纳入目录
autoTitle: true  # 自动生成H1
articleUpdate: true  # 显示更新栏
inHomePost: true  # 首页显示

# 侧边栏控制
sidebarSort: 9999  # 排序权重
sidebarPrefix: ""  # 标题前缀
sidebarSuffix: ""  # 标题后缀

# 主题增强
layoutMode: bothWidthAdjustable  # 布局模式
themeColorName: ep-blue  # 主题风格
spotlight: false  # 聚光灯效果
---
```

### 特殊容器语法

#### 标准容器（VitePress 内置）
```markdown
::: tip 提示标题
提示内容
:::

::: warning 警告标题
警告内容
:::

::: danger 危险标题
危险内容
:::

::: info 信息标题
信息内容
:::

::: details 详细信息标题
详细信息内容
:::
```

#### Teek 自定义容器
```markdown
::: note
笔记内容
:::

::: center
居中内容
:::

::: right
居右内容
:::
```

#### 功能容器
```markdown
::: shareCard 3
```yaml
- name: 名称
  desc: 描述
  avatar: https://xxx.jpg
  link: https://xxx/
  bgColor: "#CBEAFA"
  textColor: "#6854A1"
```
:::

::: imgCard 2
```yaml
- img: https://xxx.jpg
  link: https://xxx.com
  name: 标题
  desc: 描述
  author: 作者
  avatar: https://xxx.jpg
```
:::

::: navCard
```yaml
- name: 标题
  desc: 描述
  link: 链接
  img: 图片
  badge: 徽章
  badgeType: tip
```
:::

::: video bilibili
BV11e411m7e8
:::
```

### 代码块增强

#### 基础代码块
```markdown
```javascript
console.log('Hello Teek');
```
```

#### 代码组
```markdown
::: code-group

```javascript [JavaScript]
console.log('Hello');
```

```typescript [TypeScript]
console.log('Hello');
```

:::
```

### 图片和链接处理

#### 图片语法
```markdown
![图片描述](/img/logo.png){width=200 height=100}

![图片描述](https://example.com/img.png){loading=lazy}
```

#### 链接语法
```markdown
[链接文本](https://example.com)

[链接文本](/internal/path)
```

### 自定义组件使用

#### 全局组件
```markdown
<Badge type="tip" text="v1.3.0" />

<TkIcon icon="simple-icons:gitee" color="var(--tk-theme-color)" />
```

#### 在 Frontmatter 中使用组件
```yaml
---
title: 文章标题 <Badge type="tip" text="原创" />
---
```

### 写作规范建议

#### 空格规范
- 中英文之间加空格：`在 LeanCloud 上`
- 中文与数字之间加空格：`花费了 5000 元`
- 数字与单位之间不加空格：`10Gbps`

#### 标点符号
- 使用全角中文标点：`，。？「」`
- 使用直角引号：`「引用内容」`
- 不重复使用标点符号

#### 排版建议
- 有序/无序列表末尾不加标点
- 加粗文字与标点符号的正确组合
- 链接之间增加空格

## 开发注意事项

### 主题配置
- 所有 Teek 主题配置都在 `teekConfig.ts` 中
- 主题配置继承自 `vitepress-theme-teek`
- 支持自定义主题风格和布局

### 内容组织
- 文档按功能模块分类存放
- 使用数字前缀保持目录排序
- 支持 frontmatter 配置页面属性

### 样式开发
- 使用 Sass 作为 CSS 预处理器
- 主题样式在 `.vitepress/theme/styles/` 目录
- 支持自定义 CSS 变量和主题色彩

### 组件开发
- 自定义组件放在 `.vitepress/theme/components/` 目录
- 遵循 Vue 3 Composition API 规范
- 支持 TypeScript 类型定义

## 部署相关
- 构建输出到 `docs/.vitepress/dist/` 目录
- 支持静态站点部署
- 配置了 sitemap 生成
- 支持搜索引擎优化

## 特殊配置
- 使用 Algolia 搜索服务
- 集成 GitHub 编辑链接
- 支持多语言配置（主要中文）
- 配置了社交媒体链接和分享功能