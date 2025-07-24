import React, { useState } from 'react';
import { Shirt, DollarSign, UtensilsCrossed, X } from 'lucide-react';

type DonationOption = {
  type: 'money' | 'clothes' | 'food';
  title: string;
  description: string;
  icon: React.ReactNode;
};

const donationOptions: DonationOption[] = [
  {
    type: 'money',
    title: 'Monetary Donation',
    description: 'Support our cause with financial contributions that help us provide better care and facilities.',
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    type: 'clothes',
    title: 'Donate Clothes',
    description: 'Give gently used or new clothing to help keep our children warm and comfortable.',
    icon: <Shirt className="w-8 h-8" />,
  },
  {
    type: 'food',
    title: 'Food Donations',
    description: 'Provide nutritious meals and groceries to ensure our children stay healthy and well-fed.',
    icon: <UtensilsCrossed className="w-8 h-8" />,
  },
];

export function DonationOptions() {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleDonate = (type: string) => {
    if (type === 'clothes') {
      window.history.pushState({}, '', '/clothing-donation');
      const event = new PopStateEvent('popstate');
      window.dispatchEvent(event);
    } else if (type === 'food') {
      window.history.pushState({}, '', '/food-donation');
      const event = new PopStateEvent('popstate');
      window.dispatchEvent(event);
    } else if (type === 'money') {
      setShowQRCode(true);
    } else {
      console.log(`Processing ${type} donation`);
    }
  };

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-6">
        {donationOptions.map((option) => (
          <div key={option.type} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 mb-4">{option.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <button
              onClick={() => handleDonate(option.type)}
              className="w-full bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
            >
              Donate {option.title}
            </button>
          </div>
        ))}
      </div>

      {showQRCode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
            <button 
              onClick={() => setShowQRCode(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-center mb-6">Scan to Donate</h3>
            <div className="flex justify-center mb-6">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=adarshswamy86@okicici&pn=HopeInAction&cu=INR" 
                alt="Donation QR Code" 
                className="w-48 h-48"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-2">Scan this QR code with any UPI app to make a donation.</p>
              <p className="text-sm text-gray-500">UPI ID: adarshswamy86@okicici</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}