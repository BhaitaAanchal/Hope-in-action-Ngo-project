import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';

type DonationFormData = {
  name: string;
  location: string;
  mobile: string;
  items: string;
  type: string;
  quantity: string;
  expiryDate: string;
  pickupDate: string;
};

export function FoodDonation() {
  const [formData, setFormData] = useState<DonationFormData>({
    name: '',
    location: '',
    mobile: '',
    items: '',
    type: 'packaged',
    quantity: '',
    expiryDate: '',
    pickupDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_omq4uqm',
        'template_b5biesw',
        {
          to_email: 'adarshswamy86@gmail.com',
          from_name: formData.name,
          donation_type: 'Food',
          location: formData.location,
          mobile: formData.mobile,
          items: formData.items,
          food_type: formData.type,
          quantity: formData.quantity,
          expiry_date: formData.expiryDate,
          pickup_date: formData.pickupDate,
        }
      );

      alert('Thank you for your food donation! We will contact you soon.');
      setFormData({
        name: '',
        location: '',
        mobile: '',
        items: '',
        type: 'packaged',
        quantity: '',
        expiryDate: '',
        pickupDate: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your donation. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goBack = () => {
    window.history.pushState({}, '', '/donate');
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={goBack}
            className="flex items-center text-rose-500 hover:text-rose-600 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Donation Options
          </button>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Food Donation Form</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Food *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="packaged">Packaged Food</option>
                  <option value="fresh">Fresh Food</option>
                  <option value="grains">Grains & Cereals</option>
                  <option value="beverages">Beverages</option>
                </select>
              </div>

              <div>
                <label htmlFor="items" className="block text-sm font-medium text-gray-700 mb-1">
                  Items Description *
                </label>
                <textarea
                  id="items"
                  name="items"
                  required
                  value={formData.items}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Please describe the food items you wish to donate"
                  rows={4}
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity *
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="e.g., 5 kg, 10 packets, etc."
                />
              </div>

              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date (if applicable)
                </label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Pickup Date *
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  required
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Donation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}