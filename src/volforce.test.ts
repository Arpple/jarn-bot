import test from "ava"
import { html } from "./fixture/volforce"
import { Volforce } from "./volforce"

test("create url from rival id", (assert) => {
	assert.is(
		Volforce.url("SV-1015-6216"),
		"https://p.eagate.573.jp/game/sdvx/v/p/playdata/rival/profile.html?rival_id=SV-1015-6216"
	)
})

test("read volforce from html", (assert) => {
	const vf = Volforce.get(html)
	assert.is(
		vf,
		18.07
	)
})
