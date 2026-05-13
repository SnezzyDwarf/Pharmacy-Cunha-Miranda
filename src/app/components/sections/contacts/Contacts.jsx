import Button from "../../ui/button/Button";
import Box from "../../ui/box/box";
import { useEffect, useState } from "react";

//cs
import "./Contact.css";

//icons
import PhoneIcon from "../../../../assets/ui/PhoneIcon";
import Email from "../../../../assets/ui/EmailIcon";
import CopyIcon from "../../../../assets/ui/CopyIcon";

export default function Contacts() {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setIsCopied] = useState(false);

  const textCopiedPhone = "+245 204 416";
  const textCopiedEmail = "geral@outlook.com";

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();

      let open = false;

      if (day >= 1 && day <= 5) {
        open = hour >= 9 && hour < 19;
      } else if (day === 6) {
        open = hour >= 9 && hour < 13;
      } else {
        open = false;
      }

      setIsOpen(open);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(textCopiedPhone);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Cópia falhou:", err);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(textCopiedEmail);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Cópia falhou:", err);
    }
  };

  return (
    <>
      <section id="contacts" className="section_contact">
        <div className="contact_content">
          <div className="contact_content-text">
            <h2>Contactos e Horários</h2>
            <p>Entre em contacto connosco. Estamos aqui para o ajudar.</p>
          </div>
          <div className="contact_content-open">
            {isOpen === true && (
              <div>
                <span></span>
                <Button variant="quartenary2">
                  <span></span>
                  Aberto agora
                </Button>
              </div>
            )}

            {isOpen === false && (
              <div>
                <Button
                  variant="quartenary"
                  to="https://www.farmaciasdeservico.net/localidade/portalegre/portalegre"
                >
                  <span style={{ backgroundColor: "#a41a1a" }}></span>
                  Ver Farmácia de Serviço
                </Button>
              </div>
            )}
          </div>
          <div className="contact_content-contact">
            <Box
              image={<PhoneIcon size={40} />}
              title="Telefone"
              variant="quintenary"
            >
              <div className="wrapper_contact">
                <p onClick={handleCopyPhone} style={{ cursor: "pointer" }}>
                  +245 204 416
                </p>
              </div>
            </Box>
            <Box title="Email" image={<Email size={40} />} variant="quintenary">
              <div className="wrapper_contact">
                <p onClick={handleCopyEmail} style={{ cursor: "pointer" }}>
                  geral@outlook.com
                </p>
              </div>
            </Box>
          </div>
          <div className="contact_content-hour">
            <Box title="Horário de Funcionamento" variant="quintenary">
              <div className="contact_content-time">
                <p>Segunda a Sexta</p>
                <p> 09:00-19:00</p>
              </div>
              <div className="contact_content-time">
                <p>Sábado</p>
                <p>09:00-13:00</p>
              </div>
              <div className="contact_content-time">
                <p>Domingo</p>
                <p>Encerrado</p>
              </div>
            </Box>
          </div>
        </div>
      </section>
    </>
  );
}
