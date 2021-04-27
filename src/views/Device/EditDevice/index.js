import React, { useState } from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Input,
  Button,
  Form,
  Select,
  Divider,
  Upload,
  Tooltip,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

import { devices } from "../../../mockData/devices";

function EditDevice() {
  const { Content } = Layout;
  const { Option } = Select;

  const [softwareVersionFile, setSoftwareVersionFile] = useState(null);
  const [AIModelFile, setAIModelFile] = useState(null);

  const [addProjectInput, setAddProjectInput] = useState(false);
  const [addGroupInput, setAddGroupInput] = useState(false);

  const [uploadSoftwareButtonColor, setSoftwareUploadButtonColor] = useState({
    style: {},
  });

  const [uploadAIModelButtonColor, setAIModelUploadButtonColor] = useState({
    style: {},
  });

  console.log(devices);
  const deviceIPAddress = devices[0].DeviceMetadata.IPAddress.split(".");
  const deviceMACAddress = devices[0].DeviceMetadata.MACAddress.split(":");

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    console.log(AIModelFile);
    console.log(softwareVersionFile);
    if (softwareVersionFile) {
      setSoftwareUploadButtonColor({
        style: {
          borderColor: "black",
          color: "black",
        },
      });
    }
    if (AIModelFile) {
      setAIModelUploadButtonColor({
        style: {
          borderColor: "black",
          color: "black",
        },
      });
    }
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const layout = {
    labelCol: { span: 4, offset: 1 },
    wrapperCol: { span: 14 },
    labelAlign: "left",
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
    console.log("test");
  };

  const onClickSubmitButton = () => {
    setSoftwareUploadButtonColor({
      style: {
        borderColor: "red",
        color: "red",
      },
    });

    setAIModelUploadButtonColor({
      style: {
        borderColor: "red",
        color: "red",
      },
    });
  };

  function addProjectButton() {
    console.log("Add Project");

    setAddProjectInput(true);
  }

  function addGroupButton() {
    setAddGroupInput(true);
  }

  function cancelAddProject() {
    setAddProjectInput(false);
  }

  function cancelAddGroup() {
    setAddGroupInput(false);
  }

  const projectForm = () => {
    if (!addProjectInput) {
      return (
        <Form.Item label="Project">
          <Row gutter={16}>
            <Col span={20}>
              <Form.Item
                hasFeedback
                name={["deviceProject"]}
                style={{ marginBottom: 0 }}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Please select project of this device!")
                          ),
                  },
                ]}
              >
                <Select placeholder="Please select a project">
                  <Option value="project1">Project 1</Option>
                  <Option value="project2">Project 2</Option>
                  <Option value="project3">Project 3</Option>
                  <Option value="project4">Project 4</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Tooltip title="Add new project">
                <Button type="primary" onClick={addProjectButton}>
                  <PlusOutlined />
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </Form.Item>
      );
    } else if (addProjectInput) {
      return (
        <Form.Item
          name={["addNewProject"]}
          label="Project"
          validateTrigger="onBlur"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Project is required!")),
            },
          ]}
        >
          <Row gutter={16}>
            <Col span={16}>
              <Input placeholder="Project Name" />
            </Col>
            <Col span={3} offset={1}>
              <Button type="primary">Save</Button>
            </Col>
            <Col span={4}>
              <Button type="primary" onClick={cancelAddProject}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form.Item>
      );
    }
  };

  const groupForm = () => {
    if (!addGroupInput) {
      return (
        <Form.Item label="Group">
          <Row gutter={16}>
            <Col span={20}>
              <Form.Item
                hasFeedback
                name={["deviceGroup"]}
                style={{ marginBottom: 0 }}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Please select group of this device!")
                          ),
                  },
                ]}
              >
                <Select placeholder="Please select a group">
                  <Option value="group1">Group 1</Option>
                  <Option value="group2">Group 2</Option>
                  <Option value="group3">Group 3</Option>
                  <Option value="group4">Group 4</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Tooltip title="Add new group">
                <Button type="primary" onClick={addGroupButton}>
                  <PlusOutlined />
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </Form.Item>
      );
    } else if (addGroupInput) {
      return (
        <Form.Item
          name={["addNewGroup"]}
          label="Group"
          validateTrigger="onBlur"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Group name is required!")),
            },
          ]}
        >
          <Row gutter={16}>
            <Col span={16}>
              <Input placeholder="Group Name" />
            </Col>
            <Col span={3} offset={1}>
              <Button type="primary">Save</Button>
            </Col>
            <Col span={4}>
              <Button type="primary" onClick={cancelAddGroup}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form.Item>
      );
    }
  };

  return (
    <React.Fragment>
      <Content style={{ margin: "auto", maxWidth: "1000px", width: "90%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Device</Breadcrumb.Item>
          <Breadcrumb.Item>Edit Device</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight:
              "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
          }}
        >
          <Row>
            <Col offset={1} style={{ padding: "1rem 0" }}>
              <h2>Edit Device</h2>
            </Col>
          </Row>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            initialValues={{
              deviceId: devices[0].DeviceId,
              name: devices[0].DeviceMetadata.DeviceName,
              description: devices[0].DeviceMetadata.DeviceDescription,
              IPAddress: {
                IPAddress1: deviceIPAddress[0],
                IPAddress2: deviceIPAddress[1],
                IPAddress3: deviceIPAddress[2],
                IPAddress4: deviceIPAddress[3],
              },
              MACAddress: {
                MACAddress1: deviceMACAddress[0],
                MACAddress2: deviceMACAddress[1],
                MACAddress3: deviceMACAddress[2],
                MACAddress4: deviceMACAddress[3],
                MACAddress5: deviceMACAddress[4],
                MACAddress6: deviceMACAddress[5],
              },
              lampPost: devices[0].DeviceMetadata.DeviceLocation.LampPostNumber,
              street: devices[0].DeviceMetadata.DeviceLocation.Street,
              district: devices[0].DeviceMetadata.DeviceLocation.District,
              latitude:
                devices[0].DeviceMetadata.DeviceLocation.DeviceCoordinates
                  .Latitude,
              longitude:
                devices[0].DeviceMetadata.DeviceLocation.DeviceCoordinates
                  .Longitude,
            }}
          >
            <Form.Item
              name={["deviceId"]}
              label="Device ID"
              validateTrigger="onBlur"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Device ID is required!")),
                },
              ]}
            >
              <Input placeholder="Device ID" />
            </Form.Item>
            <Form.Item
              name={["name"]}
              label="Device Name"
              validateTrigger="onBlur"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Device Name is required!")),
                },
              ]}
            >
              <Input placeholder="Device Name" />
            </Form.Item>
            <Form.Item
              name={["deviceDescription"]}
              label="Device Description"
              validateTrigger="onBlur"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Device Description is required!")
                        ),
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            {projectForm()}
            {groupForm()}
            <Form.Item label="IP Address" style={{ marginBottom: 0 }}>
              <Form.Item
                name={["IPAddress", "IPAddress1"]}
                style={{
                  display: "inline-block",
                  width: "12%",
                }}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
              >
                <Input maxLength={3} placeholder="000" />
              </Form.Item>
              <Form.Item
                name={["IPAddress", "IPAddress2"]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
              >
                <Input maxLength={3} placeholder="000" />
              </Form.Item>
              <Form.Item
                name={["IPAddress", "IPAddress3"]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
              >
                <Input maxLength={3} placeholder="000" />
              </Form.Item>
              <Form.Item
                name={["IPAddress", "IPAddress4"]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
              >
                <Input maxLength={3} placeholder="000" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="MAC Address" style={{ marginBottom: 0 }}>
              <Form.Item
                name={["MACAddress", "MACAddress1"]}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "12%",
                }}
              >
                <Input maxLength={2} placeholder="AA" />
              </Form.Item>
              <Form.Item
                name={["MACAddress", "MACAddress2"]}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
              >
                <Input maxLength={2} placeholder="BB" />
              </Form.Item>
              <Form.Item
                name={["MACAddress", "MACAddress3"]}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
              >
                <Input maxLength={2} placeholder="CC" />
              </Form.Item>
              <Form.Item
                name={["MACAddress", "MACAddress4"]}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
              >
                <Input maxLength={2} placeholder="11" />
              </Form.Item>
              <Form.Item
                name={["MACAddress", "MACAddress5"]}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
              >
                <Input maxLength={2} placeholder="22" />
              </Form.Item>
              <Form.Item
                name={["MACAddress", "MACAddress6"]}
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginLeft: "1rem",
                }}
              >
                <Input maxLength={2} placeholder="33" />
              </Form.Item>
            </Form.Item>
            <Divider />
            <Form.Item label="Physical Location" style={{ marginBottom: 0 }}>
              <Form.Item
                name="lampPost"
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "25%",
                }}
              >
                <Input placeholder="Lamp Post" />
              </Form.Item>
              <Form.Item
                name="street"
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "25%",
                  marginLeft: "1rem",
                }}
              >
                <Input placeholder="Street" />
              </Form.Item>
              <Form.Item
                name="district"
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "25%",
                  marginLeft: "1rem",
                }}
              >
                <Input placeholder="District" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Location" style={{ marginBottom: 0 }}>
              <Form.Item
                name="latitude"
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Latitude is required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "40%",
                }}
              >
                <Input placeholder="Latitude" />
              </Form.Item>
              <Form.Item
                name="longitude"
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Longitude is required!")),
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "40%",
                  marginLeft: "1rem",
                }}
              >
                <Input placeholder="Longitude" />
              </Form.Item>
            </Form.Item>
            <Divider />
            <Form.Item
              name="softwareVersion"
              label="Software Version"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Only recieve zip file"
            >
              <Upload
                beforeUpload={(file) => {
                  setSoftwareVersionFile(file);
                  return false;
                }}
              >
                <Button
                  style={uploadSoftwareButtonColor.style}
                  icon={<UploadOutlined />}
                >
                  Click to upload
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="AIModelVersion"
              label="AI Model Version"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Only recieve zip file"
            >
              <Upload
                beforeUpload={(file) => {
                  setAIModelFile(file);
                  return false;
                }}
              >
                <Button
                  style={uploadAIModelButtonColor.style}
                  icon={<UploadOutlined />}
                >
                  Click to upload
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item
              offset={8}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                onClick={onClickSubmitButton}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </React.Fragment>
  );
}

export default EditDevice;