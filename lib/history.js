const fsExtra = require('fs-extra')

/** 履歴 */
exports.history = {
    history: file => {
        const history = fsExtra.readJSONSync(file)
        for (let i = 0; i < history.names.length; i++) {
            console.log(i + 1 + ': ' + history.names[i].request + ' -> ' + history.names[i].response)
        }
    },
    clear: file => {
        fsExtra.writeJSONSync(file, {
            'names': []
        })
    }
}