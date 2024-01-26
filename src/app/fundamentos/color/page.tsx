import { Content } from 'components';
import ContentColor from "src/components/organisms/content-color";
import InteractiveColor from "src/components/organisms/interactive";
import Palette from "src/components/organisms/palette";
import SemanticColor from "src/components/organisms/semantic";

const PageFundamentalsColor = () => {
  return (
    <Content title='Fundamentos'>
      <h2 className="dl-title-sm pb-4 mb-3">Color</h2>
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
    </Content>
  );
};

export default PageFundamentalsColor;
