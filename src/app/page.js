import MainLayout from 'src/layouts/main';
import HomeView from 'src/sections/home/view/home-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Odinbi - Complete Cloud ERP Solutions',
};

export default function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
