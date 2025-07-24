import React from 'react';
import { Home } from './pages/Home';
import { Donate } from './pages/Donate';
import { ClothingDonation } from './pages/ClothingDonation';
import { FoodDonation } from './pages/FoodDonation';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/clothing-donation') {
        setCurrentPage('clothing-donation');
      } else if (path === '/food-donation') {
        setCurrentPage('food-donation');
      } else if (path === '/donate') {
        setCurrentPage('donate');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {currentPage === 'home' ? (
        <Home onDonate={() => handleNavigate('donate')} />
      ) : currentPage === 'donate' ? (
        <Donate />
      ) : currentPage === 'clothing-donation' ? (
        <ClothingDonation />
      ) : (
        <FoodDonation />
      )}
    </div>
  );
}