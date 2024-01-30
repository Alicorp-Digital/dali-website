import "./styles.scss";

const TypographyProperties = (props: any) => {
  const properties = [
    {
      name: "Font-size",
      property: "size",
    },
    {
      name: "Font-weight",
      property: "weight",
    },
    {
      name: "Line-height",
      property: "height",
    },
  ];

  return (
    <>
      <p className="dl-subtitle-xxs mt-3 mb-3 pb-4">{props.typography}</p>
      <ul style={{ maxWidth: "895px" }} className="pb-4">
        <div className="d-flex">
          <span className="typography-name  dl-subtitle-nano mr-3 mb-3">
            Nombre
          </span>
          <div className="dl-subtitle-nano flex-grow-1">Propiedad</div>
        </div>
        {props?.sizes.map((item, index) => (
          <li
            className="d-flex align-items-center justify-content-between mb-3"
            key={index}
          >
            <span className="mr-3 dl-body-nano-bold" style={{ width: "88px" }}>
              {item.name}
            </span>
            <div className="d-flex variants-properties flex-wrap justify-content-between flex-grow-1">
              {properties.map((prop, index) => (
                <span
                  className={`dl-body-nano ${
                    props.typography === "Link"
                      ? "text-decoration-underline"
                      : null
                  }`}
                  key={index}
                >
                  {prop.name}: {item[prop.property.toLowerCase()]}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TypographyProperties;
