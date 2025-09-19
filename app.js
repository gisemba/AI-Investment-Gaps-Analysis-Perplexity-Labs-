// AI Investment Gaps Dashboard - Executive Edition
// Focus: Investment gaps analysis with consistent card-based design - FIXED VERSION

// Application data from the provided JSON
const dashboardData = {
  "executiveMetrics": {
    "totalGapSize": 340,
    "averageROI": "34x",
    "criticalGaps": 5,
    "targetCompanies": 15,
    "timelineMonths": "3-24",
    "immediateActions": 4
  },
  "investmentGaps": [
    {
      "name": "Power & Cooling Infrastructure",
      "gapSize": 200,
      "urgency": "Critical",
      "timeToImpact": "6-12 months",
      "affectedProjects": 90,
      "currentCapacity": "50MW average per facility",
      "aiRequirement": "150MW+ for AI-ready facilities",
      "gapMultiplier": "3x capacity shortfall",
      "expectedROI": "15-25x",
      "paybackPeriod": "24-36 months",
      "targetCompanies": [
        {"name": "Schneider Electric", "focus": "Power management systems", "investment": "50-100M", "type": "Strategic"},
        {"name": "Vertiv", "focus": "Liquid cooling solutions", "investment": "25-50M", "type": "Supplier"},
        {"name": "CoreWeave", "focus": "AI-ready capacity deployment", "investment": "100-200M", "type": "Joint Venture"}
      ]
    },
    {
      "name": "AI Talent Integration",
      "gapSize": 30,
      "urgency": "Severe",
      "timeToImpact": "3-6 months",
      "affectedProjects": 87,
      "demand": "4.2M unfilled AI positions globally",
      "supply": "320K qualified developers",
      "gapRatio": "13.1x demand vs supply",
      "expectedROI": "25-40x",
      "paybackPeriod": "12-18 months",
      "targetCompanies": [
        {"name": "Scale AI", "focus": "AI workforce platform", "investment": "50-75M", "type": "Strategic"},
        {"name": "Dex", "focus": "AI talent matching", "investment": "10-20M", "type": "Acquisition"},
        {"name": "GitHub Copilot", "focus": "AI-assisted development", "investment": "25-50M", "type": "Platform"}
      ]
    },
    {
      "name": "Data Quality & Governance",
      "gapSize": 50,
      "urgency": "High",
      "timeToImpact": "9-18 months",
      "affectedProjects": 80,
      "dataPrepTime": "80% of AI project time",
      "qualityThreshold": "<90% data quality scores",
      "governanceCoverage": "<60% of AI models",
      "expectedROI": "20-35x",
      "paybackPeriod": "18-24 months",
      "targetCompanies": [
        {"name": "Databricks", "focus": "Data lakehouse platform", "investment": "100-150M", "type": "Strategic"},
        {"name": "Monte Carlo", "focus": "Data observability", "investment": "25-40M", "type": "Acquisition"},
        {"name": "Collibra", "focus": "Data governance", "investment": "50-75M", "type": "Strategic"}
      ]
    },
    {
      "name": "Edge AI Processing",
      "gapSize": 40,
      "urgency": "Medium-High",
      "timeToImpact": "12-24 months",
      "affectedProjects": 60,
      "latencyRequirement": "<50ms for real-time AI",
      "currentCapability": "200ms+ typical latency",
      "powerEfficiency": "10x improvement needed",
      "expectedROI": "12-20x",
      "paybackPeriod": "30-42 months",
      "targetCompanies": [
        {"name": "Groq", "focus": "LPU inference engines", "investment": "50-100M", "type": "Investment"},
        {"name": "Qualcomm", "focus": "Edge AI chips", "investment": "75-125M", "type": "Strategic"},
        {"name": "Horizon Robotics", "focus": "Automotive edge AI", "investment": "25-50M", "type": "Strategic"}
      ]
    },
    {
      "name": "MLOps & Model Deployment",
      "gapSize": 20,
      "urgency": "High",
      "timeToImpact": "6-12 months",
      "affectedProjects": 75,
      "deploymentTime": ">60 days model to production",
      "automationLevel": "<30% automated processes",
      "successRate": "<70% successful deployments",
      "expectedROI": "30-50x",
      "paybackPeriod": "15-21 months",
      "targetCompanies": [
        {"name": "AWS SageMaker", "focus": "Enterprise MLOps", "investment": "25-50M", "type": "Platform"},
        {"name": "Weights & Biases", "focus": "ML experiment tracking", "investment": "15-30M", "type": "Strategic"},
        {"name": "Hugging Face", "focus": "Model deployment platform", "investment": "20-40M", "type": "Strategic"}
      ]
    }
  ],
  "actionFramework": {
    "Q4_2025": [
      {
        "gap": "Power & Cooling Infrastructure",
        "action": "Secure 100MW AI-ready capacity",
        "targetCompanies": ["CoreWeave", "Schneider Electric"],
        "investmentRange": "150-250M",
        "successMetric": "10MW+ deployed within 12 months",
        "riskMitigation": "Diversify across 3+ data center operators",
        "priority": "Critical"
      },
      {
        "gap": "AI Talent Integration",
        "action": "Deploy AI workforce platform",
        "targetCompanies": ["Scale AI", "Dex"],
        "investmentRange": "60-95M",
        "successMetric": "50% reduction in hire time to <90 days",
        "riskMitigation": "Multi-platform strategy + internal training",
        "priority": "Critical"
      }
    ],
    "Q1_2026": [
      {
        "gap": "Data Quality & Governance",
        "action": "Implement end-to-end data platform",
        "targetCompanies": ["Databricks", "Monte Carlo"],
        "investmentRange": "125-190M",
        "successMetric": "95% data quality score, <30 day deployment",
        "riskMitigation": "Hybrid cloud strategy across providers",
        "priority": "High"
      },
      {
        "gap": "MLOps & Model Deployment",
        "action": "Automate model lifecycle management",
        "targetCompanies": ["AWS SageMaker", "Weights & Biases"],
        "investmentRange": "40-80M",
        "successMetric": "10x faster model-to-production",
        "riskMitigation": "Platform-agnostic tooling approach",
        "priority": "High"
      }
    ]
  },
  "riskMonitoring": {
    "criticalRisks": [
      {"category": "Infrastructure", "risk": "Power grid capacity exceeded", "indicator": "5+ year connection waits", "threshold": "12+ months", "status": "Red"},
      {"category": "Talent", "risk": "Salary inflation acceleration", "indicator": "YoY increase >40%", "threshold": "30%", "status": "Yellow"},
      {"category": "Technology", "risk": "NVIDIA supply constraints", "indicator": "Allocation delays", "threshold": "6+ months", "status": "Red"},
      {"category": "Regulatory", "risk": "Compliance framework changes", "indicator": "New requirements", "threshold": "90 days", "status": "Green"}
    ],
    "earlyWarnings": [
      {"signal": "Utility partnership delays", "current": "8 months average", "threshold": "12 months", "trend": "Worsening"},
      {"signal": "AI talent acquisition time", "current": "142 days", "threshold": "180 days", "trend": "Stable"},
      {"signal": "Data quality scores", "current": "87%", "threshold": "90%", "trend": "Improving"},
      {"signal": "Model deployment time", "current": "45 days", "threshold": "60 days", "trend": "Improving"}
    ]
  }
};

// Global state
let currentTab = 'executive-summary';
let currentTimeline = 'q4-2025';
let filteredData = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Investment Gaps Dashboard...');
    initializeNavigation();
    initializeExecutiveSummary();
    initializeFilters();
    initializeModals();
    initializeExport();
});

// Navigation functionality
function initializeNavigation() {
    console.log('Initializing navigation...');
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = tab.getAttribute('data-tab');
            
            console.log('Switching to tab:', targetTab);
            
            // Update active states
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the target tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                currentTab = targetTab;
                
                // Initialize tab-specific content
                setTimeout(() => {
                    switch(targetTab) {
                        case 'investment-gaps':
                            initializeInvestmentGaps();
                            break;
                        case 'target-companies':
                            initializeTargetCompanies();
                            break;
                        case 'action-framework':
                            initializeActionFramework();
                            break;
                        case 'risk-monitoring':
                            initializeRiskMonitoring();
                            break;
                    }
                }, 50);
            }
        });
    });
}

// Executive Summary Tab
function initializeExecutiveSummary() {
    console.log('Initializing executive summary...');
    populateUrgencyMatrix();
    populateDecisionFramework();
    populateOpportunityCards();
}

function populateUrgencyMatrix() {
    const container = document.getElementById('urgencyMatrix');
    if (!container) return;

    container.innerHTML = dashboardData.investmentGaps.map(gap => `
        <div class="urgency-card ${gap.urgency.toLowerCase().replace(' ', '-')}" data-gap="${gap.name}" style="cursor: pointer;">
            <div class="urgency-header">
                <h4 class="urgency-title">${gap.name}</h4>
                <span class="urgency-indicator-badge">${getUrgencyEmoji(gap.urgency)}</span>
            </div>
            <div class="urgency-size">$${gap.gapSize}B Gap</div>
            <p class="urgency-details">${gap.affectedProjects}% projects affected • ${gap.timeToImpact} impact</p>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.urgency-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const gapName = card.getAttribute('data-gap');
            showGapDetails(gapName);
        });
    });
}

function getUrgencyEmoji(urgency) {
    const emojis = {
        'Critical': '🔴',
        'Severe': '🟠', 
        'High': '🟡',
        'Medium-High': '🟡'
    };
    return emojis[urgency] || '🟡';
}

function populateDecisionFramework() {
    const immediateContainer = document.getElementById('immediateActions');
    const nearTermContainer = document.getElementById('nearTermActions');
    
    if (immediateContainer) {
        immediateContainer.innerHTML = dashboardData.actionFramework.Q4_2025.map(action => `
            <div class="action-card">
                <h4 class="action-title">${action.action}</h4>
                <p class="action-description">${action.gap} • ${action.investmentRange} • ${action.successMetric}</p>
            </div>
        `).join('');
    }
    
    if (nearTermContainer) {
        nearTermContainer.innerHTML = dashboardData.actionFramework.Q1_2026.map(action => `
            <div class="action-card">
                <h4 class="action-title">${action.action}</h4>
                <p class="action-description">${action.gap} • ${action.investmentRange} • ${action.successMetric}</p>
            </div>
        `).join('');
    }
}

function populateOpportunityCards() {
    const container = document.getElementById('opportunityCards');
    if (!container) return;

    container.innerHTML = dashboardData.investmentGaps.map(gap => `
        <div class="opportunity-card" data-gap="${gap.name}" style="cursor: pointer;">
            <div class="opportunity-header">
                <h4 class="opportunity-title">${gap.name}</h4>
                <div class="opportunity-size">$${gap.gapSize}B</div>
            </div>
            <div class="opportunity-details">
                <div class="detail-item">
                    <span class="detail-label">ROI:</span>
                    <span class="detail-value">${gap.expectedROI}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Timeline:</span>
                    <span class="detail-value">${gap.timeToImpact}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Affected:</span>
                    <span class="detail-value">${gap.affectedProjects}%</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Companies:</span>
                    <span class="detail-value">${gap.targetCompanies.length}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.opportunity-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const gapName = card.getAttribute('data-gap');
            showGapDetails(gapName);
        });
    });
}

// Investment Gaps Tab
function initializeInvestmentGaps() {
    console.log('Initializing investment gaps...');
    populateInvestmentGapsGrid();
}

function populateInvestmentGapsGrid() {
    const container = document.getElementById('investmentGapsGrid');
    if (!container) return;

    container.innerHTML = dashboardData.investmentGaps.map(gap => `
        <div class="gap-card ${gap.urgency.toLowerCase().replace(' ', '-')}" data-gap="${gap.name}" data-category="${getGapCategory(gap.name)}" data-urgency="${gap.urgency.toLowerCase()}" style="cursor: pointer;">
            <div class="gap-header">
                <h3 class="gap-name">${gap.name}</h3>
                <span class="gap-urgency ${gap.urgency.toLowerCase().replace(' ', '-')}">${getUrgencyEmoji(gap.urgency)} ${gap.urgency}</span>
            </div>
            <div class="gap-size">$${gap.gapSize}B</div>
            <div class="gap-metrics">
                <div class="gap-metric-item">
                    <div class="gap-metric-value">${gap.expectedROI}</div>
                    <div class="gap-metric-label">Expected ROI</div>
                </div>
                <div class="gap-metric-item">
                    <div class="gap-metric-value">${gap.affectedProjects}%</div>
                    <div class="gap-metric-label">Projects Affected</div>
                </div>
                <div class="gap-metric-item">
                    <div class="gap-metric-value">${gap.timeToImpact}</div>
                    <div class="gap-metric-label">Time to Impact</div>
                </div>
                <div class="gap-metric-item">
                    <div class="gap-metric-value">${gap.paybackPeriod}</div>
                    <div class="gap-metric-label">Payback Period</div>
                </div>
            </div>
            <div class="gap-companies">
                <h4>Target Companies</h4>
                <div class="company-tags">
                    ${gap.targetCompanies.map(company => `
                        <span class="company-tag" data-company="${company.name}" style="cursor: pointer;">${company.name}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.gap-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const gapName = card.getAttribute('data-gap');
            showGapDetails(gapName);
        });
    });

    document.querySelectorAll('.company-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const companyName = tag.getAttribute('data-company');
            showCompanyDetails(companyName);
        });
    });
}

function getGapCategory(gapName) {
    const categories = {
        'Power & Cooling Infrastructure': 'infrastructure',
        'AI Talent Integration': 'talent',
        'Data Quality & Governance': 'data',
        'Edge AI Processing': 'edge',
        'MLOps & Model Deployment': 'mlops'
    };
    return categories[gapName] || 'other';
}

// Target Companies Tab
function initializeTargetCompanies() {
    console.log('Initializing target companies...');
    populateCompaniesByGap();
}

function populateCompaniesByGap() {
    const container = document.getElementById('companiesByGap');
    if (!container) return;

    container.innerHTML = dashboardData.investmentGaps.map(gap => `
        <div class="gap-category-section" data-category="${getGapCategory(gap.name)}">
            <div class="gap-category-header">
                <h3 class="gap-category-title">${gap.name}</h3>
                <div class="gap-category-stats">
                    <span>$${gap.gapSize}B Gap</span>
                    <span>${gap.targetCompanies.length} Companies</span>
                    <span>${gap.expectedROI} ROI</span>
                </div>
            </div>
            <div class="company-grid">
                ${gap.targetCompanies.map(company => `
                    <div class="company-card" data-company="${company.name}" data-investment="${getInvestmentSize(company.investment)}" style="cursor: pointer;">
                        <div class="company-header">
                            <h4 class="company-name">${company.name}</h4>
                            <span class="partnership-type ${company.type.toLowerCase().replace(' ', '-')}">${company.type}</span>
                        </div>
                        <p class="company-focus">${company.focus}</p>
                        <div class="company-details">
                            <div class="detail-item">
                                <span class="detail-label">Investment:</span>
                                <span class="detail-value">${company.investment}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Type:</span>
                                <span class="detail-value">${company.type}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Gap ROI:</span>
                                <span class="detail-value">${gap.expectedROI}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Payback:</span>
                                <span class="detail-value">${gap.paybackPeriod}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.company-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const companyName = card.getAttribute('data-company');
            showCompanyDetails(companyName);
        });
    });
}

function getInvestmentSize(investment) {
    const amount = investment.toLowerCase();
    if (amount.includes('100') || amount.includes('150') || amount.includes('200')) {
        return 'large';
    } else if (amount.includes('25') || amount.includes('50') || amount.includes('75')) {
        return 'medium';
    } else {
        return 'small';
    }
}

// Action Framework Tab
function initializeActionFramework() {
    console.log('Initializing action framework...');
    initializeTimelineButtons();
    showTimelineActions(); // Show initial timeline
    populateMitigationStrategies();
    populateTimelineVisualization();
}

function initializeTimelineButtons() {
    const buttons = document.querySelectorAll('.timeline-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTimeline = btn.getAttribute('data-timeline');
            showTimelineActions();
        });
    });
}

function showTimelineActions() {
    const timelines = document.querySelectorAll('.action-timeline');
    timelines.forEach(timeline => {
        timeline.classList.remove('active');
    });
    
    const activeTimeline = document.getElementById(`${currentTimeline}-actions`);
    if (activeTimeline) {
        activeTimeline.classList.add('active');
        populateActionItems();
    }
}

function populateActionItems() {
    const isQ4 = currentTimeline === 'q4-2025';
    const actions = isQ4 ? dashboardData.actionFramework.Q4_2025 : dashboardData.actionFramework.Q1_2026;
    const containerId = isQ4 ? 'q4ActionsGrid' : 'q1ActionsGrid';
    const container = document.getElementById(containerId);
    
    if (!container) return;

    container.innerHTML = actions.map(action => `
        <div class="action-item-card">
            <div class="action-item-header">
                <h4 class="action-item-title">${action.action}</h4>
                <span class="action-priority ${action.priority.toLowerCase()}">${action.priority}</span>
            </div>
            <div class="action-gap">Gap: ${action.gap}</div>
            <div class="action-investment">$${action.investmentRange}</div>
            <p class="action-metric">Success Metric: ${action.successMetric}</p>
            <p class="action-metric">Risk Mitigation: ${action.riskMitigation}</p>
            <div class="company-tags">
                ${action.targetCompanies.map(company => `
                    <span class="company-tag" data-company="${company}" style="cursor: pointer;">${company}</span>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Add click handlers for company tags
    document.querySelectorAll('.company-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const companyName = tag.getAttribute('data-company');
            showCompanyDetails(companyName);
        });
    });
}

function populateMitigationStrategies() {
    const container = document.getElementById('mitigationCards');
    if (!container) return;

    const strategies = [
        {
            title: "Diversification Strategy",
            description: "Spread investments across all 5 gap categories to minimize single-point-of-failure risks"
        },
        {
            title: "Multi-Vendor Approach",
            description: "Avoid dependency on single suppliers by partnering with 2-3 companies per gap"
        },
        {
            title: "Phased Implementation",
            description: "Deploy Q4 2025 actions first, then scale Q1 2026 based on results"
        },
        {
            title: "Real-Time Monitoring",
            description: "Implement early warning system with automated alerts for threshold breaches"
        }
    ];

    container.innerHTML = strategies.map(strategy => `
        <div class="mitigation-card">
            <h4 class="mitigation-title">${strategy.title}</h4>
            <p class="mitigation-description">${strategy.description}</p>
        </div>
    `).join('');
}

function populateTimelineVisualization() {
    const container = document.getElementById('timelineChart');
    if (!container) return;

    const timeline = [
        { month: 'Oct 2025', actions: 'Power partnerships, Talent platforms' },
        { month: 'Nov 2025', actions: 'CoreWeave deployment, Scale AI integration' },
        { month: 'Dec 2025', actions: 'Infrastructure scaling, Hiring acceleration' },
        { month: 'Jan 2026', actions: 'Data platform deployment, MLOps automation' },
        { month: 'Feb 2026', actions: 'Quality monitoring, Edge AI pilots' },
        { month: 'Mar 2026', actions: 'Full deployment, Performance optimization' }
    ];

    container.innerHTML = timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-month">${item.month}</div>
            <div class="timeline-actions">${item.actions}</div>
        </div>
    `).join('');
}

// Risk Monitoring Tab
function initializeRiskMonitoring() {
    console.log('Initializing risk monitoring...');
    populateRiskCards();
    populateWarningTiles();
    populateRedFlagCards();
    populateMitigationActionCards();
}

function populateRiskCards() {
    const container = document.getElementById('riskCards');
    if (!container) return;

    container.innerHTML = dashboardData.riskMonitoring.criticalRisks.map(risk => `
        <div class="risk-card">
            <h4 class="card-title-risk">${risk.category} Risk</h4>
            <div class="card-indicator ${risk.status.toLowerCase()}">${getStatusEmoji(risk.status)} ${risk.risk}</div>
            <p class="card-threshold">Threshold: ${risk.threshold} | Current: ${risk.indicator}</p>
        </div>
    `).join('');
}

function populateWarningTiles() {
    const container = document.getElementById('warningTiles');
    if (!container) return;

    container.innerHTML = dashboardData.riskMonitoring.earlyWarnings.map(warning => `
        <div class="warning-tile">
            <h4 class="card-title-risk">${warning.signal}</h4>
            <div class="card-indicator">${warning.current}</div>
            <p class="card-threshold">Threshold: ${warning.threshold} | Trend: ${getTrendEmoji(warning.trend)} ${warning.trend}</p>
        </div>
    `).join('');
}

function populateRedFlagCards() {
    const container = document.getElementById('redFlagCards');
    if (!container) return;

    const redFlags = [
        { title: "Power Grid Rejections", indicator: "0 incidents", threshold: "Any rejection triggers alert" },
        { title: "GPU Allocation Cuts", indicator: "15% reduction", threshold: ">25% reduction" },
        { title: "Talent Exodus", indicator: "12% turnover", threshold: ">30% turnover" },
        { title: "Regulatory Changes", indicator: "Monitoring", threshold: "Any new restrictions" }
    ];

    container.innerHTML = redFlags.map(flag => `
        <div class="red-flag-card">
            <h4 class="card-title-risk">${flag.title}</h4>
            <div class="card-indicator">🚨 ${flag.indicator}</div>
            <p class="card-threshold">${flag.threshold}</p>
        </div>
    `).join('');
}

function populateMitigationActionCards() {
    const container = document.getElementById('mitigationActionCards');
    if (!container) return;

    const actions = [
        { title: "Power Diversification", description: "Partner with 3+ data center operators across regions" },
        { title: "Talent Retention", description: "Implement competitive compensation and training programs" },
        { title: "Supply Chain Backup", description: "Secure alternative GPU suppliers beyond NVIDIA" },
        { title: "Regulatory Monitoring", description: "24/7 policy tracking with legal team alerts" }
    ];

    container.innerHTML = actions.map(action => `
        <div class="mitigation-action-card">
            <h4 class="card-title-risk">${action.title}</h4>
            <p class="card-threshold">${action.description}</p>
        </div>
    `).join('');
}

function getStatusEmoji(status) {
    const emojis = {
        'Red': '🔴',
        'Yellow': '🟡',
        'Green': '🟢'
    };
    return emojis[status] || '🟡';
}

function getTrendEmoji(trend) {
    const emojis = {
        'Worsening': '📈',
        'Stable': '➡️',
        'Improving': '📉'
    };
    return emojis[trend] || '➡️';
}

// Filter functionality - FIXED
function initializeFilters() {
    console.log('Initializing filters...');
    const gapCategoryFilter = document.getElementById('gapCategoryFilter');
    const urgencyFilter = document.getElementById('urgencyFilter');
    const investmentSizeFilter = document.getElementById('investmentSizeFilter');
    
    // Add event listeners for all filters
    if (gapCategoryFilter) {
        gapCategoryFilter.addEventListener('change', applyFilters);
    }
    if (urgencyFilter) {
        urgencyFilter.addEventListener('change', applyFilters);
    }
    if (investmentSizeFilter) {
        investmentSizeFilter.addEventListener('change', applyFilters);
    }
    
    console.log('Filters initialized successfully');
}

function applyFilters() {
    console.log('Applying filters...');
    const gapCategoryFilter = document.getElementById('gapCategoryFilter');
    const urgencyFilter = document.getElementById('urgencyFilter');
    const investmentSizeFilter = document.getElementById('investmentSizeFilter');
    
    const gapCategory = gapCategoryFilter ? gapCategoryFilter.value : '';
    const urgency = urgencyFilter ? urgencyFilter.value : '';
    const investmentSize = investmentSizeFilter ? investmentSizeFilter.value : '';
    
    console.log('Filter values:', { gapCategory, urgency, investmentSize });
    
    // Apply filters to gap cards
    const gapCards = document.querySelectorAll('.gap-card[data-category]');
    gapCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardUrgency = card.getAttribute('data-urgency');
        
        const categoryMatch = !gapCategory || cardCategory === gapCategory;
        const urgencyMatch = !urgency || matchesUrgencyFilter(cardUrgency, urgency);
        
        if (categoryMatch && urgencyMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Apply filters to company cards
    const companyCards = document.querySelectorAll('.company-card[data-investment]');
    companyCards.forEach(card => {
        const cardInvestment = card.getAttribute('data-investment');
        const parentSection = card.closest('.gap-category-section');
        const parentCategory = parentSection ? parentSection.getAttribute('data-category') : '';
        
        const categoryMatch = !gapCategory || parentCategory === gapCategory;
        const investmentMatch = !investmentSize || cardInvestment === investmentSize;
        
        if (categoryMatch && investmentMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log('Filters applied successfully');
}

function matchesUrgencyFilter(cardUrgency, filterValue) {
    // Remove emoji and normalize
    const normalizedFilter = filterValue.replace(/🔴|🟡|🟠/g, '').trim().toLowerCase();
    const normalizedCard = cardUrgency.toLowerCase().replace(' ', '-');
    
    switch(normalizedFilter) {
        case 'critical':
            return normalizedCard === 'critical';
        case 'severe':
            return normalizedCard === 'severe';
        case 'high':
            return normalizedCard === 'high';
        case 'medium-high':
            return normalizedCard === 'medium-high';
        default:
            return true;
    }
}

// Modal functionality - FIXED
function initializeModals() {
    console.log('Initializing modals...');
    const companyModal = document.getElementById('companyModal');
    const closeCompanyModal = document.getElementById('closeCompanyModal');
    const gapModal = document.getElementById('gapModal');
    const closeGapModal = document.getElementById('closeGapModal');
    
    if (closeCompanyModal) {
        closeCompanyModal.addEventListener('click', (e) => {
            e.preventDefault();
            companyModal.classList.add('hidden');
        });
    }

    if (closeGapModal) {
        closeGapModal.addEventListener('click', (e) => {
            e.preventDefault();
            gapModal.classList.add('hidden');
        });
    }

    // Close modals when clicking backdrop
    [companyModal, gapModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                    modal.classList.add('hidden');
                }
            });
        }
    });
    
    console.log('Modals initialized successfully');
}

function showCompanyDetails(companyName) {
    console.log('Showing details for:', companyName);
    const modal = document.getElementById('companyModal');
    const modalTitle = document.getElementById('modalCompanyName');
    const modalBody = document.getElementById('modalCompanyBody');
    
    if (!modal || !modalTitle || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    // Find company data
    let companyData = null;
    let gapData = null;
    
    dashboardData.investmentGaps.forEach(gap => {
        const company = gap.targetCompanies.find(c => c.name === companyName);
        if (company) {
            companyData = company;
            gapData = gap;
        }
    });
    
    if (companyData && gapData) {
        modalTitle.textContent = companyData.name;
        modalBody.innerHTML = `
            <div class="company-detail-content">
                <div class="detail-section">
                    <h4>Business Focus</h4>
                    <p>${companyData.focus}</p>
                </div>
                <div class="detail-section">
                    <h4>Investment Gap Context</h4>
                    <div class="detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0;">
                        <div><strong>Gap Category:</strong> ${gapData.name}</div>
                        <div><strong>Gap Size:</strong> $${gapData.gapSize}B</div>
                        <div><strong>Investment Range:</strong> $${companyData.investment}</div>
                        <div><strong>Partnership Type:</strong> ${companyData.type}</div>
                    </div>
                </div>
                <div class="detail-section">
                    <h4>Expected Returns</h4>
                    <div class="detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0;">
                        <div><strong>Gap ROI:</strong> ${gapData.expectedROI}</div>
                        <div><strong>Payback Period:</strong> ${gapData.paybackPeriod}</div>
                        <div><strong>Time to Impact:</strong> ${gapData.timeToImpact}</div>
                        <div><strong>Projects Affected:</strong> ${gapData.affectedProjects}%</div>
                    </div>
                </div>
                <div class="detail-section">
                    <h4>Strategic Recommendation</h4>
                    <p>${getCompanyRecommendation(companyData.type, gapData.urgency)}</p>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        console.log('Company modal displayed');
    } else {
        console.error('Company data not found for:', companyName);
    }
}

function showGapDetails(gapName) {
    console.log('Showing gap details for:', gapName);
    const modal = document.getElementById('gapModal');
    const modalTitle = document.getElementById('modalGapName');
    const modalBody = document.getElementById('modalGapBody');
    
    if (!modal || !modalTitle || !modalBody) {
        console.error('Gap modal elements not found');
        return;
    }
    
    const gap = dashboardData.investmentGaps.find(g => g.name === gapName);
    
    if (gap) {
        modalTitle.textContent = gap.name;
        modalBody.innerHTML = `
            <div class="gap-detail-content">
                <div class="detail-section">
                    <h4>Gap Overview</h4>
                    <div class="detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0;">
                        <div><strong>Total Gap Size:</strong> $${gap.gapSize}B</div>
                        <div><strong>Urgency Level:</strong> ${getUrgencyEmoji(gap.urgency)} ${gap.urgency}</div>
                        <div><strong>Time to Impact:</strong> ${gap.timeToImpact}</div>
                        <div><strong>Projects Affected:</strong> ${gap.affectedProjects}%</div>
                    </div>
                </div>
                <div class="detail-section">
                    <h4>Investment Opportunity</h4>
                    <div class="detail-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0;">
                        <div><strong>Expected ROI:</strong> ${gap.expectedROI}</div>
                        <div><strong>Payback Period:</strong> ${gap.paybackPeriod}</div>
                        <div><strong>Target Companies:</strong> ${gap.targetCompanies.length}</div>
                    </div>
                </div>
                <div class="detail-section">
                    <h4>Target Companies</h4>
                    <div class="company-list">
                        ${gap.targetCompanies.map(company => `
                            <div class="company-item" style="margin: 8px 0; padding: 8px; background: var(--color-bg-1); border-radius: 4px;">
                                <strong>${company.name}</strong> - ${company.focus} (${company.type}, $${company.investment})
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h4>Next Steps</h4>
                    <p>${getGapNextSteps(gap.name, gap.urgency)}</p>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        console.log('Gap modal displayed');
    } else {
        console.error('Gap data not found for:', gapName);
    }
}

function getCompanyRecommendation(type, urgency) {
    const recommendations = {
        'Strategic': 'Establish long-term partnership with equity investment consideration',
        'Acquisition': 'Evaluate for immediate acquisition to fill critical gap',
        'Platform': 'Integrate as core technology platform',
        'Investment': 'Consider minority equity investment with growth participation',
        'Supplier': 'Establish preferred supplier relationship with volume commitments',
        'Joint Venture': 'Create joint venture for shared risk and accelerated deployment'
    };
    
    const urgencyNote = urgency === 'Critical' ? ' Priority action required within 30 days.' : '';
    return (recommendations[type] || 'Evaluate partnership opportunity') + urgencyNote;
}

function getGapNextSteps(gapName, urgency) {
    const steps = {
        'Power & Cooling Infrastructure': 'Secure 100MW AI-ready capacity through CoreWeave partnership. Diversify with Schneider Electric and Vertiv.',
        'AI Talent Integration': 'Deploy Scale AI workforce platform. Acquire Dex for talent matching capabilities.',
        'Data Quality & Governance': 'Implement Databricks lakehouse platform. Acquire Monte Carlo for observability.',
        'Edge AI Processing': 'Pilot Groq LPU deployment. Establish Qualcomm strategic partnership.',
        'MLOps & Model Deployment': 'Deploy AWS SageMaker enterprise platform. Integrate Weights & Biases tracking.'
    };
    
    const urgencyNote = urgency === 'Critical' ? ' IMMEDIATE ACTION REQUIRED.' : '';
    return (steps[gapName] || 'Develop comprehensive action plan') + urgencyNote;
}

// Export functionality - FIXED
function initializeExport() {
    console.log('Initializing export functionality...');
    const exportBtn = document.getElementById('exportBtn');
    
    if (exportBtn) {
        exportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            exportSummary();
        });
        console.log('Export button initialized');
    } else {
        console.error('Export button not found');
    }
}

function exportSummary() {
    console.log('Exporting executive summary...');
    
    try {
        const summaryData = {
            dashboardTitle: 'AI Investment Gaps Dashboard - Executive Summary',
            generatedDate: new Date().toISOString().split('T')[0],
            executiveMetrics: dashboardData.executiveMetrics,
            criticalFindings: [
                '$340B total investment gap across 5 critical areas',
                '34x average ROI expected across all gaps',
                '5 critical gaps requiring immediate action',
                '15 target companies identified for investment',
                'Q4 2025 immediate actions: Power infrastructure, AI talent',
                'Q1 2026 priorities: Data governance, MLOps automation'
            ],
            investmentGaps: dashboardData.investmentGaps.map(gap => ({
                name: gap.name,
                gapSize: `$${gap.gapSize}B`,
                urgency: gap.urgency,
                expectedROI: gap.expectedROI,
                targetCompanies: gap.targetCompanies.length,
                timeToImpact: gap.timeToImpact
            })),
            immediateActions: dashboardData.actionFramework.Q4_2025.map(action => ({
                action: action.action,
                gap: action.gap,
                investment: action.investmentRange,
                priority: action.priority
            })),
            riskAssessment: {
                overallLevel: 'High Alert - Infrastructure & Talent Gaps',
                criticalRisks: dashboardData.riskMonitoring.criticalRisks.length,
                redFlags: dashboardData.riskMonitoring.criticalRisks.filter(r => r.status === 'Red').length,
                mitigationStrategies: 4
            },
            recommendations: [
                'Prioritize Power & Cooling Infrastructure gap ($200B) - highest impact',
                'Secure AI talent platform partnerships (Scale AI, Dex) immediately',
                'Deploy diversified strategy across all 5 gap categories',
                'Implement real-time risk monitoring system',
                'Target 34x average ROI through strategic portfolio allocation'
            ]
        };
        
        const blob = new Blob([JSON.stringify(summaryData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-investment-gaps-executive-summary-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('Executive summary exported successfully');
        
        // Show user feedback
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            const originalText = exportBtn.textContent;
            exportBtn.textContent = 'Exported!';
            exportBtn.style.background = '#1FB8CD';
            setTimeout(() => {
                exportBtn.textContent = originalText;
                exportBtn.style.background = '';
            }, 2000);
        }
        
    } catch (error) {
        console.error('Export failed:', error);
    }
}