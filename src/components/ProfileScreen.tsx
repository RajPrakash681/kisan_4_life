import { User, MapPin, Phone, Mail, Edit3, Star, Award, TrendingUp, Briefcase, Clock } from "lucide-react";

export function ProfileScreen() {
  const farmerProfile = {
    name: "Rajesh Kumar",
    location: "Village Rampur, District Meerut, UP",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@gmail.com",
    landArea: "12.5 acres",
    experience: "15 years",
    rating: 4.7,
    crops: ["Rice", "Wheat", "Sugarcane", "Vegetables"],
    completedDeals: 47,
    totalEarnings: "₹15,50,000"
  };

  const recentActivity = [
    { type: "deal", description: "Sold 20 quintals of Rice to Agro Foods Ltd.", date: "2 days ago" },
    { type: "price", description: "Checked wheat price trends", date: "5 days ago" },
    { type: "scheme", description: "Applied for PM-KISAN scheme", date: "1 week ago" },
    { type: "kyc", description: "KYC verification completed", date: "2 weeks ago" }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Profile Header */}
      <div className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mr-6 shadow-xl">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">{farmerProfile.name}</h2>
                <div className="flex items-center text-amber-100 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-medium">{farmerProfile.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-amber-100 text-sm font-medium">Farmer ID: #K4L2024</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              <Edit3 className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-yellow-300 mr-1" />
                <span className="text-xl font-bold">{farmerProfile.rating}</span>
              </div>
              <p className="text-amber-100 text-sm font-medium">Rating</p>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold mb-1">{farmerProfile.experience}</p>
              <p className="text-amber-100 text-sm font-medium">Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
            <Phone className="h-5 w-5 text-blue-600 mr-4" />
            <span className="font-medium text-gray-800">{farmerProfile.phone}</span>
          </div>
          <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
            <Mail className="h-5 w-5 text-purple-600 mr-4" />
            <span className="font-medium text-gray-800">{farmerProfile.email}</span>
          </div>
        </div>
      </div>

      {/* Farm Details */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Farm Details</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-200/50 text-center">
            <p className="text-3xl font-bold text-emerald-600 mb-1">{farmerProfile.landArea}</p>
            <p className="text-emerald-700 font-medium text-sm">Total Land</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200/50 text-center">
            <p className="text-3xl font-bold text-amber-600 mb-1">{farmerProfile.crops.length}</p>
            <p className="text-amber-700 font-medium text-sm">Crop Types</p>
          </div>
        </div>
        
        <div>
          <p className="text-gray-700 font-semibold mb-3">Specialized Crops:</p>
          <div className="flex flex-wrap gap-3">
            {farmerProfile.crops.map((crop, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 font-semibold rounded-full border border-amber-200"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{farmerProfile.completedDeals}</p>
          <p className="text-gray-600 font-medium">Completed Deals</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{farmerProfile.totalEarnings}</p>
          <p className="text-gray-600 font-medium">Total Earnings</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">{activity.description}</p>
                <p className="text-gray-500 text-sm">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}