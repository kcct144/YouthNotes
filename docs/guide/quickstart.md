---
title: 十分钟入门
---

# 十分钟入门

## 没有电脑或账号，也可以参与

在课堂提出问题、解释思路、提供反例或提交纸质笔记，由老师整理进页面即可。提供固定协作昵称，并与老师核对实际贡献；名单和修改记录不会依据老师的 Git 提交身份替你署名。流程见[协作与审校](./collaboration.md)，填写方法见[贡献者与修改记录](./contributions.md)。

下面的工具与命令面向负责编辑网站的维护者，以及希望直接改文件的同学。

## 1. 准备工具

安装 Git、Node.js 24 LTS，以及一个能编辑 UTF-8 文本的编辑器。pnpm 的版本由根目录 `package.json` 的 `packageManager` 固定。使用已安装 Corepack 的环境时，可以在终端执行 `corepack enable`，让它选择对应版本；没有 Corepack 时请按 [pnpm 官方安装说明](https://pnpm.io/installation)安装。

用老师提供的仓库地址克隆项目，或在编辑器中选择“克隆仓库”，然后打开 `YouthNotes` 文件夹。终端应位于含有 `package.json` 的仓库根目录。

```sh
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm docs:dev
```

打开终端显示的本地网址。编辑并保存 Markdown 后，浏览器会更新。按 `Ctrl+C` 停止服务。

## 2. 完成第一条贡献

先读[一次函数示范](../notes/math/junior/linear-function.md)。第一次可以只改一句解释；准备新建时，把根目录 `templates/note.md` 复制到对应学科目录，例如 `docs/notes/math/junior/your-topic.md`。

替换标题和模板提示，填写适用范围。文件名用简短的英文小写词与连字符，正文使用中文。学段目录不存在时可自行创建，跨学段主题放 `shared/`。新增文章会进入所属学科侧边栏；也可以在学科首页加一条链接帮助大家发现。

先用自己的话讲解，再补例子；不确定的知识写明待核对。不要让模板提示或虚构来源进入成稿。

## 3. 检查并送审

```sh
pnpm docs:check
pnpm docs:build
pnpm docs:preview
```

第一条命令检查页面标题、常规 Markdown 本地链接与图片、ECharts JSON、共建记录和配置及组件类型；第二条执行完整网站构建；第三条预览生产结果。外部链接、链接锚点、图表语义、学科正确性和署名真实性仍需人工核对。

检查通过后，按[协作与审校](./collaboration.md)送审。直接使用 Git 的同学，也可以用图形界面完成分支、提交与 Pull Request。

## 常见问题

- 提示找不到 `pnpm`：完成 pnpm 安装后重新打开终端。
- 提示 Node 版本不支持：切换到项目推荐的 Node.js 24 LTS。
- 找不到图片或页面：检查大小写、相对路径与文件是否已保存；Linux CI 区分大小写。
- 本地看不到共建记录：检查文章顶部是否填写 `noteContributors` 或 `noteChanges`，不需要 Git 提交；详见[填写教程](./contributions.md)。
