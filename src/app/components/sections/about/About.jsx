//ui modules
import Box from "../../ui/box/box";

//css
import "./About.css";

//images
import HeartIcon from "../../../../assets/ui/HeartthIcon";
import AwardIcon from "../../../../assets/ui/AwardIcon";
import TeamIcon from "../../../../assets/ui/TeamIcon";

export default function About() {
  return (
    <>
      <section className="section_about">
        <div className="about_content">
          <div className="about_content-text">
            <h2>Sobre Nós</h2>
            <p>
              Somos uma farmácia de referência em Portalegre, comprometida em
              fornecer não apenas medicamentos,
              <br />
              mas também aconselhamento profissional e cuidados de saúde
              personalizados para toda a comunidade.
            </p>
          </div>

          <div className="about_content-grid">
            <div className="about_content-grid_box">
              <Box
                image={<HeartIcon size={50} />}
                alt="Imagem de um coração desenhado"
                title="Cuidado Personalizado"
              >
                <p>Atendimento atencioso e dedicado a cada cliente</p>
              </Box>
            </div>
            <div className="about_content-grid_box">
              <Box
                image={<AwardIcon size={50} />}
                alt="Medalha de premio desenho"
                title="Excelência"
              >
                <p>Mais de xx anos de experiência e confiança</p>
              </Box>
            </div>
            <div className="about_content-grid_box">
              <Box
                image={<TeamIcon size={50} />}
                alt="silhueta de uma equipa"
                title="Equipa Qualificada"
              >
                <p>Profissionais altamente capacitados e atualizados</p>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
