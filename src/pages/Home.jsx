import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Wifi, Wind, Coffee, Users, Baby, Phone, Mail, MessageCircle, X, Utensils, Bath, Bed, Tv, Thermometer, ShieldCheck, Sun, Car, PawPrint, Check, Key } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import './Home.css';

const heroImages = [
  import.meta.env.BASE_URL + "images/bedroom.webp",
  import.meta.env.BASE_URL + "images/city_5.webp",
  import.meta.env.BASE_URL + "images/balcony.webp",
  import.meta.env.BASE_URL + "images/wine_bottle.webp"
];

const amenityCategoriesArray = [
  { id: 'cucina', icon: Utensils },
  { id: 'camera', icon: Bed },
  { id: 'bagno', icon: Bath },
  { id: 'comfort', icon: Thermometer },
  { id: 'tech', icon: Tv },
  { id: 'famiglia', icon: Baby },
  { id: 'aperto', icon: Sun },
  { id: 'parcheggio', icon: Car },
  { id: 'sicurezza', icon: ShieldCheck },
  { id: 'extra', icon: PawPrint }
];

const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Editorial Hero Section */}
      <section className="hero-editorial" id="home">
        <div className="hero-top-bg">
           <img src={`${import.meta.env.BASE_URL}logo_black.png`} alt="Lazzaretto City Walk" className="hero-logo" onError={(e) => { e.target.style.display = 'none'; }} />
           <p className="hero-subtitle">{t('home.hero_subtitle')}</p>
        </div>
        
        <div className="hero-carousel-wrapper">
           {heroImages.map((img, index) => (
             <div 
               key={index} 
               className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
               style={{ backgroundImage: `url(${img})` }}
             >
               <div className="hero-overlay"></div>
             </div>
           ))}
           <div className="hero-floating-button z-top">
              <a href="#prenota" className="btn btn-primary hero-btn d-none-mobile">{t('navbar.prenota_ora')}</a>
           </div>
        </div>
      </section>

      {/* Intro text on Dark Bg */}
      <section className="intro-dark text-center">
         <div className="container">
           <h1 className="intro-title">{t('home.intro_title')}</h1>
           <p className="intro-p">{t('home.intro_p')}</p>
           
           <div className="amenities-row mt-6">
              <div className="amenity-mini"><Wifi size={24} /> <span>{t('home.amenities.wifi')}</span></div>
              <div className="amenity-mini"><Key size={24} /> <span>{t('home.amenities.checkin')}</span></div>
              <div className="amenity-mini"><MapPin size={24} /> <span>{t('home.amenities.vista')}</span></div>
              <div className="amenity-mini"><Wind size={24} /> <span>{t('home.amenities.aria')}</span></div>
           </div>
         </div>
      </section>

      {/* Appartamento Section */}
      <section id="appartamento" className="container">
        <div className="grid-2 align-center">
          <div className="about-text fade-in">
            <h2 className="section-title">{t('home.appartamento.title')}</h2>
            <p>
              <Trans i18nKey="home.appartamento.p1">
                Situato in <strong>Via del Lazzaretto 15</strong>, il nostro monolocale è stato progettato per offrirti un'esperienza di soggiorno serena e raffinata a Bergamo.
              </Trans>
            </p>
            <p className="mt-4">
              {t('home.appartamento.p2')}
            </p>
            <div className="capacity-badges mt-4">
              <span className="badge"><Users size={18} /> {t('home.appartamento.badge1')}</span>
              <span className="badge"><Baby size={18} /> {t('home.appartamento.badge2')}</span>
            </div>
          </div>
          <div className="about-image fade-in">
            <img src={`${import.meta.env.BASE_URL}images/balcony.webp`} alt="Balcone Lazzaretto City Walk" />
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="bg-light">
        <div className="container center-text">
          <h2 className="section-title text-center">{t('home.servizi.title')}</h2>
          <div className="amenities-grid">
            <div className="amenity-card">
              <Wifi className="amenity-icon" />
              <h3>{t('home.amenities.wifi')}</h3>
              <p>{t('home.servizi.wifi_desc')}</p>
            </div>
            <div className="amenity-card">
              <Wind className="amenity-icon" />
              <h3>{t('home.amenities.aria')}</h3>
              <p>{t('home.servizi.aria_desc')}</p>
            </div>
            <div className="amenity-card">
              <Coffee className="amenity-icon" />
              <h3>{t('home.amenities.cucina')}</h3>
              <p>{t('home.servizi.cucina_desc')}</p>
            </div>
            <div className="amenity-card">
              <MapPin className="amenity-icon" />
              <h3>{t('home.amenities.posizione_unica')}</h3>
              <p>{t('home.servizi.posizione_desc')}</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="btn btn-outline" style={{padding: '12px 30px'}} onClick={() => setIsModalOpen(true)}>
              {t('home.all_amenities.btn_open')}
            </button>
          </div>
        </div>
      </section>

      {/* Galleria Section - Sneak Peek */}
      <section id="galleria" className="container section-gallery">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">{t('home.galleria.title')}</h2>
          <p className="section-subtitle">{t('home.galleria.subtitle')}</p>
        </div>
        <div className="gallery-sneak-peek">
           <div className="gallery-item large">
             <img src="/images/bedroom.webp" alt={t('home.galleria.img1_alt')} />
           </div>
           <div className="gallery-item">
             <img src="/images/city_5.webp" alt={t('home.galleria.img2_alt')} />
           </div>
           <div className="gallery-item">
             <img src="/images/wine_bottle.webp" alt={t('home.galleria.img3_alt')} />
           </div>
        </div>
        <div className="text-center mt-6">
           <Link to="/galleria" className="btn btn-outline" style={{padding: '14px 40px'}}>{t('home.galleria.btn')}</Link>
        </div>
      </section>

      {/* Posizione e Contatti Section */}
      <section id="posizione" className="bg-dark section-contacts">
        <div className="container grid-2">
          <div className="contact-info fade-in">
            <h3 className="text-accent mb-2" style={{letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem'}}>{t('home.contatti.subtitle')}</h3>
            <h2 className="section-title text-light">{t('home.contatti.title')}</h2>
            
            <div className="direct-contacts mt-4 mb-6">
              <div className="contact-person">
                <span className="person-name">{t('home.contatti.stefania')}</span>
                <div className="person-actions">
                  <a href="https://wa.me/393381892493?text=Ciao%2C%20ti%20contatto%20per%20avere%20informazioni%20sull'appartamento%20Lazzaretto%20City%20Walk" target="_blank" rel="noreferrer" className="action-icon wa" title="WhatsApp Stefania">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.06-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a href="tel:+393381892493" className="action-icon tel" title="Chiama Stefania">
                    <Phone size={24} />
                  </a>
                </div>
              </div>
              
              <div className="contact-person">
                <span className="person-name">{t('home.contatti.marco')}</span>
                <div className="person-actions">
                  <a href="https://wa.me/393277691811?text=Ciao%2C%20ti%20contatto%20per%20avere%20informazioni%20sull'appartamento%20Lazzaretto%20City%20Walk" target="_blank" rel="noreferrer" className="action-icon wa" title="WhatsApp Marco">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.06-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a href="tel:+393277691811" className="action-icon tel" title="Chiama Marco">
                    <Phone size={24} />
                  </a>
                </div>
              </div>

              <div className="contact-person mt-4">
                 <a href="mailto:info@lazzarettocitywalk.it" className="contact-item">
                   <Mail size={20} /> info@lazzarettocitywalk.it
                 </a>
              </div>
            </div>

            <p className="text-light-muted mb-4" style={{fontSize: '0.9rem'}}>
                <strong>{t('home.contatti.address_name')}</strong><br/>
                {t('home.contatti.address_street')}
            </p>
            
            <div id="prenota" className="booking-widget mt-6">
               <button className="btn btn-primary vikey-btn" style={{width: '100%', maxWidth: '300px'}}>{t('home.contatti.verifica_btn')}</button>
            </div>
          </div>
          <div className="map-container fade-in">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.053702117173!2d9.67499991556381!3d45.70014097910403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781510eb3b11c97%3A0x6bba8d234a9b6c0!2sVia%20del%20Lazzaretto%2C%2015%2C%2024124%20Bergamo%20BG!5e0!3m2!1sit!2sit!4v1690000000000!5m2!1sit!2sit" 
                width="100%" 
                height="450" 
                style={{border: 0, borderRadius: '12px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>
      </section>
      
      <footer className="footer">
         <div className="container text-center">
            <p>
              <Trans i18nKey="home.footer.copyright" values={{ year: new Date().getFullYear() }}>
                &copy; {new Date().getFullYear()} Lazzaretto City Walk. Elegance in Bergamo.
              </Trans>
            </p>
            <p className="footer-links">
               <a href="#">{t('home.footer.privacy')}</a> - <a href="#">{t('home.footer.termini')}</a>
               <span style={{opacity: 0.1, marginLeft: '10px'}}><a href="/istruzioni-ingresso">Admin</a></span>
            </p>
         </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="mobile-floating-cta">
         <a href="#prenota" className="btn btn-primary floating-pill">
            {t('navbar.prenota_ora')}
         </a>
      </div>

      {/* Full Amenities Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
               <h2>{t('home.all_amenities.modal_title')}</h2>
               <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                  <X size={28} />
               </button>
            </div>
            <div className="modal-scroll-area">
              {amenityCategoriesArray.map(cat => {
                const items = t(`home.all_amenities.categories.${cat.id}.items`, { returnObjects: true });
                if (!items || !Array.isArray(items)) return null;
                return (
                  <div key={cat.id} className="amenity-category-block">
                    <div className="amenity-category-header">
                       <cat.icon size={26} className="text-accent" />
                       <h3>{t(`home.all_amenities.categories.${cat.id}.title`)}</h3>
                    </div>
                    <ul className="amenity-bullet-list">
                       {items.map((item, idx) => (
                          <li key={idx}><span><Check size={18} className="text-accent" /></span> {item}</li>
                       ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
