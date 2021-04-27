import React, { useState } from "react";
import { Row, Col, Radio, DatePicker } from "antd";
import moment from "moment";
import { Column, Line } from "@ant-design/charts";
import peopleCount from "../../../mockData/peopleCount";
import styles from "./PeopleCount.module.css";

function PeopleCount() {
  const [graphType, setGraphType] = useState("bar");
  const [graphTime, setGraphTime] = useState("week");

  const [weekValue, setWeekValue] = useState(moment());

  let width = window.innerWidth;
  let mediumScreen = false;

  if (width > 767) {
    mediumScreen = true;
  }

  const {
    weeklyDataPeopleCount,
    monthlyDataPeopleCount,
    yearlyDataPeopleCount,
  } = peopleCount;

  let configCombined;

  if (graphType === "bar") {
    configCombined = {
      data: weeklyDataPeopleCount.peopleInCount.data.concat(
        weeklyDataPeopleCount.peopleOutCount.data
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
      color: function color(_ref) {
        var name = _ref.name;
        return name === "People In Count" ? "#5b8ff9" : "#5ad8a6";
      },
    };
  } else if (graphType === "line") {
    configCombined = {
      data: weeklyDataPeopleCount.peopleInCount.data.concat(
        weeklyDataPeopleCount.peopleOutCount.data
      ),
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
        return name === "People In Count" ? "#5b8ff9" : "#5ad8a6";
      },
      lineStyle: function lineStyle(_ref2) {
        var name = _ref2.name;
        if (name === "People In Count") {
          return {
            // lineDash: [4, 4],
            opacity: 1,
          };
        }
        return { opacity: 0.5 };
      },
    };
  }

  const graph = () => {
    if (graphTime === "week") {
      configCombined.data = weeklyDataPeopleCount.peopleInCount.data.concat(
        weeklyDataPeopleCount.peopleOutCount.data
      );
    } else if (graphTime === "month") {
      configCombined.data = monthlyDataPeopleCount.peopleInCount.data.concat(
        monthlyDataPeopleCount.peopleOutCount.data
      );
    } else if (graphTime === "year") {
      configCombined.data = yearlyDataPeopleCount.peopleInCount.data.concat(
        yearlyDataPeopleCount.peopleOutCount.data
      );
    }
    if (graphType === "bar") {
      return <Column {...configCombined} />;
    } else if (graphType === "line") {
      return <Line {...configCombined} />;
    }
  };

  function onChangeGraph(e) {
    setGraphType(e.target.value);
  }

  function onChangeWeek(date, dateString) {
    setWeekValue(date);
  }

  function onChangeTime(e) {
    setGraphTime(e.target.value);
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
        <Col span={15} offset={3}>
          <h2>People Count</h2>
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
            onChange={onChangeWeek}
            picker={graphTime}
            value={weekValue}
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

export default PeopleCount;
