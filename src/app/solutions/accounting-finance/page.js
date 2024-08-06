// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionAccView from 'src/sections/solutions/acc/view/SolutionAccView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionAccPage() {
  return (
    <MainLayout>
      <SolutionAccView />
    </MainLayout>
  );
}
