import { Content } from 'components';
import {DlLink} from '@alicorpdigital/dali-react-link'
import { DlIcon } from '@alicorpdigital/dali-react-icon';
import './styles.scss';

import designTokens from 'assets/libraries/design-tokens.svg';
import daliIcons from 'assets/libraries/dali-icons.svg';
import daliFont from 'assets/libraries/dali-font.svg';
import reactComponents from 'assets/libraries/react-components.svg';
import cssLibrary from 'assets/libraries/css-library.svg';
import angularTokens from 'assets/libraries/angular-components.svg';
import androidComponents from 'assets/libraries/android-components.svg';

const items = [
  {
    image: designTokens.src,
    title: 'Dali design tokens',
  },
  {
    image: daliIcons.src,
    title: 'Dali icons library',
  },
  {
    image: daliFont.src,
    title: 'Dali font library',
  },
  {
    image: reactComponents.src,
    title: 'Dali componentes react',
  },
  {
    image: cssLibrary.src,
    title: 'Dali CSS library',
  },
  {
    image: angularTokens.src,
    title: 'Dali componentes Angular',
  },
  {
    image: androidComponents.src,
    title: 'Dali componentes Android Nativo',
  },
]

const ForDevelopers = () => {
  return (
    <Content title='Primeros pasos' className='dali-for-developers'>
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
      <div className='dali-for-design__libraries'>
        {items.map((item) => {
          return (
            <div key={item.title} className='dali-for-design__library'>
              <div className='dali-for-design__library-content'>
                <img src={item.image} alt={item.title} />
              </div>
              <p className='dl-subtitle-xxs'>{item.title}</p>
            </div>
          )
        })}
      </div>
    </Content>
  )
}

export default ForDevelopers;
