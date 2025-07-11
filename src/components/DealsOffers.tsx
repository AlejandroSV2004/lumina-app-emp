
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import powerbank from '../img/powerbank.jpg';
import generator from '../img/generator.jpg';
import solar_panel from '../img/solar_panel.jpg';

const DealsOffers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const deals = [
    {
      id: 1,
      title: 'Kit luminoso de emergencia',
      description: 'Powerbank + Panel Solar + Luces LED',
      originalPrice: 40.00,
      salePrice: 20.00,
      discount: 50,
      rating: 4.9,
      reviews: 156,
      timeLeft: 'Termina en 2 días',
      image: powerbank
    },
    {
      id: 2,
      title: 'Generador a diésel',
      description: 'Generador a diésel de 5000W con iniciado automático',
      originalPrice: 400.00,
      salePrice: 360.00,
      discount: 10,
      rating: 4.9,
      reviews: 89,
      timeLeft: 'Termina hoy',
      image: generator
    },
    {
      id: 3,
      title: 'Estación de energia solar',
      description: 'Batería de 1000Wh portatil + 2 paneles de 200W',
      originalPrice: 300.00,
      salePrice: 150.00,
      discount: 50,
      rating: 4.7,
      reviews: 203,
      timeLeft: 'Termina mañana',
      image: solar_panel
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deals.length) % deals.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ofertas de tiempo limitado
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¡No te las pierdas! Aprovecha estos jugosos descuentos antes de que se vayan
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {deals.map((deal) => (
                <div key={deal.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl shadow-lg mx-2">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Deal Image */}
                      <div className={`rounded-lg h-64 flex items-center justify-center relative`}>
                        <img src={deal.image} alt={deal.title} className="w-full h-full object-cover rounded-lg"/>
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {deal.discount}% OFF
                        </div>
                        {/*<div className="text-6xl font-bold text-gray-400 opacity-50">
                          {deal.id}
                        </div>*/}
                      </div>

                      {/* Deal Info */}
                      <div className="flex flex-col justify-center space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {deal.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {deal.description}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(deal.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {deal.rating} ({deal.reviews} reviews)
                          </span>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl font-bold text-green-600">
                              ${deal.salePrice}
                            </span>
                            <span className="text-lg text-gray-500 line-through">
                              ${deal.originalPrice}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-red-600">
                            <Clock className="w-4 h-4" />
                            <span>{deal.timeLeft}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold">
                          Agregar al carrito
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOffers;
