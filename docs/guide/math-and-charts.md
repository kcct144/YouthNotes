---
title: 公式与图表
---

# 公式与图表

项目已启用 KaTeX（含 mhchem）、Mermaid 与 ECharts。优先用可读、可审阅的文本表达，让同学能直接修改。图表数据同时配文字或表格，不把关键信息只放在交互图中。

## 数学与物理公式

行内公式用 `$...$`，独立公式用前后各占一行的 `$$`。变量含义、单位和适用条件在公式外解释。

```md
当 $x\ne0$ 时，$\frac{x}{x}=1$。

$$
\rho=\frac{m}{V}\qquad(V>0)
$$
```

显示效果：当 $x\ne0$ 时，$\frac{x}{x}=1$。密度公式可写作：

$$
\rho=\frac{m}{V}\qquad(V>0)
$$

其中 $m$ 为质量、$V$ 为体积；例如分别以 $\mathrm{kg}$、$\mathrm{m^3}$ 为单位时，密度单位为 $\mathrm{kg/m^3}$。不要把带条件的关系式写成无条件规律。

## 化学式与方程式

在公式中使用 `\ce{...}`：

```md
水的化学式：$\ce{H2O}$。

$$
\ce{2H2 + O2 -> 2H2O}
$$
```

水的化学式：$\ce{H2O}$。

$$
\ce{2H2 + O2 -> 2H2O}
$$

此处仅演示排版，未完整表达反应条件或物态；正式笔记中应按具体情境补齐并核对配平。

## Mermaid：过程与关系

适合解题流程、知识关系、时间线。节点文字保持简短，复杂概念在正文解释。

````md
```mermaid
flowchart LR
  A[明确问题] --> B[找出条件]
  B --> C[选择方法]
  C --> D[求解并检验]
```
````

```mermaid
flowchart LR
  A[明确问题] --> B[找出条件]
  B --> C[选择方法]
  C --> D[求解并检验]
```

## ECharts：函数、实验与统计数据

使用 `echarts` 代码块，内容写成标准 JSON：键名和字符串用双引号，不写注释、函数或尾逗号。使用数值型坐标轴画函数图像，不要用分类轴掩盖数值间距。

````md
```echarts
{
  "xAxis": { "type": "value", "name": "x" },
  "yAxis": { "type": "value", "name": "y" },
  "series": [{ "type": "line", "data": [[0,1],[1,3],[2,5]] }]
}
```
````

这个例子的数据由 $y=2x+1$ 生成，只画出三个采样点之间的线段。完整效果见[一次函数示范](../notes/math/junior/linear-function.md)。实验图表须写单位、测量条件和真实数据来源，模拟数据明确标注。

## 预览时检查什么

- 公式是否出现红色错误文字，分数、上下标、负号和括号是否正确。
- 题干、代入、答案与图表是否一致，横纵轴和单位是否标明。
- 图表在窄屏、深色模式下是否可读，折叠解析能否用键盘展开。
- 图表无法显示时，读者是否仍能从正文或表格获取关键结论。

排版能力参考：[Plume 数学公式](https://theme-plume.vuejs.press/guide/markdown/math/)、[Mermaid](https://theme-plume.vuejs.press/guide/chart/mermaid/)、[ECharts](https://theme-plume.vuejs.press/guide/chart/echarts/)。
