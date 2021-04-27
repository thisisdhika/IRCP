import React from "react";
import { Layout, Breadcrumb, Row, Col, Card, Table, Button } from "antd";
import { Gauge } from "@ant-design/charts";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./DeviceDetail.module.css";

function DeviceList() {
  const { Content } = Layout;

  var config = {
    height: 200,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ["#F4664A", "#FAAD14", "#30BF78"],
    },
    indicator: {
      pointer: { style: { stroke: "#D0D0D0" } },
      pin: { style: { stroke: "#D0D0D0" } },
    },
    statistic: {
      content: {
        style: {
          fontSize: "20px",
          lineHeight: "36px",
        },
      },
    },
  };

  const title = () => "Device Information";

  const SoftwareVersionDescriptionAndButton = () => {
    return (
      <div>
        <span>string // string // 2021-01-21T08:44:54.356+00:00</span>
        <Button type="primary" style={{ marginLeft: "1rem" }}>
          Upload
        </Button>
      </div>
    );
  };

  const AIModelDescriptionAndButton = () => {
    return (
      <div>
        <span>string // string // 2021-01-21T08:44:54.356+00:00</span>
        <Button type="primary" style={{ marginLeft: "1rem" }}>
          Upload
        </Button>
      </div>
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];

  const dataTable = [
    {
      key: "1",
      name: "Device ID",
      description: "DEV-1",
    },
    {
      key: "2",
      name: "Device Name",
      description: "Project 1",
    },
    {
      key: "3",
      name: "Project",
      description: "Project 1",
    },
    {
      key: "4",
      name: "Group",
      description: "Group 1",
    },
    {
      key: "5",
      name: "Device Description",
      description: "This is a description",
    },
    {
      key: "6",
      name: "IP Address",
      description: "192.168.1.1",
    },
    {
      key: "7",
      name: "MAC Address",
      description: "00:1B:44:11:3A:B7",
    },
    {
      key: "8",
      name: "Physical Location",
      description: "36 Science Park 1 Road, Sha Tin",
    },
    {
      key: "9",
      name: "GPS Coordinates",
      description: "22.344044°N 114.100998° E",
    },
    {
      key: "10",
      name: "Software (1) Version and Update Date",
      description: SoftwareVersionDescriptionAndButton(),
    },
    {
      key: "11",
      name: "AI Model Version and Update Date",
      description: AIModelDescriptionAndButton(),
    },
    {
      key: "12",
      name: "Health Status",
      description: "Healthy",
    },
    {
      key: "13",
      name: "Last Seen Date and Time",
      description: "2021-01-21T08:44:54.356+00:00",
    },
    {
      key: "14",
      name: "Status",
      description: "Online",
    },
  ];

  return (
    <React.Fragment>
      <Content style={{ margin: "auto", maxWidth: "1000px", width: "90%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Device</Breadcrumb.Item>
          <Breadcrumb.Item>Device Detail</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight:
              "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
          }}
        >
          <Row justify={"space-between"} style={{ padding: "1rem 0" }}>
            <Col>
              <h2>Device Information</h2>
            </Col>
            <Col>
              <Button type="primary" style={{ marginRight: "1rem" }}>
                <SearchOutlined />
              </Button>
              <Button type="primary">
                <SettingOutlined />
              </Button>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col md={8} xs={24} className={styles.cardMargin}>
              <Card title="CPU Utilization">
                <Gauge {...config} percent={0.2} />
              </Card>
            </Col>
            <Col md={8} xs={24}>
              <Card title="GPU Utilization" className={styles.cardMargin}>
                <Gauge {...config} percent={0.3} />
              </Card>
            </Col>
            <Col md={8} xs={24}>
              <Card title="Memory Utilization" className={styles.cardMargin}>
                <Gauge {...config} percent={0.1} />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "2rem" }}>
            <Col span={24}>
              <Table
                title={title}
                showHeader={false}
                columns={columns}
                dataSource={dataTable}
                style={{ marginTop: "1rem" }}
                scroll={{ x: "max-content" }}
                bordered={true}
                pagination={false}
              />
            </Col>
          </Row>
        </div>
      </Content>
    </React.Fragment>
  );
}

export default DeviceList;
