import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { OrphanageCard } from '../components/OrphanageCard';
import { DonationOptions } from '../components/DonationOptions';

const orphanages = [
  {
    id: 1,
    name: "Angel's Haven",
    location: "123 Hope Street, Cityville",
    children: 45,
    established: "1995",
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 2,
    name: "Rainbow Children's Home",
    location: "456 Joy Avenue, Townsville",
    children: 32,
    established: "2001",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 3,
    name: "Little Hearts Orphanage",
    location: "789 Blessing Road, Villagetown",
    children: 28,
    established: "2008",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
  }
];

export function Donate() {
  const [selectedOrphanage, setSelectedOrphanage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Make a Donation</h1>
          
          {!selectedOrphanage ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">Select an Orphanage</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {orphanages.map((orphanage) => (
                  <OrphanageCard
                    key={orphanage.id}
                    {...orphanage}
                    onClick={() => setSelectedOrphanage(orphanage.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Donation Options for {orphanages.find(o => o.id === selectedOrphanage)?.name}
                </h2>
                <button
                  onClick={() => setSelectedOrphanage(null)}
                  className="text-rose-500 hover:text-rose-600"
                >
                  ← Back to Orphanages
                </button>
              </div>
              <DonationOptions />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}