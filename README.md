# react豆瓣电影
>基于create-react-app

### 技术栈
React，react-router，antd，axios，redux，redux-saga，mobx  
以es6为主，在某些地方会使用es7的decorator和async，await  
支持响应式布局，完善移动端适配

### 关于Redux和Context
9.12更新： 引入redux后发现，redux相对ContextApi更加有条理，同时避免了使用Context多层嵌套的问题

***
最开始的时候是Redux和React配合同时学习的，在试着结合Redux写了几个demo以后，有了以下几个印象（可能会有些许错误）

- 纯函数的实现方式，一切数据改变均通过函数实现
- 单一数据原则，每次数据改变都是通过返回一个新的数据，即数据不可变
- 类似于观察者模式的结构，定义一个ntf，定义一个函数，绑定ntf和函数，需要执行某项操作时发送那个ntf即可

#### 为什么使用Context

- 可以不用引入额外的包
- 在数据量不大的情况下,可以减少模板代码量
- Action,Reducer,Store过于分散，看得眼花
