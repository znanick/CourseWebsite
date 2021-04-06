import React, { Component, useState } from "react";
import "../../styles/SideMenu/SideMenuComponent.scss";
import HatIcon from "../../../assets/svg/SideMenu/HatIcon.svg";
import RightArrow from "../../../assets/svg/SideMenu/RightArrow.svg";

import SideMenuOutputItem from "./SideMenuOutputItem";
import isMobile from "../../index";

const menuItems = [
  { text: "Business & Management", id: 0 },
  { text: "Computing & IT", id: 1 },
  { text: "Fashion & Media", id: 2 },
  { text: "Finance & Accounting", id: 3 },
  { text: "Law & Criminology", id: 4 },
  {
    text: "Marketing & Communications",
    id: 5,
    childMenuItems: [
      { text: "Market Research Executive", id: 7 },
      { text: "Child Psychologist", id: 8 },
      { text: "Guidance Counsellor", id: 9 },
      { text: "Behaviour Analyst", id: 10 },
      { text: "Recreational Therapist", id: 11 },
    ],
  },
  {
    text: "Psychology & Social Sciences",
    id: 6,
    childMenuItems: [
      { text: "Market Research Executive", id: 7 },
      { text: "Child Psychologist", id: 8 },
      { text: "Guidance Counsellor", id: 9 },
      { text: "Behaviour Analyst", id: 10 },
      { text: "Recreational Therapist", id: 11 },
    ],
  },
];

const SideMenuComponent = () => {
  const [currentChildItem, setChildItemState] = useState({
    id: 6,
    childMenuItem: { id: 10 },
  });

  const [isMenuVisible, setMenuState] = useState(!isMobile);

  const createMenuItems = () => {
    return menuItems.map((item, i) => (
      <SideMenuOutputItem
        itemInfo={item}
        key={item.id}
        currentChildItem={currentChildItem}
        selectItem={selectItemCb}
      />
    ));
  };

  const selectItemCb = (childId, parentId) => {
    setChildItemState({
      id: parentId,
      childMenuItem: { id: childId },
    });
  };

  const menuClickAction = () => {
    if (!isMobile) return;

    setMenuState(!isMenuVisible);
  };

  return (
    <div className="sideMenuBlock">
      <div className="container">
        <div className="header" onClick={menuClickAction}>
          <img src={HatIcon} alt="Hat Logo" className="icon" />
          <h3 className="title">
            {isMobile ? "Choose YOUR Career" : "Careers"}
          </h3>
          {isMobile ? (
            <img src={RightArrow} alt="Arrow" className="arrowIcon" />
          ) : null}
        </div>

        {isMenuVisible ? (
          <div className="menu">
            {createMenuItems()}
            <div className="footer">
              <div className="btnContainer">
                <h2 className="btnText">Show all programmes</h2>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideMenuComponent;
