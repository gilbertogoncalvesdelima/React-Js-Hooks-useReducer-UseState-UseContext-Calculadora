import './App.css';

import { StateProvider } from './contexts/ContextPrimary';

import Header from  './components/Header';
import Calculadora from './components/Calculadora';
import HistoricoContas from './components/HistoricoContas';

const Main = () => {
    return(
      <StateProvider>
        <div className="container">
        <div className="div-header">
        <Header />
        </div>
            
          <main>
          <div class="wrap">
          <div class="box">
          <Calculadora />
          </div>
         
          <div class="box">
          <HistoricoContas />
          </div>
            
          </div>
            
          </main>
        </div>
      </StateProvider>
    );
}
export default Main;