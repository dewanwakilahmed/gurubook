import { Routes, Route } from "react-router-dom";
import React from "react";

// CSS
import "./App.css";

// Pages
import Overview from "./pages/Overview";
import Chapters from "./pages/Chapters";
import QuestionTable from "./pages/QuestionTable";
import PracticeSheets from "./pages/PracticeSheets";
import MockTest from "./pages/MockTest";
import SuperQuestions from "./pages/SuperQuestions";
import Settings from "./pages/Settings";

// Components
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/question-table" element={<QuestionTable />} />
        <Route path="/practice-sheets" element={<PracticeSheets />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/super-questions" element={<SuperQuestions />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

export default App;
