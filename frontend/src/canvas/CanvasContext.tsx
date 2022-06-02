import React, { createContext, useState, useEffect, FC } from "react";

import { CanvasObject } from './CanvasObjectTypes'

export const CanvasContext = createContext<CanvasObject[] | null>(null);

interface Props {
    objects: CanvasObject[];
    children?: React.ReactNode
}

export const CanvasContextProvider: FC<Props> = ({ objects, children }) => {
  const [canvasObjects, setCanvasObjects] = useState<CanvasObject[]>(objects);

  // fetch a user from a fake backend API
  useEffect(() => {
    setCanvasObjects(objects);
  }, []);

  return (
    <CanvasContext.Provider value={canvasObjects}>
      {children}
    </CanvasContext.Provider>
  );
};
