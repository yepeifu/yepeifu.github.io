import { Button, Form, Input } from 'antd';
import "./login.less"
const layout = {
    labelCol: {
        flex: '110px',
    },

    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        // offset: 8,
        // span: 16,
    },
};
const Login = (props) => {
    const [form] = Form.useForm();
    const onSubmit = () => {
        form.validateFields().then((values) => {
            console.log(values)
            if(values){
                props.history.push("/home")
            }
           
        })
    }
    const onFinish = (values) => {

    };
    const onReset = () => {
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className='login-box'>
            <Form
                className='form-box'
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                initialValues={{
                    remember: true,
                }}
                onFinishFailed={onFinishFailed}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name="note"
                    label="用户名"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的用户名'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[

                        { required: true, message: '请输入你的密码' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={onSubmit}>
                        登录
                    </Button>
                    <Button className='btn-box' onClick={onReset}>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;