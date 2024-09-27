import * as React from 'react';
import { createRoot } from 'react-dom/client';
import MyComponent from './client/calander.jsx';


const root = createRoot(document.body);
root.render(<MyComponent/>);