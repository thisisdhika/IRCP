import React from "react";
import {Row, Col} from "antd";
import PeopleCount from "../../components/Dashboard/PeopleCount";
import List from "../../components/Dashboard/List";
import IncidentCount from "../../components/Dashboard/IncidentCount";
import Map from "../../components/Map";

function Dashboard() {
    let width = window.innerWidth;
    let mediumScreen = false;

    if (width > 767) {
        mediumScreen = true;
    }

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
                <Col md={10} xs={24}>
                    <List/>
                </Col>
                <Col md={14} xs={24}>
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
            <Row style={{padding: mediumScreen? "20px" : "0px", paddingBottom: "40px"}}>
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
