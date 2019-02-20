#### 这是第二章

webpack4+react+scss+antd

#### 按需引入antd

> .babelrc中配置 
`["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }]`
	
#### 使用的相关npm包

#### 第二章新增

##### babel相关

> - babel-preset-stage-0

##### 样式相关

> - style-loader
> - css-loader  

> 需要在webpack-config.js中启动css-loader中的css-modules模式，才能在react中使用import相关SCSS，className={styles}表达式

##### scss 相关

> - node-sass 
> - sass-loader


##### antd 
[antd教程](https://ant.design/docs/react/getting-started-cn)
