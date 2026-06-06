import './Navbar.css'
import logo from '../assets/logo.jpg'

function Navbar({ clientName, onBack }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">

          {/* الشعار */}
          <div className="navbar-logo-wrap">
            <img src={logo} alt="logo" className="navbar-logo-img" />
          </div>

          <div className="navbar-titles">
            <span className="navbar-name">DT. Omran Ali</span>
            <span className="navbar-sub">Dentist Lab</span>
          </div>
        </div>

        {clientName && (
          <div className="navbar-breadcrumb">
            <button className="navbar-back" onClick={onBack}>العملاء</button>
            <span className="navbar-sep">›</span>
            <span className="navbar-current">{clientName}</span>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar