import './App.css';

import { Header, Footer } from "./components";
import { Allroutes } from './router/Allroutes';

function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
