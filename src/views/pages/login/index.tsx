import { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuthLoginMutation } from '@apps/services/authService';
import { PayloadLoginProps } from '@globalTypes/globalTypes';
import './style.scss';

export default function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Text } = Typography;
  const [error, setError] = useState(false);
  const [login, { isLoading }] = useAuthLoginMutation();
  const onFinish = async (values: PayloadLoginProps) => {
    const response: any = await login(values);
    if (!response.data.token) {
      setError(true);
    }
  };

  return (
    <article id="login-page">
      <Row justify="center" className="w-100 mb-30">
        <Col span={6}>
          <Form
            name="normal_login"
            className="login-form"
            // initialValues={{
            //   remember: true,
            //   email: "super_admin@gmail.com",
            //   password: "super_admin@gmail.com",
            // }}
            onFinish={onFinish}
          >
            <div className="logo">
              <img
                src="https://news.vmogroup.com/wp-content/uploads/2023/04/VMO_Logo_Positive.png"
                alt=""
              />
            </div>
            <Form.Item
              name="id"
              rules={[{ required: true, message: 'ID is required' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter your ID"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Enter your password"
                autoComplete="on"
              />
            </Form.Item>
            <Text type="danger" hidden={!error}>
              The username or password is incorrect
            </Text>
            <Form.Item className="text-center" noStyle>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
              >
                <b>Login</b>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </article>
  );
}
