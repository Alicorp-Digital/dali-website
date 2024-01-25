import { Content } from 'components';
import {DlLink} from '@alicorpdigital/dali-react-link'
import { DlIcon } from '@alicorpdigital/dali-react-icon';
import './styles.scss';

const ForDevelopers = () => {
  return (
    <Content title='Primeros pasos' className='dali-first-steps'>
      <h3 className='dl-comp-text-xs-bold'>Para desarrolladores</h3>
      <p className='dl-body-xxs'>
        Dali proporciona a los desarrolladores las herramientas que necesitan para maquetar productos digitales en menos tiempo llegando a incrementar el time to market o MVP, también les ahorra el trabajo repetitivo de crear los mismos componentes una y otra vez.
        <br />
        Al rehusar los componentes de Dali, los desarrolladores obtienen más tiempo para invertirlo en mejoras de servicio al producto, esto tiene un impacto positivo en los sprints ya que los bugs a nivel Front los asume el equipo de Dali.
      </p>
      <p className='dl-body-xxs'>
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

export default ForDevelopers;
