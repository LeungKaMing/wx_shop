Page({
  /**
   * 页面的初始数据
   */
  data: {
    logo: '../../assets/images/youshu_logo.png',
    searchLogo: '../../assets/images/search_logo.png',
    filterLogo: '../../assets/images/filter_logo.png',
    currentGoodIndex: 0,
    goodsList: [
      {
        pic: 'http://img3m6.ddimg.cn/13/35/25292236-2_w_3.jpg',
        desc: '《无限》（精装版）',
        comment: '71',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '乔纳森·希克曼',
        time: '30秒前',
        location: '广州'
      },
      {
        pic: 'http://img3m4.ddimg.cn/2/33/25265594-1_b_3.jpg',
        desc: '《复仇者联盟3无限战争》电影档案',
        comment: '1907',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '杰罗姆·奥彭阿',
        time: '1天前',
        location: '广州'
      },
      {
        pic: 'http://img3m2.ddimg.cn/97/26/25304992-1_b_2.jpg',
        desc: '灭霸崛起',
        comment: '2321',
        avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
        name: '四川美术出版社',
        time: '1小时前',
        location: '广州'
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
          pic: 'http://img3m6.ddimg.cn/13/35/25292236-2_w_3.jpg',
          desc: '《无限》（精装版）',
          comment: '71',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '乔纳森·希克曼',
          time: '30秒前',
          location: '广州'
        },
        {
          pic: 'http://img3m4.ddimg.cn/2/33/25265594-1_b_3.jpg',
          desc: '《复仇者联盟3无限战争》电影档案',
          comment: '1907',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '杰罗姆·奥彭阿',
          time: '1天前',
          location: '广州'
        },
        {
          pic: 'http://img3m2.ddimg.cn/97/26/25304992-1_b_2.jpg',
          desc: '灭霸崛起',
          comment: '2321',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '四川美术出版社',
          time: '1小时前',
          location: '广州'
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
          pic: 'http://img3m6.ddimg.cn/66/24/23826396-1_b_2.jpg',
          desc: '超人-秘密身份',
          comment: '71',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '乔纳森·希克曼',
          time: '30秒前',
          location: '广州'
        },
        {
          pic: 'http://img3m4.ddimg.cn/58/25/1018813414-1_b_1.jpg',
          desc: '天国降临',
          comment: '1907',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '杰罗姆·奥彭阿',
          time: '1天前',
          location: '广州'
        },
        {
          pic: 'http://img3m8.ddimg.cn/70/32/1290749398-1_b_1.jpg',
          desc: '无限危机',
          comment: '2321',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '四川美术出版社',
          time: '1小时前',
          location: '广州'
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
          pic: 'http://img3m0.ddimg.cn/27/5/25337790-1_b_3.jpg',
          desc: '零年：黑暗之城',
          comment: '71',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '乔纳森·希克曼',
          time: '30秒前',
          location: '广州'
        },
        {
          pic: 'http://img3m6.ddimg.cn/39/19/23909826-1_b_2.jpg',
          desc: '灭族之灾',
          comment: '1907',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '杰罗姆·奥彭阿',
          time: '1天前',
          location: '广州'
        },
        {
          pic: 'http://img3m9.ddimg.cn/2/17/25183919-1_b_3.jpg',
          desc: '正义联盟',
          comment: '2321',
          avatar: 'https://avatars3.githubusercontent.com/u/18412359?s=40&v=4',
          name: '四川美术出版社',
          time: '1小时前',
          location: '广州'
        }
      ]
    })
  }
})
