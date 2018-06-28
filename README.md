# vue-resume
使用Vue+Vuex+Vue-router+Webpack+Typescript搭建的个人简历

食用步骤：
git clone 项目到本地

然后使用yarn install 安装依赖

最后就可以使用yarn run dev在开发环境预览了。如果需要打包就使用yarn run build。

环境配置过程中遇到的小坑：

1: 使用yarn安装@vue/cli之后直接执行vue create会报错说vue: command not found, 原因暂时不清楚，不过可以使用yarn vue代替。

2: vue的typescript类型申明。在没有安装@types/vue和添加shims-vue.d.ts之前，直接在index.ts文件中引入App.vue会提示App.vue不是一个模块。

3: 使用ts-loader必需要添加options: {
  appendTsSuffixTo: [/\.vue$/],
}
使vue中的ts代码正常工作。

4: 在vue中使用typescript编程可以提升开发效率和数据结构稳定性，本打算使用vue-class-component来进行基于类的组件开发，但发现这样做变得和angular很像，失去了vue中将数据，方法，watch等进行拆分的优势。结构不够清晰。所以决定只使用ts进行开发。