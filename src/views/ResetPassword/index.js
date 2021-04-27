import React from "react"
import styles from "./resetpassword.module.css";
import { useHistory, useParams } from "react-router-dom"
import { authService } from "../../service/auth";
import { Typography, Form, Input, Button, Row, Col, Alert } from "antd"
import { ReactComponent as LoginBanner } from "../../assets/img/login-banner.svg"
const { Title, Text } = Typography

const Login = () => {
  const [isError, setIsError] = React.useState(false);
  const history = useHistory()
  const { linktoken } = useParams();

  const onSubmit = async (values) => {
    setIsError(false);
    authService
        .resetPassword(values.password, linktoken)
        .then(() => history.push("/login"))
        .catch(() => setIsError(true))
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

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
          <Title level={1}>Reset Password</Title>
          <Text type="secondary">
            Please input your new password
          </Text>
          {isError && (
              <Alert
                  style={{marginTop: 20}}
                  message="Update password failed."
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
              label="New Password"
              name="password"
              rules={[
                { required: true, message: "Please input your new password!" },
                { min: 3, message: 'Password must be minimum 3 characters.' },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item >
              <div className={styles.buttonContainer}>
                <Button type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default Login
