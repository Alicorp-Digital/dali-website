import { FC } from "react";
import { DlInteractiveIcon } from "@alicorpdigital/dali-react-interactiveicon";
import Image from "next/image";

import dali from 'assets/header/dali.svg';

import './styles.scss';

type Props = {}

const Header: FC<Props> = () => {
  return (
    <div className='dali-header'>
      <div className='dali-header__content'>
        <div className='dali-header__left-content'>
          <DlInteractiveIcon iconName='hamburger' />
          <Image width={110} height={24} src={dali.src} alt='logo-dali' />
        </div>
        <div>
          <DlInteractiveIcon iconName='magnifying-glass' />
        </div>
      </div>
    </div>
  )
}

export default Header;
