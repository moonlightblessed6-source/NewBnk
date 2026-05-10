import React, { use, useState, useEffect } from "react";
import { Cardlocks } from "./Cardlock";
import { FaArrowLeft } from "react-icons/fa";
import { IoLockClosedSharp, IoLockOpen } from "react-icons/io5";

import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";

const Cardlock = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);
  const [lock, setLock] = useState(() => {
    const savedLock = localStorage.getItem("cardLocked");
    return savedLock === "true";
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cardLocked", lock);
  }, [lock]);

  const Locked = () => {
    setLock((prev) => !prev);
  };
  return (
    <Cardlocks>
      <section className="lock-unlock-card">
        <div
          className="unlock-card"
          onClick={() => (window.location.href = "/profile")}
        >
          <FaArrowLeft />
          <p>{t("LockUnlockCard")}</p>
        </div>

        <div className="locekedcard">
          <p>{t("LockCard")}</p>
          {lock ? (
            <IoLockOpen onClick={Locked} style={{ color: "green" }} />
          ) : (
            <IoLockClosedSharp onClick={Locked} style={{ color: "red" }} />
          )}
        </div>

        <p className="iflock">
          {t("Ifyoulockyourcardwithdrawalsanddebittransactionsassociated")}
        </p>

        <p className="headings">
          {t(
            "Despitethelockedstatusofyourcardthefollowingaccountactivityisstillavailable:",
          )}
        </p>
        <ul>
          <li>{t("Debittransactionsauthorizedbeforeyoulockedyouraccount")}</li>
          <li>{t("Directdepositstoyouraccount")}</li>
          <li>{t("PaymentTransactionsUsingAccountRouting")}</li>
          <li>{t("RecurringBillPaymentsGreenDot")}</li>
          <li>{t("DepositingChecksSmartphone")}</li>
          <li>{t("SendingMoneyFamilyFriends")}</li>
          <li>{t("HighYieldSavingsDeposit")}</li>
          <li>{t("DebitsCreditsByCustomerService")}</li>
        </ul>

        <p className="mones">{t("Monthlyfeeswillcontinueonlockedcards")}</p>

        <p className="margto">
          {t("Ifyoulostyourcardorbelieveithasbeenstolen")}
          <span
            style={{
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/contactus")}
          >
            {t("clickhere")}
          </span>
          .
        </p>

        <p className="loststs"> {t("LostStolenCardReplacementFee")}</p>
      </section>
    </Cardlocks>
  );
};

export default Cardlock;
