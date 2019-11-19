import Discord, { Message } from "discord.js"
import dotenv from "dotenv"
import request from "request-promise-native"
import { Search } from "./search"
import { Volforce } from "./volforce"

dotenv.config()

const client = new Discord.Client()

const token = process.env.TOKEN
const cookie = process.env.COOKIE
const listenChannel = process.env.CHANNEL

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

const searchAndFilter = (html: string, keyword: string) => {
	return Search.tracks(html)
		.filter((x) => {
			const str = x.name.toLowerCase()
			return str.includes(keyword.toLowerCase())
		})
}

const search = async (message: Message) => {
	const msg = message.content
		.replace("!lv", "")
		.trimLeft()

	const split = msg.split(" ")
	const lv = parseInt(split[0])

	const url = Search.url(lv)
	const html: string = (await req(url)) as string

	if (split.length < 2)
		return Search.tracks(html)

	const keyword = split.slice(1).join(" ")

	return searchAndFilter(html, keyword)
}

client.on("ready", () => {
	return checkVolforce()
})

client.on("message", async (message) => {
	if (message.author.bot)
		return

	if (listenChannel && listenChannel !== message.channel.id)
		return

	if (message.content.startsWith("!lv")) {
		const tracks = await search(message)
		if (tracks.length > 0) {
			const exampleEmbed = new Discord.RichEmbed()
				.setColor("#0099ff")
				.setTitle(`Search ${message}`)
				.addField("Result", tracks.map(Search.trackString).join("\n"))

			message.channel.send(exampleEmbed)
		}
		else
			message.channel.send("Not Found :jarnsweat:")

		return
	}
})

client.login(token)
