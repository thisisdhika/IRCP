import React from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom";
import { Typography, Form, Input, Button, Row, Col, Alert } from "antd";
import { ReactComponent as LoginBanner } from "../../assets/img/login-banner.svg";
import { authService } from "../../service/auth";
const { Title, Text } = Typography;

const Login = () => {
  const [isError, setIsError] = React.useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    setIsError(false);
    console.log(values);
    authService
      .login(values.email, values.password)
      .then(() => history.push("/"))
      .catch(() => setIsError(true));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleForgotPassword = () => {
    history.push("/forgot-password");
  };

  return (
    <Row className={styles.login}>
      <Col xs={0} lg={9} xl={8} className={styles.banner}>
        <div className={styles.content}>
          <LoginBanner />
          <Title level={1} className={styles.name}>
            Let's collaborate together with us.
          </Title>
        </div>
      </Col>
      <Col xs={24} lg={15} xl={16} className={styles.panel}>
        <div className={styles.content}>
          <Title level={1}>Login</Title>
          <Title level={4}>Login to your account</Title>
          <Text type="secondary">
            Thank you for get back to our application, lets access our best
            application.
          </Text>
          {isError && (
            <Alert
              style={{ marginTop: 20 }}
              message="Username or Password not found."
              type="error"
            />
          )}
          <Form
            className={styles.form}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="admin@kacsa.com / user@kacsa.com"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" placeholder="123456" />
            </Form.Item>
            <Form.Item>
              <div className={styles.buttonContainer}>
                <Button
                  style={{ padding: 0 }}
                  type="link"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </Button>
                <Button type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
