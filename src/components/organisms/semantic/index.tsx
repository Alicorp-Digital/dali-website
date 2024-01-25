import ColorItem from "src/components/atoms/color";
import "./styles.scss";

export default function SemanticColor() {
  const data = [
    {
      title: "Primary color",
      description:
        "Primary es el color interactivo dominante en el diseño, el token primario también representa la identidad de la marca.",
    },
    {
      title: "Highlight color",
      description:
        "Highlight es el color interactivo para destacar sobre el primario  o mostrar una acción de mayor peso.",
    },
    {
      title: "Neutral color",
      description:
        "Neutral mantienen un equilibrio visual y se aplica en fondos, bordes, bordes, interfaces puntuales y textos.",
    },
    {
      title: "Positive color",
      description:
        "Positives son los colores a usar en mensajes, contenido o interacciones positivas al usuario",
    },
    {
      title: "Warning color",
      description:
        "Warning son los colores a usar en mensajes, contenido o interacciones de advertencia al usuario",
    },
    {
      title: "Negative color",
      description:
        "Negative son los colores a usar en mensajes, contenido o interacciones de negativas al usuario",
    },
  ];

  return (
    <>
      <h3 className="dl-title-xs pb-3">Semántica de color</h3>
      <ul className="mt-4 mb-0 pb-4 semantic-container d-flex flex-wrap justify-content-between">
        {data.map((item, index) => (
          <ColorItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </>
  );
}
4;
