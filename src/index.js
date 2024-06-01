import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContext from './Context/CartContext';
import BestContext from './Context/BestContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BestContext>
                <CartContext>
                        <App />

                </CartContext>
        </BestContext>

);
