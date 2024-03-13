import { Content } from "components";
import css from "./styles.module.scss";
import classNames from "classnames";

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

  const sizes = [
    {
      size: "16px",
      description: "Pequeño",
    },
    {
      size: "24px",
      description: "Mediano",
    },
    {
      size: "32px",
      description: "Grande",
    },
  ];

  const variants = [
    {
      action: "Regular",
    },
    {
      action: "Bold",
    },
    {
      action: "Fill",
    },
  ];

  return (
    <Content title="Fundamentos">
      <h2 className="dl-title-sm mb-4 pb-3">Iconografía</h2>
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
      <ul className={css.SizeList}>
        {sizes.map((item, index) => (
          <li
            className={`d-flex flex-column align-items-center ${css.iconList}`}
            key={index}
          >
            <i
              className={classNames("dli-icon", "dli-gift-regular", {
                "dl-icon-sm": item.size === "16px",
                "dl-icon-md": item.size === "24px",
                "dl-icon-lg": item.size === "32px",
                [css.iconSecondary]: true,
              })}
            ></i>
            <span className="dl-body-nano">{item.size}</span>
            <span className="dl-body-nano">{item.description}</span>
          </li>
        ))}
      </ul>
      <h3 className="my-4 py-3 dl-title-xs">Variantes</h3>
      <ul className={css.VariantList}>
        {variants.map((item, index) => (
          <li
            className={`d-flex flex-column align-items-center ${css.iconList}`}
            key={index}
          >
            <i
              className={classNames("dli-icon", "dl-icon-lg", {
                "dli-gift-regular": item.action === "Regular",
                "dli-gift-bold": item.action === "Bold",
                "dli-gift-fill": item.action === "Fill",
                [css.iconPrimary]: true,
              })}
            ></i>
            <span className="dl-body-nano">{item.action}</span>
          </li>
        ))}
      </ul>
    </Content>
  );
};

export default PageFundamentalsInfographic;
