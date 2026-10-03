let modInfo = {
	name: "The Generator Tree",
	author: "thecoolcookie366",
	pointsName: "money",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Cookie's Creations Server",
	discordLink: "https://discord.gg",
	initialStartPoints: new Decimal (10), 
	offlineLimit: 296280,  
}

let VERSION = {
	num: "1.1",
	name: "The Universe Update",
}

let changelog = `<h1>Changelog:</h1><br>
	<br>
	<h3>Changelog Guide: vA.BC </h3><br>
	A = big update <br>
	B = medium update <br>
	C = small update <br>
	<br>
	<h1>v1.1</h1><br>
		- Added Universes and challenges.<br>
		- Added Radiation.<br>
		- A bunch of other stuff... i forgor<br>
		<br>
	<h2>v1.03</h2><br>
		- The last 2 puzzle layers, which strangely don't have puzzles.<br>
		- Inflation goes crazy this update!<br>
		- Sorry, the update is short. I'll make something better in v1.1!<br>
		<br>
	<h3>v1.025</h3><br>
		- Added CMG. Have fun!<br>
		<br>
	<h2>v1.02</h2><br>
		- Added Primary and Secondary, 2/4 of the puzzles.<br>
		- Added 2 new generators, once again.<br>
		- Ascension. Enjoy!<br>
		- A lot more themes.<br>
		- A bunch of other things. So many I can't even count them all.<br>
		<br>
	<h2>v1.01</h2><br>
		- Added XP and Levels.<br>
		- Added 2 new generators.<br>
		- A bunch of other stuff.<br>
		<br>
	<h1>v1.00</h1><br>
		- I made this game... hi<br>
		<br>`

let winText = `<i>You prestiged your way to the end! Now... how about you wait for the next update?</i>`

var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

function canGenPoints(){
	return true
}

function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (hasMilestone('p', 0)) gain = gain.add(1)
	gain = gain.add(player.terri.points.pow(0.5))
    if (hasUpgrade('terri', 11)) gain = gain.mul(2)
	if (hasUpgrade('terri', 12)) gain = gain.mul(3)
	if (hasUpgrade('terri', 13)) gain = gain.mul(4)
	if (hasUpgrade('terri', 14)) gain = gain.mul(5)
	if (hasUpgrade('terri', 21)) gain = gain.mul(6)
	if (hasUpgrade('terri', 22)) gain = gain.mul(7)
	if (hasUpgrade('terri', 23)) gain = gain.mul(8)
	if (hasUpgrade('terri', 24)) gain = gain.mul(9)
	if (hasUpgrade('terri', 31)) gain = gain.mul(10)
	if (hasUpgrade('terri', 32)) gain = gain.mul(11)
	if (hasUpgrade('terri', 33)) gain = gain.mul(12)
	if (hasUpgrade('terri', 34)) gain = gain.mul(13)
	if (hasUpgrade('terri', 41)) gain = gain.mul(14)
	if (hasUpgrade('terri', 42)) gain = gain.mul(15)
	if (hasUpgrade('terri', 43)) gain = gain.mul(16)
	if (hasUpgrade('terri', 44)) gain = gain.mul(170)
	if (hasUpgrade('terri', 51)) gain = gain.mul(2500)
	if (hasUpgrade('terri', 52)) gain = gain.mul(25000)
	if (hasUpgrade('terri', 53)) gain = gain.mul(2.5e6)
	if (hasUpgrade('awf', 11)) gain = gain.mul(25)
	if (hasUpgrade('awf', 12)) gain = gain.mul(50)
	if (hasUpgrade('awf', 13)) gain = gain.mul(75)
	if (hasUpgrade('awf', 14)) gain = gain.mul(100)
	if (hasUpgrade('awf', 21)) gain = gain.mul(1e7)
	if (hasUpgrade('awf', 31)) gain = gain.mul(100)
	if (hasUpgrade('awf', 34)) gain = gain.mul(1e10)
	if (hasUpgrade('awf', 41)) gain = gain.mul(10)
	if (hasUpgrade('awf', 42)) gain = gain.mul("1e10")
	if (hasUpgrade('awf', 43)) gain = gain.mul("1e100")
	if (hasUpgrade('awf', 44)) gain = gain.mul("1e10000")
	if (hasUpgrade('med', 11)) gain = gain.mul(100)
	if (hasUpgrade('med', 12)) gain = gain.mul(1000)
	if (hasUpgrade('med', 13)) gain = gain.mul(1e8)
	if (hasUpgrade('alr', 11)) gain = gain.mul(12345)
	if (hasUpgrade('dia', 11)) gain = gain.mul(42)
	if (hasUpgrade('dia', 12)) gain = gain.mul(4.2)
	if (hasUpgrade('xp', 11)) gain = gain.mul(12.1212)
	if (hasUpgrade('xp', 12)) gain = gain.mul(225)
	if (hasUpgrade('xp', 13)) gain = gain.mul(550)
	if (hasUpgrade('xp', 14)) gain = gain.mul(1e45)
	if (hasMilestone('p', 7)) gain = gain.mul(10)
	if (hasMilestone('p', 10)) gain = gain.mul(3.333)
	if (hasMilestone('p', 13)) gain = gain.mul(1.00001)
	gain = gain.mul(player.awf.points.add(1))
	if (hasMilestone('p', 6)) gain = gain.mul(player.med.points.add(1).mul(player.points.pow(0.01)))
	if (hasMilestone('p', 10)) gain = gain.mul(player.alr.points.add(1).mul(player.points.pow(0.05)))
	if (hasMilestone('p', 19)) gain = gain.mul(player.alr.points.add(1).mul(player.points.pow(0.1)))
	if (hasMilestone('p', 29)) gain = gain.mul(player.good.points.add(1).mul(player.points.pow(0.2)))
	gain = gain.mul(player.dia.points.add(1).pow(2.5))
	if (hasMilestone('xp', 2)) gain = gain.mul(player.xp.points.add(1).pow(0.2))
	else if (hasMilestone('xp', 0)) gain = gain.mul(player.xp.points.add(1).pow(0.02))
	if (hasMilestone('lv', 1)) gain = gain.mul(10)
	if (hasAchievement('plv', 11)) gain = gain.mul(25)
	if (tmp.pri && tmp.pri.effect) gain = gain.mul(tmp.pri.effect)
	if (hasMilestone('snd', 0)) gain = gain.mul("2.22e22222")
	if (hasUpgrade('per', 42)) gain = gain.pow("1.001")
	if (hasUpgrade('per', 21)) gain = gain.pow("1.0025")
	if (hasUpgrade('per', 33)) gain = gain.pow("1.005")
	if (hasUpgrade('per', 43)) gain = gain.pow("1.01")
	if (hasAchievement('plv', 12)) gain = gain.pow("1.011")
	if (hasMilestone('terri', 1)) gain = gain.pow("1.025")
	if (hasUpgrade('per', 11)) gain = gain.pow("1.025")
	if (hasMilestone('awf', 0)) gain = gain.pow("1.05")
	if (hasUpgrade('med', 24)) gain = gain.pow("1.1")
	if (hasUpgrade('per', 12)) gain = gain.pow("1.2")
	if (hasMilestone('terri', 0)) gain = gain.pow("1.25")
	if (hasUpgrade('med', 23)) gain = gain.pow("1.5")
	if (hasUpgrade('per', 34)) gain = gain.pow("2")
	if (hasMilestone('a', 0) && player.p.points.lte("1e1000")) gain = gain.pow("2")
	if (hasUpgrade('per', 13)) gain = gain.pow("3")
	if (hasUpgrade('per', 22)) gain = gain.pow("4")
	if (hasMilestone('p', 35)) gain = gain.pow("1e6")
	if (hasMilestone('a', 0) && player.p.points.gte("1e1000")) gain = gain.pow("1e303")
	if (hasUpgrade('exc', 12)) gain = gain.pow("1e25000")
	if (hasUpgrade('ter', 21)) gain = gain.pow("1e1e6")
	if (hasUpgrade('per', 44)) gain = gain.pow(upgradeEffect('per', 44))
	if (hasUpgrade('qua', 11)) gain = gain.tetrate("1.000000000000001")
	if (hasMilestone('a', 3) && !hasUpgrade('flw',31)) gain = gain.pow("0")
	if (hasUpgrade('flw', 11)) gain = gain.add("1")
	if (hasUpgrade('flw', 12)) gain = gain.mul("25")
	if (hasUpgrade('flw', 13)) gain = gain.mul("1e6")
	if (hasUpgrade('flw', 14)) gain = gain.pow(upgradeEffect('flw', 14))
	if (hasUpgrade('flw', 21)) gain = gain.pow("27953")
	if (hasUpgrade('flw', 31)) gain = gain.pow("1e9.2e18")
	if (hasMilestone('a', 5) && !hasMilestone('a', 6)) gain = gain.pow("0")
	if (hasUpgrade('sup', 11)) gain = gain.mul("1e500000000")
	if (hasUpgrade('sup', 12)) gain = gain.tetrate("5")
	if (hasUpgrade('sup', 14) && player.points.layer) gain = gain.tetrate(player.points.layer)
	let applySoftcaps = !hasUpgrade('per', 14) || (hasUpgrade('per', 14) && player.points.gte("1e1e2e5") && !player.ter.points.gte(3.4e38));
	if (applySoftcaps) {
		let cap = new Decimal("1e1e9")
		if (gain.gte(cap)) {
			gain = cap.times(gain.div(cap).sqrt())
		}
		let cap2 = new Decimal("1e1e33")
		if (gain.gte(cap2)) {
			gain = cap2.times(gain.div(cap2).root(10))
		}
		let cap3 = new Decimal("1e1.796e308")
		if (gain.gte(cap3)) {
			gain = cap3.times(gain.div(cap3).log10().add(1))
		}
		if (hasUpgrade('per', 14) && player.points.gte("1e1e2e5")) {
			return new Decimal(0)
		}
	}
	if (!hasUpgrade('sup', 13)) {
		let hardcapValue = new Decimal("(e^6)2") 
		if (player.points.gte(hardcapValue)) {
			return new Decimal(0)
		}
		gain = gain.min(hardcapValue.sub(player.points).max(0))
	}
	let trueHardcapValue = new Decimal("(e^1e15)2")
	if (player.points.gte(trueHardcapValue)) {
		return new Decimal(0)
	}
	gain = gain.min(trueHardcapValue.sub(player.points).max(0))
	if (hasMilestone('univ', 1) && !hasChallenge('univ', 11) && (player.univ.challenges["21"] < 5)) gain = new Decimal("0")
	if (hasChallenge('univ', 11)) gain = Number(player.univ.challenges["21"] || 0) < 5 ? new Decimal("1") : gain.add(1)
	if (player['univ'].challenges[11] >= 2) gain = gain.mul(10)
	if (inChallenge('univ', 11)) {
		let comps = player['univ'].challenges[11] || 0
		if (comps == 0) gain = new Decimal("0.01")
		else if (comps == 1) gain = new Decimal("0.001")
		else if (comps > 1) gain = new Decimal("0")
	}
	if (inChallenge('univ', 12)) {
		let basePoints = player.points.gt(0) ? player.points : new Decimal(2)
		gain = basePoints
    	if (gain.gt("1e1e9")) gain = new Decimal("1e1e9")
	}
	if (hasUpgrade('abs', 11)) gain = gain.mul(2)
	if (hasUpgrade('abs', 13)) {
		let completions = player.univ.challenges[22] || 0
		gain = gain.mul(Decimal.pow(3, completions))
	}
	if (hasUpgrade('abs', 14)) {
		let completions = player.univ.challenges[22] || 0
		gain = gain.mul(Decimal.pow(5, completions))
	}
	if (hasUpgrade('abs', 21)) {
		let completions = player.univ.challenges[22] || 0
		gain = gain.mul(Decimal.pow(10, completions))
	}
	let infComps = player['univ'].challenges[31] || 0
	if (infComps > 0) {
		gain = gain.mul(Decimal.pow(10, infComps))
	}
	if (inChallenge('univ', 21)) {
		let completions = player['univ'].challenges[21] || 0
		if (completions == 0) gain = gain.pow(0.5)
		else if (completions == 1) gain = gain.pow(0.25)
		else if (completions == 2) gain = gain.pow(0.125)
		else if (completions == 3) gain = gain.pow(0.0625)
		else if (completions == 4) gain = gain.pow(0)
	}
	if (hasChallenge('univ', 21)) {
		let corruptComps = player['univ'].challenges[21] || 0
		if (corruptComps == 1) gain = gain.pow(1.025)
		else if (corruptComps == 2) gain = gain.pow(1.05)
		else if (corruptComps == 3) gain = gain.pow(1.1)
		else if (corruptComps >= 4) gain = gain.pow(1.2)
	}
	if (inChallenge('univ', 22)) {
		let completions = player['univ'].challenges[22] || 0
		let maxCap = new Decimal(1000).mul(Decimal.pow(1000, completions))
		if (hasUpgrade('abs', 22)) {
			let boostCompletions = player.univ.challenges[21] || 1
			maxCap = maxCap.mul(Decimal.pow(2500, boostCompletions))
		}
		if (hasUpgrade('abs', 23)) {
			let boosterCompletions = player.univ.challenges[21] || 1
			maxCap = maxCap.mul(Decimal.pow(25000, boosterCompletions))
		}
		if (hasUpgrade('abs', 24)) {
			let boostererCompletions = player.univ.challenges[21] || 1
			maxCap = maxCap.mul(Decimal.pow(250000, boostererCompletions))
		}
		if (hasUpgrade('abs', 31)) {
			maxCap = maxCap.mul(1e10)
		}
		if (hasUpgrade('abs', 32)) {
			maxCap = maxCap.mul(1e10)
		}
		if (hasUpgrade('abs', 33)) {
			maxCap = maxCap.mul(1e10)
		}
		if (hasUpgrade('abs', 34)) {
			maxCap = maxCap.mul(1e20)
		}
		if (hasUpgrade('abs', 41)) {
			maxCap = maxCap.mul(1e30)
		}
		if (hasUpgrade('abs', 42)) {
			maxCap = maxCap.mul(1e100)
		}
		if (hasUpgrade('abs', 43)) {
			maxCap = maxCap.mul("1e1000")
		}
		if (hasUpgrade('abs', 44)) {
			maxCap = maxCap.mul("1e10000")
		}
		if (hasUpgrade('abs', 51)) {
			maxCap = maxCap.mul("1e10000000")
		}
		if ((player.univ.challenges && player.univ.challenges[11]) >= 3) {
            maxCap = maxCap.pow(12)
        }
		if (hasUpgrade('abs', 52)) {
			maxCap = maxCap.pow("50")
		}
		if (hasUpgrade('abs', 43)) {
			gain = maxCap
		}
		else {
			let basePoints = player.points.gt(0) ? player.points : new Decimal(1.01)
			gain = basePoints
			if (gain.gt(maxCap)) gain = maxCap
		}
	}
	if (inChallenge('univ', 32)) {
		gain = gain.sqrt()
		let currentComps = player['univ'].challenges[32] || 0
		if (currentComps == 1) gain = gain.sqrt().sqrt()
		else if (currentComps > 1) gain = gain.sqrt().sqrt().sqrt()
	}
	if (player.rad) {
		if (player.rad.overloadtimer > 0) {
			gain = gain.pow(0.001)
		}
		else {
			gain = gain.pow(tmp.rad.effect)
		}
	}
	if (hasMilestone('univ', 2)) gain = new Decimal("0")
	return gain
}

function addedPlayerData() { 
	return {}
}

var displayThings = [
    function() {
        let noticeText = []

        if (!hasUpgrade('per', 14) || (hasUpgrade('per', 14) && player.points.gte("1e1e2e5") && !player.ter.points.gte(3.4e38))) {
            if (player.points.gte("1e1e9")) {
                noticeText.push("<span style='color: #ff7f7f; font-weight: bold; font-size: 14px;'>Softcap: Money gain square rooted past e1e9 money!</span>")
            }
            if (player.points.gte("1e1e33")) {
                noticeText.push("<span style='color: #ff4c4c; font-weight: bold; font-size: 14px;'>Softcap²: Money gain tenth rooted past e1e33 money!</span>")
            }
            if (player.points.gte("1e1.796e308")) {
                noticeText.push("<span style='color: #ff1111; font-weight: bold; font-size: 14px;'>Softcap³: Money gain is heavily rooted past e1.796e308 money!</span>")
            }
			if (hasUpgrade('per', 14) && player.points.gte("1e1e2e5")) {
                noticeText.push("<span style='color: #b70202; font-weight: bold; font-size: 14px;'>Hardcap?: Nuh uh, you won't get more than e1e200,000 money until you do something!</span>")
            }
        }

		if (!hasUpgrade('sup', 13)) {
			if (player.points.gte("(e^6)2")) {
				noticeText.push("<span style='color: #ca0aff; font-weight: bold; font-size: 14px;'>Hardcap: The physics of this universe cap you at 2.471F6 money!</span>")
			}
		}

		if (player.points.gte("(e^1e15)2")) {
			noticeText.push("<span style='color: #0a1aff; font-weight: bold; font-size: 14px;'>True Hardcap: The universe is breaking past F1e15 money...</span>")
		}

        return noticeText.join("<br>")
    }
]

function isEndgame() {
	return player.univ.points.gte(2)
}

var backgroundStyle = {

}

function maxTickLength() {
	return(3600) 
}

function fixOldSave(oldVersion){
}
