module.exports = {
  site:{
    title: '****的博客',
    subtitle: 'hello,world',
    description: 'vblog',
    author: '我是作者',
    email:'12*****@qq.com',
    github:"https://github.com/LqqJohnny",
    weibo:"https://weibo.com/3607955465/profile?topnav=1&wvr=6",
    usericon:"../static/usericon.png"
  },
  menu:{
    home:{name:'首页',href:'/',icon:"../static/home-w.png"},
    tags:{name:'标签',href:'/tags',icon:"../static/tag-w.png"},
    categories:{name:'类别',href:'/categories',icon:"../static/category-w.png"},
    aboutme:{name:"关于我",href:"/aboutme",icon:"../static/aboutme.png"}
  },
  menu_icons:{
    enable:false
  },
  highlightTheme: "mono-blue",  //  代码段 的颜色主题
  footer:{
    url:"https://github.com/LqqJohnny/VBlog",
  },
  blogTheme:"default",
  passwordOn: true
}
