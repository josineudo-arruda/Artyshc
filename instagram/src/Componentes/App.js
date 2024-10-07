import ConteudoLateral from './ConteudoLateral/ConteudoLateral.js'
import ConteudoPrincipal from './ConteudoPrincipal/ConteudoPrincipal.js'
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <ConteudoLateral />

      <ConteudoPrincipal />
    </div>
  );
}

export default App;
