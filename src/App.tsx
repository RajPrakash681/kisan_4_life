import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomeScreen } from "./components/HomeScreen";
import { CropsScreen } from "./components/CropsScreen";
import { BuyersScreen } from "./components/BuyersScreen";
import { PricesScreen } from "./components/PricesScreen";
import { SchemesScreen } from "./components/SchemesScreen";
import { KYCScreen } from "./components/KYCScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { SettingsScreen } from "./components/SettingsScreen";

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    // If we're on a specific feature screen, show that
    if (currentScreen !== 'home' && currentTab === 'home') {
      switch (currentScreen) {
        case 'crops':
          return <CropsScreen setCurrentScreen={setCurrentScreen} />;
        case 'buyers':
          return <BuyersScreen setCurrentScreen={setCurrentScreen} />;
        case 'prices':
          return <PricesScreen setCurrentScreen={setCurrentScreen} />;
        case 'schemes':
          return <SchemesScreen setCurrentScreen={setCurrentScreen} />;
        case 'kyc':
          return <KYCScreen setCurrentScreen={setCurrentScreen} />;
        default:
          return <HomeScreen setCurrentScreen={setCurrentScreen} />;
      }
    }

    // Otherwise show the tab-based screens
    switch (currentTab) {
      case 'home':
        return <HomeScreen setCurrentScreen={setCurrentScreen} />;
      case 'profile':
        return <ProfileScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  // Reset to home screen when switching tabs
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    if (tab !== 'home') {
      setCurrentScreen('home');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20">
      {/* Mobile App Container */}
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm min-h-screen relative shadow-2xl">
        {/* App Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white shadow-xl">
          <div className="px-6 py-5">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl">🌾</span>
                  </div>
                  <h1 className="text-2xl font-bold tracking-wide">Kisan4Life</h1>
                </div>
                <p className="text-amber-100 text-sm font-medium tracking-wider opacity-90">
                  Assured Contract Farming
                </p>
              </div>
            </div>
          </div>
          {/* Subtle bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Screen Content */}
        <div className="pb-20 min-h-[calc(100vh-140px)]">
          {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <Navigation currentTab={currentTab} setCurrentTab={handleTabChange} />
      </div>
    </div>
  );
}