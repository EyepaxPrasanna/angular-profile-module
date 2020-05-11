export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/bundles/profile.js',
        format: 'cjs',
        name: 'profile.js'
    },
    sourceMap: true,
    format: 'cjs',
    moduleName: 'ng.profile',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/forms': 'ng.forms',
    }
}