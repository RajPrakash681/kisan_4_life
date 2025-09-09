import { ArrowLeft, User, CreditCard, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

interface KYCScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export function KYCScreen({ setCurrentScreen }: KYCScreenProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    aadhaarNumber: '',
    phoneNumber: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    landArea: '',
    cropTypes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const steps = [
    { id: 1, title: "Personal Information", icon: User },
    { id: 2, title: "Bank Details", icon: CreditCard },
    { id: 3, title: "Farm Information", icon: Shield }
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-2">Aadhaar Number *</label>
        <input
          type="text"
          value={formData.aadhaarNumber}
          onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="1234 5678 9012"
          maxLength={12}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="+91 98765 43210"
        />
      </div>
    </div>
  );

  const renderBankDetails = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700 mb-2">Bank Name *</label>
        <input
          type="text"
          value={formData.bankName}
          onChange={(e) => handleInputChange('bankName', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="State Bank of India"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-2">Account Number *</label>
        <input
          type="text"
          value={formData.accountNumber}
          onChange={(e) => handleInputChange('accountNumber', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="1234567890123456"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-2">IFSC Code *</label>
        <input
          type="text"
          value={formData.ifscCode}
          onChange={(e) => handleInputChange('ifscCode', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="SBIN0001234"
        />
      </div>
    </div>
  );

  const renderFarmInfo = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700 mb-2">Total Land Area (in acres) *</label>
        <input
          type="number"
          value={formData.landArea}
          onChange={(e) => handleInputChange('landArea', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="5.5"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-2">Main Crop Types *</label>
        <textarea
          value={formData.cropTypes}
          onChange={(e) => handleInputChange('cropTypes', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Rice, Wheat, Vegetables"
          rows={3}
        />
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInfo();
      case 2:
        return renderBankDetails();
      case 3:
        return renderFarmInfo();
      default:
        return renderPersonalInfo();
    }
  };

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
        <h1 className="text-xl">KYC & Payments</h1>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                isCompleted ? 'bg-amber-600 text-white' :
                isActive ? 'bg-amber-100 text-amber-600 border-2 border-amber-600' :
                'bg-gray-100 text-gray-400'
              }`}>
                {isCompleted ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
              </div>
              <span className={`text-xs text-center ${
                isActive ? 'text-amber-600' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`absolute w-full h-0.5 mt-5 ${
                  isCompleted ? 'bg-amber-600' : 'bg-gray-200'
                }`} style={{ left: '50%', width: '100%', zIndex: -1 }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg text-gray-900 mb-4">
          {steps.find(step => step.id === currentStep)?.title}
        </h3>
        
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>
          
          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              Next
            </button>
          ) : (
            <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
              Submit KYC
            </button>
          )}
        </div>
      </div>

      {/* Security Notice */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
          <div>
            <p className="text-blue-800 text-sm mb-1">Security & Privacy</p>
            <p className="text-blue-600 text-xs">
              Your personal information is encrypted and stored securely. We comply with all government data protection regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}