const Box = (bg, Product ) => {
    return (
    <div className="project-box-wrapper">  
        <div className="project-box" style={{ backgroundColor: bg }}>
          <div className="project-box-header">
            <span>{Product}</span>
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
            <p className="box-content-header">Web Designing</p>
            <p className="box-content-subheader">Prototyping</p>
          </div>
          <div className="box-progress-wrapper">
            <p className="box-progress-header">Progress</p>
            <div className="box-progress-bar">
              <span
                className="box-progress"
                style={{ width: "60%", backgroundColor: "#ff942e" }}
              ></span>
            </div>
            <p className="box-progress-percentage">60%</p>
          </div>
          <div className="project-box-footer">
            <div className="participants">
              <button className="add-participant" style={{ color: "#ff942e" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div className="days-left" style={{ color: "#ff942e" }}>
              2 Days Left
            </div>
          </div>
        </div>
      </div>
    )
}

export default Box;