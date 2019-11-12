const Discord = require('discord.js');
const client = new Discord.Client();
import request from "request-promise-native"
import cheerio from "cheerio"
import dotenv from "dotenv"

dotenv.config()

const token = process.env.TOKEN
const cookie = process.env.COOKIE

const req = request.defaults({ jar: true })
const hour = 60 * 60 * 1000

const page = () => {
	return req("https://p.eagate.573.jp/game/sdvx/v/p/playdata/rival/profile.html?rival_id=SV-1015-6216", {
		headers: {
			Cookie: cookie
		}
	})

}

const volforce = async () => {
	const $ = cheerio.load(await page())
	return $("#force_point").text()
}

const setStatus = (vf) => {
	client.user.setActivity(`VFs ${vf}`, { type: "PLAYING" })
}

const checkVolforce = async () => {
	setStatus(await volforce())

	setTimeout(checkVolforce, hour);
}

client.on('ready', () => {
	checkVolforce()
});

client.login(token);
