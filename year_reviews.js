// Year Reviews Data & Logic - injected into template.html

const YEAR_REVIEWS = {
  1958: {
    subtitle: "电子游戏的第一缕曙光",
    sections: [
      {title:"🎮 开创性时刻",content:"<p>1958年10月18日，物理学家<strong>威廉·希金博特姆</strong>在美国布鲁克海文国家实验室公开展示了<strong>Tennis for Two</strong>——一个用示波器和模拟计算机运行的网球游戏。这被广泛认为是人类历史上最早的电子游戏之一。</p><p>虽然它只是实验室开放日的一个展示项目，从未商业化，但它证明了一个革命性的概念：<em>计算机可以用来娱乐</em>。</p>"},
      {title:"🔬 科技背景",content:"<p>1958年正值冷战高峰期，计算机主要服务于军事和科研。同年，<strong>NASA成立</strong>，美国正式开启太空竞赛。<strong>集成电路</strong>（IC）刚被发明，为后来的电子游戏硬件奠定了基础。</p>"},
      {title:"📊 历史意义",content:"<p>Tennis for Two证明了交互式电子娱乐的可能性。从这一刻起，一个价值数千亿美元的产业开始萌芽。不过，真正的商业化还要等到14年后的Pong。</p>"}
    ]
  },
  1972: {
    subtitle: "商业游戏元年——Pong与雅达利",
    sections: [
      {title:"🎮 关键事件",content:"<p>1972年是电子游戏商业化的元年：</p><ul><li><strong>6月：雅达利成立</strong>——诺兰·布什内尔和特德·达布尼创立了这家改变世界的公司</li><li><strong>9月：Magnavox Odyssey发售</strong>——世界上第一款家用电子游戏机，由拉尔夫·贝尔设计</li><li><strong>11月：Pong上市</strong>——雅达利的街机游戏大获成功，酒吧里排着长队等着玩</li></ul>"},
      {title:"🔬 科技背景",content:"<p>1972年，<strong>Intel推出8008处理器</strong>，个人计算机时代即将来临。<strong>阿波罗17号</strong>完成了人类最后一次登月任务。HP推出了第一款科学计算器。</p>"},
      {title:"📊 历史意义",content:"<p>Pong的成功证明了电子游戏的商业价值。雅达利从一个车库起步，迅速成长为科技巨头。Magnavox Odyssey虽然销量平平，却开创了家用游戏机的概念——这个概念将在未来50年持续塑造整个行业。</p>"}
    ]
  },
  1977: {
    subtitle: "家用主机时代真正开启",
    sections: [
      {title:"🎮 年度焦点",content:"<p><strong>Atari 2600</strong>（原名Atari VCS）于9月发售，首次采用可更换卡带设计，让玩家不再被锁定在固定游戏上。这款主机最终全球售出超过3000万台，定义了第二世代主机。</p>"},
      {title:"🔬 科技背景",content:"<p>1977年同样是个人电脑的重要年份：<strong>Apple II</strong>、<strong>Commodore PET</strong>和<strong>TRS-80</strong>同年发售，被称为「1977年三剑客」。<strong>星球大战</strong>上映，科幻文化迎来爆发。</p>"},
      {title:"📊 历史意义",content:"<p>Atari 2600的卡带模式成为行业标准，催生了第三方游戏开发商（如Activision的诞生）。但这种开放的生态也为1983年的大崩溃埋下了隐患——任何人都可以为2600开发游戏，质量参差不齐。</p>"}
    ]
  },
  1983: {
    subtitle: "雅达利大崩溃——游戏业的至暗时刻",
    sections: [
      {title:"🎮 大崩溃",content:"<p>北美电子游戏市场在1983年<strong>崩盘</strong>，产业规模从32亿美元暴跌至1985年的1亿美元——<strong>缩水97%</strong>。</p><p>导火索包括：</p><ul><li>《E.T.外星人》的灾难性口碑——数百万卡带被填埋在新墨西哥沙漠</li><li>市场上充斥着低质量游戏，消费者信心崩溃</li><li>个人电脑（C64等）价格下降，分流了游戏用户</li></ul>"},
      {title:"🕹️ 任天堂崛起",content:"<p>就在北美市场一片废墟之际，<strong>任天堂</strong>于7月15日在日本推出了<strong>Family Computer（FC/红白机）</strong>。首发价14800日元，首年销量突破250万台。</p><p>任天堂证明了：只要游戏品质够高，市场就永远存在。FC的严格质控体系（「任天堂品质认证」）成为行业标准。</p>"},
      {title:"🔬 科技背景",content:"<p>1983年，<strong>互联网从ARPANET正式转向TCP/IP协议</strong>，现代互联网诞生。微软发布了Word 1.0。CD光盘开始商用。</p>"},
      {title:"📊 历史意义",content:"<p>雅达利大崩溃是游戏史上最重要的转折点之一。它清洗了劣质产品，为任天堂「品质至上」的理念铺平了道路。没有这次崩溃，就没有后来任天堂主导的游戏业复兴，也就不会有我们今天的游戏行业。</p>"}
    ]
  },
  1985: {
    subtitle: "超级马力欧拯救世界",
    sections: [
      {title:"🎮 年度之作",content:"<p><strong>《超级马力欧兄弟》</strong>于9月13日随NES在北美发售，成为游戏史上最重要的作品之一。宫本茂设计的关卡至今仍是教科书级别的范例。</p><p>这款游戏几乎凭一己之力让北美消费者重新相信电子游戏。NES最终在北美售出超过3400万台。</p>"},
      {title:"🔬 科技背景",content:"<p>1985年，<strong>微软推出Windows 1.0</strong>，虽然初版简陋，但开启了图形化操作系统的时代。<strong>乔布斯离开苹果</strong>创立了NeXT。任天堂的成功让日本电子游戏产业走向全球舞台。</p>"},
      {title:"📊 历史意义",content:"<p>如果说1983年是游戏业的至暗时刻，1985年就是黎明。任天堂不仅复活了主机市场，还建立了沿用至今的行业规则：平台许可制、品质认证、第一方与第三方分工。马力欧成为全球最知名的游戏角色。</p>"}
    ]
  },
  1994: {
    subtitle: "2D游戏的黄金巅峰",
    sections: [
      {title:"🎮 神作井喷",content:"<p>1994年可能是2D游戏最辉煌的一年：</p><ul><li><strong>《超级银河战士》</strong>（3月）——银河城类型的奠基之作</li><li><strong>《最终幻想VI》</strong>（4月）——被誉为2D RPG的最高杰作</li><li><strong>PlayStation发售</strong>（12月，日本）——3D时代的号角</li></ul><p>讽刺的是，2D游戏在达到巅峰的同一年，被3D的浪潮取代。</p>"},
      {title:"🔬 科技背景",content:"<p>1994年，<strong>网景浏览器发布</strong>，互联网走向大众。Amazon和Yahoo!同年创立。PlayStation采用CD-ROM而非卡带，存储革命开始。</p>"},
      {title:"📊 历史意义",content:"<p>1994年是2D游戏的天鹅之歌，也是3D时代的破晓。PlayStation的发售标志着索尼正式加入主机大战，打破了任天堂和世嘉的双雄格局，开创了三足鼎立的新时代。</p>"}
    ]
  },
  1996: {
    subtitle: "3D革命——游戏进入新维度",
    sections: [
      {title:"🎮 3D开天辟地",content:"<p>1996年是游戏从2D跨入3D的关键年：</p><ul><li><strong>《宝可梦 红/绿》</strong>（2月）——Game Boy上诞生的文化现象</li><li><strong>Nintendo 64发售</strong>（6月）——与《超级马力欧64》同步发售</li><li><strong>《超级马力欧64》</strong>——定义了3D平台游戏的标准操作方式</li><li><strong>《生化危机》</strong>（3月）——生存恐怖类型的开创者</li><li><strong>《雷神之锤》</strong>（6月）——真3D FPS先驱，推动电竞文化</li><li><strong>《最终幻想VII》</strong>（日本，12月）——JRPG走向全球的里程碑</li></ul>"},
      {title:"🔬 科技背景",content:"<p>1996年，<strong>DVD标准正式确立</strong>。<strong>ICQ</strong>即时通讯上线。Palm Pilot发售，开启了掌上电脑时代。3D图形加速卡（Voodoo）开始普及。</p>"},
      {title:"📊 历史意义",content:"<p>1996年可以说是游戏史上最重要的年份之一。马力欧64证明了3D游戏可以和2D一样好玩，宝可梦开创了一个超越游戏的文化帝国，FF7让全世界接受了JRPG。这一年奠定了此后二十年游戏设计的基本范式。</p>"}
    ]
  },
  1998: {
    subtitle: "RPG黄金年——无与伦比的1998",
    sections: [
      {title:"🎮 封神之年",content:"<p>1998年被广泛认为是游戏史上最伟大的一年之一：</p><ul><li><strong>《生化危机2》</strong>（1月）——恐怖游戏的巅峰</li><li><strong>《星际争霸》</strong>（3月）——RTS之王，韩国电竞的起点</li><li><strong>《合金装备》</strong>（9月）——小岛秀夫的电影化叙事革命</li><li><strong>《塞尔达传说：时之笛》</strong>（11月）——被无数评选列为史上最佳游戏</li><li><strong>《半条命》</strong>（11月）——重新定义FPS叙事</li></ul><p>世嘉Dreamcast在日本率先开启第六世代。</p>"},
      {title:"🔬 科技背景",content:"<p><strong>Google成立</strong>（9月）。iMac G3发售，苹果开始复兴。MP3音乐格式开始流行。Windows 98发布。</p>"},
      {title:"📊 历史意义",content:"<p>1998年的游戏质量密度可能至今无人超越。这一年诞生的作品中，多部至今仍位列「史上最伟大游戏」的榜首位置。时之笛定义了3D动作冒险，半条命定义了叙事FPS，星际争霸定义了竞技RTS。</p>"}
    ]
  },
  2001: {
    subtitle: "新世代——Xbox入局，三国争霸",
    sections: [
      {title:"🎮 主机新格局",content:"<p>2001年主机市场迎来巨变：</p><ul><li><strong>Xbox发售</strong>（11月）——微软携《光环》强势入局</li><li><strong>《光环：战斗进化》</strong>——定义了主机FPS的标杆</li><li><strong>《合金装备2》</strong>（11月）——后现代叙事的大胆实验</li><li><strong>《ICO》</strong>（12月）——游戏作为艺术的证明</li><li><strong>《最终幻想X》</strong>（7月）——首款全语音FF</li></ul><p>世嘉宣布退出硬件市场，Dreamcast成为绝唱。</p>"},
      {title:"🔬 科技背景",content:"<p>2001年：<strong>iPod发布</strong>，改变音乐产业。<strong>维基百科上线</strong>。9/11事件深刻改变了世界格局。Xbox Live的联网理念预示了游戏的在线未来。</p>"},
      {title:"📊 历史意义",content:"<p>微软的加入让主机大战从「任天堂vs索尼」变成了三足鼎立。世嘉的退出令人唏嘘，但也说明主机市场的竞争已经进入资本密集型阶段。光环证明了FPS在主机上可以比PC更受欢迎。</p>"}
    ]
  },
  2004: {
    subtitle: "网游时代与FPS革命",
    sections: [
      {title:"🎮 改变规则的一年",content:"<ul><li><strong>《魔兽世界》</strong>（11月）——MMORPG之王，巅峰1200万订阅用户</li><li><strong>《半条命2》</strong>（11月）——物理引擎革命，顺带推广了Steam</li><li><strong>《GTA：圣安地列斯》</strong>（10月）——开放世界的极致</li><li><strong>《光环2》</strong>（11月）——Xbox Live黄金时代</li><li><strong>Nintendo DS发售</strong>——双屏触控，开辟新市场</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>Facebook成立</strong>（2月）。Gmail发布。Firefox浏览器推出。社交网络时代开始。宽带互联网在欧美普及，为网游爆发铺路。</p>"},
      {title:"📊 历史意义",content:"<p>魔兽世界的成功让整个行业看到了「游戏即服务」的潜力——玩家不再买断，而是持续付费。半条命2强制绑定Steam的争议策略，在15年后被证明是天才之举：Steam成为PC游戏最大的分发平台。</p>"}
    ]
  },
  2006: {
    subtitle: "体感革命——Wii改变游戏定义",
    sections: [
      {title:"🎮 三雄争霸",content:"<ul><li><strong>PlayStation 3发售</strong>（11月）——蓝光+Cell处理器，价格争议</li><li><strong>Nintendo Wii发售</strong>（11月）——体感操控席卷全球</li><li><strong>《Wii运动》</strong>——让你奶奶也拿起了手柄</li><li><strong>《上古卷轴IV：湮灭》</strong>（3月）——开放世界RPG新标杆</li><li><strong>《塞尔达传说：黄昏公主》</strong>（11月）——Wii首发护航大作</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>Twitter成立</strong>。<strong>Google收购YouTube</strong>。任天堂用创意而非机能赢得了这一世代——Wii的硬件远弱于PS3和Xbox 360，但全球销量超过1亿台。</p>"},
      {title:"📊 历史意义",content:"<p>Wii证明了游戏不一定要追求画面极致，好的创意和交互方式同样能征服市场。这个理念深刻影响了后来的Switch。PS3高昂的价格（599美元）成为经典教训。</p>"}
    ]
  },
  2007: {
    subtitle: "现代游戏元年",
    sections: [
      {title:"🎮 改变一切的一年",content:"<ul><li><strong>《生化奇兵》</strong>（8月）——叙事与世界观的巅峰</li><li><strong>《光环3》</strong>（9月）——Xbox 360最大的系统卖</li><li><strong>《使命召唤4：现代战争》</strong>（11月）——重新定义多人FPS</li><li><strong>《传送门》</strong>（10月）——最具创意的解谜FPS</li><li><strong>《质量效应》</strong>（11月）——选择驱动叙事的新标杆</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>iPhone发布</strong>（1月发布会，6月上市）——智能手机时代开启，后来催生了手游市场。Kindle发布，数字内容分发加速。</p>"},
      {title:"📊 历史意义",content:"<p>2007年是现代游戏的元年。COD4的多人模式定义了此后十年FPS的模板，iPhone最终催生了数十亿美元的手游产业。这一年发售的游戏，每一款都在各自领域留下了不可磨灭的印记。</p>"}
    ]
  },
  2011: {
    subtitle: "魂系列崛起与开放世界新篇",
    sections: [
      {title:"🎮 经典频出",content:"<ul><li><strong>《黑暗之魂》</strong>（9月）——「魂系列」定义了一整个游戏子类型</li><li><strong>《上古卷轴5：天际》</strong>（11月）——开放世界RPG的新王者</li><li><strong>《我的世界》正式版</strong>（11月）——沙盒游戏的巅峰，至今全球销量超3亿</li><li><strong>《传送门2》</strong>（4月）——Valve最后的杰作之一</li><li><strong>Twitch上线</strong>（6月）——游戏直播时代开启</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>乔布斯去世</strong>（10月）。<strong>IBM Watson赢得Jeopardy!</strong>——AI的早期惊艳。Siri随iPhone 4S发布。4G LTE开始普及。</p>"},
      {title:"📊 历史意义",content:"<p>黑暗之魂开创的高难度公式影响了此后十年的无数游戏。天际让「开放世界RPG」成为主流追求。Minecraft正式版发布后成为游戏史上销量冠军。Twitch则改变了人们消费游戏内容的方式——看别人玩游戏也可以是一种娱乐。</p>"}
    ]
  },
  2013: {
    subtitle: "次世代前夜——最后生还者封神",
    sections: [
      {title:"🎮 世代交替",content:"<ul><li><strong>《最后生还者》</strong>（6月）——PS3时代的完美句号</li><li><strong>《GTA5》</strong>（9月）——R星又一次创造历史</li><li><strong>《生化奇兵：无限》</strong>（3月）——天空之城Columbia</li><li><strong>PS4发售</strong>（11月）——索尼吸取PS3教训，以玩家为先</li><li><strong>Xbox One发售</strong>（11月）——「always online」的争议</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>斯诺登事件</strong>。4K电视开始商用。PS4和Xbox One都采用x86架构，向PC靠拢。</p>"},
      {title:"📊 历史意义",content:"<p>最后生还者证明了游戏可以像电影一样讲出催人泪下的故事。GTA5成为娱乐产品史上最赚钱的作品。PS4的成功和Xbox One的失误奠定了索尼在第八世代的统治地位。</p>"}
    ]
  },
  2017: {
    subtitle: "Switch与旷野之息——任天堂的完美逆袭",
    sections: [
      {title:"🎮 任天堂之年",content:"<ul><li><strong>Nintendo Switch发售</strong>（3月）——混合型主机概念大获成功</li><li><strong>《塞尔达传说：旷野之息》</strong>（3月）——重新定义开放世界</li><li><strong>《尼尔：自动人形》</strong>（2月）——横尾太郎的哲学杰作</li><li><strong>《空洞骑士》</strong>（2月）——银河城的新标杆</li><li><strong>《地平线：零之曙光》</strong>（2月）——机械恐龙的末世冒险</li><li><strong>Xbox Game Pass上线</strong>（6月）——游戏订阅模式</li><li><strong>PUBG大火</strong>（12月正式版）——大逃杀品类爆发</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>比特币突破1万美元</strong>。<strong>AlphaGo击败柯洁</strong>。iPhone X发布（Face ID、全面屏）。Switch证明了便携性和家用体验可以完美统一。</p>"},
      {title:"📊 历史意义",content:"<p>Wii U的惨败之后，Switch的成功证明了任天堂的核心竞争力从来不是机能，而是创意。旷野之息让所有开放世界游戏重新思考「自由」的含义。Game Pass则开启了游戏行业的「Netflix化」探索。</p>"}
    ]
  },
  2020: {
    subtitle: "疫情与次世代——游戏成为全民刚需",
    sections: [
      {title:"🎮 疫情中的游戏业",content:"<ul><li><strong>《动物森友会》</strong>（3月）——疫情中的精神避风港，Switch断货</li><li><strong>PlayStation 5发售</strong>（11月）——次世代来临</li><li><strong>Xbox Series X|S发售</strong>（11月）——Game Pass成为核心卖点</li><li><strong>《赛博朋克2077》</strong>（12月）——巨大期望与灾难发售</li><li><strong>《最后生还者 Part II》</strong>（6月）——大胆叙事引发空前争议</li><li><strong>《对马岛之魂》</strong>（7月）——开放世界的优雅</li><li><strong>《哈迪斯》</strong>（9月）——Roguelike叙事的完美典范</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>COVID-19全球大流行</strong>，居家令推动游戏行业收入暴增至1800亿美元。<strong>5G商用</strong>。光线追踪成为次世代标配。数字游戏销售首次全面超越实体。</p>"},
      {title:"📊 历史意义",content:"<p>疫情让全世界发现游戏不只是娱乐，更是社交和心理慰藉。动物森友会成为文化现象。赛博朋克2077的翻车则成为行业过度炒作的反面教材（虽然后来靠更新挽回了口碑）。次世代主机的抢购热潮和芯片短缺让供应链问题成为新常态。</p>"}
    ]
  },
  2022: {
    subtitle: "艾尔登法环——开放世界的新定义",
    sections: [
      {title:"🎮 法环之年",content:"<ul><li><strong>《艾尔登法环》</strong>（2月）——宫崎英高×宫崎骏（误）×乔治·R·R·马丁，年度游戏大满贯</li><li><strong>微软收购动视暴雪</strong>（1月宣布，10月完成）——687亿美元，游戏史上最大收购</li><li><strong>索尼收购Bungie</strong>（1月）——36亿美元</li><li><strong>《异度神剑3》《战神：诸神黄昏》</strong>等大作</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>ChatGPT发布</strong>（11月）——AI大语言模型引爆全球关注。<strong>稳定扩散</strong>（Stable Diffusion）开源。Steam Deck发售，掌机复兴。</p>"},
      {title:"📊 历史意义",content:"<p>艾尔登法环证明了「魂系列」的公式可以完美适配开放世界，全球销量突破2500万。微软收购动视暴雪重塑了行业版图。年底ChatGPT的发布则预示着AI将深刻改变游戏开发流程。</p>"}
    ]
  },
  2023: {
    subtitle: "博德之门3——CRPG的文艺复兴",
    sections: [
      {title:"🎮 独立与3A齐飞",content:"<ul><li><strong>《博德之门3》</strong>（8月）——Larian Studios的D&D史诗，年度游戏大满贯</li><li><strong>《塞尔达传说：王国之泪》</strong>（5月）——旷野之息的完美续章</li><li><strong>E3正式取消</strong>（5月宣布）——一个时代的终结</li></ul>"},
      {title:"🔬 科技背景",content:"<p><strong>GPT-4发布</strong>。AI生成内容（AIGC）席卷创意行业。游戏工作室开始探索AI辅助开发。Vision Pro发布，空间计算概念兴起。</p>"},
      {title:"📊 历史意义",content:"<p>博德之门3用「不妥协」的设计理念赢得了全世界的心——它证明了尊重玩家智商的游戏依然可以大卖。E3的取消标志着游戏展会模式的彻底转型，线上直面会成为新常态。</p>"}
    ]
  },
  2025: {
    subtitle: "Switch 2与新世代展望",
    sections: [
      {title:"🎮 新主机新时代",content:"<ul><li><strong>Nintendo Switch 2发售</strong>（6月）——449.99美元，任天堂下一代混合主机</li><li><strong>《刺客信条：影》</strong>（3月）——日本封建时代的开放世界冒险</li><li><strong>《红色沙漠》</strong>（11月）——Pearl Abyss的开放世界大作</li><li><strong>《死亡搁浅2：冥滩之上》</strong>（6月）——小岛秀夫续作</li></ul>"},
      {title:"🔬 科技背景",content:"<p>AI Agent技术爆发。NVIDIA GPU性能持续飙升。云游戏逐渐成熟。游戏开发中AI辅助美术和QA测试已成常态。</p>"},
      {title:"📊 历史意义",content:"<p>Switch 2延续了混合主机的理念，任天堂继续走「创意优先」路线。游戏行业在经历2024年的大规模裁员潮后，开始重新审视增长模式和成本控制。</p>"}
    ]
  },
  2026: {
    subtitle: "GTA VI之年——最被期待的游戏",
    sections: [
      {title:"🎮 万众瞩目",content:"<ul><li><strong>《GTA VI》</strong>（11月19日）——R星十年磨一剑，可能是游戏史上最被期待的作品</li><li><strong>《生化危机：安魂曲》</strong>（2月）——卡普空生化系列第九部正统续作</li><li><strong>《死亡搁浅2》PC版</strong>（3月）——小岛秀夫续作登陆PC</li></ul>"},
      {title:"🔬 科技背景",content:"<p>AI在游戏开发中的应用进入深水区——NPC对话生成、程序化内容、AI测试等已成为行业标配。</p>"},
      {title:"📊 历史意义",content:"<p>GTA VI的发售将是2026年最大的游戏事件。从GTA V到GTA VI跨越了13年，这期间游戏行业发生了翻天覆地的变化。R星将如何回应这些年来的技术与设计进步，全世界都在关注。</p>"}
    ]
  }
};
