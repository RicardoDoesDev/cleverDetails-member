import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import NewsPage from './pages/NewsPage';
import AccessPage from './pages/AccessPage';
import PartnershipPage from './pages/PartnershipPage';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-primary">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Header onToggleSidebar={toggleSidebar} />
        <main className="max-w-7xl mx-auto px-4 py-8 pt-40">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boat-tours" element={<CategoryPage categoryId="boat-tours" title="Boat Tours" />} />
          <Route path="/restaurants" element={<CategoryPage categoryId="restaurants" title="Fine Dining" />} />
          <Route path="/activities" element={<CategoryPage categoryId="activities" title="Activities" />} />
          <Route path="/winery-tours" element={<CategoryPage categoryId="winery-tours" title="Winery Tours" />} />
          <Route path="/wellness" element={<CategoryPage categoryId="wellness" title="Wellness" />} />
          <Route path="/chef-service" element={<CategoryPage categoryId="chef-service" title="Chef at Home" />} />
          <Route path="/boat-tours/:id" element={<ItemDetailsPage category="boat-tours" />} />
          <Route path="/restaurants/:id" element={<ItemDetailsPage category="restaurants" />} />
          <Route path="/activities/:id" element={<ItemDetailsPage category="activities" />} />
          <Route path="/winery-tours/:id" element={<ItemDetailsPage category="winery-tours" />} />
          <Route path="/wellness/:id" element={<ItemDetailsPage category="wellness" />} />
          <Route path="/chef-service/:id" element={<ItemDetailsPage category="chef-service" />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
