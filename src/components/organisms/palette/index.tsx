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
    {
      name: "Global / Neutral",
      colors: ["#202020", "#6C6C6C", "#DEDEDE", "#F7F7F7", "#FCFCFC"],
    },
    {
      name: "Support / Positive",
      colors: ["#003600", "#006B00", "#008A05", "#79D279", "#EFFAEF"],
    },
    {
      name: "Support / Warning",
      colors: ["#472700", "#A34C00", "#E16C00", "#F7B687", "#FAF4EF"],
    },
    {
      name: "Support / Negative",
      colors: ["#5C001F", "#AD0048", "#DF1978", "#F787BC", "#FAEFF3"],
    },
  ];

  return (
    <ul className="d-flex justify-content-between flex-wrap">
      {data.map((item, index) => (
        <li className="palette-list" key={index}>
          <p className="dl-subtitle-xxs mb-3">{item.name}</p>
          <ul className="d-flex palette-item-container flex-wrap mb-4">
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
