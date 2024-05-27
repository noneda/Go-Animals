import { useState } from "react";

const ActionsBox = (props) => {
  return(props.trigger)  ? (
<div className="ActionsBox">
<div className="container">
  <div className="card cart">
    <label className="title">Producto</label>
    <div className="steps">
      <div className="step">
        <div className="promo">
          <form className="form">
          <div className="inputGroup">
            <div className="One">
              <input 
                type="text" 
                required 
                autoComplete="off"
                />
              <label htmlFor="name">Nombre</label>
            </div>
            <div className="Two">
            <div className="One">
              <input 
                type="text" 
                required 
                autoComplete="off"
                />
              <label htmlFor="name">Seción</label>
            </div>
            <div className="One">
              <input 
                type="text" 
                required 
                autoComplete="off"
                />
              <label htmlFor="name">Typo</label>
            </div>
            </div>
            <div className="One">
              <input 
                type="text" 
                required 
                autoComplete="off"
                />
              <label htmlFor="name">Lote</label>
            </div>
          </div>
          </form>
        </div>
        <hr/>
      </div>
    </div>
  </div>

  <div className="card checkout">
    <div className="footer">
      <label className="price"></label>
      <button className="my-button">
       Guardar
      </button>
    </div>
  </div>
</div>
</div>
) : null;
}
export default ActionsBox;