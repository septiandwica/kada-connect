import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Auth from "./auth/pages/AuthPage";
import "./App.css";
import CompanyPage from "./pages/company/CompanyPage";
import HomePage from "./pages/home/HomePage";
import TraineePage from "./pages/trainee/TraineePage";
import { ScrollTop } from "./components/common/ScrollTop";
import NotFoundPage from "./pages/errors/NotFoundPage";
import KadaTermsOfService from "./pages/home/TermOfServicePage";
import BetaBadge from "./components/ui/BetaBadge";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <BetaBadge />
      <Routes>
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/trainees" element={<TraineePage />} />
        <Route path="/terms-of-service" element={<KadaTermsOfService />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
