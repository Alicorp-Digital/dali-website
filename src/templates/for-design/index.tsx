import { Content } from 'components';
import {DlLink} from '@alicorpdigital/dali-react-link'
import { DlIcon } from '@alicorpdigital/dali-react-icon';
import './styles.scss';

import globalTokens from 'assets/libraries/global-tokens.svg';
import daliIcons from 'assets/libraries/dali-icons.svg';
import alicorpComponents from 'assets/libraries/alicorp-components.svg';
import alicorpTokens from 'assets/libraries/alicorp-tokens.svg';
import diadiaComponents from 'assets/libraries/diadia-components.svg';
import diadiaTokens from 'assets/libraries/diadia-tokens.svg';
import insumaComponents from 'assets/libraries/insuma-components.svg';
import insumaTokens from 'assets/libraries/insuma-tokens.svg';

const items = [
  {
    image: globalTokens.src,
    title: 'Dali Global tokens',
  },
  {
    image: daliIcons.src,
    title: 'Dali icons',
  },
  {
    image: alicorpComponents.src,
    title: 'Dali Alicorp components',
  },
  {
    image: alicorpTokens.src,
    title: 'Dali Alicorp tokens',
  },
  {
    image: diadiaComponents.src,
    title: 'Dali Díadía components',
  },
  {
    image: diadiaTokens.src,
    title: 'Dali Díadía tokens',
  },
  {
    image: insumaComponents.src,
    title: 'Dali Insuma components',
  },
  {
    image: insumaTokens.src,
    title: 'Dali Insuma tokens',
  },
]

const ForDesign = () => {
  return (
    <Content title='Primeros pasos' className='dali-for-design'>
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

export default ForDesign;
