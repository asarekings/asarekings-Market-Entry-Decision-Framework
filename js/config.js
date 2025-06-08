// Aurora Dashboard Configuration
// Created by: asarekings
// Last Updated: 2025-06-08 17:16:15 UTC
// User: asarekings

const AURORA_CONFIG = {
    version: '2.0',
    author: 'asarekings',
    lastUpdated: '2025-06-08 17:16:15 UTC',
    user: 'asarekings',
    colors: {
        primary: ['#ff6b9d', '#c44569', '#40407a', '#706fd3', '#ff9ff3', '#54a0ff', '#26de81', '#fed330']
    },
    regions: {
        'north-america': ['United States', 'Canada'],
        'europe': ['Germany', 'United Kingdom', 'France', 'Norway'],
        'asia-pacific': ['China', 'Japan', 'Singapore', 'Australia', 'South Korea'],
        'emerging': ['Brazil', 'India', 'China', 'Saudi Arabia']
    }
};

const MARKET_DATA = {
    technology: [
        { name: 'United States', size: 850, competition: 8.5, regulatory: 7.2, roi: 145, timeline: 6, risk: 4.2, score: 8.7, growth: 12.5 },
        { name: 'China', size: 680, competition: 9.2, regulatory: 5.8, roi: 180, timeline: 12, risk: 6.8, score: 7.9, growth: 15.8 },
        { name: 'Germany', size: 320, competition: 7.1, regulatory: 8.9, roi: 125, timeline: 8, risk: 3.5, score: 8.2, growth: 8.2 },
        { name: 'Japan', size: 280, competition: 7.8, regulatory: 7.5, roi: 115, timeline: 10, risk: 4.1, score: 7.6, growth: 6.5 },
        { name: 'United Kingdom', size: 240, competition: 6.9, regulatory: 8.1, roi: 135, timeline: 7, risk: 3.8, score: 8.1, growth: 9.1 },
        { name: 'Singapore', size: 85, competition: 7.2, regulatory: 9.1, roi: 142, timeline: 7, risk: 3.1, score: 8.0, growth: 10.2 },
        { name: 'Canada', size: 180, competition: 6.2, regulatory: 8.7, roi: 118, timeline: 6, risk: 3.2, score: 7.8, growth: 7.8 },
        { name: 'Australia', size: 140, competition: 5.8, regulatory: 8.3, roi: 122, timeline: 8, risk: 3.6, score: 7.5, growth: 8.9 }
    ],
    healthcare: [
        { name: 'United States', size: 1200, competition: 9.1, regulatory: 6.8, roi: 165, timeline: 18, risk: 5.8, score: 8.4, growth: 8.5 },
        { name: 'Germany', size: 480, competition: 7.5, regulatory: 8.2, roi: 138, timeline: 15, risk: 4.2, score: 8.1, growth: 6.8 },
        { name: 'Japan', size: 420, competition: 8.2, regulatory: 7.9, roi: 125, timeline: 20, risk: 4.8, score: 7.5, growth: 5.2 },
        { name: 'United Kingdom', size: 380, competition: 7.1, regulatory: 8.5, roi: 142, timeline: 16, risk: 4.1, score: 7.9, growth: 7.8 },
        { name: 'France', size: 340, competition: 6.8, regulatory: 8.1, roi: 135, timeline: 17, risk: 4.3, score: 7.6, growth: 6.9 },
        { name: 'China', size: 890, competition: 8.9, regulatory: 5.5, roi: 185, timeline: 24, risk: 7.5, score: 7.2, growth: 14.8 }
    ],
    fintech: [
        { name: 'United States', size: 720, competition: 9.3, regulatory: 6.5, roi: 175, timeline: 12, risk: 5.2, score: 8.6, growth: 15.2 },
        { name: 'United Kingdom', size: 420, competition: 8.1, regulatory: 7.8, roi: 158, timeline: 10, risk: 4.1, score: 8.4, growth: 12.1 },
        { name: 'Singapore', size: 180, competition: 7.8, regulatory: 8.9, roi: 165, timeline: 8, risk: 3.8, score: 8.7, growth: 14.5 },
        { name: 'Germany', size: 280, competition: 7.2, regulatory: 8.1, roi: 142, timeline: 11, risk: 3.9, score: 8.0, growth: 11.2 },
        { name: 'China', size: 650, competition: 9.5, regulatory: 5.2, roi: 195, timeline: 18, risk: 7.8, score: 7.5, growth: 18.9 }
    ],
    retail: [
        { name: 'United States', size: 980, competition: 8.8, regulatory: 7.5, roi: 132, timeline: 8, risk: 4.5, score: 8.2, growth: 8.9 },
        { name: 'China', size: 1150, competition: 9.2, regulatory: 6.1, roi: 168, timeline: 12, risk: 6.2, score: 7.8, growth: 12.8 },
        { name: 'Germany', size: 380, competition: 7.4, regulatory: 8.3, roi: 125, timeline: 9, risk: 3.8, score: 7.9, growth: 6.8 },
        { name: 'United Kingdom', size: 320, competition: 7.1, regulatory: 8.1, roi: 128, timeline: 8, risk: 3.9, score: 7.8, growth: 7.5 }
    ],
    energy: [
        { name: 'Norway', size: 180, competition: 6.2, regulatory: 9.1, roi: 145, timeline: 24, risk: 4.5, score: 8.3, growth: 8.8 },
        { name: 'United States', size: 950, competition: 8.8, regulatory: 6.9, roi: 135, timeline: 18, risk: 5.8, score: 7.9, growth: 7.2 },
        { name: 'Saudi Arabia', size: 420, competition: 7.5, regulatory: 6.8, roi: 165, timeline: 20, risk: 6.8, score: 7.6, growth: 12.5 }
    ],
    manufacturing: [
        { name: 'China', size: 1200, competition: 9.5, regulatory: 6.1, roi: 158, timeline: 15, risk: 6.2, score: 7.8, growth: 12.8 },
        { name: 'Germany', size: 680, competition: 8.2, regulatory: 8.5, roi: 128, timeline: 12, risk: 4.1, score: 8.1, growth: 6.5 },
        { name: 'United States', size: 720, competition: 8.8, regulatory: 7.2, roi: 142, timeline: 14, risk: 4.8, score: 8.0, growth: 7.8 }
    ]
};

// Global State
let currentIndustry = 'technology';
let currentRegion = 'all';
let charts = {};
let isInitialized = false;

console.log(`🌟 Aurora Config loaded by ${AURORA_CONFIG.author} (${AURORA_CONFIG.user}) at ${AURORA_CONFIG.lastUpdated}`);
