const metricCards = [
  { label: 'Open prospects', value: '10', detail: '+3 touched this week' },
  { label: 'Walkthroughs booked', value: '2', detail: '2 in the pipeline' },
  { label: 'Access conveners', value: '2', detail: 'This month' },
  { label: 'Active directs', value: '1', detail: '11% of direct records active' },
];

const signalCards = [
  { title: 'Creator / streamer prospects', value: '7', detail: 'Creators 3 · Streamers 2 · Hybrid 2' },
  { title: 'Lives logged', value: '2', detail: 'Process entries attributed to live activity' },
  { title: 'Access from content / lives', value: '50%', detail: '1 of 2 recorded conversions' },
];

const queueItems = [
  { no: '01', title: 'Aya Tanaka', detail: 'Aya Tanaka: request is the next step', meta: 'FOLLOW-UP', status: '22d since touch' },
  { no: '02', title: 'Sofia Laurent', detail: 'Sofia Laurent selected an operator seat after the hosted live briefing.', meta: 'LIVE RECORD', status: '2h ago' },
];

function App() {
  return (
    <div className="workspace-frame">
      <div className="browser-bar">
        <div className="browser-left">
          <div className="traffic-lights">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="tab-group">
            <span className="tab active">New Project - Ver X</span>
            <span className="tab">RAIL</span>
            <span className="tab">GLITCH TV - Signal</span>
            <span className="tab">[Preview] README</span>
          </div>
        </div>
        <div className="browser-right">
          <span className="time-pill">Fri Oct 23 · 9:19 PM</span>
        </div>
      </div>

      <div className="app-shell">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="brand-mark">F</div>
            <div>
              <div className="sidebar-title">FORGE NETWORK</div>
              <div className="sidebar-subtitle">Distribution OS</div>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-label">Workspace</div>
            <nav className="nav-list">
              <button className="nav-item active">
                <span className="nav-index">01</span>
                <span>Home</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">02</span>
                <span>Prospecting</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">03</span>
                <span>Network</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">04</span>
                <span>Process</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">05</span>
                <span>Events</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">06</span>
                <span>Agents</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">07</span>
                <span>Standards</span>
              </button>
              <button className="nav-item">
                <span className="nav-index">08</span>
                <span>Seat Plan</span>
              </button>
            </nav>
          </div>

          <div className="profile-panel">
            <div className="avatar-mini">AV</div>
            <div>
              <div className="profile-name">Adrian Vale</div>
              <div className="profile-role">Operator seat</div>
            </div>
          </div>
        </aside>

        <main className="main-panel">
          <header className="main-header">
            <div className="bread">KUROGAMI / FORGE NETWORK</div>
            <div className="header-tools">
              <span className="date-label">Tuesday, October 20</span>
              <button className="guide-button">Guide</button>
            </div>
          </header>

          <section className="hero-panel">
            <div className="hero-topline">
              <span className="section-kicker">01 / FORGE NETWORK</span>
            </div>
            <div className="hero-head">
              <div>
                <h1>Operator Continuum</h1>
                <p>Process in. Distribution out. Agents next.</p>
              </div>
              <button className="new-button">+ New Prospect</button>
            </div>

            <div className="stats-grid">
              {metricCards.map((card) => (
                <article key={card.label} className="stat-card">
                  <span className="stat-label">{card.label}</span>
                  <span className="stat-value">{card.value}</span>
                  <span className="stat-detail">{card.detail}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="signal-panel">
            <div className="panel-header">
              <span className="section-kicker">Signal from created distribution</span>
              <span className="range-label">Last 7 days</span>
            </div>

            <div className="signal-grid">
              {signalCards.map((card) => (
                <article key={card.title} className="signal-card">
                  <span className="signal-title">{card.title}</span>
                  <span className="signal-value">{card.value}</span>
                  <span className="signal-detail">{card.detail}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="bottom-grid">
            <div className="queue-panel">
              <div className="panel-header compact">
                <span className="section-kicker">Priority queue</span>
                <button className="text-action">View process →</button>
              </div>

              <div className="queue-list">
                {queueItems.map((item) => (
                  <div key={item.title} className="queue-row">
                    <div className="queue-id">{item.no}</div>
                    <div className="queue-copy">
                      <span className="queue-title">{item.title}</span>
                      <span className="queue-detail">{item.detail}</span>
                    </div>
                    <div className="queue-meta">{item.meta}</div>
                    <div className="queue-status">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="activity-panel">
              <div className="panel-header compact">
                <span className="section-kicker">Live record</span>
                <button className="text-action">View process →</button>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-dot" />
                  <div>
                    <div className="activity-meta">
                      <span className="meta-tag">Access selected</span>
                      <span className="time">2h ago</span>
                    </div>
                    <p>Sofia Laurent selected an operator seat after the hosted live briefing.</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-dot" />
                  <div>
                    <div className="activity-meta">
                      <span className="meta-tag">Operator follow-up</span>
                      <span className="time">1d ago</span>
                    </div>
                    <p>The next review is queued against the handoff and creator access path.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
