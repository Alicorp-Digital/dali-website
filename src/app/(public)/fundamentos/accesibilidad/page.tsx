import { Content } from "components";

import DoImage from "assets/fundaments/accesibility/do_accesibility.svg";
import DontImage from "assets/fundaments/accesibility/dont_accesibility.svg";

import DontComunication from "assets/fundaments/accesibility/dont_comunication.svg";
import DoComunication from "assets/fundaments/accesibility/do_comunication.svg";

import DoDontComponent from "src/components/molecules/dodont";

const PageFundamentalsAccesibility = () => {
  const usage = [
    {
      action: "positive",
      description: "Usemos un combinación de color que tenga alto contraste.",
      image: DoImage,
    },
    {
      action: "negative",
      description:
        "No usemos combinaciones de color que tengan un bajo contraste.",
      image: DontImage,
    },
  ];

  const comunication = [
    {
      action: "positive",
      description:
        "Nuestro contenido debe estar alineado a la acción o lo que pasará",
      image: DoComunication,
    },
    {
      action: "negative",
      description: "Si pensamos 2 veces que pasará con la acción, algo va mal.",
      image: DontComunication,
    },
  ];

  return (
    <Content title="Fundamentos">
      <h2 className="dl-title-sm mb-4 pb-3">Accesibilidad</h2>
      <p className="dl-body-xxs">
        Los Iconos simplifican la comprensión mensajes y reducen la carga
        cognitiva cuando necesitas prestar atención a tareas urgentes.
      </p>
      <h3 className="my-4 py-3 dl-title-xs">Uso de Alto contraste</h3>
      <p className="dl-body-xxs mb-4 pb-3">
        El Alto contraste de colores ayuda a las personas que son parcial o
        completamente daltónicas a percibir diferencias entre ciertos colores.
        Esto crea una jerarquía visual sólida y mejora la usabilidad en nuestros
        usuarios. Asegúrate de que la combinación de color de texto y fondo no
        caiga por debajo de la relación de umbral recomendada por la W3 de 4.5:1
        para texto estándar y 3:1 para texto más grande. Las imágenes
        decorativas y los estados deshabilitados no tienen requisitos de
        contraste.
      </p>
      <DoDontComponent usage={usage} />

      <h3 className="my-4 py-3 dl-title-xs">Color</h3>
      <p className="dl-body-xxs mb-4 pb-3">
        Nuestra paleta de colores cumplen con el Contraste estándar AA. esto
        garantiza un contraste alto en los elementos o Ui para nuestros usuarios
        y que las personas con bajo nivel de visión puedan ver a interactuar con
        nuestros productos.
      </p>
      <h3 className="my-4 py-3 dl-title-xs">Comunicación en botones</h3>
      <p className="dl-body-xxs mb-4 pb-3">
        Para mantener la consistencia en la comunicación con nuestros usuarios.
        Los textos en accionable como un botón, link, etc deben tener el
        contexto de la acción ó lo que pasará.
      </p>

      <DoDontComponent usage={comunication} />
    </Content>
  );
};

export default PageFundamentalsAccesibility;
