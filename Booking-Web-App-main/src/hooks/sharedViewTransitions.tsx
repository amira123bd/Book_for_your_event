import { useState } from "react";

type sharedViewReturnType = [
  number,
  () => void,
  () => void,
  () => void,
  string
];

export const useSharedViewNumber = (
  layoutID: string,
  numberOfViews = 1,
  initialValue = 0
): {
  sharedViewNumber: number;
  previousView: () => void;
  nextView: () => void;
  resetView: () => void;
  layoutID: string;


  
  navigateTo: (arg: number) => void;
} => {
  const [sharedViewNumber, setSharedView] = useState<number>(initialValue);
  const nextView = () => setSharedView(sharedViewNumber + (1 % numberOfViews));
  const previousView = () =>
    setSharedView(
      sharedViewNumber - 1 < 0 ? numberOfViews : sharedViewNumber - 1
    );
  const navigateTo = (view: number) => { setSharedView(view); };
  const resetView = () => setSharedView(initialValue);
  return { sharedViewNumber, previousView, nextView, resetView, layoutID ,navigateTo};
};
