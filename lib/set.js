'use strict'

const fsExtra = require('fs-extra')

/** アクセストークンの設定 */
exports.token = (file, token) => {
    const config = fsExtra.readJSONSync(file)
    config['access-token'] = token
    fsExtra.writeJSONSync(file, config)
}

/** 命名規則の設定 */
exports.casing = (file, casing) => {
    const config = fsExtra.readJSONSync(file)
    config.casing = casing
    fsExtra.writeJSONSync(file, config)
}

/** 設定一覧の表示 */
exports.list = file => {
    const config = fsExtra.readJsonSync(file)
    console.log('access-token: ' + config['access-token'])
    console.log('casing: ' + config.casing)
}