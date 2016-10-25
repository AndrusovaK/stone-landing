module.exports = {
    // Path settings
    pathTo: {
            Src: {
                Styles: 'src/less/**/*.less',
                MainStyleFile: 'src/less/main.less',
                MainHtmlFile: 'src/index.html',
                Images: ['src/img/**/*.*', '!src/img/sprite/*.*'],
                // PngSprite: 'src/img/sprite/**/*.png',
                GHPages: 'dist/**/*',
                JS: 'src/js/**/*.*',
                JSVendor: 'vendor/**/*.*',
                BowerJSVendor: 'src/js/vendor/',
                JSCustom: ['custom/**/*.js', 'main.js', '!custom/toHead/**/*.js'],
                CSSVendor: 'src/less/vendor/',
                Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'],
                Php: 'src/*.php',
                Fonts: 'src/less/fonts/**/*',
                Svg: ['src/svg/**/*.*'],
                // SvgSprite: 'src/svg/sprite/**/*.svg',
                // SvgSpriteTpl: 'src/less/components/_svg-sprite-less.tpl'
            },
            Build: {
                Styles: 'dist/css',
                Html: 'dist/',
                Images: 'dist/img',
                PngSprite: 'dist/img/sprite',
                PngSpriteCSS: 'src/less/includes',
                JSVendor: 'dist/js',
                JSCustom: 'dist/js',
                Txt: 'dist/',
                Php: 'dist/',
                Clean: ['dist/**/*', '!dist/.gitignore'],
                Fonts: 'dist/css/fonts',
                Svg: 'dist/svg',
                CSSVendor: 'dist/css/vendor'
                // SvgSprite: 'dist/svg',
                // SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png',
                // SvgSpriteCSS: 'src/less/includes/_svg-sprite.less'
            }
        },

    // GitHub Pages options
    ghpOptions: {
        remoteUrl: "git@github.com:AndrusovaK/stone-landing.git"
    },

    // jsDoc3 options for JS documentation generating
    // jsDocOptions:"./node_modules/jsdoc/jsdoc.js -c ./jsdoc-conf.json -r",

    // Styledocco options for SCSS documentation generating
    // StyledoccoOptions:"./node_modules/styledocco/bin/styledocco -o build/docs/scss -s src/scss src/scss",

    // Browser versions for automatically prefix
    autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

    // BrowserSync local web server settings
    browserSync: {
        server: './dist',
        baseDir: './dist',
        tunnel: true,
        host: 'localhost',
        port: 9000,
        injectChanges: true,
        logPrefix: "New Project Template"
    }

};
