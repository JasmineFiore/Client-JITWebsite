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
import CollegeOEngg from "./components/pages/coe/CollegeOEngg";
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
import MbaFinance from "./components/pages/collegeObusiness/MbaFinance";
import MbaMarketing from "./components/pages/collegeObusiness/MbaMarketing";
import MbaHr from "./components/pages/collegeObusiness/MbaHr";
import BCom from "./components/pages/collegeObusiness/BCom";
import CollegeOBusiness from "./components/pages/collegeObusiness/CollegeOBusiness";
import CollegeOfArts from "./components/pages/collegeOfArts/CollegeOfArts";
import PoliticalScience from "./components/pages/collegeOfArts/PoliticalScience";
import Education from "./components/pages/collegeOfArts/Education";
import LLB from "./components/pages/collegeOfArts/LLB";
import Sociology from "./components/pages/collegeOfArts/Sociology";
import AncientHistory from "./components/pages/collegeOfArts/AncientHistory";
import Hindi from "./components/pages/collegeOfArts/Hindi";
import English from "./components/pages/collegeOfArts/English";
import Urdu from "./components/pages/collegeOfArts/Urdu";
import CollegeOfMedia from "./components/pages/CollegeOfMedia/CollegeOfMedia";
import CollegeOfITI from "./components/pages/College-iti/CollegeOfITI";
import DigitalPhoto from "./components/pages/College-iti/DigitalPhoto";
import Electrician from "./components/pages/College-iti/Electrician";
import Welder from "./components/pages/College-iti/Welder";
import Fitter from "./components/pages/College-iti/Fitter";
import CareersPage from "./components/pages/Career/CareersPage";
import ContactPage from "./components/pages/ContactPage";
import PlacementSection from "./components/pages/placement/PlacementPage";
import PlacementPage from "./components/pages/placement/PlacementPage";
import Draughtsman from "./components/pages/College-iti/Draughtsman";
import StudentFeedback from "./components/pages/LifeJIT/student-corner/StudentFeedback ";
import PassoutStudentForm from "./components/pages/LifeJIT/student-corner/PassoutStudentForm";
import TeacherFeedback from "./components/pages/LifeJIT/teacher-corner/StaffFeedback";
import NewsletterPage from "./components/pages/LifeJIT/newsletter/NewsletterPage";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import AlumniFeedback from "./components/pages/LifeJIT/student-corner/AlumniFeedback";
import HostelFacilities from "./components/pages/LifeJIT/HostelFacilities";
import Mandatory from "./components/pages/Mandatory/Mandatory";
import TableC from "./components/pages/Mandatory/tables/TableC";
import { useState } from "react";
import MyDocument from "./components/pdfviewer/MyDocument";
import EventsComponent from "./components/pages/LifeJIT/events/EventsComponent";
import SportsPage from "./components/pages/sports/SportsPage";
import NCCSection from "./components/pages/NCCSection/NCCSection";
import JITNews from "./components/pages/JITNews/JITNews";
import OurJourney from "./components/pages/about/OurJourney";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isPDFMode, setisPDFMode] = useState(false);

  return (
    <div className="relative">
      {!isPDFMode && <Navbar />}

      <ScrollToTop />

      <div className={!isPDFMode && !isHome ? "pt-28" : ""}>
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
          <Route path="/CollegeOfEngineering" element={<CollegeOEngg />} />
          <Route path="/CollegeOfPharmacy" element={<CollegeOPharm />} />
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

          <Route path="/CollegeOfBusiness" element={<CollegeOBusiness />} />
          <Route path="/mba-it" element={<MbaIt />} />
          <Route path="/mba-finance" element={<MbaFinance />} />
          <Route path="/mba-marketing" element={<MbaMarketing />} />
          <Route path="/mba-hr" element={<MbaHr />} />
          <Route path="/bcom" element={<BCom />} />

          <Route path="/CollegeOfArts" element={<CollegeOfArts />} />
          <Route path="/llb" element={<LLB />} />
          <Route path="/political-science" element={<PoliticalScience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sociology" element={<Sociology />} />
          <Route path="/ancient-history" element={<AncientHistory />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/english" element={<English />} />
          <Route path="/urdu" element={<Urdu />} />

          <Route path="/CollegeOfMedia" element={<CollegeOfMedia />} />

          <Route path="/CollegeOfITI" element={<CollegeOfITI />} />
          <Route path="/digital-photography" element={<DigitalPhoto />} />
          <Route path="/iti-electrician" element={<Electrician />} />
          <Route path="/iti-welder" element={<Welder />} />
          <Route path="/iti-fitter" element={<Fitter />} />
          <Route path="/iti-draughtsman" element={<Draughtsman />} />

          <Route path="/sports" element={<SportsPage />} />

          <Route path="/ncc" element={<NCCSection />} />

          {/* General HOD page */}
          <Route path="/hod" element={<HODPage />} />
          <Route path="/faculty" element={<HODPage />} />
          {/* Dynamic department-based pages */}
          <Route path="/hod/:dept" element={<HODPage />} />

          <Route path="/courses" element={<CollegesSection />} />
          <Route path="/collegeLife" element={<ImageCollage />} />
          <Route path="/JIT-events" element={<EventsComponent />} />
          <Route path="/community" element={<CommunitySection />} />

          <Route path="/chairman" element={<ChairmansMessage />} />
          <Route path="/director" element={<ChairmansMessage />} />
          <Route path="/history" element={<ChairmansMessage />} />
          <Route path="/vision-mission" element={<ChairmansMessage />} />
          <Route path="/alumni" element={<ChairmansMessage />} />
          <Route path="/affiliation" element={<ChairmansMessage />} />
          <Route path="/our-journey" element={<ChairmansMessage />} />
          <Route path="/hostel-facilities" element={<HostelFacilities />} />

          <Route path="/student-feedback" element={<StudentFeedback />} />
          <Route path="/alumni-feedback" element={<AlumniFeedback />} />
          <Route path="/pass-out-students" element={<PassoutStudentForm />} />
          <Route path="/staff-feedback" element={<TeacherFeedback />} />
          <Route path="/e-Newsletter" element={<NewsletterPage />} />
          <Route path="/JIT-in-news" element={<JITNews />} />

          <Route path="/placements" element={<PlacementPage />} />
          <Route path="/tp-cell" element={<PlacementPage />} />
          <Route path="/recruiters" element={<PlacementPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/" element={<TableC />} />

          <Route path="/mandatory" element={<Mandatory />} />
          <Route
            path="/affiltation.pdf"
            element={
              <MyDocument
                setisPDFMode={setisPDFMode}
                file="NOTIFICATION_UPTAC_2025.pdf"
                fileName="Affiliation Certificate"
              />
            }
          />
          <Route path="/career" element={<CareersPage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      {!isPDFMode && <Footer />}
    </div>
  );
}
