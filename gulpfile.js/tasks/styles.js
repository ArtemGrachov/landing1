const source = $.config.source;
const dist = $.config.dist;

module.exports = function() {
    return $.gulp
        .src(source.dir + source.styles.dir + source.styles.root)
        .pipe($.if($.prod, $.sourcemaps.init()))
        .pipe(
            $.sassVars({
                imgUrl: dist.assets.dir + dist.assets.img,
                fontsUrl: dist.assets.dir + dist.assets.fonts,
                icons: source.svgSprite.filename
            })
        )
        .pipe(
            $.sass({
                outputStyle: $.prod ? "compressed" : "expanded"
            })
        )
        .pipe($.autoprefixer(source.styles.autoprefixer))
        .pipe($.rename(dist.styles + ($.prod ? dist.min + ".css" : ".css")))
        .pipe($.if($.prod, $.sourcemaps.write("./")))
        .pipe($.gulp.dest(dist.dir))
        .pipe($.bs.stream());
};
