export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/bundles/profile.umd.js',
        format: 'umd',
        name: 'profile.umd.js'
    },
    sourceMap: true,
    format: 'umd',
    moduleName: 'ng.profile',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/forms': 'ng.forms',
    }
}