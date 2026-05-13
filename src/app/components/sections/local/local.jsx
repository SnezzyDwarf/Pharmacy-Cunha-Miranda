import "./Local.css";

import ArrowIcon from "../../../../assets/ui/ArrowIcon";
import Box from "../../ui/box/box";
import Button from "../../ui/button/button";
import PinLogo from "../../../../assets/ui/PinLogo";

export default function Local() {
  return (
    <>
      <section id="local" className="section_local">
        <div className="local_content">
          <div className="local_content_text">
            <h2>Onde Estamos</h2>
            <p>
              Visite-nos na nossa localização privilegiada no centro de
              Portalegre
            </p>
          </div>
          <div className="local_content-box">
            <div className="local_content-box_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.330130081633!2d-7.4301319999999995!3d39.28076310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd17bd7b2baeb085%3A0x44aa1709b352e27c!2sFarm%C3%A1cia%20Cunha%20Miranda!5e0!3m2!1sen!2spt!4v1776974934899!5m2!1sen!2spt"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="local_content-box_map-content">
              <div>
                <Box
                  image={<PinLogo size={60} />}
                  title="Morada"
                  variant="quartenary"
                >
                  <p>
                    Rua Coronel Jorge Velez Caroço bloco 8 A/B Cave Largo
                    Professor Jaime Belém, Bairro dos Assentos 21, 7300-030
                    Portalegre
                  </p>
                </Box>
              </div>

              <div className="local_content-box_map-content-btn">
                <Button
                  to="https://maps.app.goo.gl/7ZVDdynygveK8VJu9"
                  variant="secondary"
                >
                  <ArrowIcon />
                  Como Chegar
                </Button>
                <Button variant="tertiary">
                  Estacionamento nas proximidades
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
