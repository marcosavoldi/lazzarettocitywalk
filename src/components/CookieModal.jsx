import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PrivacyModal.css'; // Reusing PrivacyModal styles for consistency

const CookieModal = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'it';

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const content = {
    it: {
      title: "Cookie Policy",
      lastUpdate: "Ultimo aggiornamento: 11 aprile 2026",
      intro: "La presente Cookie Policy spiega come il sito web Lazzaretto City Walk utilizza cookie e tecnologie simili. Navigando sul sito, l’utente potrà ricevere esclusivamente strumenti tecnici strettamente necessari al corretto funzionamento e alla sicurezza del sito, salvo quanto diversamente indicato.",
      sections: [
        {
          title: "1. Cosa sono i cookie",
          body: (
            <p>I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell’utente durante la navigazione. Possono essere utilizzati per diverse finalità, tra cui consentire il funzionamento del sito, migliorare l’esperienza di navigazione, memorizzare preferenze, generare statistiche o integrare servizi di terze parti.</p>
          )
        },
        {
          title: "2. Cookie utilizzati da questo sito",
          body: (
            <>
              <p>In base all’attuale configurazione del sito, non vengono intenzionalmente installati dal Titolare cookie di profilazione o pubblicitari. Il sito è progettato per ridurre al minimo l’utilizzo di strumenti di tracciamento. Attualmente il sito può utilizzare esclusivamente:</p>
              <h4>a) Cookie tecnici</h4>
              <p>Necessari per la corretta visualizzazione delle pagine, sicurezza, gestione della rete e corretto caricamento delle risorse del sito. Tali cookie non richiedono consenso preventivo nei casi consentiti dalla normativa vigente.</p>
              <h4>b) Log tecnici di hosting / infrastruttura</h4>
              <p>Il sito è ospitato su infrastruttura di terze parti (GitHub Pages), che potrebbe trattare automaticamente dati tecnici di connessione quali indirizzo IP, data e ora delle richieste, log di sicurezza e informazioni tecniche necessarie al servizio. Tali trattamenti sono gestiti dal relativo provider secondo le proprie policy.</p>
            </>
          )
        },
        {
          title: "3. Link esterni e servizi di terze parti",
          body: (
            <>
              <p>Il sito può contenere collegamenti verso piattaforme esterne quali: Google Maps, Booking.com, Airbnb, Vikey Booking Engine, WhatsApp. Tali servizi vengono aperti solo a seguito di azione volontaria dell’utente tramite click sul relativo link. Eventuali cookie o strumenti di tracciamento installati dopo l’uscita dal sito sono gestiti direttamente dai rispettivi fornitori terzi secondo le loro informative.</p>
            </>
          )
        },
        {
          title: "4. Nessun caricamento automatico di Google Maps",
          body: (
            <p>Per una maggiore tutela della privacy, Google Maps non viene caricato automaticamente all’apertura del sito. Mappe e servizi esterni vengono aperti solo dopo una scelta esplicita dell’utente.</p>
          )
        },
        {
          title: "5. Come gestire i cookie",
          body: (
            <>
              <p>L’utente può gestire o disabilitare i cookie direttamente dalle impostazioni del proprio browser. La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito. Guide utili sono disponibili nelle pagine di supporto dei browser più comuni (Chrome, Safari, Firefox, Edge).</p>
            </>
          )
        },
        {
          title: "6. Titolare del trattamento",
          body: (
            <p>
              Marco Savoldi<br />
              Lazzaretto City Walk<br />
              Cene (BG), Italia<br />
              Email: info@lazzarettocitywalk.it<br />
              Telefono: +39 3277691811
            </p>
          )
        },
        {
          title: "7. Aggiornamenti della presente Cookie Policy",
          body: (
            <p>La presente Cookie Policy potrà essere aggiornata in qualsiasi momento per esigenze normative, tecniche o operative. Gli utenti sono invitati a consultare periodicamente questa pagina.</p>
          )
        }
      ]
    },
    en: {
      title: "Cookie Policy",
      lastUpdate: "Last update: April 11, 2026",
      intro: "This Cookie Policy explains how the website Lazzaretto City Walk uses cookies and similar technologies. By browsing the website, users may receive only those technical tools strictly necessary for the proper functioning and security of the website, unless otherwise specified.",
      sections: [
        {
          title: "1. What are cookies",
          body: (
            <p>Cookies are small text files stored on the user’s device while browsing websites. They may be used for various purposes, including: enabling website functionality, improving browsing experience, remembering preferences, generating statistics, or integrating third-party services.</p>
          )
        },
        {
          title: "2. Cookies used by this website",
          body: (
            <>
              <p>Based on the current website configuration, no profiling or advertising cookies are intentionally installed by the Data Controller. The website is designed to minimize the use of tracking technologies. At present, the website may use only:</p>
              <h4>a) Technical cookies</h4>
              <p>Necessary for correct page display, security, network management, and proper loading of website resources. These cookies do not require prior consent where permitted by applicable law.</p>
              <h4>b) Hosting / infrastructure technical logs</h4>
              <p>The website is hosted on third-party infrastructure (GitHub Pages), which may automatically process technical connection data such as IP address, timestamps, security logs and technical information necessary to provide the service. Such processing is managed by the relevant provider according to its own policies.</p>
            </>
          )
        },
        {
          title: "3. External links and third-party services",
          body: (
            <>
              <p>This website may contain links to external platforms such as: Google Maps, Booking.com, Airbnb, Vikey Booking Engine, WhatsApp. These services are opened only after the user voluntarily clicks the related link. Any cookies or tracking technologies installed after leaving this website are managed directly by those third-party providers under their own privacy and cookie policies.</p>
            </>
          )
        },
        {
          title: "4. No automatic Google Maps loading",
          body: (
            <p>To improve privacy protection, Google Maps is not automatically loaded when visiting this website. Maps and external services are opened only after an explicit user action.</p>
          )
        },
        {
          title: "5. How to manage cookies",
          body: (
            <>
              <p>Users can manage or disable cookies directly through their browser settings. Disabling technical cookies may affect proper website functionality. Useful guides are available in the support pages of common browsers such as Chrome, Safari, Firefox, and Edge.</p>
            </>
          )
        },
        {
          title: "6. Data Controller",
          body: (
            <p>
              Marco Savoldi<br />
              Lazzaretto City Walk<br />
              Cene (BG), Italy<br />
              Email: info@lazzarettocitywalk.it<br />
              Phone: +39 3277691811
            </p>
          )
        },
        {
          title: "7. Updates to this Cookie Policy",
          body: (
            <p>This Cookie Policy may be updated at any time due to legal, technical or operational changes. Users are invited to review this page periodically.</p>
          )
        }
      ]
    }
  };

  const currentContent = currentLang.startsWith('en') ? content.en : content.it;

  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div className="privacy-modal-content fade-in" onClick={e => e.stopPropagation()}>
        <div className="privacy-modal-header">
          <h2>{currentContent.title}</h2>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Close">
            <X size={28} />
          </button>
        </div>
        
        <div className="privacy-modal-body">
          <p className="privacy-last-update">{currentContent.lastUpdate}</p>
          <p>{currentContent.intro}</p>

          {currentContent.sections.map((section, idx) => (
            <section key={idx} className="privacy-section">
              <h3>{section.title}</h3>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
