import './App.css'
import Sayings from './Sayings'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <section className="card border-0 shadow-sm rounded-5 overflow-hidden mb-4 bg-white bg-opacity-75 layout-top-panel">
        <div className="card-body p-4 p-lg-5 text-center">

          <div className="d-flex justify-content-center align-items-center gap-5 mb-4 flag-profile-wrapper">
            <div className="d-flex flex-column align-items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg"
                alt="Czech Flag"
                className="flag-icon rounded-circle shadow-sm"
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
              <div className="rounded-circle profile-pic-placeholder shadow-sm position-relative overflow-hidden bg-light" style={{ width: '140px', height: '140px' }}>
                <img src="images/Screenshot_20220813-213637_Facebook.jpg" className="rounded-circle position-absolute top-0 start-0" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div className="d-flex flex-column align-items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
                alt="Colombian Flag"
                className="flag-icon rounded-circle shadow-sm"
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
              <div className="rounded-circle profile-pic-placeholder shadow-sm position-relative overflow-hidden bg-light" style={{ width: '140px', height: '140px' }}>
                <img src="images/file.enc.jpg" className="rounded-circle position-absolute top-0 start-0" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div className="custom-user-text mx-auto" style={{ maxWidth: '700px' }}>
            <h1 className="display-5 fw-semibold mb-3 hero-title">Vašek & Elvira</h1>
            <p className="lead text-body-secondary">
              Best friends from different corners of the world, sharing laughs, stories and love. This is our little corner of the internet where we celebrate our friendship and the memories we create together.
            </p>
          </div>

        </div>
      </section>

      <section className="hero-card card border-0 shadow-lg rounded-5 overflow-hidden mb-4">
        <div className="card-body p-4 p-lg-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span className="eyebrow badge rounded-pill text-bg-light mb-3">
                Our Little Corner of the Internet
              </span>
              <p className="text-body-secondary mb-4">
                A cozy spot for memories, shared jokes, and the calm moments we share together. 
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="pill-card">
                  <span className="pill-label">Friendship</span>
                  <span className="pill-value">Strong & For Ever</span>
                </div>
                <div className="pill-card">
                  <span className="pill-label">Vibe</span>
                  <span className="pill-value">Warm, Cozy, Bright</span>
                </div>
                <div className="pill-card">
                  <span className="pill-label">Plans</span>
                  <span className="pill-value">More Stories Soon</span>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <span className="soft-tag">Chats</span>
                <span className="soft-tag">Long Talks</span>
                <span className="soft-tag">Good Energy</span>
                <span className="soft-tag">Shared Playlists</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="placeholder-stack">
                <div className="photo-slot photo-slot-large">
                  <img src="images/Screenshot_20250613-190920_WhatsApp.jpg" alt="Me" className="rounded shadow-sm" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4 mt-1">
        <div className="col-lg-6">
          <div className="card cozy-panel border-0 shadow-sm rounded-5 h-100">
            <div className="card-body p-4 p-lg-5">
              <p className="section-kicker mb-2">About Vašek</p>
              <h2 className="h3 mb-3">El Señor Bromista</h2>
              <p className="text-body-secondary mb-0">
                I&apos;m a guy who loves to make people laugh and also the one who sent the first message to Elvira. Long story short, I&apos;m a student, IT enthusiast, and a friend who values the connections I make along the way. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card cozy-panel border-0 shadow-sm rounded-5 h-100">
            <div className="card-body p-4 p-lg-5">
              <p className="section-kicker mb-2">About Elvira</p>
              <h2 className="h3 mb-3">La Señora Enojona</h2>
              <p className="text-body-secondary mb-0">
                Elvira is a wonderful friend from Colombia who has a great sense of humor and a warm heart. She is the one who keeps me grounded and always knows how to make me smile. Her friendship means the world to me, and I&apos;m grateful for every moment we share together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="card cozy-panel border-0 shadow-sm rounded-5 mt-4 gallery-panel">
        <div className="card-body p-4 p-lg-5">
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
            <div>
              <p className="section-kicker mb-2">Photo Wall</p>
              <h2 className="h3 mb-0">Empty Frames for Pictures to Come</h2>
            </div>
            <span className="small text-body-secondary">All placeholders ready</span>
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="photo-slot photo-slot-gallery">
                <img src="images/20221227_203328.jpg" alt="Me" className="rounded shadow-sm" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="photo-slot photo-slot-gallery">
                <img src="images/IMG-20260701-WA0004.jpg" alt="Elvira" className="rounded shadow-sm" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="photo-slot photo-slot-gallery">
                <img src="images/Screenshot_20251220-095843_Instagram.jpg" alt="Memory 1" className="rounded shadow-sm" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="card cozy-panel border-0 shadow-sm rounded-5 mt-4">
      <div className="card-body p-4 p-lg-5">
        <p className="section-kicker mb-2">About</p>
        <h2 className="h3 mb-3">About This Site</h2>
        <p className="text-body-secondary mb-0">
          This page stores memories, photos, and funny sayings. Use the navigation above to switch between sections.
        </p>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-screen tropical-vibe">
      <div className="cozy-orb cozy-orb-one" aria-hidden="true" />
      <div className="cozy-orb cozy-orb-two" aria-hidden="true" />

      <nav className="navbar navbar-expand-lg bg-white bg-opacity-75 backdrop-blur shadow-sm sticky-top navbar-cozy">
        <div className="container">
          <NavLink className="navbar-brand fw-semibold text-success" to="/">🌴 Me & Elvira</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/funny-sayings">
                  Funny Sayings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-5 position-relative flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/funny-sayings" element={<Sayings />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="bg-white bg-opacity-75 backdrop-blur border-top py-4 mt-5 text-center text-body-secondary">
        <div className="container">
          <p className="mb-1">Made with ☕ and 🇨🇴 🇨🇿 vibe</p>
          <small>&copy; {new Date().getFullYear()} Me & Elvira</small>
        </div>
      </footer>
    </div>
  );
}

export default App;