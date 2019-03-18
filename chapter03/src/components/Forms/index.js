import {
    Form, Input, Tooltip, Icon, Cascader, Select, Button,
} from 'antd';
import React from 'react';

const { Option } = Select;

const residences = [{
    value: '浙江',
    label: '浙江',
    children: [{
        value: '杭州',
        label: '杭州',
        children: [{
            value: '西湖',
            label: '西湖',
        }],
    }],
}, {
    value: '北京',
    label: '北京',
    children: [{
        value: '朝阳',
        label: '朝阳',
        children: [{
            value: '天安门',
            label: '天安门',
        }],
    }],
}];
class UserForm extends React.Component {
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    //检验正确提交action
                    this.props.addUserAction(values);
                }
            });
        }

        render() {
            const { getFieldDecorator } = this.props.form;

            const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 4 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            };
            const tailFormItemLayout = {
                wrapperCol: {
                    xs: {
                        span: 24,
                        offset: 12,
                    },
                    sm: {
                        span: 24,
                        offset: 10,
                    },
                },
            };
            const prefixSelector = getFieldDecorator('prefix', {
                initialValue: '86',
            })(
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            );

            return (
                <Form onSubmit={this.handleSubmit}>
                 <Form.Item
                        {...formItemLayout}
                        label={(
                            <span>
                                名称&nbsp;
                <Tooltip title="在网站上的昵称?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入名称', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="邮箱地址"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '输入正确的邮箱',
                            }, {
                                required: true, message: '请输入邮箱!',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                   
                    <Form.Item
                        {...formItemLayout}
                        label="地址"
                    >
                        {getFieldDecorator('address', {
                            initialValue: ['浙江', '杭州', '西湖'],
                            rules: [{ type: 'array', required: true, message: '请选择你的地址!' }],
                        })(
                            <Cascader options={residences} />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="年龄"
                    >
                        {getFieldDecorator('age', {
                            rules: [{ required: true, message: '请输入您的年龄!' }],
                        })(
                            <Input style={{ width: '100%' }} />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="电话号码"
                    >
                        {getFieldDecorator('phone', {
                            // rules: [{ required: false, message: '请输入您的电话号码' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </Form.Item>
                    
                    <Form.Item
                        {...formItemLayout}
                        label="个人网页"
                    > <Input />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size={'large'}>保存</Button>
                    </Form.Item>
                </Form>
            );
        }

}
export default Form.create()(UserForm)