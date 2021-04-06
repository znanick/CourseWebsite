import React, { Component, useEffect, useState } from "react";
import "../../styles/SideMenu/SideMenuItem.scss";
import RightArrow from "../../../assets/svg/SideMenu/RightArrow.svg";
import BottomArrow from "../../../assets/svg/SideMenu/BottomArrow.svg";
import SideMenuInputItem from "./SideMenuInputItem";

const SideMenuOutputItem = ({ itemInfo, currentChildItem, selectItem }) => {
  const [isMenuItemSelect, setMenuItemState] = useState(
    currentChildItem.id == itemInfo.id ? true : false
  );

  const createChildBlock = () => {
    return itemInfo.childMenuItems
      ? itemInfo.childMenuItems.map((item) => (
          <SideMenuInputItem
            itemInfo={item}
            key={item.id}
            currentItem={
              itemInfo.id == currentChildItem.id
                ? currentChildItem.childMenuItem.id
                : null
            }
            selectItem={selectItemCb}
          />
        ))
      : null;
  };

  const selectItemCb = (childId) => {
    selectItem(childId, itemInfo.id);
  };

  const clickAction = () => {
    setMenuItemState(!isMenuItemSelect);
  };

  return (
    <div className="sideMenuOutputItemContainer">
      <div onClick={clickAction} className="itemContainer">
        <h2 className={isMenuItemSelect ? "activeText text" : "text"}>
          {itemInfo.text}
        </h2>

        <img
          src={isMenuItemSelect ? BottomArrow : RightArrow}
          alt="Arrow"
          className="icon"
        />
      </div>

      {isMenuItemSelect ? (
        <div className="childBlock">{createChildBlock()}</div>
      ) : null}
    </div>
  );
};

export default SideMenuOutputItem;
