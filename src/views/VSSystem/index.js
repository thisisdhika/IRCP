import React from "react";
import {Row, Col} from "antd";


function VSSystem() {
    return (
        <div
            className="site-layout-background"
            style={{
            margin: "3rem auto",
            maxWidth: "1000px",
            width: "90%",
            height : "100vh"
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
                    <h2>VS System</h2>
                </Col>
            </Row>

        </div>
    );
}

export default VSSystem;
