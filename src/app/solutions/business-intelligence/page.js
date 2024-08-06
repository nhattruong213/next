// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionBiView from 'src/sections/solutions/bi/view/SolutionBiView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionCRMPage() {
  return (
    <MainLayout>
      <SolutionBiView />
    </MainLayout>
  );
}
