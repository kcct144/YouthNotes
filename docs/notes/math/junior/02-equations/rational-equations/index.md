---
title: 分式方程
pageLayout: doc
pageClass: subject-handbook
aside: true
outline:
  - 2
  - 3
noteContributors: []
noteChanges: []
---

去分母可以把分式方程变成整式方程，但不能把原分母的限制一起去掉。解题时始终保留两份信息：变形后的等式，以及原方程允许的取值。

<nav class="handbook-nav" aria-label="本章分区">
  <a class="handbook-jump is-knowledge" href="#knowledge"><span class="handbook-nav-title">01 · 知识点</span><span>概念、关系与适用条件</span></a>
  <a class="handbook-jump is-exam" href="#exam"><span class="handbook-nav-title">02 · 考点</span><span>题目分类和例题</span></a>
  <a class="handbook-jump is-pitfall" href="#pitfalls"><span class="handbook-nav-title">03 · 坑点</span><span>辨析错因，检查遗漏</span></a>
</nav>


## 【知识点】概念与依据 {#knowledge .handbook-section .is-knowledge}

### 1. 分式方程 {#definition .knowledge-title}

分母中含有未知数的方程，叫作==分式方程==，如 $\frac2x=1$

解方程前，先看原分母不为 $0$ 的条件。上式要求 $x\ne0$

### 2. 解分式方程与验根 {#equivalence .knowledge-title}

<div class="handbook-figure figure-large figure-fit">

![去分母求解验根的三个步骤](./assets/lesson-rational-equation.svg)

</div>

以 $\frac2{x-1}=\frac3x$ 为例

1. 去分母：两边乘 $x(x-1)$，得 $2x=3(x-1)$
2. 解整式方程：$2x=3x-3$，得 $x=3$
3. 验根：$x=3$ 时，原分母 $x-1$ 和 $x$ 都不为 $0$，代入原方程也成立

所以原方程的解为 $x=3$

去分母后求出的根，如果使原分母为 $0$，就叫作==增根==，必须舍去

::: info 为什么会有增根

<details class="handbook-proof">
<summary>看一个例子</summary>

$\frac{x}{x-1}=\frac1{x-1}$ 去分母得到 $x=1$，但 $x=1$ 使原分母为 $0$，因此是增根，原方程无解

</details>

:::

## 【考点】方法与例题 {#exam .handbook-section .is-exam}



### 1. 无解要分清是哪一层无解 {#no-solution .exam-title}


原分式方程的解，是整式方程的解中仍在原允许范围的部分。若去分母得到 $Ax=B$，其中 $A,B$ 含参数，应先分类，不能直接除以 $A$。

| 条件 | 整式方程的情况 | 还要检查什么 |
| --- | --- | --- |
| $A\ne0$ | 唯一候选 $x=B/A$ | 若落在禁值，原方程无解 |
| $A=0,\ B\ne0$ | 矛盾式，自身无解 | 原方程也无解，不必有增根 |
| $A=0,\ B=0$ | 恒等式，不再限制 $x$ | 保留原分母限制，不能直接答全体实数或无解 |

如果去分母得到的是二次方程，要逐个筛选候选，不能看到其中一个增根就停止。

### 2. 实际问题要过两道检验 {#models .exam-title}


分式常来自“总量除以每份量”或“总量除以份数”。设元时把名称和单位写完整，才能读懂分母代表什么。

| 问题 | 基本关系 | 常见的分式表达 |
| --- | --- | --- |
| 行程 | 路程＝速度×时间 | 时间＝路程÷速度 |
| 工程 | 工作量＝效率×时间 | 工期＝工作量÷效率 |
| 销售 | 销售额＝单价×销量 | 单价＝销售额÷销量 |
| 同数量物品 | 总耗量＝单个耗量×数量 | 数量＝总耗量÷单个耗量 |

效率提高 $r$，新效率为原效率的 $1+r$ 倍；同量任务的时间是原来的 $\frac1{1+r}$，并不是直接减少 $r$。已知变化后的量，反求原量要除以相应倍数；下降率模型还须保证 $1-r>0$。

利润＝售价−进价，利润率以进价为基数；售价＝进价×（1＋利润率）。打折售价则以标价为基数。这些关系不因列成分式方程而改变。

- 代数检验：原分母不为零，代入原等式成立。
- 实际检验：速度、效率等应为正；需要整数的数量须为整数；时序和单位符合题意。
- 回到所问量：设的是原计划，不一定问原计划；设的是 B 型，不一定问 B 型。


### 3. 去分母、解整式、回原范围 {#solve .exam-title}


::: steps
1. 分解原分母，列全部禁值；相反因子先统一符号。
2. 取原分母的最简公分母，等式每一项都乘，包括没有分母的常数项。
3. 保留分子括号，解所得整式方程。
4. 把候选代原公分母筛选，再代原式核验；没有合法候选就写原方程无解。
:::

<article class="handbook-example" aria-labelledby="example-1">

#### <span class="example-number">例题 01</span> <span class="example-name">交叉相乘后仍需验根</span> <span class="example-source">知识清单例题·合组</span> {#example-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

解下列分式方程。

（1）$\dfrac3x=\dfrac2{x-1}$。

（2）（2024 湖北武汉）$\dfrac{x}{x-3}=\dfrac{x+1}{x-1}$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）原限制 $x\ne0,1$。两边乘 $x(x-1)$，得 $3(x-1)=2x$，解得 $x=3$。此时公分母为 $6\ne0$，原式两边均为 $1$。

（2）原限制 $x\ne3,1$。两边乘 $(x-3)(x-1)$，得

$$x(x-1)=(x+1)(x-3).$$

展开为 $x^2-x=x^2-2x-3$，解得 $x=-3$。它不等于两个禁值；原式两边均为 $\frac12$。交叉相乘没有取消原限制。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$x=3$；（2）$x=-3$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-2">

#### <span class="example-number">例题 02</span> <span class="example-name">相反分母与平方差分母</span> <span class="example-source">知识清单例题</span> {#example-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

解下列分式方程。

（1）$\dfrac{2x}{2x-1}+\dfrac5{1-2x}=3$。

（2）$\dfrac{x+1}{x-1}-\dfrac4{x^2-1}=1$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$1-2x=-(2x-1)$，原限制 $x\ne\frac12$。乘 $2x-1$，得

$$2x-5=3(2x-1).$$

展开得 $2x-5=6x-3$，所以 $x=-\frac12$。原分母均不为零，左边为 $\frac12+\frac52=3$，通过检验。注意常数 $3$ 也乘了公分母。

（2）$x^2-1=(x-1)(x+1)$，故 $x\ne\pm1$。两边乘 $(x-1)(x+1)$，得

$$(x+1)^2-4=(x-1)(x+1).$$

展开、合并得 $2x=2$，候选为 $x=1$。它使原公分母为零，是增根；整式只有这一根，所以原方程无解。$x=-1$ 虽也是禁值，却不满足所得整式，不能也叫增根。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$x=-\frac12$；（2）原方程无解。

</div>

</div>

</details>

</article>


### 4. 根的条件与原禁值同时限制参数 {#root-conditions .exam-title}


先把候选根表示为参数的式子，再分别检查正负、整数性和原禁值。三个条件不能互相替代；“非负”包含零，“正”不包含零。

<article class="handbook-example" aria-labelledby="example-3">

#### <span class="example-number">例题 03</span> <span class="example-name">解为正数时的参数范围</span> <span class="example-source">知识清单例题</span> {#example-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

已知关于 $x$ 的方程 $\dfrac{x}{x-3}-2=\dfrac m{x-3}$ 的解为正数，求 $m$ 的取值范围。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

原限制 $x\ne3$。两边乘 $x-3$，得 $x-2(x-3)=m$，即 $x=6-m$。

| 要求 | 参数条件 |
| --- | --- |
| 根为正 | $6-m>0$，即 $m<6$ |
| 原分母非零 | $6-m\ne3$，即 $m\ne3$ |

两条同时成立才合格。$m=6$ 对应零根，不是正根；$m=3$ 对应增根，不能因它小于6就保留。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$m<6$ 且 $m\ne3$。

</div>

</div>

</details>

</article>


### 5. 同路程用时间差列式 {#journeys .exam-title}


用“路程÷各自速度”表达时间，按题意决定谁减谁。先出发而同时到达，意味着先出发者用时较长；半小时要与速度的“每小时”统一。

<article class="handbook-example" aria-labelledby="example-4">

#### <span class="example-number">例题 04</span> <span class="example-name">出发先后与同程用时差</span> <span class="example-source">知识清单例题·合组缩写</span> {#example-4 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）学生去 $9$ 千米外游玩，一部分骑自行车先走，半小时后其他学生乘公共汽车出发，两批同时到达。公共汽车速度是自行车速度的 $3$ 倍。求两种速度。

（2）（2024 云南）游客从 A 地到 B 地，路程为 $300$ 千米，乘 C 型车比乘 D 型车少用 $2$ 小时，C 型车平均速度是 D 型车的 $3$ 倍。按题设数据，求 D 型车的平均速度。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）设自行车速度为 $x$ 千米/时，$x>0$，公共汽车速度为 $3x$。

| 交通方式 | 路程/千米 | 速度/（千米/时） | 时间/小时 |
| --- | --- | --- | --- |
| 自行车 | $9$ | $x$ | $9/x$ |
| 公共汽车 | $9$ | $3x$ | $9/(3x)$ |

骑车用时比乘车多半小时，所以 $\frac9x-\frac9{3x}=\frac12$，化为 $\frac6x=\frac12$，得 $x=12$。汽车速度为 $36$ 千米/时；两段用时分别为 $\frac34$ 与 $\frac14$ 小时，差为半小时，原分母均非零。

（2）设 D 型车平均速度为 $v$ 千米/时，$v>0$。按题设有 $\frac{300}v-\frac{300}{3v}=2$，即 $200/v=2$，得 $v=100$。相应用时分别为 $3$ 小时和 $1$ 小时，差为 $2$ 小时。这里仅按给定的平均速度关系求值。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）自行车 $12$ 千米/时，公共汽车 $36$ 千米/时；（2）D 型车 $100$ 千米/时。

</div>

</div>

</details>

</article>


### 6. 同量工程由效率表达工期 {#work .exam-title}


同一工作量，效率越高，用时越短。把“效率为几倍”写进分母，再按较长时间减较短时间列式，不能把效率倍数直接当时间倍数。

<article class="handbook-example" aria-labelledby="example-5">

#### <span class="example-number">例题 05</span> <span class="example-name">先列同量时间差，再回答效率</span> <span class="example-source">知识清单例题·合组缩写</span> {#example-5 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）甲公司安装效率是乙公司的 $1.5$ 倍。乙公司安装 $36$ 间教室比甲公司安装同样数量多用 $3$ 天。设乙公司每天安装 $x$ 间，请列出方程。

（2）甲工程队每天修路长度是乙队的 $2$ 倍，两队各自修建 $500$ 米，甲比乙少用 $5$ 天。求两队每天各修路多少米。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）乙用时为 $36/x$ 天，甲为 $36/(1.5x)$ 天，且 $x>0$。所列方程为

$$\frac{36}{x}-\frac{36}{1.5x}=3.$$

补作可行性核验：$12/x=3$ 给出 $x=4$，甲每天6间；用时分别9天、6天，相差3天。这一步是对列式结果的验证，不是把“列方程”偷换成只报数值。

（2）设乙每天修 $u$ 米，甲每天修 $2u$ 米，$u>0$。由 $\frac{500}u-\frac{500}{2u}=5$，得 $250/u=5$，所以 $u=50$。甲每天100米，乙每天50米；完成各500米分别需要5天、10天，差为5天。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$\dfrac{36}{x}-\dfrac{36}{1.5x}=3$，$x>0$；（2）甲每天100米，乙每天50米。

</div>

</div>

</details>

</article>


### 7. 总量除以未知量，读出所得量 {#quotient .exam-title}


先看单位：销售额除以销量是单价，总耗电量除以每盏耗电量是灯数。两个分式相等或相差多少，要由题中的数量关系决定，不能只看分子大小。

<article class="handbook-example" aria-labelledby="example-6">

#### <span class="example-number">例题 06</span> <span class="example-name">销量未知，单价差怎样表达</span> <span class="example-source">知识清单例题·情境缩写</span> {#example-6 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

某村企今年黑木耳每千克售价比去年增加 $40$ 元，预计今年销量是去年的 $3$ 倍、销售额为 $360$ 万元，去年销售额为 $80$ 万元。求去年年销量是多少万千克。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

设去年销量为 $x$ 万千克，今年为 $3x$ 万千克，$x>0$。

| 时期 | 销售额/万元 | 销量/万千克 | 单价/（元/千克） |
| --- | --- | --- | --- |
| 去年 | $80$ | $x$ | $80/x$ |
| 今年预计 | $360$ | $3x$ | $360/(3x)$ |

万元除以万千克，得到元/千克，不需要再乘一万。由今年单价高40元，得

$$\frac{80}x+40=\frac{360}{3x}.$$

两边乘 $x$，得 $80+40x=120$，解得 $x=1$。去年单价80元/千克，今年120元/千克；预计销量3万千克，对应销售额360万元，原条件均满足。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

去年年销量为 $1$ 万千克。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-7">

#### <span class="example-number">例题 07</span> <span class="example-name">相同灯数建立两个商相等</span> <span class="example-source">2024 山东威海·知识清单收录</span> {#example-7 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024 山东威海）某公司安装一批 A 型节能灯，一年用电 $16000$ 千瓦时；后来购进相同数量的 B 型节能灯，一年用电 $9600$ 千瓦时。一盏 A 型灯年用电量比一盏 B 型灯的 $2$ 倍少 $32$ 千瓦时。求一盏 A 型灯每年的用电量。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

设一盏 B 型灯年用电量为 $x$ 千瓦时，则 A 型为 $2x-32$ 千瓦时。两者都为正，故 $x>16$。

A、B 两批灯的数量分别为 $16000/(2x-32)$ 与 $9600/x$。因数量相同，

$$\frac{9600}x=\frac{16000}{2x-32}.$$

乘非零的 $x(2x-32)$，得 $9600(2x-32)=16000x$，即 $3200x=307200$，解得 $x=96$。

这只是 B 型灯的耗电量。A 型为 $2\times96-32=160$ 千瓦时。两批灯数各为 $9600/96=100$ 盏与 $16000/160=100$ 盏，既相同又为正整数。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

一盏 A 型节能灯每年用电 $160$ 千瓦时。

</div>

</div>

</details>

</article>


## 【坑点】条件与易错 {#pitfalls .handbook-section .is-pitfall}


### 1. 只找分母零点，还不能确定增根 {#extraneous .pitfall-title}


分母为零只给出禁值。题说“有增根”，还要把禁值代入去分母后的整式方程确定参数；不能代入没有定义的原分式。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-1">

#### <span class="example-number">辨析 01</span> <span class="example-name">有增根时求参数</span> <span class="example-source">知识清单例题</span> {#pitfall-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

若关于 $x$ 的分式方程 $2+\dfrac{1-kx}{x-2}=\dfrac1{2-x}$ 有增根，求 $k$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

原禁值只有 $x=2$。注意 $1/(2-x)=-1/(x-2)$，乘 $x-2$ 得

$$2(x-2)+1-kx=-1,$$

即 $(2-k)x=2$。有增根时，$x=2$ 必须满足这个整式方程，所以 $2(2-k)=2$，解得 $k=1$。

反查 $k=1$ 时所得整式为 $x=2$，它确是整式根且使原分母为零。若只写“分母有 $x-2$，所以任何 $k$ 都有增根”，就没有检查第二个条件。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$k=1$。

</div>

</div>

</details>

</article>


### 2. 无解不只来自增根，还可能来自零系数矛盾 {#degenerate .pitfall-title}


看到含参数的 $Ax=B$，先检查 $A=0$，再讨论 $A\ne0$。未经分类直接除以 $A$，会把一整个参数分支丢掉。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-2">

#### <span class="example-number">辨析 02</span> <span class="example-name">无解参数的完整分类</span> <span class="example-source">知识清单例题</span> {#pitfall-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

若关于 $x$ 的方程 $\dfrac1{x-1}+\dfrac m{x-2}=\dfrac{2m+2}{(x-1)(x-2)}$ 无解，求 $m$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

原限制 $x\ne1,2$。乘 $(x-1)(x-2)$，得 $x-2+m(x-1)=2m+2$，整理为

$$(m+1)x=3m+4.$$

| 分支 | 判断 | 对应参数 |
| --- | --- | --- |
| $m+1=0$ | 所得方程为 $0x=1$，自身矛盾 | $m=-1$ |
| $m+1\ne0$，唯一候选为1 | $m+1=3m+4$ | $m=-\frac32$ |
| $m+1\ne0$，唯一候选为2 | $2(m+1)=3m+4$ | $m=-2$ |

后两值确使所得整式的系数 $m+1$ 非零，且唯一整式根分别为原禁值1、2。第一种却没有整式根，不能把它也解释成“有增根”。除这三种情况外，唯一候选不落禁值，原方程有解。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$m=-1$，或 $m=-\frac32$，或 $m=-2$。

</div>

</div>

</details>

</article>


### 3. 非负、整数、禁值三项不能少一项 {#integer .pitfall-title}


含整数条件时，先求范围，再查整除关系。下面的题还用到不等式组：各个不等式要同时成立，取公共范围；严格端点不计入整数个数。它是本页的综合例题，不用把不同未知量 $x,y$ 当成同一个数。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-3">

#### <span class="example-number">辨析 03</span> <span class="example-name">整数解数量与分式整数根联立筛选</span> <span class="example-source">2024 重庆A·知识清单收录</span> {#pitfall-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024 重庆 A）关于 $x$ 的不等式组

$$\begin{cases}\dfrac{4x-1}3<x+1,\\2(x+1)\ge -x+a\end{cases}$$

至少有 $2$ 个整数解，且关于 $y$ 的分式方程 $\dfrac{a-1}{y-1}=2-\dfrac3{1-y}$ 的解为非负整数。求所有满足条件的整数 $a$ 的值之和。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

先分别处理两个未知量。

不等式组： 第一式乘正数3，得 $4x-1<3x+3$，所以 $x<4$；第二式得 $3x\ge a-2$，所以 $x\ge\frac{a-2}3$。

公共范围为 $\frac{a-2}3\le x<4$。最大整数是3，第二大是2；要至少有两个整数解，下界必须不超过2，即 $a\le8$。

分式方程： 原限制 $y\ne1$，且 $-\frac3{1-y}=\frac3{y-1}$。两边乘 $y-1$，得 $a-1=2(y-1)+3$，所以 $y=\frac{a-2}2$。

| 条件 | 对 $a$ 的限制 |
| --- | --- |
| $y\ge0$ | $a\ge2$ |
| $y$ 为整数 | $a-2$ 为偶数 |
| $y\ne1$ | $a\ne4$ |
| 不等式组至少两整数解 | $a\le8$ |

合并得到 $a=2,6,8$，对应 $y=0,2,3$。零是非负整数，所以不能排除 $a=2$；$a=3,5,7$ 虽在区间内，却给半整数。三个参数对应不等式组分别至少含2、3两个整数，均符合条件。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

所有符合条件的整数为 $2$、$6$、$8$，其和为 $16$。

</div>

</div>

</details>

</article>


### 4. 求出的辅助量不是最终所问量 {#asked-quantity .pitfall-title}


解完先回看设元句，再回看题目最后一句。若设原计划效率而问实际效率，还需按提高后的倍数换算；“验分母”不能代替这一回算。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-4">

#### <span class="example-number">辨析 04</span> <span class="example-name">计划效率与实际效率</span> <span class="example-source">知识清单例题·情境缩写</span> {#pitfall-4 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

某公司接到生产 $300$ 万部智能手机的订单，增开生产线后，每月实际生产效率比原计划提高 $50\%$，提前 $5$ 个月完成交货。求每月实际生产多少万部。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

设原计划每月生产 $x$ 万部，实际为 $1.5x$ 万部，$x>0$。工作总量相同，原计划用时减实际用时等于5个月：

$$\frac{300}x-\frac{300}{1.5x}=5.$$

即 $100/x=5$，解得 $x=20$。原分母均非零，但题问的是实际每月产量，还需计算 $1.5\times20=30$ 万部。

核验原计划用时15个月，实际10个月，差5个月；不是效率提高50%，工期也直接缩短50%。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

每月实际生产 $30$ 万部。

</div>

</div>

</details>

</article>


### 5. 验根与去分母的最后检查 {#last-check .pitfall-title}


- 分母相反时，负号要留在分子前；常数项也必须乘公分母。
- 不把 $0/0$ 当成零，更不能把禁值代原方程解释成“等式成立”。
- 约分可以简化计算，不能删除原分母限制。
- 得到增根后，还要看有无其他合法候选；无解参数题还须查零系数分支。
- 应用题的根须满足实际正数、整数、单位和所问对象要求，不能只写“分母不为零，所以符合题意”。
