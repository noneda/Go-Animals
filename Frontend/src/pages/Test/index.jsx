import React from 'react';

const Prueba = () => {
    return (
        <div className="app-container">
            <div className="app-header">
                <div className="app-header-left">
                    <span className="app-icon"></span>
                    <p className="app-name">Portfolio</p>
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="M21 21l-4.35-4.35"></path>
                        </svg>
                    </div>
                </div>
                <div className="app-header-right">
                    <button className="mode-switch" title="Switch Theme">
                        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </button>
                    <button className="add-btn" title="Add New Project">
                        <svg className="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button className="notification-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                    </button>
                    <button className="profile-btn">
                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="Profile" />
                        <span>Aybüke C.</span>
                    </button>
                </div>
                <button className="messages-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                </button>
            </div>
            <div className="app-content">
                <div className="app-sidebar">
                    <a href="#" className="app-sidebar-link active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                    </a>
                    <a href="#" className="app-sidebar-link">
                        <svg className="link-icon feather feather-pie-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                        </svg>
                    </a>
                    <a href="#" className="app-sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </a>
                    <a href="#" className="app-sidebar-link">
                        <svg className="link-icon feather feather-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V15z" />
                        </svg>
                    </a>
                </div>
                <div className="projects-section">
                    <div className="projects-section-header">
                        <p>My projects</p>
                        <p className="time">December, 12</p>
                    </div>
                    <div className="projects-section-line">
                        <div className="projects-status">
                            <div className="item-status">
                                <span className="status-number">45</span>
                                <span className="status-type">In Progress</span>
                            </div>
                            <div className="item-status">
                                <span className="status-number">24</span>
                                <span className="status-type">Upcoming</span>
                            </div>
                            <div className="item-status">
                                <span className="status-number">62</span>
                                <span className="status-type">Total Projects</span>
                            </div>
                        </div>
                        <div className="view-actions">
                            <button className="view-btn list-view" title="List View">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <line x1="3" y1="6" x2="3.01" y2="6" />
                                    <line x1="3" y1="12" x2="3.01" y2="12" />
                                    <line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                            </button>
                            <button className="view-btn grid-view active" title="Grid View">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="project-boxes jsGridView">
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        <div className="project-box-wrapper">
                            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
                                <div className="project-box-header">
                                    <span>December 10, 2020</span>
                                    <div className="more-wrapper">
                                        <button className="project-btn-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
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
                                        <span className="box-progress" style={{ width: '60%', backgroundColor: '#ff942e' }}></span>
                                    </div>
                                    <p className="box-progress-percentage">60%</p>
                                </div>
                                <div className="project-box-footer">
                                    <div className="participants">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="participant" />
                                        <button className="add-participant" style={{ color: '#ff942e' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="days-left" style={{ color: '#ff942e' }}>2 Days Left</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Repeat similar project-box structure for other projects */}
                    </div>
                </div>
                <div className="messages-section">
                    <button className="messages-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                    </button>
                    <div className="projects-section-header">
                        <p>Client Messages</p>
                    </div>
                    <div className="messages">
                        <div className="message-box">
                            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="Profile" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Aybüke C.</div>
                                    <div className="star-checkbox">
                                        <input type="checkbox" id="star-1" />
                                        <label htmlFor="star-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <p className="message-line">Hey Alex! We need the final design for our client meeting.</p>
                                <p className="message-line time">Dec, 12</p>
                            </div>
                        </div>
                        {/* Repeat similar message-box structure for other messages */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prueba;
