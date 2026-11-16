import { useEffect, useState } from 'react';

const navItems = [
  { index: '01', label: 'Home', href: '#home', target: 'home' },
  { index: '02', label: 'Manual', href: '#manual', target: 'manual' },
  { index: '03', label: 'Leads', href: '#leads', target: 'leads' },
  { index: '04', label: 'Pipeline', href: '#pipeline', target: 'pipeline' },
  { index: '05', label: 'Assets', href: '#assets', target: 'assets' },
  { index: '06', label: 'Pilot', href: '#pilot', target: 'pilot' },
  { index: '07', label: 'Operators', href: '#operators', target: 'operators' },
];

const navLabelByTarget = {
  home: 'Home',
  manual: 'Manual',
  leads: 'Leads',
  pipeline: 'Pipeline',
  assets: 'Assets',
  pilot: 'Pilot',
  operators: 'Operators',
};

const tourSteps = [
  {
    target: 'manual',
    title: 'Start with the Manual',
    description: 'Learn what the Group offers, what it never promises, how to handle objections, and when to hand a conversation to Admin.',
  },
  {
    target: 'leads',
    title: 'Review individual leads',
    description: 'Search prospects, filter by stage, and open a lead record before moving to the pipeline board.',
  },
  {
    target: 'pipeline',
    title: 'Work the pipeline',
    description: 'Review prospects by their fixed stage and open any card to return to its lead record.',
  },
  {
    target: 'assets',
    title: 'Share approved assets',
    description: 'Use these Group links to introduce the doctrine, Method, and access path. Do not add performance claims.',
  },
  {
    target: 'pilot',
    title: 'Review the pilot',
    description: 'The scoreboard summarizes logged outreach and paid outcomes. Treat rates as directional, not promises.',
  },
  {
    target: 'operators',
    title: 'Follow operator rules',
    description: 'Prospecting uses the same manual, stages, and scripts. Admin controls participation and exceptions.',
  },
  {
    target: 'home',
    title: 'Return to your desk',
    description: 'The home view brings next actions and pipeline context together. Use the side menu to move between work areas at any time.',
  },
];

const metricCards = [
  { label: 'Pipeline', value: '128', detail: 'Prospects in motion' },
  { label: 'Follow-ups', value: '34', detail: 'Due in the next 7 days' },
  { label: 'Seat value', value: '$1.9M', detail: 'Weighted opportunity value' },
  { label: 'Pilot', value: '20%', detail: 'Rev-share baseline for Harry' },
];

const nextActions = [
  { name: 'Ari Sol', due: 'Today', status: 'Seat conversation', owner: 'Harry' },
  { name: 'Mina Park', due: 'Tomorrow', status: 'Method shared', owner: 'Admin' },
  { name: 'Dorian Vale', due: 'Thu', status: 'Close or clean no', owner: 'Operator' },
];

const pipelineStages = [
  {
    label: 'New',
    leads: [
      { name: 'Ari Sol', channel: 'IG', temp: 'Warm', value: '$15k' },
      { name: 'Leah Rowan', channel: 'Referral', temp: 'Cold', value: '$15k' },
    ],
  },
  {
    label: 'Contacted',
    leads: [
      { name: 'Mina Park', channel: 'X', temp: 'Warm', value: '$15k' },
    ],
  },
  {
    label: 'Site / doctrine shared',
    leads: [
      { name: 'Dorian Vale', channel: 'Event', temp: 'Hot', value: '$15k' },
      { name: 'Nico Sato', channel: 'Other', temp: 'Cold', value: '$15k' },
    ],
  },
  {
    label: 'Method shared',
    leads: [
      { name: 'Tess Moran', channel: 'IG', temp: 'Warm', value: '$15k' },
    ],
  },
  {
    label: 'Seat conversation',
    leads: [
      { name: 'Iris Quinn', channel: 'Referral', temp: 'Hot', value: '$15k' },
    ],
  },
  {
    label: 'Closed — won',
    leads: [
      { name: 'Sofia Laurent', channel: 'Warm intro', temp: 'Hot', value: '$15k' },
    ],
  },
];

const leadRecords = pipelineStages.flatMap((stage) =>
  stage.leads.map((lead) => ({ ...lead, stage: stage.label, owner: 'Harry' })),
);

const manualSections = [
  {
    title: 'Who we are',
    bullets: [
      'Operators. Not spectators.',
      'Independent desks bound by shared law.',
      'Built for disciplined work across markets, systems, and tools.',
    ],
  },
  {
    title: 'What we sell',
    bullets: [
      'Desk Access / Statecraft seat at $15k default.',
      'Access to Method, Group standard, and desk surfaces.',
      'Clear education and process — not managed returns.',
    ],
  },
  {
    title: 'What we never sell',
    bullets: [
      'Trade signals as a product.',
      'Guaranteed profit or “we’ll get you paid.”',
      'Pyramid / ticket / passive referral schemes.',
      'Custom fantasy terms without Admin approval.',
    ],
  },
  {
    title: 'Ideal operator profile',
    bullets: [
      'Capacity to engage process.',
      'Can fund the seat without desperation.',
      'Wants standard and review, not hype.',
      'Red flags: urgency to deposit name/address for vague payouts; only cares about tips; refuses doctrine.',
    ],
  },
  {
    title: 'Conversation arc',
    bullets: [
      'Open: short, doctrine-native.',
      'Point at Group site.',
      'If serious → Method.',
      'Seat conversation → Access + price + what they get / don’t get.',
      'Close or clean no — no begging.',
    ],
  },
  {
    title: 'Talk tracks',
    bullets: [
      'First touch (warm)',
      'First touch (cold / light outbound)',
      'After they view site',
      'Price objection',
      '“Is this a signal group?”',
      '“Can I start smaller?”',
      '“Send proof / returns”',
      'Close ask',
      'Clean no / nurture',
    ],
  },
  {
    title: 'Objection map',
    bullets: [
      'Price → value is process + seat, not a course upsell ladder.',
      'Proof → point at Method, doctrine, live desks; no performance guarantees.',
      'Trust → process and written terms, not personality.',
    ],
  },
  {
    title: 'Handoff rules',
    bullets: [
      'Escalate to Admin: institutional size, legal structure questions, any price change, anything that smells like investment contract.',
      'Closer never invents offers.',
    ],
  },
  {
    title: 'Compliance lines',
    bullets: [
      'Not investment advice.',
      'Past process ≠ future results.',
      'Operator owns risk.',
      'No pressure close; capacity first.',
    ],
  },
  {
    title: 'Pilot closer rules (Harry)',
    bullets: [
      'Rev share only on closed, paid seats they originated (range 15–25%; Admin sets exact %).',
      '30–45 day pilot then review.',
      'Every touch logged in Continuum.',
      'Scripts from manual only.',
    ],
  },
];

const assetCards = [
  { title: 'Group home', description: 'Kurogami Group overview and doctrine', url: 'https://www.kurogamigroup.com' },
  { title: 'Doctrine', description: 'Process before outcome and risk ownership', url: 'https://www.kurogamigroup.com' },
  { title: 'Statecraft Method', description: 'Seat and desk discipline framework', url: 'https://www.kurogamigroup.com' },
  { title: 'Official Access', description: 'Desk Access request and seat onboarding', url: 'https://www.kurogamigroup.com' },
];

const pilotRows = [
  { closer: 'Harry', touches: 52, conversations: 19, methodShares: 13, seatConversations: 8, won: 4, revenue: '$60k', rate: '31%' },
  { closer: 'Mila', touches: 39, conversations: 12, methodShares: 9, seatConversations: 5, won: 2, revenue: '$30k', rate: '18%' },
  { closer: 'Ike', touches: 24, conversations: 9, methodShares: 7, seatConversations: 4, won: 1, revenue: '$15k', rate: '12%' },
];

const operatorRules = [
  'Same manual, same stages, same assets.',
  'Leads attributed to the operator.',
  'Same ban on inventing offers.',
  'Admin can revoke prospecting instantly.',
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isStartScreenOpen, setIsStartScreenOpen] = useState(true);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [tourStep, setTourStep] = useState(null);
  const [isTourCardHidden, setIsTourCardHidden] = useState(false);
  const [activeNav, setActiveNav] = useState(
    () => navItems.find((item) => item.href === window.location.hash)?.label ?? 'Home',
  );
  const [manualTab, setManualTab] = useState(0);
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStageFilter, setLeadStageFilter] = useState('All stages');
  const [selectedLeadName, setSelectedLeadName] = useState(null);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 1100);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isGuideOpen || isStartScreenOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGuideOpen, isStartScreenOpen]);

  useEffect(() => {
    if (tourStep === null) return;

    const step = tourSteps[tourStep];
    setActiveNav(navLabelByTarget[step.target]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tourStep]);

  const beginOrientation = () => {
    setIsGuideOpen(false);
    setIsTourCardHidden(false);
    setTourStep(0);
  };

  const startWorkspace = () => {
    setIsStartScreenOpen(false);
    setIsGuideOpen(true);
  };

  const goToTourStep = (step) => {
    if (step < 0 || step >= tourSteps.length) {
      setTourStep(null);
      return;
    }

    setIsTourCardHidden(false);
    setTourStep(step);
  };

  const handleNavClick = (event, item) => {
    event.preventDefault();
    setTourStep(null);
    setActiveNav(item.label);
    window.history.replaceState(null, '', item.href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLead = (name) => {
    setSelectedLeadName(name);
    setTourStep(null);
    setActiveNav('Leads');
    window.history.replaceState(null, '', '#leads');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredLeadRecords = leadRecords.filter((lead) => {
    const matchesQuery = `${lead.name} ${lead.channel} ${lead.stage}`.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStage = leadStageFilter === 'All stages' || lead.stage === leadStageFilter;
    return matchesQuery && matchesStage;
  });
  const selectedLead = leadRecords.find((lead) => lead.name === selectedLeadName);

  const isTourTarget = (target) => tourStep !== null && tourSteps[tourStep].target === target;

  return (
    <div className="workspace-frame">
      {isStartScreenOpen && (
        <div
          className={`launch-screen ${isLoading ? 'booting' : 'ready'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="launch-title"
        >
          <div className="launch-hud launch-hud-top">
            <span>KG / FLIGHT SYSTEMS</span>
            <span>SECTOR 001 · GROUP SPACE</span>
          </div>
          <div className="launch-orbit launch-orbit-outer" />
          <div className="launch-orbit launch-orbit-inner" />
          <div className="launch-crosshair" />
          <div className="launch-content">
            <div className="launch-mark">黒</div>
            <div className="launch-eyebrow">KUROGAMI GROUP · OPERATOR CONTINUUM</div>
            <h1 id="launch-title">Your desk is ready.</h1>
            <p className="launch-description">A clear view. A steady hand. Process before outcome.</p>
            <div className="launch-system-status" aria-live="polite">
              <span className={isLoading ? 'status-pulse' : ''} />
              {isLoading ? 'Calibrating navigation systems' : 'All systems nominal · Ready for departure'}
            </div>
            {isLoading ? (
              <div className="launch-progress" aria-label="Loading workspace">
                <span />
              </div>
            ) : (
              <button className="launch-button" type="button" onClick={startWorkspace}>
                Start Continuum <span>→</span>
              </button>
            )}
          </div>
          <div className="launch-hud launch-hud-bottom">
            <span>STANDARD / ACTIVE</span>
            <span>RISK / NAMED · BOUNDED · OWNED</span>
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="site-brand">
          <span className="site-mark">黒</span>
          <span className="site-brand-copy"><strong>KUROGAMI GROUP</strong><small>OPERATOR CONTINUUM</small></span>
        </div>
        <div className="system-status"><span /> GROUP OPERATIONS / ACTIVE</div>
      </header>

      <div className="app-shell">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="brand-mark">O</div>
            <div>
              <div className="sidebar-title">OPERATOR</div>
              <div className="sidebar-subtitle">CONTINUUM</div>
            </div>
          </div>
          <div className="nav-section">
            <div className="nav-label">Workspace</div>
            <nav className="nav-list" aria-label="Workspace navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item)}
                  className={`nav-item ${activeNav === item.label ? 'active' : ''}`}
                  aria-current={activeNav === item.label ? 'page' : undefined}
                >
                  <span className="nav-index">{item.index}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="profile-panel">
            <div className="avatar-mini">HA</div>
            <div>
              <div className="profile-name">Harry A.</div>
              <div className="profile-role">Closer · Pilot</div>
            </div>
          </div>
        </aside>

        <main className="main-panel">
          <div className="content-shell">
          <header className="main-header">
            <div className="bread">KUROGAMI / OPERATOR CONTINUUM / {activeNav.toUpperCase()}</div>
            <div className="header-tools">
              <span className="date-label">Admin view · Harry pilot</span>
              <button
                className="guide-button"
                type="button"
                onClick={() => {
                  setTourStep(null);
                  setIsTourCardHidden(false);
                  setIsGuideOpen(true);
                }}
              >
                Guide
              </button>
            </div>
          </header>

          <div className="page-view" hidden={activeNav !== 'Home'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>

          <section className={`dashboard-intro ${isTourTarget('home') ? 'tour-target' : ''}`} id="home">
            <div className="hero-topline">
              <span className="section-kicker">01 / OPERATOR CONTINUUM</span>
            </div>
            <div className="hero-head">
              <div>
                <h1>Operator Continuum</h1>
                <p>The Group’s prospecting and seat-conversion rail — process before outcome.</p>
                <p className="hero-doctrine">Doctrine: Process before outcome · Risk is named, bounded, and owned · The standard outlives the outcome.</p>
              </div>
              <a
                className="new-button"
                href="#pipeline"
                onClick={(event) => handleNavClick(event, navItems[3])}
              >
                + View pipeline
              </a>
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
              <span className="section-kicker">Today’s next actions</span>
              <span className="range-label">Select an action to review a lead</span>
            </div>

            <div className="action-list">
              {nextActions.map((action) => (
                <button
                  key={action.name}
                  className="action-row"
                  type="button"
                  onClick={() => openLead(action.name)}
                  aria-label={`Open lead record for ${action.name}, ${action.status}`}
                >
                  <div>
                    <div className="action-name">{action.name}</div>
                    <div className="action-meta">{action.owner}</div>
                  </div>
                  <div className="action-status">{action.status}</div>
                  <div className="action-due">{action.due}</div>
                </button>
              ))}
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Manual'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`manual-panel ${isTourTarget('manual') ? 'tour-target' : ''}`} id="manual">
            <div className="panel-header">
              <span className="section-kicker">Group Sales Manual</span>
              <span className="range-label">Training / section {String(manualTab + 1).padStart(2, '0')} of {String(manualSections.length).padStart(2, '0')}</span>
            </div>
            <div className="manual-layout">
              <nav className="manual-nav" aria-label="Manual sections">
                {manualSections.map((section, index) => (
                  <button
                    key={section.title}
                    className={`manual-tab ${manualTab === index ? 'active' : ''}`}
                    type="button"
                    aria-current={manualTab === index ? 'step' : undefined}
                    onClick={() => setManualTab(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
              <div className="manual-content">
                <article className="manual-card" key={manualSections[manualTab].title}>
                  <div className="manual-section-kicker">SECTION {String(manualTab + 1).padStart(2, '0')}</div>
                  <h3>{manualSections[manualTab].title}</h3>
                  <ul>
                    {manualSections[manualTab].bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
                <div className="manual-pager">
                  <span className="manual-up-next">
                    {manualTab < manualSections.length - 1
                      ? `Up next / ${manualSections[manualTab + 1].title}`
                      : 'Training complete / Continue to lead registry'}
                  </span>
                  <div className="manual-pager-actions">
                    <button
                      className="manual-previous"
                      type="button"
                      disabled={manualTab === 0}
                      onClick={() => setManualTab((current) => Math.max(0, current - 1))}
                    >
                      Previous
                    </button>
                    <button
                      className="manual-next"
                      type="button"
                      onClick={(event) => {
                        if (manualTab < manualSections.length - 1) {
                          setManualTab((current) => current + 1);
                        } else {
                          handleNavClick(event, navItems[2]);
                        }
                      }}
                    >
                      {manualTab < manualSections.length - 1
                        ? `Continue to ${manualSections[manualTab + 1].title}`
                        : 'Open lead registry'}
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Leads'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
            <section className={`leads-panel ${isTourTarget('leads') ? 'tour-target' : ''}`} id="leads">
              <div className="panel-header">
                <span className="section-kicker">Lead registry</span>
                <span className="range-label">{filteredLeadRecords.length} records / select a lead for details</span>
              </div>
              <div className="leads-toolbar">
                <label className="lead-search">
                  <span>Search leads</span>
                  <input
                    type="search"
                    value={leadSearch}
                    onChange={(event) => setLeadSearch(event.target.value)}
                    placeholder="Name, channel, or stage"
                  />
                </label>
                <label className="lead-stage-filter">
                  <span>Stage</span>
                  <select value={leadStageFilter} onChange={(event) => setLeadStageFilter(event.target.value)}>
                    <option>All stages</option>
                    {pipelineStages.map((stage) => <option key={stage.label}>{stage.label}</option>)}
                  </select>
                </label>
              </div>
              <div className="leads-workspace">
                <div className="lead-registry">
                  {filteredLeadRecords.length > 0 ? filteredLeadRecords.map((lead) => (
                    <button
                      key={lead.name}
                      className={`lead-registry-row ${selectedLeadName === lead.name ? 'active' : ''}`}
                      type="button"
                      onClick={() => setSelectedLeadName(lead.name)}
                    >
                      <span className="lead-registry-name">{lead.name}</span>
                      <span className="lead-registry-stage">{lead.stage}</span>
                      <span className="lead-registry-source">{lead.channel} · {lead.temp}</span>
                      <span className="lead-value">{lead.value}</span>
                    </button>
                  )) : (
                    <div className="lead-empty-state">No leads match those filters.</div>
                  )}
                </div>
                {selectedLead ? (
                  <aside className="lead-detail-card" aria-live="polite">
                    <div className="lead-detail-kicker">LEAD RECORD / ACTIVE</div>
                    <h2>{selectedLead.name}</h2>
                    <div className="lead-detail-stage">{selectedLead.stage}</div>
                    <dl className="lead-detail-fields">
                      <div><dt>Channel</dt><dd>{selectedLead.channel}</dd></div>
                      <div><dt>Owner</dt><dd>{selectedLead.owner}</dd></div>
                      <div><dt>Temperature</dt><dd>{selectedLead.temp}</dd></div>
                      <div><dt>Seat value</dt><dd>{selectedLead.value}</dd></div>
                    </dl>
                    <button className="lead-detail-close" type="button" onClick={() => setSelectedLeadName(null)}>
                      Close record
                    </button>
                  </aside>
                ) : (
                  <div className="lead-detail-empty">
                    <span className="empty-crosshair">+</span>
                    <strong>Select a lead</strong>
                    <span>Lead details appear here.</span>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Pipeline'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`pipeline-panel ${isTourTarget('pipeline') ? 'tour-target' : ''}`} id="pipeline">
            <div className="panel-header">
              <span className="section-kicker">Pipeline</span>
              <span className="range-label">Fixed order</span>
            </div>
            <div className="kanban-grid">
              {pipelineStages.map((stage) => (
                <div key={stage.label} className="stage-column">
                  <div className="stage-header">{stage.label}</div>
                  <div className="stage-list">
                    {stage.leads.map((lead) => (
                      <button key={lead.name} className="lead-card" type="button" onClick={() => openLead(lead.name)}>
                        <div className="lead-head">
                          <span>{lead.name}</span>
                          <span className="lead-value">{lead.value}</span>
                        </div>
                        <div className="lead-row">
                          <span>{lead.channel}</span>
                          <span>{lead.temp}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Assets'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`assets-panel ${isTourTarget('assets') ? 'tour-target' : ''}`} id="assets">
            <div className="panel-header">
              <span className="section-kicker">Assets</span>
              <span className="range-label">Pre-approved copy</span>
            </div>
            <div className="asset-grid">
              {assetCards.map((asset) => (
                <article key={asset.title} className="asset-card">
                  <div className="asset-label">{asset.title}</div>
                  <p>{asset.description}</p>
                  <a href={asset.url} target="_blank" rel="noreferrer">View asset</a>
                </article>
              ))}
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Pilot'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`pilot-panel ${isTourTarget('pilot') ? 'tour-target' : ''}`} id="pilot">
            <div className="panel-header">
              <span className="section-kicker">Pilot scoreboard</span>
              <span className="range-label">7d / 30d / full pilot</span>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Closer</th>
                    <th>Touches</th>
                    <th>Conversations</th>
                    <th>Method shares</th>
                    <th>Seat conversations</th>
                    <th>Closed won</th>
                    <th>Closed revenue</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {pilotRows.map((row) => (
                    <tr key={row.closer}>
                      <td>{row.closer}</td>
                      <td>{row.touches}</td>
                      <td>{row.conversations}</td>
                      <td>{row.methodShares}</td>
                      <td>{row.seatConversations}</td>
                      <td>{row.won}</td>
                      <td>{row.revenue}</td>
                      <td>{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Operators'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`operators-panel ${isTourTarget('operators') ? 'tour-target' : ''}`} id="operators">
            <div className="panel-header">
              <span className="section-kicker">Operator prospecting mode</span>
              <span className="range-label">Admin controlled</span>
            </div>
            <div className="operator-box">
              <div>
                <h3>Prospecting rules</h3>
                <ul>
                  {operatorRules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div className="compliance-box">
                <h4>Compliance lines</h4>
                <p>Not investment advice</p>
                <p>Past process ≠ future results</p>
                <p>Operator owns risk</p>
                <p>No pressure close; capacity first</p>
              </div>
            </div>
          </section>
          </div>

          <footer className="app-footer">
            Kurogami Group · Operator Continuum · Process before outcome · Education and process access only · Not investment advice
          </footer>
          </div>
        </main>
      </div>

      {isGuideOpen && (
        <div className="guide-backdrop">
          <section
            className="welcome-guide"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            aria-describedby="welcome-description"
          >
            <button
              className="guide-close"
              type="button"
              onClick={() => setIsGuideOpen(false)}
              aria-label="Close orientation guide"
            >
              ×
            </button>
            <div className="guide-symbol">黒</div>
            <div className="guide-eyebrow">OPERATOR CONTINUUM / ORIENTATION</div>
            <h1 id="welcome-title">Enter the workspace.</h1>
            <p id="welcome-description">
              Begin with the Group Sales Manual. It sets the standard for how we speak, qualify, and hand off every prospect.
            </p>
            <div className="welcome-steps">
              <span><b>01</b> Learn the standard</span>
              <span><b>02</b> Walk the workspace</span>
              <span><b>03</b> Put process before outcome</span>
            </div>
            <div className="welcome-actions">
              <button className="welcome-button" type="button" onClick={beginOrientation}>
                Begin manual training <span>→</span>
              </button>
              <button className="welcome-explore" type="button" onClick={() => setIsGuideOpen(false)}>
                Explore workspace
              </button>
            </div>
            <div className="guide-footnote">Education and process access only · Not investment advice</div>
          </section>
        </div>
      )}

      {tourStep !== null && !isTourCardHidden && (
        <aside className="tour-card" aria-live="polite" aria-label="Workspace guided tour">
          <div className="tour-card-top">
            <span className="guide-eyebrow">WORKSPACE WALKTHROUGH</span>
            <span className="tour-count">{String(tourStep + 1).padStart(2, '0')} / {String(tourSteps.length).padStart(2, '0')}</span>
            <button
              className="tour-hide"
              type="button"
              onClick={() => setIsTourCardHidden(true)}
              aria-label="Hide walkthrough panel"
            >
              ×
            </button>
          </div>
          <div className="tour-progress"><span style={{ width: `${((tourStep + 1) / tourSteps.length) * 100}%` }} /></div>
          <h2>{tourSteps[tourStep].title}</h2>
          <p>{tourSteps[tourStep].description}</p>
          <div className="tour-actions">
            <button className="tour-skip" type="button" onClick={() => setTourStep(null)}>End tour</button>
            <div>
              <button
                className="tour-secondary"
                type="button"
                disabled={tourStep === 0}
                onClick={() => goToTourStep(tourStep - 1)}
              >
                Back
              </button>
              <button
                className="tour-next"
                type="button"
                onClick={() => goToTourStep(tourStep + 1)}
              >
                {tourStep === tourSteps.length - 1 ? 'Finish' : 'Next'} <span>→</span>
              </button>
            </div>
          </div>
        </aside>
      )}
      {tourStep !== null && isTourCardHidden && (
        <button className="tour-reopen" type="button" onClick={() => setIsTourCardHidden(false)}>
          Show walkthrough · {tourStep + 1}/{tourSteps.length}
        </button>
      )}
    </div>
  );
}

export default App;
