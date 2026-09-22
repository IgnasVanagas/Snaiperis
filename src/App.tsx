import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RegistrationModal } from './components/common/RegistrationModal';
import { SearchModal } from './components/common/SearchModal';
import { ProductModal } from './components/common/ProductModal';
import { CoachModal } from './components/common/CoachModal';

// Pages
import { Home } from './pages/Home';
import { Priemimas } from './pages/Priemimas';
import { Treneriai } from './pages/Treneriai';
import { TrenerisDetail } from './pages/TrenerisDetail';
import { Komandos } from './pages/Komandos';
import { KomandaDetail } from './pages/KomandaDetail';
import { Naujienos } from './pages/Naujienos';
import { NaujienaDetail } from './pages/NaujienaDetail';
import { Atributika } from './pages/Atributika';
import { CempionuLyga } from './pages/CempionuLyga';
import { Renginiai } from './pages/Renginiai';
import { Darzelinukai } from './pages/Darzelinukai';
import { Stovyklos } from './pages/Stovyklos';
import { Tevams } from './pages/Tevams';
import { MokejimuInformacija } from './pages/MokejimuInformacija';
import { Krepselis } from './pages/Krepselis';
import { RungtyniuTaisykles } from './pages/RungtyniuTaisykles';
import { Gimtadieniai } from './pages/Gimtadieniai';
import { Istorija } from './pages/Istorija';
import { ElgesioTaisykles } from './pages/ElgesioTaisykles';
import { GarbesAleja } from './pages/GarbesAleja';
import { Absolventai } from './pages/Absolventai';
import { DUK } from './pages/DUK';
import { Karjera } from './pages/Karjera';
import { Parama } from './pages/Parama';
import { Kontaktai } from './pages/Kontaktai';
import { Straipsniai } from './pages/Straipsniai';

import { Coach } from './data/coaches';
import { Product, merchandise } from './data/merchandise';

export function App() {
  const [location] = useLocation();

  // Modals state
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerGym, setRegisterGym] = useState('');
  const [registerCoach, setRegisterCoach] = useState('');

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleOpenRegister = (gym = '', coach = '') => {
    setRegisterGym(gym);
    setRegisterCoach(coach);
    setIsRegisterOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased">
      {/* Top Navbar */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onOpenRegister={() => handleOpenRegister()} 
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Switch>
          {/* Core Routes */}
          <Route path="/">
            <Home 
              onOpenRegister={handleOpenRegister} 
              onSelectCoach={setSelectedCoach} 
              onSelectProduct={setSelectedProduct} 
            />
          </Route>

          <Route path="/priemimas">
            <Priemimas onOpenRegister={handleOpenRegister} />
          </Route>

          {/* Akademija Routes */}
          <Route path="/akademija">
            <Istorija />
          </Route>
          <Route path="/istorija">
            <Istorija />
          </Route>
          <Route path="/treneriai">
            <Treneriai 
              onSelectCoach={setSelectedCoach} 
              onOpenRegister={handleOpenRegister} 
            />
          </Route>
          <Route path="/treneriai/:slug*">
            <TrenerisDetail onOpenRegister={handleOpenRegister} />
          </Route>
          <Route path="/elgesio-taisykles">
            <ElgesioTaisykles />
          </Route>
          <Route path="/garbes-aleja">
            <GarbesAleja />
          </Route>
          <Route path="/absolventai">
            <Absolventai />
          </Route>

          {/* Naujienos Routes */}
          <Route path="/naujienos">
            <Naujienos />
          </Route>
          <Route path="/naujienos/:slug*">
            <NaujienaDetail onOpenRegister={() => handleOpenRegister()} />
          </Route>

          {/* Komandos Routes */}
          <Route path="/komandos">
            <Komandos onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/komandos/:slug*">
            <KomandaDetail onOpenRegister={handleOpenRegister} />
          </Route>

          {/* Čempionų lyga */}
          <Route path="/cempionu-lyga">
            <CempionuLyga onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/cempionu-lyga/:division*">
            <CempionuLyga onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/cempionu_lyga/:division*">
            <CempionuLyga onOpenRegister={() => handleOpenRegister()} />
          </Route>

          {/* Renginiai & Stovyklos */}
          <Route path="/renginiai">
            <Renginiai onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/renginiai/:slug*">
            <Renginiai onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/stovyklos">
            <Stovyklos onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/stovyklos-page">
            <Stovyklos onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/stovyklos/:slug*">
            <Stovyklos onOpenRegister={() => handleOpenRegister()} />
          </Route>

          {/* Darželinukai */}
          <Route path="/darzelinukai">
            <Darzelinukai onOpenRegister={() => handleOpenRegister()} />
          </Route>
          <Route path="/kindergarden/:slug*">
            <Darzelinukai onOpenRegister={() => handleOpenRegister()} />
          </Route>

          {/* Atributika */}
          <Route path="/atributika">
            <Atributika onSelectProduct={setSelectedProduct} />
          </Route>
          <Route path="/atributika/:slug">
            {params => {
              const matched = merchandise.find(m => m.slug === params.slug);
              return <Atributika onSelectProduct={setSelectedProduct} />;
            }}
          </Route>

          {/* Tėvams Routes */}
          <Route path="/tevams">
            <Tevams />
          </Route>
          <Route path="/mokejimu-informacija">
            <MokejimuInformacija />
          </Route>
          <Route path="/neformalaus-ugdymo-krepselis">
            <Krepselis />
          </Route>
          <Route path="/rungtyniu-stebejimo-taisykles">
            <RungtyniuTaisykles />
          </Route>
          <Route path="/gimtadieniai">
            <Gimtadieniai onOpenRegister={() => handleOpenRegister()} />
          </Route>

          {/* Information & Support Routes */}
          <Route path="/d-u-k">
            <DUK />
          </Route>
          <Route path="/karjera">
            <Karjera />
          </Route>
          <Route path="/parama">
            <Parama />
          </Route>
          <Route path="/kontaktai">
            <Kontaktai />
          </Route>
          <Route path="/straipsniai">
            <Straipsniai />
          </Route>
          <Route path="/partneriai/:slug*">
            <Home 
              onOpenRegister={handleOpenRegister} 
              onSelectCoach={setSelectedCoach} 
              onSelectProduct={setSelectedProduct} 
            />
          </Route>
          <Route path="/:year/:month/:day/:slug">
            {params => {
              return <NaujienaDetail onOpenRegister={() => handleOpenRegister()} />;
            }}
          </Route>

          {/* Fallback Catch-all: Home */}
          <Route>
            <Home 
              onOpenRegister={handleOpenRegister} 
              onSelectCoach={setSelectedCoach} 
              onSelectProduct={setSelectedProduct} 
            />
          </Route>
        </Switch>
      </main>

      {/* Global Modals */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        preselectedGym={registerGym}
        preselectedCoach={registerCoach}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CoachModal
        coach={selectedCoach}
        onClose={() => setSelectedCoach(null)}
        onRegisterWithCoach={coachName => handleOpenRegister(undefined, coachName)}
      />

      {/* Footer */}
      <Footer onOpenRegister={() => handleOpenRegister()} />
    </div>
  );
}
