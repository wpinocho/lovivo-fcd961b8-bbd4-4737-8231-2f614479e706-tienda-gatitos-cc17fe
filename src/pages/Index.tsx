import React, { useState, useMemo } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import KittenCard from '@/components/KittenCard';
import Cart from '@/components/Cart';
import Filters from '@/components/Filters';
import { kittens } from '@/data/kittens';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('Todos');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [maxPrice, setMaxPrice] = useState(2000);

  console.log('Rendering Index page with', kittens.length, 'kittens');

  const filteredKittens = useMemo(() => {
    return kittens.filter(kitten => {
      const breedMatch = selectedBreed === 'Todos' || kitten.breed === selectedBreed;
      const genderMatch = selectedGender === 'Todos' || kitten.gender === selectedGender;
      const priceMatch = kitten.price <= maxPrice;
      
      return breedMatch && genderMatch && priceMatch && kitten.available;
    });
  }, [selectedBreed, selectedGender, maxPrice]);

  console.log('Filtered kittens:', filteredKittens.length);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Encuentra tu compañero perfecto 🐾
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre gatitos adorables esperando un hogar lleno de amor. 
              Cada adopción incluye vacunas, desparasitación y mucho cariño.
            </p>
          </div>

          {/* Filters */}
          <Filters
            selectedBreed={selectedBreed}
            selectedGender={selectedGender}
            maxPrice={maxPrice}
            onBreedChange={setSelectedBreed}
            onGenderChange={setSelectedGender}
            onPriceChange={setMaxPrice}
          />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Mostrando {filteredKittens.length} gatito{filteredKittens.length !== 1 ? 's' : ''} disponible{filteredKittens.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Kittens Grid */}
          {filteredKittens.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😿</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No hay gatitos que coincidan con tus filtros
              </h3>
              <p className="text-gray-600">
                Intenta ajustar los filtros para ver más opciones
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKittens.map((kitten) => (
                <KittenCard key={kitten.id} kitten={kitten} />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white mt-16 py-8 border-t">
          <div className="container mx-auto px-4 text-center">
            <div className="text-3xl mb-4">🐱</div>
            <h3 className="text-xl font-bold text-pink-600 mb-2">Gatitos Adorables</h3>
            <p className="text-gray-600 mb-4">
              Conectando gatitos con familias amorosas desde 2024
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <span>📞 (555) 123-4567</span>
              <span>📧 adopciones@gatitosadorables.com</span>
              <span>📍 Ciudad de México</span>
            </div>
          </div>
        </footer>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;