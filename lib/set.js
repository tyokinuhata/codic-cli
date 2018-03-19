const fsExtra = require('fs-extra')

/** 設定 */
exports.set = {
    token: (file, token) => {
        const config = fsExtra.readJSONSync(file)
        config['access-token'] = token
        fsExtra.writeJSONSync(file, config)
    },
    casing: (file, casing) => {
        const config = fsExtra.readJSONSync(file)
        config.casing = casing
        fsExtra.writeJSONSync(file, config)
    },
    list: file => {
        const config = fsExtra.readJsonSync(file)
        console.log('access-token: ' + config['access-token'])
        console.log('casing: ' + config.casing)
    }
}