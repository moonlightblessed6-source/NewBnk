import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Transferlis } from "./Transferlist";
import { t } from "i18next";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Transferlist = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);
  return (
    <Transferlis>
      <div
        className="header"
        onClick={() => (window.location.href = "/profile")}
      >
        <FaArrowLeft />
        <p>{t("Transferlist")}</p>
      </div>
      <div className="mains">
        <div onClick={() => (window.location.href = "/wire-transfer")}>
          <p>{t("WireTransfer")}</p>
        </div>
        <div onClick={() => (window.location.href = "/local-bank-transfer")}>
          <p>{t("LocalBankTransfer")}</p>
        </div>
      </div>
    </Transferlis>
  );
};

export default Transferlist;
