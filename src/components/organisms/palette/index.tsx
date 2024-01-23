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
    <ul className="d-flex justify-content-between">
      {data.map((item, index) => (
        <li className="palette-list" key={index}>
          <p>{item.name}</p>
          <ul className="d-flex palette-item-container flex-wrap">
            {item.colors.map((color) => (
              <li
                className="palette-item rounded"
                style={{ backgroundColor: color }}
              ></li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
