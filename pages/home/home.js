// pages/home/home.js
const app = getApp()
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.type="baidu"){
      this.setData({
        url:"https://mp.weixin.qq.com/s/HVmzDgdhLzOJUcBnIMy0fg"
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },


  /**
   * 页面的初始数据
   */
  data: {
    url: ""
  }
})


const swiperList = [{
    image: "/image/test1.png",
  },
  {
    image: "/image/test2.png",
  },
  {
    image: "/image/test3.png",
  },

];
Component({
  data: {
    functions_show: [{
      name: "待接任务",
      img: '/image/publishedM.png',
      goto: "/pages/publishedM/publishedM"
    }, {
      name: "查询稿件",
      img: '/image/apply.png',
      goto: "/pages/inquiryM/inquiryM"
    }, {
      name: "审核稿件",
      img: '/image/checkM.png',
      goto: "/pages/checkM/checkM"
    }],
    functions:[ {
      name: "待接任务",
      img: '/image/publishedM.png',
      goto: "/pages/publishedM/publishedM"
    }, {
      name: "查询稿件",
      img: '/image/apply.png',
      goto: "/pages/inquiryM/inquiryM"
    }, {
      name: "审核稿件",
      img: '/image/checkM.png',
      goto: "/pages/checkM/checkM"
    },{
      name: "提交稿件",
      img: '/image/submitM.png',
      goto: "/pages/submitM/submitM"
    },{
      name: "历史稿件",
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    },{
      name: "提交稿件",
      img: '/image/submitM.png',
      goto: "/pages/submitM/submitM"
    },{
      name: "历史稿件",
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    }],
    stickyProps:{
      zIndex:4,
    },
    showfunctions:true,
    showtime:true,
    current: 0,
    duration: 500,
    interval: 5000,
    swiperList,
    value: 'label_1',
    value_s: '',
    list: [{
        value: 'label_1',
        label: '首页',
        icon: 'home'
      },
      {
        value: 'label_2',
        label: '发布',
        icon: 'check-rectangle'
      },
      {
        value: 'label_3',
        label: '消息',
        icon: 'notification'
      },
      {
        value: 'label_4',
        label: '我的',
        icon: 'user'
      },
    ],
    todaywork:[
      {
        name:"概率论",
        add:"D888",
        time1:"8:00",
        time2:"10:00",
      },
      {
        name:"概率论",
        add:"D888",
        time1:"8:00",
        time2:"10:00",
      },
    ],
    day:[{
      date:"1/12 周四",
      work:[
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
      ],
    },{
      date:"1/12 周四",
      work:[
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
      ],
    },{
      date:"1/12 周四",
      work:[
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
      ],
    }],
    step:[{
      text:'已接稿',
    },{
      text:'已写稿',
    },{
      text:'编辑部审稿',
    },{
      text:'辅导员审稿',
    },{
      text:'排版',
    },],
    listm:[
      {
        text:"学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动", date:"2022-11-30" , location:"管理学院105",people:[{key:1,name:"陶柯羽"},{key:2,name:"高原"},{key:5,name:"徐文慧"},{key:4,name:"张赫"},],url:"https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",score:4.5},
        {
          text:"学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动", date:"2022-11-30" , location:"管理学院105",people:[{key:1,name:"陶柯羽"},{key:2,name:"高原"},{key:5,name:"徐文慧"},{key:4,name:"张赫"},],url:"https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",score:4.5},
          
    ],
  time:2*24*60*60*1000,
  timeData:{},
  },

  methods: {
    goto(e){
      console.log(e)
      let url=e.currentTarget.dataset.url
      wx.navigateTo({
        url:`../seeM/seeM?url=${url}`,
      })
    },
    onTimeChange(e) {
      console.log(e)
    this.setData({
      timeData: e.detail,
    });
  },
    showFunctions(){
      this.setData({
        showfunctions:!this.data.showfunctions
      })
    },
    showTimes(){
      this.setData({
        showtime:!this.data.showtime
      })
    },
    goTomoudle2(e) {
      console.log("yes", e)
      let index = e.currentTarget.dataset.index
      let url = this.data.functions[index].goto
      if (url == '/pages/checkM/checkM' && app.globalData.authority2 == 10) {
        wx.showToast({
          title: '您没有权限',
          icon: 'error'
        })
      } else {
        wx.redirectTo({
          url: url,
        })
      }

    },
    onChange(e) {
      //tabbar
      this.setData({
        value: e.detail.value,
      });
      if (app.globalData.hasLogin && e.detail.value == 'label_2') {
        //页面跳转
        if (app.globalData.authority2 == 1) {
          wx.redirectTo({
            url: "/pages/publishM/publishM",
          })
        } else {
          wx.showToast({
            title: '您没有权限',
            icon: 'none'
          })
        }
      };
      if (app.globalData.hasLogin && e.detail.value == 'label_4') {
        //页面跳转
      
          wx.redirectTo({
            url: "/pages/myself/myself",
          })
        
      };
      if (!app.globalData.hasLogin && e.detail.value != 'label_1') {
        //页面跳转
        wx.redirectTo({
          url: "/pages/login/login",
        })
      }
    },
  },
});