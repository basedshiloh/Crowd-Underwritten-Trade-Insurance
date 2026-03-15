'use client';

import { useAppContext } from '@/context/AppContext';
import { Fragment } from 'react';
import Navbar from './navbar/Navbar';
import TopNavHeading from './TopNavHeading';

const HeaderWrapper = () => {
  const { showTopNavDescription } = useAppContext();

  return (
    <Fragment>
      <TopNavHeading />
      <Navbar showTopNav={showTopNavDescription} />
    </Fragment>
  );
};

HeaderWrapper.displayName = 'HeaderWrapper';
export default HeaderWrapper;
