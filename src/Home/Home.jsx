import "./Home.css";
import { Menu } from "../Menu/Menu";

export function Home() {
  return (
    <>
      <header>
        <Menu />
        <div className="container-fluid">
          <div className="row">
            <div className="primerfondo with-text col-12">
              <p>JUNTOS <br />
                SOMOS <br />
                PERUANIDAD</p>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div class="fab-container">
          <div class="fab shadow">
            <div class="fab-content">
              <span class="material-icons">
                <i class="bi bi-person-circle"></i>
              </span>
            </div>
          </div>

          <div class="sub-button shadow">
            <a href="google.com" target="_blank">
              <span class="material-icons">
                <i class="bi bi-telephone-fill"></i>
              </span>
            </a>
          </div>
          <div class="sub-button shadow">
            <a href="google.com" target="_blank">
              <span class="material-icons">
                <i class="bi bi-whatsapp fs-4"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div className="separadorimagenes"></div>

      <div className="container-fluid">
        <div className="row">
          <div className="pollobrasa col-6"></div>
          <div className="col-6 bg-dark text-white">
            <p>
            “Pollo Perú a la brasa" es un restaurante en Medellín, Colombia, inspirado en la rica tradición culinaria peruana. Surgió cuando un apasionado peruano, decidió compartir el auténtico sabor de su cultura, ofreciendo delicioso pollo asado y otros platos típicos. Aunque tuvo que regresar a su país natal, vendió el restaurante a nuevos dueños, quienes continuaron la tradición culinaria, fusionando la autenticidad de la cocina peruana con su propia creatividad. El restaurante se ha convertido en un lugar que celebra la herencia culinaria de Perú y se adapta a las nuevas tendencias gastronómicas.
            </p>
          </div>
        </div>
        <div className="separadorimagenes"></div>
        <div className="row">
          <div className="panchicharron col-6"></div>
          <div className="col-6">
            <div className="row">
              <div className="ceviche col-12"></div>
              <div className="postres col-12">!</div>
            </div>
          </div>
        </div>
        <div className="separadorimagenes"></div>
        <div className="row">
          <div className="empanada col-6"></div>
          <div className="arrozchaufa col-6"></div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              rerum quam, aperiam commodi cupiditate omnis adipisci illum
              doloribus totam amet.
            </div>
            <div className="col-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              cupiditate iure dolorem pariatur atque molestias adipisci quasi ad
              voluptate quibusdam?
            </div>
            <div className="col-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              deleniti delectus minima ipsa cumque ut. Reiciendis quod dolore
              magnam consequatur!
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

<div className=" col-1 align-self-center text-end">
  <p className="fw-bold textcolor-white">
    "En el corazón culinario de Medellín, la vibrante ciudad colombiana que
    siempre busca la excelencia gastronómica, se alza un verdadero emblema de la
    exquisitez peruana: 'Pollo Perú a la Brasa'. Este restaurante de renombre es
    la personificación de la tradición culinaria peruana fusionada con la
    innovación y creatividad local. En cada bocado de su exquisito pollo asado,
    se puede saborear la autenticidad de Perú, con sus raíces profundamente
    arraigadas en la rica tradición culinaria de la nación sudamericana. Un
    apasionado peruano, inspirado por el deseo de compartir los sabores de su
    tierra natal, encendió la llama de 'Pollo Perú a la Brasa' en Medellín.
    Aunque el destino lo llamó de vuelta a Perú, su legado perdura en manos de
    nuevos dueños que han continuado la misión de celebrar la autenticidad de la
    cocina peruana. La experiencia culinaria en 'Pollo Perú a la Brasa' es una
    invitación a un viaje sensorial inigualable. Es el lugar donde el pasado y
    el presente se encuentran en un banquete de sabores, y donde la tradición y
    la creatividad danzan en armonía en el corazón de Medellín."
  </p>
</div>;
