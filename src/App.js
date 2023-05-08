import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ReportMessage from './components/RepordMessagePanel.js/ReportMessage';
import SideMessage from './components/SideMessage/SideMessage';
import { DataContextProvider } from './components/Contex/Contex';
import Login from './components/Login/Login';


function App() {
  const [loginlocal,setLoginlocal] = useState(null)
  const [passwordlocal,setpasswordlocal] = useState(null)


  // const localdata = {
  //   loginlocal: localStorage.getItem('loginData'),
  //   passwordlocal: localStorage.getItem('passwordData'),
  // }

  useEffect(()=>{
    setLoginlocal(localStorage.getItem('loginData'))
    setpasswordlocal(localStorage.getItem('passwordData'))
  },loginlocal)
  // console.log(localdata.loginlocal, localdata.passwordlocal);
  return (
    <DataContextProvider>
      {false ? <Login /> : (<div className="App">
      <Navbar />
      <div className="row d-flex">
      <div class="col s3 sidebarContent">
        <SideMessage />
      </div>
      <div className="col s9 mainBarContent">
        <ReportMessage />
      </div>
    </div>
    </div>)}
    </DataContextProvider>
  );
}

export default App;
