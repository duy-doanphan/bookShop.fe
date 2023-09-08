import {Button, Divider, Form, Input} from 'antd';

interface IFieldType {
    fullName?: string;
    email?: string;
    password?: string;
    phone?: string;
}


const RegisterPage = () => {

    const onFinish = (values: IFieldType) => {
        console.log('Success:', values);
    };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div className='register-page' style={{padding: '50px'}}>
            <h3 style={{textAlign: 'center'}}>Register new user</h3>
            <Divider/>
            <Form

                name="basic"
                labelCol={{span: 24}} //whole col
                wrapperCol={{span: 16}}
                style={{maxWidth: 600, margin: '0 auto'}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<IFieldType>
                    label="Full Name"
                    name="fullName"
                    rules={[{required: true, message: 'Please input your full name!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<IFieldType>
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<IFieldType>
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item<IFieldType>
                    label="Phone"
                    name="phone"
                    rules={[{required: true, message: 'Please input your phone!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" loading={true}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}
export default RegisterPage