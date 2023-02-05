import { Route, Routes } from 'react-router-loading';

import Deputies from './pages/Deputies/Deputies';
import Deputy from './pages/Deputies/Deputy/Deputy';
import { Home } from './pages';
import { Navbar, UniversalRoute } from './components';
import { v4 } from 'uuid';

const languages = ['uz', 'en', 'ru', 'ўз'];

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes maxLoadingTime={1000}>
        <Route path='/kengash-deputies' element={<Deputies />} loading={true} />
        <Route
          path='/kengash-deputies/:deputy'
          element={<Deputy />}
          loading={true}
        />
        {languages.map((item) => {
          return (
            <Route
              key={v4()}
              path={item === 'ўз' ? '/' : `/${item}`}
              element={
                <UniversalRoute>
                  <Home />
                </UniversalRoute>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
