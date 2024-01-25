import LayoutFundamentals from "src/components/layouts/fundamentals";
import "./styles.scss";

const PageFundamentals = () => {
  const data = [
    {
      icon: "accessibility-alt",
      title: "Accesibilidad",
      description:
        "Entendamos a nuestros usuarios y cuidemos la interactividad.",
    },
    {
      icon: "gear",
      title: "Color",
      description: "Entendamos las semántica de color para ser consistentes.",
    },
    {
      icon: "apple",
      title: "Ilustración",
      description:
        "Las ilustraciones pueden ayudarnos a expresar ideas complejas.",
    },
    {
      icon: "list-bulleted",
      title: "Espaciados",
      description:
        "El sistema de espaciados simplifica la construcción de páginas y UI.",
    },
    {
      icon: "oxygen",
      title: "Tipografía",
      description:
        "Conozcamos la tipografía oficial y su sistema de tamaños para su uso.",
    },
    {
      icon: "crop",
      title: "Iconografía",
      description:
        "Los iconos son elementos visuales para comandar ideas ó indicaciones.",
    },
  ];

  return (
    <LayoutFundamentals>
      <p className="dl-body-xxs mt-5 mb-4 pb-3">
        Las fundamentos son elementos visuales necesarios para crear
        experiencias consistentes al ecosistema Alicorp para el usuario de un
        extremo a otro. Esto incluye orientación sobre iconografía, tipografía,
        diseño y estructura.
      </p>
      <ul className="fundamentals-list">
        {data.map((item, index) => (
          <li className="fundamentals-list--item" key={index}>
            <h3 className="fundamentals-list--item-title align-items-center dl-subtitle-xxs mb-3 d-flex">
              <i
                className={"dl-icon dl-icon-md dli-" + item.icon + "-regular"}
              ></i>
              {item.title}
            </h3>
            <p className="dl-body-xxs mb-0">{item.description}</p>
          </li>
        ))}
      </ul>
    </LayoutFundamentals>
  );
};

export default PageFundamentals;
