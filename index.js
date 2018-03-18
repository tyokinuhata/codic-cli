#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
const request = require('request')
const pkg = require(__dirname + '/package.json')

const args = process.argv.slice(2)

/** 設定 */
const set = {
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

/** ネーミング取得 */
const get = (confFile, hisFile, text, casing) => {
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

/** 履歴 */
const history = {
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

/** ヘルプ */
const help = () => {
    console.log('codic conf token <your_access_token>')
    console.log('codic conf casing <casing>')
    console.log('codic conf list')
    console.log('codic get <japanese_word> <casing>')
    console.log('codic history')
    console.log('codic history clear')
    console.log('codic help')
}

/** バージョン */
const version = () => {
    console.log('v' + pkg.version)
}



if (args[0] === 'set' && args[1] === 'token') {
    set.token(__dirname + '/codic-config.json', args[2])
} else if(args[0] === 'set' && args[1] === 'casing') {
    set.casing(__dirname + '/codic-config.json', args[2])
} else if (args[0] === 'set' && args[1] === 'list') {
    set.list(__dirname + '/codic-config.json')
} else if (args[0] === 'get') {
    get(__dirname + '/codic-config.json', __dirname + '/codic-history.json', args[1], args[2])
} else if (args[0] === 'history' && args[1] === 'clear') {
    history.clear(__dirname + '/codic-history.json')
} else if (args[0] === 'history') {
    history.history(__dirname + '/codic-history.json')
} else if (args[0] === 'help') {
    help()
} else if (args[0] === 'version') {
    version()
}