import {Button, Divider, Form, Input} from 'antd';
import styles from '../../styles/auth.module.scss';
import {Link} from "react-router-dom";


interface IFieldType {
    email?: string;
    password?: string;
}


const LoginPage = () => {

    const onFinish = (values: IFieldType) => {
        console.log('Success:', values);
    };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div className={styles["login-page"]}>
            <main>
                <div className={styles.container}>
                    <section className={styles.wrapper}>
                        <div className={styles.heading}>
                            <h2 className={`${styles.text} ${styles["text-large"]}`}> Login to BookShop </h2>
                            < Divider/>
                        </div>
                        <Form
                            name="basic"
                            // labelCol={{span: 24}} //whole col
                            // wrapperCol={{span: 16}}
                            // style={{maxWidth: 600, margin: '0 auto'}}
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <Form.Item<IFieldType>
                                labelCol={{span: 24}} //whole column
                                label="Email"
                                name="email"
                                rules={[{required: true, message: 'Please input your email!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item<IFieldType>
                                labelCol={{span: 24}} //whole column
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                <Button type="primary" htmlType="submit" loading={true}>
                                    Login
                                </Button>
                            </Form.Item>
                            <Divider> Or </Divider>
                            <p className="text text-normal"> Don't have account ?
                                <span>
                                    <Link to='/register'> Register Now </Link>
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
        </div>
    )

}
export default LoginPage