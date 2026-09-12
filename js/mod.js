let modInfo = {
	name: "The Generator Tree",
	author: "thecoolcookie366",
	pointsName: "money",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Cookie's Creations Server",
	discordLink: "https://discord.gg/aUbDYX5Z3a",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 296280,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.00",
	name: "The [noname] Update",
}

let changelog = `<h1>Changelog:</h1><br>
	<br>
	<h3>Changelog Guide: vA.BC </h3><br>
	A = big update <br>
	B = medium update <br>
	C = small update <br>
	<br>
	<h1>v1.00</h1><br>
		- I made this game... hi<br>
		<br>`

let winText = `<i>You prestiged your way to the end! Now... how about you wait for the next update?</i>`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
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
	if (hasUpgrade('awf', 11)) gain = gain.mul(25)
	if (hasUpgrade('awf', 12)) gain = gain.mul(50)
	if (hasUpgrade('med', 11)) gain = gain.mul(100)
	if (hasUpgrade('dia', 11)) gain = gain.mul(42)
	if (hasUpgrade('dia', 12)) gain = gain.mul(4.2)
	if (hasMilestone('p', 7)) gain = gain.mul(10)
	if (hasMilestone('p', 10)) gain = gain.mul(3.333)
	gain = gain.mul(player.awf.points.add(1))
	if (hasMilestone('p', 6)) gain = gain.mul(player.med.points.add(1).mul(player.points.pow(0.01)))
	if (hasMilestone('p', 10)) gain = gain.mul(player.alr.points.add(1).mul(player.points.pow(0.05)))
	gain = gain.mul(player.dia.points.add(1).pow(2.5))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.p.points.gte(new Decimal("11"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}