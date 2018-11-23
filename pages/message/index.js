// pages/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageTitle: '消息中心',
    messageList: [
      {
        preview: '喜欢就下单吧就下单吧就下单吧就下就下吧就下就下吧就下就下吧就下就下吧就下就下单吧',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '铭哥',
        id: 1,
        icon: true,
        time: '2018-11-11 11:11:11',
        location: '广州'
      },
      {
        preview: '喜欢就下单吧',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '铭哥',
        id: 2,
        icon: true,
        time: '2018-11-11 11:11:11',
        location: '广州'
      },
      {
        preview: '喜欢就下单吧',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '铭哥3号',
        id: 3,
        icon: true,
        time: '2018-11-11 11:11:11',
        location: '广州'
      }
      ]
  },
  goTo(e) {
    console.log(e.currentTarget.dataset.id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})