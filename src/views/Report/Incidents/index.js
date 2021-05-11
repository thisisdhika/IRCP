import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Table,
  Modal,
  Image,
  Button,
  Select,
  Form,
  DatePicker,
} from "antd";
import moment from "moment";
import ReactPlayer from "react-player";
import {
  EyeOutlined,
  DownloadOutlined,
  FileImageOutlined,
  VideoCameraOutlined,
  LikeOutlined,
  DislikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import IncidentCount from "../../../components/Report/IncidentCount";
import TennisImage from "../../../assets/img/tennis.jpg";
import SampleVideo from "../../../assets/img/720p_video_sample.mp4";
import styles from "./Incidents.module.css";

import incidentData from "../../../mockData/incidentData";

function Incidents() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const [selectedIncident, setSelectedIncident] = useState("allIncidents");

  const [dataTable, setDataTable] = useState([]);

  const [mediaTypeToShow, setMediaTypeToShow] = useState("image");

  useEffect(() => {
    let dataToLoop = [];

    incidentData.forEach((inc) => {
      if (selectedIncident === "allIncidents") {
        const dateData = moment(inc.date, "D-M-YYYY").format("YYYY-MM-DD");

        /* Handling default filter, date from and date to empty */
        if (dateFrom === null && dateTo === null) {
          dataToLoop.push({
            key: inc.key,
            date: inc.date,
            incident: inc.incident,
            occurences: inc.occurences,
            locations: inc.locations,
            history: (
              <Button type="primary">
                <EyeOutlined onClick={onClickHistory} className={styles.logo} />
              </Button>
            ),
            download: (
              <Button type="primary">
                <DownloadOutlined className={styles.logo} />
              </Button>
            ),
          });
        }

        if (moment(dateData).isSameOrAfter(dateFrom, "day")) {
          /* Handling date from != null, date to = null */
          if (dateTo === null) {
            dataToLoop.push({
              key: inc.key,
              date: inc.date,
              incident: inc.incident,
              occurences: inc.occurences,
              locations: inc.locations,
              history: (
                <Button type="primary">
                  <EyeOutlined
                    onClick={onClickHistory}
                    className={styles.logo}
                  />
                </Button>
              ),
              download: (
                <Button type="primary">
                  <DownloadOutlined className={styles.logo} />
                </Button>
              ),
            });
          }

          /* Handling date from != null, date to != null */
          if (moment(dateData).isSameOrBefore(dateTo, "day")) {
            dataToLoop.push({
              key: inc.key,
              date: inc.date,
              incident: inc.incident,
              occurences: inc.occurences,
              locations: inc.locations,
              history: (
                <Button type="primary">
                  <EyeOutlined
                    onClick={onClickHistory}
                    className={styles.logo}
                  />
                </Button>
              ),
              download: (
                <Button type="primary">
                  <DownloadOutlined className={styles.logo} />
                </Button>
              ),
            });
          }
        }

        if (moment(dateData).isSameOrBefore(dateTo, "day")) {
          /* Handling date from != null, date to = null */
          if (dateFrom === null) {
            dataToLoop.push({
              key: inc.key,
              date: inc.date,
              incident: inc.incident,
              occurences: inc.occurences,
              locations: inc.locations,
              history: (
                <Button type="primary">
                  <EyeOutlined
                    onClick={onClickHistory}
                    className={styles.logo}
                  />
                </Button>
              ),
              download: (
                <Button type="primary">
                  <DownloadOutlined className={styles.logo} />
                </Button>
              ),
            });
          }
        }

        setDataTable(dataToLoop);
      }

      if (selectedIncident === inc.incident) {
        const dateData = moment(inc.date, "D-M-YYYY").format("YYYY-MM-DD");

        if (dateFrom === null && dateTo === null) {
          dataToLoop.push({
            key: inc.key,
            date: inc.date,
            incident: inc.incident,
            occurences: inc.occurences,
            locations: inc.locations,
            history: (
              <Button type="primary">
                <EyeOutlined onClick={onClickHistory} className={styles.logo} />
              </Button>
            ),
            download: (
              <Button type="primary">
                <DownloadOutlined className={styles.logo} />
              </Button>
            ),
          });
        }

        if (moment(dateData).isSameOrAfter(dateFrom, "day")) {
          /* Handling date from != null, date to = null */
          if (dateTo === null) {
            dataToLoop.push({
              key: inc.key,
              date: inc.date,
              incident: inc.incident,
              occurences: inc.occurences,
              locations: inc.locations,
              history: (
                <Button type="primary">
                  <EyeOutlined
                    onClick={onClickHistory}
                    className={styles.logo}
                  />
                </Button>
              ),
              download: (
                <Button type="primary">
                  <DownloadOutlined className={styles.logo} />
                </Button>
              ),
            });
          }

          /* Handling date from != null, date to != null */
          if (moment(dateData).isSameOrBefore(dateTo, "day")) {
            dataToLoop.push({
              key: inc.key,
              date: inc.date,
              incident: inc.incident,
              occurences: inc.occurences,
              locations: inc.locations,
              history: (
                <Button type="primary">
                  <EyeOutlined
                    onClick={onClickHistory}
                    className={styles.logo}
                  />
                </Button>
              ),
              download: (
                <Button type="primary">
                  <DownloadOutlined className={styles.logo} />
                </Button>
              ),
            });
          }
        }

        if (moment(dateData).isSameOrBefore(dateTo, "day")) {
          /* Handling date from != null, date to = null */
          if (dateFrom === null) {
            dataToLoop.push({
              key: inc.key,
              date: inc.date,
              incident: inc.incident,
              occurences: inc.occurences,
              locations: inc.locations,
              history: (
                <Button type="primary">
                  <EyeOutlined
                    onClick={onClickHistory}
                    className={styles.logo}
                  />
                </Button>
              ),
              download: (
                <Button type="primary">
                  <DownloadOutlined className={styles.logo} />
                </Button>
              ),
            });
          }
        }

        setDataTable(dataToLoop);
      }
    });
  }, [selectedIncident, dateFrom, dateTo]);

  const changeDateFrom = (value) => {
    if (value !== null) {
      setDateFrom(value.format("YYYY-MM-DD"));
    } else {
      setDateFrom(null);
    }
  };

  const changeDateTo = (value) => {
    if (value !== null) {
      setDateTo(value.format("YYYY-MM-DD"));
    } else {
      setDateTo(null);
    }
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "Incident",
      dataIndex: "incident",
      key: "incident",
      sorter: (a, b) => a.incident.localeCompare(b.incident),
    },
    {
      title: "Occurences",
      dataIndex: "occurences",
      key: "occurences",
      sorter: (a, b) => a.occurences - b.occurences,
    },
    {
      title: "Locations",
      key: "locations",
      dataIndex: "locations",
      sorter: (a, b) => a.locations.localeCompare(b.locations),
    },
    {
      title: "History",
      key: "history",
      dataIndex: "history",
    },
    {
      title: "Download",
      key: "download",
      dataIndex: "download",
    },
  ];

  const columns2 = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Media",
      dataIndex: "media",
      key: "media",
    },
  ];

  function onClickHistory() {
    console.log("History");
    setVisible(true);
  }

  function openImage() {
    setMediaTypeToShow("image");
    setVisible2(true);
  }

  function openVideo() {
    setMediaTypeToShow("video");
    setVisible2(true);
  }

  function onLike() {
    setLike(true);
    setDislike(false);
  }

  function onDislike() {
    setDislike(true);
    setLike(false);
  }

  function onUnlike() {
    setLike(false);
  }

  function onUndislike() {
    setDislike(false);
  }

  const mediaToShow = () => {
    if (mediaTypeToShow === "image") {
      return <Image src={TennisImage} />;
    } else if (mediaTypeToShow === "video") {
      return <ReactPlayer url={SampleVideo} width="100%" playing controls />;
    }
  };

  const likeButton = () => {
    if (!like) {
      return <LikeOutlined className={styles.thumbs} onClick={onLike} />;
    } else if (like) {
      return <LikeFilled className={styles.thumbs} onClick={onUnlike} />;
    }
  };

  const dislikeButton = () => {
    if (!dislike) {
      return (
        <DislikeOutlined className={styles.thumbsLeft} onClick={onDislike} />
      );
    } else if (dislike) {
      return (
        <DislikeFilled className={styles.thumbsLeft} onClick={onUndislike} />
      );
    }
  };

  const { Option } = Select;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const dataTable2 = [
    {
      key: "1",
      time: "3-17-2021",
      location: "Main Entry",
      media: (
        <div>
          <Button type="primary">
            <FileImageOutlined
              onClick={openImage}
              className={styles.logoModal}
            />
          </Button>
          <Button type="primary">
            <VideoCameraOutlined onClick={openVideo} className={styles.logo} />
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      time: "3-16-2021",
      location: "Main Entry",
      media: (
        <div>
          <Button type="primary">
            <FileImageOutlined
              onClick={openImage}
              className={styles.logoModal}
            />
          </Button>
          <Button type="primary">
            <VideoCameraOutlined onClick={openVideo} className={styles.logo} />
          </Button>
        </div>
      ),
    },
    {
      key: "3",
      time: "3-16-2021",
      location: "Main Entry",
      media: (
        <div>
          <Button type="primary">
            <FileImageOutlined
              onClick={openImage}
              className={styles.logoModal}
            />
          </Button>
          <Button type="primary">
            <VideoCameraOutlined onClick={openVideo} className={styles.logo} />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight:
          "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
      }}
    >
      <Modal
        title="2021-03-04-20:00 No Safety Helmet"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={800}
      >
        <Row>
          <Col span={24}>
            <Table
              columns={columns2}
              dataSource={dataTable2}
              scroll={{ x: "max-content" }}
              pagination={false}
            />
          </Col>
        </Row>
      </Modal>
      <Modal
        title="2021-03-04-20:00 No Safety Helmet Main Entry"
        centered
        visible={visible2}
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
        width={"50%"}
      >
        {mediaToShow()}
        <Row justify="end" style={{ paddingTop: "1rem" }}>
          <Col>
            {dislikeButton()}
            {likeButton()}
          </Col>
        </Row>
      </Modal>
      <Row>
        <Col>
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
                  <DatePicker
                    format="D-M-YYYY"
                    onChange={(value) => changeDateFrom(value)}
                  />
                </Form.Item>
              </Col>
              <Col md={8} xs={12} key={"dateto"}>
                <Form.Item name={"dateTo"} label={"Date To"}>
                  <DatePicker
                    format="D-M-YYYY"
                    onChange={(value) => changeDateTo(value)}
                  />
                </Form.Item>
              </Col>
              <Col md={8} xs={12} key={"incident"}>
                <Form.Item
                  name={"incident"}
                  label={"Incident"}
                  initialValue={selectedIncident}
                >
                  <Select
                    style={{ marginRight: "1rem" }}
                    onChange={(value) => {
                      setSelectedIncident(value);
                    }}
                  >
                    <Option value="allIncidents">All Incidents</Option>
                    <Option value="No Safety Helmet">No Safety Helmet</Option>
                    <Option value="No Reflective Vest">
                      No Reflective Vest
                    </Option>
                    <Option value="People Intrusion">People Intrusion</Option>
                    <Option value="Heavy Machinery">Heavy Machinery</Option>
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
                <Form.Item
                  name={"group"}
                  label={"Groups"}
                  initialValue="allGroups"
                >
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
          <h2>Recent Incidents</h2>
          <Table
            columns={columns}
            dataSource={dataTable}
            style={{ marginTop: "1rem" }}
            scroll={{ x: "max-content" }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "3rem" }}>
        <Col span={24}>
          <IncidentCount />
        </Col>
      </Row>
    </div>
  );
}

export default Incidents;
