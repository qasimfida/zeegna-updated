import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import NewHomeSection from "./pages/NewHomeSection";
import ResourcesPage from "./pages/ResourcesPage";
import GuidingHeroSection from "./pages/GuidingSection";
import ExploreContainer from "./components/explore/ExploreContainer";
import GuidingPlatform from "./components/guidingPageCompo/GuidingPlatform";
import GuidingReview from "./components/guidingPageCompo/GuidingReview";
import Getintouchpage from "./pages/Getintouchpage";
import DeliveryForm from "./components/helpsection/DeliveryForm";
import HelpCardsGrid from "./pages/HelpCenterContainer";
import PartnerHelpContainer from "./pages/PartnerHelpContainer";
import BecomePartner from "./pages/BecomePartner";
import FamilyPartnerHelp from "./pages/FamilyHelpContainer";
import HomeSafetyContainer from "./components/homesafety/HomeSafetyContainer";
import HomePageNew from "./pages/NewHomeSection";
import CitiesPage from "./pages/Cities";
import CreateHomeCard from "./components/createHome/CreateHomeCard";
import AllServicesCategories from "./pages/AllServicesCategories";
import ResourcesMS from "./pages/ResourcesMS";
import ArticalMSpage from "./pages/ArticalMSpage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOFUse from "./pages/TermsOFUse";
import FindHelp from "./pages/FindHelp";
import LoginPages from "./pages/LoginPages";
import ResetPassword from "./components/login/ResetPassword";
import CheckYourEmail from "./components/login/CheckEmail";
import NewPassword from "./components/login/NewPassword";
import ScrollToTop from "./components/scroll/ScrollTop";
import HomeSafety from "./pages/HomeSafety";
import HomeAutomation from "./pages/HomesAutomation";
import HomeCare from "./pages/HomeCare";
import ProfessionalService from "./pages/ProfessionalService";
import HomeMaintenance from "./pages/HomeMaintenance";
import Layout from "./layout/Layout";
import QuestionaireLayout from "./layout/QuestionaireLayout";
import Question1 from "./components/questionnaire/Question1";
import Question2 from "./components/questionnaire/Question2";
import Question3 from "./components/questionnaire/Question3";
import Question4 from "./components/questionnaire/Question4";
import Question5 from "./components/questionnaire/Question5";
import Question6 from "./components/questionnaire/Question6";
import Question7 from "./components/questionnaire/Question7";
import Question8 from "./components/questionnaire/Question8";
import Question9 from "./components/questionnaire/Question9";
import Question10 from "./components/questionnaire/Question10";
import Question11 from "./components/questionnaire/Question11";
import Question12 from "./components/questionnaire/Question12";
import Question13 from "./components/questionnaire/Question13";
import Question14 from "./components/questionnaire/Question14";
import Question15 from "./components/questionnaire/Question15";
import Question16 from "./components/questionnaire/Question16";
import Question17 from "./components/questionnaire/Question17";
import Question18 from "./components/questionnaire/Question18";
import Question19 from "./components/questionnaire/Question19";
import Question20 from "./components/questionnaire/ProfileSetup";
import EmailVerification from "./components/questionnaire/EmilVerification";
import HelpCardsContainer from "./pages/HelpContainer";
import ShopProducts1 from "./components/shopProducts/ShopProducts1";
import ShopProducts2 from "./components/shopProducts/ShopProducts2";
import HomeModifications from "./pages/HomeModifications";
import Quiz from "./components/quiz/Quiz/Quiz";
import QuizContainer from "./pages/QuizContainer";
import QuizEightContainer from "./pages/QuizEightContainer";
import QuizFiveContainer from "./pages/QuizFiveContainer";
import QuizFourContainer from "./pages/QuizFourContainer";
import QuizSevenContainer from "./pages/QuizSevenContainer";
import QuizSixContainer from "./pages/QuizSixContainer";
import QuizThreeContainer from "./pages/QuizThreeContainer";
import QuizTwoContainer from "./pages/QuizTwoContainer";
import QuizNineContainer from "./pages/QuizNineContainer";
import QuizTenContainer from "./pages/QuizTenContainer";
import Quiz11Container from "./pages/Quiz11Container";
import Quiz12Container from "./pages/Quiz12Container";
import Quiz13Container from "./pages/Quiz13Container";
import Quiz14Container from "./pages/Quiz14Container";
import Quiz15Container from "./pages/Quiz15Container";
import Quiz16Container from "./pages/Quiz16Container";
import Quiz17Container from "./pages/Quiz17Container";
import Quiz18Container from "./pages/Quiz18Container";
import Quiz19Container from "./pages/Quiz19Container";
import FundingMade1 from "./components/fundingMade/FundingMade1";
import FundingMade2 from "./components/fundingMade/FundingMade2";
import FundingMade3 from "./components/fundingMade/FundingMade3";
import FundingMade4 from "./components/fundingMade/FundingMade4";
import FundingMade5 from "./components/fundingMade/FundingMade5";
import FundingMade6 from "./components/fundingMade/FundingMade6";
import FundMade from "./components/fundingMade/FundingMade";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<NewHomeSection />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/article-ms" element={<ArticalMSpage />} />
          <Route path="/guiding-hero" element={<GuidingHeroSection />} />
          <Route path="/explore" element={<ExploreContainer />} />
          <Route path="/guiding-platform" element={<GuidingPlatform />} />
          <Route path="/guiding-review" element={<GuidingReview />} />
          <Route path="/get-in-touch" element={<Getintouchpage />} />
          <Route path="/delivery-form" element={<DeliveryForm />} />
          <Route path="/help-center" element={<HelpCardsGrid />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/all-services" element={<AllServicesCategories />} />
          <Route
            path="/help-center/family/:category"
            element={<FamilyPartnerHelp />}
          />
          <Route
            path="/help-center/partner/:category"
            element={<PartnerHelpContainer />}
          />
          <Route path="/home-safety" element={<HomeSafetyContainer />} />
          <Route path="/home-new" element={<HomePageNew />} />
          <Route path="/cities/:cityname" element={<CitiesPage />} />
          <Route path="/create-home" element={<CreateHomeCard />} />
          <Route path="/services/:service" element={<AllServicesCategories />} />
          <Route path="/new-resources" element={<ResourcesMS />} />
          <Route path="/resources/:slug" element={<ArticalMSpage />} />
          <Route path="/terms-of-use" element={<TermsOFUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/find-help" element={<FindHelp />} />

          <Route path="/home-modifications" element={<HomeModifications />} />
          <Route path="/homes-safety" element={<HomeSafety />} />
          <Route path="/homes-care" element={<HomeCare />} />
          <Route path="/home-maintenance" element={<HomeMaintenance />} />
          <Route path="/homes-automation" element={<HomeAutomation />} />
          <Route
            path="/professional-service"
            element={<ProfessionalService />}
          />
        </Route>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route element={<QuestionaireLayout />}>
          <Route path="/help-section" element={<HelpCardsContainer />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/question4" element={<Question4 />} />
          <Route path="/question5" element={<Question5 />} />
          <Route path="/question6" element={<Question6 />} />
          <Route path="/question7" element={<Question7 />} />
          <Route path="/question8" element={<Question8 />} />
          <Route path="/question9" element={<Question9 />} />
          <Route path="/question10" element={<Question10 />} />
          <Route path="/question11" element={<Question11 />} />
          <Route path="/question12" element={<Question12 />} />
          <Route path="/question13" element={<Question13 />} />
          <Route path="/question14" element={<Question14 />} />
          <Route path="/question15" element={<Question15 />} />
          <Route path="/question16" element={<Question16 />} />
          <Route path="/question17" element={<Question17 />} />
          <Route path="/question18" element={<Question18 />} />
          <Route path="/question19" element={<Question19 />} />
          {/* shop Products  */}
          <Route path="/shop-products-1" element={<ShopProducts1 />} />
          <Route path="/shop-products-2" element={<ShopProducts2 />} />
          {/* funding Made  */}
          <Route path="/funding-made" element={<FundMade />} />
          <Route path="/funding-made-1" element={<FundingMade1 />} />
          <Route path="/funding-made-2" element={<FundingMade2 />} />
          <Route path="/funding-made-3" element={<FundingMade3 />} />
          <Route path="/funding-made-4" element={<FundingMade4 />} />
          <Route path="/funding-made-5" element={<FundingMade5 />} />
          <Route path="/funding-made-6" element={<FundingMade6 />} />

          <Route path="/Profile-setup" element={<Question20 />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-1" element={<QuizContainer />} />
          <Route path="/quiz-2" element={<QuizTwoContainer />} />
          <Route path="/quiz-3" element={<QuizThreeContainer />} />
          <Route path="/quiz-4" element={<QuizFourContainer />} />
          <Route path="/quiz-5" element={<QuizFiveContainer />} />
          <Route path="/quiz-6" element={<QuizSixContainer />} />
          <Route path="/quiz-7" element={<QuizSevenContainer />} />
          <Route path="/quiz-8" element={<QuizEightContainer />} />
          {/* quiz sec two */}
          <Route path="/quiz-9" element={<QuizNineContainer />} />
          <Route path="/quiz-10" element={<QuizTenContainer />} />
          <Route path="/quiz-11" element={<Quiz11Container />} />
          <Route path="/quiz-12" element={<Quiz12Container />} />
          <Route path="/quiz-13" element={<Quiz13Container />} />
          <Route path="/quiz-14" element={<Quiz14Container />} />
          <Route path="/quiz-15" element={<Quiz15Container />} />
          <Route path="/quiz-16" element={<Quiz16Container />} />
          <Route path="/quiz-17" element={<Quiz17Container />} />
          <Route path="/quiz-18" element={<Quiz18Container />} />
          <Route path="/quiz-19" element={<Quiz19Container />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
