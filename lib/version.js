const pkg = require(__dirname + '/../package.json')

/** バージョン */
exports.version = () => {
    console.log('v' + pkg.version)
}