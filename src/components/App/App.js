import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import ImageContainer from '../ImageContainer/ImageContainer';


const App = () => {
  const [images, setImages] = useState([])
  //how else to make dynmaic?
  //create backend api to feed dynamically the FE dom?
  return (
    <main className='main'>
      <Header />
      <ImageContainer />
    </main>
  );
}

export default App;
