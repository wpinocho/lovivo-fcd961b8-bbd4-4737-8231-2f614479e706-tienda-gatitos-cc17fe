import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedBreed: string;
  selectedGender: string;
  maxPrice: number;
  onBreedChange: (breed: string) => void;
  onGenderChange: (gender: string) => void;
  onPriceChange: (price: number) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedBreed,
  selectedGender,
  maxPrice,
  onBreedChange,
  onGenderChange,
  onPriceChange
}) => {
  const breeds = ['Todos', 'Persa', 'Maine Coon', 'Siamés', 'Británico de Pelo Corto', 'Ragdoll', 'Bengalí'];
  const genders = ['Todos', 'male', 'female'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-pink-500" />
        <h3 className="font-semibold text-gray-800">Filtros</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raza
          </label>
          <select
            value={selectedBreed}
            onChange={(e) => onBreedChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Género
          </label>
          <select
            value={selectedGender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="Todos">Todos</option>
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio máximo: ${maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="2000"
            step="100"
            value={maxPrice}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;