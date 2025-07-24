import React from 'react';
import { Heart, School, Home as HomeIcon, AlertTriangle, Users, ShoppingBag } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-rose-500" />}
            title="Care & Support"
            description="We provide loving care and emotional support to children who need it most."
          />
          <FeatureCard
            icon={<School className="w-8 h-8 text-rose-500" />}
            title="Education"
            description="Every child deserves quality education for a brighter future."
          />
          <FeatureCard
            icon={<HomeIcon className="w-8 h-8 text-rose-500" />}
            title="Safe Haven"
            description="We create a safe and nurturing environment for children to grow and thrive."
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Food Waste Crisis in India</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard
              icon={<AlertTriangle className="w-8 h-8 text-amber-500" />}
              title="68.7 Million Tonnes"
              description="Annual food waste in India, worth approximately ₹92,000 crores"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-amber-500" />}
              title="189.2 Million"
              description="People are undernourished in India, accounting for 14% of the population"
            />
            <StatCard
              icon={<Heart className="w-8 h-8 text-amber-500" />}
              title="40%"
              description="Of all food produced in India is wasted before reaching consumers"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Clothing Poverty in India</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard
              icon={<ShoppingBag className="w-8 h-8 text-indigo-500" />}
              title="63%"
              description="Of Indian households struggle to afford adequate clothing"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-indigo-500" />}
              title="73 Million"
              description="Children lack access to proper clothing, affecting their education and well-being"
            />
            <StatCard
              icon={<AlertTriangle className="w-8 h-8 text-indigo-500" />}
              title="26%"
              description="Of rural households cannot afford new clothes more than once per year"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 rounded-lg bg-gray-50">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}