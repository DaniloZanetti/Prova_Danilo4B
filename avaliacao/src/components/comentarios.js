import React from 'react'; 
import './comentarios.css'

const Comentarios = ({imagemperfil, nome, comentario}) => {
    return(
        <div className="card">
            <img src={imagemperfil} className='imagemperfil'/>
            <p className='nome'>{nome}</p>
            <p className='comentario'>{comentario}</p>
        </div>
    )
}

export default Comentarios