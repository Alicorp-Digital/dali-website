import { Content } from 'components';
import './styles.scss';

const FirstSteps = () => {
  return (
    <Content title='Primeros pasos' className='dali-first-steps'>
      <h3 className='dl-comp-text-xs-bold'>Introducción</h3>
      <p className='dl-body-xxs'>
      Dali está construido principalmente para los diseñadores de producto y/o desarrolladores, sin embargo múltiples usuarios pueden usar los recursos que el sistema de diseño provee como tipografía Alicorp Sans, logos, etc.
Es muy importante poder conocer sobre los principios de diseño en ambos perfiles para mantener una experiencia holística de marca.
      </p>
      <h4 className='dl-subtitle-xxs'>¿Por qué es tan importante?</h4>
      <p className='dl-body-xxs'>
        Dali mejora la productividad, ayuda a reducir radicalmente las incoherencias de nuestras interfaces (que dificultan la experiencia del usuario) y también centraliza su mantenimiento al trabajar con una lógica de bibliotecas (si se actualiza el core, se actualizan todas con un update).
        Pero el mayor beneficio es la facilidad de comunicación entre diseñadores, desarrolladores y product managers.

        <br />
        <br />
        😵‍💫 Resuelve los problemas de incoherencia del producto.<br />
        🚀 Es escalable, da más autonomía y productividad a los equipos.<br />
        🙌 Transmite los valores de la marca.<br />
        🤑 Reduce el time-to-market.
      </p>
    </Content>
  )
}

export default FirstSteps;
