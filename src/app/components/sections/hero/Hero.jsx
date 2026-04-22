import Button from "../../ui/button/button";

import "./Hero.css";

import Logo from "../../../../assets/images/LOGO.png";

export default function Hero() {
  return (
    <>
      <section className="section_hero">
        <div className="hero_content">
          <img src={Logo} alt="" />
          <div className="hero_content-text">
            <h1>Farmácia Cunha Miranda</h1>
            <h2>A sua saúde é a nossa prioridade</h2>
            <p>
              Há mais de xx anos ao serviço da comunidade de Portalegre <br />
              Oferecendo cuidados e serviço de exelência com dedicaação e
              confiança
            </p>
          </div>
          <Button>Descubra mais</Button>
        </div>
      </section>
    </>
  );
}
