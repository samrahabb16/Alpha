import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/home/Home';
import Upload from './components/upload/Upload';
import History from './components/history/History';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataFetcher } from './reduxAssets/features/AlpacaReducer';
import Loader from './components/loader/Loader';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.AlpacaReducer.allAlpaca);
  console.log('app', data);
  useEffect(() => {
    dispatch(dataFetcher())
  }, [dispatch])


  const [loader, setloader] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setloader(true)
    }, 1500);
  }, []);

  return (
    <div >

      {
        loader ? <div>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/addalpaca' exact element={<Upload />} />
            <Route path='/listalpaca' exact element={<History />} />
          </Routes>
          <Footer />
        </div> : <Loader />
      }


    </div >
  );
}
export default App;
