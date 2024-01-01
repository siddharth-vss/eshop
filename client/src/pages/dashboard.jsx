
const Dashboard = () => {

  document.body.style.background = "#B2ABF2";

  return (
    <>
      <div className="sidebar">
      <div className="logo-details">
        <i className='bx bxl-c-plus-plus icon'></i>
        <div className="logo_name">CodingStella</div>
        <i className='bx bx-menu' id="btn"></i>
      </div>
      <ul className="nav-list">
        <li> JA NE CHODU
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..."/>
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-user'></i>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-chat'></i>
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-folder'></i>
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-cart-alt'></i>
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-heart'></i>
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <a href="/">
            <i className='bx bx-cog'></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z" alt="profileImg"/>
            <div className="name_job">
              <div className="name">Stella Army</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <i className='bx bx-log-out' id="log_out"></i>
        </li>
      </ul>
      <div>
      <section className="home-section">
      <div className="text">Dashboard</div>
      </section>
      </div>
      </div>
    </>
  )
}

export default Dashboard
