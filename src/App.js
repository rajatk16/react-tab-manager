import React, { useState } from "react";

import TabManager from "./components/TabManager";

import "./App.css";

const TABS = [
  {
    label: "Tab 1",
    value: 1
  },
  {
    label: "Tab 2",
    value: 2
  },
  {
    label: "Tab 3",
    value: 3
  }
];

const App = () => {
  const [activeTab, handleTab] = useState(1);
  return (
    <div className="App">
      <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
      <div className="tab-content">
        {" "}
        <div> Content of {activeTab} </div>
      </div>
    </div>
  );
};

export default App;
