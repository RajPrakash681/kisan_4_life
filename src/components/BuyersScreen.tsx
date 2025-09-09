import { ArrowLeft, MapPin, Phone, Star, Users } from "lucide-react";

interface BuyersScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export function BuyersScreen({ setCurrentScreen }: BuyersScreenProps) {
  const buyers = [
    {
      id: 1,
      name: "Agro Foods Ltd.",
      location: "Mumbai, Maharashtra",
      contact: "+91 98765 43210",
      rating: 4.8,
      cropTypes: ["Rice", "Wheat", "Pulses"],
      minQuantity: "10 tons",
      verified: true
    },
    {
      id: 2,
      name: "Fresh Harvest Co.",
      location: "Delhi, NCR",
      contact: "+91 87654 32109",
      rating: 4.6,
      cropTypes: ["Vegetables", "Fruits"],
      minQuantity: "5 tons",
      verified: true
    },
    {
      id: 3,
      name: "Golden Grains",
      location: "Ludhiana, Punjab",
      contact: "+91 76543 21098",
      rating: 4.7,
      cropTypes: ["Wheat", "Maize", "Barley"],
      minQuantity: "15 tons",
      verified: true
    },
    {
      id: 4,
      name: "Organic Plus",
      location: "Pune, Maharashtra",
      contact: "+91 65432 10987",
      rating: 4.9,
      cropTypes: ["Organic Vegetables", "Fruits"],
      minQuantity: "3 tons",
      verified: true
    }
  ];

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
            <h1 className="text-2xl font-bold text-gray-800">Connect with Buyers</h1>
            <p className="text-gray-600 text-sm mt-1">Find verified buyers for your crops</p>
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Users className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Buyers List */}
      <div className="space-y-6">
        {buyers.map((buyer, index) => (
          <div 
            key={buyer.id} 
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{buyer.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{buyer.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {buyer.location}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold text-yellow-700">{buyer.rating}</span>
                    </div>
                    {buyer.verified && (
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                        ✓ Verified Buyer
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Interested in:</p>
              <div className="flex flex-wrap gap-2">
                {buyer.cropTypes.map((crop, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Min. Quantity:</span>
                <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 font-semibold rounded-md">{buyer.minQuantity}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{buyer.contact}</span>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-lg">💡</span>
          </div>
          <div>
            <p className="text-blue-800 font-semibold mb-1">Pro Tip</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Direct contact eliminates middlemen and ensures better prices for your crops. Build long-term relationships for consistent business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}