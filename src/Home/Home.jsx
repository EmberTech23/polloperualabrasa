import './Home.css'
import { Menu } from '../Menu/Menu'

export function Home() {

    return (
        <>
            <header>
                <Menu></Menu>
                <div className='banner'>
                    <img src="../../src/assets/img/juntos.png" alt="" className='img-fluid' />
                    <div className="w-100"></div>
                    <button className='btn botnmio fw-bold text-white '>Nuestro Menú</button>

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











        </>
    )
}