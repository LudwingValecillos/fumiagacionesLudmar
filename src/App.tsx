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
  QrCode,
} from "lucide-react";
import logo from "./imgs/sinfondo.png";
import plaga from "./imgs/Diseño sin título.jpg"
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
        className="text-white bg-gradient-to-r from-blue-400 to-blue-500 flex flex-col items-center justify-center"
        data-aos="fade-down"
      >
        <nav className="container flex flex-col items-center justify-center md:justify-between pt-4 w-96 md:flex-row">
          <div className="flex flex-col items-center space-x-2 md:flex-row">
            <p className="text-2xl font-bold border-b-2">FUMIGACIONES LUDMAR</p>
            <p className=" font-bold">📞 11-22541220</p>

          </div>
          <div className="flex justify-center my-4 w-full items-center">
            <img src="https://cdn.shopify.com/s/files/1/0589/0034/9093/files/cucaracha-orienta-blatta-orientalis__1_1_480x480.png?v=1697905444" alt="" className="opacity-40 w-20 h-20"/>
          <img src={logo} alt="logo" className="w-40 h-40 rounded-full border-2 my-3 mx-5" />
          <img src="https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/31-Raton-domestico.png" alt=""  className="opacity-40 w-20 h-20"/>

          </div>
          <div className="hidden space-x-6 md:flex" data-aos="fade-left">
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
          className="container px-4 pb-3 md:py-20 mx-auto text-center bg-blue-600 "
          data-aos="fade-up"
        >
          <h1 className="mb-6 text-2xl font-bold md:text-5xl pt-2">
            Protección Total Contra Plagas
          </h1>
          <p className="mb-8 text-">
            Expertos en soluciones eficaces en control de plagas, con mas de 20 años en el mercado, utilizacion de productos domisanitarios, habilitado por el ministerio de salud, contamos con personal tecnico altamente capacitado. <br /><strong> Nuestros servicios estan destinados para: <br />Hogares, bares,
            restaurantes, kioscos, industrias, oficinas y consorcios.</strong>
            <br />
            <br />
            <strong>
              {" "}
              Seguridad, eficacia y cuidado del medio ambiente en cada
              intervención
            </strong>
            .
          </p>
          <button className="px-8 py-3 font-semibold text-teal-800 transition duration-300 bg-white rounded-full hover:bg-teal-100">
            ¡Solicita tu presupuesto gratis!
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Cucarachas",
                image:
                  "https://hamasl.com/wp-content/uploads/2022/05/como-eliminar-cucarachas-en-casa.jpg",
                description:
                  "Aplicamos gel en gabinetes, bajo mesada y equipos eléctricos, spray líquido en zócalos y polvo detrás del motor de la heladera. Le cubre: Cocina, living, baño, 3 habitaciones y galería.",
              },
              {
                title: "Ratas",
                image:
                  "https://tvazteca.brightspotcdn.com/dims4/default/07e384a/2147483647/strip/true/crop/2121x1414+0+0/resize/620x413!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F7c%2F67%2F0762ecba49f8b659892e06d204f3%2Fgettyimages-996155102.jpg",
              },
              {
                title: "Hormigas",
                image:
                  "https://estaticos-cdn.prensaiberica.es/clip/b9e6f7a0-79db-4ad2-8a80-5e88e717908b_16-9-discover-aspect-ratio_default_0.jpg",
              },
              {
                title: "Pulgas y Garrapatas",
                image:
                  "https://www.leonvet.es/update/tipos_de_garrapatas_en_perros_7319_0_600.jpg",
              },
              {
                title: "Arañas, grillos y escorpiones",
                image:
                  "https://i.imgur.com/xGgtYPQ.jpeg",
              },
             
            ].map((service, index) => (
              <div
                key={index}
                className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
                data-aos="flip-left"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-48 "
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-center">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {service.description
                      ? service.description
                      : "Tratamiento profesional y efectivo"}
                  </p>
                  <a
                    href={`https://wa.me/91122541220?text=Hola%20me%20interesa%20el%20servicio%20contra%20*${service.title}*%20me%20darias%20mas%20informacion%3f`}
                    className="flex items-center font-semibold text-teal-600 hover:text-teal-800"
                  >
                    Contactactar por WhatsApp <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" data-aos="zoom-in">
        <div className="container px-6 mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: <QrCode className="w-12 h-12 text-teal-600" />,
                title: "Certificados",
                description:
                  "Certificados de fumigacion con codigo QR.",
              },
              {
                icon: <Shield className="w-12 h-12 text-teal-600" />,
                title: "Garantía escrita",
                description:
                  "Respaldamos nuestro trabajo con garantía de satisfacción.",
              },
              {
                icon: <HandCoins className="w-12 h-12 text-teal-600" />,
                title: "Aceptamos todos los medios de pago",
                description:
                  "Débito, efectivo y transferencias.",
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-teal-600" />,
                title: "Personal certificado",
                description: "Personal altamente capacitado y certificado.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-gray-800">
            Testimonios
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
                className="p-6 bg-white rounded-lg shadow-lg"
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
                <p className="mb-4 text-gray-600">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-blue-700" data-aos="fade-up">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">
            ¡Protege tu hogar hoy mismo!
          </h2>
          <p className="mb-8 text-xl">
            Nos encontramos en zona sur, cubrimos toda la provincia de Buenos Aires.
          </p>
          <p className="mb-8 text-xl">
            Contáctanos para obtener un presupuesto personalizado.
          </p>

          <a
            href="https://wa.me/91122541220?text=Hola%20me%20interesa%20solicitar%20un%20presupuesto"
            className="px-8 py-3 font-semibold text-teal-700 transition duration-300 bg-white rounded-full hover:bg-teal-100"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20" data-aos="fade-up">
        <div className="container px-6 mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Contáctanos</h2>
            <div className="flex justify-center mb-8 space-x-6">
              <a
                href="tel:1122541220"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <Phone className="w-6 h-6 mr-2" />
                <span>11 2254-1220</span>
              </a>
              <a
                href="https://wa.me/91122541220?text=Hola%20me%20interesa%20solicitar%20un%20presupuesto"
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
        href="https://wa.me/91122541220?text=Hola%20me%20interesa%20solicitar%20un%20presupuesto"
        className="fixed flex p-4 text-white transition duration-300 bg-green-500 rounded-full shadow-lg bottom-8 right-8 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        Contactar aqui
        <MessageCircle className="w-6 h-6 pl-2" />
      </a>
    </div>
  );
}

export default App;
