

import AppRouter from './routers/AppRouter'
import { BrowserRouter } from 'react-router-dom'
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"


function App () {




  return (
    <div className='layout-wrapper'>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  )
}

export default App
