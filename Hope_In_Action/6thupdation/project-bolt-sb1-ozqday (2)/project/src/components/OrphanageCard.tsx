import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';

type OrphanageCardProps = {
  name: string;
  location: string;
  children: number;
  established: string;
  image: string;
  onClick: () => void;
};

export function OrphanageCard({
  name,
  location,
  children,
  established,
  image,
  onClick,
}: OrphanageCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} />
            <span>{children} children</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>Est. {established}</span>
          </div>
        </div>
      </div>
    </div>
  );
}