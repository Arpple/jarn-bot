import cheerio from "cheerio"

export namespace Volforce {
	export const get = (html: string): number => {
		const $ = cheerio.load(html)
		return parseFloat($("#force_point").text())
	}

	export const url = (rivalId: string): string =>
		`https://p.eagate.573.jp/game/sdvx/v/p/playdata/rival/profile.html?rival_id=${rivalId}`
}
