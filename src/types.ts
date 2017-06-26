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

export type MapOptions = {
	name: string
	url: string
	website: string
	listSelector: string
	mapper(events: Element[]): LocalEvent[]
}