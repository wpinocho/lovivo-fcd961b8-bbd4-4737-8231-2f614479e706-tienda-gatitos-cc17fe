import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🐱</div>
            <div>
              <h1 className="text-2xl font-bold text-pink-600">Gatitos Adorables</h1>
              <p className="text-sm text-gray-600">Centro de adopción felina</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
              <Heart className="w-6 h-6 text-pink-500" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-pink-50 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-pink-500" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;