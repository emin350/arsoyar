import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Anasayfa from './components/Anasayfa';
import Hakkımızda from './components/Hakkımızda';
import İletisim from './components/İletisim';
import Kaynaklar from './components/Kaynaklar';
import Ozelders from './components/Ozelders';
import İlkogretim from "./components/İlkogretim";
import Lise from "./components/Lise";


function App() {
  return (

<Router>   
  <Route path="/" exact component= {Anasayfa}/>
  <Route path="/Hakkımızda" component= {Hakkımızda}/>
  <Route path="/iletisim" component= {İletisim}/>
  <Route path="/Kaynaklar" component= {Kaynaklar}/>
  <Route path="/Ozelders" component= {Ozelders}/>
  <Route path="/Lise" component= {Lise}/>
  <Route path="/İlkogretim" component= {İlkogretim}/>
  
</Router>     

  );
}
//https://www.youtube.com/watch?v=nu2DiHkpSdM&t=611s
export default App;
