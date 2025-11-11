import { Route, Routes, useLocation } from "react-router-dom";
import HODPage from "./Blueprints/HODPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CollegesSection from "./components/home/CollegesSection";
import CommunitySection from "./components/home/CommunitySection";
import HomePage from "./components/home/HomePage";
import ImageCollage from "./components/home/ImageGallery";
import ChairmansMessage from "./components/pages/about/ChairmansMessage";
import BtechAiml from "./components/pages/coe/BtechAiml";
import BtechCivil from "./components/pages/coe/BtechCivil";
import BtechCollege from "./components/pages/coe/BtechCollege";
import BtechCse from "./components/pages/coe/BtechCse";
import BtechEce from "./components/pages/coe/BtechEce";
import BtechEe from "./components/pages/coe/BtechEe";
import BtechMechanical from "./components/pages/coe/BtechMechanical";
import DiplomaCe from "./components/pages/coe/DiplomaCe";
import DiplomaCse from "./components/pages/coe/DiplomaCse";
import DiplomaEe from "./components/pages/coe/DiplomaEe";
import DiplomaLis from "./components/pages/coe/DiplomaLis";
import DiplomaMe from "./components/pages/coe/DiplomaMe";
import BPharma from "./components/pages/college-pharmacy/BPharma";
import BPharmaLater from "./components/pages/college-pharmacy/BPharmaLater";
import CollegeOPharm from "./components/pages/college-pharmacy/CollegeOPharm";
import FacultySection from "./components/pages/college-pharmacy/FacultySection";
import DPharma from "./components/pages/college-pharmacy/diploma/DPharma";
import MbaIt from "./components/pages/collegeObusiness/MbaIt";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative">
      <Navbar />
      <div className={isHome ? "" : "pt-28"}>
        {" "}
        {/* 👈 Apply padding only on non-home pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                {/* <QuickLinks /> */}
              </>
            }
          />
          <Route path="/btech-coe" element={<BtechCollege />} />
          <Route path="/bPharm" element={<CollegeOPharm />} />
          <Route path="/faculties" element={<FacultySection />} />
          <Route path="/btech-cse" element={<BtechCse />} />
          <Route path="/btech-aiml" element={<BtechAiml />} />
          <Route path="/btech-civil" element={<BtechCivil />} />
          <Route path="/btech-ee" element={<BtechEe />} />
          <Route path="/btech-ece" element={<BtechEce />} />
          <Route path="/btech-mechanical" element={<BtechMechanical />} />
          <Route path="/diploma-cse" element={<DiplomaCse />} />
          <Route path="/diploma-ee" element={<DiplomaEe />} />
          <Route path="/diploma-civil" element={<DiplomaCe />} />
          <Route path="/diploma-mechanical" element={<DiplomaMe />} />
          <Route path="/diploma-library" element={<DiplomaLis />} />

          <Route path="/b-pharma" element={<BPharma />} />
          <Route path="/b-pharmalater" element={<BPharmaLater />} />
          <Route path="/diploma-pharmacy" element={<DPharma />} />

          <Route path="/mba-it" element={<MbaIt />} />

          {/* General HOD page */}
          <Route path="/hod" element={<HODPage />} />
          {/* Dynamic department-based pages */}
          <Route path="/hod/:dept" element={<HODPage />} />

          <Route path="/courses" element={<CollegesSection />} />
          <Route path="/collegeLife" element={<ImageCollage />} />
          <Route path="/community" element={<CommunitySection />} />

          <Route path="/chairman" element={<ChairmansMessage />} />
          <Route path="/director" element={<ChairmansMessage />} />
          <Route path="/history" element={<ChairmansMessage />} />
          <Route path="/vision" element={<ChairmansMessage />} />
          <Route path="/alumni" element={<ChairmansMessage />} />
          <Route path="/affiliation" element={<ChairmansMessage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
