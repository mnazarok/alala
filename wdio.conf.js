exports.config = {

    runner: 'local',
    port: 4723,
 
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [

    ],

    maxInstances: 10,

    capabilities: [{
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'Pixel 6 Pro API 33',
            'appium:platformVersion': '13',
            'appium:orientation': 'PORTRAIT',
            'appium:app': 'D:/androidV/ello-2.6.11-stage.apk',
            'appium:automationName': 'UiAutomator2',
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,
          
    }],

    logLevel: 'info',
 
    bail: 0,

    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    // services: ['appium'],
    services: [
        [
            'appium',
            {
                args: {
                },
                command: 'appium'
            }
        ]
    ],

    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
