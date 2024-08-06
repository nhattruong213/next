// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionHRMView from 'src/sections/solutions/hrm/view/SolutionHRMView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionCRMPage() {
  return (
    <MainLayout>
      <SolutionHRMView />
    </MainLayout>
  );
}
