// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionCRMView from 'src/sections/solutions/crm/view/SolutionCRMView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionCRMPage() {
  return (
    <MainLayout>
      <SolutionCRMView />
    </MainLayout>
  );
}
