Page({
  /**
   * 页面的初始数据
   */
  data: {
    perList: [
      {
        id: 1,
        img: '../../assets/images/send.png',
        name: '我的发布'
      },
      {
        id: 2,
        img: '../../assets/images/download.png',
        name: '已下架'
      },
      {
        id: 3,
        img: '../../assets/images/order.png',
        name: '我的订单'
      },
      {
        id: 4,
        img: '../../assets/images/vip.png',
        name: '我的会员'
      },
      {
        id: 5,
        img: '../../assets/images/wallet.png',
        name: '我的钱包'
      },
      {
        id: 6,
        img: '../../assets/images/collect.png',
        name: '我的收藏'
      },
      {
        id: 7,
        img: '../../assets/images/addr.png',
        name: '我的地址'
      },
      {
        id: 8,
        img: '../../assets/images/settings.png',
        name: '设置'
      }
    ],
    arrowImg: '../../assets/images/goTo.png',
    bookDetails: {
      avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
      name: '乔纳森',
      gender: 'male',
      tag: 'vip',
      time: '30秒前'
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
  },
  goToSelf () {
    wx.navigateTo({
      url: '../me__details/index?id=1'
    })
  },
  goTo (e) {
    const id = Number(e.currentTarget.dataset.id)
    switch (id) {
      case 1:
        wx.navigateTo({
          url: '../me__publish/index'
        })
        break
      case 2:
        wx.navigateTo({
          url: '../me__sellout/index'
        })
        break
      case 3:
        wx.navigateTo({
          url: '../me__paybill/index'
        })
        break
      case 4:
        wx.navigateTo({
          url: '../me__vip/index'
        })
        break
      case 5:
        wx.navigateTo({
          url: '../me__wallet/index'
        })
        break
      case 6:
        wx.navigateTo({
          url: '../me__collect/index'
        })
        break
      case 7:
        wx.navigateTo({
          url: '../me__addr/index'
        })
        break
      case 8:
        wx.navigateTo({
          url: '../me__settings/index'
        })
        break
    }
  }
})
