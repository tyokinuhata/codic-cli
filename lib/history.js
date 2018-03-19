const fsExtra = require('fs-extra')

/** 履歴一覧の表示 */
exports.history = file => {
    const history = fsExtra.readJSONSync(file)
    for (let i = 0; i < history.names.length; i++) {
        console.log(i + 1 + ': ' + history.names[i].request + ' -> ' + history.names[i].response)
    }
}

/** 履歴の削除 */
exports.clear = file => {
    fsExtra.writeJSONSync(file, {
        'names': []
    })
}