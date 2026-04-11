import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './PrivacyModal.css';

const PrivacyModal = ({ isOpen, onClose }) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div className="privacy-modal-content fade-in" onClick={e => e.stopPropagation()}>
        <div className="privacy-modal-header">
          <h2>Privacy Policy</h2>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Chiudi">
            <X size={28} />
          </button>
        </div>
        
        <div className="privacy-modal-body">
          <p className="privacy-last-update">Ultimo aggiornamento: 11 aprile 2026</p>
          <p>Il presente sito web è gestito da Marco Savoldi, titolare della struttura ricettiva/locazione turistica Lazzaretto City Walk.</p>

          <section>
            <h3>1. Titolare del trattamento</h3>
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
          </section>

          <section>
            <h3>2. Tipologia di sito e finalità</h3>
            <p>Il sito ha finalità esclusivamente informative e promozionali relative all’alloggio turistico “Lazzaretto City Walk”.</p>
            <p>Attraverso il sito l’utente può:</p>
            <ul>
              <li>consultare informazioni sull’appartamento;</li>
              <li>visualizzare servizi e posizione;</li>
              <li>contattare il gestore;</li>
              <li>accedere a piattaforme esterne di prenotazione.</li>
            </ul>
            <p>Il sito non gestisce direttamente prenotazioni online né pagamenti.</p>
          </section>

          <section>
            <h3>3. Dati personali trattati</h3>
            <p>La navigazione sul sito può comportare il trattamento di alcune informazioni tecniche, tra cui:</p>
            <ul>
              <li>indirizzo IP;</li>
              <li>dati del browser e dispositivo utilizzato;</li>
              <li>data e ora di accesso;</li>
              <li>pagine visitate;</li>
              <li>log tecnici di sicurezza e funzionamento.</li>
            </ul>
            <p>Qualora l’utente contatti il gestore via email, telefono o WhatsApp, potranno essere trattati anche i dati volontariamente forniti (nome, recapito, richiesta, contenuto del messaggio).</p>
          </section>

          <section>
            <h3>4. Finalità del trattamento</h3>
            <p>I dati sono trattati per:</p>
            <ul>
              <li>consentire il corretto funzionamento del sito;</li>
              <li>rispondere a richieste di informazioni;</li>
              <li>gestire comunicazioni precontrattuali;</li>
              <li>indirizzare l’utente verso piattaforme di prenotazione esterne;</li>
              <li>adempiere ad eventuali obblighi di legge;</li>
              <li>tutelare la sicurezza del sito e prevenire abusi.</li>
            </ul>
          </section>

          <section>
            <h3>5. Base giuridica del trattamento</h3>
            <p>Il trattamento si basa su:</p>
            <ul>
              <li>esecuzione di misure precontrattuali richieste dall’utente;</li>
              <li>legittimo interesse del titolare alla gestione del sito e delle comunicazioni;</li>
              <li>adempimento di obblighi di legge;</li>
              <li>eventuale consenso dell’utente ove richiesto dalla normativa vigente.</li>
            </ul>
          </section>

          <section>
            <h3>6. Prenotazioni tramite piattaforme esterne</h3>
            <p>Le prenotazioni possono avvenire tramite servizi terzi, tra cui:</p>
            <ul>
              <li>Booking.com</li>
              <li>Airbnb</li>
              <li>Vikey Booking Engine</li>
            </ul>
            <p>Quando l’utente viene reindirizzato a tali piattaforme, il trattamento dei dati avviene secondo le rispettive privacy policy, disponibili sui loro siti ufficiali.</p>
            <p>Il titolare non è responsabile dei trattamenti effettuati autonomamente da tali soggetti terzi.</p>
          </section>

          <section>
            <h3>7. Google Maps</h3>
            <p>Il sito può integrare mappe tramite Google Maps per facilitare la localizzazione dell’alloggio.</p>
            <p>L’utilizzo del servizio può comportare comunicazione di dati a Google LLC o soggetti collegati, secondo le condizioni e informative del relativo provider.</p>
          </section>

          <section>
            <h3>8. Hosting del sito</h3>
            <p>Il sito è ospitato tramite infrastruttura GitHub Pages.</p>
            <p>Il provider tecnico potrebbe trattare dati di navigazione e log tecnici necessari al funzionamento del servizio.</p>
            <p>Per maggiori informazioni si invita a consultare l’informativa del relativo fornitore.</p>
          </section>

          <section>
            <h3>9. Conservazione dei dati</h3>
            <p>I dati saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità indicate e comunque nei limiti previsti dalla legge.</p>
            <p>Le comunicazioni inviate spontaneamente dall’utente potranno essere conservate per il tempo utile alla gestione della richiesta e successivi obblighi amministrativi.</p>
          </section>

          <section>
            <h3>10. Comunicazione dei dati</h3>
            <p>I dati potranno essere comunicati esclusivamente a:</p>
            <ul>
              <li>fornitori tecnici del sito;</li>
              <li>provider di hosting;</li>
              <li>piattaforme esterne di prenotazione;</li>
              <li>consulenti o professionisti incaricati;</li>
              <li>autorità competenti nei casi previsti dalla legge.</li>
            </ul>
            <p>I dati non saranno diffusi.</p>
          </section>

          <section>
            <h3>11. Diritti dell’interessato</h3>
            <p>L’utente può esercitare i diritti previsti dagli articoli 15-22 del Regolamento UE 2016/679, tra cui:</p>
            <ul>
              <li>accesso ai dati;</li>
              <li>rettifica;</li>
              <li>cancellazione;</li>
              <li>limitazione del trattamento;</li>
              <li>opposizione;</li>
              <li>portabilità dei dati, ove applicabile.</li>
            </ul>
            <p>Le richieste possono essere inviate a: <strong>info@lazzarettocitywalk.it</strong></p>
            <p>L’utente ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali.</p>
          </section>

          <section>
            <h3>12. Modifiche alla presente informativa</h3>
            <p>Il titolare si riserva il diritto di aggiornare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
