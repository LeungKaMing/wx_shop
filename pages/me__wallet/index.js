Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailsImg: '../../assets/images/wallet/details.png',
    withdrawImg: '../../assets/images/wallet/withdraw.png',
    arrowImg: '../../assets/images/goTo.png'
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
  },
  goToSelf () {
    wx.navigateTo({
      url: '../me__details/index?id=1'
    })
  },
  goTo (e) {
    const id = e.currentTarget.dataset.id
    console.log(id, '<<<<<<<<<<<<<<<')
  }
})
