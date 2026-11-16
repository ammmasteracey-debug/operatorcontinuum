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

const mobileNavIconPaths = {
  home: 'M3 10.5 12 3l9 7.5M5 9v12h14V9M9 21v-7h6v7',
  manual: 'M6 3.5h12v17l-6-3-6 3zM9 8h6M9 11h6',
  leads: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 8v6M16 11h6',
  pipeline: 'M4 4h4v16H4zM10 4h4v10h-4zM16 4h4v13h-4z',
};

function MobileNavIcon({ target }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={mobileNavIconPaths[target]} />
    </svg>
  );
}

const tourSteps = [
  {
    target: 'manual',
    title: 'Start with The Black Book',
    description: 'The Black Book is the law: learn the offer, qualification, approved talk tracks, and when to hand a conversation to Admin.',
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

const demoMetricCards = [
  { label: 'Pipeline', value: '9', detail: 'Prospects in motion' },
  { label: 'Follow-ups', value: '4', detail: 'Open reminders' },
  { label: 'Seat value', value: '$135k', detail: 'Listed opportunity value' },
  { label: 'Pilot', value: '20%', detail: 'Rev-share baseline for Harry' },
];

const nextActions = [
  { name: 'Ari Sol', due: 'Today', status: 'Seat conversation', owner: 'Harry' },
  { name: 'Mina Park', due: 'Tomorrow', status: 'Method shared', owner: 'Admin' },
  { name: 'Dorian Vale', due: 'Thu', status: 'Close or clean no', owner: 'Operator' },
];

const pipelineStages = [
  { label: 'New' },
  { label: 'Contacted' },
  { label: 'Site/doctrine shared' },
  { label: 'Method shared' },
  { label: 'Seat conversation' },
  { label: 'Closed won' },
  { label: 'Closed lost' },
  { label: 'Nurture' },
];

const demoLeads = [
  { name: 'Ari Sol', channel: 'IG', temp: 'Warm', value: '$15k', stage: 'New', owner: 'Harry' },
  { name: 'Leah Rowan', channel: 'Referral', temp: 'Cold', value: '$15k', stage: 'New', owner: 'Harry' },
  { name: 'Mina Park', channel: 'X', temp: 'Warm', value: '$15k', stage: 'Contacted', owner: 'Harry' },
  { name: 'Dorian Vale', channel: 'Event', temp: 'Hot', value: '$15k', stage: 'Site/doctrine shared', owner: 'Harry' },
  { name: 'Nico Sato', channel: 'Other', temp: 'Cold', value: '$15k', stage: 'Site/doctrine shared', owner: 'Harry' },
  { name: 'Tess Moran', channel: 'IG', temp: 'Warm', value: '$15k', stage: 'Method shared', owner: 'Harry' },
  { name: 'Iris Quinn', channel: 'Referral', temp: 'Hot', value: '$15k', stage: 'Seat conversation', owner: 'Harry' },
  { name: 'Sofia Laurent', channel: 'Warm intro', temp: 'Hot', value: '$15k', stage: 'Closed won', owner: 'Harry' },
];

const manualSections = [
  {
    title: 'Foundation',
    blocks: [
      {
        type: 'prose',
        heading: 'Cover & posture',
        paragraphs: [
          'The Black Book is the Kurogami Group field manual for anyone who represents Desk Access. You offer access to process under published terms.',
          'You do not sell hope, signals, or a ticket scheme. If the prospect wants a shortcut, you walk. Every meaningful touch is logged in Continuum; every close is paid and attributed; every word matches this book.',
        ],
      },
      {
        type: 'prose',
        heading: 'Why the Group exists',
        paragraphs: [
          'Most of the market sells noise: tips, courses, pyramids, and “we’ll get you paid.” Kurogami Group exists so operators can work under a shared standard—desks, capacity, and review—without becoming spectators or product.',
          'We grow by placing qualified seats, not by manufacturing urgency. Closer and prospecting-operator income comes only from closed, paid seats. The unit is the seat, not a solar system.',
        ],
      },
      {
        type: 'laws',
        heading: 'The three laws',
        items: [
          { title: 'Process before outcome', text: 'We train and sell process. Outcomes are owned by the operator. Never promise results.' },
          { title: 'Risk is named, bounded, and owned', text: 'Markets can lose money. Say it. Do not soft-pedal it to close.' },
          { title: 'The standard outlives the outcome', text: 'A bad day does not rewrite the manual. A good day does not license invented offers.' },
        ],
        note: 'If a script, objection answer, or comp idea violates a law, it is out—even if it would close.',
      },
      {
        type: 'list',
        heading: 'Operator standards',
        items: [
          'Speak doctrine, not hype.',
          'Log every meaningful touch in Continuum.',
          'Never invent price, equity, or payout language.',
          'Escalate legal, institutional, or non-standard terms to Admin.',
          'Protect capacity: no pressure closes.',
          'A clean no is a successful outcome. Violations can result in removal from prospecting or the pilot.',
        ],
      },
    ],
  },
  {
    title: 'The Offer',
    blocks: [
      {
        type: 'prose',
        heading: 'What we sell',
        paragraphs: [
          'The primary unit is Desk Access / Statecraft. The default price is $15,000 USD. It provides access to Group process, Statecraft Method, and desk surfaces under Group law.',
          'This is education and process access under published terms. Teams and multi-seat arrangements are Admin only; a closer never invents a package. Later units use published prices, Continuum attribution, and payment before compensation.',
          'Point prospects to kurogamigroup.com and Method. You are not the product; the standard is.',
        ],
      },
      {
        type: 'list',
        heading: 'What we never sell',
        items: [
          'Trade signals as a product.',
          'Guaranteed profit, APY, or “we’ll get you paid.”',
          'Passive income or ticket/pyramid economics.',
          'Equity, co-founder status, or name-on-the-door for a seat fee.',
          'Custom fantasy terms without Admin written approval.',
          'Urgency based on fake scarcity or dark-pattern pressure.',
          'If they only want tips or a payout story, they are not a seat. End clean.',
        ],
      },
      {
        type: 'split-lists',
        heading: 'Ideal operator / walk-away profile',
        columns: [
          {
            title: 'Seek',
            items: [
              'Can fund the seat without desperation.',
              'Wants process, review, and standard.',
              'Can engage Method and desks.',
              'Accepts risk language without asking for guarantees.',
            ],
          },
          {
            title: 'Walk away',
            items: [
              'Only cares about signals or how fast they get paid.',
              'Wants name/address for vague programs.',
              'Cannot meet published price and pressures for exceptions.',
              'Treats the Group like a casino tip line.',
            ],
          },
        ],
        note: 'Volume of wrong seats destroys the brand. One clean no protects the next ten rights.',
      },
      {
        type: 'table',
        heading: 'Desks 101',
        columns: ['Desk', 'One line'],
        rows: [
          ['Statecraft Method', 'Train — how we work the process'],
          ['Board', 'Govern — capacity and standard'],
          ['Veil', 'Protect — risk and posture'],
          ['Arcade', 'Practice — reps without theater'],
          ['Forge', 'Build — systems and operators'],
          ['Official Access', 'Enter — the seat'],
        ],
        note: 'You sell Access. Method is how serious people evaluate before they buy.',
      },
    ],
  },
  {
    title: 'Desks Deep-Dive',
    blocks: [
      {
        type: 'desks',
        heading: 'What am I joining?',
        items: [
          {
            title: 'Statecraft Method (Train)',
            job: 'Teach how the Group works the process: preparation, risk naming, execution posture, and review.',
            prospect: 'This is where seriousness shows. If they will not engage Method, they are not a seat.',
            line: '“Method is how we work. Access is entry under that standard.”',
            not: 'A signal feed or daily-picks product.',
          },
          {
            title: 'Board (Govern)',
            job: 'Set capacity, priorities, and the standard when outcomes swing.',
            prospect: 'Shows the Group is not always on or always sizing up. Governance is part of being an operator here.',
            line: '“Board is how we keep process above impulse.”',
            not: 'A performance leaderboard for hype.',
          },
          {
            title: 'Veil (Protect)',
            job: 'Set risk posture, exposure discipline, and what the Group refuses.',
            prospect: 'Makes the law tangible: risk is named and bounded.',
            line: '“Veil is protect. We don’t romance drawdowns.”',
            not: 'Insurance or a guarantee wrapper.',
          },
          {
            title: 'Arcade (Practice)',
            job: 'Provide reps in a controlled frame: practice without turning the Group into theater.',
            prospect: 'Skill is built by repetition under rules, not by consuming content.',
            line: '“Arcade is practice. Still process-first.”',
            not: 'Gamified dopamine or fake P&L contests as the sell.',
          },
          {
            title: 'Forge (Build)',
            job: 'Build systems, tools, and operator infrastructure the Group uses and extends.',
            prospect: 'Signals build culture, not course culture.',
            line: '“Forge is where systems get built. Seats fund operators who build and run process.”',
            not: 'A promise of equity or a co-founder chair for buying Access.',
          },
          {
            title: 'Official Access (Enter)',
            job: 'Provide the commercial door: Desk Access under published terms.',
            prospect: 'A clear unit, clear price, and clear non-promises.',
            line: '“Access is the seat. Fifteen thousand default. Process access—not a return promise.”',
            not: 'A funnel into undefined upsells or ticket tiers invented in the field.',
          },
        ],
        note: 'Field rule: Do not pitch six products. Pitch one seat. Use desks to answer “what am I joining?”—then return to price and terms.',
      },
    ],
  },
  {
    title: 'The Sale',
    blocks: [
      {
        type: 'table',
        heading: 'Continuum stages',
        columns: ['Stage', 'Meaning', 'Exit criteria'],
        rows: [
          ['New', 'Lead captured', 'Owner assigned'],
          ['Contacted', 'First real touch', 'Response or logged attempt'],
          ['Site/doctrine shared', 'Group URL and posture sent', 'Confirmed open or discussed'],
          ['Method shared', 'Statecraft Method pointed', 'They engage or decline'],
          ['Seat conversation', 'Price, terms, what they get and do not get', 'Clear yes path or no'],
          ['Closed won', 'Paid under terms', 'Payment confirmed and Continuum note'],
          ['Closed lost', 'Explicit no or disqualified', 'Reason tagged'],
          ['Nurture', 'Timing wrong, not wrong fit', 'Next action dated'],
        ],
        note: 'Do not skip to price before doctrine or Method unless Admin says otherwise. Do not leave seats in limbo: won, lost, or nurture with a date.',
      },
      {
        type: 'list',
        heading: 'Qualification before a seat conversation',
        items: [
          'They understand this is process access, not signals.',
          'They can meet $15,000 without a hardship close.',
          'They have opened or agreed to open the Group site / Method.',
          'They do not demand guaranteed returns.',
          'You have logged the path in Continuum.',
        ],
        note: 'If any point fails, stay in Method/doctrine or make a clean no. Do not hope-close.',
      },
      {
        type: 'tracks',
        heading: 'Talk tracks',
        items: [
          {
            title: 'Warm first touch',
            text: 'I run process under Kurogami Group—operators, not spectators. Site is kurogamigroup.com. If you want how we actually work, start at Method. Happy to walk Desk Access only if that lands.',
          },
          {
            title: 'Light outbound',
            text: 'Most of this space sells noise. We sell seats under a standard—process before outcome. If that means something to you, the Group site is the door. No pitch deck spam.',
          },
          {
            title: 'After they view the site',
            text: 'You saw the posture. Next step for serious people is Method, then Access if it fits. What are you optimizing for—process or tips?',
          },
          {
            title: 'If they ask for tips / signals',
            text: 'We don’t sell signals. If that’s the need, we’re not the fit. Clean either way.',
          },
          {
            title: 'Seat frame',
            text: 'Desk Access is fifteen thousand. It’s process and desk access under Group terms—not a return promise. Risk stays yours. If you want in under that, we do terms and payment; if not, no friction.',
          },
          {
            title: 'Close ask',
            text: 'If you want the seat under published terms, we confirm payment path and onboard. If you need time, we date a next step or close the file. What do you want to do?',
          },
          {
            title: 'Clean no',
            text: 'Understood. Door stays the site if that ever changes. Respect either way.',
          },
        ],
      },
      {
        type: 'table',
        heading: 'Objection map',
        columns: ['They say', 'You do'],
        rows: [
          ['“Too expensive”', 'Restate the unit: process seat, not a course ladder. No discount theater. Admin only on exceptions.'],
          ['“Send proof / returns”', 'Point at Method and doctrine. No performance guarantees. Process is not outcome.'],
          ['“Is this a signal group?”', 'No. If they need signals, walk.'],
          ['“Can I start smaller?”', 'Published unit is the seat. Do not invent a micro-tier to close.'],
          ['“How fast do I get paid?”', 'There is no passive income promise. Operator work is separate from internal closer compensation.'],
          ['“Give me equity / partner”', 'A seat is not equity. Partner conversations are Admin only, never in-field.'],
          ['“Send it so I can think”', 'Send the site and Method. No custom fantasy PDF. Date a Continuum next action.'],
        ],
        note: 'Argument is not the job. Clarity is the job.',
      },
      {
        type: 'list',
        heading: 'Close, payment, and handoff',
        items: [
          'Confirm they accept process access and no return promise.',
          'Confirm $15,000 or an Admin-written exception.',
          'Use the payment path published by Admin. No personal side deals.',
          'Log Closed won, payment note, and attribution in Continuum.',
          'Hand off to the onboarding list: welcome, Method, and desk access.',
          'Do not freelance post-sale promises.',
        ],
        note: 'Lost: record the reason and stage. Nurture: set one next date, not an endless chase.',
      },
    ],
  },
  {
    title: 'Comp & Conduct',
    blocks: [
      {
        type: 'prose',
        heading: 'Compensation & Harry pilot',
        paragraphs: [
          'Compensation is earned only on closed, paid, attributed seats you originated. No pay on almost or an unpaid verbal yes.',
          'Harry’s pilot role is closer under this Black Book. Share is 15–25% of the first seat fee on closed, paid, attributed seats; the default working number is 20% until Admin sets the exact percentage in writing. Scope is Desk Access only unless Admin assigns otherwise.',
          'The pilot runs 30–45 days, then receives a review for close quality, doctrine adherence, and Continuum hygiene. There is no salary promise, default equity, or draw against future closes unless Admin writes it.',
        ],
      },
      {
        type: 'list',
        heading: 'Optional referrals',
        items: [
          'An optional thank-you may apply to a closed, paid seat from a referred name logged in Continuum.',
          'Cap and split rules must be set by Admin in writing. No informal “I’ll take care of you.”',
          'This is not a downline and not residual compensation on future closes unless separately written.',
          'Referrals are never the main motion; direct qualified seats are.',
        ],
      },
      {
        type: 'split-lists',
        heading: 'Conduct & language',
        columns: [
          {
            title: 'Banned in-field',
            items: [
              'Guaranteed profit, “we’ll get you paid,” or APY.',
              'Trust-me capital or identity collection for vague programs.',
              'Invented discounts, equity, or titles.',
              'Pressure after a clean no.',
              'Selling Continuum or the Black Book as a get-rich system.',
            ],
          },
          {
            title: 'Required',
            items: [
              'Log every meaningful touch in Continuum.',
              'Use doctrine language under pressure.',
              'Escalate when unsure.',
              'Keep terms published and attribution clear.',
            ],
          },
        ],
      },
      {
        type: 'list',
        heading: 'Mandatory Admin escalations',
        items: [
          'Any price below the published seat.',
          'Multi-seat, team, or institutional conversations.',
          'Legal structure, advisory, or “are you a broker?” questions.',
          'Equity, partnership, or token promises.',
          'Anything that may be an investment contract.',
        ],
        note: 'Wrong sentence in the field costs more than a lost seat.',
      },
    ],
  },
  {
    title: 'Compliance',
    blocks: [
      {
        type: 'prose',
        heading: 'What access means',
        paragraphs: [
          'Operator Continuum is the operating desk that runs the Black Book. The Black Book is the law inside /manual. This is education and process access only under published terms.',
          'Kurogami Group is not providing investment advice or acting as a broker-dealer through this offer. No profit, return, or payment outcome is guaranteed. Past process does not guarantee future results.',
          'Markets can lose money. The operator owns market risk. Name it plainly, keep it bounded, and never soften it to close.',
        ],
      },
      {
        type: 'list',
        heading: 'Field check',
        items: [
          'Do not promise an outcome or imply a return.',
          'Do not collect capital or identity details for a vague program.',
          'Use only published prices, terms, and payment paths.',
          'Stop and hand legal, advisory, institutional, or non-standard questions to Admin.',
          'A clean no is better than a misrepresented yes.',
        ],
      },
    ],
  },
];

const assetCards = [
  {
    title: 'Group home',
    description: 'First serious touch; the Group’s public home.',
    url: 'https://www.kurogamigroup.com',
    copy: 'Kurogami Group — operators, not spectators. Process before outcome. https://www.kurogamigroup.com — Not investment advice.',
  },
  {
    title: 'Doctrine / standard',
    description: 'The doctrine lives on the Group site.',
    url: 'https://www.kurogamigroup.com',
    copy: 'Process before outcome. Risk is named, bounded, and owned. The standard outlives the outcome. https://www.kurogamigroup.com — Not investment advice.',
  },
  {
    title: 'Statecraft Method',
    description: 'Method — open from Group site.',
    url: 'https://www.kurogamigroup.com',
    copy: 'Next step for serious operators is Method, then Access if it fits.',
  },
  {
    title: 'Official Access',
    description: 'Access / enter path on the Group site.',
    url: 'https://www.kurogamigroup.com',
    copy: 'Desk Access is the seat. Fifteen thousand default. Process access — not a return promise.',
  },
  {
    title: 'Desks overview',
    description: 'Desks index on the Group site.',
    url: 'https://www.kurogamigroup.com',
    copy: 'One seat; desks explain the system. https://www.kurogamigroup.com — Not investment advice.',
  },
];

const defaultPilotAcknowledgement = {
  acknowledged: false,
  name: '',
  date: '',
  adminName: '',
  adminDate: '',
  adminNote: 'Admin sets exact % in writing',
};

function ManualBlock({ block, onCopyTrack }) {
  return (
    <section className={`manual-block manual-block-${block.type}`}>
      {block.heading && <h4>{block.heading}</h4>}
      {block.type === 'prose' && block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {block.type === 'list' && (
        <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
      )}
      {block.type === 'laws' && (
        <div className="manual-laws">
          {block.items.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      )}
      {block.type === 'split-lists' && (
        <div className="manual-split-lists">
          {block.columns.map((column) => (
            <div key={column.title}>
              <h5>{column.title}</h5>
              <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
      {block.type === 'table' && (
        <div className="manual-table-wrap">
          <table>
            <thead><tr>{block.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {block.type === 'desks' && (
        <div className="manual-desks">
          {block.items.map((desk) => (
            <article key={desk.title}>
              <h5>{desk.title}</h5>
              <p><strong>Job:</strong> {desk.job}</p>
              <p><strong>For the prospect:</strong> {desk.prospect}</p>
              <p><strong>Closer line:</strong> {desk.line}</p>
              <p><strong>Not:</strong> {desk.not}</p>
            </article>
          ))}
        </div>
      )}
      {block.type === 'tracks' && (
        <div className="manual-tracks">
          {block.items.map((track) => (
            <article key={track.title}>
              <div className="manual-track-heading">
                <h5>{track.title}</h5>
                <button type="button" className="copy-button" onClick={() => onCopyTrack(track.text, track.title)}>
                  Copy track
                </button>
              </div>
              <blockquote>{track.text}</blockquote>
            </article>
          ))}
        </div>
      )}
      {block.note && <p className="manual-note">{block.note}</p>}
    </section>
  );
}

const pilotRows = [
  { closer: 'Harry', touches: 52, conversations: 19, methodShares: 13, seatConversations: 8, won: 4, revenue: '$60k', rate: '31%' },
  { closer: 'Mila', touches: 39, conversations: 12, methodShares: 9, seatConversations: 5, won: 2, revenue: '$30k', rate: '18%' },
  { closer: 'Ike', touches: 24, conversations: 9, methodShares: 7, seatConversations: 4, won: 1, revenue: '$15k', rate: '12%' },
];

function createDemoWorkspaceData() {
  const due = new Date();
  due.setUTCDate(due.getUTCDate() + 2);
  const dueDate = due.toISOString().slice(0, 10);
  const reyesLead = {
    id: 'LD-1042',
    name: 'M. Reyes (@mreyes)',
    handle: '@mreyes',
    channel: 'Instagram DM',
    temp: 'Warm',
    value: '$15k',
    seatValue: 15000,
    stage: 'Method shared',
    owner: 'Harry',
    createdAt: '2026-11-14',
    updatedAt: '2026-11-15',
    attribution: 'HARRY-PILOT',
    revShareEligible: true,
    objectionTags: [],
    nextAction: 'Confirm Method engagement; if serious, seat conversation',
    due: dueDate,
    notes: 'Inbound asked what Kurogami is. Sent Group home. Clarified not signals. Pointed Method. Waiting on Method before price.',
    activity: [
      { timestamp: '2026-11-14 21:02', owner: 'Harry', type: 'dm', detail: 'Inbound: “what is this”' },
      { timestamp: '2026-11-14 21:10', owner: 'Harry', type: 'asset_sent', detail: 'Group home' },
      { timestamp: '2026-11-14 22:40', owner: 'Harry', type: 'note', detail: 'They replied; not signals; sent posture' },
      { timestamp: '2026-11-15 11:15', owner: 'Harry', type: 'stage', detail: 'Contacted → Site/doctrine shared' },
      { timestamp: '2026-11-15 11:18', owner: 'Harry', type: 'asset_sent', detail: 'Method' },
      { timestamp: '2026-11-15 11:20', owner: 'Harry', type: 'stage', detail: '→ Method shared' },
      { timestamp: '2026-11-15 11:21', owner: 'Harry', type: 'next_action', detail: 'Seat conversation only after Method touch' },
    ],
  };
  return {
    mode: 'demo',
    leads: [reyesLead, ...demoLeads],
    nextActions: [
      ...nextActions,
      { name: reyesLead.name, due: dueDate, status: reyesLead.nextAction, owner: reyesLead.owner },
    ],
    pilotRows,
    pilotAcknowledgement: defaultPilotAcknowledgement,
  };
}

const freshWorkspaceData = {
  mode: 'fresh',
  leads: [],
  nextActions: [],
  pilotRows: [],
  pilotAcknowledgement: defaultPilotAcknowledgement,
};

const workspaceDataStorageKey = 'operator-continuum-workspace-data';

function readWorkspaceData() {
  try {
    const savedData = window.localStorage.getItem(workspaceDataStorageKey);
    if (savedData === null) return { data: freshWorkspaceData, warning: null };

    const parsedData = JSON.parse(savedData);
    if (
      (!['demo', 'fresh', 'custom'].includes(parsedData.mode))
      || !Array.isArray(parsedData.leads)
      || !Array.isArray(parsedData.nextActions)
      || !Array.isArray(parsedData.pilotRows)
    ) {
      throw new Error('Saved workspace data has an invalid shape.');
    }

    const acknowledgement = parsedData.pilotAcknowledgement;
    if (
      acknowledgement !== undefined
      && (
        acknowledgement === null
        || typeof acknowledgement !== 'object'
        || typeof acknowledgement.acknowledged !== 'boolean'
        || ['name', 'date', 'adminName', 'adminDate', 'adminNote'].some((field) => typeof acknowledgement[field] !== 'string')
      )
    ) {
      throw new Error('Saved pilot acknowledgement has an invalid shape.');
    }

    const pilotAcknowledgement = { ...defaultPilotAcknowledgement, ...acknowledgement };
    return {
      data: parsedData.mode === 'demo'
        ? { ...createDemoWorkspaceData(), pilotAcknowledgement }
        : { ...parsedData, pilotAcknowledgement },
      warning: null,
    };
  } catch (error) {
    console.error('Unable to read saved workspace data.', error);
    return {
      data: freshWorkspaceData,
      warning: 'Saved data could not be read. A fresh book is open instead.',
    };
  }
}

function formatDueDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

const operatorRules = [
  'Same Black Book, same stages, same approved assets.',
  'Leads attributed to the operator.',
  'Same ban on inventing offers.',
  'Admin can revoke prospecting instantly.',
];

function App() {
  const [initialWorkspaceData] = useState(readWorkspaceData);
  const [workspaceData, setWorkspaceData] = useState(initialWorkspaceData.data);
  const [dataNotice, setDataNotice] = useState(initialWorkspaceData.warning);
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
  const [clipboardFeedback, setClipboardFeedback] = useState('');
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  const [quickAction, setQuickAction] = useState(null);
  const [quickFormError, setQuickFormError] = useState('');
  const [leadDraft, setLeadDraft] = useState({ name: '', channel: 'IG', temp: 'Warm', value: '$15k' });
  const [followUpDraft, setFollowUpDraft] = useState({ name: '', due: 'Today', status: 'Follow-up' });
  const [instagramCaption, setInstagramCaption] = useState('');
  const [instagramFeedback, setInstagramFeedback] = useState('');
  const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(workspaceDataStorageKey, JSON.stringify(workspaceData));
    } catch (error) {
      console.error('Unable to save workspace data.', error);
      setDataNotice('Workspace changes could not be saved in this browser.');
    }
  }, [workspaceData]);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 1100);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isGuideOpen || isStartScreenOpen || quickAction !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGuideOpen, isStartScreenOpen, quickAction]);

  useEffect(() => {
    if (tourStep === null) return;

    const step = tourSteps[tourStep];
    setActiveNav(navLabelByTarget[step.target]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tourStep]);

  useEffect(() => {
    if (!isQuickMenuOpen && !quickAction && !isNotificationCenterOpen && !isMobileMoreOpen) return undefined;

    const closeTransientUi = (event) => {
      if (event.key !== 'Escape') return;
      setIsQuickMenuOpen(false);
      setQuickAction(null);
      setIsNotificationCenterOpen(false);
      setIsMobileMoreOpen(false);
      setIsMobileMoreOpen(false);
    };

    window.addEventListener('keydown', closeTransientUi);
    return () => window.removeEventListener('keydown', closeTransientUi);
  }, [isQuickMenuOpen, quickAction, isNotificationCenterOpen, isMobileMoreOpen]);

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
    setIsMobileMoreOpen(false);
    setIsQuickMenuOpen(false);
    setIsNotificationCenterOpen(false);
    setIsMobileMoreOpen(false);
    setActiveNav(item.label);
    window.history.replaceState(null, '', item.href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLead = (name) => {
    setSelectedLeadName(name);
    setTourStep(null);
    setIsNotificationCenterOpen(false);
    setIsMobileMoreOpen(false);
    setIsQuickMenuOpen(false);
    setActiveNav('Leads');
    window.history.replaceState(null, '', '#leads');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetWorkspaceData = () => {
    if (!window.confirm('Reset leads, next actions, and pilot records for this browser? This cannot be undone.')) return;
    setWorkspaceData(freshWorkspaceData);
    setSelectedLeadName(null);
    setLeadSearch('');
    setLeadStageFilter('All stages');
    setDataNotice(null);
    setIsQuickMenuOpen(false);
    setQuickAction(null);
    setIsNotificationCenterOpen(false);
    setLeadDraft({ name: '', channel: 'IG', temp: 'Warm', value: '$15k' });
    setFollowUpDraft({ name: '', due: 'Today', status: 'Follow-up' });
    setInstagramCaption('');
  };

  const loadDemoData = () => {
    setWorkspaceData({
      ...createDemoWorkspaceData(),
      pilotAcknowledgement: workspaceData.pilotAcknowledgement ?? defaultPilotAcknowledgement,
    });
    setSelectedLeadName(null);
    setLeadSearch('');
    setLeadStageFilter('All stages');
    setDataNotice(null);
    setIsQuickMenuOpen(false);
    setQuickAction(null);
    setIsNotificationCenterOpen(false);
    setLeadDraft({ name: '', channel: 'IG', temp: 'Warm', value: '$15k' });
    setFollowUpDraft({ name: '', due: 'Today', status: 'Follow-up' });
    setInstagramCaption('');
  };

  const copyApprovedText = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setClipboardFeedback(`${label} copied.`);
    } catch (error) {
      console.error(`Unable to copy ${label.toLowerCase()}.`, error);
      setClipboardFeedback('Clipboard access failed. Select and copy the displayed text manually.');
    }
  };

  const updatePilotAcknowledgement = (field, value) => {
    setWorkspaceData((current) => ({
      ...current,
      pilotAcknowledgement: {
        ...defaultPilotAcknowledgement,
        ...current.pilotAcknowledgement,
        [field]: value,
      },
    }));
  };

  const openQuickAction = (action) => {
    setQuickAction(action);
    setQuickFormError('');
    setIsQuickMenuOpen(false);
    setIsMobileMoreOpen(false);
    if (action === 'follow-up') {
      setFollowUpDraft((current) => ({
        ...current,
        name: workspaceData.leads.some((lead) => lead.name === current.name)
          ? current.name
          : workspaceData.leads[0]?.name || '',
      }));
    }
  };

  const closeQuickAction = () => {
    setQuickAction(null);
    setQuickFormError('');
    setInstagramFeedback('');
  };

  const saveLead = (event) => {
    event.preventDefault();
    const name = leadDraft.name.trim();
    if (!name) {
      setQuickFormError('Enter a prospect name.');
      return;
    }
    if (workspaceData.leads.some((lead) => lead.name.toLowerCase() === name.toLowerCase())) {
      setQuickFormError('A prospect with that name is already in the book.');
      return;
    }

    const returnToPipeline = activeNav === 'Pipeline';
    const newLead = {
      ...leadDraft,
      name,
      stage: 'New',
      owner: 'Harry',
    };
    setWorkspaceData((current) => ({
      ...current,
      mode: 'custom',
      leads: [newLead, ...current.leads],
    }));
    setLeadDraft({ name: '', channel: 'IG', temp: 'Warm', value: '$15k' });
    closeQuickAction();
    if (returnToPipeline) {
      setSelectedLeadName(null);
      setActiveNav('Pipeline');
      window.history.replaceState(null, '', '#pipeline');
    } else {
      openLead(name);
    }
  };

  const saveFollowUp = (event) => {
    event.preventDefault();
    if (!followUpDraft.name) {
      setQuickFormError('Add a prospect before scheduling a follow-up.');
      return;
    }

    setWorkspaceData((current) => ({
      ...current,
      mode: 'custom',
      nextActions: [
        ...current.nextActions,
        { name: followUpDraft.name, due: followUpDraft.due, status: followUpDraft.status.trim() || 'Follow-up', owner: 'Harry' },
      ],
    }));
    setQuickAction(null);
    setIsNotificationCenterOpen(true);
  };

  const completeFollowUp = (index) => {
    setWorkspaceData((current) => ({
      ...current,
      mode: 'custom',
      nextActions: current.nextActions.filter((_, actionIndex) => actionIndex !== index),
    }));
  };

  const copyInstagramCaption = async () => {
    try {
      await navigator.clipboard.writeText(instagramCaption);
      setInstagramFeedback('Caption copied. Open Instagram and paste it into your post.');
    } catch (error) {
      console.error('Unable to copy the Instagram caption.', error);
      setInstagramFeedback('Could not access the clipboard. Select and copy the caption manually.');
    }
  };

  const filteredLeadRecords = workspaceData.leads.filter((lead) => {
    const matchesQuery = `${lead.name} ${lead.channel} ${lead.stage}`.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStage = leadStageFilter === 'All stages' || lead.stage === leadStageFilter;
    return matchesQuery && matchesStage;
  });
  const selectedLead = workspaceData.leads.find((lead) => lead.name === selectedLeadName);
  const visibleMetricCards = workspaceData.mode === 'demo'
    ? demoMetricCards
    : [
      { label: 'Pipeline', value: String(workspaceData.leads.length), detail: 'Prospects in motion' },
      { label: 'Follow-ups', value: String(workspaceData.nextActions.length), detail: 'Open reminders' },
      { label: 'Seat value', value: `$${workspaceData.leads.reduce((total, lead) => {
        const amount = Number.parseFloat(lead.value.replace(/[^0-9.]/g, '')) || 0;
        return total + amount * (lead.value.toLowerCase().includes('k') ? 1000 : 1);
      }, 0).toLocaleString()}`, detail: 'Listed opportunity value' },
      { label: 'Pilot', value: String(workspaceData.pilotRows.length), detail: 'Pilot records' },
    ];

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
            <span>KUROGAMI GROUP / OPERATOR CONTINUUM</span>
            <span>FIELD MANUAL / BLACK BOOK v1.0</span>
          </div>
          <div className="launch-orbit launch-orbit-outer" />
          <div className="launch-orbit launch-orbit-inner" />
          <div className="launch-crosshair" />
          <div className="launch-content">
            <div className="launch-mark">黒</div>
            <div className="launch-eyebrow">THE BLACK BOOK / KUROGAMI GROUP FIELD MANUAL v1.0</div>
            <h1 id="launch-title">THE BLACK BOOK</h1>
            <p className="launch-book-subtitle">Process before outcome.</p>
            <p className="launch-description">The law for the operator. Continuum is the desk that runs it.</p>
            <div className="launch-system-status" aria-live="polite">
              <span className={isLoading ? 'status-pulse' : ''} />
              {isLoading ? 'Loading field manual · Initializing operator desk' : 'Black Book v1.0 loaded · Operator desk online'}
            </div>
            {isLoading ? (
              <div className="launch-progress" aria-label="Loading workspace">
                <span />
              </div>
            ) : (
              <button className="launch-button" type="button" onClick={startWorkspace}>
                Enter Continuum <span>→</span>
              </button>
            )}
          </div>
          <div className="launch-hud launch-hud-bottom">
            <span>DOCTRINE / PROCESS BEFORE OUTCOME</span>
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
            {!isStartScreenOpen && (
              <div className="sidebar-quick-actions">
                <div className="quick-action-menu" id="desktop-quick-action-menu" hidden={!isQuickMenuOpen}>
                  <div className="quick-menu-heading">Quick actions</div>
                  <button type="button" onClick={() => openQuickAction('lead')}>
                    <span className="quick-action-symbol">＋</span>
                    <span><strong>Add prospect</strong><small>Save a new lead to the book</small></span>
                  </button>
                  <button
                    type="button"
                    disabled={workspaceData.leads.length === 0}
                    title={workspaceData.leads.length === 0 ? 'Add a prospect before logging a follow-up' : undefined}
                    onClick={() => openQuickAction('follow-up')}
                  >
                    <span className="quick-action-symbol">↗</span>
                    <span><strong>Log follow-up</strong><small>Set a reminder for a prospect</small></span>
                  </button>
                  <button type="button" onClick={() => openQuickAction('instagram')}>
                    <span className="quick-action-symbol">◎</span>
                    <span><strong>Prepare Instagram post</strong><small>Draft a caption and open Instagram</small></span>
                  </button>
                </div>
                <button
                  className={`quick-action-trigger ${isQuickMenuOpen ? 'open' : ''}`}
                  type="button"
                  aria-label={isQuickMenuOpen ? 'Close quick actions' : 'Open quick actions'}
                  aria-expanded={isQuickMenuOpen}
                  aria-controls="desktop-quick-action-menu"
                  onClick={() => {
                    setIsQuickMenuOpen((isOpen) => !isOpen);
                    setIsNotificationCenterOpen(false);
                    setIsMobileMoreOpen(false);
                  }}
                >
                  <span>{isQuickMenuOpen ? '×' : '+'}</span>
                  <small>{isQuickMenuOpen ? 'Close quick actions' : 'Quick actions'}</small>
                </button>
              </div>
            )}
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
              <div className="dataset-controls" role="group" aria-label="Workspace data controls">
                <span className={`dataset-status ${workspaceData.mode}`}>
                  {workspaceData.mode === 'demo' ? 'Demo data' : workspaceData.mode === 'custom' ? 'Live book' : 'Fresh book'}
                </span>
                <button
                  className="dataset-button reset-data-button"
                  type="button"
                  disabled={workspaceData.mode === 'fresh'}
                  onClick={resetWorkspaceData}
                >
                  Reset data
                </button>
                <button
                  className="dataset-button load-demo-button"
                  type="button"
                  disabled={workspaceData.mode === 'demo'}
                  onClick={loadDemoData}
                >
                  Load demo data
                </button>
              </div>
              <span className="date-label">Admin view · Harry pilot</span>
              <div className="header-action-buttons">
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
                <button
                  className="notification-trigger"
                  type="button"
                  aria-label={isNotificationCenterOpen
                    ? 'Close notification center'
                    : `Open notification center, ${workspaceData.nextActions.length} open follow-ups`}
                  aria-expanded={isNotificationCenterOpen}
                  onClick={() => {
                    setIsNotificationCenterOpen((isOpen) => !isOpen);
                    setIsQuickMenuOpen(false);
                    setIsMobileMoreOpen(false);
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
                  </svg>
                  {workspaceData.nextActions.length > 0 && (
                    <span className="notification-count">{workspaceData.nextActions.length}</span>
                  )}
                </button>
              </div>
            </div>
          </header>
          {dataNotice && <div className="data-notice" role="alert">{dataNotice}</div>}

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
                <p>The Group’s prospecting and seat-conversion rail — Process before outcome.</p>
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
            <nav className="home-shortcuts" aria-label="Primary workspace links">
              {[
                { label: 'Manual · The Black Book', item: navItems[1] },
                { label: 'Pipeline', item: navItems[3] },
                { label: 'Assets', item: navItems[4] },
                { label: 'Pilot', item: navItems[5] },
              ].map(({ label, item }) => (
                <a key={item.label} href={item.href} onClick={(event) => handleNavClick(event, item)}>
                  {label}<span aria-hidden="true">→</span>
                </a>
              ))}
            </nav>

            <div className="stats-grid">
              {visibleMetricCards.map((card) => (
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
              {workspaceData.nextActions.map((action) => (
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
              {workspaceData.nextActions.length === 0 && (
                <div className="workspace-empty-state">Your next actions will appear here when the book has data.</div>
              )}
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Manual'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`manual-panel ${isTourTarget('manual') ? 'tour-target' : ''}`} id="manual">
            <div className="panel-header">
              <span className="section-kicker">THE BLACK BOOK</span>
              <span className="range-label">Black Book v1.0 / section {String(manualTab + 1).padStart(2, '0')} of {String(manualSections.length).padStart(2, '0')}</span>
            </div>
            <div className="manual-title-block">
              <h2>THE BLACK BOOK</h2>
              <p>Kurogami Group Field Manual v1.0</p>
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
                  {manualSections[manualTab].blocks.map((block) => (
                    <ManualBlock
                      key={`${manualSections[manualTab].title}-${block.heading}`}
                      block={block}
                      onCopyTrack={copyApprovedText}
                    />
                  ))}
                  {clipboardFeedback && <p className="copy-feedback" role="status" aria-live="polite">{clipboardFeedback}</p>}
                </article>
                <div className="manual-version">Black Book v1.0 · Changes only by Admin</div>
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
                <div className="panel-header-actions">
                  <span className="range-label">{filteredLeadRecords.length} records / select a lead for details</span>
                  <button className="panel-add-lead" type="button" onClick={() => openQuickAction('lead')}>
                    + Add prospect
                  </button>
                </div>
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
                    <div className="lead-empty-state">
                      <strong>{workspaceData.leads.length === 0 ? 'Your book is fresh.' : 'No leads match those filters.'}</strong>
                      {workspaceData.leads.length === 0 && (
                        <>
                          <span>Load the demo dataset to explore a populated workspace.</span>
                          <button className="empty-state-button" type="button" onClick={loadDemoData}>
                            Load demo data
                          </button>
                        </>
                      )}
                    </div>
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
                      {selectedLead.id && <div><dt>Lead ID</dt><dd>{selectedLead.id}</dd></div>}
                      {selectedLead.createdAt && <div><dt>Created</dt><dd>{selectedLead.createdAt}</dd></div>}
                      {selectedLead.updatedAt && <div><dt>Updated</dt><dd>{selectedLead.updatedAt}</dd></div>}
                      {selectedLead.attribution && <div><dt>Attribution</dt><dd>{selectedLead.attribution}</dd></div>}
                      {selectedLead.revShareEligible !== undefined && (
                        <div><dt>Rev-share eligible</dt><dd>{selectedLead.revShareEligible ? 'Yes' : 'No'}</dd></div>
                      )}
                      {selectedLead.objectionTags && (
                        <div><dt>Objection tags</dt><dd>{selectedLead.objectionTags.length ? selectedLead.objectionTags.join(', ') : 'None'}</dd></div>
                      )}
                      {selectedLead.nextAction && <div><dt>Next action</dt><dd>{selectedLead.nextAction}</dd></div>}
                      {selectedLead.due && <div><dt>Due</dt><dd>{formatDueDate(selectedLead.due)}</dd></div>}
                    </dl>
                    {selectedLead.notes && <div className="lead-detail-notes"><strong>Notes</strong><p>{selectedLead.notes}</p></div>}
                    {selectedLead.activity && (
                      <div className="lead-activity">
                        <h3>Activity log</h3>
                        <ol>
                          {selectedLead.activity.map((activity) => (
                            <li key={`${activity.timestamp}-${activity.type}`}>
                              <time>{activity.timestamp}</time>
                              <strong>{activity.owner} · {activity.type}</strong>
                              <span>{activity.detail}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
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
              <div className="panel-header-actions">
                <span className="range-label">Fixed order</span>
                <button className="panel-add-lead" type="button" onClick={() => openQuickAction('lead')}>
                  + Add prospect
                </button>
              </div>
            </div>
            <div className="kanban-grid">
              {pipelineStages.map((stage) => (
                <div key={stage.label} className="stage-column">
                  <div className="stage-header">{stage.label}</div>
                  <div className="stage-list">
                    {workspaceData.leads.filter((lead) => lead.stage === stage.label).map((lead) => (
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
                    {!workspaceData.leads.some((lead) => lead.stage === stage.label) && (
                      <div className="stage-empty-state">No prospects</div>
                    )}
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
              <span className="range-label">Approved Group links / Copy for clipboard</span>
            </div>
            <p className="assets-notice">Use Group materials to introduce the doctrine and seat. Continuum is an internal operations desk, not a prospect-facing sales toy.</p>
            <div className="asset-grid">
              {assetCards.map((asset) => (
                <article key={asset.title} className="asset-card">
                  <div className="asset-label">{asset.title}</div>
                  <p>{asset.description}</p>
                  <a className="asset-primary-link" href={asset.url} target="_blank" rel="noreferrer">{asset.url}</a>
                  <blockquote className="asset-copy-text">{asset.copy}</blockquote>
                  <div className="asset-actions">
                    <button className="copy-button" type="button" onClick={() => copyApprovedText(asset.copy, asset.title)}>
                      Copy message
                    </button>
                    <a href={asset.url} target="_blank" rel="noreferrer">Open link ↗</a>
                  </div>
                </article>
              ))}
            </div>
            {clipboardFeedback && <p className="copy-feedback" role="status" aria-live="polite">{clipboardFeedback}</p>}
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Pilot'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`pilot-panel ${isTourTarget('pilot') ? 'tour-target' : ''}`} id="pilot">
            <div className="panel-header">
              <span className="section-kicker">Harry pilot / one-pager</span>
              <span className="range-label">Agreement / review / acknowledgement</span>
            </div>
            <div className="pilot-agreement">
              <div className="pilot-agreement-intro">
                <span className="pilot-kicker">PILOT CLOSER · HARRY</span>
                <h2>Desk Access under The Black Book</h2>
                <p>Role: closer under the Black Book. Sell process and Desk Access only under published terms.</p>
              </div>
              <div className="pilot-agreement-grid">
                <article>
                  <h3>Scope & compensation</h3>
                  <p>Desk Access only unless Admin assigns otherwise. Compensation is 20% by default of the first seat fee on closed, paid, attributed seats originated by the closer.</p>
                  <label className="pilot-admin-note">
                    Admin note
                    <input
                      value={workspaceData.pilotAcknowledgement.adminNote}
                      onChange={(event) => updatePilotAcknowledgement('adminNote', event.target.value)}
                    />
                  </label>
                  <p className="pilot-terms-note">No salary promise, equity, draw, or payment on an unpaid verbal yes.</p>
                </article>
                <article>
                  <h3>Pilot window</h3>
                  <p>30–45 days, followed by a review of close quality, doctrine adherence, and Continuum hygiene.</p>
                  <h3>Continuum duties</h3>
                  <ul className="pilot-duty-list">
                    <li>Log every meaningful touch and keep attribution accurate.</li>
                    <li>Use approved stages, assets, and talk tracks.</li>
                    <li>Record next actions, payment confirmation, and handoff.</li>
                    <li>Escalate exceptions and stop when unsure.</li>
                  </ul>
                </article>
              </div>
              <div className="pilot-conduct">
                <h3>Conduct & independent status</h3>
                <p>Do not promise returns, signals, equity, discounts, or a payout. Keep a clean no clean; no pressure after refusal. Admin may revoke prospecting access at any time.</p>
                <p>This pilot does not promise salary, employment status, benefits, or equity. Compensation applies only as set in writing by Admin on eligible closed, paid, attributed seats.</p>
              </div>
              <form className="pilot-acknowledgement" onSubmit={(event) => event.preventDefault()}>
                <h3>Acknowledgement</h3>
                <label className="pilot-ack-check">
                  <input
                    type="checkbox"
                    checked={workspaceData.pilotAcknowledgement.acknowledged}
                    onChange={(event) => updatePilotAcknowledgement('acknowledged', event.target.checked)}
                  />
                  <span>I have read The Black Book v1.0 and will sell process and Desk Access only.</span>
                </label>
                <div className="pilot-signature-grid">
                  <label>Closer name
                    <input value={workspaceData.pilotAcknowledgement.name} onChange={(event) => updatePilotAcknowledgement('name', event.target.value)} />
                  </label>
                  <label>Closer date
                    <input type="date" value={workspaceData.pilotAcknowledgement.date} onChange={(event) => updatePilotAcknowledgement('date', event.target.value)} />
                  </label>
                  <label>Admin countersign name
                    <input value={workspaceData.pilotAcknowledgement.adminName} onChange={(event) => updatePilotAcknowledgement('adminName', event.target.value)} />
                  </label>
                  <label>Admin countersign date
                    <input type="date" value={workspaceData.pilotAcknowledgement.adminDate} onChange={(event) => updatePilotAcknowledgement('adminDate', event.target.value)} />
                  </label>
                </div>
                <p className="pilot-ack-status" role="status">
                  {workspaceData.pilotAcknowledgement.acknowledged ? 'Acknowledgement recorded in this browser.' : 'Acknowledgement not yet recorded.'}
                </p>
              </form>
            </div>
            <div className="pilot-scoreboard">
              <div className="pilot-scoreboard-heading">
                <h3>Display-only scoreboard</h3>
                <span className="range-label">7d / 30d / full pilot</span>
              </div>
              {workspaceData.pilotRows.length > 0 ? <div className="table-wrap">
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
                  {workspaceData.pilotRows.map((row) => (
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
            </div> : (
              <div className="workspace-empty-state">No pilot records yet. Load demo data to preview the scoreboard.</div>
            )}
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
            Kurogami Group · The Black Book · Process before outcome · Not investment advice
          </footer>
          </div>
        </main>
      </div>

      {!isStartScreenOpen && (
        <div className="mobile-bottom-navigation">
          <nav className="mobile-more-menu" id="mobile-more-menu" aria-label="More workspace tabs" hidden={!isMobileMoreOpen}>
            {navItems.slice(4).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={activeNav === item.label ? 'active' : ''}
                aria-current={activeNav === item.label ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, item)}
              >
                <span>{item.index}</span>{item.label}
              </a>
            ))}
          </nav>
          <div className="quick-action-menu mobile-quick-action-menu" id="mobile-quick-action-menu" hidden={!isQuickMenuOpen}>
            <div className="quick-menu-heading">Quick actions</div>
            <button type="button" onClick={() => openQuickAction('lead')}>
              <span className="quick-action-symbol">＋</span>
              <span><strong>Add prospect</strong><small>Save a new lead to the book</small></span>
            </button>
            <button
              type="button"
              disabled={workspaceData.leads.length === 0}
              title={workspaceData.leads.length === 0 ? 'Add a prospect before logging a follow-up' : undefined}
              onClick={() => openQuickAction('follow-up')}
            >
              <span className="quick-action-symbol">↗</span>
              <span><strong>Log follow-up</strong><small>Set a reminder for a prospect</small></span>
            </button>
            <button type="button" onClick={() => openQuickAction('instagram')}>
              <span className="quick-action-symbol">◎</span>
              <span><strong>Prepare Instagram post</strong><small>Draft a caption and open Instagram</small></span>
            </button>
          </div>
          <nav className="mobile-bottom-nav" aria-label="Mobile workspace navigation">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-item ${activeNav === item.label ? 'active' : ''}`}
                aria-current={activeNav === item.label ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, item)}
              >
                <span className="mobile-nav-mark"><MobileNavIcon target={item.target} /></span>
                <span className="mobile-nav-label">{item.label}</span>
              </a>
            ))}
            <button
              className={`mobile-nav-quick ${isQuickMenuOpen ? 'active' : ''}`}
              type="button"
              aria-label={isQuickMenuOpen ? 'Close quick actions' : 'Open quick actions'}
              aria-expanded={isQuickMenuOpen}
              aria-controls="mobile-quick-action-menu"
              onClick={() => {
                setIsQuickMenuOpen((isOpen) => !isOpen);
                setIsMobileMoreOpen(false);
                setIsNotificationCenterOpen(false);
              }}
            >
              <span aria-hidden="true">+</span>
              <span className="mobile-nav-label">Quick</span>
            </button>
            <button
              className={`mobile-nav-more ${isMobileMoreOpen || navItems.slice(4).some((item) => activeNav === item.label) ? 'active' : ''}`}
              type="button"
              aria-label="More workspace tabs"
              aria-expanded={isMobileMoreOpen}
              aria-controls="mobile-more-menu"
              onClick={() => {
                setIsMobileMoreOpen((isOpen) => !isOpen);
                setIsQuickMenuOpen(false);
                setIsNotificationCenterOpen(false);
              }}
            >
              <span aria-hidden="true">···</span>
              <span className="mobile-nav-label">More</span>
            </button>
          </nav>
        </div>
      )}

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
              Begin with The Black Book. It sets the law for how we speak, qualify, and hand off every prospect.
            </p>
            <p className="guide-manual-line">Black Book = law; Continuum = desk that runs it</p>
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

      {isNotificationCenterOpen && (
        <aside className="notification-center" id="notification-center" role="dialog" aria-label="Notification center">
          <div className="notification-center-header">
            <div>
              <span className="notification-kicker">Workspace alerts</span>
              <h2>Follow-ups</h2>
            </div>
            <button type="button" className="notification-close" onClick={() => setIsNotificationCenterOpen(false)} aria-label="Close notifications">
              ×
            </button>
          </div>
          {workspaceData.nextActions.length > 0 ? (
            <div className="notification-list">
              {workspaceData.nextActions.map((action, index) => (
                <article className="notification-item" key={`${action.name}-${action.due}-${index}`}>
                  <button className="notification-open" type="button" onClick={() => openLead(action.name)}>
                    <strong>{action.name}</strong>
                    <span>{action.status}</span>
                    <small>Due {action.due} · {action.owner}</small>
                  </button>
                  <button
                    className="notification-complete"
                    type="button"
                    aria-label={`Complete follow-up for ${action.name}`}
                    onClick={() => completeFollowUp(index)}
                  >
                    Done
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="notification-empty">You’re all caught up. New follow-ups will appear here.</div>
          )}
        </aside>
      )}

      {quickAction && (
        <div className="quick-sheet-backdrop" onClick={closeQuickAction}>
          <section
            className="quick-action-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-action-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="quick-sheet-header">
              <div>
                <span className="notification-kicker">Operator shortcuts</span>
                <h2 id="quick-action-title">
                  {quickAction === 'lead' ? 'Add prospect' : quickAction === 'follow-up' ? 'Log follow-up' : 'Instagram post'}
                </h2>
              </div>
              <button type="button" className="notification-close" onClick={closeQuickAction} aria-label="Close quick action">
                ×
              </button>
            </div>

            {quickAction === 'lead' && (
              <form className="quick-entry-form" onSubmit={saveLead}>
                <label>
                  Prospect name
                  <input
                    autoFocus
                    required
                    maxLength={100}
                    value={leadDraft.name}
                    onChange={(event) => {
                      setQuickFormError('');
                      setLeadDraft((current) => ({ ...current, name: event.target.value }));
                    }}
                    placeholder="Name"
                  />
                </label>
                <div className="quick-form-row">
                  <label>
                    Source
                    <select value={leadDraft.channel} onChange={(event) => setLeadDraft((current) => ({ ...current, channel: event.target.value }))}>
                      {['IG', 'X', 'Referral', 'Event', 'Other'].map((channel) => <option key={channel}>{channel}</option>)}
                    </select>
                  </label>
                  <label>
                    Temperature
                    <select value={leadDraft.temp} onChange={(event) => setLeadDraft((current) => ({ ...current, temp: event.target.value }))}>
                      {['Cold', 'Warm', 'Hot'].map((temperature) => <option key={temperature}>{temperature}</option>)}
                    </select>
                  </label>
                </div>
                <label>
                  Seat value
                  <input value={leadDraft.value} onChange={(event) => setLeadDraft((current) => ({ ...current, value: event.target.value }))} placeholder="$15k" />
                </label>
                {quickFormError && <p className="quick-form-error" role="alert">{quickFormError}</p>}
                <button className="quick-submit" type="submit">Save prospect</button>
              </form>
            )}

            {quickAction === 'follow-up' && (
              <form className="quick-entry-form" onSubmit={saveFollowUp}>
                <label>
                  Prospect
                  <select
                    required
                    value={followUpDraft.name}
                    onChange={(event) => setFollowUpDraft((current) => ({ ...current, name: event.target.value }))}
                  >
                    {workspaceData.leads.map((lead) => <option key={lead.name}>{lead.name}</option>)}
                  </select>
                </label>
                <div className="quick-form-row">
                  <label>
                    Due
                    <select value={followUpDraft.due} onChange={(event) => setFollowUpDraft((current) => ({ ...current, due: event.target.value }))}>
                      {['Today', 'Tomorrow', 'This week'].map((due) => <option key={due}>{due}</option>)}
                    </select>
                  </label>
                  <label>
                    Reminder
                    <input value={followUpDraft.status} onChange={(event) => setFollowUpDraft((current) => ({ ...current, status: event.target.value }))} maxLength={80} />
                  </label>
                </div>
                {quickFormError && <p className="quick-form-error" role="alert">{quickFormError}</p>}
                <button className="quick-submit" type="submit">Save follow-up</button>
              </form>
            )}

            {quickAction === 'instagram' && (
              <div className="instagram-composer">
                <label htmlFor="instagram-caption">Caption</label>
                <textarea
                  id="instagram-caption"
                  autoFocus
                  value={instagramCaption}
                  onChange={(event) => setInstagramCaption(event.target.value)}
                  placeholder="Write your caption..."
                  rows={5}
                />
                <p>Copy your caption, then finish and publish in Instagram. This workspace does not post to your account.</p>
                {instagramFeedback && <p className="instagram-feedback" role="status">{instagramFeedback}</p>}
                <div className="instagram-actions">
                  <button type="button" className="quick-submit" disabled={!instagramCaption.trim()} onClick={copyInstagramCaption}>
                    Copy caption
                  </button>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Open Instagram ↗</a>
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
