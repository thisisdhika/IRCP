import React from "react";
import {Row, Col} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import styles from './List.module.css'


function List() {

    return (
        <React.Fragment>
            <Row style={{
                display : "flex",
                flexDirection : "column"
            }}>
                <Col>
                    <span
                      className={styles.title}>
                        <UnorderedListOutlined
                            style={{
                            paddingRight: '1rem'
                        }}/>
                        List
                    </span>
                </Col>
                <Col >
                    <table className={styles.table}>
                        <tbody>
                        <tr>
                            <td>% of IRCP Energy Consumtion</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <td>Last Month Estimated Consumtion</td>
                            <td>8251 KWh</td>
                        </tr>
                        <tr>
                            <td>Last Month Estimated Savings</td>
                            <td>10056 HKD</td>
                        </tr>

                        </tbody>

                    </table>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default List;
