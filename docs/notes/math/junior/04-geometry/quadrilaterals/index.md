---
title: 平行四边形及特殊平行四边形
pageLayout: doc
pageClass: subject-handbook
aside: true
outline:
  - 2
  - 3
noteContributors: []
noteChanges: []
---

平行四边形是共同基础，矩形多了直角，菱形多了邻边相等，正方形兼有二者。证明时先分清已有哪一类图形，再决定还缺什么条件；计算时把四边形拆成有依据的三角形。

<nav class="handbook-nav" aria-label="本章分区">
  <a class="handbook-jump is-knowledge" href="#knowledge"><span class="handbook-nav-title">01 · 知识点</span><span>概念、关系与适用条件</span></a>
  <a class="handbook-jump is-exam" href="#exam"><span class="handbook-nav-title">02 · 考点</span><span>题目分类和例题</span></a>
  <a class="handbook-jump is-pitfall" href="#pitfalls"><span class="handbook-nav-title">03 · 坑点</span><span>辨析错因，检查遗漏</span></a>
</nav>


## 【知识点】概念与依据 {#knowledge .handbook-section .is-knowledge}

### 1. 平行四边形 {#parallelogram .knowledge-title}

两组对边分别平行的四边形，叫作==平行四边形==

<div class="handbook-figure figure-large figure-fit">

![平行四边形的对边对角与互相平分的对角线](./assets/lesson-parallelogram.svg)

</div>

1. 对边平行且相等
2. 对角相等，邻角互补
3. 对角线互相平分
4. 对角线交点是对称中心

### 2. 平行四边形的判定 {#parallelogram-tests .knowledge-title}

满足以下任意一条，就能判定一个四边形是平行四边形

1. 两组对边分别平行
2. 两组对边分别相等
3. 同一组对边平行且相等
4. 两组对角分别相等
5. 两条对角线互相平分

### 3. 平行线间的距离 {#parallel-distance .knowledge-title}

两平行线间的垂直距离处处相等，就是平行四边形以这两条平行边为底时的高

### 4. 矩形 {#rectangle .knowledge-title}

有一个角是直角的平行四边形，叫作==矩形==

1. 具有平行四边形的全部性质
2. 四个角都是直角
3. 两条对角线相等

已知是平行四边形，再有一个直角或两条对角线相等，就能判定为矩形

### 5. 菱形 {#rhombus .knowledge-title}

有一组邻边相等的平行四边形，叫作==菱形==

1. 具有平行四边形的全部性质
2. 四条边相等
3. 对角线互相垂直，每条对角线平分一组对角

已知是平行四边形，再有邻边相等或对角线垂直，就能判定为菱形；四边相等的四边形也是菱形

### 6. 正方形 {#square .knowledge-title}

有一组邻边相等且有一个直角的平行四边形，叫作==正方形==，同时具有矩形和菱形的全部性质

<div class="handbook-figure figure-comparison figure-fit">

![矩形菱形正方形的边角与对角线关系对照](./assets/lesson-special-quadrilaterals.svg)

</div>

- 矩形加上邻边相等，或对角线垂直，可判定为正方形
- 菱形加上一个直角，或对角线相等，可判定为正方形

### 7. 面积 {#areas .knowledge-title}

| 图形 | 面积公式 |
| --- | --- |
| 平行四边形 | $S=bh$（底乘对应高） |
| 矩形 | $S=ab$（长乘宽） |
| 菱形 | $S=bh=\frac12d_1d_2$（两对角线乘积的一半） |
| 正方形 | $S=a^2=\frac12d^2$（$d$ 为对角线长） |

## 【考点】题目分类和例题 {#exam .handbook-section .is-exam}



### 1. 正方形三种构造的条件与依据 {#square-models .exam-title}


十字垂线：比较的是跨越对边的完整线段。 下图的两线段分别跨越两组对边，且互相垂直。


<div class="handbook-figure-group">

<div class="handbook-figure figure-medium">

![正方形中AE与BF垂直，分别跨越两组对边](./assets/q64-1.webp)

</div>



<div class="handbook-figure figure-medium">

![正方形中AE与FH垂直，FH的端点位于对边](./assets/q64-2.webp)

</div>



<div class="handbook-figure figure-medium">

![正方形中GE与FH垂直，两段分别跨越两组对边](./assets/q64-3.webp)

</div>

</div>


第一图比较 $\triangle ADE$ 与 $\triangle BAF$：$AD=BA$，两直角相等；$AE\perp BF$、$AD\perp BA$ 使 $\angle DAE=\angle ABF$，由 ASA 得全等，故 $AE=BF$。后两图可将跨段平行移动到从顶点出发，利用同一组平行线间同向跨段等长，再化回第一图。普通矩形两组宽度不同，任意垂直的半截线段也不符合这个结论。

45°半角：把散段接成一条。 $E,F$ 分别在 $BC,CD$ 上，且 $\angle EAF=45^\circ$。


<div class="handbook-figure figure-medium">

![正方形半角构造：把ADF旋转到ABG的位置](./assets/q64-4.webp)

</div>


把 $\triangle ADF$ 绕 $A$ 旋转90°到 $\triangle ABG$，$G$ 在 $BC$ 经 $B$ 的反向延长线上。旋转给 $AG=AF$、$BG=DF$、$\angle BAG=\angle DAF$。原直角去掉45°后，$\angle BAE+\angle DAF=45^\circ$，故 $\angle EAG=\angle EAF$。再用公共边 $AE$ 作 SAS，得 $\triangle AEG\cong\triangle AEF$。

因此 $EF=EG=BE+DF$，两三角形面积也相等。等式中的“加”依赖 $G,B,E$ 的顺序；点在延长线上时须重读角和点序，不能直接照搬。边端的退化小三角形须另作直接核验。

中心直角：先确认等距，再割补。 $O$ 为正方形中心，$E,F$ 在相邻边 $AB,BC$ 上，且 $\angle EOF=90^\circ$。


<div class="handbook-figure figure-medium">

![正方形中心O的两条垂直射线与相邻边交于E、F](./assets/q64-5.webp)

</div>


$OA=OB$，$\angle OAB=\angle OBF=45^\circ$。由 $\angle AOB=\angle EOF=90^\circ$ 同减 $\angle EOB$，得到 $\angle AOE=\angle BOF$，ASA 得 $\triangle AOE\cong\triangle BOF$。将 $BEOF$ 中的 $\triangle BOF$ 换成等面积的 $\triangle AOE$，恰拼成 $\triangle AOB$，所以面积为原正方形的四分之一。

这个模型需要中心等距、相邻有限边和完整区域条件。两正方形重叠题还要核其他两边有没有切入目标区域，不能只凭一个直角就写四分之一。原书另列的三角形迁移图如下，若不补等腰、中点或等距条件，不能作无条件推广。


<div class="handbook-figure-group">

<div class="handbook-figure figure-medium">

![原书第一幅中心直角迁移示意，未完整标出所需等距条件](./assets/q64-6.webp)

</div>



<div class="handbook-figure figure-medium">

![原书第二幅中心直角迁移示意，须另核等腰与中点条件](./assets/q64-7.webp)

</div>

</div>


### 2. 先把边、角、对角线换成小三角形的条件 {#basic-calculation .exam-title}


已知平行四边形，先标对边相等与两对角互平分，再寻找目标三角形。矩形还能给半对角线相等，菱形还能给对角垂直与顶角平分；不要把后两类的额外性质无条件送给一般平行四边形。

<article class="handbook-example" aria-labelledby="example-1">

#### <span class="example-number">例题 01</span> <span class="example-name">平行四边形中的小三角形周长</span> <span class="example-source">知识清单例题</span> {#example-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 已知 $\square ABCD$ 的对角线 AC, BD 交于点 O, 且 AC = 8, BD = 10, AB = 5, 则 $\triangle OCD$ 的周长为 \_\_\_\_.

<div class="handbook-figure figure-medium">

![平行四边形ABCD的对角线AC、BD相交于O](./assets/q12-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$CD=AB=5$，$OC=AC/2=4$，$OD=BD/2=5$。因此 $\triangle OCD$ 周长为 $5+4+5=14$。两条对角线并不等长，不能取 $OC=OD$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

14。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-2">

#### <span class="example-number">例题 02</span> <span class="example-name">矩形对角线的交角</span> <span class="example-source">知识清单例题</span> {#example-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在矩形 ABCD 中, 对角线 AC, BD 相交于点 O, $\angle BOC = 120^{\circ}$ , AB = 6. 求对角线的长.

<div class="handbook-figure figure-medium">

![矩形ABCD的两对角线交于O](./assets/q28-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

矩形对角线相等且互平分，所以 $OA=OB$。$A,O,C$ 共线，得 $\angle AOB=180^\circ-120^\circ=60^\circ$。等腰三角形 $AOB$ 的顶角为60°，故为等边三角形，$OA=AB=6$。于是 $AC=2OA=12$，$BD=AC=12$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

两条对角线长都为12。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-3">

#### <span class="example-number">例题 03</span> <span class="example-name">菱形的整角与半角</span> <span class="example-source">知识清单例题</span> {#example-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,在菱形 ABCD 中, $\angle D=150^{\circ}$ ,则 $\angle1=$ \_\_\_\_°.

<div class="handbook-figure figure-medium">

![菱形ABCD中，AC将A处的角分为两部分，标出角1](./assets/q38-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

对角相等给 $\angle B=\angle D=150^\circ$，且 $AB=BC$，所以 $\triangle ABC$ 的两底角各为 $(180^\circ-150^\circ)/2=15^\circ$。

图中角1是 $\angle BAC$，不是整个菱形在 $A$ 处的30°内角。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$15^\circ$。

</div>

</div>

</details>

</article>

### 3. 角平分配平行，把角关系转成等腰边长 {#bisector-length .exam-title}


用平行线把一个半角移进同一个三角形，与另一个半角组成等底角，便得到等腰。求目标线段时，再按实际点序相加或相减，不把图中的重叠段漏掉。

<article class="handbook-example" aria-labelledby="example-4">

#### <span class="example-number">例题 04</span> <span class="example-name">两段等腰底边的重叠</span> <span class="example-source">知识清单例题</span> {#example-4 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在 $\square ABCD$ 中, $AB = 8$ , $AD = 5$ , $\angle DAB$ , $\angle ABC$ 的平分线 $AE$ , $BF$ 分别与直线 $CD$ 交于点 $E$ , $F$ , 求 $EF$ 的长.

<div class="handbook-figure figure-medium">

![平行四边形ABCD中，两邻角的平分线交CD于E、F](./assets/q14-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$CD=AB=8$，$AD=BC=5$。$AE$ 平分 $\angle DAB$，且 $AB\parallel CD$，所以 $\angle DEA=\angle EAB=\angle DAE$，得 $DE=AD=5$。同理，$CF=BC=5$。

按图 $D,F,E,C$ 顺次共线，两段 $DE,CF$ 的重叠为 $EF$，故

$$EF=DE+CF-CD=5+5-8=2.$$

若换了点序，不能机械保留同一个减法式。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$EF=2$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-5">

#### <span class="example-number">例题 05</span> <span class="example-name">角平分线与外部点</span> <span class="example-source">知识清单例题·2024广东广州</span> {#example-5 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024 广东广州）如图，□ABCD 中，BC=2，点 E 在 DA 的延长线上，BE=3，若 BA 平分 $\angle EBC$ ，则 DE= \_\_\_\_.

<div class="handbook-figure figure-medium">

![平行四边形ABCD中，DA延长至E，连接BE](./assets/q18-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$BC\parallel AD$，$AD=BC=2$。$BA$ 平分 $\angle EBC$，故 $\angle CBA=\angle EBA$；平行又给 $\angle CBA=\angle BAE$，从而 $AE=BE=3$。

$D,A,E$ 顺次共线，$DE=DA+AE=2+3=5$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$DE=5$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-6">

#### <span class="example-number">例题 06</span> <span class="example-name">垂线、半角与两小三角形</span> <span class="example-source">知识清单例题</span> {#example-6 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,在平行四边形 ABCD 中,对角线 AC,BD 相交于点 O,分别过点 A,C 作 $AE \perp BD, CF \perp BD$ ,垂足分别为 E,F.AC 平分 $\angle DAE$ .



(1) 若 $\angle AOE = 50^{\circ}$ ，求 $\angle ACB$ 的度数.

(2) 求证: AE = CF.

<div class="handbook-figure figure-medium">

![平行四边形中，从A、C向对角线BD作垂线AE、CF](./assets/q17-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$\triangle AEO$ 在 $E$ 处为直角，$\angle EAO=90^\circ-50^\circ=40^\circ$。$AC$ 平分 $\angle DAE$，得 $\angle OAD=40^\circ$。由 $AD\parallel BC$ 得 $\angle ACB=40^\circ$。

（2）对角线互平分给 $AO=CO$；$\angle AEO=\angle CFO=90^\circ$，$\angle EOA=\angle FOC$ 为对顶角。由 AAS，$\triangle AEO\cong\triangle CFO$，故 $AE=CF$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$40^\circ$；（2）$AE=CF$。

</div>

</div>

</details>

</article>

### 4. 先判图形，再使用它的性质 {#prove-before-use .exam-title}


把已有条件与判据逐项配对。尚未证明是平行四边形时，不能先用对边相等；尚未证明是矩形时，不能先用等对角线。开放补条件题要补尚未有的条件，而不是重复原已知。

<article class="handbook-example" aria-labelledby="example-7">

#### <span class="example-number">例题 07</span> <span class="example-name">任选条件后完成证明与计算</span> <span class="example-source">知识清单例题·2024湖南</span> {#example-7 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

(2024 湖南) 如图, 在四边形 ABCD 中, $AB \parallel CD$ , 点 E 在边 AB 上, \_\_\_\_.

请从“① $\angle B=\angle AED$ ；② $AE=BE, AE=CD$ ”这两组条件中任选一组作为已知条件，填在横线上（填序号），再解决下列问题：

(1) 求证: 四边形 BCDE 为平行四边形.

(2) 若 $AD \perp AB, AD = 8, BC = 10$ , 求线段 AE 的长.

<div class="handbook-figure figure-medium">

![四边形ABCD中，E在AB上，连接DE](./assets/q19-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）选择①：$\angle B=\angle AED$，按图中的同位角关系得 $BC\parallel DE$；又 $BE\parallel CD$，两组对边分别平行，故 $BCDE$ 为平行四边形。

选择②：由 $AE=BE$、$AE=CD$ 得 $BE=CD$；又 $BE\parallel CD$，同一组对边平行且相等，也可判定。

（2）判定后才能用 $DE=BC=10$。在直角三角形 $ADE$ 中，$AE=\sqrt{10^2-8^2}=6$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

两组条件都可选；（1）$BCDE$ 为平行四边形；（2）$AE=6$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-8">

#### <span class="example-number">例题 08</span> <span class="example-name">对边减去等长段，再证明全等</span> <span class="example-source">知识清单例题·2024湖北武汉</span> {#example-8 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024 湖北武汉）如图，在□ABCD 中，点 E, F 分别在边 BC, AD 上, AF = CE.

(1) 求证: $\triangle ABE \cong \triangle CDF.$

(2) 连接 EF. 请添加一个与线段相关的条件, 使四边形 ABEF 是平行四边形。(不需要说明理由)

<div class="handbook-figure figure-medium">

![平行四边形ABCD中，E、F分别在BC、AD上，连接AE、CF](./assets/q20-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）原平行四边形给 $AB=CD$、$AD=BC$、$\angle B=\angle D$。又 $AF=CE$，所以 $DF=AD-AF=BC-CE=BE$。由两边及夹角相等，$\triangle ABE\cong\triangle CDF$（SAS）。

（2）可补 $AF=BE$。原有 $AF\parallel BE$，添同一组对边相等后，即可判四边形 $ABEF$ 为平行四边形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$\triangle ABE\cong\triangle CDF$；（2）例如 $AF=BE$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-9">

#### <span class="example-number">例题 09</span> <span class="example-name">一般四边形从三个直角入手</span> <span class="example-source">知识清单例题</span> {#example-9 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如原图，在四边形ABCD中，$AB\parallel CD$，$\angle BAD=90^\circ$，$AB=5$，$BC=12$，$AC=13$。求证：四边形ABCD是矩形。

<div class="handbook-figure figure-medium">

![四边形ABCD中连接对角线AC](./assets/q29-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

由 $AB\parallel CD$、$\angle BAD=90^\circ$，得 $\angle ADC=90^\circ$。在 $\triangle ABC$ 中，$5^2+12^2=13^2$，由勾股定理逆定理，最长边 $AC$ 对面的 $\angle B=90^\circ$。

四边形已有三个直角，所以第四角也为90°，$ABCD$ 是矩形。不是由最初一个直角就能直接判定。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$ABCD$ 是矩形。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-10">

#### <span class="example-number">例题 10</span> <span class="example-name">动点何时使图形成矩形</span> <span class="example-source">知识清单例题</span> {#example-10 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在 $\triangle ABC$ 中, 点 $O$ 是边 $AC$ 上一动点, 过点 $O$ 作直线 $MN \parallel BC$ . 设 $MN$ 交 $\angle ACB$ 的平分线于点 $E$ , 交 $\triangle ABC$ 的外角 $\angle ACD$ 的平分线于点 $F$ .



(1) 求证: OE = OF.

(2) 当点 O 在边 AC 上运动到什么位置时, 四边形 AECF 是矩形? 并说明理由.

<div class="handbook-figure figure-medium">

![三角形ABC中，过AC上的O作BC的平行线，与内外角平分线相交](./assets/q31-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）外角平分给 $\angle ACF=\angle FCD$，平行给 $\angle FCD=\angle CFO$，所以 $OF=OC$。同理，内角平分与平行给 $OE=OC$，故 $OE=OF$。

（2）当 $O$ 为 $AC$ 中点时，$AO=OC$，配合 $EO=FO$，新图的两对角线互相平分，先得平行四边形。内外角邻补，两平分线夹角为

$$\angle ECF=\tfrac12(\angle ACB+\angle ACD)=90^\circ,$$

因此成为矩形。反过来，若已是矩形，对角线必互相平分，交点 $O$ 必为 $AC$ 中点，所以这一位置也是必要的。$O=C$ 时图形退化，不能称为矩形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$OE=OF$；（2）$O$ 为 $AC$ 中点时，且仅此时为矩形。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-11">

#### <span class="example-number">例题 11</span> <span class="example-name">先判矩形，再换底高求长</span> <span class="example-source">知识清单例题·2024甘肃兰州</span> {#example-11 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（2024甘肃兰州）如图，在 $\triangle ABC$ 中， $AB=AC,D$ 是 $BC$ 的中点， $CE\parallel AD,AE\perp AD,EF\perp AC.$

(1) 求证: 四边形 ADCE 是矩形.  
(2) 若 BC=4, CE=3, 求 EF 的长.

<div class="handbook-figure figure-medium">

![等腰三角形ABC中，D为底边中点，另作平行线与垂线](./assets/q37-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$AB=AC$ 且 $D$ 为 $BC$ 中点，三线合一给 $AD\perp BC$。结合 $CE\parallel AD$、$AE\perp AD$，得到 $\angle ADC=\angle DCE=\angle EAD=90^\circ$，故 $ADCE$ 为矩形。

（2）$CD=BC/2=2$，矩形给 $AE=CD=2$、$\angle AEC=90^\circ$，所以 $AC=\sqrt{2^2+3^2}=\sqrt{13}$。

同一个三角形 $AEC$ 用两种底高表示面积，$AC\cdot EF=AE\cdot CE=6$，因此 $EF=6/\sqrt{13}=6\sqrt{13}/13$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$ADCE$ 为矩形；（2）$EF=6\sqrt{13}/13$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-12">

#### <span class="example-number">例题 12</span> <span class="example-name">中垂线与原平行边构造菱形</span> <span class="example-source">知识清单例题</span> {#example-12 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图所示, □ABCD 的对角线 AC 的垂直平分线与 AD, BC, AC 分别相交于点 E, F, O, 连接 AF, EC. 四边形 AFCE 是菱形吗? 为什么?

<div class="handbook-figure figure-medium">

![平行四边形的对角线AC中垂线交AD、BC于E、F](./assets/q43-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

方法一：$AD\parallel BC$，故 $\angle EAO=\angle FCO$；$AO=CO$，$\angle AOE=\angle COF=90^\circ$。ASA 得 $\triangle AOE\cong\triangle COF$，所以 $AE=CF$。结合 $AE\parallel CF$，先判 $AFCE$ 为平行四边形；其对角线 $AC\perp EF$，再判菱形。

方法二：中垂线性质给 $AE=EC$、$AF=FC$。由等腰及平行得到 $\angle ECA=\angle EAC=\angle FCA$。$\triangle ECO,\triangle FCO$ 有两个等角及共同夹边 $CO$，ASA 得 $EC=FC$。于是四边 $AE=EC=CF=FA$，直接判菱形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$AFCE$ 是菱形。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-13">

#### <span class="example-number">例题 13</span> <span class="example-name">从矩形或菱形出发补条件</span> <span class="example-source">知识清单例题·合组；（2）2024黑龙江龙东地区</span> {#example-13 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）如图, 在平行四边形 ABCD 中, AC 与 BD 相交于点 O, $\angle OAB = \angle OBA$ .

(1) 证明: 平行四边形 ABCD 是矩形.  
(2) 请添加一个条件使矩形 ABCD 为正方形.

<div class="handbook-figure figure-medium">

![平行四边形ABCD的对角线交于O](./assets/q48-1.webp)

</div>



（2）(2024 黑龙江龙东地区) 如图, 在菱形 ABCD 中, 对角线 AC, BD 相交于点 O, 请添加一个条件: , 使得菱形 ABCD 为正方形.

<div class="handbook-figure figure-medium">

![菱形ABCD的对角线AC、BD交于O](./assets/q58-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$\angle OAB=\angle OBA$，所以 $OA=OB$。原平行四边形又给 $OA=OC$、$OB=OD$，故 $AC=2OA=2OB=BD$，先判矩形。再加 $AC\perp BD$，便同时具有菱形条件，成为正方形；也可加 $AB=BC$。

（2）原图已是菱形，可加 $AC=BD$，使其又是矩形，进而为正方形；也可加一个角为90°。不能只重复菱形本有的“对角线垂直”作为新条件。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）原图为矩形，再添例如 $AC\perp BD$；（2）例如 $AC=BD$。答案均不唯一。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-14">

#### <span class="example-number">例题 14</span> <span class="example-name">外部等距点连接两次判定</span> <span class="example-source">知识清单例题</span> {#example-14 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在 $\square ABCD$ 中, 对角线 $AC, BD$ 交于点 $O, E$ 是 $BD$ 延长线上的点, 且 $EA = EC$ .

(1) 求证: 四边形 ABCD 是菱形.  
(2) 若 $\angle DAC = \angle EAD + \angle AED$ ，求证：四边形 ABCD 是正方形.

<div class="handbook-figure figure-medium">

![平行四边形ABCD中，BD延长至E，连接EA、EC](./assets/q53-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$AO=CO$，且 $EA=EC$，所以 $E$ 在 $AC$ 中垂线上。$O$ 是中点，$E\ne O$，故直线 $EO$ 就是中垂线。$E,O,B,D$ 共线，得 $AC\perp BD$，平行四边形因而是菱形。

（2）按图 $B,D,E$ 顺次共线，$\angle ADB$ 是 $\triangle ADE$ 的外角，

$$\angle ADB=\angle EAD+\angle AED=\angle DAC.$$

在 $\triangle AOD$ 中得到等底角，故 $AO=DO$。原两对角线互平分，得 $AC=2AO=2DO=BD$。菱形又有等对角线，所以是正方形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$ABCD$ 是菱形；（2）加所给角条件后是正方形。

</div>

</div>

</details>

</article>

### 5. 长度与面积：先分半，再倍回 {#length-area .exam-title}


菱形两对角线垂直平分，先用半条对角线构成的直角三角形求长度。求整图面积时恢复完整对角线；若求高，用“对角线积半=底×高”表达同一面积。

<article class="handbook-example" aria-labelledby="example-15">

#### <span class="example-number">例题 15</span> <span class="example-name">周长与一条对角线求面积</span> <span class="example-source">知识清单例题</span> {#example-15 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,已知菱形 ABCD 的周长为 24,一条对角线的长为 8,求该菱形的面积.

<div class="handbook-figure figure-medium">

![菱形ABCD的两对角线交于O](./assets/q39-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

边长 $AB=24/4=6$。不妨令 $AC=8$，则 $OA=4$。直角三角形 $AOB$ 中，$OB=\sqrt{6^2-4^2}=2\sqrt5$，所以完整对角线 $BD=2OB=4\sqrt5$。

$$S=\frac12 AC\cdot BD=\frac12\times8\times4\sqrt5=16\sqrt5.$$

两个因子一半分别来自“半条对角线”和“面积积半”，不能随意混抵。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$16\sqrt5$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-16">

#### <span class="example-number">例题 16</span> <span class="example-name">60度先产生等边三角形</span> <span class="example-source">知识清单例题</span> {#example-16 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,已知某广场的菱形花坛 ABCD 的周长是 $24 \, m$ , $\angle BAD = 60^{\circ}$ , 则对角线 AC 的长为 ( )



<div class="handbook-choice-grid">

<div class="handbook-choice">

A. $6\sqrt{3}$ m

</div>

<div class="handbook-choice">

B.6 m

</div>

<div class="handbook-choice">

C. $3\sqrt{3}$ m

</div>

<div class="handbook-choice">

D.3 m

</div>

</div>

<div class="handbook-figure figure-medium">

![菱形花坛ABCD中，连接两条对角线](./assets/q41-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

每边为 $24/4=6\text{ m}$。$AB=AD$、$\angle BAD=60^\circ$，所以 $\triangle ABD$ 为等边三角形，$BD=6\text{ m}$、$OB=3\text{ m}$。

直角三角形 $AOB$ 中，$OA=\sqrt{6^2-3^2}=3\sqrt3\text{ m}$，故 $AC=2OA=6\sqrt3\text{ m}$，选 A。B是另一对角线，C是半条目标对角线，D是半条另一对角线。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

A，$6\sqrt3\text{ m}$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-17">

#### <span class="example-number">例题 17</span> <span class="example-name">用两种面积式换算垂直高</span> <span class="example-source">知识清单例题</span> {#example-17 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,四边形 ABCD 是菱形,AC=8,DB=6,DH⊥AB 于点 H.求 DH 的长.

<div class="handbook-figure figure-medium">

![菱形ABCD中，从D向AB作垂线DH](./assets/q42-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$OA=4$、$OB=3$ 且互相垂直，所以 $AB=\sqrt{4^2+3^2}=5$。整图面积为 $8\times6/2=24$。

以 $AB$ 为底，高是 $DH$，因此 $5DH=24$，$DH=24/5$。这个高既不是半对角线，也不是菱形的边。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$DH=24/5$。

</div>

</div>

</details>

</article>

### 6. 等对角线把动线段换成距离 {#minimum .exam-title}


目标线段若是一个小矩形的对角线，可先换成另一条对角线，再用点到直线的垂线段最短。还必须检查垂足能否取到，以及动点在端点时的小图是否退化。

<article class="handbook-example" aria-labelledby="example-18">

#### <span class="example-number">例题 18</span> <span class="example-name">求两垂足之间距离的最小值</span> <span class="example-source">知识清单例题</span> {#example-18 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在 $\triangle ABC$ 中, $\angle C = 90^{\circ}, AC = BC = 6, P$ 为边 $AB$ 上一动点, 作 $PD \perp BC$ 于点 $D$ , $PE \perp AC$ 于点 $E$ , 求 $DE$ 的最小值.

<div class="handbook-figure figure-medium">

![等腰直角三角形ABC中，从AB上的P向两直角边作垂线](./assets/q32-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

当 $P$ 在 $AB$ 内部时，$C,D,P,E$ 处已有三个直角，故 $CDPE$ 是矩形，$DE=CP$。

于是目标转成固定点 $C$ 到边 $AB$ 上点 $P$ 的最短距离。等腰三角形的高落在底边中点，垂足在允许范围内，最小值能够取到。$AB=\sqrt{6^2+6^2}=6\sqrt2$，此时 $CP$ 同时是直角三角形的斜边中线，故 $CP=AB/2=3\sqrt2$。

若 $P=A$ 或 $P=B$，小矩形虽退化，直接计算 $DE=6$，仍大于 $3\sqrt2$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

最小值为 $3\sqrt2$，当 $P$ 为 $AB$ 中点时取得。

</div>

</div>

</details>

</article>

### 7. 平移、翻折后，先认对应点和固定点 {#transformations .exam-title}


平移保持整个图形的对应边角，翻折保持对应点到折痕上固定点的距离。先写出哪两个点对应，再列等边，不能将旁边一条看似相近的线段当作对应段。

<article class="handbook-example" aria-labelledby="example-19">

#### <span class="example-number">例题 19</span> <span class="example-name">矩形中的平移与等腰判断</span> <span class="example-source">知识清单例题</span> {#example-19 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 在矩形 ABCD 中, 连接对角线 AC、BD, 将 $\triangle ABC$ 沿 BC 方向平移, 使点 B 移到点 C 处, 得到 $\triangle DCE$ .



(1) 求证: $\triangle ACD \cong \triangle EDC.$   
(2)请探究 $\triangle BDE$ 的形状,并说明理由.

<div class="handbook-figure figure-medium">

![矩形ABCD中的三角形ABC沿BC方向平移得到DCE](./assets/q33-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）平移对应为 $A\to D$、$B\to C$、$C\to E$，所以 $CE=BC$。矩形又给 $AD=BC$，故 $AD=EC$。$CD$ 公共，$\angle ADC=\angle ECD=90^\circ$，由 SAS 得 $\triangle ACD\cong\triangle EDC$。

（2）矩形有 $AC=BD$，平移有 $DE=AC$，所以 $BD=DE$，$\triangle BDE$ 是等腰三角形。等腰不是只由“平移”两个字得来，还用了原矩形的等对角线。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）$\triangle ACD\cong\triangle EDC$；（2）$\triangle BDE$ 为等腰三角形，$BD=DE$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-20">

#### <span class="example-number">例题 20</span> <span class="example-name">翻折到另一边的中点</span> <span class="example-source">知识清单例题·2024江苏徐州</span> {#example-20 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

(2024 江苏徐州) 如图, 将矩形纸片 ABCD 沿边 EF 折叠, 使点 D 在边 BC 中点 M 处. 若 AB = 4, BC = 6, 则 CF = \_\_\_\_.

<div class="handbook-figure figure-medium">

![矩形纸片沿EF翻折，顶点D落到BC中点M](./assets/q35-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

折痕上的 $F$ 不动，原顶点 $D$ 的像为 $M$，所以 $DF=MF$。$CD=4$、$MC=3$，设 $CF=x$，则 $DF=4-x$，且 $0<x<4$。

在直角三角形 $MCF$ 中，

$$(4-x)^2=3^2+x^2.$$

展开并同减 $x^2$，得 $16-8x=9$，所以 $x=7/8$。回验 $DF=25/8$，$MF=\sqrt{9+49/64}=25/8$，且 $0<7/8<4$，位置与等距都符合。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$CF=7/8$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-21">

#### <span class="example-number">例题 21</span> <span class="example-name">折痕与跨越正方形的线段</span> <span class="example-source">知识清单例题</span> {#example-21 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 将一边长为 12 的正方形纸片 ABCD 的顶点 A 折至 DC 边上的点 E 处, 使 DE = 5, 折痕为 PQ, 则 PQ 的长为 ( )



<div class="handbook-choice-grid">

<div class="handbook-choice">

A.12

</div>

<div class="handbook-choice">

B.13

</div>

<div class="handbook-choice">

C.14

</div>

<div class="handbook-choice">

D.15

</div>

</div>

<div class="handbook-figure figure-medium">

![正方形纸片的A折到DC上的E，折痕PQ跨AD、BC](./assets/q54-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

翻折使 $PQ$ 为 $AE$ 的垂直平分线，所以 $PQ\perp AE$。作 $QF\perp AD$，则 $QF=AB=AD=12$。

$\triangle ADE$ 与 $\triangle QFP$ 的 $D,F$ 均为直角，$\angle DAE=\angle FQP$ 由两组垂直关系得到，再结合夹边 $AD=QF$，ASA 得全等。对应斜边 $PQ=AE$。

$\triangle ADE$ 在 $D$ 处为直角，故 $AE=\sqrt{12^2+5^2}=13$，选 B。12只代表正方形宽度，不是斜折痕长。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

B，$PQ=13$。

</div>

</div>

</details>

</article>

### 8. 正方形的45度与全等转换 {#square-angles .exam-title}


正方形对角线给45°；遇到相等边，再在具体三角形中形成等腰。两条边分散时，可利用正方形等边、夹直角及公共边作 SAS，将目标角或长度换到另一处。

<article class="handbook-example" aria-labelledby="example-22">

#### <span class="example-number">例题 22</span> <span class="example-name">对角线上的等长点</span> <span class="example-source">知识清单例题</span> {#example-22 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图, 已知 P 是正方形 ABCD 对角线 BD 上一点, 且 BP = BC, 则 $\angle ACP$ 的度数是 \_\_\_\_.

<div class="handbook-figure figure-medium">

![正方形ABCD中，P在对角线BD上，连接CP](./assets/q47-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$BD$ 平分顶角，$\angle PBC=45^\circ$。$BP=BC$，所以 $\triangle BPC$ 两底角各为 $(180^\circ-45^\circ)/2=67.5^\circ$。

$AC$ 平分 $C$ 处直角，$\angle BCA=45^\circ$。依图中射线次序，$\angle ACP=67.5^\circ-45^\circ=22.5^\circ$。$P$ 并不是对角线交点，不能擅加中点条件。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$22.5^\circ$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-23">

#### <span class="example-number">例题 23</span> <span class="example-name">全等移角后再用外角</span> <span class="example-source">知识清单例题</span> {#example-23 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,在正方形 ABCD 中,E 是对角线 BD 上一点,AE 的延长线交 CD 于点 F,连接 CE.若 $\angle BAE = 56^{\circ}$ ,则 $\angle CEF =$ \_\_\_\_ $^{\circ}$ .

<div class="handbook-figure figure-medium">

![正方形ABCD中，E在BD上，AE延长至CD上的F](./assets/q50-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

$AB=BC$，$\angle ABE=\angle CBE=45^\circ$，$BE$ 公共，SAS 得 $\triangle ABE\cong\triangle CBE$，所以 $\angle BCE=56^\circ$。

$\angle ECF=90^\circ-56^\circ=34^\circ$。又 $AB\parallel CD$，给 $\angle EFD=56^\circ$；它是 $\triangle CEF$ 的外角，所以 $\angle CEF=56^\circ-34^\circ=22^\circ$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$22^\circ$。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-24">

#### <span class="example-number">例题 24</span> <span class="example-name">延长等长段后比较两大三角形</span> <span class="example-source">知识清单例题</span> {#example-24 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,在正方形 ABCD 中,点 E 在 BC 边的延长线上,点 F 在 CD 边的延长线上,且 CE=DF,连接 AE 和 BF 相交于点 M.求证:AE=BF.

<div class="handbook-figure figure-medium">

![正方形的BC、CD分别延长至E、F，连接AE、BF](./assets/q51-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

按图 $B,C,E$ 与 $C,D,F$ 分别顺次共线。由 $BC=CD$、$CE=DF$ 得 $BE=BC+CE=CD+DF=CF$。

$AB=BC$，$\angle ABE=\angle BCF=90^\circ$，由 SAS 得 $\triangle AEB\cong\triangle BFC$，所以 $AE=BF$。交点 $M$ 不参与这一证明，不能因图形对称感就另称它为中点。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$AE=BF$。

</div>

</div>

</details>

</article>


出现两个垂足时： 先用两组垂直形成的等角及正方形等边判直角三角形全等，把已知长度换到所求图形；再对共用同一线段的两个直角三角形分别识别斜边并写勾股式，用同一个平方量相等消去未知数的平方。设未知段前先核点序，避免把整段相加写成相减。

<article class="handbook-example" aria-labelledby="example-25">

#### <span class="example-number">例题 25</span> <span class="example-name">两个垂足与面积方程</span> <span class="example-source">知识清单例题·2024北京</span> {#example-25 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

(2024 北京) 如图, 在正方形 ABCD 中, 点 E 在 AB 上, $AF \perp DE$ 于点 F, $CG \perp DE$ 于点 G. 若 AD = 5, CG = 4, 则 $\triangle AEF$ 的面积为 \_\_\_\_.

<div class="handbook-figure figure-medium">

![正方形ABCD中，E在AB上，A、C向DE作垂线](./assets/q57-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

直角三角形 $DCG$ 中，$DG=\sqrt{5^2-4^2}=3$。$\triangle ADF$ 与 $\triangle DCG$ 均为直角三角形，$AD=DC=5$，两组垂直给 $\angle DAF=\angle CDG$，由 AAS 得全等，所以 $AF=DG=3$、$DF=CG=4$。

设 $EF=x>0$。按 $D,F,E$ 的次序，$DE=4+x$。分别在 $AEF,ADE$ 中用勾股：

$$AE^2=3^2+x^2=(4+x)^2-5^2.$$

展开消去 $x^2$，得 $18=8x$，所以 $x=9/4$。因此 $S_{\triangle AEF}=AF\cdot EF/2=3\times(9/4)/2=27/8$。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$27/8$。

</div>

</div>

</details>

</article>

### 9. 先确认区域，再作等面积替换 {#equal-area .exam-title}


替换面积的依据可以是全等，也可以是同底等高。必须明确哪一块换成哪一块、是否恰好拼成目标区域，不凭涂色或“模型名称”直接给比例。

<article class="handbook-example" aria-labelledby="example-26">

#### <span class="example-number">例题 26</span> <span class="example-name">绕中心旋转后的重叠区域</span> <span class="example-source">知识清单例题·改编，明确重叠区域</span> {#example-26 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,正方形ABCD的边长为4,O为正方形ABCD的对角线的交点,正方形 $A_{1}B_{1}C_{1}O$ 绕点O旋转, $A_{1}O$ 交AB于E点, $C_{1}O$ 交BC于F点,则两个正方形重叠部分的面积为\_\_\_\_.

已知图示重叠区域恰为四边形 $BEOF$，旋转正方形的另外两条边未切入这一区域。

<div class="handbook-figure figure-medium">

![两个正方形共用旋转点O，两边分别与AB、BC交于E、F](./assets/q56-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

按题图，重叠区域为 $BEOF$。$OA=OB$，$\angle OAB=\angle OBF=45^\circ$。$\angle AOB=\angle EOF=90^\circ$ 同减 $\angle EOB$，得 $\angle AOE=\angle BOF$。

所以 $\triangle AOE\cong\triangle BOF$（ASA），面积相等。将 $BEOF$ 中后一块换成 $AOE$，得到 $\triangle AOB$，面积为 $4^2/4=4$。

这里使用的是图示两条边段确实交到 $E,F$，且另两条边没有切入 $BEOF$ 的情形。改变旋转正方形的大小或位置时，应重新确认重叠区域，不无条件推广。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

重叠部分面积为4。

</div>

</div>

</details>

</article>


<article class="handbook-example" aria-labelledby="example-27">

#### <span class="example-number">例题 27</span> <span class="example-name">两个大小不同的正方形换面积</span> <span class="example-source">知识清单例题</span> {#example-27 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图，四边形 $ABCD$ 和 $CEFG$ 都是正方形，$G$ 在 $CD$ 上，$BC=10\text{ cm}$。求四边形 $ABFD$ 的面积。


<div class="handbook-figure figure-medium">

![大正方形ABCD与右侧小正方形CEFG，G在CD上](./assets/two-squares-question.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

连接 $CF$。


<div class="handbook-figure figure-medium">

![连接小正方形对角线CF，与大正方形对角线BD比较方向](./assets/two-squares-proof.webp)

</div>


两个正方形的对角线分别与共线的 $BC,CE$ 形成45°，所以 $CF\parallel BD$。点 $F,C$ 到直线 $BD$ 的距离相等，$\triangle BDF$ 与 $\triangle BDC$ 同底等高，面积相等。

四边形 $ABFD$ 分成 $\triangle ABD$ 与 $\triangle BDF$，将后一块换成 $\triangle BDC$，便得到整个正方形 $ABCD$，面积为 $10^2=100\text{ cm}^2$。没有要求小正方形边长也为10。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$100\text{ cm}^2$。

</div>

</div>

</details>

</article>

## 【坑点】辨析与边界 {#pitfalls .handbook-section .is-pitfall}


### 1. 判据中的对象与前提不能交换 {#wrong-condition .pitfall-title}


平行四边形的“同组平行且相等”、矩形的“等对角线”、菱形的“垂直对角线”都有具体前提。先把条件写全，再用反例或证明判断；不要把不同判据的半句话拼在一起。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-1">

#### <span class="example-number">辨析 01</span> <span class="example-name">五组条件与一个判断题</span> <span class="example-source">知识清单例题·合组</span> {#pitfall-1 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）如图, 四边形 ABCD 中, 对角线 AC, BD 交于点 O, 下列条件不能判定这个四边形是平行四边形的是 \_\_\_\_. (填序号)



① $AB \parallel CD, AD \parallel BC;$   
② $AB \parallel CD, AD = BC;$   
③AO=CO,BO=DO;   
④AB=CD,AD=BC;   
⑤AB∥CD,∠ABC=∠ADC.

<div class="handbook-figure figure-medium">

![四边形ABCD的两对角线相交于O](./assets/q13-1.webp)

</div>



（2）如图, 在四边形 ABCD 中, 如果 $AD \parallel BC, \angle B = \angle D$ , 那么四边形 ABCD 是平行四边形吗? 请说明理由.

<div class="handbook-figure figure-medium">

![四边形ABCD中，AD与BC平行](./assets/q15-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）①为定义；③为对角线互平分；④为两组对边相等，都能判定。⑤由 $AB\parallel CD$ 得 $\angle A+\angle D=180^\circ$，代入 $\angle D=\angle B$，得到 $\angle A+\angle B=180^\circ$，再判 $AD\parallel BC$，也成立。只有②的平行与相等分属不同组，可为等腰梯形，不能判定。


<div class="handbook-figure figure-medium">

![一组对边平行、另一组对边相等的等腰梯形反例](./assets/q13-2.webp)

</div>


（2）可以判为平行四边形。法一：$AD\parallel BC$ 给 $\angle A+\angle B=180^\circ$，代入 $\angle B=\angle D$，再判 $AB\parallel CD$。

法二：原平行同时给 $\angle C+\angle D=180^\circ$，两式相减得到 $\angle A=\angle C$，由两组对角相等判定。

法三：连接 $AC$，用平行内错角、原 $\angle B=\angle D$ 和公共非夹边 $AC$ 作 AAS，得 $\triangle ABC\cong\triangle CDA$，于是 $BC=AD$。原有 $BC\parallel AD$，同组平行且等也能判定。


<div class="handbook-figure figure-medium">

![连接AC后标出由AD平行BC得到的两个内错角](./assets/q15-2.webp)

</div>



<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）只有②不能判定；（2）是平行四边形。

</div>

</div>

</details>

</article>


<article class="handbook-example is-pitfall" aria-labelledby="pitfall-2">

#### <span class="example-number">辨析 02</span> <span class="example-name">矩形性质与矩形判定不要串换</span> <span class="example-source">知识清单例题·合组；（1）2024四川成都（2）2024四川泸州</span> {#pitfall-2 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

（1）（2024四川成都）如图，在矩形ABCD中，对角线AC与BD相交于点O，则下列结论一定正确的是 （）



<div class="handbook-choice-grid">

<div class="handbook-choice">

A.AB=AD

</div>

<div class="handbook-choice">

B. $AC \perp BD$

</div>

<div class="handbook-choice">

C. $AC = BD$

</div>

<div class="handbook-choice">

D. $\angle ACB = \angle ACD$

</div>

</div>

<div class="handbook-figure figure-medium">

![矩形ABCD的对角线交于O](./assets/q34-1.webp)

</div>



（2）（2024 四川泸州）已知四边形 ABCD 是平行四边形, 下列条件中, 不能判定 □ABCD 为矩形的是 ( )

<div class="handbook-choice-grid">

<div class="handbook-choice">

A. $\angle A = 90^{\circ}$

</div>

<div class="handbook-choice">

B. $\angle B = \angle C$

</div>

<div class="handbook-choice">

C. $AC = BD$

</div>

<div class="handbook-choice">

D. $AC \perp BD$

</div>

</div>

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）选 C。矩形对角线一定相等；邻边相等、对角垂直、对角平分顶角均不是一般矩形的必有性质。

（2）选 D。已是平行四边形，A的一直角、C的等对角线均足够；B的两个邻角相等，又由平行四边形得互补，故各为90°，也足够。D的垂直对角线指向菱形，不保证矩形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）C；（2）D。

</div>

</div>

</details>

</article>


<article class="handbook-example is-pitfall" aria-labelledby="pitfall-3">

#### <span class="example-number">辨析 03</span> <span class="example-name">平方关系给的是哪一个直角</span> <span class="example-source">知识清单例题·2024内蒙古通辽</span> {#pitfall-3 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

(2024 内蒙古通辽) 如图, □ABCD 的对角线 AC, BD 交于点 O, 以下条件不能证明 □ABCD 是菱形的是 ()

<div class="handbook-choice-grid choices-medium">

<div class="handbook-choice">

A. $\angle BAC = \angle BCA$

</div>

<div class="handbook-choice">

B. $\angle ABD = \angle CBD$

</div>

<div class="handbook-choice">

C. $OA^2 +OD^2 = AD^2$

</div>

<div class="handbook-choice">

D. $AD^{2} + OA^{2} = OD^{2}$

</div>

</div>

<div class="handbook-figure figure-medium">

![平行四边形ABCD的对角线交于O](./assets/q45-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

A使 $\triangle ABC$ 的两底角相等，得 $AB=BC$，可判菱形。B配合 $AB\parallel CD$ 得 $\angle CBD=\angle BDC$，故 $BC=CD$，也可判菱形。

C由勾股定理逆定理得 $\angle AOD=90^\circ$，两对角线垂直，足够。

D却给 $\angle OAD=90^\circ$，直角在 $A$ 而非交点 $O$。菱形的对角线会平分 $A$ 处小于180°的内角，其半角不可能为90°，所以 D 不仅不能判定，在非退化情形下还排除了菱形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

D。

</div>

</div>

</details>

</article>

### 2. 等宽是垂距相等，不是边长等于宽 {#strip-width .pitfall-title}


等宽纸条交叉，先由两组边线平行判平行四边形，再用同一面积的两种底高表达证明邻边相等。随后认清图上标的是内角还是外角，垂足可能在延长线上。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-4">

#### <span class="example-number">辨析 04</span> <span class="example-name">等宽纸条的重叠部分</span> <span class="example-source">知识清单例题·2024广西</span> {#pitfall-4 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

(2024 广西) 如图, 两张宽度均为 $3 \mathrm{~cm}$ 的纸条交叉叠放在一起, 交叉形成的锐角为 $60^{\circ}$ , 则重合部分构成的四边形ABCD的周长为 \_\_\_\_ cm.

<div class="handbook-figure figure-medium">

![两张等宽纸条交叉，D处标出外部60度锐角](./assets/q46-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

两组边线分别平行，所以重叠图形先是平行四边形。两组高均为3 cm，同一面积既为 $3AD$ 又为 $3CD$，故 $AD=CD$，成为菱形。

原图 D 处标的是外部60°，内部 $\angle CDA=120^\circ$。过 $C$ 向直线 $AD$ 作垂线，垂足 $E$ 在越过 $D$ 的延长线上；$\angle CDE=60^\circ$、$\angle DCE=30^\circ$，所以 $DE=CD/2$。

$$3^2=CD^2-(CD/2)^2=\tfrac34 CD^2,$$

得 $CD=2\sqrt3\text{ cm}$，周长为 $8\sqrt3\text{ cm}$。宽3 cm是垂直高，不能当斜边长。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

$8\sqrt3\text{ cm}$。

</div>

</div>

</details>

</article>

### 3. 动点重合，四边形就可能退化 {#degeneracy .pitfall-title}


证明新四边形之前，先确认确有四个不同的有效顶点。对角线互平分、三个直角等判据，不能拿来把重复点构成的退化图形也判为平行四边形或正方形。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-5">

#### <span class="example-number">辨析 05</span> <span class="example-name">对角线上的两个截点</span> <span class="example-source">依据知识清单原题改编·检查退化边界</span> {#pitfall-5 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

原题给出：在平行四边形 $ABCD$ 中，$E,F$ 在对角线 $AC$ 上，且 $AE=CF$，要求证明四边形 $DEBF$ 为平行四边形。

这个条件是否需要排除特殊位置？补足后怎样证明？


<div class="handbook-figure figure-medium">

![平行四边形ABCD的对角线AC上取E、F，连接DE、BF](./assets/q16-1.webp)

</div>



</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

若 $E=F=O$，其中 $O$ 为两对角线交点，则 $AE=CF$ 仍成立，但 $DEBF$ 只有三个不同点，不能称四边形。所以必须排除 $E=F$。

补充 $E\ne F$ 后，两点关于 $O$ 对称。按原图 $A,E,O,F,C$ 的次序，

$$OE=OA-AE=OC-CF=OF.$$

又 $OB=OD$，新图对角线 $EF,DB$ 在同一 $O$ 互相平分，故 $DEBF$ 为平行四边形。若 $E,F$ 交换到 $O$ 另一侧，需改写段长减法，但同样由 $AE=CF$ 得它们关于中点对称，结论不变。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

需排除 $E=F=O$；补充 $E\ne F$ 后，新四边形为平行四边形。

</div>

</div>

</details>

</article>


<article class="handbook-example is-pitfall" aria-labelledby="pitfall-6">

#### <span class="example-number">辨析 06</span> <span class="example-name">角平分线上的点到两边作垂线</span> <span class="example-source">知识清单原题改编·补退化辨析小问</span> {#pitfall-6 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,在四边形 ABCD 中,AB=BC,对角线 BD 平分 $\angle ABC$ ,P 是 BD 上一点,过点 P 作 $PM \perp AD$ , $PN \perp CD$ , 垂足分别为 M;N.



(1) 求证: $\angle ADB = \angle CDB$ .   
(2) 若 $\angle ADC = 90^{\circ}$ ，求证：四边形 MPND 是正方形.

<div class="handbook-figure figure-medium">

![四边形ABCD中，P在BD上，向AD、CD作垂线](./assets/q52-1.webp)

</div>



（3）若允许 $P=D$，第（2）问的结论还能成立吗？

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）$AB=BC$，$BD$ 公共，且 $\angle ABD=\angle CBD$，SAS 得 $\triangle ABD\cong\triangle CBD$，故 $\angle ADB=\angle CDB$。

（2）对图示 $P\ne D$ 的有效构造，$\angle ADC=90^\circ$，两垂足又给两个直角，所以 $MPND$ 先为矩形。第（1）问说明 $DP$ 在 $D$ 的角平分线上，因此到两边的距离 $PM=PN$；矩形邻边相等，便为正方形。

（3）若 $P=D$，两垂足也都变成 $D$，各线段长为0，图形退化，不能叫正方形。原“BD上一点”须在第（2）问排除此端点。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）等角成立；（2）$P\ne D$ 的图示构造为正方形；（3）$P=D$ 时不成立。

</div>

</div>

</details>

</article>

### 4. 给出的长度还要能与图形位置相容 {#feasibility .pitfall-title}


从一个模型算出的面积，仍要检查所有边长、角和点序是否同时可实现。位于有限边上包含端点，与严格位于边的内部不同；原图若画成内点，不能不核条件就当作可行。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-7">

#### <span class="example-number">辨析 07</span> <span class="example-name">半角条件与边上点的位置</span> <span class="example-source">知识清单原题改编·保原数据并增加可实现性辨析</span> {#pitfall-7 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

如图,已知正方形 ABCD 的边长为 8 ,点 E,F 分别在边 BC,CD 上, $\angle {EAF} = {45}^{ \circ  }$ .当 ${EF} = 8$ 时, $\bigtriangleup  {AEF}$ 的面积是 (   )



<div class="handbook-choice-grid">

<div class="handbook-choice">

A.8

</div>

<div class="handbook-choice">

B.16

</div>

<div class="handbook-choice">

C.24

</div>

<div class="handbook-choice">

D.32

</div>

</div>

<div class="handbook-figure figure-medium">

![原书示意图把E、F画在BC、CD内部，标出AE、AF、EF](./assets/q55-1.webp)

</div>



进一步辨析：当 $E,F$ 都严格位于各边内部时，这组条件能否同时成立？若允许端点，哪些位置可行？

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

设 $BE=x$、$DF=y$，有限边条件给 $0\le x,y\le8$。半角模型给 $EF=x+y$，原 $EF=8$，故 $x+y=8$。

从 $E,F$ 的水平、竖直距离看，

$$EF^2=(8-x)^2+(8-y)^2=x^2+y^2,$$

最后一步用了 $x+y=8$。又 $EF^2=64=(x+y)^2$，因此 $2xy=0$。

所以两点不能同时严格位于边的内部。只有 $x=0,y=8$ 或 $x=8,y=0$：即 $E=B,F=C$，或 $E=C,F=D$。这两种端点位置都使 $\angle EAF=45^\circ$、$EF=8$，原三角形分别是 $ABC$ 或 $ACD$，面积均为 $8^2/2=32$。

原数值答案 D 在允许端点时可取，但原内点示意不能同时满足给出的全部条件。不能把仅画在内部的示意图当成另一个可行数值图。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

原选择答案为 D，32，但只能在上述两种端点位置取得；两点均严格在边内时无解。

</div>

</div>

</details>

</article>

### 5. 一般、一定、可能：别把包含关系说反 {#quantifiers .pitfall-title}


正方形属于矩形和菱形，矩形与菱形又都属于平行四边形。判断“一定”时要对所有成员成立；判断“可能”时，一个符合条件的特殊成员就足够。

<article class="handbook-example is-pitfall" aria-labelledby="pitfall-8">

#### <span class="example-number">辨析 08</span> <span class="example-name">图形从属与对称性的判断</span> <span class="example-source">知识清单辨析·合组改编，明确量词与判断任务</span> {#pitfall-8 .example-heading}

<div class="example-question">

<p class="example-label">题目</p>

判断下列说法，并说明理由。

（1）平行四边形一定是轴对称图形。

（2）平行四边形的邻角互补。

（3）平行四边形的两对角线分出的四个三角形一定全等。

（4）只有正方形同时具有矩形和菱形的全部性质。

（5）平行四边形一定不是轴对称图形。

（6）正方形的中点四边形仍是正方形。

（7）矩形的两对角线可能垂直，菱形的两对角线可能相等。

（8）在平行四边形及其特殊类型中，正方形有4条对称轴，条数最多。

（9）菱形和正方形面积都为两条完整对角线乘积的一半。

（10）一组邻边相等的一般四边形一定是菱形。

（11）两对角线垂直的一般四边形不一定是菱形。

</div>

<details class="example-disclosure">
<summary>答案与解析</summary>

<div class="example-solution">

<p class="example-label">解析</p>

（1）错，一般平行四边形不保证有轴；（2）对，来自平行线同旁内角互补；（3）错，四块等面积，但一般仅两两相对全等。

（4）对，兼四等边与四直角便为正方形；（5）错，矩形、菱形等特殊成员可以有轴；（6）对，原等长且垂直的对角线变成新图等长且垂直的邻边。

（7）对，两种“可能”都由正方形特例实现；（8）对，正方形有两对角线及两对边中点轴，共4条；（9）对，因为对角线互相垂直。

（10）错，缺平行四边形基础或其余等边条件；（11）对，仅垂直不保证互平分，例如非菱形的筝形。

<div class="example-answer">

<p class="example-answer-label">本题结论</p>

（1）错，（2）对，（3）错，（4）对，（5）错，（6）至（9）对，（10）错，（11）对。

</div>

</div>

</details>

</article>

