// pages/fcheckM/fcheckM.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mag:{
      text:"管理学创新实验班班会 管理学创新实验班班会", date1:"10-9-11-0" ,date2:"12-00", location:"东久D888",people:"1文1摄"},
    tag:[
      {name:"优秀稿件",show:true},
      {name:"优秀稿件2",show:false},
    ],
    attitude: true,
     code:1,
     code1:2,
     userStars: [
       "/image/kx.png",
       "/image/kx.png",
       "/image/kx.png",
       "/image/kx.png",
       "/image/kx.png",
     ],
     wjxScore: 0,
     // textarea
     min: 5,//最少字数
     max: 300, //最多字数 (根据自己需求改变) 
     files:[]
   },
    // 星星点击事件
    starTap: function (e) {
      var that = this;
      var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
      var tempUserStars = this.data.userStars; // 暂存星星数组
      var len = tempUserStars.length; // 获取星星数组的长度
      for (var i = 0; i < len; i++) {
        if (i <= index) { // 小于等于index的是满心
          tempUserStars[i] = "/image/sx.png";
          that.setData({
            wjxScore: i + 1,
          })
        } else { // 其他是空心
          tempUserStars[i] = "/image/kx.png"
        }
      }
      // 重新赋值就可以显示了
      that.setData({
        userStars: tempUserStars
      })
    },
    // 标签
    labelx: function (e) {
      console.log(e)
      var i=e.currentTarget.dataset.index;
      var that =this.data.tag[i];
      that.setData({
        show: !e.currentTarget.dataset.show
      })
    },
    label: function (e) {
      console.log(e)
      var that = this;
      that.setData({
        attitude: !e.currentTarget.dataset.index
      })
    },
    inputs: function (e) {
      // 获取输入框的内容
      var value = e.detail.value;
      // 获取输入框内容的长度
      var len = parseInt(value.length);
      //最多字数限制
      if (len > this.data.max) 
      return;
      // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
      this.setData({
        currentWordNumber: len //当前字数  
      });
    },
  handleBtn(){
    wx:if(this.data.code==1){
      wx.showToast({
        title: '评价成功',
        icon: 'succes',
        duration: 1500,
        mask: true,
        success:function(){
          setTimeout(function(){
            wx.reLaunch({
              url: '../index/index'
            })
          },1500)
        }
      });
    } else if (this.data.code1 == 2){
      console.log("111")
      wx.showToast({
        title: '评价失败',
        image: '/image/fail.png',
        duration: 1500,
        mask: true
      })
    }
  },
  chooseFile() {
    var that = this
    console.log("yes"),
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        var file = 'voucherData.matterapply_file'
        const tempFilePaths = res.tempFiles
        that.setData({
          files: tempFilePaths
        })
        console.log(tempFilePaths),
        console.log(that.data.files)
      }
    })
  },
  // 删除文件
  removefile() {
    this.setData({
      files: []
    })
  },
  // 点击事件
openFile() { // item为当前点击的事物对象
  let _this = this;
  let file = decodeURIComponent(_this.files.pathUrl); // 解码(注意:涉及到文件名中有中文需要转码)
  file = this.getFilePathName(file); // 将文件路径过滤，格式为【文件名+.后缀名】
  // 加载状态
  
  
  // 预览网络文档
  wx.downloadFile({
    url: _this.files.pathUrl, // 文件的本身url
    filePath: wx.env.USER_DATA_PATH + '/' + file, // 本地自定义的文件名
    success: function (res) {
      let filePath = res.filePath; // 微信临时文件路径(这里要使用自定义的名字文件名,否则打开的文件名是乱码)
      wx.openDocument({
        filePath: filePath,
        showMenu: true,  // 是否显示右上角菜单按钮 默认为false(看自身需求，可要可不要。后期涉及到右上角分享功能)
        success: function () {
           _this.toast({ title: '打开文件成功' });
        },
        fail: function() {
          _this.$util.toast({ title: '打开文件失败，请稍后重试' });
        }
      });
      uni.hideLoading();
    },
    fail: function() {
      _this.$util.toast({ title: '打开文件失败，请稍后重试' });
      uni.hideLoading();
    }
  });
},
// 文件路径过滤【文件名+.后缀名】
// 例如：哈哈.pdf
getFilePathName(path) {
let pos1 = path.lastIndexOf('/');
let pos2 = path.lastIndexOf('\\');
let position  = Math.max(pos1, pos2);
if ( position< 0 )
return path;
else
return path.substring(position+ 1);
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})




