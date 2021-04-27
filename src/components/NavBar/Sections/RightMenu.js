import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Menu } from "antd";
import { AlertOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { logout } from "../../../store/actions/auth";
const { SubMenu } = Menu;

function RightMenu(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <Menu theme="dark" mode={props.mode}>
      <Menu.Item>
        <span>
          <AlertOutlined />
        </span>
      </Menu.Item>
      <SubMenu icon={<UserOutlined />}>
        <Menu.Item key="profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <p onClick={handleLogout}>Logout</p>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default RightMenu;
