import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specifics from './pages/Specifics';
import { AMRPathogenMap, AMRPathogenInfo, AMRPathogenProfile, AMRPathogenSelect } from './pages/Pathogen';
import { AMRResistance, AMRResistanceMaps, AMRResistanceOptions,AMRResistanceProfiles } from './pages/Resistance';
import { Outreach, OutreachVideos, OutreachReports, OutreachWebinars, OutreachFeedback } from './pages/Outreach';
import {Button} from './components/Button';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='home' exact component={Specifics} />
        <Route path='/AMR-pathogen-info' exact component={AMRPathogenInfo} />
        <Route path='/AMR-pathogen-info/pathogen-selection' exact component={AMRPathogenSelect} />
        <Route path='/AMR-pathogen-info/pathogen-profile' exact component={AMRPathogenProfile} />
        <Route path='/AMR-pathogen-info/pathogen-map' exact component={AMRPathogenMap} />
        <Route path='/AMR-resistance' exact component={AMRResistance} />
        <Route path='/AMR-resistance/options' exact component={AMRResistanceOptions} />
        <Route path='/AMR-resistance/profiles' exact component={AMRResistanceProfiles} />
        <Route path='/AMR-resistance/maps' exact component={AMRResistanceMaps} />
        <Route path='/outreach-and-dissemination' exact component={Outreach} />
        <Route path='/outreach-and-dissemination/AMR-tutorial-videos' exact component={OutreachVideos} />
        <Route path='/outreach-and-dissemination/monthly-reports' exact component={OutreachReports} />
        <Route path='/outreach-and-dissemination/webinars-and-updates' exact component={OutreachWebinars} />
        <Route path='/outreach-and-dissemination/feedback' exact component={OutreachFeedback} />
      </Routes>
    </Router>
  );
}

export default App;
