import LayoutFundamentals from "src/components/layouts/fundamentals";
import Palette from "src/components/organisms/palette";

const PageFundamentalsColor = () => {
  return (
    <LayoutFundamentals>
      <h2 className="dl-title-sm my-5">Color</h2>
      <p className="mb-5 dl-body-xxs">
        Entendamos las semántica de color para ser consistentes.
      </p>
      <h3 className="dl-title-xs mb-5">Paleta de color</h3>
      <p className="dl-body-xxs">
        Nuestro Sistema de Diseño de Alicorp se ha creado cuidadosamente para
        garantizar la coherencia y la versatilidad en todos los aspectos de
        nuestra marca.{" "}
      </p>
      <br />
      <p>
        Estos colores se utilizan en interfaces de usuario, logotipos, elementos
        gráficos y mucho más.{" "}
      </p>
      <Palette></Palette>
    </LayoutFundamentals>
  );
};

export default PageFundamentalsColor;
