'use strict'

const pkg = require(__dirname + '/../package.json')

/** バージョンの表示 */
exports.version = () => {
    console.log('v' + pkg.version)
}