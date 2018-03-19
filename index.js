#!/usr/bin/env node

'use strict'

const args = process.argv.slice(2)
const set = require(__dirname + '/lib/set.js')
const get = require(__dirname + '/lib/get.js')
const history = require(__dirname + '/lib/history.js')
const help = require(__dirname + '/lib/help.js')
const version = require(__dirname + '/lib/version.js')

const main = () => {
    if (args[0] === 'set' && args[1] === 'token') {
        set.token(__dirname + '/codic-config.json', args[2])
    } else if(args[0] === 'set' && args[1] === 'casing') {
        set.casing(__dirname + '/codic-config.json', args[2])
    } else if (args[0] === 'set' && args[1] === 'list') {
        set.list(__dirname + '/codic-config.json')
    } else if (args[0] === 'get') {
        get.get(__dirname + '/codic-config.json', __dirname + '/codic-history.json', args[1], args[2])
    } else if (args[0] === 'history' && args[1] === 'clear') {
        history.clear(__dirname + '/codic-history.json')
    } else if (args[0] === 'history') {
        history.history(__dirname + '/codic-history.json')
    } else if (args[0] === 'help') {
        help.help()
    } else if (args[0] === 'version') {
        version.version()
    }
}
main()