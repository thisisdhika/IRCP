import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import LeftMenu from "./Sections/LeftMenu";
import { Drawer, Collapse, Menu, Badge, Modal, Row, Col } from "antd";
import {
  MenuOutlined,
  AlertOutlined,
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import kartax from "../../assets/img/karta-x.png";
import styles from "./NavBar.module.css";
import incidentData from "../../mockData/incidentData";

import { logout } from "../../store/actions/auth";

import ReactPlayer from "react-player";
import SampleVideo from "../../assets/img/720p_video_sample.mp4";

function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [visible, setVisible] = useState(false);
  const [openRightSideBar, setOpenRightSideBar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const { SubMenu } = Menu;

  let width = window.innerWidth;
  let mediumScreen = false;

  if (width > 767) {
    mediumScreen = true;
  }

  useEffect(() => {}, []);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const { Panel } = Collapse;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  function openSideBar() {
    setOpenRightSideBar(true);
  }

  function closeSideBar() {
    setOpenRightSideBar(false);
  }

  function onLike() {
    setLike(true);
    setDislike(false);
  }

  function onDislike() {
    setDislike(true);
    setLike(false);
  }

  function onUnlike() {
    setLike(false);
  }

  function onUndislike() {
    setDislike(false);
  }

  const likeButton = () => {
    if (!like) {
      return <LikeOutlined className={styles.thumbs} onClick={onLike} />;
    } else if (like) {
      return <LikeFilled className={styles.thumbs} onClick={onUnlike} />;
    }
  };

  const dislikeButton = () => {
    if (!dislike) {
      return (
        <DislikeOutlined className={styles.thumbsLeft} onClick={onDislike} />
      );
    } else if (dislike) {
      return (
        <DislikeFilled className={styles.thumbsLeft} onClick={onUndislike} />
      );
    }
  };

  let arrayOfIncidentsData = {
    0: [],
    1: [],
    2: [],
  };

  const incidentAlertData = () => {
    incidentData.forEach((inc, index) => {
      const dateData = moment(inc.date, "D-M-YYYY");

      if (dateData.isSameOrBefore(moment(), "day")) {
        const difference = moment().diff(dateData, "days");

        if (difference <= 2) {
          arrayOfIncidentsData[difference].push({
            ...inc,
          });
        }
      }
    });

    return (
      <React.Fragment>
        <Panel header="Today">
          {arrayOfIncidentsData[0].map((arr, index) => (
            <div
              key={index}
              onClick={() => setOpenModal(true)}
              style={{ cursor: "pointer" }}
            >
              <h3>{arr.incident}</h3>
              <p>{arr.locations}</p>
            </div>
          ))}
        </Panel>
        <Panel header="Yesterday">
          {arrayOfIncidentsData[1].map((arr, index) => (
            <div
              key={index}
              onClick={() => setOpenModal(true)}
              style={{ cursor: "pointer" }}
            >
              <h3>{arr.incident}</h3>
              <p>{arr.locations}</p>
            </div>
          ))}
        </Panel>
        <Panel header="2 Days ago">
          {arrayOfIncidentsData[2].map((arr, index) => (
            <div
              key={index}
              onClick={() => setOpenModal(true)}
              style={{ cursor: "pointer" }}
            >
              <h3>{arr.incident}</h3>
              <p>{arr.locations}</p>
            </div>
          ))}
        </Panel>
      </React.Fragment>
    );
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
        <Drawer
          title="Incident Alerts"
          width={300}
          onClose={closeSideBar}
          visible={openRightSideBar}
        >
          <Collapse defaultActiveKey={["0"]}>{incidentAlertData()}</Collapse>
        </Drawer>
        <Modal
          title="2021-03-04-20:00 No Safety Helmet Main Entry"
          centered
          visible={openModal}
          onOk={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
          width={mediumScreen ? "50%" : "100%"}
        >
          <ReactPlayer url={SampleVideo} width="100%" playing controls />
          <Row justify="end" style={{ paddingTop: "1rem" }}>
            <Col>
              {dislikeButton()}
              {likeButton()}
            </Col>
          </Row>
        </Modal>
        <img id="logo" src={kartax} alt="" />
        <Link id="logo_title" to="/">
          KACSA
        </Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>
              <Badge count={arrayOfIncidentsData[0].length}>
                <AlertOutlined
                  style={{ color: "white" }}
                  onClick={openSideBar}
                />
              </Badge>
            </Menu.Item>
            <SubMenu
              icon={<UserOutlined />}
              title={<span>{user.firstName}</span>}
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
