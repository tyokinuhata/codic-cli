#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
const request = require('request');

const args = process.argv.slice(2)

/** アクセストークンの設定 */
if (args[0] === 'conf' && args[1] === 'token') {
    const config = fsExtra.readJSONSync('./codic-config.json')
    config['access-token'] = args[2]
    fsExtra.writeJSONSync('./codic-config.json', config)

/** 命名規則の設定 */
} else if(args[0] === 'conf' && args[1] === 'casing') {
    const config = fsExtra.readJSONSync('./codic-config.json')
    config.casing = args[2]
    fsExtra.writeJSONSync('./codic-config.json', config)

/** 設定一覧の表示 */
} else if (args[0] === 'conf' && args[1] === 'list') {
    const config = fsExtra.readJsonSync('./codic-config.json')
    console.log('access-token: ' + config['access-token'])
    console.log('casing: ' + config.casing)

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
            text: args[1],
            casing: casing
        },
        json: true
    }, (err, req, data) => {
        const history = fsExtra.readJSONSync('./history.json')
        history.names.push({
            'request': args[1],
            'response': data[0].translated_text
        })
        fsExtra.writeJSONSync('./history.json', history)
        console.log(data[0].translated_text)
    })

/** ヘルプの表示 */
} else if (args[0] === 'help') {

/** ネーミング履歴の削除 */
} else if (args[0] === 'history' && args[1] === 'clear') {
    fsExtra.writeJSONSync('./history.json', {
        'names': []
    })

/** ネーミング履歴を取得 */
} else if (args[0] === 'history') {
    const history = fsExtra.readJSONSync('./history.json')
    for (let i = 0; i < history.names.length; i++) {
        console.log(i++ + ': ' + history.names[i].request + ' -> ' + history.names[i].response)
    }
}