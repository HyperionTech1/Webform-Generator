import HelloWorld from './HelloWorld';
import HelloWorldGet from './HelloWorldGet';
import ResponsiveAppBar from './Layout/Header';
import { Account } from './Pages/Account';
import { Home } from './Pages/Home'
import { Samplewebform } from './Pages/SampleWebForm';
import { webform, webOptions } from '../store.js'
import { Paper } from '@mui/material'
import UserCreated from './Layout/UserCreated';

function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />

      {/* <Home /> */}
      <Paper>
        <Samplewebform />
        {/* <UserCreated /> */}
      </Paper>
      
      {/* <HelloWorldGet /> */}

      {/* <Account /> */}
    </div>
  );
}

export default App;
