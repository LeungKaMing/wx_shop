Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: 'http://upload.shunwang.com/2014/0616/1402910054433.png',
    aboutMe: {
      avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
      name: '乔纳森',
      gender: 'male',
      tag: 'vip',
      time: '30秒前',
      location: '广州'
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
