Page({
  /**
   * 页面的初始数据
   */
  data: {
    // logo: '../../assets/images/youshu_logo.png',
    // searchLogo: '../../assets/images/search_logo.png',
    // filterLogo: '../../assets/images/filter_logo.png',
    bookDetails: {
        level: '💎💎💎💎💎',
        picList: ['../../assets/images/1.png', '../../assets/images/2.png', '../../assets/images/3.png', '../../assets/images/4.png', '../../assets/images/5.png', '../../assets/images/6.png', '../../assets/images/7.png', '../../assets/images/8.png', '../../assets/images/9.png', ],
        desc: '《无限》（精装版）',
        comment: '71',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '乔纳森',
        gender: 'male',
        tag: 'vip',
        time: '30秒前',
        publishDate: '2017-11-12 12:20:21',
        location: '广州',
        nowPrize: '21',
        prePrize: '59'
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('前面页面带过来的id：', options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)
  }
})
