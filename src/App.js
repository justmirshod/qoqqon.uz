import { Route, Routes } from 'react-router-loading';

import Deputies from './pages/Deputies/Deputies';
import Deputy from './pages/Deputies/Deputy/Deputy';
import News from './pages/News/News.jsx';
import SingleNews from './pages/SingleNews/SingleNews';
import Management from './pages/Management/Management';
import SingleGovernor from './pages/SingleGovernor/SingleGovernor';
import GeneralInfo from './pages/GeneralInfo/GeneralInfo';
import { GovernorPowers, Home, ManagerAsistant, Procedure } from './pages';
import { Navbar, UniversalRoute } from './components';
import { v4 } from 'uuid';

import Map from './pages/Map/Map';
import Footer from './components/Footer/Footer';
import { setShowLangs } from './components/Navbar/navbar_slice';
import { useDispatch } from 'react-redux';
import Governors from './pages/Governors/Governors';
import Informations from './pages/Informations/Informations.jsx';

const languages = ['uz', 'en', 'ru', 'ўз'];

function App() {
  const dispatch = useDispatch();
  const handleRoutes = (lang, path) => {
    return lang === 'ўз' ? path : `/${lang}${path}`;
  };

  return (
    <div
      className='App'
      onClick={(e) => {
        if (!e.target.classList.contains('lang-btn')) {
          dispatch(setShowLangs(false));
        }
      }}
    >
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
                    path={handleRoutes(lang, '/information-service/')}
                    element={
                      <UniversalRoute>
                        <Informations />
                      </UniversalRoute>
                    }
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
                    path={handleRoutes(lang, '/procedure')}
                    element={
                      <UniversalRoute>
                        <Procedure />
                      </UniversalRoute>
                    }
                  />
                  <Route
                    path={handleRoutes(lang, '/powers-of-governor')}
                    element={
                      <UniversalRoute>
                        <GovernorPowers />
                      </UniversalRoute>
                    }
                  />
                  <Route
                    path={handleRoutes(lang, '/manager-asistants')}
                    element={
                      <UniversalRoute>
                        <ManagerAsistant />
                      </UniversalRoute>
                    }
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
                    path={handleRoutes(lang, '/hokim')}
                    element={
                      <UniversalRoute>
                        <Management />
                      </UniversalRoute>
                    }
                  />
                  <Route
                    path={handleRoutes(lang, '/hokim-orinbosarlari')}
                    element={
                      <UniversalRoute>
                        <Governors />
                      </UniversalRoute>
                    }
                  />
                  <Route
                    path={handleRoutes(lang, '/hokim-orinbosarlari/:id/:name')}
                    element={
                      <UniversalRoute>
                        <SingleGovernor />
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
    </div>
  );
}

export default App;
