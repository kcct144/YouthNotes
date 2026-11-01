import type { ThemeSidebarItem } from 'vuepress-theme-plume'

// 沿用迁入笔记的六大专题与阅读顺序；新增初中数学页面时同步维护此目录。
export const mathJuniorSidebar: ThemeSidebarItem[] = [
  {
    "text": "阅读导览",
    "link": "/notes/math/junior/"
  },
  {
    "text": "一、数与式",
    "collapsed": false,
    "items": [
      {
        "text": "1. 有理数",
        "collapsed": false,
        "items": [
          {
            "text": "有理数与数轴",
            "link": "/notes/math/junior/01-numbers/rational/numbers-and-line.html"
          },
          {
            "text": "有理数的加减乘除",
            "link": "/notes/math/junior/01-numbers/rational/arithmetic.html"
          },
          {
            "text": "有理数的乘方",
            "link": "/notes/math/junior/01-numbers/rational/powers.html"
          },
          {
            "text": "科学记数法与近似数",
            "link": "/notes/math/junior/01-numbers/rational/scientific-notation.html"
          }
        ]
      },
      {
        "text": "2. 实数",
        "link": "/notes/math/junior/01-numbers/real/"
      },
      {
        "text": "3. 二次根式",
        "link": "/notes/math/junior/01-numbers/radicals/"
      },
      {
        "text": "4. 整式的加减",
        "link": "/notes/math/junior/01-numbers/algebra-addition/"
      },
      {
        "text": "5. 整式的乘除与因式分解",
        "collapsed": false,
        "items": [
          {
            "text": "幂的运算",
            "link": "/notes/math/junior/01-numbers/power-laws/"
          },
          {
            "text": "整式的乘除与乘法公式",
            "link": "/notes/math/junior/01-numbers/products/"
          },
          {
            "text": "因式分解",
            "link": "/notes/math/junior/01-numbers/factoring/"
          }
        ]
      },
      {
        "text": "6. 分式",
        "link": "/notes/math/junior/01-numbers/fractions/"
      }
    ]
  },
  {
    "text": "二、方程与不等式",
    "collapsed": false,
    "items": [
      {
        "text": "1. 一元一次方程",
        "link": "/notes/math/junior/02-equations/linear/"
      },
      {
        "text": "2. 二元一次方程（组）",
        "collapsed": false,
        "items": [
          {
            "text": "二元一次方程组",
            "link": "/notes/math/junior/02-equations/systems/"
          },
          {
            "text": "三元一次方程组",
            "link": "/notes/math/junior/02-equations/ternary/"
          }
        ]
      },
      {
        "text": "3. 一元二次方程",
        "link": "/notes/math/junior/02-equations/quadratic/"
      },
      {
        "text": "4. 分式方程",
        "link": "/notes/math/junior/02-equations/rational-equations/"
      },
      {
        "text": "5. 不等式（组）",
        "link": "/notes/math/junior/02-equations/inequalities/"
      }
    ]
  },
  {
    "text": "三、函数",
    "collapsed": false,
    "items": [
      {
        "text": "1. 平面直角坐标系",
        "link": "/notes/math/junior/03-functions/coordinates/"
      },
      {
        "text": "2. 一次函数",
        "collapsed": false,
        "items": [
          {
            "text": "变量与函数",
            "link": "/notes/math/junior/03-functions/function-basics/"
          },
          {
            "text": "一次函数",
            "link": "/notes/math/junior/03-functions/linear-functions/"
          }
        ]
      },
      {
        "text": "3. 二次函数",
        "link": "/notes/math/junior/03-functions/quadratic-functions/"
      },
      {
        "text": "4. 反比例函数",
        "link": "/notes/math/junior/03-functions/inverse-functions/"
      }
    ]
  },
  {
    "text": "四、图形的性质",
    "collapsed": false,
    "items": [
      {
        "text": "1. 图形的初步认识",
        "collapsed": false,
        "items": [
          {
            "text": "几何图形",
            "link": "/notes/math/junior/04-geometry/geometry-basics/"
          },
          {
            "text": "直线、射线与线段",
            "link": "/notes/math/junior/04-geometry/lines-rays-segments/"
          },
          {
            "text": "角",
            "link": "/notes/math/junior/04-geometry/angles/"
          }
        ]
      },
      {
        "text": "2. 相交线与平行线",
        "link": "/notes/math/junior/04-geometry/parallel-lines/"
      },
      {
        "text": "3. 线段的垂直平分线",
        "link": "/notes/math/junior/04-geometry/perpendicular-bisectors/"
      },
      {
        "text": "4. 命题的证明",
        "link": "/notes/math/junior/04-geometry/proofs/"
      },
      {
        "text": "5. 三角形",
        "link": "/notes/math/junior/04-geometry/triangles/"
      },
      {
        "text": "6. 等腰三角形",
        "link": "/notes/math/junior/04-geometry/isosceles-triangles/"
      },
      {
        "text": "7. 勾股定理和直角三角形",
        "link": "/notes/math/junior/04-geometry/pythagorean/"
      },
      {
        "text": "8. 相似三角形",
        "link": "/notes/math/junior/04-geometry/similar-triangles/"
      },
      {
        "text": "9. 全等三角形",
        "collapsed": false,
        "items": [
          {
            "text": "全等三角形",
            "link": "/notes/math/junior/04-geometry/congruent-triangles/"
          },
          {
            "text": "角的平分线",
            "link": "/notes/math/junior/04-geometry/angle-bisectors/"
          },
          {
            "text": "尺规作图",
            "link": "/notes/math/junior/04-geometry/constructions/"
          }
        ]
      },
      {
        "text": "10. 锐角三角函数",
        "link": "/notes/math/junior/04-geometry/trigonometry/"
      },
      {
        "text": "11. 解直角三角形",
        "link": "/notes/math/junior/04-geometry/solve-right-triangles/"
      },
      {
        "text": "12. 平行四边形",
        "collapsed": false,
        "items": [
          {
            "text": "平行四边形及特殊平行四边形",
            "link": "/notes/math/junior/04-geometry/quadrilaterals/"
          },
          {
            "text": "中位线与中点四边形",
            "link": "/notes/math/junior/04-geometry/midlines/"
          }
        ]
      },
      {
        "text": "13. 多边形",
        "link": "/notes/math/junior/04-geometry/polygons/"
      },
      {
        "text": "14. 梯形",
        "link": "/notes/math/junior/04-geometry/trapezoids/"
      },
      {
        "text": "15. 圆",
        "collapsed": false,
        "items": [
          {
            "text": "圆与弧、弦、角",
            "link": "/notes/math/junior/04-geometry/circles/"
          },
          {
            "text": "与圆有关的位置关系",
            "link": "/notes/math/junior/04-geometry/circle-relations/"
          },
          {
            "text": "正多边形与圆的有关计算",
            "link": "/notes/math/junior/04-geometry/circle-calculations/"
          }
        ]
      }
    ]
  },
  {
    "text": "五、图形的变化",
    "collapsed": false,
    "items": [
      {
        "text": "1. 图形的轴对称、平移与旋转",
        "collapsed": false,
        "items": [
          {
            "text": "轴对称",
            "link": "/notes/math/junior/05-transformations/axis-symmetry/"
          },
          {
            "text": "平移",
            "link": "/notes/math/junior/05-transformations/translation/"
          },
          {
            "text": "旋转与中心对称",
            "link": "/notes/math/junior/05-transformations/rotation/"
          }
        ]
      },
      {
        "text": "2. 相似",
        "collapsed": false,
        "items": [
          {
            "text": "相似",
            "link": "/notes/math/junior/05-transformations/similarity/"
          },
          {
            "text": "位似图形",
            "link": "/notes/math/junior/05-transformations/homothety/"
          }
        ]
      },
      {
        "text": "3. 投影与视图",
        "link": "/notes/math/junior/05-transformations/projections/"
      }
    ]
  },
  {
    "text": "六、统计与概率",
    "collapsed": false,
    "items": [
      {
        "text": "1. 数据的收集、整理与描述",
        "link": "/notes/math/junior/06-statistics/data-description/"
      },
      {
        "text": "2. 数据的分析",
        "link": "/notes/math/junior/06-statistics/data-analysis/"
      },
      {
        "text": "3. 概率",
        "link": "/notes/math/junior/06-statistics/probability/"
      }
    ]
  },
  {
    "text": "共建写作示范",
    "link": "/notes/math/junior/linear-function.html"
  }
]
