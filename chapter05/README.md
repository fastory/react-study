#### 这是第五章

webpack4+react+scss+antd+react-router+react-redux+react-saga+typescript

##### 目录结构
> - components UI组件
> - containers 容器组件
> - routers 相关路由控制

##### 知识点

> - [typescript](https://www.tslang.cn/docs/home.html) 



##### 使用form解决报错

> - this.props.form报错
'''
import { FormComponentProps } from 'antd/lib/form'
//继承相关props
interface todoProps extends FormComponentProps

'''
> - 使用export default Form.create()(Todo)报错

> 在子组件对外暴露的名字上使用变量加上:any就可以了


