const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx9fc9fdb36cc3c542",

  // 微信公众号的appsecret
  APP_SECRET: "f2e9aab9a52d91853abf0d02df020496",

  // 微信公众号的模板ID
  TEMPLATE_ID: "QWlvUYrj1E-_afak6EcgPCaFSdqjZmBDJUOsJ4ZwGH0",

  // 天行API的key
  TXApiKey: "028e8c65f21523e1d5825be315e14c17",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小红红",
      // 用户列表的`微信号`
      userId: "11",
      // 星座
      star: "双子座",
      // 生日 - 格式：08-22
      birthday: "07-05",
      // 城市 - 格式：支持省市县区
      city: "黑龙江省哈尔滨市",
    },
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小灰灰",
      // 用户列表的`微信号`
      userId: "oWTxF6vITqNTdaTom8o1UkUuMBkg",
      // 星座
      star: "射手座",
      // 生日 - 格式：08-22
      birthday: "12-013",
      // 城市 - 格式：支持省市县区
      city: "黑龙江省哈尔滨市",
    }
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2022-08-04",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: false,
    // 彩虹屁
    caiHongPi: false,
  },
};

module.exports = {
  CONFIG,
};
