import React from 'react';
import Footer from './Components/Footer';
import Googs from './Components/Googs';
import Header from './Components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Components/component.css'
import { ContextProvider } from './context';

function ShopApp(props) {
  return (
    <div>
      <ToastContainer/>
      <Header />
      <ContextProvider>
      <Googs />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default ShopApp;