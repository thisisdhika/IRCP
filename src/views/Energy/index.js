import React, {useState} from "react";
import {Row, Col, Form, DatePicker, Button} from "antd";
import moment from "moment";
import styles from './Energy.module.css'

function Energy() {
    const [weekValue,
        setWeekValue] = useState(moment());
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    function onChangeWeek(date, dateString) {
        console.log(date);
        setWeekValue(dateString);
    }

    console.log(weekValue)
    return (
        <div
            className="site-layout-background"
            style={{
            margin: "3rem auto",
            maxWidth: "1000px",
            width: "90%",
            minHeight: "100vh"
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
                    <h2>Energy Consumtion of Tennis Court</h2>
                </Col>
            </Row>

            <Form
                form={form}
                name="advanced_search"
                onFinish={onFinish}
                style={{
                padding: "1rem"
            }}>
                <Row >
                    <Col md={24} key={"datefrom"}>
                        <Form.Item
                            name={"dateFrom"}
                            style={{
                            marginBottom: "10px"
                        }}>
                            <DatePicker
                                picker="month"
                                value={weekValue}
                                onChange={onChangeWeek}
                                style={{
                                width: "100%",
                                height: "50px",
                                fontWeight: 700
                            }}/>
                        </Form.Item>
                        <span
                            style={{
                            display: "block",
                            opacity: ".9",
                            fontSize: "13px",
                            textAlign: "right"
                        }}>
                            The energy cost of this month will be shown in the next month's bill</span>
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
                                        HKD
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Last year's energy consumtion on the bill of this
                                    </td>
                                    <td>
                                        KWh
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Last year's energy consumtion on the bill of this
                                    </td>
                                    <td>
                                        KWh
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Last year's energy consumtion on the bill of this month
                                    </td>
                                    <td>
                                        KWh
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Monthly % of energy consumtion in Tennis Court
                                    </td>
                                    <td>
                                        %
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Energy consumtion of tennis court this month
                                    </td>
                                    <td>
                                        KWh
                                    </td>
                                </tr>
                                <tr>
                                    <td>Energy saving this month
                                    </td>
                                    <td>
                                        KWh
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
                            onClick={() => {
                            form.resetFields();
                        }}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>

        </div>
    );
}

export default Energy;
