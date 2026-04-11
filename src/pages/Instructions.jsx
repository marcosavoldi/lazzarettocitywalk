import { useState, useRef } from 'react';
import { KeySquare, Zap, Phone, Mail, ChevronDown, Home as HomeIcon, Thermometer, SunDim, Car, MapPin } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import './Instructions.css';
import PrivacyModal from '../components/PrivacyModal';
import CookieModal from '../components/CookieModal';

const Instructions = () => {
  const { t } = useTranslation();
  const [openStep, setOpenStep] = useState(0);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const stepRefs = useRef([]);

  const toggleStep = (index) => {
    const isOpening = openStep !== index;
    setOpenStep(isOpening ? index : null);
    if (isOpening) {
      // Wait for collapse animation, then snap to the correct position
      setTimeout(() => {
        const el = stepRefs.current[index];
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 80; // navbar height
          // Only scroll if the trigger isn't already near the top
          if (rect.top < offset || rect.top > window.innerHeight * 0.5) {
            window.scrollTo({
              top: window.scrollY + rect.top - offset,
              behavior: 'instant'
            });
          }
        }
      }, 460);
    }
  };

  return (
    <div className="instructions-page">
      <div className="instructions-container fade-in">
        <header className="instructions-header text-center mb-8">
          <KeySquare size={40} color="var(--color-accent)" style={{margin: '0 auto', marginBottom: '1rem'}}/>
          <h1 className="inst-page-title">{t('instructions.title')}</h1>
          <img 
            src={`${import.meta.env.BASE_URL}logo_black.png`} 
            alt="Lazzaretto City Walk" 
            className="inst-logo"
            onError={(e) => { e.target.style.display='none'; }}
          />
        </header>

        {/* ===== ACCORDION: Sections 1–3 (Ingresso guidato) ===== */}
        <div className="accordion-wrapper">

          {/* Step 0: Dove parcheggiare */}
          <div ref={el => stepRefs.current[0] = el} className={`accordion-item ${openStep === 0 ? 'open' : ''}`}>
            <button className="accordion-trigger" onClick={() => toggleStep(0)}>
              <span className="accordion-step-num"><Car size={18} /></span>
              <span className="accordion-label">Dove parcheggiare</span>
              <ChevronDown size={22} className="accordion-chevron" />
            </button>
            <div className="accordion-panel">
              <div className="accordion-body">
                <p style={{marginBottom: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.95rem'}}>Le soluzioni più comode vicino all&apos;appartamento, dalla gratuita alla coperta.</p>

                {[
                  {
                    name: 'Via dei Ghirardelli',
                    badge: 'Gratuito · Disco 3h di giorno · No limiti di notte',
                    notes: ['Esattamente sotto l\'appartamento', '⚠️ Non disponibile nei giorni di partita'],
                    link: 'https://maps.app.goo.gl/japF3wnKinouFLWaA'
                  },
                  {
                    name: 'Curva Sud Stadio',
                    badge: 'Gratuito · Disco 3h di giorno · No limiti di notte',
                    notes: ['A pochissimi metri dall\'alloggio', '⚠️ Non disponibile sab. mattina (mercato) né nei giorni di partita'],
                    link: 'https://maps.app.goo.gl/3nDTjqhHqbrEUA2M9'
                  },
                  {
                    name: 'Parcheggio Coperto Stadio',
                    badge: 'A pagamento · Coperto / interrato',
                    notes: ['Ideale per pioggia o maggiore protezione auto', '⚠️ Non disponibile durante partite o eventi'],
                    link: 'https://maps.app.goo.gl/2hCQwbD7pt2PizMdA'
                  },
                  {
                    name: 'Via Marzabotto',
                    badge: 'Gratuito · Nessun disco orario · Nessun limite',
                    notes: ['✅ Ottimo per soggiorni lunghi — via lunga con molti posti'],
                    link: 'https://maps.app.goo.gl/8qiA9isgvjRrfxR27'
                  },
                  {
                    name: 'Via Crescenzi',
                    badge: 'Gratuito (tratti finali)',
                    notes: ['Inizia sotto l\'appartamento', 'Primi tratti: disco 1h — proseguendo: posti liberi senza limiti'],
                    link: 'https://maps.app.goo.gl/FMw3mFeyDpMNFY9Y8'
                  },
                  {
                    name: 'Preda Parking',
                    badge: 'A pagamento · Via Pitentino',
                    notes: ['Alternativa ideale nei weekend affollati o nei giorni di partita'],
                    link: 'https://maps.app.goo.gl/hEHbDS8fF87uuZKw8'
                  },
                ].map((p, i) => (
                  <div key={i} className="parking-card">
                    <div className="parking-card-header">
                      <div>
                        <strong className="parking-name">{p.name}</strong>
                        <span className="parking-badge">{p.badge}</span>
                      </div>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="maps-link parking-maps-link">
                        <MapPin size={13} /> apri in maps
                      </a>
                    </div>
                    <ul className="parking-notes">
                      {p.notes.map((note, j) => <li key={j}>{note}</li>)}
                    </ul>
                  </div>
                ))}

                <div className="inline-note mt-4" style={{borderLeftColor: 'var(--color-primary)'}}>
                  <p style={{fontWeight: 600}}>⚠️ Nei giorni di partita dell&apos;Atalanta o eventi al New Balance Arena i parcheggi vicini potrebbero non essere disponibili. Consigliamo <strong>Via Marzabotto</strong> o <strong>Preda Parking</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: Ingresso */}
          <div ref={el => stepRefs.current[1] = el} className={`accordion-item ${openStep === 1 ? 'open' : ''}`}>
            <button className="accordion-trigger" onClick={() => toggleStep(1)}>
              <span className="accordion-step-num">1</span>
              <span className="accordion-label">{t('instructions.s1_title').replace('1. ', '')}</span>
              <ChevronDown size={22} className="accordion-chevron" />
            </button>
            <div className="accordion-panel">
              <div className="accordion-body">
                <p><Trans i18nKey="instructions.s1_p1" components={[<span key="0" />, <a key="1" href="https://www.google.com/maps/search/?api=1&query=Via+del+Lazzaretto+15+Bergamo" target="_blank" rel="noreferrer" className="maps-link" />]} /></p>
                <img src={`${import.meta.env.BASE_URL}images/instructions/image1.jpeg`} alt="Ingresso esterno" className="inst-image" />
                <p className="mt-4"><Trans i18nKey="instructions.s1_p2" components={[<strong key="1" />]} /></p>
                <p><Trans i18nKey="instructions.s1_p3" components={[<strong key="1" />]} /></p>
              </div>
            </div>
          </div>

          {/* Step 2: Porta appartamento */}
          <div ref={el => stepRefs.current[2] = el} className={`accordion-item ${openStep === 2 ? 'open' : ''}`}>
            <button className="accordion-trigger" onClick={() => toggleStep(2)}>
              <span className="accordion-step-num">2</span>
              <span className="accordion-label">{t('instructions.s2_title').replace('2. ', '')}</span>
              <ChevronDown size={22} className="accordion-chevron" />
            </button>
            <div className="accordion-panel">
              <div className="accordion-body">
                <img src={`${import.meta.env.BASE_URL}images/instructions/image2.png`} alt="Pomello smart sulla porta" className="inst-image small mb-4 mt-0" />
                <p><Trans i18nKey="instructions.s2_p1" components={[<strong key="1" />]} /></p>
                
                <h4 className="mt-6 mb-2">{t('instructions.s2_subtitle')}</h4>
                <img src={`${import.meta.env.BASE_URL}images/instructions/image3.jpg`} alt="Pulsante virtuale" className="inst-image small mb-4" />
                
                <div className="meth-block">
                   <h5>{t('instructions.s2_meth1_title')}</h5>
                   <p><Trans i18nKey="instructions.s2_meth1_p" components={[<strong key="1" />]} /></p>
                </div>

                <div className="meth-block mt-4">
                   <h5>{t('instructions.s2_meth2_title')}</h5>
                   <p>{t('instructions.s2_meth2_p')}</p>
                   <div className="inline-note mt-3 mb-3">
                      <p>{t('instructions.s2_meth2_note')}</p>
                   </div>
                </div>

                <div className="highlight-banner mt-6">
                   <p><Trans i18nKey="instructions.s2_final" components={[<strong key="1" />]} /></p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Chiudere la porta */}
          <div ref={el => stepRefs.current[3] = el} className={`accordion-item ${openStep === 3 ? 'open' : ''}`}>
            <button className="accordion-trigger" onClick={() => toggleStep(3)}>
              <span className="accordion-step-num">3</span>
              <span className="accordion-label">{t('instructions.s3_title').replace('3. ', '')}</span>
              <ChevronDown size={22} className="accordion-chevron" />
            </button>
            <div className="accordion-panel">
              <div className="accordion-body">
                <h4 className="mb-2">{t('instructions.s3_in_title')}</h4>
                <p>{t('instructions.s3_in_p')}</p>
                <img src={`${import.meta.env.BASE_URL}images/instructions/image4.png`} alt="Serratura interna" className="inst-image small my-4" />

                <h4 className="mt-6 mb-2">{t('instructions.s3_out_title')}</h4>
                <p><Trans i18nKey="instructions.s3_out_p" components={[<strong key="1" />]} /></p>
              </div>
            </div>
          </div>

        </div>

        {/* ===== SEZIONE FISSA: "Una volta dentro" (Sections 4–6) ===== */}
        <section className="inside-section mt-8">
          <div className="inside-header">
            <HomeIcon size={22} color="var(--color-accent)" />
            <h2>{t('instructions.s4_title').replace('4. ', '')}</h2>
          </div>

          <div className="inside-content">
            {/* Chiave d'emergenza */}
            <p className="lead-text"><Trans i18nKey="instructions.s4_keys_intro" components={[<strong key="1" />]} /></p>
            
            <div className="inline-note mt-4 mb-4" style={{borderLeftColor: 'var(--color-primary)'}}>
               <p style={{fontWeight: 600}}>{t('instructions.s4_keys_warning')}</p>
            </div>

            <p className="mb-6">{t('instructions.s4_keys_checkout')}</p>
            
            <h4 className="mt-4 mb-3">{t('instructions.s4_list_title')}</h4>
            <ul className="elegant-list">
               <li>{t('instructions.s4_list1')}</li>
               <li>{t('instructions.s4_list2')}</li>
            </ul>

            {/* Dotazioni */}
            <div className="inside-divider"></div>
            <h3 className="inside-subtitle">{t('instructions.s5_title')}</h3>
            <p className="mb-3"><strong>{t('instructions.s5_p_title')}</strong></p>
            <ul className="elegant-list dotted">
               <li>{t('instructions.s5_list1')}</li>
               <li>{t('instructions.s5_list2')}</li>
               <li>{t('instructions.s5_list3')}</li>
               <li>{t('instructions.s5_list4')}</li>
            </ul>

            {/* Impianti */}
            <div className="inside-divider"></div>
            <h3 className="inside-subtitle">{t('instructions.s6_tech_title')}</h3>
            <h4 className="mb-2" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Thermometer size={20} color="var(--color-accent)"/> {t('instructions.s6_temp_title')}
            </h4>
            <p>{t('instructions.s6_temp_p')}</p>

            <h4 className="mt-6 mb-2" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <SunDim size={20} color="var(--color-accent)"/> {t('instructions.s6_blinds_title')}
            </h4>
            <p>{t('instructions.s6_blinds_p')}</p>

            <h4 className="mt-6 mb-2" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Zap size={20} color="var(--color-accent)"/> {t('instructions.s6_elec_title')}
            </h4>
            <p>{t('instructions.s6_elec_p')}</p>
            <img src={`${import.meta.env.BASE_URL}images/instructions/image5.jpg`} alt="Quadro elettrico scale" className="inst-image mt-4" />
          </div>
        </section>

        {/* ===== FOOTER CON CONTATTI ===== */}
        <section className="inst-support mt-8">
          <p>{t('instructions.footer_p')}</p>

          <div className="direct-contacts mt-4">
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

            <div className="contact-person mt-4" style={{justifyContent: 'center'}}>
              <a href="/" className="maps-link" style={{fontSize: '1rem'}}>
                {t('instructions.visit_site')}
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
         <div className="container text-center">
            <p>
              <Trans i18nKey="home.footer.copyright" values={{ year: new Date().getFullYear() }}>
                &copy; {new Date().getFullYear()} Lazzaretto City Walk. Elegance in Bergamo.
              </Trans>
            </p>
            <p className="footer-links">
               <button onClick={() => setIsPrivacyOpen(true)} className="footer-link-btn">{t('home.footer.privacy')}</button> - <button onClick={() => setIsCookieOpen(true)} className="footer-link-btn">{t('home.footer.cookie')}</button>
            </p>
         </div>
      </footer>

      {/* Privacy & Cookie Modals */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <CookieModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />
    </div>
  );
};

export default Instructions;
