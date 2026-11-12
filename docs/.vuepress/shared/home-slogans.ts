export interface HomeSlogan {
  /** 中文标语。 */
  zh: string
  /** 与中文标语配对的英文原文。 */
  en: string
  /** 可考证的作者或出处；不确定时留空，不做推测。 */
  source?: string
  /** 出处可靠程度的简短说明，如常见归属、措辞版本差异。 */
  sourceNote?: string
}

/**
 * 首页随机标语。成对出现：一句中文，一句英文原文。
 * 中文均为本站试译，不是已出版译文；作者不明的条目只保留原文，不补署名。
 */
export const homeSlogans: HomeSlogan[] = [
  {
    zh: '分享知识是友谊里最根本的一件事。因为你造福了别人，却没有失去什么。',
    en: 'Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without losing something.',
    source: 'Richard Stallman',
    sourceNote: '常见归属，未见可核实的原始文献',
  },
  {
    zh: '知识不是发现者一个人的财产，而是所有人共有的。',
    en: 'Knowledge is not the personal property of its discoverer, but the common property of all.',
    source: 'Benjamin Franklin',
    sourceNote: '常见归属，未有具体篇目页码',
  },
  {
    zh: '别人从我这里得到一个想法，他受了益，我的想法不会变少；就像用我的蜡烛点他的蜡烛，他有光，我的光不会变暗。',
    en: 'He who receives an idea from me receives instruction himself without lessening mine; as he who lights his taper at mine receives light without darkening me.',
    source: 'Thomas Jefferson，1813 年 8 月 13 日致 Isaac McPherson 的信',
  },
  {
    zh: '知识不是拿来存的，而是用来传下去的。再珍贵的宝石，藏起来也会失去光泽。',
    en: 'Seldom if ever was knowledge given to keep, but always to impart. The grace of this rich jewel is lost in concealment.',
    source: 'Joseph Hall，Contemplations《The Rapture of Elijah》',
    sourceNote: '措辞依不同引语集版本略有出入',
  },
  {
    zh: '我们就像站在巨人肩上的矮子，所以能比古人看得更多，也更远。',
    en: 'We are like dwarfs standing on the shoulders of giants, and so able to see more and see farther than the ancients.',
    source: '贝尔纳·德·沙特尔的比喻，由索尔兹伯里的约翰在《Metalogicon》（1159）中记下',
    sourceNote: '拉丁文的英文改写，并非某人的原话',
  },
]

/** 随机取一条，尽量不与上一条重复。 */
export function pickHomeSlogan(previous?: string): HomeSlogan {
  if (homeSlogans.length < 2) return homeSlogans[0]
  let next = homeSlogans[Math.floor(Math.random() * homeSlogans.length)]
  let guard = 0
  while (next.zh === previous && guard < 8) {
    next = homeSlogans[Math.floor(Math.random() * homeSlogans.length)]
    guard += 1
  }
  return next
}
