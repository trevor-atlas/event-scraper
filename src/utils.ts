import { LocalEvent, MapOptions } from './types'
import { JSDOM as domParser } from 'jsdom'
import { JSDOM } from '@types/jsdom'

export const isElement = (e: Element): boolean => e !== null
export const text = (e: Element): string => isElement(e) ? e.textContent : ''
export const html = (e: Element): string => isElement(e) ? e.innerHTML : ''
export const href = (e: Element): string => isElement(e) ? e.getAttribute('href') : ''
export const bool = (str: string): boolean => !!str

/**
 * getFormatted
 * Remove tabs, whtespace and HTML characters from a given LocalEvent's values
 * @param {LocalEvent} event 
 * @returns {LocalEvent} 
 */
export const getFormatted = (event: LocalEvent): LocalEvent => {
	const newEvent = new LocalEvent;
	Object.keys(event)
		.map((k: string) => newEvent[k] = cleanString(event[k]))

	return newEvent
}

/**
 * cleanString
 * Remove tabs, whtespace and HTML characters from a given string
 * @param {string} str 
 * @returns {string} 
 */
export const cleanString = (str: string): string => {
	if (typeof str === 'string') {
		return str
			.replace(/\s+/ig, ' ')
			.replace(/<(?:.|\n)*?>/gm, '')
			.trim()
	}
	return str
}

export const eventsToJson = (events: LocalEvent[], options: MapOptions): string => {
	return JSON.stringify({
		lastUpdated: new Date().getTime(),
		name: options.name,
		website: options.website,
		events
	}, null, 4)
}

export const getDomEventList = (dom: JSDOM, listSelector: string): Element[] => {
	const doc = dom.window.document;
	const rawEvents: NodeListOf<Element> = doc.querySelectorAll(listSelector)
	return Array.from(rawEvents)
}

 const plumbus = (options: MapOptions): Promise<string> => {
	return domParser.fromURL(options.url, {})
		.then(dom => getDomEventList(dom, options.listSelector))
		.then(domList => options.mapper(domList))
		.then(eventList => eventsToJson(eventList, options))
}

export default plumbus;
