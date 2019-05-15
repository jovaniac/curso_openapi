
var gulp = require('gulp');
var cucumber = require('gulp-cucumber');
var clean = require('gulp-rimraf');
var runner = require("gulp-nodeunit-runner");
var mocker = require('gulp-apimocker');
var reporter = require('gulp-protractor-cucumber-html-report');


/**
 * tarea para borrar el contenido de la carpeta report.
 */
gulp.task('clean', () =>{
    return gulp.src(['features/report/*'],{read: false })
               .pipe(clean({force: true}))
   });

/**
 * tarea para correr pruebas de features y genera reporte en formato json.
 */
gulp.task('cucumber-test', () => {
    return gulp.src('*features/*')
                .pipe(cucumber({
                    'steps': '*features/step_definitions/*.js',
                    'support':'*features/support/*.js',
                    'format': 'json:features/report/cucumber_report.json'
                })
            );
});

/**
 * tarea para correr servidor de apimocker
 */
gulp.task('apimocker', () => {
    return mocker.start({
      config: '../node/config-generated.json',
      mockDirectory: '../node/mock'
    });
});


/**
 * tarea para para generar el reporte html a partir de report 
 * json creado en la tarea cucumber-test.
 */
gulp.task('test-crear-html', () =>{
    return gulp.src('index.js')
               .pipe(runner())
});

/**
 * 
 * tarea para para generar reporte html a partir de report json creado en la tarea cucumber.
 * 
 */
gulp.task('crear-reporte-protractor-cucumber',() => {
    return gulp.src('features/report/cucumber_report.json')
               .pipe(reporter({
                    dest: 'features/report/'
                }));
});

/**
 * Ejecuta tareas en secuencia.
 */
exports.bdd = gulp.parallel('apimocker',gulp.series('clean','cucumber-test', 'test-crear-html'));
exports.mockLocal = gulp.parallel('apimocker');

