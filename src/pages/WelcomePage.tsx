import { Welcome } from '../components/organisms/Welcome';
import { MainLayout } from '../components/templates/MainLayout';

export function WelcomePage() {
  return (
    <MainLayout>
      <Welcome />
    </MainLayout>
  );
}