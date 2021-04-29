// import { EnvironmentFilled } from "@ant-design/icons";
import { Typography } from "antd";
import styles from "./map.module.css"
const { Text  } = Typography;

export const labelDescription = (label, value) => {
    return (
      <div className={styles.row}>
          <div className={styles.columnLeft}>
              <Text type="secondary">{label}</Text>
          </div>
          <div className={styles.columnRight}>
              <Text>{value}</Text>
          </div>
      </div>
    )
  }

export const defaultProps = {
  lat: 22.302711,
  lng: 114.177216,
  zoom: 14
};

export const initProjectOptions = [
    { id: 1, label: 'Project 1' },
    { id: 2, label: 'Project 2' },
];

export const initGroupOptions = [
    { id: "1", label: 'Group 1', projectId: 1, color: 'green' },
    { id: "2", label: 'Group 2', projectId: 1, color: 'purple' },
    { id: "3", label: 'Group 3', projectId: 2, color: 'blue' },
    { id: "4", label: 'Group 4', projectId: 2, color: 'cyan' },
];
