addLayer("p", {
    name: "points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "points", // Name of prestige currency
    baseResource: "spacetime", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('multi', 21)) mult = mult.times(upgradeEffect('multi', 21))
        if (hasUpgrade('s', 11)) mult = mult.times(upgradeEffect('s', 11))
        return mult

    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        if (hasUpgrade('p', 41)) exp = exp.times(upgradeEffect('p', 41))
        if (hasUpgrade('exp', 11)) exp = exp.times(upgradeEffect('exp', 11))
        if (hasUpgrade('exp', 21)) exp = exp.pow(upgradeEffect('exp', 21))
        return exp
    },
    passiveGeneration() {
        let Gen = 0
        if(hasUpgrade('s',11)) Gen = 0.1
        if(hasUpgrade('u',41)) Gen += 0.9
        if(inChallenge('sst',11)) Gen = 0
        return Gen
    },
    autoUpgrade() {return hasMilestone('lv', 0)},
    hotkeys:[{key:"p",description:"P: Reset for points (universe 1)",onPress(){if (canReset(this.layer))doReset(this.layer);}}],
    infoboxes:{
            coolInfo: {
                title: "Points (Universe 1, Part 1/2)",
                titleStyle: {'color': '#8d8d8d'},
                body: "<b>Welcome to the first layer!</b> <br> Spacetime is your universal currency, which can be used for many things. <br> <i>Pro tip: Use the enter key to spam Points resets. (sorry mobile users)</i>",
                bodyStyle: {'background-color': "#313131"}
            }
        },
    branches:['e'],
    upgrades: {
        11: {
            title: "[#1] Start",
            description: "+1 spacetime per second.",
            cost: new Decimal(1),
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return !inChallenge('sst', 11)},


})