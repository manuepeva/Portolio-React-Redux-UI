import React from "react";
import "./index.scss";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProyectsPage from "./pages/ProyectsPage/ProyectsPage";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/PortfolioFooter/PortfolioFooter";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import EducationTranslator from "./pages/EducationPage/EducationTranslator";
import LocationTranslator from "./pages/LocationPage/LocationTranslator";

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/projects" element={<ProyectsPage />} />
            <Route path="/education" element={<EducationTranslator />} />
            <Route path="/location" element={<LocationTranslator />} />
            <Route path="/contact" element={<ContactFormPage />} />
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
