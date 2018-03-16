#!/usr/bin/env node

'use strict'

const fsExtra = require('fs-extra')
const accessToken = process.argv.slice(2)

console.log(accessToken)

fsExtra.writeJson('./access-token.json', {
    'access-token': accessToken[0],
},
{
    encoding: 'utf-8'
})
