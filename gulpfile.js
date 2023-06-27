import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

const fonts = gulp.series (otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series (fonts, gulp.parallel (copy, scss,images));
const dev = gulp.series (reset, mainTasks, gulp.parallel(watcher));


gulp.task('default', dev);
