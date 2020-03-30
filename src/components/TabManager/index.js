import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const TabManager = ({ tabs, activeTab, handleTab }) => (
  <div className="tab-manager">
    {tabs.map(({ label, value }) => (
      <div
        className={`tab ${value === activeTab ? "selected-tab" : ""}`}
        onClick={() => {
          handleTab(value);
        }}>
        {label}
      </div>
    ))}
  </div>
);

TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired
};

export default TabManager;
