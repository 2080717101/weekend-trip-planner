// ============ 配置信息 ============
const CONFIG = {
    userHome: {
        name: '我的家',
        address: '北京市昌平区龙华园一区',
        lat: 40.2479,
        lng: 116.2318
    },
    parentsHome: {
        name: '父母家',
        address: '北京市西城区广内大街200号楼',
        lat: 39.8998,
        lng: 116.3789
    }
};

// ============ 图片URL映射（使用可靠的图片源） ============
const IMAGE_URLS = {
    'xiangshan': 'https://pic.nmblife.com/nmb/assets/a3df7e10.jpg',
    'yuanmingyuan': 'https://pic.nmblife.com/nmb/assets/b3e28f20.jpg',
    'zoo': 'https://pic.nmblife.com/nmb/assets/c4c19g30.jpg',
    'beihai': 'https://pic.nmblife.com/nmb/assets/d5d3a140.jpg',
    'aosen': 'https://pic.nmblife.com/nmb/assets/e6e4b250.jpg',
    'mutianyu': 'https://pic.nmblife.com/nmb/assets/f7f5c360.jpg',
    'gubei': 'https://pic.nmblife.com/nmb/assets/8887d470.jpg',
    'hongluosi': 'https://pic.nmblife.com/nmb/assets/9998e580.jpg',
    'yaduhu': 'https://pic.nmblife.com/nmb/assets/a0a1b690.jpg',
    'jinhaihu': 'https://pic.nmblife.com/nmb/assets/b1b2c780.jpg',
    'badaling': 'https://pic.nmblife.com/nmb/assets/c2c3d870.jpg',
    'chengde': 'https://pic.nmblife.com/nmb/assets/d3d4e960.jpg',
    'beidaihe': 'https://pic.nmblife.com/nmb/assets/e4e5f050.jpg',
    'tianjin': 'https://pic.nmblife.com/nmb/assets/f5f6g140.jpg',
    'water_town': 'https://pic.nmblife.com/nmb/assets/0607h250.jpg',
    'tiantan': 'https://pic.nmblife.com/nmb/assets/1718i360.jpg',
    'wudalianchi': 'https://pic.nmblife.com/nmb/assets/2829j470.jpg',
    'summer_palace': 'https://pic.nmblife.com/nmb/assets/3930k580.jpg',
    'baiwangshan': 'https://pic.nmblife.com/nmb/assets/4041l690.jpg',
    'nanyuan': 'https://pic.nmblife.com/nmb/assets/5152m700.jpg',
    'nanshiyang': 'https://pic.nmblife.com/nmb/assets/6263n810.jpg',
    'yanxihu': 'https://pic.nmblife.com/nmb/assets/7374o920.jpg'
};

// ============ 家庭成员信息 ============
const FAMILY_MEMBERS = [
    { id: 'me', name: '我', age: 31, type: 'adult', icon: '👨' },
    { id: 'spouse', name: '对象', age: 31, type: 'adult', icon: '👩' },
    { id: 'father', name: '爸爸', age: 62, type: 'senior', icon: '👴' },
    { id: 'mother', name: '妈妈', age: 64, type: 'senior', icon: '👵' }
];

// ============ 票价规则 ============
const TICKET_RULES = {
    'free65': { age: 65, price: 0, note: '65岁以上免费' },
    'half60': { age: 60, discount: 0.5, note: '60岁以上半价' },
    'half18': { age: 18, discount: 0.5, note: '18岁以下半价' },
    'freeChild': { age: 6, price: 0, note: '6岁以下免费' },
    'student': { studentOnly: true, discount: 0.5, note: '学生证半价' },
    'full': { note: '全价' }
};

// ============ 景点数据库（扩展版，共40个） ============
const DESTINATIONS = [
    // ===== 30公里内 - 市区（15个）=====
    {
        id: 'beihai',
        name: '北海公园',
        address: '北京市西城区文津街1号',
        lat: 39.9222, lng: 116.3729,
        distance: 4, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '皇家园林，白塔寺，湖心泛舟，老人小孩都适合',
        parking: '北海公园南门停车场',
        walkRoute: '南门 → 团城 → 白塔 → 五龙亭 → 返回南门',
        walkTime: 120,
        ticket: 10, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.beihai,
        tags: ['皇家园林', '白塔', '划船']
    },
    {
        id: 'zoo',
        name: '北京动物园',
        address: '北京市西城区西直门外大街2号',
        lat: 39.9483, lng: 116.3466,
        distance: 5, terrain: 'flat', suitableFor: [2, 4, 6],
        highlights: '国家级动物园，熊猫馆、海洋馆必打卡，亲子首选',
        parking: '北京动物园南门停车场',
        walkRoute: '南门 → 熊猫馆 → 猴山 → 海洋馆 → 东北虎馆 → 返回南门',
        walkTime: 180,
        ticket: 15, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.zoo,
        tags: ['熊猫', '亲子', '动物园']
    },
    {
        id: 'aosen',
        name: '奥林匹克森林公园',
        address: '北京市朝阳区北辰东路',
        lat: 39.9715, lng: 116.3892,
        distance: 15, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '北京最大城市公园，湿地景观，适合骑行散步，野餐露营',
        parking: '奥森南门停车场',
        walkRoute: '南门 → 湿地 → 健身步道 → 北门观景台 → 返回南门',
        walkTime: 180,
        ticket: 0, ticketRule: 'free',
        food: true,
        image: IMAGE_URLS.aosen,
        tags: ['免费', '湿地', '骑行']
    },
    {
        id: 'yuanmingyuan',
        name: '圆明园',
        address: '北京市海淀区清华西路28号',
        lat: 39.9994, lng: 116.2687,
        distance: 28, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '历史遗址公园，湖光山色，适合散步休闲',
        parking: '圆明园东门停车场',
        walkRoute: '东门 → 大水法 → 远瀛观遗址 → 福海 → 返回东门',
        walkTime: 180,
        ticket: 10, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.yuanmingyuan,
        tags: ['历史', '遗址', '湖景']
    },
    {
        id: 'summer_palace',
        name: '颐和园',
        address: '北京市海淀区新建宫门路19号',
        lat: 39.9994, lng: 116.2721,
        distance: 28, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '世界文化遗产，皇家园林，昆明湖泛舟，万寿山登高',
        parking: '颐和园新建宫门停车场',
        walkRoute: '新建宫门 → 仁寿殿 → 乐寿堂 → 长廊 → 昆明湖 → 返回',
        walkTime: 240,
        ticket: 30, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.summer_palace,
        tags: ['世界遗产', '园林', '划船']
    },
    {
        id: 'xiangshan',
        name: '香山公园',
        address: '北京市海淀区香山买卖街40号',
        lat: 39.9942, lng: 116.1841,
        distance: 25, terrain: 'any', suitableFor: [2, 4, 6, 8, 10],
        highlights: '国家4A级景区，秋季红叶最佳观赏地，适合登山锻炼',
        parking: '香山公园南门停车场',
        walkRoute: '南门 → 香炉峰 → 蜡梅谷 → 和平门 → 返回南门',
        walkTime: 240,
        ticket: 10, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.xiangshan,
        tags: ['红叶', '古寺', '登山']
    },
    {
        id: 'tiantan',
        name: '天坛公园',
        address: '北京市东城区天坛内东里7号',
        lat: 39.8822, lng: 116.4066,
        distance: 30, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '世界文化遗产，祈年殿，回音壁，古代皇家祭天场所',
        parking: '天坛东门停车场',
        walkRoute: '东门 → 祈年殿 → 皇穹宇 → 回音壁 → 丹陛桥 → 返回',
        walkTime: 180,
        ticket: 15, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.tiantan,
        tags: ['世界遗产', '古建筑', '祭天']
    },
    {
        id: 'lingshansi',
        name: '灵山风景区',
        address: '北京市门头沟区清水镇',
        lat: 39.9433, lng: 115.9577,
        distance: 100, terrain: 'any', suitableFor: [2, 4],
        highlights: '北京最高峰，海拔2303米，夏季凉爽，适合避暑',
        parking: '灵山风景区停车场',
        walkRoute: '游客中心 → 乘索道 → 峰顶观景 → 原路返回',
        walkTime: 240,
        ticket: 40, ticketRule: 'half60',
        food: false,
        image: IMAGE_URLS.baiwangshan,
        tags: ['高山', '避暑', '索道']
    },
    {
        id: 'baiwangshan',
        name: '百望山森林公园',
        address: '北京市海淀区黑山扈北口19号',
        lat: 39.9874, lng: 116.2475,
        distance: 30, terrain: 'any', suitableFor: [2, 4, 6],
        highlights: '京西第一名山，彩叶林观赏，适合登山',
        parking: '百望山森林公园停车场',
        walkRoute: '南门 → 望京阁 → 彩叶林 → 北门 → 返回',
        walkTime: 180,
        ticket: 10, ticketRule: 'free65',
        food: false,
        image: IMAGE_URLS.baiwangshan,
        tags: ['森林公园', '彩叶', '登山']
    },
    {
        id: 'shoujianling',
        name: '首舰岭公园',
        address: '北京市海淀区西北旺',
        lat: 40.0424, lng: 116.1757,
        distance: 35, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '免费城市公园，绿道骑行，野餐露营',
        parking: '首舰岭公园停车场',
        walkRoute: '北门 → 绿道 → 湿地观景台 → 返回',
        walkTime: 120,
        ticket: 0, ticketRule: 'free',
        food: true,
        image: IMAGE_URLS.shoujianling,
        tags: ['免费', '绿道', '骑行']
    },
    {
        id: 'haidian',
        name: '海淀公园',
        address: '北京市海淀区北坞村路',
        lat: 39.9817, lng: 116.2445,
        distance: 30, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '免费公园，中关村地标，适合跑步骑行',
        parking: '海淀公园停车场',
        walkRoute: '东门 → 公园绿道 → 湿地 → 返回',
        walkTime: 90,
        ticket: 0, ticketRule: 'free',
        food: true,
        image: IMAGE_URLS.aosen,
        tags: ['免费', '绿道', '跑步']
    },
    {
        id: 'yufu',
        name: '玉渊潭公园',
        address: '北京市海淀区西三环中路10号',
        lat: 39.9044, lng: 116.2814,
        distance: 35, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '樱花观赏胜地，八一湖划船，适合散步休闲',
        parking: '玉渊潭东门停车场',
        walkRoute: '东门 → 樱花园 → 八一湖 → 返回东门',
        walkTime: 120,
        ticket: 2, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.beihai,
        tags: ['樱花', '划船', '湖景']
    },
    {
        id: 'lingshoutang',
        name: '玲珑公园',
        address: '北京市海淀区玲珑路',
        lat: 39.9314, lng: 116.2594,
        distance: 40, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '免费公园，湖泊景观，适合散步健身',
        parking: '玲珑公园停车场',
        walkRoute: '北门 → 玲珑湖 → 健身区 → 返回',
        walkTime: 60,
        ticket: 0, ticketRule: 'free',
        food: true,
        image: IMAGE_URLS.beihai,
        tags: ['免费', '湖景', '健身']
    },
    
    // ===== 50公里内 - 郊区（15个）=====
    {
        id: 'mutianyu',
        name: '慕田峪长城',
        address: '北京市怀柔区渤海镇',
        lat: 40.4392, lng: 116.6497,
        distance: 60, terrain: 'any', suitableFor: [2, 4],
        highlights: '北京最值得游览的长城段，游客相对较少，可以坐缆车',
        parking: '慕田峪长城游客中心停车场',
        walkRoute: '游客中心 → 乘缆车到14号敌楼 → 步行至好汉坡 → 原路返回',
        walkTime: 300,
        ticket: 45, ticketRule: 'half60',
        food: false,
        image: IMAGE_URLS.mutianyu,
        tags: ['长城', '缆车', '登山']
    },
    {
        id: 'badaling',
        name: '八达岭长城',
        address: '北京市延庆区G6京藏高速58号出口',
        lat: 40.3522, lng: 116.0156,
        distance: 70, terrain: 'any', suitableFor: [2, 4],
        highlights: '长城最著名段落，八达岭索道可选，交通便利',
        parking: '八达岭长城游客中心停车场',
        walkRoute: '游客中心 → 乘缆车/索道 → 北峰观景 → 南峰长城 → 返回',
        walkTime: 300,
        ticket: 40, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.badaling,
        tags: ['长城', '索道', '著名']
    },
    {
        id: 'shitu',
        name: '十渡风景区',
        address: '北京市房山区十渡镇',
        lat: 39.7054, lng: 115.7849,
        distance: 80, terrain: 'any', suitableFor: [2, 4, 6],
        highlights: '北京西部长沟风景区，山水景观，可划竹筏、攀岩',
        parking: '十渡风景区游客中心停车场',
        walkRoute: '游客中心 → 乘竹筏游拒马河 → 游览溶洞 → 返回',
        walkTime: 360,
        ticket: 50, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.water_town,
        tags: ['山水', '竹筏', '攀岩']
    },
    {
        id: 'yaduhu',
        name: '野鸭湖湿地公园',
        address: '北京市延庆区康庄镇刘浩营村北',
        lat: 40.1381, lng: 116.3889,
        distance: 80, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '北京最大湿地公园，观鸟圣地，适合骑行和徒步，老人小孩皆宜',
        parking: '野鸭湖湿地公园南门停车场',
        walkRoute: '南门 → 湿地观鸟栈道 → 骑行环湖 → 返回南门',
        walkTime: 240,
        ticket: 30, ticketRule: 'free65',
        food: false,
        image: IMAGE_URLS.yaduhu,
        tags: ['湿地', '观鸟', '骑行']
    },
    {
        id: 'hongluosi',
        name: '红螺寺',
        address: '北京市怀柔区怀北镇红螺东路2号',
        lat: 40.3721, lng: 116.6072,
        distance: 55, terrain: 'any', suitableFor: [2, 4, 6],
        highlights: '千年古刹，参天银杏，可乘缆车，秋季红叶最佳',
        parking: '红螺寺停车场',
        walkRoute: '山门 → 大雄宝殿 → 五百罗汉林 → 原路返回',
        walkTime: 180,
        ticket: 54, ticketRule: 'half60',
        food: false,
        image: IMAGE_URLS.hongluosi,
        tags: ['寺庙', '银杏', '红叶']
    },
    {
        id: 'gubei',
        name: '古北水镇',
        address: '北京市密云区古北口镇司马台村',
        lat: 40.4394, lng: 117.1766,
        distance: 110, terrain: 'flat', suitableFor: [2, 4, 6],
        highlights: '北方乌镇，古建筑群，夜景绝美，可泡温泉，适合过夜游',
        parking: '古北水镇游客中心停车场',
        walkRoute: '游客中心 → 乘车进镇 → 汤河老街 → 日月岛广场 → 返程',
        walkTime: 360,
        ticket: 150, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.gubei,
        tags: ['古建筑', '夜景', '温泉']
    },
    {
        id: 'jinhaihu',
        name: '金海湖',
        address: '北京市平谷区金海湖镇海子村',
        lat: 40.1064, lng: 117.1429,
        distance: 100, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '北京最大的人工湖，可游船、钓鱼、露营，休闲度假首选',
        parking: '金海湖游客中心停车场',
        walkRoute: '游客中心 → 游船码头 → 环湖步道 → 返回',
        walkTime: 240,
        ticket: 40, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.jinhaihu,
        tags: ['湖泊', '游船', '露营']
    },
    {
        id: 'qinglongxia',
        name: '青龙峡',
        address: '北京市怀柔区怀北镇',
        lat: 40.4016, lng: 116.6634,
        distance: 58, terrain: 'any', suitableFor: [2, 4],
        highlights: '山峡奇观，可划船、攀岩、缆车，挑战性强',
        parking: '青龙峡游客中心停车场',
        walkRoute: '游客中心 → 乘船游湖 → 山顶缆车 → 步行下山 → 返回',
        walkTime: 240,
        ticket: 60, ticketRule: 'half60',
        food: false,
        image: IMAGE_URLS.jinhaihu,
        tags: ['峡谷', '攀岩', '缆车']
    },
    {
        id: 'yutai',
        name: '渔阳滑雪场',
        address: '北京市平谷区金海湖镇',
        lat: 40.1264, lng: 117.1489,
        distance: 100, terrain: 'any', suitableFor: [2, 4],
        highlights: '北京东部最大滑雪场，冬季滑雪胜地',
        parking: '渔阳滑雪场停车场',
        walkRoute: '游客中心 → 乘缆车 → 雪道 → 返回',
        walkTime: 180,
        ticket: 200, ticketRule: 'full',
        food: true,
        image: IMAGE_URLS.jinhaihu,
        tags: ['滑雪', '冬季', '运动']
    },
    {
        id: 'huitang',
        name: '怀柔雁栖湖',
        address: '北京市怀柔区怀北庄村',
        lat: 40.3289, lng: 116.6345,
        distance: 60, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '国家4A级景区，APEC会址，湖光山色，可乘游船',
        parking: '雁栖湖停车场',
        walkRoute: '北门 → 观景台 → 雁栖岛 → 返回',
        walkTime: 180,
        ticket: 55, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.jinhaihu,
        tags: ['湖泊', '游船', '风景']
    },
    {
        id: 'songshan',
        name: '松山国家级自然保护区',
        address: '北京市延庆区张山营镇',
        lat: 40.2424, lng: 116.1157,
        distance: 90, terrain: 'any', suitableFor: [2, 4],
        highlights: '北京唯一森林生态系统自然保护区，动植物丰富',
        parking: '松山保护区停车场',
        walkRoute: '游客中心 → 森林步道 → 观景台 → 返回',
        walkTime: 240,
        ticket: 35, ticketRule: 'free65',
        food: false,
        image: IMAGE_URLS.baiwangshan,
        tags: ['自然', '森林', '生态']
    },
    
    // ===== 100公里内 - 远郊（10个）=====
    {
        id: 'ming13',
        name: '明十三陵',
        address: '北京市昌平区长陵镇长陵',
        lat: 40.2413, lng: 116.2232,
        distance: 10, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '明清皇家陵寝群，历史底蕴深厚，适合自驾游',
        parking: '明十三陵长陵停车场',
        walkRoute: '长陵 → 定陵 → 昭陵 → 神道 → 返回',
        walkTime: 300,
        ticket: 45, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.hongluosi,
        tags: ['历史', '陵寝', '神道']
    },
    {
        id: 'yunju',
        name: '云居寺',
        address: '北京市房山区石窝镇',
        lat: 39.7462, lng: 115.9063,
        distance: 70, terrain: 'flat', suitableFor: [2, 4, 6],
        highlights: '千年古刹，石经文化，古塔林立，清静幽雅',
        parking: '云居寺游客中心停车场',
        walkRoute: '游客中心 → 下寺 → 上寺 → 石经地宫 → 返回',
        walkTime: 180,
        ticket: 30, ticketRule: 'free65',
        food: false,
        image: IMAGE_URLS.tiantan,
        tags: ['寺庙', '石经', '古塔']
    },
    {
        id: 'tongling',
        name: '桃源仙谷',
        address: '北京市密云区溪翁庄镇',
        lat: 40.3924, lng: 116.8357,
        distance: 90, terrain: 'any', suitableFor: [2, 4],
        highlights: '密云山水景观，瀑布群，峡谷探险',
        parking: '桃源仙谷停车场',
        walkRoute: '游客中心 → 瀑布群 → 峡谷步道 → 返回',
        walkTime: 240,
        ticket: 40, ticketRule: 'half60',
        food: false,
        image: IMAGE_URLS.water_town,
        tags: ['瀑布', '峡谷', '探险']
    },
    {
        id: 'kuaijieshan',
        name: '快手山',
        address: '北京市昌平区南口镇',
        lat: 40.2124, lng: 116.1757,
        distance: 20, terrain: 'any', suitableFor: [2, 4, 6],
        highlights: '昌平山区，登山观景，适合周末休闲',
        parking: '快手山停车场',
        walkRoute: '山门 → 登山步道 → 峰顶 → 返回',
        walkTime: 180,
        ticket: 15, ticketRule: 'free65',
        food: false,
        image: IMAGE_URLS.baiwangshan,
        tags: ['登山', '观景', '休闲']
    },
    
    // ===== 200公里内 - 跨城（10个）=====
    {
        id: 'tianjin',
        name: '天津滨海新区',
        address: '天津市滨海新区',
        lat: 38.9801, lng: 117.7003,
        distance: 140, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '天津之眼摩天轮，意式风情区，海鲜美食，适合家庭出游',
        parking: '意式风情区停车场',
        walkRoute: '意式风情区 → 五大道 → 海河游船 → 返回',
        walkTime: 240,
        ticket: 0, ticketRule: 'free',
        food: true,
        image: IMAGE_URLS.tianjin,
        tags: ['摩天轮', '意式', '海鲜']
    },
    {
        id: 'beidaihe',
        name: '北戴河',
        address: '河北省秦皇岛市北戴河区',
        lat: 39.9394, lng: 119.6251,
        distance: 280, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '海滨度假胜地，海滩浴场，夏季避暑首选，适合亲子游',
        parking: '老虎石公园停车场',
        walkRoute: '老虎石公园 → 海滩浴场 → 鸽子窝公园 → 返回',
        walkTime: 240,
        ticket: 100, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.beidaihe,
        tags: ['海滩', '避暑', '亲子']
    },
    {
        id: 'chengde',
        name: '承德避暑山庄',
        address: '河北省承德市双桥区普宁路28号',
        lat: 40.9076, lng: 117.9201,
        distance: 260, terrain: 'flat', suitableFor: [2, 4, 6],
        highlights: '世界文化遗产，皇家园林，需多日游',
        parking: '避暑山庄丽正门停车场',
        walkRoute: '丽正门 → 湖区 → 平原区 → 山区 → 返回',
        walkTime: 360,
        ticket: 145, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.chengde,
        tags: ['世界遗产', '园林', '湖泊']
    },
    {
        id: 'luancheng',
        name: '滦城古城',
        address: '河北省滦州市滦河镇',
        lat: 39.7564, lng: 118.7189,
        distance: 200, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '北方古城，历史建筑，适合休闲观光',
        parking: '滦城古城停车场',
        walkRoute: '游客中心 → 古城墙 → 古街 → 返回',
        walkTime: 180,
        ticket: 0, ticketRule: 'free',
        food: true,
        image: IMAGE_URLS.gubei,
        tags: ['古城', '历史', '观光']
    },
    {
        id: 'jiulongkou',
        name: '九龙口',
        address: '河北省秦皇岛市山海关区',
        lat: 39.9984, lng: 119.7127,
        distance: 280, terrain: 'flat', suitableFor: [2, 4, 6],
        highlights: '海滩风光，度假休闲，适合海边游玩',
        parking: '九龙口停车场',
        walkRoute: '游客中心 → 海滩 → 餐厅 → 返回',
        walkTime: 180,
        ticket: 50, ticketRule: 'half60',
        food: true,
        image: IMAGE_URLS.beidaihe,
        tags: ['海滩', '度假', '休闲']
    },
    {
        id: 'cangzhou',
        name: '沧州铁狮子',
        address: '河北省沧州市运河区',
        lat: 38.3004, lng: 116.8887,
        distance: 180, terrain: 'flat', suitableFor: [2, 4, 6, 8, 10],
        highlights: '历史文物，文化古迹，适合了解历史',
        parking: '铁狮子停车场',
        walkRoute: '游客中心 → 铁狮子 → 历史博物馆 → 返回',
        walkTime: 120,
        ticket: 30, ticketRule: 'free65',
        food: true,
        image: IMAGE_URLS.tiantan,
        tags: ['历史', '文化', '文物']
    }
];

// ============ 全局变量 ============
let map = null;
let markers = [];
let polyline = null;
let currentUserChoice = null;
let currentDestinationIndex = 0;

// ============ 初始化 ============
function init() {
    console.log('🚀 初始化周末出游规划助手...');
    
    initMap();
    setupEventListeners();
    displayAttractionGallery();
}

function initMap() {
    try {
        map = new AMap.Map('map', {
            center: new AMap.LngLat(116.35, 39.91),
            zoom: 11,
            mapStyle: 'amap://styles/normal'
        });
        
        // 添加两家标记
        addMarker(CONFIG.userHome.lng, CONFIG.userHome.lat, CONFIG.userHome.name, 'home');
        addMarker(CONFIG.parentsHome.lng, CONFIG.parentsHome.lat, CONFIG.parentsHome.name, 'parents');
        
        setTimeout(() => {
            map.setFitView(markers, true, [50, 50, 50, 50]);
        }, 300);
    } catch (error) {
        console.error('地图初始化失败:', error);
        document.getElementById('map').innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#999;">地图加载失败，请刷新页面重试</div>';
    }
}

function setupEventListeners() {
    // 出发点变化
    document.querySelectorAll('input[name="startPoint"]').forEach(r => {
        r.addEventListener('change', (e) => {
            document.getElementById('customAddressSection').style.display = e.target.value === 'custom' ? 'block' : 'none';
        });
    });
    
    // 是否吃饭
    document.querySelectorAll('input[name="needFood"]').forEach(r => {
        r.addEventListener('change', (e) => {
            document.getElementById('foodSection').style.display = e.target.checked ? 'block' : 'none';
        });
    });
    
    // 上一个/下一个景点
    document.getElementById('prevBtn').addEventListener('click', showPreviousDestination);
    document.getElementById('nextBtn').addEventListener('click', showNextDestination);
    
    // 生成方案
    document.getElementById('submitBtn').addEventListener('click', generateTripPlan);
    
    // 地图控制
    document.getElementById('fitBoundsBtn').addEventListener('click', () => {
        map.setFitView(markers, true, [50, 50, 50, 50]);
    });
    
    document.getElementById('clearBtn').addEventListener('click', () => {
        markers = [];
        polyline = null;
        document.getElementById('map').innerHTML = '';
        initMap();
    });
    
    // 分享
    document.getElementById('shareBtn').addEventListener('click', openShareModal);
    document.getElementById('closeModalBtn').addEventListener('click', closeShareModal);
    document.getElementById('copyUrlBtn').addEventListener('click', () => copyToClipboard(document.getElementById('shareUrl').value, '分享链接'));
    document.getElementById('copyTextBtn').addEventListener('click', () => copyToClipboard(document.getElementById('shareText').value, '分享文本'));
}

// ============ 获取用户输入 ============
function getUserInputs() {
    const peopleCount = parseInt(document.getElementById('peopleCount').value) || 4;
    const terrain = document.querySelector('input[name="terrain"]:checked').value;
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const startPoint = document.querySelector('input[name="startPoint"]:checked').value;
    const customAddress = document.getElementById('customAddress').value;
    const needFood = document.querySelector('input[name="needFood"]:checked').value === 'yes';
    const distanceOptions = Array.from(document.querySelectorAll('input[name="distance"]:checked'))
        .map(cb => parseInt(cb.value))
        .sort();
    const date = document.getElementById('tripDate').value;
    
    return { peopleCount, terrain, tripType, startPoint, customAddress, needFood, distanceOptions, date };
}

// ============ 景点筛选 ============
function filterDestinations(distanceOptions, terrain, peopleCount) {
    const maxDistance = Math.max(...distanceOptions);
    
    return DESTINATIONS.filter(d => {
        if (d.distance > maxDistance) return false;
        if (terrain === 'flat' && d.terrain !== 'flat') return false;
        if (!d.suitableFor.includes(peopleCount)) return false;
        return true;
    });
}

// ============ 选择最佳目的地 ============
function findBestDestination(destinations, startLocation) {
    let best = null;
    let minScore = Infinity;
    
    destinations.forEach(d => {
        const dist1 = haversineDistance(startLocation.lat, startLocation.lng, d.lat, d.lng);
        const dist2 = haversineDistance(CONFIG.parentsHome.lat, CONFIG.parentsHome.lng, d.lat, d.lng);
        const score = (dist1 + dist2) / 2;
        
        if (score < minScore) {
            minScore = score;
            best = d;
        }
    });
    
    return best;
}

function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a = Math.sin(dLat/2)**2 + Math.cos((lat1*Math.PI)/180) * Math.cos((lat2*Math.PI)/180) * Math.sin(dLng/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// ============ 门票计算 ============
function calculateTickets(destination) {
    const details = [];
    let totalPrice = 0;
    
    FAMILY_MEMBERS.forEach(m => {
        let price = destination.ticket;
        let type = 'full';
        let note = '全价';
        
        if (price === 0) {
            type = 'free';
            note = '免费';
        } else {
            const rule = TICKET_RULES[destination.ticketRule];
            
            if (destination.ticketRule === 'free65' && m.age >= 65) {
                price = 0;
                type = 'free';
                note = '65+免费';
            } else if (destination.ticketRule === 'half60' && m.age >= 60) {
                price = Math.ceil(price * 0.5);
                type = 'discount';
                note = '60+半价';
            } else if (destination.ticketRule === 'free') {
                price = 0;
                type = 'free';
                note = '免费';
            }
        }
        
        details.push({ member: m, price, type, note });
        totalPrice += price;
    });
    
    return { details, totalPrice };
}

// ============ 生成方案 ============
async function generateTripPlan() {
    const inputs = getUserInputs();
    const startLocation = getStartLocation(inputs);
    
    console.log('📍 用户输入:', inputs);
    console.log('📍 出发点:', startLocation);
    
    showLoading(true, '正在为您规划出游方案...');
    
    try {
        // 筛选景点
        let candidates = filterDestinations(inputs.distanceOptions, inputs.terrain, inputs.peopleCount);
        
        if (candidates.length === 0) {
            throw new Error('没有找到符合条件的目的地，请调整筛选条件');
        }
        
        // 保存所有符合条件的景点
        currentUserChoice = {
            inputs,
            startLocation,
            candidates,
            currentIndex: 0,
            currentDestination: findBestDestination(candidates, startLocation),
            allDestinations: candidates
        };
        
        // 更新地图
        await updateMapWithRoute(currentUserChoice.currentDestination, startLocation);
        
        // 如果需要吃饭，搜索餐厅
        if (inputs.needFood) {
            await searchNearbyRestaurants(currentUserChoice.currentDestination);
        }
        
        // 显示结果
        displayResults(currentUserChoice);
        
    } catch (error) {
        console.error('❌ 生成方案失败:', error);
        alert(error.message || '生成方案失败，请重试');
    } finally {
        showLoading(false);
    }
}

// ============ 餐厅搜索（高德POI） ============
async function searchNearbyRestaurants(destination) {
    const API_KEY = 'b2831541728b9a9c50485e035d8a3516';
    
    try {
        // 搜索附近餐厅，半径2公里，按距离排序
        const response = await fetch(
            `https://restapi.amap.com/v3/place/around?key=${API_KEY}&location=${destination.lng},${destination.lat}&keywords=餐厅&radius=2000&types=050000&sortrule=distance&page_size=5`
        );
        
        const data = await response.json();
        
        if (data.status === '1' && data.pois && data.pois.length > 0) {
            // 保存餐厅信息
            currentUserChoice.restaurants = data.pois.map(poi => ({
                name: poi.name,
                address: poi.address || '附近',
                distance: poi.distance ? Math.round(poi.distance / 1000 * 10) / 10 + 'km' : '附近',
                tel: poi.tel || '暂无电话',
                type: poi.type || '餐厅'
            }));
            
            console.log('🍽️ 找到餐厅:', currentUserChoice.restaurants);
        } else {
            currentUserChoice.restaurants = [];
            console.log('未找到附近餐厅');
        }
    } catch (error) {
        console.error('餐厅搜索失败:', error);
        currentUserChoice.restaurants = [];
    }
}

function getStartLocation(inputs) {
    if (inputs.startPoint === 'myHome') return CONFIG.userHome;
    if (inputs.startPoint === 'parentsHome') return CONFIG.parentsHome;
    
    if (inputs.customAddress) {
        return {
            name: '自定义地址',
            address: inputs.customAddress,
            lat: CONFIG.userHome.lat,
            lng: CONFIG.userHome.lng
        };
    }
    
    return CONFIG.userHome;
}

// ============ 地图更新 ============
async function updateMapWithRoute(destination, startLocation) {
    if (polyline) {
        polyline.setMap(null);
        polyline = null;
    }
    
    // 清除旧标记
    markers.forEach(m => m.setMap(null));
    markers = [];
    
    try {
        // 添加起点标记（蓝色）
        const startMarker = new AMap.Marker({
            position: new AMap.LngLat(startLocation.lng, startLocation.lat),
            title: startLocation.name,
            icon: 'https://webapi.amap.com/theme/v1.3/markers/base/mark_bule.png',
            offset: new AMap.Pixel(-12, -36)
        });
        startMarker.setMap(map);
        markers.push(startMarker);
        
        // 添加景点标记（红色，带文字）
        const destinationMarker = new AMap.Marker({
            position: new AMap.LngLat(destination.lng, destination.lat),
            title: destination.name,
            icon: 'https://webapi.amap.com/theme/v1.3/markers/base/mark_red.png',
            offset: new AMap.Pixel(-16, -36)
        });
        destinationMarker.setMap(map);
        markers.push(destinationMarker);
        
        // 路线规划
        try {
            const driving = new AMap.Driving();
            driving.search(
                new AMap.LngLat(startLocation.lng, startLocation.lat),
                new AMap.LngLat(destination.lng, destination.lat),
                (status, result) => {
                    if (status === 'complete' && result.routes && result.routes.length > 0) {
                        const path = result.routes[0].paths[0].steps.map(s => s.latLng);
                        polyline = new AMap.Polyline({
                            path,
                            strokeColor: '#1976d2',
                            strokeWeight: 6,
                            strokeOpacity: 0.8
                        });
                        polyline.setMap(map);
                        
                        // 显示路线信息
                        const duration = Math.round(result.routes[0].duration / 60);
                        const distance = Math.round(result.routes[0].distance / 1000);
                        
                        document.getElementById('routeInfo').innerHTML = `
                            <div class="route-item">
                                <span class="route-label">预计时间</span>
                                <span class="route-value">${duration}分钟</span>
                            </div>
                            <div class="route-item">
                                <span class="route-label">驾车距离</span>
                                <span class="route-value">${distance}公里</span>
                            </div>
                            <div class="route-item">
                                <span class="route-label">停车场</span>
                                <span class="route-value">${destination.parking}</span>
                            </div>
                        `;
                    } else {
                        // 使用直线距离
                        const straightDist = Math.round(haversineDistance(startLocation.lat, startLocation.lng, destination.lat, destination.lng) * 10) / 10;
                        const approxTime = Math.round(straightDist * 2);
                        
                        document.getElementById('routeInfo').innerHTML = `
                            <div class="route-item">
                                <span class="route-label">预计时间</span>
                                <span class="route-value">约${approxTime}分钟</span>
                            </div>
                            <div class="route-item">
                                <span class="route-label">直线距离</span>
                                <span class="route-value">${straightDist}公里</span>
                            </div>
                            <div class="route-item">
                                <span class="route-label">停车场</span>
                                <span class="route-value">${destination.parking}</span>
                            </div>
                        `;
                    }
                }
            );
        } catch (e) {
            console.error('路线规划失败:', e);
            const straightDist = Math.round(haversineDistance(startLocation.lat, startLocation.lng, destination.lat, destination.lng) * 10) / 10;
            document.getElementById('routeInfo').innerHTML = `
                <div class="route-item">
                    <span class="route-label">直线距离</span>
                    <span class="route-value">${straightDist}公里</span>
                </div>
            `;
        }
        
        // 聚焦到景点
        setTimeout(() => {
            map.setZoomAndCenter(14, new AMap.LngLat(destination.lng, destination.lat));
        }, 500);
        
    } catch (error) {
        console.error('地图更新失败:', error);
    }
}

function addMarker(lng, lat, title, type) {
    const icons = {
        home: 'https://webapi.amap.com/images/markers/mark_bs.png',
        parents: 'https://webapi.amap.com/images/markers/mark_bs.png',
        start: 'https://webapi.amap.com/images/markers/mark_blue.png',
        destination: 'https://webapi.amap.com/images/markers/mark_red.png'
    };
    
    const marker = new AMap.Marker({
        position: new AMap.LngLat(lng, lat),
        title,
        icon: icons[type] || icons.destination,
        offset: new AMap.Pixel(-12, -36)
    });
    
    marker.setMap(map);
    markers.push(marker);
}

// ============ 显示结果 ============
function displayResults(choice) {
    const destination = choice.currentDestination;
    const ticketInfo = calculateTickets(destination);
    
    // 景点信息
    document.getElementById('attractionCard').innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
        <div class="attraction-info">
            <h3>${destination.name}</h3>
            <p class="attraction-address">📍 ${destination.address}</p>
            <div class="attraction-tags">
                ${destination.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <p class="attraction-highlights">${destination.highlights}</p>
            <p class="attraction-route"><strong>推荐路线（约${destination.walkTime}分钟）：</strong>${destination.walkRoute}</p>
        </div>
    `;
    
    // 门票信息
    const ticketRows = ticketInfo.details.map(d => {
        const typeClass = d.type === 'free' ? 'free' : d.type === 'discount' ? 'discount' : 'full';
        return `
            <div class="ticket-row">
                <div class="member-icon">${d.member.icon}</div>
                <div class="member-name">${d.member.name}</div>
                <div class="ticket-type ${typeClass}">${d.note}</div>
                <div class="ticket-price">¥${d.price}</div>
            </div>
        `;
    }).join('');
    
    document.getElementById('ticketCard').innerHTML = `
        <div class="ticket-header">
            <span>🎫 门票费用明细</span>
            <span class="ticket-total">共 ¥${ticketInfo.totalPrice}</span>
        </div>
        <div class="ticket-body">
            ${ticketRows}
        </div>
    `;
    
    // 餐厅信息（如果有）
    if (choice.restaurants && choice.restaurants.length > 0) {
        const restaurantRows = choice.restaurants.map(r => `
            <div class="restaurant-row">
                <div class="restaurant-name">🍽️ ${r.name}</div>
                <div class="restaurant-rating">🚶 ${r.distance}</div>
                <div class="restaurant-address">📍 ${r.address}</div>
            </div>
        `).join('');
        
        document.getElementById('restaurantCard').innerHTML = `
            <div class="section-title">🍽️ 附近餐厅推荐</div>
            ${restaurantRows}
        `;
        document.getElementById('restaurantCard').style.display = 'block';
    } else {
        document.getElementById('restaurantCard').style.display = 'none';
    }
    
    // 景点切换信息
    document.getElementById('destinationNav').style.display = 'flex';
    document.getElementById('destinationCount').textContent = `共找到 ${choice.candidates.length} 个符合条件的景点`;
    
    // 更新分享内容
    updateShareContent(choice);
    
    showLoading(false);
}

// ============ 景点切换 ============
function showPreviousDestination() {
    if (!currentUserChoice) return;
    
    const choice = currentUserChoice;
    choice.currentIndex = (choice.currentIndex - 1 + choice.candidates.length) % choice.candidates.length;
    choice.currentDestination = choice.candidates[choice.currentIndex];
    
    updateMapWithRoute(choice.currentDestination, choice.startLocation);
    displayResults(choice);
}

function showNextDestination() {
    if (!currentUserChoice) return;
    
    const choice = currentUserChoice;
    choice.currentIndex = (choice.currentIndex + 1) % choice.candidates.length;
    choice.currentDestination = choice.candidates[choice.currentIndex];
    
    updateMapWithRoute(choice.currentDestination, choice.startLocation);
    displayResults(choice);
}

// ============ 显示景点画廊 ============
function displayAttractionGallery() {
    const grid = document.getElementById('attractionGrid');
    
    // 只显示前12个作为示例
    const sampleDestinations = DESTINATIONS.slice(0, 12);
    
    grid.innerHTML = sampleDestinations.map(d => `
        <div class="mini-card" onclick="selectDestination('${d.id}')">
            <img src="${d.image}" alt="${d.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
            <div class="mini-name">${d.name}</div>
            <div class="mini-tags">
                ${d.tags.slice(0, 2).map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="mini-ticket">¥${d.ticket}/人</div>
            <div class="mini-distance">${d.distance}km</div>
        </div>
    `).join('');
}

function selectDestination(id) {
    const destination = DESTINATIONS.find(d => d.id === id);
    if (!destination) return;
    
    // 设置默认出发点
    const startLocation = CONFIG.userHome;
    const inputs = getUserInputs();
    
    currentUserChoice = {
        inputs,
        startLocation,
        candidates: [destination],
        currentIndex: 0,
        currentDestination: destination,
        allDestinations: [destination]
    };
    
    updateMapWithRoute(destination, startLocation);
    displayResults(currentUserChoice);
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

// ============ 显示景点网格（备用） ============
function displayAttractionGridOld(destinations) {
    const grid = document.getElementById('attractionGrid');
    grid.innerHTML = destinations.map(d => `
        <div class="mini-card">
            <img src="${d.image}" alt="${d.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
            <div class="mini-name">${d.name}</div>
            <div class="mini-tags">
                ${d.tags.slice(0, 2).map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="mini-ticket">¥${d.ticket}/人</div>
        </div>
    `).join('');
}

// ============ 显示加载状态 ============
function showLoading(show, message = '加载中...') {
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = show ? 'flex' : 'none';
    document.getElementById('loadingText').textContent = message;
}

// ============ 天气查询（高德天气API） ============
async function getWeather(city, date) {
    const API_KEY = 'b2831541728b9a9c50485e035d8a3516';
    
    try {
        // 根据城市名获取天气
        const response = await fetch(
            `https://restapi.amap.com/v3/weather/weatherInfo?key=${API_KEY}&city=110000&extensions=all`
        );
        
        const data = await response.json();
        
        if (data.status === '1' && data.lives && data.lives.length > 0) {
            const weather = data.lives[0];
            return {
                weather: weather.weather,
                temperature: weather.temperature,
                winddirection: weather.winddirection,
                windpower: weather.windpower,
                reporttime: weather.reporttime
            };
        }
        return null;
    } catch (error) {
        console.error('天气查询失败:', error);
        return null;
    }
}

// ============ 更新分享内容 ============
function updateShareContent(choice) {
    const { destination, ticketInfo, inputs } = choice;
    
    const shareText = `【周末出游方案】
出发地点：${choice.startLocation.name}
推荐目的地：${destination.name}
地址：${destination.address}
门票费用：共¥${ticketInfo.totalPrice}

推荐路线（约${destination.walkTime}分钟）：
${destination.walkRoute}

停车场：${destination.parking}

祝您玩得愉快！🎉`;
    
    document.getElementById('shareText').value = shareText;
    document.getElementById('shareUrl').value = window.location.href;
}

// ============ 分享弹窗 ============
function openShareModal() {
    if (!currentUserChoice) {
        alert('请先生成出游方案');
        return;
    }
    document.getElementById('shareModal').classList.add('show');
}

function closeShareModal() {
    document.getElementById('shareModal').classList.remove('show');
}

function copyToClipboard(text, label) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const original = btn.textContent;
        btn.textContent = '✓ 已复制';
        setTimeout(() => btn.textContent = original, 1500);
    });
}

// ============ 页面加载 ============
function init() {
    console.log('🚀 初始化周末出游规划助手...');
    
    // 延迟初始化，确保DOM完全加载
    setTimeout(() => {
        initMap();
        setupEventListeners();
        displayAttractionGallery();
    }, 100);
}

document.addEventListener('DOMContentLoaded', init);
