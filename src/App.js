import { Route, Routes } from 'react-router-loading';

import Deputies from './pages/Deputies/Deputies';
import Deputy from './pages/Deputies/Deputy/Deputy';
import News from './pages/News/News';
import SingleNews from './pages/SingleNews/SingleNews';
import Management from './pages/Management/Management';

import GeneralInfo from './pages/GeneralInfo/GeneralInfo';
import InterestingPlaces from './pages/InterestingPlaces/InterestingPlaces';
import Place from './pages/InterestingPlaces/Place/Place';
import { Home } from './pages';
import { Navbar, UniversalRoute } from './components';
import { v4 } from 'uuid';

import Map from './pages/Map/Map';
import Footer from './components/Footer/Footer';

const languages = ['uz', 'en', 'ru', 'ўз'];

function App() {
  const handleRoutes = (lang, path) => {
    return lang === 'ўз' ? path : `/${lang}${path}`;
  };

  return (
    <>
      <Navbar />
      <div className='App min-h-[100vh]'>
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
                  path={handleRoutes(lang, '/general-information')}
                  element={
                    <UniversalRoute>
                      <GeneralInfo />
                    </UniversalRoute>
                  }
                  loading={true}
                />
                <Route
                  path={handleRoutes(lang, '/interesting-places')}
                  element={
                    <UniversalRoute>
                      <InterestingPlaces />
                    </UniversalRoute>
                  }
                  loading={true}
                />
                <Route
                  path={handleRoutes(lang, '/news')}
                  element={
                    <UniversalRoute>
                      <News />
                    </UniversalRoute>
                  }
                />
                <Route
                  path={handleRoutes(lang, '/news/:id')}
                  element={
                    <UniversalRoute>
                      <SingleNews />
                    </UniversalRoute>
                  }
                />
                <Route
                  path={handleRoutes(lang, '/map')}
                  element={
                    <UniversalRoute>
                      <Map />
                    </UniversalRoute>
                  }
                />
                <Route
                  path={handleRoutes(lang, '/management')}
                  element={
                    <UniversalRoute>
                      <Management />
                    </UniversalRoute>
                  }
                />
              </div>
            );
          })}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
