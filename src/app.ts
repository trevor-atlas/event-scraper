import { JSDOM } from 'jsdom'
import * as fs from 'fs'
import { NineThirty } from './mappings/930'
import Formatter from './utils'
import { URLParser } from './URLParser'

new URLParser('http://www.930.com/', new NineThirty, {}, JSDOM)
	.init()
	.then((res) => fs.writeFile(`./930.json`, res, 'utf-8'))
	.then(() => console.log('stuff happened!'))
	.catch(err => console.log(err))