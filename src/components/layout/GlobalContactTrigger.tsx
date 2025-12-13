"use client";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function GlobalContactTrigger() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // prevent showing again on the SAME page
    if (sessionStorage.getItem("contactFormShown")) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("contactFormShown", "true");
    }, 15000); 

    return () => clearTimeout(timer);
  }, []);

  return <>{visible && <ContactForm onClose={() => setVisible(false)} />}</>;
}
