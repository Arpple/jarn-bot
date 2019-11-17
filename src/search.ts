import cheerio from "cheerio"

export namespace Search {
	export const url = (level: number) =>
		`https://sdvx.in/sort/sort_${level}.htm`

	export const tracks = (html: string): string[] => {
		return html.trim()
			.split("\n")
			.map((line) => line.match(/<script>SORT.+\(\);<\/script><!--(.+)-->/))
			.filter((x) => x)
			// tslint:disable-next-line:no-non-null-assertion
			.map((x) => x![1])
	}
}
