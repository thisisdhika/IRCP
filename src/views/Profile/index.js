import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Avatar,
  Form,
  Input,
  Button,
  Alert,
} from "antd";
import styles from "./profile.module.css";
import { userService } from "../../service/user";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15 },
};

function Profile() {
  const { Content } = Layout;
  const [form] = Form.useForm();
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const user = useSelector((state) => state.auth.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  let tailLayout = {
    wrapperCol: { offset: isMobile ? 0 : 5, span: 15 },
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      company: user.company,
      phoneNumber: user.phoneNumber,
    });
  }, [user, form]);

  const handleScreenResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const showSuccessMessage = () => {
    setIsError(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2000);
  };

  const showErrorMessage = () => {
    setIsSuccess(false);
    setIsError(true);
    setTimeout(() => setIsError(false), 2000);
  };

  const onFinish = (values) => {
    userService.update(values).then(showSuccessMessage).catch(showErrorMessage);
  };

  return (
    <React.Fragment>
      <Content style={{ margin: "auto", maxWidth: "1000px", width: "90%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight:
              "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
          }}
        >
          <Row className={styles.row}>
            <Col span={24}>
              {isError && (
                <Alert
                  style={{ marginBottom: 40 }}
                  message="Error occurrence while change your data."
                  type="error"
                />
              )}
              {isSuccess && (
                <Alert
                  style={{ marginBottom: 40 }}
                  message="Your profile successfully save"
                  type="success"
                />
              )}
            </Col>
            <Col
              xs={24}
              md={8}
              style={{ display: "flex" }}
              className={styles.avatar}
            >
              <Avatar size={150} src={user.image} />
            </Col>
            <Col xs={24} md={16}>
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
              >
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true },
                    {
                      min: 3,
                      message: "First Name must be minimum 3 characters.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
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
                  <Input />
                </Form.Item>
                <Form.Item
                  name="company"
                  label="Company"
                  rules={[{ required: false }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[{ required: false }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Content>
    </React.Fragment>
  );
}

export default Profile;
