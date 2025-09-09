import { ArrowLeft, ExternalLink, Calendar, DollarSign } from "lucide-react";

interface SchemesScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export function SchemesScreen({ setCurrentScreen }: SchemesScreenProps) {
  const schemes = [
    {
      id: 1,
      title: "PM-KISAN Samman Nidhi",
      description: "Direct income support of ₹6,000 per year to farmer families owning cultivable land.",
      amount: "₹6,000/year",
      eligibility: "Small & marginal farmers",
      deadline: "Open throughout year",
      status: "Active",
      benefits: [
        "Direct bank transfer",
        "No middleman involvement",
        "Three installments of ₹2,000 each"
      ]
    },
    {
      id: 2,
      title: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme providing financial support to farmers in case of crop loss.",
      amount: "Up to ₹2 lakh coverage",
      eligibility: "All farmers",
      deadline: "Before sowing season",
      status: "Active",
      benefits: [
        "Low premium rates",
        "Covers natural calamities",
        "Technology-enabled quick settlement"
      ]
    },
    {
      id: 3,
      title: "Soil Health Card Scheme",
      description: "Provides soil health cards to farmers with recommendations for appropriate nutrients.",
      amount: "Free service",
      eligibility: "All farmers",
      deadline: "Ongoing",
      status: "Active",
      benefits: [
        "Free soil testing",
        "Nutrient recommendations",
        "Improved crop productivity"
      ]
    },
    {
      id: 4,
      title: "Kisan Credit Card",
      description: "Provides adequate and timely credit support for agricultural activities.",
      amount: "Up to ₹3 lakh",
      eligibility: "Farmers with land records",
      deadline: "Ongoing",
      status: "Active",
      benefits: [
        "Low interest rates (7%)",
        "Flexible repayment",
        "No collateral for amounts up to ₹1.6 lakh"
      ]
    }
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentScreen('home')}
          className="mr-3 p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl">Government Schemes</h1>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h3 className="text-blue-800 mb-2">Available Government Benefits</h3>
        <p className="text-blue-600 text-sm">
          Explore various government schemes designed to support farmers and improve agricultural productivity.
        </p>
      </div>

      {/* Schemes List */}
      <div className="space-y-6">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-2">{scheme.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{scheme.description}</p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                {scheme.status}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 text-amber-600 mr-2" />
                <span className="text-sm text-gray-600">Amount: </span>
                <span className="text-sm text-gray-900 ml-1">{scheme.amount}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Deadline: </span>
                <span className="text-sm text-gray-900 ml-1">{scheme.deadline}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Eligibility: {scheme.eligibility}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Key Benefits:</p>
              <ul className="space-y-1">
                {scheme.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-blue-600 text-sm hover:text-blue-800 flex items-center">
                Learn More
                <ExternalLink className="h-4 w-4 ml-1" />
              </button>
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm hover:bg-amber-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <p className="text-orange-800 text-sm">
          📋 Note: Eligibility criteria and application processes may vary. Contact your local agricultural office for detailed information.
        </p>
      </div>
    </div>
  );
}