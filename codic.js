#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
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