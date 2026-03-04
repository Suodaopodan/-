import { BarChart2, Search, Heart, MessageCircle, Zap } from 'lucide-react';

export const MOCK_HISTORY = [
  { id: 1, brand: '珀莱雅 PROYA', industry: '美妆个护 - 护肤', platform: '小红书 + B站', score: 85, level: 'S', date: '2023-10-25' },
  { id: 2, brand: '戴森 Dyson', industry: '3C数码 - 小家电', platform: '小红书', score: 72, level: 'A', date: '2023-10-22' },
  { id: 3, brand: '三顿半', industry: '食品饮料 - 咖啡', platform: 'B站', score: 65, level: 'B', date: '2023-10-20' },
];

export const RADAR_DATA = [
  { subject: '内容填充度', A: 85, B: 65, C: 78, D: 82, fullMark: 100 },
  { subject: '内容能见度', A: 45, B: 55, C: 55, D: 60, fullMark: 100 },
  { subject: '内容好感度', A: 68, B: 70, C: 60, D: 75, fullMark: 100 },
  { subject: '内容讨论度', A: 88, B: 60, C: 80, D: 70, fullMark: 100 },
  { subject: '内容效率', A: 55, B: 68, C: 62, D: 58, fullMark: 100 },
];

export const SUMMARY_CARDS = [
  { 
    id: 'fill', 
    title: '内容填充度', 
    score: 85, 
    trend: 5, 
    isUp: true, 
    icon: BarChart2,
    competitors: [
      { name: '欧莱雅', score: 78 },
      { name: '雅诗兰黛', score: 82 }
    ]
  },
  { 
    id: 'vis', 
    title: '内容能见度', 
    score: 45, 
    trend: 12, 
    isUp: false, 
    icon: Search,
    competitors: [
      { name: '欧莱雅', score: 55 },
      { name: '雅诗兰黛', score: 60 }
    ]
  },
  { 
    id: 'fav', 
    title: '内容好感度', 
    score: 68, 
    trend: 2, 
    isUp: true, 
    icon: Heart,
    competitors: [
      { name: '欧莱雅', score: 60 },
      { name: '雅诗兰黛', score: 75 }
    ]
  },
  { 
    id: 'disc', 
    title: '内容讨论度', 
    score: 88, 
    trend: 15, 
    isUp: true, 
    icon: MessageCircle,
    competitors: [
      { name: '欧莱雅', score: 80 },
      { name: '雅诗兰黛', score: 70 }
    ]
  },
  { 
    id: 'eff', 
    title: '内容效率', 
    score: 55, 
    trend: 3, 
    isUp: false, 
    icon: Zap,
    competitors: []
  },
];

export const FILLING_DATA = {
  brandVolume: 12500,
  industryAvg: 4800,
  sov: 35.8,
  totalMarket: 34916,
  ugc: 72,
  bgc: 28,
  yoy: 15.2, // Year-over-Year growth
  mom: 5.8   // Month-over-Month growth
};

export const TREND_DATA = [
  { date: '1周', value: 3200 }, { date: '2周', value: 3800 }, { date: '3周', value: 3500 },
  { date: '4周', value: 4100 }, { date: '5周', value: 5500 }, { date: '6周', value: 7200 },
  { date: '7周', value: 6800 }, { date: '8周', value: 8100 }, { date: '9周', value: 8500 },
  { date: '10周', value: 9200 }, { date: '11周', value: 8800 }, { date: '12周', value: 9500 },
];

export const PROS_CONS = {
  pros: [
    { text: '抗老效果明显', percent: 45 }, { text: '吸收快不黏腻', percent: 28 }, 
    { text: '适合干皮/混干', percent: 15 }, { text: '包装有质感', percent: 8 }, { text: '赠品多/划算', percent: 4 }
  ],
  cons: [
    { text: '搓泥现象严重', percent: 38 }, { text: '价格持续走高', percent: 25 }, 
    { text: '敏感肌泛红', percent: 18 }, { text: '味道有点冲', percent: 12 }, { text: '新版不如旧版', percent: 7 }
  ]
};

export const WORD_CLOUD = [
  { text: '抗老', weight: 9, color: 'text-blue-700' },
  { text: '搓泥', weight: 8, color: 'text-slate-500' },
  { text: '好吸收', weight: 7, color: 'text-blue-500' },
  { text: '平替', weight: 6, color: 'text-slate-400' },
  { text: '包装高级', weight: 5, color: 'text-blue-400' },
  { text: '敏感肌救星', weight: 8, color: 'text-blue-600' },
  { text: '干皮亲妈', weight: 7, color: 'text-blue-800' },
  { text: '味道冲', weight: 4, color: 'text-slate-300' },
  { text: '无限回购', weight: 9, color: 'text-blue-900' },
  { text: '性价比', weight: 6, color: 'text-slate-500' },
  { text: '不油腻', weight: 5, color: 'text-blue-300' },
  { text: '泛红', weight: 4, color: 'text-slate-400' },
  { text: '早C晚A', weight: 8, color: 'text-blue-700' },
  { text: '闷痘', weight: 3, color: 'text-slate-300' },
];

export const CONTENT_DETAILS_DATA = [
  { id: 1, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人1', type: 'UGC', likes: 2340, bookmarks: 1205, comments: 456, shares: 890, image: 'https://picsum.photos/seed/note1/200/200' },
  { id: 2, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人2', type: 'BGC', likes: 1890, bookmarks: 980, comments: 320, shares: 560, image: 'https://picsum.photos/seed/note2/200/200' },
  { id: 3, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人3', type: 'UGC', likes: 3450, bookmarks: 1560, comments: 670, shares: 1200, image: 'https://picsum.photos/seed/note3/200/200' },
  { id: 4, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人4', type: 'UGC', likes: 980, bookmarks: 450, comments: 120, shares: 230, image: 'https://picsum.photos/seed/note4/200/200' },
  { id: 5, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人5', type: 'BGC', likes: 4560, bookmarks: 2300, comments: 890, shares: 1500, image: 'https://picsum.photos/seed/note5/200/200' },
  { id: 6, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人6', type: 'UGC', likes: 1200, bookmarks: 560, comments: 230, shares: 340, image: 'https://picsum.photos/seed/note6/200/200' },
  { id: 7, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人7', type: 'BGC', likes: 2890, bookmarks: 1100, comments: 450, shares: 780, image: 'https://picsum.photos/seed/note7/200/200' },
  { id: 8, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人8', type: 'BGC', likes: 890, bookmarks: 340, comments: 90, shares: 120, image: 'https://picsum.photos/seed/note8/200/200' },
];

export const COMMENTS_DATA = [
  { id: 1, user: '用户0vv46ob', content: '这款面霜抗老确实可以，但是跟我的防晒搭配在一起搓泥现象非常严重！希望能改进肤感。', likes: 304, highlight: '搓泥' },
  { id: 2, user: '用户4ugrw8', content: '我是混油皮，晚上用这个还可以，白天用后续上妆会有点搓泥，建议晚上用。', likes: 400, highlight: '搓泥' },
  { id: 3, user: '用户dnde1i', content: '抗老效果是有的，法令纹淡了一些，但是味道真的有点冲，需要适应一下。', likes: 460, highlight: '味道' },
  { id: 4, user: '用户muqyh9', content: '性价比很高，学生党冲！送的小样特别多，感觉能用半年。', likes: 99, highlight: '性价比' },
  { id: 5, user: '用户b0fnx7', content: '跟风买的，结果过敏了，脸上泛红发痒，敏感肌慎入！', likes: 427, highlight: '泛红' },
  { id: 6, user: '用户x9zk2m', content: '回购第三瓶了，搭配双抗精华用，皮肤真的变细腻了，早C晚Ayyds！', likes: 521, highlight: '早C晚A' },
  { id: 7, user: '用户q1we3r', content: '包装很有质感，但是面霜质地有点厚重，不太好推开。', likes: 156, highlight: '质地' },
  { id: 8, user: '用户p0oi9u', content: '搓泥！搓泥！搓泥！重要的事情说三遍！', likes: 892, highlight: '搓泥' },
];

export const SEARCH_RANKING_DATA = [
  { rank: 1, brand: '欧莱雅', score: 98500 },
  { rank: 2, brand: '兰蔻', score: 92100 },
  { rank: 3, brand: '珀莱雅', score: 88400 },
  { rank: 4, brand: '雅诗兰黛', score: 76200 },
  { rank: 5, brand: '修丽可', score: 65000 },
  { rank: 6, brand: '赫莲娜', score: 58900 },
  { rank: 7, brand: '海蓝之谜', score: 54300 },
  { rank: 8, brand: '资生堂', score: 49800 },
  { rank: 9, brand: '科颜氏', score: 45600 },
  { rank: 10, brand: '薇诺娜', score: 42100 },
];

export const SEARCH_OCCUPANCY_DATA = {
  keyword: '抗老面霜',
  rank: 'Top 1',
  isOccupied: true,
  note: {
    title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评，我的救星！',
    image: '', // Placeholder
    author: '护肤小天才',
    brand: '珀莱雅 PROYA',
    stats: {
      likes: 8450,
      bookmarks: 3210,
      comments: 456
    },
    tags: ['UGC 真实种草']
  },
  aiStrategy: '该笔记自然流量表现优异，互动率高于行业均值 24%。建议通过聚光平台【搜索广告】进行长效追投，巩固该词 Top 3 排名，防止竞品截流。'
};

export const KEYWORD_DETAILS_DATA = [
  { keyword: '混油皮能用吗', searchIndex: 12500, bid: 1.5 },
  { keyword: '成分分析', searchIndex: 10800, bid: 2.1 },
  { keyword: '早C晚A搭配', searchIndex: 9800, bid: 1.8 },
  { keyword: '孕妇可用', searchIndex: 8500, bid: 1.2 },
  { keyword: '真假鉴别', searchIndex: 7200, bid: 0.9 },
  { keyword: '双十一优惠', searchIndex: 15600, bid: 3.5 },
  { keyword: '跟欧莱雅对比', searchIndex: 6400, bid: 1.6 },
  { keyword: '红宝石面霜', searchIndex: 45000, bid: 4.2 },
  { keyword: '抗老面霜推荐', searchIndex: 32000, bid: 3.8 },
  { keyword: '珀莱雅怎么样', searchIndex: 28000, bid: 2.5 },
];

export const SHADOW_CARD = "shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
export const CARD_BASE = `bg-white rounded-2xl ${SHADOW_CARD} p-6 sm:p-8`;
