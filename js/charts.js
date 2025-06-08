// Aurora Charts Module
// Created by: asarekings
// Updated: 2025-06-08 17:16:15 UTC

function filterDataByRegion(data) {
    if (currentRegion === 'all') return data;
    
    const regionMap = {
        'north-america': ['United States', 'Canada'],
        'europe': ['Germany', 'United Kingdom', 'France', 'Norway'],
        'asia-pacific': ['China', 'Japan', 'Singapore', 'Australia', 'South Korea'],
        'emerging': ['Brazil', 'India', 'China', 'Saudi Arabia']
    };
    
    return data.filter(market => regionMap[currentRegion]?.includes(market.name));
}

function waitForChartJS(callback, attempts = 0) {
    if (typeof Chart !== 'undefined') {
        callback();
    } else if (attempts < 20) {
        setTimeout(() => waitForChartJS(callback, attempts + 1), 200);
    } else {
        console.warn('Chart.js failed to load - creating fallback charts');
        createFallbackCharts();
    }
}

function createCharts() {
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded - creating fallback charts');
        createFallbackCharts();
        return;
    }
    
    try {
        createOpportunityChart();
        createCompetitiveChart();
        createTimelineChart();
        console.log('✅ Charts created successfully by asarekings');
    } catch (error) {
        console.error('Error creating charts:', error);
        createFallbackCharts();
    }
}

function createOpportunityChart() {
    const canvas = document.getElementById('opportunityChart');
    if (!canvas) {
        console.warn('opportunityChart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 6);
    
    if (charts.opportunity) {
        charts.opportunity.destroy();
    }
    
    charts.opportunity = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(m => m.name),
            datasets: [{
                label: 'Aurora Market Score',
                data: data.map(m => m.score),
                backgroundColor: AURORA_CONFIG.colors.primary.slice(0, data.length).map(color => color + '80'),
                borderColor: AURORA_CONFIG.colors.primary.slice(0, data.length),
                borderWidth: 3,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    display: true, 
                    labels: { font: { weight: 'bold' } } 
                },
                tooltip: {
                    backgroundColor: 'rgba(47, 53, 66, 0.95)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#ff6b9d',
                    borderWidth: 2,
                    callbacks: {
                        afterLabel: function(context) {
                            const market = data[context.dataIndex];
                            return [
                                `Market Size: $${market.size}B`,
                                `ROI Potential: ${market.roi}%`,
                                `Risk Level: ${market.risk}/10`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    grid: { color: 'rgba(255, 107, 157, 0.1)' },
                    ticks: { 
                        color: '#666', 
                        font: { weight: 'bold' },
                        callback: function(value) { return value + '/10'; }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#666', font: { weight: 'bold' }, maxRotation: 45 }
                }
            },
            animation: { duration: 2000, easing: 'easeInOutQuart' }
        }
    });
}

function createCompetitiveChart() {
    const canvas = document.getElementById('competitiveChart');
    if (!canvas) {
        console.warn('competitiveChart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 3);
    
    if (charts.competitive) {
        charts.competitive.destroy();
    }
    
    charts.competitive = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Market Size', 'Low Competition', 'Regulatory', 'ROI Potential', 'Entry Speed', 'Growth Rate'],
            datasets: data.map((market, i) => ({
                label: market.name,
                data: [
                    Math.min(10, market.size / 100),
                    10 - market.competition,
                    market.regulatory,
                    Math.min(10, market.roi / 20),
                    10 - market.timeline / 2.5,
                    Math.min(10, market.growth / 2)
                ],
                backgroundColor: AURORA_CONFIG.colors.primary[i] + '30',
                borderColor: AURORA_CONFIG.colors.primary[i],
                borderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: AURORA_CONFIG.colors.primary[i]
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { 
                        font: { weight: 'bold' },
                        usePointStyle: true
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    grid: { color: 'rgba(255, 107, 157, 0.15)' },
                    pointLabels: { 
                        color: '#666', 
                        font: { weight: '600', size: 12 }
                    },
                    ticks: { display: false }
                }
            },
            animation: { duration: 2000, easing: 'easeInOutQuart' }
        }
    });
}

function createTimelineChart() {
    const canvas = document.getElementById('timelineChart');
    if (!canvas) {
        console.warn('timelineChart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 5);
    
    if (charts.timeline) {
        charts.timeline.destroy();
    }
    
    charts.timeline = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.map(m => m.name),
            datasets: [{
                label: 'Timeline (Months)',
                data: data.map(m => m.timeline),
                backgroundColor: AURORA_CONFIG.colors.primary.slice(0, data.length),
                borderWidth: 4,
                borderColor: '#fff',
                hoverBorderWidth: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { 
                        font: { weight: 'bold' },
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(47, 53, 66, 0.95)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#ff6b9d',
                    borderWidth: 2,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + ' months';
                        }
                    }
                }
            },
            animation: { animateRotate: true, duration: 2000 }
        }
    });
}

function createFallbackCharts() {
    console.log('📊 Creating fallback charts by asarekings...');
    
    // Create fallback for opportunity chart
    const canvas = document.getElementById('opportunityChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 6);
    
    // Set canvas size
    canvas.width = canvas.offsetWidth || 400;
    canvas.height = canvas.offsetHeight || 400;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set styles
    ctx.font = '16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ff6b9d';
    
    // Draw title
    ctx.fillText('Aurora Market Scores (Fallback)', canvas.width / 2, 30);
    
    // Draw simple bars
    const maxScore = Math.max(...data.map(m => m.score));
    const barWidth = (canvas.width - 100) / data.length;
    const maxBarHeight = canvas.height - 120;
    
    data.forEach((market, i) => {
        const barHeight = (market.score / maxScore) * maxBarHeight;
        const x = 50 + i * barWidth;
        const y = canvas.height - 70 - barHeight;
        
        // Draw bar
        ctx.fillStyle = AURORA_CONFIG.colors.primary[i % AURORA_CONFIG.colors.primary.length];
        ctx.fillRect(x, y, barWidth - 10, barHeight);
        
        // Draw label
        ctx.fillStyle = '#666';
        ctx.font = '10px Inter, sans-serif';
        ctx.save();
        ctx.translate(x + (barWidth - 10) / 2, canvas.height - 50);
        ctx.rotate(-Math.PI / 6);
        ctx.fillText(market.name.substring(0, 8), 0, 0);
        ctx.restore();
        
        // Draw value
        ctx.fillStyle = '#333';
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText(market.score.toFixed(1), x + (barWidth - 10) / 2, y - 10);
    });
    
    // Add "by asarekings" signature
    ctx.fillStyle = '#999';
    ctx.font = '10px Inter, sans-serif';
    ctx.fillText('by asarekings', canvas.width - 50, canvas.height - 10);
}

function updateCharts() {
    if (typeof Chart === 'undefined') {
        createFallbackCharts();
        return;
    }
    
    if (charts.opportunity) {
        const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 6);
        charts.opportunity.data.labels = data.map(m => m.name);
        charts.opportunity.data.datasets[0].data = data.map(m => m.score);
        charts.opportunity.data.datasets[0].backgroundColor = AURORA_CONFIG.colors.primary.slice(0, data.length).map(color => color + '80');
        charts.opportunity.data.datasets[0].borderColor = AURORA_CONFIG.colors.primary.slice(0, data.length);
        charts.opportunity.update('active');
    }
    
    if (charts.competitive) {
        const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 3);
        charts.competitive.data.datasets = data.map((market, i) => ({
            label: market.name,
            data: [
                Math.min(10, market.size / 100),
                10 - market.competition,
                market.regulatory,
                Math.min(10, market.roi / 20),
                10 - market.timeline / 2.5,
                Math.min(10, market.growth / 2)
            ],
            backgroundColor: AURORA_CONFIG.colors.primary[i] + '30',
            borderColor: AURORA_CONFIG.colors.primary[i],
            borderWidth: 3,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: AURORA_CONFIG.colors.primary[i]
        }));
        charts.competitive.update('active');
    }
    
    if (charts.timeline) {
        const data = filterDataByRegion(MARKET_DATA[currentIndustry]).slice(0, 5);
        charts.timeline.data.labels = data.map(m => m.name);
        charts.timeline.data.datasets[0].data = data.map(m => m.timeline);
        charts.timeline.data.datasets[0].backgroundColor = AURORA_CONFIG.colors.primary.slice(0, data.length);
        charts.timeline.update('active');
    }
}
