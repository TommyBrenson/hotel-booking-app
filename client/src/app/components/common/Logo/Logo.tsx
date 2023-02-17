import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HotelLogo } from '../../../assets/svg/logo.svg';

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <NavLink to='/' className='logo-link'>
        <HotelLogo />
      </NavLink>
    </div>
  );
};

export default Logo;
