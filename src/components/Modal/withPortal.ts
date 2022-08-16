import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export default function withPortal(component: ReactNode) {
  return ReactDOM.createPortal(component, document.body);
}
