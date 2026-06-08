import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About, Contact, Legal, License } from './pages/SharedPages';
import { CookieBanner } from './components/CookieBanner';
import { NotFound } from './pages/NotFound';
import { AnalyticsTracker } from './components/AnalyticsTracker';

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 honeycomb-pattern">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/license" element={<License />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </BrowserRouter>
  );
}
