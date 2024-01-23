import "./styles.scss";

export default function Palette() {
  const data = [
    {
      name: "Brand / Primary",
      colors: ["#470000", "#A30000", "#E62020", "#E96767", "#FAEFEF"],
    },
    {
      name: "Brand /Highlight",
      colors: ["#253500", "#366600", "#3B8700", "#91D65C", "#F7FAEF"],
    },
  ];

  return (
    <>
      <h3 className="dl-title-xs mb-5">Equipo</h3>
      <ul className="d-flex justify-content-between">
        {data.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <ul className="d-flex justify-content-between">
              {item.colors.map((color) => (
                <li
                  className="palette-item"
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
