import React, { useEffect } from "react";
import { Overdraft } from "./Overdraftprotection";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";

const Overdraftprotection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);
  return (
    <Overdraft>
      <section className="maiana">
        <div className="headers">
          <FaArrowLeft onClick={() => (window.location.href = "/profile")} />
          <p onClick={() => (window.location.href = "/profile")}>
            {t("overdraft.header")}
          </p>
        </div>

        <div className="mysite">
          <h3>{t("overdraft.mysite.title")}</h3>
          <p>{t("overdraft.mysite.subtitle")}</p>
        </div>

        <div className="mayss8">
          <h4>{t("overdraft.mayss8.1")}</h4>
          <h4>{t("overdraft.mayss8.2")}</h4>
          <h4>{t("overdraft.mayss8.3")}</h4>
          <h4>{t("overdraft.mayss8.4")}</h4>
          <h4>{t("overdraft.mayss8.5")}</h4>
        </div>

        <div className="setsts">
          <p>{t("overdraft.setsts")}</p>
        </div>

        <div className="burr">
          <button onClick={() => (window.location.href = "/direct-deposit")}>
            {t("overdraft.button")}
          </button>
        </div>
      </section>
    </Overdraft>
  );
};

export default Overdraftprotection;
