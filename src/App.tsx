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
  Instagram,
  Facebook,
} from "lucide-react";
import logo from "./imgs/sinfondo.png";
import TextBanner from "./components/TextBanner";
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
        className="w-full text-white bg-gradient-to-tl from-blue-200 to-blue-700 flex flex-col items-center justify-center"
        data-aos="fade-down"
      >
        <nav className="w-full flex flex-col justify-center md:justify-between pt-4 md:flex-row px-4 md:px-8">
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-4 ">
            <p className="text-2xl font-bold border-b-2 ">
              FUMIGACIONES LUDMAR
            </p>
            <a href="tel:1122541220" className="font-bold">
              📞 11-22541220
            </a>
          </div>

          <div className="flex justify-center w-full md:w-auto items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0589/0034/9093/files/cucaracha-orienta-blatta-orientalis__1_1_480x480.png?v=1697905444"
              alt="cucaracha"
              className="w-20 h-20"
            />
            <img
              src={logo}
              alt="logo"
              className="w-36 h-36 rounded-full border-2 my-3 mx-5 bg-white"
            />
            <img
              src="https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/31-Raton-domestico.png"
              alt="raton"
              className="w-20 h-20"
            />
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
          className="w-full px-4 pb-3 md:py-20 text-center flex flex-col gap-5"
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-bold md:text-5xl pt-2 text-grad">
            Protección Total Contra Plagas
          </h1>
          <TextBanner text="Con más de 20 años de experiencia, somos expertos en control de plagas, utilizando productos domisanitarios aprobados por el Ministerio de Salud y personal técnico altamente capacitado." />
          <TextBanner
            text="Nuestros servicios están destinados para: 
        Hogares, bares, restaurantes, kioscos, industrias, oficinas y
        consorcios."
          />

          <TextBanner
            text="¡Seguridad, eficacia y cuidado del medio ambiente en cada
        intervención!"
          />
          <button className="px-8 py-3 font-semibold text-teal-800 transition duration-300 bg-white rounded-full hover:bg-teal-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1) border-black border-4 rounded-3xl">
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
                image: "https://i.imgur.com/xGgtYPQ.jpeg",
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
                    Contactactar por WhatsApp{" "}
                    <ChevronRight className="w-4 h-4 ml-1" />
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
                description: "Certificados de fumigacion con codigo QR.",
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
                description: "Débito, efectivo y transferencias.",
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
            Nos encontramos en zona sur, cubrimos toda la provincia de Buenos
            Aires.
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
            <div className="flex justify-evenly mb-8 space-x-6 flex-wrap items-center gap-2 w-full">
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
              <a
                href="https://www.instagram.com/ludmararg"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <Instagram className="w-6 h-6 mr-2" /> <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/alexis.valecillos.758?rdid=gL49W6nIY1gdfOuW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18gRcGPrFi%2F"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <Facebook className="w-6 h-6 mr-2" /> <span>Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@fumigaciones_ludmar?_t=ZM-8thWAUUWyQf&_r=1"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-6 h-6 mr-2 bg-teal-400"
                >
                  <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z"></path>
                </svg>
                <span>Tik tok</span>
              </a>
              <a
                href="https://servicio.mercadolibre.com.ar/MLA-1474190409-fumigacion-ludmar-_JM"
                className="flex items-center text-teal-600 hover:text-teal-800"
              >
                <img src="https://www.svgrepo.com/show/517752/mercado-libre.svg" alt="" className="w-6 h-6 mr-2 bg-teal-400 rounded-s-full" /> <span>Mercado Libre</span>
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
