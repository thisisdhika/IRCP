import React from "react";
import {Row, Col} from "antd";
import PeopleCount from "../../components/Dashboard/PeopleCount";
import Report from "../../components/Dashboard/Report";
import IncidentCount from "../../components/Dashboard/IncidentCount";
import Map from "../../components/Map";

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
                    <Report/>
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
                    <Map/>
                    <Map/>
                </Col>
                <Col md={16} xs={24}>
                    <IncidentCount/>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
