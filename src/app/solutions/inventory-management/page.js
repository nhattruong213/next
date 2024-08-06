// ----------------------------------------------------------------------
import MainLayout from 'src/layouts/main';
import SolutionInventoryView from 'src/sections/solutions/inventory/view/SolutionInventoryView';

export const metadata = {
  title: 'Solution',
};

export default function SolutionInventoryPage() {
  return (
    <MainLayout>
      <SolutionInventoryView />
    </MainLayout>
  );
}
