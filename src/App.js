import React, {useState} from "react";
import Header from './components/Header';
import Gallery from './components/Gallery';

const App = () => {
  const [photos, setPhotos] = useState([])
  return (
    <>
     <Header setPhotos={setPhotos} />
      <Gallery photos={photos}/>
    </>
  );
}

export default App;
