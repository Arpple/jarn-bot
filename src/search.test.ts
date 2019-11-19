import test from "ava"
import { html } from "./fixture/search"
import { Search } from "./search"

test("create url from level", (assert) => {
	assert.is(
		Search.url(18),
		"https://sdvx.in/sort/sort_18.htm"
	)
})

test("get track list from html", (assert) => {
	assert.deepEqual(
		Search.tracks(html),
		[
			{
				name: "Aerial Fortress",
				link: "https://sdvx.in/05/05116m.htm"
			},
			{
				name: "ΣgO",
				link: "https://sdvx.in/05/05117e.htm"
			},
			{
				name: "Akzeriyyuth",
				link: "https://sdvx.in/04/04349m.htm"
			}
		]
	)
})

test("extract track from html <script>", (assert) => {
	const track = Search.track("<script>SORT03145E();</script><!--UnivEarth-->")
	assert.is(track!.name, "UnivEarth")
	assert.is(track!.link, "https://sdvx.in/03/03145e.htm")
})

test("convert to string", (assert) => {
	const str = Search.trackString({ name: "Track", link: "sdvx.in/12" })
	assert.is(str, "[Track](sdvx.in/12)")
})
