import { useEffect, useState } from "react";
import TableA from "./tables/TableA";
import TableB from "./tables/TableB";
import TableC from "./tables/TableC";
import TableD from "./tables/TableD";
import TableE from "./tables/TableE";
import LoadingOverlay from "../../../Blueprints/LoadingOverlay";

// FIX: Vite-compatible image import
import headerImage from "/images/homec.jpg";

export default function Mandatory() {
  const [headerLoading, setHeaderLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { key: "general", label: "General Information", component: <TableA /> },
    {
      key: "docinfo",
      label: "Documents and Information",
      component: <TableB />,
    },
    { key: "result", label: "Result and Academics", component: <TableC /> },
    { key: "staff", label: "Staff (Teaching)", component: <TableD /> },
    { key: "infra", label: "College Infrastructure", component: <TableE /> },
  ];

  // Preload Background Image
  useEffect(() => {
    const img = new Image();
    img.src = headerImage;
    img.onload = () => setHeaderLoading(false);
    img.onerror = () => setHeaderLoading(false);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="mandatory-page">
        {/* HEADER */}
        <header
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          {headerLoading && (
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10 flex items-center justify-center">
              <LoadingOverlay overlayOnly />
            </div>
          )}

          <div className="container mx-auto flex flex-col items-center justify-center text-white py-20 px-4">
            <h1 className="text-center font-semibold text-4xl md:text-6xl">
              Mandatory
            </h1>

            <p className="text-center max-w-3xl mt-6 text-lg opacity-90 leading-relaxed">
              Welcome to the Mandatory Disclosure section of Jahangirabad
              Institute of Technologys, we ensure transparency by providing
              essential information about our institution. Below are the key
              details:
            </p>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="container mx-auto py-10 px-4">
          {/* Tailwind Tabs */}
          <div className="border-b flex gap-6 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 text-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {tabs.find((tab) => tab.key === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
}
