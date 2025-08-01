
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      location: 'Quito, Ecuador',
      image: 'bg-gradient-to-br from-pink-100 to-pink-200',
      rating: 5,
      text: "Durante los apagones de 2023, PowerGrid salvó nuestro negocio familiar. Recibimos un sistema de respaldo completo en 24 horas. Un servicio increíble en medio de una crisis.",
      product: 'Kit de generación de energía'
    },
    {
      name: 'Carlos Mendez',
      location: 'Guayaquil, Ecuador',
      image: 'bg-gradient-to-br from-blue-100 to-blue-200',
      rating: 5,
      text: "Como propietario de un pequeño restaurante, los cortes de energía significaban perder ingresos diarios. El generador diésel que compramos aquí nos permitió seguir operando cuando otros tuvieron que cerrar.",
      product: 'Generador de Diésel de 5000W'
    },
    {
      name: 'Ana Gutierrez',
      location: 'Cuenca, Ecuador',
      image: 'bg-gradient-to-br from-green-100 to-green-200',
      rating: 5,
      text: "Trabajar desde casa durante los apagones era imposible hasta que encontré esta estación de energía solar. Ahora ya no me preocupa perder la energía durante llamadas importantes.",
      product: 'Estación de generación solar de 1000Wh'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Historias reales de clientes reales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lumina ha ayudado a muchas personas. Mira lo que dicen:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 pt-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Product */}
                <div className="text-sm text-blue-600 font-medium">
                  Producto: {testimonial.product}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                  <div className={`w-12 h-12 ${testimonial.image} rounded-full flex items-center justify-center`}>
                    <span className="font-bold text-gray-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">
              10,000+ clientes confían en nosotros durante apagones
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
