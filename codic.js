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
    console.log(args[1])
}

if (args[0] === 'get') {
    request.get({
        url: 'https://api.codic.jp/v1/engine/translate.json',
        headers: {
            'Authorization': 'Bearer test'
        },
        qs: {
            text: '得点を取得する',
            casing: 'camel'
        },
        json: true
    }, (err, req, data) => {
        console.log(data[0].translated_text)
    })
}