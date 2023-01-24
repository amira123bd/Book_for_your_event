import { useState } from "react";

export const useDisclosure = (initialState = false) => {
  const [isOpen, setState] = useState<boolean>(initialState);

  const onClose = () => setState(false);
  const onOpen = () => setState(true);
  const toggle = () => setState(!isOpen);

  return [isOpen,onOpen,onClose,toggle];
};
