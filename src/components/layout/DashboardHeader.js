import React from "react";

// CSS
import "./DashboardHeader.css";

// Icons
import NotificationsIcon from "../../assets/icons/notifications-icon.svg";

// Images
import UserImage from "../../assets/images/user-image.jpg";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-component">
      <img src={NotificationsIcon} alt="notifications-icon" />
      <div className="logged-in-user">
        <img src={UserImage} alt="logged-in-user" className="user-image" />
        <span className="user-name">Dewan Wakil Ahmed</span>
        <span className="user-email">dewanwakilahmed@gmail.com</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
