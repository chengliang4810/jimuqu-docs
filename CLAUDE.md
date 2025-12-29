# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

积木区官方文档项目 - 基于 VitePress 构建的中文技术文档站点。

## 开发命令

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 核心依赖

- **VitePress** (^1.6.3): 静态站点生成器
- **vitepress-theme-teek** (^1.5.0): 定制化主题，扩展了默认 VitePress 主题
- **Mermaid** (^11.12.0): 图表和流程图支持
- **vitepress-plugin-llms** (^1.7.3): LLM 相关插件
- **vitepress-plugin-mermaid** (^2.0.17): Mermaid 集成插件
- **Vue** (^3.5.16): 前端框架
- **sass** (^1.89.1): CSS 预处理器

## 项目结构

```
docs/
├── .vitepress/
│   ├── config.ts              # VitePress 主配置文件
│   ├── teekConfig.ts          # Teek 主题配置
│   ├── theme/
│   │   ├── index.ts           # 主题入口，引入 Teek 样式和自定义组件
│   │   ├── components/        # 自定义 Vue 组件
│   │   └── styles/            # 自定义样式 (SCSS)
│   ├── dist/                  # 构建输出目录
│   └── cache/                 # VitePress 缓存
├── 01.指南/
│   ├── 01.简介/
│   └── 10.使用/
├── public/                    # 静态资源
└── index.md                   # 站点首页
```

## 配置说明

### 主配置 (config.ts)
- 继承 `teekConfig` 作为基础配置
- 搜索功能使用 Algolia (索引名: "doc")
- Sitemap 域名: https://doc.jimuqu.com
- GitHub 仓库: https://github.com/chengliang4810/jimuqu-docs

### 主题配置 (teekConfig.ts)
- 使用 `vitepress-theme-teek` 的 `defineTeekConfig` 定义
- 启用了 Mermaid Markdown 支持
- 侧边栏配置: `initItems: false`

### 主题入口 (theme/index.ts)
- 扩展 `Teek` 主题
- 自定义 `Layout` 组件: `TeekLayoutProvider`
- 引入多个 Teek 主题样式优化文件

## 主题样式

项目使用了 Teek 主题的多项样式优化:
- `tk-code-block-mobile.css` - 移动端代码块样式
- `tk-sidebar.css` - 侧边栏优化
- `tk-nav.css` - 导航栏优化
- `tk-doc-h1-gradient.css` - H1 标题渐变色
- `tk-table.css` - 表格样式调整
- `tk-index-rainbow.css` - 首页彩虹动画

## 自定义组件

- `404.vue` - 自定义 404 页面
- `ContributeChart.vue` - 贡献图表组件
- `TeekLayoutProvider.vue` - 布局提供者组件

## Markdown 功能

- 开启行号显示
- 图片懒加载启用
- 自定义容器标签 (提示/警告/危险/信息)
- Mermaid 图表支持 (通过 `vitepress-plugin-mermaid`)
- 本地代码演示支持 (配置了 GitHub 源码链接)
