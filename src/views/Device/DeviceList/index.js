import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Table,
  Input,
  Button,
  Modal,
} from "antd";
import {
  SearchOutlined,
  EditOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { devices } from "../../../mockData/devices";
import styles from "./DeviceList.module.css";

function DeviceList() {
  const { Content } = Layout;

  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(moment("2021-01-21T08:49:07.564558").format("YYYY-MM-DD hh:mm"));

  const toEditDevicePage = () => {
    history.push("/device/edit-device");
  };

  const toDeviceDetailPage = () => {
    history.push("/device/device-detail");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const dataTable = [];

  devices.forEach((dev) => {
    const data = {
      key: dev.DeviceId,
      deviceId: dev.DeviceId,
      project: "Project 1",
      group: dev.DeviceMetadata.DeviceGroup,
      healthStatus: dev.DeviceStatus.HealthStatus,
      status: dev.DeviceStatus.ConnectionStatus,
      currentConfiguration:
        "Software: Deepstream // v13.5 //2020-01-20T23:00:00 Software: SystemMonitor // v13.5 // 2020-01-20T23:00:00 AI Model:",
      lastSeen: moment(dev.DeviceStatus.LastSeenDateTime).format(
        "YYYY-MM-DD hh:mm"
      ),
      IPAddress: dev.DeviceMetadata.IPAddress,
      action: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button type="primary" onClick={toDeviceDetailPage}>
            <SearchOutlined />
          </Button>
          <Button type="primary" onClick={toEditDevicePage}>
            <EditOutlined />
          </Button>
          <Button type="primary">
            <SettingOutlined />
          </Button>
          <Button type="primary" onClick={showModal}>
            <DeleteOutlined />
          </Button>
        </div>
      ),
    };

    dataTable.push(data);
  });

  console.log(devices);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const history = useHistory();

  const columns = [
    {
      title: "Device ID",
      dataIndex: "deviceId",
      key: "deviceId",
      sorter: (a, b) => a.deviceId.localeCompare(b.deviceId),
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      sorter: (a, b) => a.project.localeCompare(b.project),
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
      sorter: (a, b) => a.group.localeCompare(b.group),
    },
    {
      title: "Health Status",
      key: "healthStatus",
      dataIndex: "healthStatus",
      sorter: (a, b) => a.healthStatus.localeCompare(b.healthStatus),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Current Configuration",
      key: "currentConfiguration",
      dataIndex: "currentConfiguration",
      width: 300,
      sorter: (a, b) =>
        a.currentConfiguration.localeCompare(b.currentConfiguration),
    },
    {
      title: "Last Seen",
      key: "lastSeen",
      dataIndex: "lastSeen",
      sorter: (a, b) => a.lastSeen.localeCompare(b.lastSeen),
    },
    {
      title: "IPAddress",
      key: "IPAddress",
      dataIndex: "IPAddress",
      sorter: (a, b) => a.IPAddress.localeCompare(b.IPAddress),
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      width: 100,
    },
  ];

  return (
    <React.Fragment>
      <Modal
        title="Delete Device"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure to delete this device?</p>
      </Modal>
      <Content style={{ margin: "auto", maxWidth: "1000px", width: "90%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Device</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
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
            <Col>
              <h2>Device List</h2>
            </Col>
          </Row>
          <Row
            justify={"space-between"}
            style={{
              padding: "1rem 0",
              backgroundColor: "#fbfbfb",
              border: "1px solid #d9d9d9",
              borderRadius: "2px",
            }}
          >
            <Col
              md={7}
              xs={22}
              offset={1}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ marginBottom: 0 }}>Series Code : </p>
              <Input style={{ width: 150 }} />
            </Col>
            <Col md={15} offset={1} xs={22}>
              <Link to="/device/add-device">
                <Button className={styles.addNewDeviceButton} type="primary">
                  Add New Device
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={dataTable}
                className={styles.tableStyle}
              />
            </Col>
          </Row>
        </div>
      </Content>
    </React.Fragment>
  );
}

export default DeviceList;
