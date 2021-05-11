import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Breadcrumb, Tabs } from "antd";
import SafetyMonitor from "./SafetyMonitor";
import Incidents from "./Incidents";
import Download from "./Download";

function Report(props) {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  const history = useHistory();

  const location = useLocation();

  return (
    <React.Fragment>
      <Content style={{ margin: "auto", maxWidth: "1000px", width: "90%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Report</Breadcrumb.Item>
        </Breadcrumb>
        <div className="card-container">
          <Tabs
            type="card"
            activeKey={location.pathname.split("/")[2]}
            onChange={(key) => {
              history.push(`/report/${key}`);
            }}
          >
            <TabPane tab="Safety Monitor" key="safety-monitor">
              <SafetyMonitor />
            </TabPane>
            <TabPane tab="Incidents" key="incidents">
              <Incidents />
            </TabPane>
            <TabPane tab="Download" key="download">
              <Download />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </React.Fragment>
  );
}

export default Report;
