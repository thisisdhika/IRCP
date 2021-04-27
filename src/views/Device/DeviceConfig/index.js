import React from "react";
import { Layout, Breadcrumb } from "antd";

function DeviceConfig() {
  const { Content } = Layout;

  return (
    <React.Fragment>
      <Content style={{ margin: "auto", maxWidth: "1000px", width: "90%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Device</Breadcrumb.Item>
          <Breadcrumb.Item>Device Config</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight:
              "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
          }}
        >
          
        </div>
      </Content>
    </React.Fragment>
  );
}

export default DeviceConfig;
