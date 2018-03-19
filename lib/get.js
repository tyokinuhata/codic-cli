const fsExtra = require('fs-extra')
const request = require('request')

/** ネーミング取得 */
exports.get = (confFile, hisFile, text, casing) => {
    const config = fsExtra.readJsonSync(confFile)
    const accessToken = config['access-token']

    if (!casing && config.casing) {
        casing = config.casing
    } else if (!casing && !config.casing) {
        casing = 'camel'
    }

    switch(casing) {
        case 'snake':
            casing = 'lower underscore'
            break
        case 'upper':
            casing = 'upper underscore'
            break
        case 'kebab':
            casing = 'hyphen'
            break
        case 'space':
            casing = ''
            break
    }

    request.get({
        url: 'https://api.codic.jp/v1/engine/translate.json',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        qs: {
            text: text,
            casing: casing
        },
        json: true
    }, (err, req, data) => {
        const history = fsExtra.readJSONSync(hisFile)
        history.names.push({
            'request': text,
            'response': data[0].translated_text
        })
        fsExtra.writeJSONSync(hisFile, history)
        console.log(data[0].translated_text)
    })
}