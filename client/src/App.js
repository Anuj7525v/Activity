import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Signup from './page/signup/signup';
import Login from './page/login/login';
import Dashboard from './page/Dashboard/dashboard';
import Board from './components/Board/board';
import Analytics from './components/Analytics/ana';
import Setting from './components/Setting/setting';
//import Backlog from './components/backlogs/backlog';
//import Todo from './components/Todo/todo';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/board" element={<Board/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/setting" element={<Setting/>}/>
      {/* <Route path="/backlog" element={<Backlog/>}/>
      <Route path="/todo" element={<Todo/>}/> */}
     
      

    
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
