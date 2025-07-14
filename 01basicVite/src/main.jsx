import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chai/>
    <App/>
  </StrictMode>,
)


/*
if you write :import React from 'react' instead of import { StrictMode } from 'react'
then you have to write   <React.StrivtMode> instead of just <StrictMode>

Similarly

if you write :import ReactDOM from 'react=dom/client' instead of import { createRoot } from 'react-dom/client'
then you have to write   (ReactDOM.createRoot) instead of just (createRoot)
 */
