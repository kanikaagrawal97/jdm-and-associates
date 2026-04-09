const fs = require('fs');
const d3Geo = require('d3-geo');

const data = JSON.parse(fs.readFileSync('./indiaLow.json', 'utf-8'));

// target states
const targetStates = [
  'IN-GA', 'IN-GJ', 'IN-HR', 'IN-KA', 'IN-MP', 
  'IN-MH', 'IN-PB', 'IN-RJ', 'IN-TN', 'IN-TG', 
  'IN-UP', 'IN-WB'
];

// D3 projection
const projection = d3Geo.geoMercator().fitSize([800, 800], data);
const path = d3Geo.geoPath().projection(projection);

let svgData = `<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-xl">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <g class="states" stroke="#e2e8f0" stroke-width="1.5" fill="#f8fafc">
`;

data.features.forEach(feature => {
  const d = path(feature);
  svgData += `    <path d="${d}" id="${feature.properties.id}" class="transition-colors duration-300 hover:fill-slate-100"></path>\n`;
});

svgData += `  </g>\n`;

// Draw glowing dots for target states
svgData += `  <g class="dots">\n`;
data.features.forEach(feature => {
  if (targetStates.includes(feature.properties.id)) {
    const centroid = path.centroid(feature);
    if (!isNaN(centroid[0])) {
      const [x, y] = centroid;
      svgData += `    <g class="dot-group hover:scale-110 transition-transform duration-300 origin-[${x}px_${y}px]">
      <!-- Radar pulse -->
      <circle cx="${x}" cy="${y}" r="2" fill="none" stroke-width="1.5" class="stroke-brand-blue">
        <animate attributeName="r" values="2; 25" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1; 0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="${x}" cy="${y}" r="2" fill="none" stroke-width="1" class="stroke-brand-blue" opacity="0">
        <animate attributeName="r" values="2; 25" dur="2s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1; 0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <!-- Main dot -->
      <circle cx="${x}" cy="${y}" r="5" stroke="#ffffff" stroke-width="1.5" style="filter: url(#glow);" class="fill-brand-blue transition-colors duration-300" />
      <title>${feature.properties.name}</title>
    </g>\n`;
    }
  }
});

svgData += `  </g>\n</svg>`;

const astroComponent = `---
// Generated India Map Component
---

${svgData}

<style>
.dot-group {
  cursor: pointer;
}
.dot-group:hover circle:last-of-type {
  opacity: 0.8;
}
</style>
`;

fs.writeFileSync('../src/components/IndiaMap.astro', astroComponent);
console.log('Map built successfully.');
