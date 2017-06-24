import { LocalEvent } from './types'

export default class Formatter {
	constructor() {}

	public static getFormatted(event: LocalEvent): LocalEvent {
		const newEvent = new LocalEvent;
		Object.keys(event)
			.map((k: string) => {
				newEvent[k] = this.prettyFormat(event[k])
			})

		return newEvent
	}

	private static prettyFormat(str: string): string {
		if (typeof str === 'string') {
			return str
				.replace(/\s+/ig, ' ')
				.replace(/<(?:.|\n)*?>/gm, '')
				.trim()
		}
    	return str
	}
}