#### 这是第五章

webpack4+react+scss+antd+react-router+react-redux+react-saga+typescript

##### 目录结构
> - components UI组件
> - containers 容器组件
> - routers 相关路由控制

##### 知识点

> - [typescript](https://www.tslang.cn/docs/home.html) 


##### 安装包
> - typescript
> - ts-loader
> - @types/react
> - @types/react-dom
> - @types/react-router-dom

##### 相关错误

> - 使用dom和react-router相关的要是用tsx
> - this.props.form报错
'''
import { FormComponentProps } from 'antd/lib/form'
//继承相关props
interface todoProps extends FormComponentProps

'''
> - 使用export default Form.create()(Todo)报错

> 在子组件对外暴露的名字上使用变量加上:any就可以了

> - Cannot find global type 'IterableIterator': https://codeday.me/bug/20180824/228460.html

> - Button中必须要添加href属性，看了看是antd中的button.d.ts中规定了，[github已修复fixbug](https://github.com/ant-design/ant-design/pull/15736),更新到最新版本就可以了。