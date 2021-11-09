import React from 'react';
import { useState } from 'react';



const Video = ({title,dateAdded, thumbnail,channel,description}) => {
    const  [valoraciones, setValoraciones] =useState(0);
    const [ mostrar, setMostrar] =useState (true);


    const increment =( ) =>{
        setValoraciones(valoraciones+1)

    }
    const verDetalles =() =>{
        setMostrar (!mostrar)
    }
        return (
            <div className="video-container">
                <div className="video-image">
                  <img src={thumbnail} alt={title} />
                </div>
                
                <div className="video-info">
                  <h3>{title}</h3>
                  <p>Upload date: {dateAdded}</p>
                  <h4>Channel's Title: {channel}</h4>
                  <button onClick ={verDetalles}>Ver/Ocultar detalle</button>

                  {
                      mostrar &&
                    <>

                  
                
                  <p>{description}</p>
                  

                  </>
                  
                  }
                  <p>{valoraciones} me gustas<button onClick ={increment}> Me Gusta</button></p>

                </div>
            </div>
            );
    
}

export default Video;