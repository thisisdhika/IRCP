import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  DashboardOutlined,
  BulbOutlined,
  CalendarOutlined,
  ThunderboltFilled,
  UnorderedListOutlined  
} from "@ant-design/icons";
// import { useSelector } from "react-redux";


function LeftMenu(props) {
  // const user = useSelector((state) => state.auth.user);
  // const isAdmin = user.role === "admin";

  return (
    <Menu theme={"dark"} mode={props.mode}>
      <Menu.Item key="dashboard" icon={<DashboardOutlined/>}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="energy" icon={<ThunderboltFilled/>}>
        <Link to="/energy">Energy</Link>
      </Menu.Item>
      <Menu.Item key="Light" icon={<BulbOutlined />}>
        <Link to="/light">Light</Link>
      </Menu.Item>
      <Menu.Item key="booking" icon={<CalendarOutlined/>}>
        <Link to="/booking">Booking</Link>
      </Menu.Item>
      <Menu.Item key="vssystem" icon={<UnorderedListOutlined/>}>
        <Link to="/vssystem">VS System</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
