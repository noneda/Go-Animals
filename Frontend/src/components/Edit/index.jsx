import { useState } from "react";

const ActionsBox = (props) => {
  return(props.trigger)  ? (
<div className="ActionsBox">
<div className="container">
  <div className="card cart">
    <div id="tile">
    <label className="title">Producto</label>
      <button className="Exit" onClick={() => props.setTrigger(false)}>
        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        <div className="text">Exit</div>
      </button>
    </div>

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