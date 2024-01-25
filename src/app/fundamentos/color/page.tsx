import LayoutFundamentals from "src/components/layouts/fundamentals";
import ContentColor from "src/components/organisms/content";
import InteractiveColor from "src/components/organisms/interactive";
import Palette from "src/components/organisms/palette";
import SemanticColor from "src/components/organisms/semantic";

const PageFundamentalsColor = () => {
  return (
    <LayoutFundamentals>
      <h2 className="dl-title-sm mt-5 pb-4 mb-3">Color</h2>
      <p className="pb-4 mb-3 dl-body-xxs">
        Entendamos las semántica de color para ser consistentes.
      </p>
      <h3 className="dl-title-xs pb-4 mb-3">Paleta de color</h3>
      <p className="dl-body-xxs mb-0">
        Nuestro Sistema de Diseño de Alicorp se ha creado cuidadosamente para
        garantizar la coherencia y la versatilidad en todos los aspectos de
        nuestra marca.{" "}
      </p>
      <br />
      <p className="pb-4 mb-3 dl-body-xxs">
        Estos colores se utilizan en interfaces de usuario, logotipos, elementos
        gráficos y mucho más.{" "}
      </p>
      <Palette />
      <SemanticColor />
      <InteractiveColor />
      <ContentColor />
    </LayoutFundamentals>
  );
};

export default PageFundamentalsColor;
