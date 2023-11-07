import React from 'react'; 
import './post.css'

const Post = ({titulo, imagem,descricao, categoria}) => {
    return(
        <div className="card1">
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} className='imagem'/>
            <p className='descricao'>{descricao}</p>
            <p className='categoria'>{categoria}</p>
        </div>
    )
}

export default Post