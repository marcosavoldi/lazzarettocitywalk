import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  // Close menu on location change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLangDropdownOpen(false);
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'it';

  // Hide the navbar entirely on the gallery page for a full-screen immersive experience
  if (location.pathname === '/galleria') {
    return null;
  }

  // Hidden navbar for instructions page
  if (location.pathname === '/istruzioni-ingresso') {
    return (
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content" style={{justifyContent: 'space-between'}}>
           <Link to="/" className="logo">Lazzaretto City Walk</Link>
           
           <div className="nav-actions">
             <div className="language-switcher" style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
               <button 
                 onClick={() => setLangDropdownOpen(!langDropdownOpen)} 
                 style={{ background: 'none', fontSize: '1.5rem', cursor: 'pointer', zIndex: 1002, display: 'flex', alignItems: 'center', gap: '4px' }}
                 aria-label="Change language"
               >
                 <span style={{ lineHeight: 1 }}>{currentLang === 'it' ? '🇮🇹' : '🇬🇧'}</span>
                 <span style={{fontSize: '0.6rem', color: 'var(--color-text)'}}>▼</span>
               </button>
               {langDropdownOpen && (
                 <div style={{ position: 'absolute', top: '150%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-secondary)', padding: '0.5rem', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 1003 }}>
                   <button onClick={() => changeLanguage('it')} style={{ background: 'none', cursor: 'pointer', fontSize: '1.6rem', textAlign: 'center', opacity: currentLang === 'it' ? 1 : 0.5, lineHeight: 1 }}>🇮🇹</button>
                   <div style={{width: '100%', height: '1px', backgroundColor: 'var(--color-secondary)'}}></div>
                   <button onClick={() => changeLanguage('en')} style={{ background: 'none', cursor: 'pointer', fontSize: '1.6rem', textAlign: 'center', opacity: currentLang === 'en' ? 1 : 0.5, lineHeight: 1 }}>🇬🇧</button>
                 </div>
               )}
             </div>
           </div>

        </div>
      </header>
    );
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span>Lazzaretto City Walk</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link to="/">{t('navbar.home')}</Link>
          <a href="/#appartamento">{t('navbar.appartamento')}</a>
          <a href="/#servizi">{t('navbar.servizi')}</a>
          <Link to="/galleria">{t('navbar.galleria')}</Link>
          <a href="/#posizione">{t('navbar.posizione')}</a>
        </nav>

        <div className="nav-actions">
          
          <div className="language-switcher" style={{position: 'relative', marginRight: '0.5rem', display: 'flex', alignItems: 'center'}}>
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)} 
              style={{ background: 'none', fontSize: '1.5rem', cursor: 'pointer', zIndex: 1002, display: 'flex', alignItems: 'center', gap: '4px' }}
              aria-label="Change language"
            >
              <span style={{ lineHeight: 1 }}>{currentLang === 'it' ? '🇮🇹' : '🇬🇧'}</span>
              <span style={{fontSize: '0.6rem', color: 'var(--color-text)'}}>▼</span>
            </button>
            {langDropdownOpen && (
              <div style={{ position: 'absolute', top: '150%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-secondary)', padding: '0.5rem', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 1003 }}>
                <button onClick={() => changeLanguage('it')} style={{ background: 'none', cursor: 'pointer', fontSize: '1.6rem', textAlign: 'center', opacity: currentLang === 'it' ? 1 : 0.5, lineHeight: 1 }}>🇮🇹</button>
                <div style={{width: '100%', height: '1px', backgroundColor: 'var(--color-secondary)'}}></div>
                <button onClick={() => changeLanguage('en')} style={{ background: 'none', cursor: 'pointer', fontSize: '1.6rem', textAlign: 'center', opacity: currentLang === 'en' ? 1 : 0.5, lineHeight: 1 }}>🇬🇧</button>
              </div>
            )}
          </div>

          <a href="#prenota" className="btn btn-primary d-none-mobile">{t('navbar.prenota')}</a>
          
          <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div className={`mobile-backdrop ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <span className="logo-small">Lazzaretto</span>
            <button className="close-menu" onClick={toggleMenu}><X size={28} /></button>
          </div>
          
          <nav className="mobile-nav-links">
            <Link to="/" onClick={toggleMenu}>
              <span className="num">01</span> {t('navbar.home')}
            </Link>
            <a href="/#appartamento" onClick={toggleMenu}>
              <span className="num">02</span> {t('navbar.appartamento')}
            </a>
            <a href="/#servizi" onClick={toggleMenu}>
              <span className="num">03</span> {t('navbar.servizi')}
            </a>
            <Link to="/galleria" onClick={toggleMenu}>
              <span className="num">04</span> {t('navbar.galleria')}
            </Link>
            <a href="/#posizione" onClick={toggleMenu}>
              <span className="num">05</span> {t('navbar.dove_siamo')}
            </a>
          </nav>
          
          <div className="mobile-menu-footer">
            <a href="#prenota" className="btn btn-outline w-100" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.2)'}} onClick={toggleMenu}>
              {t('navbar.prenota_ora')}
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
