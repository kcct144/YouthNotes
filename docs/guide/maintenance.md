---
title: 维护指南
---

# 维护指南

## 目录与主题配置

- `docs/.vuepress/config.ts`：构建、搜索、公式和图表能力，以及共建记录校验。
- `docs/.vuepress/plume.config.ts`：显示设置；`collections.ts`：学科与侧边栏；`navbar.ts`：导航。
- `docs/.vuepress/math-junior-sidebar.ts`：初中数学的六大专题目录与阅读顺序。
- `docs/.vuepress/theme/styles/custom.css`：主题色和三类笔记配色。
- `docs/.vuepress/plugins/note-headings.ts`：识别二级标题开头的三类 `【…】` 标记并添加配色类，正文与目录保留原有文字。
- `docs/.vuepress/note-outline.ts`：将正文标题的分类同步到“此页内容”目录，兼容页面切换和按需展开的下拉菜单。
- `docs/.vuepress/theme/components/NoteContributors.vue`、`NoteChangelog.vue`：贡献者名单与修改记录组件。
- `docs/.vuepress/theme/layouts/NoteLayout.vue`：通过 Plume 的正文后插槽自动展示共建记录；`shared/note-records.ts` 统一定义数据及校验规则。
- `.agents/skills/`、`templates/`、根目录说明、临时目录不参与网站构建。

每个学科的初中、高中是独立的 Plume 文档集合，各自拥有标题、侧边栏和前后篇导航；跨学段内容也独立收录。顶部“初中笔记”“高中笔记”分别进入对应学段。

新增学科时在 `collections.ts` 的 `subjects` 加一项，创建学科首页及 `junior/README.md`、`senior/README.md` 两个学段入口，并更新学科目录页。笔记放入对应的 `junior/`、`senior/` 或跨学段的 `shared/`，由各自集合的侧边栏自动收录。初中数学沿用迁入笔记的专题结构，新增或移动页面时需同步维护 `math-junior-sidebar.ts` 与阅读导览。默认不自动写入 frontmatter，网站地址来自目录与文件名。

## 贡献者名单与修改记录

文章使用独立的 `noteContributors` 和 `noteChanges` 字段保存真实共建记录，组件自动显示在正文下方。名单记录昵称与实际贡献；修改记录区分内容贡献者和可选的 `recordedBy` 代录人，不需要学生账号。数据格式、例子与移动文章的约定见[填写教程](./contributions.md)。

两个字段都省略时隐藏整块记录；空列表显示待填写状态。有记录时贡献者按填写顺序显示，历史按日期倒序显示，较早的记录可展开。日期保持原样，不受浏览器时区影响；同一天的条目保留填写顺序。

`scripts/check-content.mjs` 与 `plugins/note-records.ts` 共用校验逻辑，检查数据格式、日历日期、重复昵称，以及修改记录里的贡献者是否列入名单。Vue 组件用 `vue-tsc` 检查类型。资料真实性仍由师生核对。

已关闭主题基于 Git 的贡献者、变更历史和更新时间显示，避免把代录者的提交误当作学生署名。Git 保留版本管理与回退用途。移动文章时保留顶部记录；拆分与合并时按实际内容维护名单与历史。不会自动从提交记录、AI 输出或录入人身份补造贡献。

## 仓库地址、分支和子路径

当前未配置远程仓库，不生成虚构的编辑链接。以下参数可作为构建进程的环境变量传入：

| 参数 | 默认值 | 用途 |
| --- | --- | --- |
| `DOCS_REPO` | 未设置 | 真实仓库网页地址，用于编辑链接 |
| `DOCS_BRANCH` | `master` | 笔记所在分支；改用 `main` 时同步修改 |
| `DOCS_BASE` | `/` | 站点路径；项目 Pages 通常是 `/仓库名/`，必须以 `/` 开头和结尾 |

PowerShell 示例（请先换成真实仓库地址）：

```powershell
$env:DOCS_REPO = 'https://github.com/你的组织/你的仓库'
$env:DOCS_BRANCH = 'master'
$env:DOCS_BASE = '/你的仓库/'
pnpm docs:build
```

本项目未加载 dotenv；仅新建 `.env` 不会自动生效。可以改为在 `config.ts` 中填写团队确定的值，或在 CI 中传入；不要提交令牌等秘密。

## CI 与手动部署

`.github/workflows/check.yml` 对 PR 及主分支推送执行安装、检查与构建。`.github/workflows/deploy.yml` 保留手动部署入口，从选择的分支构建并推送到 `gh-pages`；初始化本身不会发布网站。

维护者准备发布时，在 GitHub 仓库设置中允许 Actions 写入仓库，并把 Pages 的 Source 设置为 `Deploy from a branch`、分支选择 `gh-pages`。在仓库 Actions 中手动运行部署，首次成功后会出现该分支。

部署工作流从仓库信息生成 `DOCS_REPO`，从所选分支生成 `DOCS_BRANCH`。仓库变量 `DOCS_BASE` 可覆盖默认路径：普通项目仓库默认 `/仓库名/`；用户站点或使用根路径的自定义域名应设为 `/`。需要自定义域名时，在 `docs/.vuepress/public/CNAME` 写入已配置的真实域名。

## 首次交接仍需确定的事项

远程仓库地址、最终主分支、发布地址、内容许可和审阅分工由师生确定后补充。现有 `package.json` 继承了模板的 MIT 字段，不代表教材、试题或笔记已经获得同样的授权。

## 参考项目

`D:\code\YouthNote` 的学科手册为本项目提供了参考。初中数学笔记与实际引用的配图已复制进 `docs/notes/math/junior/`，链接使用当前项目的相对路径；例题卡片、解析与插图样式由 `subject-handbook.css` 提供，附带许可说明在 `LICENSES/YouthNote-MIT.txt`。本项目能独立克隆和构建；后续需要交互题目时，再单独核对组件依赖与适配。
