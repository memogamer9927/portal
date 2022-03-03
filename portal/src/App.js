import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageBg from './componentes/ImageBg';
import MenuContent from './componentes/MenuContent';


function App() {
  return (
    <div className="App">
      <MenuContent/>
      
      <ImageBg/>
    </div>
  );
}

export default App;
