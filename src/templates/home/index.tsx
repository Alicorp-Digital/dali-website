import Team from '@/components/team';
import './styles.scss';

const Home = () => {
  return (
    <>
    <div className='mb-5' >
      <h1 className="dl-title-xs mb-5" >Dali design system</h1>
      <p className="dl-body-xxs mb-5" >
        Dali, el Design System de Alicorp, es una librería de elementos tanto para diseño y desarrollo. 
        Su función principal es optimizar las operaciones al facilitar la reutilización de componentes valiosos, 
        reduciendo la carga de trabajo para diseñadores y desarrolladores. 
        Este sistema actúa como un habilitador estratégico, mejorando la eficiencia de la compañía y 
        elevando la experiencia en el ecosistema digital para los clientes de Alicorp. Nacido con el propósito 
        de posicionar a Alicorp en el más alto nivel digital, Dali sigue estándares globales, criterios accesibles, 
        y garantiza escalabilidad y consistencia en el desarrollo.
      </p>
      <img style={{'maxWidth':'100%'}} src='https://previews.dropbox.com/p/thumb/ACIyLGxyJ8p5dQ7Yn983aKF1ZX3w_pa_Jxld0rdqlY3YldCSqTXkGxkitCmr577aPD7CqKscUPreGf7mFxyD6xU9x-I8s0lKPEqXNkPcGVrJjVAiji6T1vX-TmtQDmoWTaXG9Rr1PVRJuSSmOeTdqpJ_1Tw6yUAmsp67CqUpBIbNaOKRPBZ-UQrDVIhc9_3ueRFCpQWsPOQcvRGK6uyBzvco6k4H2PnOBICHTzFj5Nh83Fr7l2pGm-DbiBXuVLhNZcsD9M8rIgssaA6jMla1hBXGrryUwNDUoNEU3mxejxY3OZ_O4lTOERqphnILXPqth41GRxsCi5DTh9evLbB6U2UP/p.png' />
    </div>
    <Team />
    </>
  )
}

export default Home;
