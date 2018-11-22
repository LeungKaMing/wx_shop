Page({
  /**
   * 页面的初始数据
   */
  data: {
    vipList: [
      {
        icon: '../../assets/images/vip/common.png',
        text: '普通会员8元'
      },
      {
        icon: '../../assets/images/vip/siliver.png',
        text: '白银会员12元'
      },
      {
        icon: '../../assets/images/vip/golden.png',
        text: '黄金会员18元'
      },
      {
        icon: '../../assets/images/vip/purple.png',
        text: '紫金会员28元'
      },
      {
        icon: '../../assets/images/vip/diamond.png',
        text: '黑钻会员48元'
      },
      {
        icon: '../../assets/images/vip/king.png',
        text: '至尊会员68元'
      }
    ],
    avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
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
  }
})
