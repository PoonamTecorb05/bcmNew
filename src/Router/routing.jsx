import React from "react";
import { Routes, Route, } from "react-router-dom";
import App from "../App";
import Login from "../pages/Authentication/login";
import CEODashboard from "../pages/BcmCEO/dashboard";
import CeoAppetite from "../pages/BcmCEO/DefineMode/Appetite";
import CeoPlaybook from "../pages/BcmCEO/DefineMode/Playbook";
import CeoPolicy from "../pages/BcmCEO/DefineMode/Policy";
import CeoProcedures from "../pages/BcmCEO/DefineMode/Procedures";
import ChampionDashboard from "../pages/BcmChampion/dashboard";
import ImproveReview from "../pages/BcmChampion/improveReiview";
import Appetite from "../pages/BcmDefine/Appetite";
import Playbook from "../pages/BcmDefine/Playbook";
import Policy from "../pages/BcmDefine/Policy";
import Procedures from "../pages/BcmDefine/Procedures";
import Initiative from "../pages/BcmEmbed/Initiatives";
import RecoveryStrategy from "../pages/BcmEmbed/RecoveryStrategy";
import RiskTreatment from "../pages/BcmEmbed/RiskTreatment";
import Training from "../pages/BcmEmbed/Training";
import Audit from "../pages/BcmImproved/Audit";
import Enhance from "../pages/BcmImproved/Enhance";
import Review from "../pages/BcmImproved/Review";
import Testing from "../pages/BcmImproved/Testing";
import TestingLandingPage from "../pages/BcmImproved/Testing/landingpage";
import RecoveryTrack from "../pages/BcmImproved/Testing/recoveryTrack";
import SuccessTrack from "../pages/BcmImproved/Testing/success";
import TestingTrack from "../pages/BcmImproved/Testing/track";
import BusinessContinuity from "../pages/BcmManager/DesignMode/BusinessContinuityPlan";
import CompanyDashboard from "../pages/BcmManager/DesignMode/CompanyDashboard";
import ControlPanel from "../pages/BcmManager/DesignMode/ControlPanel";
import DepartmentSummary from "../pages/BcmManager/DesignMode/DepartmentSummary";
import DepartmentView from "../pages/BcmManager/DesignMode/DepartmentView";
import DesignValueChain from "../pages/BcmManager/DesignMode/DesignValueChain";
import StepOne from "../pages/BcmManager/DesignMode/enabler/AddProcess/stepOne";
import StepTwo from "../pages/BcmManager/DesignMode/enabler/AddProcess/stepTwo";
import EnablerList from "../pages/BcmManager/DesignMode/enabler/enablerList";
import ManagerEnablerList from "../pages/BcmManager/DesignMode/enabler/managerEnabler";
import StartEnablerProcess from "../pages/BcmManager/DesignMode/enabler/startProcess";
import SuccessProcess from "../pages/BcmManager/DesignMode/enabler/successProccess";
import AddProcessOne from "../pages/BcmManager/DesignMode/impactAnalysis/AddProcess/addProcessStep1";
import AddProcessTwo from "../pages/BcmManager/DesignMode/impactAnalysis/AddProcess/addProcessStep2";
import AddProcessThree from "../pages/BcmManager/DesignMode/impactAnalysis/AddProcess/addProcessStep3";
import ManagerAnalysisList from "../pages/BcmManager/DesignMode/impactAnalysis/analysisDepartmentView";
import AnalysisList from "../pages/BcmManager/DesignMode/impactAnalysis/analysisList";
import StartProcess from "../pages/BcmManager/DesignMode/impactAnalysis/startProcess";
import SuccessFullProcess from "../pages/BcmManager/DesignMode/impactAnalysis/successFullProcess";
import RiskAssesment from "../pages/BcmManager/DesignMode/RiskAssesment";
import RiskStrategy from "../pages/BcmManager/DesignMode/RiskStratagy";
import Coorinate from "../pages/BcpActivated/coordinate";
import Refer from "../pages/BcpActivated/refer";
import BCPActive from "../pages/BcpActivated/track/bpActive";
import BCPActiveDetail from "../pages/BcpActivated/track/bpActiveDetail";
import BCPSucess from "../pages/BcpActivated/track/bpSucess";
import HelpCenter from "../pages/helpCenter";

const Routing = () => {
  return (
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/process" element={<HelpCenter />} />
        <Route exact path="/crisisMode" element={<BCPActive />} />
        <Route exact path="/crisisDetail" element={<BCPActiveDetail />} />
        <Route exact path="/crisisSucess" element={<BCPSucess />} />
        <Route exact path="/coordinate" element={<Coorinate />} />
        <Route exact path="/refer" element={<Refer />} />
        {/* --------------Control Panel----------------- */}
        <Route exact path="/crisisReady" element={<ControlPanel />} />
        <Route exact path="/designMode" element={<CompanyDashboard />} />
        <Route exact path="/designValueChain" element={<DesignValueChain />} />
        <Route exact path="/designRiskAssesment" element={<RiskAssesment />} />
        <Route exact path="/designRiskStrategy" element={<RiskStrategy />} />
        <Route exact path="/designBusinessContinuity" element={<BusinessContinuity />} />
        {/* -------------Imapct Analysis----------- */}
        <Route exact path="/startImapactAnalysis" element={<StartProcess />} />
        <Route exact path="/stepOneImapactAnalysis" element={<AddProcessOne />} />
        <Route exact path="/stepTwoImapactAnalysis" element={<AddProcessTwo />} />
        <Route exact path="/stepThreeImapactAnalysis" element={<AddProcessThree />} />
        <Route exact path="/sucessFullImapactAnalysis" element={<SuccessFullProcess />} />
        <Route exact path="/imapactAnalysisList" element={<AnalysisList />} />
        <Route exact path="/ManagerAnalysisList" element={<ManagerAnalysisList />} />
        {/* -----------enablers----------- */}
        <Route exact path="/startEnabler" element={<StartEnablerProcess />} />
        <Route exact path="/stepOneEnabler" element={<StepOne />} />
        <Route exact path="/stepTwoEnabler" element={<StepTwo />} />
        <Route exact path="/successEnabler" element={<SuccessProcess />} />
        <Route exact path="/enablerList" element={<EnablerList />} />        
        <Route exact path="/managerEnablerList" element={<ManagerEnablerList />} />
        {/* ----------------------Department Summary----------- */}
        <Route exact path="/departmentSummary" element={<DepartmentSummary />} />
        <Route exact path="/departmentView" element={<DepartmentView />} />
        {/* --------------------Dashboard--------------- */}
        <Route exact path="/champianDashboard" element={<ChampionDashboard/>} />
        <Route exact path="/ceoDashboard" element={<CEODashboard/>} />
        {/* -------------------------Login--------------- */}
        <Route exact path="/login" element={<Login />} />

        {/* ------------------Define--------------------- */}
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/playbook" element={<Playbook />} />
        <Route exact path="/procedure" element={<Procedures />} />
        <Route exact path="/appetite" element={<Appetite />} />
         {/* ------------------Ceo Define--------------------- */}
         <Route exact path="/ceoPolicy" element={<CeoPolicy />} />
        <Route exact path="/ceoPlaybook" element={<CeoPlaybook />} />
        <Route exact path="/ceoProcedure" element={<CeoProcedures />} />
        <Route exact path="/ceoAppetite" element={<CeoAppetite />} />
        {/* ------------------------Embed------------------------------ */}
        <Route exact path="/riskTreatment" element={<RiskTreatment />} />
        <Route exact path="/recoveryStrategy" element={<RecoveryStrategy />} />
        <Route exact path="/initiative" element={<Initiative />} />
        <Route exact path="/training" element={<Training />} />
         {/* ------------------------Improved------------------------------ */}
         <Route exact path="/Enhance" element={<Enhance />} />
        <Route exact path="/Review" element={<Review />} />
        <Route exact path="/Testing" element={<Testing />} />
        <Route exact path="/TestingTrack" element={<TestingTrack />} />
        <Route exact path="/TestingTrackSuccess" element={<SuccessTrack />} />
        <Route exact path="/RecoveryTrack" element={<RecoveryTrack />} />
        <Route exact path="/TestingLandingPage" element={<TestingLandingPage />} />
        <Route exact path="/Audit" element={<Audit />} />
        <Route exact path="/championReview" element={<ImproveReview />} />
      </Routes>
  );
}
export default Routing