import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3, Clock, Activity } from "lucide-react";

interface PricesScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export function PricesScreen({ setCurrentScreen }: PricesScreenProps) {
  const cropPrices = [
    {
      name: "Rice (Basmati)",
      currentPrice: "₹3,200",
      unit: "per quintal",
      change: "+5.2%",
      trend: "up",
      lastUpdated: "2 hours ago",
      weeklyHigh: "₹3,300",
      weeklyLow: "₹3,000"
    },
    {
      name: "Wheat",
      currentPrice: "₹2,150",
      unit: "per quintal",
      change: "-2.1%",
      trend: "down",
      lastUpdated: "1 hour ago",
      weeklyHigh: "₹2,200",
      weeklyLow: "₹2,100"
    },
    {
      name: "Maize",
      currentPrice: "₹1,850",
      unit: "per quintal",
      change: "0%",
      trend: "stable",
      lastUpdated: "30 mins ago",
      weeklyHigh: "₹1,900",
      weeklyLow: "₹1,800"
    },
    {
      name: "Soybean",
      currentPrice: "₹4,500",
      unit: "per quintal",
      change: "+8.1%",
      trend: "up",
      lastUpdated: "1 hour ago",
      weeklyHigh: "₹4,600",
      weeklyLow: "₹4,100"
    },
    {
      name: "Cotton",
      currentPrice: "₹6,800",
      unit: "per quintal",
      change: "+3.5%",
      trend: "up",
      lastUpdated: "3 hours ago",
      weeklyHigh: "₹7,000",
      weeklyLow: "₹6,500"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-emerald-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable':
        return <Minus className="h-4 w-4 text-gray-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-emerald-600 bg-emerald-50';
      case 'down':
        return 'text-red-500 bg-red-50';
      case 'stable':
        return 'text-gray-500 bg-gray-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="p-6">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentScreen('home')}
            className="mr-4 p-3 hover:bg-amber-100 rounded-xl transition-colors group"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600 group-hover:text-amber-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Price Trends</h1>
            <p className="text-gray-600 text-sm mt-1">Live crop market analytics</p>
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
          <BarChart3 className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Market Status */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 mb-8 border border-emerald-200/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-emerald-800 font-bold mb-1">Market Status</h3>
              <p className="text-emerald-600 text-sm font-medium">Markets are open • Live prices</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-700 text-sm font-semibold">LIVE</span>
          </div>
        </div>
      </div>

      {/* Price Cards */}
      <div className="space-y-6">
        {cropPrices.map((crop, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{crop.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{crop.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      Updated {crop.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${getTrendColor(crop.trend)}`}>
                {getTrendIcon(crop.trend)}
                <span className="font-bold text-sm">{crop.change}</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-3xl font-bold text-gray-900">{crop.currentPrice}</p>
                  <p className="text-gray-600 text-sm font-medium">{crop.unit}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">High:</span> <span className="text-emerald-600 font-semibold">{crop.weeklyHigh}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Low:</span> <span className="text-red-500 font-semibold">{crop.weeklyLow}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini trend visualization */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    crop.trend === 'up' 
                      ? 'bg-gradient-to-r from-emerald-200 to-emerald-400' 
                      : crop.trend === 'down'
                      ? 'bg-gradient-to-r from-red-200 to-red-400'
                      : 'bg-gradient-to-r from-gray-200 to-gray-300'
                  }`}
                  style={{
                    opacity: Math.random() * 0.5 + 0.5,
                    height: `${Math.random() * 8 + 4}px`
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Market Insight */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-lg">📊</span>
          </div>
          <div>
            <p className="text-blue-800 font-semibold mb-1">Market Insight</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Basmati rice and soybean prices are trending upward due to increased export demand. Consider timing your sales strategically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}