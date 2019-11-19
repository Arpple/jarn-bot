import { Util } from "./util"

export namespace Search {
	type Track = {
		readonly name: string
		readonly link: string
	}

	export const url = (level: number) =>
		`https://sdvx.in/sort/sort_${level}.htm`

	export const track = (line: string): Track | undefined => {
		const match = line.match(/<script>SORT(?<code>.+)(?<dif>.+)\(\);<\/script><!--(?<name>.+)-->/)
		if (!match || !match.groups)
			return

		const { name, code, dif } = match.groups
		const serieNum = code.substr(0, 2)
		const link = `https://sdvx.in/${serieNum}/${code}${dif.toLowerCase()}.htm`

		return { name, link }
	}

	export const tracks = (html: string): Track[] => {
		return html.trim()
			.split("\n")
			.map(track)
			.filter(Util.isDefined)
	}

	export const trackString = (t: Track): string =>
		`[${t.name}](${t.link})`
}
