import { Home, Users, Book, Database, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'My Workspace', path: '/' },
    { icon: Users, label: 'Team Spaces', path: '/teams', hasSubmenu: true },
    { icon: Book, label: 'Model Library', path: '/library' },
    { icon: Database, label: 'Data Sources', path: '/data-sources' },
  ];
  
  const teamProjects = [
    { name: 'Project Titan M&A', path: '/model/titan' },
    { name: 'Q3 Earnings Analysis', path: '/model/q3-earnings' },
  ];
  
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <div key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-gray-800 text-blue-400'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.hasSubmenu && <ChevronRight className="w-4 h-4" />}
              </button>
              
              {item.hasSubmenu && item.label === 'Team Spaces' && (
                <div className="ml-8 mt-1 space-y-1">
                  {teamProjects.map((project) => (
                    <button
                      key={project.path}
                      onClick={() => navigate(project.path)}
                      className="w-full text-left px-3 py-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
