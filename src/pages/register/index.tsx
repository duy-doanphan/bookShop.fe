import {Button, Divider, Form, Input, message, notification} from 'antd';
import styles from '../../styles/auth.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {postRegister} from "../../services/api.ts";
import {IUser} from "../../type/backend";
import {useState} from "react";


// interface IFieldType {
//     fullName?: string;
//     email?: string;
//     password?: string;
//     phone?: string;
// }


const RegisterPage = () => {

    const navigate = useNavigate()
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const onFinish = async (values: IUser) => {
        setIsSubmit(true)
        setTimeout(async () => {
            const res = await postRegister(values)
            if (res.data?._id) {
                message.success('Register user Successfully!')
                navigate('/login')
            } else {
                notification.error({
                    message: 'Register user Failed!',
                    description:
                        res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                    duration: 5,
                })
            }
            setIsSubmit(false)
        }, 3000)
    };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div className={styles["register-page"]}>
            <main>
                <div className={styles.container}>
                    <section className={styles.wrapper}>
                        <div className={styles.heading}>
                            <h2 className={`${styles.text} ${styles["text-large"]}`}> Register New User </h2>
                            < Divider/>
                        </div>
                        <Form<IUser>
                            name="basic"
                            // labelCol={{span: 24}} //whole col
                            // wrapperCol={{span: 16}}
                            // style={{maxWidth: 600, margin: '0 auto'}}
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                labelCol={{span: 24}} //whole column
                                label="Full Name"
                                name="fullName"
                                rules={[{required: true, message: 'Please input your full name!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                labelCol={{span: 24}} //whole column
                                label="Email"
                                name="email"
                                rules={[{required: true, message: 'Please input your email!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                labelCol={{span: 24}} //whole column
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                labelCol={{span: 24}} //whole column
                                label="Phone"
                                name="phone"
                                rules={[{required: true, message: 'Please input your phone!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                <Button type="primary" htmlType="submit" loading={isSubmit}>
                                    Register
                                </Button>
                            </Form.Item>
                            <Divider> Or </Divider>
                            <p className="text text-normal"> Already have account ?
                                <span>
                                    <Link to='/login'> Login Now </Link>
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
        </div>
    )

}
export default RegisterPage