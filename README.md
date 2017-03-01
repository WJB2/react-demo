# react + redux的入门级demo


### 概述

初步熟悉react 和 redux 的一个demo，界面比较粗糙

简单的一个商品列表和加入购物车，从购物车删除等功能，暂时没有涉及到接口

主要是熟悉redux的基本使用。

redux相关的内容我都放在store 的目录里面，因为比较熟悉vue，所以也按vue的思路去创建目录

构建工具使用webpack

### 目录结构
```
--src
	|--css
	|--img
	|--js
		|--api   //没有用到接口
		|--components  //公用组件
		|--containers  //容器，在容器里可以将需要用到的state和action 传到组件
		|--router  //路由
		|--store
			|--actions 
			|--reducers  //这里我是重reducers ,将相关的处理逻辑写在reducers里面
			|--actionTypes  //就跟vue里面的mutation.js 差不多
	|--main.js //入口文件		
```

总体来说，从入门的情况看，我个人觉得vue相对会比较友好一点

### demo展示

![](./src/img/1.gif)

### 运行

```
//默认是 localhost:8081  可以在package.json 文件修改 
npm i && npm run dev

//上线

npm run build

```

mongod.exe --logpath "D:\mongodb\logs\mongodb.log" --logappend --dbpath "D:\mongodb\data\db"   --install