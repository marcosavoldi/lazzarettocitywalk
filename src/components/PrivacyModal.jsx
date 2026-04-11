import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PrivacyModal.css';

const PrivacyModal = ({ isOpen, onClose }) => {
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
      title: "Privacy Policy",
      lastUpdate: "Ultimo aggiornamento: 11 aprile 2026",
      intro: "Il presente sito web è gestito da Marco Savoldi, titolare della struttura ricettiva/locazione turistica Lazzaretto City Walk.",
      sections: [
        {
          title: "1. Titolare del trattamento",
          body: (
            <>
              <p>
                Marco Savoldi<br />
                Cene (BG), Italia<br />
                Email: info@lazzarettocitywalk.it<br />
                Telefono: 3277691811
              </p>
              <p>
                CIR: 016024-LNI-00400<br />
                CIN: IT016024C24G7HL7F7
              </p>
            </>
          )
        },
        {
          title: "2. Tipologia di sito e finalità",
          body: (
            <>
              <p>Il sito ha finalità esclusivamente informative e promozionali relative all’alloggio turistico “Lazzaretto City Walk”.</p>
              <p>Attraverso il sito l’utente può:</p>
              <ul>
                <li>consultare informazioni sull’appartamento;</li>
                <li>visualizzare servizi e posizione;</li>
                <li>contattare il gestore;</li>
                <li>accedere a piattaforme esterne di prenotazione.</li>
              </ul>
              <p>Il sito non gestisce direttamente prenotazioni online né pagamenti.</p>
            </>
          )
        },
        {
          title: "3. Dati personali trattati",
          body: (
            <>
              <p>La navigazione sul sito può comportare il trattamento di alcune informazioni tecniche, tra cui:</p>
              <ul>
                <li>indirizzo IP;</li>
                <li>dati del browser e dispositivo utilizzato;</li>
                <li>data e ora di accesso;</li>
                <li>pagine visitate;</li>
                <li>log tecnici di sicurezza e funzionamento.</li>
              </ul>
              <p>Qualora l’utente contatti il gestore via email, telefono o WhatsApp, potranno essere trattati anche i dati volontariamente forniti (nome, recapito, richiesta, contenuto del messaggio).</p>
            </>
          )
        },
        {
          title: "4. Finalità del trattamento",
          body: (
            <>
              <p>I dati sono trattati per:</p>
              <ul>
                <li>consentire il corretto funzionamento del sito;</li>
                <li>rispondere a richieste di informazioni;</li>
                <li>gestire comunicazioni precontrattuali;</li>
                <li>indirizzare l’utente verso piattaforme di prenotazione esterne;</li>
                <li>adempiere ad eventuali obblighi di legge;</li>
                <li>tutelare la sicurezza del sito e prevenire abusi.</li>
              </ul>
            </>
          )
        },
        {
          title: "5. Base giuridica del trattamento",
          body: (
            <>
              <p>Il trattamento si basa su:</p>
              <ul>
                <li>esecuzione di misure precontrattuali richieste dall’utente;</li>
                <li>legittimo interesse del titolare alla gestione del sito e delle comunicazioni;</li>
                <li>adempimento di obblighi di legge;</li>
                <li>eventuale consenso dell’utente ove richiesto dalla normativa vigente.</li>
              </ul>
            </>
          )
        },
        {
          title: "6. Prenotazioni tramite piattaforme esterne",
          body: (
            <>
              <p>Le prenotazioni possono avvenire tramite servizi terzi, tra cui:</p>
              <ul>
                <li>Booking.com</li>
                <li>Airbnb</li>
                <li>Vikey Booking Engine</li>
              </ul>
              <p>Quando l’utente viene reindirizzato a tali piattaforme, il trattamento dei dati avviene secondo le rispettive privacy policy, disponibili sui loro siti ufficiali.</p>
              <p>Il titolare non è responsabile dei trattamenti effettuati autonomamente da tali soggetti terzi.</p>
            </>
          )
        },
        {
          title: "7. Google Maps",
          body: (
            <p>Il sito può integrare mappe tramite Google Maps per facilitare la localizzazione dell’alloggio. L’utilizzo del servizio può comportare comunicazione di dati a Google LLC o soggetti collegati, secondo le condizioni e informative del relativo provider.</p>
          )
        },
        {
          title: "8. Hosting del sito",
          body: (
            <p>Il sito è ospitato tramite infrastruttura GitHub Pages. Il provider tecnico potrebbe trattare dati di navigazione e log tecnici necessari al funzionamento del servizio. Per maggiori informazioni si invita a consultare l’informativa del relativo fornitore.</p>
          )
        },
        {
          title: "9. Conservazione dei dati",
          body: (
            <p>I dati saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità indicate e comunque nei limiti previsti dalla legge. Le comunicazioni inviate spontaneamente dall’utente potranno essere conservate per il tempo utile alla gestione della richiesta e successivi obblighi amministrativi.</p>
          )
        },
        {
          title: "10. Comunicazione dei dati",
          body: (
            <>
              <p>I dati potranno essere comunicati esclusivamente a:</p>
              <ul>
                <li>fornitori tecnici del sito;</li>
                <li>provider di hosting;</li>
                <li>piattaforme esterne di prenotazione;</li>
                <li>consulenti o professionisti incaricati;</li>
                <li>autorità competenti nei casi previsti dalla legge.</li>
              </ul>
              <p>I dati non saranno diffusi.</p>
            </>
          )
        },
        {
          title: "11. Diritti dell’interessato",
          body: (
            <>
              <p>L’utente può esercitare i diritti previsti dagli articoli 15-22 del Regolamento UE 2016/679, tra cui accessibilità, rettifica, cancellazione, limitazione, opposizione e portabilità. Le richieste possono essere inviate a: <strong>info@lazzarettocitywalk.it</strong>. L’utente ha inoltre diritto di proporre reclamo al Garante.</p>
            </>
          )
        },
        {
          title: "12. Modifiche alla presente informativa",
          body: (
            <p>Il titolare si riserva il diritto di aggiornare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.</p>
          )
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdate: "Last updated: April 11, 2026",
      intro: "This website is managed by Marco Savoldi, owner/manager of the tourist accommodation Lazzaretto City Walk.",
      sections: [
        {
          title: "1. Data Controller",
          body: (
            <>
              <p>
                Marco Savoldi<br />
                Cene (BG), Italy<br />
                Email: info@lazzarettocitywalk.it<br />
                Phone: +39 3277691811
              </p>
              <p>
                CIR: 016024-LNI-00400<br />
                CIN: IT016024C24G7HL7F7
              </p>
            </>
          )
        },
        {
          title: "2. Website Purpose",
          body: (
            <>
              <p>This website is intended for informational and promotional purposes only regarding the tourist accommodation “Lazzaretto City Walk”.</p>
              <p>Through the website, users may:</p>
              <ul>
                <li>view information about the apartment;</li>
                <li>check services and location;</li>
                <li>contact the manager;</li>
                <li>access external booking platforms.</li>
              </ul>
              <p>This website does not directly process bookings or payments.</p>
            </>
          )
        },
        {
          title: "3. Personal Data Collected",
          body: (
            <>
              <p>Browsing this website may involve the processing of technical data, including:</p>
              <ul>
                <li>IP address;</li>
                <li>browser and device information;</li>
                <li>date and time of access;</li>
                <li>visited pages;</li>
                <li>technical and security logs.</li>
              </ul>
              <p>If users contact the manager via email, phone or WhatsApp, any voluntarily provided data may also be processed (name, contact details, request content, message details).</p>
            </>
          )
        },
        {
          title: "4. Purpose of Processing",
          body: (
            <>
              <p>Data may be processed for the following purposes:</p>
              <ul>
                <li>ensuring proper website operation;</li>
                <li>responding to information requests;</li>
                <li>managing pre-booking or pre-contractual communications;</li>
                <li>redirecting users to external booking services;</li>
                <li>complying with legal obligations;</li>
                <li>protecting website security and preventing misuse.</li>
              </ul>
            </>
          )
        },
        {
          title: "5. Legal Basis",
          body: (
            <>
              <p>Processing is based on:</p>
              <ul>
                <li>pre-contractual measures requested by the user;</li>
                <li>legitimate interest in managing the website and communications;</li>
                <li>compliance with legal obligations;</li>
                <li>user consent where required by applicable law.</li>
              </ul>
            </>
          )
        },
        {
          title: "6. External Booking Platforms",
          body: (
            <>
              <p>Bookings may be made through third-party services, including:</p>
              <ul>
                <li>Booking.com</li>
                <li>Airbnb</li>
                <li>Vikey Booking Engine</li>
              </ul>
              <p>When users are redirected to these platforms, personal data is processed according to their own privacy policies available on their respective websites.</p>
              <p>The Data Controller is not responsible for processing activities independently carried out by such third parties.</p>
            </>
          )
        },
        {
          title: "7. Google Maps",
          body: (
            <p>This website may include Google Maps to help users locate the accommodation. Use of this service may involve the transfer of data to Google LLC or affiliated entities, according to the provider’s own terms and privacy policies.</p>
          )
        },
        {
          title: "8. Hosting Provider",
          body: (
            <p>This website is hosted through GitHub Pages infrastructure. The technical provider may process browsing data and logs necessary for the operation and security of the service. For more information, users should refer to the provider’s own privacy documentation.</p>
          )
        },
        {
          title: "9. Data Retention",
          body: (
            <p>Data will be retained only for the time strictly necessary to achieve the purposes described above and in compliance with applicable legal obligations. Messages voluntarily sent by users may be retained for the time necessary to manage the request and any related administrative obligations.</p>
          )
        },
        {
          title: "10. Data Sharing",
          body: (
            <>
              <p>Data may be shared only with:</p>
              <ul>
                <li>technical service providers;</li>
                <li>hosting providers;</li>
                <li>booking platforms;</li>
                <li>consultants or professionals when necessary;</li>
                <li>public authorities where required by law.</li>
              </ul>
              <p>Data will not be publicly disclosed.</p>
            </>
          )
        },
        {
          title: "11. User Rights",
          body: (
            <>
              <p>Users may exercise the rights provided by Articles 15–22 of Regulation (EU) 2016/679, including access, rectification, erasure, restriction, objection and portability. Requests may be sent to: <strong>info@lazzarettocitywalk.it</strong>. Users also have the right to lodge a complaint with the competent Authority.</p>
            </>
          )
        },
        {
          title: "12. Changes to This Policy",
          body: (
            <p>The Data Controller reserves the right to update this Privacy Policy at any time. Any changes will be published on this page.</p>
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
            <section key={idx}>
              <h3>{section.title}</h3>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
