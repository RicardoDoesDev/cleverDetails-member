import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import AccessPage from './pages/AccessPage';
import PartnershipPage from './pages/PartnershipPage';
import AllItemsPage from './pages/AllItemsPage';
import EmailPage from './pages/EmailPage';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-primary">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Header onToggleSidebar={toggleSidebar} />
        <main className="max-w-7xl mx-auto px-4 py-8 pt-48 md:pt-64">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllItemsPage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        
        <Route path="/boat-tours/:id" element={<ItemDetailsPage category="boat-tours" />} />
        <Route path="/gastronomy/:id" element={<ItemDetailsPage category="gastronomy" />} />
        <Route path="/activities/:id" element={<ItemDetailsPage category="activities" />} />
        <Route path="/winery-tours/:id" element={<ItemDetailsPage category="winery-tours" />} />
        <Route path="/wellness/:id" element={<ItemDetailsPage category="wellness" />} />
        <Route path="/beauty-and-hair-salons/:id" element={<ItemDetailsPage category="beauty-and-hair-salons" />} />
        <Route path="/chef-at-home/:id" element={<ItemDetailsPage category="chef-at-home" />} />
        
        <Route path="/access" element={<AccessPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/contact" element={<EmailPage />} />
      </Routes>
    </Layout>
  );
} 