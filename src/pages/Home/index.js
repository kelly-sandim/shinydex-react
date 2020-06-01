import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


function App() {

  
  return (
    <Link to="/pokemons">
      <Button color="primary">Pesquisar</Button>
    </Link>
  );
}

export default App;
