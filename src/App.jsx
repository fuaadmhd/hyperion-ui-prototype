import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Workspace from './pages/Workspace';
import ModelingCanvas from './pages/ModelingCanvas';
import DashboardPage from './pages/DashboardPage';
import DataSources from './pages/DataSources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="/model/:id" element={<ModelingCanvas />} />
        <Route path="/dashboard/:id" element={<DashboardPage />} />
        <Route path="/data-sources" element={<DataSources />} />
        <Route path="/library" element={<Workspace />} />
        <Route path="/teams" element={<Workspace />} />
      </Routes>
    </Router>
  );
}

export default App;
