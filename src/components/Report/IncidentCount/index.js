import React, { useState } from "react";
import { Row, Col, Radio, DatePicker } from "antd";
import { Column, Line } from "@ant-design/charts";
import moment from "moment";
import styles from "./IncidentCount.module.css";

import incidentCount from "../../../mockData/incidentCount";

function IncidentCount() {
  const [graphType, setGraphType] = useState("bar");
  const [graphTime, setGraphTime] = useState("week");

  const [weekValue, setWeekValue] = useState(moment());

  let width = window.innerWidth;
  let mediumScreen = false;

  if (width > 767) {
    mediumScreen = true;
  }

  const {
    weeklyDataIncidentCount,
    monthlyDataIncidentCount,
    yearlyDataIncidentCount,
  } = incidentCount;

  let configCombined;

  if (graphType === "bar") {
    configCombined = {
      data: weeklyDataIncidentCount.noSafetyHelmet.data.concat(
        weeklyDataIncidentCount.noReflectiveVest.data,
        weeklyDataIncidentCount.heavyMachinery.data,
        weeklyDataIncidentCount.peopleIntrusion.data
      ),
      isGroup: true,
      xField: "date",
      yField: "count",
      seriesField: "name",
      label: {
        position: "middle",
        layout: [
          { type: "interval-adjust-position" },
          { type: "interval-hide-overlap" },
          { type: "adjust-color" },
        ],
      },
    };
  } else if (graphType === "line") {
    configCombined = {
      xField: "date",
      yField: "count",
      yAxis: {
        label: {
          formatter: function formatter(v) {
            return "".concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          },
        },
      },
      seriesField: "name",
      color: function color(_ref) {
        var name = _ref.name;
        return name === "No Safety Helmet"
          ? "#5b8ff9"
          : name === "No Reflective Vest"
          ? "#5ad8a6"
          : name === "Heavy Machinery"
          ? "#5d7092"
          : "#f6bd16";
      },
    };
  }

  const graph = () => {
    if (graphTime === "week") {
      configCombined.data = weeklyDataIncidentCount.noSafetyHelmet.data.concat(
        weeklyDataIncidentCount.noReflectiveVest.data,
        weeklyDataIncidentCount.heavyMachinery.data,
        weeklyDataIncidentCount.peopleIntrusion.data
      );
    } else if (graphTime === "month") {
      configCombined.data = monthlyDataIncidentCount.noSafetyHelmet.data.concat(
        monthlyDataIncidentCount.noReflectiveVest.data,
        monthlyDataIncidentCount.heavyMachinery.data,
        monthlyDataIncidentCount.peopleIntrusion.data
      );
    } else if (graphTime === "year") {
      configCombined.data = yearlyDataIncidentCount.noSafetyHelmet.data.concat(
        yearlyDataIncidentCount.noReflectiveVest.data,
        yearlyDataIncidentCount.heavyMachinery.data,
        yearlyDataIncidentCount.peopleIntrusion.data
      );
    }
    if (graphType === "bar") {
      return <Column {...configCombined} />;
    } else if (graphType === "line") {
      return <Line {...configCombined} />;
    }
  };

  function onChangeGraph(e) {
    console.log(`radio checked:${e.target.value}`);
    setGraphType(e.target.value);
  }

  function onChangeTime(e) {
    console.log(`radio checked:${e.target.value}`);
    setGraphTime(e.target.value);
  }

  function onChangeWeek(date, dateString) {
    console.log(date, dateString);
    setWeekValue(date);
  }

  return (
    <React.Fragment>
      <Row
        style={{
          padding: "1rem 0",
          backgroundColor: "#fbfbfb",
          border: "1px solid #d9d9d9",
          borderRadius: "2px",
        }}
      >
        <Col span={12} offset={3}>
          <h2>Incidents</h2>
        </Col>
      </Row>
      <Row style={{ padding: "3rem 0" }}>
        <Col
          md={15}
          xs={24}
          offset={mediumScreen ? 3 : 0}
          style={mediumScreen ? "" : { marginBottom: "1rem" }}
        >
          {graph()}
        </Col>
        <Col
          md={6}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <DatePicker
            picker={graphTime}
            value={weekValue}
            onChange={onChangeWeek}
          />
          <Radio.Group
            onChange={onChangeTime}
            defaultValue="week"
            style={mediumScreen ? null : { marginBottom: "1rem" }}
          >
            <Radio.Button className={styles.radioButton} value="week">
              Week
            </Radio.Button>
            <Radio.Button className={styles.radioButton} value="month">
              Month
            </Radio.Button>
            <Radio.Button className={styles.radioButton} value="year">
              Year
            </Radio.Button>
          </Radio.Group>
          <Radio.Group onChange={onChangeGraph} defaultValue="bar">
            <Radio.Button className={styles.radioButton} value="bar">
              Bar
            </Radio.Button>
            <Radio.Button className={styles.radioButton} value="line">
              Line
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default IncidentCount;
