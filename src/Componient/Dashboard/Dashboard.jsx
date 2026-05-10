import React, { useState, useEffect } from "react";
import { Dashboards } from "./Dashboard";
import { IoAddCircleSharp, IoAddSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdArrowRoundDown, IoIosPeople, IoIosFlash } from "react-icons/io";
import { CgMoreVerticalR } from "react-icons/cg";
import { FaCreditCard } from "react-icons/fa";
import useDashboard from "./apifetch";
import { CiLock } from "react-icons/ci";
import { TbTransactionDollar, TbShieldDollar } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Overlay from "../overlay.jsx";
import { detectAndSetLanguage } from "../../languageDetector.js";
import { useTranslation } from "react-i18next";

const currencySymbols = {
  USD: "$",
  AUD: "A$",
  CAD: "C$",
  GBP: "£",
  EUR: "€",
};

const localeMap = {
  USD: "en-US",
  AUD: "en-AU",
  CAD: "en-CA",
  GBP: "en-GB",
  EUR: "de-DE", // or whatever suits
};

const Dashbaord = () => {
  const fetchdata = useDashboard();
  const [showOverlay, setShowOverlay] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  //   time formatting
  const formatTime = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // safe way to get balance and currency
  const balance = fetchdata?.account?.balance || 0;
  const accountCurrency = fetchdata?.account?.currency || "USD"; // ✅ defined here
  const currency = accountCurrency;
  const symbol = currencySymbols[currency] || currency;
  const locale = localeMap[currency] || "en-US";

  return (
    <Dashboards>
      {showOverlay && <Overlay />}

      <div className="main-dashboard">
        <div className="accoutninfo">
          <div className="names">
            <p>{t("BankName")}</p>
            <p>
              chk
              {fetchdata?.account?.account_number
                ? `****${fetchdata.account.account_number.toString().slice(-4)}`
                : ""}
            </p>
          </div>

          <div className="banaces">
            <p>{t("AvailableBalance")}</p>
            <span>
              {symbol}
              {new Intl.NumberFormat(locale, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(balance)}
            </span>
          </div>

          <div className="actives">
            <p className="acives">
              <span>
                <GoDotFill />
              </span>
              {t("Active")}
            </p>
            <p>
              <span>{formatTime(fetchdata?.current_time)}</span>
            </p>
          </div>
        </div>

        <div className="sendtopup">
          <div className="onebyne1">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              <IoAddCircleSharp />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              {t("TopUp")}
            </p>
          </div>

          <div className="onebyne">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transfer-list";
                }, 2000);
              }}
            >
              <BsFillSendFill />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transfer-list";
                }, 2000);
              }}
            >
              {t("Send")}
            </p>
          </div>

          <div className="onebyne">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              <IoMdArrowRoundDown />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              {t("Receive")}
            </p>
          </div>

          <div className="onebyne">
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/account";
                }, 2000);
              }}
            >
              <CgMoreVerticalR />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/account";
                }, 2000);
              }}
            >
              {t("More")}
            </p>
          </div>
        </div>

        <div className="cartds">
          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/card-lock";
                }, 2000);
              }}
            >
              <CiLock />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/card-lock";
                }, 2000);
              }}
            >
              {t("CardUnlocked")}
            </p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              <IoIosFlash />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/direct-deposit";
                }, 2000);
              }}
            >
              {t("EarlyDirectDeposit")}
            </p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transaction";
                }, 2000);
              }}
            >
              <TbTransactionDollar />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/transaction";
                }, 2000);
              }}
            >
              {t("Transactions")}
            </p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/overdraft-protection";
                }, 2000);
              }}
            >
              <TbShieldDollar />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/overdraft-protection";
                }, 2000);
              }}
            >
              {t("OverdraftProtectionhere")}
            </p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/find-atm";
                }, 2000);
              }}
            >
              <FaLocationDot />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/find-atm";
                }, 2000);
              }}
            >
              {t("ATMDepositMap")}
            </p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/contactus";
                }, 2000);
              }}
            >
              <FiHelpCircle />
            </span>
            <p
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => {
                  window.location.href = "/contactus";
                }, 2000);
              }}
            >
              {t("GetHelp")}
            </p>
          </div>
        </div>

        <div className="quicttransfer">
          <p className="trasferquick">{t("QuickTransfer")}</p>

          <div className="quicktransfrbox">
            <div className="myowns">
              <div className="addes">
                <span
                  onClick={() => {
                    setShowOverlay(true);
                    setTimeout(() => {
                      window.location.href = "/transfer-list";
                    }, 2000);
                  }}
                >
                  <IoAddSharp />
                </span>
                <p
                  onClick={() => {
                    setShowOverlay(true);
                    setTimeout(() => {
                      window.location.href = "/transfer-list";
                    }, 2000);
                  }}
                >
                  {t("AddNew")}
                </p>
              </div>

              <div className="addess">
                <span>
                  <IoIosPeople />
                </span>
                <p>{t("NoSavedBeneficiaries")}</p>
              </div>
            </div>

            <div className="myss">
              <div>
                <p>{t("YourActiveCards")}</p>
                <span>
                  <FaCreditCard />
                </span>
                <p>{t("NoActiveCards")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboards>
  );
};

export default Dashbaord;
