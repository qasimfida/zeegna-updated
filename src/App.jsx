import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import ResetPassword from "./components/login/ResetPassword";
import CheckYourEmail from "./components/login/CheckEmail";
import NewPassword from "./components/login/NewPassword";
import GuidingHeroSection from "./pages/GuidingSection";
import GuidingPlatform from "./components/guidingPageCompo/GuidingPlatform";
import GuidingReview from "./components/guidingPageCompo/GuidingReview";
import HelpCardsContainer from "./pages/HelpContainer";
import DeliveryForm from "./components/helpsection/DeliveryForm";
import HelpCardsGrid from "./pages/HelpCenterContainer";
import Layout from "./layout/Layout";
import FamilyPartnerHelp from "./pages/FamilyHelpContainer";
import ResourcesPage from "./pages/ResourcesPage";
import PartnerHelpContainer from "./pages/PartnerHelpContainer";
import ArticlePage from "./pages/ArticlePage";
import HelpCard from "./components/helpsection/Help";
import ArticleContainer from "./components/article/ArticleTextContainer";
import ScrollToTop from "./components/scroll/ScrollTop";
import Getintouchpage from "./pages/Getintouchpage";
import ExploreContainer from "./components/explore/ExploreContainer";
import BecomePartner from "./pages/BecomePartner";
import HomeCareSlider from "./components/homeCareSlider/HomeCareSlider";
import StayConnectedSection from "./components/stayConnected/StayConnected";
import HomeSafetyContainer from "./components/homesafety/HomeSafetyContainer";
import HomePageNew from "./pages/NewHomeSection";
import CitiesPage from "./pages/Cities";
import CreateHomeCard from "./components/createHome/CreateHomeCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePageNew />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/guiding-hero" element={<GuidingHeroSection />} />
          <Route path="/explore" element={<ExploreContainer />} />
          <Route path="/guiding-platform" element={<GuidingPlatform />} />
          <Route path="/guiding-review" element={<GuidingReview />} />
          <Route path="/get-in-touch" element={<Getintouchpage />} />
          <Route path="/help-section" element={<HelpCardsContainer />} />
          <Route path="/delivery-form" element={<DeliveryForm />} />
          <Route path="/help-center" element={<HelpCardsGrid />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/family-help-center" element={<FamilyPartnerHelp />} />
          <Route path="/home-safety" element={<HomeSafetyContainer />} />
          <Route path="/home-new" element={<HomePage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/create-home" element={<CreateHomeCard />} />
          <Route
            path="/partner-help-center"
            element={<PartnerHelpContainer />}
          />
        </Route>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/help-sections" element={<HelpCard />} />
        <Route path="/home-care-slider" element={<HomeCareSlider />} />
      </Routes>
    </Router>
  );
}

export default App;
