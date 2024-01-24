import "./styles.scss";

export default function Intro() {
  return (
    <div className="wrapper pt-5">
      <h2 className="dl-title-xs mb-3 pb-4">Dali design system</h2>
      <p className="dl-body-xxs mb-3 pb-4">
        Dali, el Design System de Alicorp, es una librería de elementos tanto
        para diseño y desarrollo. Su función principal es optimizar las
        operaciones al facilitar la reutilización de componentes valiosos,
        reduciendo la carga de trabajo para diseñadores y desarrolladores. Este
        sistema actúa como un habilitador estratégico, mejorando la eficiencia
        de la compañía y elevando la experiencia en el ecosistema digital para
        los clientes de Alicorp. Nacido con el propósito de posicionar a Alicorp
        en el más alto nivel digital, Dali sigue estándares globales, criterios
        accesibles, y garantiza escalabilidad y consistencia en el desarrollo.
      </p>
      <div className="intro-container-video">
        <iframe
          className="intro-video"
          src="https://player.vimeo.com/video/595394325?h=0ab31c1238?autoplay=1&loop=1&background=1"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
