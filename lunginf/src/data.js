export const DATA_VERSION = '2026-04-04.lunginf-mvp.v1';
export const DETERMINISTIC_SEED = 20260404;

export const siteMeta = {
  siteId: 'lunginf',
  label: 'lunginf',
  title: 'Lung Infection Atlas',
  githubPagesUrl: 'https://chichaumiao-openclaw.github.io/lunginf/',
  customDomain: 'lunginf.gznl.org',
  strapline:
    'A single-cell database of lung infectious diseases across pathogens, disease states, and host immune responses.',
  heroIntro:
    'Track healthy-versus-infected shifts in epithelial, stromal, and immune compartments across viral, bacterial, fungal, and repair-associated lung programs.',
  mission:
    'Build a disease-focused resource for studying how lung cell states, immune responses, and tissue programs change across infectious conditions.',
  release: 'Prototype release 0.1',
  coverage: 'Healthy reference plus infection-response MVP',
  focus:
    'Pathogen classes, immune remodeling, inflammatory signaling, and healthy-versus-infected comparisons.',
  defaultTheme: 'lunginf'
};

export const databasePortfolio = [
  {
    id: 'lungdev',
    label: 'lungdev',
    axis: 'Development',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungdev/',
    customDomain: 'lungdev.gznl.org',
    summary: 'Stage-resolved developmental atlas from early fetal lung to mature adulthood.'
  },
  {
    id: 'lunginf',
    label: 'lunginf',
    axis: 'Infection / inflammation',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lunginf/',
    customDomain: 'lunginf.gznl.org',
    summary: 'Host response, pathogen-specific remodeling, and injury-repair programs.'
  },
  {
    id: 'lungcancer',
    label: 'lungcancer',
    axis: 'Cancer',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungcancer/',
    customDomain: 'lungcancer.gznl.org',
    summary: 'Malignant ecosystems, microenvironment remodeling, and clinical heterogeneity.'
  },
  {
    id: 'lungevo',
    label: 'lungevo',
    axis: 'Evolution',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungevo/',
    customDomain: 'lungevo.gznl.org',
    summary: 'Cross-species respiratory programs, homology, and lineage innovation.'
  }
];

export const navigationItems = [
  { id: 'home', label: 'Home', kicker: 'Infection program overview' },
  { id: 'conditions', label: 'Conditions', kicker: 'Healthy to infected comparison' },
  { id: 'immune-states', label: 'Immune States', kicker: 'Host-response remodeling' },
  { id: 'signals', label: 'Signals', kicker: 'Inflammatory modules and marker search' },
  { id: 'datasets', label: 'Datasets', kicker: 'Release scope and provenance' },
  { id: 'about', label: 'About', kicker: 'Mission, boundaries, and roadmap' }
];

export const conditionBackbone = [
  {
    rank: 1,
    id: 'healthy',
    label: 'Healthy',
    color: '#3b82f6',
    ink: '#ffffff',
    pathogen: 'Reference state',
    state: 'Control baseline',
    headline: 'Healthy lung tissue anchors all downstream infection comparisons',
    summary:
      'This baseline reference captures alveolar homeostasis, resident macrophage surveillance, and low inflammatory tone before pathogen-driven remodeling.',
    traits: ['Healthy control', 'Resident macrophages', 'Low inflammatory tone'],
    question: 'Which epithelial and immune programs define the healthy comparison frame?',
    biologicalEvents: '<ul><li>Homeostatic maintenance: Continuous epithelial turnover, surfactant recycling, and mucociliary clearance.</li><li>Resident immune surveillance: Alveolar macrophages in an M2-like anti-inflammatory state.</li><li>Barrier integrity: Tight junctions, basement membrane composition, and endothelial-epithelial crosstalk.</li><li>Low inflammatory tone: Minimal cytokine release, controlled oxidative stress, and tolerance induction.</li></ul>',
    cellInteractions: '<ul><li>AT1-AT2 crosstalk: Physical interaction and mutual signaling maintain alveolar homeostasis. AT1 cells provide structural support while AT2 cells produce surfactant for both cell types.</li><li>Macrophage-epithelial surveillance: Resident alveolar macrophages (M2-like) continuously sample the alveolar space, phagocytose debris, and produce anti-inflammatory signals (IL-10, TGF-beta) to maintain tolerance.</li><li>Lipid signaling: AT2-derived surfactant components — surfactant lipids (phosphatidylcholine) and proteins (SP-A, SP-D) — regulate alveolar macrophage activation state and alveolar surface mechanics.</li><li>Fibroblast-epithelial niche: PDGFRA+ fibroblasts provide structural support and secrete Wnt ligands maintaining AT2 homeostasis.</li><li>Endothelial-epithelial crosstalk: Close proximity of alveolar capillaries to epithelium enables gas exchange and cross-talk via VEGF, angiopoietins, and Notch signaling.</li></ul>',
    moreQuestions: '<ul><li>What defines "normal" epithelial turnover rates in human versus mouse lungs?</li><li>How do resident immune populations differ between children and adults?</li><li>Which baseline markers best predict resilience versus susceptibility to infection?</li></ul>'
  },
  {
    rank: 2,
    id: 'viral',
    label: 'Viral',
    color: '#8b5cf6',
    ink: '#ffffff',
    pathogen: 'Viral infection',
    state: 'Interferon-dominant injury',
    headline: 'Antiviral interferon programs dominate early infected airway and immune states',
    summary:
      'Viral conditions emphasize interferon-responsive epithelium, antigen presentation, and inflammatory myeloid recruitment across infected lung compartments.',
    traits: ['Interferon response', 'Antigen presentation', 'Airway injury'],
    question: 'Which host-response modules are shared across viral pneumonias versus virus-specific?',
    biologicalEvents: '<ul><li>Interferon response: ISG activation (IFITM3, MX1, OASL) in epithelium and immune cells.</li><li>Cytokine signaling: CXCL10, CCL5, and IL-6 release creating antiviral inflammatory environment.</li><li>Immune cell recruitment: NK cell expansion, monocyte-derived macrophages, and T cell infiltration.</li><li>Epithelial stress: ER stress, apoptosis in severely affected regions.</li></ul>',
    cellInteractions: '<ul><li>Infected epithelium-immune crosstalk: Virus-infected cells release interferons (IFN-alpha/beta) triggering neighboring cell protection (ISG expression).</li><li>Antigen presentation surge: HLA-DR upregulation on dendritic cells and macrophages enhances adaptive immune recognition.</li><li>NK cell-epithelial interaction: NK cells preferentially target infected epithelium expressing stress ligands (MICA/B).</li><li>Immune cell trafficking: CXCR3 ligand gradient (CXCL9/10/11) guides T cell recruitment to infected tissue.</li><li>Type 2 immunity cross-regulation: In contexts of allergic predisposition or combined airway injury, type 2 cytokines (IL-4, IL-13) may cross-regulate antiviral inflammation and affect epithelial repair.</li></ul>',
    moreQuestions: '<ul><li>Which ISG signatures best distinguish viral from bacterial pneumonia in scRNA-seq data?</li><li>How does viral tropism (airway vs. alveolar) affect the host response spectrum?</li><li>What determines the balance between protective interferon response and immunopathology?</li><li>How do chronic post-viral states (long COVID) differ from acute infection signatures?</li></ul>'
  },
  {
    rank: 3,
    id: 'bacterial',
    label: 'Bacterial',
    color: '#f97316',
    ink: '#ffffff',
    pathogen: 'Bacterial infection',
    state: 'Neutrophil-rich inflammation',
    headline: 'Bacterial lung infection amplifies acute inflammatory and neutrophil programs',
    summary:
      'Bacterial states prioritize neutrophil influx, chemokine signaling, alveolar macrophage disruption, and epithelial stress linked to tissue damage.',
    traits: ['Neutrophil influx', 'Acute inflammation', 'Barrier disruption'],
    question: 'Which inflammatory circuits distinguish bacterial injury from viral interferon states?',
    biologicalEvents: '<ul><li>Neutrophil influx: Rapid S100A8/A9-positive neutrophil recruitment to infected alveoli.</li><li>Acute inflammation: IL-1beta, TNF-alpha, and IL-6 cytokine storm amplifying tissue damage.</li><li>Barrier disruption: Epithelial tight junction breakdown, alveolar edema, and fibrin deposition.</li><li>Alveolar macrophage reprogramming: M1-like activation with enhanced phagocytosis and increased antigen presentation.</li></ul>',
    cellInteractions: '<ul><li>Neutrophil-epithelial interaction: Neutrophils release proteases (NE, MMP-9) and reactive oxygen species damaging epithelial barriers.</li><li>Macrophage-neutrophil crosstalk: Alveolar macrophages orchestrate neutrophil recruitment via CXCL1, CXCL2, and IL-8 (CXCL8).</li><li>Bacterial recognition: TLR4/NOD-like receptor activation triggers inflammasome assembly and IL-1beta release.</li><li>Endothelial activation: TNF-alpha-primed endothelium expresses adhesion molecules (ICAM-1, VCAM-1) facilitating leukocyte extravasation.</li><li>Fibrin deposition circuit: Epithelial damage triggers coagulation cascade and fibrin deposition, contributing to alveolar fibrin clots and edema.</li></ul>',
    moreQuestions: '<ul><li>How do bacterial pneumonia subtypes (community-acquired vs. hospital-acquired) differ in scRNA-seq signatures?</li><li>What determines neutrophil longevity and NETosis in infected lungs?</li><li>Which biomarkers distinguish bacterial from viral infection at single-cell resolution?</li><li>How does antibiotic treatment alter the host response trajectory in scRNA-seq profiles?</li></ul>'
  },
  {
    rank: 4,
    id: 'fungal',
    label: 'Fungal',
    color: '#ef4444',
    ink: '#ffffff',
    pathogen: 'Fungal infection',
    state: 'Damage and innate defense',
    headline: 'Fungal disease exposes mixed innate defense and tissue-damage programs',
    summary:
      'Fungal conditions highlight myeloid activation, epithelial stress, matrix remodeling, and prolonged inflammatory signaling across damaged lung tissue.',
    traits: ['Innate defense', 'Matrix remodeling', 'Prolonged inflammation'],
    question: 'Which cell states persist in fungal injury and how do they differ from bacterial damage?',
    biologicalEvents: '<ul><li>Innate defense: Dectin-1/CARD9 signaling, IL-1beta production, and neutrophil-mediated fungal killing.</li><li>Matrix remodeling: Fibroblast activation, collagen deposition, and scar formation.</li><li>Prolonged inflammation: Persistent IL-17A, IL-22, and GM-CSF production maintaining granulocytic infiltration.</li><li>Epithelial defense: MUC5AC/MUC5B upregulation, epithelial cell shedding, and alarmins (IL-25, IL-33, TSLP) release.</li></ul>',
    cellInteractions: '<ul><li>Macrophage-fungal recognition: Dectin-1/Syk signaling in macrophages triggers antifungal immune response and cytokine production.</li><li>Neutrophil-fungal killing: Neutrophils form extracellular traps (NET) and release calprotectin (S100A8/A9) against fungal hyphae.</li><li>Epithelial alarmins: Damaged epithelium releases IL-33 and TSLP activating group 2 innate lymphoid cells (ILC2).</li><li>Fibroblast-epithelial crosstalk: TGF-beta from immune cells activates fibroblasts, driving periostin (POSTN) deposition and matrix remodeling.</li><li>Adaptive immune bridging: Th17 cells (IL-17A, IL-22) support antifungal neutrophil function and epithelial barrier maintenance.</li></ul>',
    moreQuestions: '<ul><li>How do invasive versus allergic fungal lung diseases differ in single-cell landscapes?</li><li>What determines fungal clearance versus chronic colonization in host lungs?</li><li>Which immune states predict successful antifungal therapy outcomes?</li><li>How does fungal-bacterial co-infection reshape the inflammatory landscape?</li></ul>'
  },
  {
    rank: 5,
    id: 'repair',
    label: 'Repair',
    color: '#22c55e',
    ink: '#052e16',
    pathogen: 'Post-infection recovery',
    state: 'Repair and resolution',
    headline: 'Recovery states capture inflammation resolution and tissue repair programs',
    summary:
      'Repair-associated conditions track epithelial reconstitution, matrix normalization, and macrophage states linked to inflammatory resolution after infection.',
    traits: ['Repair program', 'Resolution macrophages', 'Epithelial recovery'],
    question: 'Which repair-linked states indicate successful recovery rather than chronic inflammation?',
    biologicalEvents: '<ul><li>Epithelial recovery: AT2 cell proliferation, KRT8+ transitional states, and AT1-AT2 reprogramming.</li><li>Resolution macrophages: Anti-inflammatory M2-like macrophages (FOLR2, SELENOP) clearing debris and secreting repair signals.</li><li>Matrix normalization: Fibroblast deactivation, collagen remodeling, and elastic fiber restoration.</li><li>Angiogenesis: Endothelial proliferation, vessel maturation, and re-establishment of gas exchange capacity.</li></ul>',
    cellInteractions: '<ul><li>AT2 proliferation circuit: KRT8+ transitional cells emerge as intermediate state between injured AT1 and repopulated AT2 pool.</li><li>Macrophage-epithelial repair: M2 macrophages secrete Wnt ligands, HGF, and KGF promoting epithelial proliferation and survival.</li><li>Fibroblast-matrix remodeling: MMP9/MMP12 upregulation enables collagen turnover, while TIMPs maintain balance preventing excessive fibrosis.</li><li>Endothelial regeneration: VEGF-A from alveolar macrophages and AT2 cells supports capillary regrowth via VEGFR2 signaling.</li><li>Immune resolution: Regulatory T cells (Tregs) and IL-10 production suppress residual inflammation, preventing chronic damage.</li></ul>',
    moreQuestions: '<ul><li>What molecular markers distinguish successful resolution from "failed regeneration" leading to fibrosis?</li><li>How does the timing of macrophage reprogramming affect long-term recovery outcomes?</li><li>What role does AT1-to-AT2 reprogramming play in human lung repair?</li></ul>'
  }
];

export const heroMetrics = [
  { label: 'Condition anchors', value: '5', detail: 'healthy to repair' },
  { label: 'Immune programs', value: '5', detail: 'launch-ready host-response states' },
  { label: 'Signal markers', value: '10', detail: 'searchable inflammatory modules' },
  { label: 'Prototype datasets', value: '5', detail: 'condition-scoped release rows' }
];

export const immuneStateCatalog = [
  {
    name: 'Interferon-dominant antiviral myeloid activation',
    category: 'Shared immune program',
    comparison: 'Healthy -> viral',
    summary:
      'Interferon-responsive monocytes and macrophages expand rapidly under viral injury and reshape antigen-presentation dynamics.',
    evidence:
      'Best anchored by IFITM3, CXCL10, and HLA-DRA enrichment across antiviral conditions.',
    anchors: ['IFITM3', 'CXCL10', 'HLA-DRA']
  },
  {
    name: 'Neutrophil-heavy acute inflammatory recruitment',
    category: 'Pathogen-skewed program',
    comparison: 'Healthy -> bacterial',
    summary:
      'Bacterial lung conditions intensify neutrophil recruitment and chemokine-driven tissue infiltration beyond the typical viral response.',
    evidence:
      'Marked by S100A8, CXCL8, and IL1B-centered acute inflammation.',
    anchors: ['S100A8', 'CXCL8', 'IL1B']
  },
  {
    name: 'Alveolar macrophage disruption and replacement',
    category: 'Cross-condition remodeling',
    comparison: 'Healthy -> infected',
    summary:
      'Resident alveolar macrophage identity erodes during infection as inflammatory monocyte-derived states accumulate.',
    evidence:
      'Useful for comparing resident surveillance loss versus recruited inflammatory dominance.',
    anchors: ['C1QA', 'CSF1R', 'CCL2']
  },
  {
    name: 'Damage-associated stromal and matrix remodeling',
    category: 'Tissue injury program',
    comparison: 'Bacterial / fungal -> repair',
    summary:
      'Matrix-producing stromal states expand during tissue damage and partially normalize during repair-associated resolution.',
    evidence:
      'Tracks structural consequences of infection rather than purely immune recruitment.',
    anchors: ['COL1A1', 'MMP9', 'TIMP1']
  },
  {
    name: 'Repair-linked macrophage and epithelial recovery module',
    category: 'Resolution program',
    comparison: 'Infected -> repair',
    summary:
      'Repair conditions reveal macrophage and epithelial states associated with inflammatory resolution and tissue reconstitution.',
    evidence:
      'Useful for separating recovery trajectories from chronic inflammatory persistence.',
    anchors: ['ARG1', 'MRC1', 'KRT19']
  }
];

export const signalCatalog = [
  {
    gene: 'IFITM3',
    conditionFocus: 'Viral',
    interpretation: 'Antiviral interferon signal',
    compartment: 'Myeloid and epithelium',
    pathway: 'Interferon response',
    summary: 'Highlights interferon-dominant antiviral remodeling across infected immune and epithelial compartments.'
  },
  {
    gene: 'CXCL10',
    conditionFocus: 'Viral',
    interpretation: 'Chemokine recruitment signal',
    compartment: 'Myeloid and stromal',
    pathway: 'Interferon chemotaxis',
    summary: 'Tracks antiviral recruitment pressure and interferon-linked inflammatory amplification.'
  },
  {
    gene: 'IL1B',
    conditionFocus: 'Bacterial',
    interpretation: 'Acute inflammatory cytokine',
    compartment: 'Inflammatory myeloid cells',
    pathway: 'Innate inflammatory signaling',
    summary: 'Captures acute injury-associated cytokine activity that often exceeds viral baseline inflammation.'
  },
  {
    gene: 'CXCL8',
    conditionFocus: 'Bacterial',
    interpretation: 'Neutrophil recruitment signal',
    compartment: 'Myeloid and stressed epithelium',
    pathway: 'Neutrophil chemotaxis',
    summary: 'Supports condition-level comparison of neutrophil-dominant bacterial responses.'
  },
  {
    gene: 'S100A8',
    conditionFocus: 'Bacterial',
    interpretation: 'Myeloid inflammatory stress marker',
    compartment: 'Inflammatory myeloid cells',
    pathway: 'Damage-associated inflammation',
    summary: 'Often marks highly inflamed infiltrating innate states in bacterial lung injury.'
  },
  {
    gene: 'TNF',
    conditionFocus: 'Bacterial / fungal',
    interpretation: 'Broad inflammatory cytokine',
    compartment: 'Myeloid compartment',
    pathway: 'TNF signaling',
    summary: 'Useful for comparing acute pathogen-driven inflammatory burden across multiple infected states.'
  },
  {
    gene: 'CCL2',
    conditionFocus: 'Healthy -> infected',
    interpretation: 'Monocyte recruitment cue',
    compartment: 'Macrophage and stromal states',
    pathway: 'Monocyte chemotaxis',
    summary: 'Helps quantify recruited inflammatory replacement of resident surveillance states.'
  },
  {
    gene: 'HLA-DRA',
    conditionFocus: 'Viral',
    interpretation: 'Antigen-presentation marker',
    compartment: 'Antigen-presenting immune cells',
    pathway: 'Adaptive priming',
    summary: 'Marks immune states involved in antiviral antigen presentation and cross-talk.'
  },
  {
    gene: 'MMP9',
    conditionFocus: 'Fungal / repair',
    interpretation: 'Matrix-remodeling signal',
    compartment: 'Myeloid and stromal states',
    pathway: 'Tissue damage and repair',
    summary: 'Links infection-driven tissue damage to later structural repair dynamics.'
  },
  {
    gene: 'ARG1',
    conditionFocus: 'Repair',
    interpretation: 'Resolution-associated macrophage marker',
    compartment: 'Repair-linked macrophages',
    pathway: 'Inflammation resolution',
    summary: 'Highlights the transition from inflammatory injury toward repair-associated immune states.'
  }
];

export const signalSearchSuggestions = ['IFITM3', 'CXCL10', 'IL1B', 'S100A8', 'ARG1'];

export const datasetReleases = [
  {
    id: 'LI-DS-001',
    dataset: 'Healthy adult lung immune reference',
    condition: 'Healthy',
    structure: 'Alveolar and airway tissue',
    cells: 'No data available',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Reference baseline for comparing infected tissue remodeling and resident immune homeostasis.'
  },
  {
    id: 'LI-DS-002',
    dataset: 'Viral pneumonia host-response atlas',
    condition: 'Viral infection',
    structure: 'Inflamed airway and distal lung',
    cells: '1,134,128 cells',
    assays: 'scRNA-seq + clinical severity metadata',
    status: 'Prototype metadata',
    note: 'Anchors interferon-rich epithelial and immune response modules under viral injury.',
    rows: [
      { species: 'Human', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'snRNA-seq', year: 2021, cells: 191993, doi: '10.1038/s41586-021-03570-8', accession: 'GSE171668', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s9f3da198134d4996b47e7a2c2a7a3f3b&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Alveolar', disease: 'Influenza A', platform: '10X', seqMethod: 'scRNA-seq', year: 2020, cells: 47933, doi: '10.7554/eLife.53072', accession: 'GSE128944', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s930f3953d9404d29844ce407ef8da5b6&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'snRNA-seq', year: 2021, cells: 116314, doi: '10.1038/s41586-021-03569-1', accession: 'GSE171524', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21sa680f25803b3448f98a4b05261c85545&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'snRNA-seq', year: 2022, cells: 146476, doi: '10.1183/13993003.02725-2021', accession: 'GSE198864', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s1a800013612c47f18e0c8580860b3d4e&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'scRNA-seq', year: 2021, cells: 32384, doi: '10.7554/eLife.69661', accession: 'GSE164948', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21se34a65afdcea4d3bb803d33e7b282928&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human; Mouse', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'scRNA-seq', year: 2022, cells: 8549, doi: '10.1038/s41586-022-04802-1', accession: 'GSE199272', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s2733c82b04fd46dcae1eb480661e6318&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'H1N1', platform: '10X', seqMethod: 'scRNA-seq', year: 2022, cells: 11204, doi: '10.1172/jci.insight.158079', accession: 'GSE201541', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s61ede62b758e4e7992d03e2453f778c2&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'scRNA-seq', year: 2021, cells: 182861, doi: '10.1038/s41586-020-03148-w', accession: 'GSE155249', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21sf9f0df31495d442fa94941e15f18cbc6&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'scRNA-seq', year: 2022, cells: 21602, doi: '10.1128/mBio.02749-21', accession: 'GSE186360', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21see7b54878bdf47f497dee4fe28b8630e&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'Influenza A', platform: '10X', seqMethod: 'scRNA-seq', year: 2021, cells: 15054, doi: '10.1093/toxsci/kfaa080', accession: 'GSE142047', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21sc522228f042e4f28ad619115b375bc71&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung (BALF)', disease: 'COVID-19', platform: '10X', seqMethod: 'scRNA-seq', year: 2020, cells: 118421, doi: '10.1007/s13238-020-00752-4', accession: 'GSE147143', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s161ca83fa8624732811cce54bbc297f1&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'H1N1', platform: '10X', seqMethod: 'scRNA-seq', year: 2020, cells: 36479, doi: '10.1128/JVI.00559-19', accession: 'GSE122031', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s4b15d59c3e774a9bb53146162e9c7ef4&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'Influenza A', platform: 'MARS-seq', seqMethod: 'scRNA-seq', year: 2019, cells: 9215, doi: '10.1016/j.cels.2018.05.008', accession: 'GSE107947', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s799b8c179c434d4dbe230d0a623622b5&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'Influenza A', platform: '10X', seqMethod: 'scRNA-seq', year: 2019, cells: 16755, doi: '10.7554/eLife.32303', accession: 'GSE108041', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s39d2a5dc1676459eb69afd1a0484c60a&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Human', region: 'Lung', disease: 'COVID-19', platform: '10X', seqMethod: 'scRNA-seq', year: 2020, cells: 49691, doi: '10.1002/ctm2.224', accession: 'GSE149878', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s1b689f38cb5b4fcabc47e2aa89209108&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'Influenza A', platform: '10X', seqMethod: 'scRNA-seq', year: 2023, cells: 12750, doi: '10.1016/j.stemcr.2023.07.006', accession: 'GSE210800', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s655c6533c56d428b91e52d8bb4fd5eb0&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'influenza infection', platform: '10X', seqMethod: 'scRNA-seq', year: 2023, cells: 82504, doi: '10.1038/s41467-023-42021-y', accession: 'GSE202325', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s32e6ef34988f48a7a915eba37711dfe0&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'Pneumonia', platform: '10X', seqMethod: 'scRNA-seq', year: 2019, cells: 2634, doi: '10.1038/s41467-019-09639-3', accession: 'GSE128066', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s81a1c03272794fdf82a837f0c5efb542&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Left lung lobe', disease: 'Influenza', platform: '10X', seqMethod: 'scRNA-seq', year: 2024, cells: 5355, doi: '10.1172/JCI176828', accession: 'GSE234082', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s30c140d9e2924bfdb6687b02105e0032&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'Influenzae', platform: 'Cite-seq', seqMethod: 'scRNA-seq', year: 2023, cells: 9112, doi: '10.3389/fimmu.2023.1227175', accession: 'GSE246845', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21se660098e43b240df8d9099837ab61ae4&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
      { species: 'Mouse', region: 'Lung', disease: 'airway inflammation', platform: '10X', seqMethod: 'scRNA-seq', year: 2021, cells: 16822, doi: '10.1371/journal.pone.0240707', accession: 'GSE155436', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21sd2f2b4e2bd5846398eb567b86b2b577e&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp'  },
    ]
  },
  {
    id: 'LI-DS-003',
    dataset: 'Bacterial pneumonia inflammatory panel',
    condition: 'Bacterial infection',
    structure: 'Airspace and tissue injury compartments',
    cells: '3,337 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Supports neutrophil-heavy inflammatory and barrier-disruption comparisons.',
    rows: [
      { species: 'Mouse', region: 'Lung', disease: 'K. pneumoniae (heat-killed)', platform: '10X', seqMethod: 'scRNA-seq', year: 2023, cells: 3337, doi: '10.1016/j.isci.2022.104900', accession: 'GSE190225', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s2e99a9c2254844e2bae9f0a46a364abe&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp' }
    ]
  },
  {
    id: 'LI-DS-004',
    dataset: 'Fungal lung injury single-cell reference',
    condition: 'Fungal infection',
    structure: 'Damaged distal and stromal tissue',
    cells: '40,726 cells',
    assays: 'scRNA-seq + pathology anchors',
    status: 'Prototype metadata',
    note: 'Captures prolonged innate defense and tissue-damage programs under fungal disease.',
    rows: [
      { species: 'Mouse', region: 'Lung', disease: 'Allergic lung inflammation', platform: '10X', seqMethod: 'scRNA-seq', year: 2022, cells: 40726, doi: '10.1126/sciimmunol.abg9296', accession: 'GSE190795', download: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9iMmYyODlhMTFmNWRjYmU4L0lnQzFPMzJ6bWdDNVJJODNTblBCTkM3NEFSbXdGeGowYi1hckR0VE1MSU9ILUwwP2U9ZUVJclBJ&cid=B2F289A11F5DCBE8&id=B2F289A11F5DCBE8%21s1e190981c060417d934c5bf8b4d97c62&parId=B2F289A11F5DCBE8%21sb37d3bb5009a44b98f374a73c1342ef8&o=OneUp' }
    ]
  },
  {
    id: 'LI-DS-005',
    dataset: 'Post-infection repair and resolution cohort',
    condition: 'Repair / recovery',
    structure: 'Recovering airway and alveolar tissue',
    cells: 'No data available',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Frames resolution macrophages, epithelial repair, and recovery-linked tissue remodeling.'
  }
];

export const evidenceHighlights = [
  { label: 'Condition anchors', value: '5', detail: 'healthy, viral, bacterial, fungal, repair' },
  { label: 'Primary filters', value: '6', detail: 'pathogen, condition, severity, acute/chronic, cell type, dataset' },
  { label: 'Signal programs', value: '5', detail: 'interferon, neutrophil, macrophage, stromal, repair' },
  { label: 'Assumption notes', value: '5', detail: 'each release states condition framing and current prototype evidence scope' }
];

export const coreQuestions = [
  'How do lung cell states shift across viral, bacterial, and fungal infection contexts?',
  'Which immune response modules are shared across infections and which are pathogen-skewed?',
  'How do infected lungs differ from healthy lungs in epithelial, stromal, and immune compartments?',
  'Which programs appear linked to inflammation, tissue damage, recovery, and repair rather than pathogen identity alone?'
];

export const targetUsers = [
  'Infectious disease researchers',
  'Immunologists',
  'Pulmonary researchers',
  'Translational scientists'
];

export const scopeBoundaries = [
  'The MVP focuses on infectious and inflammatory lung conditions rather than cancer or developmental biology.',
  'Healthy reference and repair-associated states are included to support comparison, not to replace broad normal-lung atlases.',
  'Current condition groups are prototype anchors rather than a comprehensive ontology of all lung infections.'
];

export const metadataPriorities = [
  'Pathogen type',
  'Disease condition',
  'Severity',
  'Acute or chronic',
  'Cell type',
  'Immune program',
  'Inflammatory signature',
  'Dataset / source'
];

export const methodsResources = [
  {
    title: 'Healthy-versus-infected comparison notes',
    detail: 'Summarizes how the MVP distinguishes baseline lung states from pathogen-driven remodeling.'
  },
  {
    title: 'Immune response module guide',
    detail: 'Defines the launch immune programs used to compare antiviral, antibacterial, fungal, and repair-linked states.'
  },
  {
    title: 'Condition provenance cards',
    detail: 'Expose dataset scope, assay footprint, and condition-level interpretation limits for each release.'
  }
];

export const provenanceHistory = [
  '2026-03-18 four-database scientific program defined',
  '2026-04-04 lunginf selected for prototype implementation',
  '2026-04-04 lunginf infection-first MVP workspace created'
];

export const routeCopy = {
  home: {
    eyebrow: 'Infection axis',
    title: 'Compare healthy lung reference states with pathogen-driven remodeling',
    description:
      'Use the homepage to orient around condition anchors, host immune states, inflammatory signaling, and release-scoped infection datasets.'
  },
  conditions: {
    eyebrow: 'Condition browser',
    title: 'Healthy, viral, bacterial, fungal, and repair-associated lung conditions',
    description:
      'Browse the infection axis through condition anchors that distinguish pathogen type, tissue injury, and recovery-linked remodeling.'
  },
  'immune-states': {
    eyebrow: 'Immune landscape',
    title: 'Immune state remodeling across infection contexts',
    description:
      'Inspect which myeloid, lymphoid, and repair-associated states are shared, intensified, or condition-skewed across infected lungs.'
  },
  signals: {
    eyebrow: 'Signal explorer',
    title: 'Inflammatory and repair signal modules',
    description:
      'Use the signal catalog to connect genes, pathways, and condition-linked inflammatory programs without flattening disease context.'
  },
  datasets: {
    eyebrow: 'Condition releases',
    title: 'Datasets, provenance, and infection framing',
    description:
      'Review the current prototype condition datasets, their assay scope, and the explicit comparison logic behind the infection portal.'
  },
  about: {
    eyebrow: 'Mission and scope',
    title: 'Why lunginf exists inside the four-database program',
    description:
      'Clarify the scientific mission, target users, scope boundaries, and how lunginf stays distinct from development, cancer, and evolution portals.'
  }
};

export const bundleCrossLinks = {
  home: [
    {
      siteId: 'lungdev',
      route: 'atlas',
      title: 'Anchor infection changes against normal lung development',
      summary: 'Use the developmental atlas to separate injury-linked remodeling from stage-resolved normal structure.'
    },
    {
      siteId: 'lungcancer',
      route: 'clinical',
      title: 'Compare inflammatory remodeling with clinically stratified tumor ecosystems',
      summary: 'Use the clinical route to ask which immune and stromal shifts are shared between infection and cancer contexts.'
    },
    {
      siteId: 'lungevo',
      route: 'programs',
      title: 'Check whether inflammatory modules intersect conserved respiratory programs',
      summary: 'Move into the comparative program view to ask which defense and repair signals are deeply retained.'
    }
  ],
  conditions: [
    {
      siteId: 'lungdev',
      route: 'atlas',
      title: 'Compare healthy and infected lungs against developmental stage structure',
      summary: 'Use developmental stage views to keep normal tissue maturation visible while reading infection UMAP shifts.'
    },
    {
      siteId: 'lungcancer',
      route: 'subtypes',
      title: 'Contrast infection conditions with cancer subtype ecosystems',
      summary: 'Use subtype-centered tumor views to separate malignant remodeling from pathogen-driven tissue injury.'
    }
  ],
  'immune-states': [
    {
      siteId: 'lungcancer',
      route: 'clinical',
      title: 'Compare immune remodeling in infection and cancer',
      summary: 'Jump to the clinical route to contrast infection-linked immune activation with therapy, stage, and progression contexts.'
    },
    {
      siteId: 'lungdev',
      route: 'lineages',
      title: 'Relate immune-state expansion to developmental maturation logic',
      summary: 'Use lineage tracks to keep developmental origins visible when interpreting macrophage, lymphoid, and repair programs.'
    }
  ],
  signals: [
    {
      siteId: 'lungcancer',
      route: 'biomarkers',
      title: 'Cross-check inflammatory modules with tumor biomarker programs',
      summary: 'Compare infection-linked signals with malignant, immune, and stromal biomarkers in lung cancer.'
    },
    {
      siteId: 'lungevo',
      route: 'orthologs',
      title: 'Check which injury-response genes stay interpretable across species',
      summary: 'Use ortholog markers to see whether inflammatory and repair genes map cleanly across the evolution portal.'
    }
  ],
  datasets: [
    {
      siteId: 'lungdev',
      route: 'datasets',
      title: 'Inspect the development release table',
      summary: 'Compare infection dataset framing with stage-resolved normal development releases.'
    },
    {
      siteId: 'lungcancer',
      route: 'datasets',
      title: 'Inspect the cancer cohort release table',
      summary: 'Use the cancer dataset route to compare cohort-centric provenance against condition-centric infection releases.'
    }
  ],
  about: [
    {
      siteId: 'lungdev',
      route: 'home',
      title: 'See how development stays normal-first',
      summary: 'The developmental axis organizes the shared shell around time, maturation, and lineage emergence rather than disease.'
    },
    {
      siteId: 'lungcancer',
      route: 'home',
      title: 'See how cancer centers malignant ecosystems instead of infection',
      summary: 'The cancer axis uses subtype, treatment, and microenvironment logic rather than pathogen class or severity.'
    },
    {
      siteId: 'lungevo',
      route: 'home',
      title: 'See how evolution makes homology the primary entry point',
      summary: 'The evolution axis stays comparative, using species anchors and homolog assumptions instead of disease-state comparison.'
    }
  ]
};

export const launchChecklist = [
  'Route-complete MVP across home, conditions, immune-states, signals, datasets, and about',
  'Infection-first homepage narrative tied to condition anchors and host-response modules',
  'Searchable inflammatory signal catalog with condition-aware interpretation',
  'Condition-scoped dataset table with provenance and evidence framing',
  'Cross-linked bundle metadata, mobile nav shell, and custom-domain deployment wiring',
  'Build and regression checks updated for lunginf'
];
