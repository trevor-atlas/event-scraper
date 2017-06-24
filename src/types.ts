import { JSDOM } from '@types/jsdom'

export class LocalEvent {
	title: string
	dates: string
	time: string
	price: string
	ticketLink: string
	soldOut: boolean
	info: string
	additionalInfo: string
}

export interface DomMapper {
	mapDomToJson(dom: JSDOM): string
	mapDom(Event: JQuery.PlainObject): LocalEvent
}