import { Route, Routes } from 'react-router-loading';

import Deputies from './pages/Deputies/Deputies';
import Deputy from './pages/Deputies/Deputy/Deputy';
import GeneralInfo from './pages/GeneralInfo/GeneralInfo';
import InterestingPlaces from './pages/InterestingPlaces/InterestingPlaces';
import Place from './pages/InterestingPlaces/Place/Place';

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
        <Route path='/general-info' element={<GeneralInfo />} loading={true} />
        <Route
          path='/interesting-places'
          element={<InterestingPlaces />}
          loading={true}
        />
        <Route
          path='/interesting-places/:id'
          element={<Place />}
          loading={true}
        />
      </Routes>
    </div>
  );
}

export default App;
