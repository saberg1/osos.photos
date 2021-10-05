import { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import ImageContainer from '../ImageContainer/ImageContainer';

//learn context. look up context on tur
const App = () => {
  const [images, setImages] = useState([])
  //how else to make dynmaic?
  //create backend api to feed dynamically the FE dom?
  return (
    <main className='main'>
      <Header />
      <Switch>
      <ImageContainer />
      </Switch>
    </main>
  );
}

export default App;
