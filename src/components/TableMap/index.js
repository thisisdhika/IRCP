import React from "react";
import { Table, Space, Button } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";

const { Column } = Table;

const TableMap = ({ data, onRowClick, rowSelection }) => {
  return (
    <React.Fragment>
      <Table
        dataSource={data}
        rowSelection={rowSelection}
        size="small"
        pagination={{ pageSize: 5 }}
      >
        <Column
          title="Device Name"
          dataIndex="DeviceMetadata.DeviceName"
          key="key"
          render={(text, row) => {
            return (
              <>
                <Button type="link" style={{ padding:0 }} onClick={() => onRowClick(row)}>{row.DeviceMetadata.DeviceName}</Button>
              </>
            );
          }}
        />
        <Column
          title="Status"
          align="center"
          dataIndex="DeviceStatus.ConnectionStatus"
          render={(text, row) => {
            const connectionStatus = row.DeviceStatus.ConnectionStatus;
            const groupColor = row.group.color;
            return (
              <Space size="middle">
                <EnvironmentFilled
                  style={{
                    color:
                      connectionStatus === "Online"
                        ? groupColor
                        : connectionStatus === "Offline"
                        ? "#505050"
                        : "#FF1100",
                    fontSize: 20,
                  }}
                />
              </Space>
            );
          }}
        />
      </Table>
    </React.Fragment>
  );
};

export default TableMap;
