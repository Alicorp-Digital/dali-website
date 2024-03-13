import { FC, ReactNode } from 'react';
import './styles.scss';

type Props = {
  title?: string;
  children: ReactNode
  className?: string;
}

const Content: FC<Props> = (props) => {
  const { title, children, className } = props;

  return (
    <div className='dali-content'>
      <div className='dali-content__title dl-subtitle-xxs'>
        {title}
      </div>
      <div className='dali-content__content'>
        <div className={className}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content;
