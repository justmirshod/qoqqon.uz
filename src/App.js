import { Route, Routes } from 'react-router-loading';

import Deputies from './pages/Deputies/Deputies';
import Deputy from './pages/Deputies/Deputy/Deputy';
import { Home } from './pages';
import News from './pages/News/News';
import SingleNews from './pages/SingleNews/SingleNews';

function App() {
  return (
    <div className='App'>
      <Routes maxLoadingTime={1000}>
        <Route path='/kengash-deputies' element={<Deputies />} loading={true} />
        <Route
          path='/kengash-deputies/:deputy'
          element={<Deputy />}
          loading={true}
        />
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<SingleNews />} />
      </Routes>
    </div>
  );
}

export default App;
