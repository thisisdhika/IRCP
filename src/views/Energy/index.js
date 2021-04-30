import React from "react";
import {Row, Col} from "antd";

function Energy() {
    return (
        <div
            className="site-layout-background"
            style={{
            margin: "3rem auto",
            width: "90%",
            minHeight : "100vh"
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
                    <h2>Energy </h2>
                </Col>
            </Row>

        </div>
    );
}

export default Energy;
