import SharedLayout from '@/components/SharedLayout';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact | Naitik Gupta',
  description: 'Get in touch with Naitik Gupta - AI Engineer and Researcher.',
};

export default function ContactPage() {
  return (
    <SharedLayout>
      <ContactSection />
    </SharedLayout>
  );
}
