import React, { FC, PropsWithChildren } from 'react';
import { ModalProps } from './interfaces';
import withPortal from './withPortal';

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isPortal }) => {
  const modal = (
    <div>
      <div>{children}</div>
    </div>
  );
  return isPortal ? withPortal(modal) : modal;
};

export default Modal;
