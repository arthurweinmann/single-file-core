/* global require */

const resolve = require("@rollup/plugin-node-resolve");
// const { terser } = require("rollup-plugin-terser");

const PLUGINS = [resolve({ moduleDirectories: ["node_modules"] })];
// const EXTERNAL = ["single-file-core"];

export default [{
    input: ["single-file-core/single-file.js"],
    output: [{
        file: "build/single-file.js",
        format: "umd",
        name: "singlefile",
        plugins: []
    }],
    plugins: PLUGINS,
    // external: EXTERNAL
}, {
    input: ["single-file-core/single-file-frames.js"],
    output: [{
        file: "build/single-file-frames.js",
        format: "umd",
        name: "singlefile",
        plugins: []
    }],
    plugins: PLUGINS,
    // external: EXTERNAL
}, {
    input: ["single-file-core/single-file-bootstrap.js"],
    output: [{
        file: "build/single-file-bootstrap.js",
        format: "umd",
        name: "singlefileBootstrap",
        plugins: []
    }],
    plugins: PLUGINS,
    // external: EXTERNAL
}, {
    input: ["single-file-core/single-file-hooks-frames.js"],
    output: [{
        file: "build/single-file-hooks-frames.js",
        format: "iife",
        plugins: []
    }],
    plugins: PLUGINS,
    // external: EXTERNAL
}, {
    input: ["single-file-core/vendor/zip/zip.min.js"],
    output: [{
        file: "build/single-file-zip.min.js",
        format: "es",
        plugins: []
    }],
    context: "this",
    plugins: PLUGINS,
    // external: EXTERNAL
}];