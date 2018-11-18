Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentGoodIndex: 0,
    goodsList: [
      {
        pic: '',
        desc: 'buy',
        comment: '0',
        user: '辛德瑞拉',
        time: '30秒前',
        location: '566'
      },
      {
        pic: '',
        desc: 'buy',
        comment: '0',
        user: '辛德瑞拉',
        time: '30秒前',
        location: '566'
      },
      {
        pic: '',
        desc: 'buy',
        comment: '0',
        user: '辛德瑞拉',
        time: '30秒前',
        location: '566'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)
  },
  buy() {
    console.log('buy')
    this.setData({
      currentGoodIndex: 0,
      goodsList: [
        {
          pic: '',
          desc: 'buy',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        },
        {
          pic: '',
          desc: 'buy',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        },
        {
          pic: '',
          desc: 'buy',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        }
      ]
    })
  },
  borrow() {
    console.log('borrow')
    this.setData({
      currentGoodIndex: 1,
      goodsList: [
        {
          pic: '',
          desc: 'borrow',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        },
        {
          pic: '',
          desc: 'borrow',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        },
        {
          pic: '',
          desc: 'borrow',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        }
      ]
    })
  },
  give() {
    console.log('give')
    this.setData({
      currentGoodIndex: 2,
      goodsList: [
        {
          pic: '',
          desc: 'give',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        },
        {
          pic: '',
          desc: 'give',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        },
        {
          pic: '',
          desc: 'give',
          comment: '0',
          user: '辛德瑞拉',
          time: '30秒前',
          location: '566'
        }
      ]
    })
  }
})
