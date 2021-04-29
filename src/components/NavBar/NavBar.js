import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LeftMenu from "./Sections/LeftMenu";
import { Drawer, Menu } from "antd";
import {
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import kartax from "../../assets/img/karta-x.png";

import { logout } from "../../store/actions/auth";

function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [visible, setVisible] = useState(false);

  const { SubMenu } = Menu;

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <MenuOutlined className="menu__mobile-button" onClick={showDrawer} />
        <Drawer
          title="KXI Kacsa"
          placement="left"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
          theme="dark"
        >
          <LeftMenu mode="inline" />
        </Drawer>
        
        <img id="logo" src={kartax} alt="" />
        <Link id="logo_title" to="/">
          IRCP
        </Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <Menu theme="dark" mode="horizontal">
            {/* <Menu.Item>
              <Badge count={5}>
                <AlertOutlined
                  style={{ color: "white" }}
                  onClick={openSideBar}
                />
              </Badge>
            </Menu.Item> */}
            <SubMenu
              icon={<UserOutlined />}
              title={<span style={{padding:10}}>{user.firstName}</span>}
            >
              <Menu.Item key="profile">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <p onClick={handleLogout}>Logout</p>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
