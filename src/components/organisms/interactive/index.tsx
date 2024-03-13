import "./styles.scss";

export default function InteractiveColor() {
  const data = [
    {
      state: "Default",
      background: "#E62020",
      color: "#FCFCFC",
    },
    {
      state: "Hover",
      background: "#A30000",
      color: "#FCFCFC",
    },
    {
      state: "Pressed",
      background: "#470000",
      color: "#FCFCFC",
    },
    {
      state: "Disabled",
      background: "#F7F7F7",
      color: "#DEDEDE",
    },
  ];

  return (
    <>
      <h3 className="dl-title-xs mb-5 mt-3">Estados interactivos</h3>
      <p className="dl-body-xxs mb-4">
        Los estados comunican el status de un elemento o componente interactivo.
      </p>
      <ul className="d-flex justify-content-between mb-0 flex-wrap pt-3 interactive-list">
        {data.map((item, index) => (
          <li
            className="d-flex align-items-center justify-content-center flex-column mb-4"
            key={index}
          >
            <p
              style={{
                backgroundColor: "#E0DCDC52",
                width: "90px",
                height: "32px",
                color: "#6C6C6C",
              }}
              className="dl-body-text mb-0 rounded d-flex justify-content-center align-items-center"
            >
              {item.state}
            </p>
            <img
              className="my-2"
              src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1706108345/line_e0pkwj.png"
            />
            <div
              className="rounded d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: item.background,
                color: item.color,
                width: "164px",
                height: "40px",
              }}
            >
              Registrar
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
