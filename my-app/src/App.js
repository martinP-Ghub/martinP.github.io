// import logo from './logo.svg';
import './App.css';
// import EventPractice from './EventPractice';
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import BoardList from "./components/Main/BoardList";
import React from "react";

function App() {
    return(
    <>
        <Header />
        <BoardList className={'sd'}/>
        <Footer />
    </>
    );

}

export default App;
