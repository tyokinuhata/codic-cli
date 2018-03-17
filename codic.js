#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
const request = require('request');

const args = process.argv.slice(2)

if (args[0] === 'set' && args[1] === '-a') {
    const config = fsExtra.readJSONSync('./codic-config.json')
    config['access-token'] = args[2]
    fsExtra.writeJSONSync('./codic-config.json', config)

} else if(args[0] === 'set' && args[1] === '-t') {
    const config = fsExtra.readJSONSync('./codic-config.json')
    config.codic = args[2]
    fsExtra.writeJSONSync('./codic-config.json', config)

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
}