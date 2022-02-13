import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Navbar from "./components/homepage/Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";
import storage from "redux-persist/lib/storage";
import persistor from "./Store"
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import Register from "./components/register/Register";
import AssistedServices from "./myServices/AssistedServices";
import BasicTestReg from "./components/Form/TestingDetailForm";


function App() {
  

//  const userDataFromStorage = storage.getItem("user_data")
//  ? JSON.parse(storage.getItem("user_data"))
//  : null;

//  const userDataFromStorage = localStorage.getItem("user_data")
//  ? JSON.parse(localStorage.getItem("user_data"))
//  : null;
//  console.log(storage)
// const userData = storage.getItem("user_data")
// console.log(persistor)
// const Data =  
// console.log(Data)

return (
    
    <div className="App">
 
 <Navbar_2/> 
  <AllRoutes/>
    </div>
  );
}

export default App;
