import React from "react";
import { IconContext } from "react-icons";

interface icon {
    color?: string,
    className?: string,
    children?: React.ReactNode
}

export const IconProvider = (props:icon) => (
      <IconContext.Provider value={{   className: ` ${ props.className}` }}>
        {
          props?.children
        }
      </IconContext.Provider>
)