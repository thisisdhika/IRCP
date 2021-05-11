import React from "react";
import { Row, Col } from "antd";
import SearchForm from "../../../components/Report/SearchForm";

function Download() {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight:
          "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
      }}
    >
      <Row>
        <Col span={24}>
          <SearchForm />
        </Col>
      </Row>
    </div>
  );
}

export default Download;
