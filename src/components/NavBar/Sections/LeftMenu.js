import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  DashboardOutlined,
  DesktopOutlined,
  FundViewOutlined,
  CalendarOutlined,
  UnorderedListOutlined  
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user.role === "admin";

  return (
    <Menu theme={"dark"} mode={props.mode}>
      <Menu.Item key="dashboard" icon={<DashboardOutlined/>}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
