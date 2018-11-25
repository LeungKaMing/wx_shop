// pages/message__chat/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageChatTitle: '铭哥',
    goodName: '时间简史',
    goodPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
    goodPrice: '21',
    goodDesc: '二手书',
    messageList: [
      {
        time: '2018-11-11 22:22:34',
        userName: '铭哥',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '在么？',
        messageState: true,
        userClass: 'left'
      },
      {
        time: '2018-11-11 22:22:45',
        userName: '我',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '在啊！',
        messageState: true,
        userClass: 'right'
      },
      {
        time: '2018-11-11 22:22:45',
        userName: '我',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！吃没有吃饭！',
        messageState: true,
        userClass: 'right'
      },
      {
        time: '2018-11-11 22:23:34',
        userName: '铭哥',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '在干嘛？',
        messageState: true,
        userClass: 'left'
      },
      {
        time: '2018-11-11 22:23:34',
        userName: '铭哥',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多',
        messageState: true,
        userClass: 'left'
      },
      {
        time: '2018-11-11 22:23:34',
        userName: '铭哥',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多',
        messageState: true,
        userClass: 'left'
      },
      {
        time: '2018-11-11 22:23:34',
        userName: '铭哥',
        userPhoto: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        userMessage: '说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多说了那么多',
        messageState: true,
        userClass: 'left'
      }
    ]
  },
  checkEvaluate: function (e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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