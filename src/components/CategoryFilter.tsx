import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Category } from '../lib/database.types';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (!error && data) {
      setCategories(data);
    }
  };

  return (
    <div id="categories" className="bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Catégories</span>
          </h2>
          <p className="text-gray-400 text-lg">Explorez notre sélection premium par catégorie</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <button
            onClick={() => onCategoryChange(null)}
            className={`p-6 rounded-xl border-2 transition-all ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 border-amber-500 text-black'
                : 'bg-gray-900/50 border-amber-500/20 text-gray-300 hover:border-amber-500/50 hover:bg-gray-800/50'
            }`}
          >
            <div className="text-center">
              <p className="font-bold text-lg">Tous</p>
              <p className="text-sm opacity-75 mt-1">Voir tout</p>
            </div>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group p-6 rounded-xl border-2 transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 border-amber-500 text-black'
                  : 'bg-gray-900/50 border-amber-500/20 text-gray-300 hover:border-amber-500/50 hover:bg-gray-800/50'
              }`}
            >
              <div className="text-center">
                <p className="font-bold text-lg">{category.name}</p>
                <p className="text-sm opacity-75 mt-1 line-clamp-2">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
