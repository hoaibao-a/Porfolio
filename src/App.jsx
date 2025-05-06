import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero2D, Navbar, Project, Footer, NotFound, LoadingScreen } from "./components";
import ScrollArrow from "./components/ScrollArrow";
import ProjectDetail from "./components/ProjectDetail"; // Import trang chi tiết dự án
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";


const App = () => {
  const { i18n } = useTranslation(); // Sử dụng hook useTranslation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 Cập nhật className theo ngôn ngữ
    if (i18n.language === "vi") {
      document.body.classList.add("vietnamese");
    } else {
      document.body.classList.remove("vietnamese");
    }
  }, [i18n.language]); // Cập nhật mỗi khi đổi ngôn ngữ

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="relative z-0 bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero2D />
                <About />
                <div className="bg-hero bg-cover bg-no-repeat bg-center pb-20">
                  <Experience />
                </div>
                <Project />
                <div className="bg-hero bg-cover bg-no-repeat bg-center pb-20">
                  <Contact />
                </div>
                <ScrollArrow />
                <Footer />
              </>
            } />
            {/* Thêm Route cho trang chi tiết dự án */}
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
