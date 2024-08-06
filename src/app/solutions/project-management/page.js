// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionPMView from 'src/sections/solutions/pm/view/SolutionPMView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionProjectManagementPage() {
  return (
    <MainLayout>
      <SolutionPMView />
    </MainLayout>
  );
}
