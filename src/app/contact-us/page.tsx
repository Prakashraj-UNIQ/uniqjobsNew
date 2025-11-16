import ContactForm from '@/components/contact/ContactSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kickstart Your IT Career Today Let’s Talk! | UniqJobs',
  description: 'Learn from industry experts with real-time project training and 100% placement assistance. Join UniqJobs, Chennai’s trusted IT training institute, and start your career today.',
};

const page = () => {
  return (
    <div><ContactForm/></div>
  )
}

export default page