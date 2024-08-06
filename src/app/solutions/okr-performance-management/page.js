// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionOkrView from 'src/sections/solutions/okr/view/SolutionOkrView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionOkrPage() {
  return (
    <MainLayout>
      <SolutionOkrView />
    </MainLayout>
  );
}
