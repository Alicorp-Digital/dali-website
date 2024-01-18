import { FC, ReactNode } from "react";
import { Header } from "components";
import './styles.scss';

type Props = {
  children: ReactNode
}

const LayoutMain: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className='dali-layout-main'>
      <Header />
      <div className='dali-layout-main__content'>
        {children}
      </div>
    </div>
  )
}

export default LayoutMain;
