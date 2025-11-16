import ContactForm from '@/components/contact/ContactSection'
import { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Contact Us | UniqJobs',
  description: 'Start your IT career with UniqJobs in Chennai. Get real-time project training from industry experts and benefit from 100% placement assistance.',
};

const page = () => {
  return (
    <>
      <Script
        id="ld-contact-page"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact UniqJobs",
          "url": "https://uniqjobs.co.in/contact-us",
          "about": {
            "@type": "Organization",
            "name": "UniqJobs",
            "url": "https://uniqjobs.co.in"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-96001-14466",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "ta"]
          }
        })}
      </Script>

      <ContactForm />
    </>
  )
}

export default page