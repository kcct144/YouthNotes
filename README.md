# 青春共笔 · YouthNotes

老师与学生共同维护的初高中学科笔记 Wiki。当前公开入口：初中为数学、物理、化学、英语、历史，高中为数学、物理、化学、英语、生物，并持续积累通用学习方法；其他学科的已有页面与旧网址保留，不作为当前主要入口。基于 VuePress 2 与 Plume。

## 开始使用

安装 Node.js 24 LTS 和项目 `packageManager` 指定版本的 pnpm，然后在仓库根目录运行：

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

提交前运行：

```sh
pnpm docs:check
pnpm docs:build
```

`pnpm docs:preview` 可预览生产构建。详细步骤见[学生入门](docs/guide/quickstart.md)，贡献流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 内容与工具

- `docs/notes/<学科>/`：学科入口；`junior/`（初中）、`senior/`（高中）分别是独立笔记集合，`shared/` 单独收录跨学段内容。不按未经确认的教材版本强行分年级。
- `docs/methods/`：学习方法；`docs/guide/`：共建教程与维护说明。
- `templates/note.md`：笔记模板；[一次函数示范](docs/notes/math/junior/linear-function.md)展示同页“知识点 / 考点 / 坑点”。
- `.agents/skills/`：仓库自带的写作、审校和理科图表 skills；[使用教程](docs/guide/ai-skills.md)。
- `docs/.vuepress/`：主题、导航与样式；`scripts/`：内容检查。

已启用本地搜索、KaTeX（含化学式）、Mermaid、ECharts，以及独立的贡献者名单与修改记录组件。署名数据与文章一起保存，不依赖账号、文件路径或 Git 提交者。填写方法见[贡献记录教程](docs/guide/contributions.md)，图表写法见[公式与图表](docs/guide/math-and-charts.md)。

## 协作与维护

学生可通过课堂讨论、纸笔材料或老师约定的方式贡献内容，由维护者整理与代录。文章的 `noteContributors` 记录协作昵称及具体贡献，`noteChanges` 区分内容贡献者与代录人。组件在正文下方自动展示；没有真实资料时保持空列表，不虚构署名。会使用 Git 的同学仍可通过 PR 协作。

CI 会检查内容、贡献记录格式、组件类型和完整构建；PR 只检查，`master` 推送在检查通过后经 SSH 自动部署到服务器，并保留手动入口。Git 用于版本管理与回退。仓库地址、发布策略和首次上线检查见[维护指南](docs/guide/maintenance.md)。参考项目 `D:\code\YouthNote` 仅供查阅，本仓库不依赖其本地文件。

内容许可尚待师生共同确定；不要把 `package.json` 中的工具包许可证字段当作转载教材、试题或图片的授权。
