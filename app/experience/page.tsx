import SharedLayout from '@/components/SharedLayout';
import ExperienceSection from '@/components/ExperienceSection';

export const metadata = {
  title: 'Experience | Naitik Gupta',
  description: 'Professional experience and work history of Naitik Gupta - AI Engineer, Researcher, and Founder.',
};

export default function ExperiencePage() {
  return (
    <SharedLayout>
      <ExperienceSection />
    </SharedLayout>
  );
}
