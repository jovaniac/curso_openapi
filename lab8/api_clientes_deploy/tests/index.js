var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'features/report/cucumber_report.json',
        output: 'features/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Safari  11.0.2",
            "Platform": "macOS High Sierra",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
 