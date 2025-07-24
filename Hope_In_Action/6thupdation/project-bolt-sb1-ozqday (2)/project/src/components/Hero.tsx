import React from 'react';

type HeroProps = {
  onDonate: () => void;
};

export function Hero({ onDonate }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Make a Difference in a Child's Life
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Every year, India wastes food that could feed 63 million hungry children.
            Meanwhile, millions lack access to basic clothing.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Your donation can help bridge this gap. Together, we can reduce waste and
            provide essential resources to those in need.
          </p>
          <button 
            onClick={onDonate}
            className="bg-rose-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-600 transition-colors"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}