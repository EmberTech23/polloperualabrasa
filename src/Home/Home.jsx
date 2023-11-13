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
      <div className="contenedorpollo container-fluid">
        <div className="row">
          <div className="pollobrasa col-6">
            <p className=" textoproductosparatodos">PRODUCTOS PARA TODOS </p>
          </div>
          <div className="diezanos img-fluid col-6 bg-black"></div>
        </div>
        <div className="separadorimagenes"></div>
        <div className="row">
          <div className="video col-6 text-center" >
            <video autoPlay loop muted className="video-background img-fluid">
              <source src="../../src/assets/videos/videopolloasado.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="arrozypollo col-12"></div>
              <div className="separadorimagenes"></div>
              <div className="ceviches col-12">!</div>
            </div>
          </div>
        </div>
        <div className="separadorimagenes"></div>
        <div className="row">
          <div className="postresuno col-3"></div>
          <div className="postresdos col-3"></div>
            <div className="postrestres col-3"></div>
            <div className="postrescuatro col-3"></div>
          
        </div>
      </div>

      <footer>
        <div className="containerfooter">
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




