import React, { Component, useState } from "react";
import "../../styles/SideMenu/SideMenuItem.scss";

const SideMenuInputItem = ({ itemInfo, currentItem, selectItem }) => {
  const [isMenuItemSelect, setMenuItemState] = useState(false);

  const clickAction = () => {
    selectItem(itemInfo.id);
  };

  return (
    <div
      className={
        itemInfo.id == currentItem
          ? "sideMenuInputItemBlock current"
          : "sideMenuInputItemBlock"
      }
      onClick={clickAction}
    >
      <h3 className="text">{itemInfo.text}</h3>
    </div>
  );
};

export default SideMenuInputItem;
