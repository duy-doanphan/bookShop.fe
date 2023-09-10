import { Button, Divider, Form, Input, message, notification } from 'antd';
import styles from '../../styles/auth.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '@/type/backend';
import { useEffect, useState } from 'react';
import { postLogin } from '@/services/api.ts';
import { setUserLoginInfo } from '@/redux/slices/accountSlice.ts';
import { useAppDispatch, useAppSelector } from '@/redux/hook.ts';

// interface IFieldType {
//     email?: string;
//     password?: string;
// }

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state) => state.account.isAuthenticated,
  );
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated) {
      // navigate('/');
      window.location.href = '/';
    }
  }, [isAuthenticated]);

  const onFinish = (values: IUser) => {
    const { email, password } = values;
    const dataSubmit: IUser = {
      username: email,
      password,
    };
    setIsSubmit(true);
    setTimeout(async () => {
      const res = await postLogin(dataSubmit);
      if (res.data?.user.id) {
        localStorage.setItem('access_token', res.data.access_token);
        dispatch(setUserLoginInfo(res.data.user));
        message.success('Login Successfully!');
        navigate('/');
      } else {
        notification.error({
          message: 'Login Failed!',
          description:
            res.message && Array.isArray(res.message)
              ? res.message[0]
              : res.message,
          duration: 5,
        });
      }
      setIsSubmit(false);
    }, 1000);
  };

  // const onFinishFailed = (errorInfo: any) => {
  //     console.log('Failed:', errorInfo);
  // };

  return (
    <div className={styles['login-page']}>
      <main>
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.heading}>
              <h2 className={`${styles.text} ${styles['text-large']}`}>
                {' '}
                Login to BookShop{' '}
              </h2>
              <Divider />
            </div>
            <Form<IUser>
              name='basic'
              // labelCol={{span: 24}} //whole col
              // wrapperCol={{span: 16}}
              // style={{maxWidth: 600, margin: '0 auto'}}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit' loading={isSubmit}>
                  Login
                </Button>
              </Form.Item>
              <Divider> Or </Divider>
              <p className='text text-normal'>
                Don't have account ?
                <span>
                  <Link to='/register'> Register Now </Link>
                </span>
              </p>
            </Form>
          </section>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
