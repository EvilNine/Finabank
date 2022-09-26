import realFavicon from "gulp-real-favicon";
import fs from "fs";
import panini from "panini";

const faviconData = './faviconData.json';

export const html = () => {
    panini.refresh();
    return app.gulp.src(app.path.src.html, {base: app.path.srcFolder})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Html",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(panini({
            root: `${app.path.srcFolder}/`,
            layouts: `${app.path.srcFolder}/layouts/`,
            partials: `${app.path.srcFolder}/partials/`,
            helpers: `${app.path.srcFolder}/helpers/`,
            data: `${app.path.srcFolder}/data/`,
        }))
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(faviconData)).favicon.html_code))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}