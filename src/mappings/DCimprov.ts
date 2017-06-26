import { LocalEvent } from '../types'
import { text, html, href, bool, getFormatted} from '../utils'

export default (events: Element[]): LocalEvent[] => {
	return events.map((e) => getFormatted({
		title: text(e.querySelector('h2 a')),
		dates: text(e.querySelector('.scheduledate')),
		time: text(e.querySelector('.times .doors')),
		price: text(e.querySelector('.price-range')),
		ticketLink: href(e.querySelector('.tickets')),
		soldOut: bool(href(e.querySelector('.tickets'))),
		info: text(e.querySelector('p')),
		additionalInfo: text(e.querySelector('.additional-event-info p'))
	}))
}
