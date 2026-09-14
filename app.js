(function () {
  'use strict';

  // ============ 颜色映射 ============
  var colorMap = {
    '白色': '#ffffff', '银色': '#c0c0c0', '浅灰色': '#d3d3d3', '灰色': '#808080',
    '红色': '#e60012', '深紫色': '#4b0082', '紫色': '#800080', '黑色': '#000000',
    '蓝色': '#1e90ff', '深蓝色': '#000080', '绿色': '#2e8b57', '黄色': '#ffd700',
    '金色': '#d4af37', '粉色': '#ffb6c1', '橙色': '#ff8c00', '棕色': '#8b4513',
    '米色': '#f5f5dc', '藏青色': '#191970', '酒红色': '#722f37'
  };

  // ============ 求签数据 ============
  var qianData = [
    { name: '上上签', level: '大吉', poem: '云开月出正分明，不须进退问前程。\n婚姻皆由天注定，和合万事总安平。', tip: '万事顺遂，心想事成。' },
    { name: '上上签', level: '大吉', poem: '万里晴空无片云，皓月皎洁照乾坤。\n内外一片光明象，作事求谋皆遂心。', tip: '光明坦途，所求皆成。' },
    { name: '上上签', level: '大吉', poem: '宝镜团圆似月明，琴瑟和鸣畅心情。\n婚姻总是前生定，从今富贵福禄增。', tip: '感情顺遂，事业有成。' },
    { name: '上上签', level: '大吉', poem: '鲤鱼化龙入九霄，风云际会正当时。\n功名富贵从天降，一举成名天下知。', tip: '事业大吉，升职加薪。' },
    { name: '上上签', level: '大吉', poem: '枯木逢春再发枝，花开结子正当时。\n凡事从心皆遂意，贵人相助百事吉。', tip: '否极泰来，贵人相助。' },
    { name: '上签', level: '吉', poem: '灵芝生在大石边，异草奇花满地鲜。\n不但人见心欢喜，就是雀鸟也来朝。', tip: '贵人相助，好运将至。' },
    { name: '上签', level: '吉', poem: '春来花发满园香，蝶舞蜂忙喜气扬。\n凡事从心皆遂意，何须苦苦问穹苍。', tip: '顺其自然，好运自来。' },
    { name: '上签', level: '吉', poem: '顺水行舟一帆风，千里江陵一日通。\n此时若有贵人助，何愁前路不亨通。', tip: '顺势而为，事半功倍。' },
    { name: '上签', level: '吉', poem: '月到中秋分外明，人逢喜事精神爽。\n若问前程何处是，青云直上九霄长。', tip: '喜事临门，前程似锦。' },
    { name: '上签', level: '吉', poem: '梅花香自苦寒来，宝剑锋从磨砺出。\n若问功名何处有，十年寒窗一朝开。', tip: '苦尽甘来，学业有成。' },
    { name: '中签', level: '平', poem: '劝君切莫向他求，似鹤飞来暗箭投。\n若得明师相指点，前途自有一番新。', tip: '宜守旧待时，不可妄动。' },
    { name: '中签', level: '平', poem: '命中正逢罗孛关，用尽心机总未安。\n作福问神难得过，恰是行舟上高滩。', tip: '谨慎行事，以稳为先。' },
    { name: '中签', level: '平', poem: '孤舟浪里过沙滩，起落浮沉总不安。\n若得顺风相送力，一时便有贵人看。', tip: '静待时机，终有转机。' },
    { name: '中签', level: '平', poem: '风起云涌浪头高，一时进退两难逃。\n若得明灯相照路，不愁前路有波涛。', tip: '遇难莫慌，自有明路。' },
    { name: '中签', level: '平', poem: '半晴半雨半阴天，花开花落自年年。\n若问前程何处是，随缘随分莫争先。', tip: '随遇而安，不必强求。' },
    { name: '中签', level: '平', poem: '山重水复疑无路，柳暗花明又一村。\n若得此签须忍耐，时来运转自通亨。', tip: '忍耐待时，柳暗花明。' },
    { name: '中签', level: '平', poem: '云遮明月未分明，暗里寻踪未见形。\n若待清风来扫尽，自然光彩照乾坤。', tip: '时机未到，耐心等待。' },
    { name: '中签', level: '平', poem: '欲渡黄河冰塞川，将登太行雪满山。\n若问此身何处去，且将心事付流年。', tip: '前路有阻，暂缓行动。' },
    { name: '下签', level: '小凶', poem: '一朝无事忽遭官，也是门衰坟未安。\n改过从新方得吉，莫将旧事反成冤。', tip: '遇事忍耐，不可强求。' },
    { name: '下签', level: '小凶', poem: '病龙困在浅水滩，百般求脱总艰难。\n劝君莫作等闲看，早向神前把愿还。', tip: '宜多行善事，以求化解。' },
    { name: '下签', level: '小凶', poem: '屋漏偏逢连夜雨，船迟又遇打头风。\n若问此身何处去，且将心事付东风。', tip: '诸事不顺，宜静不宜动。' },
    { name: '下签', level: '小凶', poem: '雾里看花花不真，水中捞月月难寻。\n若问前程何处是，不如归去守初心。', tip: '虚虚实实，谨防受骗。' },
    { name: '下签', level: '小凶', poem: '画虎画皮难画骨，知人知面不知心。\n若问此身何处去，且将心事付瑶琴。', tip: '防人之心不可无。' },
    { name: '下签', level: '小凶', poem: '风萧萧兮易水寒，壮士一去不复还。\n若问此身何处去，且将心事付青山。', tip: '风险较大，谨慎决策。' },
    { name: '中签', level: '平', poem: '春有百花秋有月，夏有凉风冬有雪。\n若无闲事挂心头，便是人间好时节。', tip: '心态平和，万事皆安。' },
    { name: '上签', level: '吉', poem: '千里之行始足下，合抱之木生毫末。\n九层之台起累土，万里之船始一舵。', tip: '脚踏实地，终有所成。' },
    { name: '上签', level: '吉', poem: '海内存知己，天涯若比邻。\n无为在歧路，儿女共沾巾。', tip: '友情可贵，贵人相伴。' },
    { name: '中签', level: '平', poem: '沉舟侧畔千帆过，病树前头万木春。\n今日听君歌一曲，暂凭杯酒长精神。', tip: '否极泰来，转机将至。' },
    { name: '上上签', level: '大吉', poem: '金鳞岂是池中物，一遇风云便化龙。\n九霄龙吟惊天变，风云际会浅水游。', tip: '一飞冲天，大展宏图。' },
    { name: '上签', level: '吉', poem: '春风得意马蹄疾，一日看尽长安花。\n若问功名何处有，十年寒窗一朝发。', tip: '春风得意，好事连连。' }
  ];

  // ============ 宜词条 ============
  var termDict = {
    '开市': { cat: '宜', meaning: '开业、开张、公司工厂开工', usage: '适合举办开业典礼、正式营业、项目启动等。' },
    '出行': { cat: '宜', meaning: '外出远行、旅游、出差', usage: '适合安排旅行、出差、搬迁出行等。' },
    '纳财': { cat: '宜', meaning: '进财、收账、讨债、置产', usage: '适合收账、签订合同、买入资产。' },
    '打扫': { cat: '宜', meaning: '清扫、整理、除旧布新', usage: '适合大扫除、整理房间、清理杂物。' },
    '会友': { cat: '宜', meaning: '拜访亲友、聚会交流', usage: '适合走亲访友、参加聚会、商务会面。' },
    '祭祀': { cat: '宜', meaning: '祭拜祖先、神明', usage: '适合扫墓、上香、供奉等仪式。' },
    '祈福': { cat: '宜', meaning: '祈求福气、许愿', usage: '适合到寺庙祈福、许愿还愿。' },
    '嫁娶': { cat: '宜', meaning: '结婚、举办婚礼', usage: '适合登记结婚、举办婚宴。' },
    '入宅': { cat: '宜', meaning: '搬入新居', usage: '适合乔迁新居、正式入住。' },
    '移徙': { cat: '宜', meaning: '搬家、迁移', usage: '适合搬家、调整住所。' },
    '安床': { cat: '宜', meaning: '安置床铺', usage: '适合新床安置、调整床位方向。' },
    '动土': { cat: '宜', meaning: '开始建筑、挖土', usage: '适合工程开工、破土动工。' },
    '修造': { cat: '宜', meaning: '装修、修缮', usage: '适合房屋装修、维修改造。' },
    '栽种': { cat: '宜', meaning: '种植、播种', usage: '适合种植花草树木、农作物。' },
    '作灶': { cat: '宜', meaning: '修造炉灶', usage: '适合厨房改造、炉灶安装。' },
    '解除': { cat: '宜', meaning: '冲洗清扫宅舍、解除灾厄', usage: '适合大扫除、整理房间、清理杂物。' },
    '坏垣': { cat: '宜', meaning: '拆除围墙、拆房扒墙', usage: '适合拆除围墙、破旧房屋、清理场地。' },
    '馀事勿取': { cat: '宜', meaning: '除此之外，其余事情不宜做', usage: '除了当日“宜”栏中列明的事项，其余重要事情都不适合做。' },
    '诸事不宜': { cat: '宜', meaning: '本日没有特别适宜做的事', usage: '不宜办结婚、开业、搬家等大事，适合处理日常琐事。' },
    '签约': { cat: '宜', meaning: '签订合同、协议、合作', usage: '适合签署重要合同、合作协议、劳动合同等。' },
    '面试': { cat: '宜', meaning: '求职面试、入职面谈', usage: '适合参加面试、入职沟通、薪资谈判。' },
    '表白': { cat: '宜', meaning: '向心仪的人表达爱意', usage: '适合表白、告白、确认关系。' },
    '约会': { cat: '宜', meaning: '与喜欢的人或朋友约会', usage: '适合安排约会、见面、共进晚餐。' },
    '健身': { cat: '宜', meaning: '锻炼身体、运动健身', usage: '适合开始健身计划、跑步、瑜伽、游泳等。' },
    '复盘': { cat: '宜', meaning: '总结过去、反思复盘', usage: '适合做工作总结、项目复盘、个人反思。' },
    '学习': { cat: '宜', meaning: '读书、学习、进修', usage: '适合开始新课程、备考、阅读专业书籍。' },
    '考试': { cat: '宜', meaning: '参加考试、测验', usage: '适合参加各类考试、资格认证、升学考试。' },
    '谈判': { cat: '宜', meaning: '商务谈判、价格协商', usage: '适合进行商务谈判、价格协商、合作沟通。' },
    '投资': { cat: '宜', meaning: '理财、投资、买入资产', usage: '适合进行理财规划、基金定投、买入资产。' },
    '储蓄': { cat: '宜', meaning: '存钱、储蓄、规划财务', usage: '适合制定储蓄计划、开设储蓄账户。' },
    '体检': { cat: '宜', meaning: '身体检查、健康体检', usage: '适合安排体检、复查、健康咨询。' },
    '就医': { cat: '宜', meaning: '看病、就医、治疗', usage: '适合挂号就诊、复查、接受治疗。' },
    '旅行': { cat: '宜', meaning: '旅游、度假、放松', usage: '适合安排旅行、度假、短途出游。' },
    '搬家': { cat: '宜', meaning: '搬家、迁居', usage: '适合搬家、调整住所、整理新家。' },
    '装修': { cat: '宜', meaning: '房屋装修、改造', usage: '适合开始装修、改造、软装布置。' },
    '买车': { cat: '宜', meaning: '购买汽车、代步工具', usage: '适合看车、试驾、购车、提车。' },
    '购物': { cat: '宜', meaning: '购买大件商品、置办物品', usage: '适合购买家电、家具、数码产品等。' },
    '剪发': { cat: '宜', meaning: '理发、美发、造型', usage: '适合剪发、染发、烫发、做造型。' },
    '拍照': { cat: '宜', meaning: '拍照、摄影、记录', usage: '适合拍写真、婚纱照、证件照、记录生活。' },
    '写作': { cat: '宜', meaning: '写作、创作、输出', usage: '适合写文章、写书、写方案、做内容创作。' },
    '演讲': { cat: '宜', meaning: '演讲、汇报、展示', usage: '适合做演讲、汇报、路演、公开分享。' },
    '社交': { cat: '宜', meaning: '社交、拓展人脉', usage: '适合参加社交活动、行业聚会、拓展人脉。' },
    '断舍离': { cat: '宜', meaning: '清理物品、简化生活', usage: '适合清理旧物、整理衣柜、简化生活。' },
    '冥想': { cat: '宜', meaning: '冥想、静心、放松', usage: '适合冥想、打坐、深呼吸、放松身心。' },
    '早睡': { cat: '宜', meaning: '早睡、规律作息', usage: '适合早睡早起、调整作息、养成好习惯。' },
    '存钱': { cat: '宜', meaning: '存钱、攒钱、理财', usage: '适合制定存钱计划、控制消费、开始理财。' },
    '和解': { cat: '宜', meaning: '和解、道歉、修复关系', usage: '适合主动和解、道歉、修复人际关系。' },
    '求助': { cat: '宜', meaning: '寻求帮助、请教他人', usage: '适合向他人求助、请教、寻求支持。' },
    '放空': { cat: '宜', meaning: '放空自己、休息放松', usage: '适合什么都不做、放空、给自己充电。' }
  };

  // ============ 忌词条 ============
  var termDictJi = {
    '嫁娶': { cat: '忌', meaning: '结婚、举办婚礼', usage: '传统上认为此日不宜办婚事，可另择吉日。' },
    '动土': { cat: '忌', meaning: '建筑挖土、开工', usage: '此日不宜破土动工，可延后。' },
    '安葬': { cat: '忌', meaning: '下葬', usage: '此日不宜举行安葬仪式。' },
    '开市': { cat: '忌', meaning: '开业、开张', usage: '此日不宜开业，可另择吉日。' },
    '入宅': { cat: '忌', meaning: '搬入新居', usage: '此日不宜乔迁。' },
    '移徙': { cat: '忌', meaning: '搬家', usage: '此日不宜搬家。' },
    '出行': { cat: '忌', meaning: '外出远行', usage: '此日不宜远行，短途无妨。' },
    '祭祀': { cat: '忌', meaning: '祭拜', usage: '此日不宜举行祭祀。' },
    '祈福': { cat: '忌', meaning: '祈福许愿', usage: '此日不宜祈福。' },
    '修造': { cat: '忌', meaning: '装修修缮', usage: '此日不宜装修动工。' },
    '栽种': { cat: '忌', meaning: '种植', usage: '此日不宜播种栽种。' },
    '作灶': { cat: '忌', meaning: '修造炉灶', usage: '此日不宜改造厨房炉灶。' },
    '解除': { cat: '忌', meaning: '冲洗清扫、解除灾厄', usage: '此日不宜做大扫除。' },
    '坏垣': { cat: '忌', meaning: '拆除围墙、拆房扒墙', usage: '此日不宜拆墙、拆房。' },
    '馀事勿取': { cat: '忌', meaning: '除此之外，其余事情不宜做', usage: '此日不宜做“宜”栏以外的其他事情。' },
    '诸事不宜': { cat: '忌', meaning: '本日不宜办大事', usage: '此日不宜办结婚、开业、搬家等大事，宜静不宜动。' },
    '熬夜': { cat: '忌', meaning: '熬夜、通宵、作息混乱', usage: '此日不宜熬夜，容易影响健康和第二天状态。' },
    '冲动消费': { cat: '忌', meaning: '冲动购物、非理性消费', usage: '此日不宜大额消费，容易后悔，建议冷静24小时再决定。' },
    '酒局': { cat: '忌', meaning: '饮酒、应酬、酒局', usage: '此日不宜大量饮酒，容易失言或伤身。' },
    '冷战': { cat: '忌', meaning: '冷战、冷暴力、不沟通', usage: '此日不宜与伴侣或朋友冷战，建议主动沟通。' },
    '吵架': { cat: '忌', meaning: '争吵、冲突、口角', usage: '此日容易情绪激动，建议少说多听，避免冲突。' },
    '辞职': { cat: '忌', meaning: '辞职、裸辞、冲动离职', usage: '此日不宜冲动辞职，建议先找好下家再行动。' },
    '跳槽': { cat: '忌', meaning: '跳槽、换工作', usage: '此日不宜贸然跳槽，建议多观察、多比较。' },
    '投资': { cat: '忌', meaning: '大额投资、高风险理财', usage: '此日不宜做高风险投资，容易判断失误。' },
    '借钱': { cat: '忌', meaning: '借钱、借出大额资金', usage: '此日不宜借钱或借出大额资金，容易有去无回。' },
    '签约': { cat: '忌', meaning: '签订重要合同', usage: '此日不宜签署重要合同，建议仔细审阅条款。' },
    '表白': { cat: '忌', meaning: '表白、告白', usage: '此日不宜表白，容易时机不对，建议再等等。' },
    '分手': { cat: '忌', meaning: '分手、提分手', usage: '此日不宜冲动提分手，建议冷静后再决定。' },
    '复合': { cat: '忌', meaning: '复合、挽回', usage: '此日不宜急于复合，建议先想清楚问题所在。' },
    '手术': { cat: '忌', meaning: '非紧急手术', usage: '此日不宜做非紧急手术，建议择期进行。' },
    '远行': { cat: '忌', meaning: '长途旅行、出差', usage: '此日不宜长途远行，容易遇到延误或意外。' },
    '搬家': { cat: '忌', meaning: '搬家、迁居', usage: '此日不宜搬家，建议另择吉日。' },
    '装修': { cat: '忌', meaning: '装修、动工', usage: '此日不宜开始装修，建议延后。' },
    '买车': { cat: '忌', meaning: '购车、提车', usage: '此日不宜购车，建议多比较、多试驾。' },
    '买房': { cat: '忌', meaning: '购房、签购房合同', usage: '此日不宜签购房合同，建议仔细审阅条款。' },
    '剪发': { cat: '忌', meaning: '理发、剪发', usage: '此日不宜剪发，容易剪坏或后悔。' },
    '染发': { cat: '忌', meaning: '染发、烫发', usage: '此日不宜染烫，容易效果不理想。' },
    '拍照': { cat: '忌', meaning: '拍重要照片', usage: '此日不宜拍证件照、婚纱照等重要照片。' },
    '演讲': { cat: '忌', meaning: '重要演讲、汇报', usage: '此日不宜做重要演讲，容易紧张或发挥失常。' },
    '谈判': { cat: '忌', meaning: '重要谈判、协商', usage: '此日不宜做重要谈判，容易谈崩或吃亏。' },
    '考试': { cat: '忌', meaning: '重要考试', usage: '此日不宜参加重要考试，建议调整心态、充分准备。' },
    '面试': { cat: '忌', meaning: '重要面试', usage: '此日不宜参加重要面试，建议改期或充分准备。' },
    '社交': { cat: '忌', meaning: '大型社交、应酬', usage: '此日不宜参加大型社交活动，容易疲惫或失言。' },
    '网购': { cat: '忌', meaning: '大额网购、囤货', usage: '此日不宜大额网购，容易买错或后悔。' },
    '借贷': { cat: '忌', meaning: '贷款、借贷', usage: '此日不宜办理贷款，建议多比较利率和条款。' },
    '担保': { cat: '忌', meaning: '为人担保、背书', usage: '此日不宜为人担保，容易承担不必要的风险。' },
    '合伙': { cat: '忌', meaning: '合伙、共同投资', usage: '此日不宜开始合伙，建议先明确权责和退出机制。' },
    '创业': { cat: '忌', meaning: '创业、开公司', usage: '此日不宜贸然创业，建议先做市场调研和资金规划。' },
    '诉诸法律': { cat: '忌', meaning: '打官司、诉讼', usage: '此日不宜启动诉讼，建议先协商或调解。' },
    '情绪决策': { cat: '忌', meaning: '情绪化决策', usage: '此日容易情绪化，建议重要决定缓一缓。' },
    '轻信他人': { cat: '忌', meaning: '轻信他人、盲目跟风', usage: '此日不宜轻信他人，建议多方求证。' },
    '透支': { cat: '忌', meaning: '透支信用卡、超前消费', usage: '此日不宜透支消费，建议量入为出。' },
    '拖延': { cat: '忌', meaning: '拖延、逃避', usage: '此日不宜拖延，建议先做最重要的一件事。' },
    '内耗': { cat: '忌', meaning: '内耗、自我怀疑', usage: '此日不宜过度内耗，建议多行动、少纠结。' },
    '熬夜刷手机': { cat: '忌', meaning: '熬夜刷手机、沉迷短视频', usage: '此日不宜熬夜刷手机，容易影响睡眠和第二天的状态。' },
    '暴饮暴食': { cat: '忌', meaning: '暴饮暴食、吃太多', usage: '此日不宜暴饮暴食，容易肠胃不适。' },
    '久坐': { cat: '忌', meaning: '久坐不动', usage: '此日不宜久坐，建议每小时起来活动一下。' },
    '发脾气': { cat: '忌', meaning: '乱发脾气、迁怒他人', usage: '此日容易情绪失控，建议深呼吸、冷静处理。' }
  };

  // ============ 状态 ============
  var MAX_DRAW = 3;
  var drawCount = 0;
  var currentQian = null;
  var historyQian = [];

  // ============ 工具函数 ============
  function getTermInfo(word, category) {
    if (category === '忌' && termDictJi[word]) return termDictJi[word];
    if (category === '宜' && termDict[word]) return termDict[word];
    if (termDictJi[word]) return termDictJi[word];
    if (termDict[word]) return termDict[word];
    return {
      cat: category,
      meaning: word,
      usage: '该词条释义暂未收录，可参考传统黄历通用解释。'
    };
  }

  function parseColors(str) {
    return str.split('、').map(function (name) {
      return { name: name.trim(), color: colorMap[name.trim()] || '#eeeeee' };
    }).filter(function (item) { return item.name; });
  }

  // ============ 渲染函数 ============
  function renderTerms(container, arr, category) {
    container.innerHTML = '';
    if (!arr || arr.length === 0) {
      container.textContent = '无';
      return;
    }
    arr.forEach(function (word) {
      var tag = document.createElement('span');
      tag.className = 'term-tag';
      tag.textContent = word;
      tag.addEventListener('click', function () {
        showTermModal(word, category);
      });
      container.appendChild(tag);
    });
  }

  function renderColors(container, colorStr) {
    container.innerHTML = '';
    var colors = colorStr.split('、').map(function (c) { return c.trim(); }).filter(Boolean);
    colors.forEach(function (color, index) {
      var span = document.createElement('span');
      span.className = 'color-line';
      span.style.display = 'inline-flex';
      span.style.alignItems = 'center';
      span.style.gap = '6px';

      var swatch = document.createElement('span');
      swatch.className = 'color-swatch';
      swatch.style.backgroundColor = colorMap[color] || '#eeeeee';

      var text = document.createElement('span');
      text.textContent = color;

      span.appendChild(swatch);
      span.appendChild(text);
      container.appendChild(span);

      if (index < colors.length - 1) {
        var sep = document.createElement('span');
        sep.textContent = '、';
        container.appendChild(sep);
      }
    });
  }

  // ============ 黄历加载 ============
  function loadHuangLi() {
    var now = new Date();
    var lunarObj;
    try {
      var solar = Solar.fromYmd(now.getFullYear(), now.getMonth() + 1, now.getDate());
      lunarObj = solar.getLunar();
    } catch (e) {
      document.getElementById('solarDate').textContent = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日';
      document.getElementById('lunarDate').textContent = '农历库未加载';
      document.getElementById('yiText').textContent = '无';
      document.getElementById('jiText').textContent = '无';
      document.getElementById('noteText').innerHTML = '<li>请确认 lunar.js 与 index.html 在同一目录下。</li>';
      return;
    }

    var yiArr = lunarObj.getDayYi() || [];
    var jiArr = lunarObj.getDayJi() || [];

    var chongSha = '';
    try { chongSha = '冲' + lunarObj.getDayChongDesc() + ' 煞' + lunarObj.getDaySha(); }
    catch (e) { chongSha = '暂无'; }

    var caiPosition = '';
    try { caiPosition = lunarObj.getDayPositionCaiDesc() || '暂无'; }
    catch (e) { caiPosition = '暂无'; }

    document.getElementById('solarDate').textContent = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日';
    document.getElementById('lunarDate').textContent = lunarObj.getYearInChinese() + '年' + lunarObj.getMonthInChinese() + '月' + lunarObj.getDayInChinese();

    renderTerms(document.getElementById('yiText'), yiArr.length ? yiArr : ['无'], '宜');
    renderTerms(document.getElementById('jiText'), jiArr.length ? jiArr : ['无'], '忌');

    renderColors(document.getElementById('goodColor'), '白色、银色、浅灰色');
    renderColors(document.getElementById('badColor'), '红色、深紫色');

    var noteEl = document.getElementById('noteText');
    noteEl.innerHTML = '';
    [
      '干支：' + lunarObj.getYearInGanZhi() + '年 ' + lunarObj.getMonthInGanZhi() + '月 ' + lunarObj.getDayInGanZhi() + '日',
      '冲煞：' + chongSha,
      '财神方位：' + caiPosition
    ].forEach(function (note) {
      if (!note || note.indexOf('undefined') > -1) return;
      var li = document.createElement('li');
      li.textContent = note;
      noteEl.appendChild(li);
    });
  }

  // ============ 词条弹窗 ============
  function showTermModal(word, category) {
    var info = getTermInfo(word, category);
    document.getElementById('termWord').textContent = word;
    document.getElementById('termCat').textContent = info.cat + ' · 词条释义';
    document.getElementById('termBody').innerHTML =
      '<p><span class="label">含义：</span>' + info.meaning + '</p>' +
      '<p><span class="label">用法：</span>' + info.usage + '</p>';
    document.getElementById('termModalMask').classList.add('show');
  }

  function closeTermModal() {
    document.getElementById('termModalMask').classList.remove('show');
  }

  // ============ 求签 ============
  function drawDivine() {
    if (drawCount >= MAX_DRAW) return;

    var randomIndex = Math.floor(Math.random() * qianData.length);
    currentQian = qianData[randomIndex];
    drawCount++;
    historyQian.push(currentQian);

    renderCurrentQian();
    updateDivineUI();
  }

  function renderCurrentQian() {
    var resultEl = document.getElementById('divineResult');
    resultEl.classList.add('show');
    resultEl.innerHTML =
      '<div class="qian-name">' + currentQian.name + '</div>' +
      '<div class="qian-level">' + currentQian.level + '</div>' +
      '<div class="qian-poem">' + currentQian.poem + '</div>' +
      '<div class="qian-tip">' + currentQian.tip + '</div>';
  }

  function updateDivineUI() {
    var divineBtn = document.getElementById('divineBtn');
    var redrawBtn = document.getElementById('redrawBtn');
    var historyBtn = document.getElementById('historyBtn');

    if (drawCount === 0) {
      divineBtn.style.display = 'inline-block';
      divineBtn.disabled = false;
      redrawBtn.style.display = 'none';
      historyBtn.style.display = 'none';
      return;
    }

    divineBtn.style.display = 'none';

    if (drawCount < MAX_DRAW) {
      redrawBtn.style.display = 'inline-block';
      historyBtn.style.display = 'none';
    } else {
      redrawBtn.style.display = 'none';
      historyBtn.style.display = 'inline-block';
    }
  }

  // ============ 抽签记录 ============
  function showHistory() {
    var listEl = document.getElementById('historyList');
    listEl.innerHTML = '';
    historyQian.forEach(function (qian, index) {
      var item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML =
        '<div class="history-item-index">第 ' + (index + 1) + ' 次</div>' +
        '<div class="history-item-name">' + qian.name + '</div>' +
        '<div class="history-item-level">' + qian.level + '</div>' +
        '<div class="history-item-poem">' + qian.poem + '</div>';
      listEl.appendChild(item);
    });
    document.getElementById('historyModalMask').classList.add('show');
  }

  function closeHistory() {
    document.getElementById('historyModalMask').classList.remove('show');
  }

  // ============ 打开黄历 ============
  function openBook() {
    var cover = document.getElementById('cover');
    var bookCover = document.getElementById('bookCover');
    bookCover.style.transform = 'translateX(-30px) scale(0.9)';
    bookCover.style.opacity = '0';

    setTimeout(function () {
      cover.style.display = 'none';
      document.getElementById('pageWrap').style.display = 'flex';
      loadHuangLi();
    }, 500);
  }

  // ============ 事件绑定 ============
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openBtn').addEventListener('click', openBook);
    document.getElementById('divineBtn').addEventListener('click', drawDivine);
    document.getElementById('redrawBtn').addEventListener('click', drawDivine);
    document.getElementById('historyBtn').addEventListener('click', showHistory);
    document.getElementById('termBackBtn').addEventListener('click', closeTermModal);
    document.getElementById('historyBackBtn').addEventListener('click', closeHistory);

    document.getElementById('termModalMask').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        closeTermModal();
      }
    });

    document.getElementById('historyModalMask').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        closeHistory();
      }
    });
  });

})();