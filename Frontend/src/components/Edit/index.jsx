import { useState } from "react";

const ActionsBox = (props) => {
  const [isInfo , setInfo] = useState(
{
  Product : props.item.Product,
  Section: props.item.Section,
  Units: props.item.Units,
  Lote: props.item.Lote,
  Type: props.item.Lote,
  Value: props.item.Value,
}
  )
  const handleChange = () => {
    setInfo(
      ...isInfo,
      [e.target.Product],
      [e.target.Section],
      [e.target.Units],
      [e.target.Lote],
      [e.target.Type],
      [e.target.Value],

    )
  }

  return(props.trigger)  ? (
  <div className="ActionsBox">
    <div className="container">
      <div className="card cart">
        <div id="tile">
        <label className="title">{props.children}</label>
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
                    name="Product"
                    defaultValue={props.item.Product}
                    value={isInfo.Product}
                    onChange={handleChange}
                    required 
                    autoComplete="off"
                    />
                  <label htmlFor="name">Nombre</label>
                </div>
                <div className="Two">
                <div className="One">
                  <input 
                    type="text" 
                    name="Section"
                    required 
                    defaultValue={props.item.Section}
                    value={isInfo.Section}
                    onChange={handleChange}
                    autoComplete="off"
                    />
                  <label htmlFor="name">Seción</label>
                </div>
                <div className="One">
                  <input 
                    type="text" 
                    name="Type"
                    defaultValue={props.item.Type}
                    value={isInfo.Type}
                    onChange={handleChange}
                    required 
                    autoComplete="off"
                    />
                  <label htmlFor="name">Typo</label>
                </div>
                </div>
                <div className="One">
                  <input 
                    type="text"
                    name="Units"
                    defaultValue={props.item.Units} 
                    value={isInfo.Units}
                    onChange={handleChange}
                    required 
                    autoComplete="off"
                    />
                  <label htmlFor="name">Unidades</label>
                </div>
                <div className="Two">
                <div className="One">
                  <input 
                    type="text" 
                    name="Lote"
                    defaultValue={props.item.Lote}
                    value={isInfo.Lote}
                    onChange={handleChange}
                    required 
                    autoComplete="off"
                    />
                  <label htmlFor="name">Lote</label>
                </div>
                <div className="One">
                  <input 
                    type="text"
                    name="Value" 
                    defaultValue={props.item.Value}
                    value={isInfo.Value}
                    onChange={handleChange}
                    required 
                    autoComplete="off"
                    />
                  <label htmlFor="name">Precio</label>
                </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="card checkout">
        <div className="footer">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 14"
              className="svgIcon bin-top"
            >
              <g clipPath="url(#clip0_35_24)">
                <path
                  fill="black"
                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_35_24">
                  <rect fill="white" height="14" width="69"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 57"
              className="svgIcon bin-bottom"
            >
              <g clipPath="url(#clip0_35_22)">
                <path
                  fill="black"
                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_35_22">
                  <rect fill="white" height="57" width="69"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
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