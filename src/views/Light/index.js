import React, { useState } from "react";
import { Row, Col, Slider } from "antd";

import styles from "./light.module.css";
import tenniscourt from "../../assets/img/tenniscourt.jpg";

const marks = {
  0: "0",
  20: "20",
  100: "100",
};

function Light() {
  const [lightTennisCourt1, setLightTennisCourt1] = useState(0);
  const [lightTennisCourt2, setLightTennisCourt2] = useState(0);
  const [lightTennisCourt3, setLightTennisCourt3] = useState(0);
  const [lightTennisCourt4, setLightTennisCourt4] = useState(0);

  const lightCalculator = (val) => {
    switch (val) {
      case 0:
        return 0.2;

      case 20:
        return 0.5;

      case 100:
        return 1;

      default:
        break;
    }
  };

  return (
    <div
      className="site-layout-background"
      style={{
        margin: "3rem auto",
        width: "90%",
        minHeight: "100vh",
      }}
    >
      <Row
        style={{
          padding: "1rem 0.2rem",
          backgroundColor: "#fbfbfb",
          border: "1px solid #d9d9d9",
          borderRadius: "2px",
        }}
      >
        <Col
          span={24}
          style={{
            textAlign: "center",
          }}
        >
          <h2>Light</h2>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={12} xs={24}>
          <div className={styles.tennisCourtContainer}>
            <div className={styles.tennisCourtContainerTitle}>
              Tennis Court 1
            </div>
            <div className={styles.tennisCourtContainerStatus}>Status: off</div>
            <div className={styles.tennisCourtContainerImage__wrapper}>
              <img
                src={tenniscourt}
                alt=""
                style={{ opacity: lightCalculator(lightTennisCourt1) }}
              />
            </div>
            <div className={styles.tennisCourtContainerSlider__wrapper}>
              <div className={styles.tennisCourtContainerSlider}>
                <Slider
                  marks={marks}
                  step={null}
                  defaultValue={lightTennisCourt1}
                  onChange={(e) => setLightTennisCourt1(e)}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className={styles.tennisCourtContainer}>
            <div className={styles.tennisCourtContainerTitle}>
              Tennis Court 2
            </div>
            <div className={styles.tennisCourtContainerStatus}>Status: off</div>
            <div className={styles.tennisCourtContainerImage__wrapper}>
              <img
                src={tenniscourt}
                alt=""
                style={{ opacity: lightCalculator(lightTennisCourt2) }}
              />
            </div>
            <div className={styles.tennisCourtContainerSlider__wrapper}>
              <div className={styles.tennisCourtContainerSlider}>
                <Slider
                  marks={marks}
                  step={null}
                  defaultValue={lightTennisCourt2}
                  onChange={(e) => setLightTennisCourt2(e)}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className={styles.tennisCourtContainer}>
            <div className={styles.tennisCourtContainerTitle}>
              Tennis Court 3
            </div>
            <div className={styles.tennisCourtContainerStatus}>Status: off</div>
            <div className={styles.tennisCourtContainerImage__wrapper}>
              <img
                src={tenniscourt}
                alt=""
                style={{ opacity: lightCalculator(lightTennisCourt3) }}
              />
            </div>
            <div className={styles.tennisCourtContainerSlider__wrapper}>
              <div className={styles.tennisCourtContainerSlider}>
                <Slider
                  marks={marks}
                  step={null}
                  defaultValue={lightTennisCourt3}
                  onChange={(e) => setLightTennisCourt3(e)}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className={styles.tennisCourtContainer}>
            <div className={styles.tennisCourtContainerTitle}>
              Tennis Court 4
            </div>
            <div className={styles.tennisCourtContainerStatus}>Status: off</div>
            <div className={styles.tennisCourtContainerImage__wrapper}>
              <img
                src={tenniscourt}
                alt=""
                style={{ opacity: lightCalculator(lightTennisCourt4) }}
              />
            </div>
            <div className={styles.tennisCourtContainerSlider__wrapper}>
              <div className={styles.tennisCourtContainerSlider}>
                <Slider
                  marks={marks}
                  step={null}
                  defaultValue={lightTennisCourt4}
                  onChange={(e) => setLightTennisCourt4(e)}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Light;
