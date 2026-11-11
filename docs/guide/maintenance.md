---
title: 维护指南
---

# 维护指南

## 目录与主题配置

- `docs/.vuepress/config.ts`：构建、搜索、公式和图表能力，以及共建记录校验。
- `docs/.vuepress/plume.config.ts`：显示设置；`collections.ts`：学科与侧边栏；`navbar.ts`：导航。
- `docs/.vuepress/math-junior-sidebar.ts`：初中数学的六大专题目录与阅读顺序。
- `docs/.vuepress/theme/styles/custom.css`：主题色和三类笔记配色。
- `docs/.vuepress/plugins/note-headings.ts`：识别 h2–h6 开头的三类 `【…】` 标记，分类与标题等级无关；正文原文和锚点不改。
- `docs/.vuepress/note-outline.ts`：将正文标题的分类同步到“此页内容”目录，兼容页面切换和按需展开的下拉菜单。
- `docs/.vuepress/theme/components/NoteContributors.vue`、`NoteChangelog.vue`：贡献者名单与修改记录组件。
- `docs/.vuepress/theme/layouts/NoteLayout.vue`：通过 Plume 的正文后插槽自动展示共建记录；`shared/note-records.ts` 统一定义数据及校验规则。
- `.agents/skills/`、`templates/`、根目录说明、临时目录不参与网站构建。

每个学科的初中、高中是独立的 Plume 文档集合，各自拥有标题、侧边栏和前后篇导航；跨学段内容也独立收录。顶部“初中笔记”“高中笔记”分别进入对应学段。

`shared/subject-catalog.ts` 区分完整内容科目 `subjects` 与公开入口 `publicSubjectDirs`/`publicSubjects`。完整集合保留原有科目与旧网址；当前首页、顶部学段菜单和学科目录只展示数学、物理、化学、英语，按此顺序直达学段学科页。收拢入口时不要过滤 `collections.ts` 的完整集合，也不要删除存量页面。首页使用静态 Markdown/HTML 链接及 `theme/styles/home.css`，没有新交互组件；`scripts/home-entry.test.mjs` 检查首页与目录链接和公开配置一致。

新增科目集合时在 `shared/subject-catalog.ts` 的 `subjects` 加一项，创建学科首页及 `junior/README.md`、`senior/README.md` 两个学段入口；是否加入公开入口另按明确需求决定，同步首页与学科目录并通过入口测试。笔记放入对应的 `junior/`、`senior/` 或跨学段的 `shared/`，由各自集合的侧边栏自动收录。初中数学沿用迁入笔记的专题结构，新增或移动页面时需同步维护 `math-junior-sidebar.ts` 与阅读导览。默认不自动写入 frontmatter，网站地址来自目录与文件名。

## 贡献者名单与修改记录

文章使用独立的 `noteContributors` 和 `noteChanges` 字段保存真实共建记录，组件自动显示在正文下方。名单记录昵称与实际贡献；修改记录区分内容贡献者和可选的 `recordedBy` 代录人，不需要学生账号。数据格式、例子与移动文章的约定见[填写教程](./contributions.md)。

两个字段都省略时隐藏整块记录；空列表显示待填写状态。有记录时贡献者按填写顺序显示，历史按日期倒序显示，较早的记录可展开。日期保持原样，不受浏览器时区影响；同一天的条目保留填写顺序。

`scripts/check-content.mjs` 与 `plugins/note-records.ts` 共用校验逻辑，检查数据格式、日历日期、重复昵称，以及修改记录里的贡献者是否列入名单。Vue 组件用 `vue-tsc` 检查类型。资料真实性仍由师生核对。

已关闭主题基于 Git 的贡献者、变更历史和更新时间显示，避免把代录者的提交误当作学生署名。Git 保留版本管理与回退用途。移动文章时保留顶部记录；拆分与合并时按实际内容维护名单与历史。不会自动从提交记录、AI 输出或录入人身份补造贡献。

## 仓库地址、分支和子路径

远程仓库已配置为 `https://github.com/kcct144/YouthNotes`，主分支为 `master`。以下参数可作为构建进程的环境变量传入：

| 参数 | 默认值 | 用途 |
| --- | --- | --- |
| `DOCS_REPO` | 未设置 | 真实仓库网页地址，用于编辑链接 |
| `DOCS_BRANCH` | `master` | 笔记所在分支；改用 `main` 时同步修改 |
| `DOCS_BASE` | `/` | 站点路径；项目 Pages 通常是 `/仓库名/`，必须以 `/` 开头和结尾 |

PowerShell 本地构建示例：

```powershell
$env:DOCS_REPO = 'https://github.com/kcct144/YouthNotes'
$env:DOCS_BRANCH = 'master'
$env:DOCS_BASE = '/'
pnpm docs:build
```

本项目未加载 dotenv；仅新建 `.env` 不会自动生效。可以改为在 `config.ts` 中填写团队确定的值，或在 CI 中传入；不要提交令牌等秘密。

## GitHub Actions 自动检查与服务器部署

- PR：`check.yml` 安装锁定依赖、测试发布脚本、运行 `docs:check` 与完整 `docs:build`，不接触部署 Secrets、不部署。
- 推送到 `master`：仅 `deploy.yml` 执行同样的检查构建，再经 SSH 发布，不重复运行另一套主分支构建。
- `workflow_dispatch` 保留，但只允许 `master`，且上传前检查该提交仍是远程 `master` 最新提交；其他分支跳过。
- 两个工作流只需 `contents: read`，不写 `gh-pages`，不需要 GitHub Pages 或仓库写权限。若分支保护原来要求主分支上的 `check`，维护者需核对 required checks，避免等待已移除的 push 检查。

部署地址为 `http://120.25.178.64:8081/`，暂未配置域名或 HTTPS。构建固定 `DOCS_BASE=/`、`DOCS_BRANCH=master`，`DOCS_REPO` 来自真实 GitHub 仓库。仅将 `docs/.vuepress/dist/` 的内容发布到：

```text
/opt/1panel/apps/openresty/openresty/www/sites/youthnotes/index
```

SSH 用户为 `youthnotes-deploy`，端口 22。仓库 Actions Secrets 使用 `DEPLOY_HOST`、`DEPLOY_PORT`、`DEPLOY_USER`、`DEPLOY_SSH_KEY`、`DEPLOY_KNOWN_HOSTS`。用户已配置这五项，但本地检查不读取或验证其值。主机密钥必须通过可信渠道核对后保存；工作流使用独立 known_hosts 和 `StrictHostKeyChecking=yes`，不使用 `ssh-keyscan` 现场盲信，也不关闭校验。更换主机密钥必须先人工核验。

Actions 固定到完整提交 SHA，注释记录对应版本：checkout v4.3.1、setup-node v6、pnpm/action-setup v6.1.1。版本/输入定义已对照各官方仓库 `action.yml`；pnpm 的 tag 是 annotated tag，固定的是解引用后的 commit，不是 tag 对象。升级时重新核对官方源码与兼容性，不直接改成浮动标签。先安装 Node.js 24，再按 `package.json` 安装 pnpm，冻结锁文件。

### 发布过程与边界

1. 完成全部检查构建、确认顶层 `index.html`，再将 dist 内容打包；从不预先清空线上。
2. 在网站目录内部创建私有 `.youthnotes-deploy/<run-id>-<attempt>/`，先写入无敏感内容的探针并要求其公开 HTTP 状态为 403/404，才上传完整归档；远端校验 SHA-256，解包到 `new/`。拒绝路径穿越、链接、设备文件、保留状态目录名和多包一层的 dist；新站文件为 644、目录为 755。探针检查不能替代人工核对容器映射和站点禁止规则。
3. Python 3（建议 3.9+）使用服务器文件锁保护切换。原有顶层条目逐个重命名到该次发布的 `old/`，再把新站顶层条目移入原网站目录。成功记录提交与工作流序号，保留旧站，不自动清理备份。
4. `current.json` 的原子替换是提交点：提交前可捕获的切换错误或中断会按持久化意图日志逆序回退，提交后不再自动撤销新站，以免文件与发布序号矛盾。若机器断电、SIGKILL、文件系统故障或回退本身失败，则可能保留 `active.json` 并阻止后续发布，必须人工检查恢复。本方案未对每次目录重命名执行目录 fsync，不保证断电后的日志与目录项顺序，不是断电级原子事务。
5. 最后请求公开 HTTP 首页。失败会把工作流标红，但不会因公网暂时不可达就盲目回滚已经切换的文件；首页 HTTP 成功也不等于容器映射、所有资源或内容验收通过。

此方案不替换网站根目录、不改父目录、不使用软链接，因此不假设 OpenResty 容器会跟随宿主机外部链接或根目录重命名。它不是整站原子切换：顶层文件移动期间有短暂空窗/混合版本，已打开旧页面也可能请求已移走的旧哈希资源。首次发布应安排低流量时段；若未来要求零中断，需另行授权调整服务器目录/挂载架构。

工作流使用固定并发组且不取消运行中的发布；GitHub 可能合并等待中的任务，不保证每个中间提交都部署。上传前检查 master HEAD，服务器另用成功发布的 `github.run_number` 拒绝更旧/重复序号，避免旧任务在新发布后覆盖线上。不要删除/更名部署工作流或重置服务器 `current.json` 来绕过序号保护；旧任务 rerun 不作为回退手段。

### 首次上线前的服务器检查（由维护者执行）

本地实现和测试不连接服务器。用户需先确认：

- 服务器有 `python3`（含标准库 `fcntl`）及 SSH/SFTP 支持。现代 scp 默认走 SFTP；公钥 `restrict` 可保留，但若另设 `command=` 强制命令，需确认允许本工作流的命令与 SFTP。
- 网站根目录确为部署用户所有且可写/可遍历、非软链接；宿主机实际目录与 OpenResty 容器内站点根目录指向同一位置。不要为了部署变更容器挂载根目录。
- OpenResty 应禁止访问 `/.youthnotes-deploy`，例如由管理员在该站点添加 `location ^~ /.youthnotes-deploy { deny all; }` 并按 1Panel 的流程校验应用。私有状态目录权限为 700，但这不能替代 HTTP 禁止规则（尤其 worker 与部署账号同用户时）。确认状态文件/归档 URL 为 403 或 404，且无目录列表，才开始首发。
- 空间足够同时容纳线上、上传归档、解包新站及保留的历史备份；备份没有自动淘汰。维护者验收后再按确切 release 路径安排清理，不要递归清空状态目录。

旧默认文件即便由 root 所有，只要是普通顶层条目且根目录无 sticky bit，重命名一般只需要父目录权限，不必提前递归 chown。仍需留意子挂载点（EBUSY）、ACL、immutable 属性或其他写入者。若失败，停止重跑，让管理员仅针对本网站报错条目排查/解除限制；必要时将该条目（及确需清理的子树）交给 `youthnotes-deploy`。不要修改网站父目录、其他站点，不要对整个 1Panel 树 chown/chmod，更不要 chmod 777。脚本本身不调用 sudo。

### 失败恢复与已发布版本回退

发布失败先检查 Actions 日志以及 `.youthnotes-deploy/active.json`、`current.json` 和对应 release 的 `new/`、`old/`。停止其他发布或手工站点写入，保存日志，不先删目录。

若确有未完成事务，维护者可在已核验主机的 SSH 会话中，以同一部署用户执行恢复模式（在本地仓库根目录使用同样的严格 SSH 主机校验配置）：

```sh
ssh -o StrictHostKeyChecking=yes -p 22 youthnotes-deploy@120.25.178.64 'python3 - recover' < .github/scripts/publish.py
```

恢复模式获取同一把服务器锁，逆序撤销已执行的移动；若事务已提交，只清理遗留事务标记。冲突时停止并保留现场，不自动覆盖。如果并无 `active.json`，不要执行恢复命令。原始文件的权限或挂载限制若未消除，恢复仍可能失败，需管理员只处理本网站阻塞条目。

成功发布后 `old/` 是发布前的完整顶层备份。常规回退优先将需要的内容修正/revert 为新的 `master` 提交并走完整构建发布；提交与推送仍须分别获授权。若必须直接恢复某份 `old/`，需另行安排维护窗口和单一执行者，先备份当前线上并核对该 release，不提供无检查的通配移动命令，也不删除 `current.json` 规避序号保护。

首次真实运行后还需验证：首页、深链接刷新、中文路径、本地搜索、CSS/JS/图片、HTTP 状态及私有部署目录不可访问；核对 `current.json` 的提交与 Actions 一致。以上远端项目均不由本地构建结果替代。

## 仍需确定的事项

内容许可和审阅分工仍需师生确认。现有 `package.json` 继承了模板的 MIT 字段，不代表教材、试题或笔记已经获得同样的授权。

## 标题类型与专项练习实现

标题统一语法和练习接口以[笔记写法](./writing.md)为准，不按类别重新排序。`shared/note-types.ts` 负责类型识别；图标为 CSS 装饰，分类文字保留，避免改变自动锚点。当前安装的 Plume rc.214 在 `getHeaders` 中读取 h1–h6，`outline: 'deep'` 可到 h6，递归 `VPDocOutlineItem` 无固定嵌套层数；本站默认 `outline: [2, 3]`，页面可按需覆盖，不强制所有细节进入目录。

`NotePractice.vue` 是本项目新增的 Vue 原生组件，`shared/note-practice.ts` 校验配置与单选判断，`note-practice.css` 负责深浅色和窄屏。题干与选项、提示、解析由同一份 Markdown 插槽经现有 KaTeX 链路生成，不再存另一份字符串题干。无需额外依赖或账号，不上传/持久保存草稿和成绩；客户端答案不保密。测试由 `scripts/note-learning.test.mjs` 随 `docs:check` 执行，覆盖 h2–h6、不改原文/锚点、练习配置、判断与实际 Vue 组件服务端渲染，浏览器交互仍需另验。

本轮只读核对 YouthNote 的根 `.vuepress/client.ts`、`theme/styles/subject-handbook.css`、`custom.css` 以及 `Question/MultipleChoiceS.vue`、`QuestionContainer.vue`。沿用已有 MIT 通知并参考例题卡片、折叠解析、选项自适应和键盘焦点样式，做本站蓝/紫/橙最小适配；未引入首页样式。旧题目组件使用 `el-card`/`el-button`，其 package.json 未声明对应 UI 依赖，且 QuestionContainer 存在缺失组件引用，故不直接移植，不建立跨仓库运行依赖。参考项目根 LICENSE 与本项目 `LICENSES/YouthNote-MIT.txt` 均为同一 MIT 通知；这不扩大到题目或图片的内容授权。

## 参考项目

`D:\code\YouthNote` 的学科手册为本项目提供了参考。初中数学笔记与实际引用的配图已复制进 `docs/notes/math/junior/`，链接使用当前项目的相对路径；例题卡片、解析与插图样式由 `subject-handbook.css` 提供，附带许可说明在 `LICENSES/YouthNote-MIT.txt`。本项目能独立克隆和构建；后续需要交互题目时，再单独核对组件依赖与适配。
