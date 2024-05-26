import React, { useEffect, useRef } from 'react';
import RealTimeClock from '../../components/Real Time'; // Asegúrate de que el nombre del componente y la ruta sean correctos

import Box from '../../components/Box';
import { boxItems, statusItems } from '../../API/Items';

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
        <p>Productos</p>
        <p className='time'><RealTimeClock /> </p>
      </div>
      <div className="projects-section-line">
      <div className="projects-status">

      {statusItems.sorted.map((item, index) => (
            <div className="item-status" key={index}>
              <span className="status-number">{item.number}</span>
              <span className="status-type">{item.type}</span>
            </div>
          ))}

        </div>
        <div className="view-actions">
          <button ref={listViewRef} className="view-btn list-view" title="List View">
            <svg
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
          <button ref={gridViewRef} className="view-btn grid-view active" title="Grid View">
            <svg
              width="24"
              height="24"
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
      <div ref={projectsListRef} className="project-boxes jsGridView">
        {boxItems.get.map((item, index) => (
            <Box key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;
