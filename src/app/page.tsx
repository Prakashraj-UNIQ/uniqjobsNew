import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import { Metadata } from "next";
import CourseSection from "@/components/home/CourseSection";
import ProcessSection from "@/components/home/ProcessSection";
import dynamic from "next/dynamic";
import StruggleSuccessSection from "@/components/home/StruggleSuccessSection";
import ContactForm from "@/components/contact/ContactSection";
const ShortsSection = dynamic(() => import("@/components/shorts/ShortsSection"));

export const metadata: Metadata = {
  title: 'Best Software Training with Placement Institute in chennai | UniqJobs',
  description: 'Learn from industry experts with real-time project training and 100% placement assistance. Join UniqJobs, Chennai’s trusted IT training institute, and start your career today.',
};

export default async function Home() {

  return (
    <>
      <Banner />
      <AboutSection />
      <CourseSection />
      <ProcessSection />
      <StruggleSuccessSection />
      <ShortsSection variant="home" />
      <ContactForm />

    </>
  );
}
