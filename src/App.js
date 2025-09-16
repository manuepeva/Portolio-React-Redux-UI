import React from "react";
import "./index.scss";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProyectsPage from "./pages/ProyectsPage/ProyectsPage";
import EducationCard from "./pages/EducationPage/EducationPage";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage";
import Ubication from "./pages/LocationPage/LocationPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/PortfolioFooter/PortfolioFooter";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/projects" element={<ProyectsPage />} />
            <Route path="/education" element={<EducationCard />} />
            <Route path="/location" element={<Ubication />} />
            <Route path="/contact" element={<ContactFormPage />} />
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
