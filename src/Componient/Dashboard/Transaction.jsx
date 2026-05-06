import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Transactions } from "./Transaction";
import useDashboard from "./apifetch";
import { detectAndSetLanguage } from "../../languageDetector";
import { useTranslation } from "react-i18next";
const currencySymbols = {
  USD: "$",
  AUD: "A$",
  CAD: "C$",
  GBP: "£",
  EUR: "€",
};

const Transaction = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const setLang = async () => {
      await detectAndSetLanguage();
    };
    setLang();
  }, []);

  const fetchdata = useDashboard();

  const [loading, setLoading] = useState(true);
  const [trasactions, setTrasactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentTransactions = trasactions.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(trasactions.length / itemsPerPage);

  const currency = fetchdata?.account?.currency || "USD"; // fallback if not loaded
  const symbol = currencySymbols[currency] || currency;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          localStorage.clear(); // clear expired or missing token
          window.location.href = "/login"; // redirect immediately
          return;
        }

        const res = await fetch(
          "https://geochain.app/south/api/transactions/history/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (res.status === 401) {
          // token expired or invalid
          localStorage.clear();
          window.location.href = "/login";
          return;
        }

        if (!res.ok) throw new Error("Please check your internet server");

        const data = await res.json();
        setTrasactions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <Transactions>
      <div className="transactiosn">
        <div className="topstranc">
          <FaArrowLeft onClick={() => (window.location.href = "/profile")} />
          <p onClick={() => (window.location.href = "/profile")}>
            {t("Transactions")}
          </p>
        </div>

        <div className="transationhistory">
          {loading ? (
            <p>{t("Loadingtransactions")}</p>
          ) : currentTransactions.length === 0 ? (
            <p>{t("Notransactionsfound")}</p>
          ) : (
            <div className="div">
              {currentTransactions.map((tr, index) => (
                <div key={index} className="transaction-item">
                  <span>{new Date(tr.timestamp).toLocaleString()}</span>
                  <div className="historyess">
                    <div>
                      <div className="mysys">
                        <span
                          style={{
                            color:
                              tr.transaction_type === "credit"
                                ? "green"
                                : tr.transaction_type === "debit"
                                  ? "red"
                                  : "black", // pending or anything else
                            fontWeight: "bold",
                          }}
                        >
                          {tr.transaction_type.toUpperCase()}
                        </span>
                        {/* <span>{tr.transaction_type.toUpperCase()}</span> */}

                        {tr.transaction_type === "credit" ? (
                          <p>
                            {t("transfer.from", {
                              bankName: tr.receiver_bank || "External Bank",
                            })}
                          </p>
                        ) : (
                          // <p>From: {tr.receiver_bank || "External Bank"}</p>
                          <p>
                            {t("transfer.to", {
                              bankName: tr.receiver_bank || "External Bank",
                            })}
                          </p>

                          // <p>To: {tr.receiver_bank || "External Bank"}</p>
                        )}
                        <span>
                          {t("transfer.description", { purpose: tr.purpose })}
                        </span>

                        {/* <span>Desc: {tr.purpose}</span> */}
                      </div>

                      <div style={{ display: "flex", gap: "5px" }}>
                        <span>
                          {t("transfer.name", { receiverName: tr.name })}
                        </span>

                        <span>
                          {t("transfer.reference", { reference: tr.reference })}
                        </span>
                        {/* <span>Name: {tr.name}</span>{" "}
                        <span>Ref: {tr.reference}</span> */}
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color:
                            tr.transaction_type === "credit"
                              ? "green"
                              : tr.transaction_type === "debit"
                                ? "red"
                                : "black",
                          fontWeight: "bold",
                        }}
                      >
                        {tr.transaction_type === "credit" ? "+" : "-"}
                        {symbol}
                        {Number(tr.amount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Transactions>
  );
};

export default Transaction;
