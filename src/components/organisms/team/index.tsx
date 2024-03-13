import "./styles.scss";

export default function Team() {
  const data = [
    {
      name: "Renato Aguirre",
      role: "Design System Lead",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706273690/rqusnjuxbzj4iy7ntgwi.svg",
    },
    {
      name: "Ruben Sepulveda",
      role: "Design System Designer",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706273984/xyaok6vgcmjhyqlxmno8.svg",
    },
    {
      name: "Paulo Tejada",
      role: "DS Front Developer",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706273984/fye5x6x0l4sgztnkeyzc.svg",
    },
    {
      name: "José Oscategui",
      role: "DS Front Developer",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706273984/bwzgg7hrvwhsmt5v3x6r.svg",
    },
    {
      name: "Abraham Zapata",
      role: "DS Mobile Developer",
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706273984/aok9sghnhx1hjsrnyav4.svg",
    },
    {
      image:
        "https://res.cloudinary.com/dlp5ey53k/image/upload/v1706273984/apdkyi2cluib7ff5vjci.svg",
      name: "Yuliana Alvarez",
      role: "DS Quality Assurance",
    },
  ];

  return (
    <div className="wrapper">
      <h3 className="dl-title-xs mb-3 pb-4">Equipo</h3>
      <ul
        style={{ margin: "auto" }}
        className="d-flex team-list justify-content-center flex-wrap"
      >
        {data.map((item, index) => (
          <li className="team-member" key={index}>
            <img
              height={80}
              width={80}
              className="rounded-circle mb-1"
              src={item.image}
            />
            <p className="dl-body-nano mb-0">{item.role}</p>
            <span className="dl-body-nano-bold">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
