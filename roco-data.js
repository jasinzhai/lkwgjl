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
// - 公测版本共347只精灵
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
  // 公测版本(2026.04) 共347只精灵 (NO.001~NO.347)
  spirits: [

    // ══════════════ 001-010 初始三主宠 & 基础精灵 ══════════════
    {id: 1, name: '迪莫',
      image:'https://patchwiki.biligame.com/images/rocom/2/25/o64cvcxq1l6tlur77xjqbwx2s4imabd.png', ename: 'Dimo',
      attribute: 'light', eggGroup: ['none'],
      heightMin: 0.54, heightMax: 0.78, weightMin: 5.5, weightMax: 7,
      stage: 1, region: '叽叽喳喳台地',
      trait: '最好的伙伴 — 造成克制伤害后，获得攻防速+20%，并回复2能量。', evolvesTo: null, evolvesFrom: null,
      desc: '永远的伙伴。在特殊魔力的影响下会改变自身的身体构造。'
        + '——手游初始剧情获得，无法进化。'
    ,
        battle: {
          trait: '最好的伙伴',
          tier: 'T0',
          recommend: 'PVE核心输出/PVP多属性打击手。特性"最好的伙伴"造成克制伤害后攻防速+20%并回2能量。',
          pairing: ["罗隐","翠顶夫人","燃薪虫","尖嘴狐仙"],
          teams: ["万金油PVP","克制输出队","越级挑战"],
          skills: {
            pve: [
                    { name: '放晴', type: '光', pp: 3, power: '-', effect: '光系技能威力永久+50%，应对防御改为+100%。核心强化技。' },
            { name: '光刃', type: '光', pp: 3, power: '120(物攻)', effect: '威力120物攻，放晴后伤害翻倍。主要输出手段。' },
            { name: '超导', type: '电', pp: 4, power: '95(魔攻)', effect: '迸发-1，低能耗补刀。' },
            { name: '闪光', type: '光', pp: 4, power: '-', effect: '降低敌方命中率，生存过渡。' }
            ],
            pvp: [
                    { name: '折射', type: '光', pp: 4, power: '50(魔攻)', effect: '携带其他系别技能获得不同效果加成。战术核心。' },
            { name: '过曝', type: '光', pp: 4, power: '60(魔攻)', effect: '每使用1个其他系别技能威力永久+30，后期爆发。' },
            { name: '漫反射', type: '普通', pp: 3, power: '-', effect: '每种至多1个技能威力+35，变相强化多属性输出。' },
            { name: '冰爪', type: '冰', pp: 4, power: '-', effect: '非光系技能触发折射/过曝效果。可换热砂/念力膨胀。' }
            ]
          }
        }
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
      trait: '氧循环 — 使用草系技能后，回复10%生命。',
      evolvesTo: [4], evolvesFrom: 2,
      desc: '喵喵16级进化的形态，尾巴更加有力，能感知周围的草木气息。'
    },
    {
      id: 4, name: '魔力猫',
      image:'https://patchwiki.biligame.com/images/rocom/3/34/swx8tx6o3mpyfnqrkxu1kth6sgzott2.png', ename: 'MagicalCat',
      attribute: 'grass', eggGroup: ['animal', 'humanoid'], // 含叶冕形态
      heightMin:1.5,heightMax:2.15,weightMin:105.0,weightMax:125.0,
      stage: 3, region: '-',
      trait: '氧循环 — 使用草系技能后，回复10%生命。',
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
      trait: '助燃 — 使用火系技能后，获得双攻+20%。',
      evolvesTo: [7], evolvesFrom: 5,
      desc: '火花16级进化。火焰变得更加猛烈，全身被高温火焰包裹。'
    },
    {id: 7, name: '火神',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/jzel7fdbrw66zvccwcx4ekg72d66m21.png', ename: 'FireGod', // 存在烈火战神形态
      attribute: 'fire', eggGroup: ['monster', 'magic'],
      heightMin:1.52,heightMax:2.18,weightMin:90.5,weightMax:110.0,
      stage: 3, region: '-',
      trait: '助燃 — 使用火系技能后，获得双攻+20%。',
      evolvesTo: null, evolvesFrom: 6,
      desc: '焰火36级进化的最终形态。掌控烈焰的火焰主宰者，存在"烈火战神"的终极进化形态。'
    ,
        battle: {
          trait: '助燃',
          tier: 'T0',
          recommend: 'PVE山火无限成长流/PVP热身闪燃爆发流。版本最强物攻爆发之一。特性"助燃"使用火系技能后双攻+20%。',
          pairing: ["化蝶","燃薪虫","迪莫","恶魔狼"],
          teams: ["爆发输出队","PVP秒杀队"],
          skills: {
            pve: [
                    { name: '山火', type: '火', pp: 4, power: '-', effect: '每使用1次其他火系技能威力永久翻倍！PVE绝对核心。' },
            { name: '吹火', type: '火', pp: 4, power: '-', effect: '低能耗火系技能，快速叠山火层数并回能。' },
            { name: '火云车', type: '火', pp: 3, power: '140(物攻)', effect: '超高威力140物攻，配合特性和山火层数伤害爆炸。' },
            { name: '热身', type: '武', pp: 3, power: '-', effect: '下一次攻击技能威力翻倍（应对防御变为4倍）。' }
            ],
            pvp: [
                    { name: '闪燃', type: '火', pp: 4, power: '60(物攻)', effect: '应对状态本次技能威力变为4倍！瞬发爆发的关键。' },
            { name: '热身', type: '武', pp: 3, power: '-', effect: '赋予状态：下一次攻击威力翻倍，闪燃前置BUFF。' },
            { name: '晒太阳', type: '火', pp: 3, power: '-', effect: '驱散敌方所有增益！PVP解场神技。' },
            { name: '火云车', type: '火', pp: 3, power: '140(物攻)', effect: '稳定高伤收割，特性双攻加持下伤害可观。' }
            ]
          }
        }
      },

    {
      id: 8, name: '水蓝蓝',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/km91vn87f93y9ukj6ir6wsc4dl8shx1.png', ename: 'ShuiLanLan',
      attribute: 'water', eggGroup: ['amphibian', 'magic'],
      heightMin:0.45,heightMax:0.65,weightMin:2.85,weightMax:4.21,
      stage: 1, region: '-',
      trait: '浸润 — 使用水系技能后，全技能能耗-1。',
      evolvesTo: [9], evolvesFrom: null,
      desc: '活泼可爱的水系初始精灵，最喜欢在清澈的水中嬉戏玩耍。'
    },
    {
      id: 9, name: '波波拉',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/km91vn87f93y9ukj6ir6wsc4dl8shx1.png', ename: 'BoBoLa',
      attribute: 'water', eggGroup: ['amphibian', 'magic'],
      heightMin:0.72,heightMax:1.03,weightMin:29.5,weightMax:34.0,
      stage: 2, region: '-',
      trait: '浸润 — 使用水系技能后，全技能能耗-1。',
      evolvesTo: [10], evolvesFrom: 8,
      desc: '水蓝蓝进化后掌握了更多水系魔法，能制造水幕保护自己。'
    },
    {id: 10, name: '水灵',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/km91vn87f93y9ukj6ir6wsc4dl8shx1.png', ename: 'WaterSpirit',
       attribute: 'water', eggGroup: ['amphibian', 'magic'],
      heightMin:1.08,heightMax:1.54,weightMin:77.0,weightMax:85.5,
      stage: 3, region: '-',
      trait: '浸润 — 使用水系技能后，全技能能耗-1。',
      evolvesTo: null, evolvesFrom: 9,
      desc: '纯净的水元素化身，拥有净化万物的能力。'
    ,
        battle: {
          trait: '圣水守护',
          tier: 'T0',
          recommend: 'PVE降耗无限连发流/PVP消耗压制流。特攻型肉盾，魔防132极高。特性"浸润"使用水系技能后全技能能耗-1。',
          pairing: ["圆号鱼","翠顶夫人","白金独角兽","号儿鱼"],
          teams: ["消耗战队伍","雨天队","PVE稳定推图"],
          skills: {
            pve: [
                    { name: '涌泉', type: '水', pp: 4, power: '60(魔攻)', effect: '能耗每-1威力+10。特性加持后期威力极高，PVE最强技。' },
            { name: '水炮', type: '水', pp: 4, power: '110(魔攻)', effect: '每次使用后能耗永久-1。配合特性越打越快。' },
            { name: '洗礼', type: '水', pp: 3, power: '-', effect: '驱散自身减益并获得全技能能耗-1。解控+启动。' },
            { name: '落雨', type: '水', pp: 4, power: '-', effect: '将天气改为雨天持续8回合，配合水系技能增益环境。' }
            ],
            pvp: [
                    { name: '水炮', type: '水', pp: 4, power: '110(魔攻)', effect: '核心输出，特性+被动永久降低能耗，频繁压制对手。' },
            { name: '潮汐', type: '水', pp: 3, power: '-', effect: '防御技能获得湿润印记，叠加减伤和续航。' },
            { name: '洗礼', type: '水', pp: 3, power: '-', effect: '驱散Debuff进一步降耗，保证持续作战能力。' },
            { name: '泡沫幻影', type: '水', pp: 3, power: '-', effect: '减伤并脱离（换人规避致命伤害）。紧急逃生用。' }
            ]
          }
        }
      },

    // ══════════════ 011-020 鸭吉吉 / 板板壳 / 锥尾羊 ══════════════
    {id: 11, name: '鸭吉吉',
      image:'https://patchwiki.biligame.com/images/rocom/9/9b/lsgonow9dtf4nlte0094yq43stn0nrv.png', ename: 'YaJiJi',
      attribute: 'normal', eggGroup: ['flying', 'amphibian'],
      heightMin:0.65,heightMax:0.94,weightMin:14.6,weightMax:17.6,
      stage: 1, region: '-',
      trait: '“国王”的威严 — 鸭吉吉国王的种族资质大幅增加，能耗为1的技能威力+50%。',
      forms: ['蓬松的样子','紧实的样子','急急急鸭','等一等鸭','起来鸭','燃了鸭'],
      evolvesTo: null, evolvesFrom: null,
      desc: '走路摇摇摆摆的小鸭子，有6种不同的表情/形态变化。'
    ,
        battle: {
          trait: '荟萃载体',
          tier: 'T1',
          recommend: 'PVP控制干扰手。萌系稀有属性，荟萃+国王威严控制能力强。',
          pairing: ["嘟嘟锅","雪灵","伊贝儿"],
          teams: ["PVP控制队"],
          skills: {
            pve: [
                    { name: '荟萃', type: '萌', pp: 3, power: '-', effect: '恢复生命值并提升全属性。核心续航强化技。' },
            { name: '国王的威严', type: '萌', pp: 3, power: '-', effect: '降低敌方全属性并造成固定伤害。强力Debuff。' },
            { name: '扑击', type: '普通', pp: 4, power: '-', effect: '先手物攻技能，用于收割或打断。' },
            { name: '嘎嘎叫', type: '萌', pp: 3, power: '-', effect: '降低敌方攻击，生存向技能。' }
            ],
            pvp: [
                    { name: '荟萃', type: '萌', pp: 3, power: '-', effect: '恢复+强化，中转时使用。' },
            { name: '国王的威严', type: '萌', pp: 3, power: '-', effect: '削弱敌方核心输出能力。' },
            { name: '扑击', type: '普通', pp: 4, power: '-', effect: '先手击杀残血目标。' },
            { name: '防御', type: '武', pp: 4, power: '-', effect: '减伤70%应对BOSS大招。' }
            ]
          }
        }
      },
    { id: 12, name: '板板壳', ename: 'PlateShell',  attribute:'water',eggGroup:['amphibian','soft'], heightMin:0.53,heightMax:0.76,weightMin:7.5,weightMax:10.5,stage:1,region:'-',trait: '缩壳 — 携带的防御技能能耗-2。',forms:['本来的样子','蜕皮时的样子'],evolvesTo:[13],evolvesFrom:null,desc:'背着重重外壳的水系精灵，行动缓慢但防御力极强。' },
    { id: 13, name: '咔咔壳', ename: 'KaKaShell',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.013_咔咔壳（本来的样子）.webp',  attribute:'water',eggGroup:['amphibian','soft'], heightMin:0.65,heightMax:0.92,weightMin:19.5,weightMax:24.5,stage:2,region:'-',trait: '缩壳 — 携带的防御技能能耗-2。',forms:['本来的样子','蜕皮时的样子'],evolvesTo:[14],evolvesFrom:12,desc:'板板壳进化而来，壳变得更坚硬，钳子也有力量了。' },
    {id: 14, name: '水泡壳', ename: 'BubbleShell',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.014_水泡壳（本来的样子）.webp',  attribute:'water',eggGroup:['amphibian','soft'], heightMin:1.23,heightMax:1.75,weightMin:83.5,weightMax:94.5,stage:3,region:'-',trait: '缩壳 — 携带的防御技能能耗-2。',forms:['本来的样子','蜕皮时的样子'],evolvesTo:null,evolvesFrom:13,desc:'咔咔壳最终进化，巨大的水泡壳能抵御强力的攻击。',
        battle: {
          trait: '缩壳:携带防御技能能耗-2',
          tier: 'T1',
          recommend: 'PVP水系坦克/消耗流。缩壳特性配合防御技能极致减耗，水炮越打越快。魔防134物防107优秀双防面板。',
          pairing: ["罗隐","翠顶夫人","水灵"],
          teams: ["水属性队","坦克消耗队"],
          skills: {
            pve: [
                    { name: '水炮', type: '水', pp: 4, power: '110(魔攻)', effect: '高威力魔攻核心输出，每次使用后本技能能耗-1。' },
            { name: '压扁', type: '普通', pp: 4, power: '80(物攻)', effect: '物攻补刀技能。' },
            { name: '刚贝壳', type: '水', pp: 3, power: '-', effect: '大幅提升物防，配合缩壳低能耗。核心防守技。' },
            { name: '肥皂泡', type: '水', pp: 4, power: '-', effect: '降低敌方魔攻，消耗型控制技能。' }
            ],
            pvp: [
                    { name: '水炮', type: '水', pp: 4, power: '110(魔攻)', effect: '主输出，特性加持下能耗递减越打越快。' },
            { name: '刚贝壳', type: '水', pp: 3, power: '-', effect: '缩壳特性下仅耗1点，超高性价比强化。' },
            { name: '肥皂泡', type: '水', pp: 4, power: '-', effect: '降魔攻限制法师。' },
            { name: '压扁', type: '普通', pp: 4, power: '80(物攻)', effect: '物攻手段防止被完全封死。' }
            ]
          }
        }
      },

    // 锥尾羊进化链 (NO.015~017) - 手游独有
    { id: 15, name: '锥尾羊',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/c9kn29sskgdppe1ipgd7ooyioj90dyt.png', ename: 'ConicTailSheep',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.015_锥尾羊.webp',attribute:'ghost',eggGroup:['animal'],heightMin:0.57,heightMax:0.81,weightMin:13.3,weightMax:16.5,stage:1,region:'-',trait: '碰瓷 — 自己使用恶系技能后，敌方失去2能量。',evolvesTo:[16],evolvesFrom:null,desc:'尾巴呈锥状的小绵羊，性格温顺可爱。' },
    { id: 16, name: '铃兰羊',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/c9kn29sskgdppe1ipgd7ooyioj90dyt.png', ename: 'LilySheep',    attribute:'ghost',eggGroup:['animal'],heightMin:0.7,heightMax:1.01,weightMin:29.0,weightMax:36.0,stage:2,region:'-',trait: '碰瓷 — 自己使用恶系技能后，敌方失去2能量。',evolvesTo:[17],evolvesFrom:15,desc:'铃兰花装饰的羊儿，身上散发着淡淡的清香。' },
    { id: 17, name: '花影羚羊',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/c9kn29sskgdppe1ipgd7ooyioj90dyt.png',ename: 'FlowerShadowAntelope',attribute:['ghost','dark'],eggGroup:['animal'],heightMin:1.42,heightMax:1.92,weightMin:76.9,weightMax:98.0,stage:3,region:'-',trait: '碰瓷 — 自己使用恶系技能后，敌方失去2能量。',evolvesTo:null,evolvesFrom:16,desc: '花影斑驳的高贵羚羊，速度极快如风中的花瓣。' },

    // 雪绒鸟进化链 + 四季形态 (NO.018~020)
    { id: 18, name: '雪绒鸟',ename:'SnowfluffBird',attribute:'flying',eggGroup:['flying','amphibian'],heightMin:0.38,heightMax:0.51,weightMin:2.77,weightMax:4.5,stage:1,region:'-',trait: '顺风 — 若先于敌方攻击，本次技能威力+50%。',forms:['本来的样子','春天的样子','夏天的样子','秋天的样子'],evolvesTo:[19],evolvesFrom:null,desc:'全身覆盖着如雪般洁白羽毛的小鸟，有4种季节形态。' },
    { id: 19, name: '冬羽雀',ename:'WinterfeatherSparrow',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.019_冬羽雀（本来的样子）.webp',attribute:'flying',eggGroup:['flying','amphibian'],heightMin:0.62,heightMax:0.71,weightMin:8.92,weightMax:12.7,stage:2,region:'-',trait: '顺风 — 若先于敌方攻击，本次技能威力+50%。',forms:['本来的样子','春天的样子','夏天的样子','秋天的样子'],evolvesTo:[20],evolvesFrom:18,desc:'羽毛如同冬日冰晶般闪耀的雀鸟。' },
    { id: 20, name: '岚鸟',  ename:'LanBird',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.020_岚鸟（本来的样子）.webp',         attribute:'flying',eggGroup:['flying','amphibian'],heightMin:1.43,heightMax:2.04,weightMin:27.08,weightMax:32.7,stage:3,region:'-',trait: '顺风 — 若先于敌方攻击，本次技能威力+50%。',forms:['本来的样子','春天的样子','夏天的样子','秋天的样子'],evolvesTo:null,evolvesFrom:19,desc:'掌控风雪的冰雪之鸟，四季皆有其独特姿态。' },

    // ══════════════ 021-030 小灵菇 / 石肤蜥 / 布是石 ══════════════
    { id: 21, name: '小灵菇',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/ltybffbpudghq5tx60h70gy1vdj5xpa.png',ename:'XiaoLingGu',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.021_小灵菇.webp',   attribute:'ghost',eggGroup:['plant','magic'],heightMin:0.43,heightMax:0.61,weightMin:5.4,weightMax:7.1,stage:1,region:'-',trait: '毒蘑菇 — 回合结束时，偷取敌方场上所有精灵1能量。',evolvesTo:[22],evolvesFrom:null,desc:'会发光的小蘑菇，在夜晚能指引方向。' },
    { id: 22, name: '幻灵菇',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/ltybffbpudghq5tx60h70gy1vdj5xpa.png',ename:'HuanLingGu',   attribute:['ghost','grass'],eggGroup:['plant','magic'],heightMin:0.64,heightMax:0.92,weightMin:13.2,weightMax:16.5,stage:2,region:'-',trait: '毒蘑菇 — 回合结束时，偷取敌方场上所有精灵1能量。',evolvesTo:[23],evolvesFrom:21,desc:'释放孢子能让敌人陷入幻觉。' },
    { id: 23, name: '幻影灵菇',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/ltybffbpudghq5tx60h70gy1vdj5xpa.png',ename:'HuanYingLingGu',attribute:['ghost','grass'],eggGroup:['plant','magic'],heightMin:0.92,heightMax:1.32,weightMin:39.4,weightMax:48.4,stage:3,region:'-',trait: '毒蘑菇 — 回合结束时，偷取敌方场上所有精灵1能量。',evolvesTo:null,evolvesFrom:22,desc:'能够制造逼真幻影的神秘蘑菇。' },

    // 石肤蜥进化链 (NO.024~026)
    { id: 24, name: '石肤蜥',ename:'StoneSkinLizard',attribute:'ground',eggGroup:['amphibian','mineral'],heightMin:0.49,heightMax:0.7,weightMin:21.0,weightMax:34.0,stage:1,region:'-',trait: '刺肤 — 每受到1次攻击，对攻击自己的精灵造成50威力物理伤害。',forms:['本来的样子','球球尾巴的样子'],evolvesTo:[25],evolvesFrom:null,desc:'皮肤像岩石一样坚硬的小蜥蜴。' },
    { id: 25, name: '石刺蜥',ename:'StoneSpikeLizard',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.025_石刺蜥（本来的样子）.webp',attribute:'ground',eggGroup:['amphibian','mineral'],heightMin:0.67,heightMax:0.96,weightMin:59.5,weightMax:70.5,stage:2,region:'-',trait: '刺肤 — 每受到1次攻击，对攻击自己的精灵造成50威力物理伤害。',forms:['本来的样子','球球尾巴的样子'],evolvesTo:[26],evolvesFrom:24,desc:'身上长出尖刺的石质蜥蜴。' },
    { id: 26, name: '石冠王蜥',ename:'StoneCrownKingLizard',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.026_石冠王蜥（本来的样子）.webp',attribute:'ground',eggGroup:['amphibian','mineral'],heightMin:0.94,heightMax:1.18,weightMin:78.5,weightMax:98.5,stage:3,region:'-',trait: '刺肤 — 每受到1次攻击，对攻击自己的精灵造成50威力物理伤害。',forms:['本来的样子','球球尾巴的样子'],evolvesTo:null,evolvesFrom:25,desc:'头顶石冠的蜥蜴王者。' },

    // 布是石进化链 (NO.027~029)
    { id: 27, name: '布是石',
      image:'https://patchwiki.biligame.com/images/rocom/8/89/n2olozya089rge7wuokp3nazl44xqst.png',ename:'BuShiShi',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.027_布是石.webp',      attribute:'ground',eggGroup:['monster','mineral'],heightMin:0.42,heightMax:0.6,weightMin:18.5,weightMax:32.5,stage:1,region:'-',trait: '地脉 — 初始能量为0，入场前己方精灵每放1次地系技能，回复3能量。',evolvesTo:[28],evolvesFrom:null,desc:'由布料和石头构成的奇妙精灵。' },
    { id: 28, name: '布是岩',
      image:'https://patchwiki.biligame.com/images/rocom/8/89/n2olozya089rge7wuokp3nazl44xqst.png',ename:'BuShiYan',      attribute:'ground',eggGroup:['monster','mineral'],heightMin:0.93,heightMax:1.34,weightMin:97.5,weightMax:115.0,stage:2,region:'-',trait: '地脉 — 初始能量为0，入场前己方精灵每放1次地系技能，回复3能量。',evolvesTo:[29],evolvesFrom:27,desc:'身体变得更加岩石化。' },
    { id: 29, name: '布克棱岩',
      image:'https://patchwiki.biligame.com/images/rocom/8/89/n2olozya089rge7wuokp3nazl44xqst.png',ename:'BuKeRock',     attribute:'ground',eggGroup:['monster','mineral'],heightMin:1.75,heightMax:2.5,weightMin:287.0,weightMax:315.0,stage:3,region:'-',trait: '地脉 — 初始能量为0，入场前己方精灵每放1次地系技能，回复3能量。',evolvesTo:null,evolvesFrom:28,desc:'全身由坚硬棱岩构成的大块头守护者。' },

    { id: 30, name: '恶魔叮',
      image:'https://patchwiki.biligame.com/images/rocom/1/1e/dup0zejk454blppyqq2c2q7mnym6s4s.png',ename:'DevilDing',     attribute:['dark','flying'],eggGroup:['fairy'],heightMin:0.39,heightMax:0.56,weightMin:3.6,weightMax:5.2,stage:1,region:'-',trait: '渴求 — 入场时获得50%吸血。',evolvesTo:[31],evolvesFrom:null,desc:'长着小翅膀的恶魔精灵。叮叮作响时代表它心情不错。' },
    { id: 31, name: '叮叮恶魔',
      image:'https://patchwiki.biligame.com/images/rocom/1/1e/dup0zejk454blppyqq2c2q7mnym6s4s.png',ename:'DingDingDemon',attribute:['dark','flying'],eggGroup:['fairy'],heightMin:0.78,heightMax:1.12,weightMin:25.0,weightMax:34.0,stage:2,region:'-',trait: '渴求 — 入场时获得50%吸血。',evolvesTo:null,evolvesFrom:30,desc:'恶魔叮进化后的更强大形态。' },

    // ══════════════ 032-046 更多基础精灵 ══════════════
    { id: 32, name: '毛毛',
      image:'https://patchwiki.biligame.com/images/rocom/a/af/owgmiaowlsk52x3cjatoiowp9hq4d4u.png',  ename:'MaoMao',  attribute:['bug','cute'],eggGroup:['insect','soft'],heightMin:0.31,heightMax:0.45,weightMin:3.0,weightMax:4.5,stage:1,region:'-',trait: '化茧 — 受到致命伤害时，获得1层萌化，并免疫此次伤害。',evolvesTo:[33,34],evolvesFrom:null,desc:'努力成长的小毛虫。进化分支取决于环境。' },
    { id: 33, name: '爬爬',
      image:'https://patchwiki.biligame.com/images/rocom/a/af/owgmiaowlsk52x3cjatoiowp9hq4d4u.png',  ename:'PaPa',   attribute:['bug','cute'],eggGroup:['insect','soft'],heightMin:0.35,heightMax:0.51,weightMin:5.5,weightMax:8.4,stage:2,region:'-',trait: '化茧 — 受到致命伤害时，获得1层萌化，并免疫此次伤害。',evolvesTo:null,evolvesFrom:32,desc:'缓慢爬行的幼虫阶段。' },
    {id: 34, name: '化蝶',  ename:'Butterfly',attribute:['bug','cute'],eggGroup:['insect','flying'],heightMin:0.76,heightMax:1.08,weightMin:15.6,weightMax:17.8,stage:2,region:'-',trait: '化茧 — 受到致命伤害时，获得1层萌化，并免疫此次伤害。',forms:['平常的样子','幽冥眼的样子','喵喵的样子','奇丽花的样子'],evolvesTo:null,evolvesFrom:32,desc:'破茧成蝶的美丽形态！有多种拟态外观。' ,
        battle: {
          trait: '虫生奇迹',
          tier: 'T1',
          recommend: 'PVE火系拟态输出/PVP大字爆炎爆发。虫生奇迹免死机制强，可多次免死堆尸高难度BOSS。',
          pairing: ["火神","燃薪虫","星光狮","毛头小蛛"],
          teams: ["越级挑战队","免死堆尸队"],
          skills: {
            pve: [
                    { name: '烈焰冲撞', type: '火', pp: 4, power: '90(物攻)', effect: '高威力火系物攻，主要输出。' },
            { name: '火焰旋涡', type: '火', pp: 4, power: '45(魔攻)', effect: '低能耗火系魔攻，叠层或补刀用。' },
            { name: '喷烟', type: '火', pp: 3, power: '70(魔攻)', effect: '中等威力魔攻输出。' },
            { name: '火花溅射', type: '火', pp: 4, power: '60(魔攻)', effect: 'AOE或多目标伤害技能。' }
            ],
            pvp: [
                    { name: '烈焰冲撞', type: '火', pp: 4, power: '90(物攻)', effect: '主力物攻输出。' },
            { name: '大字爆炎', type: '火', pp: 4, power: '110(魔攻)', effect: '超高威力火系魔攻必杀，爆发终结。' },
            { name: '火焰旋涡', type: '火', pp: 4, power: '45(魔攻)', effect: '低能耗过渡。' },
            { name: '喷烟', type: '火', pp: 3, power: '70(魔攻)', effect: '中等伤害补充。' }
            ]
          }
        }
      },
    { id: 35, name: '幽影树',
      image:'https://patchwiki.biligame.com/images/rocom/4/42/h8x8d49z7tbq02dibjv2lgnvk344pb7.png',ename:'GhostTree',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.035_幽影树.webp',   attribute:['ghost','grass'],eggGroup:['fairy','plant'],heightMin:0.64,heightMax:0.92,weightMin:29.5,weightMax:37.5,stage:2,region:'-',trait: '小偷小摸 — 入场时偷取所有敌方精灵2能量。',evolvesTo:null,evolvesFrom:null,desc:'被黑暗力量侵蚀的树木精灵。' },

    { id: 36, name: '小鼠獭',
      image:'https://patchwiki.biligame.com/images/rocom/7/71/mhtudimorxc3o9un25icovvi9lahiza.png',ename:'XiaoShuTa',   attribute:['normal','water'],eggGroup:['animal','amphibian'],heightMin:0.37,heightMax:0.53,weightMin:6.7,weightMax:7.5,stage:1,region:'-',trait: '保守派 — 总技能能耗小于4时，自己获得双防+80%。',evolvesTo:[37],evolvesFrom:null,desc:'机灵的小型水獭精灵，游泳技术一流。' },
    { id: 37, name: '燕尾獭',
      image:'https://patchwiki.biligame.com/images/rocom/7/71/mhtudimorxc3o9un25icovvi9lahiza.png',ename:'YanWeiTa',    attribute:['normal','water'],eggGroup:['animal','amphibian'],heightMin:0.61,heightMax:0.88,weightMin:28.6,weightMax:31.5,stage:2,region:'-',trait: '保守派 — 总技能能耗小于4时，自己获得双防+80%。',evolvesTo:[38],evolvesFrom:36,desc:'尾巴像燕子尾巴一样美丽的獭。' },
    { id: 38, name: '卷胡巨獭',
      image:'https://patchwiki.biligame.com/images/rocom/7/71/mhtudimorxc3o9un25icovvi9lahiza.png',ename:'JuanHuJuTa', attribute:['normal','water'],eggGroup:['animal','amphibian'],heightMin:0.76,heightMax:1.08,weightMin:76.5,weightMax:90.0,stage:3,region:'-',trait: '保守派 — 总技能能耗小于4时，自己获得双防+80%。',evolvesTo:null,evolvesFrom:37,desc:'留着卷曲胡须的巨大水獭首领。' },

    { id: 39, name: '矿晶虫',
      image:'https://patchwiki.biligame.com/images/rocom/4/4b/rakgahc3c1vonzb7l1oypg0kwmhpi3z.png',ename:'KuangJingChong',attribute:['light','ground'],eggGroup:['soft','mech'],heightMin:0.54,heightMax:0.77,weightMin:5.8,weightMax:10.53,stage:1,region:'-',trait: '偏振 — 受到自己携带技能系别的攻击伤害-40%。',evolvesTo:[40],evolvesFrom:null,desc:'以矿石为食的机械幼虫。' },
    { id: 40, name: '晶石蜗',ename:'JingShiWo',    attribute:['light','ground'],eggGroup:['soft','mech','mineral'],heightMin:1.03,heightMax:1.35,weightMin:59.1,weightMax:71.05,stage:2,region:'-',trait: '偏振 — 受到自己携带技能系别的攻击伤害-40%。',forms:['西瓜碧玺','莲花刚玉','星彩榴石','火山琉璃','蓝锥矿','烧蓝黄金的样子'],evolvesTo:null,evolvesFrom:39,desc:'背上镶嵌闪亮水晶的蜗牛。有6种宝石形态！' },

    // 奇丽草进化链
    { id: 41, name: '奇丽草',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/kv2w95rommythz2es62viqib0edez2m.png',ename:'BeautifulGrass',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.041_奇丽草.webp',attribute:'grass',eggGroup:['plant'],heightMin:0.38,heightMax:0.55,weightMin:4.1,weightMax:5.7,stage:1,region:'-',trait: '养分重吸收 — 回合结束时，回复3能量。',hasShiny:true,evolvesTo:[42],evolvesFrom:null,desc:'花朵异常艳丽的草系精灵。存在异色形态。' },
    { id: 42, name: '奇丽叶',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/kv2w95rommythz2es62viqib0edez2m.png',ename:'BeautifulLeaf', attribute:'grass',eggGroup:['plant'],heightMin:0.62,heightMax:0.89,weightMin:24.0,weightMax:31.0,stage:2,region:'-',trait: '养分重吸收 — 回合结束时，回复3能量。',evolvesTo:[43],evolvesFrom:41,desc:'叶片如宝石般闪耀的植物战士。' },
    {id: 43, name: '奇丽花',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/kv2w95rommythz2es62viqib0edez2m.png',ename:'BeautifulFlower',attribute:'grass',eggGroup:['plant'],heightMin:1.11,heightMax:1.58,weightMin:42.0,weightMax:58.0,stage:3,region:'-',trait: '养分重吸收 — 回合结束时，回复3能量。',evolvesTo:null,evolvesFrom:42,desc:'盛开花朵的华丽花妖精。' ,
        battle: {
          trait: '进化之力',
          tier: 'T1',
          recommend: 'PVE草系持续输出/消耗战。自然之愈续航能力强。',
          pairing: ["翠顶夫人","绒光优优","蹦床松鼠"],
          teams: ["消耗队","草系队伍"],
          skills: {
            pve: [
                    { name: '飞叶快刀', type: '草', pp: 4, power: '65(物攻)', effect: '稳定草系物攻输出。' },
            { name: '藤蔓鞭打', type: '草', pp: 4, power: '75(物攻)', effect: '较高威力物攻，主力输出。' },
            { name: '花粉弥漫', type: '草', pp: 3, power: '-', effect: '使敌方陷入异常状态或降低命中。控制技。' },
            { name: '自然之愈', type: '草', pp: 3, power: '-', effect: '恢复大量生命值。核心续航技能。' }
            ],
            pvp: [
                    { name: '飞叶快刀', type: '草', pp: 4, power: '65(物攻)', effect: '稳定输出。' },
            { name: '藤蔓鞭打', type: '草', pp: 4, power: '75(物攻)', effect: '主力伤害。' },
            { name: '花粉弥漫', type: '草', pp: 3, power: '-', effect: '控制干扰对手。' },
            { name: '自然之愈', type: '草', pp: 3, power: '-', effect: '持久战续航保障。' }
            ]
          }
        }
      },

    // 丢丢系列 - 地区形态 (NO.044~046)
    { id: 44, name: '丢丢',  ename:'DiuDiu', attribute:'grass',eggGroup:['plant','amphibian'],heightMin:0.35,heightMax:0.51,weightMin:4.3,weightMax:6.1,stage:1,region:'-',trait:'-',forms:['草地附近的样子','沙地附近的样子','雪山附近的样子','火山附近的样子'],evolvesTo:[45],evolvesFrom:null,desc:'总是丢三落四的小种子精灵。有4种地区形态。' },
    { id: 45, name: '卡卡虫',ename:'KaKaChong',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.045_卡卡虫（草地附近的样子）.webp',   attribute:'grass',eggGroup:['insect','amphibian'],heightMin:0.53,heightMax:0.76,weightMin:18.5,weightMax:21.6,stage:1,region:'-',trait:'-',forms:['草地附近的样子','沙地附近的样子','雪山附近的样子','火山附近的样子'],evolvesTo:[46],evolvesFrom:null,desc:'发出咔咔声的小甲虫。同样有4种地区形态。' },
    { id: 46, name: '卡瓦重',ename:'KaWaZhong',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.046_卡瓦重（草地附近的样子）.webp',   attribute:'grass',eggGroup:['insect','amphibian'],heightMin:0.76,heightMax:1.09,weightMin:29.0,weightMax:35.85,stage:2,region:'-',trait:'-',forms:['草地附近的样子','沙地附近的样子','雪山附近的样子','火山附近的样子'],evolvesTo:null,evolvesFrom:45,desc:'外骨骼极其厚重的甲虫战士。' },

    { id: 47, name: '护主犬',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/t29c2r5ooabyzne8dt5uu9bzq10ibtz.png',ename:'HuZhuQuan',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.047_护主犬.webp',   attribute:'fire',eggGroup:['animal'],heightMin:0.64,heightMax:0.92,weightMin:13.6,weightMax:17.5,stage:1,region:'-',trait: '专注力 — 入场首回合，获得物攻+100%。',evolvesTo:[48],evolvesFrom:null,desc:'忠诚可靠的守护犬，拼死保护主人。' },
    { id: 48, name: '音速犬',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/t29c2r5ooabyzne8dt5uu9bzq10ibtz.png',ename:'YinSuQuan',   attribute:'fire',eggGroup:['animal'],heightMin:1.13,heightMax:1.62,weightMin:39.5,weightMax:51.5,stage:2,region:'-',trait: '专注力 — 入场首回合，获得物攻+100%。',evolvesTo:null,evolvesFrom:47,desc:'奔跑速度极快，能追上疾驰车辆的神犬。' },

    { id: 49, name: '绿耳松鼠',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/2foanarop7ik9wf1aqo37m7rdr3ug39.png',ename:'LvErSongShu', attribute:'normal',eggGroup:['animal'],heightMin:0.47,heightMax:0.68,weightMin:3.5,weightMax:6.0,stage:1,region:'-',trait: '囤积 — 每有1能量，获得双防+10%。',evolvesTo:[50],evolvesFrom:null,desc:'耳朵是绿色的小松鼠，敏捷度极高。' },
    { id: 50, name: '抱枕松鼠',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/2foanarop7ik9wf1aqo37m7rdr3ug39.png',ename:'BaoZhenSongShu',attribute:'normal',eggGroup:['animal'],heightMin:0.6,heightMax:0.84,weightMin:21.05,weightMax:27.08,stage:2,region:'-',trait: '囤积 — 每有1能量，获得双防+10%。',evolvesTo:[51],evolvesFrom:49,desc:'身体软绵绵像抱枕一样。' },
    {id: 51, name: '蹦床松鼠',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/2foanarop7ik9wf1aqo37m7rdr3ug39.png',ename:'BengChuangSongShu',attribute:'normal',eggGroup:['animal'],heightMin:0.78,heightMax:1.12,weightMin:47.5,weightMax:68.4,stage:3,region:'-',trait: '囤积 — 每有1能量，获得双防+10%。',evolvesTo:null,evolvesFrom:50,desc:'尾巴像弹簧一样可以弹跳很高的松鼠。' ,
        battle: {
          trait: '囤积:每有1能量获得双防+10%(满层700种族值)',
          tier: 'T0',
          recommend: 'PVP物理坦克/反击流。囤积特性叠双防至1025种族值！气势一击+追打的反击链，吓退+有效预防的生存体系。被称为"松鼠大帝"。',
          pairing: ["奇丽花","画间沉铁兽","绒光优优"],
          teams: ["物理坦克队","反击队","消耗队"],
          skills: {
            pve: [
                    { name: '气势一击', type: '普通', pp: 3, power: '-', effect: '应对成功后下次威力+100%。核心爆发前置技。' },
            { name: '追打', type: '武', pp: 4, power: '-', effect: '后手攻击，若上回合被攻击则威力翻倍。' },
            { name: '有效预防', type: '武', pp: 3, power: '-', effect: '大幅减伤并反弹部分伤害。坦克核心。' },
                    { name: '吓退', type: '普通', pp: 4, power: '-', effect: '减伤80%并使敌方脱离。保命换人用。' }
            ],
            pvp: [
                    { name: '气势一击', type: '普通', pp: 3, power: '-', effect: '蓄力爆发，配合囤积高防站场后释放。' },
            { name: '追打', type: '武', pp: 4, power: '-', effect: '被攻击后反打，威力翻倍。' },
            { name: '有效预防', type: '武', pp: 3, power: '-', effect: '硬抗伤害+减伤。囤积满后几乎无伤。' },
            { name: '吓退', type: '普通', pp: 4, power: '-', effect: '紧急脱离或逼换。' }
            ]
          }
        }
      },

    // 嘟嘟煲系列 (NO.052~053)
    { id: 52, name: '嘟嘟煲',
      image:'https://patchwiki.biligame.com/images/rocom/4/44/8gr1vgk1hjf59enrdxyhboe35g8rijd.png',ename:'DuDuPot',     attribute:'poison',eggGroup:['fairy'],heightMin:0.65,heightMax:0.8,weightMin:48.5,weightMax:56.0,stage:1,region:'-',trait: '复方汤剂 — 回合结束时，中毒效果触发次数+1。',evolvesTo:[53],evolvesFrom:null,desc:'外形像个煲汤锅的可爱精灵。' },
    {id: 53, name: '嘟嘟锅',
      image:'https://patchwiki.biligame.com/images/rocom/4/44/8gr1vgk1hjf59enrdxyhboe35g8rijd.png',ename:'DuDuPotBig',  attribute:'poison',eggGroup:['fairy'],heightMin:0.64,heightMax:0.91,weightMin:67.9,weightMax:89.2,stage:2,region:'-',trait: '复方汤剂 — 回合结束时，中毒效果触发次数+1。',evolvesTo:null,evolvesFrom:52,desc:'嘟嘟煲进化后的更大号煲汤精灵。' ,
        battle: {
          trait: '复方汤剂:中毒触发翻倍',
          tier: 'T2',
          recommend: '趣味辅助/消耗手。独特烹饪主题技能组，复方汤剂治疗队友。',
          pairing: ["鸭吉吉","梦悠悠","卡洛儿"],
          teams: ["娱乐队","辅助消耗队"],
          skills: {
            pve: [
                    { name: '复方汤剂', type: '萌', pp: 3, power: '-', effect: '恢复队友生命值或解除状态。辅助治疗。' },
            { name: '沸腾', type: '火', pp: 3, power: '-', effect: '对敌方造成持续燃烧伤害。' },
            { name: '搅拌加速', type: '萌', pp: 3, power: '-', effect: '提升己方速度或降低敌方速度。' },
            { name: '食材投掷', type: '普通', pp: 4, power: '-', effect: '投掷食材造成伤害，可能有附加效果。' }
            ],
            pvp: [
                    { name: '复方汤剂', type: '萌', pp: 3, power: '-', effect: '中转治疗。' },
            { name: '沸腾', type: '火', pp: 3, power: '-', effect: '持续伤害压血线。' },
            { name: '搅拌加速', type: '萌', pp: 3, power: '-', effect: '调速控制。' },
            { name: '食材投掷', type: '普通', pp: 4, power: '-', effect: '补充输出。' }
            ]
          }
        }
      },

    // 小灵面进化链 (NO.054~056)
    { id: 54, name: '小灵面',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/60arfjew3ryqzrh5dqh8mi6axn595h4.png',ename:'XiaoLingMian', attribute:'ghost',eggGroup:['none'],heightMin:0.38,heightMax:0.55,weightMin:0.1,weightMax:0.55,stage:1,region:'-',trait: '惊吓 — 能量等于0的精灵，无法对自己造成伤害。',evolvesTo:[55],evolvesFrom:null,desc:'漂浮在空中的面具状幽灵。' },
    { id: 55, name: '暗影灵面',ename:'AnYingLingMian',attribute:'ghost',eggGroup:['none'],heightMin:0.75,heightMax:0.86,weightMin:0.12,weightMax:1.16,stage:2,region:'-',trait: '惊吓 — 能量等于0的精灵，无法对自己造成伤害。',forms:['睁眼的样子','闭眼的样子'],evolvesTo:[56],evolvesFrom:54,desc:'被黑暗侵蚀的面具幽灵。' },
    { id: 56, name: '幽冥眼',ename:'YouMingYan',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.056_幽冥眼（睁眼的样子）.webp',   attribute:['ghost','normal'],eggGroup:['none'],heightMin:1.55,heightMax:1.65,weightMin:1.5,weightMax:2.86,stage:3,region:'-',trait: '惊吓 — 能量等于0的精灵，无法对自己造成伤害。',forms:['睁眼的样子','闭眼的样子'],evolvesTo:null,evolvesFrom:55,desc:'独眼能看穿生死的冥界使者。' },

    // 梦游系列 (NO.057~058)
    { id: 57, name: '梦游',  ename:'SleepWalk',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.057_梦游（穿旧睡衣的样子）.webp',    attribute:'ghost',eggGroup:['fairy'],heightMin:0.5,heightMax:0.6,weightMin:0.6,weightMax:1.87,stage:1,region:'-',trait:'-',forms:['穿旧睡衣','穿星星睡衣的样子'],evolvesTo:[58],evolvesFrom:null,desc:'永远睡眼惺忪的梦游精灵。' },
    { id: 58, name: '梦悠悠',ename:'DreamFloat',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.058_梦悠悠（穿旧睡衣的样子）.webp',   attribute:'ghost',eggGroup:['fairy'],heightMin:1.0,heightMax:1.2,weightMin:1.25,weightMax:3.1,stage:2,region:'-',trait:'-',forms:['穿旧睡衣','穿星星睡衣的样子'],evolvesTo:null,evolvesFrom:57,desc:'漂浮在梦境边缘的神秘存在。' },

    // 兽花蕾 → 伏地兽 → 贪食鼹 → 巨噬针鼹 (NO.059~062)
    { id: 59, name: '兽花蕾',
      image:'https://patchwiki.biligame.com/images/rocom/f/fb/40ew1mdy3j3km17nwkdvlit9es9y39b.png',ename:'BeastBud',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.059_兽花蕾.webp',     attribute:['light','grass'],eggGroup:['plant'],heightMin:0.38,heightMax:0.45,weightMin:4.25,weightMax:6.5,stage:1,region:'-',trait: '稀兽花宝 — 根据自己的血脉，入场时获得不同效果。',evolvesTo:[60],evolvesFrom:null,desc:'像花朵一样的兽型幼崽。' },
    { id: 60, name: '伏地兽',
      image:'https://patchwiki.biligame.com/images/rocom/5/5c/tspudx138x6hgz6dth0361r383pr0ha.png',ename:'GroundBeast',   attribute:'normal',eggGroup:['monster'],heightMin:0.52,heightMax:0.74,weightMin:12.4,weightMax:15.8,stage:2,region:'-',trait: '壮胆 — 队伍存在虫系精灵，自己获得双攻+50%。',evolvesTo:[61],evolvesFrom:59,desc:'擅长潜伏在地下的猛兽。' },
    { id: 61, name: '贪食鼹',
      image:'https://patchwiki.biligame.com/images/rocom/5/5c/tspudx138x6hgz6dth0361r383pr0ha.png',ename:'GluttonyMole', attribute:'normal',eggGroup:['monster'],heightMin:0.84,heightMax:1.21,weightMin:21.6,weightMax:35.84,stage:2,region:'-',trait: '壮胆 — 队伍存在虫系精灵，自己获得双攻+50%。',evolvesTo:[62],evolvesFrom:60,desc:'贪吃无比的巨型鼹鼠。' },
    { id: 62, name: '巨噬针鼹',ename:'GiantEchidna',attribute:'normal',eggGroup:['monster'],heightMin:1.52,heightMax:1.79,weightMin:87.3,weightMax:105.0,stage:3,region:'-',trait: '壮胆 — 队伍存在虫系精灵，自己获得双攻+50%。',evolvesTo:null,evolvesFrom:61,desc:'全身覆盖巨大尖刺的超强防御型怪兽。' },

    // 蹦蹦种子系列 - 多形态 (NO.063~065)
    { id: 63, name: '蹦蹦种子',ename:'BengBengSeed',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.063_蹦蹦种子（海神球形态）.webp',attribute:['grass','poison'],eggGroup:['plant'],heightMin:0.46,heightMax:0.67,weightMin:4.3,weightMax:5.6,stage:1,region:'-',trait: '生物碱 — 使用草系技能时，敌方获得2层中毒。',forms:['海神球形态','彩玉球形态','短毛球形态','象牙球形态'],evolvesTo:[64],evolvesFrom:null,desc:'会弹跳的神奇种子，有4种不同球体形态！' },
    { id: 64, name: '蹦蹦草',ename:'BengBengGrass',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.064_蹦蹦草（海神球形态）.webp', attribute:['grass','poison'],eggGroup:['plant'],heightMin:0.59,heightMax:0.85,weightMin:34.3,weightMax:42.9,stage:2,region:'-',trait: '生物碱 — 使用草系技能时，敌方获得2层中毒。',forms:['海神球形态','彩玉球形态','短毛球形态','象牙球形态'],evolvesTo:[65],evolvesFrom:63,desc:'蹦蹦种子的进化形态。' },
    { id: 65, name: '蹦蹦花',ename:'BengBengFlower',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.065_蹦蹦花（海神球形态）.webp',attribute:['grass','poison'],eggGroup:['plant'],heightMin:1.33,heightMax:1.9,weightMin:75.0,weightMax:86.0,stage:3,region:'-',trait: '生物碱 — 使用草系技能时，敌方获得2层中毒。',forms:['海神球形态','彩玉球形态','短毛球形态','象牙球形态'],evolvesTo:null,evolvesFrom:64,desc:'蹦蹦系列的最终进化，开出绚烂的花朵。' },

    // 电咩咩系列 (NO.066~068)
    { id: 66, name: '电咩咩',
      image:'https://patchwiki.biligame.com/images/rocom/5/57/rrzi4lxo68m4mmhokly3l8z4t2ti2r7.png',ename:'ElectricMimi',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.066_电咩咩.webp',  attribute:'electric',eggGroup:['animal'],heightMin:0.58,heightMax:0.83,weightMin:7.17,weightMax:9.1,stage:1,region:'-',trait: '快充 — 离场时回复10能量。',evolvesTo:[67],evolvesFrom:null,desc:'发出"咩咩"叫声的带电小羊。' },
    { id: 67, name: '粉咩咩',
      image:'https://patchwiki.biligame.com/images/rocom/5/57/rrzi4lxo68m4mmhokly3l8z4t2ti2r7.png',ename:'PinkMimi',    attribute:'electric',eggGroup:['animal'],heightMin:0.8,heightMax:1.14,weightMin:15.3,weightMax:18.6,stage:2,region:'-',trait: '快充 — 离场时回复10能量。',evolvesTo:[68],evolvesFrom:67,desc:'电咩咩进化后变成粉红色。' },
    { id: 68, name: '电球咩咩',
      image:'https://patchwiki.biligame.com/images/rocom/5/57/rrzi4lxo68m4mmhokly3l8z4t2ti2r7.png',ename:'ElectricBallMimi',attribute:'electric',eggGroup:['animal'],heightMin:1.13,heightMax:1.62,weightMin:48.6,weightMax:58.0,stage:3,region:'-',trait: '快充 — 离场时回复10能量。',evolvesTo:null,evolvesFrom:67,desc:'浑身环绕电球的电咩咩最终形态。' },

    // 蒲公英系列 (NO.069~070)
    { id: 69, name: '蒲公英',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/87el3plwkuzm4wsb0l6s3ffqowsbiwl.png',ename:'Dandelion',   attribute:['grass','cute'],eggGroup:['plant','flying'],heightMin:0.3,heightMax:0.5,weightMin:0.1,weightMax:0.6,stage:1,region:'-',trait: '勇敢 — 携带的能耗大于3的技能，威力+40%。',evolvesTo:[70],evolvesFrom:null,desc:'随风飘散的蒲公英精灵。' },
    { id: 70, name: '蒲公英娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/87el3plwkuzm4wsb0l6s3ffqowsbiwl.png',ename:'DandelionDoll',attribute:['grass','cute'],eggGroup:['plant','flying'],heightMin:0.7,heightMax:1.0,weightMin:0.3,weightMax:1.35,stage:2,region:'-',trait: '勇敢 — 携带的能耗大于3的技能，威力+40%。',evolvesTo:null,evolvesFrom:69,desc:'手持蒲公英的可爱娃娃。' },

    // 伊贝儿系列 (NO.071~072)
    { id: 71, name: '伊贝儿',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/3x1hdgzmc2cyjh9zkfdyw1smgck9o3r.png',ename:'Ibelle',       attribute:'grass',eggGroup:['plant','soft'],heightMin:0.44,heightMax:0.62,weightMin:3.3,weightMax:4.2,stage:1,region:'-',trait: '腐植循环 — 每回复1能量，同时回复5%生命。',evolvesTo:[72],evolvesFrom:null,desc:'蝴蝶般的虫系小精灵。' },
    { id: 72, name: '伊贝粉粉',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/3x1hdgzmc2cyjh9zkfdyw1smgck9o3r.png',ename:'IbellePinkPink',attribute:'grass',eggGroup:['plant','soft'],heightMin:1.03,heightMax:1.47,weightMin:9.3,weightMax:12.5,stage:2,region:'-',trait: '腐植循环 — 每回复1能量，同时回复5%生命。',evolvesTo:null,evolvesFrom:71,desc:'伊贝儿的粉色进化形态。' },

    // 白发懒人 → 动力猿 → 瞌睡王 (NO.073~075)
    { id: 73, name: '白发懒人',
      image:'https://patchwiki.biligame.com/images/rocom/4/46/06pz2jvhh5k0ukbgj30jmdfyz4nic06.png',ename:'WhiteHairLazy',attribute:'normal',eggGroup:['humanoid'],heightMin:0.72,heightMax:1.03,weightMin:19.5,weightMax:23.5,stage:1,region:'-',trait: '慢热型 — 初始能量为0，入场前己方精灵每成功应对1次，回复5能量。',evolvesTo:[74],evolvesFrom:null,desc:'总是懒洋洋不想动的人形精灵。' },
    { id: 74, name: '动力猿',
      image:'https://patchwiki.biligame.com/images/rocom/4/46/06pz2jvhh5k0ukbgj30jmdfyz4nic06.png',ename:'PowerApe',     attribute:['normal','fighting'],eggGroup:['humanoid'],heightMin:1.2,heightMax:1.71,weightMin:46.5,weightMax:63.5,stage:2,region:'-',trait: '慢热型 — 初始能量为0，入场前己方精灵每成功应对1次，回复5能量。',evolvesTo:[75],evolvesFrom:73,desc:'充满动力的战斗型猿猴。' },
    { id: 75, name: '瞌睡王',
      image:'https://patchwiki.biligame.com/images/rocom/4/46/06pz2jvhh5k0ukbgj30jmdfyz4nic06.png',ename:'SleepyKing',   attribute:['normal','fighting'],eggGroup:['humanoid','monster'],heightMin:1.61,heightMax:2.31,weightMin:124.5,weightMax:136.5,stage:3,region:'-',trait: '慢热型 — 初始能量为0，入场前己方精灵每成功应对1次，回复5能量。',evolvesTo:null,evolvesFrom:74,desc:'打起瞌睡来无人能敌的王中之王。' },

    // 海盔虫进化链 - 首领形态 (NO.076~078)
    { id: 76, name: '海盔虫',ename:'HelmetBug',    attribute:['water','poison'],eggGroup:['ocean'],heightMin:0.55,heightMax:0.7,weightMin:7.4,weightMax:8.6,stage:1,region:'-',trait:'-',forms:['本来的样子','磨损的样子'],evolvesTo:[77],evolvesFrom:null,desc:'戴着海螺头盔的水生虫族。' },
    { id: 77, name: '刺盔虫',ename:'SpikyHelmetBug',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.077_刺盔虫（本来的样子）.webp',attribute:['water','poison'],eggGroup:['ocean'],heightMin:0.83,heightMax:1.19,weightMin:22.5,weightMax:29.8,stage:2,region:'-',trait:'-',forms:['本来的样子','磨损的样子'],evolvesTo:[78],evolvesFrom:76,desc:'头盔长满尖刺的危险形态。' },
    { id: 78, name: '千棘盔',ename:'ThornArmor',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.078_千棘盔（本来的样子）.webp',   attribute:['water','poison'],eggGroup:['ocean'],heightMin:1.11,heightMax:1.33,weightMin:98.6,weightMax:115.0,stage:3,isBoss:true,region:'-',trait:'-',forms:['本来的样子','磨损的样子'],evolvesTo:null,evolvesFrom:77,desc:'首领形态的海底虫族王者！全身覆盖千根棘刺。' },

    // ══════════════ 079-100 更多精灵 ══════════════
    { id: 79, name: '菊花梨',
      image:'https://patchwiki.biligame.com/images/rocom/d/db/qitqnhdvjw8gwhnvvapfuqv6g0qgaef.png',ename:'ChrysanthemumPear',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.079_菊花梨.webp',attribute:'cute',eggGroup:['plant'],heightMin:0.63,heightMax:0.9,weightMin:4.2,weightMax:5.8,stage:1,region:'-',trait: '无忧无虑 — 可获得的萌化层数不受限制。',evolvesTo:null,evolvesFrom:null,desc:'外形像菊花的果实精灵。' },

    { id: 80, name: '小星光',ename:'LittleStarlight',attribute:'electric',eggGroup:['animal','monster'],heightMin:0.78,heightMax:1.12,weightMin:27.5,weightMax:36.2,stage:1,region:'-',trait:'-',forms:['星光能量的样子','月光能量的样子'],evolvesTo:[81],evolvesFrom:null,desc:'身上闪烁星光的小狮子幼崽。' },
    {id: 81, name: '星光狮',ename:'StarlightLion',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.081_星光狮（星光能量的样子）.webp', attribute:'electric',eggGroup:['animal','monster'],heightMin:1.08,heightMax:1.54,weightMin:49.5,weightMax:58.1,stage:2,region:'-',trait:'-',forms:['星光能量的样子','月光能量的样子'],evolvesTo:null,evolvesFrom:80,desc:'鬃毛如星河般闪耀的光之雄狮。',
        battle: {
          trait: '星光蓄力爆发',
          tier: 'T1',
          recommend: 'PVP电系物理爆发/机动输出。电系高速物攻手，利用速度优势多次打击。配合虫系队友组联攻。',
          pairing: ["化蝶","小甲虫","毛头小蛛"],
          teams: ["电系队","高速爆发队","虫电联攻队"],
          skills: {
            pve: [
                    { name: '雷电交击', type: '电', pp: 4, power: '85(魔攻)', effect: '高威力电系魔攻，主要输出。' },
            { name: '雷暴', type: '电', pp: 4, power: '80(魔攻)', effect: '稳定电系输出补充。' },
            { name: '电磁脉冲', type: '电', pp: 3, power: '60(魔攻)', effect: '附带特殊效果（麻痹等）。' },
            { name: '闪电护盾', type: '电', pp: 3, power: '-', effect: '形成护盾减免伤害或反弹。' }
            ],
            pvp: [
                    { name: '雷电交击', type: '电', pp: 4, power: '85(魔攻)', effect: '主力输出。' },
            { name: '雷暴', type: '电', pp: 4, power: '80(魔攻)', effect: '爆发或AOE。' },
            { name: '电磁脉冲', type: '电', pp: 3, power: '60(魔攻)', effect: '挂麻痹控制。' },
            { name: '闪电护盾', type: '电', pp: 3, power: '-', effect: '防御反击保命。' }
            ]
          }
        }
      },

    // 一窝蜂进化链 (NO.082~084)
    { id: 82, name: '一窝蜂',
      image:'https://patchwiki.biligame.com/images/rocom/d/de/drnf14ybuu1j1ulcxyktvpr52tlw89x.png',ename:'SwarmBee',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.082_一窝蜂.webp',    attribute:['bug','flying'],eggGroup:['insect','flying'],heightMin:0.37,heightMax:0.52,weightMin:4.0,weightMax:5.5,stage:1,region:'-',trait: '虫群鼓舞 — 队伍中每有1只其他的虫系精灵，自己入场时获得攻防速+10%。',evolvesTo:[83],evolvesFrom:null,desc:'成群结队的蜜蜂精灵。' },
    { id: 83, name: '黄蜂后',
      image:'https://patchwiki.biligame.com/images/rocom/d/de/drnf14ybuu1j1ulcxyktvpr52tlw89x.png',ename:'YellowQueenBee',attribute:['bug','flying'],eggGroup:['insect','flying'],heightMin:0.81,heightMax:1.16,weightMin:31.7,weightMax:39.21,stage:2,region:'-',trait: '虫群鼓舞 — 队伍中每有1只其他的虫系精灵，自己入场时获得攻防速+10%。',evolvesTo:[84],evolvesFrom:82,desc:'一窝蜂进化的蜂群女王。' },
    { id: 84, name: '女王蜂',ename:'QueenBee',     attribute:['bug','flying'],eggGroup:['insect','flying'],heightMin:1.54,heightMax:2.12,weightMin:98.5,weightMax:137.0,stage:3,region:'-',trait: '虫群鼓舞 — 队伍中每有1只其他的虫系精灵，自己入场时获得攻防速+10%。',evolvesTo:null,evolvesFrom:83,desc:'统领整个蜂群的至高女王。' },

    // 小夜 → 紫夜 → 朔夜伊芙 (NO.085~087)
    { id: 85, name: '小夜',
      image:'https://patchwiki.biligame.com/images/rocom/7/72/482iqm8394vdtee3ylwiwyndj9tr8vq.png',  ename:'LittleNight',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.085_小夜.webp',   attribute:'dark',eggGroup:['fairy','humanoid'],heightMin:0.51,heightMax:0.73,weightMin:4.5,weightMax:7.6,stage:1,region:'-',trait: '嫁祸 — 自己每失去25%生命，连击数+2。',evolvesTo:[86],evolvesFrom:null,desc:'从黑夜中诞生的小女孩精灵。' },
    { id: 86, name: '紫夜',
      image:'https://patchwiki.biligame.com/images/rocom/7/72/482iqm8394vdtee3ylwiwyndj9tr8vq.png',  ename:'PurpleNight',   attribute:'dark',eggGroup:['fairy','humanoid'],heightMin:0.72,heightMax:1.03,weightMin:17.6,weightMax:22.5,stage:2,region:'-',trait: '嫁祸 — 自己每失去25%生命，连击数+2。',evolvesTo:[87],evolvesFrom:85,desc:'身披紫色夜纱的暗夜使者。' },
    { id: 87, name: '朔夜伊芙',
      image:'https://patchwiki.biligame.com/images/rocom/7/72/482iqm8394vdtee3ylwiwyndj9tr8vq.png',ename:'NewMoonEve',  attribute:'dark',eggGroup:['fairy'],heightMin:1.06,heightMax:1.51,weightMin:46.2,weightMax:57.5,stage:3,region:'-',trait: '嫁祸 — 自己每失去25%生命，连击数+2。',evolvesTo:null,evolvesFrom:86,desc:'朔月之夜诞生的暗影女神。' },

    // 乖乖鹄 → 蓝珠天鹅 → 翠顶夫人/黑羽夫人 (NO.088~091)
    { id: 88, name: '乖乖鹄',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'GoodGoose',    attribute:['flying','water'],eggGroup:['flying','amphibian'],heightMin:0.46,heightMax:0.67,weightMin:4.2,weightMax:5.5,stage:1,region:'-',trait: '洁癖 — 离场后，自己的增益和减益会被更换入场的精灵继承。',evolvesTo:[89],evolvesFrom:null,desc:'乖乖听话的小鹅精灵。' },
    { id: 89, name: '蓝珠天鹅',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'BluePearlSwan',attribute:['flying','water'],eggGroup:['flying','amphibian'],heightMin:0.88,heightMax:1.03,weightMin:14.08,weightMax:18.1,stage:2,region:'-',trait: '洁癖 — 离场后，自己的增益和减益会被更换入场的精灵继承。',evolvesTo:[90,91],evolvesFrom:88,desc:'优雅的蓝色珍珠天鹅。可分化为两种形态。' },
    {id: 90, name: '翠顶夫人',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'EmeraldMadam', attribute:['flying','water'],eggGroup:['flying'],heightMin:1.2,heightMax:1.34,weightMin:19.05,weightMax:25.04,stage:3,region:'-',trait: '洁癖 — 离场后，自己的增益和减益会被更换入场的精灵继承。',evolvesTo:null,evolvesFrom:89,desc:'头顶翠绿冠羽的高贵天鹅夫人。' ,
        battle: {
          trait: '洁癖:增益/减益离场传递',
          tier: 'T0',
          recommend: 'PVP接棒流首发/中转。特性接力机制独一无二！物防138速度115优秀面板。力量增效+乘风+风隐退场接力。',
          pairing: ["水灵","圣羽翼王","迪莫","罗隐"],
          teams: ["PVP接棒队","翼水联攻队"],
          skills: {
            pve: [
                    { name: '水刃', type: '水', pp: 3, power: '115(物攻)', effect: '高威力物攻水系技能，PVE主要输出。' },
            { name: '俯冲猛击', type: '翼', pp: 3, power: '140(物攻)', effect: '超高威力翼系爆发技能。' },
            { name: '潮涌', type: '水', pp: 4, power: '-', effect: '水系过渡技能或群体伤害。' },
            { name: '水环', type: '水', pp: 3, power: '-', effect: '减伤60%且应对攻击后能耗-2。节能防守。' }
            ],
            pvp: [
                    { name: '力量增效', type: '普通', pp: 2, power: '-', effect: '自己获得物攻+100%！接棒前核心强化。' },
            { name: '乘风', type: '翼', pp: 3, power: '-', effect: '获得速度+120%。确保出手权和安全退场。' },
            { name: '风隐', type: '翼', pp: 3, power: '-', effect: '脱离技能。强化完成后安全退场触发特性接力给队友。' },
            { name: '水刃', type: '水', pp: 3, power: '115(物攻)', effect: '保留输出防止被挑拨时无法行动。' }
            ]
          }
        }
      },
    { id: 91, name: '黑羽夫人',
      image:'https://patchwiki.biligame.com/images/rocom/5/5a/t2rdnue1b6xwisya3nw5oyti9t2wdur.png',ename:'BlackFeatherMadam',attribute:['flying','dark'],eggGroup:['flying'],heightMin:1.25,heightMax:1.4,weightMin:20.5,weightMax:28.06,stage:3,region:'-',trait: '贪婪 — 敌方精灵离场后，其增益和减益会被更换入场的精灵继承。',evolvesTo:null,evolvesFrom:89,desc:'黑色羽毛的神秘天鹅夫人。' },
    { id: 92, name: '锤头鹳',
      image:'https://patchwiki.biligame.com/images/rocom/c/c8/0kv8ab3s5umo3dbcwsthu9xnpo9y1fc.png',ename:'HammerStork',  attribute:['flying','water'],eggGroup:['flying'],heightMin:1.09,heightMax:1.56,weightMin:51.3,weightMax:65.8,stage:2,region:'-',trait: '快锤 — 携带的能耗小于3的技能，获得迅捷。',evolvesTo:null,evolvesFrom:null,desc:'头部形状像锤子的奇特鸟类。' },

    // 绿草精灵 → 魔草巫灵 (NO.093~094)
    { id: 93, name: '绿草精灵',
      image:'https://patchwiki.biligame.com/images/rocom/1/17/i57n7v6fkt96if840ri0w2jwf07rsgr.png',ename:'GreenGrassFairy',attribute:['grass','illusion'],eggGroup:['plant','humanoid'],heightMin:0.71,heightMax:1.01,weightMin:9.3,weightMax:10.3,stage:1,region:'-',trait: '木桶戏法 — 离场后，更换入场的精灵以木桶状态登场。',evolvesTo:[94],evolvesFrom:null,desc:'由草木精华凝聚而成的精灵。' },
    { id: 94, name: '魔草巫灵',
      image:'https://patchwiki.biligame.com/images/rocom/1/17/i57n7v6fkt96if840ri0w2jwf07rsgr.png',ename:'MagicGrassWitch',attribute:['grass','illusion'],eggGroup:['plant','humanoid'],heightMin:0.74,heightMax:1.05,weightMin:29.0,weightMax:34.0,stage:2,region:'-',trait: '木桶戏法 — 离场后，更换入场的精灵以木桶状态登场。',evolvesTo:null,evolvesFrom:93,desc:'掌握魔法的草木巫师。' },

    { id: 95, name: '记忆石',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/q6hhh7atr12ne3qx79r3q311a3pcmo9.png',ename:'MemoryStone',  attribute:'ground',eggGroup:['mineral'],heightMin:0.97,heightMax:1.39,weightMin:90.2,weightMax:112.0,stage:1,region:'-',trait: '不移 — 携带的无额外效果的攻击技能，威力+30%。',evolvesTo:null,evolvesFrom:null,desc:'记载着古老记忆的石头精灵。' },

    // 咔咔羽毛 → 咔咔雀 → 咔咔鸟 (NO.096~098)
    { id: 96, name: '咔咔羽毛',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ob21aol2viw67k7tp5830dj3rzphp66.png',ename:'KakaFeather', attribute:['flying','normal'],eggGroup:['flying'],heightMin:0.62,heightMax:0.89,weightMin:2.62,weightMax:3.9,stage:1,region:'-',trait: '咔咔冲刺 — 若先于敌方行动，行动后获得连击数+1。',evolvesTo:[97],evolvesFrom:null,desc:'只有一根羽毛的小小鸟。' },
    { id: 97, name: '咔咔雀',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ob21aol2viw67k7tp5830dj3rzphp66.png', ename:'KakaSparrow',  attribute:['flying','normal'],eggGroup:['flying'],heightMin:0.66,heightMax:0.95,weightMin:13.8,weightMax:18.5,stage:2,region:'-',trait: '咔咔冲刺 — 若先于敌方行动，行动后获得连击数+1。',evolvesTo:[98],evolvesFrom:96,desc:'长出完整羽毛的麻雀。' },
    { id: 98, name: '咔咔鸟',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ob21aol2viw67k7tp5830dj3rzphp66.png', ename:'KakaBird',     attribute:['flying','normal'],eggGroup:['flying'],heightMin:0.7,heightMax:1.0,weightMin:27.5,weightMax:33.72,stage:3,region:'-',trait: '咔咔冲刺 — 若先于敌方行动，行动后获得连击数+1。',evolvesTo:null,evolvesFrom:97,desc:'咔咔系列的最终形态。' },

    // 小草虫进化链 (NO.099~101)
    { id: 99, name: '小草虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/4wnznw67s6p9vg2jru046cjq7q8qs8w.png',ename:'LittleGrassBug',attribute:['bug','grass'],eggGroup:['insect','humanoid'],heightMin:0.47,heightMax:0.67,weightMin:2.1,weightMax:3.4,stage:1,region:'-',trait: '花精灵 — 回合结束时，己方队伍获得1次随机奉献。',evolvesTo:[100],evolvesFrom:null,desc:'伪装成草叶的小虫子。' },
    { id:100, name: '草衣虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/4wnznw67s6p9vg2jru046cjq7q8qs8w.png',ename:'GrassCoatWorm', attribute:['bug','grass'],eggGroup:['insect','humanoid'],heightMin:0.6,heightMax:0.87,weightMin:7.2,weightMax:8.6,stage:2,region:'-',trait: '花精灵 — 回合结束时，己方队伍获得1次随机奉献。',evolvesTo:[101],evolvesFrom:99,desc:'披着草叶外衣的虫子。' },
    { id:101, name: '花衣蝶',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/4wnznw67s6p9vg2jru046cjq7q8qs8w.png',ename:'FlowerButterfly',attribute:['bug','grass'],eggGroup:['insect','fairy'],heightMin:0.92,heightMax:1.32,weightMin:19.6,weightMax:23.4,stage:2,region:'-',trait: '花精灵 — 回合结束时，己方队伍获得1次随机奉献。',evolvesTo:null,evolvesFrom:100,desc:'翅膀如花瓣般的美丽蝴蝶。' },

    // 绿翼/魔翼/魔眷鸟 (NO.102~104)
    { id:102, name: '绿翼鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/6legu9g43vllzz0bwdewrpp0f6zmwdu.png',ename:'GreenWingBird', attribute:['cute','flying'],eggGroup:['flying'],heightMin:0.49,heightMax:0.61,weightMin:3.6,weightMax:4.8,stage:2,region:'-',trait: '自由飘 — 自己每有1层萌化，获得连击数+2。',evolvesTo:[103],evolvesFrom:null,desc:'绿色翅膀的飞鸟。' },
    { id:103, name: '魔翼鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/6legu9g43vllzz0bwdewrpp0f6zmwdu.png',ename:'MagicWingBird', attribute:['cute','flying'],eggGroup:['flying','fairy'],heightMin:0.78,heightMax:1.12,weightMin:8.85,weightMax:13.8,stage:2,region:'-',trait: '自由飘 — 自己每有1层萌化，获得连击数+2。',evolvesTo:[104],evolvesFrom:102,desc:'带有魔力的黑暗飞鸟。' },
    { id:104, name: '魔眷鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/64/6legu9g43vllzz0bwdewrpp0f6zmwdu.png',ename:'MagicPetBird', attribute:['cute','flying'],eggGroup:['flying','fairy'],heightMin:0.91,heightMax:1.31,weightMin:19.8,weightMax:24.5,stage:3,region:'-',trait: '自由飘 — 自己每有1层萌化，获得连击数+2。',evolvesTo:null,evolvesFrom:103,desc:'被魔力眷顾的强大飞鸟。' },

    // 阿米亚特 → 阿米樱 (NO.105~106)
    { id:105, name: '阿米亚特',
      image:'https://patchwiki.biligame.com/images/rocom/0/01/qzl2l4nltxeu187qw1a2ybgfe5qj2tf.png',ename:'Armiat',      attribute:'ground',eggGroup:['monster'],heightMin:0.57,heightMax:0.79,weightMin:38.5,weightMax:49.2,stage:2,region:'-',trait: '石头大餐 — 能量不足时，消耗5%生命，代替1能量。',evolvesTo:null,evolvesFrom:null,desc:'温和友善的巨兽精灵。' },
    { id:106, name: '阿米樱',
      image:'https://patchwiki.biligame.com/images/rocom/0/01/qzl2l4nltxeu187qw1a2ybgfe5qj2tf.png',ename:'Amisakura',    attribute:'ground',eggGroup:['monster'],heightMin:0.78,heightMax:1.12,weightMin:94.2,weightMax:143.0,stage:2,region:'-',trait: '石头大餐 — 能量不足时，消耗5%生命，代替1能量。',evolvesTo:null,evolvesFrom:null,desc:'阿米亚特的樱花形态变体。' },

    {id:107, name: '罗隐',
      image:'https://patchwiki.biligame.com/images/rocom/0/01/qzl2l4nltxeu187qw1a2ybgfe5qj2tf.png',  ename:'LuoYin',        attribute:['ground','dark'],eggGroup:['monster','mineral'],heightMin:1.48,heightMax:2.12,weightMin:290.0,weightMax:305.0,stage:2,region:'-',trait: '石头大餐 — 能量不足时，消耗5%生命，代替1能量。',evolvesTo:null,evolvesFrom:null,desc:'隐匿于阴影中的幽灵战士。' ,
        battle: {
          trait: '以血代能',
          tier: 'T0',
          recommend: 'PVE地震泥浆铠甲无脑推图/PVP地刺打断+暗突袭吸血。物攻159物防112顶级面板！特性"石头大餐"回蓝灵活。',
          pairing: ["翠顶夫人","迪莫","乌拉塔","恶魔狼"],
          teams: ["万金油PVP","物理坦克队","地恶联攻"],
          skills: {
            pve: [
                    { name: '地震', type: '地', pp: 3, power: '190(物攻)', effect: '超高威力地面系必杀技190物攻！PVE清场核心输出。' },
            { name: '泥浆铠甲', type: '地', pp: 3, power: '-', effect: '物攻+物防+60%（应对防御翻倍），抗怪神技。' },
            { name: '岩土暴击', type: '地', pp: 4, power: '-', effect: '被攻击次数越多能耗越低，越打越快。' },
            { name: '贪婪', type: '恶', pp: 3, power: '-', effect: '吸血回复生命值，配合高物攻续航。' }
            ],
            pvp: [
                    { name: '先发制人', type: '武', pp: 4, power: '-', effect: '先手技能，速度劣势也能打伤害或收割残血。' },
            { name: '地刺', type: '地', pp: 3, power: '-', effect: '物伤+应对状态下打断敌方技能！后手针对关键。' },
            { name: '暗突袭', type: '恶', pp: 4, power: '-', effect: '恶系伤害并吸血50%，应对状态威力翻倍。' },
            { name: '力量吞噬', type: '恶', pp: 3, power: '-', effect: '降敌方全技能威力+升自身全技能威力。强力威压。' }
            ]
          }
        }
      },

    // 风铃鲨进化链 (NO.108~110)
    { id:108, name: '风铃鲨',
      image:'https://patchwiki.biligame.com/images/rocom/f/fe/88nqs9bcxmqlj6ad7xoyz36k5fxw4qe.png',ename:'WindBellShark', attribute:['water','flying'],eggGroup:['ocean','flying'],heightMin:0.41,heightMax:0.59,weightMin:13.07,weightMax:16.8,stage:1,region:'-',trait: '水翼推进 — 己方精灵每使用1次水系技能，自己入场时获得全技能能耗-1。',evolvesTo:[109],evolvesFrom:null,desc:'背鳍如风铃般响亮的鲨鱼。',
        battle: {
          "trait": "水翼推进降耗",
          "tier": "T2",
          "recommend": "PVP水系降耗中转。队友频繁使用水系技能后自己入场时全技能能耗-1，越后期越强。",
          "pairing": [
          "蓝蝶鲨",
          "蓝漪水灵",
          "深蓝鲸"
          ],
          "teams": [
          "水系联攻队",
          "降耗队"
          ],
          "skills": {
          "pve": [
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "稳定水系输出，后期几乎零能耗。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "高威水系必杀。"
          },
          {
          "name": "泡泡围困",
          "type": "水",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "困住+伤害。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "减免伤害。"
        }
          ],
          "pvp": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "后期低能耗高威爆发。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "主攻技能，降耗后可连续放。"
          },
          {
          "name": "泡泡围困",
          "type": "水",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "控制+伤害。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "生存保障。"
        }
          ]
        }
        }
    },
    { id:109, name: '蓝蝶鲨',
      image:'https://patchwiki.biligame.com/images/rocom/f/fe/88nqs9bcxmqlj6ad7xoyz36k5fxw4qe.png',ename:'BlueButterflyShark',attribute:['water','flying'],eggGroup:['ocean','flying'],heightMin:0.81,heightMax:1.16,weightMin:34.82,weightMax:48.6,stage:2,region:'-',trait: '水翼推进 — 己方精灵每使用1次水系技能，自己入场时获得全技能能耗-1。',evolvesTo:[110],evolvesFrom:108,desc:'鳍部如蝴蝶翅膀般美丽的鲨鱼。',
        battle: {
          "trait": "水翼进化形态",
          "tier": "T2",
          "recommend": "PVP水翼推进主力。进化后属性更高，降耗收益更大。",
          "pairing": [
          "风铃鲨",
          "深蓝鲸",
          "蓝漪水灵"
          ],
          "teams": [
          "水系联攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "巨浪滔天",
          "type": "水",
          "pp": 3,
          "power": "115(魔攻)",
          "effect": "超高威水系必杀。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "稳定高威输出。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "85(魔攻)",
          "effect": "低能耗连发。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "回复生命值。"
        }
          ],
          "pvp": [
          {
          "name": "巨浪滔天",
          "type": "水",
          "pp": 3,
          "power": "115(魔攻)",
          "effect": "降耗后一发入魂。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "稳定主攻。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "续航恢复。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "85(魔攻)",
          "effect": "低能耗填充。"
        }
          ]
        }
        }
    },
    { id:110, name: '彩蝶鲨',
      image:'https://patchwiki.biligame.com/images/rocom/f/fe/88nqs9bcxmqlj6ad7xoyz36k5fxw4qe.png',ename:'ColorButterflyShark',attribute:['water','flying'],eggGroup:['ocean','flying'],heightMin:1.18,heightMax:1.68,weightMin:80.5,weightMax:96.5,stage:3,region:'-',trait: '水翼推进 — 己方精灵每使用1次水系技能，自己入场时获得全技能能耗-1。',evolvesTo:null,evolvesFrom:109,desc:'鳍部七彩斑斓的梦幻鲨鱼。' },

    // 石石 → 巨灵石 (NO.111~112)
    { id:111, name: '石石',
      image:'https://patchwiki.biligame.com/images/rocom/c/c6/ozlttesinkk43ayc3sv3tbab5ckbshi.png',  ename:'StoneStone',    attribute:'ground',eggGroup:['monster','mineral'],heightMin:0.35,heightMax:0.5,weightMin:61.0,weightMax:75.0,stage:1,region:'-',trait: '石天平 — 若使用技能能耗高于敌方，回合结束敌方失去能耗之差的能量。',evolvesTo:[112],evolvesFrom:null,desc:'由纯石块构成的生命体。' },
    { id:112, name: '巨灵石',
      image:'https://patchwiki.biligame.com/images/rocom/c/c6/ozlttesinkk43ayc3sv3tbab5ckbshi.png',ename:'GiantSpiritStone',attribute:['ground','ghost'],eggGroup:['monster','mineral'],heightMin:1.95,heightMax:2.3,weightMin:205.0,weightMax:240.0,stage:2,region:'-',trait: '石天平 — 若使用技能能耗高于敌方，回合结束敌方失去能耗之差的能量。',evolvesTo:null,evolvesFrom:111,desc:'蕴含巨灵之力的巨大岩石。' },

    // 仪式系列 (NO.113~115)
    { id:113, name: '仪使者',
      image:'https://patchwiki.biligame.com/images/rocom/9/98/a4s6v19kpxbuk9cprtbjxwgs2xwxi70.png',ename:'RitualMessenger',attribute:['ground','illusion'],eggGroup:['mineral'],heightMin:0.45,heightMax:0.58,weightMin:19.05,weightMax:35.05,stage:2,region:'-',trait: '观星 — 敌方每有1层星陨印记，自己的地系技能威力+15%。',evolvesTo:[114],evolvesFrom:null,desc:'执行神圣仪式的信使。' },
    { id:114, name: '仪式之星',
      image:'https://patchwiki.biligame.com/images/rocom/9/98/a4s6v19kpxbuk9cprtbjxwgs2xwxi70.png',ename:'RitualStar',  attribute:['ground','illusion'],eggGroup:['mineral'],heightMin:0.84,heightMax:1.21,weightMin:72.0,weightMax:87.5,stage:2,region:'-',trait: '观星 — 敌方每有1层星陨印记，自己的地系技能威力+15%。',evolvesTo:[115],evolvesFrom:113,desc:'仪式中闪耀的星辰。' },
    { id:115, name: '仪式巨像',
      image:'https://patchwiki.biligame.com/images/rocom/9/98/a4s6v19kpxbuk9cprtbjxwgs2xwxi70.png',ename:'RitualColossus',attribute:['ground','illusion'],eggGroup:['mineral','fairy'],heightMin:1.44,heightMax:1.79,weightMin:198.05,weightMax:253.07,stage:3,region:'-',trait: '观星 — 敌方每有1层星陨印记，自己的地系技能威力+15%。',evolvesTo:null,evolvesFrom:114,desc:'仪式中召唤出的巨大石像。' },

    // 小独角兽 → 白金独角兽 (NO.116~117)
    { id:116, name: '小独角兽',
      image:'https://patchwiki.biligame.com/images/rocom/e/ec/qdyvecckyuhnazeotxq9wkxwzb4ws8o.png',ename:'LittleUnicorn', attribute:'light',eggGroup:['animal','monster'],heightMin:0.98,heightMax:1.41,weightMin:41.5,weightMax:55.6,stage:1,region:'-',trait: '目空 — 携带的非光系技能，威力+25%。',evolvesTo:[117],evolvesFrom:null,desc:'额头有小角的纯洁独角兽幼崽。' },
    {id:117, name: '白金独角兽',
      image:'https://patchwiki.biligame.com/images/rocom/e/ec/qdyvecckyuhnazeotxq9wkxwzb4ws8o.png',ename:'PlatinumUnicorn',attribute:'light',eggGroup:['animal','monster'],heightMin:1.35,heightMax:1.93,weightMin:94.5,weightMax:105.0,stage:2,region:'-',trait: '目空 — 携带的非光系技能，威力+25%。',evolvesTo:null,evolvesFrom:116,desc:'通体白金色的圣洁独角兽。' ,
        battle: {
          trait: '非光系技能威力+25%',
          tier: 'T1',
          recommend: 'PVP光系法术辅助/输出。粒子重构+极光守护体系。',
          pairing: ["迪莫","星光狮","白金独角兽"],
          teams: ["光属性队","辅助输出队"],
          skills: {
            pve: [
                    { name: '星耀冲击', type: '光', pp: 4, power: '85(物攻)', effect: '光系高威力物攻输出。' },
            { name: '极光守护', type: '光', pp: 4, power: '-', effect: '大幅提升防御能力的护盾技能。' },
            { name: '粒子重构', type: '光', pp: 4, power: '-', effect: '重置部分战斗状态或改变战场环境。' },
            { name: '闪光术', type: '光', pp: 3, power: '-', effect: '降低敌方命中率，生存过渡。' }
            ],
            pvp: [
                    { name: '星耀冲击', type: '光', pp: 4, power: '85(物攻)', effect: '主力物攻。' },
            { name: '粒子重构', type: '光', pp: 4, power: '-', effect: '核心战术技，灵活调整战场。' },
            { name: '极光守护', type: '光', pp: 4, power: '-', effect: '防御护盾保命。' },
            { name: '闪光术', type: '光', pp: 3, power: '-', effect: '闪避或干扰。' }
            ]
          }
        }
      },

    // 旋叶虫进化链 (NO.118~120)
    { id:118, name: '旋叶虫',ename:'SpinningLeafBug',attribute:['normal','bug'],eggGroup:['plant','insect'],heightMin:0.1,heightMax:0.15,weightMin:0.1,weightMax:0.85,stage:1,region:'-',trait:'-',forms:['金黄的样子','枯叶的样子'],evolvesTo:[119],evolvesFrom:null,desc:'旋转叶片的虫族精灵。',
        battle: {
          "trait": "普通系初始形态",
          "tier": "T3",
          "recommend": "PVE普通系草系混合过渡。旋叶虫为风滚暮虫前置形态。",
          "pairing": [
          "蓬叶虫",
          "风滚暮虫",
          "可爱猿"
          ],
          "teams": [
          "普通系过渡"
          ],
          "skills": {
          "pve": [
          {
          "name": "叶片斩",
          "type": "草",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "草系物攻。"
          },
          {
          "name": "普通撞击",
          "type": "普通",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "普通系基础输出。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸取敌方生命。"
        }
          ],
          "pvp": [
          {
          "name": "叶片斩",
          "type": "草",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "草系主攻。"
          },
          {
          "name": "普通撞击",
          "type": "普通",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "普通系补充。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "续航吸血。"
        }
          ]
        }
        }
    },
    { id:119, name: '蓬叶虫',ename:'FluffyLeafBug',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.119_蓬叶虫（金黄的样子）.webp', attribute:['normal','bug'],eggGroup:['plant','insect'],heightMin:0.53,heightMax:0.76,weightMin:0.65,weightMax:1.68,stage:2,region:'-',trait:'-',forms:['金黄的样子','枯叶的样子'],evolvesTo:[120],evolvesFrom:118,desc:'叶片蓬松的虫族精灵。',
        battle: {
          "trait": "蓬叶虫进阶",
          "tier": "T3",
          "recommend": "PVP普通草系中转。属性略高于旋叶虫，等待进化风滚暮虫。",
          "pairing": [
          "旋叶虫",
          "风滚暮虫",
          "格兰球"
          ],
          "teams": [
          "普通草系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "草系先手物攻。"
          },
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "草系高威物攻。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "持续吸取生命。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升。"
        }
          ],
          "pvp": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "主攻技能。"
          },
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "先手选择。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "续航来源。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守站位。"
        }
          ]
        }
        }
    },
    { id:120, name: '风滚暮虫',ename:'TumblebugDusk',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.120_风滚暮虫（金黄的样子）.webp', attribute:['normal','bug'],eggGroup:['plant','insect'],heightMin:0.6,heightMax:0.7,weightMin:1.45,weightMax:3.43,stage:3,region:'-',trait:'-',forms:['金黄的样子','枯叶的样子'],evolvesTo:null,evolvesFrom:119,desc:'随风滚动的暮色虫族。',
        battle: {
          "trait": "普通系基础形态",
          "tier": "T3",
          "recommend": "PVE普通系过渡输出。风滚暮虫无特殊特性，走常规物攻路线。",
          "pairing": [
          "迪莫",
          "帕尔萨斯",
          "音速犬"
          ],
          "teams": [
          "普通系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "普通撞击",
          "type": "普通",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "普通系基础物攻。",
        battle: {
          "trait": "风滚暮虫终极",
          "tier": "T2",
          "recommend": "PVP普通系物攻手。最终形态属性较高，走纯物攻路线。",
          "pairing": [
          "旋叶虫",
          "蓬叶虫",
          "迪莫"
          ],
          "teams": [
          "普通物攻队"
          ],
          "skills": {
          "pve": [
          {
          " name": "强力撞击",
          "type": "普通",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "普通系高威物攻。"
          },
          {
          " name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "草系魔法AOE。"
          },
          {
          " name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "持续吸取生命。"
          },
          {
          " name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "大幅提升防御。"
        }
          ],
          "pvp": [
          {
          " name": "强力撞击",
          "type": "普通",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "普通系主力输出。"
          },
          {
          " name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "魔法AOE补盲。"
          },
          {
          " name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "续航吸血。"
          },
          {
          " name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守保命。"
        }
          ]
        }
        }
              },
          {
          "name": "沙尘暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "场地持续伤害。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "虫系群体伤害。"
        }
          ],
          "pvp": [
          {
          "name": "普通撞击",
          "type": "普通",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "主攻技能。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守站场。"
          },
          {
          "name": "沙尘暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "环境压制。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "补盲输出。"
        }
          ]
        }
        }
    },

    // 黑猫系列 (NO.121~124)
    { id:121, name: '小黑猫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/8rrqybxt78i08ws9ztf6iqrhpbf61fi.png',ename:'LittleBlackCat',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.121_小黑猫.webp', attribute:'normal',eggGroup:['animal','humanoid'],heightMin:0.55,heightMax:0.65,weightMin:3.1,weightMax:4.5,stage:1,region:'-',trait: '预警 — 若敌方技能足够击败自己，回合开始时自己获得速度+50。',evolvesTo:[122],evolvesFrom:null,desc:'神秘的黑猫，夜行性很强。',
        battle: {
          "trait": "预警折返速攻",
          "tier": "T2",
          "recommend": "PVP普通系预警折返。检测到致命攻击时速度+50先手换人或反击。",
          "pairing": [
          "黑猫巫师",
          "迪莫",
          "帕尔萨斯"
          ],
          "teams": [
          "预警折返队",
          "速攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暗影拳",
          "type": "暗",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "暗系物攻输出。"
          },
          {
          "name": "普通撞击",
          "type": "普通",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "基础物攻。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "安全退场配合预警。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御避免被秒。"
        }
          ],
          "pvp": [
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "预警触发+50速安全退场。"
          },
          {
          "name": "暗影拳",
          "type": "暗",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "暗系主攻。"
          },
          {
          "name": "普通撞击",
          "type": "普通",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "普攻补刀。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防止预警触发。"
        }
          ]
        }
        }
    },
    { id:122, name: '黑猫巫师',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/8rrqybxt78i08ws9ztf6iqrhpbf61fi.png',ename:'BlackCatWizard',attribute:'normal',eggGroup:['animal','humanoid','fairy'],heightMin:0.85,heightMax:0.97,weightMin:8.1,weightMax:9.5,stage:2,region:'-',trait: '预警 — 若敌方技能足够击败自己，回合开始时自己获得速度+50。',evolvesTo:[123],evolvesFrom:121,desc:'掌握巫术的黑猫法师。',
        battle: {
          "trait": "黑猫巫师预警",
          "tier": "T2",
          "recommend": "PVP普通系预警中转。进化后属性更高，预警+折返组合更灵活。",
          "pairing": [
          "小黑猫",
          "忽幽狸",
          "迪莫"
          ],
          "teams": [
          "预警折返队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系魔攻提升。"
          },
          {
          "name": "暗影拳",
          "type": "暗",
          "pp": 4,
          "power": "65(物攻)",
          "effect": "暗系物攻增强。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "高速退场。"
          },
          {
          "name": "诅咒",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方攻击。"
        }
          ],
          "pvp": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "魔攻主攻。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "预警触发极速退场。"
          },
          {
          "name": "暗影拳",
          "type": "暗",
          "pp": 4,
          "power": "65(物攻)",
          "effect": "物理选项。"
          },
          {
          "name": "诅咒",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方。"
        }
          ]
        }
        }
    },
    { id:123, name: '忽幽狸',
      image:'https://patchwiki.biligame.com/images/rocom/7/78/2jxh0kfsg1lzfa640r2nyaz03bcr97j.png',ename:'GhostFox',      attribute:['ghost','poison'],eggGroup:['humanoid'],heightMin:0.76,heightMax:1.09,weightMin:8.3,weightMax:9.8,stage:2,region:'-',trait: '下黑手 — 敌方精灵离场后，更换入场的精灵获得5层中毒。',evolvesTo:[124],evolvesFrom:122,desc:'忽隐忽现的狐狸精灵。',
        battle: {
          "trait": "下黑手毒转场",
          "tier": "T2",
          "recommend": "PVP幽灵毒系恶心人。敌方每次换人就吃5层中毒，极大压制换人流。",
          "pairing": [
          "黑猫巫师",
          "裘卡",
          "紫冥狐"
          ],
          "teams": [
          "毒转场压制队",
          "幽灵队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系魔攻逼对方换人。"
          },
          {
          "name": "鬼火",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方物攻。"
          },
          {
          "name": "奇异之光",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "混乱敌方。"
          },
          {
          "name": "腐蚀强酸",
          "type": "毒",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "毒系压血线。"
        }
          ],
          "pvp": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "高压输出逼换人→触发下黑手。"
          },
          {
          "name": "鬼火",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "废掉敌方物攻手。"
          },
          {
          "name": "奇异之光",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "混乱控制。"
          },
          {
          "name": "腐蚀强酸",
          "type": "毒",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "叠加毒素伤害。"
        }
          ]
        }
        }
    },
    { id:124, name: '影狸',
      image:'https://patchwiki.biligame.com/images/rocom/7/78/2jxh0kfsg1lzfa640r2nyaz03bcr97j.png',  ename:'ShadowFox',    attribute:['ghost','poison'],eggGroup:['humanoid'],heightMin:1.11,heightMax:1.59,weightMin:23.5,weightMax:37.5,stage:3,region:'-',trait: '下黑手 — 敌方精灵离场后，更换入场的精灵获得5层中毒。',evolvesTo:null,evolvesFrom:123,desc:'操纵影子的狐狸大师。' },

    // 多多系列 (NO.125~127)
    { id:125, name: '多多',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/616cnqj5bbxqzen5zwhzqhst14lpua9.png',  ename:'DuoDuo',        attribute:['poison','ground'],eggGroup:['humanoid','monster'],heightMin:0.45,heightMax:0.65,weightMin:14.6,weightMax:18.6,stage:1,region:'-',trait: '毒牙 — 使敌方获得中毒时，也会使其获得魔攻和魔防-40%。',evolvesTo:[126],evolvesFrom:null,desc:'圆圆胖胖的多多精灵。' },
    { id:126, name: '多啦多',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/616cnqj5bbxqzen5zwhzqhst14lpua9.png',ename:'DuoLaDuo',      attribute:['poison','ground'],eggGroup:['humanoid','monster'],heightMin:0.58,heightMax:0.83,weightMin:28.5,weightMax:34.6,stage:2,region:'-',trait: '毒牙 — 使敌方获得中毒时，也会使其获得魔攻和魔防-40%。',evolvesTo:[127],evolvesFrom:125,desc:'多多的进化形态。' },
    { id:127, name: '古啦多',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/616cnqj5bbxqzen5zwhzqhst14lpua9.png',ename:'GuLaDuo',      attribute:['poison','ground'],eggGroup:['humanoid','monster'],heightMin:0.69,heightMax:0.99,weightMin:43.5,weightMax:58.6,stage:3,region:'-',trait: '毒牙 — 使敌方获得中毒时，也会使其获得魔攻和魔防-40%。',evolvesTo:null,evolvesFrom:126,desc:'古文明遗留下来的多多最终形态。' },

    // 哭哭菇进化链 (NO.128~130)
    { id:128, name: '哭哭菇',
      image:'https://patchwiki.biligame.com/images/rocom/e/ee/r5ob8gjuzspmnvdafl5zf5836e6bf6g.png',ename:'CryCryMushroom',attribute:'illusion',eggGroup:['plant'],heightMin:0.33,heightMax:0.47,weightMin:1.8,weightMax:3.2,stage:1,region:'-',trait: '吸积盘 — 回合结束时，敌方获得2层星陨印记。',evolvesTo:[129],evolvesFrom:null,desc:'总是哭哭啼啼的蘑菇精灵。' },
    { id:129, name: '怖须菇',
      image:'https://patchwiki.biligame.com/images/rocom/e/ee/r5ob8gjuzspmnvdafl5zf5836e6bf6g.png',ename:'HorrorBeardMushroom',attribute:'illusion',eggGroup:['plant'],heightMin:0.69,heightMax:0.99,weightMin:8.72,weightMax:15.6,stage:2,region:'-',trait: '吸积盘 — 回合结束时，敌方获得2层星陨印记。',evolvesTo:[130],evolvesFrom:128,desc:'长着恐怖胡须的蘑菇。' },
    { id:130, name: '怖哭菇',
      image:'https://patchwiki.biligame.com/images/rocom/e/ee/r5ob8gjuzspmnvdafl5zf5836e6bf6g.png',ename:'HorrorCryMushroom',attribute:'illusion',eggGroup:['plant'],heightMin:1.23,heightMax:1.76,weightMin:22.5,weightMax:28.6,stage:3,region:'-',trait: '吸积盘 — 回合结束时，敌方获得2层星陨印记。',evolvesTo:null,evolvesFrom:129,desc:'让人闻风丧胆的蘑菇之王。' },

    {id:131, name: '恶魔狼',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/8rz167blfbrzzs44u5mq8a0k7im6ap8.png',ename:'DevilWolf',     attribute:'dark',eggGroup:['animal'],heightMin:1.23,heightMax:1.76,weightMin:74.0,weightMax:92.0,stage:3,region:'-',trait: '悲悯 — 己方队伍中每有1只力竭的精灵，自己获得双攻+30%。',evolvesTo:null,evolvesFrom:null,desc:'拥有恶魔之血的狼族王者。' ,
        battle: {
          trait: '悲悯:力竭→双攻+30%×N',
          tier: 'T1',
          recommend: 'PVP恶系物理爆发手。撕裂+狼嚎的野性输出链。',
          pairing: ["罗隐","水泡壳","乌拉塔"],
          teams: ["暗系队","物理爆发队"],
          skills: {
            pve: [
                    { name: '撕裂', type: '恶', pp: 4, power: '-', effect: '造成物伤并留下流血/撕裂效果持续伤害。' },
            { name: '月影', type: '恶', pp: 4, power: '-', effect: '利用阴影进行攻击，可能无视部分防御。' },
            { name: '悲悯之力', type: '恶', pp: 3, power: '-', effect: '根据自身或敌方状态变化的条件性技能。' },
            { name: '狼嚎', type: '恶', pp: 3, power: '-', effect: '嚎叫提升自身或队友属性，团队增益。' }
            ],
            pvp: [
                    { name: '撕裂', type: '恶', pp: 4, power: '-', effect: '挂流血DOT持续压血。' },
            { name: '月影', type: '恶', pp: 4, power: '-', effect: '穿透或隐蔽攻击。' },
            { name: '悲悯之力', type: '恶', pp: 3, power: '-', effect: '条件性爆发或反制。' },
            { name: '狼嚎', type: '恶', pp: 3, power: '-', effect: '团队BUFF或威慑。' }
            ]
          }
        }
      },

    // 电企鹅系列 (NO.132~133)
    { id:132, name: '小电企鹅',
      image:'https://patchwiki.biligame.com/images/rocom/d/d6/4seo2uqqap8978sndkvqzoez1nc8nwy.png',ename:'LittleElectricPenguin',attribute:['ice','electric'],eggGroup:['ocean','flying'],heightMin:0.44,heightMax:0.56,weightMin:3.82,weightMax:5.39,stage:1,region:'-',trait: '超负荷 — 攻击技能获得迸发：敌方获得全技能能耗+1。',evolvesTo:[133],evolvesFrom:null,desc:'体内带电的小企鹅。',
        battle: {
          "trait": "超负荷冰电控能",
          "tier": "T2",
          "recommend": "PVP冰电系控能型。攻击附带让敌方所有技能能耗+1的debuff，越打越费。",
          "pairing": [
          "电企鹅",
          "酷拉",
          "闪电鳗鱼"
          ],
          "teams": [
          "冰电控能队",
          "能耗压制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "电系输出触发超负荷增敌能耗。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "冰系多段输出。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "65(魔攻)",
          "effect": "电系范围输出。"
          },
          {
          "name": "冰冻之风",
          "type": "冰",
          "pp": 4,
          "power": "50(魔攻)",
          "effect": "冰系减速+输出。"
        }
          ],
          "pvp": [
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "每次攻击都让敌方能耗膨胀。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "多段输出多次触发超负荷。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "65(魔攻)",
          "effect": "AOE全体增能耗。"
          },
          {
          "name": "冰冻之风",
          "type": "冰",
          "pp": 4,
          "power": "50(魔攻)",
          "effect": "减速控制。"
        }
          ]
        }
        }
    },
    { id:133, name: '电企鹅',
      image:'https://patchwiki.biligame.com/images/rocom/d/d6/4seo2uqqap8978sndkvqzoez1nc8nwy.png',ename:'ElectricPenguin',attribute:['ice','electric'],eggGroup:['ocean','flying'],heightMin:0.9,heightMax:1.14,weightMin:14.6,weightMax:26.9,stage:2,region:'-',trait: '超负荷 — 攻击技能获得迸发：敌方获得全技能能耗+1。',evolvesTo:null,evolvesFrom:132,desc:'释放电流的电企鹅。',
        battle: {
          "trait": "超负荷冰电进阶",
          "tier": "T2",
          "recommend": "PVP冰电控能主力。进化后超负荷效果更显著。",
          "pairing": [
          "小电企鹅",
          "闪电鳗鱼",
          "雪影娃娃"
          ],
          "teams": [
          "冰电队",
          "能耗压制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "冰系高威AOE触发超负荷。"
          },
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "75(魔攻)",
          "effect": "电系主攻。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "范围增能耗。"
          },
          {
          "name": "冰冻打击",
          "type": "冰",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "冰系物攻。"
        }
          ],
          "pvp": [
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "高威AOE全员增能耗。"
          },
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "75(魔攻)",
          "effect": "单体主攻。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "范围控能。"
          },
          {
          "name": "冰冻打击",
          "type": "冰",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物理选项。"
        }
          ]
        }
        }
    },

    // 雪豆丁 → 雪蛮人 → 雪巨人 (NO.134~136)
    { id:134, name: '雪豆丁',
      image:'https://patchwiki.biligame.com/images/rocom/d/d8/2thy3gt4khhs6gza0pb6ke0da94ajq8.png',ename:'SnowBean',     attribute:'ice',eggGroup:['humanoid','monster'],heightMin:0.86,heightMax:1.23,weightMin:9.5,weightMax:12.5,stage:1,region:'-',trait: '打雪仗 — 初始能量为0，入场前己方精灵每放1次冰系技能，回复3能量。',evolvesTo:[135],evolvesFrom:null,desc:'圆滚滚的雪人宝宝。' },
    { id:135, name: '雪蛮人',
      image:'https://patchwiki.biligame.com/images/rocom/d/d8/2thy3gt4khhs6gza0pb6ke0da94ajq8.png',ename:'SnowBarbarian',attribute:'ice',eggGroup:['humanoid','monster'],heightMin:1.11,heightMax:1.59,weightMin:59.0,weightMax:76.0,stage:2,region:'-',trait: '打雪仗 — 初始能量为0，入场前己方精灵每放1次冰系技能，回复3能量。',evolvesTo:[136],evolvesFrom:134,desc:'身材魁梧的冰原野人。' },
    { id:136, name: '雪巨人',
      image:'https://patchwiki.biligame.com/images/rocom/d/d8/2thy3gt4khhs6gza0pb6ke0da94ajq8.png',ename:'SnowGiant',    attribute:'ice',eggGroup:['humanoid','monster'],heightMin:1.61,heightMax:2.31,weightMin:156.0,weightMax:187.0,stage:3,region:'-',trait: '打雪仗 — 初始能量为0，入场前己方精灵每放1次冰系技能，回复3能量。',evolvesTo:null,evolvesFrom:135,desc:'冰原上的巨大雪人之王。' },

    // 呼呼猪 → 獠牙猪 (NO.137~138)
    { id:137, name: '呼呼猪',
      image:'https://patchwiki.biligame.com/images/rocom/e/e8/8vuqx5j838k85ddgjcl56zhh42wtfqa.png',ename:'OinkOinkPig',  attribute:['ice','ground'],eggGroup:['animal'],heightMin:0.52,heightMax:0.75,weightMin:6.8,weightMax:8.9,stage:1,region:'-',trait: '冻土 — 每携带1个冰系技能进入战斗，地系技能威力+10%。',evolvesTo:[138],evolvesFrom:null,desc:'呼呼大睡的小猪精灵。' },
    { id:138, name: '獠牙猪',
      image:'https://patchwiki.biligame.com/images/rocom/e/e8/8vuqx5j838k85ddgjcl56zhh42wtfqa.png',ename:'TuskBoar',     attribute:['ice','ground'],eggGroup:['animal'],heightMin:0.77,heightMax:1.1,weightMin:52.8,weightMax:67.4,stage:2,region:'-',trait: '冻土 — 每携带1个冰系技能进入战斗，地系技能威力+10%。',evolvesTo:null,evolvesFrom:137,desc:'长出锋利獠牙的凶猛野猪。' },

    // 雪娃娃 → 冰封怨灵 → 雪灵 (NO.139~141)
    { id:139, name: '雪娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/2/2f/e14xbg7hrv1sv43e1qqhk145dsjcd3x.png',ename:'SnowDoll',     attribute:'ice',eggGroup:['fairy'],heightMin:0.29,heightMax:0.42,weightMin:6.8,weightMax:8.16,stage:1,region:'-',trait: '冰封 — 在场时，敌方全技能能耗+1。',evolvesTo:[140],evolvesFrom:null,desc:'用雪堆成的娃娃精灵。' },
    { id:140, name: '冰封怨灵',
      image:'https://patchwiki.biligame.com/images/rocom/2/2f/e14xbg7hrv1sv43e1qqhk145dsjcd3x.png',ename:'FrozenVengefulSpirit',attribute:'ice',eggGroup:['fairy'],heightMin:0.96,heightMax:1.37,weightMin:24.5,weightMax:31.6,stage:2,region:'-',trait: '冰封 — 在场时，敌方全技能能耗+1。',evolvesTo:[141],evolvesFrom:139,desc:'被封印在冰中的怨恨灵魂。' },
    {id:141, name: '雪灵',
      image:'https://patchwiki.biligame.com/images/rocom/2/2f/e14xbg7hrv1sv43e1qqhk145dsjcd3x.png',  ename:'SnowSpirit',   attribute:'ice',eggGroup:['fairy'],heightMin:1.09,heightMax:1.56,weightMin:56.4,weightMax:68.4,stage:3,region:'-',trait: '冰封 — 在场时，敌方全技能能耗+1。',evolvesTo:null,evolvesFrom:140,desc:'纯净无瑕的冰雪之灵。' ,
        battle: {
          trait: '冰封:PP消耗+2',
          tier: 'T1',
          recommend: 'PVP冰系法术控制/输出。暴风雪+极寒领域的冻结体系。',
          pairing: ["雪影娃娃","冰封怨灵"],
          teams: ["冰系队","控制队"],
          skills: {
            pve: [
                    { name: '暴风雪', type: '冰', pp: 4, power: '90(魔攻)', effect: '高威力冰系魔攻AOE，可能冻结敌人。' },
            { name: '冰冻之风', type: '冰', pp: 3, power: '55(魔攻)', effect: '降低敌方速度并造成伤害。' },
            { name: '极寒领域', type: '冰', pp: 4, power: '-', effect: '展开冰领域持续造成伤害或降低敌方属性。' },
            { name: '霜甲术', type: '冰', pp: 3, power: '-', effect: '提升自身防御能力增加生存。' }
            ],
            pvp: [
                    { name: '暴风雪', type: '冰', pp: 4, power: '90(魔攻)', effect: '主输出+可能的冻结控制。' },
            { name: '极寒领域', type: '冰', pp: 4, power: '-', effect: '场地控场+持续伤害。' },
            { name: '冰冻之风', type: '冰', pp: 3, power: '55(魔攻)', effect: '降速控制。' },
            { name: '霜甲术', type: '冰', pp: 3, power: '-', effect: '保命用。' }
            ]
          }
        }
      },

    // 大耳帽兜系列 (NO.142~144)
    { id:142, name: '大耳帽兜',
      image:'https://patchwiki.biligame.com/images/rocom/9/90/5nj4in6eecm1rhiqat7avfogm5l3cx0.png',ename:'BigEarHoodie', attribute:['ice','cute'],eggGroup:['humanoid','fairy'],heightMin:0.39,heightMax:0.42,weightMin:8.39,weightMax:10.7,stage:1,region:'-',trait: '捉迷藏 — 使敌方获得冻结时，也会使其获得全技能能耗+1。',evolvesTo:[143],evolvesFrom:null,desc:'戴大耳朵帽子的可爱精灵。' },
    { id:143, name: '帽兜娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/9/90/5nj4in6eecm1rhiqat7avfogm5l3cx0.png',ename:'HoodDoll',     attribute:['ice','cute'],eggGroup:['humanoid','fairy'],heightMin:0.4,heightMax:0.57,weightMin:19.05,weightMax:26.8,stage:2,region:'-',trait: '捉迷藏 — 使敌方获得冻结时，也会使其获得全技能能耗+1。',evolvesTo:[144],evolvesFrom:142,desc:'帽兜进化后的娃娃形态。' },
    {id:144, name: '雪影娃娃',
      image:'https://patchwiki.biligame.com/images/rocom/9/90/5nj4in6eecm1rhiqat7avfogm5l3cx0.png',ename:'SnowShadowDoll',attribute:['ice','cute'],eggGroup:['humanoid','fairy'],heightMin:0.64,heightMax:0.92,weightMin:31.8,weightMax:36.6,stage:3,region:'-',trait: '捉迷藏 — 使敌方获得冻结时，也会使其获得全技能能耗+1。',evolvesTo:null,evolvesFrom:143,desc:'带有雪影能力的神秘娃娃。',
        battle: {
          trait: '捉迷藏:使敌方冻结时也获得全技能能耗+1',
          tier: 'T1',
          recommend: 'PVP冰系控制/冻结流。捉迷藏特性叠冰冻+能耗压制。首领化入场叠层后高频控场，搭配霜天当头棒喝/冰墙体系。',
          pairing: ["雪灵","迪莫","绒光优优","尖嘴狐仙"],
          teams: ["冰系队","控制冻结队","混合队"],
          skills: {
            pve: [
                    { name: '风吹雪', type: '冰', pp: 4, power: '40(魔攻)', effect: '低威力但多次触发冰冻效果。核心控场技。' },
                    { name: '霜降', type: '冰', pp: 3, power: '-', effect: '降低敌方速度并叠加冰冻层数。' },
            { name: '冰墙', type: '冰', pp: 4, power: '-', effect: '大幅减免物理伤害。防御核心。' },
            { name: '落星', type: '冰', pp: 3, power: '30(魔攻)', effect: '触发星陨印记造成额外伤害。' }
            ],
            pvp: [
                    { name: '风吹雪', type: '冰', pp: 4, power: '40(魔攻)', effect: '高频触发冻结+能耗压制，控场核心。' },
            { name: '冰墙', type: '冰', pp: 4, power: '-', effect: '减伤保命站场。' },
            { name: '霜降', type: '冰', pp: 3, power: '-', effect: '降速+叠冰冻层数。' },
            { name: '落星', type: '冰', pp: 3, power: '30(魔攻)', effect: '补刀或触发印记爆发。' }
            ]
          }
        }
      },

    // 权杖系列 (NO.145~146)
    { id:145, name: '权杖-II',ename:'ScepterII',    attribute:'machine',eggGroup:['mech'],heightMin:0.60,heightMax:0.72,weightMin:18,weightMax:25,stage:2,region:'-',trait: '机械变式 — 自己携带的技能每回合位置变化时，该技能能耗-1。',evolvesTo:[146],evolvesFrom:null,desc:'权杖型机械精灵第二代。' },
    { id:146, name: '权杖-V',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.146_权杖-%E2%85%A4.webp',ename:'ScepterV',      attribute:'machine',eggGroup:['mech'],heightMin:0.95,heightMax:1.14,weightMin:35,weightMax:48,stage:3,region:'-',trait: '机械变式 — 自己携带的技能每回合位置变化时，该技能能耗-1。',evolvesTo:null,evolvesFrom:145,desc:'第五代权杖型机械精灵。' },

    // 灵狐系列 (NO.147~149)
    { id:147, name: '灵狐',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/nmkg7ux0y9xb2o2q92ircdz5t11die4.png',  ename:'SpiritFox',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.147_灵狐.webp',     attribute:['fire','ice'],eggGroup:['animal'],heightMin:0.56,heightMax:0.8,weightMin:7.4,weightMax:8.9,stage:1,region:'-',trait: '灵魂灼伤 — 冰系技能使敌方获得4层灼烧，火系技能使敌方获得2层冻结。',evolvesTo:[148],evolvesFrom:null,desc:'通灵性的狐狸精灵。' },
    { id:148, name: '九尾狐',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/nmkg7ux0y9xb2o2q92ircdz5t11die4.png',ename:'NineTailFox',   attribute:['fire','ice'],eggGroup:['animal'],heightMin:0.77,heightMax:1.11,weightMin:13.08,weightMax:21.05,stage:2,region:'-',trait: '灵魂灼伤 — 冰系技能使敌方获得4层灼烧，火系技能使敌方获得2层冻结。',evolvesTo:[149],evolvesFrom:147,desc:'拥有九条尾巴的狐仙。' },
    {id:149, name: '尖嘴狐仙',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/nmkg7ux0y9xb2o2q92ircdz5t11die4.png',ename:'SharpFoxFairy',attribute:['fire','ice'],eggGroup:['animal'],heightMin:1.34,heightMax:1.92,weightMin:69.5,weightMax:78.5,stage:3,region:'-',trait: '灵魂灼伤 — 冰系技能使敌方获得4层灼烧，火系技能使敌方获得2层冻结。',evolvesTo:null,evolvesFrom:148,desc:'修行千年的狐仙。' ,
        battle: {
          trait: '灵魂灼烧:冰→灼烧+4 / 火→冻结+2',
          tier: 'T0',
          recommend: 'PVP火冰双系物理爆发/状态联动流。灵魂灼烧特性使冰技能挂灼烧、火技能挂冻结，双系交叉增益！霜降起手叠冰冻→暴风雪扩大层数→怨力冲击收割。',
          pairing: ["迪莫","罗隐","雪灵","翠顶夫人"],
          teams: ["混合输出队","控制爆发队","火冰联攻队"],
          skills: {
            pve: [
                    { name: '暴风雪', type: '冰', pp: 4, power: '90(魔攻)', effect: '高威力冰系AOE输出。' },
                    { name: '急速冷冻', type: '冰', pp: 3, power: '-', effect: '快速冻结敌方或降低速度。' },
            { name: '烈焰冲撞', type: '火', pp: 4, power: '90(物攻)', effect: '高威力火系物攻。' },
                    { name: '火焰吐息', type: '火', pp: 4, power: '70(魔攻)', effect: '稳定火系魔攻补充。' }
            ],
            pvp: [
                    { name: '霜降', type: '冰', pp: 3, power: '-', effect: '【起手控】单次命中叠加多层冰冻。灵魂灼烧额外+4灼烧！' },
            { name: '暴风雪', type: '冰', pp: 4, power: '90(魔攻)', effect: '【扩大层数】AOE范围伤害+扩散冰冻。' },
            { name: '怨力冲击', type: '火', pp: 3, power: '-', effect: '【收割】冰冻状态下威力爆炸，击杀追击。' },
            { name: '急速冷冻', type: '冰', pp: 3, power: '-', effect: '【保命/控制】快速冻结打断或自保。' }
            ]
          }
        }
      },

    // 里奥 → 灵羽勇士 → 圣羽翼王 (NO.150~152)
    { id:150, name: '里奥',
      image:'https://patchwiki.biligame.com/images/rocom/6/62/mwlzc3o7mx5a5oo646nljqm8jsuhypa.png',  ename:'Leo',           attribute:'flying',eggGroup:['animal','none'],heightMin:0.35,heightMax:0.45,weightMin:4.8,weightMax:5.9,stage:1,region:'-',trait: '飓风 — 对本精灵的技能，若其他翼系精灵携带相同技能，则获得迅捷。被敌方精灵击败时，自己额外损失1点魔力。',evolvesTo:[151],evolvesFrom:null,desc:'光属性的勇敢小狮子。团本/战令宠，不可孵蛋。' },
    { id:151, name: '灵羽勇士',
      image:'https://patchwiki.biligame.com/images/rocom/6/62/mwlzc3o7mx5a5oo646nljqm8jsuhypa.png',ename:'SpiritFeatherWarrior',attribute:'flying',eggGroup:['animal','none'],heightMin:0.55,heightMax:0.65,weightMin:11.5,weightMax:14.2,stage:2,region:'-',trait: '飓风 — 对本精灵的技能，若其他翼系精灵携带相同技能，则获得迅捷。被敌方精灵击败时，自己额外损失1点魔力。',evolvesTo:[152],evolvesFrom:150,desc:'披着光之羽翼的勇士。' },
    {id:152, name: '圣羽翼王',
      image:'https://patchwiki.biligame.com/images/rocom/6/62/mwlzc3o7mx5a5oo646nljqm8jsuhypa.png',ename:'HolyFeatherWingKing',attribute:'flying',eggGroup:['none'],heightMin:2.1,heightMax:2.55,weightMin:195.0,weightMax:296.0,stage:3,isBoss:true,region:'-',trait: '飓风 — 对本精灵的技能，若其他翼系精灵携带相同技能，则获得迅捷。被敌方精灵击败时，自己额外损失1点魔力。',evolvesTo:null,evolvesFrom:151,desc:'光属性的最强王者之一！团本宠，无法孵蛋。' ,
        battle: {
          trait: '飓风:同系同技能触发迅捷; 迅捷满层后自动按序无PP连招',
          tier: 'T0',
          recommend: 'PVP无穷连击流核心C位。队友(翼龙/翠顶夫人)先手叠迅捷BUFF→翼王满层后按学习顺序自动无PP无限连招收割。种族值686顶级面板速125物防128。学习顺序必须严格：热身→三连→乘胜→疾风。',
          pairing: ["翠顶夫人","翼龙","皇家狮鹫"],
          teams: ["PVP翼系连击队","无穷连击队"],
          skills: {
            pve: [
                    { name: '暴风眼', type: '翼', pp: 3, power: '-', effect: '行动时连击数+100%！PVE必带核心技能。' },
            { name: '力量增效', type: '普通', pp: 2, power: '-', effect: '物攻+100%。配合暴风眼走物攻路线。' },
            { name: '回旋风暴', type: '翼', pp: 4, power: '100(魔攻)', effect: '100威力魔攻稳定输出。' },
            { name: '扇风', type: '翼', pp: 4, power: '-', effect: '先于敌攻则威力+50%。依赖速度优势。' }
            ],
            pvp: [
                    { name: '疾风连袭', type: '翼', pp: 3, power: '-', effect: '【1号位】主伤害技能。配合热身/三连/乘胜的BUFF打出爆炸伤害。' },
            { name: '热身运动', type: '普通', pp: 2, power: '-', effect: '【2号位】物攻强化+速度提升。为后续连招叠加攻击力。必须排在第2位。' },
            { name: '三连击', type: '翼', pp: 3, power: '-', effect: '【3号位】连续攻击3次。每次命中叠加效果。必须排在第3位。' },
            { name: '乘胜追击', type: '翼', pp: 3, power: '-', effect: '【4号位】击败目标后追加攻击。收尾收割技。必须排在第4位。' }
            ]
          }
        }
      },

    // 松仔 → 松叶羊 → 针叶巡林 (NO.153~155)
    { id:153, name: '松仔',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/mx2ffpj0hb4meeslt3zqap12rr2empf.png',  ename:'PineKid',       attribute:['grass','fighting'],eggGroup:['animal'],heightMin:0.52,heightMax:0.68,weightMin:6.25,weightMax:7.85,stage:1,region:'-',trait: '野性感官 — 应对成功后，下次行动先手+1。',evolvesTo:[154],evolvesFrom:null,desc:'头上顶着松果的小家伙。',
        battle: {
          "trait": "草系先手反击",
          "tier": "T3",
          "recommend": "PVE草系过渡。成功应对后获得先手权优势。",
          "pairing": [
          "松叶羊",
          "针叶巡林",
          "格兰球"
          ],
          "teams": [
          "草系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "叶片斩",
          "type": "草",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "草系基础物攻。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸取生命续航。"
          },
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "先手草系攻击。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
        }
          ],
          "pvp": [
          {
          "name": "叶片斩",
          "type": "草",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "应对成功后先手+1再放。"
          },
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "先手草攻。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "续航恢复。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守应对。"
        }
          ]
        }
        }
    },
    { id:154, name: '松叶羊',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/mx2ffpj0hb4meeslt3zqap12rr2empf.png',ename:'PineLeafSheep', attribute:['grass','fighting'],eggGroup:['animal'],heightMin:1.08,heightMax:1.33,weightMin:19.09,weightMax:28.06,stage:2,region:'-',trait: '野性感官 — 应对成功后，下次行动先手+1。',evolvesTo:[155],evolvesFrom:153,desc:'松针覆盖身体的羊儿。',
        battle: {
          "trait": "松叶羊进阶",
          "tier": "T2",
          "recommend": "PVP草系先手中转。进化后属性提升，野性感官更容易触发先手。",
          "pairing": [
          "松仔",
          "针叶巡林",
          "抱枕松鼠"
          ],
          "teams": [
          "草系先手队"
          ],
          "skills": {
          "pve": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "草系高威物攻。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "65(魔攻)",
          "effect": "草系魔攻AOE。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "持续吸血。"
          },
          {
          "name": "甜美香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方双攻。"
        }
          ],
          "pvp": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "先手高威物攻。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "65(魔攻)",
          "effect": "先手AOE。"
          },
          {
          "name": "甜美香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱后安全应对。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "续航来源。"
        }
          ]
        }
        }
    },
    { id:155, name: '针叶巡林',
      image:'https://patchwiki.biligame.com/images/rocom/c/ce/mx2ffpj0hb4meeslt3zqap12rr2empf.png',ename:'NeedlePatrol', attribute:['grass','fighting'],eggGroup:['animal'],heightMin:1.86,heightMax:2.14,weightMin:56.8,weightMax:69.02,stage:3,region:'-',trait: '野性感官 — 应对成功后，下次行动先手+1。',evolvesTo:null,evolvesFrom:154,desc:'守护森林的巡林员。',
        battle: {
          "trait": "针叶巡林草王",
          "tier": "T2",
          "recommend": "PVP草系先手核心。最终形态属性优秀，野性感官提供稳定先手机制。",
          "pairing": [
          "松叶羊",
          "抱枕松鼠",
          "绿耳松鼠"
          ],
          "teams": [
          "草系先手队"
          ],
          "skills": {
          "pve": [
          {
          "name": "木叶旋风",
          "type": "草",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "草系超高威物攻必杀。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "草系大范围AOE。"
          },
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "稳定草系物攻。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "大量吸血续航。"
        }
          ],
          "pvp": [
          {
          "name": "木叶旋风",
          "type": "草",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "先手必杀级物攻。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "先手AOE清场。"
          },
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "稳定主攻。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "恐怖续航量。"
        }
          ]
        }
        }
    },

    // 小勇狮 → 炽焰狮 → 炽心勇狮 (NO.156~158)
    { id:156, name: '小勇狮',
      image:'https://patchwiki.biligame.com/images/rocom/a/ae/h52qsm9zkr20bazu590ccljhin1f5ci.png',ename:'BraveLionCub',  attribute:['fire','fighting'],eggGroup:['animal','monster'],heightMin:0.67,heightMax:0.81,weightMin:8.5,weightMax:12.05,stage:1,region:'-',trait: '圣火骑士 — 应对成功后，下次攻击威力翻倍。',evolvesTo:[157],evolvesFrom:null,desc:'勇敢的小狮子幼崽。',
        battle: {
          "trait": "圣火骑士翻倍",
          "tier": "T2",
          "recommend": "PVP火系翻倍输出。成功应对一次后下一次攻击威力×2，爆发潜力极高。",
          "pairing": [
          "炽焰狮",
          "炽心勇狮",
          "豪炎战神"
          ],
          "teams": [
          "火系翻倍队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "低能耗火系应对用。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "火系物攻应对。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "翻倍后160威爆发！"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方命中率助应对。"
        }
          ],
          "pvp": [
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "低能耗应对→触发圣火骑士。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "翻倍后140威力爆发。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "应对或翻倍输出皆可。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避助应对成功率。"
        }
          ]
        }
        }
    },
    { id:157, name: '炽焰狮',
      image:'https://patchwiki.biligame.com/images/rocom/a/ae/h52qsm9zkr20bazu590ccljhin1f5ci.png',ename:'BlazeLion',    attribute:['fire','fighting'],eggGroup:['animal','monster'],heightMin:1.12,heightMax:1.45,weightMin:46.02,weightMax:67.05,stage:2,region:'-',trait: '圣火骑士 — 应对成功后，下次攻击威力翻倍。',evolvesTo:[158],evolvesFrom:156,desc:'鬃毛燃烧着烈焰的雄狮。',
        battle: {
          "trait": "炽焰狮进阶",
          "tier": "T2",
          "recommend": "PVP火系翻倍中转。进化后属性更高，翻倍伤害更可观。",
          "pairing": [
          "小勇狮",
          "炽心勇狮",
          "火焰猿"
          ],
          "teams": [
          "火系翻倍队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "翻倍后160威力！"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物攻翻倍选项。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "稳定火系输出。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避辅助。"
        }
          ],
          "pvp": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "翻倍后160威爆发。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物攻翻倍130威。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避助应对。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "常规输出。"
        }
          ]
        }
        }
    },
    { id:158, name: '炽心勇狮',
      image:'https://patchwiki.biligame.com/images/rocom/a/ae/h52qsm9zkr20bazu590ccljhin1f5ci.png',ename:'BlazeHeartBraveLion',attribute:['fire','fighting'],eggGroup:['animal','monster'],heightMin:1.78,heightMax:1.97,weightMin:94.7,weightMax:118.05,stage:3,region:'-',trait: '圣火骑士 — 应对成功后，下次攻击威力翻倍。',evolvesTo:null,evolvesFrom:157,desc:'心中燃着永不熄灭之火的狮子王。',
        battle: {
          "trait": "炽心勇狮火王",
          "tier": "T1",
          "recommend": "PVP火系翻倍王牌。最终形态+圣火骑士=单次攻击可达240威力！火系最强爆发之一。",
          "pairing": [
          "炽焰狮",
          "豪炎战神",
          "武者鸡"
          ],
          "teams": [
          "火系翻倍队",
          "爆发队"
          ],
          "skills": {
          "pve": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "翻倍后220威力毁灭性必杀。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "翻倍后180威稳定爆发。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "物攻翻倍150威。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避保命等待翻倍时机。"
        }
          ],
          "pvp": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "翻倍220威——火系核弹级别。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "180威稳定爆发。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避等待应对时机。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "物攻选项。"
        }
          ]
        }
        }
    },

    // 水滴蛇系列 (NO.159~161)
    { id:159, name: '水滴蛇',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/77ajklz8fw3oeg6kncdco7txsg5jtv0.png',ename:'WaterDropSnake',attribute:['water','fighting'],eggGroup:['amphibian','fairy'],heightMin:0.53,heightMax:0.69,weightMin:2.25,weightMax:4.1,stage:1,region:'-',trait: '思维之盾 — 应对成功后，下次行动技能能耗-5。',evolvesTo:[160],evolvesFrom:null,desc:'身体如水滴般晶莹的小蛇。',
        battle: {
          "trait": "思维之盾降耗",
          "tier": "T2",
          "recommend": "PVP水系降耗型。应对成功后下次技能能耗直降5点，大招变平A。",
          "pairing": [
          "蓝漪水灵",
          "风铃鲨",
          "深蓝鲸"
          ],
          "teams": [
          "水系降耗队"
          ],
          "skills": {
          "pve": [
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "应对后下次能耗极低。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "降耗后几乎免费的大招。"
          },
          {
          "name": "泡泡围困",
          "type": "水",
          "pp": 3,
          "power": "50(魔攻)",
          "effect": "控制+应对。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "防御应对。"
        }
          ],
          "pvp": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "降耗后接近0能耗的95威大招。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "降耗后连发神器。"
          },
          {
          "name": "泡泡围困",
          "type": "水",
          "pp": 3,
          "power": "50(魔攻)",
          "effect": "控制+应对双重作用。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "防御应对触发思维之盾。"
        }
          ]
        }
        }
    },
    { id:160, name: '水蛇锁',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/77ajklz8fw3oeg6kncdco7txsg5jtv0.png',ename:'WaterSnakeLock',attribute:['water','fighting'],eggGroup:['amphibian','fairy'],heightMin:0.94,heightMax:1.2,weightMin:18.07,weightMax:27.05,stage:2,region:'-',trait: '思维之盾 — 应对成功后，下次行动技能能耗-5。',evolvesTo:[161],evolvesFrom:159,desc:'身体盘绕如锁链的蛇类精灵。' },
    { id:161, name: '游蛇魔使',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/77ajklz8fw3oeg6kncdco7txsg5jtv0.png',ename:'SnakeMage',   attribute:['water','fighting'],eggGroup:['amphibian','fairy'],heightMin:2.15,heightMax:3.0,weightMin:71.05,weightMax:86.05,stage:3,region:'-',trait: '思维之盾 — 应对成功后，下次行动技能能耗-5。',evolvesTo:null,evolvesFrom:160,desc:'精通水魔法的蛇族使者。' },

    { id:162, name: '公平鸽',
      image:'https://patchwiki.biligame.com/images/rocom/1/14/mfnm7m1309w6i464sm5kuagyb6yzxoi.png',ename:'FairDove',     attribute:'normal',eggGroup:['flying'],heightMin:0.45,heightMax:0.6,weightMin:2.5,weightMax:3.94,stage:1,region:'-',trait: '衡量 — 入场时，复制敌方的增益。在场时，若敌方获得增益自己也会获得。',evolvesTo:null,evolvesFrom:null,desc:'象征公平正义的鸽子。' },

    // 小怂猫 → 怒目怂猫 (NO.163~164)
    { id:163, name: '小怂猫',
      image:'https://patchwiki.biligame.com/images/rocom/1/14/5se74tvs12feru1mjsfsvfq8c0mr1gg.png',ename:'TimidCat',     attribute:'fighting',eggGroup:['animal','humanoid'],heightMin:0.59,heightMax:0.84,weightMin:19.6,weightMax:22.5,stage:1,region:'-',trait: '威慑 — 打断敌方时，被打断的技能进入2回合冷却。',forms:['默认样子','山间竹林的样子'],evolvesTo:[164],evolvesFrom:null,desc:'看起来怂怂的但其实很有勇气。' },
    { id:164, name: '怒目怂猫',
      image:'https://patchwiki.biligame.com/images/rocom/1/14/5se74tvs12feru1mjsfsvfq8c0mr1gg.png',ename:'AngryTimidCat',attribute:'fighting',eggGroup:['animal','humanoid'],heightMin:1.3,heightMax:1.65,weightMin:64.5,weightMax:78.5,stage:2,region:'-',trait: '威慑 — 打断敌方时，被打断的技能进入2回合冷却。',forms:['默认样子','山间竹林的样子'],evolvesTo:null,evolvesFrom:163,desc:'怒目圆睁的勇敢怂猫。' },

    // 小狮鹫 → 神圣狮鹫 → 皇家狮鹫 (NO.165~167) - 含地区形态
    { id:165, name: '小狮鹫',ename:'LittleGriffin', attribute:'flying',eggGroup:['flying','animal'],heightMin:0.71,heightMax:1.02,weightMin:11.5,weightMax:17.5,stage:1,region:'-',trait:'-',forms:['崖间地的样子','高山地的样子'],evolvesTo:[166],evolvesFrom:null,desc:'狮身鹰首的神话生物幼崽。' },
    { id:166, name: '神圣狮鹫',ename:'HolyGriffin',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.166_神圣狮鹫（崖间地的样子）.webp',  attribute:'flying',eggGroup:['flying','animal'],heightMin:1.01,heightMax:1.44,weightMin:49.5,weightMax:56.8,stage:2,region:'-',trait:'-',forms:['崖间地的样子','高山地的样子'],evolvesTo:[167],evolvesFrom:165,desc:'散发神圣光芒的狮鹫。' },
    {id:167, name: '皇家狮鹫',ename:'RoyalGriffin',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.167_皇家狮鹫（崖间地的样子）.webp', attribute:'flying',eggGroup:['flying','animal'],heightMin:1.72,heightMax:2.45,weightMin:125.0,weightMax:170.5,stage:3,region:'-',trait:'-',forms:['崖间地的样子','高山地的样子'],evolvesTo:null,evolvesFrom:166,desc:'翱翔天际的王者坐骑。' ,
        battle: {
          trait: '高速翼系连击爆发',
          tier: 'T1',
          recommend: 'PVP翼系物理输出。猛禽俯冲+高空盘旋的空中压制。',
          pairing: ["圣羽翼王","翼龙","翠顶夫人"],
          teams: ["翼系队","物理空袭队"],
          skills: {
            pve: [
                    { name: '猛禽俯冲', type: '翼', pp: 3, power: '95(物攻)', effect: '高威力俯冲物攻，核心输出。' },
            { name: '烈风击', type: '翼', pp: 4, power: '70(物攻)', effect: '稳定翼系物攻补充。' },
            { name: '羽刃风暴', type: '翼', pp: 4, power: '60(物攻)', effect: '多段物攻或AOE伤害。' },
            { name: '高空盘旋', type: '翼', pp: 3, power: '-', effect: '提升闪避或获得有利状态。' }
            ],
            pvp: [
                    { name: '猛禽俯冲', type: '翼', pp: 3, power: '95(物攻)', effect: '主输出。' },
            { name: '烈风击', type: '翼', pp: 4, power: '70(物攻)', effect: '常规输出。' },
            { name: '高空盘旋', type: '翼', pp: 3, power: '-', effect: '保命或蓄力。' },
            { name: '羽刃风暴', type: '翼', pp: 4, power: '60(物攻)', effect: '破盾/多段伤害。' }
            ]
          }
        }
      },

    // 圆眼蜘蛛进化链 (NO.168~170)
    { id:168, name: '圆眼蜘蛛',
      image:'https://patchwiki.biligame.com/images/rocom/5/58/rjtkumy4o5iea035omnat6k7rsy4gpj.png',ename:'RoundEyedSpider',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.168_圆眼蜘蛛.webp',attribute:'bug',eggGroup:['insect'],heightMin:0.48,heightMax:0.68,weightMin:3.5,weightMax:5.0,stage:1,region:'-',trait: '毒腺 — 使用能耗小于等于1的技能时，敌方获得4层中毒。',evolvesTo:[169],evolvesFrom:null,desc:'有着圆圆大眼睛的小蜘蛛。',
        battle: {
          "trait": "毒腺幼蛛",
          "tier": "T3",
          "recommend": "PVE虫毒过渡形态。芋香巨角蛛的前置体，毒腺机制一致。",
          "pairing": [
          "芋香巨角蛛",
          "黄蜂后",
          "花影羚羊"
          ],
          "teams": [
          "虫毒过渡队"
          ],
          "skills": {
          "pve": [
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "35(物攻)",
          "effect": "低能耗叠毒。"
          },
          {
          "name": "蛛丝缠绕",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方速度。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "虫群集体攻击。"
        }
          ],
          "pvp": [
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "35(物攻)",
          "effect": "低能耗触发毒腺叠4层毒。"
          },
          {
          "name": "蛛丝缠绕",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "减速控制。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "补盲输出。"
        }
          ]
        }
        }
    },
    { id:169, name: '尖角蜘蛛',
      image:'https://patchwiki.biligame.com/images/rocom/5/58/rjtkumy4o5iea035omnat6k7rsy4gpj.png',ename:'HornedSpider',  attribute:['bug','poison'],eggGroup:['insect'],heightMin:0.68,heightMax:0.98,weightMin:7.75,weightMax:9.6,stage:2,region:'-',trait: '毒腺 — 使用能耗小于等于1的技能时，敌方获得4层中毒。',evolvesTo:[170],evolvesFrom:168,desc:'头上长出尖角。' },
    { id:170, name: '芋香巨角蛛',
      image:'https://patchwiki.biligame.com/images/rocom/5/58/rjtkumy4o5iea035omnat6k7rsy4gpj.png',ename:'TaroHornedSpider',attribute:['bug','poison'],eggGroup:['insect'],heightMin:0.9,heightMax:1.29,weightMin:31.75,weightMax:43.6,stage:3,region:'-',trait: '毒腺 — 使用能耗小于等于1的技能时，敌方获得4层中毒。',evolvesTo:null,evolvesFrom:169,desc:'散发芋头香味的大型蜘蛛。',
        battle: {
          "trait": "毒腺低能耗叠毒",
          "tier": "T2",
          "recommend": "PVP虫毒控制流。使用能耗≤1的技能给敌方叠4层中毒，低成本控场。",
          "pairing": [
          "圆眼蜘蛛",
          "黄蜂后",
          "花影羚羊"
          ],
          "teams": [
          "虫毒队",
          "低能耗控制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "低能耗毒系攻击触发毒腺。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "高威力毒系物攻。"
          },
          {
          "name": "蛛网束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "限制敌方行动。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "全场施加中毒。"
        }
          ],
          "pvp": [
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "核心触发技——0/1能耗叠4层毒！"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "高威追击收割。"
          },
          {
          "name": "蛛网束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "控制敌方无法换人。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "铺毒铺垫。"
        }
          ]
        }
        }
    },

    // 波波螺系列 (NO.171~173)
    { id:171, name: '波波螺',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/n1wjd2lnqi3s5qqgpetirog1lcu6y3o.png',ename:'WaveSnail',    attribute:['ground','water'],eggGroup:['amphibian','mineral'],heightMin:0.32,heightMax:0.42,weightMin:4.85,weightMax:5.65,stage:1,region:'-',trait: '消波块 — 每携带1个水系技能进入战斗，地系技能能耗-1。',forms:['被污染的样子'],evolvesTo:[172],evolvesFrom:null,desc:'随波浪起伏的小螺蛳。',
        battle: {
          "trait": "消波块地系降耗",
          "tier": "T2",
          "recommend": "PVE地水混合降耗。携带水系技能越多，地系技能能耗越低。",
          "pairing": [
          "消波螺",
          "嗜波螺",
          "蓝漪水灵"
          ],
          "teams": [
          "地水联攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "地系主攻，带水技能后低能耗。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "水系输出同时触发消波块。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
          },
          {
          "name": "沙尘暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "场地伤害。"
        }
          ],
          "pvp": [
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "核心输出——消波块降低地系能耗。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "水系副输出+触发特性。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守站场。"
          },
          {
          "name": "沙尘暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "环境压制。"
        }
          ]
        }
        }
    },
    { id:172, name: '消波螺',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/n1wjd2lnqi3s5qqgpetirog1lcu6y3o.png',ename:'WaveCancellingSnail',attribute:['ground','water'],eggGroup:['amphibian','mineral'],heightMin:0.68,heightMax:0.82,weightMin:46.5,weightMax:69.9,stage:2,region:'-',trait: '消波块 — 每携带1个水系技能进入战斗，地系技能能耗-1。',forms:['被污染的样子'],evolvesTo:[173],evolvesFrom:171,desc:'能消除波浪力量的螺类。',
        battle: {
          "trait": "消波块进阶",
          "tier": "T2",
          "recommend": "PVP地水混合中转。进化后属性提升，消波块效果更强。",
          "pairing": [
          "波波螺",
          "嗜波螺",
          "深蓝鲸"
          ],
          "teams": [
          "地水联攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "地系物攻增强。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威水系必杀。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "地系魔攻。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升。"
        }
          ],
          "pvp": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威爆发+触发消波块。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物攻选择。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "地系稳定输出。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守。"
        }
          ]
        }
        }
    },
    { id:173, name: '嗜波螺',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/n1wjd2lnqi3s5qqgpetirog1lcu6y3o.png',ename:'WaveDevourerSnail',attribute:['ground','water'],eggGroup:['amphibian','mineral'],heightMin:1.2,heightMax:1.6,weightMin:86.8,weightMax:113.0,stage:3,region:'-',trait: '消波块 — 每携带1个水系技能进入战斗，地系技能能耗-1。',forms:['被污染的样子'],evolvesTo:null,evolvesFrom:172,desc:'嗜吞噬波浪的巨型螺类。',
        battle: {
          "trait": "消波块终极形态",
          "tier": "T1",
          "recommend": "PVP地水双修王牌。最终形态+满水系技能=地系几乎零能耗。",
          "pairing": [
          "消波螺",
          "波波螺",
          "圣剑-X"
          ],
          "teams": [
          "地水王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "地震",
          "type": "地",
          "pp": 3,
          "power": "100(物攻)",
          "effect": "地系超高威物攻必杀！"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "水系对等威力必杀。"
          },
          {
          "name": "岩石风暴",
          "type": "岩",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "岩系AOE输出。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "大幅防御。"
        }
          ],
          "pvp": [
          {
          "name": "地震",
          "type": "地",
          "pp": 3,
          "power": "100(物攻)",
          "effect": "消波块加持下低能耗100威物攻核弹。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "水系爆发。"
          },
          {
          "name": "岩石风暴",
          "type": "岩",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "AOE补盲。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "生存保障。"
        }
          ]
        }
        }
    },

    // 菇菇丁系列 (NO.174~176)
    { id:174, name: '菇菇丁',
      image:'https://patchwiki.biligame.com/images/rocom/d/df/t98utjcp899ymqdm8bvpapuoajiri1k.png',ename:'MushroomBaby',  attribute:['ground','grass'],eggGroup:['plant'],heightMin:0.25,heightMax:0.35,weightMin:1.1,weightMax:2.76,stage:1,region:'-',trait: '多人宿舍 — 自己的能量可以超过能量上限。',evolvesTo:[175],evolvesFrom:null,desc:'最小的蘑菇精灵。',
        battle: {
          "trait": "超能宿舍储能",
          "tier": "T2",
          "recommend": "PVP地系储能型。能量可超出上限意味着能连续放大招，非常灵活。",
          "pairing": [
          "多菇丁",
          "嗜波螺",
          "迪莫"
          ],
          "teams": [
          "储能队",
          "地系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "地系基础输出。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "岩系物攻。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升攒能量。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化自身。"
        }
          ],
          "pvp": [
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "超能量后可连续释放多次。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "物攻选项。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "快速堆能量超上限。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后爆发。"
        }
          ]
        }
        }
    },
    { id:175, name: '多菇丁',
      image:'https://patchwiki.biligame.com/images/rocom/d/df/t98utjcp899ymqdm8bvpapuoajiri1k.png',ename:'MultiMushroom',attribute:['ground','grass'],eggGroup:['plant'],heightMin:0.6,heightMax:0.7,weightMin:5.4,weightMax:6.8,stage:2,region:'-',trait: '多人宿舍 — 自己的能量可以超过能量上限。',evolvesTo:[176],evolvesFrom:174,desc:'身上长满多个蘑菇头。',
        battle: {
          "trait": "多菇丁进阶",
          "tier": "T2",
          "recommend": "PVP地系储能主力。进化后能量池更大，连发能力更强。",
          "pairing": [
          "菇菇丁",
          "嗜波螺"
          ],
          "teams": [
          "储能队"
          ],
          "skills": {
          "pve": [
          {
          " name": "岩石风暴",
          "type": "岩",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "岩系AOE输出。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "地系魔攻增强。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "岩系物攻。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升。"
        }
          ],
          "pvp": [
          {
          " name": "岩石风暴",
          "type": "岩",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "AOE连发神器——多人宿舍允许超限能量。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "单体主攻。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物理备选。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "快速充能。"
        }
          ]
        }
        }
    },
    { id:176, name: '九幽菇',
      image:'https://patchwiki.biligame.com/images/rocom/d/df/t98utjcp899ymqdm8bvpapuoajiri1k.png',ename:'NineDarkMushroom',attribute:['ground','grass'],eggGroup:['plant'],heightMin:1.55,heightMax:1.65,weightMin:42.0,weightMax:58.0,stage:3,region:'-',trait: '多人宿舍 — 自己的能量可以超过能量上限。',evolvesTo:null,evolvesFrom:175,desc:'来自九幽深处的神秘蘑菇。' },

    // 斑斑 → 斑枭 (NO.177~178)
    { id:177, name: '斑斑',
      image:'https://patchwiki.biligame.com/images/rocom/a/a7/9yzfpa9tuduznirix7p82i40nqlkfep.png',  ename:'SpotSpot',     attribute:'flying',eggGroup:['flying'],heightMin:0.47,heightMax:0.6,weightMin:4.79,weightMax:6.17,stage:1,region:'-',trait: '逐魂鸟 — 能耗小于等于1的攻击技能，无法对自己造成伤害。',evolvesTo:[178],evolvesFrom:null,desc:'身上有斑点的小猫头鹰。' },
    { id:178, name: '斑枭',
      image:'https://patchwiki.biligame.com/images/rocom/a/a7/9yzfpa9tuduznirix7p82i40nqlkfep.png',  ename:'SpottedOwl',   attribute:'flying',eggGroup:['flying'],heightMin:0.68,heightMax:0.81,weightMin:15.9,weightMax:23.8,stage:2,region:'-',trait: '逐魂鸟 — 能耗小于等于1的攻击技能，无法对自己造成伤害。',evolvesTo:null,evolvesFrom:177,desc:'斑点猫头鹰的成熟形态。' },

    // 草头鸭 → 卷毛鸭 (NO.179~180)
    { id:179, name: '草头鸭',
      image:'https://patchwiki.biligame.com/images/rocom/e/e3/23v62tjddaret7a0jlqww40noorvmir.png',ename:'GrassHeadDuck', attribute:'grass',eggGroup:['flying','amphibian'],heightMin:0.5,heightMax:0.72,weightMin:4.9,weightMax:6.57,stage:1,region:'-',trait: '得寸进尺 — 天气为雨天，或处于其他水系环境中时，获得双攻+100%。',evolvesTo:[180],evolvesFrom:null,desc:'头上长着草叶的小鸭子。' },
    { id:180, name: '卷毛鸭',
      image:'https://patchwiki.biligame.com/images/rocom/e/e3/23v62tjddaret7a0jlqww40noorvmir.png',ename:'CurlyDuck',     attribute:['grass','fighting'],eggGroup:['flying','amphibian'],heightMin:0.9,heightMax:1.29,weightMin:35.8,weightMax:48.06,stage:2,region:'-',trait: '得寸进尺 — 天气为雨天，或处于其他水系环境中时，获得双攻+100%。',evolvesTo:null,evolvesFrom:179,desc:'卷毛的水系鸭子。' },

    // 海豹系列 (NO.181~182)
    { id:181, name: '海豹战士',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/n6mz568m7fofwz1w3lkc5qk6bsxfy9s.png',ename:'SealWarrior',  attribute:['fighting','water'],eggGroup:['flying','amphibian'],heightMin:0.64,heightMax:0.92,weightMin:69.5,weightMax:87.6,stage:2,region:'-',trait: '身经百练 — 己方精灵每应对1次，自己入场时水系和武系技能威力+20%。',evolvesTo:[182],evolvesFrom:null,desc:'英勇的海豹战士。' },
    { id:182, name: '海豹船长',
      image:'https://patchwiki.biligame.com/images/rocom/b/b5/n6mz568m7fofwz1w3lkc5qk6bsxfy9s.png',ename:'SealCaptain',  attribute:['fighting','water'],eggGroup:['flying','amphibian'],heightMin:1.26,heightMax:1.8,weightMin:145.0,weightMax:165.0,stage:3,region:'-',trait: '身经百练 — 己方精灵每应对1次，自己入场时水系和武系技能威力+20%。',evolvesTo:null,evolvesFrom:181,desc:'率领海豹船队的船长。' },

    // 号儿鱼 → 圆号鱼 (NO.183~184)
    {id:183, name: '号儿鱼',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/b8v1gy6rvsqs6g02hko4oa7bj0z04gk.png',ename:'TrumpetFish',   attribute:'water',eggGroup:['ocean'],heightMin:0.31,heightMax:0.42,weightMin:3.9,weightMax:5.25,stage:1,region:'-',trait: '泛音列 — 使用状态技能后，敌方获得【聒噪】技能的效果，持续3回合。',evolvesTo:[184],evolvesFrom:null,desc:'体型像号角的鱼类。',
        battle: {
          trait: '能量操控:增敌耗/减我耗',
          tier: 'T2',
          recommend: 'PVE水系基础输出。前期过渡精灵，泡沫幻影可脱离。',
          pairing: ["圆号鱼","水灵","翠顶夫人"],
          teams: ["水属性队","前期阵容"],
          skills: {
            pve: [
                    { name: '泡沫幻影', type: '水', pp: 3, power: '80(魔攻)', effect: '造成魔攻伤害并提供脱离机会。核心生存技。' },
            { name: '打湿', type: '水', pp: 3, power: '-', effect: '使敌方变为湿润状态，受到火系伤害增加。' },
            { name: '落雨', type: '水', pp: 4, power: '-', effect: '开启雨天天气，强化水系技能。' },
            { name: '甜心续航', type: '水', pp: 4, power: '-', effect: '恢复生命值的续航技能。' }
            ],
            pvp: [
                    { name: '泡沫幻影', type: '水', pp: 3, power: '80(魔攻)', effect: '输出+脱离两不误。' },
            { name: '落雨', type: '水', pp: 4, power: '-', effect: '开天气支援队友。' },
            { name: '打湿', type: '水', pp: 3, power: '-', effect: '挂湿润DEBUFF配合火系队友。' },
            { name: '甜心续航', type: '水', pp: 4, power: '-', effect: '中转回复。' }
            ]
          }
        }
      },
    { id:184, name: '圆号鱼',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/b8v1gy6rvsqs6g02hko4oa7bj0z04gk.png',ename:'RoundTrumpetFish',attribute:'water',eggGroup:['ocean'],heightMin:0.79,heightMax:0.98,weightMin:10.9,weightMax:15.8,stage:2,region:'-',trait: '泛音列 — 使用状态技能后，敌方获得【聒噪】技能的效果，持续3回合。',evolvesTo:null,evolvesFrom:183,desc:'号儿鱼的圆润进化形态。' ,
        battle: {
          trait: '能量操控:增敌耗/减我耗',
          tier: 'T1',
          recommend: 'PVP水系消耗/控制。甜心续航+落雨的辅助定位。',
          pairing: ["号儿鱼","水灵","翠顶夫人"],
          teams: ["水属性队","消耗辅助队"],
          skills: {
            pve: [
                    { name: '泡沫幻影', type: '水', pp: 4, power: '80(魔攻)', effect: '水系魔攻输出并可脱离。' },
            { name: '落雨', type: '水', pp: 4, power: '-', effect: '开雨天天气强化水系技能。' },
            { name: '打湿', type: '水', pp: 3, power: '-', effect: '挂湿润DEBUFF。' },
            { name: '甜心续航', type: '水', pp: 4, power: '-', effect: '回复生命的续航技。' }
            ],
            pvp: [
                    { name: '泡沫幻影', type: '水', pp: 4, power: '80(魔攻)', effect: '输出+脱身。' },
            { name: '落雨', type: '水', pp: 4, power: '-', effect: '天气控制。' },
            { name: '打湿', type: '水', pp: 3, power: '-', effect: 'DEBUFF辅助。' },
            { name: '甜心续航', type: '水', pp: 4, power: '-', effect: '中转回复。' }
            ]
          }
        }},

    // 甜田螺 → 壳乙螺 (NO.185~186)
    { id:185, name: '甜田螺',
      image:'https://patchwiki.biligame.com/images/rocom/5/55/bck3l95dm5ub49vdc3ung79bh0edirl.png',ename:'SweetSnail',    attribute:['water','cute'],eggGroup:['soft','fairy'],heightMin:0.41,heightMax:0.58,weightMin:7.5,weightMax:9.4,stage:1,region:'-',trait: '守护者 — 己方其他精灵每有1层萌化，自己入场时全技能能耗-1。',evolvesTo:[186],evolvesFrom:null,desc:'甜甜的田螺精灵。' },
    { id:186, name: '壳乙螺',
      image:'https://patchwiki.biligame.com/images/rocom/5/55/bck3l95dm5ub49vdc3ung79bh0edirl.png',ename:'KeYiLuo',        attribute:['water','cute'],eggGroup:['soft','fairy'],heightMin:0.68,heightMax:0.97,weightMin:11.05,weightMax:19.04,stage:2,region:'-',trait: '守护者 — 己方其他精灵每有1层萌化，自己入场时全技能能耗-1。',evolvesTo:null,evolvesFrom:185,desc:'硬壳包裹的甜螺进化。' },

    { id:187, name: '卡洛儿',
      image:'https://patchwiki.biligame.com/images/rocom/5/55/bck3l95dm5ub49vdc3ung79bh0edirl.png',ename:'Carlo',         attribute:['water','cute'],eggGroup:['soft','fairy'],heightMin:0.7,heightMax:1.0,weightMin:21.4,weightMax:25.6,stage:1,region:'-',trait: '守护者 — 己方其他精灵每有1层萌化，自己入场时全技能能耗-1。',evolvesTo:null,evolvesFrom:null,desc:'可爱的卡洛儿精灵。' },

    // 棋棋系列 - 多职业分支 (NO.188~192)
    { id:188, name: '棋棋',  ename: 'ChessPiece',   attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:0.35,heightMax:0.47,weightMin:10.7,weightMax:14.5, stage: 1, region: '-', trait: '腾挪 — 攻击技能应对1次后，回满状态，变为棋绮后。', forms: ['白子', '黑子'], evolvesTo: [189], evolvesFrom: null, desc: '像棋子一样的可爱精灵，分黑白两种形态。' },
    { id:189, name: '棋骑士',ename: 'ChessKnight',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.189_棋骑士（白子）.webp',  attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:0.98,heightMax:1.35,weightMin:43.06,weightMax:60.09, stage: 2, region: '-', trait: '腾挪 — 攻击技能应对1次后，回满状态，变为棋绮后。', forms: ['白子', '黑子'], evolvesTo: [190,191,192], evolvesFrom: 188, desc: '骑士棋子的进化，可向多个职业发展。' },
    { id:190, name: '棋齐垒',ename: 'ChessFortress',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.190_棋齐垒（白子）.webp', attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:1.45,heightMax:1.71,weightMin:58.01,weightMax:70.05, stage: 3, region: '-', trait: '保卫 — 防御技能应对2次后，回满状态，变为棋绮后。', forms: ['白子', '黑子'], evolvesTo: null, evolvesFrom: 189, desc: '堡垒型的棋子战士。',
        battle: {
          "trait": "保卫变身防御",
          "tier": "T2",
          "recommend": "PVP武系坦克。防御技能成功应对2次后满血变身棋绮，无限循环。",
          "pairing": [
          "武者鸡",
          "豪炎战神",
          "圣剑-X"
          ],
          "teams": [
          "武系坦克队",
          "变身流"
          ],
          "skills": {
          "pve": [
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "岩系物攻作为防御应对。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "大幅提升防御触发保卫。"
          },
          {
          "name": "十字劈",
          "type": "武",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "武系高威物攻。"
          },
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "提升双防强化生存。"
        }
          ],
          "pvp": [
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御应对触发保卫计数。"
          },
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "双防提升增加容错。"
          },
          {
          "name": "十字劈",
          "type": "武",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "变身后的主力输出。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物理副输出。"
        }
          ]
        }
        }
    },
    { id:191, name: '棋祈督',ename: 'ChessBishop',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.191_棋祈督（白子）.webp',  attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:0.98,heightMax:1.35,weightMin:38.07,weightMax:47.05, stage: 3, region: '-', trait: '好象坏象 — 状态技能应对1次后，回满状态，变为棋绮后。', forms: ['白子', '黑子'], evolvesTo: null, evolvesFrom: 189, desc: '主教型的棋子法师。',
        battle: {
          "trait": "好象坏象变身",
          "tier": "T1",
          "recommend": "PVP武系状态变身坦克。状态技能应对成功1次就回满变棋绮后，无限循环！",
          "pairing": [
          "棋绮后",
          "武者鸡",
          "棋齐垒"
          ],
          "teams": [
          "武系变身队"
          ],
          "skills": {
          "pve": [
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "提升双防触发好象坏象计数。"
          },
          {
          "name": "十字劈",
          "type": "武",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "变身后的主攻。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物攻补充。"
          },
          {
          "name": "冥想",
          "type": "超能",
          "pp": 3,
          "power": "-",
          "effect": "提升特防应对。"
        }
          ],
          "pvp": [
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "防御应对→触发好象坏象→回满变棋绮。"
          },
          {
          "name": "十字劈",
          "type": "武",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "变身后主力输出。"
          },
          {
          "name": "冥想",
          "type": "超能",
          "pp": 3,
          "power": "-",
          "effect": "特防提升增加应对成功率。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物攻补刀。"
        }
          ]
        }
        }
    },
    { id:192, name: '棋绮后',ename: 'ChessQueen',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.192_棋绮后（白子）.webp',   attribute: ['fighting','ground'],eggGroup: ['fairy'], heightMin:1.66,heightMax:1.81,weightMin:30.01,weightMax:41.02, stage: 3, region: '-', trait: '渗透 — 己方精灵每使用1次武系或地系技能，自己入场时获得攻防+5%。', forms: ['白子', '黑子'], evolvesTo: null, evolvesFrom: 189, desc: '女王型的最强棋子精灵。',
        battle: {
          "trait": "渗透叠加增伤",
          "tier": "T1",
          "recommend": "PVP武系渗透叠伤王牌。队友频繁使用武/地技能=自己入场时攻防越来越高。",
          "pairing": [
          "棋祈督",
          "炽心勇狮",
          "豪炎战神"
          ],
          "teams": [
          "武地渗透队"
          ],
          "skills": {
          "pve": [
          {
          " name": "十字劈",
          "type": "武",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "武系高威物攻——渗透加成后更高！"
          },
          {
          "name": "地震",
          "type": "地",
          "pp": 3,
          "power": "95(物攻)",
          "effect": "地系超高威物攻同样享受渗透。"
          },
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "自身强化。"
          },
          {
          "name": "硬撑",
          "type": "普通",
          "pp": 3,
          "power": "50(物攻)",
          "effect": "低能耗应对触发渗透计数。"
        }
          ],
          "pvp": [
          {
          " name": "地震",
          "type": "地",
          "pp": 3,
          "power": "95(物攻)",
          "effect": "渗透叠满后一击必杀级伤害。"
          },
          {
          "name": "十字劈",
          "type": "武",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "武系主攻同样享受渗透。"
          },
          {
          "name": "硬撑",
          "type": "普通",
          "pp": 3,
          "power": "50(物攻)",
          "effect": "低成本应对给队友叠渗透层数。"
          },
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "自我强化。"
        }
          ]
        }
        }
    },

    // 奔波鼠 → 流浪鼠 (NO.193~194)
    { id:193, name: '奔波鼠',
      image:'https://patchwiki.biligame.com/images/rocom/d/d0/qc6wa2f2bpo8uv28uf5hmgw5lmy3evv.png',ename: 'RunningMouse',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.193_奔波鼠.webp',  attribute: 'ground',eggGroup: ['animal'], heightMin:0.46,heightMax:0.6,weightMin:3.71,weightMax:6.4, stage: 1, region: '-', trait: '奔波命 — 使用防御技能后，回合结束时脱离。', evolvesTo: [194], evolvesFrom: null, desc: '四处奔波的小老鼠。',
        battle: {
          "trait": "奔波命折返",
          "tier": "T2",
          "recommend": "PVP地系折返型。使用防御技能后自动脱离——完美的换人节点控制者。",
          "pairing": [
          "流浪鼠",
          "迪莫",
          "帕尔萨斯"
          ],
          "teams": [
          "折返控制队",
          "地系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御后自动脱离换人。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "地系输出。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "主动安全退场。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后防御脱离。"
        }
          ],
          "pvp": [
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御→回合末自动脱离（奔波命核心）。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "主动退场配合奔波命。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "出场时打一套再脱离。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后再防御脱离。"
        }
          ]
        }
        }
    },
    { id:194, name: '流浪鼠',
      image:'https://patchwiki.biligame.com/images/rocom/d/d0/qc6wa2f2bpo8uv28uf5hmgw5lmy3evv.png',ename: 'WanderMouse',  attribute: 'ground',eggGroup: ['animal'], heightMin:0.88,heightMax:1.23,weightMin:59.6,weightMax:74.3, stage: 2, region: '-', trait: '奔波命 — 使用防御技能后，回合结束时脱离。', evolvesTo: null, evolvesFrom: 193, desc: '流浪天涯的鼠族精灵。',
        battle: {
          "trait": "流浪鼠进阶",
          "tier": "T2",
          "recommend": "PVP奔波命中转主力。进化后属性更高，折返控制更稳。",
          "pairing": [
          "奔波鼠",
          "绒光优优"
          ],
          "teams": [
          "折返控制队"
          ],
          "skills": {
          "pve": [
          {
          " name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "岩系物攻。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "地系魔攻。"
          },
          {
          " name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御触发奔波命脱离。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "主动退场。"
        }
          ],
          "pvp": [
          {
          " name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御后自动脱离——完美中转。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "物攻输出。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "主动退场。"
          },
          {
          "name": "流沙",
          "type": "地",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "魔攻选择。"
        }
          ]
        }
        }
    },

    // 呆小路 → 舞动路路 → 白发路路 (NO.195~197)
    { id:195, name: '呆小路',
      image:'https://patchwiki.biligame.com/images/rocom/b/be/4zu0yqt23bt4cva2bswky1q5ivje1tw.png',ename: 'DullLuLu',     attribute: ['grass','cute'],eggGroup: ['animal','humanoid'], heightMin:0.58,heightMax:0.83,weightMin:4.5,weightMax:5.8, stage: 1, region: '-', trait: '营养液泡 — 获得增益时，额外获得层数+2。', evolvesTo: [196], evolvesFrom: null, desc: '呆萌的小鹿精灵。',
        battle: {
          "trait": "营养液泡增益放大",
          "tier": "T2",
          "recommend": "PVE草系增益放大。每次增益额外+2层=Buff效率翻倍以上。",
          "pairing": [
          "舞动路路",
          "格兰球",
          "针叶巡林"
          ],
          "teams": [
          "草增益队"
          ],
          "skills": {
          "pve": [
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "草系先手攻击。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸取生命（持续增益）。"
          },
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "双防提升触发营养液泡。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化自身大幅触发营养液泡。"
        }
          ],
          "pvp": [
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "核心——强化时营养液泡额外+2层增益！"
          },
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "增益后高层数输出。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "续航来源。"
          },
          {
          "name": "健美",
          "type": "武",
          "pp": 3,
          "power": "-",
          "effect": "防御增益触发营养液泡。"
        }
          ]
        }
        }
    },
    { id:196, name: '舞动路路',
      image:'https://patchwiki.biligame.com/images/rocom/b/be/4zu0yqt23bt4cva2bswky1q5ivje1tw.png',ename: 'DanceLuLu',    attribute: ['grass','cute'],eggGroup: ['animal','humanoid'], heightMin:0.69,heightMax:0.99,weightMin:7.4,weightMax:9.1, stage: 2, region: '-', trait: '营养液泡 — 获得增益时，额外获得层数+2。', evolvesTo: [197], evolvesFrom: 195, desc: '喜欢跳舞的路路。',
        battle: {
          "trait": "舞动路路进阶",
          "tier": "T2",
          "recommend": "PVP草系增益中转。进化后属性更高，增益叠加更快。",
          "pairing": [
          "呆小路",
          "白发路路",
          "格兰球"
          ],
          "teams": [
          "草增益队"
          ],
          "skills": {
          "pve": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "草系物攻增强。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "60(魔攻)",
          "effect": "草系AOE。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "大幅强化触发营养液泡。"
          },
          {
          "name": "甜美香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方也是给自己叠buff。"
        }
          ],
          "pvp": [
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后层数爆炸式增长。"
          },
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "高层数增益后输出爆表。"
          },
          {
          "name": "甜美香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方同时触发营养液泡。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "60(魔攻)",
          "effect": "AOE清场。"
        }
          ]
        }
        }
    },
    { id:197, name: '白发路路',
      image:'https://patchwiki.biligame.com/images/rocom/b/be/4zu0yqt23bt4cva2bswky1q5ivje1tw.png',ename: 'WhiteHairLuLu',attribute: ['grass','cute'],eggGroup: ['animal','humanoid'], heightMin:0.89,heightMax:1.27,weightMin:15.5,weightMax:21.6, stage: 3, region: '-', trait: '营养液泡 — 获得增益时，额外获得层数+2。', evolvesTo: null, evolvesFrom: 196, desc: '白发苍苍的路路长者。',
        battle: {
          "trait": "白发路路草王",
          "tier": "T1",
          "recommend": "PVP草系增益终极形态。营养液泡让每个增益都翻倍生效，后期属性膨胀恐怖。",
          "pairing": [
          "舞动路路",
          "针叶巡林",
          "绿耳松鼠"
          ],
          "teams": [
          "草增益王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "木叶旋风",
          "type": "草",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "草系超高威物攻必杀。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "大范围AOE。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "核心强化技——营养液泡×2层数。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "大量吸血续航。"
        }
          ],
          "pvp": [
          {
          "name": "木叶旋风",
          "type": "草",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "满增益后一击必杀。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "每次强化=正常2倍以上的增益层数！"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "高层数AOE。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "恐怖吸血量。"
        }
          ]
        }
        }
    },

    // 逗逗 → 气球猫 → 梦想三三 (NO.198~200)
    { id:198, name: '逗逗',
      image:'https://patchwiki.biligame.com/images/rocom/2/27/5mkpc1wb4947ua7m9efws2u0sdgfgvq.png',  ename: 'DouDou',       attribute: 'cute',eggGroup: ['monster','fairy'], heightMin:0.3,heightMax:0.4,weightMin:0.45,weightMax:1.53, stage: 1, region: '-', trait: '鼓气 — 使用能耗为3的技能时，获得攻防+20%。', evolvesTo: [199], evolvesFrom: null, desc: '爱逗人开心的精灵。',
        battle: {
          "trait": "鼓气萌系成长",
          "tier": "T2",
          "recommend": "PVP萌系成长型。每用一个3能耗技能就获得攻防+20%，越打越强。",
          "pairing": [
          "古钟蛇",
          "寒音蛇",
          "艾莉儿"
          ],
          "teams": [
          "萌系成长队"
          ],
          "skills": {
          "pve": [
          {
          "name": "治愈之光",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "治疗队友+触发鼓气攻防+20%。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方+鼓气成长。"
          },
          {
          "name": "祈愿",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "回复生命+鼓气成长。"
          },
          {
          "name": "光之壁",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "特防提升+鼓气成长。"
        }
          ],
          "pvp": [
          {
          "name": "治愈之光",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "3能耗完美触发鼓气+攻防20%。"
          },
          {
          "name": "光之壁",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "特防提升+鼓气双重收益。"
          },
          {
          "name": "祈愿",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "续航+鼓气成长。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱+鼓气叠加。"
        }
          ]
        }
        }
    },
    { id:199, name: '气球猫',
      image:'https://patchwiki.biligame.com/images/rocom/2/27/5mkpc1wb4947ua7m9efws2u0sdgfgvq.png',ename: 'BalloonCat',   attribute: 'cute',eggGroup: ['animal','fairy'], heightMin:0.41,heightMax:0.59,weightMin:0.95,weightMax:2.15, stage: 2, region: '-', trait: '鼓气 — 使用能耗为3的技能时，获得攻防+20%。', evolvesTo: [200], evolvesFrom: 198, desc: '像气球一样飘浮的猫咪。' },
    { id:200, name: '梦想三三',
      image:'https://patchwiki.biligame.com/images/rocom/2/27/5mkpc1wb4947ua7m9efws2u0sdgfgvq.png',ename: 'DreamThreeThree',attribute:'cute',eggGroup:['monster','fairy'],heightMin:1.18,heightMax:1.45,weightMin:12.04,weightMax:19.04,stage:3,region:'-',trait: '鼓气 — 使用能耗为3的技能时，获得攻防+20%。',evolvesTo:null,evolvesFrom:199,desc:'追逐梦想的三三精灵。' },

    // 花怨鳗 → 鳗尾兽 (NO.201~202)
    { id:201, name: '花怨鳗',
      image:'https://patchwiki.biligame.com/images/rocom/0/02/167gulpq7gmilrurzc4r0yattm4ai8z.png',ename: 'FlowerResentEel',attribute:['ground','grass'],eggGroup: ['ocean','amphibian'], heightMin:0.58,heightMax:0.68,weightMin:2.9,weightMax:4.0, stage: 1, region: '-', trait: '铃兰晚钟 — 首次入场时，失去自己一半的当前生命。', evolvesTo: [202], evolvesFrom: null, desc: '带着花之怨念的鳗鱼。' },
    { id:202, name: '鳗尾兽',
      image:'https://patchwiki.biligame.com/images/rocom/0/02/167gulpq7gmilrurzc4r0yattm4ai8z.png',ename: 'EtailMonster',  attribute: ['ground','grass'],eggGroup: ['ocean','amphibian'], heightMin:0.79,heightMax:0.92,weightMin:19.8,weightMax:36.5, stage: 2, region: '-', trait: '铃兰晚钟 — 首次入场时，失去自己一半的当前生命。', evolvesTo: null, evolvesFrom: 201, desc: '鳗鱼尾巴的兽型进化。' },

    // 伊雷龙 → 伊兰龙 (NO.203~204)
    { id:203, name: '伊雷龙',
      image:'https://patchwiki.biligame.com/images/rocom/6/66/iq3mle7m6g6cwmo5u0xh5afcf6fzsmd.png',ename: 'YiLeiDragon',  attribute: 'dragon',eggGroup: ['dragon'], heightMin:0.72,heightMax:0.94,weightMin:27.2,weightMax:34.0, stage: 1, region: '-', trait: '嫉妒 — 蓄力状态下，可以使用任一携带技能。', evolvesTo: [204], evolvesFrom: null, desc: '蕴含雷电之力的幼龙。' },
    { id:204, name: '伊兰龙',ename: 'YiLanDragon',   attribute: 'dragon',eggGroup: ['dragon','fairy'], heightMin:5.5,heightMax:7.0,weightMin:228.0,weightMax:342.0, stage: 2, region: '-', trait: '游弋 — 蓄力时可使用任一携带技能，且获得双防+100%。', evolvesTo: null, evolvesFrom: 203, desc: '伊雷龙的成年龙形态。' },

    // 拉特 → 酷拉 (NO.205~206)
    { id:205, name: '拉特',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/4pqv1u751dss8ff0u87y747ot29b4m9.png',  ename: 'Rate',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.205_拉特.webp',          attribute: 'electric',eggGroup: ['fairy'], heightMin:0.49,heightMax:0.61,weightMin:7.7,weightMax:8.6, stage: 1, region: '-', trait: '噼啪！ — 入场后首次行动，所选技能使用次数+1。', evolvesTo: [206], evolvesFrom: null, desc: '冷酷帅气的冰系精灵。' },
    {id:206, name: '酷拉',
      image:'https://patchwiki.biligame.com/images/rocom/a/a1/4pqv1u751dss8ff0u87y747ot29b4m9.png',  ename: 'Coola',         attribute: 'electric',eggGroup: ['fairy'], heightMin:0.99,heightMax:1.24,weightMin:19.5,weightMax:23.5, stage: 2, region: '-', trait: '噼啪！ — 入场后首次行动，所选技能使用次数+1。', evolvesTo: null, evolvesFrom: 205, desc: '酷拉进化后的更强形态。' ,
        battle: {
          trait: '噼啪:首回合双重释放',
          tier: 'T1',
          recommend: 'PVP三连破爆发流。闪击折返+热身的机动输出组合。',
          pairing: ["火神","翼龙","圣羽翼王"],
          teams: ["机动爆发队"],
          skills: {
            pve: [
                    { name: '热身运动', type: '武', pp: 3, power: '-', effect: '赋予状态提升下次攻击威力。起手强化。' },
            { name: '三连破', type: '武', pp: 3, power: '-', effect: '连续三次攻击的爆发技能。核心输出。' },
            { name: '闪击折返', type: '武', pp: 4, power: '-', effect: '先手攻击后撤回，类似急折返的战术技能。' },
            { name: '荟萃', type: '萌', pp: 3, power: '-', effect: '恢复与强化兼顾。' }
            ],
            pvp: [
                    { name: '热身运动', type: '武', pp: 3, power: '-', effect: '蓄力准备爆发。' },
            { name: '三连破', type: '武', pp: 3, power: '-', effect: '爆发核弹。' },
            { name: '闪击折返', type: '武', pp: 4, power: '-', effect: '先手打一套再撤，灵活战术。' },
            { name: '荟萃', type: '萌', pp: 3, power: '-', effect: '中转恢复。' }
            ]
          }
        }
      },

    // 闪电环系列 (NO.207~209)
    { id:207, name: '闪电环',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/o9no3jygnit09u4bsn3o7ezrji62524.png',ename: 'LightningRing', attribute: 'electric',eggGroup: ['magic'], heightMin:0.37,heightMax:0.46,weightMin:2.4,weightMax:3.1, stage: 1, region: '-', trait: '防过载保护 — 每次行动后脱离。', evolvesTo: [208], evolvesFrom: null, desc: '释放闪电的环状精灵。' },
    { id:208, name: '刺电环',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/o9no3jygnit09u4bsn3o7ezrji62524.png',ename: 'SpikeElectricRing',attribute:'electric',eggGroup:['magic'],heightMin:0.58,heightMax:0.73,weightMin:10.16,weightMax:16.74,stage:2,region:'-',trait: '防过载保护 — 每次行动后脱离。',evolvesTo:[209],evolvesFrom:207,desc:'带尖刺的电环。' },
    { id:209, name: '荆棘电环',
      image:'https://patchwiki.biligame.com/images/rocom/b/b8/o9no3jygnit09u4bsn3o7ezrji62524.png',ename: 'ThornElectricRing',attribute:'electric',eggGroup:['magic'],heightMin:0.78,heightMax:0.98,weightMin:29.5,weightMax:34.3,stage:3,region:'-',trait: '防过载保护 — 每次行动后脱离。',evolvesTo:null,evolvesFrom:208,desc:'荆棘缠绕的电环终极形态。' },

    // 小箱怪 → 迷迷箱怪 (NO.210~211)
    { id:210, name: '小箱怪',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/ocy3pzt2cn0mmx85cm8is2ulwy8s2ii.png',ename: 'LittleBoxMonster',attribute:['machine','illusion'],eggGroup:['fairy'],heightMin:0.34,heightMax:0.46,weightMin:4.45,weightMax:6.81,stage:1,region:'-',trait: '虚假宝箱 — 自己力竭时，敌方获得攻防+20%。',evolvesTo:[211],evolvesFrom:null,desc:'像小箱子一样的怪物。',
        battle: {
          "trait": "虚假宝箱诅咒",
          "tier": "T3",
          "recommend": "PVP机械献祭流。自己力竭时敌方获得攻防+20%——看似负面实则为队友创造机会。",
          "pairing": [
          "声波缇塔",
          "贝古斯",
          "圣剑-X"
          ],
          "teams": [
          "机械献祭队"
          ],
          "skills": {
          "pve": [
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方特防。"
          },
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "机械系物攻输出。"
          },
          {
          "name": "自爆",
          "type": "普通",
          "pp": 3,
          "power": "150(物攻)",
          "effect": "超高威力但自身力竭触发虚假宝箱。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御多撑回合。"
        }
          ],
          "pvp": [
          {
          "name": "自爆",
          "type": "普通",
          "pp": 3,
          "power": "150(物攻)",
          "effect": "核弹级输出+触发虚假宝箱buff。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防铺垫自爆伤害。"
          },
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "常规输出。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "延长存活时间。"
        }
          ]
        }
        }
    },
    { id:211, name: '迷迷箱怪',
      image:'https://patchwiki.biligame.com/images/rocom/0/0a/ocy3pzt2cn0mmx85cm8is2ulwy8s2ii.png',ename: 'MysteryBoxMonster',attribute:['machine','illusion'],eggGroup:['fairy'],heightMin:0.64,heightMax:0.72,weightMin:18.02,weightMax:24.4,stage:2,region:'-',trait: '虚假宝箱 — 自己力竭时，敌方获得攻防+20%。',evolvesTo:null,evolvesFrom:210,desc:'迷雾缭绕的箱怪。',
        battle: {
          "trait": "虚假宝箱献祭",
          "tier": "T2",
          "recommend": "PVP机械献祭中转。小箱怪的进化版，力竭时给敌方debuff为队友创造收割机会。",
          "pairing": [
          "小箱怪",
          "声波缇塔",
          "贝古斯"
          ],
          "teams": [
          "机械献祭队"
          ],
          "skills": {
          "pve": [
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "机械系物攻增强。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防提高自爆/切割伤害。"
          },
          {
          "name": "自爆",
          "type": "普通",
          "pp": 3,
          "power": "150(物攻)",
          "effect": "核弹输出+虚假宝箱。"
          },
          {
          "name": "电磁场",
          "type": "电",
          "pp": 3,
          "power": "-",
          "effect": "场地铺设。"
        }
          ],
          "pvp": [
          {
          "name": "自爆",
          "type": "普通",
          "pp": 3,
          "power": "150(物攻)",
          "effect": "核弹+触发虚假宝箱debuff。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防铺垫。"
          },
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "常规输出。"
          },
          {
          "name": "电磁场",
          "type": "电",
          "pp": 3,
          "power": "-",
          "effect": "场地辅助。"
        }
          ]
        }
        }
    },

    // 古钟蛇 → 寒音蛇 (NO.212~213)
    { id:212, name: '古钟蛇',ename: 'AncientBellSnake',attribute:['cute','poison'],eggGroup:['amphibian','animal'],heightMin:0.95,heightMax:1.1,weightMin:6.9,weightMax:7.8,stage:2,region:'-',trait: '拨浪鼓 — 己方精灵每使用1次状态技能，自己入场时毒系和萌系技能威力+10。',forms:['本来的样子','本命年的样子'],evolvesTo:[213],evolvesFrom:null,desc:'背负古钟的蛇类精灵。',
        battle: {
          "trait": "拨浪鼓毒萌增幅",
          "tier": "T2",
          "recommend": "PVP毒萌混合增幅。队友使用状态技能越多，自己的毒/萌技能威力越高。",
          "pairing": [
          "寒音蛇",
          "逗逗",
          "红绒十字"
          ],
          "teams": [
          "毒萌增幅队"
          ],
          "skills": {
          "pve": [
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "全场施毒——拨浪鼓增伤后更痛。"
          },
          {
          "name": "治愈之光",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "萌系治疗+拨浪鼓增伤。"
          },
          {
          "name": "溶解",
          "type": "毒",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "毒系输出。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱+拨浪鼓计数。"
        }
          ],
          "pvp": [
          {
          "name": "治愈之光",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "萌系治疗——拨浪鼓叠满后治疗量可观。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "铺毒+触发拨浪鼓。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱同时给队友叠拨浪鼓层数。"
          },
          {
          "name": "溶解",
          "type": "毒",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "毒系输出。"
        }
          ]
        }
        }
    },
    { id:213, name: '寒音蛇',ename: 'ColdSoundSnake',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.213_寒音蛇（本来的样子）.webp',attribute:['cute','poison'],eggGroup:['amphibian','animal'],heightMin:1.85,heightMax:2.0,weightMin:65.0,weightMax:78.0,stage:3,region:'-',trait: '拨浪鼓 — 己方精灵每使用1次状态技能，自己入场时毒系和萌系技能威力+10。',forms:['本来的样子','本命年的样子'],evolvesTo:null,evolvesFrom:212,desc:'发出寒音的蛇类终极形态。',
        battle: {
          "trait": "寒音蛇终极",
          "tier": "T1",
          "recommend": "PVP毒萌增幅王牌。最终形态+满拨浪鼓层数=毒/萌技能威力翻倍以上！",
          "pairing": [
          "古钟蛇",
          "逗逗",
          "红绒十字"
          ],
          "teams": [
          "毒萌增幅王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "剧毒风暴",
          "type": "毒",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "毒系高威AOE——拨浪鼓加持后毁灭级。"
          },
          {
          "name": "圣光治愈",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "强力单体治疗——拨浪鼓翻倍治疗量。"
          },
          {
          "name": "治愈咏叹调",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "全体治疗。"
          },
          {
          "name": "腐蚀强酸",
          "type": "毒",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "持续毒伤。"
        }
          ],
          "pvp": [
          {
          "name": "剧毒风暴",
          "type": "毒",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "满拨浪鼓180+威力的毒系核弹。"
          },
          {
          "name": "圣光治愈",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "翻倍治疗量保命。"
          },
          {
          "name": "治愈咏叹调",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "全队续航。"
          },
          {
          "name": "腐蚀强酸",
          "type": "毒",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "压血线。"
        }
          ]
        }
        }
    },

    // 矮脚爬爬 (NO.214)
    { id:214, name: '矮脚爬爬',
      image:'https://patchwiki.biligame.com/images/rocom/4/4f/40765c203k2jjtugv9tbciczhr4jmxv.png',ename: 'ShortLegCrawl',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.214_矮脚爬爬.webp', attribute: 'bug',eggGroup: ['insect'], heightMin:0.28,heightMax:0.44,weightMin:3.3,weightMax:4.2, stage: 1, region: '-', trait: '振奋虫心 — 主动击败敌方后，己方队伍获得5次随机奉献。', evolvesTo: null, evolvesFrom: null, desc: '腿特别短的虫族精灵。',
        battle: {
          "trait": "振奋虫心击杀奖励",
          "tier": "T2",
          "recommend": "PVP虫系击杀奖励。每次主动击杀敌人给全队5次随机奉献——滚雪球利器。",
          "pairing": [
          "恶魔红钻",
          "黄蜂后",
          "花影羚羊"
          ],
          "teams": [
          "虫系击杀队"
          ],
          "skills": {
          "pve": [
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "虫群集体攻击。"
          },
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "35(物攻)",
          "effect": "低能耗补刀触发虫心。"
          },
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "提升防御存活到击杀。"
          },
          {
          "name": "蛛丝束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "限制敌方行动。"
        }
          ],
          "pvp": [
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "防守站场等待击杀机会。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "群体伤害抢击杀。"
          },
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "35(物攻)",
          "effect": "低能耗收尾触发振奋虫心。"
          },
          {
          "name": "蛛丝束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "控制留人。"
        }
          ]
        }
        }
    },

    // 恶魔红钻 → 火尾瓦特 → 火尾战士 → 烈火守护 (NO.215~218)
    { id:215, name: '恶魔红钻',
      image:'https://patchwiki.biligame.com/images/rocom/4/4f/40765c203k2jjtugv9tbciczhr4jmxv.png',ename: 'DevilRedDiamond',attribute:['bug','dark'],eggGroup:['monster'],heightMin:1.32,heightMax:1.55,weightMin:42.5,weightMax:62.0,stage:1,region:'-',trait: '振奋虫心 — 主动击败敌方后，己方队伍获得5次随机奉献。',evolvesTo:[216],evolvesFrom:null,desc:'红色钻晶恶魔精灵。',
        battle: {
          "trait": "恶魔红钻进阶",
          "tier": "T2",
          "recommend": "PVP虫暗击杀核心。进化后属性更高，击杀触发5次奉献的收益更大。",
          "pairing": [
          "矮脚爬爬",
          "黄蜂后",
          "芋香巨角蛛"
          ],
          "teams": [
          "虫暗击杀队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系高威魔攻抢击杀。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "群体伤害。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "高威补刀。"
          },
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "防守保命。"
        }
          ],
          "pvp": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系主攻抢击杀→触发振奋虫心。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "毒系追击。"
          },
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "防守等击杀时机。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "群体补刀。"
        }
          ]
        }
        }
    },
    { id:216, name: '火尾瓦特',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/9mmja7l04ln5fe2fn5dhql2nrh0tq4f.png',ename: 'FireTailWatt',  attribute:'fire',eggGroup:['monster'],heightMin:0.64,heightMax:0.92,weightMin:18.5,weightMax:21.2,stage:2,region:'-',trait: '蒸汽膨胀 — 己方精灵每使用1次火系技能，自己入场时获得全技能威力+10。',evolvesTo:[217],evolvesFrom:215,desc:'尾部燃烧火焰的瓦特精灵。',
        battle: {
          "trait": "蒸汽膨胀火系叠伤",
          "tier": "T2",
          "recommend": "PVP火系叠伤中转。队友频繁用火系技能=自己入场时全技能威力不断增长。",
          "pairing": [
          "火尾战士",
          "火焰猿",
          "豪炎战神"
          ],
          "teams": [
          "火系叠伤队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "蒸汽膨胀加持后的火系输出。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "低能耗触发蒸汽膨胀。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避辅助。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "火系物攻。"
        }
          ],
          "pvp": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "蒸汽膨胀叠满后威力爆炸。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "低能耗填充。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "物攻也享受蒸汽膨胀。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避保命。"
        }
          ]
        }
        }
    },
    { id:217, name: '火尾战士',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/9mmja7l04ln5fe2fn5dhql2nrh0tq4f.png',ename: 'FireTailWarrior',attribute:'fire',eggGroup:['monster'],heightMin:0.76,heightMax:1.09,weightMin:48.5,weightMax:58.6,stage:3,region:'-',trait: '蒸汽膨胀 — 己方精灵每使用1次火系技能，自己入场时获得全技能威力+10。',evolvesTo:[218],evolvesFrom:216,desc:'火焰之尾的战士形态。',
        battle: {
          "trait": "火尾战士终极",
          "tier": "T1",
          "recommend": "PVP火系叠伤王牌。最终形态+满蒸汽膨胀=全技能威力+50%~100%，每招都是大招。",
          "pairing": [
          "火尾瓦特",
          "炽心勇狮",
          "豪炎战神"
          ],
          "teams": [
          "火系叠伤王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "105(魔攻)",
          "effect": "蒸汽膨胀后200+威力的火系核弹。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "稳定高威输出——膨胀后170+。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "物攻140+威力。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避等膨胀叠满。"
        }
          ],
          "pvp": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "105(魔攻)",
          "effect": "满膨胀210威力——毁灭性打击。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "170威力稳定输出。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避等队友叠蒸汽膨胀。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "140威力物攻。"
        }
          ]
        }
        }
    },
    { id:218, name: '烈火守护',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/9mmja7l04ln5fe2fn5dhql2nrh0tq4f.png',ename: 'BlazingGuardian',attribute:'fire',eggGroup:['monster'],heightMin:0.99,heightMax:1.42,weightMin:76.5,weightMax:87.5,stage:3,region:'-',trait: '蒸汽膨胀 — 己方精灵每使用1次火系技能，自己入场时获得全技能威力+10。',evolvesTo:null,evolvesFrom:217,desc:'守护烈火的最终形态。' },

    // 里拉鳐 → 海枝枝 (NO.219~220)
    { id:219, name: '里拉鳐',
      image:'https://patchwiki.biligame.com/images/rocom/8/80/13gxjtrh4mt3mhyoc1is69gz7vfm3tv.png',ename: 'RilaRay',      attribute: 'water',eggGroup: ['ocean','fairy'], heightMin:0.94,heightMax:1.1,weightMin:38.6,weightMax:49.5, stage: 1, region: '-', trait: '吟游之弦 — 赋予的印记不会替换其他印记，而是同时生效。', evolvesTo: null, evolvesFrom: null, desc: '像鳐鱼一样的海洋精灵。' },
    { id:220, name: '海枝枝',ename: 'SeaBranchBranch',attribute:['water','ghost'],eggGroup: ['ocean','plant'], heightMin:0.75,heightMax:0.85,weightMin:3.51,weightMax:6.82, stage: 1, region: '-', trait: '珊瑚骨 — 敌方精灵离场时，自己获得全技能能耗-3。', forms: ['碧蓝珊瑚','杏黄百合','洋红沙丁','翠绿纶布'], evolvesTo: null, evolvesFrom: null, desc: '海中珊瑚枝状的精灵，有4种颜色形态！' },

    // 多西 → 库多西 → 波多西 (NO.221~223)
    { id:221, name: '多西',
      image:'https://patchwiki.biligame.com/images/rocom/9/94/hsqyxfmg0p0gz8s36uzb1b7ldd6etb1.png',  ename: 'Doxie',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.221_多西.webp',         attribute: ['machine','ground'],eggGroup: ['monster','mech'], heightMin:0.65,heightMax:0.94,weightMin:5.7,weightMax:7.1, stage: 1, region: '-', trait: '定向精炼 — 己方精灵每使用1次防御技能，自己入场时机械系和地面系技能威力+10%。', evolvesTo: [222], evolvesFrom: null, desc: '方块脑袋的多西精灵。' },
    { id:222, name: '库多西',
      image:'https://patchwiki.biligame.com/images/rocom/9/94/hsqyxfmg0p0gz8s36uzb1b7ldd6etb1.png',ename: 'KuDoxie',       attribute: 'ground',eggGroup: ['monster','mech'], heightMin:0.99,heightMax:1.42,weightMin:115.8,weightMax:175.02, stage: 2, region: '-', trait: '定向精炼 — 己方精灵每使用1次防御技能，自己入场时机械系和地面系技能威力+10%。', evolvesTo: [223], evolvesFrom: 221, desc: '库库的多西进化。' },
    { id:223, name: '波多西',
      image:'https://patchwiki.biligame.com/images/rocom/9/94/hsqyxfmg0p0gz8s36uzb1b7ldd6etb1.png',ename: 'BoDoxie',       attribute: ['machine','ground'],eggGroup: ['monster'], heightMin:1.43,heightMax:2.05,weightMin:265.0,weightMax:295.0, stage: 3, region: '-', trait: '定向精炼 — 己方精灵每使用1次防御技能，自己入场时机械系和地面系技能威力+10%。', evolvesTo: null, evolvesFrom: 222, desc: '波波的多西最终形态！赛季限定精灵。' },

    // 小翼龙 → 翼龙 (NO.224~225)
    { id:224, name: '小翼龙',
      image:'https://patchwiki.biligame.com/images/rocom/1/18/4gm8dv39vje80wb9f9ri66pmdmb5zzw.png',ename: 'LittlePterosaur',attribute:['dragon','flying'],eggGroup: ['flying','dragon'], heightMin:0.61,heightMax:0.87,weightMin:25.1,weightMax:36.5, stage: 1, region: '-', trait: '暴食 — 携带的龙系技能获得迅捷。', evolvesTo: [225], evolvesFrom: null, desc: '渴望飞翔的幼年翼龙。' },
    {id:225, name: '翼龙',
      image:'https://patchwiki.biligame.com/images/rocom/1/18/4gm8dv39vje80wb9f9ri66pmdmb5zzw.png',  ename: 'Pterosaur',     attribute: ['dragon','flying'],eggGroup: ['flying','dragon'], heightMin:1.79,heightMax:1.99,weightMin:240.0,weightMax:265.0, stage: 3, region: '-', trait: '暴食 — 携带的龙系技能获得迅捷。', evolvesTo: null, evolvesFrom: 224, desc: '翱翔天际的成年翼龙。' ,
        battle: {
          trait: '暴食:龙系技能获得迅捷',
          tier: 'T0',
          recommend: 'PVP翼王连击队核心叠迅捷手！龙系技能自带迅捷，学热身/三连/乘胜后连续释放给翼王叠满迅捷BUFF→翼王自动无限连。也可独立龙翼爆发输出。种族值高速度快。',
          pairing: ["圣羽翼王","翠顶夫人","皇家狮鹫","寂灭骨龙"],
          teams: ["PVP翼系连击队","龙翼联攻队","空袭队"],
          skills: {
            pve: [
                    { name: '疾风连袭', type: '翼', pp: 4, power: '-', effect: '高速连续攻击，利用速度优势多次打击。' },
            { name: '俯冲轰炸', type: '龙', pp: 3, power: '-', effect: '高空俯冲造成高额伤害，爆发技能。' },
            { name: '锐利目光', type: '龙', pp: 3, power: '-', effect: '提升命中或洞察敌方弱点。' },
                    { name: '龙息', type: '龙', pp: 4, power: '60(魔攻)', effect: '龙系魔攻补充输出。' }
            ],
            pvp: [
                    { name: '热身运动', type: '普通', pp: 3, power: '-', effect: '【翼王队核心】物攻强化+提速，叠迅捷用。学习顺序第1位。' },
            { name: '三连击', type: '翼', pp: 3, power: '-', effect: '【翼王队核心】连续攻击3次叠迅捷。学习顺序第2位。' },
            { name: '乘胜追击', type: '翼', pp: 3, power: '-', effect: '【翼王队核心】击败目标后追加攻击叠迅捷。学习顺序第3位。' },
            { name: '疾风连袭', type: '翼', pp: 4, power: '-', effect: '【独立输出】高速连打压制，龙系技能自带迅捷触发暴食。' }
            ]
          }
        }
      },

    // 电动长颈鹿 → 奔乐鹿 → 爵士鹿 (NO.226~228)
    { id:226, name: '电动长颈鹿',
      image:'https://patchwiki.biligame.com/images/rocom/9/95/hf6exuai3em02ggnvi6068tatwsg1co.png',ename: 'ElectricGiraffe',attribute:'electric',eggGroup: ['animal'], heightMin:0.7,heightMax:1.0,weightMin:29.8,weightMax:36.8, stage: 2, region: '-', trait: '蓄电池 — 每入场1次，永久获得双攻+20%。', evolvesTo: null, evolvesFrom: null, desc: '脖子带电的长颈鹿！' },
    { id:227, name: '奔乐鹿',
      image:'https://patchwiki.biligame.com/images/rocom/9/95/hf6exuai3em02ggnvi6068tatwsg1co.png',ename: 'HappyDeer',     attribute: 'electric',eggGroup: ['animal'], heightMin:0.85,heightMax:1.22,weightMin:68.0,weightMax:77.5, stage: 2, region: '-', trait: '蓄电池 — 每入场1次，永久获得双攻+20%。', evolvesTo: [228], evolvesFrom: null, desc: '快乐奔跑的小鹿。' },
    { id:228, name: '爵士鹿',
      image:'https://patchwiki.biligame.com/images/rocom/9/95/hf6exuai3em02ggnvi6068tatwsg1co.png',ename: 'JazzDeer',      attribute: 'electric',eggGroup: ['animal'], heightMin:1.38,heightMax:1.98,weightMin:135.0,weightMax:185.06, stage: 3, region: '-', trait: '蓄电池 — 每入场1次，永久获得双攻+20%。', evolvesTo: null, evolvesFrom: 227, desc: '爵士范儿十足的鹿。' },

    // 缇塔 → 声波缇塔 (NO.229~230)
    { id:229, name: '缇塔',
      image:'https://patchwiki.biligame.com/images/rocom/3/3a/lhlbu3zg39lvfpso57ww4iks9u2snxm.png',  ename: 'Tiita',         attribute: 'machine',eggGroup: ['mech'], heightMin:0.65,heightMax:0.75,weightMin:38.2,weightMax:45.2, stage: 1, region: '-', trait: '向心力 — 1号位和2号位技能获得传动1和威力+30。', evolvesTo: [230], evolvesFrom: null, desc: '机械构造的缇塔精灵。' },
    { id:230, name: '声波缇塔',
      image:'https://patchwiki.biligame.com/images/rocom/3/3a/lhlbu3zg39lvfpso57ww4iks9u2snxm.png',ename: 'SoundwaveTiita',attribute:'machine',eggGroup: ['mech'], heightMin:1.05,heightMax:1.2,weightMin:71.5,weightMax:78.5, stage: 2, region: '-', trait: '向心力 — 1号位和2号位技能获得传动1和威力+30。', evolvesTo: null, evolvesFrom: 229, desc: '能操控声波的机械缇塔。',
        battle: {
          "trait": "向心力速攻核心",
          "tier": "T1",
          "recommend": "PVP机械向心力王牌。1号位和2号位技能自动获得传动和增伤，放高威技能在这两位置即可。",
          "pairing": [
          "小箱怪",
          "贝古斯",
          "螺旋帕帕"
          ],
          "teams": [
          "机械速攻队",
          "向心力核心"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "放在1号位享受向心力加成！"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "2号位同样获得传动+30%威力。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "备用电系输出。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防辅助。"
        }
          ],
          "pvp": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "1号位必带——传动1+130%威力。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "2号位备选——传动1+104%威力。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "范围AOE压制。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "特防削减提高全队伤害。"
        }
          ]
        }
        }
    },

    // 小鹬 → 鄙目鹬 → 高脚鹬 (NO.231~233)
    { id:231, name: '小鹬',
      image:'https://patchwiki.biligame.com/images/rocom/6/63/f0h0ppr6wbkwlg961g5mnqenog6ai1j.png',  ename: 'LittleSandpiper',attribute:'flying',eggGroup: ['flying'], heightMin:0.25,heightMax:0.36,weightMin:1.4,weightMax:2.2, stage: 1, region: '-', trait: '起飞加速 — 本场战斗首次使用的技能获得迅捷。', evolvesTo: [232], evolvesFrom: null, desc: '小巧的鹬鸟。',
        battle: {
          "trait": "起飞加速首技先手",
          "tier": "T2",
          "recommend": "PVP翼系速攻型。本场首次使用的技能自动获得迅捷——第一招必定先手。",
          "pairing": [
          "鄙目鹬",
          "高脚鹬",
          "噼啪鸟"
          ],
          "teams": [
          "翼系速攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "空气切割",
          "type": "翼",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "首技迅捷先手！"
          },
          {
          "name": "翼刃斩",
          "type": "翼",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "翼系物攻。"
          },
          {
          "name": "翅膀攻击",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "翼系常规输出。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "安全退场。"
        }
          ],
          "pvp": [
          {
          "name": "空气切割",
          "type": "翼",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "起飞加速保证首技先手压制。"
          },
          {
          "name": "翼刃斩",
          "type": "翼",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "后续稳定物攻。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场重置起飞加速。"
          },
          {
          "name": "翅膀攻击",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "常规输出。"
        }
          ]
        }
        }
    },
    { id:232, name: '鄙目鹬',
      image:'https://patchwiki.biligame.com/images/rocom/6/63/f0h0ppr6wbkwlg961g5mnqenog6ai1j.png',ename: 'DespiseEyeSandpiper',attribute:'flying',eggGroup:['flying'],heightMin:0.67,heightMax:0.96,weightMin:6.75,weightMax:8.9,stage:2,region:'-',trait: '起飞加速 — 本场战斗首次使用的技能获得迅捷。',evolvesTo:[233],evolvesFrom:231,desc:'眼神犀利的鹬鸟。',
        battle: {
          "trait": "起飞加速进阶",
          "tier": "T2",
          "recommend": "PVP翼系速攻中转。进化后属性更高，首技先手压制力更强。",
          "pairing": [
          "小鹬",
          "高脚鹬",
          "螺旋帕帕"
          ],
          "teams": [
          "翼系速攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "多段物攻——首技迅捷。"
          },
          {
          "name": "空气切割",
          "type": "翼",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "高速先手。"
          },
          {
          "name": "翼刃斩",
          "type": "翼",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "高威物攻。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场重置。"
        }
          ],
          "pvp": [
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "首技迅捷多段先手压制。"
          },
          {
          "name": "空气切割",
          "type": "翼",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "极速先手。"
          },
          {
          "name": "翼刃斩",
          "type": "翼",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "稳定主攻。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "重置加速。"
        }
          ]
        }
        }
    },
    { id:233, name: '高脚鹬',
      image:'https://patchwiki.biligame.com/images/rocom/6/63/f0h0ppr6wbkwlg961g5mnqenog6ai1j.png',ename: 'HighLegSandpiper',attribute:'flying',eggGroup:['flying'],heightMin:0.81,heightMax:1.16,weightMin:18.0,weightMax:24.91,stage:3,region:'-',trait: '起飞加速 — 本场战斗首次使用的技能获得迅捷。',evolvesTo:null,evolvesFrom:232,desc:'腿特别长的鹬鸟。',
        battle: {
          "trait": "高脚鹬终极",
          "tier": "T2",
          "recommend": "PVP翼系速攻王牌。最终形态属性优秀，首技先手的战术价值极高。",
          "pairing": [
          "鄙目鹬",
          "小鹬",
          "噼啪鸟"
          ],
          "teams": [
          "翼系速攻王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "翼系高威物攻——首技迅捷先手！"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "多段物攻增强。"
          },
          {
          "name": "空中支援",
          "type": "翼",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "翼系魔攻。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "重置加速。"
        }
          ],
          "pvp": [
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "首技迅捷先手高威压制。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "多段追击。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场重置起飞加速循环利用。"
          },
          {
          "name": "空中支援",
          "type": "翼",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "魔攻选项。"
        }
          ]
        }
        }
    },

    // 甜筒系列 - 多口味 (NO.234~236)
    { id:234, name: '脆筒甜甜',
      image:'https://patchwiki.biligame.com/images/rocom/9/99/hkgrj5vqlslmwxcq1hw8rkaoijy2wc9.png',ename: 'CrispyTubeSweet', attribute:'ice',eggGroup: ['fairy'], heightMin:0.3,heightMax:0.4,weightMin:1.8,weightMax:3.8, stage: 1, region: '-', trait: '加个雪球 — 使敌方获得冻结时，也会使其获得2层冻结。', evolvesTo: [235], evolvesFrom: null, desc: '脆筒冰淇淋造型的甜点精灵。',
        battle: {
          "trait": "加个雪球冰冻控",
          "tier": "T2",
          "recommend": "PVP冰系深度冻结。使敌方冻结时额外叠2层冻结=解冻难度翻倍。",
          "pairing": [
          "香草甜甜",
          "雪影娃娃",
          "布鲁斯"
          ],
          "teams": [
          "冰冻控制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "冰系AOE+概率冻结。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "50(魔攻)",
          "effect": "多段冰系输出。"
          },
          {
          "name": "冰冻之风",
          "type": "冰",
          "pp": 4,
          "power": "45(魔攻)",
          "effect": "减速+冻结概率。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "防止被降能力。"
        }
          ],
          "pvp": [
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "AOE冻结+加个雪球额外2层=极难解冻。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "50(魔攻)",
          "effect": "多段输出增加冻结概率。"
          },
          {
          "name": "冰冻之风",
          "type": "冰",
          "pp": 4,
          "power": "45(魔攻)",
          "effect": "减速控制铺垫。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "自保。"
        }
          ]
        }
        }
    },
    { id:235, name: '香草甜甜',
      image:'https://patchwiki.biligame.com/images/rocom/9/99/hkgrj5vqlslmwxcq1hw8rkaoijy2wc9.png',ename: 'VanillaSweet',   attribute:'ice',eggGroup: ['fairy'], heightMin:0.4,heightMax:0.6,weightMin:5.15,weightMax:7.8, stage: 2, region: '-', trait: '加个雪球 — 使敌方获得冻结时，也会使其获得2层冻结。', forms: ['杨桃饰品','蓝莓饰品'], evolvesTo: [236], evolvesFrom: 234, desc: '香草味的甜甜精灵。',
        battle: {
          "trait": "香草甜甜进阶",
          "tier": "T2",
          "recommend": "PVP冰冻控制中转。进化后属性更高，加个雪球的冻结压制力更强。",
          "pairing": [
          "脆筒甜甜",
          "雪顶布鲁斯",
          "雪影娃娃"
          ],
          "teams": [
          "冰冻控制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "绝对零度",
          "type": "冰",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "冰系高威魔法——高概率触发加个雪球。"
          },
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "AOE冻结。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "多段输出。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "状态保护。"
        }
          ],
          "pvp": [
          {
          "name": "绝对零度",
          "type": "冰",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "单体高威冻结——加个雪球后几乎无法解冻。"
          },
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "AOE冻结覆盖全场。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "多段输出。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "保护自身。"
        }
          ]
        }
        }
    },
    { id:236, name: '圣代甜甜',
      image:'https://patchwiki.biligame.com/images/rocom/9/99/hkgrj5vqlslmwxcq1hw8rkaoijy2wc9.png',ename: 'SundaeSweet',   attribute:'ice',eggGroup: ['fairy'], heightMin:0.7,heightMax:1.0,weightMin:16.5,weightMax:22.75, stage: 3, region: '-', trait: '加个雪球 — 使敌方获得冻结时，也会使其获得2层冻结。', forms: ['樱桃草莓','樱桃抹茶','蓝莓巧克力','蓝莓草莓','蓝莓抹茶','杨桃巧克力','杨桃草莓','杨桃抹茶'], evolvesTo: null, evolvesFrom: 235, desc: '圣代造型！多达8种口味形态！' },

    // 刺轮砣 → 月亮砣 (NO.237~238)
    { id:237, name: '刺轮砣',ename: 'ThornWheelDisc', attribute:['poison','cute'],eggGroup: [], heightMin:0.18,heightMax:0.31,weightMin:2.7,weightMax:4.0, stage: 2, region: '-', trait: '-', forms: ['上弦的样子','下弦的样子'], evolvesTo: [238], evolvesFrom: null, desc: '刺轮形的暗黑砣器。' },
    { id:238, name: '月亮砣',ename: 'MoonDisc',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.238_月亮砣（上弦的样子）.webp',      attribute:['poison','cute'],eggGroup: [], heightMin:1.85,heightMax:2.1,weightMin:137.5,weightMax:182.4, stage: 3, region: '-', trait: '-', forms: ['上弦的样子','下弦的样子'], evolvesTo: null, evolvesFrom: 237, desc: '月亮形状的神秘砣器。' },

    // 豆丁鱼 → 快鳍鱼 → 龙鱼 (NO.239~241)
    { id:239, name: '豆丁鱼',
      image:'https://patchwiki.biligame.com/images/rocom/8/84/l03hb24992kdwomhy0qfjjynend0qdc.png',ename: 'BeanFish',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.239_豆丁鱼.webp',      attribute: ['water','dragon'],eggGroup: ['ocean','dragon'], heightMin:0.31,heightMax:0.44,weightMin:1.2,weightMax:3.4, stage: 1, region: '-', trait: '洄游 — 每次进入蓄力状态，获得全技能能耗永久-1。', evolvesTo: [240], evolvesFrom: null, desc: '豆粒大小的小鱼。' },
    { id:240, name: '快鳍鱼',
      image:'https://patchwiki.biligame.com/images/rocom/8/84/l03hb24992kdwomhy0qfjjynend0qdc.png',ename: 'FastFinFish',   attribute: ['water','dragon'],eggGroup: ['ocean'], heightMin:0.27,heightMax:0.39,weightMin:14.5,weightMax:16.8, stage: 2, region: '-', trait: '洄游 — 每次进入蓄力状态，获得全技能能耗永久-1。', evolvesTo: [241], evolvesFrom: 239, desc: '鳍划水极快的鱼类。' },
    { id:241, name: '龙鱼',
      image:'https://patchwiki.biligame.com/images/rocom/8/84/l03hb24992kdwomhy0qfjjynend0qdc.png',  ename: 'DragonFish',    attribute: ['water','dragon'],eggGroup: ['ocean','dragon'], heightMin:0.69,heightMax:0.99,weightMin:39.5,weightMax:44.5, stage: 3, region: '-', trait: '洄游 — 每次进入蓄力状态，获得全技能能耗永久-1。', evolvesTo: null, evolvesFrom: 240, desc: '龙形的珍稀鱼类！' },

    // 胆小鳗鱼 → 闪电鳗鱼 (NO.242~243)
    { id:242, name: '胆小鳗鱼',
      image:'https://patchwiki.biligame.com/images/rocom/6/65/sexctmvdy5pnj2fgqdue7sovqn9cw4z.png',ename: 'TimidEel',     attribute: ['electric','water'],eggGroup: ['ocean'], heightMin:0.74,heightMax:1.07,weightMin:17.5,weightMax:26.85, stage: 1, region: '-', trait: '生物电 — 携带的电系技能获得迸发：能耗-2。', evolvesTo: [243], evolvesFrom: null, desc: '胆小怕事的鳗鱼。' },
    { id:243, name: '闪电鳗鱼',
      image:'https://patchwiki.biligame.com/images/rocom/6/65/sexctmvdy5pnj2fgqdue7sovqn9cw4z.png',ename: 'LightningEel',  attribute: ['electric','water'],eggGroup:['ocean'], heightMin:0.83,heightMax:1.19,weightMin:68.9,weightMax:76.5, stage: 2, region: '-', trait: '生物电 — 携带的电系技能获得迸发：能耗-2。', evolvesTo: null, evolvesFrom: 242, desc: '释放闪电的鳗鱼。',
        battle: {
          "trait": "电系迸发输出",
          "tier": "T2",
          "recommend": "PVE电水混合输出。电系技能低能耗高频率释放，配合水系控制。",
          "pairing": [
          "迪莫",
          "蓝漪水灵",
          "酷拉"
          ],
          "teams": [
          "电系队",
          "水系联攻"
          ],
          "skills": {
          "pve": [
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "电系魔攻核心输出。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "水系高威力必杀。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "稳定水系输出。"
          },
          {
          "name": "电磁场",
          "type": "电",
          "pp": 3,
          "power": "-",
          "effect": "铺设电磁场强化电系输出。"
        }
          ],
          "pvp": [
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "主攻技能，生物电降低能耗。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "爆发收割。"
          },
          {
          "name": "电磁场",
          "type": "电",
          "pp": 3,
          "power": "-",
          "effect": "场地强化。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "副输出补刀。"
        }
          ]
        }
        }
    },

    // 水母系列 (NO.244~245)
    { id:244, name: '翡翠水母',
      image:'https://patchwiki.biligame.com/images/rocom/f/f3/qtg8mg0mxy7370rpc9eohcwcgsw0k05.png',ename: 'EmeraldJellyfish',attribute:['water','poison'],eggGroup: ['ocean','soft'], heightMin:0.49,heightMax:0.7,weightMin:31.5,weightMax:36.8, stage: 2, region: '-', trait: '扩散侵蚀 — 使用水系技能后，敌方获得中毒，获得层数等于中毒印记层数的2倍。', evolvesTo: [245], evolvesFrom: null, desc: '翡翠色的透明水母。',
        battle: {
          "trait": "水毒扩散控场",
          "tier": "T2",
          "recommend": "PVE水毒持续伤害流。水系攻击+毒系持续DOT叠层。",
          "pairing": [
          "毒王",
          "幽冥蛇",
          "紫冥狐"
          ],
          "teams": [
          "毒系队",
          "持续伤害队"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "水系高威输出触发中毒。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "大范围施加中毒层数。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "稳定水系输出。"
          },
          {
          "name": "腐蚀之触",
          "type": "毒",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "毒系伤害加深印记。"
        }
          ],
          "pvp": [
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "快速叠毒层数。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "输出同时触发扩散侵蚀。"
          },
          {
          "name": "腐蚀之触",
          "type": "毒",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "持续压血线。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升生存能力。"
        }
          ]
        }
        }
    },
    { id:245, name: '琉璃水母',
      image:'https://patchwiki.biligame.com/images/rocom/f/f3/qtg8mg0mxy7370rpc9eohcwcgsw0k05.png',ename: 'GlazeJellyfish', attribute:['water','poison'],eggGroup: ['ocean','soft'], heightMin:0.9,heightMax:1.28,weightMin:48.0,weightMax:53.0, stage: 3, region: '-', trait: '扩散侵蚀 — 使用水系技能后，敌方获得中毒，获得层数等于中毒印记层数的2倍。', evolvesTo: null, evolvesFrom: 244, desc: '琉璃光泽的美丽水母。',
        battle: {
          "trait": "水毒终极形态",
          "tier": "T2",
          "recommend": "PVP水毒双修输出。最终形态属性更高，扩散侵蚀叠毒效率极强。",
          "pairing": [
          "毒王",
          "幽冥蛇",
          "紫冥狐"
          ],
          "teams": [
          "毒系队",
          "混合控制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "水系核心输出。"
          },
          {
          "name": "剧毒风暴",
          "type": "毒",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威力毒系AOE。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "全场叠毒。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "稳定副输出。"
        }
          ],
          "pvp": [
          {
          "name": "剧毒风暴",
          "type": "毒",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "毒系爆发AOE。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "100(魔攻)",
          "effect": "主攻触发扩散。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "铺毒铺垫。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "站场生存。"
        }
          ]
        }
        }
    },

    // 裘洛系列 (NO.246~248)
    { id:246, name: '裘洛',
      image:'https://patchwiki.biligame.com/images/rocom/9/9c/ai2ivunxg0fjwnzy552j6bsq1nh5qr4.png',  ename: 'Qiuluo',        attribute: 'poison',eggGroup: ['animal','fairy','mech'], heightMin:0.7,heightMax:1.0,weightMin:7.5,weightMax:12.5, stage: 1, region: '-', trait: '蚀刻 — 回合结束时，敌方每2层中毒转化为1层中毒印记。', evolvesTo: [247], evolvesFrom: null, desc: '半机械半动物的裘洛精灵。',
        battle: {
          "trait": "中毒转化印记",
          "tier": "T3",
          "recommend": "PVE毒系过渡形态。蚀刻将中毒转化为印记积累。",
          "pairing": [
          "毒王",
          "翡翠水母",
          "紫冥狐"
          ],
          "teams": [
          "毒系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "毒系基础物攻。"
          },
          {
          "name": "毒雾",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "给敌方施加中毒。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升。"
          },
          {
          "name": "溶解",
          "type": "毒",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "毒系魔攻输出。"
        }
          ],
          "pvp": [
          {
          "name": "毒雾",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "快速叠毒触发蚀刻。"
          },
          {
          "name": "溶解",
          "type": "毒",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "魔攻输出。"
          },
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "40(物攻)",
          "effect": "物理补刀。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守站场。"
        }
          ]
        }
        }
    },
    { id:247, name: '裘力',
      image:'https://patchwiki.biligame.com/images/rocom/9/9c/ai2ivunxg0fjwnzy552j6bsq1nh5qr4.png',  ename: 'Qiuli',         attribute: 'poison',eggGroup: ['animal','fairy','mech'], heightMin:0.81,heightMax:1.16,weightMin:14.07,weightMax:18.02, stage: 2, region: '-', trait: '蚀刻 — 回合结束时，敌方每2层中毒转化为1层中毒印记。', evolvesTo: [248], evolvesFrom: 246, desc: '更有力量的裘洛进化。',
        battle: {
          "trait": "中毒转化进阶",
          "tier": "T2",
          "recommend": "PVP毒系中转。进化后属性提升，蚀刻效率更高。",
          "pairing": [
          "毒王",
          "裘卡",
          "紫冥狐"
          ],
          "teams": [
          "毒系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "溶解",
          "type": "毒",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "毒系魔攻提升。"
          },
          {
          "name": "毒雾",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "施加中毒。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "高威力毒系物攻。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
        }
          ],
          "pvp": [
          {
          "name": "毒雾",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "铺毒触发蚀刻。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "物攻爆发。"
          },
          {
          "name": "溶解",
          "type": "毒",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "魔攻副输出。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守。"
        }
          ]
        }
        }
    },
    { id:248, name: '裘卡',
      image:'https://patchwiki.biligame.com/images/rocom/9/9c/ai2ivunxg0fjwnzy552j6bsq1nh5qr4.png',  ename: 'Qiuka',         attribute: 'poison',eggGroup: ['animal','fairy'], heightMin:1.25,heightMax:1.79,weightMin:49.5,weightMax:58.6, stage: 3, region: '-', trait: '蚀刻 — 回合结束时，敌方每2层中毒转化为1层中毒印记。', evolvesTo: null, evolvesFrom: 247, desc: '裘洛系列的最终形态。',
        battle: {
          "trait": "毒系终极形态",
          "tier": "T2",
          "recommend": "PVP毒系主力输出。最终形态配合蚀刻机制快速叠加中毒印记。",
          "pairing": [
          "毒王",
          "紫冥狐",
          "琉璃水母"
          ],
          "teams": [
          "纯毒系队",
          "持续伤害队"
          ],
          "skills": {
          "pve": [
          {
          "name": "剧毒风暴",
          "type": "毒",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "毒系高威AOE必杀。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "毒系物攻爆发。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "全场叠毒触发蚀刻。"
          },
          {
          "name": "腐蚀强酸",
          "type": "毒",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "毒系持续伤害。"
        }
          ],
          "pvp": [
          {
          "name": "剧毒风暴",
          "type": "毒",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "AOE爆发。"
          },
          {
          "name": "毒雾弥漫",
          "type": "毒",
          "pp": 3,
          "power": "-",
          "effect": "快速叠毒。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "单体爆发。"
          },
          {
          "name": "腐蚀强酸",
          "type": "毒",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "持续压血线。"
        }
          ]
        }
        }
    },

    // 可爱猿 → 炽热猿 → 火焰猿 (NO.249~251)
    { id:249, name: '可爱猿',
      image:'https://patchwiki.biligame.com/images/rocom/e/e0/1xsbef59im08o1aui67cvgqp9nr1a58.png',ename: 'CuteApe',       attribute: 'fire',eggGroup: ['humanoid','monster'], heightMin:0.69,heightMax:0.98,weightMin:21.0,weightMax:31.5, stage: 1, region: '-', trait: '散热 — 初始能量为0，入场前己方精灵每放1次火系技能，回复3能量。', evolvesTo: [250], evolvesFrom: null, desc: '可爱热情的猿猴精灵。赛季限定精灵。',
        battle: {
          "trait": "火系能量积攒",
          "tier": "T3",
          "recommend": "PVE火系过渡。散热特性需要队友先放火系技能攒能量。",
          "pairing": [
          "烈焰诺诺",
          "豪炎战神",
          "武者鸡"
          ],
          "teams": [
          "火系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "火系基础输出。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "火系物攻。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方命中率。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
        }
          ],
          "pvp": [
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "攒能量用火系输出。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "物理备选。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "干扰敌方。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守。"
        }
          ]
        }
        }
    },
    { id:250, name: '炽热猿',
      image:'https://patchwiki.biligame.com/images/rocom/e/e0/1xsbef59im08o1aui67cvgqp9nr1a58.png',ename: 'BlazingApe',    attribute: 'fire',eggGroup: ['humanoid','monster'], heightMin:0.71,heightMax:1.02,weightMin:46.5,weightMax:63.5, stage: 2, region: '-', trait: '散热 — 初始能量为0，入场前己方精灵每放1次火系技能，回复3能量。', evolvesTo: [251], evolvesFrom: 249, desc: '浑身炽热的猿猴。',
        battle: {
          "trait": "散热中转形态",
          "tier": "T2",
          "recommend": "PVP火系副C。进化后属性提升，散热回能更快启动。",
          "pairing": [
          "火焰猿",
          "烈焰诺诺",
          "豪炎战神"
          ],
          "teams": [
          "火系队",
          "能量循环队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "火系高威输出。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "火系物攻。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "低能耗火系技攒能量。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避干扰。"
        }
          ],
          "pvp": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "主攻技能。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "物攻爆发。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "50(物攻)",
          "effect": "低能耗铺垫。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "生存干扰。"
        }
          ]
        }
        }
    },
    { id:251, name: '火焰猿',
      image:'https://patchwiki.biligame.com/images/rocom/e/e0/1xsbef59im08o1aui67cvgqp9nr1a58.png',ename: 'FlameApe',       attribute: 'fire',eggGroup: ['humanoid','monster'], heightMin:1.68,heightMax:1.9,weightMin:124.5,weightMax:136.5, stage: 3, region: '-', trait: '散热 — 初始能量为0，入场前己方精灵每放1次火系技能，回复3能量。', evolvesTo: null, evolvesFrom: 250, desc: '燃烧着熊熊烈火的猿王。',
        battle: {
          "trait": "火系猿王终极",
          "tier": "T2",
          "recommend": "PVP火系主力。火焰猿为最终形态，满能量后连续释放大火力技能。",
          "pairing": [
          "豪炎战神",
          "烈焰诺诺",
          "炽热猿"
          ],
          "teams": [
          "纯火系队",
          "高爆队"
          ],
          "skills": {
          "pve": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "120(魔攻)",
          "effect": "火系超高威必杀。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "稳定高威火系输出。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "火系物攻爆发。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避减伤。"
        }
          ],
          "pvp": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "120(魔攻)",
          "effect": "满能量一发入魂。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "稳定主攻。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "物理备选。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "生存保障。"
        }
          ]
        }
        }
    },

    // 布鲁斯系列 (NO.252~254)
    { id:252, name: '布鲁斯',
      image:'https://patchwiki.biligame.com/images/rocom/0/03/i3lomx5rtgtrhun9j9o2cky82nj7koy.png',ename: 'Bruce',         attribute: 'ice',eggGroup: ['ocean','soft'], heightMin:0.53,heightMax:0.76,weightMin:2.4,weightMax:4.6, stage: 2, region: '-', trait: '冰钻 — 敌方携带技能总能耗每有1点，自己攻击时威力+10%。', evolvesTo: [253,254], evolvesFrom: null, desc: '北极熊形态的布鲁斯精灵。',
        battle: {
          "trait": "冰钻反制坦克",
          "tier": "T2",
          "recommend": "PVE冰系反制型。敌方高能耗阵容时威力爆炸。",
          "pairing": [
          "雪影娃娃",
          "冰龙王",
          "魄月狼王"
          ],
          "teams": [
          "冰系队",
          "反制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "冰系多段输出。"
          },
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "冰系高威AOE。"
          },
          {
          "name": "冰冻打击",
          "type": "冰",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "冰系物攻。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "防止能力被降低。"
        }
          ],
          "pvp": [
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威输出受冰钻加成。"
          },
          {
          "name": "冰雹",
          "type": "冰",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "多段稳定输出。"
          },
          {
          "name": "冰冻打击",
          "type": "冰",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "物理选择。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "防守反降。"
        }
          ]
        }
        }
    },
    { id:253, name: '雪顶布鲁斯',
      image:'https://patchwiki.biligame.com/images/rocom/0/03/i3lomx5rtgtrhun9j9o2cky82nj7koy.png',ename: 'SnowTopBruce',attribute:'ice',eggGroup: ['ocean','soft'], heightMin:0.58,heightMax:0.83,weightMin:12.8,weightMax:15.6, stage: 3, region: '-', trait: '冰钻 — 敌方携带技能总能耗每有1点，自己攻击时威力+10%。', evolvesTo: null, evolvesFrom: 252, desc: '头顶积雪的北极熊形态。',
        battle: {
          "trait": "冰钻高威形态",
          "tier": "T2",
          "recommend": "PVP冰系物攻手。雪顶布鲁斯偏向物攻路线，冰钻加成下威力极高。",
          "pairing": [
          "冰钻布鲁斯",
          "雪影娃娃",
          "冰龙王"
          ],
          "teams": [
          "冰系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "冰系高威魔法。"
          },
          {
          "name": "冰冻之风",
          "type": "冰",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "冰系减速输出。"
          },
          {
          "name": "碎冰击",
          "type": "冰",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "冰系强力物攻。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "状态保护。"
        }
          ],
          "pvp": [
          {
          "name": "碎冰击",
          "type": "冰",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "物攻主力，冰钻增伤显著。"
          },
          {
          "name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "魔攻爆发。"
          },
          {
          "name": "冰冻之风",
          "type": "冰",
          "pp": 4,
          "power": "65(魔攻)",
          "effect": "减速控制。"
          },
          {
          "name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "防弱化。"
        }
          ]
        }
        }
    },
    { id:254, name: '冰钻布鲁斯',
      image:'https://patchwiki.biligame.com/images/rocom/0/03/i3lomx5rtgtrhun9j9o2cky82nj7koy.png',ename: 'IceDrillBruce', attribute:'ice',eggGroup: ['ocean','soft'], heightMin:1.21,heightMax:1.72,weightMin:49.5,weightMax:58.6, stage: 3, region: '-', trait: '冰钻 — 敌方携带技能总能耗每有1点，自己攻击时威力+10%。', evolvesTo: null, evolvesFrom: 252, desc: '冰钻武装的北极熊形态。',
        battle: {
          "trait": "冰钻武装终极",
          "tier": "T2",
          "recommend": "PVP冰系物攻王牌。冰钻布鲁斯是物攻取向的终极形态。",
          "pairing": [
          "雪顶布鲁斯",
          "魄月狼王",
          "冰龙王"
          ],
          "teams": [
          "冰系物攻队"
          ],
          "skills": {
          "pve": [
          {
          " name": "冰钻旋风",
          "type": "冰",
          "pp": 3,
          "power": "100(物攻)",
          "effect": "冰系超高威物攻必杀。"
          },
          {
          " name": "碎冰击",
          "type": "冰",
          "pp": 3,
          "power": "90(物攻)",
          "effect": "冰系强力物攻。"
          },
          {
          " name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "冰系魔攻AOE。"
          },
          {
          " name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "状态保护。"
        }
          ],
          "pvp": [
          {
          " name": "冰钻旋风",
          "type": "冰",
          "pp": 3,
          "power": "100(物攻)",
          "effect": "物攻必杀，冰钻极致增伤。"
          },
          {
          " name": "碎冰击",
          "type": "冰",
          "pp": 3,
          "power": "90(物攻)",
          "effect": "稳定物攻主输出。"
          },
          {
          " name": "暴风雪",
          "type": "冰",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "魔攻副输出。"
          },
          {
          " name": "白雾",
          "type": "冰",
          "pp": 3,
          "power": "-",
          "effect": "防守保护。"
        }
          ]
        }
        }
    },

    // 治愈兔 → 红丝绒 → 红绒十字 (NO.255~257)
    { id:255, name: '治愈兔',
      image:'https://patchwiki.biligame.com/images/rocom/a/aa/rngx23e2gk0fv954dvqfy4imdotkztj.png',ename: 'HealRabbit',    attribute: ['fire','cute'],eggGroup: ['animal','fairy'], heightMin:0.57,heightMax:0.82,weightMin:12.03,weightMax:14.42, stage: 1, region: '-', trait: '仁心 — 敌方受到灼烧伤害时，自己回复等量生命。', evolvesTo: [256], evolvesFrom: null, desc: '拥有治愈能力的兔子。',
        battle: {
          "trait": "灼烧回血治疗",
          "tier": "T2",
          "recommend": "PVE火萌治疗型。灼烧敌人同时回复自身生命，攻守一体。",
          "pairing": [
          "可爱猿",
          "烈焰诺诺",
          "艾莉儿"
          ],
          "teams": [
          "火萌队",
          "治疗续航队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "火系输出施加灼烧。"
          },
          {
          "name": "治愈之光",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "回复己方生命。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方双攻。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "火系物攻。"
        }
          ],
          "pvp": [
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "灼烧触发仁心回血。"
          },
          {
          "name": "治愈之光",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "治疗队友。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "物攻灼烧源。"
        }
          ]
        }
        }
    },
    { id:256, name: '红丝绒',
      image:'https://patchwiki.biligame.com/images/rocom/a/aa/rngx23e2gk0fv954dvqfy4imdotkztj.png',ename: 'RedVelvet',     attribute: ['fire','cute'],eggGroup: ['animal','fairy'], heightMin:0.68,heightMax:0.97,weightMin:22.4,weightMax:28.6, stage: 2, region: '-', trait: '仁心 — 敌方受到灼烧伤害时，自己回复等量生命。', evolvesTo: [257], evolvesFrom: 255, desc: '毛色如红丝绒的兔子。',
        battle: {
          "trait": "仁心进阶治疗",
          "tier": "T2",
          "recommend": "PVP火萌辅助治疗。进化后治疗量提升，灼烧回血更可观。",
          "pairing": [
          "红绒十字",
          "治愈兔",
          "艾莉儿"
          ],
          "teams": [
          "火萌队",
          "治疗队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "高威火系灼烧输出。"
          },
          {
          "name": "治愈乐章",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "大范围治疗队友。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "大幅降低敌方输出。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "稳定灼烧源。"
        }
          ],
          "pvp": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "高威灼烧回大量血。"
          },
          {
          "name": "治愈乐章",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "团队治疗核心。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "强力削弱。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "低能耗灼烧。"
        }
          ]
        }
        }
    },
    { id:257, name: '红绒十字',
      image:'https://patchwiki.biligame.com/images/rocom/a/aa/rngx23e2gk0fv954dvqfy4imdotkztj.png',ename: 'RedVelvetCross',attribute:['fire','cute'],eggGroup: ['animal','fairy'], heightMin:1.04,heightMax:1.49,weightMin:32.5,weightMax:36.8, stage: 3, region: '-', trait: '仁心 — 敌方受到灼烧伤害时，自己回复等量生命。', evolvesTo: null, evolvesFrom: 256, desc: '红十字标记的治愈大师兔。',
        battle: {
          "trait": "红十字治愈大师",
          "tier": "T1",
          "recommend": "PVP火萌顶级治疗。最终形态治疗能力极强，灼烧+回血的循环非常恶心。",
          "pairing": [
          "红丝绒",
          "艾莉儿",
          "豪炎战神"
          ],
          "teams": [
          "火萌治疗队",
          "灼烧循环队"
          ],
          "skills": {
          "pve": [
          {
          "name": "烈焰净化",
          "type": "火",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "火系高威输出+灼烧。"
          },
          {
          "name": "圣光治愈",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "强力单体治疗。"
          },
          {
          "name": "治愈咏叹调",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "全体治愈回复。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "全面削弱敌方。"
        }
          ],
          "pvp": [
          {
          "name": "烈焰净化",
          "type": "火",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "高威灼烧触发仁心。"
          },
          {
          "name": "圣光治愈",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "关键治疗保命。"
          },
          {
          "name": "治愈咏叹调",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "全队续航。"
          },
          {
          "name": "甜蜜香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "废掉敌方输出。"
        }
          ]
        }
        }
    },

    // 乌达系列 - 极昼/极夜形态 (NO.258~260)
    { id:258, name: '乌达',  ename: 'Wuda',          attribute: ['dark','fire'],eggGroup: ['monster'], heightMin:0.44,heightMax:0.58,weightMin:4.6,weightMax:6.1, stage: 1, region: '-', trait: '-', forms: ['极昼的样子','极夜的样子'], evolvesTo: [259], evolvesFrom: null, desc: '随昼夜变化的石头精灵。',
        battle: {
          "trait": "暗火双形态初始",
          "tier": "T3",
          "recommend": "PVE暗火过渡形态。极昼/极夜两种形态切换。",
          "pairing": [
          "迷你乌",
          "乌拉塔",
          "豪炎战神"
          ],
          "teams": [
          "暗火队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暗影拳",
          "type": "暗",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "暗系物攻。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "火系输出。"
          },
          {
          "name": "沙尘暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "造成持续伤害。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
        }
          ],
          "pvp": [
          {
          "name": "暗影拳",
          "type": "暗",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "暗系物理输出。"
          },
          {
          "name": "火焰射击",
          "type": "火",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "火系魔法输出。"
          },
          {
          "name": "沙尘暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "环境压制。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守。"
        }
          ]
        }
        }
    },
    { id:259, name: '迷你乌',ename: 'MiniWuda',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.259_迷你乌（极昼的样子）.webp',      attribute: ['dark','fire'],eggGroup: ['monster'], heightMin:0.97,heightMax:1.2,weightMin:27.9,weightMax:39.1, stage: 1, region: '-', trait: '-', forms: ['极昼的样子','极夜的样子'], evolvesTo: [260], evolvesFrom: 258, desc: '乌达的小型版。',
        battle: {
          "trait": "迷你乌暗火中转",
          "tier": "T3",
          "recommend": "PVP暗火过渡。小型版属性较低，等待进化乌拉塔。",
          "pairing": [
          "乌达",
          "乌拉塔",
          "豪炎战神"
          ],
          "teams": [
          "暗火队"
          ],
          "skills": {
          "pve": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系魔攻。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "火系高威输出。"
          },
          {
          "name": "沙石暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "场地伤害。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升。"
        }
          ],
          "pvp": [
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系主攻。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "火系主攻。"
          },
          {
          "name": "沙石暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "环境压制。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "生存。"
        }
          ]
        }
        }
    },
    { id:260, name: '乌拉塔',ename: 'WulataTower',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.260_乌拉塔（极昼的样子）.webp',   attribute: ['dark','fire'],eggGroup: ['monster'], heightMin: 1.10, heightMax: 1.32, weightMin: 48, weightMax: 65, stage: 3, region: '-', trait: '-', forms: ['极昼的样子','极夜的样子'], evolvesTo: null, evolvesFrom: 259, desc: '塔一般巨大的乌达终极形态。',
        battle: {
          "trait": "暗火巨塔终极",
          "tier": "T2",
          "recommend": "PVP暗火双修坦克。乌拉塔体型巨大耐久高，暗火双系覆盖面广。",
          "pairing": [
          "迷你乌",
          "豪炎战神",
          "幽冥蛇"
          ],
          "teams": [
          "暗火混合队",
          "坦克队"
          ],
          "skills": {
          "pve": [
          {
          "name": "黑暗冲击",
          "type": "暗",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "暗系高威输出。"
          },
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "火系超高威必杀。"
          },
          {
          "name": "沙石暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "场地持续伤害。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "岩系物攻补充。"
        }
          ],
          "pvp": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "火系爆发必杀。"
          },
          {
          "name": "黑暗冲击",
          "type": "暗",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "暗系主攻。"
          },
          {
          "name": "沙石暴",
          "type": "地",
          "pp": 3,
          "power": "-",
          "effect": "环境压制。"
          },
          {
          "name": "岩崩",
          "type": "岩",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物攻补盲。"
        }
          ]
        }
        }
    },

    // 螺旋帕帕 → 帕帕斯卡 (NO.261~262)
    { id:261, name: '螺旋帕帕',
      image:'https://patchwiki.biligame.com/images/rocom/2/2e/8sya38cbx002fydqgo0u3z0r4wzcmh9.png',ename: 'HelixPapa',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.261_螺旋帕帕.webp',   attribute: ['machine','flying'],eggGroup: ['flying','mech'], heightMin:0.35,heightMax:0.45,weightMin:2.08,weightMax:4.35, stage: 2, region: '-', trait: '翼轴 — 1号位技能获得迅捷和传动1。', evolvesTo: [262], evolvesFrom: null, desc: '螺旋桨造型的帕帕精灵。',
        battle: {
          "trait": "翼轴速攻机械",
          "tier": "T2",
          "recommend": "PVP机械翼系速攻。1号位技能获得迅捷+传动，先手输出能力强。",
          "pairing": [
          "帕帕斯卡",
          "圣剑-X",
          "贝古斯"
          ],
          "teams": [
          "机械队",
          "速攻队"
          ],
          "skills": {
          "pve": [
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "机械系物攻，适合放1号位触发翼轴。"
          },
          {
          "name": "翼刃斩",
          "type": "翼",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "翼系高速物攻。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方特防。"
          },
          {
          "name": "空中支援",
          "type": "翼",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "翼系魔攻输出。"
        }
          ],
          "pvp": [
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "1号位触发迅捷传动，高速先手。"
          },
          {
          "name": "翼刃斩",
          "type": "翼",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "翼系追击。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防铺垫。"
          },
          {
          "name": "空中支援",
          "type": "翼",
          "pp": 4,
          "power": "55(魔攻)",
          "effect": "魔攻选项。"
        }
          ]
        }
        }
    },
    { id:262, name: '帕帕斯卡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2e/8sya38cbx002fydqgo0u3z0r4wzcmh9.png',ename: 'PapaSkas',    attribute: ['machine','flying'],eggGroup: ['flying','mech'], heightMin:1.05,heightMax:1.47,weightMin:48.7,weightMax:60.1, stage: 3, region: '-', trait: '翼轴 — 1号位技能获得迅捷和传动1。', evolvesTo: null, evolvesFrom: 261, desc: '螺旋帕帕的进化形态。',
        battle: {
          "trait": "翼轴终极速攻",
          "tier": "T1",
          "recommend": "PVP机械翼系王牌。1号位技能自动迅捷+传动，放最强技能在1号位即可。",
          "pairing": [
          "螺旋帕帕",
          "圣剑-X",
          "贝古斯"
          ],
          "teams": [
          "机械翼王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "螺旋风暴",
          "type": "机械",
          "pp": 3,
          "power": "90(物攻)",
          "effect": "机械超高威物攻必杀——翼轴加持下先手+传动！"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "翼系高威物攻。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "大幅破防。"
          },
          {
          "name": "空中支援",
          "type": "翼",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "翼系魔攻。"
        }
          ],
          "pvp": [
          {
          "name": "螺旋风暴",
          "type": "机械",
          "pp": 3,
          "power": "90(物攻)",
          "effect": "1号位必带——翼轴=迅捷+传动+90威物攻核弹。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "翼系追击。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "特防-2提高全队伤害。"
          },
          {
          "name": "空中支援",
          "type": "翼",
          "pp": 4,
          "power": "60(魔攻)",
          "effect": "魔攻选项。"
        }
          ]
        }
        }
    },

    // 机械方方系列 (NO.263~265) - 注意: 已移除妖精组
    { id:263, name: '机械方方',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/pgpg5oimlp3vj22sforlyu0o5mlenw8.png',ename: 'MechSquareSquare',attribute:'machine',eggGroup:['mech'], heightMin:0.42,heightMax:0.6,weightMin:8.0,weightMax:11.0, stage: 1, region: '-', trait: '盲拧 — 回合开始时，技能顺序打乱，4号位的技能能耗-4。', evolvesTo: [264], evolvesFrom: null, desc: '方形身体的机械生命体。（注意:公测已移除妖精组）',
        battle: {
          "trait": "盲拧随机低耗",
          "tier": "T2",
          "recommend": "PVP机械随机型。4号位技能能耗-4=大招变平A，但顺序随机看脸。",
          "pairing": [
          "多彩方方",
          "立方人",
          "贝古斯"
          ],
          "teams": [
          "机械队"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "放在4号位享受能耗-4！"
          },
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "常规输出。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "65(魔攻)",
          "effect": "电系AOE。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防。"
        }
          ],
          "pvp": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "4号位=几乎免费的95威大招（盲拧）。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "65(魔攻)",
          "effect": "AOE补盲。"
          },
          {
          "name": "螺旋切割",
          "type": "机械",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "物攻填充。"
          },
          {
          "name": "金属音波",
          "type": "机械",
          "pp": 3,
          "power": "-",
          "effect": "破防铺垫。"
        }
          ]
        }
        }
    },
    { id:264, name: '多彩方方',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/pgpg5oimlp3vj22sforlyu0o5mlenw8.png',ename: 'ColorfulSquareSquare',attribute:'machine',eggGroup:['mech'],heightMin:0.68,heightMax:0.97,weightMin:23.77,weightMax:34.6,stage:2,region:'-',trait: '盲拧 — 回合开始时，技能顺序打乱，4号位的技能能耗-4。',evolvesTo:[265],evolvesFrom:263,desc:'多彩配色的方方进化。' },
    { id:265, name: '立方人',
      image:'https://patchwiki.biligame.com/images/rocom/0/0b/pgpg5oimlp3vj22sforlyu0o5mlenw8.png',ename: 'CubePerson',    attribute: 'machine',eggGroup: ['mech','humanoid'], heightMin:1.78,heightMax:2.01,weightMin:106.5,weightMax:139.07, stage: 3, region: '-', trait: '盲拧 — 回合开始时，技能顺序打乱，4号位的技能能耗-4。', evolvesTo: null, evolvesFrom: 264, desc: '立方体人形的机械精灵。' },

    // 可立鸡 → 晕晕鸡 → 绅士鸡 → 武者鸡 (NO.266~269)
    { id:266, name: '可立鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'CollyChicken',  attribute: 'fire',eggGroup: ['humanoid','mech'], heightMin:0.39,heightMax:0.56,weightMin:4.6,weightMax:7.4, stage: 1, region: '-', trait: '指挥家 — 应对成功后，永久获得双攻+20%。', evolvesTo: [267], evolvesFrom: null, desc: '站得笔直的小鸡。' },
    { id:267, name: '晕晕鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'DizzyChicken',  attribute: 'fire',eggGroup: ['flying'], heightMin:0.68,heightMax:0.91,weightMin:12.03,weightMax:18.06, stage: 2, region: '-', trait: '指挥家 — 应对成功后，永久获得双攻+20%。', evolvesTo: [268], evolvesFrom: 266, desc: '晕乎乎的鸡。' },
    { id:268, name: '绅士鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'GentlemanChicken',attribute:['fire','fighting'],eggGroup: ['flying','humanoid'], heightMin:1.31,heightMax:1.87,weightMin:46.8,weightMax:58.2, stage: 3, region: '-', trait: '指挥家 — 应对成功后，永久获得双攻+20%。', evolvesTo: [269], evolvesFrom: 267, desc: '绅士风度的鸡。' },
    { id:269, name: '武者鸡',
      image:'https://patchwiki.biligame.com/images/rocom/2/2d/9w4l9rr13yoldnqxtppebm3tqovahde.png',ename: 'WarriorChicken', attribute: ['fire','fighting'],eggGroup: ['flying','humanoid'], heightMin:1.46,heightMax:2.09,weightMin:46.8,weightMax:58.2, stage: 3, region: '-', trait: '斗技 — 应对成功后，获得全技能威力永久+20。', evolvesTo: null, evolvesFrom: 268, desc: '武士道精神的斗鸡。' },

    // 优优 → 绒光优优 (NO.270~271)
    { id:270, name: '优优',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/71ru3va03vqwr4ew76bnhqj74neqk98.png',  ename: 'YouYou',        attribute: ['ground','light'],eggGroup: ['animal'], heightMin:0.38,heightMax:0.56,weightMin:3.03,weightMax:4.1, stage: 1, region: '-', trait: '哨兵 — 回合开始时若敌方技能足够击败自己，自己获得速度+50，行动后脱离。', evolvesTo: [271], evolvesFrom: null, desc: '优秀的优优小精灵。' },
    {id:271, name: '绒光优优',
      image:'https://patchwiki.biligame.com/images/rocom/b/b2/71ru3va03vqwr4ew76bnhqj74neqk98.png',ename: 'VelvetLightYouyou',attribute:['ground','light'],eggGroup:['animal'],heightMin:0.69,heightMax:0.85,weightMin:13.5,weightMax:19.6,stage:2,region:'-',trait: '哨兵 — 回合开始时若敌方技能足够击败自己，自己获得速度+50，行动后脱离。',evolvesTo:null,evolvesFrom:270,desc:'散发绒光的优优进化。' ,
        battle: {
          trait: '哨兵折返(版本统治者)',
          tier: 'T1',
          recommend: 'PVP地光双系辅助/控制。摇篮曲睡眠+硬化防守的控制体系。',
          pairing: ["迪莫","罗隐","奇丽花"],
          teams: ["辅助控制队","地光联攻"],
          skills: {
            pve: [
                    { name: '流沙', type: '地', pp: 4, power: '-', effect: '地面系控制或伤害技能。' },
            { name: '硬化', type: '岩', pp: 3, power: '-', effect: '提升物防，增强生存能力。' },
            { name: '摇篮曲', type: '超能', pp: 3, power: '-', effect: '使敌方入睡，强控制技能。' },
            { name: '愿力强化', type: '光', pp: 3, power: '-', effect: '光系强化提升输出或生存。' }
            ],
            pvp: [
                    { name: '流沙', type: '地', pp: 4, power: '-', effect: '限制敌方行动。' },
            { name: '摇篮曲', type: '超能', pp: 3, power: '-', effect: '睡眠控制。' },
            { name: '硬化', type: '岩', pp: 3, power: '-', effect: '站场防守。' },
            { name: '愿力强化', type: '光', pp: 3, power: '-', effect: '强化自身。' },
            { name: '折返', type: '翼', pp: 4, power: '-', effect: '安全退场中转。' }
            ]
          }
        }
      },

    { id:272, name: '噼啪鸟',
      image:'https://patchwiki.biligame.com/images/rocom/5/5f/67uopai58qg98apg0dci57gi1bgxhn4.png',ename: 'CrackBird',     attribute: ['electric','flying'],eggGroup: ['flying'], heightMin:2.0,heightMax:2.15,weightMin:89.5,weightMax:127.5, stage: 2, region: '-', trait: '连续负荷 — 自己技能的迸发效果延长1回合。', evolvesTo: null, evolvesFrom: null, desc: '发出噼啪声响的鸟类。',
        battle: {
          "trait": "电系迸发延长",
          "tier": "T2",
          "recommend": "PVP电翼速攻。连续负荷让迸发效果延长一回合，持续压制力强。",
          "pairing": [
          "酷拉",
          "闪电鳗鱼",
          "帕尔萨斯"
          ],
          "teams": [
          "电系队",
          "速攻压制队"
          ],
          "skills": {
          "pve": [
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "电系核心输出，迸发延长1回合。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "翼系多段物攻。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "电系范围输出。"
          },
          {
          "name": "空气切割",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "翼系高速先手。"
        }
          ],
          "pvp": [
          {
          "name": "雷电交织",
          "type": "电",
          "pp": 4,
          "power": "80(魔攻)",
          "effect": "主攻技能，连续负荷让迸发翻倍持续时间。"
          },
          {
          "name": "电磁脉冲",
          "type": "电",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "范围压制。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "物理多段输出。"
          },
          {
          "name": "空气切割",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "高速先手补刀。"
        }
          ]
        }
        }
    },
    { id:273, name: '深蓝鲸',
      image:'https://patchwiki.biligame.com/images/rocom/4/4c/eonvrfjw5xrztsmkzmwz4eutdi7oban.png',ename: 'DeepBlueWhale', attribute: 'water',eggGroup: ['ocean','monster'], heightMin:2.0,heightMax:2.65,weightMin:645.0,weightMax:700.0, stage: 3, isBoss:true, region: '-', trait: '倾轧 — 携带的技能受能耗变化效果的影响翻倍。', evolvesTo: null, evolvesFrom: null, desc: '深海中的巨型蓝鲸！首领级精灵。',
        battle: {
          "trait": "BOSS级倾轧水盾",
          "tier": "T1",
          "recommend": "PVE水系超级坦克。首领级精灵种族值极高，倾轧让能耗变化效果翻倍。",
          "pairing": [
          "蓝漪水灵",
          "圣剑-X",
          "深海守护者"
          ],
          "teams": [
          "水系坦克队",
          "BOSS挑战"
          ],
          "skills": {
          "pve": [
          {
          "name": "巨浪滔天",
          "type": "水",
          "pp": 3,
          "power": "130(魔攻)",
          "effect": "BOSS级水系超必杀。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "高威力水系输出。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "超大减免护盾。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "大幅回复生命。"
        }
          ],
          "pvp": [
          {
          "name": "巨浪滔天",
          "type": "水",
          "pp": 3,
          "power": "130(魔攻)",
          "effect": "毁灭性水系必杀。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "稳定高威输出。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "超强防护。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "恐怖回血量。"
        }
          ]
        }
        }
    },

    // 格兰种子 → 格兰花 → 格兰球 (NO.274~276)
    { id:274, name: '格兰种子',
      image:'https://patchwiki.biligame.com/images/rocom/d/d3/b3jzacefc99rb5kz2yh5ta03dq5rd2e.png',ename: 'GranSeed',     attribute: 'grass',eggGroup: ['plant'], heightMin:0.4,heightMax:0.57,weightMin:3.5,weightMax:5.4, stage: 1, region: '-', trait: '生长 — 回合结束时，回复12%生命。', evolvesTo: [275], evolvesFrom: null, desc: '格兰花的种子形态。',
        battle: {
          "trait": "生长回血草系",
          "tier": "T3",
          "recommend": "PVE草系续航过渡。每回合自动回复12%生命，生存能力不错。",
          "pairing": [
          "格兰花",
          "格兰球",
          "针叶巡林"
          ],
          "teams": [
          "草系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "草系先手攻击。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸血+配合生长双重回血。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
          },
          {
          "name": "甜美香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱敌方。"
        }
          ],
          "pvp": [
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "主攻技能。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸血续航+生长回血叠加。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守站场靠生长回血。"
          },
          {
          "name": "甜美香气",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "削弱。"
        }
          ]
        }
        }
    },
    { id:275, name: '格兰花',
      image:'https://patchwiki.biligame.com/images/rocom/d/d3/b3jzacefc99rb5kz2yh5ta03dq5rd2e.png',ename: 'GranFlower',    attribute: 'grass',eggGroup: ['plant'], heightMin:0.48,heightMax:0.68,weightMin:6.5,weightMax:7.8, stage: 2, region: '-', trait: '生长 — 回合结束时，回复12%生命。', evolvesTo: [276], evolvesFrom: 274, desc: '格兰种子开出的花。',
        battle: {
          "trait": "格兰花进阶",
          "tier": "T2",
          "recommend": "PVP草系续航中转。进化后属性更高，生长回血更可观。",
          "pairing": [
          "格兰种子",
          "格兰球",
          "白发路路"
          ],
          "teams": [
          "草系续航队"
          ],
          "skills": {
          "pve": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "55(物攻)",
          "effect": "草系物攻增强。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "AOE输出。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "大量吸血。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化自身。"
        }
          ],
          "pvp": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "55(物攻)",
          "effect": "稳定主攻。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "恐怖吸血量+生长12%每回合。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "AOE清场。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后更站得住。"
        }
          ]
        }
        }
    },
    { id:276, name: '格兰球',
      image:'https://patchwiki.biligame.com/images/rocom/d/d3/b3jzacefc99rb5kz2yh5ta03dq5rd2e.png',ename: 'GranBall',      attribute: 'grass',eggGroup: ['plant','fairy'], heightMin:0.81,heightMax:1.16,weightMin:12.5,weightMax:16.5, stage: 3, region: '-', trait: '生长 — 回合结束时，回复12%生命。', evolvesTo: null, evolvesFrom: 275, desc: '格兰花结出的球形果实形态。' },

    // 地鼠 → 遁鼠 → 遁地鼠 (NO.277~279) - 含地区形态
    { id:277, name: '地鼠',  ename: 'Mole',          attribute: 'ground',eggGroup: ['animal'], heightMin:0.46,heightMax:0.66,weightMin:1.8,weightMax:2.85, stage: 1, region: '-', trait: '-', forms: ['枯水期','储水期','储水时的样子'], evolvesTo: [278], evolvesFrom: null, desc: '善于挖掘的地鼠。' },
    { id:278, name: '遁鼠',  ename: 'EscapeMole',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.278_遁鼠（枯水期的样子）.webp',    attribute: 'ground',eggGroup: ['animal'], heightMin:0.48,heightMax:0.69,weightMin:3.4,weightMax:4.8, stage: 2, region: '-', trait: '-', forms: ['枯水期','储水期','储水时的样子'], evolvesTo: [279], evolvesFrom: 277, desc: '擅长逃遁的地鼠进化。' },
    { id:279, name: '遁地鼠',ename: 'UndergroundMole',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.279_遁地鼠（枯水期的样子）.webp',attribute:'ground',eggGroup:['animal'],heightMin:0.64,heightMax:0.92,weightMin:6.4,weightMax:7.5,stage:3,region:'-',trait:'-',forms:['枯水期','储水期','储水时的样子'],evolvesTo:null,evolvesFrom:278,desc:'遁地能力极强的地鼠终极形态。' },

    // 墨鱿士 → 混乱鱿彩 → 秩序鱿墨 (NO.280~282)
    { id:280, name: '墨鱿士',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ekbfzkhrhoe1i26cq62zv0bdwyws7zg.png',ename: 'InkKnight',
      image:'https://rocom.game-walkthrough.com/pokemon/NO.280_墨鱿士.webp',     attribute: 'ghost',eggGroup: ['ocean','soft'], heightMin:0.35,heightMax:0.46,weightMin:3.25,weightMax:5.02, stage: 2, region: '-', trait: '涂鸦 — 使用非本系技能时威力+50%。', evolvesTo: [281], evolvesFrom: null, desc: '喷射墨汁的鱿鱼骑士。' },
    { id:281, name: '混乱鱿彩',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ekbfzkhrhoe1i26cq62zv0bdwyws7zg.png',ename: 'ChaosInkColor', attribute: ['ghost','dark'],eggGroup: ['ocean','soft'], heightMin:1.36,heightMax:1.54,weightMin:36.9,weightMax:48.2, stage: 3, region: '-', trait: '涂鸦 — 使用非本系技能时威力+50%。', evolvesTo: [282], evolvesFrom: 280, desc: '混乱色彩的鱿鱼形态。' },
    { id:282, name: '秩序鱿墨',
      image:'https://patchwiki.biligame.com/images/rocom/e/ed/ekbfzkhrhoe1i26cq62zv0bdwyws7zg.png',ename: 'OrderInkInk',  attribute: ['ghost','cute'],eggGroup: ['ocean','soft'], heightMin:1.59,heightMax:1.72,weightMin:45.6,weightMax:60.1, stage: 3, region: '-', trait: '绝对秩序 — 受到非敌方系别的技能攻击时伤害-50%。', evolvesTo: null, evolvesFrom: 281, desc: '秩序井然的鱿墨终极形态。' },

    // 小甲虫 → 铠甲虫 (NO.283~284)
    {id:283, name: '小甲虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c5/gxb5ofg998pswe6vu88c1gtiiibwnro.png',ename: 'SmallBeetle',   attribute: 'bug',eggGroup: ['insect','flying'], heightMin:0.48,heightMax:0.68,weightMin:6.5,weightMax:8.4, stage: 1, region: '-', trait: '坚韧铠甲 — 每受到1次攻击伤害，己方队伍获得1次随机奉献。', evolvesTo: [284], evolvesFrom: null, desc: '小型甲虫精灵。' ,
        battle: {
          trait: '自返场复活',
          tier: 'T1',
          recommend: 'PVP虫系坦克/复活流。复活之光+甲壳守护的不死之身。',
          pairing: ["化蝶","星光狮","毛头小蛛"],
          teams: ["虫系队","不死坦克队"],
          skills: {
            pve: [
                    { name: '甲壳守护', type: '虫', pp: 3, power: '-', effect: '大幅度提升防御能力。核心防守技。' },
            { name: '自愈', type: '虫', pp: 3, power: '-', effect: '恢复自身生命值。续航保障。' },
            { name: '复活之光', type: '虫', pp: 3, power: '-', effect: '死亡时自动复活一次！核心特色技能。' },
            { name: '虫群冲锋', type: '虫', pp: 4, power: '-', effect: '虫群集体冲锋造成伤害。' }
            ],
            pvp: [
                    { name: '甲壳守护', type: '虫', pp: 3, power: '-', effect: '站场硬抗。' },
            { name: '复活之光', type: '虫', pp: 3, power: '-', effect: '免死金牌。' },
            { name: '自愈', type: '虫', pp: 3, power: '-', effect: '回复血量。' },
            { name: '虫群冲锋', type: '虫', pp: 4, power: '-', effect: '进攻手段。' }
            ]
          }
        }
      },
    { id:284, name: '铠甲虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c5/gxb5ofg998pswe6vu88c1gtiiibwnro.png',ename: 'ArmorBeetle',   attribute: 'bug',eggGroup: ['insect'], heightMin:1.17,heightMax:1.68,weightMin:83.0,weightMax:96.0, stage: 2, region: '-', trait: '坚韧铠甲 — 每受到1次攻击伤害，己方队伍获得1次随机奉献。', evolvesTo: null, evolvesFrom: 283, desc: '全身铠甲的甲虫。' },

    // 圣剑系列 (NO.285~286)
    { id:285, name: '圣剑侍从',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/6w4z6k41648qw2uagnoz0ac081trrgi.png',ename: 'HolySwordAttendant',attribute:'machine',eggGroup:['mech'],heightMin:0.94,heightMax:1.18,weightMin:115.7,weightMax:173.6,stage:2,region:'-',trait: '正位宝剑 — 仅可以使用1号位技能。',evolvesTo:[286],evolvesFrom:null,desc:'持圣剑的侍从。' },
    {id:286, name: '圣剑-X',
      image:'https://patchwiki.biligame.com/images/rocom/1/1d/6w4z6k41648qw2uagnoz0ac081trrgi.png',ename: 'HolySwordX',    attribute: 'machine',eggGroup: ['mech'], heightMin:1.83,heightMax:2.07,weightMin:481.0,weightMax:658.0, stage: 3, region: '-', trait: '正位宝剑 — 仅可以使用1号位技能。', evolvesTo: null, evolvesFrom: 285, desc: 'X型圣剑的终极战士。' ,
        battle: {
          trait: '920种族值铁壁坦克',
          tier: 'T1',
          recommend: 'PVP机械水系混合输出。激流冲击+水流冲击的双修打法。',
          pairing: ["贝古斯","权杖-V","缇塔"],
          teams: ["机械队","混合输出队"],
          skills: {
            pve: [
                    { name: '激流冲击', type: '水', pp: 3, power: '100(魔攻)', effect: '超高威力水系魔攻必杀。核心输出。' },
            { name: '水流冲击', type: '水', pp: 4, power: '80(魔攻)', effect: '稳定水系魔攻输出。' },
            { name: '泡泡围困', type: '水', pp: 3, power: '55(魔攻)', effect: '困住敌方造成持续伤害或限制行动。' },
            { name: '水幕护盾', type: '水', pp: 3, power: '-', effect: '形成水幕减免伤害。' }
            ],
            pvp: [
                    { name: '激流冲击', type: '水', pp: 3, power: '100(魔攻)', effect: '爆发必杀。' },
            { name: '水流冲击', type: '水', pp: 4, power: '80(魔攻)', effect: '稳定输出。' },
            { name: '泡泡围困', type: '水', pp: 3, power: '55(魔攻)', effect: '控制+伤害。' },
            { name: '水幕护盾', type: '水', pp: 3, power: '-', effect: '防御护盾。' }
            ]
          }
        }
      },

    // 吸泥鸥 → 泥吼牙 (NO.287~288)
    { id:287, name: '吸泥鸥',
      image:'https://patchwiki.biligame.com/images/rocom/8/8e/br2yi6aj77tv3j8bstqidsiuvadc0od.png',ename: 'MudAbsorbGull', attribute: ['ground','flying'],eggGroup: ['flying','amphibian'], heightMin:0.55,heightMax:0.71,weightMin:9.5,weightMax:12.5, stage: 2, region: '-', trait: '无差别过滤 — 在场时，所有精灵连击数固定为2。', evolvesTo: [288], evolvesFrom: null, desc: '吸收泥土的海鸥。' },
    { id:288, name: '泥吼牙',
      image:'https://patchwiki.biligame.com/images/rocom/8/8e/br2yi6aj77tv3j8bstqidsiuvadc0od.png',ename: 'MudRoarFang',  attribute: ['ground','flying'],eggGroup: ['flying'], heightMin:1.05,heightMax:1.45,weightMin:21.5,weightMax:32.5, stage: 3, region: '-', trait: '无差别过滤 — 在场时，所有精灵连击数固定为2。', evolvesTo: null, evolvesFrom: 287, desc: '泥浆咆哮的利齿鸥。' },

    // 大头骨龙 → 寂灭骨龙 (NO.289~290)
    { id:289, name: '大头骨龙',
      image:'https://patchwiki.biligame.com/images/rocom/d/dc/oaohfrfv4b6cx8elngiwarhn9phgzch.png',ename: 'BigHeadBoneDragon',attribute:['dragon','ghost'],eggGroup:['dragon','monster'],heightMin:0.85,heightMax:1.0,weightMin:18.6,weightMax:33.5,stage:2,region:'-',trait: '不朽 — 力竭3回合后复活。',evolvesTo:[290],evolvesFrom:null,desc:'大头骨龙的骨架形态。' },
    {id:290, name: '寂灭骨龙',
      image:'https://patchwiki.biligame.com/images/rocom/d/dc/oaohfrfv4b6cx8elngiwarhn9phgzch.png',ename: 'NirvanaBoneDragon',attribute:['dragon','ghost'],eggGroup:['dragon','monster'],heightMin:2.25,heightMax:2.45,weightMin:85.7,weightMax:105.0,stage:3,region:'-',trait: '不朽 — 力竭3回合后复活。',evolvesTo:null,evolvesFrom:289,desc:'寂灭之力汇聚的骨龙终极形态。',
        battle: {
          trait: '骨甲反弹物理',
          tier: 'T0',
          recommend: 'PVP龙幽双系爆发。逆鳞+龙之怒的暴力输出链。种族值极高。',
          pairing: ["翼龙","圣羽翼王","尖嘴狐仙","罗隐"],
          teams: ["龙系队","爆发秒杀队"],
          skills: {
            pve: [
                    { name: '逆鳞', type: '龙', pp: 3, power: '110(物攻)', effect: '超高威力龙系物攻必杀。核心输出技能。' },
            { name: '龙之怒', type: '龙', pp: 4, power: '75(物攻)', effect: '稳定的龙系物攻输出。' },
            { name: '龙息', type: '龙', pp: 4, power: '60(魔攻)', effect: '龙系魔攻补充或可能附带烧伤。' },
            { name: '翱翔', type: '翼', pp: 3, power: '-', effect: '飞行脱离或提升闪避。' }
            ],
            pvp: [
                    { name: '逆鳞', type: '龙', pp: 3, power: '110(物攻)', effect: '爆发核弹。' },
            { name: '龙之怒', type: '龙', pp: 4, power: '75(物攻)', effect: '稳定伤害。' },
            { name: '龙息', type: '龙', pp: 4, power: '60(魔攻)', effect: '补刀或挂效果。' },
            { name: '翱翔', type: '翼', pp: 3, power: '-', effect: '脱离或规避。' }
            ]
          }
        }
      },

    // 厉毒系列 (NO.291~292)
    { id:291, name: '厉毒小萝',
      image:'https://patchwiki.biligame.com/images/rocom/3/3e/6tk28w0xeycfxejxbtn8myiv9wsd17j.png',ename: 'VenomLittleGirl',attribute:['poison','dark'],eggGroup:['humanoid'],heightMin:0.55,heightMax:0.65,weightMin:8.73,weightMax:14.92,stage:1,region:'-',trait: '侵蚀 — 敌方每有1层中毒效果，自己获得连击数+1。',evolvesTo:[292],evolvesFrom:null,desc:'携带剧毒的小萝莉精灵。' },
    { id:292, name: '厉毒修萝',
      image:'https://patchwiki.biligame.com/images/rocom/3/3e/6tk28w0xeycfxejxbtn8myiv9wsd17j.png',ename: 'VenomCultivateGirl',attribute:['poison','dark'],eggGroup:['humanoid'],heightMin:1.45,heightMax:1.55,weightMin:33.75,weightMax:41.6,stage:2,region:'-',trait: '侵蚀 — 敌方每有1层中毒效果，自己获得连击数+1。',evolvesTo:null,evolvesFrom:291,desc:'修炼剧毒之术的萝莉形态。' },

    // 小帕尔 → 帕尔萨斯 → 龙息帕尔 (NO.293~295)
    { id:293, name: '小帕尔',
      image:'https://patchwiki.biligame.com/images/rocom/b/b3/l5aj212ensdevykbe4wgsxf1c12ayxi.png',ename: 'LittlePal',     attribute: 'dark',eggGroup: ['animal'], heightMin:0.64,heightMax:0.92,weightMin:9.4,weightMax:13.6, stage: 1, region: '-', trait: '付给恶魔的赎价 — 击败敌方精灵时，敌方额外损失1点魔力。被敌方精灵击败时，自己额外损失1点魔力。', evolvesTo: [294], evolvesFrom: null, desc: '小狗形态的帕尔幼崽。' },
    { id:294, name: '帕尔萨斯',
      image:'https://patchwiki.biligame.com/images/rocom/b/b3/l5aj212ensdevykbe4wgsxf1c12ayxi.png',ename: 'Cerberus',     attribute: 'dark',eggGroup: ['animal'], heightMin:1.33,heightMax:1.58,weightMin:46.5,weightMax:61.5, stage: 3, region: '-', trait: '付给恶魔的赎价 — 击败敌方精灵时，敌方额外损失1点魔力。被敌方精灵击败时，自己额外损失1点魔力。', evolvesTo: [295], evolvesFrom: 293, desc: '三头地狱犬形态！守卫冥界之门。' },
    { id:295, name: '龙息帕尔',
      image:'https://patchwiki.biligame.com/images/rocom/b/b3/l5aj212ensdevykbe4wgsxf1c12ayxi.png',ename: 'DragonBreathPal',attribute:'dark',eggGroup: ['none'], heightMin:1.93,heightMax:2.4,weightMin:96.5,weightMax:115.0, stage: 3, isBoss:true, region: '-', trait: '付给恶魔的赎价 — 击败敌方精灵时，敌方额外损失1点魔力。被敌方精灵击败时，自己额外损失1点魔力。', evolvesTo: null, evolvesFrom: 294, desc: '喷吐龙息的帕尔萨斯终极形态！战令宠，无法孵蛋。' },

    // 毛头小蛛 → 捕尘长绒 → 食尘短绒 (NO.296~298)
    {id:296, name: '毛头小蛛',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/3nr9m11fcoasdyy8qcplzh21b7rbqep.png',ename: 'FuzzyLittleSpider',attribute:['bug','ground'],eggGroup:['insect','fairy'],heightMin:0.3,heightMax:0.45,weightMin:0.95,weightMax:2.0,stage:1,region:'-',trait: '扫拖一体 — 回合结束时驱散敌方1层印记，且驱散后己方队伍获得1次随机奉献。',evolvesTo:[297],evolvesFrom:null,desc:'毛茸茸的小蜘蛛。' ,
        battle: {
          trait: '甩水3层中毒+腐化-90%双攻',
          tier: 'T1',
          recommend: 'PVP虫地双系控制/毒素。蛛网缠绕+剧毒之触的双重控制。',
          pairing: ["化蝶","小甲虫","星光狮"],
          teams: ["虫地联攻队","毒素控制队"],
          skills: {
            pve: [
                    { name: '蛛网缠绕', type: '虫', pp: 3, power: '-', effect: '束缚敌方限制行动并造成持续伤害。' },
            { name: '剧毒之触', type: '毒', pp: 3, power: '-', effect: '接触中毒造成持续毒素伤害。' },
            { name: '甩水', type: '水', pp: 4, power: '-', effect: '用水属性攻击甩开或减速敌方。' },
            { name: '腐化喷雾', type: '毒', pp: 4, power: '-', effect: '喷洒腐蚀性液体降低敌方属性。' }
            ],
            pvp: [
                    { name: '蛛网缠绕', type: '虫', pp: 3, power: '-', effect: '强控束缚。' },
            { name: '剧毒之触', type: '毒', pp: 3, power: '-', effect: '挂毒DOT。' },
            { name: '腐化喷雾', type: '毒', pp: 4, power: '-', effect: '降属性DEBUFF。' },
            { name: '甩水', type: '水', pp: 4, power: '-', effect: '减速或推开。' }
            ]
          }
        }
      },
    { id:297, name: '捕尘长绒',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/3nr9m11fcoasdyy8qcplzh21b7rbqep.png',ename: 'DustCatchLongFuzz',attribute:['bug','ground'],eggGroup:['insect'],heightMin:1.15,heightMax:1.45,weightMin:2.35,weightMax:4.19,stage:2,region:'-',trait: '扫拖一体 — 回合结束时驱散敌方1层印记，且驱散后己方队伍获得1次随机奉献。',evolvesTo:[298],evolvesFrom:296,desc:'捕捉灰尘的长毛蜘蛛。' },
    { id:298, name: '食尘短绒',
      image:'https://patchwiki.biligame.com/images/rocom/f/f5/3nr9m11fcoasdyy8qcplzh21b7rbqep.png',ename: 'DustEatShortFuzz',attribute:['bug','ground'],eggGroup:['insect'],heightMin:0.75,heightMax:0.9,weightMin:2.65,weightMax:5.15,stage:3,region:'-',trait: '特殊清洁场景 — 回合结束时偷取敌方1层印记。',evolvesTo:null,evolvesFrom:297,desc:'吞食灰尘的大型蜘蛛。' },

    // 画精灵系列 (NO.299~302)
    { id:299, name: '画精灵',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PaintSprite',   attribute: 'normal',eggGroup: ['fairy'], heightMin:0.28,heightMax:0.38,weightMin:0.99,weightMax:2.21, stage: 1, region: '-', trait: '灰色肖像 — 攻击会使敌方已有的减益层数+3。', evolvesTo: [300], evolvesFrom: null, desc: '从画中诞生的小精灵。' },
    { id:300, name: '画像守护',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PortraitGuardian',attribute:'normal',eggGroup:['fairy'],heightMin:0.49,heightMax:0.6,weightMin:5.85,weightMax:6.9,stage:2,region:'-',trait: '灰色肖像 — 攻击会使敌方已有的减益层数+3。',evolvesTo:[301],evolvesFrom:299,desc:'守护画像的存在。' },
    { id:301, name: '画间法师手',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PaintWizardHand',attribute:['normal','illusion'],eggGroup:['fairy'],heightMin:2.08,heightMax:2.45,weightMin:46.05,weightMax:58.1,stage:3,region:'-',trait: '灰色肖像 — 攻击会使敌方已有的减益层数+3。',evolvesTo:null,evolvesFrom:300,desc: '画中的魔法之手。' },
    {id:302, name: '画间沉铁兽',
      image:'https://patchwiki.biligame.com/images/rocom/a/a0/lvngsspwir7n25jd82zaz2zujxdrqs8.png',ename: 'PaintIronBeast',attribute:['normal','fighting'],eggGroup:['fairy'],heightMin:1.75,heightMax:1.92,weightMin:75.7,weightMax:88.02,stage:3,region:'-',trait: '变形活画 — 攻击时，敌方每有1层增益，本次技能威力+10%。',evolvesTo:null,evolvesFrom:null,desc: '画中的钢铁野兽。' ,
        battle: {
          trait: '变形活画:Buff越多伤越高',
          tier: 'T1',
          recommend: 'PVP武系物理爆发手。截拳+先发制人的格斗专家。',
          pairing: ["酷拉","蹦床松鼠","罗隐"],
          teams: ["武斗队","物理爆发队"],
          skills: {
            pve: [
                    { name: '能量刃', type: '武', pp: 4, power: '-', effect: '汇聚能量形成的刀刃攻击，高威力物攻。' },
            { name: '先发制人', type: '武', pp: 4, power: '-', effect: '先手攻击确保出手权。' },
            { name: '截拳', type: '武', pp: 3, power: '-', effect: '拦截敌方攻击并反击的格挡技能。' },
            { name: '有效预防', type: '武', pp: 3, power: '-', effect: '预防性防御减少受到的伤害。' }
            ],
            pvp: [
                    { name: '能量刃', type: '武', pp: 4, power: '-', effect: '主输出。' },
            { name: '先发制人', type: '武', pp: 4, power: '-', effect: '先手收割。' },
            { name: '截拳', type: '武', pp: 3, power: '-', effect: '反制格挡。' },
            { name: '有效预防', type: '武', pp: 3, power: '-', effect: '防御减伤。' }
            ]
          }
        }
      },

    // 书魔虫系列 (NO.303~306)
    { id:303, name: '书魔虫',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'BookWormDemon',  attribute: 'normal',eggGroup: ['insect','fairy'], heightMin:0.3,heightMax:0.41,weightMin:2.28,weightMax:3.86, stage: 1, region: '-', trait: '图书守卫者 — 入场时，若自己魔力值为1，自己获得双攻+50%。', evolvesTo: [304], evolvesFrom: null, desc: '啃食书籍的魔法虫。' },
    { id:304, name: '书卷守护',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'BookGuardian', attribute: 'normal',eggGroup: ['fairy'], heightMin:0.82,heightMax:1.01,weightMin:9.8,weightMax:14.8, stage: 2, region: '-', trait: '图书守卫者 — 入场时，若自己魔力值为1，自己获得双攻+50%。', evolvesTo: [305], evolvesFrom: 303, desc: '守护书卷的存在。' },
    { id:305, name: '古卷执政官',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'AncientScrollMagistrate',attribute:['normal','illusion'],eggGroup:['fairy'],heightMin:1.91,heightMax:2.21,weightMin:98.8,weightMax:135.5,stage:3,region:'-',trait: '图书守卫者 — 入场时，若自己魔力值为1，自己获得双攻+50%。',evolvesTo:[306],evolvesFrom:304,desc: '执掌古卷的执政官。' },
    { id:306, name: '古卷匣魔像',
      image:'https://patchwiki.biligame.com/images/rocom/5/53/ph0kl9j7nj2m8azrrd5hpeq0b62phrl.png',ename: 'AncientScrollBoxGolem',attribute:['normal','fighting'],eggGroup:['mech'],heightMin:1.87,heightMax:2.15,weightMin:119.5,weightMax:180.5,stage:3,region:'-',trait: '构装契约者 — 入场时，若敌方魔力值为1，自己获得双防+50%。',evolvesTo:null,evolvesFrom:305,desc: '古卷匣中的魔像巨人。' },

    // 绒绒 → 小绒茧 → 绒仙子 (NO.307~309)
    { id:307, name: '绒绒',
      image:'https://patchwiki.biligame.com/images/rocom/0/08/654ffcp524wy323uwi7k1z7rk4rejuc.png',  ename: 'FluffyFluffy',  attribute: ['light','bug'],eggGroup: ['animal'], heightMin:0.29,heightMax:0.35,weightMin:1.0,weightMax:2.5, stage: 1, hasShiny:true, region: '-', trait: '绒粉星光 — 攻击时，若敌方血脉是非本系的系别血脉，技能威力+100%。', evolvesTo: [308], evolvesFrom: null, desc: '毛茸茸的小精灵。存在异色形态。' },
    { id:308, name: '小绒茧',
      image:'https://patchwiki.biligame.com/images/rocom/0/08/654ffcp524wy323uwi7k1z7rk4rejuc.png',ename: 'SmallFluffyCocoon',attribute:['light','bug'],eggGroup:['animal'],heightMin:0.59,heightMax:0.84,weightMin:7.6,weightMax:9.2,stage:2,region:'-',trait: '绒粉星光 — 攻击时，若敌方血脉是非本系的系别血脉，技能威力+100%。',evolvesTo:[309],evolvesFrom:307,desc: '进入茧状态的绒绒。' },
    { id:309, name: '绒仙子',
      image:'https://patchwiki.biligame.com/images/rocom/0/08/654ffcp524wy323uwi7k1z7rk4rejuc.png',ename: 'FluffyFairy',  attribute: ['light','bug'],eggGroup: ['none'], heightMin:1.25,heightMax:1.65,weightMin:37.5,weightMax:42.8, stage: 3, hasShiny:true, region: '-', trait: '绒粉星光 — 攻击时，若敌方血脉是非本系的系别血脉，技能威力+100%。', evolvesTo: null, evolvesFrom: 308, desc: '破茧而出的绒绒仙子！战令宠，无法孵蛋。' },

    // 犀角鸟 (NO.310)
    { id:310, name: '犀角鸟',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/81qhw7nwi52la93w31dkqwhrzwgqiqw.png',ename: 'RhinoHornBird', attribute: 'light',eggGroup: ['animal'], heightMin:0.32,heightMax:0.4,weightMin:9.6,weightMax:11.5, stage: 2, hasShiny:true, region: '-', trait: '月光审判 — 攻击时，若敌方血脉是首领血脉，技能威力+100%。', evolvesTo: null, evolvesFrom: null, desc: '长有犀牛角的鸟类。存在异色形态。',
        battle: {
          "trait": "月光审判BOSS杀手",
          "tier": "T2",
          "recommend": "PVE/PVP光系BOSS克制手。对首领血脉敌人威力翻倍，挑战本必备。",
          "pairing": [
          "迪莫",
          "艾莉儿",
          "深蓝鲸"
          ],
          "teams": [
          "BOSS挑战队",
          "光系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "光刃",
          "type": "光",
          "pp": 3,
          "power": "110(物攻)",
          "effect": "对首领血脉220%威力！核心必杀。"
          },
          {
          "name": "放晴",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "光系技能威力+50%。"
          },
          {
          "name": "闪光",
          "type": "光",
          "pp": 4,
          "power": "-",
          "effect": "降低敌方命中率。"
          },
          {
          "name": "超导",
          "type": "电",
          "pp": 4,
          "power": "90(魔攻)",
          "effect": "电系补刀输出。"
        }
          ],
          "pvp": [
          {
          "name": "光刃",
          "type": "光",
          "pp": 3,
          "power": "110(物攻)",
          "effect": "打首领220%威力，非首领也稳定110物攻。"
          },
          {
          "name": "放晴",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后续光系技能。"
          },
          {
          "name": "超导",
          "type": "电",
          "pp": 4,
          "power": "90(魔攻)",
          "effect": "低能耗电系补刀。"
          },
          {
          "name": "闪光",
          "type": "光",
          "pp": 4,
          "power": "-",
          "effect": "闪避保命。"
        }
          ]
        }
        }
    },

    // 光纤兽 → 疾光千兽 (NO.311~312)
    { id:311, name: '光纤兽',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/81qhw7nwi52la93w31dkqwhrzwgqiqw.png',ename: 'FiberBeast',    attribute: 'light',eggGroup: ['animal','mech'], heightMin:0.7,heightMax:0.85,weightMin:31.5,weightMax:37.8, stage: 1, region: '-', trait: '月光审判 — 攻击时，若敌方血脉是首领血脉，技能威力+100%。', evolvesTo: [312], evolvesFrom: null, desc: '光纤构成的兽类精灵。',
        battle: {
          "trait": "月光审判BOSS杀手",
          "tier": "T2",
          "recommend": "PVE/PVP光系首领克制。对首领血脉敌人威力翻倍——BOSS挑战必备。",
          "pairing": [
          "疾光千兽",
          "迪莫",
          "犀角鸟"
          ],
          "teams": [
          "BOSS挑战队",
          "光系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "光刃",
          "type": "光",
          "pp": 3,
          "power": "100(物攻)",
          "effect": "对首领血脉200%威力核心必杀。"
          },
          {
          "name": "放晴",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "光系强化+50%。"
          },
          {
          "name": "闪光",
          "type": "光",
          "pp": 4,
          "power": "-",
          "effect": "降低敌方命中。"
          },
          {
          "name": "超导",
          "type": "电",
          "pp": 4,
          "power": "85(魔攻)",
          "effect": "电系补刀。"
        }
          ],
          "pvp": [
          {
          "name": "光刃",
          "type": "光",
          "pp": 3,
          "power": "100(物攻)",
          "effect": "打首领200%威力，非首领也100威稳定输出。"
          },
          {
          "name": "超导",
          "type": "电",
          "pp": 4,
          "power": "85(魔攻)",
          "effect": "低能耗电系补刀。"
          },
          {
          "name": "放晴",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后续光刃。"
          },
          {
          "name": "闪光",
          "type": "光",
          "pp": 4,
          "power": "-",
          "effect": "闪避保命。"
        }
          ]
        }
        }
    },
    { id:312, name: '疾光千兽',
      image:'https://patchwiki.biligame.com/images/rocom/6/6a/81qhw7nwi52la93w31dkqwhrzwgqiqw.png',ename: 'SpeedLightThousandBeast',attribute:'light',eggGroup:['animal'],heightMin:1.75,heightMax:2.1,weightMin:112.9,weightMax:165.0,stage:3,region:'-',trait: '月光审判 — 攻击时，若敌方血脉是首领血脉，技能威力+100%。',evolvesTo:null,evolvesFrom:311,desc: '疾驰如光的千足兽！战令宠，无法孵蛋。',
        battle: {
          "trait": "疾光千兽终极",
          "tier": "T1",
          "recommend": "PVP光系BOSS杀手王牌。最终形态+月光审判=对首领260%以上威力！",
          "pairing": [
          "光纤兽",
          "迪莫",
          "艾莉儿"
          ],
          "teams": [
          "光系王牌队",
          "BOSS挑战"
          ],
          "skills": {
          "pve": [
          {
          "name": "圣光裁决",
          "type": "光",
          "pp": 3,
          "power": "115(物攻)",
          "effect": "光系究极必杀——首领血脉230%威力！"
          },
          {
          "name": "光刃",
          "type": "光",
          "pp": 3,
          "power": "110(物攻)",
          "effect": "高威稳定输出——首领220%威力。"
          },
          {
          "name": "放晴",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "大幅强化光系。"
          },
          {
          "name": "漫反射",
          "type": "普通",
          "pp": 3,
          "power": "-",
          "effect": "多属性强化。"
        }
          ],
          "pvp": [
          {
          "name": "圣光裁决",
          "type": "光",
          "pp": 3,
          "power": "115(物攻)",
          "effect": "对首领230%威力的光系核弹。"
          },
          {
          "name": "光刃",
          "type": "光",
          "pp": 3,
          "power": "110(物攻)",
          "effect": "220%威力稳定爆发。"
          },
          {
          "name": "放晴",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化后伤害爆炸。"
          },
          {
          "name": "漫反射",
          "type": "普通",
          "pp": 3,
          "power": "-",
          "effect": "多属性强化增加灵活性。"
        }
          ]
        }
        }
    },

    // 果冻系列 (NO.313~316)
    { id:313, name: '果冻',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',  ename: 'Jelly',         attribute: 'water',eggGroup: ['magic','soft'], heightMin:0.3,heightMax:0.36,weightMin:4.35,weightMax:5.6, stage: 1, region: '-', trait: '茶多酚 — 离场后，更换入场的精灵回复20%生命且免疫寄生。', evolvesTo: null, evolvesFrom: null, desc: 'Q弹Q弹的果冻精灵。',
        battle: {
          "trait": "茶多酚换人治疗",
          "tier": "T2",
          "recommend": "PVP水系中转治疗。每次离场都给换入的队友回20%血+免疫寄生——完美中转。",
          "pairing": [
          "抹茶布丁",
          "蓝漪水灵",
          "深蓝鲸"
          ],
          "teams": [
          "换人治疗队"
          ],
          "skills": {
          "pve": [
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "水系稳定输出。"
          },
          {
          "name": "泡泡围困",
          "type": "水",
          "pp": 3,
          "power": "50(魔攻)",
          "effect": "控制+伤害。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "减免伤害。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "主动退场触发茶多酚。"
        }
          ],
          "pvp": [
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "主动退场→队友入场回20%血+免疫寄生！"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "70(魔攻)",
          "effect": "出场时打一套再退场。"
          },
          {
          "name": "泡泡围困",
          "type": "水",
          "pp": 3,
          "power": "50(魔攻)",
          "effect": "控制留人。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "生存保障。"
        }
          ]
        }
        }
    },
    { id:314, name: '抹茶布丁',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',ename: 'MatchaPudding', attribute: ['water','grass'],eggGroup: ['soft'], heightMin:0.39,heightMax:0.51,weightMin:6.21,weightMax:7.9, stage: 2, region: '-', trait: '茶多酚 — 离场后，更换入场的精灵回复20%生命且免疫寄生。', evolvesTo: null, evolvesFrom: null, desc: '抹茶味布丁精灵。',
        battle: {
          "trait": "抹茶布丁进阶",
          "tier": "T2",
          "recommend": "PVP换人治疗中转。进化后属性更高，茶多酚治疗效果更好。",
          "pairing": [
          "果冻",
          "椰浆布丁",
          "红绒十字"
          ],
          "teams": [
          "换人治疗队"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威水系必杀。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "75(魔攻)",
          "effect": "稳定输出。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "回复生命。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场触发茶多酚。"
        }
          ],
          "pvp": [
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场治疗20%+免疫寄生——循环利用。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威爆发。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "自身续航。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "75(魔攻)",
          "effect": "稳定输出。"
        }
          ]
        }
        }
    },
    { id:315, name: '椰浆布丁',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',ename: 'CoconutPudding',attribute: ['water','ice'],eggGroup: ['soft'], heightMin:0.39,heightMax:0.51,weightMin:6.21,weightMax:7.9, stage: 2, region: '-', trait: '吉利丁片 — 离场后，更换入场的精灵获得双防+20%且免疫冻结。', evolvesTo: null, evolvesFrom: null, desc: '椰浆味布丁精灵。',
        battle: {
          "trait": "吉利丁片双防Buff",
          "tier": "T2",
          "recommend": "PVP换人增益型。离场给换入者双防+20%+免疫冻结——对抗冰系的绝佳中转。",
          "pairing": [
          "抹茶布丁",
          "熔岩布丁",
          "布鲁斯"
          ],
          "teams": [
          "换人增益队"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威水系输出。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "强力防护。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "回复生命。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场触发吉利丁片。"
        }
          ],
          "pvp": [
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场→换入者双防+20%+免疫冻结！"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威输出。"
          },
          {
          "name": "水幕护盾",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "防守站场。"
          },
          {
          "name": "海洋祝福",
          "type": "水",
          "pp": 3,
          "power": "-",
          "effect": "续航。"
        }
          ]
        }
        }
    },
    { id:316, name: '熔岩布丁',
      image:'https://patchwiki.biligame.com/images/rocom/9/92/5pgbduguoappstj95ppzcb6rlxzs4f1.png',ename: 'LavaPudding',   attribute: ['water','fire'],eggGroup: ['soft'], heightMin:0.39,heightMax:0.51,weightMin:6.21,weightMax:7.9, stage: 2, region: '-', trait: '美拉德反应 — 离场后，更换入场的精灵获得双攻+20%且免疫灼烧。', evolvesTo: null, evolvesFrom: null, desc: '熔岩味的热辣布丁精灵。',
        battle: {
          "trait": "美拉德反应攻击Buff",
          "tier": "T2",
          "recommend": "PVP换人攻击增益型。离场给换入者双攻+20%+免疫灼烧——进攻型中转最佳。",
          "pairing": [
          "椰浆布丁",
          "火尾战士",
          "火焰猿"
          ],
          "teams": [
          "换人增益队"
          ],
          "skills": {
          "pve": [
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威水系必杀。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "75(魔攻)",
          "effect": "稳定输出。"
          },
          {
          "name": "气泡束缚",
          "type": "水",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "控制+伤害。"
          },
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场触发美拉德反应。"
        }
          ],
          "pvp": [
          {
          "name": "折返",
          "type": "翼",
          "pp": 4,
          "power": "-",
          "effect": "退场→换入者双攻+20%+免疫灼烧！进攻型中转。"
          },
          {
          "name": "激流冲击",
          "type": "水",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "高威输出。"
          },
          {
          "name": "气泡束缚",
          "type": "水",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "控制。"
          },
          {
          "name": "水流冲击",
          "type": "水",
          "pp": 4,
          "power": "75(魔攻)",
          "effect": "稳定副输出。"
        }
          ]
        }
        }
    },

    // 星尘虫系列 (NO.317~319)
    { id:317, name: '星尘虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/fgbjyux6bdbk4uikkoew7jeicbzy47t.png',ename: 'StardustBug',   attribute: 'bug',eggGroup: ['insect'], heightMin:0.15,heightMax:0.2,weightMin:0.45,weightMax:1.4, stage: 1, region: '-', trait: '契约的形状 — 根据捕捉所用的咕噜球，入场时获得不同效果。', evolvesTo: [318], evolvesFrom: null, desc: '星尘构成的小虫子。',
        battle: {
          "trait": "契约虫系灵活",
          "tier": "T2",
          "recommend": "PVP虫系灵活型。不同咕噜球捕捉带来不同入场效果，策略多变。",
          "pairing": [
          "落星虫",
          "黄蜂后",
          "矮脚爬爬"
          ],
          "teams": [
          "虫系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "虫群集体攻击。"
          },
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "35(物攻)",
          "effect": "毒系低能耗输出。"
          },
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "提升防御。"
          },
          {
          "name": "蛛丝束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "限制行动。"
        }
          ],
          "pvp": [
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "防守站场等待契约效果。"
          },
          {
          "name": "虫群冲锋",
          "type": "虫",
          "pp": 4,
          "power": "-",
          "effect": "群体伤害。"
          },
          {
          "name": "毒针",
          "type": "毒",
          "pp": 4,
          "power": "35(物攻)",
          "effect": "低能耗补刀。"
          },
          {
          "name": "蛛丝束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "控制留人。"
        }
          ]
        }
        }
    },
    { id:318, name: '落星虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/fgbjyux6bdbk4uikkoew7jeicbzy47t.png',ename: 'FallenStarBug', attribute: 'bug',eggGroup: ['insect'], heightMin:0.35,heightMax:0.4,weightMin:1.25,weightMax:2.25, stage: 2, region: '-', trait: '契约的形状 — 根据捕捉所用的咕噜球，入场时获得不同效果。', evolvesTo: [319], evolvesFrom: 317, desc: '陨落的星尘虫进化。',
        battle: {
          "trait": "落星虫进阶",
          "tier": "T2",
          "recommend": "PVP虫系契约中转。进化后属性更高，契约效果更强。",
          "pairing": [
          "星尘虫",
          "恶魔红钻",
          "黄蜂后"
          ],
          "teams": [
          "虫系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "虫群风暴",
          "type": "虫",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "虫系AOE增强。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "高威毒系物攻。"
          },
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "大幅防御。"
          },
          {
          "name": "蛛网束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "强控限制。"
        }
          ],
          "pvp": [
          {
          "name": "甲壳守护",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "防守等待契约触发。"
          },
          {
          "name": "虫群风暴",
          "type": "虫",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "AOE群体压制。"
          },
          {
          "name": "剧毒之牙",
          "type": "毒",
          "pp": 3,
          "power": "60(物攻)",
          "effect": "单体高威追击。"
          },
          {
          "name": "蛛网束缚",
          "type": "虫",
          "pp": 3,
          "power": "-",
          "effect": "强控留人。"
        }
          ]
        }
        }
    },
    { id:319, name: '陨星虫',
      image:'https://patchwiki.biligame.com/images/rocom/c/c9/fgbjyux6bdbk4uikkoew7jeicbzy47t.png',ename: 'MeteoriteBug',  attribute: 'bug',eggGroup: ['insect'], heightMin:0.65,heightMax:0.8,weightMin:5.6,weightMax:6.8, stage: 3, region: '-', trait: '契约的形状 — 根据捕捉所用的咕噜球，入场时获得不同效果。', evolvesTo: null, evolvesFrom: 318, desc: '如陨星般坠落的虫族终极形态。' },

    // 双灯鱼 → 利灯鱼 (NO.320~321)
    { id:320, name: '双灯鱼',
      image:'https://patchwiki.biligame.com/images/rocom/3/36/5i3mvo96bopno2o7f5h1bz7oz4hpkyq.png',ename: 'DoubleLampFish', attribute: ['water','electric'],eggGroup: ['ocean'], heightMin:0.5,heightMax:0.72,weightMin:14.9,weightMax:17.8, stage: 1, region: '-', trait: '对流 — 自己的能耗增加变为能耗降低；能耗降低变为能耗增加。', evolvesTo: [321], evolvesFrom: null, desc: '头顶两盏灯的深海小鱼。' },
    { id:321, name: '利灯鱼',
      image:'https://patchwiki.biligame.com/images/rocom/3/36/5i3mvo96bopno2o7f5h1bz7oz4hpkyq.png',ename: 'SharpLampFish', attribute: ['water','electric'],eggGroup: ['ocean'], heightMin:0.62,heightMax:0.89,weightMin:26.8,weightMax:31.5, stage: 2, region: '-', trait: '对流 — 自己的能耗增加变为能耗降低；能耗降低变为能耗增加。', evolvesTo: null, evolvesFrom: 320, desc: '灯光锐利的灯笼鱼进化。' },

    // 月牙雪熊 (NO.322)
    { id:322, name: '月牙雪熊',
      image:'https://patchwiki.biligame.com/images/rocom/5/5d/0cskl2u4wneivk2icntkrcaiwuwv4yq.png',ename: 'CrescentSnowBear',attribute:['ice','illusion'],eggGroup:['animal','monster'],heightMin:1.25,heightMax:1.45,weightMin:76.5,weightMax:92.5,stage:3,region:'-',trait: '月牙雪糕 — 使用攻击技能时，敌方每层冻结视为1层额外星陨印记。',evolvesTo:null,evolvesFrom:null,desc: '月亮印记的北极熊。' },

    // 嗜光嗡嗡 → 窃光蚊 (NO.323~324)
    { id:323, name: '嗜光嗡嗡',
      image:'https://patchwiki.biligame.com/images/rocom/6/6c/83k9t4acg7s1haeupl1wxml4pipklpa.png',ename: 'LightLovingBuzz',attribute:['dark','light'],eggGroup:['insect'],heightMin:0.24,heightMax:0.32,weightMin:1.46,weightMax:3.05,stage:1,region:'-',trait: '血型吸引 — 敌方每携带1种系别的技能，自己攻击时威力+10。',evolvesTo:[324],evolvesFrom:null,desc: '嗜好光线的嗡嗡虫。' },
    { id:324, name: '窃光蚊',
      image:'https://patchwiki.biligame.com/images/rocom/6/6c/83k9t4acg7s1haeupl1wxml4pipklpa.png',ename: 'StealLightMosquito',attribute:['dark','light'],eggGroup:['insect'],heightMin:0.53,heightMax:0.66,weightMin:7.05,weightMax:9.62,stage:2,region:'-',trait: '血型吸引 — 敌方每携带1种系别的技能，自己攻击时威力+10。',evolvesTo:null,evolvesFrom:323,desc: '窃取光芒的蚊子。' },

    // 柴渣虫 → 燃薪虫 (NO.325~326)
    { id:325, name: '柴渣虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/t3ec092gh9ocd64wuqjewlf56yjvxhg.png',ename: 'FirewoodBug',   attribute: ['fire','grass'],eggGroup: ['insect','plant'], heightMin:0.45,heightMax:0.55,weightMin:14.5,weightMax:18.6, stage: 1, region: '-', trait: '煤渣草 — 在场时，所有灼烧的衰减变为增长。', evolvesTo: [326], evolvesFrom: null, desc: '柴火渣滓中的虫子。' },
    {id:326, name: '燃薪虫',
      image:'https://patchwiki.biligame.com/images/rocom/a/a3/t3ec092gh9ocd64wuqjewlf56yjvxhg.png',ename: 'BurnWoodBug',   attribute: ['fire','grass'],eggGroup: ['insect','plant'], heightMin:1.1,heightMax:1.25,weightMin:72.5,weightMax:87.5, stage: 2, region: '-', trait: '煤渣草 — 在场时，所有灼烧的衰减变为增长。', evolvesTo: null, evolvesFrom: 325, desc: '燃烧薪柴的火焰虫。' ,
        battle: {
          trait: '灼烧无限翻倍不衰减',
          tier: 'T1',
          recommend: 'PVE火草双修输出。薪火相传叠层+火焰吐息的持续输出。',
          pairing: ["火神","化蝶","奇丽花"],
          teams: ["火草联攻队","持续输出队"],
          skills: {
            pve: [
                    { name: '薪火相传', type: '火', pp: 4, power: '100(魔攻)', effect: '传递火焰之力的高威力火系输出。核心技能。' },
            { name: '火焰吐息', type: '火', pp: 4, power: '70(魔攻)', effect: '稳定的火系魔攻输出。' },
            { name: '火花四溅', type: '火', pp: 4, power: '55(魔攻)', effect: '多目标火系伤害或AOE。' },
            { name: '炽热体表', type: '火', pp: 3, power: '-', effect: '灼烧体表对近身敌人造成伤害或提升自身属性。' }
            ],
            pvp: [
                    { name: '薪火相传', type: '火', pp: 4, power: '100(魔攻)', effect: '主输出。' },
            { name: '炽热体表', type: '火', pp: 3, power: '-', effect: '反伤或强化。' },
            { name: '火焰吐息', type: '火', pp: 4, power: '70(魔攻)', effect: '稳定伤害。' },
            { name: '火花四溅', type: '火', pp: 4, power: '55(魔攻)', effect: 'AOE或破盾。' }
            ]
          }
        }
      },

    // 空空颅 → 夜宿颅 → 夜枭 (NO.327~329)
    { id:327, name: '空空颅',
      image:'https://patchwiki.biligame.com/images/rocom/4/41/kypxrmm8mobwqs3oseltznss9iqhrh2.png',ename: 'EmptySkull',    attribute: 'ghost',eggGroup: ['magic','monster'], heightMin:0.43,heightMax:0.61,weightMin:5.6,weightMax:8.7, stage: 2, region: '-', trait: '搜刮 — 敌方每使用1次【聚能】技能或更换精灵，自己入场时获得魔攻+20%。', evolvesTo: [328], evolvesFrom: null, desc: '空洞的头骨幽灵。' },
    { id:328, name: '夜宿颅',
      image:'https://patchwiki.biligame.com/images/rocom/4/41/kypxrmm8mobwqs3oseltznss9iqhrh2.png',ename: 'NightStaySkull', attribute: 'ghost',eggGroup: ['monster'], heightMin:0.82,heightMax:1.18,weightMin:27.6,weightMax:34.3, stage: 3, region: '-', trait: '搜刮 — 敌方每使用1次【聚能】技能或更换精灵，自己入场时获得魔攻+20%。', evolvesTo: [329], evolvesFrom: 327, desc: '夜间栖息的头骨幽灵。' },
    { id:329, name: '夜枭',
      image:'https://patchwiki.biligame.com/images/rocom/4/41/kypxrmm8mobwqs3oseltznss9iqhrh2.png',  ename: 'NightOwl',      attribute: 'ghost',eggGroup: ['monster'], heightMin:1.45,heightMax:2.07,weightMin:58.6,weightMax:66.5, stage: 3, region: '-', trait: '搜刮 — 敌方每使用1次【聚能】技能或更换精灵，自己入场时获得魔攻+20%。', evolvesTo: null, evolvesFrom: 328, desc: '夜间的枭雄猫头鹰。' },

    // 粉粉星 (NO.330)
    { id:330, name: '粉粉星',
      image:'https://patchwiki.biligame.com/images/rocom/c/ca/gpnuspztb84l9jwwp1mh4up4ihxw3p2.png',ename: 'PinkPinkStar',  attribute: ['electric','illusion'],eggGroup: ['fairy','soft'], heightMin:0.53,heightMax:0.76,weightMin:2.1,weightMax:3.0, stage: 1, region: '-', trait: '星地善良 — 回合结束时，若场上的己方精灵能量等于0，自己立即替换此精灵。', evolvesTo: null, evolvesFrom: null, desc: '粉色星星的精灵。' },

    // 小皮球 (NO.331)
    { id:331, name: '小皮球',
      image:'https://patchwiki.biligame.com/images/rocom/c/ca/gpnuspztb84l9jwwp1mh4up4ihxw3p2.png',ename: 'LittleBall',     attribute: ['electric','illusion'],eggGroup: ['fairy'], heightMin:0.7,heightMax:1.0,weightMin:6.4,weightMax:8.12, stage: 1, region: '-', trait: '星地善良 — 回合结束时，若场上的己方精灵能量等于0，自己立即替换此精灵。', evolvesTo: null, evolvesFrom: null, desc: '像小皮球一样的精灵。' },

    // 贝瑟系列 (NO.332~334)
    { id:332, name: '贝瑟',
      image:'https://patchwiki.biligame.com/images/rocom/d/d1/7c8xj95wzoxszdwytae10y9cfjdevim.png',  ename: 'Bessel',        attribute: ['machine','fire'],eggGroup: ['mech'], heightMin:0.57,heightMax:0.82,weightMin:24.5,weightMax:34.6, stage: 1, region: '-', trait: '贪心算法 — 1号位技能获得传动1，且使用后使敌方获得6层灼烧。', evolvesTo: [333], evolvesFrom: null, desc: '贝瑟型机械精灵。' },
    { id:333, name: '贝加尔',
      image:'https://patchwiki.biligame.com/images/rocom/d/d1/7c8xj95wzoxszdwytae10y9cfjdevim.png',ename: 'Baikal',        attribute: ['machine','fire'],eggGroup: ['mech'], heightMin:0.9,heightMax:1.2,weightMin:87.6,weightMax:97.5, stage: 2, region: '-', trait: '贪心算法 — 1号位技能获得传动1，且使用后使敌方获得6层灼烧。', evolvesTo: [334], evolvesFrom: 332, desc: '贝瑟进化后的形态。' },
    {id:334, name: '贝古斯',
      image:'https://patchwiki.biligame.com/images/rocom/d/d1/7c8xj95wzoxszdwytae10y9cfjdevim.png',ename: 'Baigus',        attribute: ['machine','fire'],eggGroup: ['mech'], heightMin:1.55,heightMax:1.8,weightMin:248.0,weightMax:286.0, stage: 3, region: '-', trait: '贪心算法 — 1号位技能获得传动1，且使用后使敌方获得6层灼烧。', evolvesTo: null, evolvesFrom: 333, desc: '贝瑟系列的最终形态。',
        battle: {
          trait: '贪心算法:1号位技能获得传动1+灼烧6层',
          tier: 'T1',
          recommend: 'PVP机械火系输出/灼烧流。贪心算法使1号位技能自带传动并挂6层灼烧。配合缇塔向心力或帕帕斯卡翼轴组机械队叠传动。',
          pairing: ["圣剑-X","权杖-V","缇塔","帕帕斯卡"],
          teams: ["机械队","灼烧爆发队"],
          skills: {
            pve: [
                    { name: '超电磁炮', type: '机械', pp: 3, power: '120(物攻)', effect: '超高威力机械物攻必杀！核心输出。' },
                    { name: '烈焰喷射', type: '火', pp: 4, power: '80(魔攻)', effect: '稳定火系魔攻，持续灼烧。' },
            { name: '金属噪音', type: '机械', pp: 4, power: '-', effect: '降低敌方魔攻，削弱法师。' },
                    { name: '过热引擎', type: '火', pp: 3, power: '-', effect: '提升攻击但受到额外伤害。爆发用。' }
            ],
            pvp: [
                    { name: '超电磁炮', type: '机械', pp: 3, power: '120(物攻)', effect: '【1号位】传动1+高伤爆发。' },
                    { name: '烈焰喷射', type: '火', pp: 4, power: '80(魔攻)', effect: '【挂灼烧】稳定输出+持续压血线。' },
                    { name: '金属噪音', type: '机械', pp: 4, power: '-', effect: '降魔攻限制敌方。' },
                    { name: '过热引擎', type: '火', pp: 3, power: '-', effect: '速攻强化。' }
            ]
          }
        }
      },

    // 粉星仔 → 粉耳星兔 → 落陨星兔 (NO.335~337)
    { id:335, name: '粉星仔',
      image:'https://patchwiki.biligame.com/images/rocom/6/68/taalud8zowwtufk65ucpbes8xqsminq.png',ename: 'PinkStarBaby',  attribute: 'illusion',eggGroup: ['flying','fairy'], heightMin:0.39,heightMax:0.5,weightMin:9.8,weightMax:12.8, stage: 1, region: '-', trait: '双向光速 — 在场时，所有回合结束时触发，触发次数+1。', evolvesTo: [336], evolvesFrom: null, desc: '粉色星星的小兔子。',
        battle: {
          "trait": "回合末加速触发",
          "tier": "T2",
          "recommend": "PVE幻系速触。双向光速让回合末效果额外触发一次，叠Buff极快。",
          "pairing": [
          "粉耳星兔",
          "星光狮",
          "迪莫"
          ],
          "teams": [
          "幻系队",
          "速触队"
          ],
          "skills": {
          "pve": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "幻系高威输出触发星陨。"
          },
          {
          "name": "幻影斩",
          "type": "幽灵",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "幽灵系物攻。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "翼系多段伤害。"
          },
          {
          "name": "光之壁",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "特防大幅提升。"
        }
          ],
          "pvp": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "主攻，双向光速双重触发。"
          },
          {
          "name": "幻影斩",
          "type": "幽灵",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "幽灵物攻补盲。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "60(物攻)",
          "effect": "多段物理输出。"
          },
          {
          "name": "光之壁",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "防守强化。"
        }
          ]
        }
        }
    },
    { id:336, name: '粉耳星兔',
      image:'https://patchwiki.biligame.com/images/rocom/6/68/taalud8zowwtufk65ucpbes8xqsminq.png',ename: 'PinkEarStarRabbit',attribute:'illusion',eggGroup:['flying'],heightMin:0.55,heightMax:0.75,weightMin:16.82,weightMax:23.81,stage:2,region:'-',trait: '双向光速 — 在场时，所有回合结束时触发，触发次数+1。',evolvesTo:[337],evolvesFrom:335,desc: '粉色耳朵的星兔。',
        battle: {
          "trait": "双向光速进阶",
          "tier": "T2",
          "recommend": "PVP幻系速触中转。进化后属性更高，触发效率更强。",
          "pairing": [
          "粉星仔",
          "落陨星兔",
          "星光狮"
          ],
          "teams": [
          "幻系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "幻系高威输出提升。"
          },
          {
          "name": "幻影斩",
          "type": "幽灵",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "幽灵物攻增强。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "65(物攻)",
          "effect": "翼系多段伤害。"
          },
          {
          "name": "祈愿",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "回复生命值。"
        }
          ],
          "pvp": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "高威主攻双重触发。"
          },
          {
          "name": "幻影斩",
          "type": "幽灵",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "物攻爆发。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "65(物攻)",
          "effect": "多段物理。"
          },
          {
          "name": "祈愿",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "续航恢复。"
        }
          ]
        }
        }
    },
    { id:337, name: '落陨星兔',
      image:'https://patchwiki.biligame.com/images/rocom/6/68/taalud8zowwtufk65ucpbes8xqsminq.png',ename: 'FallenMeteorStarRabbit',attribute:['illusion','ghost'],eggGroup:['flying'],heightMin:0.55,heightMax:0.75,weightMin:16.82,weightMax:23.81,stage:3,region:'-',trait: '陨落 — 在场时，双方回合结束时触发的效果，触发次数-1。',evolvesTo:null,evolvesFrom:336,desc: '如流星般坠落的星兔。',
        battle: {
          "trait": "陨落抑制触发(版本热门)",
          "tier": "T1",
          "recommend": "PVP幻灵终极抑制。陨落特性减少双方回合末触发次数，克制各类触发流！与双向光速完全相反的策略定位——专杀触发流。",
          "pairing": [
          "粉耳星兔",
          "星光狮",
          "魄月狼王"
          ],
          "teams": [
          "触发流克星队",
          "幻灵混合队"
          ],
          "skills": {
          "pve": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "幻系超高威必杀。"
          },
          {
          "name": "幻影裂空",
          "type": "幽灵",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "幽灵系强力物攻。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "翼系多段高威输出。"
          },
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系魔攻补盲。"
        }
          ],
          "pvp": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "幻系爆发必杀。"
          },
          {
          "name": "幻影裂空",
          "type": "幽灵",
          "pp": 3,
          "power": "85(物攻)",
          "effect": "幽灵物攻主力。"
          },
          {
          "name": "陨落力场",
          "type": "幽灵",
          "pp": 3,
          "power": "-",
          "effect": "展开力场抑制双方回合末触发（核心策略技）。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "物理多段追击。"
        }
          ]
        }
        }
    },

    // 布瓜蝌 → 上岸蛙 (NO.338~339)
    { id:338, name: '布瓜蝌',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/cf0waszkpt8lgc5625l1bv71wgbxlrm.png',ename: 'BuaGuafrog',   attribute: 'illusion',eggGroup: ['amphibian'], heightMin:0.32,heightMax:0.51,weightMin:0.45,weightMax:1.65, stage: 1, region: '-', trait: '张弛有度 — 周末时自己获得双攻+40%，其他时间获得双防+40%。', evolvesTo: [339], evolvesFrom: null, desc: '布瓜布瓜叫的小蝌蚪。' },
    { id:339, name: '上岸蛙',
      image:'https://patchwiki.biligame.com/images/rocom/1/1f/cf0waszkpt8lgc5625l1bv71wgbxlrm.png',ename: 'LandFrog',      attribute: 'illusion',eggGroup: ['amphibian'], heightMin:0.65,heightMax:0.87,weightMin:5.8,weightMax:8.1, stage: 2, region: '-', trait: '张弛有度 — 周末时自己获得双攻+40%，其他时间获得双防+40%。', evolvesTo: null, evolvesFrom: 338, desc: '上岸生活的青蛙。' },

    { id:340, name: '火红尾',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/gknyb1qbbno2vnvcvyb4p9a0o9y1owp.png',ename: 'FireRedTail',   attribute: 'fire',eggGroup: ['animal'], heightMin:0.72,heightMax:0.98,weightMin:17.5,weightMax:30.5, stage: 2, region: '-', trait: '天通地明 — 攻击时，若敌方血脉是污染血脉，技能威力+100%。', evolvesTo: null, evolvesFrom: null, desc: '红色尾巴的火焰精灵。',
        battle: {
          "trait": "天通地明污染克星",
          "tier": "T2",
          "recommend": "PVE火系污染克制手。对污染血脉敌人威力翻倍。",
          "pairing": [
          "火焰猿",
          "烈焰诺诺",
          "豪炎战神"
          ],
          "teams": [
          "污染克制队",
          "火系队"
          ],
          "skills": {
          "pve": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "对污染血脉160%威力！"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "火系物攻爆发。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "低能耗火系输出。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "降低敌方命中率。"
        }
          ],
          "pvp": [
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "80(魔攻)",
          "effect": "打污染怪160%威力，常规也强。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "物攻选择。"
          },
          {
          "name": "火花喷射",
          "type": "火",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "低能耗铺垫。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "干扰保命。"
        }
          ]
        }
        }
    },
    { id:341, name: '雅丹鬃',
      image:'https://patchwiki.biligame.com/images/rocom/0/00/gknyb1qbbno2vnvcvyb4p9a0o9y1owp.png',ename: 'YardangMane',  attribute: 'fire',eggGroup: ['animal'], heightMin:1.7,heightMax:2.06,weightMin:49.5,weightMax:71.2, stage: 3, region: '-', trait: '天通地明 — 攻击时，若敌方血脉是污染血脉，技能威力+100%。', evolvesTo: null, evolvesFrom: null, desc: '雅丹地貌般的鬃毛精灵。',
        battle: {
          "trait": "天通地明污染克星",
          "tier": "T1",
          "recommend": "PVP火系污染血脉克制王牌。最终形态+对污染怪翻倍=毁灭性输出。",
          "pairing": [
          "火红尾",
          "豪炎战神",
          "火焰猿"
          ],
          "teams": [
          "污染克制王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "对污染血脉220%威力火系核弹！"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "180%威力稳定输出。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "150%威力物攻。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避保命。"
        }
          ],
          "pvp": [
          {
          "name": "烈焰地狱",
          "type": "火",
          "pp": 3,
          "power": "110(魔攻)",
          "effect": "打污染怪220%威力——一击必杀级别。"
          },
          {
          "name": "火焰放射",
          "type": "火",
          "pp": 3,
          "power": "90(魔攻)",
          "effect": "180%威力稳定爆发。"
          },
          {
          "name": "烟幕",
          "type": "火",
          "pp": 3,
          "power": "-",
          "effect": "闪避等污染怪出现。"
          },
          {
          "name": "烈焰冲撞",
          "type": "火",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "150%威力物攻选择。"
        }
          ]
        }
        }
    },

    // 春团 → 春兔 → 春花兔 (NO.342~344)
    { id:342, name: '春团',
      image:'https://patchwiki.biligame.com/images/rocom/4/4e/geoo47p9iq6pyh1xko113u2z8bqcz09.png',  ename: 'SpringBall',    attribute: 'grass',eggGroup: ['animal','fairy'], heightMin:0.35,heightMax:0.51,weightMin:2.1,weightMax:3.6, stage: 1, region: '-', trait: '系统发育 — 获得能量或生命时，会将等量的能量或生命随机分配给场下的精灵。', evolvesTo: [343], evolvesFrom: null, desc: '春天团子般的精灵。',
        battle: {
          "trait": "系统发育分享型",
          "tier": "T2",
          "recommend": "PVP草系团队辅助。自己获得的收益自动分享给场下队友——团队增益器。",
          "pairing": [
          "春兔",
          "春花兔",
          "白发路路"
          ],
          "teams": [
          "草系辅助队"
          ],
          "skills": {
          "pve": [
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "草系基础攻击。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸血——吸到的血也分给队友！"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化——强化效果也分享场下。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防御提升。"
        }
          ],
          "pvp": [
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "吸血续航同时喂养场下队友。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化自己=间接强化全队。"
          },
          {
          "name": "飞叶快刀",
          "type": "草",
          "pp": 4,
          "power": "45(物攻)",
          "effect": "输出触发系统发育。"
          },
          {
          "name": "硬化",
          "type": "岩",
          "pp": 3,
          "power": "-",
          "effect": "防守站场持续分享。"
        }
          ]
        }
        }
    },
    { id:343, name: '春兔',
      image:'https://patchwiki.biligame.com/images/rocom/4/4e/geoo47p9iq6pyh1xko113u2z8bqcz09.png',  ename: 'SpringRabbit',  attribute: 'grass',eggGroup: ['animal','fairy'], heightMin:0.61,heightMax:0.87,weightMin:6.8,weightMax:8.5, stage: 2, region: '-', trait: '系统发育 — 获得能量或生命时，会将等量的能量或生命随机分配给场下的精灵。', evolvesTo: [344], evolvesFrom: 342, desc: '春天的小兔子。',
        battle: {
          "trait": "春兔进阶",
          "tier": "T2",
          "recommend": "PVP系统发育中转。进化后分享效率更高，团队收益更大。",
          "pairing": [
          "春团",
          "春花兔",
          "针叶巡林"
          ],
          "teams": [
          "草系辅助队"
          ],
          "skills": {
          "pve": [
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "55(物攻)",
          "effect": "草系物攻增强。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "AOE输出。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "大量吸血分享队友。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化分享全队。"
        }
          ],
          "pvp": [
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "高效吸血+系统发育分享。"
          },
          {
          "name": "藤鞭抽击",
          "type": "草",
          "pp": 3,
          "power": "55(物攻)",
          "effect": "稳定主攻。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化全队共享。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "55(魔攻)",
          "effect": "AOE清场。"
        }
          ]
        }
        }
    },
    { id:344, name: '春花兔',
      image:'https://patchwiki.biligame.com/images/rocom/4/4e/geoo47p9iq6pyh1xko113u2z8bqcz09.png',ename: 'SpringFlowerRabbit',attribute:'grass',eggGroup:['animal','fairy'],heightMin:0.85,heightMax:1.15,weightMin:18.5,weightMax:33.5,stage:3,region:'-',trait: '系统发育 — 获得能量或生命时，会将等量的能量或生命随机分配给场下的精灵。',evolvesTo:null,evolvesFrom:343,desc: '春花烂漫时节的兔子。',
        battle: {
          "trait": "春花兔终极辅助",
          "tier": "T1",
          "recommend": "PVP草系团队辅助王牌。最终形态+系统发育=每次强化/回血都是全队收益！",
          "pairing": [
          "春兔",
          "春团",
          "白发路路"
          ],
          "teams": [
          "草系辅助王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "木叶旋风",
          "type": "草",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "草系高威物攻必杀。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "大范围AOE。"
          },
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "巨量吸血分享全队。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "强化效果全队共享！"
        }
          ],
          "pvp": [
          {
          "name": "寄生种子",
          "type": "草",
          "pp": 3,
          "power": "-",
          "effect": "恐怖吸血+系统发育=全队回血引擎。"
          },
          {
          "name": "木叶旋风",
          "type": "草",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "高威输出。"
          },
          {
          "name": "愿力强化",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "一次强化=全队受益。"
          },
          {
          "name": "飞叶风暴",
          "type": "草",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "AOE清场。"
        }
          ]
        }
        }
    },

    // 幽星光 → 曜星光 → 暮星辰 (NO.345~347)
    { id:345, name: '幽星光',
      image:'https://patchwiki.biligame.com/images/rocom/8/88/f8eryhmo33y1cnnw7vl63hn3khncqhe.png',ename: 'GhostStarlight', attribute: 'illusion',eggGroup: ['fairy'], heightMin:0.4,heightMax:0.55,weightMin:0.6,weightMax:1.65, stage: 2, region: '-', trait: '守望星 — 触发星陨时消耗一半层数，仍造成满层伤害。', evolvesTo: [346], evolvesFrom: null, desc: '幽暗中的星光。',
        battle: {
          "trait": "守望星半价满伤",
          "tier": "T1",
          "recommend": "PVP幻系星陨效率型。触发星陨只消耗一半层数却造成满层伤害——性价比爆表。",
          "pairing": [
          "曜星光",
          "暮星辰",
          "粉耳星兔"
          ],
          "teams": [
          "幻系星陨队"
          ],
          "skills": {
          "pve": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "幻系输出——守望星让层数消耗减半！"
          },
          {
          "name": "幻影斩",
          "type": "幽灵",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "幽灵物攻。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "多段物攻。"
          },
          {
          "name": "光之壁",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "特防提升。"
        }
          ],
          "pvp": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "75(魔攻)",
          "effect": "守望星核心——半层消耗=双倍使用次数！"
          },
          {
          "name": "幻影斩",
          "type": "幽灵",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "幽灵物攻补盲。"
          },
          {
          "name": "翼刃风暴",
          "type": "翼",
          "pp": 4,
          "power": "55(物攻)",
          "effect": "物理多段输出。"
          },
          {
          "name": "光之壁",
          "type": "光",
          "pp": 3,
          "power": "-",
          "effect": "防守保星陨层数。"
        }
          ]
        }
        }
    },
    { id:346, name: '曜星光',
      image:'https://patchwiki.biligame.com/images/rocom/8/88/f8eryhmo33y1cnnw7vl63hn3khncqhe.png',ename: 'ShiningStarlight',attribute: ['illusion','flying'],eggGroup: ['fairy'], heightMin:0.88,heightMax:1.05,weightMin:3.0,weightMax:4.5, stage: 3, region: '-', trait: '守望星 — 触发星陨时消耗一半层数，仍造成满层伤害。', evolvesTo: [347], evolvesFrom: 345, desc: '耀眼光芒的星辰。',
        battle: {
          "trait": "曜星光进阶",
          "tier": "T1",
          "recommend": "PVP幻系星陨王牌。进化后守望星效率更高，星陨层数用不完。",
          "pairing": [
          "幽光大",
          "暮星辰",
          "粉星仔"
          ],
          "teams": [
          "幻系星陨王牌队"
          ],
          "skills": {
          "pve": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "高威幻系——半消耗满伤害。"
          },
          {
          "name": "幻影裂空",
          "type": "幽灵",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "幽灵强力物攻。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "翼系多段高威。"
          },
          {
          "name": "祈愿",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "回复生命。"
        }
          ],
          "pvp": [
          {
          "name": "星陨冲击",
          "type": "幻",
          "pp": 3,
          "power": "85(魔攻)",
          "effect": "守望星+高威=半消耗造成85威满伤害！"
          },
          {
          "name": "幻影裂空",
          "type": "幽灵",
          "pp": 3,
          "power": "75(物攻)",
          "effect": "物攻主力。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "65(物攻)",
          "effect": "物理多段追击。"
          },
          {
          "name": "祈愿",
          "type": "萌",
          "pp": 3,
          "power": "-",
          "effect": "续航恢复。"
        }
          ]
        }
        }
    },
    { id:347, name: '暮星辰',
      image:'https://patchwiki.biligame.com/images/rocom/8/88/f8eryhmo33y1cnnw7vl63hn3khncqhe.png',ename: 'DuskStar',     attribute: ['illusion','flying'],eggGroup: ['fairy'], heightMin:1.85,heightMax:2.05,weightMin:7.5,weightMax:10.5, stage: 3, region: '-', trait: '守望星 — 触发星陨时消耗一半层数，仍造成满层伤害。', evolvesTo: null, evolvesFrom: 346,       desc: '暮色中最亮的星辰。',
        battle: {
          "trait": "暮星辰终极形态",
          "tier": "T0",
          "recommend": "PVP幻系版本答案。守望星+最终形态=无限星陨循环，每次只花半层数。与粉星仔/落陨星兔形成完整体系。",
          "pairing": [
          "曜星光",
          "幽光大",
          "星光狮"
          ],
          "teams": [
          "幻系版本答案队"
          ],
          "skills": {
          "pve": [
          {
          "name": "星陨裁决",
          "type": "幻",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "幻系究极必杀——守望星半层消耗满伤害！"
          },
          {
          "name": "幻影裂空",
          "type": "幽灵",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "幽灵究极物攻。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "翼系高威多段。"
          },
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系魔攻补盲。"
        }
          ],
          "pvp": [
          {
          "name": "星陨裁决",
          "type": "幻",
          "pp": 3,
          "power": "95(魔攻)",
          "effect": "暮星辰招牌——半消耗95威满伤害循环。"
          },
          {
          "name": "幻影裂空",
          "type": "幽灵",
          "pp": 3,
          "power": "80(物攻)",
          "effect": "幽灵究极物攻。"
          },
          {
          "name": "翼刃飓风",
          "type": "翼",
          "pp": 3,
          "power": "70(物攻)",
          "effect": "物理多段收割。"
          },
          {
          "name": "暗影球",
          "type": "暗",
          "pp": 3,
          "power": "70(魔攻)",
          "effect": "暗系补盲。"
        }
          ]
        }
        }
    },
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
