// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionProductionView from 'src/sections/solutions/production/view/SolutionProductionView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionProductionPage() {
  return (
    <MainLayout>
      <SolutionProductionView />
    </MainLayout>
  );
}
