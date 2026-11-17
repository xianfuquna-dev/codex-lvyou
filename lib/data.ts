import type { Destination, Guide, Trip } from "@/lib/types";

export const destinations: Destination[] = [
  {
    slug: "mutianyu-great-wall",
    name: "慕田峪长城",
    englishName: "MUTIANYU",
    region: "京北",
    district: "怀柔区",
    styles: ["长城", "轻徒步"],
    tagline: "山脊之上，看长城舒展成一条安静的线",
    summary:
      "植被覆盖率高、敌楼密集，是第一次来北京爬长城也很从容的一站。",
    description: [
      "慕田峪的迷人之处不只在城墙本身，更在于它顺着山势起伏的节奏。春夏是浓绿，深秋则被黄栌和枫叶层层点亮。",
      "景区步道成熟，可根据体力选择步行或缆车。若想避开最拥挤的时段，建议一早从市区出发，把午前留给城墙。",
    ],
    distance: "约 73 km",
    driveTime: "市区出发约 1.5–2 小时",
    suggestedTime: "半天至 1 天",
    bestSeason: "4–5 月、9–10 月",
    difficulty: "适中",
    highlights: ["敌楼与城墙视野", "缆车与滑道", "秋季彩叶"],
    tips: ["尽早出发，给往返和排队留余量", "穿防滑鞋，城砖路面有坡度"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/The_Mutianyu_section_of_the_Great_Wall_of_China.jpg/1920px-The_Mutianyu_section_of_the_Great_Wall_of_China.jpg",
    imageAlt: "群山间蜿蜒的慕田峪长城",
    imageCredit: "Lloyd Tudor / Wikimedia Commons / CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:The_Mutianyu_section_of_the_Great_Wall_of_China.jpg",
    featured: true,
  },
  {
    slug: "gubei-water-town",
    name: "古北水镇",
    englishName: "GUBEI",
    region: "京北",
    district: "密云区",
    styles: ["古镇", "亲子"],
    tagline: "长城脚下，把北方夜色过成一幅长卷",
    summary:
      "有河道、街巷和远山长城，适合慢逛与住一晚，也很适合带家人轻松出行。",
    description: [
      "古北水镇将北方院落的厚重与水乡的灵动放在同一幅画面里。白天可以穿行于胡同与石桥之间，傍晚等灯光亮起，再看一场长城脚下的夜色。",
      "这里更像一个适合住下来的目的地。与其匆匆打卡，不如留一晚给清晨与夜晚，感受人流散去后的安静。",
    ],
    distance: "约 130 km",
    driveTime: "市区出发约 2–2.5 小时",
    suggestedTime: "1–2 天",
    bestSeason: "四季皆宜",
    difficulty: "轻松",
    highlights: ["水镇夜景", "司马台长城", "温泉与民宿"],
    tips: ["住宿建议提前预订", "长城与景区活动以当日公告为准"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gubei_Water_Town_27.jpg/1280px-Gubei_Water_Town_27.jpg",
    imageAlt: "暮色中的古北水镇与远山长城灯带",
    imageCredit: "Codas / Wikimedia Commons / CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Gubei_Water_Town_27.jpg",
    featured: true,
  },
  {
    slug: "cuandixia-village",
    name: "爨底下村",
    englishName: "CUANDIXIA",
    region: "京西",
    district: "门头沟区",
    styles: ["古镇", "轻徒步"],
    tagline: "石阶、灰瓦和一座被群山收藏的古村",
    summary:
      "明清古村落依山而建，院院相连。适合从城市抽离半天，慢慢看建筑与山色。",
    description: [
      "爨底下村最动人的地方是它和山的关系。房屋沿着山坡铺开，石阶在门前转折，站在高处能看见整片灰瓦屋顶。",
      "村子不大，适合放慢脚步。可与周边山野路线组合成一日行程，但村内道路起伏，穿轻便鞋更合适。",
    ],
    distance: "约 90 km",
    driveTime: "市区出发约 2 小时",
    suggestedTime: "半天",
    bestSeason: "4–6 月、9–10 月",
    difficulty: "轻松",
    highlights: ["明清四合院", "山地村落格局", "摄影与写生"],
    tips: ["尊重村民生活空间", "山间天气变化快，备一件外套"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Cuandixia_Village.jpg/1920px-Cuandixia_Village.jpg",
    imageAlt: "群山环抱中的爨底下古村",
    imageCredit: "Wikimedia Commons / CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Cuandixia_Village.jpg",
    featured: true,
  },
  {
    slug: "shidu",
    name: "十渡",
    englishName: "SHIDU",
    region: "京西",
    district: "房山区",
    styles: ["山水", "亲子"],
    tagline: "沿拒马河向内，走进北方少见的喀斯特山水",
    summary:
      "河谷、峰林与户外项目组合丰富，可以从亲水漫步到更深入的峡谷探索。",
    description: [
      "十渡沿着拒马河铺开，是不需要高强度徒步也能亲近山水的一条线。河谷两侧山峰密集，水面与岩壁形成很有层次的景观。",
      "沿线项目较多，适合家庭按体力自由组合。若想避开集中客流，建议把重点放在清晨河谷或更靠里的渡口。",
    ],
    distance: "约 90 km",
    driveTime: "市区出发约 2 小时",
    suggestedTime: "1–2 天",
    bestSeason: "5–10 月",
    difficulty: "轻松",
    highlights: ["拒马河河谷", "喀斯特峰林", "亲水与户外"],
    tips: ["汛期听从景区安全指引", "周末车流较大，避开午后返程高峰"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Shidu%2C_Beijing_2018-08-19_122935.jpg/1920px-Shidu%2C_Beijing_2018-08-19_122935.jpg",
    imageAlt: "十渡拒马河与山体",
    imageCredit: "Wikimedia Commons / CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Shidu,_Beijing_2018-08-19_122935.jpg",
    featured: true,
  },
  {
    slug: "yanqi-lake",
    name: "雁栖湖",
    englishName: "YANQI",
    region: "京北",
    district: "怀柔区",
    styles: ["山水", "亲子"],
    tagline: "湖面开阔，环山线条把周末放得很慢",
    summary:
      "交通友好、环湖风景舒展，适合不赶路的一日轻出行，也便于和周边景点串联。",
    description: [
      "雁栖湖拥有北京近郊少见的开阔湖面。晴天时远山与湖水相互映照，傍晚的风则更适合沿湖散步。",
      "这里可以作为怀柔周末路线的起点，也可与红螺寺、慕田峪等目的地组合。具体开放区域和游船项目应以现场公告为准。",
    ],
    distance: "约 70 km",
    driveTime: "市区出发约 1.5 小时",
    suggestedTime: "半天",
    bestSeason: "4–10 月",
    difficulty: "轻松",
    highlights: ["环湖步道", "远山湖景", "怀柔串联路线"],
    tips: ["湖边风大，傍晚注意保暖", "骑行和游船以现场运营信息为准"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Southern_dam_of_Yanqi_Lake_%2820201027162905%29.jpg/1920px-Southern_dam_of_Yanqi_Lake_%2820201027162905%29.jpg",
    imageAlt: "雁栖湖南岸与远山",
    imageCredit: "N509FZ / Wikimedia Commons / CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Southern_dam_of_Yanqi_Lake_(20201027162905).jpg",
  },
  {
    slug: "jinhai-lake",
    name: "金海湖",
    englishName: "JINHAI",
    region: "京郊",
    district: "平谷区",
    styles: ["山水", "轻徒步"],
    tagline: "一湖三山，在京东留出一整天的呼吸感",
    summary:
      "平谷的山湖景观开阔，适合轻徒步、看水与秋日赏叶，周末节奏松弛。",
    description: [
      "金海湖位于平谷东部，湖面与山体共同构成开阔的视野。天气通透时，水色和云影让风景显得很轻盈。",
      "从城区出发路程略远，建议和周边目的地组成完整一日。若只想轻松散步，选择湖区周边成熟区域即可。",
    ],
    distance: "约 100 km",
    driveTime: "市区出发约 2 小时",
    suggestedTime: "半天至 1 天",
    bestSeason: "5–10 月",
    difficulty: "轻松",
    highlights: ["湖岛景观", "平谷山野", "秋季天色"],
    tips: ["提前确认开放区域", "出发前检查山区天气与路况"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Haizi_Reservoir_in_Pinggu_Beijing.jpg/1920px-Haizi_Reservoir_in_Pinggu_Beijing.jpg",
    imageAlt: "平谷山间水库与层叠山景",
    imageCredit: "Charlie fong / Wikimedia Commons / CC BY-SA 4.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Haizi_Reservoir_in_Pinggu_Beijing.jpg",
  },
  {
    slug: "longqing-gorge",
    name: "龙庆峡",
    englishName: "LONGQING",
    region: "京北",
    district: "延庆区",
    styles: ["山水"],
    tagline: "山壁夹着一湾水，走进延庆的清凉深处",
    summary:
      "峡谷与水面共同构成景观主线，是延庆避暑与看山的经典选择。",
    description: [
      "龙庆峡的山体紧凑，水面沿峡谷展开。乘船穿行时，视线会在岩壁与天空之间不断收束再打开。",
      "峡景区受季节与水位影响较大，前往前务必确认开放状态。若安排在冬季，也可关注周边冰雪活动，但不要默认景区全年运营方式相同。",
    ],
    distance: "约 85 km",
    driveTime: "市区出发约 1.8–2.2 小时",
    suggestedTime: "半天",
    bestSeason: "5–10 月",
    difficulty: "轻松",
    highlights: ["峡谷水景", "延庆山色", "夏季避暑"],
    tips: ["游船与开放区域以当日公告为准", "山区温差大，备好薄外套"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/L1030417.JPG/1920px-L1030417.JPG",
    imageAlt: "龙庆峡的山壁与水面",
    imageCredit: "Asadal / Wikimedia Commons / CC BY-SA 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:L1030417.JPG",
  },
  {
    slug: "jingdong-grand-canyon",
    name: "京东大峡谷",
    englishName: "JINGDONG",
    region: "京郊",
    district: "平谷区",
    styles: ["山水", "轻徒步"],
    tagline: "沿着山谷走，听见水声比脚步更近",
    summary:
      "峡谷步道与天然潭瀑是主要看点，适合想把周末交给绿意和溪流的人。",
    description: [
      "京东大峡谷的乐趣来自步行节奏。山谷道路时宽时窄，沿途能看到岩壁、潭水与林荫景色。",
      "这里并非纯休闲平地，建议至少穿一双抓地力好的运动鞋。雨后路面湿滑，是否适合前往要结合天气判断。",
    ],
    distance: "约 85 km",
    driveTime: "市区出发约 1.8–2.2 小时",
    suggestedTime: "半天",
    bestSeason: "5–10 月",
    difficulty: "适中",
    highlights: ["峡谷步道", "潭水与岩壁", "林荫清凉"],
    tips: ["雨后路面湿滑，谨慎前往", "轻徒步仍建议携带饮水"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Jingdongdaxiagu.JPG/1280px-Jingdongdaxiagu.JPG",
    imageAlt: "京东大峡谷的岩壁与峡谷",
    imageCredit: "高晶 / Wikimedia Commons / CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Jingdongdaxiagu.JPG",
  },
  {
    slug: "miaofeng-mountain",
    name: "妙峰山",
    englishName: "MIAOFENG",
    region: "京西",
    district: "门头沟区",
    styles: ["山水", "轻徒步"],
    tagline: "从城市西行，沿着山脊看更远的天际线",
    summary:
      "兼具山野风景与传统庙宇文化，适合轻量徒步、看山和感受京西山地气韵。",
    description: [
      "妙峰山位于门头沟，山路蜿蜒，登高后能看到京西群山层叠的轮廓。沿途既有自然山景，也有地方民俗文化留下的痕迹。",
      "公园内不同路线体力要求不一。初次前往应选择成熟步道，不进入未开放山路，并根据天气缩短或调整路线。",
    ],
    distance: "约 55 km",
    driveTime: "市区出发约 1.5 小时",
    suggestedTime: "半天",
    bestSeason: "4–6 月、9–10 月",
    difficulty: "适中",
    highlights: ["京西群山", "轻量徒步", "古刹与民俗"],
    tips: ["选择成熟路线，不冒险野爬", "天气不佳时不要强行登高"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/%E5%A6%99%E5%B3%B0%E5%B1%B1.JPG/1920px-%E5%A6%99%E5%B3%B0%E5%B1%B1.JPG",
    imageAlt: "妙峰山山景",
    imageCredit: "Shizhao / Wikimedia Commons / CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:%E5%A6%99%E5%B3%B0%E5%B1%B1.JPG",
  },
  {
    slug: "jinshanling-great-wall",
    name: "金山岭长城",
    englishName: "JINSHANLING",
    region: "环京",
    district: "承德市滦平县",
    styles: ["长城", "轻徒步"],
    tagline: "越过一段城墙，眼前是更辽远的燕山",
    summary:
      "位于承德滦平、与北京相接，城墙形态丰富，适合愿意多走一段的城郊周末。",
    description: [
      "金山岭以密集敌楼和起伏山势著称，视野比许多近郊城段更辽阔。它属于环京目的地，从北京出发需要预留更完整的一天。",
      "若计划徒步，应提前确认开放区间、接驳方式与返程时间。不要进入未开放城段，也不要单独尝试高难度野线。",
    ],
    distance: "约 130 km",
    driveTime: "市区出发约 2.5 小时",
    suggestedTime: "1 天",
    bestSeason: "4–5 月、9–10 月",
    difficulty: "进阶",
    highlights: ["密集敌楼", "燕山视野", "长城徒步"],
    tips: ["跨区域出行前确认开放与接驳信息", "只走开放路线并预留返程时间"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/1920px-20090529_Great_Wall_8185.jpg",
    imageAlt: "金山岭长城沿山脊延伸",
    imageCredit: "Jakub Hałun / Wikimedia Commons / CC BY-SA 3.0",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:20090529_Great_Wall_8185.jpg",
  },
];

export const trips: Trip[] = [
  {
    slug: "great-wall-lakeside",
    title: "长城与湖风",
    subtitle: "第一次京郊周末，就从一条不赶路的怀柔线开始",
    days: "2 天 1 晚",
    style: "长城",
    audience: "情侣 / 朋友",
    budget: "¥¥",
    destinationSlugs: ["mutianyu-great-wall", "yanqi-lake"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/The_Mutianyu_section_of_the_Great_Wall_of_China.jpg/1920px-The_Mutianyu_section_of_the_Great_Wall_of_China.jpg",
    imageAlt: "慕田峪长城与起伏群山",
    highlights: ["清晨上长城避开人潮", "雁栖湖看一场傍晚", "住进怀柔山脚民宿"],
    itinerary: [
      {
        time: "D1 · 07:30",
        title: "出发前往怀柔",
        description: "从市区早点出发，途中根据实时路况休息，给午前登城留出完整时间。",
      },
      {
        time: "D1 · 10:00",
        title: "慕田峪看山脊长城",
        description: "根据体力选择步行或缆车，重点走一段敌楼之间的城墙，不必追求全程。",
      },
      {
        time: "D1 · 17:00",
        title: "入住怀柔山脚",
        description: "把傍晚留给住宿周边，不把第二天的时间提前耗掉。",
      },
      {
        time: "D2 · 09:30",
        title: "雁栖湖慢行",
        description: "沿开放区域散步或短暂停留，午饭后从容返程。",
      },
    ],
    note: "景点开放区域、交通与活动运营会随季节调整，请在出发前查看官方信息。",
  },
  {
    slug: "water-town-weekend",
    title: "水镇留灯",
    subtitle: "住一晚，把古北的白天与夜色都看完",
    days: "2 天 1 晚",
    style: "古镇",
    audience: "家人 / 朋友",
    budget: "¥¥¥",
    destinationSlugs: ["gubei-water-town"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gubei_Water_Town_27.jpg/1280px-Gubei_Water_Town_27.jpg",
    imageAlt: "暮色中的古北水镇与远山长城灯带",
    highlights: ["住一晚感受清晨与夜晚", "长城脚下的灯光", "适合轻松慢逛"],
    itinerary: [
      {
        time: "D1 · 10:00",
        title: "抵达古北水镇",
        description: "先寄存行李再开始逛，避开午后集中人流。",
      },
      {
        time: "D1 · 17:30",
        title: "水镇黄昏",
        description: "在灯亮前找到喜欢的街巷与桥边，慢慢度过一天里最舒服的时段。",
      },
      {
        time: "D2 · 08:00",
        title: "清晨散步",
        description: "早起走一段安静的街巷，再吃早饭、收拾行李返程。",
      },
    ],
    note: "住宿价格与景区活动以预订页面和当天公告为准，本页不提供实际订房。",
  },
  {
    slug: "western-hills-day",
    title: "京西一日",
    subtitle: "石阶古村和山谷，把周末过成一段慢镜头",
    days: "1 天",
    style: "古镇",
    audience: "摄影 / 自驾",
    budget: "¥",
    destinationSlugs: ["cuandixia-village", "miaofeng-mountain"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Cuandixia_Village.jpg/1920px-Cuandixia_Village.jpg",
    imageAlt: "爨底下村依山而建的屋舍",
    highlights: ["古村摄影", "京西山地公路", "一日轻徒步"],
    itinerary: [
      {
        time: "08:00",
        title: "从城区向西出发",
        description: "优先把上午留给山路，减少午后回程的疲惫。",
      },
      {
        time: "10:30",
        title: "爨底下古村",
        description: "从高处看古村全貌，再沿石阶慢慢走入院巷。",
      },
      {
        time: "14:30",
        title: "妙峰山轻徒步",
        description: "根据体力选择成熟路线，不强求登顶，天气不佳时缩短行程。",
      },
    ],
    note: "山区道路弯多，请根据当天天气、驾驶经验和实时路况决定是否出行。",
  },
];

export const guides: Guide[] = [
  {
    slug: "weekend-planning",
    category: "出发前",
    title: "北京周边周末出行，怎样不被路程偷走半天",
    excerpt:
      "先看单程时间，再看景点数量。真正好用的京郊路线，通常只围绕一个核心体验展开。",
    readTime: "6 分钟",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Southern_dam_of_Yanqi_Lake_%2820201027162905%29.jpg/1920px-Southern_dam_of_Yanqi_Lake_%2820201027162905%29.jpg",
    imageAlt: "雁栖湖与远山",
    sections: [
      {
        heading: "先定什么时候回城",
        paragraphs: [
          "京郊旅行最容易忽略的是返程。周日下午，热门路线可能出现集中返京车流。先把返程时间确定，再倒推目的地数量和停留时长，通常比把行程排满更有效。",
        ],
      },
      {
        heading: "一日只保留一个主目的地",
        paragraphs: [
          "如果单程接近两小时，一日往返更适合安排一个核心目的地和一段顺路停留。把三个需要深度体验的景点塞进一天，最后往往只是在不同停车场之间移动。",
        ],
      },
      {
        heading: "把天气当作行程的一部分",
        paragraphs: [
          "山区天气、道路条件与景区开放状态都可能临时变化。出发前查看官方公告与预报，准备可缩短的备选方案，比硬按计划走更安全。",
        ],
      },
    ],
  },
  {
    slug: "family-trip",
    category: "亲子",
    title: "带孩子去京郊，先选轻松的那一条",
    excerpt:
      "少换目的地、留足休息和吃饭时间，比多打卡一个景点更值得。",
    readTime: "5 分钟",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Shidu%2C_Beijing_2018-08-19_122935.jpg/1920px-Shidu%2C_Beijing_2018-08-19_122935.jpg",
    imageAlt: "十渡河谷山水",
    sections: [
      {
        heading: "先看车程是否可接受",
        paragraphs: [
          "对孩子而言，两小时以上的连续车程往往比景点本身更消耗精力。可以从雁栖湖、十渡等交通相对友好的区域开始，把一次出行控制在半天到一天。",
        ],
      },
      {
        heading: "把活动难度降一档",
        paragraphs: [
          "成熟的环湖步道、平缓的古村街巷通常比高强度登山更适合家庭。涉及水域或户外项目时，务必遵守现场安全规定，并选择适合孩子年龄的体验。",
        ],
      },
      {
        heading: "行程里留出空白",
        paragraphs: [
          "孩子的节奏不可预测。不要安排固定的午餐地点和紧接着的下一站，留出半小时到一小时的机动时间，整趟旅程会更轻松。",
        ],
      },
    ],
  },
  {
    slug: "packing-list",
    category: "实用清单",
    title: "一天往返怎么穿、怎么带：京郊轻装清单",
    excerpt:
      "山路、早晚温差与紫外线是三项优先变量，衣服不需要多，抓地和保暖更重要。",
    readTime: "4 分钟",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/%E5%A6%99%E5%B3%B0%E5%B1%B1.JPG/1920px-%E5%A6%99%E5%B3%B0%E5%B1%B1.JPG",
    imageAlt: "妙峰山山景",
    sections: [
      {
        heading: "鞋比衣服更重要",
        paragraphs: [
          "城郊的古镇、长城和峡谷常有石阶与坡面。优先选择有抓地力、已经穿合脚的鞋，而不是临时穿新鞋出发。",
        ],
      },
      {
        heading: "三层轻量穿衣",
        paragraphs: [
          "山区早晚温差明显。基础层排汗、外层防风，再带一件可收纳的保暖层，通常能应对大多数一日出行。",
        ],
      },
      {
        heading: "基础补给",
        paragraphs: [
          "水、少量高热量食物、充电宝、防晒用品与常用药物足够覆盖大多数一日路线。若要徒步，再根据线路长度增加饮水和照明装备。",
        ],
      },
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getTrip(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
