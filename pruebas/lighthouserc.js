module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080'],
      settings: {
        emulatedFormFactor: 'mobile',
        throttling: {
          rttMs: 150,
          throughputKbps: 1.6,
          cpuSlowdownMultiplier: 4
        },
        // Configuración específica por dispositivo/navegador
        presets: [
          {
            name: 'Android-Chrome',
            userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
            screenEmulation: { width: 412, height: 823, deviceScaleFactor: 1.75, mobile: true }
          },
          {
            name: 'iOS-Safari',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
            screenEmulation: { width: 375, height: 812, deviceScaleFactor: 3, mobile: true }
          }
        ]
      }
    },
    assertions: {
      // Aserciones personalizadas según tus RQF/RQNF
      'categories:accessibility': ['error', { minScore: 0.9 }], // RQNF-03
      'categories:performance': ['error', { minScore: 0.8 }],   // RQF-02
      'resource-summary:document:size': ['error', { maxNumericValue: 1024 * 1024 }] // RQF-04
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};