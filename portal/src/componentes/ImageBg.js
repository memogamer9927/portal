import React from 'react';
import '../App.css' ;
import HeaderContent from './HeaderContent';
import ContenedorCartaTabla from './ContenedorCartaTabla';
import ComponentePaginacion from './ComponentePaginacion';



const Imagenbg = () => {
    return (
        <div className='montain'>
            <HeaderContent/>
            <ContenedorCartaTabla/>
            <ComponentePaginacion/>
        </div>
    );
}

export default Imagenbg;