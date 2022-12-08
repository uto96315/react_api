import { useRef, useState } from 'react';
import './App.css';
import { ImageGaralley } from './components/ImageGaralley';

const API_KEY = "27318636-4ddaf2b47e13ffd29958c1e8a";

function App() {

  const [fetchData, setFetchData] = useState([]);
  const ref = useRef(); // TODO: これは何をしている？

  const hundleSubmit = async (e) => {
    e.preventDefault(); // enterキーを押した際に自動でリロードがかかる処理を中止させる記述

    // APIURL
    const searchUrl = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;
    // APIを叩く（データフェッチング）
    fetch(searchUrl).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.hits);
      setFetchData(data.hits);
    })
  }

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => hundleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref} />
      </form>

      <ImageGaralley fetchData={fetchData} />
    </div>
  );
}

export default App;
