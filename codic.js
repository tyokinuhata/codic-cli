#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
const request = require('request');

const args = process.argv.slice(2)

if (args[0] === 'set') {
    fsExtra.writeJson('./access-token.json', {
        'access-token': args[1],
    },
    {
        encoding: 'utf-8'
    })
} else if (args[0] === 'get') {
    const accessToken = fsExtra.readJsonSync('./access-token.json')['access-token']
    const casing = args[2] ? args[2] : 'camel'

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