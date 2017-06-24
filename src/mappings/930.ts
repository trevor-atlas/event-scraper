import { DomMapper, LocalEvent } from '../types'
import Formatter from '../utils'
import { JSDOM } from '@types/jsdom'
const jq = require('jquery')

export class NineThirty implements DomMapper {
	constructor() { }

	mapDomToJson(dom: JSDOM): string {
		const $ = jq(dom.window)
		const rawEvents: JQuery.PlainObject = $('#upcoming-listview .list-view-item')
		const parsedEvents: LocalEvent[] = [];
		const map = this.mapDom
		rawEvents.each(function () { parsedEvents.push(map($(this))) })

		return JSON.stringify({
			lastUpdated: new Date().getTime(),
			name: '930 Club',
			website: 'http://www.930.com',
			events: parsedEvents
		}, null, 4)
	}

	mapDom(raw: JQuery.PlainObject): LocalEvent {
		return Formatter.getFormatted({
			title: raw.find('.headliners.summary a').text(),
			dates: raw.find('.dates').html(),
			time: raw.find('.times .doors').text(),
			price: raw.find('.price-range').text(),
			ticketLink: raw.find('.tickets').attr('href') || '',
			soldOut: typeof (raw.find('.tickets').attr('href')) !== 'string',
			info: raw.find('.topline-info').text() || '',
			additionalInfo: raw.find('.additional-event-info p').text() || ''
		});
	}
}
