import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { HashRouter } from 'react-router-dom';

import './index.css';
import 'flowbite';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <HashRouter>
    <Root />
  </HashRouter>,
);
