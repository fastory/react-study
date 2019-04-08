import React, { Component } from "react";
import { Form, Input, Tooltip, Icon, Button } from "antd";

 class Todo extends Component {
   handleSubmit2 = e => {
     e.preventDefault();
     this.props.form.validateFieldsAndScroll((err, values) => {
       if (!err) {
         //检验正确提交action
         this.props.handleSubmit(values);
         this.props.form.resetFields();
       }
     });
   };
   render() {
     const { getFieldDecorator } = this.props.form;
     const formItemLayout = {
       labelCol: {
         xs: { span: 24 },
         sm: { span: 4 }
       },
       wrapperCol: {
         xs: { span: 24 },
         sm: { span: 16 }
       }
     };
     return (
       <Form onSubmit={this.handleSubmit2}>
         <Form.Item
           {...formItemLayout}
           label={
             <span>
               待办事项&nbsp;
               <Tooltip title="待办事项?">
                 <Icon type="question-circle-o" />
               </Tooltip>
             </span>
           }
         >
           {getFieldDecorator("name", {
             rules: [
               {
                 required: true,
                 message: "请输入待办事项",
                 whitespace: true
               }
             ]
           })(<Input autocomplete="off"/>)}
         </Form.Item>
         <Button type="primary" htmlType="submit" size={"large"}>
           保存
         </Button>
       </Form>
     );
   }
 }
export default Form.create()(Todo)