import AppLayout from '@/components/AppLayout';
import DashboardContent from './components/DashboardContent';

export default function UserDashboardPage() {
  return (
    <AppLayout userName="Priya Sharma" userPersona="Default" userLocation="Dwarka, New Delhi">
      <DashboardContent />
    </AppLayout>
  );
}