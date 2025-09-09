import { useState } from "react";
import { ArrowLeft, Package, Plus, Edit3, Trash2, Calendar, MapPin, Weight, IndianRupee, Eye, Clock, CheckCircle, Image } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CropsScreenProps {
  setCurrentScreen: (screen: string) => void;
}

interface CropListing {
  id: string;
  name: string;
  variety: string;
  quantity: string;
  unit: string;
  pricePerUnit: string;
  location: string;
  harvestDate: string;
  description: string;
  status: 'available' | 'sold' | 'reserved';
  quality: string;
  organicCertified: boolean;
  createdAt: string;
}

export function CropsScreen({ setCurrentScreen }: CropsScreenProps) {
  const [crops, setCrops] = useState<CropListing[]>([
    {
      id: '1',
      name: 'Basmati Rice',
      variety: '1121 Golden Sella',
      quantity: '50',
      unit: 'quintal',
      pricePerUnit: '3200',
      location: 'Rampur, Meerut',
      harvestDate: '2024-11-15',
      description: 'Good quality rice. Well dried. Ready for pickup from farm.',
      status: 'available',
      quality: 'Grade A',
      organicCertified: false,
      createdAt: '2024-12-01'
    },
    {
      id: '2',
      name: 'Wheat',
      variety: 'HD-2967',
      quantity: '75',
      unit: 'quintal',
      pricePerUnit: '2150',
      location: 'Rampur, Meerut',
      harvestDate: '2024-10-20',
      description: 'Fresh wheat crop. Good for flour mills. Contact for bulk orders.',
      status: 'reserved',
      quality: 'Grade A',
      organicCertified: false,
      createdAt: '2024-11-15'
    },
    {
      id: '3',
      name: 'Vegetables',
      variety: 'Tomato, Onion, Potato',
      quantity: '25',
      unit: 'quintal',
      pricePerUnit: '1800',
      location: 'Rampur, Meerut',
      harvestDate: '2024-12-05',
      description: 'Fresh vegetables. Daily pickup available. Call before coming.',
      status: 'available',
      quality: 'Good',
      organicCertified: true,
      createdAt: '2024-12-05'
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingCrop, setEditingCrop] = useState<CropListing | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    quantity: '',
    unit: 'quintal',
    pricePerUnit: '',
    location: '',
    harvestDate: '',
    description: '',
    quality: 'Grade A',
    organicCertified: false
  });

  const cropTypes = [
    'Basmati Rice', 'Non-Basmati Rice', 'Wheat', 'Maize', 'Soybean', 
    'Cotton', 'Sugarcane', 'Vegetables', 'Fruits', 'Pulses', 'Spices', 'Other'
  ];

  const resetForm = () => {
    setFormData({
      name: '',
      variety: '',
      quantity: '',
      unit: 'quintal',
      pricePerUnit: '',
      location: '',
      harvestDate: '',
      description: '',
      quality: 'Grade A',
      organicCertified: false
    });
  };

  const handleAddCrop = () => {
    const newCrop: CropListing = {
      id: Date.now().toString(),
      ...formData,
      status: 'available',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCrops([newCrop, ...crops]);
    resetForm();
    setIsAddDialogOpen(false);
  };

  const handleEditCrop = (crop: CropListing) => {
    setEditingCrop(crop);
    setFormData({
      name: crop.name,
      variety: crop.variety,
      quantity: crop.quantity,
      unit: crop.unit,
      pricePerUnit: crop.pricePerUnit,
      location: crop.location,
      harvestDate: crop.harvestDate,
      description: crop.description,
      quality: crop.quality,
      organicCertified: crop.organicCertified
    });
    setIsAddDialogOpen(true);
  };

  const handleUpdateCrop = () => {
    if (!editingCrop) return;
    
    setCrops(crops.map(crop => 
      crop.id === editingCrop.id 
        ? { ...crop, ...formData }
        : crop
    ));
    resetForm();
    setEditingCrop(null);
    setIsAddDialogOpen(false);
  };

  const handleDeleteCrop = (id: string) => {
    setCrops(crops.filter(crop => crop.id !== id));
  };

  const getCropImage = (cropName: string) => {
    switch (cropName.toLowerCase()) {
      case 'basmati rice':
      case 'rice':
        return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop&crop=center';
      case 'wheat':
        return 'https://images.unsplash.com/photo-1595801395265-f8145491f70e?w=100&h=100&fit=crop&crop=center';
      case 'vegetables':
      case 'organic vegetables':
        return 'https://images.unsplash.com/photo-1725483990685-820291c0fca1?w=100&h=100&fit=crop&crop=center';
      default:
        return 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop&crop=center';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-700';
      case 'reserved':
        return 'bg-orange-100 text-orange-700';
      case 'sold':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="h-4 w-4" />;
      case 'reserved':
        return <Clock className="h-4 w-4" />;
      case 'sold':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-4">
      {/* Simple Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentScreen('home')}
          className="mr-3 p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">My Crops</h1>
          <p className="text-gray-600 text-sm">Manage your listings</p>
        </div>
      </div>

      {/* Simple Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-green-50 p-3 rounded-lg border text-center">
          <div className="text-lg font-semibold text-green-700">{crops.filter(c => c.status === 'available').length}</div>
          <div className="text-xs text-green-600">Available</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border text-center">
          <div className="text-lg font-semibold text-orange-700">{crops.filter(c => c.status === 'reserved').length}</div>
          <div className="text-xs text-orange-600">Reserved</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border text-center">
          <div className="text-lg font-semibold text-blue-700">{crops.length}</div>
          <div className="text-xs text-blue-600">Total</div>
        </div>
      </div>

      {/* Add New Crop Button */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            className="w-full mb-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg"
            onClick={resetForm}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Crop
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md mx-4 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900">
              {editingCrop ? 'Edit Crop' : 'Add New Crop'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 max-h-80 overflow-y-auto">
            <div>
              <Label htmlFor="name">Crop Type</Label>
              <Select value={formData.name} onValueChange={(value) => setFormData({...formData, name: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  {cropTypes.map((crop) => (
                    <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="variety">Variety</Label>
              <Input
                id="variety"
                placeholder="Enter variety"
                value={formData.variety}
                onChange={(e) => setFormData({...formData, variety: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="50"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="unit">Unit</Label>
                <Select value={formData.unit} onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quintal">Quintal</SelectItem>
                    <SelectItem value="ton">Ton</SelectItem>
                    <SelectItem value="kg">Kg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="price">Price per {formData.unit} (₹)</Label>
              <Input
                id="price"
                type="number"
                placeholder="3200"
                value={formData.pricePerUnit}
                onChange={(e) => setFormData({...formData, pricePerUnit: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Village, District"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="harvestDate">Harvest Date</Label>
              <Input
                id="harvestDate"
                type="date"
                value={formData.harvestDate}
                onChange={(e) => setFormData({...formData, harvestDate: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your crop..."
                className="min-h-16"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="organic"
                checked={formData.organicCertified}
                onChange={(e) => setFormData({...formData, organicCertified: e.target.checked})}
              />
              <Label htmlFor="organic">Organic Certified</Label>
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setIsAddDialogOpen(false);
                setEditingCrop(null);
                resetForm();
              }}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={editingCrop ? handleUpdateCrop : handleAddCrop}
              className="flex-1 bg-amber-500 hover:bg-amber-600"
            >
              {editingCrop ? 'Update' : 'Add'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Crop Listings */}
      <div className="space-y-4">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback 
                      src={getCropImage(crop.name)}
                      alt={crop.name}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="h-6 w-6 text-gray-400" />
                        </div>
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                    <p className="text-gray-600 text-sm">{crop.variety}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs rounded ${getStatusColor(crop.status)}`}>
                        {crop.status}
                      </span>
                      {crop.organicCertified && (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                          Organic
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-1">
                <button
                  onClick={() => handleEditCrop(crop)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Edit3 className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDeleteCrop(crop.id)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm text-gray-600">Quantity</span>
                <span className="font-medium">{crop.quantity} {crop.unit}</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm text-gray-600">Price</span>
                <span className="font-medium">₹{crop.pricePerUnit}/{crop.unit}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {crop.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Harvested: {new Date(crop.harvestDate).toLocaleDateString('en-IN')}
              </div>
            </div>

            <div className="mt-3 p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-700">{crop.description}</p>
            </div>
          </div>
        ))}
      </div>

      {crops.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Package className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="font-semibold text-gray-700 mb-2">No crops listed</h3>
          <p className="text-gray-500 text-sm">Add your first crop to start selling</p>
        </div>
      )}
    </div>
  );
}