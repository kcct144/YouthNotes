---
title: 中位线与中点四边形
pageLayout: doc
pageClass: subject-handbook
aside: true
outline:
  - 2
  - 3
noteContributors: []
noteChanges: []
---

两个中点把原来分散的边长与方向联系起来。使用中位线前，先说清它属于哪一个三角形；遇到四边形，各边的中点与半条对角线的中点不是同一种构造。

<nav class="handbook-nav" aria-label="本章分区">
  <a class="handbook-jump is-knowledge" href="#knowledge"><span class="handbook-nav-title">01 · 知识点</span><span>概念、关系与适用条件</span></a>
  <a class="handbook-jump is-exam" href="#exam"><span class="handbook-nav-title">02 · 考点</span><span>题目分类和例题</span></a>
  <a class="handbook-jump is-pitfall" href="#pitfalls"><span class="handbook-nav-title">03 · 坑点</span><span>辨析错因，检查遗漏</span></a>
</nav>


## 【知识点】概念与依据 {#knowledge .handbook-section .is-knowledge}

### 1. 三角形的中位线 {#midline .knowledge-title}

连接三角形两边中点的线段，叫作三角形的==中位线==，一个三角形有三条中位线

<div class="handbook-figure figure-large figure-fit">

![中位线连接两边中点平行第三边且长为其一半](./assets/lesson-triangle-midline.svg)

</div>

$D,E$ 分别是 $AB,AC$ 的中点，则

$$DE\parallel BC,\qquad DE=\frac12BC$$

中线连接“顶点与对边中点”，中位线连接“两边中点”

::: info 中位线定理的证明

<details class="handbook-proof">
<summary>展开相似证明</summary>

$AD=DB$、$AE=EC$，所以 $\frac{AD}{AB}=\frac{AE}{AC}=\frac12$，且共用 $\angle A$，由 SAS 得 $\triangle ADE\sim\triangle ABC$

对应角相等，得到 $DE\parallel BC$；对应边成比例，得到 $DE=\frac12BC$

</details>

:::

### 2. 三条中位线的性质 {#four-parts .knowledge-title}

<div class="handbook-figure figure-medium figure-fit">

![三条中位线把三角形分成四个全等的小三角形](./assets/lesson-four-midline-triangles.svg)

</div>

1. 四个小三角形彼此全等
2. 每个小三角形的周长为原来的 $\frac12$
3. 每个小三角形的面积为原来的 $\frac14$

## 【考点】方法与例题 {#exam .handbook-section .is-exam}



### 1. 中点四边形看原来的两条对角线 {#midpoint-quadrilateral .exam-title}


顺次连接凸四边形 $ABCD$ 各边的中点 $E,F,G,H$，得到中点四边形 $EFGH$。


<div class="handbook-figure figure-small">

![凸四边形ABCD各边中点E、F、G、H依次相连](./assets/q63-1.webp)

</div>


连接原对角线 $AC,BD$。在 $ABC,ADC$ 中分别用中位线定理，得 $EF\parallel AC$、$HG\parallel AC$，且 $EF=HG=AC/2$。同理，$FG=HE=BD/2$，并都与 $BD$ 平行。因此中点四边形总是平行四边形。

| 原四边形的对角线条件 | 中点四边形的对应条件 | 新图形 |
| --- | --- | --- |
| 无附加条件 | 两组对边分别平行 | 平行四边形 |
| $AC=BD$ | 两条相邻边相等 | 菱形 |
| $AC\perp BD$ | 两条相邻边垂直 | 矩形 |
| 两对角线既等长又垂直 | 邻边相等且垂直 | 正方形 |

要注意方向：原对角线“相等”变成新图的“邻边相等”，不是新对角线相等。

面积为什么是一半？ 在每个原顶角处，两个边中点围出的小三角形，是相应大三角形四个全等中位线小块之一。$A,C$ 两角的小块面积，分别为 $\triangle ABD$、$\triangle CBD$ 面积的四分之一，共为原面积的四分之一；$B,D$ 两角同理又占四分之一。四角合占一半，余下中点四边形也占一半。

上述面积扣除以原图凸、各小块在内部为前提。凹图或自交图要另看区域，不能不加说明直接套普通面积的一半。


### 2. 认清同一个三角形中的两个中点 {#direct .exam-title}


先写出三角形的三个顶点，再说明两个点分别是谁的中点。求长用半长关系，求角用平行关系。若中点来自对角线互相平分，要先有平行四边形这一依据。

<article class="handbook-example" aria-labelledby="example-1">

#### <span class="example-number">例题 01</span> <span class="example-name">绕开不能直接测量的距离</span> <span class="example-source">知识清单例题</span> {#example-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图，A、B两点被池塘隔开，A、B、C三点不共线.设AC、BC的中点分别为M、N.若MN=3米，则AB=\_\_\_\_.

<div class="handbook-figure figure-medium">

![池塘两侧的A、B与C组成三角形，M、N分别为AC、BC中点](./assets/q21-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

在 $\triangle ABC$ 中，$M,N$ 分别为 $AC,BC$ 中点，所以 $MN$ 为中位线，$MN=AB/2$。因此 $AB=2MN=6\text{ m}$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$AB=6\text{ m}$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-2">

#### <span class="example-number">例题 02</span> <span class="example-name">三边中点围出的四边形</span> <span class="example-source">知识清单例题</span> {#example-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,在 $\triangle ABC$ 中, $AB=6,AC=10$ ,点 $D,E,F$ 分别是 $AB,BC,AC$ 的中点,则四边形 $ADEF$ 的周长是（ ）



<div class="handbook-choice-grid">

<div class="handbook-choice">

A.8

</div>

<div class="handbook-choice">

B.10

</div>

<div class="handbook-choice">

C.12

</div>

<div class="handbook-choice">

D.16

</div>

</div>

<div class="handbook-figure figure-medium">

![三角形ABC三边的中点D、E、F及四边形ADEF](./assets/q22-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$AD=AB/2=3$，$AF=AC/2=5$。$DE$ 为中位线，$DE=AC/2=5$；$EF$ 也是中位线，$EF=AB/2=3$。所以周长为 $3+5+3+5=16$，选 D。

还可由 $DE\parallel AC$、$EF\parallel AB$ 判定 $ADEF$ 是平行四边形，再算 $2(DE+EF)$。不需要知道 $BC$ 的长度。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

D，周长16。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-3">

#### <span class="example-number">例题 03</span> <span class="example-name">平行后把已知角移到原三角形</span> <span class="example-source">知识清单例题·2024四川广安</span> {#example-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024四川广安）如图，在 $\triangle ABC$ 中，点 $D,E$ 分别是 $AC,BC$ 的中点，若 $\angle A=45^{\circ},\angle CED=70^{\circ}$ ，则 $\angle C$ 的度数为()



<div class="handbook-choice-grid">

<div class="handbook-choice">

A. $45^{\circ}$

</div>

<div class="handbook-choice">

B. $50^{\circ}$

</div>

<div class="handbook-choice">

C.60°

</div>

<div class="handbook-choice">

D.65°

</div>

</div>

<div class="handbook-figure figure-medium">

![三角形ABC中，D、E为AC、BC中点，连接DE](./assets/q26-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$D,E$ 为 $AC,BC$ 中点，故 $DE\parallel AB$。于是 $\angle ABC=\angle CED=70^\circ$，

$$\angle C=180^\circ-45^\circ-70^\circ=65^\circ.$$

注意70°移到的是 $B$ 角，不是 $C$ 角。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

D，$65^\circ$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-4">

#### <span class="example-number">例题 04</span> <span class="example-name">菱形中的中点：正向与反向求长</span> <span class="example-source">知识清单例题·合组；（2）2024山东济宁</span> {#example-4 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）如图,菱形ABCD的周长为20,对角线AC、BD相交于点O,E是CD的中点,则OE的长是()



<div class="handbook-choice-grid">

<div class="handbook-choice">

A.2.5

</div>

<div class="handbook-choice">

B.3

</div>

<div class="handbook-choice">

C.4

</div>

<div class="handbook-choice">

D.5

</div>

</div>

<div class="handbook-figure figure-medium">

![菱形ABCD中，对角线交于O，E为CD中点](./assets/q40-1.webp)

</div>



（2）（2024 山东济宁）如图,菱形 ABCD 的对角线 AC,BD 相交于点 O,E 是 AB 的中点,连接 OE. 若 OE =3,则菱形的边长为 ( )

<div class="handbook-choice-grid">

<div class="handbook-choice">

A.6

</div>

<div class="handbook-choice">

B.8

</div>

<div class="handbook-choice">

C.10

</div>

<div class="handbook-choice">

D.12

</div>

</div>

<div class="handbook-figure figure-medium">

![菱形ABCD中，对角线交于O，E为AB中点](./assets/q44-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）菱形边长 $BC=20/4=5$，对角线交点 $O$ 为 $BD$ 中点，$E$ 为 $CD$ 中点。在 $\triangle BCD$ 中，$OE=BC/2=2.5$，选 A。

（2）$O$ 为 $AC$ 中点，$E$ 为 $AB$ 中点。在 $\triangle ABC$ 中，$OE=BC/2$，所以 $BC=2OE=6$，选 A。

两题中的中点分属不同的边，必须各自找出所用三角形，不能只按两幅图的朝向判断。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）A，2.5；（2）A，6。

</div>

</div>

</details>

</article>


### 3. 只有一个中点，先证明第二个 {#construct-midpoint .exam-title}


先用平行、全等或平行四边形判定得到另一个中点，再用中位线。看到图上某点靠近一条边的中间，不是“中点”的证据。

<article class="handbook-example" aria-labelledby="example-5">

#### <span class="example-number">例题 05</span> <span class="example-name">跷跷板的高度</span> <span class="example-source">知识清单例题·2024海南</span> {#example-5 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024 海南）如图是跷跷板示意图, 支柱 OM 经过 AB 的中点 O,

OM 与地面 CD 垂直于点 M, OM = 40 cm, 当跷跷板的一端 A 着地时, 另一端 B 离地面的高度为 \_\_\_\_ cm.

<div class="handbook-figure figure-medium">

![跷跷板AB的中点O与地面之间的竖直支柱OM](./assets/q27-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

过 $B$ 作 $BE\perp CD$，垂足为 $E$。$OM\perp CD$，故 $OM\parallel BE$。$A$ 着地，$O$ 为 $AB$ 中点，因此过中点且平行 $BE$ 的直线，必交 $AE$ 于其中点 $M$。

所以 $OM$ 为 $\triangle ABE$ 的中位线，$BE=2OM=80\text{ cm}$。此处40 cm是中点的高度，不是另一端的高度。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$80\text{ cm}$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-6">

#### <span class="example-number">例题 06</span> <span class="example-name">先用新的平行四边形找中点</span> <span class="example-source">知识清单例题</span> {#example-6 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 点 E 为平行四边形 ABCD 的边 DC 的延长线上一点, 且 CE = DC, 连接 AE 交 BC 于点 F, 连接 AC、BD 交于点 O, 连接 OF. 求证: DE = 4OF.

<div class="handbook-figure figure-medium">

![平行四边形ABCD中，DC延长至E，AE与BC交于F](./assets/q23-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

连接 $BE$。原平行四边形给 $AB=DC$、$AB\parallel DC$、$BO=DO$。又 $CE=DC$，所以 $AB=CE$ 且 $AB\parallel CE$，四边形 $ABEC$ 为平行四边形。

它的对角线是 $AE$ 与 $BC$，交点 $F$ 因而是 $BC$ 中点。$O$ 为 $BD$ 中点，在 $\triangle BCD$ 中，$OF$ 为中位线，$CD=2OF$。

$D,C,E$ 顺次共线，且 $CE=CD$，所以 $DE=2CD=4OF$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$DE=4OF$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-7">

#### <span class="example-number">例题 07</span> <span class="example-name">延长垂线构造两个中点</span> <span class="example-source">知识清单例题·改编，明确图示点的位置</span> {#example-7 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在 $\triangle ABC$ 中, $AD$ 平分 $\angle BAC, AD \perp BD$ , $E$ 为 $BC$ 的中点.

(1) 求证: $DE \parallel AC$ .

(2) 若 AB=4, AC=6, 求 DE 的长.

其中 $D$ 严格位于 $\triangle ABC$ 内部。

<div class="handbook-figure figure-medium">

![三角形ABC中，AD平分顶角且垂直BD，E为BC中点](./assets/q24-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）延长 $BD$ 交 $AC$ 于 $H$。


<div class="handbook-figure figure-medium">

![延长BD至AC上的H，连接DE](./assets/q24-2.webp)

</div>


$AD$ 平分 $\angle BAC$，故 $\angle BAD=\angle HAD$；$\angle ADB=\angle ADH=90^\circ$，且 $AD$ 公共。由 ASA 得 $\triangle ADB\cong\triangle ADH$，所以 $BD=DH$、$AB=AH$。

$D$ 是 $BH$ 中点，$E$ 是 $BC$ 中点，在新三角形 $BHC$ 中用中位线，得 $DE\parallel HC$，即 $DE\parallel AC$。

（2）$AH=AB=4$，$CH=AC-AH=6-4=2$，因此 $DE=CH/2=1$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$DE\parallel AC$；（2）$DE=1$。

</div>

</div>

</details>

</article>


### 4. 两个分散中点，用同一条对角线的中点连接 {#bridge-midpoint .exam-title}


当已知两条分散的边相等，可取共同对角线的中点，把两个原边分别变为两个三角形中位线的两倍。新的两条半长线段相等，便能构造等腰；再用平行把等角移回目标图形。

<article class="handbook-example" aria-labelledby="example-8">

#### <span class="example-number">例题 08</span> <span class="example-name">交叉线段中的等腰判断</span> <span class="example-source">知识清单例题</span> {#example-8 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图所示,在四边形 ADBC 中,AB 与 CD 相交于点 O,AB=CD,E,F 分别是 BC,AD 的中点,连接 EF,分别交 DC,AB 于点 M,N,判断 $\triangle OMN$ 的形状,并说明理由.

<div class="handbook-figure figure-medium">

![四边形ADBC的两对角线相交，E、F分别为BC、AD中点](./assets/q25-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

取 $BD$ 中点 $H$，连接 $HE,HF$。


<div class="handbook-figure figure-medium">

![取BD中点H后，连接HE、HF，形成两条中位线](./assets/q25-2.webp)

</div>


在 $\triangle BCD$ 中，$HE\parallel CD$、$HE=CD/2$；在 $\triangle ABD$ 中，$HF\parallel AB$、$HF=AB/2$。$AB=CD$，所以 $HE=HF$，有 $\angle HFE=\angle HEF$。

由两组平行，$\angle HFE=\angle ONM$、$\angle HEF=\angle OMN$，故 $\angle ONM=\angle OMN$，$OM=ON$。

取点 $H$ 的关键是让它同时进入两个原三角形，不是任意新增一个点都会产生两条中位线。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$\triangle OMN$ 为等腰三角形，$OM=ON$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-9">

#### <span class="example-number">例题 09</span> <span class="example-name">延长线上的两个目标角</span> <span class="example-source">知识清单例题</span> {#example-9 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图，在四边形 $ABCD$ 中，$AB=CD$，$E,F$ 分别为 $BC,AD$ 的中点。$BA,CD$ 的延长线分别与 $EF$ 的延长线交于 $M,N$。求证：$\angle BME=\angle CNE$。


<div class="handbook-figure figure-medium">

![四边形ABCD中，BA、CD分别延长至EF延长线上的M、N](./assets/shared-midpoint-question.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

连接 $BD$，取其中点 $G$，连接 $GE,GF$。


<div class="handbook-figure figure-medium">

![在BD上取中点G，连接GE、GF作辅助线](./assets/shared-midpoint-proof.webp)

</div>


在 $\triangle ABD$ 中，$GF=AB/2$、$GF\parallel AB$；在 $\triangle BCD$ 中，$GE=CD/2$、$GE\parallel CD$。由 $AB=CD$ 得 $GF=GE$，所以 $\angle GEF=\angle GFE$。

按照图中的射线方向，由 $GF\parallel BM$ 得 $\angle GFE=\angle BME$；由 $GE\parallel CN$ 得 $\angle GEF=\angle CNE$。两式代入，得到所求等角。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$\angle BME=\angle CNE$。

</div>

</div>

</details>

</article>


## 【坑点】辨析与边界 {#pitfalls .handbook-section .is-pitfall}


### 1. 边中点与半对角中点，先看端点是谁 {#which-midpoints .pitfall-title}


“连接中点”不是一个可直接判图形类型的条件。四条原边的中点，会把原对角线变成新边；半条对角线的中点，则使新对角线仍在原对角线上。两种构造必须分别证明。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-1">

#### <span class="example-number">辨析 01</span> <span class="example-name">矩形半对角线的四个中点</span> <span class="example-source">知识清单例题</span> {#pitfall-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

矩形 $ABCD$ 的对角线交于 $O$，$E,F,G,H$ 分别为 $AO,BO,CO,DO$ 的中点。四边形 $EFGH$ 是矩形吗？说明理由。


<div class="handbook-figure figure-medium">

![矩形对角线交于O，E、F、G、H分别在四条半对角线上](./assets/half-diagonal.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

矩形给 $AO=BO=CO=DO$，所以四个中点满足 $EO=FO=GO=HO$。$E,O,G$ 共线，$F,O,H$ 共线，新对角线 $EG,FH$ 在 $O$ 互相平分，故 $EFGH$ 先是平行四边形。

又 $EG=EO+OG=FO+OH=FH$，两对角线相等，因而 $EFGH$ 是矩形。

如果改为原四条边的中点，才应使用“原等对角线→新邻边等”，得到菱形。不是同一道题的两种随意答案。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

是矩形。此题的点在半对角线上，不在原四条边上。

</div>

</div>

</details>

</article>

