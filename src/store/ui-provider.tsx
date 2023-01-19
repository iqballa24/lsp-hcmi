import React, { useState } from 'react';
import UiContext, { ContextObj } from '@/store/ui-context';

const UiContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showStructure, setShowStructure] = useState(false);

  const toggleCalender = () => {
    setShowCalendar((prev) => !prev);
  };

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
  };

  const toggleNav = () => {
    setShowNav((prev) => !prev);
    document.body.classList.toggle('disabledScroll');
  };

  const toggleStructure = () => {
    setShowStructure((prev) => !prev);
  };

  const contextValue: ContextObj = {
    isShowCalendar: showCalendar,
    toggleCalendar: toggleCalender,
    isShowRegister: showRegister,
    toggleRegister: toggleRegister,
    isShowNav: showNav,
    toggleNav: toggleNav,
    isShowStructure: showStructure,
    toggleStructure: toggleStructure,
  };

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
