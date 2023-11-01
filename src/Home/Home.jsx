import './Home.css'
import { Menu } from '../Menu/Menu' 

export function Home(){

    return(
            <>
                <header>

                    <Menu></Menu>

                </header>
                <div className='banner'>
                    <div className="container fw-bold text-white">
                        <h4>JUNTOS SOMOS</h4>
                        <h1>PERUANIDAD</h1>
                    </div>
                    <button className='btn'>Nuestro Menú</button>
                </div>


            
            </>
    )
}