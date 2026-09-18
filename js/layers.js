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
    canBuyMax() {return hasMilestone('p',27) || hasMilestone('a',0)},
    autoPrestige() {return hasMilestone('snd',0) || hasMilestone('a',0)},
    onReset() {if (player.points.lte(1)) player.points = new Decimal (1)},
    onReset() {if (hasUpgrade('per', 24)) player.p.points = player.p.points.mul(11)},
    effectDescription() {
        return 'here is the color index:<br>'+
               '<span style="color: #5cb85c; font-weight: bold; font-size: 14px;">Green</span> means first milestone.<br>' +
               '<span style="color: #ff4d4d; font-weight: bold; font-size: 14px;">Red</span> means last milestone.<br>' +
               '<span style="color: #f4e50b; font-weight: bold; font-size: 14px;">Yellow</span> means new generator.<br>' +
               '<span style="color: #0f0bf4; font-weight: bold; font-size: 14px;">Blue</span> means new side layer.<br>' +
               '<span style="color: #f4780b; font-weight: bold; font-size: 14px;">Orange</span> means new layer upgrades.<br>' +
               '<span style="color: #9f0bf4; font-weight: bold; font-size: 14px;">Purple</span> means other boosts.<br>' +
               '<span style="color: #0bf4e1; font-weight: bold; font-size: 14px;">Cyan</span> means new bonus upgrades.<br>' +
               '<span style="color: #f40bcd; font-weight: bold; font-size: 14px;">Pink</span> means QoL features.<br>' +
               '<span style="color: #404040; font-weight: bold; font-size: 14px;">Black</span> means a part of a rant.<br><br>'+
               'The text colors on a milestone mean what layer the milestone affects.<br>'+
               'No color means it is a general boost.'
    },
    milestones: {
        0: {
        requirementDescription: "<h3><span>Prestige I</span></h3>",
        effectDescription: "<i>Start generating 1 money per second.</i>",
        done() { return player.p.points.gte(1) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#085408',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ff00',
                        'border-color': '#00ff00'
                    }
                }
            },
        },
        1: {
        requirementDescription: "<h3><span style='color:#ff0000;'>Prestige II</span></h3>",
        effectDescription: "<i>Unlock Terrible Generators.</i>",
        done() { return player.p.points.gte(2) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        2: {
        requirementDescription: "<h3><span style='color:#ff0000;'>Prestige III</span></h3>",
        effectDescription: "<i>Unlock Terrible Generator upgrades.</i>",
        done() { return player.p.points.gte(3) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        3: {
        requirementDescription: "<h3><span style='color:#d42a00;'>Prestige IV</span></h3>",
        effectDescription: "<i>Unlock Awful Generators.</i>",
        done() { return player.p.points.gte(4) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        4: {
        requirementDescription: "<h3><span style='color:#00ffff;'>Prestige V</span></h3>",
        effectDescription: "<i>Unlock Diamonds.</i>",
        done() { return player.p.points.gte(5) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#080954',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #0000ff',
                        'border-color': '#0000ff'
                    }
                }
            },
        },
        5: {
        requirementDescription: "<h3><span style='color:#d42a00;'>Prestige VI</span></h3>",
        effectDescription: "<i>Unlock Awful Generator Upgrades.</i>",
        done() { return player.p.points.gte(6) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        6: {
        requirementDescription: "<h3><span style='color:#a95600;'>Prestige VII</span></h3>",
        effectDescription: "<i>Unlock Mediocre Generators.</i>",
        done() { return player.p.points.gte(7) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        7: {
        requirementDescription: "<h3><span style='color:#00ffff;'>Prestige VIII</span></h3>",
        effectDescription: "<i>Unlock Diamond Upgrades, and x10 money.</i>",
        done() { return player.p.points.gte(8) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        8: {
        requirementDescription: "<h3><span style='color:#a95600;'>Prestige IX</span></h3>",
        effectDescription: "<i>Unlock Mediocre Generator upgrades.</i>",
        done() { return player.p.points.gte(9) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        9: {
        requirementDescription: "<h3><span>Prestige X</span></h3>",
        effectDescription: "<i>x3.333 money.</i>",
        done() { return player.p.points.gte(10) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#400854',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #bb00ff',
                        'border-color': '#bb00ff'
                    }
                }
            },
        },
        10: {
        requirementDescription: "<h3><span style='color:#7e8100;'>Prestige XI</span></h3>",
        effectDescription: "<i>Unlock Alright Generators.</i>",
        done() { return player.p.points.gte(11) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        11: {
        requirementDescription: "<h3><span style='color:#0000bb;'>Prestige XII</span></h3>",
        effectDescription: "<i>Unlock XP.</i>",
        done() { return player.p.points.gte(12) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#080954',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #0000ff',
                        'border-color': '#0000ff'
                    }
                }
            },
        },
        12: {
        requirementDescription: "<h3><span style='color:#bb0000;'>Prestige XIII</span></h3>",
        effectDescription: "<i>Unlock Levels.</i>",
        done() { return player.p.points.gte(13) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#080954',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #0000ff',
                        'border-color': '#0000ff'
                    }
                }
            },
        },
        13: {
        requirementDescription: "<h3><span>Prestige XIV</span></h3>",
        effectDescription: "<i>An ever so slightly helpful x1.00001 money boost.</i>",
        done() { return player.p.points.gte(14) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#400854',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #bb00ff',
                        'border-color': '#bb00ff'
                    }
                }
            },
        },
        14: {
        requirementDescription: "<h3><span style='color:#ffd700;'>Prest</span></h3><h3><span style='color:#7e8100;'>ige XV</span></h3>",
        effectDescription: "<i>Unlock 1 bonus upgrade. Alright Generator Upgrades too.</i>",
        done() { return player.p.points.gte(15) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#084f54',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ffff',
                        'border-color': '#00ffff'
                    }
                }
            },
        },
        15: {
        requirementDescription: "<h3><span style='color:#ffd700;'>Prestige XVI</span></h3>",
        effectDescription: "<i>Unlock another bonus upgrade.</i>",
        done() { return player.p.points.gte(16) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#084f54',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ffff',
                        'border-color': '#00ffff'
                    }
                }
            },
        },
        16: {
        requirementDescription: "<h3><span style='color:#ffd700;'>Prestige XVII</span></h3>",
        effectDescription: "<i>Let's just do one more...</i>",
        done() { return player.p.points.gte(17) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#084f54',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ffff',
                        'border-color': '#00ffff'
                    }
                }
            },
        },
        17: {
        requirementDescription: "<h3><span style='color:#ffd700;'>Prestige XVIII</span></h3>",
        effectDescription: "<i>Okay last one.</i>",
        done() { return player.p.points.gte(18) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#084f54',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ffff',
                        'border-color': '#00ffff'
                    }
                }
            },
        },
        18: {
        requirementDescription: "<h3><span style='color:#d42a00;'>Prestige XIX</span></h3>",
        effectDescription: "<i>Some more upgrades that will boost terrible generation.</i>",
        done() { return player.p.points.gte(19) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        19: {
        requirementDescription: "<h3><span style='color:#53ac00;'>Prestige XX</span></h3>",
        effectDescription: "<i>Unlock Decent Generators.</i>",
        done() { return player.p.points.gte(20) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        20: {
        requirementDescription: "<h3><span>Prestige XXI</span></h3>",
        effectDescription: "<i>Okay welcome to my little rant that will last for about 4 prestiges.</i>",
        done() { return player.p.points.gte(21) },
        unlocked() { return player.p.points.gte(21) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #606060',
                        'border-color': '#606060'
                    }
                }
            },
        },
        21: {
        requirementDescription: "<h3><span>Prestige XXII</span></h3>",
        effectDescription: "<i>You might be wondering - Why aren't we getting boosts?</i>",
        done() { return player.p.points.gte(22) },
        unlocked() { return player.p.points.gte(22) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #606060',
                        'border-color': '#606060'
                    }
                }
            },
        },
        22: {
        requirementDescription: "<h3><span>Prestige XXIII</span></h3>",
        effectDescription: "<i>Well you see, I gave decent generators a little too much boost...</i>",
        done() { return player.p.points.gte(23) },
        unlocked() { return player.p.points.gte(23) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #606060',
                        'border-color': '#606060'
                    }
                }
            },
        },
        23: {
        requirementDescription: "<h3><span>Prestige XXIV</span></h3>",
        effectDescription: "<i>So I had to skip a few prestige effects. Okay my rant is over, enjoy the prestige 25 boost!</i>",
        done() { return player.p.points.gte(24) },
        unlocked() { return player.p.points.gte(24) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #606060',
                        'border-color': '#606060'
                    }
                }
            },
        },
        24: {
        requirementDescription: "<h3><span style='color:#7e8100;'>Prestige XXV</span></h3>",
        effectDescription: "<i>A few more generation upgrades in Alright Generators... (one)</i>",
        done() { return player.p.points.gte(25) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        25: {
        requirementDescription: "<h3><span>Prestige XXVI</span></h3>",
        effectDescription: "<i>Hi! I'll skip most of the prestige milestones for you, otherwise your save will become 20MB.</i>",
        done() { return player.p.points.gte(26) },
        unlocked() { return player.p.points.gte(26) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #606060',
                        'border-color': '#606060'
                    }
                }
            },
        },
        26: {
        requirementDescription: "<h3><span style='color:#0000bb;'>Prestige XXVII</span></h3>",
        effectDescription: "<i>How much XP? Yeah increase the cap by ^5.</i>",
        done() { return player.p.points.gte(27) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#400854',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #bb00ff',
                        'border-color': '#bb00ff'
                    }
                }
            },
        },
        27: {
        requirementDescription: "<h3><span style='color:#ff0000;'>Pres</span></h3><h3><span style='color:#000000;'>tig</span></h3><h3><span style='color:#0000ff;'>e XLV</span></h3>",
        effectDescription: "<i>You can now bulk buy prestiges. Also, 1 diamond a second, capping out at 100.</i>",
        done() { return player.p.points.gte(45) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#540838',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff00ff',
                        'border-color': '#ff00ff'
                    }
                }
            },
        },
        28: {
        requirementDescription: "<h3><span style='color:#bb0000;'>Prestige LX</span></h3>",
        effectDescription: "<i>You can now bulk buy levels.</i>",
        done() { return player.p.points.gte(60) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#540838',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff00ff',
                        'border-color': '#ff00ff'
                    }
                }
            },
        },
        29: {
        requirementDescription: "<h3><span style='color:#28d700;'>Prestige CCX</span></h3>",
        effectDescription: "<i>Unlock Good Generators.</i>",
        done() { return player.p.points.gte(210) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        30: {
        requirementDescription: "<h3><span style='color:#455666;'>Prestige CCXL</span></h3>",
        effectDescription: "<i>Unlock Primary.</i>",
        done() { return player.p.points.gte(240) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#080954',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #0000ff',
                        'border-color': '#0000ff'
                    }
                }
            },
        },
        31: {
        requirementDescription: "<h3><span style='color:#35658d;'>Prestige CCLXX</span></h3>",
        effectDescription: "<i>Unlock Secondary, also unlock auto Primary.</i>",
        done() { return player.p.points.gte(270) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#080954',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #0000ff',
                        'border-color': '#0000ff'
                    }
                }
            },
        },
        32: {
        requirementDescription: "<h3><span style='color:#a95600;'>Prestige DLXVI</span></h3>",
        effectDescription: "<i>Mediocre Generator Upgrades...?</i>",
        done() { return player.p.points.gte(566) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        33: {
        requirementDescription: "<h3><span style='color:#7e8100;'>Prestige MCXXIX</span></h3>",
        effectDescription: "<i>Something's like, very wrong... (Alright Generators)</i>",
        done() { return player.p.points.gte(1129) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#542d08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        34: {
        requirementDescription: "<h3><span style='color:#00ff00;'>Prestige MCXCVIII</span></h3>",
        effectDescription: "<i>After all this time... Perfect Generators.</i>",
        done() { return player.p.points.gte(1198) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#544e08',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        35: {
        requirementDescription: "<h3><span>The Finale (Prestige 1e1,500)</span></h3>",
        effectDescription: "<i>^1e6 money. Also unlock a new peculiar layer...</i>",
        done() { return player.p.points.gte("1e1500") },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#540808',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                    }
                }
            },
        },
    },
    //hotkeys:[{key:"p",description:"P: Reset for points (universe 1)",onPress(){if (canReset(this.layer))doReset(this.layer);}}],
    branches:[''],
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},


})

addLayer("a", {
    name: "ascension", 
    symbol: "A", 
    position: 1, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#9a9797",
    nodeStyle: {
        background: "linear-gradient( #ff6200, #000000, #d400ff)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(255, 255, 255)",
    },
    tooltip() { 
        return "Ascension " + formatWhole(player[this.layer].points); 
    },
    requires() {
        let costs = [
            new Decimal("5e9999"), 
            new Decimal("5e99999"),
            new Decimal("5e199999"),
            new Decimal("(e^1.79e308)2"),
        ]
        let currentPoints = player[this.layer].points.toNumber()
        return costs[currentPoints]
    },
    resource: "ascensions", 
    baseResource: "prestiges", 
    baseAmount() { return player.p.points }, 
    type: "static", 
    onPrestige(gain) {
        if (layers["per"] !== undefined) {
            layerDataReset("terri");
            layerDataReset("p");
            layerDataReset("awf");
            layerDataReset("dia");
            layerDataReset("med");
            layerDataReset("xp");
            layerDataReset("alr");
            layerDataReset("lv");
            layerDataReset("dec");
            layerDataReset("pri");
            layerDataReset("good");
            layerDataReset("snd");
            layerDataReset("per");
        }
        document.body.style.background = "radial-gradient( #000000, #ffffff)";
        document.body.style.transition = "none";
        setTimeout(() => {
            document.body.style.transition = "background 1s ease";
            document.body.style.background = ""; 
        }, 500);
    },
    gainMult() { 
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        let exp = new Decimal(1)
        return exp
    },
    milestones: {
        0: {
            requirementDescription: "<h3><span>Ascension I</span></h3>",
            effectDescription: "<i>Welcome back! Here is what you get:<br>1. Keep most QoL such as buy max prestiges.<br>2. Generator upgrades are automatic now.<br>3. ^2 money, but ^1e303 if above 1.79e308 prestiges.<br>How's that sound?</i>",
            done() { return player.a.points.gte(1) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#543008',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
        1: {
            requirementDescription: "<h3><span>Ascension II</span></h3>",
            effectDescription: "<i>hey bro this is the endgame... have some patience?<br><br>right. i almost forgot your exquisite generator...</i>",
            done() { return player.a.points.gte(2) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#540854',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #d400ff',
                        'border-color': '#d400ff'
                    }
                }
            },
        },
        2: {
            requirementDescription: "<h3><span>Ascension III</span></h3>",
            effectDescription: "<i>what (true endgame)</i>",
            done() { return player.a.points.gte(3) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#543008',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff8800',
                        'border-color': '#ff8800'
                    }
                }
            },
        },
    },
    branches: ['per'], 
    row: 6, 
    layerShown(){ return hasMilestone('p', 35) || hasMilestone('a', 0)},
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
    autoUpgrade() {return hasMilestone('a', 0)},
    effect() {
        return player[this.layer].points.pow(0.5);
    },
    effectDescription() {
        return "adding +" + format(tmp[this.layer].effect) + " to your money base";
    },
    passiveGeneration() {
        let Gen = 0
        if (hasUpgrade('terri',54)) Gen = 1
        if (hasUpgrade('awf',22)) Gen = 10
        if (hasUpgrade('awf',23)) Gen = 100
        if (hasUpgrade('awf',24)) Gen = 1000
        if (hasUpgrade('dia',14)) Gen = 1e6
        if (hasUpgrade('alr',14)) Gen = player.terri.points.mag
        if (player.terri.points.gte(1e6) && (!hasUpgrade('dia',14))) Gen = 0
        if (player.terri.points.gte(1e9) && (!hasUpgrade('alr',14))) Gen = 0
        if (player.terri.points.gte(9.0071993e15)) Gen = 0
        return Gen
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
            unlocked(){return hasMilestone('p',5)},
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
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#518240',
                        'color': '#ffffff'
                    }
                }
            },
        },
        42: {
            title: "Nearing an end",
            description: "x15 money.",
            cost: new Decimal(74),
            unlocked(){return hasMilestone('p',8)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#365a2b',
                        'color': '#ffffff'
                    }
                }
            },
        },
        43: {
            title: "One more...",
            description: "x16 money.",
            cost: new Decimal(78),
            unlocked(){return hasMilestone('p',8)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#182913',
                        'color': '#ffffff'
                    }
                }
            },
        },
        44: {
            title: "The end of terrible upgrades...",
            description: "x17<i>0</i> money.",
            cost: new Decimal(89),
            unlocked(){return hasMilestone('p',9)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                    }
                }
            },
        },
        51: {
            title: "<h3><span style='color:#ffd700;'>Bonus upgrades!!!</span></h3>",
            description: "So each gen has 16 upgrades but this one has 4 bonus ones! x2,500 money.",
            cost: new Decimal(198),
            unlocked(){return hasMilestone('p',14)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#ac9616',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #8b7b1d',
                        'border-color': '#8b7b1d'
                    }
                }
            },
        },
        52: {
            title: "<h3><span style='color:#ffd700;'>Generators are made out of cables</span></h3>",
            description: "Okay how are they made out of cables. Anyways, x25,000 money.",
            cost: new Decimal(236),
            unlocked(){return hasMilestone('p',15)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#ac9616',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #8b7b1d',
                        'border-color': '#8b7b1d'
                    }
                }
            },
        },
        53: {
            title: "<h3><span style='color:#ffd700;'>Added the zero</span></h3>",
            description: "What was i thinking when i made this game!!! x2,500,000 money.",
            cost: new Decimal(263),
            unlocked(){return hasMilestone('p',16)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#ac9616',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #8b7b1d',
                        'border-color': '#8b7b1d'
                    }
                }
            },
        },
        54: {
            title: "<h3><span style='color:#ffd700;'>The actual end of terrible upgrades</span></h3>",
            description: "You will now generate 1 terrible generator per second. How is this useful?",
            cost: new Decimal(289),
            unlocked(){return hasMilestone('p',17)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#ac9616',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #8b7b1d',
                        'border-color': '#8b7b1d'
                    }
                }
            },
        },
    },
    milestones: {
        0: {
        requirementDescription: "100,000,000 Terrible Generators",
        effectDescription: "<i>The second ever exponent boost! ^1.25 money. <s>Exponents apply after all boosts.</s></i>",
        done() { return player.terri.points.gte(100e6) },
        unlocked(){return hasMilestone('snd',0)},
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#7d0000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                    }
                }
            },
        },
        1: {
        requirementDescription: "9e15 Terrible Generators",
        effectDescription: "<i>+1 square. Sorry! I meant ^1.025 money.</i>",
        done() { return player.terri.points.gte(9e15) },
        unlocked(){return hasUpgrade('alr', 14)},
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#7d0000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                    }
                }
            },
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
    autoUpgrade() {return hasMilestone('a', 0)},
    effect() {
        return player[this.layer].points.add(1);
    },
    effectDescription() {
        return "multiplying your money by x" + format(tmp[this.layer].effect);
    },
    passiveGeneration() {
        let Gen = 0
        if (hasUpgrade('alr',12)) Gen = 1
        if (hasUpgrade('alr',13)) Gen = 10
        if (hasUpgrade('awf',33)) Gen = 100
        if (hasUpgrade('dia',21)) Gen = 1e4
        if (player.awf.points.gte(1e4) && (!hasUpgrade('dia',21))) Gen = 0
        if (player.awf.points.gte(1.0005e6) && (hasUpgrade('dia',21))) Gen = 0
        return Gen
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
        13: {
            title: "Is it all multipliers?!",
            description: "x75 money.",
            cost: new Decimal(15),
            unlocked(){return hasMilestone('p',10)},
        },
        14: {
            title: "Maybe a noticable timewall",
            description: "x100 money.",
            cost: new Decimal(16),
            unlocked(){return hasMilestone('p',10)},
        },
        21: {
            title: "And how did the wait go?",
            description: "x1e7 money.",
            cost: new Decimal(34),
            unlocked(){return player.terri.points.gte(400)},
        },
        22: {
            title: "It's called generator tree for a reason",
            description: "Increase terrible generation to 10/s.",
            cost: new Decimal(40),
            unlocked(){return hasMilestone('p',18)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        23: {
            title: "Okay that's a bit fast...",
            description: "Increase terrible generation to 100/s.",
            cost: new Decimal(50),
            unlocked(){return hasMilestone('p',18)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        24: {
            title: "OH MY GOD",
            description: "Increase terrible generation to 1,000/s.",
            cost: new Decimal(100),
            unlocked(){return hasMilestone('p',18)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        31: {
            title: "Ready for the generation?",
            description: "x100 money, one last time.",
            cost: new Decimal(200),
            unlocked(){return hasMilestone('p',18)},
        },
        32: {
            title: "Why are we forgetting about XP?",
            description: "^1.5 the xp cap.",
            cost: new Decimal(500),
            unlocked(){return hasMilestone('p',19)},
        },
        33: {
            title: "Generation 2.2",
            description: "100 awful gens a second. Enjoy!",
            cost: new Decimal(1e3),
            unlocked(){return hasMilestone('p',24)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        34: {
            title: "Something about money...",
            description: "x1e10 money. Doesn't sound too ridiculous anymore, huh?",
            cost: new Decimal(1e4),
            unlocked(){return hasMilestone('p',24)},
        },
        41: {
            title: "How is this useful in any way.",
            description: "x1e1 (x10) money.",
            cost: new Decimal(12),
            currencyInternalName: "points",
            currencyLocation() { return player.alr },
            currencyDisplayName: "alright generators",
            unlocked() { return hasUpgrade('dec', 11) },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#ff0000',
                        'color': '#000000'
                    }
                }
            },
        },
        42: {
            title: "Still not helping...",
            description: "x1e10 money.",
            cost: new Decimal("1e1067"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return hasUpgrade('awf', 41) },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#00ff00',
                        'color': '#000000'
                    }
                }
            },
        },
        43: {
            title: "Okay now it's getting better",
            description: "x1e100 money.",
            cost: new Decimal("1e1079"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return hasUpgrade('awf', 42) },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#0000ff',
                        'color': '#000000'
                    }
                }
            },
        },
        44: {
            title: "This is the new meta.",
            description: "x1e1<i>0</i>,000 money.",
            cost: new Decimal("1e1199"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return hasUpgrade('awf', 43) },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #d42a00',
                        'border-color': '#d42a00'
                    }
                }
            },
        },
    },
    milestones: {
        0: {
        requirementDescription: "250,000 Awful Generators",
        effectDescription: "<i>Don't you love milestones that are in the wrong spot?<br>Unlock some new Mediocre Generator Upgrades.</i>",
        done() { return player.awf.points.gte(250e3) },
        unlocked(){return hasMilestone('snd',0)},
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#811a00',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #d42a00',
                        'border-color': '#d42a00'
                    }
                }
            },
        },
        1: {
        requirementDescription: "1,000,000 Awful Generators",
        effectDescription: "<i>The first ever exponent boost! ^1.05 money. Exponents apply after all boosts.</i>",
        done() { return player.awf.points.gte(1e6) },
        unlocked(){return hasMilestone('snd',0)},
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#811a00',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #d42a00',
                        'border-color': '#d42a00'
                    }
                }
            },
        },
    },
    clickables: {
        11: {
           display() { return "<h1>Special Offer!</h1>" },
           tooltip() { return "Right now, if you press this button you will be able to skip this timewall!"},
           canClick() { return true },
           unlocked() { return player.terri.points.eq(117) && player.awf.points.eq(15) },
           color() { return "#000000" },
            onClick() {
                player.awf.points = new Decimal(16)
                player.terri.points = new Decimal(118)
            }
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
    autoUpgrade() {return hasMilestone('a', 0)},
    passiveGeneration() {
        let Gen = 0
        if (hasMilestone('xp',3)) Gen = 1
        if (player.med.points.gte(100)) Gen = 0
        return Gen
    },
    effect() {
        return player[this.layer].points.add(1).mul(player.points.pow(0.01));
    },
    effectDescription() {
        return "and with the help of money, it is multiplying your money by x" + format(tmp[this.layer].effect);
    },
    upgrades: {
        11: {
            title: "Multiplied",
            description: "x100 money.",
            cost: new Decimal(2),
            unlocked(){return hasMilestone('p',8)},
        },
        12: {
            title: "Multiplied, again.",
            description: "x1,000 money.",
            cost: new Decimal(4),
            unlocked(){return hasMilestone('p',14)},
        },
        13: {
            title: "Once you buy this you will reach 1e100 money",
            description: "x1e8 money.",
            cost: new Decimal(6),
            unlocked(){return player.terri.points.gte(500)},
        },
        14: {
            title: "It's all XP...",
            description: "^3 the xp cap.",
            cost: new Decimal(25),
            unlocked(){return hasMilestone('p',19)},
        },
        21: {
            title: "Welcome back!",
            description: "^1.01 the xp cap.",
            cost: new Decimal(105),
            unlocked(){return hasMilestone('awf',0)},
        },
        22: {
            title: "Did you forget about these upgrades?",
            description: "^3.33 the xp cap.",
            cost: new Decimal(114),
            unlocked(){return hasMilestone('awf',0)},
        },
        23: {
            title: "Wait, no more xp cap?",
            description: "^1.5 money.",
            cost: new Decimal(115),
            unlocked(){return hasMilestone('p',32)},
        },
        24: {
            title: "The new meta (wait we did this before)",
            description: "^1.1 money.",
            cost: new Decimal(116),
            unlocked(){return hasMilestone('p',32)},
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
    autoUpgrade() {return hasMilestone('a', 0)},
    effect() {
        return player[this.layer].points.add(1).mul(player.points.pow(0.05));
    },
    effectDescription() {
        return "and with the help of money, it is multiplying your money by x" + format(tmp[this.layer].effect);
    },
    upgrades: {
        11: {
            title: "Oh yeah this is GREAT!",
            description: "x12,345 money.",
            cost: new Decimal(2),
            unlocked(){return hasMilestone('p',14)},
        },
        12: {
            title: "Generation 2.0",
            description: "1 awful generator a second. What else?",
            cost: new Decimal(6),
            unlocked(){return hasMilestone('p',19)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        13: {
            title: "Generation 2.1",
            description: "10 awful generators a second. Now you can reach the 10k cap!",
            cost: new Decimal(7),
            unlocked(){return hasMilestone('p',24)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        14: {
            title: "hey bro do the thing",
            description: "The possibilities are limitless. You can now generate up to 9.0071993e15 terrible generators, and you generate terrible generators based on themselfs.",
            cost: new Decimal(13),
            unlocked(){return hasMilestone('p',33)},
        },
    },
    branches:['med'],
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',10)},


})

addLayer("dec", {
    name: "dec", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ε", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#53ac00",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Decent Generators"; 
    },
    requires: new Decimal(6), // Can be a function that takes requirement increases into account
    resource: "decent generators", // Name of prestige currency
    baseResource: "alright generators", // Name of resource prestige is based on
    baseAmount() {return player.alr.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.8, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',19)},
    autoPrestige() {return hasMilestone('p',19)},
    canBuyMax() {return hasMilestone('p',19)},
    autoUpgrade() {return hasMilestone('a', 0)},
    effect() {
        return player.alr.points.add(1).mul(player.points.pow(0.1));
    },
    effectDescription() {
        return "and with the help of money and alright gens, it is multiplying your money by x" + format(tmp[this.layer].effect);
    },
    upgrades: {
        11: {
            title: "Increasingly Powerful",
            description: "Unlock the last 4 awful generator upgrades.",
            cost: new Decimal(2),
            unlocked(){return hasMilestone('xp',3)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#333333',
                        'color': '#ffffff',
                    }
                }
            },
        },
    },
    branches:['alr'],
    row: 4, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',19)},


})

addLayer("good", {
    name: "good", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ζ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#28d700",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Good Generators"; 
    },
    requires: new Decimal(2), // Can be a function that takes requirement increases into account
    resource: "good generators", // Name of prestige currency
    baseResource: "decent generators", // Name of resource prestige is based on
    baseAmount() {return player.dec.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('p',29)},
    autoPrestige() {return hasMilestone('p',29)},
    canBuyMax() {return hasMilestone('p',29)},
    autoUpgrade() {return hasMilestone('a', 0)},
    effect() {
        return player[this.layer].points.add(1).mul(player.points.pow(0.2));
    },
    effectDescription() {
        return "and with the help of money, it is multiplying your money by x" + format(tmp[this.layer].effect);
    },
    branches:['dec'],
    row: 5, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',29)},


})

addLayer("per", {
    name: "per", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "η", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00ff00",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Perfect Generators"; 
    },
    requires: new Decimal(2), // Can be a function that takes requirement increases into account
    resource: "perfect generators", // Name of prestige currency
    baseResource: "good generators", // Name of resource prestige is based on
    baseAmount() {return player.good.points}, // Get the current amount of baseResource
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
    resetsNothing() {return hasMilestone('p',34)},
    autoPrestige() {return hasMilestone('p',34)},
    canBuyMax() {return hasMilestone('p',34)},
    autoUpgrade() {return player.p.points.gte("1.796e308")},
    effectDescription() {
        return "which is doing nothing, unfortunately, to prevent inflation.<br><br>Well, at least you can find all sorts of upgrades here!"
    },
    upgrades: {
        11: {
            title: "Welcome.",
            description: "So how do you like the exponents? ^1.025 money, again.",
            cost: new Decimal(0),
            unlocked(){return hasMilestone('p',34)},
        },
        12: {
            title: "Did you really expect something other than an exponent?",
            description: "^1.2 money.",
            cost: new Decimal("1e491640"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        13: {
            title: "Cubes.. stuff like that",
            description: "^3 money. How unexpected!",
            cost: new Decimal("1e9.0071993e15"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        14: {
            title: " ",
            description: "<h1>Inflate.</h1>",
            cost: new Decimal("1e1000"),
            currencyInternalName: "points",
            currencyLocation() { return player.p },
            currencyDisplayName: "prestiges",
            unlocked(){return hasMilestone('p',34)},
        },
        21: {
            title: "But it looks great (generator)!",
            description: "Why wouldn't this cost great generators? ^1.0025 money",
            cost: new Decimal("1e6754565"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        22: {
            title: "Tesseracts.. wait what",
            description: "^4 money.",
            cost: new Decimal("1e9.999e32"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        23: {
            title: "VOID",
            description: "The void is coming.",
            cost: new Decimal(1.79e308),
            currencyInternalName: "points",
            currencyLocation() { return player.p },
            currencyDisplayName: "prestiges",
            style() {
                return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                }
            },
            unlocked(){return hasMilestone('p',34)},
        },
        24: {
            title: "Why...",
            description: "You've gone too far. Start elevenfolding your prestiges every frame. <i>Why are you like this...</i>",
            cost: new Decimal(2.44e154),
            currencyInternalName: "points",
            currencyLocation() { return player.p },
            currencyDisplayName: "prestiges",
            unlocked(){return hasMilestone('p',34)},
        },
        31: {
            title: "xp :shock:",
            description: "^1,000 xp cap.",
            cost: new Decimal("1e1e100"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        32: {
            title: "VOID",
            description: "The void is coming.",
            cost: new Decimal(1.79e308),
            currencyInternalName: "points",
            currencyLocation() { return player.p },
            currencyDisplayName: "prestiges",
            style() {
                return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                }
            },
            unlocked(){return hasMilestone('p',34)},
        },
        33: {
            title: "Red and blue, staying true!",
            description: "Really, why did we need a reference? Just take the ^1.005 money and move on...",
            cost: new Decimal("1e8e6"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        34: {
            title: "Remember that terrible milestone that gave you a square?",
            description: "^2 money.",
            cost: new Decimal("1e1.01e9"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        41: {
            title: "Limitless XP",
            description: "^1.79e308 xp cap.",
            cost: new Decimal("1e1e200"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        42: {
            title: "Can finally forget about primary (you already did)",
            description: "^1.001 money.",
            cost: new Decimal(5),
            currencyInternalName: "points",
            currencyLocation() { return player.pri },
            currencyDisplayName: "primary",
            unlocked(){return hasMilestone('p',34)},
        },
        43: {
            title: "Enough with the powers! It's going to inflate!",
            description: "^1.01 money... or something???",
            cost: new Decimal("1e12632000"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',34)},
        },
        44: {
            title: "Upgrade in 5",
            description: "This upgrade is impossible",
            cost: new Decimal(1),
            unlocked(){return hasMilestone('p',34)},
        },
    },
    branches:['good'],
    row: 6, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',34)},


})

addLayer("exc", {
    name: "exc", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "θ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00aa55",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Exquisite Generators"; 
    },
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "exquisite generators", // Name of prestige currency
    baseResource: "perfect generators", // Name of resource prestige is based on
    baseAmount() {return player.per.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('a',1)},
    autoPrestige() {return hasMilestone('a',1)},
    canBuyMax() {return hasMilestone('a',1)},
    effectDescription() {
        return "and it looks like you still haven't gotten a perfect generator, what the hell are you doing"
    },
    branches:['per'],
    row: 7, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('a',1)},


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
    effect() {
        return player[this.layer].points.add(1).pow(2.5);
    },
    effectDescription() {
        return "multiplying your money by x" + format(tmp[this.layer].effect);
    },
    passiveGeneration() {
        let Gen = 0
        if (hasMilestone('p',27)) Gen = 1
        if (player.dia.points.gte(100)) Gen = 0
        return Gen
    },
    upgrades: {
        11: {
            title: "<h3><span style='color:#00ffff;'>Generic boost</span></h3>",
            description: "x42 money.",
            cost: new Decimal(7),
            unlocked(){return hasMilestone('p',7)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#119898',
                        'color': '#000000',
                        'box-shadow': '0px 0px 15px #1d808b',
                        'border-color': '#1d808b'
                    }
                }
            },
        },
        12: {
            title: "<h3><span style='color:#00ffff;'>More generic boost</span></h3>",
            description: "x4.2 money.",
            cost: new Decimal(10),
            unlocked(){return hasMilestone('p',9)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#119898',
                        'color': '#000000',
                        'box-shadow': '0px 0px 15px #1d808b',
                        'border-color': '#1d808b'
                    }
                }
            },
        },
        13: {
            title: "<h3><span style='color:#00ffff;'>Me when I make XP boost everything:</span></h3>",
            description: "^2 xp cap. Again.",
            cost: new Decimal(100),
            unlocked(){return hasMilestone('p',27)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#119898',
                        'color': '#000000',
                        'box-shadow': '0px 0px 15px #1d808b',
                        'border-color': '#1d808b'
                    }
                }
            },
        },
        14: {
            title: "<h3><span style='color:#00ffff;'>Hi</span></h3>",
            description: "You can now generate up to 1e9 terrible generators. Start generating 1,000,000 terrible gens/s.",
            cost: new Decimal(436),
            unlocked(){return hasMilestone('snd',0)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
        21: {
            title: "<h3><span style='color:#00ffff;'>Hey wait you're not supposed to get this!</span></h3>",
            description: "You can now generate up to 1,000,500 awful generators. Start generating 10,000 awful gens/s.",
            cost: new Decimal(444),
            unlocked(){return hasUpgrade('dia',14)},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        'background-color': '#666666',
                        'color': '#ffffff',
                    }
                }
            },
        },
    },
    branches:['awf'],
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',4)},


})

addLayer("xp", {
    name: "xp", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔷", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0000bb",
    nodeStyle: {
        background: "radial-gradient( #0000bb, #000000)",
       backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
       color: "rgb(0, 0, 0)",
    },
    tooltip() { 
        return formatWhole(player[this.layer].points) + " XP"; 
    },
    requires: new Decimal(1.7014118e38), // Can be a function that takes requirement increases into account
    resource: "XP", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 5.4321, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('xp', 11)) mult = mult.mul(2.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    getResetGain() {
        if (this.baseAmount().lt(this.requires)) return new Decimal(0);
        let gain = this.baseAmount().div(this.requires).pow(this.exponent).mul(this.gainMult()).pow(this.gainExp());
        let baseCap = new Decimal(999999999);
        let extraCap = tmp.lv.effect; 
        let totalCap = baseCap.add(extraCap);
        return gain.min(totalCap);
    },
    passiveGeneration() {
        let Gen = 0
        if (hasMilestone('p',11)) Gen = 1
        return Gen
    },
    effect() {
        let power = new Decimal(0.02);
        if (hasMilestone('xp', 2)) power = new Decimal(0.03);
        return player[this.layer].points.add(1).pow(power);
    },
    effectDescription() {
        if (hasMilestone('xp', 0)) return "multiplying your money by x" + format(tmp[this.layer].effect);
        else return "which is doing literally nothing. Unless..."
    },
    resetsNothing() {return hasMilestone('p',11)},
    upgrades: {
        11: {
            title: "Levels when?",
            description: "x2.5 XP. Also, as a way to get back faster, x12.1212 money.",
            cost: new Decimal(1e39),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasMilestone('p',11)},
        },
        12: {
            title: "An XP boost would be so useless!",
            description: "Which is why you will get a x225 money boost!",
            cost: new Decimal(34359738368),
            unlocked(){return hasMilestone('xp',1)},
        },
        13: {
            title: "Do the repeat!",
            description: "x550 money!",
            cost: new Decimal(68719476736),
            unlocked(){return hasMilestone('xp',1)},
        },
        14: {
            title: "Hey what is this upgrade doing here!",
            description: "x1e45 money.",
            cost: new Decimal("1e13105"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked(){return hasUpgrade('awf',44)},
        },
    },
    milestones: {
        0: {
        requirementDescription: "<h3><span>This is NOT how this works (1,000 XP)</span></h3>",
        effectDescription: "<i>XP now multiplies your money. How generic!</i>",
        done() { return player.xp.points.gte(1e3) },
        },
        1: {
        requirementDescription: "<h3><span>Wait, i'm already hardcapped? (1e10 XP)</span></h3>",
        effectDescription: "<i>You may only get (1e9 - 1) XP/s. Unlock some more XP upgrades!</i>",
        done() { return player.xp.points.gte(1e10) },
        },
        2: {
        requirementDescription: "<h3><span>But something is wrong... (1.11e44 XP)</span></h3>",
        effectDescription: "<i>But this has to be it! What could possibly go wrong? Improve the XP boost formula...</i>",
        done() { return player.xp.points.gte(1.11e44) },
        },
        3: {
        requirementDescription: "<h3><span>[REDACTED] (1e3,970 XP)</span></h3>",
        effectDescription: "<i>One second I need to generate 1 mediocre generator, until you hit 100. Also, check decent gens.</i>",
        done() { return player.xp.points.gte("1e3970") },
        unlocked(){return hasMilestone('p',19)},
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffffff',
                        'border-color': '#ffffff'
                    }
                }
            },
        },
    },
    branches:['med'],
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',11)},


})

addLayer("lv", {
    name: "xp", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🔺", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#bb0000",
    nodeStyle: {
        background: "radial-gradient( #bb0000, #000000)",
       backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
       color: "rgb(0, 0, 0)",
    },
    tooltip() { 
        return "Level " + formatWhole(player[this.layer].points); 
    },
    requires: new Decimal(137438953472), // Can be a function that takes requirement increases into account
    resource: "levels", // Name of prestige currency
    baseResource: "XP", // Name of resource prestige is based on
    baseAmount() {return player.xp.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    effect() {
        let lvl = player[this.layer].points;
        if (lvl.eq(0)) return new Decimal(0);
        if (lvl.eq(1)) return new Decimal(1);
        let baseExtra = lvl.mul(5e8).pow(3.5);
        let baseCap = new Decimal(999999999);
        let totalCap = baseCap.add(baseExtra);
        if (hasMilestone('lv', 0)) {
            totalCap = totalCap.pow(2);
        }
        if (hasMilestone('lv', 2)) {
            totalCap = totalCap.pow(1.25);
        }
        if (hasUpgrade('awf', 32)) {
            totalCap = totalCap.pow(1.5);
        }
        if (hasUpgrade('med', 14)) {
            totalCap = totalCap.pow(3);
        }
        if (hasMilestone('p', 26)) {
            totalCap = totalCap.pow(5);
        }
        if (hasUpgrade('dia', 13)) {
            totalCap = totalCap.pow(2);
        }
        if (hasUpgrade('med', 21)) {
            totalCap = totalCap.pow(1.01);
        }
        if (hasUpgrade('med', 22)) {
            totalCap = totalCap.pow(3.33);
        }
        if (hasUpgrade('per', 31)) {
            totalCap = totalCap.pow(1000);
        }
        if (hasUpgrade('per', 41)) {
            totalCap = totalCap.pow(1.79e308);
        }
        return totalCap.sub(baseCap);
    },

    effectDescription() {
        return "increasing your xp gain cap by +" + format(tmp[this.layer].effect);
    },
    resetsNothing() {return hasMilestone('p',12)},
    canBuyMax() {return hasMilestone('p',28) || hasMilestone('a',0)},
    autoPrestige() {return hasMilestone('lv',3) || hasMilestone('a',0)},
    milestones: {
        0: {
        requirementDescription: "<h3><span>Level 5</span></h3>",
        effectDescription: "<i>So you hate caps? ^2 the xp cap!</i>",
        done() { return player.lv.points.gte(5) },
        },
        1: {
        requirementDescription: "<h3><span>Level 6</span></h3>",
        effectDescription: "<i>x10 money, once again.</i>",
        done() { return player.lv.points.gte(6) },
        },
        2: {
        requirementDescription: "<h3><span>1e77 money</span></h3>",
        effectDescription: "<i>Hey wrong layer!! Anyway, ^1.25 the xp cap.</i>",
        done() { return player.points.gte(1e77) },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffffff',
                        'border-color': '#ffffff'
                    }
                }
            },
        },
        3: {
        requirementDescription: "<h3><span>e1.796e308 money</span></h3>",
        effectDescription: "<i>Auto levels...</i>",
        done() { return player.points.gte("1e1.796e308") },
        unlocked() { return player.points.gte("1e1e300") },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                    }
                }
            },
        },
    },
    branches:['alr'],
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',12)},


})

addLayer("pri", {
    name: "primary", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "1st", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        clickOrder: [],
    }},
    color: "#455666",
    nodeStyle: {
        background: "radial-gradient( #455666, #000000)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(0, 0, 0)",
    },
    tooltip() { 
        return formatWhole(player[this.layer].points) + "/5 Primary"; 
    },
    requires() {
    if (player[this.layer].points.gte(5)) return new Decimal(Infinity); 
    return new Decimal(240);
    }, 
    resource: "primary", // Name of prestige currency
    baseResource: "prestiges", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
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
    effect() {
        let order = player[this.layer].clickOrder;
        let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
        if (!isCorrect) return new Decimal(1); 
        return player.p.points.add(1).pow(1250); 
    },
    effectDescription() {
        let order = player[this.layer].clickOrder;
        let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
        if (isCorrect) {
            return "and with the help of your prestiges it is boosting your money by x" + format(tmp[this.layer].effect);
        }
        if (order.length >= 4) {
            return "and unfortunately, that code was wrong. Hint: island. (code: " + order.join("") + ")";
        }
        return "and a code is required to progress further. (code: " + (order.join("") || "...i'm still waiting") + ")";
    },
    upgrades: {
        11: {
            title: "2",
            description: "type '2', however this is one-use.",
            cost: new Decimal(1),
            canAfford() { return player[this.layer].points.gte(1) && !player[this.layer].clickOrder.includes(2) },
            pay() { player[this.layer].points = player[this.layer].points.sub(1) },
            onPurchase() { player[this.layer].clickOrder.push(2) },
            unlocked() {
                let order = player[this.layer].clickOrder;
                let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
                return !isCorrect;
            }
        },
        12: {
            title: "3",
            description: "type '3', however this is one-use.",
            cost: new Decimal(1),
            canAfford() { return player[this.layer].points.gte(1) && !player[this.layer].clickOrder.includes(3) },
            pay() { player[this.layer].points = player[this.layer].points.sub(1) },
            onPurchase() { player[this.layer].clickOrder.push(3) },
            unlocked() {
                let order = player[this.layer].clickOrder;
                let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
                return !isCorrect;
            }
        },
        13: {
            title: "6",
            description: "type '6', however this is one-use.",
            cost: new Decimal(1),
            canAfford() { return player[this.layer].points.gte(1) && !player[this.layer].clickOrder.includes(6) },
            pay() { player[this.layer].points = player[this.layer].points.sub(1) },
            onPurchase() { player[this.layer].clickOrder.push(6) },
            unlocked() {
                let order = player[this.layer].clickOrder;
                let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
                return !isCorrect;
            }
        },
        14: {
            title: "7",
            description: "type '7', however this is one-use.",
            cost: new Decimal(1),
            canAfford() { return player[this.layer].points.gte(1) && !player[this.layer].clickOrder.includes(7) },
            pay() { player[this.layer].points = player[this.layer].points.sub(1) },
            onPurchase() { player[this.layer].clickOrder.push(7) },
            unlocked() {
                let order = player[this.layer].clickOrder;
                let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
                return !isCorrect;
            }
        }
    },
   clickables: {
        11: {
            title: "Refund",
            display() { return "Press this and get your numbers back. (you won't get your Primary back!)" },
            canClick() { return player[this.layer].clickOrder.length > 0 },
            onClick() {
                player[this.layer].clickOrder = [];
                let puzzleUpgrades = [11, 12, 13, 14];
                player[this.layer].upgrades = player[this.layer].upgrades.filter(id => !puzzleUpgrades.includes(Number(id)));
            },
            style: { "background-color": "#552222", "color": "#ffffff", "border-radius": "10px" },
            unlocked() {
                let order = player[this.layer].clickOrder;
                let isCorrect = order.length === 4 && order[0] === 2 && order[1] === 7 && order[2] === 6 && order[3] === 3;
                return !isCorrect;
            }
        }
    },
    resetsNothing() {return hasMilestone('p',30)},
    autoPrestige() {return hasMilestone('p',31)},
    canBuyMax() {return hasMilestone('p',30)},
    branches:['dec'],
    row: 4, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',30)},


})

addLayer("snd", {
    name: "second", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "2nd", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    solution: "THECOOLCOOKIE366", 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        typedCode: "",
    }},
    color: "#35658d",
    nodeStyle: {
        background: "radial-gradient( #35658d, #000000)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(0, 0, 0)",
    },
    tooltip() { 
        return formatWhole(player[this.layer].points) + "/1 Secondary"; 
    },
    requires() {
        if (player[this.layer].points.gte(1)) return new Decimal(Infinity);
        return new Decimal(270);
    },
    resource: "secondary", // Name of prestige currency
    baseResource: "prestiges", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
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
    effect() {
        let isCorrect = player[this.layer].typedCode === tmp[this.layer].solution; 
        if (!isCorrect) return new Decimal(1);
    },
    effectDescription() {
        let isCorrect = player[this.layer].typedCode === tmp[this.layer].solution;
        if (isCorrect) {
            return "which is giving you boosts via milestones!";
        }
        return "and you're doing something... but what are you doing?<br> (code: " + (player[this.layer].typedCode || "...i'm being patient") + ")<br> Hint: Think outside the box, maybe... who made this?<br><small>Note: code is supposed to be lowercase, but there is only uppercase.</small>";
    },
    clickables:{
        11: { title: "1", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "1" } },
        12: { title: "2", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "2" } },
        13: { title: "3", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "3" } },
        14: { title: "4", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "4" } },
        21: { title: "5", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "5" } },
        22: { title: "6", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "6" } },
        23: { title: "7", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "7" } },
        24: { title: "8", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "8" } },
        31: { title: "9", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "9" } },
        32: { title: "0", style: { "background-color": "#ff0000", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "0" } },
        33: { title: "!", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "!" } },
        34: { title: "@", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "@" } },
        41: { title: "#", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "#" } },
        42: { title: "$", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "$" } },
        43: { title: "%", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "%" } },
        44: { title: "^", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "^" } },
        51: { title: "&", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "&" } },
        52: { title: "*", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "*" } },
        53: { title: "(", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "(" } },
        54: { title: ")", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += ")" } },
        61: { title: "-", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "-" } },
        62: { title: "_", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "_" } },
        63: { title: "=", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "=" } },
        64: { title: "+", style: { "background-color": "#00ff00", "color": "#000000" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "+" } },
        71: { title: "A", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "A" } },
        72: { title: "B", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "B" } },
        73: { title: "C", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "C" } },
        74: { title: "D", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "D" } },
        81: { title: "E", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "E" } },
        82: { title: "F", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "F" } },
        83: { title: "G", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "G" } },
        84: { title: "H", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "H" } },
        91: { title: "I", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "I" } },
        92: { title: "J", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "J" } },
        93: { title: "K", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "K" } },
        94: { title: "L", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "L" } },
        101: { title: "M", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "M" } },
        102: { title: "N", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "N" } },
        103: { title: "O", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "O" } },
        104: { title: "P", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "P" } },
        111: { title: "Q", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "Q" } },
        112: { title: "R", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "R" } },
        113: { title: "S", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "S" } },
        114: { title: "T", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "T" } },
        121: { title: "U", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "U" } },
        122: { title: "V", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "V" } },
        123: { title: "W", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "W" } },
        124: { title: "X", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "X" } },
        131: { title: "Y", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "Y" } },
        132: { title: "Z", style: { "background-color": "#0000ff", "color": "#ffffff" }, unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution }, canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution }, onClick() { player[this.layer].typedCode += "Z" } },
        133: {
            title: "SPACE",
            style: { "background-color": "#808080", "color": "#ffffff" },
            unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution },
            canClick() { return player[this.layer].typedCode !== tmp[this.layer].solution },
            onClick() { player[this.layer].typedCode += " " }
        },
        134: { 
            title: "CLR", 
            style: { "background-color": "#552222", "color": "#ffffff" },
            unlocked() { return player[this.layer].typedCode !== tmp[this.layer].solution },
            canClick() { return player[this.layer].typedCode.length > 0 && player[this.layer].typedCode !== tmp[this.layer].solution }, 
            onClick() { player[this.layer].typedCode = "" }
        }
    },
    milestones: {
        0: {
        requirementDescription: "Complete the puzzle",
        effectDescription: "<i>Welcome to the first milestone that gives multiple boosts.<br>1. Get auto prestige. Yay!<br>2. x2.22e22,222 money. What else?<br>3. Some new upgrades in diamonds.</i>",
        done() { return player[this.layer].typedCode === tmp[this.layer].solution },
        style() {
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background-color': '#ffffff',
                        'color': '#000000',
                        'box-shadow': '0px 0px 15px #000000',
                        'border-color': '#000000'
                    }
                }
            },
        },
    },
    resetsNothing() {return hasMilestone('p',31)},
    autoPrestige() {return hasMilestone('p',32)},
    canBuyMax() {return hasMilestone('p',31)},
    branches:['good'],
    row: 5, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('p',31)},


})

addLayer("plv", {
    symbol: "∅",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#c388e1",
    nodeStyle: {
        background: "linear-gradient( #c388e1, #3e0e56)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(0, 0, 0)",
    },
    resource: "player levels", 
    row: "side",
    tooltip() { 
        return "Player Level " + formatWhole(player[this.layer].points); 
    },
    effectDescription() {
        let baseAmount = player.points.add(1).log10().max(0);
        let prestigeMult = player.p.points.sqrt().max(1); 
        let timeExponent = new Decimal(player.timePlayed).pow(0.01).max(1);
        let currentStage = 1 + Object.keys(this.achievements).filter(id => hasAchievement(this.layer, id)).length;
        let rewardsText = "";
        if (hasAchievement(this.layer, 11)) {
            rewardsText += "Stage 1 completion reward: x25 money.<br>";
        }
        if (hasAchievement(this.layer, 12)) {
            rewardsText += "Stage 2 completion reward: Nothing unfortunately...<br>";
        }
        if (hasAchievement(this.layer, 13)) {
            rewardsText += "Stage 3 completion reward: ^1.011 money.<br>";
        }
        if (hasAchievement(this.layer, 14)) {
            rewardsText += "Stage 4 completion reward: Literally nothing, since ascension is so strong.<br>";
        }
        if (hasAchievement(this.layer, 21)) {
            rewardsText += "Stage 5 completion reward: [soon]<br>";
        }
        if (hasAchievement(this.layer, 22)) {
            rewardsText += "Stage 6 completion reward: [soon]<br>";
        }
        if (hasAchievement(this.layer, 23)) {
            rewardsText += "Stage 7 completion reward: [soon]<br>";
        }
        if (hasAchievement(this.layer, 24)) {
            rewardsText += "Stage 8 completion reward: [soon]<br>";
        }
        
        return "which is based on:<br>log10(money) (+" + format(baseAmount) + ")<br>sqrt(prestige) (x" + format(prestigeMult) + ")<br>playtime^0.01 (^" + format(timeExponent) + ")<br><br>You are currently at Stage " + currentStage + "/10.<br>" + rewardsText + "<br><br>There are some new themes in the game, and here's how to unlock them:<br>normal, binary - free<br>softcap, softcap2, softcap3, hardcap - reach the corresponding softcaps<br>purelight, puredark - reach softcap 3 or the easier way, ????????<br>terrible, awful, mediocre... - unlock that generator";
    },
    update(diff) {
        let baseAmount = player.points.add(1).log10().max(0);
        let prestigeMult = player.p.points.sqrt().max(1); 
        let timeExponent = new Decimal(player.timePlayed).pow(0.01).max(1);
        let baseCombined = baseAmount.mul(prestigeMult);
        let calculatedLevel = baseCombined.pow(timeExponent).floor().max(1);
        player[this.layer].points = calculatedLevel;
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "Stage 1 Complete",
            done() { return player.plv.points.gte(1000) },
            tooltip: "Get Player Level 1,000.",
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000'
                    }
                }
            },
        },
        12: {
            name: "Stage 2 Complete",
            done() { return player.plv.points.gte(1e6) },
            tooltip: "Get Player Level 1,000,000.",
            unlocked() { return player.plv.points.gte(1e3) || player.a.points.gte(1)},
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffaa00',
                        'border-color': '#ffaa00'
                    }
                }
            },
        },
        13: {
            name: "Stage 3 Complete",
            done() { return player.plv.points.gte(1e11) },
            tooltip: "Get Player Level 1e11.",
            unlocked() { return player.plv.points.gte(1e6) || player.a.points.gte(1)},
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ffff00',
                        'border-color': '#ffff00'
                    }
                }
            },
        },
        14: {
            name: "Stage 4 Complete",
            done() { return player.a.points.gte(1) },
            tooltip: "Ascend once.",
            unlocked() { return player.plv.points.gte(1e11) || player.a.points.gte(1)},
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ff00',
                        'border-color': '#00ff00'
                    }
                }
            },
        },
    },
})