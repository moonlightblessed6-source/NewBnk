import React, { useState, useEffect } from "react";
import { Nav } from "./Navbar";
import Logo from "../../assets/Logo/logo.png";
import { IoIosPersonAdd } from "react-icons/io";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import { IoPerson, IoCard } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { FaHandshake, FaHandHoldingUsd } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  const [dropmenue, setDropmenue] = useState(false);
  const [sererdrop, setSererdrop] = useState(false);
  const [service, setService] = useState(false);

  const dropdwn = () => {
    setDropmenue((prev) => !prev);
  };

  return (
    <Nav>
      <div className="Nav-bar">
        <div className="navleft" onClick={() => (window.location.href = "/")}>
          <img src={Logo} alt="Logo" />
        </div>

        {dropmenue && (
          <div className="mobilesview">
            <ul className="myurls">
              <li onClick={() => (window.location.href = "/")}>{t("Home")}</li>
              <li onClick={() => (window.location.href = "/about-us")}>
                {t("About")}
              </li>

              <li
                onClick={() => setSererdrop((prev) => !prev)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {t("Services")}{" "}
                <IoMdArrowDropdown style={{ fontSize: "15px" }} />
              </li>
              {sererdrop && (
                <div className="dropsmallscreen">
                  <span onClick={() => (window.location.href = "/personal")}>
                    {t("PersonalBanking")}
                  </span>
                  <span onClick={() => (window.location.href = "/business")}>
                    {t("BusinessBanking")}
                  </span>
                  <span onClick={() => (window.location.href = "/loan-credit")}>
                    {t("LoansCredit")}
                  </span>
                  <span onClick={() => (window.location.href = "/login")}>
                    {t("Card")}
                  </span>
                  <span onClick={() => (window.location.href = "/grants-aids")}>
                    {t("Grand&aids")}
                  </span>
                </div>
              )}
              <li onClick={() => (window.location.href = "/contact-us")}>
                {t("Contactss")}
              </li>
              <li onClick={() => (window.location.href = "/login")}>
                {t("Login")}
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "3px",
                }}
                onClick={() => (window.location.href = "/open-account")}
              >
                {t("OpenAccounts")}
              </li>
            </ul>
          </div>
        )}

        <div className="dropdown-icon">
          {dropmenue ? (
            <RiCloseLargeFill onClick={dropdwn} />
          ) : (
            <RiMenu3Fill onClick={dropdwn} />
          )}
        </div>

        <div className="navmiddle">
          <ul>
            <li onClick={() => (window.location.href = "/")}>Home</li>
            <li onClick={() => (window.location.href = "/about-us")}>About</li>
            <div
              className="wrappersss"
              onMouseLeave={() => setService(false)}
              onMouseEnter={() => setService(true)}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  marginRight: "10px",
                }}
              >
                {t("Services")}
              </li>
              {service && (
                <div
                  className="dropdownserver"
                  onMouseEnter={() => setService(true)}
                  onMouseLeave={() => setService(false)}
                >
                  <span onClick={() => (window.location.href = "/personal")}>
                    <IoPerson style={{ color: "#0284c7" }} />{" "}
                    {t("PersonalBanking")}
                  </span>
                  <span onClick={() => (window.location.href = "/business")}>
                    <MdBusinessCenter style={{ color: "#129c6b" }} />
                    {t("BusinessBanking")}
                  </span>
                  <span onClick={() => (window.location.href = "/loan-credit")}>
                    <FaHandshake style={{ color: "#14b8a6" }} />{" "}
                    {t("LoansCredit")}
                  </span>
                  <span onClick={() => (window.location.href = "/login")}>
                    <IoCard style={{ color: "#9333ea" }} /> {t("Card")}
                  </span>
                  <span onClick={() => (window.location.href = "/grants-aids")}>
                    <FaHandHoldingUsd style={{ color: "#e23e19" }} />{" "}
                    {t("Grand&aids")}
                  </span>
                </div>
              )}
            </div>

            <li
              onClick={() => (window.location.href = "/contact-us")}
              style={{ marginLeft: "120px" }}
            >
              {t("Contactss")}
            </li>
          </ul>
        </div>

        <div className="navright">
          <span onClick={() => (window.location.href = "/login")}>
            {t("Login")}
          </span>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
            onClick={() => (window.location.href = "/open-account")}
          >
            <IoIosPersonAdd /> {t("OpenAccounts")}
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
