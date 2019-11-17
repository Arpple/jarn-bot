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
			"Aerial Fortress",
			"ARROW RAIN",
			"Atropa bella-donna",
			"Aurolla",
			"Barbatos",
			"Barbless Ego",
			"Believe In Yourself",
			"Black Lotus",
			"Butterfly Twist",
			"Cloud Crasher",
			"Cynical Joker",
			"Dogeza Stairs",
			"eighth-slave",
			"Enchante",
			"FIRST：DREAMS",
			"GALAXY BURST",
			"GaLaXyEggPlanT",
			"Glorious Journey",
			"Jack-the-Ripper◆",
			"JUPITER 4 GRAVITY",
			"LECTORIA",
			"lEyl",
			"Liar rain",
			"mqlo",
			"Nhelv",
			"On take SUN",
			"ΩVERFLOW",
			"OZONE",
			"PARTY TIME!",
			"petits fours",
			"pique",
			"Pulsar",
			"rE:Voltagers",
			"SociuS",
			"Sudden Visitor",
			"Teufel",
			"To:BrandNewDeadline",
			"Typhoon Craaash!!",
			"V Sen5eS",
			"Xicholauncher",
			"アオアラシ",
			"タイムトラベル",
			"ツマミ戦隊 タテレンジャー",
			"ねこみみ(=ФωФ=)ぱんでみみっく",
			"び",
			"ミッドナイト☆WAR",
			"怪盗Fの台本～消えたダイヤの謎～",
			"最小三倍完全数",
			"消失(Hommarju Remix)",
			"翠雨の祷",
			"諏訪大信仰",
			"星の透る夏空に願う",
			"無魎大数",

			"ΣgO",
			"Erm, could it be a Spatiotemporal ShockWAVE Syndrome...?",
			"Akzeriyyuth",
			"ALTONA",
			"Be a Hero!",
			"BEAST BASS BOMB",
			"Beyond the BLUE",
			"Black night",
			"BLAZING_LAZER",
			"BlueMoon Princess",
			"Boss Rush",
			"Breakin' Asia",
			"Catch Our Fire!",
			"Cepheus",
			"CHERNOBOG",
			"Cloud 9",
			"Concertino in Blue",
			"crossing blue",
			"Destiny",
			"Divine's:Bugscript",
			"Divine's or Deal",
			"Doppelganger",
			"Dreadnought",
			"DropZ-Line-",
			"ECHIDNA",
			"Evans",
			"FIRE IN MY HEART",
			"FLOOR INFECTION Medley from SOUND VOLTEX×jubeat",
			"GAIA",
			"Gamerz FestivaL",
			"Gate of Atlantis",
			"GERBERA",
			"Ghost Trigger",
			"Glitter Flatter Scatter",
			"Goddess Bless you",
			"Gorgetech",
			"Grand-Guignol",
			"HP1",
			"Hug!! Vs. Hug!!",
			"НУМЛ",
			"Juggler's Maddness",
			"JUNKIE FLAVOR",
			"Khionos TiARA",
			"KIMIDORI Streak!!",
			"LastΩmegA",
			"Legendary Road",
			"Levier'n NabYss",
			"Lowermost revolt",
			"Lunatic Sprinter",
			"Make Magic",
			"MeteorGlow Aftermath",
			"Midnight City Warfare",
			"Mirrorwall",
			"MODEL FT4",
			"MONOLITH",
			"New Leaf",
			"Nexta",
			"Night Rockin' Bird",
			"Noisy Minority",
			"Nostalgic Blood of the Strife",
			"OPEN MY GATE",
			"ouroboros",
			"ΩVERSOUL",
			"POLICY BREAK Medley from SOUND VOLTEX×jubeat",
			"Prey",
			"PROVOES*PROPOSE <<el fine>>",
			"Puberty Dysthymia",
			"PUPA",
			"Re:End of a Dream",
			"Яe's NoVE",
			"Rebellio",
			"Reb∞t",
			"REDO the NIGHT",
			"Redshift",
			"RHYZING BEAT",
			"Sacrifice and Faith",
			"SACRIFICE feat.ayame",
			"SAtAN",
			"Scarlet Lance",
			"She Turns Me On",
			"Sky High",
			"#SpeedyCats",
			"Spirit of the Beast",
			"STULTI",
			"SUPER SUMMER SALE",
			"Sweet Requiem",
			"Taiko Drum Monster",
			"The Formula",
			"The Golden Era",
			"THE HEAVEN",
			"Theme of Ricerca",
			"Touch My Body",
			"TRICKL4SH 220",
			"ULTiMATE INFLATiON",
			"ULTRAVELOCITY",
			"V",
			"Venomous Firefly",
			"Victim of Nights",
			"We Go Down",
			"Wings of Glory",
			"Xevel",
			"Yum Yum Sweetie",
			"お米",
			"オニユリ",
			"キュリオシティ",
			"サイコパスラビット",
			"スラッシュシスターズ",
			"セイクリッド ルイン",
			"そして黄金郷へ",
			"ドリームエンド・サバイバー",
			"のぼれ八坂坂！",
			"びいすと！",
			"ファイナルレター",
			"ホワイトパレード",
			"まじかる生主＠りすなちゃん",
			"メイビ～初恋！？ビスケット☆大作戦",
			"ワールズエンド・ダンスホール",
			"怒槌",
			"永遠に幸せになる方法、見つけました。",
			"壊Rave*it!! 壊Rave*it!!",
			"神獄烙桜",
			"恋歌疾風！かるたクイーンいろは",
			"業焔繚乱",
			"極彩天奏",
			"祝福の色彩は想い結ぶ君たち迄",
			"準備運動",
			"神話に芽吹く",
			"水簾ノ調",
			"誰が為に兎は舞う＝狂速狂騒曲＝",
			"超☆超☆光☆速☆出☆前☆最☆速!!! スピード★スター★かなで",
			"†渚の小悪魔ラヴリィ～レイディオ†",
			"光射す澪のユズリハ",
			"真っ白な靴",
			"雷鼓サンダービート",

			"ΣmbryO",
			"*Feels Seasickness...*",
			"FIN4LE ～終止線の彼方へ～",
			"Fin.ArcDeaR",
			"I",
			"KAC 2013 Empress Side",
			"WHITEOUT",
			"Xronier",
			"Garakuta Doll Play",
			"Angelic Jelly",
			"Celestial stinger",
			"Completeness Under Incompleteness",
			"HAELE III ~Angel Worlds~",
			"KAC 2012 ULTIMATE MEDLEY",
			"NEO TREASON",
			"Ok!! Hug Me",
			"Opium and Purple haze",
			"Renegade Fruits",
			"Triple Counter",
			"XROSS THE XOUL",
			"↓↓↓",
			"ΑΩ-",
			"Angels And Demons",
			"Blastix Riotz",
			"Demise Quartet",
			"EMPIRE OF FLAME",
			"#Endroll",
			"End to end",
			"Endless GRAVITY",
			"Firestorm",
			"FLOWER",
			"FL&#0252;geL《Λrp:Σggy&#216;》",
			"Fox4-Raize-",
			"GEOMETRIA",
			"gigadelic (かめりあ's The TERA RMX)",
			"HAVOX",
			"IKAROS DYNAMITE!!!!",
			"INF-B《L-aste-R》",
			"Invitation from Mr.C",
			"JEHANNEDARC",
			"KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Emperor Side",
			"Lachryma《Re:Queen'M》",
			"LegenD.",
			"MG277",
			"NEO GRAVITY",
			"Ops:Code-Rapture-",
			"Pon-Pon-Pompoko Dai-Sen-Saw!",
			"Prayer",
			"Preserved Valkyria",
			"Quaint Echo",
			"REVOLVER",
			"Sayonara Planet Wars",
			"Seraphim",
			"Solar Storm",
			"tricky trick",
			"Ultimate Ascension",
			"UnivEarth",
			"veRtrageS",
			"Warriors Aboot",
			"World's end",
			"XHAOS JUDGE",
			"XyHATTE",
			"アルティメットトゥルース -Phantasm-",
			"きたさいたま2000",
			"ドーパミン",
			"マサカリブレイド",
			"ムラサキグルマ",
			"極圏",
			"月光乱舞",
			"混乱少女&#9829;そふらんちゃん!!",
			"侍 Annihilate!!",
			"灼熱Beach Side Bunny",
			"消失",
			"絶対零度",
			"到達してしまった僕らと夢と希望の最之果",
			"東方妖々夢 ULTIMATE MEDLEY",
			"伐折羅-vajra-",
			"冥天・ヘメカリス",
			"Joyeuse",
			"Sakura Reflection (P*Light Slayer Remix)",
			"Unicorn tail Dustboxxxx RMX",
			"こちら、幸福安心委員会です。",
			"C18H27NO3",
			"Harpuia",
			"Idola",
			"Qubism",
			"超越してしまった彼女と其を生み落した理由",
			"魔境堕天録サリエル",
			"CODE -CRiMSON-",
			"Crack Traxxxx",
			"Hellfire",
			"Last Concerto",
			"Wish upon Twin Stars",
			"最終鬼畜妹フランドール・S",
			"Bangin' Burst",
			"Black Emperor",
			"BLACK or WHITE?",
			"For UltraPlayers",
			"Growth Memories",
			"INSECTICIDE",
			"VALLIS-NERIA",
			"VILE CAT",
			"werewolf howls.",
			"Broken 8cmix",
			"Evans VolteX Pf arrange",
			"Onigo",
			"The world of sound",
			"V.I.P.",
			"金縛りの逢を",
			"腐れ外道とチョコレゐト",
			"幻想のサテライト",
			"孤独の番人",
			"Absurd Gaff",
			"PANIC HOLIC",
			"Xepher Light and Darkness Dragon Remix",
			"魔理沙は大変なものを盗んでいきました",
			"croiX",
			"FLOWER REDALiCE Remix",
			"Max Burning!!",
			"冥 Rockin' SWING REMIX"
		]
	)
})