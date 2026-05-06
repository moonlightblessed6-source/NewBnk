import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import useDashboard from "./apifetch";
import { Account } from "./Accountprofile";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Accountprofile = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  const fetchdata = useDashboard();
  return (
    <Account>
      <div className="Personal">
        <div className="otpd">
          <FaArrowLeft onClick={() => (window.location.href = "/profile")} />
          <p onClick={() => (window.location.href = "/profile")}>
            {t("PersonalInfo")}
          </p>
        </div>

        <div className="myinfo">
          <div className="smae">
            <span>{t("Names")}</span>
            <span>
              {fetchdata?.account?.first_name} {fetchdata?.account?.last_name}
            </span>
          </div>
          <span className="spann">
            {t("Verified")} <MdOutlineKeyboardArrowRight />
          </span>
        </div>
        <div className="myinfo">
          <div className="smae">
            <span> {t("Email_Address")}</span>
            <span>{fetchdata?.account?.email}</span>
          </div>
          <span className="spann">
            {t("Verified")} <MdOutlineKeyboardArrowRight />
          </span>
        </div>
        <div className="myinfo">
          <div className="smae">
            <span> {t("PhoneNumber")}</span>
            <span>{fetchdata?.account?.phone}</span>
          </div>
          <span className="spann">
            {t("Verified")} <MdOutlineKeyboardArrowRight />
          </span>
        </div>
        <div className="myinfo">
          <div className="smae">
            <span>{t("Address")}</span>
            <span>
              {fetchdata?.account?.street}, {fetchdata?.account?.city}{" "}
              {fetchdata?.account?.state}, {fetchdata?.account?.nationality}{" "}
              {fetchdata?.account?.zip_code}
            </span>
          </div>
          <span className="spann">
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>

        <div
          className="myinfodat"
          onClick={() => (window.location.href = "/card-lock")}
        >
          <p>{t("ManageCard")}</p>
          <span>{t("LockCardReportproblems")}</span>
        </div>
        <div
          className="myinfodat"
          onClick={() => (window.location.href = "/contactus")}
        >
          <p>{t("GetHelp")}</p>
          <span>{t("contactus")}</span>
        </div>

        <div className="account">
          <div>
            <span>{t("ROUTING#")}</span>
            <p>251480576</p>
          </div>
          <div>
            <span>{t("ACCOUNTNUMBER")}</span>
            <p>{fetchdata?.account?.account_number}</p>
          </div>
        </div>
      </div>
    </Account>
  );
};

export default Accountprofile;
