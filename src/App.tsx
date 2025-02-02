import React from 'react';
import {
  Bug,
  Phone,
  Shield,
  Star,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bug className="w-8 h-8" />
            <span className="text-2xl font-bold">Fumigaciones Ludmar</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#servicios" className="hover:text-teal-200">Servicios</a>
            <a href="#testimonios" className="hover:text-teal-200">Testimonios</a>
            <a href="#contacto" className="hover:text-teal-200">Contacto</a>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Protección Total Contra Plagas</h1>
          <p className="text-xl mb-8">Expertos en control de plagas - Garantizamos tu tranquilidad</p>
          <button className="bg-white text-teal-800 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300">
            ¡Solicita tu presupuesto gratis!
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Cucarachas Grandes',
                image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Cucarachas Pequeñas',
                image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Control de Ratones',
                image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Eliminación de Ácaros',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">Tratamiento profesional y efectivo</p>
                  <button className="text-teal-600 font-semibold flex items-center hover:text-teal-800">
                    Más información <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-12 h-12 text-teal-600" />,
                title: 'Garantía Total',
                description: 'Respaldamos nuestro trabajo con garantía de satisfacción',
              },
              {
                icon: <Calendar className="w-12 h-12 text-teal-600" />,
                title: 'Servicio 24/7',
                description: 'Disponibles cuando nos necesites',
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-teal-600" />,
                title: 'Certificados',
                description: 'Personal altamente capacitado y certificado',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                text: 'Excelente servicio, muy profesionales y efectivos. Recomendado al 100%.',
              },
              {
                name: 'Carlos Ruiz',
                text: 'Acabaron con mi problema de plagas en una sola visita. ¡Increíble!',
              },
              {
                name: 'Ana Martínez',
                text: 'Personal muy amable y servicio de primera calidad.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">¡Protege tu hogar hoy mismo!</h2>
          <p className="text-xl mb-8">Obtén un 10% de descuento en tu primera fumigación</p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300">
            Solicitar Presupuesto
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="tel:+1234567890" className="flex items-center text-teal-600 hover:text-teal-800">
                <Phone className="w-6 h-6 mr-2" />
                <span>123-456-7890</span>
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center text-teal-600 hover:text-teal-800">
                <MessageCircle className="w-6 h-6 mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;