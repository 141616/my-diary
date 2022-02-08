# my-diary

just a demo

## use

> React + TS + Redux + Scss

## run

```
yarn start
```

# tc-posts-react-v2

## CONFIDENTIAL, DO NOT DISTRIBUTE | 本文档为梦猷机密文档 请勿分发

## MAKE REUSABLE COMPONENTS!

## 模块化！模块化！模块化！

## 技术

- React
  - 状态控制：dva 或者 redux
  - CSS 框架：scss modules

## 主要的页面/功能

- 登录 - 用户可以通过邮件/密码登录（看设计图"登录"） - 如果密码或者账号有错误，通知用户（看设计图"登录-错误") - 加载中的时候 -> 表格 disabled （看设计图"登录-加载中") - 登录完之后跳到”我的日记“页面
- 注册 - 用户可以通过邮件/密码/名字注册新账号（看设计图"注册"） - 如果密码/邮件地址/名字有错误，通知用户（看设计图"注册") - 加载中的时候 -> 表格 disabled （看设计图"注册-加载中") - 注册完之后跳到”我的日记“页面
- 登录之后的 navbar： - 用户的名字（“我的日记”页面）或者一个退回链接（“新日记条目”页面，“查看日记条目”页面） - 我的日记（“我的日记”页面）/新日记条目（“新日记条目”页面）/post.title（“查看日记条目”页面） - 退出（按了之后会打开设计图的“登录”页面，邮件/密码都是空）
- 我的日记 - 一个使用 grid/card 的日记条目列表（支持 scrolling，infinte scroll，每一个请求获取 18 个 post） - card 内容是 post 的标题和日期，如果 post 标题太长，使用:"..." - 如果用户按了一个 card，会打开那个 card 的“查看日记条目“页面（看设计图”查看日记条目“） - 如果按最上面的“+”card，就跳到“新日记条目”页面
- 查看日记条目 - 可以看到日记条目的标题，创建日期，和内容 - 如果内容太长，就 scroll - 上面的 navbar 有一个“退回”按钮，按了之后就退回“我的日记”页面
- 新日记条目 - 可以编辑日记条目的标题（input） - 可以编辑日记条目的内容（textarea） - 上面的 navbar 有一个“退回”按钮，按了之后就退回“我的日记”页面 - 加载中的时候 -> 表格 disabled （看设计图"新日记条目-加载中") - 提交成功之后自动跳到“我的日记”页面

## Fonts：

- (Noto Sans SC)[https://fonts.google.com/specimen/Noto+Sans+SC] (Light 300, Regular 400)

## 怎么使用 Noto Sans SC webfont？

#### 国外 CDN（使用 google fonts CDN）

```html
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400&display=swap"
  rel="stylesheet"
/>
```

#### 中国大陆 CDN（使用 font.im）

```html
<link
  href="https://fonts.font.im/css2?family=Noto+Sans+SC:wght@300;400&display=swap"
  rel="stylesheet"
/>
```

### CSS:

```css
.yourClassName {
  font-family: 'Noto Sans SC', sans-serif;
}
```

## 图片：

- girl-icon.svg (登录/注册页面的图)

## 设计图

https://zpl.io/2jGApoW
**先需要注册一个 zeplin 的账号在[https://app.zeplin.io/signup](https://app.zeplin.io/signup), 然后把你注册的邮件地址发给 Carter**

## 后段 API

### 你的 API URL: https://lanhanghui-845ff7.postdemo.tcn.asia/api/v2

### 文档：用浏览器打开"api-docs.html"

### Swagger ："api-docs.yaml" (要 UI 的话可以使用[https://editor.swagger.io/](https://editor.swagger.io/)）

### Postman : "我的日记 API - V2.postman_collection.json"

(如果没有用过 postman，看“postman-how-to.png”）

## CONFIDENTIAL, DO NOT DISTRIBUTE | 本文档为梦猷机密文档 请勿分发
