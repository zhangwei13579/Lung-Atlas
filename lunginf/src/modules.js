import {
  bundleCrossLinks,
  conditionBackbone,
  coreQuestions,
  databasePortfolio,
  datasetReleases,
  evidenceHighlights,
  heroMetrics,
  immuneStateCatalog,
  launchChecklist,
  metadataPriorities,
  methodsResources,
  provenanceHistory,
  routeCopy,
  scopeBoundaries,
  signalCatalog,
  signalSearchSuggestions,
  siteMeta,
  targetUsers
} from './data.js';

function renderChipList(items) {
  return `<div class="chip-row">${items.map((item) => `<span class="chip">${item}</span>`).join('')}</div>`;
}

function renderSectionHead(kicker, title, description) {
  return `<div class="section-head">
    <p class="eyebrow">${kicker}</p>
    <h2>${title}</h2>
    <p>${description}</p>
  </div>`;
}

function bundleSiteById(siteId) {
  return databasePortfolio.find((site) => site.id === siteId);
}

function bundleHref(siteId, route = 'home') {
  const site = bundleSiteById(siteId);
  if (!site) return '#';
  return route ? `${site.url}#${route}` : site.url;
}

function getSingleCellViewerUrl() {
  if (typeof window === 'undefined') return './singlecell-viewer/';
  const pathname = window.location.pathname || '';
  if (pathname.includes('/dist/') || pathname.endsWith('/dist') || pathname.endsWith('/dist/index.html')) {
    return './singlecell-viewer/';
  }
  return './singlecell-viewer/dist/';
}

function viewerUrlForConfig(conditionId, mode = 'light') {
  const baseUrl = getSingleCellViewerUrl();
  const url = new URL(baseUrl, typeof window === 'undefined' ? 'http://localhost' : window.location.href);
  if (conditionId) url.searchParams.set('condition', conditionId);
  url.searchParams.set('mode', mode === 'dark' ? 'dark' : 'light');
  if (typeof window === 'undefined') return `${url.pathname}${url.search}`;
  return `${url.pathname}${url.search}`;
}

function renderSignalResults(items, options = {}) {
  const limit = Number(options.limit || 0);
  const visible = limit > 0 ? items.slice(0, limit) : items;

  if (!visible.length) {
    return `<div class="empty-state">No inflammatory signals match the current search.</div>`;
  }

  return visible
    .map(
      (signal) => `<article class="signal-card">
        <div class="marker-head">
          <strong>${signal.gene}</strong>
          <span>${signal.conditionFocus}</span>
        </div>
        <p class="lineage-label">${signal.interpretation}</p>
        <p>${signal.summary}</p>
        <div class="marker-meta">${signal.compartment} · ${signal.pathway}</div>
      </article>`
    )
    .join('');
}

export function renderHeroSection() {
  return `<section class="hero-shell card" id="LI-HERO-001">
    <div class="hero-copy">
      <p class="eyebrow">Four Lung Database Bundle</p>
      <h1>${siteMeta.title}</h1>
      <p class="hero-strap">${siteMeta.strapline}</p>
      <p>${siteMeta.heroIntro}</p>
      <div class="action-row">
        <button type="button" data-route="conditions">Open condition browser</button>
        <button type="button" class="ghost" data-route="signals">Search signal modules</button>
      </div>
    </div>
    <div class="hero-side">
      <div class="release-panel">
        <span>Current build</span>
        <strong>${siteMeta.release}</strong>
        <p>${siteMeta.coverage}</p>
      </div>
      <div class="metric-grid">
        ${heroMetrics
          .map(
            (metric) => `<article class="metric-card">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
              <p>${metric.detail}</p>
            </article>`
          )
          .join('')}
      </div>
    </div>
    <div class="timeline-ribbon">
      ${conditionBackbone
        .map(
          (condition) => `<article class="timeline-stop">
            <span>${String(condition.rank).padStart(2, '0')}</span>
            <strong>${condition.label}</strong>
            <p>${condition.state}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderConditionSection() {
  return `<section class="section-block" id="LI-CONDITION-001">
    ${renderSectionHead(
      'Condition backbone',
      'A five-condition scaffold from healthy lung to repair-associated states',
      'Each condition card anchors a pathogen class or recovery state, clarifying what should be compared against healthy reference tissue.'
    )}
    <div class="condition-grid">
      ${conditionBackbone
        .map(
          (condition) => `<article class="condition-card card" style="--card-color: ${condition.color}; --card-ink: ${condition.ink}">
            <div class="stage-meta">
              <span>${String(condition.rank).padStart(2, '0')}</span>
              <p>${condition.pathogen}</p>
            </div>
            <h3>${condition.label}</h3>
            <p class="stage-state">Control baseline</p>

            <p class="stage-section-header">Biological Emphasis</p>
            <p class="condition-summary">${condition.summary}</p>

            <button class="stage-inline-expand" data-target="bio-events-${condition.id}" aria-expanded="false">
              Other Events <span class="expand-arrow">&#9654;</span>
            </button>
            <div class="stage-expand-content" id="bio-events-${condition.id}">${condition.biologicalEvents || ''}</div>

            <p class="stage-section-header">Dominant Compartments</p>
            ${renderChipList(condition.traits)}

            <button class="stage-inline-expand" data-target="cell-interactions-${condition.id}" aria-expanded="false">
              Cell-Cell Interactions <span class="expand-arrow">&#9654;</span>
            </button>
            <div class="stage-expand-content" id="cell-interactions-${condition.id}">${condition.cellInteractions || ''}</div>

            <p class="stage-section-header">RESEARCH Question</p>
            <p class="stage-question">${condition.question}</p>

            <button class="stage-inline-expand" data-target="more-questions-${condition.id}" aria-expanded="false">
              More Questions <span class="expand-arrow">&#9654;</span>
            </button>
            <div class="stage-expand-content" id="more-questions-${condition.id}">${condition.moreQuestions || ''}</div>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderConditionViewerSection(selectedCondition = 'healthy', mode = 'light') {
  const viewerUrl = viewerUrlForConfig(selectedCondition, mode);

  return `<section class="section-block" id="LI-UMAP-001">
    ${renderSectionHead(
      'Single-cell viewer',
      'Condition-centered UMAP exploration',
      'The Conditions page is centered on the embedded single-cell viewer. Condition buttons live inside the viewer so the embedding can stay wide and visually primary.'
    )}
    <article class="card atlas-viewer-card atlas-viewer-wide">
      <div class="atlas-viewer-head">
        <div>
          <p class="eyebrow">Single-cell Data Viewer</p>
          <h2>UMAP-first infection condition exploration</h2>
          <p>This viewer uses simulated healthy and infection-response subsets derived from the bundled lungdev coordinates so the portal can use the same real viewer interface without showing static UMAP images.</p>
        </div>
        <a class="atlas-link" href="${viewerUrl}" target="_blank" rel="noopener noreferrer">Open viewer in new tab</a>
      </div>
      <iframe
        title="lunginf single-cell condition viewer"
        src="${viewerUrl}"
        class="atlas-viewer-frame"
        loading="lazy"
      ></iframe>
      <p class="atlas-note">If the panel is blank, build the viewer in <code>singlecell-viewer/</code> and then rerun the top-level build.</p>
    </article>
  </section>`;
}

export function renderImmuneSection(options = {}) {
  const compact = Boolean(options.compact);
  const visiblePrograms = compact ? immuneStateCatalog.slice(0, 3) : immuneStateCatalog;

  return `<section class="section-block" id="LI-IMMUNE-001">
    ${renderSectionHead(
      'Immune landscape',
      'Host-response states should be compared as programs, not just as cell counts',
      'The MVP centers on interpretable immune-state modules so users can compare antiviral, antibacterial, fungal, and repair-linked remodeling logic.'
    )}
    <div class="immune-grid ${compact ? 'compact' : ''}">
      ${visiblePrograms
        .map(
          (program) => `<article class="immune-card card">
            <p class="lineage-label">${program.category}</p>
            <h3>${program.name}</h3>
            <p class="species-comparison">${program.comparison}</p>
            <p>${program.summary}</p>
            ${renderChipList(program.anchors)}
            <p class="lineage-insight">${program.evidence}</p>
          </article>`
        )
        .join('')}
    </div>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="immune-states">Inspect full immune-state explorer</button></div>`
        : ''
    }
  </section>`;
}

export function renderSignalSection(options = {}) {
  const compact = Boolean(options.compact);
  const limit = compact ? 4 : signalCatalog.length;

  return `<section class="section-block" id="LI-SIGNAL-001">
    ${renderSectionHead(
      'Signal explorer',
      'Search inflammatory and repair-linked signal modules by gene and condition',
      'The launch signal catalog is designed to anchor interpretation of infected lung programs, not to stand in for a full pathway database.'
    )}
    <div class="card marker-search-panel" data-signal-search-root data-limit="${limit}">
      <div class="search-controls">
        <input
          type="text"
          class="search-input"
          data-signal-search
          placeholder="Search genes, pathways, condition labels, or interpretations"
          aria-label="Search inflammatory signals"
        />
        <button type="button" class="ghost" data-signal-reset>Reset</button>
      </div>
      <div class="chip-row">
        ${signalSearchSuggestions
          .map(
            (gene) => `<button type="button" class="chip chip-button" data-signal-suggestion="${gene}">${gene}</button>`
          )
          .join('')}
      </div>
      <div class="marker-results" data-signal-results>${renderSignalResults(signalCatalog, { limit })}</div>
    </div>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="signals">Open full signal workspace</button></div>`
        : ''
    }
  </section>`;
}

export function renderDatasetSection(options = {}) {
  const compact = Boolean(options.compact);
  const visibleDatasets = compact ? datasetReleases.slice(0, 3) : datasetReleases;

  return `<section class="section-block" id="LI-DATASET-001">
    ${renderSectionHead(
      'Datasets and releases',
      'Condition-scoped release rows make comparison logic explicit',
      'Each release states its condition framing, respiratory structure emphasis, assay footprint, and current prototype interpretation limits.'
    )}
    <article class="card data-table-card">
      <div class="table-card-head">
        <div>
          <h3>Infectious condition release table</h3>
          <p>${compact ? `Showing ${visibleDatasets.length} of ${datasetReleases.length} current prototype releases.` : `Showing all ${datasetReleases.length} current prototype releases.`}</p>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dataset</th>
              <th>Condition</th>
              <th>Structure</th>
              <th>Cells</th>
              <th>Assays</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${visibleDatasets
              .map(
                (dataset) => `<tr class="dataset-row" data-dataset-id="${dataset.id}" style="cursor: pointer;">
                  <td>${dataset.id}</td>
                  <td><strong>${dataset.dataset}</strong></td>
                  <td>${dataset.condition}</td>
                  <td>${dataset.structure}</td>
                  <td>${dataset.cells === 'No data available' ? '<strong style="color:#ef4444">No data available</strong>' : dataset.cells}</td>
                  <td>${dataset.assays}</td>
                  <td><span class="table-status">${dataset.status}</span></td>
                  <td>${dataset.note}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </article>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="datasets">Open full dataset table</button></div>`
        : ''
    }
  </section>`;
}

export function renderDatasetDetailPage(datasetId) {
  const dataset = datasetReleases.find((d) => d.id === datasetId);

  if (!dataset) {
    return `<main class="page-shell">
      <section class="page-banner card">
        <p class="eyebrow">Dataset not found</p>
        <h1>Unknown Dataset</h1>
        <p>The requested dataset ID "${datasetId}" could not be found.</p>
      </section>
    </main>`;
  }

  // Dataset metadata based on condition/stage
  const datasetMeta = {
    'LI-DS-001': {
      eyebrow: 'HEALTHY',
      title: 'Healthy Lung Dataset',
      description: 'Reference baseline for comparing infected tissue remodeling and resident immune homeostasis. Browse, filter, and download single-cell data for healthy lung tissue.'
    },
    'LI-DS-002': {
      eyebrow: 'VIRAL',
      title: 'Viral Infection Dataset',
      description: 'Anchors interferon-rich epithelial and immune response modules under viral injury. Browse, filter, and download single-cell data for viral pneumonia.'
    },
    'LI-DS-003': {
      eyebrow: 'BACTERIAL',
      title: 'Bacterial Infection Dataset',
      description: 'Supports neutrophil-heavy inflammatory and barrier-disruption comparisons. Browse, filter, and download single-cell data for bacterial pneumonia.'
    },
    'LI-DS-004': {
      eyebrow: 'FUNGAL',
      title: 'Fungal Infection Dataset',
      description: 'Captures prolonged innate defense and tissue-damage programs under fungal disease. Browse, filter, and download single-cell data for fungal lung injury.'
    },
    'LI-DS-005': {
      eyebrow: 'REPAIR',
      title: 'Repair & Resolution Dataset',
      description: 'Frames resolution macrophages, epithelial repair, and recovery-linked tissue remodeling. Browse, filter, and download single-cell data for post-infection recovery.'
    }
  };

  const meta = datasetMeta[datasetId] || {
    eyebrow: dataset.condition.toUpperCase(),
    title: dataset.dataset,
    description: dataset.note
  };

  return `<main class="page-shell">
    <section class="page-banner card dataset-detail-banner">
      <p class="eyebrow">${meta.eyebrow} • ${dataset.id}</p>
      <h1>${meta.title}${datasetId === 'LI-DS-002' ? ' <a href="./src/assets/downloads/lunginf.viral.matadata.xlsx" class="supp-download-btn" download aria-label="Download Supplementary Metadata"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Supplementary Metadata</a>' : ''}${datasetId === 'LI-DS-003' ? ' <a href="./src/assets/downloads/lunginf.Bacterial.meta.data.xlsx" class="supp-download-btn" download aria-label="Download Supplementary Metadata"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Supplementary Metadata</a>' : ''}${datasetId === 'LI-DS-004' ? ' <a href="./src/assets/downloads/lunginf.Fungal.all.metadata.xlsx" class="supp-download-btn" download aria-label="Download Supplementary Metadata"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Supplementary Metadata</a>' : ''}</h1>
      <p>${meta.description}</p>
    </section>

    <section class="section-block">
      <article class="card data-download-card">
        <div class="download-card-wrapper">
          <div class="download-table-controls">
            <input
              type="text"
              class="download-search-input"
              data-download-search
              placeholder="Search across all columns..."
              aria-label="Search dataset table"
            />
            <button type="button" class="ghost download-reset-btn" data-download-reset>Reset all filters</button>
          </div>
          <div class="table-container">
            <table class="data-table download-table" data-download-table>
              <thead>
                <tr>
                  <th>SPECIES <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="0"></th>
                  <th>REGION <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="1"></th>
                  <th>DISEASE <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="2"></th>
                  <th>PLATFORM <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="3"></th>
                  <th>SEQ METHOD <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="4"></th>
                  <th>YEAR <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="5"></th>
                  <th>CELLS <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="6"></th>
                  <th>DOI <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="7"></th>
                  <th>ACCESSION <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="8"></th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>
              <tbody data-download-tbody>
                <!-- Data will be populated dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
  </main>`;
}

export function renderEvidenceSection() {
  return `<section class="section-block" id="LI-EVIDENCE-001">
    ${renderSectionHead(
      'Evidence and provenance',
      'Condition framing should stay explicit before broader infection expansion',
      'The current prototype favors transparent condition anchors, route logic, and release scope over synthetic completeness.'
    )}
    <div class="evidence-grid">
      <article class="card">
        <h3>Current evidence rails</h3>
        <div class="metric-grid">
          ${evidenceHighlights
            .map(
              (item) => `<article class="metric-card">
                <span>${item.label}</span>
                <strong>${item.value}</strong>
                <p>${item.detail}</p>
              </article>`
            )
            .join('')}
        </div>
      </article>
      <article class="card">
        <h3>Provenance timeline</h3>
        <ol class="timeline-list">
          ${provenanceHistory.map((item) => `<li>${item}</li>`).join('')}
        </ol>
      </article>
      <article class="card">
        <h3>Methods and resources</h3>
        <ul class="key-list">
          ${methodsResources.map((item) => `<li><strong>${item.title}:</strong> ${item.detail}</li>`).join('')}
        </ul>
      </article>
    </div>
  </section>`;
}

export function renderPortfolioSection() {
  const relatedSites = databasePortfolio.filter((site) => site.id !== siteMeta.siteId);

  return `<section class="section-block" id="LI-PORTFOLIO-001">
    ${renderSectionHead(
      'Portfolio context',
      'lunginf is one axis of a four-database system',
      'The technical base can be shared, but the scientific mission, filters, and question framing must remain distinct.'
    )}
    <div class="portfolio-grid">
      ${relatedSites
        .map(
          (site) => `<a class="portfolio-card card" href="${bundleHref(site.id)}">
            <span>${site.axis}</span>
            <h3>${site.label}</h3>
            <p>${site.summary}</p>
            <strong>${site.status}</strong>
            <small>${site.customDomain}</small>
          </a>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderBundleBridgeSection(routeId, moduleId = 'LI-BRIDGE-001') {
  const links = bundleCrossLinks[routeId] ?? [];

  if (!links.length) return '';

  return `<section class="section-block" id="${moduleId}">
    ${renderSectionHead(
      'Bundle links',
      'Follow complementary routes across the four lung databases',
      'This page is cross-linked to the other portals so infection questions can stay connected to development, cancer, and evolution views.'
    )}
    <div class="bundle-bridge-grid">
      ${links
        .map((link) => {
          const site = bundleSiteById(link.siteId);
          if (!site) return '';
          return `<a class="bundle-bridge-card card" href="${bundleHref(link.siteId, link.route)}">
            <span>${site.axis} · ${site.label}</span>
            <h3>${link.title}</h3>
            <p>${link.summary}</p>
            <strong>${site.customDomain}</strong>
          </a>`;
        })
        .join('')}
    </div>
  </section>`;
}

export function renderPageBanner(routeId) {
  const copy = routeCopy[routeId];

  return `<section class="page-banner card">
    <p class="eyebrow">${copy.eyebrow}</p>
    <h1>${copy.title}</h1>
    <p>${copy.description}</p>
  </section>`;
}

export function renderHomePage() {
  return `<main class="page-shell page-home">
    ${renderHeroSection()}
    ${renderConditionSection()}
    ${renderImmuneSection({ compact: true })}
    ${renderSignalSection({ compact: true })}
    ${renderDatasetSection({ compact: true })}
    ${renderBundleBridgeSection('home')}
    ${renderPortfolioSection()}
  </main>`;
}

export function renderConditionsPage(selectedCondition = 'healthy', mode = 'light') {
  return `<main class="page-shell">
    ${renderPageBanner('conditions')}
    ${renderConditionViewerSection(selectedCondition, mode)}
    ${renderConditionSection()}
    <section class="section-block card" id="LI-QUESTION-001">
      ${renderSectionHead(
        'Core infection questions',
        'Condition pages should answer concrete healthy-versus-infected questions',
        'The condition route exists to connect pathogen category, tissue injury, and host-response interpretation.'
      )}
      <ul class="key-list">
        ${coreQuestions.map((question) => `<li>${question}</li>`).join('')}
      </ul>
    </section>
    ${renderBundleBridgeSection('conditions')}
  </main>`;
}

export function renderImmuneStatesPage() {
  return `<main class="page-shell">
    ${renderPageBanner('immune-states')}
    ${renderImmuneSection()}
    <section class="section-block card" id="LI-RULES-001">
      ${renderSectionHead(
        'Reading rules',
        'Shared immune response does not mean pathogen identity disappears',
        'Programs should be interpreted through both host-response logic and condition-specific context.'
      )}
      <ul class="key-list">
        <li>Use shared modules to compare common host-response logic across infected lungs.</li>
        <li>Use pathogen-skewed modules to identify viral, bacterial, fungal, or repair-associated differences.</li>
        <li>Keep healthy baseline states visible so infection-linked expansion is not misread as normal tissue composition.</li>
      </ul>
    </section>
    ${renderBundleBridgeSection('immune-states')}
  </main>`;
}

export function renderSignalsPage() {
  return `<main class="page-shell">
    ${renderPageBanner('signals')}
    ${renderSignalSection()}
    <section class="section-block card" id="LI-META-001">
      ${renderSectionHead(
        'Metadata priorities',
        'Signal interpretation depends on explicit infection metadata',
        'These fields drive the MVP signal search, condition framing, and future healthy-versus-infected comparisons.'
      )}
      ${renderChipList(metadataPriorities)}
    </section>
    ${renderBundleBridgeSection('signals')}
  </main>`;
}

export function renderDatasetsPage() {
  return `<main class="page-shell">
    ${renderPageBanner('datasets')}
    ${renderDatasetSection()}
    ${renderEvidenceSection()}
    ${renderBundleBridgeSection('datasets')}
  </main>`;
}

export function renderAboutPage() {
  return `<main class="page-shell">
    ${renderPageBanner('about')}
    <section class="split-grid">
      <article class="card">
        <h2>Scientific mission</h2>
        <p>${siteMeta.mission}</p>
        <p>${siteMeta.focus}</p>
      </article>
      <article class="card">
        <h2>Target users</h2>
        <ul class="key-list">
          ${targetUsers.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
      <article class="card">
        <h2>Scope boundaries</h2>
        <ul class="key-list">
          ${scopeBoundaries.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
      <article class="card">
        <h2>Launch checklist</h2>
        <ul class="key-list">
          ${launchChecklist.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
    </section>
    ${renderBundleBridgeSection('about')}
    ${renderPortfolioSection()}
  </main>`;
}

function signalMatches(signal, query) {
  const haystack = [
    signal.gene,
    signal.conditionFocus,
    signal.interpretation,
    signal.compartment,
    signal.pathway,
    signal.summary
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export function initSignalSearch() {
  const roots = document.querySelectorAll('[data-signal-search-root]');

  roots.forEach((root) => {
    if (root.dataset.bound === 'true') return;

    const input = root.querySelector('[data-signal-search]');
    const results = root.querySelector('[data-signal-results]');
    const reset = root.querySelector('[data-signal-reset]');
    const suggestionButtons = root.querySelectorAll('[data-signal-suggestion]');
    const limit = Number(root.dataset.limit || '0');

    if (!input || !results) return;

    function update(query = input.value.trim()) {
      const matches = query ? signalCatalog.filter((signal) => signalMatches(signal, query)) : signalCatalog;
      results.innerHTML = renderSignalResults(matches, { limit });
    }

    input.addEventListener('input', () => update());
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        update();
      }
    });

    reset?.addEventListener('click', () => {
      input.value = '';
      update('');
    });

    suggestionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        input.value = button.dataset.signalSuggestion || '';
        update(input.value);
      });
    });

    update();
    root.dataset.bound = 'true';
  });
}
