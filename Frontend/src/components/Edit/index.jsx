import { useState } from "react";

const EditBox = (info, {closeModal}) => {
    const handleSave = () => {
        closeModal()
    }

    return(
<>
<div className="overlay"></div>
      <div className="modal">
        <h2>Editar Datos</h2>
        <label htmlFor="units">Units:</label>
        <input
          type="number"
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />
        <br />
        <label htmlFor="unitsL">UnitsL:</label>
        <input
          type="number"
          id="unitsL"
          value={unitsL}
          onChange={(e) => setUnitsL(e.target.value)}
        />+
        <br />
        <button onClick={handleSave}>Guardar</button>
      </div>
</>
    ); 
}

export default EditBox;