# 工作区约定

- 默认使用简体中文。本项目是师生共建的初高中学科 Wiki，优先保证学生理解与知识准确。
- 学科笔记放入 `docs/notes/<学科>/junior/` 或 `senior/`；跨学段内容放 `shared/`。学习方法放 `docs/methods/`，教程放 `docs/guide/`。
- 同页可以包含知识点、考点、坑点，按实际内容选择，不强行补齐。写法以 `docs/guide/writing.md` 和 `templates/note.md` 为准。
- 不编造教材页码、课程标准、真题出处或“必考”结论。AI 输出须核对；未核实的学科结论明确标为待核对，不当作定论。
- 示例题默认原创并标明；外部资料注明来源与适用版本。学生使用协作昵称，不把学号、班级名单或联系方式写入笔记。
- 署名使用文章中的 `noteContributors` 与 `noteChanges`，写法见 `docs/guide/contributions.md`。区分实际内容贡献者与 `recordedBy` 代录人，不根据 Git 提交者、AI 输出或录入身份推断贡献；没有真实资料时保持空列表。移动文章须保留记录，拆分或合并时按实际内容整理。
- 公式与图表优先使用已有 Markdown 能力，参见 `docs/guide/math-and-charts.md`。只有 Markdown 不能表达所需交互时才增加 Vue 组件及依赖。
- 不改动、移动或链接依赖参考项目 `D:\code\YouthNote` 的私有学习材料；参考其组件时先检查依赖、来源与许可，再作最小适配。
- 网页入口使用文档相对链接或既定站内路径。关闭了自动 frontmatter，新增页面不需要生成随机 permalink 或虚构创建时间。
- 临时产物放 `.tmp/`，缓存放 `.cache/`；不得提交构建产物与个人配置。未经用户要求不提交、推送或部署。
- 完成内容或配置修改后运行 `pnpm docs:check` 与 `pnpm docs:build`；说明未能完成的验证，不伪报通过。

## 项目 skills

按任务读取对应文件，不必一次加载所有 skill：

- 新建或整理学科笔记：`.agents/skills/youth-note-write/SKILL.md`
- 审校知识、题目与修改：`.agents/skills/youth-note-review/SKILL.md`
- 添加公式、化学式或图表：`.agents/skills/youth-science-visuals/SKILL.md`
