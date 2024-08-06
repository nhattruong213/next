// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionRoboticView from 'src/sections/solutions/robotic/view/SolutionRoboticView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionRoboticPage() {
  return (
    <MainLayout>
      <SolutionRoboticView />
    </MainLayout>
  );
}
