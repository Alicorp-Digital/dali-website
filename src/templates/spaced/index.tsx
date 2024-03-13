import { Content } from 'components';
import { FC } from 'react'
import css from './styles.module.scss';

type Props = {}

const items = [
  {
    name: 'Quarck',
    size: '4px',
    visual: '4%'
  },
  {
    name: 'Nano',
    size: '8px',
    visual: '8%'
  },
  {
    name: 'Micro',
    size: '12px',
    visual: '12%'
  },
  {
    name: 'XXXS',
    size: '16px',
    visual: '16%'
  },
  {
    name: 'XXS',
    size: '24px',
    visual: '24%'
  },
  {
    name: 'XS',
    size: '32px',
    visual: '32%'
  },
  {
    name: 'SM',
    size: '40px',
    visual: '40%'
  },
  {
    name: 'MD',
    size: '48px',
    visual: '48%'
  },
  {
    name: 'LG',
    size: '56px',
    visual: '56%'
  },
  {
    name: 'XL',
    size: '72px',
    visual: '72%'
  },
  {
    name: 'XXL',
    size: '96px',
    visual: '80%'
  },
  {
    name: 'XXXL',
    size: '120px',
    visual: '88%'
  },
  {
    name: 'Huge',
    size: '160px',
    visual: '100%'
  }
]

const Spaced: FC<Props> = () => {
  return (
    <Content title='Fundamentos' className={css.Container}>
      <h3 className='dl-comp-text-xs-bold'>Espaciados</h3>
      <p className='dl-body-xxs'>
        El uso consistente e intencional de nuestro sistema de espaciado asegura una experiencia armoniosa y legible para nuestros usuarios. Un sistema de espacios también sienta los cimientos para un diseño responsive y una interfaz escalable en nuestros productos digitales.
      </p>
      <h4 className='dl-title-xs'>Escalas</h4>
      <div className={css.Scales}>
        <div className={css.ScalesHeader}>
          <div className='dl-subtitle-nano'>Nombre</div>
          <div className='dl-subtitle-nano'>Tamaño</div>
          <div className='dl-subtitle-nano'>Visual</div>
        </div>
        <div className={css.ScalesBody}>
          {items.map((item, index) => {
            return (
              <div key={index} className={css.ScaleItem}>
                <div className='dl-body-nano-bold'>{item.name}</div>
                <div className='dl-body-nano'>Line-height: {item.size}</div>
                <div className={css.ScaleVisual} style={{ width: item.visual}} />
              </div>
            )
          })}
        </div>
      </div>
      <h4 className='dl-title-xs'>Uso de espaciados</h4>
      <p className='dl-body-xxs'>
        En distintos casos necesitaremos diferentes unidades en espaciado para lograr los mejores resultados. Nuestra escala se divide en tres clases.
      </p>
      <h4 className='dl-title-xs'>Pequeño del 0 al 12 px</h4>
      <p className='dl-body-xxs'>
        Usa los tokens del 0 al 12 para dar espaciado a piezas pequeñas o aplicar padding en Ui
      </p>
      <p className='dl-body-xxs-bold'>Ejemplo</p>
      <h4 className='dl-title-xs'>Mediano del 16 al 32 px</h4>
      <p className='dl-body-xxs'>
        Usa los tokens del 16 al 32 para dar espaciados de mayor tamaño.
      </p>
      <p className='dl-body-xxs-bold'>Ejemplo</p>
      <h4 className='dl-title-xs'>Grande del 40 al 160 px</h4>
      <p className='dl-body-xxs'>
        Usa los tokens entre el 40 al 160 para dar espaciado a piezas de mayor dimensión en el Ui y tener mayor legibilidad.
      </p>
      <p className='dl-body-xxs-bold'>Ejemplo</p>
      <h4 className='dl-title-xs'>Uso en agrupaciones</h4>
      <p className='dl-body-xxs'>
        Podemos crear patrones de espaciados entre  componentes, por ejemplo entre elementos o componentes de la misma familia. <br/><br/>
        Usando un espaciado consistente brindamos al usuario una similitud visual que garantiza una correcta lectura o tarea.
      </p>
    </Content>
  )
}

export default Spaced