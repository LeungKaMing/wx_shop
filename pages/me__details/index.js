Page({
  /**
   * 页面的初始数据
   */
  data: {
    baseInfoList: [
      {
        type: 'img',
        value: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '头像'
      },
      {
        type: 'str',
        value: 'Leon',
        name: '昵称'
      },
      {
        type: 'str',
        value: '保密',
        name: '性别'
      },
      {
        type: 'str',
        value: '',
        name: '生日'
      },
      {
        type: 'str',
        value: '',
        name: '个性签名'
      },
      {
        type: 'str',
        value: '',
        name: '兴趣爱好'
      },
      {
        type: 'str',
        value: '',
        name: '个人说明'
      }
    ],
    moreInfoList: [
      {
        type: 'str',
        value: '',
        name: '所在位置'
      },
      {
        type: 'str',
        value: '',
        name: '职业'
      },
      {
        type: 'str',
        value: '保密',
        name: '情感'
      }
    ],
    restInfoList: [
      {
        type: 'str',
        value: '',
        name: '兴趣爱好'
      },
      {
        type: 'str',
        value: '',
        name: '个人说明'
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
    console.log(2)
  },
  goToSelf () {
    console.log(arguments, '<<<<<<<<<<<<<<')
  }
})
