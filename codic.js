#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
const request = require('request');

const args = process.argv.slice(2)

/** アクセストークンの設定 */
if (args[0] === 'conf' && args[1] === '-a') {
    const config = fsExtra.readJSONSync('./codic-config.json')
    config['access-token'] = args[2]
    fsExtra.writeJSONSync('./codic-config.json', config)

/** 命名規則の設定 */
} else if(args[0] === 'conf' && args[1] === '-c') {
    const config = fsExtra.readJSONSync('./codic-config.json')
    config.casing = args[2]
    fsExtra.writeJSONSync('./codic-config.json', config)

/** ネーミングの取得 */
} else if (args[0] === 'get') {
    const config = fsExtra.readJsonSync('./codic-config.json')
    const accessToken = config['access-token']

    let casing = 'camel'
    if (args[2]) {
        casing = args[2]
    } else if (config.casing && config.casing !== '') {
        casing = config.casing
    }

    request.get({
        url: 'https://api.codic.jp/v1/engine/translate.json',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        qs: {
            text: args[1],
            casing: casing
        },
        json: true
    }, (err, req, data) => {
        console.log(data[0].translated_text)
    })

/** ヘルプの表示 */
} else if (args[0] === 'help') {

/** 設定一覧の表示 */
} else if (args[0] === 'list') {
    const config = fsExtra.readJsonSync('./codic-config.json')
    console.log('access-token: ' + config['access-token'])
    console.log('casing: ' + config.casing)

/** 過去のネーミングを取得 */
} else if (args[0] === 'history') {

}