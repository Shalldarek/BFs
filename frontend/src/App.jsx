import './App.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-screen tropical-vibe">
      <div className="cozy-orb cozy-orb-one" aria-hidden="true" />
      <div className="cozy-orb cozy-orb-two" aria-hidden="true" />

      <nav className="navbar navbar-expand-lg bg-white bg-opacity-75 backdrop-blur shadow-sm sticky-top navbar-cozy">
        <div className="container">
          <a className="navbar-brand fw-semibold text-success" href="#">🌴 Me & Elvira</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Funny Sayings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-5 position-relative flex-grow-1">

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
                <div className="rounded-circle profile-pic-placeholder shadow-sm d-flex align-items-center justify-content-center bg-light" style={{ width: '100px', height: '100px' }}>
                  <span className="fw-medium text-secondary">Já</span>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
                  alt="Colombian Flag"
                  className="flag-icon rounded-circle shadow-sm"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
                <div className="rounded-circle profile-pic-placeholder shadow-sm d-flex align-items-center justify-content-center bg-light" style={{ width: '100px', height: '100px' }}>
                  <span className="fw-medium text-secondary">Elvira</span>
                </div>
              </div>
            </div>

            {/* !!! SEM DÁŠ SVŮJ VLASTNÍ TEXT !!! */}
            <div className="custom-user-text mx-auto" style={{ maxWidth: '700px' }}>
              <h1 className="display-5 fw-semibold mb-3 hero-title">Me & Elvira</h1>
              <p className="lead text-body-secondary">
                Sem vepiš svůj vlastní text. Může to být uvítání, váš oblíbený citát nebo krátký příběh o tom, jak jste se poznali. Prostor je tvůj!
              </p>
            </div>

          </div>
        </section>

        <section className="hero-card card border-0 shadow-lg rounded-5 overflow-hidden mb-4">
          <div className="card-body p-4 p-lg-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <span className="eyebrow badge rounded-pill text-bg-light mb-3">
                  My Little Corner of the World
                </span>
                <p className="text-body-secondary mb-4">
                  A cozy spot for memories, shared jokes, and the calm moments I share with my Colombian friend, Elvira.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="pill-card">
                    <span className="pill-label">Friendship</span>
                    <span className="pill-value">Strong & Easy</span>
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
                  <span className="soft-tag">Coffee Chats</span>
                  <span className="soft-tag">Long Talks</span>
                  <span className="soft-tag">Good Energy</span>
                  <span className="soft-tag">Shared Playlists</span>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="placeholder-stack">
                  <div className="photo-slot photo-slot-large">
                    <span>Photo Coming Soon</span>
                  </div>
                  <div className="row g-3 mt-0">
                    <div className="col-6">
                      <div className="photo-slot photo-slot-small">
                        <span>Blank Image</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="photo-slot photo-slot-small">
                        <span>Blank Image</span>
                      </div>
                    </div>
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
                <p className="section-kicker mb-2">About Me</p>
                <h2 className="h3 mb-3">The One Building Memories</h2>
                <p className="text-body-secondary mb-0">
                  This space is for the simple details that matter: kind moments, funny conversations, and the kind of friendship that feels effortless.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card cozy-panel border-0 shadow-sm rounded-5 h-100">
              <div className="card-body p-4 p-lg-5">
                <p className="section-kicker mb-2">About Elvira</p>
                <h2 className="h3 mb-3">My Colombian Friend</h2>
                <p className="text-body-secondary mb-0">
                  Elvira brings the bright side of every conversation. I'm leaving this page ready for photos, stories, and anything else we want to add later.
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
                  <span>Insert Image Here</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="photo-slot photo-slot-gallery">
                  <span>Insert Image Here</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="photo-slot photo-slot-gallery">
                  <span>Insert Image Here</span>
                </div>
              </div>
            </div>
          </div>
        </section>
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