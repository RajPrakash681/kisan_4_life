import { Users, TrendingUp, FileText, CreditCard, ArrowRight, Sparkles, Target, Zap, Package } from "lucide-react";

interface HomeScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export function HomeScreen({ setCurrentScreen }: HomeScreenProps) {
  const menuItems = [
    {
      id: 'crops',
      title: 'List My Crops',
      description: 'Manage your crop listings for buyers',
      icon: Package,
      gradient: 'from-amber-500 to-amber-600',
      accentColor: 'bg-amber-500',
      shadowColor: 'shadow-amber-500/25'
    },
    {
      id: 'buyers',
      title: 'Connect with Buyer',
      description: 'Find direct buyers for your crops',
      icon: Users,
      gradient: 'from-blue-500 to-blue-600',
      accentColor: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      id: 'prices',
      title: 'Price Trends',
      description: 'Real-time crop price analytics',
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-emerald-600',
      accentColor: 'bg-emerald-500',
      shadowColor: 'shadow-emerald-500/25'
    },
    {
      id: 'schemes',
      title: 'Govt. Schemes',
      description: 'Explore government farming schemes',
      icon: FileText,
      gradient: 'from-purple-500 to-purple-600',
      accentColor: 'bg-purple-500',
      shadowColor: 'shadow-purple-500/25'
    },
    {
      id: 'kyc',
      title: 'KYC & Payments',
      description: 'Verification and payment setup',
      icon: CreditCard,
      gradient: 'from-rose-500 to-rose-600',
      accentColor: 'bg-rose-500',
      shadowColor: 'shadow-rose-500/25'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">👋</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome to Kisan4Life</h2>
              <p className="text-amber-100/90 font-medium">Your farming success partner</p>
            </div>
          </div>
          <p className="text-amber-50/90 leading-relaxed">
            Direct farming solutions without middlemen - connecting you to better prices and secure contracts
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-2">
          <Sparkles className="h-5 w-5 text-amber-600" />
          <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
        </div>
        
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className={`w-full group relative bg-white rounded-2xl p-6 shadow-lg ${item.shadowColor} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100/50`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-gray-900 font-semibold mb-1 group-hover:text-gray-700">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          );
        })}
      </div>

      {/* Enhanced Quick Stats */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-2">
          <Target className="h-5 w-5 text-amber-600" />
          <h3 className="text-lg font-semibold text-gray-800">Platform Stats</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white to-amber-50/30 p-6 rounded-2xl border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <Zap className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold text-amber-600 mb-1">150+</p>
            <p className="text-gray-700 text-sm font-medium">Active Buyers</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-orange-50/30 p-6 rounded-2xl border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <Zap className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold text-orange-600 mb-1">25+</p>
            <p className="text-gray-700 text-sm font-medium">Crop Types</p>
          </div>
        </div>
      </div>

      {/* Success Stories Teaser */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
          <h4 className="font-semibold text-gray-800">Success Story</h4>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          "Increased my profits by 40% through direct buyer connections!" - Rajesh Kumar, Punjab
        </p>
      </div>
    </div>
  );
}