import SharedLayout from '@/components/SharedLayout';
import ProjectsSection from '@/components/ProjectsSection';

export const metadata = {
  title: 'Projects | Naitik Gupta',
  description: 'Portfolio of AI and software engineering projects by Naitik Gupta.',
};

export default function ProjectsPage() {
  return (
    <SharedLayout>
      <ProjectsSection />
    </SharedLayout>
  );
}
