import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Kitten } from '@/types/kitten';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={kitten.image} 
          alt={kitten.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
            <Heart className="w-5 h-5 text-pink-500" />
          </button>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Vacunado ✓
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <span className="text-2xl font-bold text-pink-600">${kitten.price}</span>
        </div>
        
        <p className="text-gray-600 mb-2">{kitten.breed}</p>
        
        <div className="flex gap-4 text-sm text-gray-500 mb-3">
          <span>{kitten.age} meses</span>
          <span className="capitalize">{kitten.gender === 'male' ? 'Macho' : 'Hembra'}</span>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{kitten.description}</p>
        
        <button
          onClick={handleAddToCart}
          disabled={!kitten.available}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          {kitten.available ? 'Adoptar' : 'No disponible'}
        </button>
      </div>
    </div>
  );
};

export default KittenCard;