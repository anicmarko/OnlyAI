import { LandingHero } from "@/components/landing-hero";
import { LandingNavBar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavBar/>
      <LandingHero/>
      <LandingContent/>
    </div>
  )
}
export default LandingPage;
