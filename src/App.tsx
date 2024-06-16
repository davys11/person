import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";
import {About} from "./layout/about/About";
import {Stack} from "./layout/stack/Stack";
import {Project} from "./layout/project/Project";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Stack />
            <Project />
            <Footer />
        </>
    );
}

export default App;