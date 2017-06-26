import * as fs from 'fs'
import map930 from './mappings/930'
import plumbus from './utils'

plumbus({
		name: '930 Club',
		website: 'http://www.930.com',
		url: 'http://www.930.com',
		listSelector: '#upcoming-listview .list-view-item',
		mapper: map930
	})
	.then((res) => fs.writeFile(`./930.json`, res, 'utf-8'))
	.catch(err => console.log(err))
plumbus({
		name: 'DC Improv',
		website: 'https://www.dcimprov.com/',
		url: 'https://www.dcimprov.com/schedule.html',
		listSelector: '#main article.twothirds .leading',
		mapper: map930
	})
	.then((res) => fs.writeFile(`./930.json`, res, 'utf-8'))
	.catch(err => console.log(err))