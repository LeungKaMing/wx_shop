Page({
  data: {
    addList: [
      {
        name: 'Leung',
        phone: '150118****8',
        addr: '广东省广州市天河区珠江新城888号',
        checked: true
      },
      {
        name: 'Kami',
        phone: '131555****8',
        addr: '广东省广西市尼玛海路777号',
        checked: false
      },
      {
        name: 'ming',
        phone: '177333****1',
        addr: '广东省佛山市卧草尼路666号',
        checked: false
      }
    ],
    editImg: '../../assets/images/addr/edit.png',
    delImg: '../../assets/images/addr/del.png'
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
  checkboxChange: function (e) {
    console.log(e, '<<<<<<<<<')
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})