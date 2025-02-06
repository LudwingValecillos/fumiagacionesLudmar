import React, { useEffect } from "react";
import AOS from "aos";

interface TextBannerProps {
  text: string;
}
function TextBanner({ text }: TextBannerProps) {
    useEffect(() => {
        AOS.init({
          duration: 800, // Duración de la animación
          easing: "ease-in-out", // Efecto de aceleración
          once: true, // La animación se ejecuta solo una vez
        });
      }, []);
  return (
    <div className="p-2 border-black border-4 rounded-3xl  bg-blue-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" data-aos = "fade-right">

      {text}{" "}
    </div>
  );
}

export default TextBanner;
