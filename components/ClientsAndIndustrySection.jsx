import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBank,
  faHeartPulse,
  faShirt,
  faBolt,
  faBuildingColumns,
  faShieldHalved,
  faLaptopCode,
  faTruck,
  faCartShopping,
  faUserTie,
  faTowerBroadcast,
  faTruckFast,
  faBuilding,
  faCar,
  faIndustry,
  faNewspaper,
  faUtensils,
  faGraduationCap,
  faGavel,
  faLandmark,
  faRocket,
  faCoins,
  faPlane,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

// Clients and Industries Data
const clients = [
  ["ICICI Lombard", "Ambuja Cement", "Adani", "ACC"],
  ["Myntra", "Knight Fintech", "ONGC", "Standard Chartered"],
  [ "LIC", "IDFC First Bank","Yes Bank",  "ICICI Bank"],
  ["Franklin Templeton", "Bank of Baroda", "SBI", "IDBI Bank"],
  ["Liberty Mutual", "Name", "PwC", "Tata"],
  ["Care Health", "RBL Bank"],
];

const industries = [
  ["Finance", "Healthcare", "Retail", "Energy"],
  ["Banking", "Insurance", "Technology", "Cement"],
  ["e-com", "Consulting", "Telecom", "Logistics"],
  ["Real Estate", "Automobile", "Manufacturing", "Media"],
  ["Hospitality", "Education", "Legal", "Public Sector"],
  ["Startup", "Venture Capital", "Aviation", "CSR"],
];

// Client logos
const clientIcons = {
  "Myntra": { local: "/client_logo/Myntra-Stylish-Logo-Design-PNG 1.svg" },
  "ONGC": { local: "/client_logo/ongc.svg" },
  "ICICI Bank": { local: "/client_logo/icici_bank.svg" },
  "LIC": { local: "/client_logo/lic.svg" },
  "SBI": { local: "/client_logo/sbi.svg" },
  "Tata": { local: "/client_logo/tata.svg" },
  "Adani": { local: "/client_logo/adani.svg" },
  "Standard Chartered": { local: "/client_logo/standard_chartered.svg" },
  "IDFC First Bank": { local: "/client_logo/idfc_bank.svg" },
  "ACC": { local: "/client_logo/acc_cement.svg" },
  "Ambuja Cement": { local: "/client_logo/ambuja_cement.svg" },
  "Bank of Baroda": { local: "/client_logo/bob.svg" },
  "RBL Bank": { local: "/client_logo/brblbank.svg" },
  "Care Health": { local: "/client_logo/care_health.svg" },
  "Franklin Templeton": { local: "/client_logo/franklintempleton.svg" },
  "ICICI Lombard": { local: "/client_logo/icici_lombard.svg" },
  "Knight Fintech": { local: "/client_logo/knight_fintech.svg" },
  "Liberty Mutual": { local: "/client_logo/liberty_mutual.svg" },
  "Name": { local: "/client_logo/name.svg" },
  "PwC": { local: "/client_logo/pwc.svg" },
  "Yes Bank": { local: "/client_logo/yesbank.svg" },
  "IDBI Bank": { local: "/client_logo/idbibank.svg" },
};

// Industry icons map
const industryIcons = {
  "Finance": faCoins,
  "Healthcare": faHeartPulse,
  "Retail": faShirt,
  "Energy": faBolt,
  "Banking": faBank,
  "Insurance": faShieldHalved,
  "Technology": faLaptopCode,
  "Cement": faIndustry,
  "e-com": faCartShopping,
  "Consulting": faUserTie,
  "Telecom": faTowerBroadcast,
  "Logistics": faTruckFast,
  "Real Estate": faBuilding,
  "Automobile": faCar,
  "Manufacturing": faIndustry,
  "Media": faNewspaper,
  "Hospitality": faUtensils,
  "Education": faGraduationCap,
  "Legal": faGavel,
  "Public Sector": faLandmark,
  "Startup": faRocket,
  "Venture Capital": faCoins,
  "Aviation": faPlane,
  "CSR": faHandsHelping,
};

const ClientsAndIndustrySection = () => {
  const [activeTab, setActiveTab] = useState("clients");
  const data = activeTab === "clients" ? clients : industries;

  return (
    <div className="text-[#8A8A8A] py-14 px-4 md:px-24 bg-transparent">
      {/* Tabs */}
      <div className="relative z-10 flex justify-center space-x-10 mb-6 text-base font-montserrat font-semibold">
        <button
          onClick={() => setActiveTab("clients")}
          className={`pb-1 ${
            activeTab === "clients"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
        >
          CLIENTS
        </button>
        <button
          onClick={() => setActiveTab("industries")}
          className={`pb-1 ${
            activeTab === "industries"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
        >
          INDUSTRIES
        </button>
      </div>

      {/* Grid */}
      <div className="relative z-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-8 max-w-5xl mx-auto">
        {data.flat().map((name, index) => {
          if (!name) return <div key={index} className="h-10" />;

          if (activeTab === "clients") {
            const icon = clientIcons[name];
            return (
              <div
                key={index}
                className="flex items-center justify-center h-10 px-4"
              >
                <img
                  src={icon?.local || ""}
                  alt={name}
                  loading="lazy"
                  className="max-h-10 w-[60%] object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            );
          } else {
            const icon = industryIcons[name];
            return (
              <div
                key={index}
                className="flex items-center gap-3 justify-start px-4 text-white font-montserrat text-xl"
              >
                <FontAwesomeIcon icon={icon} className="h-5" />
                {name}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ClientsAndIndustrySection;