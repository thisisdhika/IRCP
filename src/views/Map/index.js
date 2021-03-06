import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Select, Modal, Space, Button } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  EnvironmentFilled,
  SettingFilled,
  EditFilled,
  EyeFilled,
  ToolFilled,
} from "@ant-design/icons";
import Marker from "../../components/Marker";
import GoogleMap from "../../components/GoogleMap";
import TableMap from "../../components/TableMap";
import {
  defaultProps,
  initProjectOptions,
  initGroupOptions,
  labelDescription,
} from "./helper";
import styles from "./map.module.css";
import { devices as initDevices } from "../../mockData/devices";

const { Option } = Select;

const Map = () => {
  const { Content } = Layout;
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(initProjectOptions);
  const [groups, setGroups] = useState(initGroupOptions);
  const [devices, setDevices] = useState(null); // for maps
  const [devicesTbl, setDevicesTbl] = useState(null); // for table
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [centeredDevice, setCenteredDevice] = useState(null); // for centering map
  const [selectedDevice, setSelectedDevice] = useState(null); // for popup modal
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // for table selected
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user.role === "admin";

  useEffect(() => {
    for (let i = 0; i < initDevices.length; i++) {
      initDevices[i].key = i;
      initDevices[i].group = initGroupOptions.filter(
        (item) => item.id === initDevices[i].DeviceMetadata.DeviceGroup
      )[0];
    }
    setDevices(initDevices);
    setDevicesTbl(initDevices);
    setSelectedRowKeys(initDevices.map((element) => element.key));
    setCenteredDevice(initDevices[0]);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const handleScreenResize = () => {
    setWindowHeight(window.innerHeight);
    setIsMobile(window.innerWidth <= 768);
  };

  const fillDescription = (deviceDetail) => {
    return (
      <>
        {labelDescription(
          "Device Name",
          deviceDetail?.DeviceMetadata?.DeviceName
        )}
        {labelDescription(
          "Project Name",
          deviceDetail?.DeviceMetadata?.projectName
        )}
        {labelDescription(
          "Group ID",
          deviceDetail?.DeviceMetadata?.DeviceGroup
        )}
        {labelDescription(
          "Device Description",
          deviceDetail?.DeviceMetadata?.DeviceDescription
        )}
        {labelDescription(
          "IP Address",
          deviceDetail?.DeviceMetadata?.IPAddress
        )}
        {labelDescription(
          "MAC Address",
          deviceDetail?.DeviceMetadata?.MACAddress
        )}
        {labelDescription(
          "Physical Location",
          deviceDetail?.DeviceMetadata?.DeviceLocation.Street +
            ", " +
            deviceDetail?.DeviceMetadata?.DeviceLocation.District +
            ", " +
            deviceDetail?.DeviceMetadata?.DeviceLocation.LampPostNumber +
            ""
        )}
        {labelDescription(
          "Geolocation",
          deviceDetail?.DeviceMetadata?.DeviceLocation.DeviceCoordinates
            .Latitude +
            ", " +
            deviceDetail?.DeviceMetadata?.DeviceLocation.DeviceCoordinates
              .Longitude
        )}
        {labelDescription(
          "AI Model Version",
          deviceDetail?.AIModelMetadata?.AIModelVersion
        )}
        {labelDescription(
          "AI Update Time",
          deviceDetail?.AIModelMetadata?.UpdateDateTime
        )}
        {labelDescription(
          "Health Status",
          deviceDetail?.DeviceStatus?.HealthStatus
        )}
        {labelDescription(
          "Last seen time",
          deviceDetail?.DeviceStatus?.LastSeenDateTime
        )}
        {labelDescription(
          "Connection Status",
          deviceDetail?.DeviceStatus?.ConnectionStatus
        )}
      </>
    );
  };

  const handleSelectProject = (value) => {
    let devices = [];
    if (value === "All") {
      setSelectedProject("All");
      setGroups(initGroupOptions);
      devices = initDevices;
    } else {
      const project = projects[value - 1];

      setSelectedProject(project?.id);
      const filteredGroup = initGroupOptions.filter((element) => {
        if (project) return element.projectId === project?.id;
        else return element;
      });
      setGroups(filteredGroup);

      const groupsIds = filteredGroup.map((element) => element.id);
      devices = initDevices.filter((element) =>
        groupsIds.includes(element.DeviceMetadata.DeviceGroup)
      );
    }

    setSelectedGroup("All");
    setDevices(devices);
    setDevicesTbl(devices);
    setCenteredDevice(devices[0]);
    setSelectedRowKeys(devices.map((element) => element.key));
  };

  const handleSelectGroup = (value) => {
    let devices = [];
    if (value === "All") {
      setSelectedGroup(value);

      const filteredGroup = initGroupOptions.filter((element) => {
        if (selectedProject === "All") return element;
        else return element.projectId === selectedProject;
      });

      const groupsIds = filteredGroup.map((element) => element.id);
      devices = initDevices.filter((element) =>
        groupsIds.includes(element.DeviceMetadata.DeviceGroup)
      );
    } else {
      const group = initGroupOptions[value - 1];
      setSelectedGroup(group.id);

      devices = initDevices.filter((element) => {
        if (group) return element.DeviceMetadata.DeviceGroup === group?.id;
        else return null;
      });
    }

    setDevices(devices);
    setDevicesTbl(devices);
    setCenteredDevice(devices[0]);
    setSelectedRowKeys(devices.map((element) => element.key));
  };

  const onMarkerClick = (device) => {
    setSelectedDevice(device);
    setVisibleModal(!visibleModal);
  };

  const onMarkerHover = (device) => {
    setSelectedDevice(device);
  };

  const onRowClick = (row) => {
    setSelectedDevice(row);
    setCenteredDevice(row);
    // setVisibleModal(!visibleModal)
  };

  const onSelectRowChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
    const devices = initDevices.filter((element) =>
      selectedRowKeys.includes(element.key)
    );
    setDevices(devices);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectRowChange,
  };

  const handleVisibleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };

  const handleDeviceDetail = () => {
    history.push("/device/device-detail");
  };

  const handleDeviceEdit = () => {
    history.push("/device/edit-device");
  };

  const handleDeviceConfig = () => {
    history.push("/device/device-config");
  };

  return (
    <React.Fragment>
      <Content
        className={styles.container}
        style={{
          margin: "auto",
          marginTop: "30px",
          maxWidth: "1200px",
          width: "90%",
        }}
      >
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>Map</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.body}>
          {/* Body */}
          <div className={styles.rowBody}>
            {/* Map */}
            <div
              className={styles.columnMap}
              style={{
                height: isMobile
                  ? windowHeight - 200 + "px"
                  : windowHeight - 202 + "px",
              }}
            >
              <GoogleMap
                defaultZoom={defaultProps.zoom}
                center={{
                  lat: centeredDevice
                    ? centeredDevice.DeviceMetadata.DeviceLocation
                        .DeviceCoordinates.Latitude
                    : defaultProps.lat,
                  lng: centeredDevice
                    ? centeredDevice.DeviceMetadata.DeviceLocation
                        .DeviceCoordinates.Longitude
                    : defaultProps.lng,
                }}
              >
                {!!devices?.length &&
                  devices.map((element) => (
                    <Marker
                      key={element?.DeviceId}
                      text={element?.DeviceMetadata.DeviceName}
                      lat={
                        element?.DeviceMetadata.DeviceLocation.DeviceCoordinates
                          .Latitude
                      }
                      lng={
                        element?.DeviceMetadata.DeviceLocation.DeviceCoordinates
                          .Longitude
                      }
                      color={
                        element?.DeviceStatus.ConnectionStatus === "Online"
                          ? element?.group.color
                          : element?.DeviceStatus.ConnectionStatus === "Offline"
                          ? "#505050"
                          : "#FF1100"
                      }
                      onClick={() => onMarkerClick(element)}
                      onMouseOver={() => onMarkerHover(element)}
                      selectedMarker={
                        selectedDevice?.DeviceId === element?.DeviceId
                      }
                    />
                  ))}
              </GoogleMap>
            </div>
          </div>
        </div>

        <div
          className={styles.buttonSettingContainer}
          onClick={handleVisibleDrawer}
        >
          <SettingFilled style={{ fontSize: 20, padding: 0, margin: 0 }} />
        </div>

        <div
          className={
            visibleDrawer
              ? `${styles.settingPopup} ${styles.fadeIn}`
              : `${styles.settingPopup} ${styles.fadeOut}`
          }
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <div className={styles.rowContentHeader}>
              {/* Project dropdown */}
              <div style={{ textAlign: "left", marginBottom: 10 }}>
                <Select
                  defaultValue="All"
                  value={selectedProject || "All"}
                  style={{ width: "100%" }}
                  onChange={handleSelectProject}
                >
                  <Option value="All">Select All</Option>
                  {projects.map((element) => (
                    <Option key={element.id} value={element.id}>
                      {element.label}
                    </Option>
                  ))}
                </Select>
              </div>

              {/* Group dropdown */}
              <div style={{ textAlign: "left", marginBottom: 20 }}>
                <Select
                  defaultValue="All"
                  value={selectedGroup || "All"}
                  style={{ width: "100%" }}
                  onChange={handleSelectGroup}
                >
                  <Option value="All">Select All</Option>
                  {groups &&
                    groups.map((element) => (
                      <Option key={element.id} value={element.id}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          {element.label}
                          <div style={{ width: 30, justifyContent: "center" }}>
                            <EnvironmentFilled
                              style={{ fontSize: 15, color: element.color }}
                            />
                          </div>
                        </div>
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
            <TableMap
              data={devicesTbl}
              onRowClick={onRowClick}
              rowSelection={rowSelection}
            />
          </Space>
        </div>

        {/*Modal*/}
        <Modal
          title="DEVICE INFORMATION"
          centered
          visible={visibleModal}
          onOk={() => setVisibleModal(false)}
          onCancel={() => setVisibleModal(false)}
          className="modal"
          footer={
            <div className={styles.containerIcons}>
              <div>
                <Button
                  type="primary"
                  className={styles.iconDevice}
                  icon={<EyeFilled />}
                  title="View Detail"
                  onClick={handleDeviceDetail}
                />
                {isAdmin && (
                  <>
                    <Button
                      type="primary"
                      className={styles.iconDevice}
                      icon={<EditFilled />}
                      title="Edit Device"
                      onClick={handleDeviceEdit}
                    />
                    <Button
                      type="primary"
                      className={styles.iconDevice}
                      icon={<ToolFilled />}
                      title="Device configuration"
                      onClick={handleDeviceConfig}
                    />
                  </>
                )}
              </div>

              <Button type="primary" onClick={() => setVisibleModal(false)}>
                OK
              </Button>
            </div>
          }
        >
          {selectedDevice && fillDescription(selectedDevice)}
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default Map;
