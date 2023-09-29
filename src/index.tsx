import React from 'react'
import { App } from './App'
import * as ReactDOM from 'react-dom/client'

import './init'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);