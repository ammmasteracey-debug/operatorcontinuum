import { useEffect, useRef, useState } from 'react';

const navItems = [
  { index: '01', label: 'Home', href: '#home', target: 'home' },
  { index: '02', label: 'Manual', href: '#manual', target: 'manual' },
  { index: '03', label: 'Leads', href: '#leads', target: 'leads' },
  { index: '04', label: 'Pipeline', href: '#pipeline', target: 'pipeline' },
  { index: '05', label: 'Prospecting', href: '#prospecting', target: 'prospecting' },
  { index: '06', label: 'Assets', href: '#assets', target: 'assets' },
  { index: '07', label: 'Outreach', href: '#outreach', target: 'outreach' },
  { index: '08', label: 'Pilot', href: '#pilot', target: 'pilot' },
  { index: '09', label: 'Operators', href: '#operators', target: 'operators' },
];

const navItemByTarget = Object.fromEntries(navItems.map((item) => [item.target, item]));

const navLabelByTarget = {
  home: 'Home',
  manual: 'Manual',
  leads: 'Leads',
  pipeline: 'Pipeline',
  prospecting: 'Prospecting',
  assets: 'Assets',
  outreach: 'Outreach',
  pilot: 'Pilot',
  operators: 'Operators',
};

const mobileNavIconPaths = {
  home: 'M3 10.5 12 3l9 7.5M5 9v12h14V9M9 21v-7h6v7',
  manual: 'M6 3.5h12v17l-6-3-6 3zM9 8h6M9 11h6',
  leads: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 8v6M16 11h6',
  pipeline: 'M4 4h4v16H4zM10 4h4v10h-4zM16 4h4v13h-4z',
  prospecting: 'M4 5h16M4 12h10M4 19h7M18 14v7M14.5 17.5h7',
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
    description: 'The Black Book is the law: work through doctrine, offer, sale, comp, compliance, and the LD-1042 field exercise.',
  },
  {
    target: 'leads',
    title: 'Review individual leads',
    description: 'Open the LD-1042 demo record to practice reading attribution, activity, notes, next action, and stage before moving to the pipeline board.',
  },
  {
    target: 'pipeline',
    title: 'Work the pipeline',
    description: 'Review prospects by their fixed stage and open any card to return to its lead record.',
  },
  {
    target: 'prospecting',
    title: 'Build the field process',
    description: 'Appointment → Present → Close. Segment by personality. Fast Start installs the machine same day. Leadership duplicates the standard, not ranks. Compensation applies only to closed, paid, attributed seats under written terms.',
  },
  {
    target: 'assets',
    title: 'Share approved assets',
    description: 'Use these Group links to introduce the doctrine, Method, and access path. Do not add performance claims.',
  },
  {
    target: 'outreach',
    title: 'Use approved outreach',
    description: 'Copy the approved warm, outbound, follow-up, and objection responses from the quick-send library. Adapt lightly; never rewrite the law.',
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

const personalityTypes = [
  { code: 'C', label: 'Competitive / hustle / influencer' },
  { code: 'E', label: 'Emotionally motivated' },
  { code: 'F', label: 'Factually motivated' },
  { code: 'H', label: 'Humanity motivated' },
];

const personalityQuestions = [
  {
    question: 'What kind of opening tends to hold their attention?',
    answers: {
      C: 'A direct challenge, benchmark, or opportunity to lead.',
      E: 'A story that connects to a personal goal or turning point.',
      F: 'A clear explanation with specifics they can verify.',
      H: 'A conversation about people, trust, and shared purpose.',
    },
  },
  {
    question: 'What do they ask for before deciding whether to continue?',
    answers: {
      C: 'The edge, the standard, and what serious operators do differently.',
      E: 'How the process could fit the future they want.',
      F: 'The written terms, unit, risks, and how the process works.',
      H: 'Who is involved and how the Group treats its people.',
    },
  },
  {
    question: 'What makes a conversation feel credible to them?',
    answers: {
      C: 'Confidence, pace, and a clear point of view.',
      E: 'Being heard and having their reasons understood.',
      F: 'Evidence, definitions, and room to inspect details.',
      H: 'Respect, candor, and a real human connection.',
    },
  },
  {
    question: 'How do they prefer to make a next-step decision?',
    answers: {
      C: 'Take a clear next action and own the decision.',
      E: 'Feel settled about the personal fit before acting.',
      F: 'Review the facts and written terms before responding.',
      H: 'Know the people and purpose are aligned.',
    },
  },
];

const prospectStates = ['Cold', 'Warm', 'Set', 'Presented', 'Holding', 'Closed—won', 'Closed—lost', 'Stale'];

const prospectingTracks = {
  C: {
    opener: 'I work with people who prefer a clear standard over market noise. Kurogami Group is operators, not spectators. Open to a direct look at the process?',
    engage: 'What would you need to verify before deciding whether a process seat is worth a conversation? I can point you to the doctrine and let you judge it.',
    ask_appt: 'If you want the full frame, let’s set a short appointment to review the presentation and published terms. Desk Access is a $15,000 process seat; no guaranteed returns. Process before outcome.',
    post_present_close: 'You’ve seen the process. If it fits, we can discuss Desk Access at the published $15,000 price. It is not signals or guaranteed returns. Do you want to review the written terms, or leave it here?',
    followup_24h: 'Following up once on the presentation. Take the time you need. Desk Access remains a $15,000 process seat, with no guaranteed returns. If it is not a fit, a clean no is fine.',
    no_signals: 'We do not sell signals or guaranteed returns. Desk Access is a $15,000 process seat under published terms. Process before outcome; if you need signals, we are not the fit.',
  },
  E: {
    opener: 'What are you hoping to get clearer about in the way you approach markets? Kurogami Group is built around process before outcome, not promises.',
    engage: 'What matters most to you when deciding whether a new process or group deserves your time? I can share the doctrine first, with no pressure to continue.',
    ask_appt: 'Would a short appointment to walk through the presentation help you decide if the process fits? Desk Access is a $15,000 seat under published terms; no guaranteed returns.',
    post_present_close: 'Now that you have seen the process, does it fit what you are looking for? Desk Access is a $15,000 process seat, not a return promise. We can review the terms together or leave it here.',
    followup_24h: 'Checking in after yesterday’s presentation. What questions came up for you? There is no pressure to continue. Desk Access is a $15,000 process seat; no guaranteed returns.',
    no_signals: 'We do not offer signals or promise outcomes. Desk Access is a $15,000 process seat under published terms. If signals are what you need, we are not the fit.',
  },
  F: {
    opener: 'Kurogami Group works from written doctrine: process before outcome, named risk, and published terms. Would you like the doctrine link to review?',
    engage: 'What information do you need to evaluate a process seat? I can share the published terms and explain what Desk Access does—and does not—include.',
    ask_appt: 'Let’s set a short appointment to review the presentation, scope, and written terms. Desk Access is the published $15,000 process seat. It includes no signals or guaranteed returns.',
    post_present_close: 'The unit is Desk Access at the published $15,000 price: process access under written terms, not signals or a return promise. Would you like to review those terms or close the loop?',
    followup_24h: 'Following up on the presentation. The published unit is a $15,000 process seat; outcomes are not guaranteed. I can answer questions about the written terms, or mark this closed.',
    no_signals: 'We do not sell signals or guaranteed returns. Desk Access is a $15,000 process seat under published terms. Process before outcome. If you need signals, this is not the fit.',
  },
  H: {
    opener: 'I work with Kurogami Group on a simple standard: process before outcome, and a clean no is respected. Would you like to hear how the Group works?',
    engage: 'What would help you feel comfortable evaluating a process seat? I can share the doctrine and answer plainly; there is no obligation to continue.',
    ask_appt: 'Would you be open to a short appointment to review the presentation together? Desk Access is a $15,000 process seat under published terms, with no guaranteed returns.',
    post_present_close: 'Thanks for taking the time to review it. Desk Access is a $15,000 process seat, not signals or a return promise. Does the written process fit, or would you rather leave it here?',
    followup_24h: 'Thank you for the conversation yesterday. I wanted to check whether you have questions after the presentation. No pressure either way; Desk Access is a $15,000 process seat with no guaranteed returns.',
    no_signals: 'We do not offer signals or guaranteed returns. Desk Access is a $15,000 process seat under published terms. If that is not what you need, I respect that and will close the loop.',
  },
};

const prospectingTrackSteps = [
  { id: 'opener', label: 'Opener' },
  { id: 'engage', label: 'Engage' },
  { id: 'ask_appt', label: 'Ask appointment' },
  { id: 'post_present_close', label: 'Post-present close' },
  { id: 'followup_24h', label: '24-hour follow-up' },
  { id: 'no_signals', label: 'No signals' },
];

const fastStartSteps = [
  { id: 'FS-0', label: 'In', detail: 'Seat/pilot + Continuum + Black Book' },
  { id: 'FS-1', label: 'Frame', detail: 'Present watched + laws + never-sell' },
  { id: 'FS-2', label: 'List', detail: '10 names + personality tags' },
  { id: 'FS-3', label: 'Outreach', detail: '≥5 appointment asks' },
  { id: 'FS-4', label: 'Present', detail: '≥1 delivered' },
  { id: 'FS-5', label: 'Close', detail: '≥1 seat conversation logged' },
  { id: 'FS-6', label: 'Lead', detail: 'Leadership session done' },
];

const leadershipChecklist = [
  { id: 'laws', label: 'State the laws and what is never sold.' },
  { id: 'list', label: 'Review the operator’s list of 10.' },
  { id: 'quiz', label: 'Review the top five personality reads.' },
  { id: 'send', label: 'Complete one live, doctrine-safe send.' },
  { id: 'followups', label: 'Log the 24-hour asks and next actions.' },
];

const leadershipAcknowledgements = [
  { id: 'doctrine', label: 'I will represent the published doctrine and terms.' },
  { id: 'standard', label: 'Leadership duplicates the standard, not rank or downline.' },
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

const outreachTracks = [
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
];

const objectionResponses = [
  {
    title: 'Price',
    text: 'Desk Access is the published $15,000 seat for Group process and desk access. I can’t offer an in-field discount; any exception goes to Admin.',
  },
  {
    title: 'Proof / returns',
    text: 'We don’t promise returns. Method explains the process; outcomes and market risk remain yours.',
  },
  {
    title: 'Smaller start',
    text: 'The published unit is the seat. I can’t invent a smaller tier to close.',
  },
  {
    title: 'How fast do I get paid?',
    text: 'Desk Access is process access, not a payout or passive-income promise. Closer compensation is internal and only applies under its written terms.',
  },
  {
    title: 'Equity / partner',
    text: 'Desk Access is not equity or a partnership. Those requests go to Admin.',
  },
  {
    title: 'Send it so I can think',
    text: 'Take your time. Here are the Group site and Method. If you’d like, we can set a date to reconnect; otherwise, I’ll close the loop.',
  },
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
          'Curriculum I lives in Black Book § Curriculum I; Method desk is the live train surface.',
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
        items: outreachTracks,
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
  {
    title: 'Statecraft Curriculum I',
    kind: 'curriculum',
  },
  {
    title: 'Statecraft Curriculum II',
    kind: 'curriculum-field',
  },
  {
    title: 'Capital Loop — Curriculum III',
    kind: 'curriculum-capital-loop',
  },
  {
    title: 'Field Training',
    blocks: [
      {
        type: 'training',
        heading: 'Practice with LD-1042',
        intro: 'Load demo data, then open M. Reyes (LD-1042) from the lead registry. The prospect is warm, attributed to HARRY-PILOT, and at Method shared. The prospect asked whether this is signals; that boundary was clarified, Method was shared, and price has not yet been discussed.',
        objective: 'Practice the next correct action—not the fastest close. Confirm Method engagement, re-check qualification, and keep the record truthful.',
        steps: [
          'Review the complete activity log before contacting the prospect.',
          'Confirm whether they engaged with Method. Do not advance to price based only on the asset being sent.',
          'If Method is engaged and all five qualification checks pass, begin a seat conversation using the approved seat frame.',
          'If they want signals or guaranteed outcomes, make a clean no and record the reason as Closed lost.',
          'If they fit but timing is wrong, use Nurture and record one dated next action.',
          'Escalate price exceptions, team seats, legal questions, or partnership requests to Admin before speaking for the Group.',
        ],
        cta: 'Open LD-1042 in Leads',
        note: 'Training paths are examples, not permission to promise outcomes, skip qualification, or change published terms.',
      },
      {
        type: 'table',
        heading: 'Continuum record standard',
        columns: ['Field', 'Record standard'],
        rows: [
          ['Lead ID / identity', 'Unique record ID, name, and handle where available.'],
          ['Channel / owner', 'Actual source and accountable operator.'],
          ['Attribution / eligibility', 'Use the assigned attribution code; eligibility is not compensation until the seat is closed, paid, and attributed.'],
          ['Temperature / stage', 'Use the approved value and exact pipeline stage; update only when the stage evidence exists.'],
          ['Seat value / objection tags', 'Use the published seat value; tag only objections that were actually raised.'],
          ['Next action / due', 'One specific next step with a date; nurture is never an indefinite chase.'],
          ['Notes / activity', 'Write concise factual notes and chronological touches, assets, stage changes, and next actions.'],
          ['Created / updated', 'Preserve the record’s actual creation date and update it when the record changes.'],
        ],
      },
      {
        type: 'table',
        heading: 'Resource routing & audience',
        columns: ['Resource', 'When / audience', 'Boundary'],
        rows: [
          ['Group home — https://www.kurogamigroup.com/', 'First serious touch.', 'Prospect-facing; use the approved message in Assets.'],
          ['Doctrine — https://www.kurogamigroup.com/doctrine', 'After interest; before Method if they need posture.', 'Use doctrine to explain posture, not as a proof or returns claim.'],
          ['Desks overview — https://www.kurogamigroup.com/desks', '“What am I joining?” / system map.', 'Explain the system; pitch one seat, not six products.'],
          ['Whitepaper — https://www.kurogamigroup.com/whitepaper', 'Deeper architecture context only.', 'Not a close tool.'],
          ['Roadmap — https://www.kurogamigroup.com/roadmap', 'Timeline questions only.', 'Do not imply a guaranteed delivery or outcome.'],
          ['Official Access (site) — https://www.kurogamigroup.com/access', 'Seat conversation / buyer path on the main site.', 'Use published terms and price only.'],
          ['Statecraft Method — https://statecraft-academy.vercel.app/#method', 'Before a seat conversation; required seriousness filter.', 'Do not describe it as signals or returns.'],
          ['Board — https://statecraft-control-surface.vercel.app/desk', 'Only if they ask how capacity / governance works.', 'Do not present governance as a performance guarantee.'],
          ['Veil — https://veilcapacity-brown.vercel.app/', 'Risk / exposure questions.', 'Risk is named and bounded; no guarantee wrapper.'],
          ['Arcade — https://kurogami-arcade.vercel.app/', 'Practice / reps questions.', 'Practice under rules; not a P&L contest.'],
          ['Forge — https://kurogami-forge-index.vercel.app/', 'Build / systems questions.', 'Do not imply equity or a co-founder role.'],
          ['Access desk (app) — https://statecraft-academy.vercel.app/', 'After Method; seat entry surface.', 'Process access—not signals or guaranteed returns.'],
          ['The Black Book — Continuum /manual', 'Closers and operators only.', 'Internal manual; do not send as a prospect PDF unless Admin approves.'],
          ['Investor / opportunity one-pager', 'Admin-directed conversations only.', 'Use only a specific URL published by Admin; none is configured here.'],
          ['Operator Continuum (ops) — https://operatorcontinuum.vercel.app/', 'Closers / pilots only.', 'Internal field desk; do not send as a prospect sales link unless Admin approves.'],
        ],
        note: 'Do not send random decks, personal P&L as a promise, or third-party proof that implies guaranteed returns.',
      },
      {
        type: 'list',
        heading: 'Training completion check',
        items: [
          'Can explain the three laws without adding a performance claim.',
          'Can state the Desk Access default price and identify which terms require Admin.',
          'Can name the required stage evidence and choose lost or nurture without leaving a record in limbo.',
          'Can distinguish prospect-facing Group materials from internal-only resources.',
          'Can log a touch, attribution, objection, and dated next action in Continuum.',
        ],
        note: 'The field standard: sell process and Desk Access only. A clean no protects the standard.',
      },
    ],
  },
];

const capitalLoopModuleRows = [
  ['III-0', 'Orientation & Law · Gate', 'Acknowledge the surface, banking, tax, health-factor, liquidation, and accountability boundaries.'],
  ['III-1', 'Hardening', 'Choose and record what capital moves to a collateralizable surface.'],
  ['III-2', 'Collateral Engine · Gate', 'Name the asset, initial borrow limit, and repayment path; record and monitor the position.'],
  ['III-3', '40% Recovery Framing', 'Illustrative comparison of friction, not a return, recovery schedule, or tax result.'],
  ['III-4', 'Borrow Mechanics', 'Name and record the asset, limits, fees, repayment path, and liquidation consequences.'],
  ['III-5', 'Black Card & Form Factors', 'Spending draws against the existing borrow and remains subject to health factor.'],
  ['III-6', 'Redeploy', 'Record the destination and risk before borrowed capital moves.'],
  ['III-7', 'Agent Role', 'Review and acknowledge written permissions, approvals, override, kill switch, and logging.'],
  ['III-8', 'Business & Individual Tracks', 'Use the same process with the required authority and compliance documentation.'],
];

const capitalLoopModuleDetails = [
  {
    title: 'III-0 Orientation & Law',
    gate: true,
    paragraphs: [
      'Capital Loop is a process surface inside Desk Access. It is not a separate product. It is not a bank. It is not tax advice.',
      'The operator acknowledges before any further module:',
    ],
    lists: [{
      items: [
        'This surface does not create a bank account.',
        'This surface does not provide FDIC insurance.',
        'Spending or borrowing against collateral does not automatically eliminate taxable events in every jurisdiction. Tax treatment is the operator’s responsibility.',
        'Health factor and liquidation rules apply to every borrow.',
        'No recovery of traditional banking friction is guaranteed.',
        'The asset remains owned only while the health factor is maintained.',
      ],
    }],
    closing: 'Process before outcome. Risk is named, bounded, and owned. The operator remains accountable.',
  },
  {
    title: 'III-1 Hardening',
    paragraphs: [
      'Idle capital in traditional banking rails faces three structural costs: outage or gate risk, inflation erosion, and intermediary friction. Hardening is the deliberate movement of capital onto surfaces where it can be collateralized.',
      'Hardening is not automatic. The operator chooses which capital moves, when it moves, and into which asset class. The decision is recorded. The capital that remains in traditional rails is acknowledged as remaining exposed to those rails.',
      'Once capital is hardened, it becomes eligible for the Collateral Engine. Until it is hardened, it cannot be collateralized under this surface.',
    ],
  },
  {
    title: 'III-2 Collateral Engine',
    gate: true,
    paragraphs: [
      'An asset is tokenized or staked. A health factor is calculated against the current value of the asset and the amount borrowed against it. The operator may borrow against the asset without selling it.',
      'The asset remains owned. The borrow is a liability against the asset. The maximum borrow is limited by the health factor. If the health factor falls below the defined threshold, the protocol may liquidate a portion of the collateral to restore the threshold.',
      'The operator names the asset, the initial borrow limit, and the repayment path before any borrow is executed. The Collateral Engine records the position. The operator can view the health factor at any time.',
      'No borrow is available until III-0 and this module are complete.',
    ],
  },
  {
    title: 'III-3 40% Recovery Framing',
    paragraphs: [
      'Traditional banking creates friction through three mechanisms: a taxable event when an asset is sold to create liquidity, inflation that reduces purchasing power of idle capital, and intermediary cost that extracts a portion of every transaction.',
      'Collateralized borrowing structurally reduces that friction relative to selling the underlying asset. The reduction is illustrative. It is not a guarantee. Actual tax treatment depends on jurisdiction, holding period, and the specific structure of the borrow. The operator is responsible for reporting.',
      'The 40% figure is a framing device for the combined friction of tax, inflation, and intermediary cost in traditional rails. It is not a promised return. It is not a recovery schedule. It is a description of the structural difference between selling and borrowing against an owned asset.',
    ],
  },
  {
    title: 'III-4 Borrow Mechanics',
    paragraphs: ['Before any borrow is executed, the operator names:'],
    lists: [{
      items: [
        'The asset being collateralized.',
        'The current health factor threshold.',
        'The maximum loan-to-value permitted.',
        'The interest or fee structure of the borrow.',
        'The repayment path.',
        'The liquidation threshold and consequence.',
      ],
    }],
    closing: 'The borrow is limited by the health factor. Interest accrues against the borrowed amount. Repayment restores health factor. Failure to maintain the health factor triggers the defined liquidation process. The operator owns the risk. The protocol enforces the rules. No borrow proceeds until these parameters are named and recorded.',
  },
  {
    title: 'III-5 Black Card & Form Factors',
    paragraphs: [
      'Spending surfaces draw from the borrow, not from a sale of the underlying asset. Available spend is capped by the current health factor. If the health factor falls, available spend falls with it.',
      'Form factors include card, phone wallet, wearable, and ring. The form factor changes the interface. It does not change the source of funds. Every spend is a draw against the existing borrow. Every spend is logged. Every spend is subject to the health factor at the time of the spend.',
      'The Black Card is a payment rail. It is not a bank account. It is not ownership of the collateral. It is a form factor of the Collateral Engine borrow.',
    ],
  },
  {
    title: 'III-6 Redeploy',
    paragraphs: ['Borrowed capital may be directed in three ways:'],
    lists: [{
      items: [
        'Returned to the desk for process execution under Curriculum I rules.',
        'Used to acquire additional collateral, increasing the base against which future borrows can be taken.',
        'Directed to agent-managed positions under a written rule set.',
      ],
    }],
    closing: 'Each redeploy is a named action. Each redeploy carries the risk of the surface it enters. The operator records the direction before the capital moves. The health factor of the original collateral position remains visible. Redeploy does not erase the borrow. The liability remains until repaid.',
  },
  {
    title: 'III-7 Agent Role',
    paragraphs: [
      'A process-trained agent may monitor the health factor of collateralized positions and execute within a written rule set. The rule set names what the agent may do without human confirmation and what requires explicit approval.',
      'The human operator remains accountable for every action the agent takes. An override and a kill switch are required. Agent actions are logged in Continuum. The agent does not own the collateral. The agent does not own the borrow. The agent executes process under rules the operator has written.',
      'No agent is enabled until the operator has reviewed and acknowledged the rule set.',
    ],
  },
  {
    title: 'III-8 Business & Individual Tracks',
    paragraphs: [
      'The Capital Loop is available to an individual seat or a firm seat. The process is the same. The authority and compliance requirements differ.',
      'An individual seat requires the operator’s acknowledgment of III-0 and III-2. A firm seat requires documented authority to collateralize assets and to borrow against them. The firm seat also requires a named compliance contact and a written acknowledgment that the firm remains responsible for its own regulatory and tax obligations.',
      'Same law. Same health factor. Same accountability. The track changes the documentation required, not the process.',
    ],
  },
];

const capitalLoopPolicies = [
  {
    title: 'Gates',
    text: 'III-0 and III-2 must be marked complete in Continuum before any collateral position can be opened or any spend surface can be enabled. All other modules may be reviewed at any time. Agent surfaces require an additional rule-set acknowledgment after III-7.',
  },
  {
    title: 'Never-sell',
    text: 'No module in Curriculum III grants a tax exemption, a recovery guarantee, a bank account, or a promise that spending creates zero taxable events. The operator remains responsible for jurisdiction-specific obligations.',
  },
];

const capitalLoopOnboardChecklist = [
  'Capital Loop orientation (III-0) completed',
  'Collateral Engine mechanics (III-2) completed',
  'III-0 and III-2 marked complete in Continuum before opening a collateral position or enabling a spend surface',
  'Agent rule set reviewed and acknowledged before enabling an agent surface',
  'Firm authority, compliance contact, and firm regulatory and tax responsibility documented (firm seat)',
];

const curriculumOverview = [
  ['Name', 'Statecraft Academy'],
  ['Flagship track', 'Money Process (Ac3y desk machine)'],
  ['Length', '11 units (M0–M10) + Capstone'],
  ['Mode', 'Self-paced inside live desk rhythm'],
  ['Surfaces', 'Desk OS · Arcade · Veil · Forge'],
  ['Outcome', 'Operator band + eligibility to seed agent clone'],
  ['Transfer', 'Same spine → general Agentic Academy later'],
];

const curriculumPackageDefinition = 'Full Statecraft Money Process curriculum · Desk OS access (symbol strip / state machine) · Arcade path · Veil capacity framing · Forge operator profile track · Agent-mirror module · Capstone review standard · Not unlimited 1:1 · Not a profit guarantee';

const curriculumProgression = [
  'M0 Machine literacy',
  'M1 Trend environment',
  'M2 Stophunt',
  'M3 Clock law',
  'M4 Legs / entry signal',
  'M5 Risk kernel',
  'M6 Manage / shark fin exit',
  'M7 News = vol only',
  'M8 Capacity (Arcade + Veil)',
  'M9 Rotation desk',
  'M10 Agent mirror',
  'Capstone State license',
];

const curriculumModules = [
  {
    id: 'm0',
    catalogTitle: 'M0 Machine literacy',
    title: 'Module 0 — Machine literacy',
    focus: 'S0–S15 language · journal as state log · illegal ≠ immoral',
    deliverables: 'State table from memory · 1 clean state-only day log',
    gate: 'State ID quiz + zero-narrative log',
    arcade: 'MA',
    forgeSeed: 'Profile created (status: training)',
    paragraphs: [
      'This module installs one idea: you do not trade opinions; you occupy **states**. The desk is a finite machine (S0–S15). Every chart moment maps to a legal state or it is noise. Journaling becomes a state log — timestamp, symbol, state, event, next legal action — not a diary of hope and fear. Until you can name states cold, every “setup” you think you see is still subjective.',
      'Application is immediate. Before size, before entries, you practice translating tape into machine language. Illegal actions are not moral failures; they are **out-of-transition** events. This is also the first agent lesson: an agent cannot “feel” a trade; it can only be in a state. Humans who skip this module train clones that inherit chaos.',
    ],
  },
  {
    id: 'm1',
    catalogTitle: 'M1 — Scan → Trend confirmed',
    title: 'Module 1 — Scan → Trend confirmed',
    focus: 'H1 TDI MBL vs S50 · environment ≠ entry · multi-asset scan',
    deliverables: '20 H1 trend marks · USD alignment notes · 0 entries',
    gate: 'Trend log only, pass accuracy on review set',
    arcade: '—',
    forgeSeed: 'Process notes started',
    paragraphs: [
      'Trend is not a story about the asset. It is a **defined event** on H1: TDI MBL cross relative to S50 (bull or bear). Scan means the symbol is under watch with no permission to enter. Trend confirmed means the environment state has flipped; it does not mean “buy now.” Most retail loss comes from collapsing environment and execution into one emotional beat. Here they stay split.',
      'You apply this across asset classes because the same infrastructure rotates through FX, metals, indices, crypto, and commodities. The work is spotting which class is in confirmed trend and which is still noise — and logging USD alignment without turning news into prophecy. Twenty clean trend marks with **zero entries** is the gate: restraint is part of the skill.',
    ],
  },
  {
    id: 'm2',
    catalogTitle: 'M2 — Stophunt discipline',
    title: 'Module 2 — Stophunt discipline',
    focus: 'HOD/LOD hunt · `AWAIT_STOPS` → `STOPS_TAKEN` · no pre-hunt entries',
    deliverables: '15 annotated hunts · red-team early-entry list',
    gate: 'Sample week with zero pre-hunt entries',
    arcade: 'TORII (window)',
    forgeSeed: '—',
    paragraphs: [
      'Liquidity is taken before continuation. HOD/LOD breaches (especially around Asia / pre-NY) are treated as **events**, not candles to chase. `AWAIT_STOPS` is a real state: you may have trend and still have no right to leg entry. Entering before the hunt completes is the most common way disciplined-looking traders still bleed.',
      'In practice you annotate hunts: what extreme ran, when, whether trend state was already live. The agent version of this rule is brutal and useful — no LEG1 arming until stops flag is true. Humans hate waiting; the machine does not. This module builds the patience the clone will be forced to keep.',
    ],
  },
  {
    id: 'm3',
    catalogTitle: 'M3 — Clock as law',
    title: 'Module 3 — Clock as law',
    focus: 'NY primary · lunch 12:00–13:30 ET · new-risk cut 15:00 · overnight flag only if pre-declared',
    deliverables: '1 week full session tags · written overnight policy',
    gate: 'No off-policy timestamps',
    arcade: '—',
    veil: 'Log stress when clock is broken',
    forgeSeed: 'Session policy on profile',
    paragraphs: [
      'Time is not preference. NY is the primary window; lunch (12:00–13:30 ET) changes behavior; **new risk cuts at 15:00 ET** unless an overnight plan was declared in advance. Session tags on the strip are part of state, not decoration. When the clock says blocked, the only professional action is no new entry.',
      'This module fixes the lifestyle failure mode where life orbits the chart. The market fits a schedule; you do not dissolve into every tick. Capacity ties in here: clock-breaking is often stress behavior, which Veil will later grade. Operators who cannot obey the clock cannot supervise an agent that must obey it harder.',
    ],
  },
  {
    id: 'm4',
    catalogTitle: 'M4 — Legs & entry signal',
    title: 'Module 4 — Legs and entry signal',
    focus: 'M15 13EMA LEG1/LEG2 · confirmation budget · `DEAD_SETUP`',
    deliverables: '25 leg logs · dead vs live marks',
    gate: '≥80% dead/live accuracy on review set',
    arcade: 'KATA_PATH',
    forgeSeed: 'Entry model locked on card draft',
    paragraphs: [
      'Execution lives on M15 after stops are taken. First leg: first close beyond 13EMA off the extreme in trend direction. Second leg: structure holds; second close beyond 13EMA without breaking the first leg’s extreme. Confirmation budget is finite (about three to four real attempts); beyond that the setup is dead. The geometry often reads outside bar → consolidation → outside bar — but geometry is secondary to **definition**.',
      'Application is mechanical logging of LEG1/LEG2/DEAD. Subjective “it looks ready” is illegal. This is the highest-leverage module for agent training: two-leg confirmation is pure state transition. Mastery means you can watch a strip and know whether the machine may offer `ENTRY_SIGNAL` without talking yourself into it.',
    ],
  },
  {
    id: 'm5',
    catalogTitle: 'M5 — Risk kernel',
    title: 'Module 5 — Risk kernel',
    focus: 'Two-miss sizing · R pre-declared · concurrent + correlation caps',
    deliverables: 'Size sheet for 3 account levels · strip size discipline',
    gate: 'No signal without pre-declared size',
    arcade: '—',
    forgeSeed: 'Max concurrent + risk notes',
    paragraphs: [
      'Size is policy, not courage. The book is built so **two full misses** do not destroy the method or force desperate lot changes. R is defined before the order; concurrent names and correlation groups are capped. The strip shows size next to state so you never enter from a blank risk field.',
      'Weak hands are usually undefined risk, not weak character. When risk is pre-declared, scratch and stop become administrative. The agent inherits the same kernel: it cannot “press” because today feels special. Humans who complete this module stop negotiating with the next trade and start operating a budget.',
    ],
  },
  {
    id: 'm6',
    catalogTitle: 'M6 — Manage & shark fin exit',
    title: 'Module 6 — Manage and shark fin exit',
    focus: 'Scratch vs stop · re-enter only on new legal confirm · H1 TDI band break after MBL',
    deliverables: '15 full cycles · exit taxonomy codes',
    gate: 'Every sample has exit reason code',
    arcade: 'KINTSUGI (repair / close clean)',
    forgeSeed: 'Exit model locked',
    paragraphs: [
      'Once in trade, management is narrow: against 13EMA you scratch or take the stop; you do not invent a third philosophy mid-flight. Exit preference on H1 is the **shark fin** — after MBL interaction, break of the outer TDI band in the direction of the move. Exit types are coded in the log so the book teaches you what actually ended winners and losers.',
      'Most traders study entries and ignore endings; then they give back what they earned. This module studies endings on purpose. For the agent, exit_signal is just another state: no fear of “leaving money on the table,” only whether the definition printed. Humans learn to trust the same definition.',
    ],
  },
  {
    id: 'm7',
    catalogTitle: 'M7 — News = vol regime',
    title: 'Module 7 — News as volatility regime',
    focus: 'USD calendar only · vol flag · never flips trend state',
    deliverables: '1 tagged news week · ban on direction myths in log',
    gate: 'Clean news logs',
    arcade: '—',
    forgeSeed: '—',
    paragraphs: [
      'USD events (ForexFactory-class) are fuel, not a compass. News may raise `vol_regime` and optionally block orders around tier-one releases; it does **not** flip `TREND_CONFIRMED`. The street narrative (“Fed said → direction”) is banned from the state log.',
      'You practice a full week of tagging events beside price without writing directional myths. This keeps the process digestible for AI and keeps you out of TV logic. The desk stays inside the algorithm; headlines are weather, not the map.',
    ],
  },
  {
    id: 'm8',
    catalogTitle: 'M8 — Capacity (Arcade + Veil)',
    title: 'Module 8 — Capacity (Arcade + Veil)',
    focus: 'Load bands · cabinets · capacity can force `BLOCKED`',
    deliverables: 'Assigned cabinets cleared · Veil band + cooldown policy written',
    gate: 'Arcade tier + Veil band on Forge stub',
    arcade: 'Path progress required (core set)',
    forgeSeed: 'Capacity section populated',
    paragraphs: [
      'Process skill without load tolerance is fragile. Arcade cabinets train attention, form, restraint, recovery; Veil band expresses how much concurrent heat and drawdown pressure you may carry. Capacity can force `BLOCKED` even when the chart is perfect. That is not self-sabotage; it is inventory control.',
      'On Forge, capacity sits beside process on the same card. Humans run Arcade now; later agents train through the same school and inherit bands. Buyers of agents are not only buying a pattern — they are buying a **vessel rated for load**. Skipping this module produces clever operators who still blow books when stress spikes.',
    ],
  },
  {
    id: 'm9',
    catalogTitle: 'M9 — Rotation desk',
    title: 'Module 9 — Rotation desk',
    focus: 'Same machine · multi-class strip · heat · what enters the algo next',
    deliverables: '5-class watchlist day · adherence under concurrent names',
    gate: 'Multi-symbol session under policy caps',
    arcade: 'GO_VEIL / MUSHIN as optional advanced',
    forgeSeed: 'Markets list finalized',
    paragraphs: [
      'The edge is not a single pair; it is the **loop across classes**. The same state machine runs while attention rotates to whatever is moving through the infrastructure in its timing. The strip becomes a small fleet: states, confirmations, heat, next legal action — per symbol, one language.',
      'You operate a multi-name day without turning it into chaos: max concurrent, correlation, which name is truly in LEG2 versus still SCAN. This is desk behavior, not retail monogamy with one chart. It is also how a money agent becomes a book agent rather than a one-shot signal bot.',
    ],
  },
  {
    id: 'm10',
    catalogTitle: 'M10 — Agent mirror',
    title: 'Module 10 — Agent mirror',
    focus: 'Propose / approve / reject on rules only · reason codes',
    deliverables: '10 shadowed proposals · reject codes only when illegal',
    gate: 'Human–agent agreement log complete',
    arcade: '—',
    forgeSeed: 'Harness section + mirror notes',
    paragraphs: [
      'You supervise proposals the way a desk head supervises a junior: **approve or reject on rules**, not on fear. The agent outputs state, action, size, reason codes. You reject only with codes like `STATE_ILLEGAL`, `CLOCK_BLOCK`, `CAPACITY_BLOCK`. If you reject because “it feels early” while the machine is legal, you are training inconsistency.',
      'This module is the bridge to product. Graduates can run human-only, or seed a clone that runs the same transitions. Forge literacy — reading process, capacity, harness on a card — is required. You are no longer only a trader; you are an operator who can rate vessels.',
    ],
  },
  {
    id: 'capstone',
    title: 'Capstone — State license',
    focus: '20 sessions state-only · adherence % · capacity compliance · Forge card draft',
    deliverables: 'Capstone pack + operator card draft (human → seeds agent)',
    pass: 'Training band on Forge · eligible for clone path',
    fail: 'Out-of-state actions → listed modules reset',
  },
];

const curriculumStates = [
  ['S0', 'IDLE'],
  ['S1', 'SCAN'],
  ['S2', 'TREND_CONFIRMED'],
  ['S3', 'AWAIT_STOPS'],
  ['S4', 'STOPS_TAKEN'],
  ['S5', 'LEG1_ARMED'],
  ['S6', 'LEG1_DONE'],
  ['S7', 'LEG2_ARMED'],
  ['S8', 'ENTRY_SIGNAL'],
  ['S9', 'PENDING_ORDER'],
  ['S10', 'IN_TRADE'],
  ['S11', 'MANAGE'],
  ['S12', 'EXIT_SIGNAL'],
  ['S13', 'FLAT'],
  ['S14', 'BLOCKED'],
  ['S15', 'DEAD_SETUP'],
];

const curriculumStrategyAnchors = [
  'Environment: H1 TDI MBL cross vs S50; continuation via 50EMA / MBL',
  'Hunt: HOD/LOD before legs',
  'Entry: M15 two-leg 13EMA after hunt',
  'Exit: H1 shark fin (band break after MBL)',
  'Clock: NY; 15:00 new-risk cut',
  'News: USD vol only',
];

const curriculumCapacity = [
  ['Arcade cabinets', 'Cognitive placement & drills'],
  ['Veil band', 'Stress / load / recovery'],
  ['Strip fields', 'veil_band, veil_stress, arcade_tier always visible'],
  ['Rule', 'Capacity may block entry even when chart state is live'],
];

const curriculumAssessment = [
  ['Process', 'Adherence % to legal transitions'],
  ['Capacity', 'Arcade tier + Veil band compliance'],
  ['Harness', 'Mirror logs · strip discipline · journal completeness'],
  ['Track', 'Illustrative until audited sample window'],
];

const curriculumCredentialPath = [
  'Capstone pass',
  'Forge operator profile (training → operator band)',
  'Optional: seed Ac3y-class agent card (clone of process)',
  'List/rent path only after grade thresholds (marketplace policy)',
  'Coin/brand = later participation layer (no yield promise in curriculum)',
];

const curriculumTransfer = [
  ['Desk state machine', 'Domain state machine'],
  ['Shark fin / legs', 'Domain confirmations'],
  ['Veil + Arcade', 'Same capacity school'],
  ['Forge card schema', 'Same card, different `class`'],
];

const curriculumOpsChecklist = [
  'Module pages M0–M10 + Capstone (you add body copy)',
  'Desk OS symbol strip live',
  'State chip legend published',
  'Arcade + Veil linked to profile',
  'Forge card draft flow',
  'Gate rubrics (pass/fail) per module',
  'Disclaimer block on sales + in-app',
  '$15k package boundary (what is / isn’t included)',
];

const curriculumSalesLock = 'Professional desk process as a state machine · capacity grading · path to agent clone · Forge operator track.\nNot financial advice. Not a profit guarantee. Not unlimited mentorship.';

const fieldCurriculumProgramOverview = [
  ['Name', 'Statecraft Academy — Curriculum II (Field)'],
  ['Flagship track', 'Sales / Ops · Appointment → Present → Close'],
  ['Length', 'F0–F10 + Capstone cycle'],
  ['Mode', 'Fast Start (48h) + ~2 weeks self-paced + live reps'],
  ['Surfaces', 'Black Book · Operator Continuum · Opportunity Present · Leadership one-pager'],
  ['Outcome', 'Field-literate operator: can set, present, close under law, run Fast Start, install next operator, use Sales/Ops agent within hard limits'],
  ['Relation to I', 'Parallel track. Desk (I) = markets process. Field (II) = seat placement. Neither replaces the other.'],
];

const fieldCurriculumIncludes = 'Full Field module set · Continuum workflow · approved tracks · Present literacy · objection + clean-no standard · Leadership Session pattern · Sales/Ops agent literacy';

const fieldCurriculumExclusions = 'Trading homework · TDI/EMA drills · signal product · residual/recruit-as-income scheme · unlimited 1:1 · profit or income guarantee';

const fieldCurriculumAudience = [
  'Pilot closers and field operators',
  'Desk Access holders who will originate seats under Black Book',
  'Operators who want elite process sales (high-ticket spine) inside fintech infrastructure—not signal farming',
];

const fieldCurriculumProgression = [
  'F0 Orientation & law',
  'F1 The machine',
  'F2 Fast Start',
  'F3 Personality system',
  'F4 Tracks & outreach',
  'F5 Opportunity Present',
  'F6 Close & compliance',
  'F7 Leadership',
  'F8 Continuum daily ops',
  'F9 Sales / Ops agent',
  'F10 Capstone (full cycle logged)',
];

const fieldCurriculumGlobalFail = 'Invented product, guaranteed returns, equity-for-seat, or recruit-as-income language = module reset and Admin review (not debate).';

const fieldCurriculumModules = [
  {
    title: 'F0 — Orientation & law',
    focus: 'Group posture · Three Laws · sell / never sell · desks at a glance (enough to explain Access, not trade) · Continuum tour · Black Book as law',
    paragraphs: [
      'Field starts with law, not hustle. You represent Kurogami Group under published terms. Desk Access is process and desk entry for the buyer—not signals, not a return promise, not passive income. Your job is to run a clean machine: appointment, present, close or clean no. Continuum is where truth lives; Black Book is the standard you do not rewrite in the DMs.',
      'Desks exist so you can answer “what am I joining?” without becoming a trading instructor. Method trains process; Access is the commercial door; Board, Veil, Arcade, Forge are real surfaces—but Field does not assign chart homework. If the prospect wants to learn the market machine, that is Curriculum I. If they want a seat under standard, that is your path.',
    ],
    deliverables: 'Continuum login confirmed · written or oral law gate',
    gate: 'Recite Three Laws + never-sell list without prompting',
    tools: 'Black Book · Continuum · Group site (Doctrine, Access, Desks)',
    forgeFieldSeed: 'Operator marked Field-training',
  },
  {
    title: 'F1 — The machine',
    focus: 'Appointment → Present → Close · Continuum states vs pipeline stages · fortune in the follow-up · why third-party present exists',
    paragraphs: [
      'The entire Field curriculum collapses to one spine: get the appointment, run the present, ask for the seat under published terms—or take a clean no. Everything else (tags, tracks, leadership, agents) supports that spine. Stages in Continuum (New → Contacted → Site/doctrine → Method shared → Seat conversation → Won / Lost / Nurture) are not vanity labels; they tell you what is allowed next.',
      'Third-party present (slideshow + voiceover or live under script) exists so the standard does not depend on your mood or improvisation. You are not paid to invent product. You are paid—under pilot terms—only when a seat is closed, paid, and attributed. Follow-up is where most operators leak; the machine assumes you will return to due-today until the file is won, lost, or dated nurture.',
    ],
    deliverables: 'Map 3 fictional leads to correct Continuum states/stages with next action',
    gate: '3/3 maps correct on review',
    tools: 'Continuum pipeline legend · Black Book sale process',
  },
  {
    title: 'F2 — Fast Start',
    focus: 'FS-0…FS-6 · list of 10 · KPIs · same-day urgency without fake scarcity',
    paragraphs: [
      'Fast Start is the installation ritual for a new field operator: identity under law, tools open, ten names in Continuum, tags, appointment asks, first present path. It is time-boxed on purpose. Urgency is operational (“due today, same-day present”)—not fabricated countdown timers or fake “only three seats left” theater unless Admin publishes real capacity limits.',
      'Your list of 10 is the first asset. Names without tags and next actions are noise. KPIs for Fast Start are completion of FS steps and logged asks—not fantasy revenue. If you cannot complete FS-0→FS-2, you do not advance to volume outreach.',
    ],
    deliverables: '10 names entered in Continuum with channel + next action',
    gate: 'FS-0–FS-2 complete',
    tools: 'Continuum Prospects · Fast Start checklist',
  },
  {
    title: 'F3 — Personality system',
    focus: 'C / E / F / H · quiz · ethics of adaptation',
    paragraphs: [
      'People do not fail appointments only because of price; they fail because the opener ignores how they decide. The C / E / F / H system exists to match tone and structure—not to manipulate. Ethics bound adaptation: you change pacing and emphasis inside approved tracks; you do not change price, guarantees, or product definition.',
      'Tag every name on the list of 10. Quiz yourself on the top 5 until the differences are automatic. Wrong tag is recoverable; inventing a new pitch because “this one is special” is how doctrine dies.',
    ],
    deliverables: 'All 10 tagged · quiz on top 5',
    gate: '10 tagged + quiz pass on top 5',
    tools: 'Personality tracks · Continuum tag fields',
  },
  {
    title: 'F4 — Tracks & outreach',
    focus: 'Full copy library by type · opener → ask appointment · no essay-pitch in DM',
    paragraphs: [
      'Approved tracks are the only outreach language. Opener establishes posture; the ask is for time (appointment), not for a wire in the first bubble. Essay-pitches in DM create argument and invite the prospect to negotiate product. Short, typed, logged.',
      'Send five type-matched appointment asks. Every send is an activity line in Continuum. No send outside the library without Admin approval. If they want “just the signals,” you end clean—you do not rebrand Desk Access mid-thread.',
    ],
    deliverables: '5 type-matched appointment asks sent and logged',
    gate: '5 logged asks with correct type tag',
    tools: 'Black Book talk tracks · Continuum Assets (copy buttons) · Group home / Doctrine links',
  },
  {
    title: 'F5 — Opportunity Present',
    focus: 'Slideshow · live script · voiceover script · mark Presented',
    paragraphs: [
      'The Present is the standard story: Group posture, what Desk Access is, what it is not, desks at a glance, path, compliance. Live or voiceover, you stay on script. After delivery, Continuum stage/activity reflects **Presented**—not “had a good chat.”',
      'Watch the voiceover once before you deliver. First delivery may be peer role-play if no live prospect is ready; the gate is delivery quality and logging, not a forced close. Present does not replace Method for buyers who need train depth; it positions Access under law.',
    ],
    deliverables: 'Watch voiceover once · deliver 1 present (prospect or peer) · logged Presented',
    gate: '1 delivered + logged',
    tools: 'Opportunity Slideshow · Voiceover Present · Continuum',
  },
  {
    title: 'F6 — Close & compliance',
    focus: 'Seat ask · objection map · clean no · payment · attribution · Admin escalations',
    paragraphs: [
      'The seat ask is plain: Desk Access, published price (default $15,000), process access under terms—not a return promise. Objections get Black Book answers, not debates. Clean no is a successful terminal state. Payment and attribution are what make a close real for pilot comp; verbal yes without payment is not Won.',
      'Escalations are mandatory: discount theater, multi-seat packages, equity language, institutional structure, “are you a broker,” anything off-book. Wrong sentence in the field costs more than a lost seat.',
    ],
    deliverables: '3 objection role-plays · one written clean-no line',
    gate: 'Objection literacy + clean-no line approved against Black Book',
    tools: 'Black Book objection map · Pilot rules · Continuum Won/Lost reasons',
  },
  {
    title: 'F7 — Leadership',
    focus: 'Leadership Session one-pager · their 10 · one live send under observation · no ranks / no passive team fantasy',
    paragraphs: [
      'On first serious install (or first win path), leadership is same-day duplication of the machine—not a rank chart. The new operator gets law, Continuum, list of 10, and one live send under observation. You are installing process, not building a downline narrative.',
      'No passive team income story. No “your team will make you rich.” Optional thank-you on referred closed paid seats only if Admin has written referral rules. Leadership checklist once—leader side or new operator side—gates this module.',
    ],
    deliverables: 'Leadership checklist complete once',
    gate: 'Checklist done (observed or documented)',
    tools: 'Leadership one-pager · Continuum',
  },
  {
    title: 'F8 — Continuum daily ops',
    focus: 'Due today · appointments calendar · assets · pilot comp rules (closed paid attributed only)',
    paragraphs: [
      'Continuum is the operating system. Due-today ignored is pipeline rot. Appointments without notes are theater. Assets exist so links and copy stay canonical. Pilot comp is simple and strict: share only on closed, paid, attributed seats; no share on almost.',
      'Run five consecutive days with zero ignored due-queue items. That habit is the job. Comp arguments that skip Continuum attribution fail by default.',
    ],
    deliverables: '5 days zero ignored due-queue',
    gate: '5-day hygiene log',
    tools: 'Continuum (Prospecting, Pipeline, Assets, Pilot)',
  },
  {
    title: 'F9 — Sales / Ops agent',
    focus: 'Third agent in the stack · inputs/outputs · state machine · hard rules · human remains accountable',
    paragraphs: [
      'Sales/Ops agent is literacy, not builder certification (unless a separate track says so). It may suggest copy, remind due-today, and later assist calendar/present flows—always inside approved language. It must not invent price, guarantee returns, offer equity, or frame recruiting as income.',
      'Human remains accountable for every external send and every stage change. Path: suggest copy → supervised send → later calendar/present automation only under Admin policy. Know three hard triggers where the agent must stop and escalate to human.',
    ],
    deliverables: 'Written answer—3 triggers when agent must escalate to human',
    gate: '3 correct escalation triggers',
    tools: 'Sales agent spec v0 · Black Book · Continuum',
  },
  {
    title: 'F10 — Capstone',
    focus: 'One full cycle logged: ask → set → present → seat conversation → won / lost / holding',
    paragraphs: [
      'Capstone is proof of the machine end-to-end. Continuum export or screenshots show the spine without narrative padding. Optional peer review checks doctrine adherence, not charisma. Fail conditions: invented terms, missing attribution on a claimed win, present never logged, due-queue abandoned mid-cycle.',
    ],
    deliverables: 'Full cycle pack (Continuum evidence)',
    pass: 'Cycle complete under law · gates F0–F9 satisfied',
    fail: 'Out-of-policy language or incomplete log → listed modules reset',
  },
];

const fieldCurriculumFastStart = [
  ['0–1', 'F0 law gate · watch Present once'],
  ['1–2', 'F2 list of 10 · F3 tags'],
  ['2–6', 'F4 appointment asks'],
  ['Same / next day', 'F5 present · F6 seat path'],
  ['On first install', 'F7 leadership same day'],
];

const fieldCurriculumGates = [
  ['Law', '3 laws + never-sell list'],
  ['Fast Start', 'FS-0–FS-2 complete'],
  ['Type', '10 tagged + 5 asks'],
  ['Present', '1 delivered + logged'],
  ['Close literacy', 'Objection + clean no'],
  ['Leadership', 'Checklist once'],
  ['Agent', '3 correct escalation triggers'],
  ['Capstone', 'Full cycle logged under law'],
];

const fieldCurriculumDeskTrack = [
  'Trade / process',
  'Desk OS, Method',
  'Money agent path',
];

const fieldCurriculumSalesTrack = [
  'Sales / ops',
  'Continuum, Present',
  'Sales agent path',
];

const fieldCurriculumResources = [
  'Black Book',
  'Continuum (Prospecting, Pilot, Assets)',
  'Opportunity Slideshow',
  'Voiceover Present',
  'Leadership one-pager',
  'Personality tracks',
  'Sales agent spec v0',
  'Group site (Doctrine, Access, Operators, Desks)',
];

const fieldCurriculumAssessment = [
  ['Law', 'Gate pass / fail (binary)'],
  ['Process', 'Appointment → Present → Close adherence; Continuum stage honesty'],
  ['Hygiene', 'Due-today, logging, asset use'],
  ['Leadership', 'Checklist once; no MLM narrative'],
  ['Agent', 'Escalation literacy'],
  ['Comp eligibility', 'Closed + paid + attributed only (pilot terms)'],
];

const fieldCurriculumOpsChecklist = [
  'Module pages F0–F10 in Black Book / Continuum Manual § Curriculum II',
  'Fast Start card published as front door',
  'Continuum stages aligned with Black Book',
  'Assets: Present, tracks, Leadership one-pager, Group URLs',
  'Gate rubrics pass/fail per module',
  'Disclaimer on sales surfaces + in-app',
  'Pilot comp rules visible on Pilot section',
  'Clear pointer: trading skill → Curriculum I',
];

const fieldCurriculumSalesLock = [
  'Curriculum II — Field trains Appointment → Present → Close under Kurogami Group law.',
  'It does not teach you to trade. It does not guarantee income.',
  'Comp—if you are on a written pilot—follows closed, paid, attributed Desk Access seats only.',
  'Not multilevel marketing. Not investment advice.',
];

const curriculumProgressStorageKey = 'operator-continuum-curriculum-i-progress';

function readCurriculumProgress() {
  try {
    const savedProgress = window.localStorage.getItem(curriculumProgressStorageKey);
    if (savedProgress === null) return { progress: {}, notice: '' };
    const parsedProgress = JSON.parse(savedProgress);
    const validModuleIds = new Set(curriculumModules.map(({ id }) => id));
    if (
      parsedProgress === null
      || typeof parsedProgress !== 'object'
      || Array.isArray(parsedProgress)
      || Object.entries(parsedProgress).some(([id, value]) => !validModuleIds.has(id) || typeof value !== 'boolean')
    ) {
      throw new Error('Saved curriculum progress has an invalid shape.');
    }
    return { progress: parsedProgress, notice: '' };
  } catch (error) {
    console.error('Unable to load Curriculum I progress.', error);
    return {
      progress: {},
      notice: 'Saved Curriculum I tracking could not be read; progress starts unchecked in this session.',
    };
  }
}

const assetGroups = [
  {
    title: 'Main site',
    range: '01–06',
    assets: [
      {
        title: 'Group home',
        whenToSend: 'First serious touch',
        url: 'https://www.kurogamigroup.com/',
        copy: 'Kurogami Group — operators, not spectators. Process before outcome.\nhttps://www.kurogamigroup.com/\nNot investment advice.',
        primary: true,
      },
      {
        title: 'Doctrine',
        whenToSend: 'After interest; before Method if they need posture',
        url: 'https://www.kurogamigroup.com/doctrine',
        copy: 'Group doctrine — process before outcome. Risk is named.\nhttps://www.kurogamigroup.com/doctrine\nNot investment advice.',
        primary: true,
      },
      {
        title: 'Desks overview',
        whenToSend: '“What am I joining?” / system map',
        url: 'https://www.kurogamigroup.com/desks',
        copy: 'The desks — Method, Board, Veil, Arcade, Forge, Access.\nhttps://www.kurogamigroup.com/desks\nOne seat. Process first.',
      },
      {
        title: 'Whitepaper',
        whenToSend: 'Deeper architecture context only (not a close tool)',
        url: 'https://www.kurogamigroup.com/whitepaper',
        copy: 'Kurogami Group whitepaper.\nhttps://www.kurogamigroup.com/whitepaper\nNot investment advice.',
      },
      {
        title: 'Roadmap',
        whenToSend: 'Timeline questions only',
        url: 'https://www.kurogamigroup.com/roadmap',
        copy: 'Group roadmap.\nhttps://www.kurogamigroup.com/roadmap',
      },
      {
        title: 'Official Access (site)',
        whenToSend: 'Seat conversation / buyer path on main site',
        url: 'https://www.kurogamigroup.com/access',
        copy: 'Desk Access — process seat under published terms. Default unit $15,000.\nhttps://www.kurogamigroup.com/access\nNot a return promise. Not investment advice.',
        primary: true,
      },
    ],
  },
  {
    title: 'Desks',
    range: '07–12',
    assets: [
      {
        title: 'Statecraft Method',
        whenToSend: 'Before seat conversation; required seriousness filter',
        url: 'https://statecraft-academy.vercel.app/#method',
        copy: 'Statecraft Method — how we train process.\nhttps://statecraft-academy.vercel.app/#method\nIf this doesn’t land, we don’t talk price.',
        primary: true,
      },
      {
        title: 'Board',
        whenToSend: 'Only if they ask how capacity/governance works',
        url: 'https://statecraft-control-surface.vercel.app/desk',
        copy: 'Board — govern capacity and standard.\nhttps://statecraft-control-surface.vercel.app/desk',
      },
      {
        title: 'Veil',
        whenToSend: 'Risk / exposure questions',
        url: 'https://veilcapacity-brown.vercel.app/',
        copy: 'Veil — protect. Risk is named and bounded.\nhttps://veilcapacity-brown.vercel.app/',
      },
      {
        title: 'Arcade',
        whenToSend: 'Practice / reps questions',
        url: 'https://kurogami-arcade.vercel.app/',
        copy: 'Arcade — practice under rules.\nhttps://kurogami-arcade.vercel.app/',
      },
      {
        title: 'Forge',
        whenToSend: 'Build / systems questions',
        url: 'https://kurogami-forge-index.vercel.app/',
        copy: 'Forge — build systems and operator infrastructure.\nhttps://kurogami-forge-index.vercel.app/',
      },
      {
        title: 'Access desk (app)',
        whenToSend: 'After Method; seat entry surface',
        url: 'https://statecraft-academy.vercel.app/',
        copy: 'Official Access desk.\nhttps://statecraft-academy.vercel.app/\nDesk Access is process access — not signals, not guaranteed returns.',
        primary: true,
      },
    ],
  },
  {
    title: 'Internal',
    range: '13',
    assets: [
      {
        title: 'Operator Continuum (ops)',
        whenToSend: 'Closers/pilots only — not a prospect toy',
        url: 'https://operatorcontinuum.vercel.app/',
        copy: '[INTERNAL] Operator Continuum — field desk. Black Book lives here.\nDo not send to cold prospects as a sales link unless Admin approves.',
        internal: true,
      },
    ],
  },
  {
    title: 'Opportunity Present',
    range: '14–15',
    assets: [
      {
        title: 'Opportunity Present slideshow',
        whenToSend: 'Share during a booked appointment; add the Admin-approved URL before field use',
        url: '',
        presentationKey: 'slideshowUrl',
        placeholder: 'Admin URL pending',
        copy: 'As promised, here is the Opportunity Present slideshow: [add approved slideshow URL]. Desk Access is a $15,000 process seat under published terms. No signals or guaranteed returns. Process before outcome.',
      },
      {
        title: 'Opportunity Present Voiceover v1',
        whenToSend: 'Use only with the approved slideshow; add the Admin-approved URL before field use',
        url: '',
        presentationKey: 'voiceoverUrl',
        placeholder: 'Admin URL pending',
        copy: 'Here is the Opportunity Present Voiceover v1: [add approved voiceover URL]. It explains the process, not a return promise. Desk Access is a $15,000 process seat under published terms.',
      },
    ],
  },
];

const assetCards = assetGroups.flatMap((group) => group.assets);

const defaultPilotAcknowledgement = {
  acknowledged: false,
  name: '',
  date: '',
  adminName: '',
  adminDate: '',
  adminNote: 'Admin sets exact % in writing',
};

const createFastStartChecklist = () => Object.fromEntries(fastStartSteps.map(({ id }) => [id, false]));

const createLeadershipSession = () => ({
  checklist: Object.fromEntries(leadershipChecklist.map(({ id }) => [id, false])),
  acknowledgements: Object.fromEntries(leadershipAcknowledgements.map(({ id }) => [id, false])),
  name: '',
  date: '',
  leaderOfRecord: '',
});

const createPresentationAssets = () => ({
  slideshowUrl: '',
  voiceoverUrl: '',
});

function createProspectTemplateRow(index) {
  return {
    id: `prospect-${index + 1}`,
    leadId: '',
    name: '',
    channel: '',
    personality: 'unknown',
    state: 'Cold',
    stage: 'New',
    nextAction: '',
    due: '',
  };
}

function createProspectingRows(leads = []) {
  const rows = leads.map((lead, index) => ({
    ...createProspectTemplateRow(index),
    id: lead.prospectId || `prospect-${index + 1}`,
    leadId: lead.id || '',
    name: lead.name || '',
    channel: lead.channel || '',
    personality: personalityTypes.some(({ code }) => code === lead.personality) ? lead.personality : 'unknown',
    state: prospectStates.includes(lead.state) ? lead.state : lead.temp === 'Cold' ? 'Cold' : 'Warm',
    stage: pipelineStages.some(({ label }) => label === lead.stage) ? lead.stage : 'New',
    nextAction: lead.nextAction || '',
    due: lead.due || '',
  }));
  return [...rows, ...Array.from({ length: Math.max(0, 10 - rows.length) }, (_, index) => createProspectTemplateRow(rows.length + index))];
}

function ManualBlock({ block, onCopyTrack, onOpenSample, hasSample }) {
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
      {block.type === 'training' && (
        <div className="manual-training-case">
          <p>{block.intro}</p>
          <p><strong>Objective:</strong> {block.objective}</p>
          <ol>{block.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          <button className="manual-training-link" type="button" disabled={!hasSample} onClick={onOpenSample}>
            {hasSample ? block.cta : 'Load demo data to open LD-1042'}<span aria-hidden="true">→</span>
          </button>
        </div>
      )}
      {block.note && <p className="manual-note">{block.note}</p>}
    </section>
  );
}

function ManualSectionBody({
  section,
  onCopyTrack,
  onOpenSample,
  onOpenField,
  hasSample,
  curriculumProgress,
  onToggleCurriculumModule,
  curriculumProgressNotice,
}) {
  if (section.kind === 'curriculum') {
    return (
      <div className="curriculum-shell">
        <section className="curriculum-intro">
          <div className="manual-section-kicker">TRAIN TRACK / GROUP LAW</div>
          <h4>Statecraft Curriculum I</h4>
          <p className="curriculum-subtitle">Train track under Group law</p>
          <p>
            Curriculum I is how operators learn the Statecraft process before and beside Desk Access. It is education and process training — not trade signals, not a return promise, not passive income.
          </p>
          <p className="curriculum-closer-rule">
            Closers: do not sell Curriculum as a substitute for Desk Access unless Admin publishes a separate priced unit. Default commercial unit remains Desk Access ($15,000).
          </p>
          <a href="https://statecraft-academy.vercel.app/#method" target="_blank" rel="noopener noreferrer">
            Open Method desk <span aria-hidden="true">↗</span>
          </a>
        </section>
        <aside className="curriculum-field-rules" aria-label="Field rules">
          <h4>Field rules</h4>
          <ul>
            <li>Curriculum supports the standard; it does not replace Desk Access pricing.</li>
            <li>Do not promise profits from completing modules.</li>
            <li>Do not past curriculum PDFs that contradict Black Book laws.</li>
            <li>If prospect only wants “the course” with no seat path, clarify units with Admin — do not invent a price.</li>
          </ul>
        </aside>
        <aside className="curriculum-closer-fast-path" aria-label="Fast path for closers">
          <div>
            <h4>Fast path for closers</h4>
            <p>Already cleared to close? Curriculum I is not a prerequisite for Field. Go straight to §08 for the Appointment → Present → Close track.</p>
          </div>
          {onOpenField && <button type="button" onClick={onOpenField}>Open §08 / Field</button>}
        </aside>
        <CurriculumContent
          progress={curriculumProgress}
          onToggleModule={onToggleCurriculumModule}
          progressNotice={curriculumProgressNotice}
        />
        <footer className="curriculum-footer">
          Statecraft Curriculum I · Kurogami Group · Process before outcome · Not investment advice
        </footer>
      </div>
    );
  }

  if (section.kind === 'curriculum-field') {
    return <FieldCurriculumContent />;
  }

  if (section.kind === 'curriculum-capital-loop') {
    return <CapitalLoopCurriculumContent />;
  }

  return section.blocks.map((block) => (
    <ManualBlock
      key={`${section.title}-${block.heading}`}
      block={block}
      onCopyTrack={onCopyTrack}
      onOpenSample={onOpenSample}
      hasSample={hasSample}
    />
  ));
}

function CurriculumText({ children }) {
  return children.split(/(\*\*.+?\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${index}-${part}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${index}-${part}`}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

function CurriculumDataTable({ headers, rows }) {
  return (
    <div className="manual-table-wrap curriculum-table-wrap">
      <table>
        <thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}><CurriculumText>{cell}</CurriculumText></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CurriculumContent({ progress, onToggleModule, progressNotice }) {
  return (
    <div className="curriculum-content">
      <section className="curriculum-reference-section">
        <h4>Statecraft Academy — Complete Curriculum I</h4>
        <p><strong>Flagship:</strong> Money Process Desk · Path to Agent Clone · Forge Operator Track</p>
        <p><strong>Price anchor:</strong> $15k Desk Access (professional entry)</p>
        <p><strong>Credential surface:</strong> Forge bands (process + capacity + harness)</p>
        <p><strong>Principle:</strong> Legal states only. Capacity is graded. Agents inherit the same machine.</p>
      </section>

      <section className="curriculum-reference-section">
        <h4>Program overview</h4>
        <CurriculumDataTable headers={['Item', 'Spec']} rows={curriculumOverview} />
        <h5>What $15k includes (package definition)</h5>
        <p><CurriculumText>{curriculumPackageDefinition}</CurriculumText></p>
      </section>

      <section className="curriculum-reference-section">
        <h4>Progression map</h4>
        <ol className="curriculum-progression">
          {curriculumProgression.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="curriculum-global-fail"><strong>Global fail rule:</strong> Action outside legal state = module reset (not debate).</p>
      </section>

      <section className="curriculum-reference-section curriculum-modules-section">
        <div className="curriculum-module-heading">
          <div>
            <h4>Module catalog (complete)</h4>
            <p>Operator self-track only — not a certificate claim.</p>
          </div>
          {progressNotice && <p className="curriculum-progress-notice" role="alert">{progressNotice}</p>}
        </div>
        <div className="curriculum-modules">
          {curriculumModules.map((module) => (
            <article className="curriculum-module" key={module.id}>
              <div className="curriculum-module-bar">
                <details className="curriculum-module-details">
                  <summary>
                    <span>{module.title}</span>
                    {module.catalogTitle && <small>{module.catalogTitle}</small>}
                  </summary>
                  <div className="curriculum-module-body">
                    <p><strong>Focus:</strong> <CurriculumText>{module.focus}</CurriculumText></p>
                    <p><strong>Deliverables:</strong> <CurriculumText>{module.deliverables}</CurriculumText></p>
                    {module.gate && <p><strong>Gate:</strong> <CurriculumText>{module.gate}</CurriculumText></p>}
                    {module.pass && <p><strong>Pass:</strong> <CurriculumText>{module.pass}</CurriculumText></p>}
                    {module.fail && <p><strong>Fail:</strong> <CurriculumText>{module.fail}</CurriculumText></p>}
                    {module.arcade && <p><strong>Arcade:</strong> <CurriculumText>{module.arcade}</CurriculumText></p>}
                    {module.veil && <p><strong>Veil:</strong> <CurriculumText>{module.veil}</CurriculumText></p>}
                    {module.forgeSeed && <p><strong>Forge seed:</strong> <CurriculumText>{module.forgeSeed}</CurriculumText></p>}
                    {module.paragraphs?.length > 0 && (
                      <div className="curriculum-full-module">
                        <h5>Full modules (each ≥ 2 paragraphs)</h5>
                        {module.paragraphs.map((paragraph) => (
                          <p key={paragraph}><CurriculumText>{paragraph}</CurriculumText></p>
                        ))}
                      </div>
                    )}
                  </div>
                </details>
                <label className="curriculum-completion">
                  <input
                    type="checkbox"
                    checked={Boolean(progress[module.id])}
                    onChange={(event) => onToggleModule(module.id, event.target.checked)}
                  />
                  <span>Completed</span>
                </label>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="curriculum-reference-section">
        <h4>State machine reference (curriculum spine)</h4>
        <CurriculumDataTable headers={['ID', 'State']} rows={curriculumStates} />
        <h5>Strategy anchors (taught as definitions, not folklore)</h5>
        <ul className="curriculum-list">
          {curriculumStrategyAnchors.map((anchor) => <li key={anchor}><CurriculumText>{anchor}</CurriculumText></li>)}
        </ul>
      </section>

      <section className="curriculum-reference-section">
        <h4>Capacity curriculum (parallel, required)</h4>
        <CurriculumDataTable headers={['Element', 'Role']} rows={curriculumCapacity} />
        <h5>Core Arcade path (minimum for capstone eligibility)</h5>
        <p>MA · KATA_PATH · TORII · (recommended: ENSŌ, KINTSUGI) · advanced optional</p>
      </section>

      <section className="curriculum-reference-section">
        <h4>Assessment model</h4>
        <CurriculumDataTable headers={['Layer', 'Metric']} rows={curriculumAssessment} />
        <p className="curriculum-strong-note">No pass on vibes. No pass on profit alone.</p>
      </section>

      <section className="curriculum-reference-section">
        <h4>Credential &amp; product path</h4>
        <ol className="curriculum-progression">
          {curriculumCredentialPath.map((step) => <li key={step}><CurriculumText>{step}</CurriculumText></li>)}
        </ol>
      </section>

      <section className="curriculum-reference-section">
        <h4>Agentic Academy transfer (same product family)</h4>
        <CurriculumDataTable headers={['Statecraft Money', 'General Agentic']} rows={curriculumTransfer} />
        <p><strong>One-liner:</strong> Learn to run process as states; your agent runs the same states.</p>
      </section>

      <section className="curriculum-reference-section">
        <h4>Ops checklist (delivery)</h4>
        <ul className="curriculum-ops-checklist">
          {curriculumOpsChecklist.map((item) => <li key={item}><span aria-hidden="true">☐</span><CurriculumText>{item}</CurriculumText></li>)}
        </ul>
      </section>

      <section className="curriculum-reference-section">
        <h4>Short sales lock (honest)</h4>
        <p><strong>Statecraft Academy — $15k</strong></p>
        <p className="curriculum-sales-lock"><CurriculumText>{curriculumSalesLock}</CurriculumText></p>
      </section>

      <section className="curriculum-reference-section curriculum-source-note">
        <p><strong>Curriculum complete as structure.</strong></p>
        <p>You drop paragraphs into M0–Capstone; tooling is strip + Forge card; pricing stays $15k until proof and demand say raise.</p>
      </section>
    </div>
  );
}

function CapitalLoopCurriculumContent() {
  return (
    <div className="curriculum-shell">
      <section className="curriculum-intro">
        <div className="manual-section-kicker">CAPITAL LOOP / GROUP LAW</div>
        <h4>Curriculum III — Capital Loop</h4>
        <p className="curriculum-subtitle">Hardening capital, collateral, and spend under written rules</p>
        <p>
          Capital Loop is a process surface inside Desk Access, not a separate product. This curriculum covers hardening capital, collateral, borrowing, spending, and redeploying under named risk.
        </p>
        <p className="curriculum-closer-rule">
          Process before outcome. Risk is named, bounded, and owned. This is not a bank, does not create a bank account or provide FDIC insurance, and is not tax advice. No recovery is guaranteed.
        </p>
      </section>

      <aside className="curriculum-field-rules" aria-label="Capital Loop rules">
        <h4>Capital Loop doctrine</h4>
        <ul>
          <li>Capital Loop sits inside Desk Access under Group law.</li>
          <li>A collateralized asset remains owned only while its health factor is maintained; liquidation rules apply.</li>
          <li>III-0 and III-2 must be marked complete in Continuum before a collateral position is opened or a spend surface is enabled.</li>
          <li>Agent surfaces require a reviewed and acknowledged rule set, human override, kill switch, and action logs.</li>
          <li>Tax treatment is the operator’s responsibility. No tax exemption, recovery guarantee, or zero-tax-spend promise is made.</li>
        </ul>
      </aside>

      <section className="curriculum-reference-section">
        <h4>Core modules</h4>
        <CurriculumDataTable headers={['#', 'Module', 'Outcome']} rows={capitalLoopModuleRows} />
      </section>

      <section className="curriculum-reference-section">
        <h4>Black Book — new section</h4>
        <p><strong>09 Capital Loop (Curriculum III)</strong></p>
        <p><strong>Mandate:</strong> Capital Loop is a process surface inside Desk Access. The operator remains accountable for every action and obligation.</p>
        <p><strong>Law:</strong> The asset remains owned only while the health factor is maintained. A borrow is a liability against the asset and may result in liquidation. This surface is not a bank, does not create a bank account or provide FDIC insurance, and is not tax advice.</p>
        <p><strong>Gates:</strong> III-0 and III-2 must be marked complete in Continuum before any collateral position is opened or any spend surface is enabled. Agent surfaces require an additional rule-set acknowledgment after III-7.</p>
        <p><strong>Never-sell:</strong> No tax exemption, recovery guarantee, bank account, or promise that spending creates zero taxable events is granted. The operator remains responsible for jurisdiction-specific obligations.</p>
      </section>

      <section className="curriculum-reference-section">
        <h4>Group site copy</h4>
        <div className="curriculum-full-module">
          <p><strong>Access page:</strong> Capital Loop is a process surface inside Desk Access, not a separate product. Collateral, borrowing, and spending remain subject to the stated gates and health-factor rules. This is not a bank or tax advice. No recovery is guaranteed.</p>
          <p><strong>Operators page:</strong> The process runs under Group law. The operator remains accountable for collateral, borrowing, tax, and compliance obligations. The surface is not a bank, provides no tax exemption, and makes no guaranteed outcome claim.</p>
        </div>
      </section>

      <section className="curriculum-reference-section">
        <h4>Continuum entries</h4>
        <h5>Seat type</h5>
        <CurriculumDataTable
          headers={['Field', 'Entry']}
          rows={[
            ['Name', 'Capital Loop'],
            ['Requires', 'Desk Access'],
            ['Curriculum', 'III'],
            ['Gate', 'III-0 + III-2 complete'],
            ['Surfaces', 'Collateral Engine, Black Card (when live), Agent rules'],
            ['Status', 'In development'],
          ]}
        />
        <h5>Asset registry</h5>
        <CurriculumDataTable
          headers={['Asset', 'Status', 'Description']}
          rows={[
            ['Collateral Engine', 'Spec', 'Tokenize or stake → health factor → borrow without sale'],
            ['Black Card', 'Spec', 'Spending form factor (card, phone, wearable, ring) funded from Collateral Engine borrow'],
            ['Capital Loop Agent', 'Spec', 'Process-trained agent that monitors health factor and executes within written rules'],
          ]}
        />
      </section>

      <section className="curriculum-reference-section">
        <h4>Onboard checklist</h4>
        <ul className="curriculum-ops-checklist">
          {capitalLoopOnboardChecklist.map((item) => (
            <li key={item}><span aria-hidden="true">☐</span><CurriculumText>{item}</CurriculumText></li>
          ))}
        </ul>
      </section>

      <section className="curriculum-reference-section">
        <h4>Module details</h4>
        <div className="curriculum-full-module">
          {capitalLoopModuleDetails.map((module) => (
            <article key={module.title}>
              <p><strong>{module.title}{module.gate ? ' · Gate' : ''}</strong></p>
              {module.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {module.lists?.map((list, listIndex) => (
                <ul key={`${module.title}-list-${listIndex}`}>
                  {list.items.map((item) => <li key={item}><CurriculumText>{item}</CurriculumText></li>)}
                </ul>
              ))}
              {module.closing && <p>{module.closing}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="curriculum-reference-section">
        <h4>Operating boundaries</h4>
        <div className="curriculum-full-module">
          {capitalLoopPolicies.map((policy) => (
            <article key={policy.title}>
              <p><strong>{policy.title}</strong></p>
              <p>{policy.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="curriculum-footer">
        Curriculum III — Capital Loop · Kurogami Group · Process before outcome · Not investment advice
      </footer>
    </div>
  );
}

function FieldCurriculumContent() {
  return (
    <div className="field-curriculum-shell">
      <header className="field-curriculum-header">
        <h4>STATECRAFT ACADEMY — CURRICULUM II: FIELD</h4>
        <p className="field-curriculum-track-label">Kurogami Group · Sales / Ops Track</p>
        <p>v1.0 · “Appointment → Present → Close”</p>
        <p><strong>Price anchor:</strong> $15k Desk Access (professional entry unit for buyers; Field trains operators who place that unit)</p>
        <p><strong>Credential surface:</strong> Field gates + Continuum hygiene (not a trading band)</p>
        <p className="field-curriculum-disclaimer">
          <strong>Principle:</strong> Process before outcome. Comp only on closed, paid, attributed seats under written terms. Not MLM. Not investment advice. No guaranteed income.
        </p>
      </header>

      <section className="field-curriculum-section">
        <h4>Program overview</h4>
        <CurriculumDataTable headers={['Item', 'Spec']} rows={fieldCurriculumProgramOverview} />
        <h5>What Field includes</h5>
        <p><CurriculumText>{fieldCurriculumIncludes}</CurriculumText></p>
        <h5>What Field is not</h5>
        <p><CurriculumText>{fieldCurriculumExclusions}</CurriculumText></p>
      </section>

      <section className="field-curriculum-section">
        <h4>Who this is for / not for</h4>
        <h5>For</h5>
        <ul className="curriculum-list">
          {fieldCurriculumAudience.map((item) => <li key={item}><CurriculumText>{item}</CurriculumText></li>)}
        </ul>
        <p><strong>Take Curriculum I first (or instead)</strong> if the primary goal is <strong>trading skill</strong>. Point them to Desk curriculum; offer Field later if they want the sales track.</p>
      </section>

      <section className="field-curriculum-section">
        <h4>Progression map</h4>
        <ol className="field-curriculum-progression">
          {fieldCurriculumProgression.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="field-curriculum-global-fail"><strong>Global fail rule:</strong> <CurriculumText>{fieldCurriculumGlobalFail}</CurriculumText></p>
      </section>

      <section className="field-curriculum-section">
        <h4>Fast Start card (front door — first 48 hours)</h4>
        <CurriculumDataTable headers={['Hours', 'Do']} rows={fieldCurriculumFastStart} />
        <p>Curriculum I is <strong>not</strong> a blocker for this card.</p>
      </section>

      <section className="field-curriculum-section field-curriculum-modules-section">
        <h4>Module catalog (complete)</h4>
        <div className="field-curriculum-modules">
          {fieldCurriculumModules.map((module) => (
            <details className="field-curriculum-module" key={module.title}>
              <summary>{module.title}</summary>
              <div className="field-curriculum-module-body">
                <p><strong>Focus:</strong> <CurriculumText>{module.focus}</CurriculumText></p>
                {module.paragraphs.map((paragraph) => (
                  <p key={paragraph}><CurriculumText>{paragraph}</CurriculumText></p>
                ))}
                <p><strong>Deliverables:</strong> <CurriculumText>{module.deliverables}</CurriculumText></p>
                {module.gate && <p><strong>Gate:</strong> <CurriculumText>{module.gate}</CurriculumText></p>}
                {module.tools && <p><strong>Tools:</strong> <CurriculumText>{module.tools}</CurriculumText></p>}
                {module.forgeFieldSeed && <p><strong>Forge / Field seed:</strong> <CurriculumText>{module.forgeFieldSeed}</CurriculumText></p>}
                {module.pass && <p><strong>Pass:</strong> <CurriculumText>{module.pass}</CurriculumText></p>}
                {module.fail && <p><strong>Fail:</strong> <CurriculumText>{module.fail}</CurriculumText></p>}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="field-curriculum-section">
        <h4>Gates summary (Field only)</h4>
        <CurriculumDataTable headers={['Gate', 'Pass']} rows={fieldCurriculumGates} />
      </section>

      <section className="field-curriculum-section">
        <h4>Relationship to Curriculum I (Desk)</h4>
        <div className="field-curriculum-law">
          <strong>Kurogami Group Law</strong>
          <span>Desk Access unit</span>
        </div>
        <div className="field-curriculum-tracks">
          <article>
            <h5>CURRICULUM I / DESK</h5>
            {fieldCurriculumDeskTrack.map((item) => <p key={item}>{item}</p>)}
          </article>
          <article>
            <h5>CURRICULUM II / FIELD</h5>
            {fieldCurriculumSalesTrack.map((item) => <p key={item}>{item}</p>)}
          </article>
        </div>
        <p className="field-curriculum-both-optional">Both optional</p>
        <p className="field-curriculum-creative">Creative agent = build track<br />(art/process; separate or later)</p>
      </section>

      <section className="field-curriculum-section">
        <h4>Assessment model (Field)</h4>
        <CurriculumDataTable headers={['Layer', 'Metric']} rows={fieldCurriculumAssessment} />
        <p className="field-curriculum-global-fail">No pass on vibes. No pass on “almost closed.” No pass on income stories.</p>
      </section>

      <section className="field-curriculum-section">
        <h4>Resource index (Field)</h4>
        <p><CurriculumText>{fieldCurriculumResources.join(' · ')}</CurriculumText></p>
      </section>

      <section className="field-curriculum-section field-curriculum-sales-lock">
        <h4>Short sales lock (honest)</h4>
        {fieldCurriculumSalesLock.map((line) => <p key={line}>{line}</p>)}
      </section>

      <section className="field-curriculum-section field-curriculum-one-liner">
        <h4>One-liner for Field students</h4>
        <p>This curriculum does not teach you to trade. It teaches you to set the appointment, run the present, close under law, segment your ten, and install the same machine in the next operator—tools and sales agents assisting, you accountable.</p>
      </section>

      <section className="field-curriculum-section">
        <h4>Ops checklist (delivery)</h4>
        <ul className="curriculum-ops-checklist">
          {fieldCurriculumOpsChecklist.map((item) => <li key={item}><span aria-hidden="true">☐</span><CurriculumText>{item}</CurriculumText></li>)}
        </ul>
      </section>
    </div>
  );
}

function LeadershipSessionPanel({ session, onUpdate }) {
  return (
    <section className="leadership-session-panel">
      <div className="panel-header">
        <span className="section-kicker">Leadership Session</span>
        <span className="range-label">One-page standard / no rank tree</span>
      </div>
      <p className="leadership-session-intro">
        Leadership is duplication of doctrine and clean process—not pyramid ranks. Review the one-pager together, record the work, and name the leader of record.
      </p>
      <div className="leadership-checklist">
        {leadershipChecklist.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={session.checklist[item.id]}
              onChange={(event) => onUpdate('checklist', item.id, event.target.checked)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
      <div className="leadership-acknowledgements">
        {leadershipAcknowledgements.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={session.acknowledgements[item.id]}
              onChange={(event) => onUpdate('acknowledgements', item.id, event.target.checked)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
      <div className="leadership-fields">
        <label>
          Operator name
          <input value={session.name} onChange={(event) => onUpdate('profile', 'name', event.target.value)} />
        </label>
        <label>
          Session date
          <input type="date" value={session.date} onChange={(event) => onUpdate('profile', 'date', event.target.value)} />
        </label>
        <label>
          Leader of record
          <input value={session.leaderOfRecord} onChange={(event) => onUpdate('profile', 'leaderOfRecord', event.target.value)} />
        </label>
      </div>
      <p className="leadership-session-footnote">Compensation only on closed, paid, attributed seats under written terms.</p>
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
    prospects: createProspectingRows([reyesLead, ...demoLeads]),
    fastStart: createFastStartChecklist(),
    leadershipSession: createLeadershipSession(),
    presentationAssets: createPresentationAssets(),
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
  prospects: createProspectingRows(),
  fastStart: createFastStartChecklist(),
  leadershipSession: createLeadershipSession(),
  presentationAssets: createPresentationAssets(),
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

    const prospects = parsedData.prospects ?? createProspectingRows(parsedData.leads);
    if (
      !Array.isArray(prospects)
      || prospects.some((prospect) => (
        prospect === null
        || typeof prospect !== 'object'
        || ['id', 'name', 'channel', 'personality', 'state', 'stage', 'nextAction', 'due'].some((field) => typeof prospect[field] !== 'string')
        || (prospect.leadId !== undefined && typeof prospect.leadId !== 'string')
        || !['unknown', ...personalityTypes.map(({ code }) => code)].includes(prospect.personality)
        || !prospectStates.includes(prospect.state)
        || !pipelineStages.some(({ label }) => label === prospect.stage)
      ))
    ) {
      throw new Error('Saved prospecting list has an invalid shape.');
    }

    const fastStart = parsedData.fastStart ?? createFastStartChecklist();
    if (
      fastStart === null
      || typeof fastStart !== 'object'
      || Array.isArray(fastStart)
      || fastStartSteps.some(({ id }) => typeof fastStart[id] !== 'boolean')
    ) {
      throw new Error('Saved Fast Start checklist has an invalid shape.');
    }

    const presentationAssets = parsedData.presentationAssets ?? createPresentationAssets();
    if (
      presentationAssets === null
      || typeof presentationAssets !== 'object'
      || Array.isArray(presentationAssets)
      || ['slideshowUrl', 'voiceoverUrl'].some((field) => typeof presentationAssets[field] !== 'string')
    ) {
      throw new Error('Saved presentation asset URLs have an invalid shape.');
    }

    const savedLeadershipSession = parsedData.leadershipSession ?? createLeadershipSession();
    if (
      savedLeadershipSession === null
      || typeof savedLeadershipSession !== 'object'
      || typeof savedLeadershipSession.name !== 'string'
      || typeof savedLeadershipSession.date !== 'string'
      || typeof savedLeadershipSession.leaderOfRecord !== 'string'
      || savedLeadershipSession.checklist === null
      || typeof savedLeadershipSession.checklist !== 'object'
      || leadershipChecklist.some(({ id }) => typeof savedLeadershipSession.checklist[id] !== 'boolean')
      || savedLeadershipSession.acknowledgements === null
      || typeof savedLeadershipSession.acknowledgements !== 'object'
      || leadershipAcknowledgements.some(({ id }) => typeof savedLeadershipSession.acknowledgements[id] !== 'boolean')
    ) {
      throw new Error('Saved leadership session has an invalid shape.');
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
    const prospectingData = {
      prospects,
      fastStart: { ...createFastStartChecklist(), ...fastStart },
      presentationAssets: { ...createPresentationAssets(), ...presentationAssets },
      leadershipSession: {
        ...createLeadershipSession(),
        ...savedLeadershipSession,
        checklist: { ...createLeadershipSession().checklist, ...savedLeadershipSession.checklist },
        acknowledgements: { ...createLeadershipSession().acknowledgements, ...savedLeadershipSession.acknowledgements },
      },
    };
    return {
      data: parsedData.mode === 'demo'
        ? { ...createDemoWorkspaceData(), ...prospectingData, pilotAcknowledgement }
        : { ...parsedData, ...prospectingData, pilotAcknowledgement },
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

function getLocalDateValue(now = new Date()) {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function calculatePersonalityResult(answers) {
  if (answers.length !== personalityQuestions.length || answers.some((answer) => !answer)) return null;
  const counts = Object.fromEntries(personalityTypes.map(({ code }) => [code, 0]));
  answers.forEach((answer) => { counts[answer] += 1; });
  const highestScore = Math.max(...Object.values(counts));
  const leaders = Object.keys(counts).filter((code) => counts[code] === highestScore);
  return leaders.length === 1 ? leaders[0] : 'F';
}

function getAssetUrl(asset, presentationAssets) {
  if (asset.url) return asset.url;
  if (!asset.presentationKey || !presentationAssets[asset.presentationKey]) return '';

  try {
    const url = new URL(presentationAssets[asset.presentationKey]);
    return url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}

function getAssetCopy(asset, presentationAssets) {
  if (!asset.presentationKey) return asset.copy;
  const placeholder = asset.presentationKey === 'slideshowUrl'
    ? '[add approved slideshow URL]'
    : '[add approved voiceover URL]';
  return asset.copy.replace(placeholder, getAssetUrl(asset, presentationAssets) || placeholder);
}

function getProspectingTrackCopy(personality, stepId) {
  const copy = prospectingTracks[personality][stepId];
  const requiredLanguage = [];
  if (!copy.includes('$15,000')) requiredLanguage.push('Desk Access is the published $15,000 process seat.');
  if (!copy.includes('Process before outcome')) requiredLanguage.push('Process before outcome.');
  if (!copy.toLowerCase().includes('signals')) requiredLanguage.push('No signals.');
  if (!copy.toLowerCase().includes('guaranteed returns')) requiredLanguage.push('No guaranteed returns.');
  return [copy, ...requiredLanguage].join(' ');
}

const operatorRules = [
  'Same Black Book, same stages, same approved assets.',
  'Leads attributed to the operator.',
  'Same ban on inventing offers.',
  'Admin can revoke prospecting instantly.',
];

const backgroundMusicStorageKey = 'operator-continuum-background-music';

function readBackgroundMusicPreference() {
  try {
    const savedPreference = window.localStorage.getItem(backgroundMusicStorageKey);
    if (savedPreference === null) return { enabled: false, notice: '' };
    if (savedPreference === 'true' || savedPreference === 'false') {
      return { enabled: savedPreference === 'true', notice: '' };
    }
    throw new Error('Saved background music preference has an invalid value.');
  } catch (error) {
    console.error('Unable to read background music preference.', error);
    return {
      enabled: false,
      notice: 'Music preference could not be read; background music is off by default.',
    };
  }
}

function BackgroundMusicToggle({ enabled, playing, onToggle, onStart, className = '' }) {
  return (
    <div className={`background-music-controls ${className}`}>
      <button
        className="background-music-toggle"
        type="button"
        aria-pressed={enabled}
        aria-label={enabled ? 'Turn background music off' : 'Turn background music on'}
        onClick={onToggle}
      >
        Music: {enabled ? 'On' : 'Off'}
      </button>
      {enabled && !playing && (
        <button className="background-music-start" type="button" onClick={onStart}>
          Play
        </button>
      )}
    </div>
  );
}

function App() {
  const [initialWorkspaceData] = useState(readWorkspaceData);
  const [workspaceData, setWorkspaceData] = useState(initialWorkspaceData.data);
  const [dataNotice, setDataNotice] = useState(initialWorkspaceData.warning);
  const [isLoading, setIsLoading] = useState(true);
  const [isStartScreenOpen, setIsStartScreenOpen] = useState(true);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [initialBackgroundMusicPreference] = useState(readBackgroundMusicPreference);
  const [isBackgroundMusicEnabled, setIsBackgroundMusicEnabled] = useState(initialBackgroundMusicPreference.enabled);
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
  const [backgroundMusicPreferenceNotice, setBackgroundMusicPreferenceNotice] = useState(initialBackgroundMusicPreference.notice);
  const [backgroundMusicPlaybackNotice, setBackgroundMusicPlaybackNotice] = useState('');
  const backgroundMusicRef = useRef(null);
  const [tourStep, setTourStep] = useState(null);
  const [isTourCardHidden, setIsTourCardHidden] = useState(false);
  const [activeNav, setActiveNav] = useState(
    () => ['#manual-curriculum-i', '#manual-curriculum-ii'].includes(window.location.hash)
      ? 'Manual'
      : navItems.find((item) => item.href === window.location.hash)?.label ?? 'Home',
  );
  const [manualTab, setManualTab] = useState(() => {
    if (window.location.hash === '#manual-curriculum-i') return manualSections.findIndex(({ kind }) => kind === 'curriculum');
    if (window.location.hash === '#manual-curriculum-ii') return manualSections.findIndex(({ kind }) => kind === 'curriculum-field');
    return 0;
  });
  const [initialCurriculumProgress] = useState(readCurriculumProgress);
  const [curriculumProgress, setCurriculumProgress] = useState(initialCurriculumProgress.progress);
  const [curriculumProgressNotice, setCurriculumProgressNotice] = useState(initialCurriculumProgress.notice);
  const [outreachTab, setOutreachTab] = useState('tracks');
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStageFilter, setLeadStageFilter] = useState('All stages');
  const [leadPersonalityFilter, setLeadPersonalityFilter] = useState('All personalities');
  const [selectedLeadName, setSelectedLeadName] = useState(null);
  const [selectedProspectId, setSelectedProspectId] = useState(
    () => initialWorkspaceData.data.prospects.find((prospect) => prospect.name.trim())?.id || '',
  );
  const [personalityTab, setPersonalityTab] = useState('C');
  const [quizAnswers, setQuizAnswers] = useState(['', '', '', '']);
  const [prospectingNotice, setProspectingNotice] = useState('');
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

  const startBackgroundMusic = () => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;
    audio.volume = 0.25;
    try {
      const playback = audio.play();
      if (playback) {
        playback.then(
          () => {
            setIsBackgroundMusicPlaying(true);
            setBackgroundMusicPlaybackNotice('');
          },
          (error) => {
            console.error('Unable to start background music.', error);
            setIsBackgroundMusicPlaying(false);
            setBackgroundMusicPlaybackNotice('Background music is on but playback did not start. Use Play to retry.');
          },
        );
      }
    } catch (error) {
      console.error('Unable to start background music.', error);
      setIsBackgroundMusicPlaying(false);
      setBackgroundMusicPlaybackNotice('Background music is on but playback did not start. Use Play to retry.');
    }
  };

  const toggleBackgroundMusic = () => {
    const nextEnabled = !isBackgroundMusicEnabled;
    setIsBackgroundMusicEnabled(nextEnabled);
    if (nextEnabled) {
      startBackgroundMusic();
    } else {
      backgroundMusicRef.current?.pause();
      setIsBackgroundMusicPlaying(false);
      setBackgroundMusicPlaybackNotice('');
    }
  };

  useEffect(() => {
    try {
      window.localStorage.setItem(workspaceDataStorageKey, JSON.stringify(workspaceData));
    } catch (error) {
      console.error('Unable to save workspace data.', error);
      setDataNotice('Workspace changes could not be saved in this browser.');
    }
  }, [workspaceData]);

  useEffect(() => {
    try {
      window.localStorage.setItem(backgroundMusicStorageKey, String(isBackgroundMusicEnabled));
      setBackgroundMusicPreferenceNotice('');
    } catch (error) {
      console.error('Unable to save background music preference.', error);
      setBackgroundMusicPreferenceNotice('Background music preference could not be saved in this browser.');
    }
  }, [isBackgroundMusicEnabled]);

  useEffect(() => {
    try {
      window.localStorage.setItem(curriculumProgressStorageKey, JSON.stringify(curriculumProgress));
      setCurriculumProgressNotice('');
    } catch (error) {
      console.error('Unable to save Curriculum I progress.', error);
      setCurriculumProgressNotice('Curriculum I tracking could not be saved in this browser.');
    }
  }, [curriculumProgress]);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 2000);
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
    if (!window.confirm('Reset leads, prospecting list, checklist, next actions, and pilot records for this browser? This cannot be undone.')) return;
    setWorkspaceData(freshWorkspaceData);
    setSelectedLeadName(null);
    setSelectedProspectId('');
    setLeadSearch('');
    setLeadStageFilter('All stages');
    setLeadPersonalityFilter('All personalities');
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
    setSelectedProspectId('prospect-1');
    setLeadSearch('');
    setLeadStageFilter('All stages');
    setLeadPersonalityFilter('All personalities');
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

  const updateFastStart = (id, checked) => {
    setWorkspaceData((current) => ({
      ...current,
      fastStart: { ...current.fastStart, [id]: checked },
    }));
  };

  const updateLeadershipSession = (group, field, value) => {
    setWorkspaceData((current) => ({
      ...current,
      leadershipSession: group === 'profile'
        ? { ...current.leadershipSession, [field]: value }
        : {
          ...current.leadershipSession,
          [group]: { ...current.leadershipSession[group], [field]: value },
        },
    }));
  };

  const updatePresentationAsset = (field, value) => {
    setWorkspaceData((current) => ({
      ...current,
      presentationAssets: { ...current.presentationAssets, [field]: value },
    }));
  };

  const updateProspect = (prospectId, fields) => {
    setWorkspaceData((current) => {
      const currentProspect = current.prospects.find((prospect) => prospect.id === prospectId);
      if (!currentProspect) return current;

      const prospects = current.prospects.map((prospect) => (
        prospect.id === prospectId ? { ...prospect, ...fields } : prospect
      ));
      const updatedProspect = prospects.find((prospect) => prospect.id === prospectId);
      const leads = current.leads.map((lead) => (
        lead.prospectId === prospectId || (currentProspect.leadId && lead.id === currentProspect.leadId)
          ? {
            ...lead,
            name: updatedProspect.name || lead.name,
            channel: updatedProspect.channel,
            personality: updatedProspect.personality,
            state: updatedProspect.state,
            stage: updatedProspect.stage,
            nextAction: updatedProspect.nextAction,
            due: updatedProspect.due,
          }
          : lead
      ));
      return {
        ...current,
        mode: leads.some((lead, index) => lead !== current.leads[index]) ? 'custom' : current.mode,
        prospects,
        leads,
      };
    });
  };

  const addProspectRow = () => {
    setWorkspaceData((current) => ({
      ...current,
      prospects: [...current.prospects, {
        ...createProspectTemplateRow(current.prospects.length),
        id: `prospect-${Date.now()}`,
      }],
    }));
  };

  const deleteProspectRow = (prospectId) => {
    setWorkspaceData((current) => ({
      ...current,
      prospects: current.prospects.filter((prospect) => prospect.id !== prospectId),
    }));
    setSelectedProspectId((current) => current === prospectId ? '' : current);
  };

  const addProspectToLeads = (prospectId) => {
    const prospect = workspaceData.prospects.find((row) => row.id === prospectId);
    if (!prospect?.name.trim()) {
      setProspectingNotice('Add a name before linking this prospect to Leads.');
      return;
    }

    const existingLead = workspaceData.leads.find((lead) => (
      lead.prospectId === prospectId || lead.id === prospect.leadId
      || lead.name.toLowerCase() === prospect.name.trim().toLowerCase()
    ));
    const lead = {
      ...(existingLead || {}),
      id: existingLead?.id || prospect.leadId || `LD-${prospect.id}`,
      prospectId,
      name: prospect.name.trim(),
      channel: prospect.channel || 'Other',
      temp: prospect.state === 'Cold' ? 'Cold' : 'Warm',
      value: existingLead?.value || '$15k',
      seatValue: existingLead?.seatValue || 15000,
      personality: prospect.personality,
      state: prospect.state,
      stage: prospect.stage,
      nextAction: prospect.nextAction,
      due: prospect.due,
      owner: existingLead?.owner || 'Harry',
    };

    setWorkspaceData((current) => ({
      ...current,
      mode: 'custom',
      prospects: current.prospects.map((row) => row.id === prospectId ? { ...row, leadId: lead.id } : row),
      leads: existingLead
        ? current.leads.map((row) => row.id === existingLead.id ? lead : row)
        : [lead, ...current.leads],
    }));
    setProspectingNotice(`${lead.name} linked to Leads.`);
  };

  const setProspectAppointment = (prospect) => {
    updateProspect(prospect.id, {
      state: 'Set',
      stage: 'Seat conversation',
      nextAction: 'Appointment',
      due: prospect.due || getLocalDateValue(),
    });
  };

  const markProspectPresented = (prospect) => {
    const followupDate = new Date();
    followupDate.setDate(followupDate.getDate() + 1);
    updateProspect(prospect.id, {
      state: 'Presented',
      stage: 'Seat conversation',
      nextAction: '24-hour follow-up',
      due: getLocalDateValue(followupDate),
    });
  };

  const applyPersonalityQuiz = () => {
    if (!selectedProspectId || quizAnswers.some((answer) => !answer)) {
      setProspectingNotice('Select a prospect and answer all four questions.');
      return;
    }

    const result = calculatePersonalityResult(quizAnswers);
    if (!result) return;
    const prospect = workspaceData.prospects.find((row) => row.id === selectedProspectId);
    updateProspect(selectedProspectId, { personality: result });
    setProspectingNotice(`${prospect?.name || 'Prospect'} tagged ${result} · ${personalityTypes.find(({ code }) => code === result)?.label}.`);
  };

  const getLeadPersonality = (lead) => (
    personalityTypes.some(({ code }) => code === lead.personality)
      ? lead.personality
      : workspaceData.prospects.find((prospect) => (
        prospect.leadId === lead.id || prospect.name.toLowerCase() === lead.name.toLowerCase()
      ))?.personality || 'unknown'
  );

  const copyProspectingTrack = (stepId) => {
    const copy = getProspectingTrackCopy(personalityTab, stepId);
    const selectedProspect = workspaceData.prospects.find((prospect) => prospect.id === selectedProspectId);
    const firstName = selectedProspect?.name.trim().split(/\s+/)[0];
    const personalizedCopy = firstName ? `${firstName}, ${copy}` : copy;
    copyApprovedText(personalizedCopy, `${personalityTab} ${prospectingTrackSteps.find((step) => step.id === stepId)?.label}`);
  };

  const openSampleLead = () => {
    const sampleLead = workspaceData.leads.find((lead) => lead.id === 'LD-1042');
    if (!sampleLead) return;
    setSelectedLeadName(sampleLead.name);
    setTourStep(null);
    setActiveNav('Leads');
    window.history.replaceState(null, '', '#leads');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeManualTab = (index) => {
    setManualTab(index);
    setActiveNav('Manual');
    const section = manualSections[index];
    const sectionAnchor = section.kind === 'curriculum'
      ? '#manual-curriculum-i'
      : section.kind === 'curriculum-field'
        ? '#manual-curriculum-ii'
        : '#manual';
    window.history.replaceState(null, '', sectionAnchor);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exportManualPdf = () => {
    const previousTitle = document.title;
    document.title = 'The Black Book v1.0 - Kurogami Group';
    window.print();
    document.title = previousTitle;
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
      id: `LD-${Date.now()}`,
      name,
      stage: 'New',
      owner: 'Harry',
      personality: 'unknown',
      state: leadDraft.temp === 'Cold' ? 'Cold' : 'Warm',
    };
    setWorkspaceData((current) => {
      const emptyRow = current.prospects.find((prospect) => !prospect.name.trim());
      const prospect = {
        ...(emptyRow || createProspectTemplateRow(current.prospects.length)),
        leadId: newLead.id,
        name,
        channel: leadDraft.channel,
        personality: 'unknown',
        state: newLead.state,
        stage: 'New',
        nextAction: '',
        due: '',
      };
      return {
        ...current,
        mode: 'custom',
        leads: [{ ...newLead, prospectId: prospect.id }, ...current.leads],
        prospects: emptyRow
          ? current.prospects.map((row) => row.id === emptyRow.id ? prospect : row)
          : [...current.prospects, prospect],
      };
    });
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
    const matchesPersonality = leadPersonalityFilter === 'All personalities' || getLeadPersonality(lead) === leadPersonalityFilter;
    return matchesQuery && matchesStage && matchesPersonality;
  });
  const selectedLead = workspaceData.leads.find((lead) => lead.name === selectedLeadName);
  const selectedProspect = workspaceData.prospects.find((prospect) => prospect.id === selectedProspectId);
  const dueProspects = workspaceData.prospects.filter((prospect) => (
    prospect.name.trim() && prospect.due && prospect.due <= getLocalDateValue()
  ));
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
  const backgroundMusicNotice = [backgroundMusicPreferenceNotice, backgroundMusicPlaybackNotice].filter(Boolean).join(' ');

  return (
    <div className="workspace-frame">
      <audio
        ref={backgroundMusicRef}
        src="/assets/leave%20this%20playing.%20let%20abundance%20become%20your%20new%20normal.mp3"
        loop
        preload="auto"
        aria-hidden="true"
        onError={(event) => {
          console.error('Unable to load background music.', event.currentTarget.error);
          setIsBackgroundMusicPlaying(false);
          setBackgroundMusicPlaybackNotice('Background music could not be loaded from public/assets.');
        }}
        onPlay={() => {
          setIsBackgroundMusicPlaying(true);
          setBackgroundMusicPlaybackNotice('');
        }}
        onPause={() => setIsBackgroundMusicPlaying(false)}
      />
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
            <h1 id="launch-title" className="black-book-glitch">
              THE BLACK BOOK
              <span className="black-book-glitch-layer glitch-cyan" aria-hidden="true">THE BLACK BOOK</span>
              <span className="black-book-glitch-layer glitch-gold" aria-hidden="true">THE BLACK BOOK</span>
            </h1>
            <p className="launch-book-subtitle">Process before outcome.</p>
            <p className="launch-description">The law for the operator. Continuum is the desk that runs it.</p>
            <div className="launch-system-status" aria-live="polite">
              <span className={isLoading ? 'status-pulse' : ''} />
              {isLoading ? 'Loading field manual · Initializing operator desk' : 'Black Book v1.0 loaded · Operator desk online'}
            </div>
            <BackgroundMusicToggle
              className="launch-music-controls"
              enabled={isBackgroundMusicEnabled}
              playing={isBackgroundMusicPlaying}
              onToggle={toggleBackgroundMusic}
              onStart={startBackgroundMusic}
            />
            {backgroundMusicNotice && <p className="background-music-notice" role="status">{backgroundMusicNotice}</p>}
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
        <div className="site-header-tools">
          <BackgroundMusicToggle
            enabled={isBackgroundMusicEnabled}
            playing={isBackgroundMusicPlaying}
            onToggle={toggleBackgroundMusic}
            onStart={startBackgroundMusic}
          />
          <div className="system-status"><span /> GROUP OPERATIONS / ACTIVE</div>
        </div>
      </header>
      {!isStartScreenOpen && backgroundMusicNotice && (
        <p className="background-music-notice app-music-notice" role="status">{backgroundMusicNotice}</p>
      )}

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
                <h1 className="black-book-glitch">
                  Operator Continuum
                  <span className="black-book-glitch-layer glitch-cyan" aria-hidden="true">Operator Continuum</span>
                  <span className="black-book-glitch-layer glitch-gold" aria-hidden="true">Operator Continuum</span>
                </h1>
                <p>The Group’s prospecting and seat-conversion rail — Process before outcome.</p>
                <p className="hero-doctrine">Doctrine: Process before outcome · Risk is named, bounded, and owned · The standard outlives the outcome.</p>
              </div>
              <a
                className="new-button"
                href="#pipeline"
                onClick={(event) => handleNavClick(event, navItemByTarget.pipeline)}
              >
                + View pipeline
              </a>
            </div>
            <nav className="home-shortcuts" aria-label="Primary workspace links">
              {[
                { label: 'Manual · The Black Book', target: 'manual' },
                { label: 'Leads', target: 'leads' },
                { label: 'Pipeline', target: 'pipeline' },
                { label: 'Prospecting', target: 'prospecting' },
                { label: 'Assets', target: 'assets' },
                { label: 'Outreach', target: 'outreach' },
                { label: 'Pilot', target: 'pilot' },
                { label: 'Operators', target: 'operators' },
              ].map(({ label, target }) => {
                const item = navItemByTarget[target];
                return (
                  <a key={item.target} href={item.href} onClick={(event) => handleNavClick(event, item)}>
                    {label}<span aria-hidden="true">→</span>
                  </a>
                );
              })}
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

          <div className={`page-view ${activeNav === 'Manual' ? 'manual-page-view' : ''}`} hidden={activeNav !== 'Manual'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`manual-panel ${isTourTarget('manual') ? 'tour-target' : ''}`} id="manual">
            <div className="panel-header">
              <span className="section-kicker">THE BLACK BOOK</span>
              <div className="manual-header-tools">
                <span className="range-label">Black Book v1.0 / section {String(manualTab + 1).padStart(2, '0')} of {String(manualSections.length).padStart(2, '0')}</span>
                <button
                  className="manual-export-button"
                  type="button"
                  title="Choose Save as PDF in the print dialog"
                  aria-label="Export all Black Book sections to PDF"
                  onClick={exportManualPdf}
                >
                  Export manual PDF <span aria-hidden="true">↓</span>
                </button>
              </div>
            </div>
            <div className="manual-title-block">
              <div className="manual-title-readout">
                <span>FIELD MANUAL / 001</span>
                <span><i /> DOCTRINE / ACTIVE</span>
              </div>
              <h2 className="black-book-glitch">
                THE BLACK BOOK
                <span className="black-book-glitch-layer glitch-cyan" aria-hidden="true">THE BLACK BOOK</span>
                <span className="black-book-glitch-layer glitch-gold" aria-hidden="true">THE BLACK BOOK</span>
              </h2>
              <p>Kurogami Group Field Manual v1.0</p>
              <div className="manual-title-scanline" aria-hidden="true" />
            </div>
            <div className="manual-layout">
              <nav className="manual-nav" aria-label="Manual sections">
                {manualSections.map((section, index) => (
                  <button
                    key={section.title}
                    className={`manual-tab ${manualTab === index ? 'active' : ''}`}
                    type="button"
                    aria-current={manualTab === index ? 'step' : undefined}
                    onClick={() => changeManualTab(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
              <div className="manual-content">
                <article className="manual-card" key={manualSections[manualTab].title}>
                  <div className="manual-section-kicker">SECTION {String(manualTab + 1).padStart(2, '0')}</div>
                  <h3 id={manualSections[manualTab].kind === 'curriculum' ? 'manual-curriculum-i' : manualSections[manualTab].kind === 'curriculum-field' ? 'manual-curriculum-ii' : undefined}>
                    {manualSections[manualTab].title}
                  </h3>
                  <ManualSectionBody
                    section={manualSections[manualTab]}
                    onCopyTrack={copyApprovedText}
                    onOpenSample={openSampleLead}
                    onOpenField={() => changeManualTab(manualSections.findIndex(({ kind }) => kind === 'curriculum-field'))}
                    hasSample={workspaceData.leads.some((lead) => lead.id === 'LD-1042')}
                    curriculumProgress={curriculumProgress}
                    onToggleCurriculumModule={(moduleId, isCompleted) => {
                      setCurriculumProgress((current) => ({ ...current, [moduleId]: isCompleted }));
                    }}
                    curriculumProgressNotice={curriculumProgressNotice}
                  />
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
                      onClick={() => changeManualTab(Math.max(0, manualTab - 1))}
                    >
                      Previous
                    </button>
                    <button
                      className="manual-next"
                      type="button"
                      onClick={(event) => {
                        if (manualTab < manualSections.length - 1) {
                          changeManualTab(manualTab + 1);
                        } else {
                          handleNavClick(event, navItemByTarget.leads);
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
          <LeadershipSessionPanel
            session={workspaceData.leadershipSession}
            onUpdate={updateLeadershipSession}
          />
          <article className="manual-export-document">
            <section className="manual-export-cover">
              <span className="manual-export-mark">黒</span>
              <div className="manual-export-eyebrow">KUROGAMI GROUP · OPERATOR CONTINUUM</div>
              <h1>THE BLACK BOOK</h1>
              <h2>Kurogami Group Field Manual v1.0</h2>
              <div className="manual-export-rule" />
              <p>Process before outcome.</p>
              <div className="manual-export-cover-meta">
                <span>FIELD MANUAL FOR OPERATORS &amp; CLOSERS</span>
                <span>Education and process access only · Not investment advice</span>
              </div>
            </section>
            <section className="manual-export-contents">
              <div className="manual-section-kicker">FIELD MANUAL / INDEX</div>
              <h2>Contents</h2>
              <ol>
                {manualSections.map((section, index) => (
                  <li key={section.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{section.title}</strong>
                  </li>
                ))}
              </ol>
              <p>Process before outcome · Risk is named, bounded, and owned · The standard outlives the outcome.</p>
            </section>
            {manualSections.map((section, index) => (
              <section className="manual-export-section" key={section.title}>
                <div className="manual-section-kicker">SECTION {String(index + 1).padStart(2, '0')} / BLACK BOOK v1.0</div>
                <h2>{section.title}</h2>
                <ManualSectionBody
                  section={section}
                  onCopyTrack={copyApprovedText}
                  onOpenSample={openSampleLead}
                  hasSample={workspaceData.leads.some((lead) => lead.id === 'LD-1042')}
                  curriculumProgress={curriculumProgress}
                  onToggleCurriculumModule={(moduleId, isCompleted) => {
                    setCurriculumProgress((current) => ({ ...current, [moduleId]: isCompleted }));
                  }}
                  curriculumProgressNotice={curriculumProgressNotice}
                />
              </section>
            ))}
            <footer className="manual-export-footer">
              Kurogami Group · The Black Book · Process before outcome · Not investment advice
            </footer>
          </article>
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
                <label className="lead-stage-filter">
                  <span>Personality</span>
                  <select value={leadPersonalityFilter} onChange={(event) => setLeadPersonalityFilter(event.target.value)}>
                    <option>All personalities</option>
                    <option value="unknown">Unknown</option>
                    {personalityTypes.map(({ code }) => <option key={code} value={code}>{code}</option>)}
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
                      <span className="lead-registry-name">
                        {lead.name}
                        <span className={`personality-badge personality-${getLeadPersonality(lead).toLowerCase()}`}>
                          {getLeadPersonality(lead)}
                        </span>
                      </span>
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
            <label className="lead-stage-filter pipeline-personality-filter">
              <span>Personality</span>
              <select value={leadPersonalityFilter} onChange={(event) => setLeadPersonalityFilter(event.target.value)}>
                <option>All personalities</option>
                <option value="unknown">Unknown</option>
                {personalityTypes.map(({ code }) => <option key={code} value={code}>{code}</option>)}
              </select>
            </label>
            <div className="kanban-grid">
              {pipelineStages.map((stage) => (
                <div key={stage.label} className="stage-column">
                  <div className="stage-header">{stage.label}</div>
                  <div className="stage-list">
                    {workspaceData.leads.filter((lead) => (
                      lead.stage === stage.label
                      && (leadPersonalityFilter === 'All personalities' || getLeadPersonality(lead) === leadPersonalityFilter)
                    )).map((lead) => (
                      <button key={lead.name} className="lead-card" type="button" onClick={() => openLead(lead.name)}>
                        <div className="lead-head">
                          <span>{lead.name}</span>
                          <span className="lead-value">{lead.value}</span>
                        </div>
                        <div className="lead-row">
                          <span>{lead.channel}</span>
                          <span>{lead.temp}</span>
                        </div>
                        <span className={`personality-badge personality-${getLeadPersonality(lead).toLowerCase()}`}>
                          {getLeadPersonality(lead)}
                        </span>
                      </button>
                    ))}
                    {!workspaceData.leads.some((lead) => (
                      lead.stage === stage.label
                      && (leadPersonalityFilter === 'All personalities' || getLeadPersonality(lead) === leadPersonalityFilter)
                    )) && (
                      <div className="stage-empty-state">No prospects</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Prospecting'}>
            <div className="banner-warning">
              Appointment → Present → Close. Process before outcome. No signals or guaranteed returns.
            </div>
            <section className={`prospecting-panel ${isTourTarget('prospecting') ? 'tour-target' : ''}`} id="prospecting">
              <div className="panel-header">
                <span className="section-kicker">Prospecting / field sequence</span>
                <span className="range-label">Segment by personality · log the truth</span>
              </div>

              <section className="fast-start-block" aria-labelledby="fast-start-title">
                <div className="prospecting-section-heading">
                  <div>
                    <span className="prospecting-kicker">INSTALL / SAME DAY</span>
                    <h2 id="fast-start-title">Fast Start</h2>
                  </div>
                  <a className="text-action" href="#prospecting-list">Open my list of 10 <span aria-hidden="true">→</span></a>
                </div>
                <div className="fast-start-progress">
                  <div className="fast-start-progress-label">
                    <span>{fastStartSteps.filter(({ id }) => workspaceData.fastStart[id]).length} / {fastStartSteps.length} steps complete</span>
                    <span>{Math.round((fastStartSteps.filter(({ id }) => workspaceData.fastStart[id]).length / fastStartSteps.length) * 100)}%</span>
                  </div>
                  <progress
                    value={fastStartSteps.filter(({ id }) => workspaceData.fastStart[id]).length}
                    max={fastStartSteps.length}
                    aria-label="Fast Start progress"
                  />
                </div>
                <div className="fast-start-grid">
                  {fastStartSteps.map((step) => (
                    <label className={`fast-start-step ${workspaceData.fastStart[step.id] ? 'complete' : ''}`} key={step.id}>
                      <input
                        type="checkbox"
                        checked={workspaceData.fastStart[step.id]}
                        onChange={(event) => updateFastStart(step.id, event.target.checked)}
                      />
                      <span className="fast-start-step-index">{step.id}</span>
                      <span><strong>{step.label}</strong><small>{step.detail}</small></span>
                    </label>
                  ))}
                </div>
              </section>

              <div className="prospecting-grid">
                <section className="prospecting-card personality-quiz-card">
                  <div className="prospecting-section-heading">
                    <div>
                      <span className="prospecting-kicker">READ / DO NOT ASSUME</span>
                      <h2>Personality read</h2>
                    </div>
                  </div>
                  <label className="prospecting-field">
                    Apply to prospect
                    <select
                      value={selectedProspectId}
                      onChange={(event) => {
                        setSelectedProspectId(event.target.value);
                        setQuizAnswers(['', '', '', '']);
                        setProspectingNotice('');
                      }}
                    >
                      <option value="">Select a prospect</option>
                      {workspaceData.prospects.filter((prospect) => prospect.name.trim()).map((prospect) => (
                        <option key={prospect.id} value={prospect.id}>{prospect.name}</option>
                      ))}
                    </select>
                  </label>
                  <div className="personality-legend">
                    {personalityTypes.map((type) => (
                      <span key={type.code}><b>{type.code}</b>{type.label}</span>
                    ))}
                  </div>
                  <div className="personality-questions">
                    {personalityQuestions.map((item, index) => (
                      <label key={item.question}>
                        <span><b>0{index + 1}</b>{item.question}</span>
                        <select
                          value={quizAnswers[index]}
                          onChange={(event) => setQuizAnswers((current) => current.map((answer, answerIndex) => (
                            answerIndex === index ? event.target.value : answer
                          )))}
                        >
                          <option value="">Select the closest read</option>
                          {personalityTypes.map(({ code }) => (
                            <option key={code} value={code}>{code} — {item.answers[code]}</option>
                          ))}
                        </select>
                      </label>
                    ))}
                  </div>
                  <div className="personality-quiz-actions">
                    <span>Top read: {calculatePersonalityResult(quizAnswers) || '—'} <small>(ties resolve to F)</small></span>
                    <button className="panel-add-lead" type="button" disabled={!selectedProspectId || quizAnswers.some((answer) => !answer)} onClick={applyPersonalityQuiz}>
                      Apply to prospect
                    </button>
                  </div>
                </section>

                <section className="prospecting-card needs-touch-card">
                  <div className="prospecting-section-heading">
                    <div>
                      <span className="prospecting-kicker">FOLLOW THROUGH</span>
                      <h2>Needs touch</h2>
                    </div>
                    <span className="range-label">{dueProspects.length} due today / overdue</span>
                  </div>
                  {dueProspects.length > 0 ? (
                    <div className="needs-touch-list">
                      {dueProspects.map((prospect) => (
                        <button
                          className="needs-touch-row"
                          type="button"
                          key={prospect.id}
                          onClick={() => {
                            setSelectedProspectId(prospect.id);
                            document.getElementById('prospecting-list')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <span><strong>{prospect.name}</strong><small>{prospect.nextAction || 'Next action not recorded'}</small></span>
                          <time>{formatDueDate(prospect.due)}</time>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="prospecting-empty-state">No prospecting touches due today.</div>
                  )}
                  <p className="needs-touch-note">Due dates and next actions stay visible in your list of 10.</p>
                </section>
              </div>

              {prospectingNotice && <p className="copy-feedback prospecting-feedback" role="status" aria-live="polite">{prospectingNotice}</p>}

              <section className="prospecting-list-section" id="prospecting-list">
                <div className="prospecting-section-heading">
                  <div>
                    <span className="prospecting-kicker">CURRENT OPERATOR / PERSONAL BOOK</span>
                    <h2>List of 10</h2>
                  </div>
                  <button className="panel-add-lead" type="button" onClick={addProspectRow}>+ Add row</button>
                </div>
                <div className="prospect-table-scroller">
                  <table className="prospect-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Channel</th>
                        <th>Personality</th>
                        <th>State</th>
                        <th>Stage</th>
                        <th>Next action</th>
                        <th>Due</th>
                        <th>Record</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workspaceData.prospects.map((prospect) => (
                        <tr key={prospect.id}>
                          <td><input aria-label="Prospect name" value={prospect.name} onChange={(event) => updateProspect(prospect.id, { name: event.target.value })} placeholder="Name" /></td>
                          <td><input aria-label="Prospect channel" value={prospect.channel} onChange={(event) => updateProspect(prospect.id, { channel: event.target.value })} placeholder="Channel" /></td>
                          <td>
                            <select aria-label="Prospect personality" value={prospect.personality} onChange={(event) => updateProspect(prospect.id, { personality: event.target.value })}>
                              <option value="unknown">Unknown</option>
                              {personalityTypes.map(({ code }) => <option key={code} value={code}>{code}</option>)}
                            </select>
                          </td>
                          <td>
                            <select aria-label="Prospect state" value={prospect.state} onChange={(event) => updateProspect(prospect.id, { state: event.target.value })}>
                              {prospectStates.map((state) => <option key={state}>{state}</option>)}
                            </select>
                          </td>
                          <td>
                            <select aria-label="Prospect stage" value={prospect.stage} onChange={(event) => updateProspect(prospect.id, { stage: event.target.value })}>
                              {pipelineStages.map(({ label }) => <option key={label}>{label}</option>)}
                            </select>
                          </td>
                          <td><input aria-label="Prospect next action" value={prospect.nextAction} onChange={(event) => updateProspect(prospect.id, { nextAction: event.target.value })} placeholder="Next action" /></td>
                          <td><input aria-label="Prospect due date" type="date" value={prospect.due} onChange={(event) => updateProspect(prospect.id, { due: event.target.value })} /></td>
                          <td>
                            <div className="prospect-row-actions">
                              <button type="button" onClick={() => setProspectAppointment(prospect)}>Book appointment</button>
                              <button type="button" onClick={() => markProspectPresented(prospect)}>Mark presented</button>
                              {prospect.leadId ? (
                                <button type="button" onClick={() => openLead(workspaceData.leads.find((lead) => lead.id === prospect.leadId)?.name || prospect.name)}>Open lead</button>
                              ) : (
                                <button type="button" disabled={!prospect.name.trim()} onClick={() => addProspectToLeads(prospect.id)}>Add to Leads</button>
                              )}
                              <button className="prospect-delete-button" type="button" aria-label={`Delete ${prospect.name || 'empty'} prospect row`} onClick={() => deleteProspectRow(prospect.id)}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="prospecting-list-note">Ten blank rows are ready in a fresh book. Add to Leads links a named prospect to the existing registry and pipeline.</p>
              </section>

              <section className="prospecting-tracks-section">
                <div className="prospecting-section-heading">
                  <div>
                    <span className="prospecting-kicker">APPROVED LANGUAGE / COPYABLE</span>
                    <h2>Tracks</h2>
                  </div>
                  {selectedProspect?.name && <span className="range-label">Selected / {selectedProspect.name}</span>}
                </div>
                <div className="personality-tabs" role="tablist" aria-label="Prospecting personality tracks">
                  {personalityTypes.map(({ code }) => (
                    <button
                      key={code}
                      type="button"
                      role="tab"
                      aria-selected={personalityTab === code}
                      className={personalityTab === code ? 'active' : ''}
                      onClick={() => setPersonalityTab(code)}
                    >
                      {code} <span>{personalityTypes.find((type) => type.code === code)?.label}</span>
                    </button>
                  ))}
                </div>
                <div className="prospecting-track-grid">
                  {prospectingTrackSteps.map((step, index) => (
                    <article className="prospecting-track-card" key={step.id}>
                      <div className="prospecting-track-heading">
                        <span className="prospecting-track-index">0{index + 1}</span>
                        <h3>{step.label}</h3>
                        <button type="button" className="copy-button" onClick={() => copyProspectingTrack(step.id)}>
                          Copy{selectedProspect?.name ? ` for ${selectedProspect.name.trim().split(/\s+/)[0]}` : ' track'}
                        </button>
                      </div>
                      <p>{getProspectingTrackCopy(personalityTab, step.id)}</p>
                    </article>
                  ))}
                </div>
                {clipboardFeedback && <p className="copy-feedback" role="status" aria-live="polite">{clipboardFeedback}</p>}
              </section>
            </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Assets'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
          <section className={`assets-panel ${isTourTarget('assets') ? 'tour-target' : ''}`} id="assets">
            <div className="panel-header">
              <span className="section-kicker">Assets</span>
              <span className="range-label">Canonical live links / Copy for clipboard</span>
            </div>
            <p className="assets-notice">Use Group materials to introduce the doctrine and seat. Continuum is an internal operations desk, not a prospect-facing sales toy.</p>
            <p className="asset-primary-stack"><strong>Primary send order:</strong> Group home → Doctrine → Statecraft Method → Official Access (site) → Access desk (app).</p>
            <div className="asset-groups">
              {assetGroups.map((group) => (
                <section key={group.title} className="asset-group">
                  <div className="asset-group-heading">
                    <h3>{group.title}</h3>
                    <span>{group.range}</span>
                  </div>
                  <div className="asset-grid">
                    {group.assets.map((asset) => (
                      <article key={asset.title} className={`asset-card ${asset.internal ? 'asset-card-internal' : ''}`}>
                        <div className="asset-card-heading">
                          <div className="asset-label">{asset.title}</div>
                          {asset.primary && <span className="asset-badge">Primary</span>}
                          {asset.internal && <span className="asset-badge asset-badge-internal">Internal</span>}
                        </div>
                        <p><strong>When to send:</strong> {asset.whenToSend}</p>
                        {asset.presentationKey && (
                          <label className="asset-url-field">
                            Admin-approved URL
                            <input
                              type="url"
                              value={workspaceData.presentationAssets[asset.presentationKey]}
                              onChange={(event) => updatePresentationAsset(asset.presentationKey, event.target.value)}
                              placeholder="https://"
                            />
                            {workspaceData.presentationAssets[asset.presentationKey] && !getAssetUrl(asset, workspaceData.presentationAssets) && (
                              <span role="alert">Enter a valid HTTPS URL before opening or copying this asset.</span>
                            )}
                          </label>
                        )}
                        {getAssetUrl(asset, workspaceData.presentationAssets) ? (
                          <a className="asset-primary-link" href={getAssetUrl(asset, workspaceData.presentationAssets)} target="_blank" rel="noopener noreferrer">{getAssetUrl(asset, workspaceData.presentationAssets)}</a>
                        ) : (
                          <span className="asset-pending">{asset.placeholder}</span>
                        )}
                        <blockquote className="asset-copy-text">{getAssetCopy(asset, workspaceData.presentationAssets)}</blockquote>
                        <div className="asset-actions">
                          <button className="copy-button" type="button" onClick={() => copyApprovedText(getAssetCopy(asset, workspaceData.presentationAssets), asset.title)}>
                            Copy message
                          </button>
                          {getAssetUrl(asset, workspaceData.presentationAssets) && <a href={getAssetUrl(asset, workspaceData.presentationAssets)} target="_blank" rel="noopener noreferrer">Open link ↗</a>}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <p className="assets-footer-note">Links verified to kurogamigroup.com + live desk apps. Admin updates Continuum if routes change. Opportunity Present URLs remain pending Admin approval.</p>
            {clipboardFeedback && <p className="copy-feedback" role="status" aria-live="polite">{clipboardFeedback}</p>}
          </section>
          </div>

          <div className="page-view" hidden={activeNav !== 'Outreach'}>
            <div className="banner-warning">
              Sell process and Desk Access only. No returns language.
            </div>
            <section className={`assets-panel outreach-panel ${isTourTarget('outreach') ? 'tour-target' : ''}`} id="outreach">
              <div className="panel-header">
                <span className="section-kicker">Outreach &amp; sales resources</span>
                <span className="range-label">Approved quick sends / copy to clipboard</span>
              </div>
              <p className="assets-notice">Choose a message for the conversation stage, copy it, then personalize lightly without changing the law. Share only approved Group links.</p>
              <div className="outreach-tabs" role="tablist" aria-label="Outreach resource categories">
                <button
                  type="button"
                  role="tab"
                  id="outreach-tracks-tab"
                  aria-controls="outreach-tracks-panel"
                  aria-selected={outreachTab === 'tracks'}
                  className={`outreach-tab ${outreachTab === 'tracks' ? 'active' : ''}`}
                  onClick={() => setOutreachTab('tracks')}
                >
                  Conversation tracks
                </button>
                <button
                  type="button"
                  role="tab"
                  id="outreach-objections-tab"
                  aria-controls="outreach-objections-panel"
                  aria-selected={outreachTab === 'objections'}
                  className={`outreach-tab ${outreachTab === 'objections' ? 'active' : ''}`}
                  onClick={() => setOutreachTab('objections')}
                >
                  Objection replies
                </button>
                <button
                  type="button"
                  role="tab"
                  id="outreach-assets-tab"
                  aria-controls="outreach-assets-panel"
                  aria-selected={outreachTab === 'assets'}
                  className={`outreach-tab ${outreachTab === 'assets' ? 'active' : ''}`}
                  onClick={() => setOutreachTab('assets')}
                >
                  Approved links
                </button>
              </div>
              {outreachTab === 'tracks' && (
                <div className="asset-grid outreach-card-grid" id="outreach-tracks-panel" role="tabpanel" aria-labelledby="outreach-tracks-tab">
                  {outreachTracks.map((track) => (
                    <article key={track.title} className="asset-card outreach-card">
                      <div className="asset-label">{track.title}</div>
                      <blockquote className="asset-copy-text">{track.text}</blockquote>
                      <div className="asset-actions">
                        <button className="copy-button" type="button" onClick={() => copyApprovedText(track.text, track.title)}>
                          Copy message
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              {outreachTab === 'objections' && (
                <div className="asset-grid outreach-card-grid" id="outreach-objections-panel" role="tabpanel" aria-labelledby="outreach-objections-tab">
                  {objectionResponses.map((response) => (
                    <article key={response.title} className="asset-card outreach-card">
                      <div className="asset-label">{response.title}</div>
                      <blockquote className="asset-copy-text">{response.text}</blockquote>
                      <div className="asset-actions">
                        <button className="copy-button" type="button" onClick={() => copyApprovedText(response.text, response.title)}>
                          Copy reply
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              {outreachTab === 'assets' && (
                <div className="asset-grid outreach-card-grid" id="outreach-assets-panel" role="tabpanel" aria-labelledby="outreach-assets-tab">
                  {assetCards.map((asset) => (
                    <article key={asset.title} className="asset-card outreach-card">
                      <div className="asset-card-heading">
                        <div className="asset-label">{asset.title}</div>
                        {asset.primary && <span className="asset-badge">Primary</span>}
                        {asset.internal && <span className="asset-badge asset-badge-internal">Internal</span>}
                      </div>
                      <p><strong>When to send:</strong> {asset.whenToSend}</p>
                      {asset.presentationKey && (
                        <label className="asset-url-field">
                          Admin-approved URL
                          <input
                            type="url"
                            value={workspaceData.presentationAssets[asset.presentationKey]}
                            onChange={(event) => updatePresentationAsset(asset.presentationKey, event.target.value)}
                            placeholder="https://"
                          />
                          {workspaceData.presentationAssets[asset.presentationKey] && !getAssetUrl(asset, workspaceData.presentationAssets) && (
                            <span role="alert">Enter a valid HTTPS URL before opening or copying this asset.</span>
                          )}
                        </label>
                      )}
                      {getAssetUrl(asset, workspaceData.presentationAssets) ? (
                        <a className="asset-primary-link" href={getAssetUrl(asset, workspaceData.presentationAssets)} target="_blank" rel="noopener noreferrer">{getAssetUrl(asset, workspaceData.presentationAssets)}</a>
                      ) : (
                        <span className="asset-pending">{asset.placeholder}</span>
                      )}
                      <blockquote className="asset-copy-text">{getAssetCopy(asset, workspaceData.presentationAssets)}</blockquote>
                      <div className="asset-actions">
                        <button className="copy-button" type="button" onClick={() => copyApprovedText(getAssetCopy(asset, workspaceData.presentationAssets), asset.title)}>
                          Copy message
                        </button>
                        {getAssetUrl(asset, workspaceData.presentationAssets) && <a href={getAssetUrl(asset, workspaceData.presentationAssets)} target="_blank" rel="noopener noreferrer">Open link ↗</a>}
                      </div>
                    </article>
                  ))}
                </div>
              )}
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
            <LeadershipSessionPanel
              session={workspaceData.leadershipSession}
              onUpdate={updateLeadershipSession}
            />
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
            <p className="guide-field-note">Appointment → Present → Close. Segment by personality. Fast Start installs the machine same day. Leadership = duplication of standard, not pyramid ranks. Comp only on closed paid attributed seats under written terms.</p>
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
