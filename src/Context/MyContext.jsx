import React, {useState} from "react";
import PropTypes from "prop-types";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {

    const [MyState, SetMyState] = useState("Atakan");

  const value = {
    MyState,
    SetMyState,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node,
 };