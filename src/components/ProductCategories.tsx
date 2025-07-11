import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Battery,
  Zap,
  Sun,
  Settings,
  Home,
  Grid3X3,
  Smartphone
} from 'lucide-react';

// Este mismo objeto será útil también en Categorias.tsx
export const categoryData = [
  {
    icon: Smartphone,
    title: 'Powerbanks',
    description: '¡Lleva tu energía donde vayas!',
    count: '1,200+ productos',
    color: 'blue',
    slug: 'powerbanks'
  },
  {
    icon: Sun,
    title: 'Paneles solares portátiles',
    description: 'Energía hasta donde llegue el sol',
    count: '800+ productos',
    color: 'yellow',
    slug: 'paneles-solares'
  },
  {
    icon: Battery,
    title: 'Baterías de Litio',
    description: '¡Cuánta capacidad!',
    count: '2,100+ productos',
    color: 'green',
    slug: 'baterias-litio'
  },
  {
    icon: Zap,
    title: 'Generadores de diésel',
    description: 'Para seguir trabajando',
    count: '600+ productos',
    color: 'red',
    slug: 'generadores-diesel'
  },
  {
    icon: Settings,
    title: 'Inversores y UPS',
    description: 'Convierte tu energía',
    count: '900+ productos',
    color: 'purple',
    slug: 'inversores-ups'
  },
  {
    icon: Home,
    title: 'Almacenamiento de energía en el hogar',
    description: 'Guarda energía para tu hogar',
    count: '400+ productos',
    color: 'indigo',
    slug: 'almacenamiento-hogar'
  },
  {
    icon: Grid3X3,
    title: 'Dispositivos de almacenamiento inteligente',
    description: 'Gestionar la energía nunca había sido tan fácil',
    count: '300+ productos',
    color: 'teal',
    slug: 'almacenamiento-inteligente'
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
  };
  return colorMap[color] || 'from-gray-500 to-gray-600';
};

const ProductCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string) => {
    navigate(`/categorias/${slug}`);
  };

  return (
    <section className="pt-4 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Compra por categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra sin esfuerzo justo eso que necesitas. ¡No te compliques y empieza a disfrutar de soluciones óptimas!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.slug)}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} rounded-xl p-6 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.description}</p>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Kit Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Kits de electricidad</h3>
          <p className="text-lg opacity-90 mb-4">Kits pre-armados para cualquier tipo de apuro. ¡Te tenemos cubierto!</p>
          <button
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => navigate('/#')}
          >
            Revisar kits
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
