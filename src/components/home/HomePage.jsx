import MovingLinksBar from "../MovingLinksBar";
import AlumniCarousel from "./AlumniCarousel";
import College360View from "./College360View";

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
  return (
    <div>
      <HeroCarousel />
      <MovingLinksBar />
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
