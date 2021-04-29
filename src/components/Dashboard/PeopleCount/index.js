import React, {useState} from "react";
import {Row, Col, Radio} from "antd";
import {Column, Line} from "@ant-design/charts";
import peopleCount from "../../../mockData/peopleCount";
import styles from "./PeopleCount.module.css";
import {FilePptOutlined} from "@ant-design/icons";

function PeopleCount() {
    const [graphType, ] = useState("line");
    const [graphTime,
        setGraphTime] = useState("week");

    let width = window.innerWidth;
    let mediumScreen = false;

    if (width > 767) {
        mediumScreen = true;
    }

    const {weeklyDataPeopleCount, monthlyDataPeopleCount, yearlyDataPeopleCount} = peopleCount;

    let configCombined;

    if (graphType === "bar") {
        configCombined = {
            data: weeklyDataPeopleCount
                .peopleInCount
                .data
                .concat(weeklyDataPeopleCount.peopleOutCount.data),
            isGroup: true,
            xField: "date",
            height : 200,
            yField: "count",
            seriesField: "name",
            label: {
                position: "middle",
                layout: [
                    {
                        type: "interval-adjust-position"
                    }, {
                        type: "interval-hide-overlap"
                    }, {
                        type: "adjust-color"
                    }
                ]
            },
            color: function color(_ref) {
                var name = _ref.name;
                return name === "People In Count"
                    ? "#5b8ff9"
                    : "#5ad8a6";
            }
        };
    } else if (graphType === "line") {
        configCombined = {
            data: weeklyDataPeopleCount
                .peopleInCount
                .data
                .concat(weeklyDataPeopleCount.peopleOutCount.data),
            xField: "date",
            height : 200,
            yField: "count",
            yAxis: {
                label: {
                    formatter: function formatter(v) {
                        return ""
                            .concat(v)
                            .replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
                                return "".concat(s, ",");
                            });
                    }
                }
            },
            seriesField: "name",
            color: function color(_ref) {
                var name = _ref.name;
                return name === "People In Count"
                    ? "#5b8ff9"
                    : "#5ad8a6";
            },
            lineStyle: function lineStyle(_ref2) {
                var name = _ref2.name;
                if (name === "People In Count") {
                    return {
                        // lineDash: [4, 4],
                        opacity: 1
                    };
                }
                return {opacity: 0.5};
            }
        };
    }

    const graph = () => {
        if (graphTime === "week") {
            configCombined.data = weeklyDataPeopleCount
                .peopleInCount
                .data
                .concat(weeklyDataPeopleCount.peopleOutCount.data);
        } else if (graphTime === "month") {
            configCombined.data = monthlyDataPeopleCount
                .peopleInCount
                .data
                .concat(monthlyDataPeopleCount.peopleOutCount.data);
        } else if (graphTime === "year") {
            configCombined.data = yearlyDataPeopleCount
                .peopleInCount
                .data
                .concat(yearlyDataPeopleCount.peopleOutCount.data);
        }
        if (graphType === "bar") {
            return <Column {...configCombined}/>;
        } else if (graphType === "line") {
            return <Line {...configCombined}/>;
        }
    };

    function onChangeTime(e) {
        setGraphTime(e.target.value);
    }

    return (
        <React.Fragment>
            <Row >
                <Col>
                    <span style={{
                        display: 'block',
                        fontSize: '18px',
                        paddingLeft: '2rem',
                        paddingTop: '2rem',
                        paddingBottom: '0',
                        fontWeight: 600
                    }}>
                      <FilePptOutlined style={{ paddingRight: '1rem' }}/>
                        Report
                    </span>
                </Col>
            </Row>
            <Row
                style={{
                paddingTop: "1rem",
                paddingBottom: "3rem",
                paddingRight : "1.3rem",
                paddingLeft : "1rem"
            }}>
                <Col
                    md={17}
                    xs={24}
                    offset={mediumScreen
                    ? 1
                    : 0}
                    style={mediumScreen
                    ? ""
                    : {
                        marginBottom: "1rem",
                    }}>
                    {graph()}
                </Col>
                <Col
                    md={6}
                    xs={24}
                    style={{
                    display: "flex",
                    flexDirection: mediumScreen ? "column": "inherit",
                    justifyContent: mediumScreen ?"space-around" : "flex-start",
                    alignItems: "center"
                }}>
                    <Radio.Group
                        onChange={onChangeTime}
                        defaultValue="week"
                        style={mediumScreen
                        ? {flexDirection : "inherit"}
                        : {
                            marginBottom: "1rem",
                            flexDirection : "inherit"
                        }}>
                        <Radio.Button className={styles.radioButton} value="month">
                            Month
                        </Radio.Button>
                        <Radio.Button className={styles.radioButton} value="year">
                            Year
                        </Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default PeopleCount;
