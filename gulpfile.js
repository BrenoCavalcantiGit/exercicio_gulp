const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

// Tarefa privada: não é exportada, só é usada dentro do gulpfile
function avisoInicio(callback) {
    console.log('Iniciando as tarefas do Gulp...');
    callback();
}

// 1) Compilação do SASS (arquivo .scss -> .css comprimido)
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// 2) Compressão de imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// 3) Compressão (uglify) e ofuscação do JavaScript
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/js'));
}

// Tarefas públicas (exportadas, podem ser chamadas com "gulp nome")
exports.styles = styles;
exports.images = images;
exports.scripts = scripts;

// Em série: primeiro o aviso, depois o SASS
// Em paralelo: imagens e JS não dependem um do outro, então rodam juntos
exports.default = gulp.series(
    avisoInicio,
    styles,
    gulp.parallel(images, scripts)
);

// Fica "vigiando" os arquivos e roda a tarefa certa quando algo muda
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.series(styles));
    gulp.watch('./src/scripts/*.js', gulp.series(scripts));
    gulp.watch('./src/images/**/*', gulp.series(images));
};
