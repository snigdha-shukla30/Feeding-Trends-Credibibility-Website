
import Hero from "@/components/main-components/Hero";
import AboutUs from "@/components/main-components/About";
import BeliefSection from "@/components/main-components/Belief";
import ImagesSection from "@/components/main-components/Business";
import  Journey  from "@/components/main-components/Journey";
import Statistics from "@/components/main-components/Statistics";
import WhyItWork from "@/components/main-components/WhyItWork";
import Events from "@/components/main-components/Events";
import Partners from "@/components/main-components/Partners";
import Awards from "@/components/main-components/Awards";
import CaseStudies from "@/components/main-components/CaseStudies"
import MediaMentions from "@/components/main-components/MediaMentions"
import GivingItBack from "@/components/main-components/GivingItBack"
import Student from "@/components/main-components/Student"
import Student2 from "@/components/main-components/Student2"
import Workshop from "@/components/main-components/Workshop"
import Testimonials from "@/components/main-components/Testimonials"
import { Team } from "@/components/main-components/Team";
import WhatsNextSection from "@/components/main-components/Next"
import FutureSection from "@/components/main-components/FutureSection"
import UnequalSizeGallery from "@/components/main-components/gallery";
import EventsPage from "@/components/main-components/event-invite";

export default function Company() {
  return (
   <>
   <Hero/>
   <AboutUs/>
   <BeliefSection />
   <Journey />
   <Statistics />
   <WhyItWork/>
   <ImagesSection />
   <Events />
   <Partners/>
   <Awards/>
   <CaseStudies/>
   <MediaMentions/>
   <EventsPage />
   <GivingItBack/>
   <Student/> 
   <Student2/>
   <Workshop/>
   <Testimonials/>
   <Team />
   <WhatsNextSection />
   <UnequalSizeGallery />
   <FutureSection />
   {/* <Footer /> */}
   </>
    );
}