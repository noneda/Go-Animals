import React, { useEffect, useRef } from 'react';
import RealTimeClock from '../../components/Real Time'


const Home = () => {
  const listViewRef = useRef(null);
  const gridViewRef = useRef(null);
  const projectsListRef = useRef(null);

  useEffect(() => {
    const listView = listViewRef.current;
    const gridView = gridViewRef.current;
    const projectsList = projectsListRef.current;

    const handleListViewClick = () => {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    };

    const handleGridViewClick = () => {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    };

    listView.addEventListener('click', handleListViewClick);
    gridView.addEventListener('click', handleGridViewClick);

    return () => {
      listView.removeEventListener('click', handleListViewClick);
      gridView.removeEventListener('click', handleGridViewClick);
    };
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <p>Pet Store</p>
        <p className="time"><RealTimeClock/></p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">45</span>
            <span className="status-type">Comida</span>
          </div>
          <div className="item-status">
            <span className="status-number">24</span>
            <span className="status-type">Higiene</span>
          </div>
          <div className="item-status">
            <span className="status-number">62</span>
            <span className="status-type">Ropa</span>
          </div>
        </div>
        <div className="view-actions">
          <button
            className="view-btn list-view"
            title="List View"
            ref={listViewRef}
          >
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
              className="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            className="view-btn grid-view active"
            title="Grid View"
            ref={gridViewRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-boxes jsGridView" ref={projectsListRef}>
        <div className="project-box-wrapper">

          <div className="project-box" style={{ backgroundColor: "#fee4cb" }}>
            <div className="project-box-header">
              <span>Producto</span>
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
              <p className="box-content-header">Nombre del Producto</p>
              <p className="box-content-subheader">Tipo de Animal</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Canitdad</p>
              <div className="box-progress-bar">
                <span
                  className="box-progress"
                  style={{ width: "20%", backgroundColor: "#ff942e" }}
                ></span>
              </div>
              <p className="box-progress-percentage">5 Unidades</p>
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
                Lote
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
