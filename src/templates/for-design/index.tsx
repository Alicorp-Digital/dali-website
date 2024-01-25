import { Content } from 'components';
import {DlLink} from '@alicorpdigital/dali-react-link'
import { DlIcon } from '@alicorpdigital/dali-react-icon';
import './styles.scss';

const ForDesign = () => {
  return (
    <Content title='Primeros pasos' className='dali-first-steps'>
      <h3 className='dl-comp-text-xs-bold'>Para Diseño</h3>
      <p className='dl-body-xxs'>
        Dali brinda a los diseñadores recursos para mantener la consistencia en el ecosistema digital de Alicorp y también  experiencias excelentes para nuestros usuarios.
        <br /><br />
        Además podrán crear rápidamente soluciones personalizadas para nuestros clientes, basándose en el ui kit de Dali, evitando el rediseño y la duplicación de esfuerzos, manteniendo el enfoque en conocer lo que necesitan nuestros usuarios.
        <br /><br />
        En el caso que necesites usar las librerías, por favor contáctanos por soporte para poder ayudarte.
      </p>
      <DlLink href="https://www.alicorp.com.pe">
        Ir a soporte
        <DlIcon name="caret-right" />
      </DlLink>
      <h4 className='dl-subtitle-xxs'>Nuestras librerías</h4>
    </Content>
  )
}

export default ForDesign;
