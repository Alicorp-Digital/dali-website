import LayoutFundamentals from "src/components/layouts/fundamentals";
import TypographyProperties from "src/components/atoms/typography";
import "./styles.scss";
import DoDontComponent from "src/components/molecules/dodont";

const PageFundamentalsTypography = () => {
  const data = [
    {
      size: "0.75",
      text: "Sans 12",
    },
    {
      size: "0.85",
      text: "Sans 14",
    },
    {
      size: "1px",
      text: "Sans 16",
    },
    {
      size: "1.5",
      text: "Sans 24",
    },
    {
      size: "2",
      text: "Sans 32",
    },
    {
      size: "2.5",
      text: "Sans 40",
    },
    {
      size: "3",
      text: "Sans 48",
    },
    {
      size: "4",
      text: "Sans 64",
    },
    {
      size: "5",
      text: "Sans 80",
    },
  ];

  const usage = [
    {
      action: "positive",
      description:
        "Asegurando una buena legibilidad sólo usamos 12px en legales.",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706198696/fcsfaofp3zxjy5a53lf9.svg",
    },
    {
      action: "negative",
      description:
        "Al usar 12px en componentes perdemos legibilidad en nuestros usuarios",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706198696/a11r3om1rj7zfsrgqjqn.svg",
    },
  ];

  const typography = [
    {
      title: "Títulos",
      sizes: [
        {
          name: "XXL",
          size: "80px",
          weight: "Bold",
          height: "80px",
        },
        {
          name: "XL",
          size: "64px",
          weight: "Bold",
          height: "80px",
        },
        {
          name: "LG",
          size: "48px",
          weight: "Bold",
          height: "64px",
        },
        {
          name: "MD",
          size: "40px",
          weight: "Bold",
          height: "48px",
        },
        {
          name: "SM",
          size: "32px",
          weight: "Bold",
          height: "40px",
        },
        {
          name: "XS",
          size: "24px",
          weight: "Bold",
          height: "32px",
        },
      ],
    },
    {
      title: "Subtítulos",
      sizes: [
        {
          name: "XS",
          size: "24px",
          weight: "semibold",
          height: "40px",
        },
        {
          name: "XXS",
          size: "16px",
          weight: "semibold",
          height: "32px",
        },
        {
          name: "Nano",
          size: "14px",
          weight: "semibold",
          height: "24px",
        },
        {
          name: "Quarck",
          size: "12px",
          weight: "semibold",
          height: "16px",
        },
      ],
    },
    {
      title: "Body",
      sizes: [
        {
          name: "XXS",
          size: "16px",
          weight: "Regular",
          height: "32px",
        },
        {
          name: "XXS-bold",
          size: "16px",
          weight: "Bold",
          height: "32px",
        },
        {
          name: "Nano",
          size: "14px",
          weight: "Regular",
          height: "24px",
        },
        {
          name: "Nano-bold",
          size: "14px",
          weight: "Bold",
          height: "24px",
        },
        {
          name: "Quarck",
          size: "12px",
          weight: "Regular",
          height: "16px",
        },
        {
          name: "Quarck-bold",
          size: "12px",
          weight: "Bold",
          height: "16px",
        },
      ],
    },
  ];

  const link = [
    {
      title: "Link",
      sizes: [
        {
          name: "XXS",
          size: "16px",
          weight: "Regular",
          height: "32px",
        },
        {
          name: "Nano",
          size: "14px",
          weight: "Regular",
          height: "24px",
        },
        {
          name: "Quarck",
          size: "12px",
          weight: "Regular",
          height: "16px",
        },
      ],
    },
  ];

  return (
    <LayoutFundamentals>
      <h2 className="dl-title-sm mt-5 pb-4 mb-3">Tipografía</h2>
      <p className="pb-4 mb-3 dl-body-xxs">
        Alicorp Sans en una tipografía de bajo contraste, con unas proporciones
        ligeramente condensadas, queriendo resaltar valores de marca con algunas
        formas o características de los glifos, sin perder ciertos aspectos
        técnicos que requiere una fuente para plataformas digitales.
      </p>
      <div
        className="rounded "
        style={{ backgroundColor: "#DF1978", height: "200px" }}
      ></div>
      <a
        href="https://fastupload.io/fpOJuDDRl5mGoQ3/file"
        className="dl-comp-text-xxs-bold d-flex typography-download mt-5 mb-4 align-items-center"
      >
        Descargar fuente
        <i className="dl-icon dli-caret-right-bold dl-icon-sm ml-2"></i>
      </a>
      <h3 className="pt-3 mb-3 dl-title-xs">Para producto digitales</h3>
      <p className="pt-4 mb-0">
        Utilizamos la Alicorp Sans para todas las experiencias dentro de
        productos digitales Alicorp. Esto garantiza que la interfaz de usuario
        esté optimizada para ser altamente legible.
      </p>
      <h3 className="py-3 my-4 dl-title-xs">Uso</h3>
      <p className="mb-0">
        Mantener una coherencia y apegarse a las jerarquías lógicas garantiza
        que los elementos en nuestra interfaz sean claros y fácil de leer para
        nuestros usuarios.
        <br />
        <br />
        Se crearon tamaños y estilos de texto para equilibrar el contenido en la
        interfaz de usuario.
        <br />
        <br />
        El uso de cada propiedad o tamaño depende de cada producto.
      </p>
      <h3 className="pt-3 mb-3 dl-title-xs py-3 my-4">Escalas</h3>
      <ul className="typography-scales">
        {data.map((item, index) => (
          <li className="d-flex mb-3  typography-scales-item" key={index}>
            <span style={{ width: "40px" }} className="dl-body-quarck">
              {item.size}
            </span>
            <p style={{ fontSize: item.size + "em" }} className="mb-0">
              <span className="typography-alicorp">Alicorp </span>
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      <DoDontComponent usage={usage} />

      <h3 className="dl-title-xs my-4 py-3">Estilos</h3>
      {typography.map((item, index) => (
        <TypographyProperties
          key={index}
          typography={item.title}
          sizes={item.sizes}
        />
      ))}
      <h3 className="pb-4 mb-3 dl-title-xs">Aplicación de Links</h3>
      <p className="dl-body-xxs pb3 mb-4">
        Para mantener la consistencia debemos de aplicar links únicamente en
        cuerpos de texto con propiedad regular.
      </p>
      {link.map((item, index) => (
        <TypographyProperties
          key={index}
          typography={item.title}
          sizes={item.sizes}
        />
      ))}
    </LayoutFundamentals>
  );
};

export default PageFundamentalsTypography;
