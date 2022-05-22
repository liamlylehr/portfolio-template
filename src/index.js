import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

// components
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

// style
import 'bulma/css/bulma.min.css';
import "./App.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainContainer />}> </Route>
            </Routes>
            <Footer />
        </Router>
    </StrictMode>
)
