import { boxItems } from "../../API/Items";

const Box = ( ) => {
    return (
       boxItems.get.forEach((item , index) => {
        <div className="project-box" key={index} style={{ backgroundColor: item.backgroundFondo }}>
        <div className="project-box-header">
          <span> {item.Type} </span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-more-vertical"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">{item.Product}</p>
          <p className="box-content-subheader">{item.Section}</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Units</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{ width: '50%', backgroundColor: '#ff942e' }}></span>
          </div>
          <p className="box-progress-percentage">50%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <button className="add-participant" style={{ color: '#ff942e' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{ color: '#ff942e' }}>Lote</div>
        </div>
      </div>
       })
    )
}

export default Box;