// -----------------------------------  WARNING  ---------------------------------------------- 
// -----------------------------------  WARNING  ---------------------------------------------- 
// -----------------------------------  WARNING  ---------------------------------------------- 

// We are using src/index.tsx instead of wallet.tsx

import React from 'react'
import { createRoot } from 'react-dom/client'
import './wallet.css'

const App: React.FC<{}> = () => {
    return (
        <div>
            <img src="logo.png" />
        </div>
    )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)