import Header from '../components/common/Header';
import Sidebar from '../components/workspace/Sidebar';
import DashboardBuilder from '../components/dashboard/DashboardBuilder';

export default function DashboardPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <DashboardBuilder />
      </div>
    </div>
  );
}
