---
title: 幂的运算
pageLayout: doc
pageClass: subject-handbook
aside: true
outline:
  - 2
  - 3
noteContributors: []
noteChanges: []
---

幂的运算先看结构：是同底数相乘，还是一个幂再次乘方？指数相加或相乘并不是两条可任选的口诀，而是两种不同的因子计数。以下先讨论正整数指数，再说明零指数的扩充。

<nav class="handbook-nav" aria-label="本章分区">
  <a class="handbook-jump is-knowledge" href="#knowledge"><span class="handbook-nav-title">01 · 知识点</span><span>概念、关系与适用条件</span></a>
  <a class="handbook-jump is-exam" href="#exam"><span class="handbook-nav-title">02 · 考点</span><span>题目分类和例题</span></a>
  <a class="handbook-jump is-pitfall" href="#pitfalls"><span class="handbook-nav-title">03 · 坑点</span><span>辨析错因，检查遗漏</span></a>
</nav>


## 【知识点】理解概念 {#knowledge .handbook-section .is-knowledge}

### 1. 幂的运算法则 {#laws .knowledge-title}

下表中 $m,n$ 为正整数，除法要求 $a\ne0$、$m>n$

| 运算 | 法则 | 例子 |
| --- | --- | --- |
| 同底数幂相乘 | $a^ma^n=a^{m+n}$ | $x^2x^3=x^5$ |
| 幂的乘方 | $(a^m)^n=a^{mn}$ | $(x^2)^3=x^6$ |
| 积的乘方 | $(ab)^n=a^nb^n$ | $(2x)^3=8x^3$ |
| 同底数幂相除 | $a^m\div a^n=a^{m-n}$ | $x^5\div x^2=x^3$（$x\ne0$） |

<div class="handbook-figure figure-large figure-fit">

![同底数幂相乘把因数接起来幂的乘方把每组重复](./assets/lesson-power-laws.svg)

</div>

### 2. 零指数幂 {#zero-power .knowledge-title}

任何非零数的零次幂都等于 $1$

$$a^0=1\quad(a\ne0)$$

例如 $5^0=1$、$(-3)^0=1$；$0^0$ 在这里不作定义

::: info 为什么规定非零数的零次幂为 1

<details class="handbook-proof">
<summary>展开推导</summary>

$a\ne0$ 时，$a^3\div a^3=1$。按指数相减写成 $a^{3-3}=a^0$，因此规定 $a^0=1$

</details>

:::

## 【考点】识别与处理 {#exam .handbook-section .is-exam}


### 1. 先辨运算，再处理符号 {#exam-structure .exam-title}

先圈定完整底数，确定最外层是乘、除还是乘方；再判断负号是否在底数中。最后只对同类项合并系数，不把加法当成幂的乘法。含字母除数时，把非零条件保留到结果中。
<article class="handbook-example" aria-labelledby="example-1">

#### <span class="example-number">例题 01</span> <span class="example-name">同底数相乘</span> <span class="example-source">知识清单例题</span> {#example-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

计算：（1）$x^3x^4$；（2）$(-a)^2(-a)^3$；（3）$-x^6(-x)^5$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）底数都是 $x$，指数相加，得 $x^{3+4}=x^7$。

（2）完整底数都是 $-a$，得 $(-a)^5=-a^5$。

（3）$(-x)^5=-x^5$，所以 $(-x^6)(-x^5)=x^{11}$。前一个负号在 $x^6$ 外，先把符号理清。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$x^7$；$-a^5$；$x^{11}$。

</div>

</div>

</details>

</article>

<article class="handbook-example" aria-labelledby="example-2">

#### <span class="example-number">例题 02</span> <span class="example-name">同底数相除</span> <span class="example-source">知识清单例题</span> {#example-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

计算：（1）$x^9\div x^6$；（2）$(-x)^6\div(-x)^3$；（3）$-a^6\div(-a)^4$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$x\ne0$，得 $x^{9-6}=x^3$。

（2）$x\ne0$，完整底数为 $-x$，得 $(-x)^3=-x^3$。

（3）$a\ne0$，分母 $(-a)^4=a^4$，分子是 $-a^6$，所以商为 $-a^2$。化简后虽不再出现分母，原题的禁值仍保留。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$x^3$、$-x^3$，均要求 $x\ne0$；$-a^2$，要求 $a\ne0$。

</div>

</div>

</details>

</article>

<article class="handbook-example" aria-labelledby="example-3">

#### <span class="example-number">例题 03</span> <span class="example-name">幂的乘方与积的乘方</span> <span class="example-source">知识清单例题·第（3）问补充适用条件·合组</span> {#example-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

计算：

（1）$[(-x)^5]^6$；（2）$-(x^3)^4$；（3）$(y^2)^{n-1}$，$n$ 为大于1的整数；

（4）$(-x^3y^2)^2$；（5）$(3\times10^2)^3$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$(-x)^{5\times6}=(-x)^{30}=x^{30}$。

（2）外部负号不在乘方范围内，得 $-x^{12}$。

（3）$n-1$ 为正整数，得 $y^{2(n-1)}=y^{2n-2}$。若另讨论 $n=1$，零指数还要求 $y\ne0$。

（4）每个因子都平方：$(-1)^2x^6y^4=x^6y^4$。

（5）$3^3(10^2)^3=27\times10^6=2.7\times10^7$，科学记数法还要调整系数。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$x^{30}$；$-x^{12}$；$y^{2n-2}$；$x^6y^4$；$2.7\times10^7$。

</div>

</div>

</details>

</article>

<article class="handbook-example" aria-labelledby="example-4">

#### <span class="example-number">例题 04</span> <span class="example-name">先统一底数，再计算</span> <span class="example-source">知识清单例题</span> {#example-4 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

计算：（1）$(x-y)^2(y-x)$；（2）$2^3\times8^2\div16$；（3）$x^2(2x)^3$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$(x-y)^2=(y-x)^2$，所以原式 $=(y-x)^3$；也可写成 $-(x-y)^3$。

（2）$8=2^3$，$16=2^4$，原式 $=2^{3+6-4}=2^5=32$。

（3）先算 $(2x)^3=8x^3$，再乘 $x^2$，得 $8x^5$，不能漏掉系数2的立方。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$(y-x)^3$；32；$8x^5$。

</div>

</div>

</details>

</article>

<article class="handbook-example" aria-labelledby="example-5">

#### <span class="example-number">例题 05</span> <span class="example-name">混合运算不跨越加减号</span> <span class="example-source">知识清单例题</span> {#example-5 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

计算：（1）$a^3(a^3)^2$；（2）$(2\times10^2)^3(-10^3)^2$；（3）$(-2a)^6-(-3a^3)^2$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）先乘方，后同底数相乘：$a^3a^6=a^9$。

（2）第一部分 $8\times10^6$，第二部分 $10^6$，相乘得 $8\times10^{12}$。

（3）两个乘方分别为 $64a^6$、$9a^6$，中间是减号，合并系数得到 $(64-9)a^6=55a^6$，不是指数相减。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$a^9$；$8\times10^{12}$；$55a^6$。

</div>

</div>

</details>

</article>

### 2. 法则逆用：把已知量变成整体 {#exam-reverse .exam-title}

逆用 $(ab)^n=a^nb^n$，可把同指数的两个幂合为一个积的幂；逆用 $a^{m+n}=a^ma^n$，可把指数拆成已知部分。逆用前仍须检查指数范围、底数和非零条件，不能只因变形能写出来就省掉条件。
<article class="handbook-example" aria-labelledby="example-6">

#### <span class="example-number">例题 06</span> <span class="example-name">相同指数合并底数</span> <span class="example-source">知识清单例题</span> {#example-6 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

计算 $2^{2025}\times(-\frac12)^{2025}$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

指数同为正整数2025，可逆用积的乘方：

$$2^{2025}\times(-\tfrac12)^{2025}=[2\times(-\tfrac12)]^{2025}=(-1)^{2025}=-1.$$

这样先算底数的积，不必展开两个大数。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$-1$。

</div>

</div>

</details>

</article>

<article class="handbook-example" aria-labelledby="example-7">

#### <span class="example-number">例题 07</span> <span class="example-name">将指数中的已知关系整体代入</span> <span class="example-source">（1）2023·四川德阳；（2）2023·四川乐山，改编·明确指数范围·合组</span> {#example-7 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）设 $x$ 为正整数，$3^x=y$，则 $3^{x+1}$ 等于（　）。

<div class="handbook-choice-grid">

<div class="handbook-choice">

A. $y$

</div>

<div class="handbook-choice">

B. $1+y$

</div>

<div class="handbook-choice">

C. $3+y$

</div>

<div class="handbook-choice">

D. $3y$

</div>

</div>

（2）设 $m,n$ 为正整数，$3m-n-4=0$，求 $8^m\div2^n$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$3^{x+1}=3^x\cdot3=3y$，指数加1对应多乘一个3，不是结果加1。

（2）$8^m=2^{3m}$，已知 $3m-n=4>0$，所以 $8^m\div2^n=2^{3m-n}=2^4=16$。无需分别求 $m,n$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）D；（2）16。

</div>

</div>

</details>

</article>

### 3. 化成同底数或同指数比较 {#exam-compare .exam-title}

两个正数的幂，若能化成同一个大于1的底数，可比较正整数指数；若能化成同一个正整数指数，可比较正底数。这里只在这些条件下使用比较，底数在0与1之间时，指数越大反而越小。
<article class="handbook-example" aria-labelledby="example-8">

#### <span class="example-number">例题 08</span> <span class="example-name">不算出大数也能比较</span> <span class="example-source">知识清单例题</span> {#example-8 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

比较：（1）$27^{25}$ 与 $3^{80}$；（2）$3^{444}$ 与 $4^{333}$。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$27^{25}=(3^3)^{25}=3^{75}$。底数3大于1，多乘5个3使数增大，所以 $3^{75}<3^{80}$。

（2）$3^{444}=(3^4)^{111}=81^{111}$，$4^{333}=(4^3)^{111}=64^{111}$。两个正底数以相同正整数指数乘方，$81>64$，故 $81^{111}>64^{111}$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$27^{25}<3^{80}$；$3^{444}>4^{333}$。

</div>

</div>

</details>

</article>

## 【坑点】辨析边界 {#pitfalls .handbook-section .is-pitfall}


### 1. 加法、乘法、乘方不能共用口诀 {#pit-operations .pitfall-title}

合并同类项改变系数，同底数相乘改变指数，幂的乘方则把指数相乘。校验一个可疑等式，可以先用小数值发现反例，但证明恒等式仍要靠运算法则。
<article class="handbook-example is-pitfall" aria-labelledby="pitfall-1">

#### <span class="example-number">辨析 01</span> <span class="example-name">辨别四种运算</span> <span class="example-source">2024·云南</span> {#pitfall-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

下列运算正确的是（　）。

<div class="handbook-choice-grid">

<div class="handbook-choice">

A. $x^3+5x^3=6x^4$

</div>

<div class="handbook-choice">

B. $x^6\div x^3=x^5$

</div>

<div class="handbook-choice">

C. $(a^2)^3=a^7$

</div>

<div class="handbook-choice">

D. $(ab)^3=a^3b^3$

</div>

</div>

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

A是同类项相加，应为 $6x^3$；B在 $x\ne0$ 时应为 $x^{6-3}=x^3$；C应为 $a^{2\times3}=a^6$；D把每个因子都立方，正确。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

D。

</div>

</div>

</details>

</article>

### 2. 看似能代入，条件却可能不存在 {#pit-range .pitfall-title}

写着字母指数的题，必须说明指数允许取什么数。正整数幂的规则不能直接作为一般实数幂的定义。有些题按符号运算会得到一个数，却没有符合当前指数范围的取值，这时应先指出条件问题。
<article class="handbook-example is-pitfall" aria-labelledby="pitfall-2">

#### <span class="example-number">辨析 02</span> <span class="example-name">同一底数的两个幂能否分别等于7和8</span> <span class="example-source">知识清单原题改编·条件辨析</span> {#pitfall-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

有一道题写：“已知 $a^m=7$、$a^n=8$，求 $a^{m-n}$。”如果把 $m,n$ 理解为正整数，题目条件能否成立？

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

不能。若两式同时成立，则 $(a^m)^n=(a^n)^m$，从而 $7^n=8^m=2^{3m}$。左边只含素因数7，右边只含素因数2，对正整数 $m,n$ 不可能相等。

机械地相除会写出 $\frac78$，但这不能补救正整数条件的不相容。若把题目另行放到允许正底数实数指数的范围，并说明相应法则，才可作条件下的形式计算 $a^{m-n}=7/8$；那已超出本页的连乘推导范围。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

正整数指数下无符合条件的取值，不能把 $\frac78$ 当作这一条件下存在的例题答案。

</div>

</div>

</details>

</article>

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-3">

#### <span class="example-number">辨析 03</span> <span class="example-name">以10为底的幂与指数范围</span> <span class="example-source">知识清单原题改编·条件辨析</span> {#pitfall-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

有一道题写：“已知 $10^m=5$、$10^n=6$，求 $10^{2m+3n}$。”能否仅用本页的整数幂知识直接当作常规代入题？

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

不能。10的正整数次幂至少为10；零次幂为1；即使以后引入负整数指数，其值也在0与1之间，因此整数 $m,n$ 均不能满足题设。

若已在其他学习阶段定义正底数的实数指数，并允许相应运算法则，则条件下可形式变形为 $(10^m)^2(10^n)^3=5^2\times6^3=5400$。这里保留这一计算说明题目的意图，但不能用它掩盖整数指数范围内不存在解的问题。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

不能作为整数幂范围内的常规例题；5400依赖另行说明的实数指数范围。

</div>

</div>

</details>

</article>
