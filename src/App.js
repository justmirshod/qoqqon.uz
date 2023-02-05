import { Route, Routes } from 'react-router-loading';

import Deputies from './pages/Deputies/Deputies';
import Deputy from './pages/Deputies/Deputy/Deputy';

import GeneralInfo from './pages/GeneralInfo/GeneralInfo';
import InterestingPlaces from './pages/InterestingPlaces/InterestingPlaces';
import Place from './pages/InterestingPlaces/Place/Place';
import { Home } from './pages';
import { Navbar, UniversalRoute } from './components';
import { v4 } from 'uuid';

const languages = ['uz', 'en', 'ru', 'ўз'];

function App() {
  const handleRoutes = (lang, path) => {
    return lang === 'ўз' ? path : `/${lang}${path}`;
  };

  return (
    <div className='App'>
      <Navbar />
      <Routes maxLoadingTime={1000}>
        {languages.map((lang) => {
          return (
            <div key={v4()}>
              <Route
                // path={item === 'ўз' ? '/' : `/${item}`}
                path={handleRoutes(lang, '/')}
                element={
                  <UniversalRoute>
                    <Home />
                  </UniversalRoute>
                }
              />
              <Route
                path={handleRoutes(lang, '/interesting-places/:id')}
                element={
                  <UniversalRoute>
                    <Place />
                  </UniversalRoute>
                }
                loading={true}
              />
              <Route
                path={handleRoutes(lang, '/kengash-deputies')}
                element={
                  <UniversalRoute>
                    <Deputies />
                  </UniversalRoute>
                }
                loading={true}
              />
              <Route
                path={handleRoutes(lang, '/kengash-deputies/:deputy')}
                element={
                  <UniversalRoute>
                    <Deputy />
                  </UniversalRoute>
                }
                loading={true}
              />

              <Route
                path='/general-info'
                element={<GeneralInfo />}
                loading={true}
              />
              <Route
                path='/interesting-places'
                element={<InterestingPlaces />}
                loading={true}
              />
            </div>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
