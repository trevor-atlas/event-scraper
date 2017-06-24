import { LocalEvent, DomMapper } from './types'
import { JSDOM } from '@types/jsdom'

export class URLParser {
	constructor(
		private url: string,
		public mapper: DomMapper,
		private options: {},
		private parser: any) { }

	public init(): Promise<string> {
		return new Promise((resolve, reject) => this.parser.fromURL(this.url, this.options)
			.then((dom: JSDOM) => {
				resolve(this.mapper.mapDomToJson(dom))
			})
		)
	}
}