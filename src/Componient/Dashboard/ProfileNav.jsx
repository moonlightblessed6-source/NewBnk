import React, { useEffect, useState } from "react";
import { Nav } from "./ProfileNav";
import Logo from "../../assets/Logo/logo.png";
import { VscAccount } from "react-icons/vsc";
import { IoMdArrowDropdown, IoIosNotifications } from "react-icons/io";
import useDashboard from "./apifetch";
import Overlay from "../overlay.jsx";

import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const ProfileNav = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);
  const [dropdown, setDropdown] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const fetchdata = useDashboard();

  const dropdowns = () => {
    setDropdown((prev) => !prev);
  };

  const Logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  return (
    <Nav>
      {showOverlay && <Overlay />}

      <div className="navbars">
        <div
          className="left"
          onClick={() => {
            setShowOverlay(true);
            setTimeout(() => {
              window.location.href = "/profile";
            }, 2000);
          }}
        >
          <img src={Logo} alt="" />
        </div>

        <div className="right">
          <span className="iconss">
            <IoIosNotifications />
          </span>

          <span>LTC 93</span>
          <span className="names">{fetchdata?.account?.first_name}</span>
          <div className="name">
            <span className="iconss" onClick={dropdowns}>
              <VscAccount />
            </span>
            <span className="iconss" onClick={dropdowns}>
              <IoMdArrowDropdown />
            </span>
            {dropdown && (
              <div className="dropdown">
                <span
                  onClick={() => {
                    setShowOverlay(true);
                    setTimeout(() => {
                      window.location.href = "/account";
                    }, 2000);
                  }}
                >
                  {fetchdata?.account?.first_name}{" "}
                  {fetchdata?.account?.last_name}
                </span>
                <span
                  onClick={() => {
                    setShowOverlay(true);
                    setTimeout(() => {
                      window.location.href = "/account";
                    }, 2000);
                  }}
                >
                  {t("Account")}
                </span>
                <span onClick={Logout}>{t("Logout")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default ProfileNav;
