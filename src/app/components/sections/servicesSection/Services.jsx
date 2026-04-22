import "./Services.css";

import BandageIcon from "../../../../assets/ui/BandageIcon";
import Box from "../../ui/box/box";
import BottleIcon from "../../../../assets/ui/BottleIcon";
import Stethoscope from "../../../../assets/ui/Sethoscope";
import TestIcon from "../../../../assets/ui/TestIcon";
import Prepared from "../../../../assets/ui/Prepared";

export default function Services() {
  return (
    <>
      <section className="services_section">
        <div className="services_content">
          <div className="services_content-text">
            <h2>Serviços</h2>
            <p>
              Disponibilizamos uma gama completa de serviços farmacêuticos para
              garantir o seu bem-estar e saúde.
            </p>
          </div>
          <div className="services_content-grid">
            <div>
              <Box
                image={<BandageIcon size={70} />}
                title="Medicamentos"
                variant="secondary"
              >
                <p>
                  Vasta gama de medicamentos de prescrição e não sujeitos a
                  receita médica
                </p>
              </Box>
            </div>
            <div>
              <Box
                image={<Stethoscope size={70} />}
                title="Aconselhamento Farmacêutico"
                variant="secondary"
              >
                <p>Orientação profissional sobre medicação e tratamentos</p>
              </Box>
            </div>
            <div>
              <Box
                image={<BandageIcon size={70} />}
                title="Exames de Rotina"
                variant="secondary"
              >
                <p>Tensão arterial, glicemia e temperatura corporal</p>
              </Box>
            </div>
            <div>
              <Box
                image={<BottleIcon size={70} />}
                title="Dermocosméticos"
                variant="secondary"
              >
                <p>
                  Produtos de beleza e cuidados dermatológicos especializados
                </p>
              </Box>
            </div>
            <div>
              <Box
                image={<Prepared size={70} />}
                title="Preparação de Medicamentos"
                variant="secondary"
              >
                <p>Manipulação e preparação personalizada</p>
              </Box>
            </div>
            <div>
              <Box
                title="Testes Rápidos"
                image={<TestIcon size={70} />}
                variant="secondary"
              >
                <p>Testes de diagnóstico rápido e análises clínicas</p>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
