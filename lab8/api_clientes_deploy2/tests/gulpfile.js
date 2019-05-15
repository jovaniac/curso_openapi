
var gulp = require('gulp');
var cucumber = require('gulp-cucumber');
var clean = require('gulp-rimraf');
var runner = require("gulp-nodeunit-runner");
var mocker = require('gulp-apimocker');
var reporter = require('gulp-protractor-cucumber-html-report');


gulp.task('clean', () =>{
    return gulp.src(['features/report/*'],{read: false })
               .pipe(clean({force: true}))
   });

gulp.task('cucumber-test', () => {
    return gulp.src('*features/*')
                .pipe(cucumber({
                    'steps': '*features/step_definitions/*.js',
                    'support':'*features/support/*.js',
                    'format': 'json:features/report/cucumber_report.json'
                })
            );
});


gulp.task('apimocker', () => {
    return mocker.start({
      config: '../node/config-generated.json',
      mockDirectory: '../node/mock'
    });
});


gulp.task('test-crear-html', () =>{
    return gulp.src('index.js')
               .pipe(runner())
});


gulp.task('crear-reporte-protractor-cucumber',() => {
    return gulp.src('features/report/cucumber_report.json')
               .pipe(reporter({
                    dest: 'features/report/'
                }));
});

exports.bdd = gulp.parallel('apimocker',gulp.series('clean','cucumber-test', 'test-crear-html'));
exports.mockLocal = gulp.parallel('apimocker');

