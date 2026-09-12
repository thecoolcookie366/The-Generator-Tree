addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#545454",
    nodeStyle: {
        background: "linear-gradient( #ff0000, #000000, #0000ff)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(255, 255, 255)",
    },
    tooltip() { 
        return "Prestige " + formatWhole(player[this.layer].points); 
    },
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestiges", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return true},
    milestones: {
        0: {
        requirementDescription: "<h3><span>Prestige I</span></h3>",
        effectDescription: "<i>Start generating 1 money per second.</i>",
        done() { return player.p.points.gte(1) },
        },
        1: {
        requirementDescription: "<h3><span style='color:#ff0000;'>Prestige II</span></h3>",
        effectDescription: "<i>Unlock Terrible Generators.</i>",
        done() { return player.p.points.gte(2) },
        },
        2: {
        requirementDescription: "<h3><span style='color:#ff0000;'>Prestige III</span></h3>",
        effectDescription: "<i>Unlock Terrible Generator upgrades.</i>",
        done() { return player.p.points.gte(3) },
        },
        3: {
        requirementDescription: "<h3><span style='color:#d42a00;'>Prestige IV</span></h3>",
        effectDescription: "<i>Unlock Awful Generators.</i>",
        done() { return player.p.points.gte(4) },
        },
        4: {
        requirementDescription: "<h3><span style='color:#00ffff;'>Prestige V</span></h3>",
        effectDescription: "<i>Unlock Diamonds.</i>",
        done() { return player.p.points.gte(5) },
        },
        5: {
        requirementDescription: "<h3><span style='color:#d42a00;'>Prestige VI</span></h3>",
        effectDescription: "<i>Unlock Awful Generator Upgrades.</i>",
        done() { return player.p.points.gte(6) },
        },
        6: {
        requirementDescription: "<h3><span style='color:#a95600;'>Prestige VII</span></h3>",
        effectDescription: "<i>Unlock Mediocre Generators.</i>",
        done() { return player.p.points.gte(7) },
        },
        7: {
        requirementDescription: "<h3><span style='color:#00ffff;'>Prestige VIII</span></h3>",
        effectDescription: "<i>Unlock Diamond Upgrades, and x10 money.</i>",
        done() { return player.p.points.gte(8) },
        },
        8: {
        requirementDescription: "<h3><span style='color:#a95600;'>Prestige IX</span></h3>",
        effectDescription: "<i>Unlock Mediocre Generator upgrades.</i>",
        done() { return player.p.points.gte(9) },
        },
        9: {
        requirementDescription: "<h3><span>Prestige X</span></h3>",
        effectDescription: "<i>x3.333 money.</i>",
        done() { return player.p.points.gte(10) },
        },
        10: {
        requirementDescription: "<h3><span style='color:#7e8100;'>Prestige XI</span></h3>",
        effectDescription: "<i>Unlock Alright Generators.</i>",
        done() { return player.p.points.gte(11) },
        },
    },
    //hotkeys:[{key:"p",description:"P: Reset for points (universe 1)",onPress(){if (canReset(this.layer))doReset(this.layer);}}],
    branches:[''],
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},


})

addLayer("terri", {
    name: "terri", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "α", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Terrible Generators"; 
    },
    requires: new Decimal(30), // Can be a function that takes requirement increases into account
    resource: "terrible generators", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',1)},
    autoPrestige() {return hasMilestone('p',1)},
    canBuyMax() {return hasMilestone('p',1)},
    clickables: {
        11: {
           display() { return "Terrible Generators are adding<br>+" + (player.terri.points.pow(0.5)) + "<br>to your money base" + "" },
           tooltip() { return false},
           canClick() { return false },
           color() { return "#000000" },
        },
    },
    upgrades: {
        11: {
            title: "This is terrible!",
            description: "x2 money.",
            cost: new Decimal(3),
            unlocked(){return hasMilestone('p',2)},
        },
        12: {
            title: "How about something new?",
            description: "x3 money.",
            cost: new Decimal(4),
            unlocked(){return hasMilestone('p',2)},
        },
        13: {
            title: "Maybe??",
            description: "x4 money.",
            cost: new Decimal(5),
            unlocked(){return hasMilestone('p',2)},
        },
        14: {
            title: "Finally Understanding",
            description: "x5 money.",
            cost: new Decimal(10),
            unlocked(){return hasMilestone('p',3)},
        },
        21: {
            title: "When all else fails...",
            description: "x6 money.",
            cost: new Decimal(12),
            unlocked(){return hasMilestone('p',3)},
        },
        22: {
            title: "What do you think?",
            description: "x7 money.",
            cost: new Decimal(14),
            unlocked(){return hasMilestone('p',3)},
        },
        23: {
            title: "This is why this is terrible",
            description: "x8 money.",
            cost: new Decimal(22),
            unlocked(){return hasMilestone('p',4)},
        },
        24: {
            title: "The finale",
            description: "x9 money.",
            cost: new Decimal(32),
            unlocked(){return hasMilestone('p',4)},
        },
        31: {
            title: "The end is never",
            description: "x10 money.",
            cost: new Decimal(39),
            unlocked(){return hasMilestone('p',6)},
        },
        32: {
            title: "The answer to life... is generators.",
            description: "x11 money.",
            cost: new Decimal(42),
            unlocked(){return hasMilestone('p',6)},
        },
        33: {
            title: "Enough already!",
            description: "x12 money.",
            cost: new Decimal(47),
            unlocked(){return hasMilestone('p',6)},
        },
        34: {
            title: "4 more upgrades",
            description: "x13 money.",
            cost: new Decimal(59),
            unlocked(){return hasMilestone('p',7)},
        },
        41: {
            title: "So much multi...",
            description: "x14 money.",
            cost: new Decimal(70),
            unlocked(){return hasMilestone('p',8)},
        },
        42: {
            title: "Nearing an end",
            description: "x15 money.",
            cost: new Decimal(74),
            unlocked(){return hasMilestone('p',8)},
        },
        43: {
            title: "One more...",
            description: "x16 money.",
            cost: new Decimal(78),
            unlocked(){return hasMilestone('p',8)},
        },
        44: {
            title: "The end of terrible upgrades...",
            description: "x17<i>0</i> money.",
            cost: new Decimal(89),
            unlocked(){return hasMilestone('p',9)},
        },
    },
    branches:['p'],
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',1)},


})

addLayer("awf", {
    name: "awf", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "β", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#d42a00",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Awful Generators"; 
    },
    requires: new Decimal(8), // Can be a function that takes requirement increases into account
    resource: "awful generators", // Name of prestige currency
    baseResource: "terrible generators", // Name of resource prestige is based on
    baseAmount() {return player.terri.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',3)},
    autoPrestige() {return hasMilestone('p',3)},
    canBuyMax() {return hasMilestone('p',3)},
        clickables: {
        11: {
           display() { return "Awful Generators are multiplying your money by <br>x" + (player.awf.points.add(1)) + "" },
           tooltip() { return false},
           canClick() { return false },
           color() { return "#000000" },
        },
    },
    upgrades: {
        11: {
            title: "The not so finale",
            description: "x25 money.",
            cost: new Decimal(4),
            unlocked(){return hasMilestone('p',5)},
        },
        12: {
            title: "Inbetween",
            description: "x50 money.",
            cost: new Decimal(10),
            unlocked(){return hasMilestone('p',8)},
        },
    },
    branches:['terri'],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',3)},


})

addLayer("med", {
    name: "med", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "γ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a95600",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Mediocre Generators"; 
    },
    requires: new Decimal(6), // Can be a function that takes requirement increases into account
    resource: "mediocre generators", // Name of prestige currency
    baseResource: "awful generators", // Name of resource prestige is based on
    baseAmount() {return player.awf.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.6, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',6)},
    autoPrestige() {return hasMilestone('p',6)},
    canBuyMax() {return hasMilestone('p',6)},
    clickables: {
        11: {
           display() { return "Mediocre Generators and Money are multiplying your money by <br>x" + (player.med.points.add(1).mul(player.points.pow(0.01))) + "" },
           tooltip() { return false},
           canClick() { return false },
           color() { return "#000000" },
        },
    },
    upgrades: {
        11: {
            title: "Multiplied",
            description: "x100 money.",
            cost: new Decimal(2),
            unlocked(){return hasMilestone('p',8)},
        },
    },
    branches:['awf'],
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',6)},


})

addLayer("alr", {
    name: "alr", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "δ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#7e8100",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Alright Generators"; 
    },
    requires: new Decimal(2), // Can be a function that takes requirement increases into account
    resource: "alright generators", // Name of prestige currency
    baseResource: "mediocre generators", // Name of resource prestige is based on
    baseAmount() {return player.med.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',10)},
    autoPrestige() {return hasMilestone('p',10)},
    canBuyMax() {return hasMilestone('p',10)},
    clickables: {
        11: {
           display() { return "Alright Generators and Money are multiplying your money by <br>x" + (player.alr.points.add(1).mul(player.points.pow(0.05))) + "" },
           tooltip() { return false},
           canClick() { return false },
           color() { return "#000000" },
        },
    },
    branches:['med'],
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',10)},


})

addLayer("dia", {
    name: "dia", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💎", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00ffff",
    nodeStyle: {
        background: "linear-gradient( #00ffff, #000000)",
       backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
       color: "rgb(0, 0, 0)",
    },
     tooltip() { 
        return formatWhole(player[this.layer].points) + " Diamonds"; 
    },
    requires: new Decimal(1e6), // Can be a function that takes requirement increases into account
    resource: "diamonds", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',4)},
    autoPrestige() {return hasMilestone('p',4)},
    canBuyMax() {return hasMilestone('p',4)},
    clickables: {
        11: {
           display() { return "Diamonds are multiplying your money by <br>x" + (player.dia.points.add(1).pow(2.5)) + "" },
           tooltip() { return false},
           canClick() { return false },
           color() { return "#000000" },
        },
    },
    upgrades: {
        11: {
            title: "Generic boost",
            description: "x42 money.",
            cost: new Decimal(7),
            unlocked(){return hasMilestone('p',7)},
        },
        12: {
            title: "More generic boost",
            description: "x4.2 money.",
            cost: new Decimal(10),
            unlocked(){return hasMilestone('p',9)},
        },
    },
    branches:['awf'],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',4)},


})