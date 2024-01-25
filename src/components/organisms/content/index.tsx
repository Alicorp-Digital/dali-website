import ColorItem from "src/components/atoms/color";

export default function ContentColor() {
  const data = [
    {
      title: "Darkest",
      description:
        "Usar Darkest en contenido para ofrecer alto contraste, también para usarlo en elementos como valor o volumen.",
    },
    {
      title: "Dark",
      description:
        "Usar Dark en contenido para ofrecer contraste medio alto, también para usarlo en elementos default.",
    },
    {
      title: "Medium",
      description:
        "Usar Medium en estados de componentes, sin embargo por accesibilidad no es recomendable usarlo en contenido.",
    },
  ];

  return (
    <>
      <h3 className="dl-title-xs py-3 mb-0">Aplicación en contenido</h3>
      <p className="mt-4 mb-0 pb-3 dl-body-xxs">
        Para mantener la consistencia, todos los cuerpos de textos, título, sub
        título, y body text usan los siguientes{" "}
        <strong className="dl-body-xxs-bold">Colores Neutrales:</strong>
      </p>
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
