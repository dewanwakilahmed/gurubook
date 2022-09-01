import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

// Logo
import LogoFull from "../../assets/logo/gurubook-logo-full.svg";

// Icons
import OverviewIcon from "../../assets/icons/overview-icon.svg";
import ChaptersIcon from "../../assets/icons/chapters-icon.svg";
import QuestionTableIcon from "../../assets/icons/question-table-icon.svg";
import PracticeSheetsIcon from "../../assets/icons/practice-sheets-icon.svg";
import MockTestIcon from "../../assets/icons/mock-test-icon.svg";
import SuperQuestionsIcon from "../../assets/icons/super-questions-icon.svg";
import SettingsIcon from "../../assets/icons/settings-icon.svg";
import LogoutIcon from "../../assets/icons/logout-icon.svg";

const MainNavigation = () => {
  return (
    <div className="main-navigation-component">
      <div className="logo">
        <img
          src={LogoFull}
          alt="gurubook-logo-full"
          className="gurubook-logo-full"
        />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src={OverviewIcon}
                alt="overview-icon"
                className="nav-icon"
              />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/chapters">
              <img
                src={ChaptersIcon}
                alt="chapters-icon"
                className="nav-icon"
              />
              <span>Chapters</span>
            </Link>
          </li>
          <li>
            <Link to="/question-table">
              <img
                src={QuestionTableIcon}
                alt="question-table-icon"
                className="nav-icon"
              />
              <span>Question Table</span>
            </Link>
          </li>
          <li>
            <Link to="/practice-sheets">
              <img
                src={PracticeSheetsIcon}
                alt="practice-sheets-icon"
                className="nav-icon"
              />
              <span>Practice Sheets</span>
            </Link>
          </li>
          <li>
            <Link to="/mock-test">
              <img
                src={MockTestIcon}
                alt="mock-test-icon"
                className="nav-icon"
              />
              <span>Mock Test</span>
            </Link>
          </li>
          <li>
            <Link to="/super-questions">
              <img
                src={SuperQuestionsIcon}
                alt="super-questions-icon"
                className="nav-icon"
              />
              <span>Super Questions</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <img
                src={SettingsIcon}
                alt="settings-icon"
                className="nav-icon"
              />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="logout-btn">
        <img src={LogoutIcon} alt="logout-icon" className="nav-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default MainNavigation;
