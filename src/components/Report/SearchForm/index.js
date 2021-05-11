import React from "react";
import { Row, Col, Select, Form, DatePicker, Button } from "antd";

function SearchForm() {
  const { Option } = Select;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      style={{ padding: "1rem" }}
    >
      <Row gutter={24}>
        <Col md={8} xs={12} key={"datefrom"}>
          <Form.Item name={"dateFrom"} label={"Date From"}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col md={8} xs={12} key={"dateto"}>
          <Form.Item name={"dateTo"} label={"Date To"}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col md={8} xs={12} key={"incident"}>
          <Form.Item
            name={"incident"}
            label={"Incident"}
            initialValue="allIncidents"
          >
            <Select style={{ marginRight: "1rem" }}>
              <Option value="allIncidents">All Incidents</Option>
              <Option value="noSafetyHelmet">No Safety Helmet</Option>
              <Option value="noReflectiveVest">No Reflective Vest</Option>
              <Option value="peopleIntrusion">People Intrusion</Option>
              <Option value="heavyMachinery">Heavy Machinery</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={8} xs={12} key={"project"}>
          <Form.Item
            name={"project"}
            label={"Projects"}
            initialValue="allProjects"
          >
            <Select style={{ marginRight: "1rem" }}>
              <Option value="allProjects">All Projects</Option>
              <Option value="project1">Project 1</Option>
              <Option value="project2">Project 2</Option>
              <Option value="project3">Project 3</Option>
              <Option value="project4">Project 4</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={8} xs={12} key={"group"}>
          <Form.Item name={"group"} label={"Groups"} initialValue="allGroups">
            <Select style={{ marginRight: "1rem" }}>
              <Option value="allGroups">All Groups</Option>
              <Option value="group1">Group 1</Option>
              <Option value="group2">Group 2</Option>
              <Option value="group3">Group 3</Option>
              <Option value="group4">Group 4</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={8} xs={12} key={"device"}>
          <Form.Item
            name={"device"}
            label={"Devices"}
            initialValue="allDevices"
          >
            <Select style={{ marginRight: "1rem" }}>
              <Option value="allDevices">All Devices</Option>
              <Option value="device1">Device 1</Option>
              <Option value="device2">Device 2</Option>
              <Option value="device3">Device 3</Option>
              <Option value="device4">Device 4</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;
