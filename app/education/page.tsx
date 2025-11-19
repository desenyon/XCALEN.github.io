import SharedLayout from '@/components/SharedLayout';
import EducationSection from '@/components/EducationSection';

export const metadata = {
  title: 'Education | Naitik Gupta',
  description: 'Educational background, awards, and certifications of Naitik Gupta.',
};

export default function EducationPage() {
  return (
    <SharedLayout>
      <EducationSection />
    </SharedLayout>
  );
}
