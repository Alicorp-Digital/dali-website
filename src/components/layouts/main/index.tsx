'use client';
import { FC, ReactNode } from "react";
import { Header } from "components";
import './styles.scss';
import { DlSidebar } from "@alicorpdigital/dali-react-sidebar";
import {DlIcon} from '@alicorpdigital/dali-react-icon'

type Props = {
  children: ReactNode
}

const LayoutMain: FC<Props> = (props) => {
  const { children } = props;

  const items = [
    {
      label: 'Primeros pasos',
      key: 'first-steps',
      icon: <DlIcon name='education' />,
      children: [
        {label: 'Introducción', key: 'Introducción'},
        {label: 'Para Diseño', key: 'Para Diseño'},
        {label: 'Para Desarrollo', key: 'Para Desarrollo'},
      ],
    },
    {
      label: 'Brand',
      key: 'brand',
      icon: <DlIcon name='agenda' />,
      children: [
        {label: 'Introducción', key: 'Introducción'},
        {label: 'Para Diseño', key: 'Para Diseño'},
        {label: 'Para Desarrollo', key: 'Para Desarrollo'},
      ],
    },
    {
      label: 'Fundamentos',
      key: 'fundaments',
      icon: <DlIcon name='thunder' />,
      children: [
        {label: 'Introducción', key: 'Introducción'},
        {label: 'Para Diseño', key: 'Para Diseño'},
        {label: 'Para Desarrollo', key: 'Para Desarrollo'},
      ],
    },
    {
      label: 'Tokens',
      key: 'tokens',
      icon: <DlIcon name='tree-view' />,
      children: [
        {label: 'Introducción', key: 'Introducción'},
        {label: 'Para Diseño', key: 'Para Diseño'},
        {label: 'Para Desarrollo', key: 'Para Desarrollo'},
      ],
    },
    {
      label: 'Componentes',
      key: 'components',
      icon: <DlIcon name='star' />,
    },
    {
      label: 'Patrones',
      key: 'patters',
      icon: <DlIcon name='package' />,
    },
    {
      label: 'Soporte',
      key: 'support',
      icon: <DlIcon name='education' />,
    },
  ]
  return (
    <div className='dali-layout-main'>
      <Header />
      <div className='dali-layout-main__content'>
        <DlSidebar items={items} />

        <div className='dali-layout-main__children'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutMain;
