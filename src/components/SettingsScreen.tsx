import { 
  Bell, 
  Globe, 
  Shield, 
  HelpCircle, 
  Info, 
  LogOut, 
  ChevronRight,
  Moon,
  Sun
} from "lucide-react";
import { useState } from "react";

export function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsGroups = [
    {
      title: "Preferences",
      items: [
        {
          icon: Bell,
          label: "Notifications",
          type: "toggle",
          value: notifications,
          onChange: setNotifications
        },
        {
          icon: darkMode ? Moon : Sun,
          label: "Dark Mode",
          type: "toggle",
          value: darkMode,
          onChange: setDarkMode
        },
        {
          icon: Globe,
          label: "Language",
          type: "select",
          value: "English",
          options: ["English", "Hindi", "Punjabi", "Marathi"]
        }
      ]
    },
    {
      title: "Account & Security",
      items: [
        {
          icon: Shield,
          label: "Privacy Settings",
          type: "navigation"
        },
        {
          icon: Shield,
          label: "Change Password",
          type: "navigation"
        },
        {
          icon: Shield,
          label: "Two-Factor Authentication",
          type: "navigation"
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: "Help Center",
          type: "navigation"
        },
        {
          icon: Info,
          label: "About Kisan4Life",
          type: "navigation"
        },
        {
          icon: Info,
          label: "Terms & Conditions",
          type: "navigation"
        },
        {
          icon: Info,
          label: "Privacy Policy",
          type: "navigation"
        }
      ]
    }
  ];

  const renderSettingItem = (item: any) => {
    const Icon = item.icon;

    if (item.type === "toggle") {
      return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <Icon className="h-5 w-5 text-gray-600 mr-3" />
            <span className="text-gray-900">{item.label}</span>
          </div>
          <button
            onClick={() => item.onChange(!item.value)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              item.value ? 'bg-amber-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                item.value ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      );
    }

    if (item.type === "select") {
      return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <Icon className="h-5 w-5 text-gray-600 mr-3" />
            <span className="text-gray-900">{item.label}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm mr-2">{item.value}</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      );
    }

    return (
      <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="flex items-center">
          <Icon className="h-5 w-5 text-gray-600 mr-3" />
          <span className="text-gray-900">{item.label}</span>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </button>
    );
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl text-gray-900">Settings</h1>

      {settingsGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3 className="text-lg text-gray-900 mb-3">{group.title}</h3>
          <div className="space-y-2">
            {group.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                {renderSettingItem(item)}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* App Version */}
      <div className="bg-gray-50 rounded-lg p-4 text-center">
        <p className="text-gray-600 text-sm">Kisan4Life</p>
        <p className="text-gray-500 text-xs">Version 1.0.0</p>
      </div>

      {/* Logout Button */}
      <button className="w-full flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 hover:bg-red-100 transition-colors">
        <LogOut className="h-5 w-5 mr-2" />
        Sign Out
      </button>

      {/* Contact Support */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="text-blue-800 mb-2">Need Help?</h4>
        <p className="text-blue-600 text-sm mb-3">
          Contact our support team for assistance with the app or farming-related queries.
        </p>
        <button className="text-blue-600 text-sm hover:text-blue-800">
          Contact Support →
        </button>
      </div>
    </div>
  );
}