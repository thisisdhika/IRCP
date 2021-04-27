import React from "react";
import {Row, Col} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import PeopleCount from "../../components/Dashboard/PeopleCount";
import IncidentCount from "../../components/Dashboard/IncidentCount";

function Dashboard() {
    return (
        <div
            className="site-layout-background"
            style={{
            margin: "3rem auto",
            maxWidth: "1000px",
            width: "90%"
        }}>
            <Row
                style={{
                padding: "1rem 0.2rem",
                backgroundColor: "#fbfbfb",
                border: "1px solid #d9d9d9",
                borderRadius: "2px"
            }}>
                <Col
                    span={24}
                    style={{
                    textAlign: "center"
                }}>
                    <h2>Energy Monitoring of Tennis Court</h2>
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={24}>
                    <span
                        style={{
                        display: 'block',
                        fontSize: '18px',
                        paddingLeft: '2rem',
                        paddingTop: '2rem',
                        paddingBottom: '0',
                        fontWeight: 600
                    }}>
                        <UnorderedListOutlined
                            style={{
                            paddingRight: '1rem'
                        }}/>
                        Report
                    </span>
                </Col>
                <Col md={12} xs={24}>
                    <PeopleCount/>
                </Col>
            </Row>
            <Row
                style={{
                padding: "1rem 0.2rem",
                backgroundColor: "#fbfbfb",
                border: "1px solid #d9d9d9",
                borderRadius: "2px"
            }}>
                <Col
                    span={24}
                    style={{
                    textAlign: "center"
                }}>
                    <h2>People Counting</h2>
                </Col>
            </Row>
            <Row>
                <Col md={8} xs={24}>
                    <div> Map </div>
                </Col>
                <Col md={16} xs={24}>
                    <IncidentCount/>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
