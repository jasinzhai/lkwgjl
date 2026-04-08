// ============================================================
// 洛克王国世界（手游） - 精灵图鉴数据库
// ============================================================
// 数据来源: 洛克王国:手游WIKI_BWIKI (wiki.biligame.com/rocom)
//           GameKee Wiki (gamekee.com/rocom)
//           17173 / 游民星空 公测版本攻略
//
// 重要说明：
// - 本数据库仅收录《洛克王国：世界》（腾讯手游）的精灵
// - 不包含《洛克王国》（页游/Flash端）任何内容
// - 公测版本共366只精灵（含地区形态、异色等变体）
// - 更新时间: 2026-04-08
// - 数据源: BWIKI + game-walkthrough.com API
// ============================================================

const RocoData = {

  // ========== 属性定义（手游18种属性） ==========
  attributes: [
    { id: 'normal', name: '普通', color: '#A8A878', icon: '⭐' },
    { id: 'grass',  name: '草',   color: '#78C850', icon: '🌿' },
    { id: 'fire',   name: '火',   color: '#F08030', icon: '🔥' },
    { id: 'water',  name: '水',   color: '#6890F0', icon: '💧' },
    { id: 'light',  name: '光',   color: '#FFD700', icon: '✨' },
    { id: 'ground', name: '地面', color: '#E0C068', icon: '🌍' },
    { id: 'ice',    name: '冰',   color: '#98D8D8', icon: '❄️' },
    { id: 'dragon', name: '龙',   color: '#7038F8', icon: '🐉' },
    { id: 'electric',name: '电',   color: '#F8D030', icon: '⚡' },
    { id: 'poison', name: '毒',   color: '#A040A0', icon: '☠️' },
    { id: 'bug',    name: '虫',   color: '#A8B820', icon: '🐛' },
    { id: 'fighting',name:'武',   color: '#C03028', icon: '👊' },
    { id: 'flying', name: '翼',   color: '#A890F0', icon: '🦅' },
    { id: 'cute',   name: '萌',   color: '#EE99AC', icon: '💕' },
    { id: 'ghost',  name: '幽灵', color: '#705898', icon: '👻' },
    { id: 'dark',   name: '恶魔', color: '#705848', icon: '😈' },
    { id: 'machine',name: '机械', color: '#B8A038', icon: '⚙️' },
    { id: 'illusion',name:'幻',   color: '#C77DFF', icon: '🔮' }
  ],

  // ========== 蛋组定义（手游15个蛋组）==========
  // 来源: BWIKI蛋组计算器 + 17173公测最新蛋组分类
  eggGroups: [
    { id: 'none',      name: '无法孵蛋', desc: '团本宠/战令宠/特殊宠，无法生蛋' },
    { id: 'animal',    name: '动物组',   desc: '猫科、犬科、四足兽类等动物形态精灵' },
    { id: 'humanoid',  name: '拟人组',   desc: '直立行走、人形特征的精灵' },
    { id: 'monster',   name: '巨灵组',   desc: '体型巨大或岩石/龙类特征的精灵' },
    { id: 'magic',     name: '魔力组',   desc: '魔法、灵体类特征精灵' },
    { id: 'flying',    name: '天空组',   desc: '鸟类、有翅膀的飞行精灵' },
    { id: 'amphibian', name: '两栖组',   desc: '两栖动物/软体生物/无定形生物' },
    { id: 'plant',     name: '植物组',   desc: '植物/花卉/真菌类精灵' },
    { id: 'mineral',   name: '矿石组',   desc: '岩石、矿物、地面构造类精灵' },
    { id: 'fairy',     name: '妖精组',   desc: '妖精、魔法生物、幽灵系等' },
    { id: 'insect',    name: '昆虫组',   desc: '昆虫/节肢动物类精灵' },
    { id: 'soft',      name: '软体组',   desc: '软体动物、水母、史莱姆类' },
    { id: 'mech',      name: '机械组',   desc: '机械、人造物、工具类精灵' },
    { id: 'ocean',     name: '海洋组',   desc: '水生生物（鱼类、鲸类、海洋哺乳动物）' },
    { id: 'dragon',    name: '龙组',     desc: '龙类形态精灵' }
  ],

  // ========== 精灵数据 ==========
  // 基于BWIKI手游WIKI公测版本(2026.04) NO.001~NO.347
  spirits: [

    // ══════════════ 001-010 初始三主宠 & 基础精灵 ══════════════
    {
      id: 1, name: '迪莫',
      image:'https://patchwiki.biligame.com/images/rocom/2/25/o64cvcxq1l6tlur77xjqbwx2s4imabd.png', ename: 'Dimo',
      attribute: 'light', eggGroup: ['none'],
      heightMin: 0.54, heightMax: 0.78, weightMin: 5.5, weightMax: 7,
      stage: 1, region: '叽叽喳喳台地',
      trait: '-', evolvesTo: null, evolvesFrom: null,
      desc: '永远的伙伴。在特殊魔力的影响下会改变自身的身体构造。'
        + '——手游初始剧情获得，无法进化。'
    },
    {
      id: 2, name: '喵喵', ename: 'MiaoMiao',
      attribute: 'grass', eggGroup: ['animal', 'humanoid'],
      heightMin: 0.53, heightMax: 0.75, weightMin: 3.62, weightMax: 4.6,
      stage: 1, region: '风息山口、乌黑巷、叽叽喳喳台地、商店街周边、奥贝斯坦湖、学院驻地、岚语峰、挽风屏障、月牙湖岸、月牙镇、皇家办事处、聆风塔地、聆风镇、轻风山、风眠圣所',
      trait: '氧循环 — 使用草系技能后回复10%生命',
      evolvesTo: [3], evolvesFrom: null,
      desc: '草元素精灵。喜欢阳光和新鲜空气，会摇晃尾巴，受到惊吓会快速逃跑。虽然很胆小，但有时也非常调皮。'
    },
    {
      id: 3, name: '喵呜',
      image:'https://patchwiki.biligame.com/images/rocom/3/34/swx8tx6o3mpyfnqrkxu1kth6sgzott2.png', ename: 'MiaoWu',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.003_喵呜.webp',
      attribute: 'grass', eggGroup: ['animal', 'humanoid'],
      heightMin:0.65,heightMax:0.92,weightMin:14.2,weightMax:15.6,
      stage: 2, region: '-',
      trait: '氧循环',
      evolvesTo: [4], evolvesFrom: 2,
      desc: '喵喵16级进化的形态，尾巴更加有力，能感知周围的草木气息。'
    },
    {
      id: 4, name: '魔力猫',
      image:'https://patchwiki.biligame.com/images/rocom/3/34/swx8tx6o3mpyfnqrkxu1kth6sgzott2.png', ename: 'MagicalCat',
      attribute: 'grass', eggGroup: ['animal', 'humanoid'], // 含叶冕形态
      heightMin:1.5,heightMax:2.15,weightMin:105.0,weightMax:125.0,
      stage: 3, region: '-',
      trait: '氧循环',
      evolvesTo: null, evolvesFrom: 3,
      desc: '喵呜32级进化的最终形态。拥有神秘的自然魔力，能够与植物沟通。存在叶冕魔力猫的特殊形态。'
    },

    {
      id: 5, name: '火花',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/jzel7fdbrw66zvccwcx4ekg72d66m21.png', ename: 'Spark',
      attribute: 'fire', eggGroup: ['monster', 'magic'],
      heightMin: 0.53, heightMax: 0.71, weightMin: 7.6, weightMax: 8.5,
      stage: 1, region: '-',
      trait: '助燃 — 使用火系技能后双攻+20%',
      evolvesTo: [6], evolvesFrom: null,
      desc: '体内蕴含着炽热火焰能量的小家伙，尾巴上永远燃烧着不灭之火。'
    },
    {
      id: 6, name: '焰火',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/jzel7fdbrw66zvccwcx4ekg72d66m21.png', ename: 'Flame',
      attribute: 'fire', eggGroup: ['monster', 'magic'],
      heightMin:0.82,heightMax:1.1,weightMin:21.0,weightMax:30.7,
      stage: 2, region: '-',
      trait: '助燃',
      evolvesTo: [7], evolvesFrom: 5,
      desc: '火花16级进化。火焰变得更加猛烈，全身被高温火焰包裹。'
    },
    {
      id: 7, name: '火神',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/jzel7fdbrw66zvccwcx4ekg72d66m21.png', ename: 'FireGod', // 存在烈火战神形态
      attribute: 'fire', eggGroup: ['monster', 'magic'],
      heightMin:1.52,heightMax:2.18,weightMin:90.5,weightMax:110.0,
      stage: 3, region: '-',
      trait: '助燃',
      evolvesTo: null, evolvesFrom: 6,
      desc: '焰火36级进化的最终形态。掌控烈焰的火焰主宰者，存在"烈火战神"的终极进化形态。'
    },

    {
      id: 8, name: '水蓝蓝',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/km91vn87f93y9ukj6ir6wsc4dl8shx1.png', ename: 'ShuiLanLan',
      attribute: 'water', eggGroup: ['amphibian', 'magic'],
      heightMin:0.45,heightMax:0.65,weightMin:2.85,weightMax:4.21,
      stage: 1, region: '-',
      trait: '-',
      evolvesTo: [9], evolvesFrom: null,
      desc: '活泼可爱的水系初始精灵，最喜欢在清澈的水中嬉戏玩耍。'
    },
    {
      id: 9, name: '波波拉',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/km91vn87f93y9ukj6ir6wsc4dl8shx1.png', ename: 'BoBoLa',
      attribute: 'water', eggGroup: ['amphibian', 'magic'],
      heightMin:0.72,heightMax:1.03,weightMin:29.5,weightMax:34.0,
      stage: 2, region: '-',
      trait: '-',
      evolvesTo: [10], evolvesFrom: 8,
      desc: '水蓝蓝进化后掌握了更多水系魔法，能制造水幕保护自己。'
    },
    {
      id: 10, name: '水灵',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/km91vn87f93y9ukj6ir6wsc4dl8shx1.png', ename: 'WaterSpirit',
       attribute: 'water', eggGroup: ['amphibian', 'magic'],
      heightMin:1.08,heightMax:1.54,weightMin:77.0,weightMax:85.5,
      stage: 3, region: '-',
      trait: '-',
      evolvesTo: null, evolvesFrom: 9,
      desc: '纯净的水元素化身，拥有净化万物的能力。'
    },

    // ══════════════ 011-020 鸭吉吉 / 板板壳 / 锥尾羊 ══════════════
    {
      id: 11, name: '鸭吉吉',
      image:'https://patchwiki.biligame.com/images/rocom/9/9b/lsgonow9dtf4nlte0094yq43stn0nrv.png', ename: 'YaJiJi',
      attribute: 'normal', eggGroup: ['flying', 'amphibian'],
      heightMin:0.65,heightMax:0.94,weightMin:14.6,weightMax:17.6,
      stage: 1, region: '-',
      trait: '-',
      forms: ['蓬松的样子','紧实的样子','急急急鸭','等一等鸭','起来鸭','燃了鸭'],
      evolvesTo: null, evolvesFrom: null,
      desc: '走路摇摇摆摆的小鸭子，有6种不同的表情/形态变化。'
    },
    { id: 12, name: '板板壳', ename: 'PlateShell',  attribute:'water',eggGroup:['amphibian','soft'], heightMin:0.53,heightMax:0.76,weightMin:7.5,weightMax:10.5,stage:1,region:'-',trait:'-',forms:['本来的样子','蜕皮时的样子'],evolvesTo:[13],evolvesFrom:null,desc:'背着重重外壳的水系精灵，行动缓慢但防御力极强。' },
    { id: 13, name: '咔咔壳', ename: 'KaKaShell',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.013_咔咔壳（本来的样子）.webp',  attribute:'water',eggGroup:['amphibian','soft'], heightMin:0.65,heightMax:0.92,weightMin:19.5,weightMax:24.5,stage:2,region:'-',trait:'-',forms:['本来的样子','蜕皮时的样子'],evolvesTo:[14],evolvesFrom:12,desc:'板板壳进化而来，壳变得更坚硬，钳子也有力量了。' },
    { id: 14, name: '水泡壳', ename: 'BubbleShell',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.014_水泡壳（本来的样子）.webp',  attribute:'water',eggGroup:['amphibian','soft'], heightMin:1.23,heightMax:1.75,weightMin:83.5,weightMax:94.5,stage:3,region:'-',trait:'-',forms:['本来的样子','蜕皮时的样子'],evolvesTo:null,evolvesFrom:13,desc:'咔咔壳最终进化，巨大的水泡壳能抵御强力的攻击。' },

    // 锥尾羊进化链 (NO.015~017) - 手游独有
    { id: 15, name: '锥尾羊',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/c9kn29sskgdppe1ipgd7ooyioj90dyt.png', ename: 'ConicTailSheep',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.015_锥尾羊.webp',attribute:'ghost',eggGroup:['animal'],heightMin:0.57,heightMax:0.81,weightMin:13.3,weightMax:16.5,stage:1,region:'-',trait:'-',evolvesTo:[16],evolvesFrom:null,desc:'尾巴呈锥状的小绵羊，性格温顺可爱。' },
    { id: 16, name: '铃兰羊',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/c9kn29sskgdppe1ipgd7ooyioj90dyt.png', ename: 'LilySheep',    attribute:'ghost',eggGroup:['animal'],heightMin:0.7,heightMax:1.01,weightMin:29.0,weightMax:36.0,stage:2,region:'-',trait:'-',evolvesTo:[17],evolvesFrom:15,desc:'铃兰花装饰的羊儿，身上散发着淡淡的清香。' },
    { id: 17, name: '花影羚羊',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/c9kn29sskgdppe1ipgd7ooyioj90dyt.png',ename: 'FlowerShadowAntelope',attribute:['ghost','dark'],eggGroup:['animal'],heightMin:1.42,heightMax:1.92,weightMin:76.9,weightMax:98.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:16,desc: '花影斑驳的高贵羚羊，速度极快如风中的花瓣。' },

    // 雪绒鸟进化链 + 四季形态 (NO.018~020)
    { id: 18, name: '雪绒鸟',ename:'SnowfluffBird',attribute:'flying',eggGroup:['flying','amphibian'],heightMin:0.38,heightMax:0.51,weightMin:2.77,weightMax:4.5,stage:1,region:'-',trait:'-',forms:['本来的样子','春天的样子','夏天的样子','秋天的样子'],evolvesTo:[19],evolvesFrom:null,desc:'全身覆盖着如雪般洁白羽毛的小鸟，有4种季节形态。' },
    { id: 19, name: '冬羽雀',ename:'WinterfeatherSparrow',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.019_冬羽雀（本来的样子）.webp',attribute:'flying',eggGroup:['flying','amphibian'],heightMin:0.62,heightMax:0.71,weightMin:8.92,weightMax:12.7,stage:2,region:'-',trait:'-',forms:['本来的样子','春天的样子','夏天的样子','秋天的样子'],evolvesTo:[20],evolvesFrom:18,desc:'羽毛如同冬日冰晶般闪耀的雀鸟。' },
    { id: 20, name: '岚鸟',  ename:'LanBird',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.020_岚鸟（本来的样子）.webp',         attribute:'flying',eggGroup:['flying','amphibian'],heightMin:1.43,heightMax:2.04,weightMin:27.08,weightMax:32.7,stage:3,region:'-',trait:'-',forms:['本来的样子','春天的样子','夏天的样子','秋天的样子'],evolvesTo:null,evolvesFrom:19,desc:'掌控风雪的冰雪之鸟，四季皆有其独特姿态。' },

    // ══════════════ 021-030 小灵菇 / 石肤蜥 / 布是石 ══════════════
    { id: 21, name: '小灵菇',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/ltybffbpudghq5tx60h70gy1vdj5xpa.png',ename:'XiaoLingGu',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.021_小灵菇.webp',   attribute:'ghost',eggGroup:['plant','magic'],heightMin:0.43,heightMax:0.61,weightMin:5.4,weightMax:7.1,stage:1,region:'-',trait:'-',evolvesTo:[22],evolvesFrom:null,desc:'会发光的小蘑菇，在夜晚能指引方向。' },
    { id: 22, name: '幻灵菇',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/ltybffbpudghq5tx60h70gy1vdj5xpa.png',ename:'HuanLingGu',   attribute:['ghost','grass'],eggGroup:['plant','magic'],heightMin:0.64,heightMax:0.92,weightMin:13.2,weightMax:16.5,stage:2,region:'-',trait:'-',evolvesTo:[23],evolvesFrom:21,desc:'释放孢子能让敌人陷入幻觉。' },
    { id: 23, name: '幻影灵菇',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/ltybffbpudghq5tx60h70gy1vdj5xpa.png',ename:'HuanYingLingGu',attribute:['ghost','grass'],eggGroup:['plant','magic'],heightMin:0.92,heightMax:1.32,weightMin:39.4,weightMax:48.4,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:22,desc:'能够制造逼真幻影的神秘蘑菇。' },

    // 石肤蜥进化链 (NO.024~026)
    { id: 24, name: '石肤蜥',ename:'StoneSkinLizard',attribute:'ground',eggGroup:['amphibian','mineral'],heightMin:0.49,heightMax:0.7,weightMin:21.0,weightMax:34.0,stage:1,region:'-',trait:'-',forms:['本来的样子','球球尾巴的样子'],evolvesTo:[25],evolvesFrom:null,desc:'皮肤像岩石一样坚硬的小蜥蜴。' },
    { id: 25, name: '石刺蜥',ename:'StoneSpikeLizard',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.025_石刺蜥（本来的样子）.webp',attribute:'ground',eggGroup:['amphibian','mineral'],heightMin:0.67,heightMax:0.96,weightMin:59.5,weightMax:70.5,stage:2,region:'-',trait:'-',forms:['本来的样子','球球尾巴的样子'],evolvesTo:[26],evolvesFrom:24,desc:'身上长出尖刺的石质蜥蜴。' },
    { id: 26, name: '石冠王蜥',ename:'StoneCrownKingLizard',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.026_石冠王蜥（本来的样子）.webp',attribute:'ground',eggGroup:['amphibian','mineral'],heightMin:0.94,heightMax:1.18,weightMin:78.5,weightMax:98.5,stage:3,region:'-',trait:'-',forms:['本来的样子','球球尾巴的样子'],evolvesTo:null,evolvesFrom:25,desc:'头顶石冠的蜥蜴王者。' },

    // 布是石进化链 (NO.027~029)
    { id: 27, name: '布是石',
      image:'https://patchwiki.biligame.com/images/rocom/8/89/n2olozya089rge7wuokp3nazl44xqst.png',ename:'BuShiShi',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.027_布是石.webp',      attribute:'ground',eggGroup:['monster','mineral'],heightMin:0.42,heightMax:0.6,weightMin:18.5,weightMax:32.5,stage:1,region:'-',trait:'-',evolvesTo:[28],evolvesFrom:null,desc:'由布料和石头构成的奇妙精灵。' },
    { id: 28, name: '布是岩',
      image:'https://patchwiki.biligame.com/images/rocom/8/89/n2olozya089rge7wuokp3nazl44xqst.png',ename:'BuShiYan',      attribute:'ground',eggGroup:['monster','mineral'],heightMin:0.93,heightMax:1.34,weightMin:97.5,weightMax:115.0,stage:2,region:'-',trait:'-',evolvesTo:[29],evolvesFrom:27,desc:'身体变得更加岩石化。' },
    { id: 29, name: '布克棱岩',
      image:'https://patchwiki.biligame.com/images/rocom/8/89/n2olozya089rge7wuokp3nazl44xqst.png',ename:'BuKeRock',     attribute:'ground',eggGroup:['monster','mineral'],heightMin:1.75,heightMax:2.5,weightMin:287.0,weightMax:315.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:28,desc:'全身由坚硬棱岩构成的大块头守护者。' },

    { id: 30, name: '恶魔叮',
      image:'https://patchwiki.biligame.com/images/rocom/1/1e/dup0zejk454blppyqq2c2q7mnym6s4s.png',ename:'DevilDing',     attribute:['dark','flying'],eggGroup:['fairy'],heightMin:0.39,heightMax:0.56,weightMin:3.6,weightMax:5.2,stage:1,region:'-',trait:'-',evolvesTo:[31],evolvesFrom:null,desc:'长着小翅膀的恶魔精灵。叮叮作响时代表它心情不错。' },
    { id: 31, name: '叮叮恶魔',
      image:'https://patchwiki.biligame.com/images/rocom/1/1e/dup0zejk454blppyqq2c2q7mnym6s4s.png',ename:'DingDingDemon',attribute:['dark','flying'],eggGroup:['fairy'],heightMin:0.78,heightMax:1.12,weightMin:25.0,weightMax:34.0,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:30,desc:'恶魔叮进化后的更强大形态。' },

    // ══════════════ 032-046 更多基础精灵 ══════════════
    { id: 32, name: '毛毛',
      image:'https://patchwiki.biligame.com/images/rocom/a/af/owgmiaowlsk52x3cjatoiowp9hq4d4u.png',  ename:'MaoMao',  attribute:['bug','cute'],eggGroup:['insect','soft'],heightMin:0.31,heightMax:0.45,weightMin:3.0,weightMax:4.5,stage:1,region:'-',trait:'-',evolvesTo:[33,34],evolvesFrom:null,desc:'努力成长的小毛虫。进化分支取决于环境。' },
    { id: 33, name: '爬爬',
      image:'https://patchwiki.biligame.com/images/rocom/a/af/owgmiaowlsk52x3cjatoiowp9hq4d4u.png',  ename:'PaPa',   attribute:['bug','cute'],eggGroup:['insect','soft'],heightMin:0.35,heightMax:0.51,weightMin:5.5,weightMax:8.4,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:32,desc:'缓慢爬行的幼虫阶段。' },
    { id: 34, name: '化蝶',  ename:'Butterfly',attribute:['bug','cute'],eggGroup:['insect','flying'],heightMin:0.76,heightMax:1.08,weightMin:15.6,weightMax:17.8,stage:2,region:'-',trait:'-',forms:['平常的样子','幽冥眼的样子','喵喵的样子','奇丽花的样子'],evolvesTo:null,evolvesFrom:32,desc:'破茧成蝶的美丽形态！有多种拟态外观。' },
    { id: 35, name: '幽影树',
      image:'https://patchwiki.biligame.com/images/rocom/4/42/h8x8d49z7tbq02dibjv2lgnvk344pb7.png',ename:'GhostTree',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.035_幽影树.webp',   attribute:['ghost','grass'],eggGroup:['fairy','plant'],heightMin:0.64,heightMax:0.92,weightMin:29.5,weightMax:37.5,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'被黑暗力量侵蚀的树木精灵。' },

    { id: 36, name: '小鼠獭',
      image:'https://patchwiki.biligame.com/images/rocom/7/71/mhtudimorxc3o9un25icovvi9lahiza.png',ename:'XiaoShuTa',   attribute:['normal','water'],eggGroup:['animal','amphibian'],heightMin:0.37,heightMax:0.53,weightMin:6.7,weightMax:7.5,stage:1,region:'-',trait:'-',evolvesTo:[37],evolvesFrom:null,desc:'机灵的小型水獭精灵，游泳技术一流。' },
    { id: 37, name: '燕尾獭',
      image:'https://patchwiki.biligame.com/images/rocom/7/71/mhtudimorxc3o9un25icovvi9lahiza.png',ename:'YanWeiTa',    attribute:['normal','water'],eggGroup:['animal','amphibian'],heightMin:0.61,heightMax:0.88,weightMin:28.6,weightMax:31.5,stage:2,region:'-',trait:'-',evolvesTo:[38],evolvesFrom:36,desc:'尾巴像燕子尾巴一样美丽的獭。' },
    { id: 38, name: '卷胡巨獭',
      image:'https://patchwiki.biligame.com/images/rocom/7/71/mhtudimorxc3o9un25icovvi9lahiza.png',ename:'JuanHuJuTa', attribute:['normal','water'],eggGroup:['animal','amphibian'],heightMin:0.76,heightMax:1.08,weightMin:76.5,weightMax:90.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:37,desc:'留着卷曲胡须的巨大水獭首领。' },

    { id: 39, name: '矿晶虫',
      image:'https://patchwiki.biligame.com/images/rocom/4/4b/rakgahc3c1vonzb7l1oypg0kwmhpi3z.png',ename:'KuangJingChong',attribute:['light','ground'],eggGroup:['soft','mech'],heightMin:0.54,heightMax:0.77,weightMin:5.8,weightMax:10.53,stage:1,region:'-',trait:'-',evolvesTo:[40],evolvesFrom:null,desc:'以矿石为食的机械幼虫。' },
    { id: 40, name: '晶石蜗',ename:'JingShiWo',    attribute:['light','ground'],eggGroup:['soft','mech','mineral'],heightMin:1.03,heightMax:1.35,weightMin:59.1,weightMax:71.05,stage:2,region:'-',trait:'-',forms:['西瓜碧玺','莲花刚玉','星彩榴石','火山琉璃','蓝锥矿','烧蓝黄金的样子'],evolvesTo:null,evolvesFrom:39,desc:'背上镶嵌闪亮水晶的蜗牛。有6种宝石形态！' },

    // 奇丽草进化链
    { id: 41, name: '奇丽草',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/kv2w95rommythz2es62viqib0edez2m.png',ename:'BeautifulGrass',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.041_奇丽草.webp',attribute:'grass',eggGroup:['plant'],heightMin:0.38,heightMax:0.55,weightMin:4.1,weightMax:5.7,stage:1,region:'-',trait:'-',hasShiny:true,evolvesTo:[42],evolvesFrom:null,desc:'花朵异常艳丽的草系精灵。存在异色形态。' },
    { id: 42, name: '奇丽叶',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/kv2w95rommythz2es62viqib0edez2m.png',ename:'BeautifulLeaf', attribute:'grass',eggGroup:['plant'],heightMin:0.62,heightMax:0.89,weightMin:24.0,weightMax:31.0,stage:2,region:'-',trait:'-',evolvesTo:[43],evolvesFrom:41,desc:'叶片如宝石般闪耀的植物战士。' },
    { id: 43, name: '奇丽花',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/kv2w95rommythz2es62viqib0edez2m.png',ename:'BeautifulFlower',attribute:'grass',eggGroup:['plant'],heightMin:1.11,heightMax:1.58,weightMin:42.0,weightMax:58.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:42,desc:'盛开花朵的华丽花妖精。' },

    // 丢丢系列 - 地区形态 (NO.044~046)
    { id: 44, name: '丢丢',  ename:'DiuDiu', attribute:'grass',eggGroup:['plant','amphibian'],heightMin:0.35,heightMax:0.51,weightMin:4.3,weightMax:6.1,stage:1,region:'-',trait:'-',forms:['草地附近的样子','沙地附近的样子','雪山附近的样子','火山附近的样子'],evolvesTo:[45],evolvesFrom:null,desc:'总是丢三落四的小种子精灵。有4种地区形态。' },
    { id: 45, name: '卡卡虫',ename:'KaKaChong',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.045_卡卡虫（草地附近的样子）.webp',   attribute:'grass',eggGroup:['insect','amphibian'],heightMin:0.53,heightMax:0.76,weightMin:18.5,weightMax:21.6,stage:1,region:'-',trait:'-',forms:['草地附近的样子','沙地附近的样子','雪山附近的样子','火山附近的样子'],evolvesTo:[46],evolvesFrom:null,desc:'发出咔咔声的小甲虫。同样有4种地区形态。' },
    { id: 46, name: '卡瓦重',ename:'KaWaZhong',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.046_卡瓦重（草地附近的样子）.webp',   attribute:'grass',eggGroup:['insect','amphibian'],heightMin:0.76,heightMax:1.09,weightMin:29.0,weightMax:35.85,stage:2,region:'-',trait:'-',forms:['草地附近的样子','沙地附近的样子','雪山附近的样子','火山附近的样子'],evolvesTo:null,evolvesFrom:45,desc:'外骨骼极其厚重的甲虫战士。' },

    { id: 47, name: '护主犬',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/t29c2r5ooabyzne8dt5uu9bzq10ibtz.png',ename:'HuZhuQuan',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.047_护主犬.webp',   attribute:'fire',eggGroup:['animal'],heightMin:0.64,heightMax:0.92,weightMin:13.6,weightMax:17.5,stage:1,region:'-',trait:'-',evolvesTo:[48],evolvesFrom:null,desc:'忠诚可靠的守护犬，拼死保护主人。' },
    { id: 48, name: '音速犬',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/t29c2r5ooabyzne8dt5uu9bzq10ibtz.png',ename:'YinSuQuan',   attribute:'fire',eggGroup:['animal'],heightMin:1.13,heightMax:1.62,weightMin:39.5,weightMax:51.5,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:47,desc:'奔跑速度极快，能追上疾驰车辆的神犬。' },

    { id: 49, name: '绿耳松鼠',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/2foanarop7ik9wf1aqo37m7rdr3ug39.png',ename:'LvErSongShu', attribute:'normal',eggGroup:['animal'],heightMin:0.47,heightMax:0.68,weightMin:3.5,weightMax:6.0,stage:1,region:'-',trait:'-',evolvesTo:[50],evolvesFrom:null,desc:'耳朵是绿色的小松鼠，敏捷度极高。' },
    { id: 50, name: '抱枕松鼠',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/2foanarop7ik9wf1aqo37m7rdr3ug39.png',ename:'BaoZhenSongShu',attribute:'normal',eggGroup:['animal'],heightMin:0.6,heightMax:0.84,weightMin:21.05,weightMax:27.08,stage:2,region:'-',trait:'-',evolvesTo:[51],evolvesFrom:49,desc:'身体软绵绵像抱枕一样。' },
    { id: 51, name: '蹦床松鼠',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/2foanarop7ik9wf1aqo37m7rdr3ug39.png',ename:'BengChuangSongShu',attribute:'normal',eggGroup:['animal'],heightMin:0.78,heightMax:1.12,weightMin:47.5,weightMax:68.4,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:50,desc:'尾巴像弹簧一样可以弹跳很高的松鼠。' },

    // 嘟嘟煲系列 (NO.052~053)
    { id: 52, name: '嘟嘟煲',
      image:'https://patchwiki.biligame.com/images/rocom/4/44/8gr1vgk1hjf59enrdxyhboe35g8rijd.png',ename:'DuDuPot',     attribute:'poison',eggGroup:['fairy'],heightMin:0.65,heightMax:0.8,weightMin:48.5,weightMax:56.0,stage:1,region:'-',trait:'-',evolvesTo:[53],evolvesFrom:null,desc:'外形像个煲汤锅的可爱精灵。' },
    { id: 53, name: '嘟嘟锅',
      image:'https://patchwiki.biligame.com/images/rocom/4/44/8gr1vgk1hjf59enrdxyhboe35g8rijd.png',ename:'DuDuPotBig',  attribute:'poison',eggGroup:['fairy'],heightMin:0.64,heightMax:0.91,weightMin:67.9,weightMax:89.2,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:52,desc:'嘟嘟煲进化后的更大号煲汤精灵。' },

    // 小灵面进化链 (NO.054~056)
    { id: 54, name: '小灵面',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/60arfjew3ryqzrh5dqh8mi6axn595h4.png',ename:'XiaoLingMian', attribute:'ghost',eggGroup:['none'],heightMin:0.38,heightMax:0.55,weightMin:0.1,weightMax:0.55,stage:1,region:'-',trait:'-',evolvesTo:[55],evolvesFrom:null,desc:'漂浮在空中的面具状幽灵。' },
    { id: 55, name: '暗影灵面',ename:'AnYingLingMian',attribute:'ghost',eggGroup:['none'],heightMin:0.75,heightMax:0.86,weightMin:0.12,weightMax:1.16,stage:2,region:'-',trait:'-',forms:['睁眼的样子','闭眼的样子'],evolvesTo:[56],evolvesFrom:54,desc:'被黑暗侵蚀的面具幽灵。' },
    { id: 56, name: '幽冥眼',ename:'YouMingYan',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.056_幽冥眼（睁眼的样子）.webp',   attribute:['��','normal'],eggGroup:['none'],heightMin:1.55,heightMax:1.65,weightMin:1.5,weightMax:2.86,stage:3,region:'-',trait:'-',forms:['睁眼的样子','闭眼的样子'],evolvesTo:null,evolvesFrom:55,desc:'独眼能看穿生死的冥界使者。' },

    // 梦游系列 (NO.057~058)
    { id: 57, name: '梦游',  ename:'SleepWalk',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.057_梦游（穿旧睡衣的样子）.webp',    attribute:'ghost',eggGroup:['fairy'],heightMin:0.5,heightMax:0.6,weightMin:0.6,weightMax:1.87,stage:1,region:'-',trait:'-',forms:['穿旧睡衣','穿星星睡衣的样子'],evolvesTo:[58],evolvesFrom:null,desc:'永远睡眼惺忪的梦游精灵。' },
    { id: 58, name: '梦悠悠',ename:'DreamFloat',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.058_梦悠悠（穿旧睡衣的样子）.webp',   attribute:'ghost',eggGroup:['fairy'],heightMin:1.0,heightMax:1.2,weightMin:1.25,weightMax:3.1,stage:2,region:'-',trait:'-',forms:['穿旧睡衣','穿星星睡衣的样子'],evolvesTo:null,evolvesFrom:57,desc:'漂浮在梦境边缘的神秘存在。' },

    // 兽花蕾 → 伏地兽 → 贪食鼹 → 巨噬针鼹 (NO.059~062)
    { id: 59, name: '兽花蕾',
      image:'https://patchwiki.biligame.com/images/rocom/f/fb/40ew1mdy3j3km17nwkdvlit9es9y39b.png',ename:'BeastBud',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.059_兽花蕾.webp',     attribute:['light','grass'],eggGroup:['plant'],heightMin:0.38,heightMax:0.45,weightMin:4.25,weightMax:6.5,stage:1,region:'-',trait:'-',evolvesTo:[60],evolvesFrom:null,desc:'像花朵一样的兽型幼崽。' },
    { id: 60, name: '伏地兽',
      image:'https://patchwiki.biligame.com/images/rocom/5/5c/tspudx138x6hgz6dth0361r383pr0ha.png',ename:'GroundBeast',   attribute:'normal',eggGroup:['monster'],heightMin:0.52,heightMax:0.74,weightMin:12.4,weightMax:15.8,stage:2,region:'-',trait:'-',evolvesTo:[61],evolvesFrom:59,desc:'擅长潜伏在地下的猛兽。' },
    { id: 61, name: '贪食鼹',
      image:'https://patchwiki.biligame.com/images/rocom/5/5c/tspudx138x6hgz6dth0361r383pr0ha.png',ename:'GluttonyMole', attribute:'normal',eggGroup:['monster'],heightMin:0.84,heightMax:1.21,weightMin:21.6,weightMax:35.84,stage:2,region:'-',trait:'-',evolvesTo:[62],evolvesFrom:60,desc:'贪吃无比的巨型鼹鼠。' },
    { id: 62, name: '巨噬针鼹',ename:'GiantEchidna',attribute:'normal',eggGroup:['monster'],heightMin:1.52,heightMax:1.79,weightMin:87.3,weightMax:105.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:61,desc:'全身覆盖巨大尖刺的超强防御型怪兽。' },

    // 蹦蹦种子系列 - 多形态 (NO.063~065)
    { id: 63, name: '蹦蹦种子',ename:'BengBengSeed',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.063_蹦蹦种子（海神球形态）.webp',attribute:['grass','poison'],eggGroup:['plant'],heightMin:0.46,heightMax:0.67,weightMin:4.3,weightMax:5.6,stage:1,region:'-',trait:'-',forms:['海神球形态','彩玉球形态','短毛球形态','象牙球形态'],evolvesTo:[64],evolvesFrom:null,desc:'会弹跳的神奇种子，有4种不同球体形态！' },
    { id: 64, name: '蹦蹦草',ename:'BengBengGrass',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.064_蹦蹦草（海神球形态）.webp', attribute:['grass','poison'],eggGroup:['plant'],heightMin:0.59,heightMax:0.85,weightMin:34.3,weightMax:42.9,stage:2,region:'-',trait:'-',forms:['海神球形态','彩玉球形态','短毛球形态','象牙球形态'],evolvesTo:[65],evolvesFrom:63,desc:'蹦蹦种子的进化形态。' },
    { id: 65, name: '蹦蹦花',ename:'BengBengFlower',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.065_蹦蹦花（海神球形态）.webp',attribute:['grass','poison'],eggGroup:['plant'],heightMin:1.33,heightMax:1.9,weightMin:75.0,weightMax:86.0,stage:3,region:'-',trait:'-',forms:['海神球形态','彩玉球形态','短毛球形态','象牙球形态'],evolvesTo:null,evolvesFrom:64,desc:'蹦蹦系列的最终进化，开出绚烂的花朵。' },

    // 电咩咩系列 (NO.066~068)
    { id: 66, name: '电咩咩',
      image:'https://patchwiki.biligame.com/images/rocom/5/57/rrzi4lxo68m4mmhokly3l8z4t2ti2r7.png',ename:'ElectricMimi',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.066_电咩咩.webp',  attribute:'electric',eggGroup:['animal'],heightMin:0.58,heightMax:0.83,weightMin:7.17,weightMax:9.1,stage:1,region:'-',trait:'-',evolvesTo:[67],evolvesFrom:null,desc:'发出"咩咩"叫声的带电小羊。' },
    { id: 67, name: '粉咩咩',
      image:'https://patchwiki.biligame.com/images/rocom/5/57/rrzi4lxo68m4mmhokly3l8z4t2ti2r7.png',ename:'PinkMimi',    attribute:'electric',eggGroup:['animal'],heightMin:0.8,heightMax:1.14,weightMin:15.3,weightMax:18.6,stage:2,region:'-',trait:'-',evolvesTo:[68],evolvesFrom:67,desc:'电咩咩进化后变成粉红色。' },
    { id: 68, name: '电球咩咩',
      image:'https://patchwiki.biligame.com/images/rocom/5/57/rrzi4lxo68m4mmhokly3l8z4t2ti2r7.png',ename:'ElectricBallMimi',attribute:'electric',eggGroup:['animal'],heightMin:1.13,heightMax:1.62,weightMin:48.6,weightMax:58.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:67,desc:'浑身环绕电球的电咩咩最终形态。' },

    // 蒲公英系列 (NO.069~070)
    { id: 69, name: '蒲公英',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/87el3plwkuzm4wsb0l6s3ffqowsbiwl.png',ename:'Dandelion',   attribute:['grass','cute'],eggGroup:['plant','flying'],heightMin:0.3,heightMax:0.5,weightMin:0.1,weightMax:0.6,stage:1,region:'-',trait:'-',evolvesTo:[70],evolvesFrom:null,desc:'随风飘散的蒲公英精灵。' },
    { id: 70, name: '蒲公英娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/87el3plwkuzm4wsb0l6s3ffqowsbiwl.png',ename:'DandelionDoll',attribute:['grass','cute'],eggGroup:['plant','flying'],heightMin:0.7,heightMax:1.0,weightMin:0.3,weightMax:1.35,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:69,desc:'手持蒲公英的可爱娃娃。' },

    // 伊贝儿系列 (NO.071~072)
    { id: 71, name: '伊贝儿',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/3x1hdgzmc2cyjh9zkfdyw1smgck9o3r.png',ename:'Ibelle',       attribute:'grass',eggGroup:['plant','soft'],heightMin:0.44,heightMax:0.62,weightMin:3.3,weightMax:4.2,stage:1,region:'-',trait:'-',evolvesTo:[72],evolvesFrom:null,desc:'蝴蝶般的虫系小精灵。' },
    { id: 72, name: '伊贝粉粉',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/3x1hdgzmc2cyjh9zkfdyw1smgck9o3r.png',ename:'IbellePinkPink',attribute:'grass',eggGroup:['plant','soft'],heightMin:1.03,heightMax:1.47,weightMin:9.3,weightMax:12.5,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:71,desc:'伊贝儿的粉色进化形态。' },

    // 白发懒人 → 动力猿 → 瞌睡王 (NO.073~075)
    { id: 73, name: '白发懒人',
      image:'https://patchwiki.biligame.com/images/rocom/4/46/06pz2jvhh5k0ukbgj30jmdfyz4nic06.png',ename:'WhiteHairLazy',attribute:'normal',eggGroup:['humanoid'],heightMin:0.72,heightMax:1.03,weightMin:19.5,weightMax:23.5,stage:1,region:'-',trait:'-',evolvesTo:[74],evolvesFrom:null,desc:'总是懒洋洋不想动的人形精灵。' },
    { id: 74, name: '动力猿',
      image:'https://patchwiki.biligame.com/images/rocom/4/46/06pz2jvhh5k0ukbgj30jmdfyz4nic06.png',ename:'PowerApe',     attribute:['normal','fighting'],eggGroup:['humanoid'],heightMin:1.2,heightMax:1.71,weightMin:46.5,weightMax:63.5,stage:2,region:'-',trait:'-',evolvesTo:[75],evolvesFrom:73,desc:'充满动力的战斗型猿猴。' },
    { id: 75, name: '瞌睡王',
      image:'https://patchwiki.biligame.com/images/rocom/4/46/06pz2jvhh5k0ukbgj30jmdfyz4nic06.png',ename:'SleepyKing',   attribute:['normal','fighting'],eggGroup:['humanoid','monster'],heightMin:1.61,heightMax:2.31,weightMin:124.5,weightMax:136.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:74,desc:'打起瞌睡来无人能敌的王中之王。' },

    // 海盔虫进化链 - 首领形态 (NO.076~078)
    { id: 76, name: '海盔虫',ename:'HelmetBug',    attribute:['water','poison'],eggGroup:['ocean'],heightMin:0.55,heightMax:0.7,weightMin:7.4,weightMax:8.6,stage:1,region:'-',trait:'-',forms:['本来的样子','磨损的样子'],evolvesTo:[77],evolvesFrom:null,desc:'戴着海螺头盔的水生虫族。' },
    { id: 77, name: '刺盔虫',ename:'SpikyHelmetBug',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.077_刺盔虫（本来的样子）.webp',attribute:['water','poison'],eggGroup:['ocean'],heightMin:0.83,heightMax:1.19,weightMin:22.5,weightMax:29.8,stage:2,region:'-',trait:'-',forms:['本来的样子','磨损的样子'],evolvesTo:[78],evolvesFrom:76,desc:'头盔长满尖刺的危险形态。' },
    { id: 78, name: '千棘盔',ename:'ThornArmor',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.078_千棘盔（本来的样子）.webp',   attribute:['water','poison'],eggGroup:['ocean'],heightMin:1.11,heightMax:1.33,weightMin:98.6,weightMax:115.0,stage:3,isBoss:true,region:'-',trait:'-',forms:['本来的样子','磨损的样子'],evolvesTo:null,evolvesFrom:77,desc:'首领形态的海底虫族王者！全身覆盖千根棘刺。' },

    // ══════════════ 079-100 更多精灵 ══════════════
    { id: 79, name: '菊花梨',
      image:'https://patchwiki.biligame.com/images/rocom/d/db/qitqnhdvjw8gwhnvvapfuqv6g0qgaef.png',ename:'ChrysanthemumPear',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.079_菊花梨.webp',attribute:'cute',eggGroup:['plant'],heightMin:0.63,heightMax:0.9,weightMin:4.2,weightMax:5.8,stage:1,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'外形像菊花的果实精灵。' },

    { id: 80, name: '小星光',ename:'LittleStarlight',attribute:'electric',eggGroup:['animal','monster'],heightMin:0.78,heightMax:1.12,weightMin:27.5,weightMax:36.2,stage:1,region:'-',trait:'-',forms:['星光能量的样子','月光能量的样子'],evolvesTo:[81],evolvesFrom:null,desc:'身上闪烁星光的小狮子幼崽。' },
    { id: 81, name: '星光狮',ename:'StarlightLion',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.081_星光狮（星光能量的样子）.webp', attribute:'electric',eggGroup:['animal','monster'],heightMin:1.08,heightMax:1.54,weightMin:49.5,weightMax:58.1,stage:2,region:'-',trait:'-',forms:['星光能量的样子','月光能量的样子'],evolvesTo:null,evolvesFrom:80,desc:'鬃毛如星河般闪耀的光之雄狮。' },

    // 一窝蜂进化链 (NO.082~084)
    { id: 82, name: '一窝蜂',
      image:'https://patchwiki.biligame.com/images/rocom/d/de/drnf14ybuu1j1ulcxyktvpr52tlw89x.png',ename:'SwarmBee',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.082_一窝蜂.webp',    attribute:['bug','flying'],eggGroup:['insect','flying'],heightMin:0.37,heightMax:0.52,weightMin:4.0,weightMax:5.5,stage:1,region:'-',trait:'-',evolvesTo:[83],evolvesFrom:null,desc:'成群结队的蜜蜂精灵。' },
    { id: 83, name: '黄蜂后',
      image:'https://patchwiki.biligame.com/images/rocom/d/de/drnf14ybuu1j1ulcxyktvpr52tlw89x.png',ename:'YellowQueenBee',attribute:['bug','flying'],eggGroup:['insect','flying'],heightMin:0.81,heightMax:1.16,weightMin:31.7,weightMax:39.21,stage:2,region:'-',trait:'-',evolvesTo:[84],evolvesFrom:82,desc:'一窝蜂进化的蜂群女王。' },
    { id: 84, name: '女王蜂',ename:'QueenBee',     attribute:['bug','flying'],eggGroup:['insect','flying'],heightMin:1.54,heightMax:2.12,weightMin:98.5,weightMax:137.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:83,desc:'统领整个蜂群的至高女王。' },

    // 小夜 → 紫夜 → 朔夜伊芙 (NO.085~087)
    { id: 85, name: '小夜',
      image:'https://patchwiki.biligame.com/images/rocom/7/72/482iqm8394vdtee3ylwiwyndj9tr8vq.png',  ename:'LittleNight',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.085_小夜.webp',   attribute:'dark',eggGroup:['fairy','humanoid'],heightMin:0.51,heightMax:0.73,weightMin:4.5,weightMax:7.6,stage:1,region:'-',trait:'-',evolvesTo:[86],evolvesFrom:null,desc:'从黑夜中诞生的小女孩精灵。' },
    { id: 86, name: '紫夜',
      image:'https://patchwiki.biligame.com/images/rocom/7/72/482iqm8394vdtee3ylwiwyndj9tr8vq.png',  ename:'PurpleNight',   attribute:'dark',eggGroup:['fairy','humanoid'],heightMin:0.72,heightMax:1.03,weightMin:17.6,weightMax:22.5,stage:2,region:'-',trait:'-',evolvesTo:[87],evolvesFrom:85,desc:'身披紫色夜纱的暗夜使者。' },
    { id: 87, name: '朔夜伊芙',
      image:'https://patchwiki.biligame.com/images/rocom/7/72/482iqm8394vdtee3ylwiwyndj9tr8vq.png',ename:'NewMoonEve',  attribute:'dark',eggGroup:['fairy'],heightMin:1.06,heightMax:1.51,weightMin:46.2,weightMax:57.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:86,desc:'朔月之夜诞生的暗影女神。' },

    // 乖乖鹄 → 蓝珠天鹅 → 翠顶夫人/黑羽夫人 (NO.088~091)
    { id: 88, name: '乖乖鹄',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'GoodGoose',    attribute:['flying','water'],eggGroup:['flying','amphibian'],heightMin:0.46,heightMax:0.67,weightMin:4.2,weightMax:5.5,stage:1,region:'-',trait:'-',evolvesTo:[89],evolvesFrom:null,desc:'乖乖听话的小鹅精灵。' },
    { id: 89, name: '蓝珠天鹅',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'BluePearlSwan',attribute:['flying','water'],eggGroup:['flying','amphibian'],heightMin:0.88,heightMax:1.03,weightMin:14.08,weightMax:18.1,stage:2,region:'-',trait:'-',evolvesTo:[90,91],evolvesFrom:88,desc:'优雅的蓝色珍珠天鹅。可分化为两种形态。' },
    { id: 90, name: '翠顶夫人',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'EmeraldMadam', attribute:['flying','water'],eggGroup:['flying'],heightMin:1.2,heightMax:1.34,weightMin:19.05,weightMax:25.04,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:89,desc:'头顶翠绿冠羽的高贵天鹅夫人。' },
    { id: 91, name: '黑羽夫人',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'BlackFeatherMadam',attribute:['flying','dark'],eggGroup:['flying'],heightMin:1.25,heightMax:1.4,weightMin:20.5,weightMax:28.06,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:89,desc:'黑色羽毛的神秘天鹅夫人。' },
    { id: 92, name: '锤头鹳',
      image:'https://patchwiki.biligame.com/images/rocom/c/c8/0kv8ab3s5umo3dbcwsthu9xnpo9y1fc.png',ename:'HammerStork',  attribute:['flying','water'],eggGroup:['flying'],heightMin:1.09,heightMax:1.56,weightMin:51.3,weightMax:65.8,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'头部形状像锤子的奇特鸟类。' },

    // 绿草精灵 → 魔草巫灵 (NO.093~094)
    { id: 93, name: '绿草精灵',
      image:'https://patchwiki.biligame.com/images/rocom/1/17/i57n7v6fkt96if840ri0w2jwf07rsgr.png',ename:'GreenGrassFairy',attribute:['grass','illusion'],eggGroup:['plant','humanoid'],heightMin:0.71,heightMax:1.01,weightMin:9.3,weightMax:10.3,stage:1,region:'-',trait:'-',evolvesTo:[94],evolvesFrom:null,desc:'由草木精华凝聚而成的精灵。' },
    { id: 94, name: '魔草巫灵',
      image:'https://patchwiki.biligame.com/images/rocom/1/17/i57n7v6fkt96if840ri0w2jwf07rsgr.png',ename:'MagicGrassWitch',attribute:['grass','illusion'],eggGroup:['plant','humanoid'],heightMin:0.74,heightMax:1.05,weightMin:29.0,weightMax:34.0,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:93,desc:'掌握魔法的草木巫师。' },

    { id: 95, name: '记忆石',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/q6hhh7atr12ne3qx79r3q311a3pcmo9.png',ename:'MemoryStone',  attribute:'ground',eggGroup:['mineral'],heightMin:0.97,heightMax:1.39,weightMin:90.2,weightMax:112.0,stage:1,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'记载着古老记忆的石头精灵。' },

    // 咔咔羽毛 → 咔咔雀 → 咔咔鸟 (NO.096~098)
    { id: 96, name: '咔咔羽毛',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ob21aol2viw67k7tp5830dj3rzphp66.png',ename:'KakaFeather', attribute:['flying','normal'],eggGroup:['flying'],heightMin:0.62,heightMax:0.89,weightMin:2.62,weightMax:3.9,stage:1,region:'-',trait:'-',evolvesTo:[97],evolvesFrom:null,desc:'只有一根羽毛的小小鸟。' },
    { id: 97, name: '咔咔雀',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ob21aol2viw67k7tp5830dj3rzphp66.png', ename:'KakaSparrow',  attribute:['flying','normal'],eggGroup:['flying'],heightMin:0.66,heightMax:0.95,weightMin:13.8,weightMax:18.5,stage:2,region:'-',trait:'-',evolvesTo:[98],evolvesFrom:96,desc:'长出完整羽毛的麻雀。' },
    { id: 98, name: '咔咔鸟',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ob21aol2viw67k7tp5830dj3rzphp66.png', ename:'KakaBird',     attribute:['flying','normal'],eggGroup:['flying'],heightMin:0.7,heightMax:1.0,weightMin:27.5,weightMax:33.72,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:97,desc:'咔咔系列的最终形态。' },

    // 小草虫进化链 (NO.099~101)
    { id: 99, name: '小草虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/4wnznw67s6p9vg2jru046cjq7q8qs8w.png',ename:'LittleGrassBug',attribute:['bug','grass'],eggGroup:['insect','humanoid'],heightMin:0.47,heightMax:0.67,weightMin:2.1,weightMax:3.4,stage:1,region:'-',trait:'-',evolvesTo:[100],evolvesFrom:null,desc:'伪装成草叶的小虫子。' },
    { id:100, name: '草衣虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/4wnznw67s6p9vg2jru046cjq7q8qs8w.png',ename:'GrassCoatWorm', attribute:['bug','grass'],eggGroup:['insect','humanoid'],heightMin:0.6,heightMax:0.87,weightMin:7.2,weightMax:8.6,stage:2,region:'-',trait:'-',evolvesTo:[101],evolvesFrom:99,desc:'披着草叶外衣的虫子。' },
    { id:101, name: '花衣蝶',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/4wnznw67s6p9vg2jru046cjq7q8qs8w.png',ename:'FlowerButterfly',attribute:['bug','grass'],eggGroup:['insect','fairy'],heightMin:0.92,heightMax:1.32,weightMin:19.6,weightMax:23.4,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:100,desc:'翅膀如花瓣般的美丽蝴蝶。' },

    // 绿翼/魔翼/魔眷鸟 (NO.102~104)
    { id:102, name: '绿翼鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/6legu9g43vllzz0bwdewrpp0f6zmwdu.png',ename:'GreenWingBird', attribute:['cute','flying'],eggGroup:['flying'],heightMin:0.49,heightMax:0.61,weightMin:3.6,weightMax:4.8,stage:2,region:'-',trait:'-',evolvesTo:[103],evolvesFrom:null,desc:'绿色翅膀的飞鸟。' },
    { id:103, name: '魔翼鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/6legu9g43vllzz0bwdewrpp0f6zmwdu.png',ename:'MagicWingBird', attribute:['cute','flying'],eggGroup:['flying','fairy'],heightMin:0.78,heightMax:1.12,weightMin:8.85,weightMax:13.8,stage:2,region:'-',trait:'-',evolvesTo:[104],evolvesFrom:102,desc:'带有魔力的黑暗飞鸟。' },
    { id:104, name: '魔眷鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/6legu9g43vllzz0bwdewrpp0f6zmwdu.png',ename:'MagicPetBird', attribute:['cute','flying'],eggGroup:['flying','fairy'],heightMin:0.91,heightMax:1.31,weightMin:19.8,weightMax:24.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:103,desc:'被魔力眷顾的强大飞鸟。' },

    // 阿米亚特 → 阿米樱 (NO.105~106)
    { id:105, name: '阿米亚特',
      image:'https://patchwiki.biligame.com/images/rocom/0/01/qzl2l4nltxeu187qw1a2ybgfe5qj2tf.png',ename:'Armiat',      attribute:'ground',eggGroup:['monster'],heightMin:0.57,heightMax:0.79,weightMin:38.5,weightMax:49.2,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'温和友善的巨兽精灵。' },
    { id:106, name: '阿米樱',
      image:'https://patchwiki.biligame.com/images/rocom/0/01/qzl2l4nltxeu187qw1a2ybgfe5qj2tf.png',ename:'Amisakura',    attribute:'ground',eggGroup:['monster'],heightMin:0.78,heightMax:1.12,weightMin:94.2,weightMax:143.0,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'阿米亚特的樱花形态变体。' },

    { id:107, name: '罗隐',
      image:'https://patchwiki.biligame.com/images/rocom/0/01/qzl2l4nltxeu187qw1a2ybgfe5qj2tf.png',  ename:'LuoYin',        attribute:['ground','dark'],eggGroup:['monster','mineral'],heightMin:1.48,heightMax:2.12,weightMin:290.0,weightMax:305.0,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'隐匿于阴影中的幽灵战士。' },

    // 风铃鲨进化链 (NO.108~110)
    { id:108, name: '风铃鲨',
      image:'https://patchwiki.biligame.com/images/rocom/f/fe/88nqs9bcxmqlj6ad7xoyz36k5fxw4qe.png',ename:'WindBellShark', attribute:['water','flying'],eggGroup:['ocean','flying'],heightMin:0.41,heightMax:0.59,weightMin:13.07,weightMax:16.8,stage:1,region:'-',trait:'-',evolvesTo:[109],evolvesFrom:null,desc:'背鳍如风铃般响亮的鲨鱼。' },
    { id:109, name: '蓝蝶鲨',
      image:'https://patchwiki.biligame.com/images/rocom/f/fe/88nqs9bcxmqlj6ad7xoyz36k5fxw4qe.png',ename:'BlueButterflyShark',attribute:['water','flying'],eggGroup:['ocean','flying'],heightMin:0.81,heightMax:1.16,weightMin:34.82,weightMax:48.6,stage:2,region:'-',trait:'-',evolvesTo:[110],evolvesFrom:108,desc:'鳍部如蝴蝶翅膀般美丽的鲨鱼。' },
    { id:110, name: '彩蝶鲨',
      image:'https://patchwiki.biligame.com/images/rocom/f/fe/88nqs9bcxmqlj6ad7xoyz36k5fxw4qe.png',ename:'ColorButterflyShark',attribute:['water','flying'],eggGroup:['ocean','flying'],heightMin:1.18,heightMax:1.68,weightMin:80.5,weightMax:96.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:109,desc:'鳍部七彩斑斓的梦幻鲨鱼。' },

    // 石石 → 巨灵石 (NO.111~112)
    { id:111, name: '石石',
      image:'https://patchwiki.biligame.com/images/rocom/c/c6/ozlttesinkk43ayc3sv3tbab5ckbshi.png',  ename:'StoneStone',    attribute:'ground',eggGroup:['monster','mineral'],heightMin:0.35,heightMax:0.5,weightMin:61.0,weightMax:75.0,stage:1,region:'-',trait:'-',evolvesTo:[112],evolvesFrom:null,desc:'由纯石块构成的生命体。' },
    { id:112, name: '巨灵石',
      image:'https://patchwiki.biligame.com/images/rocom/c/c6/ozlttesinkk43ayc3sv3tbab5ckbshi.png',ename:'GiantSpiritStone',attribute:['ground','ghost'],eggGroup:['monster','mineral'],heightMin:1.95,heightMax:2.3,weightMin:205.0,weightMax:240.0,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:111,desc:'蕴含巨灵之力的巨大岩石。' },

    // 仪式系列 (NO.113~115)
    { id:113, name: '仪使者',
      image:'https://patchwiki.biligame.com/images/rocom/9/98/a4s6v19kpxbuk9cprtbjxwgs2xwxi70.png',ename:'RitualMessenger',attribute:['ground','illusion'],eggGroup:['mineral'],heightMin:0.45,heightMax:0.58,weightMin:19.05,weightMax:35.05,stage:2,region:'-',trait:'-',evolvesTo:[114],evolvesFrom:null,desc:'执行神圣仪式的信使。' },
    { id:114, name: '仪式之星',
      image:'https://patchwiki.biligame.com/images/rocom/9/98/a4s6v19kpxbuk9cprtbjxwgs2xwxi70.png',ename:'RitualStar',  attribute:['ground','illusion'],eggGroup:['mineral'],heightMin:0.84,heightMax:1.21,weightMin:72.0,weightMax:87.5,stage:2,region:'-',trait:'-',evolvesTo:[115],evolvesFrom:113,desc:'仪式中闪耀的星辰。' },
    { id:115, name: '仪式巨像',
      image:'https://patchwiki.biligame.com/images/rocom/9/98/a4s6v19kpxbuk9cprtbjxwgs2xwxi70.png',ename:'RitualColossus',attribute:['ground','illusion'],eggGroup:['mineral','fairy'],heightMin:1.44,heightMax:1.79,weightMin:198.05,weightMax:253.07,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:114,desc:'仪式中召唤出的巨大石像。' },

    // 小独角兽 → 白金独角兽 (NO.116~117)
    { id:116, name: '小独角兽',
      image:'https://patchwiki.biligame.com/images/rocom/e/ec/qdyvecckyuhnazeotxq9wkxwzb4ws8o.png',ename:'LittleUnicorn', attribute:'light',eggGroup:['animal','monster'],heightMin:0.98,heightMax:1.41,weightMin:41.5,weightMax:55.6,stage:1,region:'-',trait:'-',evolvesTo:[117],evolvesFrom:null,desc:'额头有小角的纯洁独角兽幼崽。' },
    { id:117, name: '白金独角兽',
      image:'https://patchwiki.biligame.com/images/rocom/e/ec/qdyvecckyuhnazeotxq9wkxwzb4ws8o.png',ename:'PlatinumUnicorn',attribute:'light',eggGroup:['animal','monster'],heightMin:1.35,heightMax:1.93,weightMin:94.5,weightMax:105.0,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:116,desc:'通体白金色的圣洁独角兽。' },

    // 旋叶虫进化链 (NO.118~120)
    { id:118, name: '旋叶虫',ename:'SpinningLeafBug',attribute:['normal','bug'],eggGroup:['plant','insect'],heightMin:0.1,heightMax:0.15,weightMin:0.1,weightMax:0.85,stage:1,region:'-',trait:'-',forms:['金黄的样子','枯叶的样子'],evolvesTo:[119],evolvesFrom:null,desc:'旋转叶片的虫族精灵。' },
    { id:119, name: '蓬叶虫',ename:'FluffyLeafBug',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.119_蓬叶虫（金黄的样子）.webp', attribute:['normal','bug'],eggGroup:['plant','insect'],heightMin:0.53,heightMax:0.76,weightMin:0.65,weightMax:1.68,stage:2,region:'-',trait:'-',forms:['金黄的样子','枯叶的样子'],evolvesTo:[120],evolvesFrom:118,desc:'叶片蓬松的虫族精灵。' },
    { id:120, name: '风滚暮虫',ename:'TumblebugDusk',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.120_风滚暮虫（金黄的样子）.webp', attribute:['normal','bug'],eggGroup:['plant','insect'],heightMin:0.6,heightMax:0.7,weightMin:1.45,weightMax:3.43,stage:3,region:'-',trait:'-',forms:['金黄的样子','枯叶的样子'],evolvesTo:null,evolvesFrom:119,desc:'随风滚动的暮色虫族。' },

    // 黑猫系列 (NO.121~124)
    { id:121, name: '小黑猫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/8rrqybxt78i08ws9ztf6iqrhpbf61fi.png',ename:'LittleBlackCat',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.121_小黑猫.webp', attribute:'normal',eggGroup:['animal','humanoid'],heightMin:0.55,heightMax:0.65,weightMin:3.1,weightMax:4.5,stage:1,region:'-',trait:'-',evolvesTo:[122],evolvesFrom:null,desc:'神秘的黑猫，夜行性很强。' },
    { id:122, name: '黑猫巫师',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/8rrqybxt78i08ws9ztf6iqrhpbf61fi.png',ename:'BlackCatWizard',attribute:'normal',eggGroup:['animal','humanoid','fairy'],heightMin:0.85,heightMax:0.97,weightMin:8.1,weightMax:9.5,stage:2,region:'-',trait:'-',evolvesTo:[123],evolvesFrom:121,desc:'掌握巫术的黑猫法师。' },
    { id:123, name: '忽幽狸',
      image:'https://patchwiki.biligame.com/images/rocom/7/78/2jxh0kfsg1lzfa640r2nyaz03bcr97j.png',ename:'GhostFox',      attribute:['ghost','poison'],eggGroup:['humanoid'],heightMin:0.76,heightMax:1.09,weightMin:8.3,weightMax:9.8,stage:2,region:'-',trait:'-',evolvesTo:[124],evolvesFrom:122,desc:'忽隐忽现的狐狸精灵。' },
    { id:124, name: '影狸',
      image:'https://patchwiki.biligame.com/images/rocom/7/78/2jxh0kfsg1lzfa640r2nyaz03bcr97j.png',  ename:'ShadowFox',    attribute:['ghost','poison'],eggGroup:['humanoid'],heightMin:1.11,heightMax:1.59,weightMin:23.5,weightMax:37.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:123,desc:'操纵影子的狐狸大师。' },

    // 多多系列 (NO.125~127)
    { id:125, name: '多多',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/616cnqj5bbxqzen5zwhzqhst14lpua9.png',  ename:'DuoDuo',        attribute:['poison','ground'],eggGroup:['humanoid','monster'],heightMin:0.45,heightMax:0.65,weightMin:14.6,weightMax:18.6,stage:1,region:'-',trait:'-',evolvesTo:[126],evolvesFrom:null,desc:'圆圆胖胖的多多精灵。' },
    { id:126, name: '多啦多',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/616cnqj5bbxqzen5zwhzqhst14lpua9.png',ename:'DuoLaDuo',      attribute:['poison','ground'],eggGroup:['humanoid','monster'],heightMin:0.58,heightMax:0.83,weightMin:28.5,weightMax:34.6,stage:2,region:'-',trait:'-',evolvesTo:[127],evolvesFrom:125,desc:'多多的进化形态。' },
    { id:127, name: '古啦多',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/616cnqj5bbxqzen5zwhzqhst14lpua9.png',ename:'GuLaDuo',      attribute:['poison','ground'],eggGroup:['humanoid','monster'],heightMin:0.69,heightMax:0.99,weightMin:43.5,weightMax:58.6,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:126,desc:'古文明遗留下来的多多最终形态。' },

    // 哭哭菇进化链 (NO.128~130)
    { id:128, name: '哭哭菇',
      image:'https://patchwiki.biligame.com/images/rocom/e/ee/r5ob8gjuzspmnvdafl5zf5836e6bf6g.png',ename:'CryCryMushroom',attribute:'illusion',eggGroup:['plant'],heightMin:0.33,heightMax:0.47,weightMin:1.8,weightMax:3.2,stage:1,region:'-',trait:'-',evolvesTo:[129],evolvesFrom:null,desc:'总是哭哭啼啼的蘑菇精灵。' },
    { id:129, name: '怖须菇',
      image:'https://patchwiki.biligame.com/images/rocom/e/ee/r5ob8gjuzspmnvdafl5zf5836e6bf6g.png',ename:'HorrorBeardMushroom',attribute:'illusion',eggGroup:['plant'],heightMin:0.69,heightMax:0.99,weightMin:8.72,weightMax:15.6,stage:2,region:'-',trait:'-',evolvesTo:[130],evolvesFrom:128,desc:'长着恐怖胡须的蘑菇。' },
    { id:130, name: '怖哭菇',
      image:'https://patchwiki.biligame.com/images/rocom/e/ee/r5ob8gjuzspmnvdafl5zf5836e6bf6g.png',ename:'HorrorCryMushroom',attribute:'illusion',eggGroup:['plant'],heightMin:1.23,heightMax:1.76,weightMin:22.5,weightMax:28.6,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:129,desc:'让人闻风丧胆的蘑菇之王。' },

    { id:131, name: '恶魔狼',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/8rz167blfbrzzs44u5mq8a0k7im6ap8.png',ename:'DevilWolf',     attribute:'dark',eggGroup:['animal'],heightMin:1.23,heightMax:1.76,weightMin:74.0,weightMax:92.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'拥有恶魔之血的狼族王者。' },

    // 电企鹅系列 (NO.132~133)
    { id:132, name: '小电企鹅',
      image:'https://patchwiki.biligame.com/images/rocom/d/d6/4seo2uqqap8978sndkvqzoez1nc8nwy.png',ename:'LittleElectricPenguin',attribute:['ice','electric'],eggGroup:['ocean','flying'],heightMin:0.44,heightMax:0.56,weightMin:3.82,weightMax:5.39,stage:1,region:'-',trait:'-',evolvesTo:[133],evolvesFrom:null,desc:'体内带电的小企鹅。' },
    { id:133, name: '电企鹅',
      image:'https://patchwiki.biligame.com/images/rocom/d/d6/4seo2uqqap8978sndkvqzoez1nc8nwy.png',ename:'ElectricPenguin',attribute:['ice','electric'],eggGroup:['ocean','flying'],heightMin:0.9,heightMax:1.14,weightMin:14.6,weightMax:26.9,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:132,desc:'释放电流的电企鹅。' },

    // 雪豆丁 → 雪蛮人 → 雪巨人 (NO.134~136)
    { id:134, name: '雪豆丁',
      image:'https://patchwiki.biligame.com/images/rocom/d/d8/2thy3gt4khhs6gza0pb6ke0da94ajq8.png',ename:'SnowBean',     attribute:'ice',eggGroup:['humanoid','monster'],heightMin:0.86,heightMax:1.23,weightMin:9.5,weightMax:12.5,stage:1,region:'-',trait:'-',evolvesTo:[135],evolvesFrom:null,desc:'圆滚滚的雪人宝宝。' },
    { id:135, name: '雪蛮人',
      image:'https://patchwiki.biligame.com/images/rocom/d/d8/2thy3gt4khhs6gza0pb6ke0da94ajq8.png',ename:'SnowBarbarian',attribute:'ice',eggGroup:['humanoid','monster'],heightMin:1.11,heightMax:1.59,weightMin:59.0,weightMax:76.0,stage:2,region:'-',trait:'-',evolvesTo:[136],evolvesFrom:134,desc:'身材魁梧的冰原野人。' },
    { id:136, name: '雪巨人',
      image:'https://patchwiki.biligame.com/images/rocom/d/d8/2thy3gt4khhs6gza0pb6ke0da94ajq8.png',ename:'SnowGiant',    attribute:'ice',eggGroup:['humanoid','monster'],heightMin:1.61,heightMax:2.31,weightMin:156.0,weightMax:187.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:135,desc:'冰原上的巨大雪人之王。' },

    // 呼呼猪 → 獠牙猪 (NO.137~138)
    { id:137, name: '呼呼猪',
      image:'https://patchwiki.biligame.com/images/rocom/e/e8/8vuqx5j838k85ddgjcl56zhh42wtfqa.png',ename:'OinkOinkPig',  attribute:['ice','ground'],eggGroup:['animal'],heightMin:0.52,heightMax:0.75,weightMin:6.8,weightMax:8.9,stage:1,region:'-',trait:'-',evolvesTo:[138],evolvesFrom:null,desc:'呼呼大睡的小猪精灵。' },
    { id:138, name: '獠牙猪',
      image:'https://patchwiki.biligame.com/images/rocom/e/e8/8vuqx5j838k85ddgjcl56zhh42wtfqa.png',ename:'TuskBoar',     attribute:['ice','ground'],eggGroup:['animal'],heightMin:0.77,heightMax:1.1,weightMin:52.8,weightMax:67.4,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:137,desc:'长出锋利獠牙的凶猛野猪。' },

    // 雪娃娃 → 冰封怨灵 → 雪灵 (NO.139~141)
    { id:139, name: '雪娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/2/2f/e14xbg7hrv1sv43e1qqhk145dsjcd3x.png',ename:'SnowDoll',     attribute:'ice',eggGroup:['fairy'],heightMin:0.29,heightMax:0.42,weightMin:6.8,weightMax:8.16,stage:1,region:'-',trait:'-',evolvesTo:[140],evolvesFrom:null,desc:'用雪堆成的娃娃精灵。' },
    { id:140, name: '冰封怨灵',
      image:'https://patchwiki.biligame.com/images/rocom/2/2f/e14xbg7hrv1sv43e1qqhk145dsjcd3x.png',ename:'FrozenVengefulSpirit',attribute:'ice',eggGroup:['fairy'],heightMin:0.96,heightMax:1.37,weightMin:24.5,weightMax:31.6,stage:2,region:'-',trait:'-',evolvesTo:[141],evolvesFrom:139,desc:'被封印在冰中的怨恨灵魂。' },
    { id:141, name: '雪灵',
      image:'https://patchwiki.biligame.com/images/rocom/2/2f/e14xbg7hrv1sv43e1qqhk145dsjcd3x.png',  ename:'SnowSpirit',   attribute:'ice',eggGroup:['fairy'],heightMin:1.09,heightMax:1.56,weightMin:56.4,weightMax:68.4,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:140,desc:'纯净无瑕的冰雪之灵。' },

    // 大耳帽兜系列 (NO.142~144)
    { id:142, name: '大耳帽兜',
      image:'https://patchwiki.biligame.com/images/rocom/9/90/5nj4in6eecm1rhiqat7avfogm5l3cx0.png',ename:'BigEarHoodie', attribute:['ice','cute'],eggGroup:['humanoid','fairy'],heightMin:0.39,heightMax:0.42,weightMin:8.39,weightMax:10.7,stage:1,region:'-',trait:'-',evolvesTo:[143],evolvesFrom:null,desc:'戴大耳朵帽子的可爱精灵。' },
    { id:143, name: '帽兜娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/9/90/5nj4in6eecm1rhiqat7avfogm5l3cx0.png',ename:'HoodDoll',     attribute:['ice','cute'],eggGroup:['humanoid','fairy'],heightMin:0.4,heightMax:0.57,weightMin:19.05,weightMax:26.8,stage:2,region:'-',trait:'-',evolvesTo:[144],evolvesFrom:142,desc:'帽兜进化后的娃娃形态。' },
    { id:144, name: '雪影娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/9/90/5nj4in6eecm1rhiqat7avfogm5l3cx0.png',ename:'SnowShadowDoll',attribute:['ice','cute'],eggGroup:['humanoid','fairy'],heightMin:0.64,heightMax:0.92,weightMin:31.8,weightMax:36.6,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:143,desc:'带有雪影能力的神秘娃娃。' },

    // 权杖系列 (NO.145~146)
    { id:145, name: '权杖-II',ename:'ScepterII',    attribute:'machine',eggGroup:['mech'],heightMin:0.60,heightMax:0.72,weightMin:18,weightMax:25,stage:2,region:'-',trait:'-',evolvesTo:[146],evolvesFrom:null,desc:'权杖型机械精灵第二代。' },
    { id:146, name: '权杖-V',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.146_权杖-%E2%85%A4.webp',ename:'ScepterV',      attribute:'machine',eggGroup:['mech'],heightMin:0.95,heightMax:1.14,weightMin:35,weightMax:48,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:145,desc:'第五代权杖型机械精灵。' },

    // 灵狐系列 (NO.147~149)
    { id:147, name: '灵狐',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/nmkg7ux0y9xb2o2q92ircdz5t11die4.png',  ename:'SpiritFox',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.147_灵狐.webp',     attribute:['fire','ice'],eggGroup:['animal'],heightMin:0.56,heightMax:0.8,weightMin:7.4,weightMax:8.9,stage:1,region:'-',trait:'-',evolvesTo:[148],evolvesFrom:null,desc:'通灵性的狐狸精灵。' },
    { id:148, name: '九尾狐',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/nmkg7ux0y9xb2o2q92ircdz5t11die4.png',ename:'NineTailFox',   attribute:['fire','ice'],eggGroup:['animal'],heightMin:0.77,heightMax:1.11,weightMin:13.08,weightMax:21.05,stage:2,region:'-',trait:'-',evolvesTo:[149],evolvesFrom:147,desc:'拥有九条尾巴的狐仙。' },
    { id:149, name: '尖嘴狐仙',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/nmkg7ux0y9xb2o2q92ircdz5t11die4.png',ename:'SharpFoxFairy',attribute:['fire','ice'],eggGroup:['animal'],heightMin:1.34,heightMax:1.92,weightMin:69.5,weightMax:78.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:148,desc:'修行千年的狐仙。' },

    // 里奥 → 灵羽勇士 → 圣羽翼王 (NO.150~152)
    { id:150, name: '里奥',
      image:'https://patchwiki.biligame.com/images/rocom/6/62/mwlzc3o7mx5a5oo646nljqm8jsuhypa.png',  ename:'Leo',           attribute:'flying',eggGroup:['animal','none'],heightMin:0.35,heightMax:0.45,weightMin:4.8,weightMax:5.9,stage:1,region:'-',trait:'-',evolvesTo:[151],evolvesFrom:null,desc:'光属性的勇敢小狮子。团本/战令宠，不可孵蛋。' },
    { id:151, name: '灵羽勇士',
      image:'https://patchwiki.biligame.com/images/rocom/6/62/mwlzc3o7mx5a5oo646nljqm8jsuhypa.png',ename:'SpiritFeatherWarrior',attribute:'flying',eggGroup:['animal','none'],heightMin:0.55,heightMax:0.65,weightMin:11.5,weightMax:14.2,stage:2,region:'-',trait:'-',evolvesTo:[152],evolvesFrom:150,desc:'披着光之羽翼的勇士。' },
    { id:152, name: '圣羽翼王',
      image:'https://patchwiki.biligame.com/images/rocom/6/62/mwlzc3o7mx5a5oo646nljqm8jsuhypa.png',ename:'HolyFeatherWingKing',attribute:'flying',eggGroup:['none'],heightMin:2.1,heightMax:2.55,weightMin:195.0,weightMax:296.0,stage:3,isBoss:true,region:'-',trait:'-',evolvesTo:null,evolvesFrom:151,desc:'光属性的最强王者之一！团本宠，无法孵蛋。' },

    // 松仔 → 松叶羊 → 针叶巡林 (NO.153~155)
    { id:153, name: '松仔',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/mx2ffpj0hb4meeslt3zqap12rr2empf.png',  ename:'PineKid',       attribute:['grass','fighting'],eggGroup:['animal'],heightMin:0.52,heightMax:0.68,weightMin:6.25,weightMax:7.85,stage:1,region:'-',trait:'-',evolvesTo:[154],evolvesFrom:null,desc:'头上顶着松果的小家伙。' },
    { id:154, name: '松叶羊',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/mx2ffpj0hb4meeslt3zqap12rr2empf.png',ename:'PineLeafSheep', attribute:['grass','fighting'],eggGroup:['animal'],heightMin:1.08,heightMax:1.33,weightMin:19.09,weightMax:28.06,stage:2,region:'-',trait:'-',evolvesTo:[155],evolvesFrom:153,desc:'松针覆盖身体的羊儿。' },
    { id:155, name: '针叶巡林',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/mx2ffpj0hb4meeslt3zqap12rr2empf.png',ename:'NeedlePatrol', attribute:['grass','fighting'],eggGroup:['animal'],heightMin:1.86,heightMax:2.14,weightMin:56.8,weightMax:69.02,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:154,desc:'守护森林的巡林员。' },

    // 小勇狮 → 炽焰狮 → 炽心勇狮 (NO.156~158)
    { id:156, name: '小勇狮',
      image:'https://patchwiki.biligame.com/images/rocom/a/ae/h52qsm9zkr20bazu590ccljhin1f5ci.png',ename:'BraveLionCub',  attribute:['fire','fighting'],eggGroup:['animal','monster'],heightMin:0.67,heightMax:0.81,weightMin:8.5,weightMax:12.05,stage:1,region:'-',trait:'-',evolvesTo:[157],evolvesFrom:null,desc:'勇敢的小狮子幼崽。' },
    { id:157, name: '炽焰狮',
      image:'https://patchwiki.biligame.com/images/rocom/a/ae/h52qsm9zkr20bazu590ccljhin1f5ci.png',ename:'BlazeLion',    attribute:['fire','fighting'],eggGroup:['animal','monster'],heightMin:1.12,heightMax:1.45,weightMin:46.02,weightMax:67.05,stage:2,region:'-',trait:'-',evolvesTo:[158],evolvesFrom:156,desc:'鬃毛燃烧着烈焰的雄狮。' },
    { id:158, name: '炽心勇狮',
      image:'https://patchwiki.biligame.com/images/rocom/a/ae/h52qsm9zkr20bazu590ccljhin1f5ci.png',ename:'BlazeHeartBraveLion',attribute:['fire','fighting'],eggGroup:['animal','monster'],heightMin:1.78,heightMax:1.97,weightMin:94.7,weightMax:118.05,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:157,desc:'心中燃着永不熄灭之火的狮子王。' },

    // 水滴蛇系列 (NO.159~161)
    { id:159, name: '水滴蛇',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/77ajklz8fw3oeg6kncdco7txsg5jtv0.png',ename:'WaterDropSnake',attribute:['water','fighting'],eggGroup:['amphibian','fairy'],heightMin:0.53,heightMax:0.69,weightMin:2.25,weightMax:4.1,stage:1,region:'-',trait:'-',evolvesTo:[160],evolvesFrom:null,desc:'身体如水滴般晶莹的小蛇。' },
    { id:160, name: '水蛇锁',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/77ajklz8fw3oeg6kncdco7txsg5jtv0.png',ename:'WaterSnakeLock',attribute:['water','fighting'],eggGroup:['amphibian','fairy'],heightMin:0.94,heightMax:1.2,weightMin:18.07,weightMax:27.05,stage:2,region:'-',trait:'-',evolvesTo:[161],evolvesFrom:159,desc:'身体盘绕如锁链的蛇类精灵。' },
    { id:161, name: '游蛇魔使',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/77ajklz8fw3oeg6kncdco7txsg5jtv0.png',ename:'SnakeMage',   attribute:['water','fighting'],eggGroup:['amphibian','fairy'],heightMin:2.15,heightMax:3.0,weightMin:71.05,weightMax:86.05,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:160,desc:'精通水魔法的蛇族使者。' },

    { id:162, name: '公平鸽',
      image:'https://patchwiki.biligame.com/images/rocom/1/14/mfnm7m1309w6i464sm5kuagyb6yzxoi.png',ename:'FairDove',     attribute:'normal',eggGroup:['flying'],heightMin:0.45,heightMax:0.6,weightMin:2.5,weightMax:3.94,stage:1,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'象征公平正义的鸽子。' },

    // 小怂猫 → 怒目怂猫 (NO.163~164)
    { id:163, name: '小怂猫',
      image:'https://patchwiki.biligame.com/images/rocom/1/14/5se74tvs12feru1mjsfsvfq8c0mr1gg.png',ename:'TimidCat',     attribute:'fighting',eggGroup:['animal','humanoid'],heightMin:0.59,heightMax:0.84,weightMin:19.6,weightMax:22.5,stage:1,region:'-',trait:'-',forms:['默认样子','山间竹林的样子'],evolvesTo:[164],evolvesFrom:null,desc:'看起来怂怂的但其实很有勇气。' },
    { id:164, name: '怒目怂猫',
      image:'https://patchwiki.biligame.com/images/rocom/1/14/5se74tvs12feru1mjsfsvfq8c0mr1gg.png',ename:'AngryTimidCat',attribute:'fighting',eggGroup:['animal','humanoid'],heightMin:1.3,heightMax:1.65,weightMin:64.5,weightMax:78.5,stage:2,region:'-',trait:'-',forms:['默认样子','山间竹林的样子'],evolvesTo:null,evolvesFrom:163,desc:'怒目圆睁的勇敢怂猫。' },

    // 小狮鹫 → 神圣狮鹫 → 皇家狮鹫 (NO.165~167) - 含地区形态
    { id:165, name: '小狮鹫',ename:'LittleGriffin', attribute:'flying',eggGroup:['flying','animal'],heightMin:0.71,heightMax:1.02,weightMin:11.5,weightMax:17.5,stage:1,region:'-',trait:'-',forms:['崖间地的样子','高山地的样子'],evolvesTo:[166],evolvesFrom:null,desc:'狮身鹰首的神话生物幼崽。' },
    { id:166, name: '神圣狮鹫',ename:'HolyGriffin',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.166_神圣狮鹫（崖间地的样子）.webp',  attribute:'flying',eggGroup:['flying','animal'],heightMin:1.01,heightMax:1.44,weightMin:49.5,weightMax:56.8,stage:2,region:'-',trait:'-',forms:['崖间地的样子','高山地的样子'],evolvesTo:[167],evolvesFrom:165,desc:'散发神圣光芒的狮鹫。' },
    { id:167, name: '皇家狮鹫',ename:'RoyalGriffin',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.167_皇家狮鹫（崖间地的样子）.webp', attribute:'flying',eggGroup:['flying','animal'],heightMin:1.72,heightMax:2.45,weightMin:125.0,weightMax:170.5,stage:3,region:'-',trait:'-',forms:['崖间地的样子','高山地的样子'],evolvesTo:null,evolvesFrom:166,desc:'翱翔天际的王者坐骑。' },

    // 圆眼蜘蛛进化链 (NO.168~170)
    { id:168, name: '圆眼蜘蛛',
      image:'https://patchwiki.biligame.com/images/rocom/5/58/rjtkumy4o5iea035omnat6k7rsy4gpj.png',ename:'RoundEyedSpider',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.168_圆眼蜘蛛.webp',attribute:'bug',eggGroup:['insect'],heightMin:0.48,heightMax:0.68,weightMin:3.5,weightMax:5.0,stage:1,region:'-',trait:'-',evolvesTo:[169],evolvesFrom:null,desc:'有着圆圆大眼睛的小蜘蛛。' },
    { id:169, name: '尖角蜘蛛',
      image:'https://patchwiki.biligame.com/images/rocom/5/58/rjtkumy4o5iea035omnat6k7rsy4gpj.png',ename:'HornedSpider',  attribute:['bug','poison'],eggGroup:['insect'],heightMin:0.68,heightMax:0.98,weightMin:7.75,weightMax:9.6,stage:2,region:'-',trait:'-',evolvesTo:[170],evolvesFrom:168,desc:'头上长出尖角。' },
    { id:170, name: '芋香巨角蛛',
      image:'https://patchwiki.biligame.com/images/rocom/5/58/rjtkumy4o5iea035omnat6k7rsy4gpj.png',ename:'TaroHornedSpider',attribute:['bug','poison'],eggGroup:['insect'],heightMin:0.9,heightMax:1.29,weightMin:31.75,weightMax:43.6,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:169,desc:'散发芋头香味的大型蜘蛛。' },

    // 波波螺系列 (NO.171~173)
    { id:171, name: '波波螺',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/n1wjd2lnqi3s5qqgpetirog1lcu6y3o.png',ename:'WaveSnail',    attribute:['ground','water'],eggGroup:['amphibian','mineral'],heightMin:0.32,heightMax:0.42,weightMin:4.85,weightMax:5.65,stage:1,region:'-',trait:'-',forms:['被污染的样子'],evolvesTo:[172],evolvesFrom:null,desc:'随波浪起伏的小螺蛳。' },
    { id:172, name: '消波螺',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/n1wjd2lnqi3s5qqgpetirog1lcu6y3o.png',ename:'WaveCancellingSnail',attribute:['ground','water'],eggGroup:['amphibian','mineral'],heightMin:0.68,heightMax:0.82,weightMin:46.5,weightMax:69.9,stage:2,region:'-',trait:'-',forms:['被污染的样子'],evolvesTo:[173],evolvesFrom:171,desc:'能消除波浪力量的螺类。' },
    { id:173, name: '嗜波螺',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/n1wjd2lnqi3s5qqgpetirog1lcu6y3o.png',ename:'WaveDevourerSnail',attribute:['ground','water'],eggGroup:['amphibian','mineral'],heightMin:1.2,heightMax:1.6,weightMin:86.8,weightMax:113.0,stage:3,region:'-',trait:'-',forms:['被污染的样子'],evolvesTo:null,evolvesFrom:172,desc:'嗜吞噬波浪的巨型螺类。' },

    // 菇菇丁系列 (NO.174~176)
    { id:174, name: '菇菇丁',
      image:'https://patchwiki.biligame.com/images/rocom/d/df/t98utjcp899ymqdm8bvpapuoajiri1k.png',ename:'MushroomBaby',  attribute:['ground','grass'],eggGroup:['plant'],heightMin:0.25,heightMax:0.35,weightMin:1.1,weightMax:2.76,stage:1,region:'-',trait:'-',evolvesTo:[175],evolvesFrom:null,desc:'最小的蘑菇精灵。' },
    { id:175, name: '多菇丁',
      image:'https://patchwiki.biligame.com/images/rocom/d/df/t98utjcp899ymqdm8bvpapuoajiri1k.png',ename:'MultiMushroom',attribute:['ground','grass'],eggGroup:['plant'],heightMin:0.6,heightMax:0.7,weightMin:5.4,weightMax:6.8,stage:2,region:'-',trait:'-',evolvesTo:[176],evolvesFrom:174,desc:'身上长满多个蘑菇头。' },
    { id:176, name: '九幽菇',
      image:'https://patchwiki.biligame.com/images/rocom/d/df/t98utjcp899ymqdm8bvpapuoajiri1k.png',ename:'NineDarkMushroom',attribute:['ground','grass'],eggGroup:['plant'],heightMin:1.55,heightMax:1.65,weightMin:42.0,weightMax:58.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:175,desc:'来自九幽深处的神秘蘑菇。' },

    // 斑斑 → 斑枭 (NO.177~178)
    { id:177, name: '斑斑',
      image:'https://patchwiki.biligame.com/images/rocom/a/a7/9yzfpa9tuduznirix7p82i40nqlkfep.png',  ename:'SpotSpot',     attribute:'flying',eggGroup:['flying'],heightMin:0.47,heightMax:0.6,weightMin:4.79,weightMax:6.17,stage:1,region:'-',trait:'-',evolvesTo:[178],evolvesFrom:null,desc:'身上有斑点的小猫头鹰。' },
    { id:178, name: '斑枭',
      image:'https://patchwiki.biligame.com/images/rocom/a/a7/9yzfpa9tuduznirix7p82i40nqlkfep.png',  ename:'SpottedOwl',   attribute:'flying',eggGroup:['flying'],heightMin:0.68,heightMax:0.81,weightMin:15.9,weightMax:23.8,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:177,desc:'斑点猫头鹰的成熟形态。' },

    // 草头鸭 → 卷毛鸭 (NO.179~180)
    { id:179, name: '草头鸭',
      image:'https://patchwiki.biligame.com/images/rocom/e/e3/23v62tjddaret7a0jlqww40noorvmir.png',ename:'GrassHeadDuck', attribute:'grass',eggGroup:['flying','amphibian'],heightMin:0.5,heightMax:0.72,weightMin:4.9,weightMax:6.57,stage:1,region:'-',trait:'-',evolvesTo:[180],evolvesFrom:null,desc:'头上长着草叶的小鸭子。' },
    { id:180, name: '卷毛鸭',
      image:'https://patchwiki.biligame.com/images/rocom/e/e3/23v62tjddaret7a0jlqww40noorvmir.png',ename:'CurlyDuck',     attribute:['grass','fighting'],eggGroup:['flying','amphibian'],heightMin:0.9,heightMax:1.29,weightMin:35.8,weightMax:48.06,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:179,desc:'卷毛的水系鸭子。' },

    // 海豹系列 (NO.181~182)
    { id:181, name: '海豹战士',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/n6mz568m7fofwz1w3lkc5qk6bsxfy9s.png',ename:'SealWarrior',  attribute:['fighting','water'],eggGroup:['flying','amphibian'],heightMin:0.64,heightMax:0.92,weightMin:69.5,weightMax:87.6,stage:2,region:'-',trait:'-',evolvesTo:[182],evolvesFrom:null,desc:'英勇的海豹战士。' },
    { id:182, name: '海豹船长',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/n6mz568m7fofwz1w3lkc5qk6bsxfy9s.png',ename:'SealCaptain',  attribute:['fighting','water'],eggGroup:['flying','amphibian'],heightMin:1.26,heightMax:1.8,weightMin:145.0,weightMax:165.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:181,desc:'率领海豹船队的船长。' },

    // 号儿鱼 → 圆号鱼 (NO.183~184)
    { id:183, name: '号儿鱼',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/b8v1gy6rvsqs6g02hko4oa7bj0z04gk.png',ename:'TrumpetFish',   attribute:'water',eggGroup:['ocean'],heightMin:0.31,heightMax:0.42,weightMin:3.9,weightMax:5.25,stage:1,region:'-',trait:'-',evolvesTo:[184],evolvesFrom:null,desc:'体型像号角的鱼类。' },
    { id:184, name: '圆号鱼',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/b8v1gy6rvsqs6g02hko4oa7bj0z04gk.png',ename:'RoundTrumpetFish',attribute:'water',eggGroup:['ocean'],heightMin:0.79,heightMax:0.98,weightMin:10.9,weightMax:15.8,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:183,desc:'号儿鱼的圆润进化形态。' },

    // 甜田螺 → 壳乙螺 (NO.185~186)
    { id:185, name: '甜田螺',
      image:'https://patchwiki.biligame.com/images/rocom/5/55/bck3l95dm5ub49vdc3ung79bh0edirl.png',ename:'SweetSnail',    attribute:['water','cute'],eggGroup:['soft','fairy'],heightMin:0.41,heightMax:0.58,weightMin:7.5,weightMax:9.4,stage:1,region:'-',trait:'-',evolvesTo:[186],evolvesFrom:null,desc:'甜甜的田螺精灵。' },
    { id:186, name: '壳乙螺',
      image:'https://patchwiki.biligame.com/images/rocom/5/55/bck3l95dm5ub49vdc3ung79bh0edirl.png',ename:'KeYiLuo',        attribute:['water','cute'],eggGroup:['soft','fairy'],heightMin:0.68,heightMax:0.97,weightMin:11.05,weightMax:19.04,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:185,desc:'硬壳包裹的甜螺进化。' },

    { id:187, name: '卡洛儿',
      image:'https://patchwiki.biligame.com/images/rocom/5/55/bck3l95dm5ub49vdc3ung79bh0edirl.png',ename:'Carlo',         attribute:['water','cute'],eggGroup:['soft','fairy'],heightMin:0.7,heightMax:1.0,weightMin:21.4,weightMax:25.6,stage:1,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'可爱的卡洛儿精灵。' },

    // 棋棋系列 - 多职业分支 (NO.188~192)
    { id:188, name: '棋棋',  ename: 'ChessPiece',   attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:0.35,heightMax:0.47,weightMin:10.7,weightMax:14.5, stage: 1, region: '-', trait: '-', forms: ['白子', '黑子'], evolvesTo: [189], evolvesFrom: null, desc: '像棋子一样的可爱精灵，分黑白两种形态。' },
    { id:189, name: '棋骑士',ename: 'ChessKnight',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.189_棋骑士（白子）.webp',  attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:0.98,heightMax:1.35,weightMin:43.06,weightMax:60.09, stage: 2, region: '-', trait: '-', forms: ['白子', '黑子'], evolvesTo: [190,191,192], evolvesFrom: 188, desc: '骑士棋子的进化，可向多个职业发展。' },
    { id:190, name: '棋齐垒',ename: 'ChessFortress',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.190_棋齐垒（白子）.webp', attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:1.45,heightMax:1.71,weightMin:58.01,weightMax:70.05, stage: 3, region: '-', trait: '-', forms: ['白子', '黑子'], evolvesTo: null, evolvesFrom: 189, desc: '堡垒型的棋子战士。' },
    { id:191, name: '棋祈督',ename: 'ChessBishop',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.191_棋祈督（白子）.webp',  attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:0.98,heightMax:1.35,weightMin:38.07,weightMax:47.05, stage: 3, region: '-', trait: '-', forms: ['白子', '黑子'], evolvesTo: null, evolvesFrom: 189, desc: '主教型的棋子法师。' },
    { id:192, name: '棋绮后',ename: 'ChessQueen',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.192_棋绮后（白子）.webp',   attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:1.66,heightMax:1.81,weightMin:30.01,weightMax:41.02, stage: 3, region: '-', trait: '-', forms: ['白子', '黑子'], evolvesTo: null, evolvesFrom: 189, desc: '女王型的最强棋子精灵。' },

    // 奔波鼠 → 流浪鼠 (NO.193~194)
    { id:193, name: '奔波鼠',
      image:'https://patchwiki.biligame.com/images/rocom/d/d0/qc6wa2f2bpo8uv28uf5hmgw5lmy3evv.png',ename: 'RunningMouse',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.193_奔波鼠.webp',  attribute: 'ground',eggGroup: ['animal'], heightMin:0.46,heightMax:0.6,weightMin:3.71,weightMax:6.4, stage: 1, region: '-', trait: '-', evolvesTo: [194], evolvesFrom: null, desc: '四处奔波的小老鼠。' },
    { id:194, name: '流浪鼠',
      image:'https://patchwiki.biligame.com/images/rocom/d/d0/qc6wa2f2bpo8uv28uf5hmgw5lmy3evv.png',ename: 'WanderMouse',  attribute: 'ground',eggGroup: ['animal'], heightMin:0.88,heightMax:1.23,weightMin:59.6,weightMax:74.3, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 193, desc: '流浪天涯的鼠族精灵。' },

    // 呆小路 → 舞动路路 → 白发路路 (NO.195~197)
    { id:195, name: '呆小路',
      image:'https://patchwiki.biligame.com/images/rocom/b/be/4zu0yqt23bt4cva2bswky1q5ivje1tw.png',ename: 'DullLuLu',     attribute: ['grass','cute'],eggGroup: ['animal','humanoid'], heightMin:0.58,heightMax:0.83,weightMin:4.5,weightMax:5.8, stage: 1, region: '-', trait: '-', evolvesTo: [196], evolvesFrom: null, desc: '呆萌的小鹿精灵。' },
    { id:196, name: '舞动路路',
      image:'https://patchwiki.biligame.com/images/rocom/b/be/4zu0yqt23bt4cva2bswky1q5ivje1tw.png',ename: 'DanceLuLu',    attribute: ['grass','cute'],eggGroup: ['animal','humanoid'], heightMin:0.69,heightMax:0.99,weightMin:7.4,weightMax:9.1, stage: 2, region: '-', trait: '-', evolvesTo: [197], evolvesFrom: 195, desc: '喜欢跳舞的路路。' },
    { id:197, name: '白发路路',
      image:'https://patchwiki.biligame.com/images/rocom/b/be/4zu0yqt23bt4cva2bswky1q5ivje1tw.png',ename: 'WhiteHairLuLu',attribute: ['grass','cute'],eggGroup: ['animal','humanoid'], heightMin:0.89,heightMax:1.27,weightMin:15.5,weightMax:21.6, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 196, desc: '白发苍苍的路路长者。' },

    // 逗逗 → 气球猫 → 梦想三三 (NO.198~200)
    { id:198, name: '逗逗',
      image:'https://patchwiki.biligame.com/images/rocom/2/27/5mkpc1wb4947ua7m9efws2u0sdgfgvq.png',  ename: 'DouDou',       attribute: 'cute',eggGroup: ['monster','fairy'], heightMin:0.3,heightMax:0.4,weightMin:0.45,weightMax:1.53, stage: 1, region: '-', trait: '-', evolvesTo: [199], evolvesFrom: null, desc: '爱逗人开心的精灵。' },
    { id:199, name: '气球猫',
      image:'https://patchwiki.biligame.com/images/rocom/2/27/5mkpc1wb4947ua7m9efws2u0sdgfgvq.png',ename: 'BalloonCat',   attribute: 'cute',eggGroup: ['animal','fairy'], heightMin:0.41,heightMax:0.59,weightMin:0.95,weightMax:2.15, stage: 2, region: '-', trait: '-', evolvesTo: [200], evolvesFrom: 198, desc: '像气球一样飘浮的猫咪。' },
    { id:200, name: '梦想三三',
      image:'https://patchwiki.biligame.com/images/rocom/2/27/5mkpc1wb4947ua7m9efws2u0sdgfgvq.png',ename: 'DreamThreeThree',attribute:'cute',eggGroup:['monster','fairy'],heightMin:1.18,heightMax:1.45,weightMin:12.04,weightMax:19.04,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:199,desc:'追逐梦想的三三精灵。' },

    // 花怨鳗 → 鳗尾兽 (NO.201~202)
    { id:201, name: '花怨鳗',
      image:'https://patchwiki.biligame.com/images/rocom/0/02/167gulpq7gmilrurzc4r0yattm4ai8z.png',ename: 'FlowerResentEel',attribute:['ground','grass'],eggGroup: ['ocean','amphibian'], heightMin:0.58,heightMax:0.68,weightMin:2.9,weightMax:4.0, stage: 1, region: '-', trait: '-', evolvesTo: [202], evolvesFrom: null, desc: '带着花之怨念的鳗鱼。' },
    { id:202, name: '鳗尾兽',
      image:'https://patchwiki.biligame.com/images/rocom/0/02/167gulpq7gmilrurzc4r0yattm4ai8z.png',ename: 'EtailMonster',  attribute: ['ground','grass'],eggGroup: ['ocean','amphibian'], heightMin:0.79,heightMax:0.92,weightMin:19.8,weightMax:36.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 201, desc: '鳗鱼尾巴的兽型进化。' },

    // 伊雷龙 → 伊兰龙 (NO.203~204)
    { id:203, name: '伊雷龙',
      image:'https://patchwiki.biligame.com/images/rocom/6/66/iq3mle7m6g6cwmo5u0xh5afcf6fzsmd.png',ename: 'YiLeiDragon',  attribute: 'dragon',eggGroup: ['dragon'], heightMin:0.72,heightMax:0.94,weightMin:27.2,weightMax:34.0, stage: 1, region: '-', trait: '-', evolvesTo: [204], evolvesFrom: null, desc: '蕴含雷电之力的幼龙。' },
    { id:204, name: '伊兰龙',ename: 'YiLanDragon',   attribute: 'dragon',eggGroup: ['dragon','fairy'], heightMin:5.5,heightMax:7.0,weightMin:228.0,weightMax:342.0, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 203, desc: '伊雷龙的成年龙形态。' },

    // 拉特 → 酷拉 (NO.205~206)
    { id:205, name: '拉特',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/4pqv1u751dss8ff0u87y747ot29b4m9.png',  ename: 'Rate',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.205_拉特.webp',          attribute: 'electric',eggGroup: ['fairy'], heightMin:0.49,heightMax:0.61,weightMin:7.7,weightMax:8.6, stage: 1, region: '-', trait: '-', evolvesTo: [206], evolvesFrom: null, desc: '冷酷帅气的冰系精灵。' },
    { id:206, name: '酷拉',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/4pqv1u751dss8ff0u87y747ot29b4m9.png',  ename: 'Coola',         attribute: 'electric',eggGroup: ['fairy'], heightMin:0.99,heightMax:1.24,weightMin:19.5,weightMax:23.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 205, desc: '酷拉进化后的更强形态。' },

    // 闪电环系列 (NO.207~209)
    { id:207, name: '闪电环',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/o9no3jygnit09u4bsn3o7ezrji62524.png',ename: 'LightningRing', attribute: 'electric',eggGroup: ['magic'], heightMin:0.37,heightMax:0.46,weightMin:2.4,weightMax:3.1, stage: 1, region: '-', trait: '-', evolvesTo: [208], evolvesFrom: null, desc: '释放闪电的环状精灵。' },
    { id:208, name: '刺电环',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/o9no3jygnit09u4bsn3o7ezrji62524.png',ename: 'SpikeElectricRing',attribute:'electric',eggGroup:['magic'],heightMin:0.58,heightMax:0.73,weightMin:10.16,weightMax:16.74,stage:2,region:'-',trait:'-',evolvesTo:[209],evolvesFrom:207,desc:'带尖刺的电环。' },
    { id:209, name: '荆棘电环',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/o9no3jygnit09u4bsn3o7ezrji62524.png',ename: 'ThornElectricRing',attribute:'electric',eggGroup:['magic'],heightMin:0.78,heightMax:0.98,weightMin:29.5,weightMax:34.3,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:208,desc:'荆棘缠绕的电环终极形态。' },

    // 小箱怪 → 迷迷箱怪 (NO.210~211)
    { id:210, name: '小箱怪',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/ocy3pzt2cn0mmx85cm8is2ulwy8s2ii.png',ename: 'LittleBoxMonster',attribute:['machine','illusion'],eggGroup:['fairy'],heightMin:0.34,heightMax:0.46,weightMin:4.45,weightMax:6.81,stage:1,region:'-',trait:'-',evolvesTo:[211],evolvesFrom:null,desc:'像小箱子一样的怪物。' },
    { id:211, name: '迷迷箱怪',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/ocy3pzt2cn0mmx85cm8is2ulwy8s2ii.png',ename: 'MysteryBoxMonster',attribute:['machine','illusion'],eggGroup:['fairy'],heightMin:0.64,heightMax:0.72,weightMin:18.02,weightMax:24.4,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:210,desc:'迷雾缭绕的箱怪。' },

    // 古钟蛇 → 寒音蛇 (NO.212~213)
    { id:212, name: '古钟蛇',ename: 'AncientBellSnake',attribute:['cute','poison'],eggGroup:['amphibian','animal'],heightMin:0.95,heightMax:1.1,weightMin:6.9,weightMax:7.8,stage:2,region:'-',trait:'-',forms:['本来的样子','本命年的样子'],evolvesTo:[213],evolvesFrom:null,desc:'背负古钟的蛇类精灵。' },
    { id:213, name: '寒音蛇',ename: 'ColdSoundSnake',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.213_寒音蛇（本来的样子）.webp',attribute:['cute','poison'],eggGroup:['amphibian','animal'],heightMin:1.85,heightMax:2.0,weightMin:65.0,weightMax:78.0,stage:3,region:'-',trait:'-',forms:['本来的样子','本命年的样子'],evolvesTo:null,evolvesFrom:212,desc:'发出寒音的蛇类终极形态。' },

    // 矮脚爬爬 (NO.214)
    { id:214, name: '矮脚爬爬',
      image:'https://patchwiki.biligame.com/images/rocom/4/4f/40765c203k2jjtugv9tbciczhr4jmxv.png',ename: 'ShortLegCrawl',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.214_矮脚爬爬.webp', attribute: 'bug',eggGroup: ['insect'], heightMin:0.28,heightMax:0.44,weightMin:3.3,weightMax:4.2, stage: 1, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '腿特别短的虫族精灵。' },

    // 恶魔红钻 → 火尾瓦特 → 火尾战士 → 烈火守护 (NO.215~218)
    { id:215, name: '恶魔红钻',
      image:'https://patchwiki.biligame.com/images/rocom/4/4f/40765c203k2jjtugv9tbciczhr4jmxv.png',ename: 'DevilRedDiamond',attribute:['bug','dark'],eggGroup:['monster'],heightMin:1.32,heightMax:1.55,weightMin:42.5,weightMax:62.0,stage:1,region:'-',trait:'-',evolvesTo:[216],evolvesFrom:null,desc:'红色钻晶恶魔精灵。' },
    { id:216, name: '火尾瓦特',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/9mmja7l04ln5fe2fn5dhql2nrh0tq4f.png',ename: 'FireTailWatt',  attribute:'fire',eggGroup:['monster'],heightMin:0.64,heightMax:0.92,weightMin:18.5,weightMax:21.2,stage:2,region:'-',trait:'-',evolvesTo:[217],evolvesFrom:215,desc:'尾部燃烧火焰的瓦特精灵。' },
    { id:217, name: '火尾战士',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/9mmja7l04ln5fe2fn5dhql2nrh0tq4f.png',ename: 'FireTailWarrior',attribute:'fire',eggGroup:['monster'],heightMin:0.76,heightMax:1.09,weightMin:48.5,weightMax:58.6,stage:3,region:'-',trait:'-',evolvesTo:[218],evolvesFrom:216,desc:'火焰之尾的战士形态。' },
    { id:218, name: '烈火守护',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/9mmja7l04ln5fe2fn5dhql2nrh0tq4f.png',ename: 'BlazingGuardian',attribute:'fire',eggGroup:['monster'],heightMin:0.99,heightMax:1.42,weightMin:76.5,weightMax:87.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:217,desc:'守护烈火的最终形态。' },

    // 里拉鳐 → 海枝枝 (NO.219~220)
    { id:219, name: '里拉鳐',
      image:'https://patchwiki.biligame.com/images/rocom/8/80/13gxjtrh4mt3mhyoc1is69gz7vfm3tv.png',ename: 'RilaRay',      attribute: 'water',eggGroup: ['ocean','fairy'], heightMin:0.94,heightMax:1.1,weightMin:38.6,weightMax:49.5, stage: 1, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '像鳐鱼一样的海洋精灵。' },
    { id:220, name: '海枝枝',ename: 'SeaBranchBranch',attribute:['water','ghost'],eggGroup: ['ocean','plant'], heightMin:0.75,heightMax:0.85,weightMin:3.51,weightMax:6.82, stage: 1, region: '-', trait: '-', forms: ['碧蓝珊瑚','杏黄百合','洋红沙丁','翠绿纶布'], evolvesTo: null, evolvesFrom: null, desc: '海中珊瑚枝状的精灵，有4种颜色形态！' },

    // 多西 → 库多西 → 波多西 (NO.221~223)
    { id:221, name: '多西',
      image:'https://patchwiki.biligame.com/images/rocom/9/94/hsqyxfmg0p0gz8s36uzb1b7ldd6etb1.png',  ename: 'Doxie',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.221_多西.webp',         attribute: ['machine','ground'],eggGroup: ['monster','mech'], heightMin:0.65,heightMax:0.94,weightMin:5.7,weightMax:7.1, stage: 1, region: '-', trait: '-', evolvesTo: [222], evolvesFrom: null, desc: '方块脑袋的多西精灵。' },
    { id:222, name: '库多西',
      image:'https://patchwiki.biligame.com/images/rocom/9/94/hsqyxfmg0p0gz8s36uzb1b7ldd6etb1.png',ename: 'KuDoxie',       attribute: 'ground',eggGroup: ['monster','mech'], heightMin:0.99,heightMax:1.42,weightMin:115.8,weightMax:175.02, stage: 2, region: '-', trait: '-', evolvesTo: [223], evolvesFrom: 221, desc: '库库的多西进化。' },
    { id:223, name: '波多西',
      image:'https://patchwiki.biligame.com/images/rocom/9/94/hsqyxfmg0p0gz8s36uzb1b7ldd6etb1.png',ename: 'BoDoxie',       attribute: ['machine','ground'],eggGroup: ['monster'], heightMin:1.43,heightMax:2.05,weightMin:265.0,weightMax:295.0, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 222, desc: '波波的多西最终形态！赛季限定精灵。' },

    // 小翼龙 → 翼龙 (NO.224~225)
    { id:224, name: '小翼龙',
      image:'https://patchwiki.biligame.com/images/rocom/1/18/4gm8dv39vje80wb9f9ri66pmdmb5zzw.png',ename: 'LittlePterosaur',attribute:['dragon','flying'],eggGroup: ['flying','dragon'], heightMin:0.61,heightMax:0.87,weightMin:25.1,weightMax:36.5, stage: 1, region: '-', trait: '-', evolvesTo: [225], evolvesFrom: null, desc: '渴望飞翔的幼年翼龙。' },
    { id:225, name: '翼龙',
      image:'https://patchwiki.biligame.com/images/rocom/1/18/4gm8dv39vje80wb9f9ri66pmdmb5zzw.png',  ename: 'Pterosaur',     attribute: ['dragon','flying'],eggGroup: ['flying','dragon'], heightMin:1.79,heightMax:1.99,weightMin:240.0,weightMax:265.0, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 224, desc: '翱翔天际的成年翼龙。' },

    // 电动长颈鹿 → 奔乐鹿 → 爵士鹿 (NO.226~228)
    { id:226, name: '电动长颈鹿',
      image:'https://patchwiki.biligame.com/images/rocom/9/95/hf6exuai3em02ggnvi6068tatwsg1co.png',ename: 'ElectricGiraffe',attribute:'electric',eggGroup: ['animal'], heightMin:0.7,heightMax:1.0,weightMin:29.8,weightMax:36.8, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '脖子带电的长颈鹿！' },
    { id:227, name: '奔乐鹿',
      image:'https://patchwiki.biligame.com/images/rocom/9/95/hf6exuai3em02ggnvi6068tatwsg1co.png',ename: 'HappyDeer',     attribute: 'electric',eggGroup: ['animal'], heightMin:0.85,heightMax:1.22,weightMin:68.0,weightMax:77.5, stage: 2, region: '-', trait: '-', evolvesTo: [228], evolvesFrom: null, desc: '快乐奔跑的小鹿。' },
    { id:228, name: '爵士鹿',
      image:'https://patchwiki.biligame.com/images/rocom/9/95/hf6exuai3em02ggnvi6068tatwsg1co.png',ename: 'JazzDeer',      attribute: 'electric',eggGroup: ['animal'], heightMin:1.38,heightMax:1.98,weightMin:135.0,weightMax:185.06, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 227, desc: '爵士范儿十足的鹿。' },

    // 缇塔 → 声波缇塔 (NO.229~230)
    { id:229, name: '缇塔',
      image:'https://patchwiki.biligame.com/images/rocom/3/3a/lhlbu3zg39lvfpso57ww4iks9u2snxm.png',  ename: 'Tiita',         attribute: 'machine',eggGroup: ['mech'], heightMin:0.65,heightMax:0.75,weightMin:38.2,weightMax:45.2, stage: 1, region: '-', trait: '-', evolvesTo: [230], evolvesFrom: null, desc: '机械构造的缇塔精灵。' },
    { id:230, name: '声波缇塔',
      image:'https://patchwiki.biligame.com/images/rocom/3/3a/lhlbu3zg39lvfpso57ww4iks9u2snxm.png',ename: 'SoundwaveTiita',attribute:'machine',eggGroup: ['mech'], heightMin:1.05,heightMax:1.2,weightMin:71.5,weightMax:78.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 229, desc: '能操控声波的机械缇塔。' },

    // 小鹬 → 鄙目鹬 → 高脚鹬 (NO.231~233)
    { id:231, name: '小鹬',
      image:'https://patchwiki.biligame.com/images/rocom/6/63/f0h0ppr6wbkwlg961g5mnqenog6ai1j.png',  ename: 'LittleSandpiper',attribute:'flying',eggGroup: ['flying'], heightMin:0.25,heightMax:0.36,weightMin:1.4,weightMax:2.2, stage: 1, region: '-', trait: '-', evolvesTo: [232], evolvesFrom: null, desc: '小巧的鹬鸟。' },
    { id:232, name: '鄙目鹬',
      image:'https://patchwiki.biligame.com/images/rocom/6/63/f0h0ppr6wbkwlg961g5mnqenog6ai1j.png',ename: 'DespiseEyeSandpiper',attribute:'flying',eggGroup:['flying'],heightMin:0.67,heightMax:0.96,weightMin:6.75,weightMax:8.9,stage:2,region:'-',trait:'-',evolvesTo:[233],evolvesFrom:231,desc:'眼神犀利的鹬鸟。' },
    { id:233, name: '高脚鹬',
      image:'https://patchwiki.biligame.com/images/rocom/6/63/f0h0ppr6wbkwlg961g5mnqenog6ai1j.png',ename: 'HighLegSandpiper',attribute:'flying',eggGroup:['flying'],heightMin:0.81,heightMax:1.16,weightMin:18.0,weightMax:24.91,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:232,desc:'腿特别长的鹬鸟。' },

    // 甜筒系列 - 多口味 (NO.234~236)
    { id:234, name: '脆筒甜甜',
      image:'https://patchwiki.biligame.com/images/rocom/9/99/hkgrj5vqlslmwxcq1hw8rkaoijy2wc9.png',ename: 'CrispyTubeSweet', attribute:'ice',eggGroup: ['fairy'], heightMin:0.3,heightMax:0.4,weightMin:1.8,weightMax:3.8, stage: 1, region: '-', trait: '-', evolvesTo: [235], evolvesFrom: null, desc: '脆筒冰淇淋造型的甜点精灵。' },
    { id:235, name: '香草甜甜',
      image:'https://patchwiki.biligame.com/images/rocom/9/99/hkgrj5vqlslmwxcq1hw8rkaoijy2wc9.png',ename: 'VanillaSweet',   attribute:'ice',eggGroup: ['fairy'], heightMin:0.4,heightMax:0.6,weightMin:5.15,weightMax:7.8, stage: 2, region: '-', trait: '-', forms: ['杨桃饰品','蓝莓饰品'], evolvesTo: [236], evolvesFrom: 234, desc: '香草味的甜甜精灵。' },
    { id:236, name: '圣代甜甜',
      image:'https://patchwiki.biligame.com/images/rocom/9/99/hkgrj5vqlslmwxcq1hw8rkaoijy2wc9.png',ename: 'SundaeSweet',   attribute:'ice',eggGroup: ['fairy'], heightMin:0.7,heightMax:1.0,weightMin:16.5,weightMax:22.75, stage: 3, region: '-', trait: '-', forms: ['樱桃草莓','樱桃抹茶','蓝莓巧克力','蓝莓草莓','蓝莓抹茶','杨桃巧克力','杨桃草莓','杨桃抹茶'], evolvesTo: null, evolvesFrom: 235, desc: '圣代造型！多达8种口味形态！' },

    // 刺轮砣 → 月亮砣 (NO.237~238)
    { id:237, name: '刺轮砣',ename: 'ThornWheelDisc', attribute:['poison','cute'],eggGroup: [], heightMin:0.18,heightMax:0.31,weightMin:2.7,weightMax:4.0, stage: 2, region: '-', trait: '-', forms: ['上弦的样子','下弦的样子'], evolvesTo: [238], evolvesFrom: null, desc: '刺轮形的暗黑砣器。' },
    { id:238, name: '月亮砣',ename: 'MoonDisc',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.238_月亮砣（上弦的样子）.webp',      attribute:['poison','cute'],eggGroup: [], heightMin:1.85,heightMax:2.1,weightMin:137.5,weightMax:182.4, stage: 3, region: '-', trait: '-', forms: ['上弦的样子','下弦的样子'], evolvesTo: null, evolvesFrom: 237, desc: '月亮形状的神秘砣器。' },

    // 豆丁鱼 → 快鳍鱼 → 龙鱼 (NO.239~241)
    { id:239, name: '豆丁鱼',
      image:'https://patchwiki.biligame.com/images/rocom/8/84/l03hb24992kdwomhy0qfjjynend0qdc.png',ename: 'BeanFish',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.239_豆丁鱼.webp',      attribute: ['water','dragon'],eggGroup: ['ocean','dragon'], heightMin:0.31,heightMax:0.44,weightMin:1.2,weightMax:3.4, stage: 1, region: '-', trait: '-', evolvesTo: [240], evolvesFrom: null, desc: '豆粒大小的小鱼。' },
    { id:240, name: '快鳍鱼',
      image:'https://patchwiki.biligame.com/images/rocom/8/84/l03hb24992kdwomhy0qfjjynend0qdc.png',ename: 'FastFinFish',   attribute: ['water','dragon'],eggGroup: ['ocean'], heightMin:0.27,heightMax:0.39,weightMin:14.5,weightMax:16.8, stage: 2, region: '-', trait: '-', evolvesTo: [241], evolvesFrom: 239, desc: '鳍划水极快的鱼类。' },
    { id:241, name: '龙鱼',
      image:'https://patchwiki.biligame.com/images/rocom/8/84/l03hb24992kdwomhy0qfjjynend0qdc.png',  ename: 'DragonFish',    attribute: ['water','dragon'],eggGroup: ['ocean','dragon'], heightMin:0.69,heightMax:0.99,weightMin:39.5,weightMax:44.5, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 240, desc: '龙形的珍稀鱼类！' },

    // 胆小鳗鱼 → 闪电鳗鱼 (NO.242~243)
    { id:242, name: '胆小鳗鱼',
      image:'https://patchwiki.biligame.com/images/rocom/6/65/sexctmvdy5pnj2fgqdue7sovqn9cw4z.png',ename: 'TimidEel',     attribute: ['electric','water'],eggGroup: ['ocean'], heightMin:0.74,heightMax:1.07,weightMin:17.5,weightMax:26.85, stage: 1, region: '-', trait: '-', evolvesTo: [243], evolvesFrom: null, desc: '胆小怕事的鳗鱼。' },
    { id:243, name: '闪电鳗鱼',
      image:'https://patchwiki.biligame.com/images/rocom/6/65/sexctmvdy5pnj2fgqdue7sovqn9cw4z.png',ename: 'LightningEel',  attribute: ['electric','water'],eggGroup:['ocean'], heightMin:0.83,heightMax:1.19,weightMin:68.9,weightMax:76.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 242, desc: '释放闪电的鳗鱼。' },

    // 水母系列 (NO.244~245)
    { id:244, name: '翡翠水母',
      image:'https://patchwiki.biligame.com/images/rocom/f/f3/qtg8mg0mxy7370rpc9eohcwcgsw0k05.png',ename: 'EmeraldJellyfish',attribute:['water','poison'],eggGroup: ['ocean','soft'], heightMin:0.49,heightMax:0.7,weightMin:31.5,weightMax:36.8, stage: 2, region: '-', trait: '-', evolvesTo: [245], evolvesFrom: null, desc: '翡翠色的透明水母。' },
    { id:245, name: '琉璃水母',
      image:'https://patchwiki.biligame.com/images/rocom/f/f3/qtg8mg0mxy7370rpc9eohcwcgsw0k05.png',ename: 'GlazeJellyfish', attribute:['water','poison'],eggGroup: ['ocean','soft'], heightMin:0.9,heightMax:1.28,weightMin:48.0,weightMax:53.0, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 244, desc: '琉璃光泽的美丽水母。' },

    // 裘洛系列 (NO.246~248)
    { id:246, name: '裘洛',
      image:'https://patchwiki.biligame.com/images/rocom/9/9c/ai2ivunxg0fjwnzy552j6bsq1nh5qr4.png',  ename: 'Qiuluo',        attribute: 'poison',eggGroup: ['animal','fairy','mech'], heightMin:0.7,heightMax:1.0,weightMin:7.5,weightMax:12.5, stage: 1, region: '-', trait: '-', evolvesTo: [247], evolvesFrom: null, desc: '半机械半动物的裘洛精灵。' },
    { id:247, name: '裘力',
      image:'https://patchwiki.biligame.com/images/rocom/9/9c/ai2ivunxg0fjwnzy552j6bsq1nh5qr4.png',  ename: 'Qiuli',         attribute: 'poison',eggGroup: ['animal','fairy','mech'], heightMin:0.81,heightMax:1.16,weightMin:14.07,weightMax:18.02, stage: 2, region: '-', trait: '-', evolvesTo: [248], evolvesFrom: 246, desc: '更有力量的裘洛进化。' },
    { id:248, name: '裘卡',
      image:'https://patchwiki.biligame.com/images/rocom/9/9c/ai2ivunxg0fjwnzy552j6bsq1nh5qr4.png',  ename: 'Qiuka',         attribute: 'poison',eggGroup: ['animal','fairy'], heightMin:1.25,heightMax:1.79,weightMin:49.5,weightMax:58.6, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 247, desc: '裘洛系列的最终形态。' },

    // 可爱猿 → 炽热猿 → 火焰猿 (NO.249~251)
    { id:249, name: '可爱猿',
      image:'https://patchwiki.biligame.com/images/rocom/e/e0/1xsbef59im08o1aui67cvgqp9nr1a58.png',ename: 'CuteApe',       attribute: 'fire',eggGroup: ['humanoid','monster'], heightMin:0.69,heightMax:0.98,weightMin:21.0,weightMax:31.5, stage: 1, region: '-', trait: '-', evolvesTo: [250], evolvesFrom: null, desc: '可爱热情的猿猴精灵。赛季限定精灵。' },
    { id:250, name: '炽热猿',
      image:'https://patchwiki.biligame.com/images/rocom/e/e0/1xsbef59im08o1aui67cvgqp9nr1a58.png',ename: 'BlazingApe',    attribute: 'fire',eggGroup: ['humanoid','monster'], heightMin:0.71,heightMax:1.02,weightMin:46.5,weightMax:63.5, stage: 2, region: '-', trait: '-', evolvesTo: [251], evolvesFrom: 249, desc: '浑身炽热的猿猴。' },
    { id:251, name: '火焰猿',
      image:'https://patchwiki.biligame.com/images/rocom/e/e0/1xsbef59im08o1aui67cvgqp9nr1a58.png',ename: 'FlameApe',       attribute: 'fire',eggGroup: ['humanoid','monster'], heightMin:1.68,heightMax:1.9,weightMin:124.5,weightMax:136.5, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 250, desc: '燃烧着熊熊烈火的猿王。' },

    // 布鲁斯系列 (NO.252~254)
    { id:252, name: '布鲁斯',
      image:'https://patchwiki.biligame.com/images/rocom/0/03/i3lomx5rtgtrhun9j9o2cky82nj7koy.png',ename: 'Bruce',         attribute: 'ice',eggGroup: ['ocean','soft'], heightMin:0.53,heightMax:0.76,weightMin:2.4,weightMax:4.6, stage: 2, region: '-', trait: '-', evolvesTo: [253,254], evolvesFrom: null, desc: '北极熊形态的布鲁斯精灵。' },
    { id:253, name: '雪顶布鲁斯',
      image:'https://patchwiki.biligame.com/images/rocom/0/03/i3lomx5rtgtrhun9j9o2cky82nj7koy.png',ename: 'SnowTopBruce',attribute:'ice',eggGroup: ['ocean','soft'], heightMin:0.58,heightMax:0.83,weightMin:12.8,weightMax:15.6, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 252, desc: '头顶积雪的北极熊形态。' },
    { id:254, name: '冰钻布鲁斯',
      image:'https://patchwiki.biligame.com/images/rocom/0/03/i3lomx5rtgtrhun9j9o2cky82nj7koy.png',ename: 'IceDrillBruce', attribute:'ice',eggGroup: ['ocean','soft'], heightMin:1.21,heightMax:1.72,weightMin:49.5,weightMax:58.6, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 252, desc: '冰钻武装的北极熊形态。' },

    // 治愈兔 → 红丝绒 → 红绒十字 (NO.255~257)
    { id:255, name: '治愈兔',
      image:'https://patchwiki.biligame.com/images/rocom/a/aa/rngx23e2gk0fv954dvqfy4imdotkztj.png',ename: 'HealRabbit',    attribute: ['fire','cute'],eggGroup: ['animal','fairy'], heightMin:0.57,heightMax:0.82,weightMin:12.03,weightMax:14.42, stage: 1, region: '-', trait: '-', evolvesTo: [256], evolvesFrom: null, desc: '拥有治愈能力的兔子。' },
    { id:256, name: '红丝绒',
      image:'https://patchwiki.biligame.com/images/rocom/a/aa/rngx23e2gk0fv954dvqfy4imdotkztj.png',ename: 'RedVelvet',     attribute: ['fire','cute'],eggGroup: ['animal','fairy'], heightMin:0.68,heightMax:0.97,weightMin:22.4,weightMax:28.6, stage: 2, region: '-', trait: '-', evolvesTo: [257], evolvesFrom: 255, desc: '毛色如红丝绒的兔子。' },
    { id:257, name: '红绒十字',
      image:'https://patchwiki.biligame.com/images/rocom/a/aa/rngx23e2gk0fv954dvqfy4imdotkztj.png',ename: 'RedVelvetCross',attribute:['fire','cute'],eggGroup: ['animal','fairy'], heightMin:1.04,heightMax:1.49,weightMin:32.5,weightMax:36.8, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 256, desc: '红十字标记的治愈大师兔。' },

    // 乌达系列 - 极昼/极夜形态 (NO.258~260)
    { id:258, name: '乌达',  ename: 'Wuda',          attribute: ['dark','fire'],eggGroup: ['monster'], heightMin:0.44,heightMax:0.58,weightMin:4.6,weightMax:6.1, stage: 1, region: '-', trait: '-', forms: ['极昼的样子','极夜的样子'], evolvesTo: [259], evolvesFrom: null, desc: '随昼夜变化的石头精灵。' },
    { id:259, name: '迷你乌',ename: 'MiniWuda',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.259_迷你乌（极昼的样子）.webp',      attribute: ['dark','fire'],eggGroup: ['monster'], heightMin:0.97,heightMax:1.2,weightMin:27.9,weightMax:39.1, stage: 1, region: '-', trait: '-', forms: ['极昼的样子','极夜的样子'], evolvesTo: [260], evolvesFrom: 258, desc: '乌达的小型版。' },
    { id:260, name: '乌拉塔',ename: 'WulataTower',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.260_乌拉塔（极昼的样子）.webp',   attribute: ['dark','fire'],eggGroup: ['monster'], heightMin: 1.10, heightMax: 1.32, weightMin: 48, heightMax: 65, stage: 3, region: '-', trait: '-', forms: ['极昼的样子','极夜的样子'], evolvesTo: null, evolvesFrom: 259, desc: '塔一般巨大的乌达终极形态。' },

    // 螺旋帕帕 → 帕帕斯卡 (NO.261~262)
    { id:261, name: '螺旋帕帕',
      image:'https://patchwiki.biligame.com/images/rocom/2/2e/8sya38cbx002fydqgo0u3z0r4wzcmh9.png',ename: 'HelixPapa',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.261_螺旋帕帕.webp',   attribute: ['machine','flying'],eggGroup: ['flying','mech'], heightMin:0.35,heightMax:0.45,weightMin:2.08,weightMax:4.35, stage: 2, region: '-', trait: '-', evolvesTo: [262], evolvesFrom: null, desc: '螺旋桨造型的帕帕精灵。' },
    { id:262, name: '帕帕斯卡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2e/8sya38cbx002fydqgo0u3z0r4wzcmh9.png',ename: 'PapaSkas',    attribute: ['machine','flying'],eggGroup: ['flying','mech'], heightMin:1.05,heightMax:1.47,weightMin:48.7,weightMax:60.1, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 261, desc: '螺旋帕帕的进化形态。' },

    // 机械方方系列 (NO.263~265) - 注意: 已移除妖精组
    { id:263, name: '机械方方',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/pgpg5oimlp3vj22sforlyu0o5mlenw8.png',ename: 'MechSquareSquare',attribute:'machine',eggGroup:['mech'], heightMin:0.42,heightMax:0.6,weightMin:8.0,weightMax:11.0, stage: 1, region: '-', trait: '-', evolvesTo: [264], evolvesFrom: null, desc: '方形身体的机械生命体。（注意:公测已移除妖精组）' },
    { id:264, name: '多彩方方',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/pgpg5oimlp3vj22sforlyu0o5mlenw8.png',ename: 'ColorfulSquareSquare',attribute:'machine',eggGroup:['mech'],heightMin:0.68,heightMax:0.97,weightMin:23.77,weightMax:34.6,stage:2,region:'-',trait:'-',evolvesTo:[265],evolvesFrom:263,desc:'多彩配色的方方进化。' },
    { id:265, name: '立方人',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/pgpg5oimlp3vj22sforlyu0o5mlenw8.png',ename: 'CubePerson',    attribute: 'machine',eggGroup: ['mech','humanoid'], heightMin:1.78,heightMax:2.01,weightMin:106.5,weightMax:139.07, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 264, desc: '立方体人形的机械精灵。' },

    // 可立鸡 → 晕晕鸡 → 绅士鸡 → 武者鸡 (NO.266~269)
    { id:266, name: '可立鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'CollyChicken',  attribute: 'fire',eggGroup: ['humanoid','mech'], heightMin:0.39,heightMax:0.56,weightMin:4.6,weightMax:7.4, stage: 1, region: '-', trait: '-', evolvesTo: [267], evolvesFrom: null, desc: '站得笔直的小鸡。' },
    { id:267, name: '晕晕鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'DizzyChicken',  attribute: 'fire',eggGroup: ['flying'], heightMin:0.68,heightMax:0.91,weightMin:12.03,weightMax:18.06, stage: 2, region: '-', trait: '-', evolvesTo: [268], evolvesFrom: 266, desc: '晕乎乎的鸡。' },
    { id:268, name: '绅士鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'GentlemanChicken',attribute:['fire','fighting'],eggGroup: ['flying','humanoid'], heightMin:1.31,heightMax:1.87,weightMin:46.8,weightMax:58.2, stage: 3, region: '-', trait: '-', evolvesTo: [269], evolvesFrom: 267, desc: '绅士风度的鸡。' },
    { id:269, name: '武者鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'WarriorChicken', attribute: ['fire','fighting'],eggGroup: ['flying','humanoid'], heightMin:1.46,heightMax:2.09,weightMin:46.8,weightMax:58.2, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 268, desc: '武士道精神的斗鸡。' },

    // 优优 → 绒光优优 (NO.270~271)
    { id:270, name: '优优',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/71ru3va03vqwr4ew76bnhqj74neqk98.png',  ename: 'YouYou',        attribute: ['ground','light'],eggGroup: ['animal'], heightMin:0.38,heightMax:0.56,weightMin:3.03,weightMax:4.1, stage: 1, region: '-', trait: '-', evolvesTo: [271], evolvesFrom: null, desc: '优秀的优优小精灵。' },
    { id:271, name: '绒光优优',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/71ru3va03vqwr4ew76bnhqj74neqk98.png',ename: 'VelvetLightYouyou',attribute:['ground','light'],eggGroup:['animal'],heightMin:0.69,heightMax:0.85,weightMin:13.5,weightMax:19.6,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:270,desc:'散发绒光的优优进化。' },

    { id:272, name: '噼啪鸟',
      image:'https://patchwiki.biligame.com/images/rocom/5/5f/67uopai58qg98apg0dci57gi1bgxhn4.png',ename: 'CrackBird',     attribute: ['electric','flying'],eggGroup: ['flying'], heightMin:2.0,heightMax:2.15,weightMin:89.5,weightMax:127.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '发出噼啪声响的鸟类。' },
    { id:273, name: '深蓝鲸',
      image:'https://patchwiki.biligame.com/images/rocom/4/4c/eonvrfjw5xrztsmkzmwz4eutdi7oban.png',ename: 'DeepBlueWhale', attribute: 'water',eggGroup: ['ocean','monster'], heightMin:2.0,heightMax:2.65,weightMin:645.0,weightMax:700.0, stage: 3, isBoss:true, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '深海中的巨型蓝鲸！首领级精灵。' },

    // 格兰种子 → 格兰花 → 格兰球 (NO.274~276)
    { id:274, name: '格兰种子',
      image:'https://patchwiki.biligame.com/images/rocom/d/d3/b3jzacefc99rb5kz2yh5ta03dq5rd2e.png',ename: 'GranSeed',     attribute: 'grass',eggGroup: ['plant'], heightMin:0.4,heightMax:0.57,weightMin:3.5,weightMax:5.4, stage: 1, region: '-', trait: '-', evolvesTo: [275], evolvesFrom: null, desc: '格兰花的种子形态。' },
    { id:275, name: '格兰花',
      image:'https://patchwiki.biligame.com/images/rocom/d/d3/b3jzacefc99rb5kz2yh5ta03dq5rd2e.png',ename: 'GranFlower',    attribute: 'grass',eggGroup: ['plant'], heightMin:0.48,heightMax:0.68,weightMin:6.5,weightMax:7.8, stage: 2, region: '-', trait: '-', evolvesTo: [276], evolvesFrom: 274, desc: '格兰种子开出的花。' },
    { id:276, name: '格兰球',
      image:'https://patchwiki.biligame.com/images/rocom/d/d3/b3jzacefc99rb5kz2yh5ta03dq5rd2e.png',ename: 'GranBall',      attribute: 'grass',eggGroup: ['plant','fairy'], heightMin:0.81,heightMax:1.16,weightMin:12.5,weightMax:16.5, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 275, desc: '格兰花结出的球形果实形态。' },

    // 地鼠 → 遁鼠 → 遁地鼠 (NO.277~279) - 含地区形态
    { id:277, name: '地鼠',  ename: 'Mole',          attribute: 'ground',eggGroup: ['animal'], heightMin:0.46,heightMax:0.66,weightMin:1.8,weightMax:2.85, stage: 1, region: '-', trait: '-', forms: ['枯水期','储水期','储水时的样子'], evolvesTo: [278], evolvesFrom: null, desc: '善于挖掘的地鼠。' },
    { id:278, name: '遁鼠',  ename: 'EscapeMole',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.278_遁鼠（枯水期的样子）.webp',    attribute: 'ground',eggGroup: ['animal'], heightMin:0.48,heightMax:0.69,weightMin:3.4,weightMax:4.8, stage: 2, region: '-', trait: '-', forms: ['枯水期','储水期','储水时的样子'], evolvesTo: [279], evolvesFrom: 277, desc: '擅长逃遁的地鼠进化。' },
    { id:279, name: '遁地鼠',ename: 'UndergroundMole',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.279_遁地鼠（枯水期的样子）.webp',attribute:'ground',eggGroup:['animal'],heightMin:0.64,heightMax:0.92,weightMin:6.4,weightMax:7.5,stage:3,region:'-',trait:'-',forms:['枯水期','储水期','储水时的样子'],evolvesTo:null,evolvesFrom:278,desc:'遁地能力极强的地鼠终极形态。' },

    // 墨鱿士 → 混乱鱿彩 → 秩序鱿墨 (NO.280~282)
    { id:280, name: '墨鱿士',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ekbfzkhrhoe1i26cq62zv0bdwyws7zg.png',ename: 'InkKnight',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.280_墨鱿士.webp',     attribute: 'ghost',eggGroup: ['ocean','soft'], heightMin:0.35,heightMax:0.46,weightMin:3.25,weightMax:5.02, stage: 2, region: '-', trait: '-', evolvesTo: [281], evolvesFrom: null, desc: '喷射墨汁的鱿鱼骑士。' },
    { id:281, name: '混乱鱿彩',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ekbfzkhrhoe1i26cq62zv0bdwyws7zg.png',ename: 'ChaosInkColor', attribute: ['ghost','dark'],eggGroup: ['ocean','soft'], heightMin:1.36,heightMax:1.54,weightMin:36.9,weightMax:48.2, stage: 3, region: '-', trait: '-', evolvesTo: [282], evolvesFrom: 280, desc: '混乱色彩的鱿鱼形态。' },
    { id:282, name: '秩序鱿墨',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ekbfzkhrhoe1i26cq62zv0bdwyws7zg.png',ename: 'OrderInkInk',  attribute: ['ghost','cute'],eggGroup: ['ocean','soft'], heightMin:1.59,heightMax:1.72,weightMin:45.6,weightMax:60.1, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 281, desc: '秩序井然的鱿墨终极形态。' },

    // 小甲虫 → 铠甲虫 (NO.283~284)
    { id:283, name: '小甲虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c5/gxb5ofg998pswe6vu88c1gtiiibwnro.png',ename: 'SmallBeetle',   attribute: 'bug',eggGroup: ['insect','flying'], heightMin:0.48,heightMax:0.68,weightMin:6.5,weightMax:8.4, stage: 1, region: '-', trait: '-', evolvesTo: [284], evolvesFrom: null, desc: '小型甲虫精灵。' },
    { id:284, name: '铠甲虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c5/gxb5ofg998pswe6vu88c1gtiiibwnro.png',ename: 'ArmorBeetle',   attribute: 'bug',eggGroup: ['insect'], heightMin:1.17,heightMax:1.68,weightMin:83.0,weightMax:96.0, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 283, desc: '全身铠甲的甲虫。' },

    // 圣剑系列 (NO.285~286)
    { id:285, name: '圣剑侍从',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/6w4z6k41648qw2uagnoz0ac081trrgi.png',ename: 'HolySwordAttendant',attribute:'machine',eggGroup:['mech'],heightMin:0.94,heightMax:1.18,weightMin:115.7,weightMax:173.6,stage:2,region:'-',trait:'-',evolvesTo:[286],evolvesFrom:null,desc:'持圣剑的侍从。' },
    { id:286, name: '圣剑-X',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/6w4z6k41648qw2uagnoz0ac081trrgi.png',ename: 'HolySwordX',    attribute: 'machine',eggGroup: ['mech'], heightMin:1.83,heightMax:2.07,weightMin:481.0,weightMax:658.0, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 285, desc: 'X型圣剑的终极战士。' },

    // 吸泥鸥 → 泥吼牙 (NO.287~288)
    { id:287, name: '吸泥鸥',
      image:'https://patchwiki.biligame.com/images/rocom/8/8e/br2yi6aj77tv3j8bstqidsiuvadc0od.png',ename: 'MudAbsorbGull', attribute: ['ground','flying'],eggGroup: ['flying','amphibian'], heightMin:0.55,heightMax:0.71,weightMin:9.5,weightMax:12.5, stage: 2, region: '-', trait: '-', evolvesTo: [288], evolvesFrom: null, desc: '吸收泥土的海鸥。' },
    { id:288, name: '泥吼牙',
      image:'https://patchwiki.biligame.com/images/rocom/8/8e/br2yi6aj77tv3j8bstqidsiuvadc0od.png',ename: 'MudRoarFang',  attribute: ['ground','flying'],eggGroup: ['flying'], heightMin:1.05,heightMax:1.45,weightMin:21.5,weightMax:32.5, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 287, desc: '泥浆咆哮的利齿鸥。' },

    // 大头骨龙 → 寂灭骨龙 (NO.289~290)
    { id:289, name: '大头骨龙',
      image:'https://patchwiki.biligame.com/images/rocom/d/dc/oaohfrfv4b6cx8elngiwarhn9phgzch.png',ename: 'BigHeadBoneDragon',attribute:['dragon','ghost'],eggGroup:['dragon','monster'],heightMin:0.85,heightMax:1.0,weightMin:18.6,weightMax:33.5,stage:2,region:'-',trait:'-',evolvesTo:[290],evolvesFrom:null,desc:'大头骨龙的骨架形态。' },
    { id:290, name: '寂灭骨龙',
      image:'https://patchwiki.biligame.com/images/rocom/d/dc/oaohfrfv4b6cx8elngiwarhn9phgzch.png',ename: 'NirvanaBoneDragon',attribute:['dragon','ghost'],eggGroup:['dragon','monster'],heightMin:2.25,heightMax:2.45,weightMin:85.7,weightMax:105.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:289,desc:'寂灭之力汇聚的骨龙终极形态。' },

    // 厉毒系列 (NO.291~292)
    { id:291, name: '厉毒小萝',
      image:'https://patchwiki.biligame.com/images/rocom/3/3e/6tk28w0xeycfxejxbtn8myiv9wsd17j.png',ename: 'VenomLittleGirl',attribute:['poison','dark'],eggGroup:['humanoid'],heightMin:0.55,heightMax:0.65,weightMin:8.73,weightMax:14.92,stage:1,region:'-',trait:'-',evolvesTo:[292],evolvesFrom:null,desc:'携带剧毒的小萝莉精灵。' },
    { id:292, name: '厉毒修萝',
      image:'https://patchwiki.biligame.com/images/rocom/3/3e/6tk28w0xeycfxejxbtn8myiv9wsd17j.png',ename: 'VenomCultivateGirl',attribute:['poison','dark'],eggGroup:['humanoid'],heightMin:1.45,heightMax:1.55,weightMin:33.75,weightMax:41.6,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:291,desc:'修炼剧毒之术的萝莉形态。' },

    // 小帕尔 → 帕尔萨斯 → 龙息帕尔 (NO.293~295)
    { id:293, name: '小帕尔',
      image:'https://patchwiki.biligame.com/images/rocom/b/b3/l5aj212ensdevykbe4wgsxf1c12ayxi.png',ename: 'LittlePal',     attribute: 'dark',eggGroup: ['animal'], heightMin:0.64,heightMax:0.92,weightMin:9.4,weightMax:13.6, stage: 1, region: '-', trait: '-', evolvesTo: [294], evolvesFrom: null, desc: '小狗形态的帕尔幼崽。' },
    { id:294, name: '帕尔萨斯',
      image:'https://patchwiki.biligame.com/images/rocom/b/b3/l5aj212ensdevykbe4wgsxf1c12ayxi.png',ename: 'Cerberus',     attribute: 'dark',eggGroup: ['animal'], heightMin:1.33,heightMax:1.58,weightMin:46.5,weightMax:61.5, stage: 3, region: '-', trait: '-', evolvesTo: [295], evolvesFrom: 293, desc: '三头地狱犬形态！守卫冥界之门。' },
    { id:295, name: '龙息帕尔',
      image:'https://patchwiki.biligame.com/images/rocom/b/b3/l5aj212ensdevykbe4wgsxf1c12ayxi.png',ename: 'DragonBreathPal',attribute:'dark',eggGroup: ['none'], heightMin:1.93,heightMax:2.4,weightMin:96.5,weightMax:115.0, stage: 3, isBoss:true, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 294, desc: '喷吐龙息的帕尔萨斯终极形态！战令宠，无法孵蛋。' },

    // 毛头小蛛 → 捕尘长绒 → 食尘短绒 (NO.296~298)
    { id:296, name: '毛头小蛛',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/3nr9m11fcoasdyy8qcplzh21b7rbqep.png',ename: 'FuzzyLittleSpider',attribute:['bug','ground'],eggGroup:['insect','fairy'],heightMin:0.3,heightMax:0.45,weightMin:0.95,weightMax:2.0,stage:1,region:'-',trait:'-',evolvesTo:[297],evolvesFrom:null,desc:'毛茸茸的小蜘蛛。' },
    { id:297, name: '捕尘长绒',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/3nr9m11fcoasdyy8qcplzh21b7rbqep.png',ename: 'DustCatchLongFuzz',attribute:['bug','ground'],eggGroup:['insect'],heightMin:1.15,heightMax:1.45,weightMin:2.35,weightMax:4.19,stage:2,region:'-',trait:'-',evolvesTo:[298],evolvesFrom:296,desc:'捕捉灰尘的长毛蜘蛛。' },
    { id:298, name: '食尘短绒',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/3nr9m11fcoasdyy8qcplzh21b7rbqep.png',ename: 'DustEatShortFuzz',attribute:['bug','ground'],eggGroup:['insect'],heightMin:0.75,heightMax:0.9,weightMin:2.65,weightMax:5.15,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:297,desc:'吞食灰尘的大型蜘蛛。' },

    // 画精灵系列 (NO.299~302)
    { id:299, name: '画精灵',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PaintSprite',   attribute: 'normal',eggGroup: ['fairy'], heightMin:0.28,heightMax:0.38,weightMin:0.99,weightMax:2.21, stage: 1, region: '-', trait: '-', evolvesTo: [300], evolvesFrom: null, desc: '从画中诞生的小精灵。' },
    { id:300, name: '画像守护',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PortraitGuardian',attribute:'normal',eggGroup:['fairy'],heightMin:0.49,heightMax:0.6,weightMin:5.85,weightMax:6.9,stage:2,region:'-',trait:'-',evolvesTo:[301],evolvesFrom:299,desc:'守护画像的存在。' },
    { id:301, name: '画间法师手',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PaintWizardHand',attribute:['normal','illusion'],eggGroup:['fairy'],heightMin:2.08,heightMax:2.45,weightMin:46.05,weightMax:58.1,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:300,desc: '画中的魔法之手。' },
    { id:302, name: '画间沉铁兽',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PaintIronBeast',attribute:['normal','fighting'],eggGroup:['fairy'],heightMin:1.75,heightMax:1.92,weightMin:75.7,weightMax:88.02,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc: '画中的钢铁野兽。' },

    // 书魔虫系列 (NO.303~306)
    { id:303, name: '书魔虫',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'BookWormDemon',  attribute: 'normal',eggGroup: ['insect','fairy'], heightMin:0.3,heightMax:0.41,weightMin:2.28,weightMax:3.86, stage: 1, region: '-', trait: '-', evolvesTo: [304], evolvesFrom: null, desc: '啃食书籍的魔法虫。' },
    { id:304, name: '书卷守护',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'BookGuardian', attribute: 'normal',eggGroup: ['fairy'], heightMin:0.82,heightMax:1.01,weightMin:9.8,weightMax:14.8, stage: 2, region: '-', trait: '-', evolvesTo: [305], evolvesFrom: 303, desc: '守护书卷的存在。' },
    { id:305, name: '古卷执政官',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'AncientScrollMagistrate',attribute:['normal','illusion'],eggGroup:['fairy'],heightMin:1.91,heightMax:2.21,weightMin:98.8,weightMax:135.5,stage:3,region:'-',trait:'-',evolvesTo:[306],evolvesFrom:304,desc: '执掌古卷的执政官。' },
    { id:306, name: '古卷匣魔像',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'AncientScrollBoxGolem',attribute:['normal','fighting'],eggGroup:['mech'],heightMin:1.87,heightMax:2.15,weightMin:119.5,weightMax:180.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:305,desc: '古卷匣中的魔像巨人。' },

    // 绒绒 → 小绒茧 → 绒仙子 (NO.307~309)
    { id:307, name: '绒绒',
      image:'https://patchwiki.biligame.com/images/rocom/0/08/654ffcp524wy323uwi7k1z7rk4rejuc.png',  ename: 'FluffyFluffy',  attribute: ['light','bug'],eggGroup: ['animal'], heightMin:0.29,heightMax:0.35,weightMin:1.0,weightMax:2.5, stage: 1, hasShiny:true, region: '-', trait: '-', evolvesTo: [308], evolvesFrom: null, desc: '毛茸茸的小精灵。存在异色形态。' },
    { id:308, name: '小绒茧',
      image:'https://patchwiki.biligame.com/images/rocom/0/08/654ffcp524wy323uwi7k1z7rk4rejuc.png',ename: 'SmallFluffyCocoon',attribute:['light','bug'],eggGroup:['animal'],heightMin:0.59,heightMax:0.84,weightMin:7.6,weightMax:9.2,stage:2,region:'-',trait:'-',evolvesTo:[309],evolvesFrom:307,desc: '进入茧状态的绒绒。' },
    { id:309, name: '绒仙子',
      image:'https://patchwiki.biligame.com/images/rocom/0/08/654ffcp524wy323uwi7k1z7rk4rejuc.png',ename: 'FluffyFairy',  attribute: ['light','bug'],eggGroup: ['none'], heightMin:1.25,heightMax:1.65,weightMin:37.5,weightMax:42.8, stage: 3, hasShiny:true, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 308, desc: '破茧而出的绒绒仙子！战令宠，无法孵蛋。' },

    // 犀角鸟 (NO.310)
    { id:310, name: '犀角鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/81qhw7nwi52la93w31dkqwhrzwgqiqw.png',ename: 'RhinoHornBird', attribute: 'light',eggGroup: ['animal'], heightMin:0.32,heightMax:0.4,weightMin:9.6,weightMax:11.5, stage: 2, hasShiny:true, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '长有犀牛角的鸟类。存在异色形态。' },

    // 光纤兽 → 疾光千兽 (NO.311~312)
    { id:311, name: '光纤兽',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/81qhw7nwi52la93w31dkqwhrzwgqiqw.png',ename: 'FiberBeast',    attribute: 'light',eggGroup: ['animal','mech'], heightMin:0.7,heightMax:0.85,weightMin:31.5,weightMax:37.8, stage: 1, region: '-', trait: '-', evolvesTo: [312], evolvesFrom: null, desc: '光纤构成的兽类精灵。' },
    { id:312, name: '疾光千兽',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/81qhw7nwi52la93w31dkqwhrzwgqiqw.png',ename: 'SpeedLightThousandBeast',attribute:'light',eggGroup:['animal'],heightMin:1.75,heightMax:2.1,weightMin:112.9,weightMax:165.0,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:311,desc: '疾驰如光的千足兽！战令宠，无法孵蛋。' },

    // 果冻系列 (NO.313~316)
    { id:313, name: '果冻',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',  ename: 'Jelly',         attribute: 'water',eggGroup: ['magic','soft'], heightMin:0.3,heightMax:0.36,weightMin:4.35,weightMax:5.6, stage: 1, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: 'Q弹Q弹的果冻精灵。' },
    { id:314, name: '抹茶布丁',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',ename: 'MatchaPudding', attribute: ['water','grass'],eggGroup: ['soft'], heightMin:0.39,heightMax:0.51,weightMin:6.21,weightMax:7.9, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '抹茶味布丁精灵。' },
    { id:315, name: '椰浆布丁',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',ename: 'CoconutPudding',attribute: ['water','ice'],eggGroup: ['soft'], heightMin:0.39,heightMax:0.51,weightMin:6.21,weightMax:7.9, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '椰浆味布丁精灵。' },
    { id:316, name: '熔岩布丁',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',ename: 'LavaPudding',   attribute: ['water','fire'],eggGroup: ['soft'], heightMin:0.39,heightMax:0.51,weightMin:6.21,weightMax:7.9, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '熔岩味的热辣布丁精灵。' },

    // 星尘虫系列 (NO.317~319)
    { id:317, name: '星尘虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/fgbjyux6bdbk4uikkoew7jeicbzy47t.png',ename: 'StardustBug',   attribute: 'bug',eggGroup: ['insect'], heightMin:0.15,heightMax:0.2,weightMin:0.45,weightMax:1.4, stage: 1, region: '-', trait: '-', evolvesTo: [318], evolvesFrom: null, desc: '星尘构成的小虫子。' },
    { id:318, name: '落星虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/fgbjyux6bdbk4uikkoew7jeicbzy47t.png',ename: 'FallenStarBug', attribute: 'bug',eggGroup: ['insect'], heightMin:0.35,heightMax:0.4,weightMin:1.25,weightMax:2.25, stage: 2, region: '-', trait: '-', evolvesTo: [319], evolvesFrom: 317, desc: '陨落的星尘虫进化。' },
    { id:319, name: '陨星虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/fgbjyux6bdbk4uikkoew7jeicbzy47t.png',ename: 'MeteoriteBug',  attribute: 'bug',eggGroup: ['insect'], heightMin:0.65,heightMax:0.8,weightMin:5.6,weightMax:6.8, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 318, desc: '如陨星般坠落的虫族终极形态。' },

    // 双灯鱼 → 利灯鱼 (NO.320~321)
    { id:320, name: '双灯鱼',
      image:'https://patchwiki.biligame.com/images/rocom/3/36/5i3mvo96bopno2o7f5h1bz7oz4hpkyq.png',ename: 'DoubleLampFish', attribute: ['water','electric'],eggGroup: ['ocean'], heightMin:0.5,heightMax:0.72,weightMin:14.9,weightMax:17.8, stage: 1, region: '-', trait: '-', evolvesTo: [321], evolvesFrom: null, desc: '头顶两盏灯的深海小鱼。' },
    { id:321, name: '利灯鱼',
      image:'https://patchwiki.biligame.com/images/rocom/3/36/5i3mvo96bopno2o7f5h1bz7oz4hpkyq.png',ename: 'SharpLampFish', attribute: ['water','electric'],eggGroup: ['ocean'], heightMin:0.62,heightMax:0.89,weightMin:26.8,weightMax:31.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 320, desc: '灯光锐利的灯笼鱼进化。' },

    // 月牙雪熊 (NO.322)
    { id:322, name: '月牙雪熊',
      image:'https://patchwiki.biligame.com/images/rocom/5/5d/0cskl2u4wneivk2icntkrcaiwuwv4yq.png',ename: 'CrescentSnowBear',attribute:['ice','illusion'],eggGroup:['animal','monster'],heightMin:1.25,heightMax:1.45,weightMin:76.5,weightMax:92.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc: '月亮印记的北极熊。' },

    // 嗜光嗡嗡 → 窃光蚊 (NO.323~324)
    { id:323, name: '嗜光嗡嗡',
      image:'https://patchwiki.biligame.com/images/rocom/6/6c/83k9t4acg7s1haeupl1wxml4pipklpa.png',ename: 'LightLovingBuzz',attribute:['dark','light'],eggGroup:['insect'],heightMin:0.24,heightMax:0.32,weightMin:1.46,weightMax:3.05,stage:1,region:'-',trait:'-',evolvesTo:[324],evolvesFrom:null,desc: '嗜好光线的嗡嗡虫。' },
    { id:324, name: '窃光蚊',
      image:'https://patchwiki.biligame.com/images/rocom/6/6c/83k9t4acg7s1haeupl1wxml4pipklpa.png',ename: 'StealLightMosquito',attribute:['dark','light'],eggGroup:['insect'],heightMin:0.53,heightMax:0.66,weightMin:7.05,weightMax:9.62,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:323,desc: '窃取光芒的蚊子。' },

    // 柴渣虫 → 燃薪虫 (NO.325~326)
    { id:325, name: '柴渣虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/t3ec092gh9ocd64wuqjewlf56yjvxhg.png',ename: 'FirewoodBug',   attribute: ['fire','grass'],eggGroup: ['insect','plant'], heightMin:0.45,heightMax:0.55,weightMin:14.5,weightMax:18.6, stage: 1, region: '-', trait: '-', evolvesTo: [326], evolvesFrom: null, desc: '柴火渣滓中的虫子。' },
    { id:326, name: '燃薪虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/t3ec092gh9ocd64wuqjewlf56yjvxhg.png',ename: 'BurnWoodBug',   attribute: ['fire','grass'],eggGroup: ['insect','plant'], heightMin:1.1,heightMax:1.25,weightMin:72.5,weightMax:87.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 325, desc: '燃烧薪柴的火焰虫。' },

    // 空空颅 → 夜宿颅 → 夜枭 (NO.327~329)
    { id:327, name: '空空颅',
      image:'https://patchwiki.biligame.com/images/rocom/4/41/kypxrmm8mobwqs3oseltznss9iqhrh2.png',ename: 'EmptySkull',    attribute: 'ghost',eggGroup: ['magic','monster'], heightMin:0.43,heightMax:0.61,weightMin:5.6,weightMax:8.7, stage: 2, region: '-', trait: '-', evolvesTo: [328], evolvesFrom: null, desc: '空洞的头骨幽灵。' },
    { id:328, name: '夜宿颅',
      image:'https://patchwiki.biligame.com/images/rocom/4/41/kypxrmm8mobwqs3oseltznss9iqhrh2.png',ename: 'NightStaySkull', attribute: 'ghost',eggGroup: ['monster'], heightMin:0.82,heightMax:1.18,weightMin:27.6,weightMax:34.3, stage: 3, region: '-', trait: '-', evolvesTo: [329], evolvesFrom: 327, desc: '夜间栖息的头骨幽灵。' },
    { id:329, name: '夜枭',
      image:'https://patchwiki.biligame.com/images/rocom/4/41/kypxrmm8mobwqs3oseltznss9iqhrh2.png',  ename: 'NightOwl',      attribute: 'ghost',eggGroup: ['monster'], heightMin:1.45,heightMax:2.07,weightMin:58.6,weightMax:66.5, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 328, desc: '夜间的枭雄猫头鹰。' },

    // 粉粉星 (NO.330)
    { id:330, name: '粉粉星',
      image:'https://patchwiki.biligame.com/images/rocom/c/ca/gpnuspztb84l9jwwp1mh4up4ihxw3p2.png',ename: 'PinkPinkStar',  attribute: ['electric','illusion'],eggGroup: ['fairy','soft'], heightMin:0.53,heightMax:0.76,weightMin:2.1,weightMax:3.0, stage: 1, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '粉色星星的精灵。' },

    // 小皮球 (NO.331)
    { id:331, name: '小皮球',
      image:'https://patchwiki.biligame.com/images/rocom/c/ca/gpnuspztb84l9jwwp1mh4up4ihxw3p2.png',ename: 'LittleBall',     attribute: ['electric','illusion'],eggGroup: ['fairy'], heightMin:0.7,heightMax:1.0,weightMin:6.4,weightMax:8.12, stage: 1, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '像小皮球一样的精灵。' },

    // 贝瑟系列 (NO.332~334)
    { id:332, name: '贝瑟',
      image:'https://patchwiki.biligame.com/images/rocom/d/d1/7c8xj95wzoxszdwytae10y9cfjdevim.png',  ename: 'Bessel',        attribute: ['machine','fire'],eggGroup: ['mech'], heightMin:0.57,heightMax:0.82,weightMin:24.5,weightMax:34.6, stage: 1, region: '-', trait: '-', evolvesTo: [333], evolvesFrom: null, desc: '贝瑟型机械精灵。' },
    { id:333, name: '贝加尔',
      image:'https://patchwiki.biligame.com/images/rocom/d/d1/7c8xj95wzoxszdwytae10y9cfjdevim.png',ename: 'Baikal',        attribute: ['machine','fire'],eggGroup: ['mech'], heightMin:0.9,heightMax:1.2,weightMin:87.6,weightMax:97.5, stage: 2, region: '-', trait: '-', evolvesTo: [334], evolvesFrom: 332, desc: '贝瑟进化后的形态。' },
    { id:334, name: '贝古斯',
      image:'https://patchwiki.biligame.com/images/rocom/d/d1/7c8xj95wzoxszdwytae10y9cfjdevim.png',ename: 'Baigus',        attribute: ['machine','fire'],eggGroup: ['mech'], heightMin:1.55,heightMax:1.8,weightMin:248.0,weightMax:286.0, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 333, desc: '贝瑟系列的最终形态。' },

    // 粉星仔 → 粉耳星兔 → 落陨星兔 (NO.335~337)
    { id:335, name: '粉星仔',
      image:'https://patchwiki.biligame.com/images/rocom/6/68/taalud8zowwtufk65ucpbes8xqsminq.png',ename: 'PinkStarBaby',  attribute: 'illusion',eggGroup: ['flying','fairy'], heightMin:0.39,heightMax:0.5,weightMin:9.8,weightMax:12.8, stage: 1, region: '-', trait: '-', evolvesTo: [336], evolvesFrom: null, desc: '粉色星星的小兔子。' },
    { id:336, name: '粉耳星兔',
      image:'https://patchwiki.biligame.com/images/rocom/6/68/taalud8zowwtufk65ucpbes8xqsminq.png',ename: 'PinkEarStarRabbit',attribute:'illusion',eggGroup:['flying'],heightMin:0.55,heightMax:0.75,weightMin:16.82,weightMax:23.81,stage:2,region:'-',trait:'-',evolvesTo:[337],evolvesFrom:335,desc: '粉色耳朵的星兔。' },
    { id:337, name: '落陨星兔',
      image:'https://patchwiki.biligame.com/images/rocom/6/68/taalud8zowwtufk65ucpbes8xqsminq.png',ename: 'FallenMeteorStarRabbit',attribute:['illusion','ghost'],eggGroup:['flying'],heightMin:0.55,heightMax:0.75,weightMin:16.82,weightMax:23.81,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:336,desc: '如流星般坠落的星兔。' },

    // 布瓜蝌 → 上岸蛙 (NO.338~339)
    { id:338, name: '布瓜蝌',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/cf0waszkpt8lgc5625l1bv71wgbxlrm.png',ename: 'BuaGuafrog',   attribute: 'illusion',eggGroup: ['amphibian'], heightMin:0.32,heightMax:0.51,weightMin:0.45,weightMax:1.65, stage: 1, region: '-', trait: '-', evolvesTo: [339], evolvesFrom: null, desc: '布瓜布瓜叫的小蝌蚪。' },
    { id:339, name: '上岸蛙',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/cf0waszkpt8lgc5625l1bv71wgbxlrm.png',ename: 'LandFrog',      attribute: 'illusion',eggGroup: ['amphibian'], heightMin:0.65,heightMax:0.87,weightMin:5.8,weightMax:8.1, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 338, desc: '上岸生活的青蛙。' },

    { id:340, name: '火红尾',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/gknyb1qbbno2vnvcvyb4p9a0o9y1owp.png',ename: 'FireRedTail',   attribute: 'fire',eggGroup: ['animal'], heightMin:0.72,heightMax:0.98,weightMin:17.5,weightMax:30.5, stage: 2, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '红色尾巴的火焰精灵。' },
    { id:341, name: '雅丹鬃',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/gknyb1qbbno2vnvcvyb4p9a0o9y1owp.png',ename: 'YardangMane',  attribute: 'fire',eggGroup: ['animal'], heightMin:1.7,heightMax:2.06,weightMin:49.5,weightMax:71.2, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: null, desc: '雅丹地貌般的鬃毛精灵。' },

    // 春团 → 春兔 → 春花兔 (NO.342~344)
    { id:342, name: '春团',
      image:'https://patchwiki.biligame.com/images/rocom/4/4e/geoo47p9iq6pyh1xko113u2z8bqcz09.png',  ename: 'SpringBall',    attribute: 'grass',eggGroup: ['animal','fairy'], heightMin:0.35,heightMax:0.51,weightMin:2.1,weightMax:3.6, stage: 1, region: '-', trait: '-', evolvesTo: [343], evolvesFrom: null, desc: '春天团子般的精灵。' },
    { id:343, name: '春兔',
      image:'https://patchwiki.biligame.com/images/rocom/4/4e/geoo47p9iq6pyh1xko113u2z8bqcz09.png',  ename: 'SpringRabbit',  attribute: 'grass',eggGroup: ['animal','fairy'], heightMin:0.61,heightMax:0.87,weightMin:6.8,weightMax:8.5, stage: 2, region: '-', trait: '-', evolvesTo: [344], evolvesFrom: 342, desc: '春天的小兔子。' },
    { id:344, name: '春花兔',
      image:'https://patchwiki.biligame.com/images/rocom/4/4e/geoo47p9iq6pyh1xko113u2z8bqcz09.png',ename: 'SpringFlowerRabbit',attribute:'grass',eggGroup:['animal','fairy'],heightMin:0.85,heightMax:1.15,weightMin:18.5,weightMax:33.5,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:343,desc: '春花烂漫时节的兔子。' },

    // 幽星光 → 曜星光 → 暮星辰 (NO.345~347)
    { id:345, name: '幽星光',
      image:'https://patchwiki.biligame.com/images/rocom/8/88/f8eryhmo33y1cnnw7vl63hn3khncqhe.png',ename: 'GhostStarlight', attribute: 'illusion',eggGroup: ['fairy'], heightMin:0.4,heightMax:0.55,weightMin:0.6,weightMax:1.65, stage: 2, region: '-', trait: '-', evolvesTo: [346], evolvesFrom: null, desc: '幽暗中的星光。' },
    { id:346, name: '曜星光',
      image:'https://patchwiki.biligame.com/images/rocom/8/88/f8eryhmo33y1cnnw7vl63hn3khncqhe.png',ename: 'ShiningStarlight',attribute: ['illusion','flying'],eggGroup: ['fairy'], heightMin:0.88,heightMax:1.05,weightMin:3.0,weightMax:4.5, stage: 3, region: '-', trait: '-', evolvesTo: [347], evolvesFrom: 345, desc: '耀眼光芒的星辰。' },
    { id:347, name: '暮星辰',
      image:'https://patchwiki.biligame.com/images/rocom/8/88/f8eryhmo33y1cnnw7vl63hn3khncqhe.png',ename: 'DuskStar',     attribute: ['illusion','flying'],eggGroup: ['fairy'], heightMin:1.85,heightMax:2.05,weightMin:7.5,weightMax:10.5, stage: 3, region: '-', trait: '-', evolvesTo: null, evolvesFrom: 346,       desc: '暮色中最亮的星辰。' },
    // ══════════════ 公测更新精灵 (NO.348~366) ══════════════
    // 数据来源: game-walkthrough.com API · 更新时间: 2026-04-08
    { id:348,name:'烈火战神',  image:'https://rocom.game-walkthrough.com/pokemon/NO.007_烈火战神.webp',  ename:'BlazingGod',   attribute:'fire',  eggGroup:['none'],    heightMin:1.6,heightMax:2.2,weightMin:65,weightMax:95, stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'传说中的火焰战神，拥有焚尽一切的威能。' },
    { id:349,name:'叶冕魔力猫',image:'https://rocom.game-walkthrough.com/pokemon/NO.004_叶冕魔力猫.webp',  ename:'MagicCat',    attribute:'grass',eggGroup:['fairy'],  heightMin:0.4,heightMax:0.6,weightMin:4,weightMax:7,   stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'头戴叶冠的魔力猫咪，能操控自然之力。' },
    { id:350,name:'圣水守护',  image:'https://rocom.game-walkthrough.com/pokemon/NO.010_圣水守护.webp',  ename:'HolyWaterGuardian',attribute:'water',eggGroup:['none'],   heightMin:1.5,heightMax:2.0,weightMin:50,weightMax:75, stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'守护圣水的神圣精灵，拥有净化一切的能力。' },
    { id:351,name:'奇丽果',    image:'https://rocom.game-walkthrough.com/pokemon/NO.043_奇丽果.webp',    ename:'BeautifulFruit',attribute:'grass',eggGroup:['plant'],  heightMin:0.35,heightMax:0.5,weightMin:2,weightMax:4, stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'外表奇特的果实系精灵，味道甜美但不可食用。' },
    { id:352,name:'奇梦咪',    image:'https://rocom.game-walkthrough.com/pokemon/NO.200_奇梦咪.webp',    ename:'DreamMimi',  attribute:'cute', eggGroup:['fairy'],  heightMin:0.3,heightMax:0.45,weightMin:1.5,weightMax:3,stage:1,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'总是沉浸在美梦中的可爱精灵。' },
    { id:353,name:'迷障布莱克',image:'https://rocom.game-walkthrough.com/pokemon/NO.029_迷障布莱克.webp',ename:'DazeBlack',  attribute:'normal',eggGroup:['monster'],heightMin:1.2,heightMax:1.6,weightMin:40,weightMax:58,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'制造迷雾陷阱的黑暗精灵。' },
    { id:354,name:'霜翼领主',  image:'https://rocom.game-walkthrough.com/pokemon/NO.020_霜翼领主.webp',  ename:'FrostWingLord',attribute:'flying',eggGroup:['flying'],heightMin:1.4,heightMax:1.9,weightMin:45,weightMax:68,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'统领冰霜飞禽的王者，羽翼如冰晶般闪耀。' },
    { id:355,name:'鸭吉吉国王',image:'https://rocom.game-walkthrough.com/pokemon/NO.011_鸭吉吉国王.webp',ename:'KingDucky',  attribute:'normal',eggGroup:['animal'],heightMin:0.8,heightMax:1.1,weightMin:15,weightMax:25,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'鸭子王国的统治者，深受子民爱戴。' },
    { id:356,name:'幻影荆棘',  image:'https://rocom.game-walkthrough.com/pokemon/NO.035_幻影荆棘.webp',  ename:'PhantomThorn',attribute:['ghost','grass'],eggGroup:['plant'],heightMin:0.7,heightMax:1.0,weightMin:12,weightMax:22,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'在暗处生长的荆棘精灵，被其刺中会产生幻觉。' },
    { id:357,name:'彩虹独角兽',image:'https://rocom.game-walkthrough.com/pokemon/NO.117_彩虹独角兽.webp',ename:'RainbowUnicorn',attribute:'light',eggGroup:['magic'],heightMin:1.1,heightMax:1.5,weightMin:25,weightMax:42,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'身披彩虹光辉的独角兽，象征希望与奇迹。' },
    { id:358,name:'恶魔狼王',  image:'https://rocom.game-walkthrough.com/pokemon/NO.131_恶魔狼王.webp',  ename:'DevilWolfKing',attribute:'dark',eggGroup:['monster'],heightMin:1.8,heightMax:2.4,weightMin:80,weightMax:120,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'统御群狼的恶魔领主，咆哮声震慑四方。' },
    { id:359,name:'祭礼巨像',  image:'https://rocom.game-walkthrough.com/pokemon/NO.115_祭礼巨像.webp',  ename:'RitualColossus',attribute:['normal','illusion'],eggGroup:['mech'],heightMin:2.5,heightMax:3.5,weightMin:200,weightMax:350,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'古老仪式中召唤的巨型石像，蕴含神秘力量。' },
    { id:360,name:'花魁蜂后',  image:'https://rocom.game-walkthrough.com/pokemon/NO.084_花魁蜂后.webp',  ename:'QueenBeeBeauty',attribute:['bug','flying'],eggGroup:['insect'],heightMin:0.5,heightMax:0.7,weightMin:8,weightMax:15,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'蜂群中最美丽的女王，魅力与毒刺并存。' },
    { id:361,name:'神谕鲨',    image:'https://rocom.game-walkthrough.com/pokemon/NO.110_神谕鲨.webp',    ename:'OracleShark', attribute:['water','flying'],eggGroup:['ocean'],heightMin:2.0,heightMax:2.8,weightMin:90,weightMax:140,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'传达海洋神谕的圣兽，游弋于深海之中。' },
    { id:362,name:'雪影冰灵',  image:'https://rocom.game-walkthrough.com/pokemon/NO.144_雪影冰灵.webp',  ename:'SnowShadowSpirit',attribute:['ice','cute'],eggGroup:['fairy'],heightMin:0.9,heightMax:1.3,weightMin:18,weightMax:32,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'雪地中若隐若现的冰之精魂。' },
    { id:363,name:'波普鹿',    image:'https://rocom.game-walkthrough.com/pokemon/NO.228_波普鹿.webp',    ename:'PopDeer',    attribute:'electric',eggGroup:['animal'],heightMin:0.6,heightMax:0.85,weightMin:10,weightMax:18,stage:2,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'充满活力的电系小鹿，奔跑时带起电流火花。' },
    { id:364,name:'风暴战犬',  image:'https://rocom.game-walkthrough.com/pokemon/NO.048_风暴战犬.webp',  ename:'StormWarDog',attribute:'fire',eggGroup:['animal'],heightMin:0.9,heightMax:1.25,weightMin:28,weightMax:45,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'冲锋于战场前线的不屈战犬。' },
    { id:365,name:'圣剑骑士',  image:'https://rocom.game-walkthrough.com/pokemon/NO.286_圣剑骑士.webp',  ename:'HolySwordKnight',attribute:'machine',eggGroup:['humanoid'],heightMin:1.7,heightMax:2.2,weightMin:70,weightMax:100,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'手持圣剑的荣耀骑士，誓死捍卫正义。' },
    { id:366,name:'伊兰亚龙',  image:'https://rocom.game-walkthrough.com/pokemon/NO.204_伊兰亚龙.webp',  ename:'YilanDragon',attribute:'dragon',eggGroup:['dragon'],heightMin:2.2,heightMax:3.0,weightMin:110,weightMax:170,stage:3,region:'-',trait:'-',evolvesTo:null,evolvesFrom:null,desc:'来自遥远东方的亚龙种精灵。' }
  ],


  // ========== 工具方法 ==========
  // 获取属性信息，支持字符串或数组（双属性）
  getAttribute(attrInput) {
    if (Array.isArray(attrInput)) {
      // 返回所有匹配的属性对象数组
      return attrInput.map(id => this.attributes.find(a => a.id === id)).filter(Boolean);
    }
    return this.attributes.find(a => a.id === attrInput) || this.attributes[0];
  },

  // 获取主属性（用于颜色等单值场景）
  getPrimaryAttribute(spirit) {
    const attr = spirit.attribute;
    if (Array.isArray(attr)) return attr[0];
    return attr;
  },

  // 获取所有属性列表
  getAttributes(spirit) {
    const attr = spirit.attribute;
    if (Array.isArray(attr)) return attr;
    return [attr];
  },

  getEggGroup(groupId) {
    return this.eggGroups.find(g => g.id === groupId);
  },

  getSpirit(id) {
    return this.spirits.find(s => s.id === id);
  },

  searchSpirits(keyword) {
    const kw = keyword.toLowerCase();
    return this.spirits.filter(s =>
      s.name.includes(kw) ||
      s.ename.toLowerCase().includes(kw) ||
      s.id.toString().includes(kw)
    );
  },

  filterByAttribute(attrId) {
    if (!attrId || attrId === 'all') return this.spirits;
    return this.spirits.filter(s => {
      const attr = s.attribute;
      if (Array.isArray(attr)) return attr.includes(attrId);
      return attr === attrId;
    });
  },

  filterByEggGroup(groupId) {
    if (!groupId || groupId === 'all') return this.spirits;
    return this.spirits.filter(s => s.eggGroup && s.eggGroup.includes(groupId));
  },

  filterByStage(stage) {
    if (!stage || stage === 0) return this.spirits;
    return this.spirits.filter(s => s.stage === stage);
  },

  getEvolutionChain(spiritId) {
    const spirit = this.getSpirit(spiritId);
    if (!spirit) return [];
    let chain = [], current = spirit;
    while (current.evolveFrom) {
      const prev = this.getSpirit(current.evolveFrom);
      if (prev) chain.unshift(prev);
      current = prev; if (chain.length > 10) break;
    }
    chain.push(spirit);
    current = spirit;
    while (current.evolvesTo && current.evolvesTo.length > 0) {
      const next = this.getSpirit(current.evolvesTo[0]);
      if (next) chain.push(next);
      current = next; if (chain.length > 10) break;
    }
    return chain;
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = RocoData;
