import { Home, User, Settings } from "lucide-react";

interface NavigationProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function Navigation({ currentTab, setCurrentTab }: NavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      <div className="bg-white/95 backdrop-blur-md border-t border-amber-200/50 shadow-2xl">
        <div className="flex justify-around px-2 py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`flex flex-col items-center px-4 py-2 rounded-2xl transition-all duration-300 transform ${
                  isActive
                    ? 'text-amber-600 bg-gradient-to-t from-amber-100 to-amber-50 scale-105 shadow-lg border border-amber-200/50'
                    : 'text-gray-500 hover:text-amber-600 hover:bg-amber-50/50 hover:scale-102'
                }`}
              >
                <Icon className={`h-6 w-6 mb-1 transition-transform duration-200 ${
                  isActive ? 'scale-110' : ''
                }`} />
                <span className={`text-xs font-medium ${
                  isActive ? 'text-amber-700' : ''
                }`}>{tab.label}</span>
              </button>
            );
          })}
        </div>
        {/* Bottom safe area */}
        <div className="h-2 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>
    </div>
  );
}