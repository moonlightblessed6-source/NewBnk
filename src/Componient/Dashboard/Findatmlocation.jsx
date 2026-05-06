import React, { useEffect } from "react";
import { Findlocation } from "./Findatmlocation";
import ATMMap from "./Map";
import { FaArrowLeft } from "react-icons/fa";
import { t } from "i18next";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const FindAtm = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);
  return (
    <Findlocation>
      <div className="locationmap">
        <div className="back">
          <FaArrowLeft onClick={() => (window.location.href = "/profile")} />
          <p onClick={() => (window.location.href = "/profile")}>{t("Back")}</p>
        </div>
        <div className="find">
          <h2>{t("FindanATMNearYou")}</h2>
          <ATMMap />
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24191.63546718769!2d-74.02853380251251!3d40.71901958746316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20banking%20street%20financial%20district%20new%20york%20ny%2010001!5e0!3m2!1sen!2sng!4v1768820273730!5m2!1sen!2sng"
          width="100%"
          height="600"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </Findlocation>
  );
};

export default FindAtm;
