import AppLayout from '@/components/AppLayout';
import MapPageContent from './components/MapPageContent';

export default function LiveWeatherMapPage() {
  return (
    <AppLayout userName="Priya Sharma" userPersona="Default" userLocation="Dwarka, New Delhi">
      <MapPageContent />
    </AppLayout>
  );
}