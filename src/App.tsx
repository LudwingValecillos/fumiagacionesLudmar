import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos CSS de AOS
import React, { useEffect } from "react";
import "../style.css";
import {
  Phone,
  Shield,
  Star,
  MessageCircle,
  ChevronRight,
  HandCoins,
  ShieldCheck,
} from "lucide-react";
import logo from "./imgs/sinfondo.png";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: "ease-in-out", // Efecto de aceleración
      once: true, // La animación se ejecuta solo una vez
    });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="bg-gradient-to-r from-teal-600 to-teal-800 text-white"
        data-aos="fade-down"
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className=" w-12 h-12" />
            <span className="text-2xl font-bold">Fumigaciones Ludmar</span>
          </div>
          <div className="hidden md:flex space-x-6" data-aos="fade-left">
            <a href="#servicios" className="hover:text-teal-200">
              Servicios
            </a>
            <a href="#testimonios" className="hover:text-teal-200">
              Testimonios
            </a>
            <a href="#contacto" className="hover:text-teal-200">
              Contacto
            </a>
          </div>
        </nav>

        <div
          className="container mx-auto px-6 py-20 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-6">
            Protección Total Contra Plagas
          </h1>
          <p className="text-xl mb-8">
            Expertos en control de plagas - Garantizamos tu tranquilidad
          </p>
          <button className="bg-white text-teal-800 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300">
            ¡Solicita tu presupuesto gratis!
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cucarachas",
                image:
                  "https://hamasl.com/wp-content/uploads/2022/05/como-eliminar-cucarachas-en-casa.jpg",
              },
              {
                title: "Hormigas",
                image:
                  "https://estaticos-cdn.prensaiberica.es/clip/b9e6f7a0-79db-4ad2-8a80-5e88e717908b_16-9-discover-aspect-ratio_default_0.jpg",
              },
              {
                title: "Garrapatas",
                image:
                  "https://www.leonvet.es/update/tipos_de_garrapatas_en_perros_7319_0_600.jpg",
              },
              {
                title: "Pulgas",
                image:
                  "https://media.todojujuy.com/p/2a97ea19366ca1fff2fd9edcb2475cd5/adjuntos/227/imagenes/003/370/0003370931/790x0/smart/sorprendentes-trucos-eliminar-pulgas-la-casa.jpg",
              },
              {
                title: "Ratas",
                image:
                  "https://tvazteca.brightspotcdn.com/dims4/default/07e384a/2147483647/strip/true/crop/2121x1414+0+0/resize/620x413!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F7c%2F67%2F0762ecba49f8b659892e06d204f3%2Fgettyimages-996155102.jpg",
              },
              {
                title: "Arañas",
                image:
                  "https://remihogar.es/cdn/shop/articles/aranas-en-casa_1200x800.jpg?v=1715278813",
              },
              {
                title: "Grillos",
                image:
                  "https://ar.cienradios.com/resizer/-q7xv4cvifAQIYT74gvpwFbXSoA=/arc-photo-radiomitre/arc2-prod/public/66KVJQSVPFCAVLLKRHVS6GOC34.jpg",
              },
              {
                title: "Escorpiones",
                image:
                  "https://www.lavoz.com.ar/resizer/v2/OZY7WSJWONDWLFH5JW2HENH5MU.png?quality=75&smart=true&auth=72f472f14fcd49e7d47645ccbf1aefdcce2cdd89a8b0b439ee14797972a43676&width=980&height=640",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
                data-aos="flip-left"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tratamiento profesional y efectivo
                  </p>
                  <a
                    href={`https://wa.me/91122541220?text=Hola%20me%20interesa%20el%20servicio%20contra%20*${service.title}*%20me%20darias%20mas%20informacion%3f`}
                    className="text-teal-600 font-semibold flex items-center hover:text-teal-800"
                  >
                    Más información <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" data-aos="zoom-in">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-12 h-12 text-teal-600" />,
                title: "Garantía por escrita por un mes",
                description:
                  "Respaldamos nuestro trabajo con garantía de satisfacción.",
              },
              {
                icon: <HandCoins className="w-12 h-12 text-teal-600" />,
                title: "Aceptamos todos los medios de pago",
                description:
                  "Tarjetas de crédito, débito, efectivo y transferencias.",
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-teal-600" />,
                title: "Personal certificado",
                description: "Personal altamente capacitado y certificado.",
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
      <section id="testimonios" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Testimonios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                text: "Excelente servicio, muy profesionales y efectivos. Recomendado al 100%.",
              },
              {
                name: "Carlos Ruiz",
                text: "Acabaron con mi problema de plagas en una sola visita. ¡Increíble!",
              },
              {
                name: "Ana Martínez",
                text: "Personal muy amable y servicio de primera calidad.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="flip-up"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
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
      <section className="bg-teal-700 text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            ¡Protege tu hogar hoy mismo!
          </h2>
          <p className="text-xl mb-8">
            Obtén un 10% de descuento en tu primera fumigación
          </p>

          <a
            href="https://wa.me/1122541220?text=Hola%20me%20interesa%20solicitar%20un%20presupuesto"
            className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="tel:1122541220"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <Phone className="w-6 h-6 mr-2" />
                <span>11 2254-1220</span>
              </a>
              <a
                href="https://wa.me/1122541220?text=Hola%20me%20interesa%20solicitar%20un%20presupuesto"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/1122541220?text=Hola%20me%20interesa%20solicitar%20un%20presupuesto"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
