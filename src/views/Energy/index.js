import React, { useState } from "react";
import {Row, Col, DatePicker, Button} from "antd";
import moment from "moment";
import { energyService } from "../../service/energy";
import styles from './Energy.module.css'

function Energy() {
    const [weekValue, setWeekValue] = useState(moment());
    const [selectedEnergy, setSelectedEnergy] = useState(energyService.get("2021-05"));

    function onChangeWeek(date, dateString) {
        setWeekValue(date);
        setSelectedEnergy(energyService.get(date));
    }

    return (
        <div
            className="site-layout-background"
            style={{
            margin: "3rem auto",
            // maxWidth: "1000px",
            width: "90%",
        }}>
                <Row
                    style={{
                    padding: "1rem 0.2rem",
                    backgroundColor: "#fbfbfb",
                    border: "1px solid #d9d9d9",
                    borderRadius: "2px"
                }}>
                    <Col
                        span={24}
                        style={{
                        textAlign: "center"
                    }}>
                        <h2>Energy</h2>
                    </Col>
                </Row>

                <div className={styles.body}>
                    <Row >
                        <Col md={24} key={"datefrom"}>
                            <div
                                style={{
                                marginBottom: "10px"
                            }}>
                                <DatePicker
                                    picker="month"
                                    onChange={onChangeWeek}
                                    // value={moment(weekValue)}
                                    format="MMMM YYYY"
                                    style={{
                                        width: "100%",
                                        height: "50px",
                                        fontWeight: 700
                                    }}
                                />
                            </div>
                            <span className={styles.infoLabel}>
                                The energy cost of this month will be shown in the next month's bill
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <table className={styles.list}>
                                <tbody >
                                    <tr>
                                        <td>
                                            Last year's energy cost on the bill of this month
                                        </td>
                                        <td>
                                            {selectedEnergy?.lastYearEnergyCost || 0} HKD
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Last year's energy consumption on the bill of this month
                                        </td>
                                        <td>
                                            {selectedEnergy?.lastYearEnergyConsumption || 0}  KWh
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Last year's energy consumption on the bill of this month
                                        </td>
                                        <td>
                                            {selectedEnergy?.currentYearEnergyCost || 0}   KWh
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Last year's energy consumption on the bill of this month
                                        </td>
                                        <td>
                                            {selectedEnergy?.currentYearEnergyConsumption || 0}   KWh
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Monthly % of energy consumption in Tennis Court
                                        </td>
                                        <td>
                                            {selectedEnergy?.monthlyEnergyConsumption || 0}  %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Energy consumption of tennis court this month
                                        </td>
                                        <td>
                                            {selectedEnergy?.thisMonthEnergyConsumption || 0}   KWh
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Energy saving this month
                                        </td>
                                        <td>
                                            {selectedEnergy?.thisMonthEnergySaving || 0}   KWh
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </Col>
                    </Row>
                    <Row>
                        <Col
                            span={24}
                            style={{
                            textAlign: "right",
                            padding: "35px 20px"
                        }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                margin: "0 8px"
                            }}
                                onClick={() => {}}
                            >
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </div>            
        </div>
    );
}

export default Energy;