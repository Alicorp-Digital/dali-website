import { Content } from 'components';
import DoDontComponent from "src/components/molecules/dodont";
import ContentColor from "src/components/organisms/content-color";
import InteractiveColor from "src/components/organisms/interactive";
import Palette from "src/components/organisms/palette";
import SemanticColor from "src/components/organisms/semantic";

import DoColor from "assets/fundaments/color/do_color.svg";
import DontColor from "assets/fundaments/color/dont_color.svg";

const PageFundamentalsColor = () => {
  const usage = [
    {
      action: "positive",
      description:
        "Los colores neutral darkest y dark son accesibles para el usuario.",
      image: DoColor,
    },
    {
      action: "negative",
      description:
        "El color medium aplicado en contenido sufre por visibilidad.",
      image: DontColor,
    },
  ];

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
      <h3 className="dl-title-xs my-4 py-3 ">Do & Dont's</h3>
      <DoDontComponent usage={usage} />
    </Content>
  );
};

export default PageFundamentalsColor;
