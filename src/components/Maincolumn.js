import React from "react";
import "./Maincolumn.css";

const MainColumn = () => {
  return (
    <div className="Container">
      <ColumnItems />
      <ColumnItems />
      <ColumnItems />
    </div>
  );
};

const ColumnItems = () => {
  return (
    <div className="Main-Items">
      <ColumnItem />
      <ColumnItem />
      <ColumnItem />
    </div>
  );
};

const ColumnItem = () => {
  return (
    <div className="Main-Item">
      <hr />
      <h2>title</h2>
    </div>
  );
};

export default MainColumn;
export { ColumnItems, ColumnItem };
