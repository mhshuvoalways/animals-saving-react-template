import React from "react";
import Helmet from "./Helmet";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet />
      <Routes />
    </div>
  );
};

export default App;
