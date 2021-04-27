import React from "react";
import styles from "./forgotpassword.module.css";
import { useHistory } from "react-router-dom";
import { Typography, Form, Input, Button, Row, Col, Alert } from "antd";
import { ReactComponent as LoginBanner } from "../../assets/img/login-banner.svg";
import { authService } from "../../service/auth";

const { Title, Text } = Typography;
const Login = () => {
  const [isError, setIsError] = React.useState(false);
  const history = useHistory();

  const onSubmit = (values) => {
    setIsError(false);
    const exist = authService.isEmailExist(values.email);
    if (exist) history.push("/reset-password/d4g4gse");
    else setIsError(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleBack = () => {
    history.push("/login");
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
          <Title level={1}>Forgot Password</Title>
          <Text type="secondary">Please input your registered email.</Text>
          {isError && (
            <Alert
              style={{ marginTop: 20, marginBottom: 20 }}
              message="The email is not found on our database."
              type="error"
            />
          )}

          <Form
            className={styles.form}
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
                },
              ]}
            >
              <Input
                size="large"
                placeholder="admin@kacsa.com / user@kacsa.com"
              />
            </Form.Item>
            <Form.Item>
              <div
                className={styles.buttonContainer}
                style={{ marginTop: "20px" }}
              >
                <Button type="link" style={{ padding:0 }} onClick={handleBack}>Back To Login</Button>
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
