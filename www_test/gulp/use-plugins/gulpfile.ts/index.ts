import { src } from 'gulp';
import * as through2 from 'through2';

function taskInlinePlugin(cb) {
  return src('src/js/*.ts')
    .pipe(through2.obj(function (file, _, cb) {
      if (file.isBuffer()) {
        console.log(file.contents.toString());
        //const code = uglify.minify(file.contents.toString())
        //file.contents = Buffer.from(code)
      }
      cb(null, file);
    }));
};

export { taskInlinePlugin as default };
