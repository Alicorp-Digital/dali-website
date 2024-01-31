import { Content } from "components";

import DoIcon from "assets/fundaments/iconography/do_icon.svg";
import DontICon from "assets/fundaments/iconography/dont_icon.svg";

import DoContact from "assets/fundaments/iconography/do_contact.svg";
import DontContact from "assets/fundaments/iconography/dont_contact.svg";

import DoWifi from "assets/fundaments/iconography/do_wifi.svg";
import DontWifi from "assets/fundaments/iconography/dont_wifi.svg";

import DoDontComponent from "src/components/molecules/dodont";

const PageFundamentalsInfographic = () => {
  const usage = [
    {
      action: "positive",
      description: "Usa los iconos con un contenido para darle contexto.",
      image: DoIcon,
    },
    {
      action: "negative",
      description:
        "Un icono sin texto para darle contexto puede no entenderse.",
      image: DontICon,
    },
  ];

  const contact = [
    {
      action: "positive",
      description: "Guarda consistencia en el significado de un icono",
      image: DoContact,
    },
    {
      action: "negative",
      description:
        "Usa el mismo icono para distintas casuísticas de igual resultado.",
      image: DontContact,
    },
  ];

  const wifi = [
    {
      action: "positive",
      description:
        "Cuida el tamaño y visibilidad del icono para no perder legibilidad.",
      image: DoWifi,
    },
    {
      action: "negative",
      description:
        "El tamaño del icono debe tener consistencia con los permitidos.",
      image: DontWifi,
    },
  ];

  return (
    <Content title="Fundamentos">
      <h2 className="dl-title-sm mb-4 pb-3 mt-5">Iconografía</h2>
      <p className="dl-body-xxs">
        Los Iconos simplifican la comprensión mensajes y reducen la carga
        cognitiva cuando necesitas prestar atención a tareas urgentes
      </p>

      <h3 className="my-4 py-3 dl-title-xs">Uso</h3>
      <p className="dl-body-xxs mb-4 pb-3">
        Se recomienda usar los iconos en conjunto a un texto que le pueda dar
        contexto para ser más accesibles en el significado.
      </p>
      <DoDontComponent usage={usage} />
      <p className="dl-body-xxs my-4 py-3">
        Escoge iconos que representen un sólo contexto y mantén consistencia en
        todo el flujo del producto.
      </p>
      <DoDontComponent usage={contact} />
      <p className="dl-body-xxs my-4 py-3">
        Mantén consistencia entre el uso de Tamaños de iconos y mantén la
        accesibilidad visual.
      </p>
      <DoDontComponent usage={wifi} />
      <h3 className="my-4 py-3 dl-title-xs">Tamaño</h3>
      <p className="mb-3 pb-4">
        Con un sistema de tamaño aseguramos un uso consistente y sobre todo la
        accesibilidad visual de nuestros usuarios.
      </p>
      <ul className="d-flex justify-content-around mb-0">
        <li className="d-flex flex-column align-items-center justify-content-between">
          <i className="dl-icon dli-gift-regular dl-icon-sm"></i>
          <span className="dl-body-nano">16px</span>
          <span className="dl-body-nano">Pequeño</span>
        </li>
        <li className="d-flex flex-column align-items-center justify-content-between">
          <i className="dl-icon dli-gift-regular dl-icon-md"></i>
          <span className="dl-body-nano">24px</span>
          <span className="dl-body-nano">Mediano</span>
        </li>
        <li className="d-flex flex-column align-items-center justify-content-between">
          <i className="dl-icon dli-gift-regular dl-icon-lg"></i>
          <span className="dl-body-nano">32px</span>
          <span className="dl-body-nano">Grande</span>
        </li>
      </ul>
      <h3 className="my-4 py-3 dl-title-xs">Variantes</h3>
      <ul className="d-flex justify-content-around mb-0">
        <li className="d-flex flex-column align-items-center">
          <i className="dl-icon dli-gift-regular dl-icon-lg"></i>
          <span className="dl-body-nano">Regular</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <i className="dl-icon dli-gift-bold dl-icon-lg"></i>
          <span className="dl-body-nano">Bold</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <i className="dl-icon dli-gift-fill dl-icon-lg"></i>
          <span className="dl-body-nano">Fill</span>
        </li>
      </ul>
    </Content>
  );
};

export default PageFundamentalsInfographic;
