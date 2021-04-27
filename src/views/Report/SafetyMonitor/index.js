import React from "react";
import PeopleCount from "../../../components/Report/PeopleCount";
import IncidentCount from "../../../components/Report/IncidentCount";

function SafetyMonitor() {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight:
          "calc(100vh - 16px - 48px - 22px - 70px - 69px + 32px + 5px)",
      }}
    >
      <PeopleCount />
      <IncidentCount />
    </div>
  );
}

export default SafetyMonitor;
