import Discord, { Message } from "discord.js"
import dotenv from "dotenv"
import request from "request-promise-native"
import { Search } from "./search"
import { Volforce } from "./volforce"

dotenv.config()

const client = new Discord.Client()

const token = process.env.TOKEN
const cookie = process.env.COOKIE

const req = request.defaults({ jar: true })
const hour = 60 * 60 * 1000

const jarnId = "SV-1015-6216"

const page = (): Promise<string> => {
	return req(Volforce.url(jarnId), {
		headers: {
			Cookie: cookie
		}
	})
}

const setStatus = (vf: number) => {
	return client.user.setActivity(`VFs ${vf}`, { type: "PLAYING" })
}

const checkVolforce = async () => {
	const html = await page()
	const vf = Volforce.get(html)
	setStatus(vf)

	setTimeout(checkVolforce, hour)
}

const search = async (message: Message) => {
	const msg = message.content
		.replace("!lv", "")
		.trimLeft()

	const split = msg.split(" ")
	const lv = parseInt(split[0])
	const keyword = split.slice(1).join(" ")

	const url = Search.url(lv)
	const html: string = (await req(url)) as string
	return Search.tracks(html)
		.filter((x) => {
			const str = x.toLowerCase()
			return str.includes(keyword.toLowerCase())
		})
}

client.on("ready", () => {
	return checkVolforce()
})

client.on("message", async (message) => {
	if (message.author.bot)
		return

	if (message.content.startsWith("!lv")) {
		const tracks = await search(message)
		if (tracks.length > 0)
			message.channel.send(tracks.join("\n").substr(0, 2000))
		else
			message.channel.send("Not Found :jarnsweat:")
	}
})

client.login(token)
