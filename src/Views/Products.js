import React from 'react';
import ItemListContainer from '../components/Body/ItemListContainer';

function Products() {
    return (
        <div className="products">
            <h2 className="titulo">PRODUCTOS</h2>
            <div className="aside-productos">
                <aside id="aside">
                    <h3>Filtro</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="todos"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Todos</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="botas"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Terror</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="zapatos"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Series</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="sandalias"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Mujeres</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="sandalias"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Hombres y niños</label>
                    </div>
                </aside>
                <section className="productos">
                    <ItemListContainer />
                </section>
            </div>
        </div>
    )
}

export default Products;
