import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  GlobalOutlined,
  DesktopOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user.role === "admin";

  return (
    <Menu theme={"dark"} mode={props.mode}>
      <Menu.Item key="map" icon={<GlobalOutlined />}>
        <Link to="/">Map</Link>
      </Menu.Item>
      <SubMenu title={<span>Device</span>} icon={<DesktopOutlined />}>
        <Menu.Item key="deviceList">
          <Link to="/device">Device List</Link>
        </Menu.Item>
        {isAdmin && (
          <Menu.Item key="addDevice">
            <Link to="/device/add-device">Add Device</Link>
          </Menu.Item>
        )}
      </SubMenu>
      <SubMenu title={<span>Report</span>} icon={<FundViewOutlined />}>
        <Menu.Item key="eeee">
          <Link to="/report/safety-monitor">Safety Monitor</Link>
        </Menu.Item>
        <Menu.Item key="aaaa">
          <Link to="/report/incidents">Incidents</Link>
        </Menu.Item>
        <Menu.Item key="jjjj">
          <Link to="/report/download">Download</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
