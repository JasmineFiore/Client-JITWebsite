import NoticeMarquee from "../NoticeMarquee";
import AlumniCarousel from "./AlumniCarousel";
import CollegesSection from "./CollegesSection";
import CommunitySection from "./CommunitySection";
import CounsellingSection from "./CounsellingSection";
import HeroCarousel from "./HeroCarousel";
import ImageGallery from "./ImageGallery";
import JITTechnologiesSection from "./JITTechnologiesSection";
import JITVisionSection from "./JITVisionSection";
import PlacementSection from "./PlacementSection";
import StatsSection from "./StatsSection";
import WhyJoinJITSection from "./WhyJoinJITSection";

export default function HomePage() {
  const notices = [
    {
      text: "Programs/Courses Offered By JIT",
      link: "/courses",
      isNew: false,
    },
    {
      text: "Message From Director",
      link: "/director",
      isNew: false,
    },
    {
      text: "Book a Counselling",
      link:  "/community" ,
      isNew: false,
    },
   
    {
      text: "Admission Guidelines for Academic Session 2025-26",
      link: "/pdfs/NOTIFICATION_UPTAC_2025.pdf",
      isNew: true, // 🔴 new icon
    },
  ];
  return (
    <div>
      <HeroCarousel />
      {/* <MovingLinksBar /> */}
      <NoticeMarquee notices={notices} />
      <JITVisionSection />
      <StatsSection />
      <CollegesSection />
      <WhyJoinJITSection />
      <JITTechnologiesSection />
      <CommunitySection />
      <ImageGallery />
      <PlacementSection />
      <AlumniCarousel />
      <CounsellingSection />

      {/* <QuickLinks /> */}
    </div>
  );
}
