export default {
  default: [
    '--require-module',
    'esm',
    '--require',
    './support/*.js',
    '--require',
    './steps/*.js',
    '--publish-quiet',
    './features/*.feature'
  ].join(' ')
};
