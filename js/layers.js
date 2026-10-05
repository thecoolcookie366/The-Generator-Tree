// a few layers here and there...

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
    /*onPrestige(gain) {
        if ((!hasMilestone('a',0) && !hasMilestone('snd',0))) {
            document.body.style.background = "linear-gradient( #ff0000, #000000, #0000ff)";
            document.body.style.transition = "none";
            setTimeout(() => {
                document.body.style.transition = "background 0.5s ease";
                document.body.style.background = ""; 
            }, 250);
        }
    },
    */
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
            new Decimal("1e2e6"),
            new Decimal("1e1e9"),
            new Decimal("1e1e22"),
            new Decimal("1e1e1e1e100"),
            new Decimal("(e^4)500000008"),
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
        /*
        document.body.style.background = "linear-gradient( #ff6200, #000000, #d400ff)";
        document.body.style.transition = "none";
        setTimeout(() => {
            document.body.style.transition = "background 1s ease";
            document.body.style.background = ""; 
        }, 500);
        */
    },
    autoPrestige() {return true},
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
            effectDescription: "<i>Welcome back! Unlock Exquisite Generators.</i>",
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
            effectDescription: "<i>Exquisite Generator expansion (really?)</i>",
            done() { return player.a.points.gte(3) },
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
        3: {
            requirementDescription: "<h3><span>Ascension IV</span></h3>",
            effectDescription: "<i>How endless is endless numbers? Let's find out!<br>^0 money, however unlock the next generator.</i>",
            done() { return player.a.points.gte(4) },
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
        4: {
            requirementDescription: "<h3><span>Ascension V</span></h3>",
            effectDescription: "<i>Unlock Quaternary. Oh, god.</i>",
            done() { return player.a.points.gte(5) },
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
        5: {
            requirementDescription: "<h3><span>Ascension VI</span></h3>",
            effectDescription: "<i>Unlock Supreme Generators. Also, ^0 money again. :)</i>",
            done() { return player.a.points.gte(6) },
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
        6: {
            requirementDescription: "<h3><span>Ascension VII</span></h3>",
            effectDescription: "<i>The absolute limit. Remove the second ^0. </i>",
            done() { return player.a.points.gte(7) },
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
    layerShown(){ return hasMilestone('p', 35) || hasMilestone('a', 0) || hasMilestone('univ',2)},
})

addLayer("univ", {
    name: "universe", 
    symbol: "U", 
    position: 1, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#d6d5d5",
    nodeStyle: {
        background: "linear-gradient( #25b425, #000000, #e7fe00)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(255, 255, 255)",
    },
    tooltip() { 
        return "Universe " + formatWhole(player[this.layer].points); 
    },
    requires() {
        let costs = [
            new Decimal("(e^1e15)2"),
            new Decimal("(e^1e15)2"),
            new Decimal("(e^1e15)2"), 
        ]
        let currentPoints = player[this.layer].points.toNumber()
        return costs[currentPoints]
    },
    resource: "universes", 
    baseResource: "money", 
    baseAmount() { return player.points }, 
    type: "static", 
    onPrestige(gain) {
        if (player.sup !== undefined) {
            player.sup.points = new Decimal(0)
            player.sup.upgrades = []
        }

        let overlay = document.createElement("div")
        overlay.id = "prestige-overlay"
        
        Object.assign(overlay.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: "999999",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: "0",
            transition: "opacity 0.5s ease"
        })

        let text = document.createElement("div")
        
        Object.assign(text.style, {
            color: "#000000",
            fontSize: "32px",
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "bold",
            padding: "20px",
            transition: "opacity 0.5s ease"
        })

        overlay.appendChild(text)
        document.body.appendChild(overlay)

        let messages = [
            "Welcome back.",
            "What else is there to find?",
            "All those universes... it's all just a hardcap.",
            "And those generators... gone.",
            "All that money no longer has meaning.",
            "But this isn't the end yet.",
            "It is merely another hardcap, waiting to be broken.",
            "Do you regret what you've done?",
            "Let's see how you handle the finale.",
            "[ ??? THE END IS NEAR ??? ]"
        ]

        setTimeout(() => {
            overlay.style.opacity = "1"
        }, 50)

        let currentPoints = player.univ && player.univ.points ? new Decimal(player.univ.points) : new Decimal(0)
        let parsedGain = new Decimal(gain)
        let totalPoints = currentPoints.add(parsedGain).toNumber()
        
        let targetIndex = Math.min(totalPoints, messages.length) - 1

        function showMessage() {
            if (targetIndex >= 0 && targetIndex < messages.length) {
                text.style.opacity = "0"
                setTimeout(() => {
                    text.innerHTML = messages[targetIndex]
                    text.style.opacity = "1"
                    
                    setTimeout(() => {
                        overlay.style.transition = "opacity 2s ease"
                        overlay.style.opacity = "0"
                        setTimeout(() => {
                            overlay.remove()
                        }, 2000)
                    }, 3000)
                }, 500)
            } else {
                overlay.remove()
            }
        }

        setTimeout(showMessage, 1000)
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
            requirementDescription: "<h3><span>The Original Universe (u0)</span></h3>",
            effectDescription: "<i>You start here. It has gotten quite corrupted, hasn't it?</i><br>Nerf: None.<br>Buff: None.",
            done() { return hasUpgrade('sup', 21)},
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(0)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        1: {
            requirementDescription: "<h3><span>The Stable? Universe (u1)</span></h3>",
            effectDescription: "<i>A universe of stability, where inflation doesn't exist. Or does it?</i><br>Nerf: You no longer have Supreme/Perfect generators, and money gain is set to 0.<br>Buff: Unlock 'The Stable? Planet' Challenge.",
            done() { return player.univ.points.gte(1) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(1)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        2: {
            requirementDescription: "<h3><span>The Safe Universe (u2)</span></h3>",
            effectDescription: "<i>This universe is actually stable, with little to no inflation.</i><br>Nerf: Money gain set to 0, yet again.<br>Buff: Unlock Ultra Generators, and all previous layers are always visible.",
            done() { return player.univ.points.gte(2) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(2)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        3: {
            requirementDescription: "<h3><span>The Electric Universe (u3)</span></h3>",
            effectDescription: "<i>You can feel the electricity from far away.</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(3) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(3)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        4: {
            requirementDescription: "<h3><span>The Timewall Universe (u4)</span></h3>",
            effectDescription: "<i>The universe that most likely takes the longest.. due to clocks, and walls. Somehow.</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(4) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(4)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        5: {
            requirementDescription: "<h3><span>The Fast Universe (u5)</span></h3>",
            effectDescription: "<i>This univer- WHY IS IT SO FAST!! HELP!!!</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(5) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(5)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        6: {
            requirementDescription: "<h3><span>The Unsafe Universe (u6)</span></h3>",
            effectDescription: "<i>The evil twin of The Safe Universe (u2). Whatever happens in u6 stays in u6.</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(6) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(6)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        7: {
            requirementDescription: "<h3><span>The Update Universe (u7)</span></h3>",
            effectDescription: "<i>Update in 5. Also, new feature in 5. And new generator in 5?!</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(7) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(7)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        8: {
            requirementDescription: "<h3><span>The Void <s>Universe</s> (u8)</span></h3>",
            effectDescription: "<i>[ DESCRIPTION REDACTED ]</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(8) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(8)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        9: {
            requirementDescription: "<h3><span>The Cookie Universe (u9)</span></h3>",
            effectDescription: "<i>Whoever made this universe must be really evil.</i><br>Nerf: soon.<br>Buff: soon.",
            done() { return player.univ.points.gte(9) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(9)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00f5ff, inset 0px 0px 10px rgba(148, 0, 211, 0.5)',
                        'border-color': '#00f5ff'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                    'background': 'linear-gradient(135deg, #2b1055 0%, #112233 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': '0px 0px 5px rgba(0, 245, 255, 0.2)',
                    'border-color': '#443366'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #140d21 0%, #090e14 100%)',
                    'color': '#a0a0a0',
                    'box-shadow': 'none',
                    'border-color': '#332244'
                }
            },
        },
        10: {
            requirementDescription: "<h3><i><span>The Finale (u?)</span></i></h3>",
            effectDescription: "<i>There is nothing left.</i><br>Nerf: Everything is gone.<br>Buff: ...",
            done() { return player.univ.points.gte(10) },
            style() {
                if (hasMilestone(this.layer, this.id) && player[this.layer].points.floor().eq(10)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b0b0b 0%, #1a0505 100%)',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #ff0000, inset 0px 0px 10px rgba(139, 0, 0, 0.5)',
                        'border-color': '#ff0000'
                    }
                }
                if (hasMilestone(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b0b0b 0%, #111111 100%)',
                        'color': '#a0a0a0',
                        'box-shadow': '0px 0px 5px rgba(255, 0, 0, 0.2)',
                        'border-color': '#662222'
                    }
                }
                return {
                    'background': 'linear-gradient(135deg, #050000 0%, #000000 100%)',
                    'color': '#411c1c',
                    'box-shadow': 'none',
                    'border-color': '#4f2222',
                    'opacity': '0.75'
                }
            },
        },
    },
    challenges: {
        11: {
            name() {
                let completions = player[this.layer].challenges[this.id] || 0
                let maxComps = (player[this.layer].challenges[32] >= 3) ? 3 : 2
                return "The Stable? Planet<br> (" + completions + "/" + maxComps + ")"
            },
            challengeDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "You gain a fixed 0.01 money per second."
                if (completions == 1) return "You gain a fixed 0.001 money per second."
                return "You gain a fixed 0 money per second."
            },
            completionLimit() {
                return (player[this.layer].challenges[32] >= 3) ? 3 : 2
            },
            goalDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "11 money"
                if (completions == 1) return "10.5 money"
                return "10.25 money"
            },
            rewardDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Nothing... yet.<br>Next: Increase base money gain to 1 and unlock 'The Stable? Galaxy' challenge."
                if (completions == 1) return "Increase base money gain to 1 and unlock 'The Stable? Galaxy' challenge.<br>Next: Increase base money gain to 1, unlock 'The Stable? Galaxy' challenge, and multiply money gain by 10."
                if (completions == 2) return "Increase base money gain to 1, unlock 'The Stable? Galaxy' challenge, and multiply money gain by 10.<br>Next: You'd break the multiverse if you could!"
                return "Increase base money gain to 1, unlock 'The Stable? Galaxy' challenge, multiply money gain by 10 and ^12 the money cap in Black Hole.<br>Next: ..."
            },
            canComplete() { 
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return player.points.gte(11)
                if (completions == 1) return player.points.gte(10.5)
                return player.points.gte(10.25)
            },
            unlocked() { return hasMilestone("univ", 1) },
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #0b2b11 0%, #113322 100%)',
                        'box-shadow': '0px 0px 15px #39ff14',
                        'border-color': '#39ff14',
                        'color': '#ffffff'
                    }
                }
                return {
                    'background': '#111111',
                    'border-color': '#333333',
                    'color': '#a0a0a0'
                }
            }
        },
        12: {
            name() {
                let completions = player[this.layer].challenges[this.id] || 0
                return "The Stable? Galaxy<br>(" + completions + "/1)"
            },
            completionLimit: 1,
            challengeDescription: "Money doubles every second. You also don't have Absurd Generators.",
            goalDescription: "1e100 money",
            rewardDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Nothing yet...<br>Next: Unlock Absurd Generators, and 'The Stable? Universe Corruption' challenge."
                return "Unlock Absurd Generators, and 'The Stable? Universe Corruption' challenge.<br>Next: You maxed this challenge!"
            },
            canComplete() { return player.points.gte("1e100") },
            unlocked() { return hasChallenge("univ", 11) },
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #0b2b11 0%, #113322 100%)',
                        'box-shadow': '0px 0px 15px #39ff14',
                        'border-color': '#39ff14',
                        'color': '#ffffff'
                    }
                }
                return {
                    'background': '#111111',
                    'border-color': '#333333',
                    'color': '#a0a0a0'
                }
            }
        },
        21: {
            name() {
                let completions = player[this.layer].challenges[this.id] || 0
                return "The Stable? Universe<br> <i>Corruption</i> (" + completions + "/5)"
            },
            challengeDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Money gain ^0.5."
                if (completions == 1) return "Money gain ^0.25."
                if (completions == 2) return "Money gain ^0.125."
                if (completions == 3) return "Money gain ^0.0625."
                return "Money gain ^0."
            },
            rewardDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Nothing yet...<br>Next: ^1.025 money."
                if (completions == 1) return "Money gain ^1.025.<br>Next: ^1.05 money."
                if (completions == 2) return "Money gain ^1.05.<br>Next: ^1.1 money."
                if (completions == 3) return "Money gain ^1.1.<br>Next: ^1.2 money."
                if (completions == 4) return "Money gain ^1.2.<br>Next: Money gain ^1.2 and ???."
                return "Money gain ^1.2 and remove the 2nd nerf of Universe 1.<br>Next: Maxed. The singularity is neverending."
            },
            completionLimit: 5,
            goalDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "1e10 money"
                if (completions == 1) return "1e25 money"
                if (completions == 2) return "1e50 money"
                if (completions == 3) return "1e566,543 money"
                return "35 Black Hole completions & 5,000 money."
            },
            canComplete() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return player.points.gte("1e10")
                if (completions == 1) return player.points.gte("1e25")
                if (completions == 2) return player.points.gte("1e50")
                if (completions == 3) return player.points.gte("1e566543")
                let bhCompletions = (player['univ'] && player['univ'].challenges[22]) ? player['univ'].challenges[22] : 0
                return new Decimal(bhCompletions).gte(35) && player.points.gte(5000)
            },
            unlocked() { return hasChallenge("univ", 12) },
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #2b0b0b 0%, #331111 100%)',
                        'box-shadow': '0px 0px 15px #ff0000',
                        'border-color': '#ff0000',
                        'color': '#ffffff'
                    }
                }
                return {
                    'background': '#111111',
                    'border-color': '#333333',
                    'color': '#a0a0a0'
                }
            }
        },
        22: {
            name() {
                let completions = player[this.layer].challenges[this.id] || 0
                return "The Stable? Black Hole<br>(" + completions + "/35)"
            },
            completionLimit: 35,
            challengeDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                let cap = new Decimal(1000).mul(Decimal.pow(1000, completions))
                if (hasUpgrade('abs', 22)) {
                    let completions = player.univ.challenges[21] || 1
                    cap = cap.mul(Decimal.pow(2500, completions))
                }
                if (hasUpgrade('abs', 23)) {
                    let completions = player.univ.challenges[21] || 1
                    cap = cap.mul(Decimal.pow(25000, completions))
                }
                if (hasUpgrade('abs', 24)) {
                    let completions = player.univ.challenges[21] || 1
                    cap = cap.mul(Decimal.pow(250000, completions))
                }
                if (hasUpgrade('abs', 31)) {
                    cap = cap.mul(1e10)
                }
                if (hasUpgrade('abs', 32)) {
                    cap = cap.mul(1e10)
                }
                if (hasUpgrade('abs', 33)) {
                    cap = cap.mul(1e10)
                }
                if (hasUpgrade('abs', 34)) {
                    cap = cap.mul(1e20)
                }
                if (hasUpgrade('abs', 41)) {
                    cap = cap.mul(1e30)
                }
                if (hasUpgrade('abs', 42)) {
                    cap = cap.mul(1e100)
                }
                if (hasUpgrade('abs', 43)) {
                    cap = cap.mul("1e1000")
                }
                if (hasUpgrade('abs', 44)) {
                    cap = cap.mul("1e10000")
                }
                if (hasUpgrade('abs', 51)) {
                    cap = cap.mul("1e10000000")
                }
                if ((player[this.layer].challenges && player[this.layer].challenges[11]) >= 3) {
                    cap = cap.pow(12)
                }
                if (hasUpgrade('abs', 52)) {
                    cap = cap.pow("50")
                }
                return "Money gain is capped at " + format(cap) + " (cap is x1,000 each completion). x1.01 money gain per second. Oh yeah, you also don't have Absurd Generators."
            },
            goalDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                let goal = new Decimal(5).add(completions)
                if (completions >= 25 && completions < 30) {
                    let extraComps = completions - 25
                    goal = new Decimal(30).add(Decimal.pow(5, extraComps))
                } else if (completions >= 30) {
                    let extraComps = completions - 30
                    goal = new Decimal(3155).add(Decimal.pow(25, extraComps))
                }
                return format(goal) + " Prestiges"
            },
            canComplete() {
                let completions = player[this.layer].challenges[this.id] || 0
                let goal = new Decimal(5).add(completions)
                if (completions >= 25 && completions < 30) {
                    let extraComps = completions - 25
                    goal = new Decimal(30).add(Decimal.pow(5, extraComps))
                } else if (completions >= 30) {
                    let extraComps = completions - 30
                    goal = new Decimal(3155).add(Decimal.pow(25, extraComps))
                }
                return player.p.points.gte(goal)
            },
            rewardDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Nothing yet...<br>Next: [1 completion] Unlock two new absurd upgrades."
                if (completions < 3) return "[1 completion] Unlock two new absurd upgrades.<br>Next: [3 completions] Unlock four new absurd upgrades."
                if (completions < 5) return "[3 completions] Unlock four new absurd upgrades.<br>Next: [5 completions] Unlock six new absurd upgrades."
                if (completions < 8) return "[5 completions] Unlock six new absurd upgrades.<br>Next: [8 completions] Unlock seven new absurd upgrades."
                if (completions < 10) return "[8 completions] Unlock seven new absurd upgrades.<br>Next: [10 completions] Unlock ten new absurd upgrades."
                if (completions < 16) return "[10 completions] Unlock ten new absurd upgrades.<br>Next: [16 completions] Unlock twelve new absurd upgrades."
                if (completions < 26) return "[16 completions] Unlock twelve new absurd upgrades.<br>Next: [26 completions] Unlock fourteen new absurd upgrades."
                if (completions < 29) return "[26 completions] Unlock fourteen new absurd upgrades.<br>Next: [29 completions] Unlock fifteen new absurd upgrades."
                if (completions < 31) return "[29 completions] Unlock fifteen new absurd upgrades.<br>Next: [31 completions] Unlock fifteen new absurd upgrades, and unlock one Stable? challenge."
                if (completions < 33) return "[31 completions] Unlock fifteen new absurd upgrades, and unlock one Stable? challenge.<br>Next: [33 completions] Unlock fifteen new absurd upgrades, and unlock two Stable? challenges."
                if (completions < 35) return "[33 completions] Unlock fifteen new absurd upgrades, and unlock two Stable? challenges.<br>Next: [35 completions] Unlock fifteen new absurd upgrades, unlock two Stable? challenges, and ???."
                return "[35 completions] Unlock fifteen new absurd upgrades, unlock two Stable? challenges, and makes the 5th completion of Corruption challenge possible.<br>Next: You maxed this challenge!"
            },
            unlocked() { return hasUpgrade('abs', 12) },
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #0b2b11 0%, #113322 100%)',
                        'box-shadow': '0px 0px 15px #39ff14',
                        'border-color': '#39ff14',
                        'color': '#ffffff'
                    }
                }
                return {
                    'background': '#111111',
                    'border-color': '#333333',
                    'color': '#a0a0a0'
                }
            }
        },
        31: {
            name() {
                let completions = player[this.layer].challenges[this.id] || 0
                let nextComps = 0
                if (inChallenge('univ', 31) && player.points.gte("1e5") && completions < 1000000) {
                    let totalPossible = player.points.div("1e5").log("1e5").floor().toNumber() + 1
                    if (totalPossible > 1000000) totalPossible = 1000000
                    if (totalPossible > completions) {
                        nextComps = totalPossible - completions
                    }
                }
                if (nextComps > 0) {
                    return "The Stable? Infinity<br>(" + completions + "/1000000 - +" + nextComps + ")"
                }
                return "The Stable? Infinity<br>(" + completions + "/1000000)"
            },
            completionLimit: 1000000,
            challengeDescription() {
                return "This is just a regular run. Goal is x100,000 each completion."
            },
            rewardDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions < 1) return "Nothing yet...<br>Next: [1 completion] Boost money by x2^completions."
                if (completions < 1000000) return "[1 completion] Boost money by 10^completions.<br>Next: [1,000,000 completions] ???"
                return "[1,000,000 completions] You wasted your time.<br>Next: No, there won't be a next."
            },
            goalDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions >= 1000000) return "Maxed out!"
                let goal = new Decimal("1e5").mul(Decimal.pow("1e5", completions))
                return format(goal) + " money"
            },
            canComplete() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions >= 1000000) return false
                let goal = new Decimal("1e5").mul(Decimal.pow("1e5", completions))
                return player.points.gte(goal)
            },
            onComplete() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions >= 1000000) return

                if (player.points.gte("1e5")) {
                    let totalComps = player.points.div("1e5").log("1e5").floor().toNumber() + 1
                    if (totalComps > 1000000) totalComps = 1000000
                    if (totalComps > completions) {
                        player[this.layer].challenges[this.id] = totalComps
                    }
                }
            },
            unlocked() { 
                let c22 = (player.univ.challenges && player.univ.challenges[22]) ? player.univ.challenges[22] : 0
                return c22 >= 31 
            },
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #0b1a3a 0%, #112244 100%)',
                        'box-shadow': '0px 0px 15px #0055ff',
                        'border-color': '#0055ff',
                        'color': '#ffffff'
                    }
                }
                return {
                    'background': '#111111',
                    'border-color': '#333333',
                    'color': '#a0a0a0'
                }
            }
        },
        32: {
            name() {
                    let completions = player[this.layer].challenges[this.id] || 0
                    return "The Stable? Atomizer<br>(" + completions + "/3)"
                },
            completionLimit: 3,
            challengeDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Money gain is rooted once."
                if (completions == 1) return "Money gain is rooted twice."
                return "Money gain is rooted thrice."
            },
            goalDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "1e50 money"
                if (completions == 1) return "1e34 money"
                return "1e18 money"
            },
            rewardDescription() {
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return "Nothing yet...<br>Next: [1 completion] Unlock Radiation."
                if (completions < 3) return "[1 completion] Unlock Radiation.<br>Next: [3 completions] Unlock Radiation, and add a completion to 'The Stable? Planet'."
                return "[3 completions] Unlock Radiation, and add a completion to 'The Stable? Planet'.<br>Next: You maxed this challenge!"
            },
            canComplete() { 
                let completions = player[this.layer].challenges[this.id] || 0
                if (completions == 0) return player.points.gte("1e50")
                if (completions == 1) return player.points.gte("1e34")
                return player.points.gte("1e18")
            },
            unlocked() { 
                let c22 = (player.univ.challenges && player.univ.challenges[22]) ? player.univ.challenges[22] : 0
                return c22 >= 33 
            },
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        'background': 'linear-gradient(135deg, #0b2b11 0%, #113322 100%)',
                        'box-shadow': '0px 0px 15px #39ff14',
                        'border-color': '#39ff14',
                        'color': '#ffffff'
                    }
                }
                return {
                    'background': '#111111',
                    'border-color': '#333333',
                    'color': '#a0a0a0'
                }
            }
        },
    },
    branches: ['sup'], 
    row: 9, 
    layerShown(){ return hasUpgrade('sup', 21) || hasMilestone('univ', 0)},
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
    layerShown(){return hasMilestone('p',1) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',3) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',6) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',10) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',19) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',29) || hasMilestone('univ',2)},


})

addLayer("per", {
    name: "per", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "η", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        timeSinceUpgrade: 0,
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
    update(diff) {
        if (hasUpgrade('per', 44)) {
            if (player.p.timeSinceUpgrade === undefined || isNaN(player.p.timeSinceUpgrade)) player.p.timeSinceUpgrade = 0
            player.p.timeSinceUpgrade += diff
        }
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
    resetsNothing() {return (hasMilestone('p',34) && !hasMilestone('univ',1)) || Number(player.univ.challenges["21"] || 0) >= 5},
    autoPrestige() {return (hasMilestone('p',34) && !hasMilestone('univ',1)) || Number(player.univ.challenges["21"] || 0) >= 5},
    canBuyMax() {return (hasMilestone('p',34) && !hasMilestone('univ',1)) || Number(player.univ.challenges["21"] || 0) >= 5},
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
            description: "This upgrade is impossible, haha.. well, if you do get this...",
            cost: new Decimal(1),
            unlocked() { return hasMilestone('p', 34) },
            effect() {
                if (!hasUpgrade('per', 44)) return new Decimal(1)
                let seconds = player.p.timeSinceUpgrade || 0
                let t = new Decimal(seconds).max(1)
                let currentPower = Decimal.pow(10, Decimal.pow(10, t))
                let cap = Decimal.pow(10, Decimal.pow(10, 500))
                return currentPower.min(cap)
            },
            effectDisplay() { 
                let seconds = player.p.timeSinceUpgrade || 0
                if (seconds >= 500) return "^" + format(this.effect()) + " <b>(hardcapped)</b>"
                return "^" + format(this.effect()) 
            },
        },
    },
    branches:['good'],
    row: 6, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasMilestone('p',34) && !hasMilestone('univ',1)) || Number(player.univ?.challenges?.["21"] || 0) >= 5},
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
    requires: new Decimal(750), // Can be a function that takes requirement increases into account
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
        return "unfortunately, you've ran out of boosts for now."
    },
    upgrades: {
        11: {
            title: "The point of no return",
            description: "Unlock the 3rd puzzle layer, Tertiary.",
            cost: new Decimal("1e1e200000"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
        },
        12: {
            title: "Air",
            description: "Air Exponent. ^1e25,000 money.",
            cost: new Decimal("1e1e1e6"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return hasMilestone('a', 2) }
        },
        13: {
            title: "The point of return",
            description: "Do NOT trust upgrade expansions. Or...?",
            cost: new Decimal("1e1e4.4444444e7"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return hasMilestone('a', 2) }
        },
    },
    branches:['per'],
    row: 7, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('a',1) || hasMilestone('univ',2)},


})

addLayer("flw", {
    name: "flw", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ι", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0055aa",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Flawless Generators"; 
    },
    requires() {
        let costs = [
            new Decimal("125"),
            new Decimal("375"),
            new Decimal("5000"),
            new Decimal("2.5e9"),
            new Decimal("1.25e39"),
            new Decimal("3e1076047"),
            new Decimal("(e^1.79e308)2"),
        ]
        let currentPoints = player[this.layer].points.toNumber()
        return costs[currentPoints]
    },
    resource: "flawless generators", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('a',3)},
    effectDescription() {
        return "i think these might be a bit buggy (flawed generator :sob:)"
    },
    upgrades: {
        11: {
            title: "Inflation is... gone?",
            description: "+1 money/s, again. Applies after all additions, multiplications, exponents, and the ^0 debuff.",
            cost: new Decimal("1"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
        },
        12: {
            title: "Can finally have some peace... wait",
            description: "x25 money.",
            cost: new Decimal("2"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
        },
        13: {
            title: "We need more boosts, right? No, that can cause inflation, remember?",
            description: "x1e6 money.",
            cost: new Decimal("3"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
        },
        14: {
            title: "First, we play. Then we wait.",
            description: "Boost money based on log(playtime). tip: should wait until it reaches ^5.",
            cost: new Decimal("4"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            effect() {
                let timeLog = Math.log10(player.timePlayed + 1)
                let basePower = Math.max(1, timeLog);
                let cappedPower = Math.min(5, basePower);
                return cappedPower;
            },
            effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id), 3) },
        },
        21: {
            title: "Heydere",
            description: "Not sure about this. ^27,953 money.",
            cost: new Decimal("5"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
        },
        31: {
            title: "[TITLE CARD]",
            description: "^e9.2e18 money. Disable the ^0 debuff.",
            cost: new Decimal("6"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
        },
    },
    branches:['exc'],
    row: 8, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('a',3) || hasMilestone('univ',2)},


})

addLayer("sup", {
    name: "sup", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "κ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0000ff",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Supreme Generators"; 
    },
    requires() {
        let costs = [
            new Decimal("1e6"),
            new Decimal("1e9"),
            new Decimal("(e^12500)2"),
            new Decimal("(e^1.79e308)2"),
        ]
        let currentPoints = player[this.layer].points.toNumber()
        return costs[currentPoints]
    },
    resource: "supreme generators", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('a',5)},
    effectDescription() {
        return "it's almost... amazing."
    },
    upgrades: {
        11: {
            title: "The Timewall Tree- wait, that's taken?",
            description: "Welcome back! x1e500,000,000 money. It's a style, of sorts.",
            cost: new Decimal("1800"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
        },
        12: {
            title: "Is this hardcap preventing us?",
            description: "^^5 money. Don't worry, this is the biggest you'll see for now.",
            cost: new Decimal("1e500000003"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
        },
        13: {
            title: "Break Infinity",
            description: "Unlock... something? (the hardcap is gone.)",
            cost: new Decimal("(e^6)2"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
        },
        14: {
            title: "Flawed.",
            description: "...?",
            cost: new Decimal("3"),
        },
        21: {
            title: "It is part of life.",
            description: "Unlock the [REDACTED]",
            cost: new Decimal("(e^1e15)2"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
        },
    },
    branches:['flw'],
    row: 9, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasMilestone('a',5) && !hasMilestone('univ',1)) || Number(player.univ?.challenges?.["21"] || 0) >= 5},
})

addLayer("abs", {
    name: "abs", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "λ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5500ff",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Absurd Generators"; 
    },
    requires: new Decimal(25),
    resource: "absurd generators", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasChallenge('univ',12)},
    autoPrestige() {return hasUpgrade('rad',23)},
    canBuyMax() {return hasUpgrade('rad',23)},
    effectDescription() {
        return "do you like universes?"
    },
    upgrades: {
        11: {
            title: "Full Loop",
            description: "x2 money, one more time.",
            cost: new Decimal("2"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
        12: {
            title: "Challenging",
            description: "Unlock another Stable? challenge.",
            cost: new Decimal("3"),
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
        13: {
            title: "Black Holes are useful!",
            description() {
                let completions = player.univ.challenges[22] || 0
                return "Multiply money gain based on your Stable? Black Hole challenge completions. Currently: x" + format(Decimal.pow(3, completions))
            },
            cost: new Decimal("2500"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 1 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        14: {
            title: "Black Holes are useful! #2",
            description() {
                let completions = player.univ.challenges[22] || 0
                return "Multiply money gain based on your Stable? Black Hole challenge completions, but this is stronger. Currently: x" + format(Decimal.pow(5, completions))
            },
            cost: new Decimal("25000"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 1 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        21: {
            title: "Black Holes are useful! #3",
            description() {
                let completions = player.univ.challenges[22] || 0
                return "Multiply money gain based on your Stable? Black Hole challenge completions, but this is the strongest. Currently: x" + format(Decimal.pow(10, completions))
            },
            cost: new Decimal("10e6"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 3 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        22: {
            title: "Corruption is useful!",
            description() {
                let completions = player.univ.challenges[21] || 1
                return "Multiply money cap in Stable? Black Hole based on your Stable? Universe Corruption challenge completions, but this upgrade thinks that the boost is always at a minimum of 1 completion's effect. Currently: x" + format(Decimal.pow(2500, completions))
            },
            cost: new Decimal("4"),
            unlocked() { return player.univ.challenges[22] >= 3 },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
        23: {
            title: "Corruption is useful! #2",
            description() {
                let completions = player.univ.challenges[21] || 1
                return "Multiply money cap in Stable? Black Hole based on your Stable? Universe Corruption challenge completions, but better. Currently: x" + format(Decimal.pow(25000, completions))
            },
            cost: new Decimal("1e14"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 5 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        24: {
            title: "Corruption is useful! #3",
            description() {
                let completions = player.univ.challenges[21] || 1
                return "Multiply money cap in Stable? Black Hole based on your Stable? Universe Corruption challenge completions, but it's like REALLY good. Currently: x" + format(Decimal.pow(250000, completions))
            },
            cost: new Decimal("1e18"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 5 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        31: {
            title: "Pretty cool, right?",
            description: "x1e10 money cap in black hole.",
            cost: new Decimal("5"),
            unlocked() { return player.univ.challenges[22] >= 8 },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
        32: {
            title: "Repeat",
            description: "Same as last upgrade.",
            cost: new Decimal("1e26"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 10 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        33: {
            title: "Repeated",
            description: "Same as last upgrade.",
            cost: new Decimal("1e30"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 10 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        34: {
            title: "Repeating",
            description: "Same as last upgrade, but twice.",
            cost: new Decimal("2e34"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 10 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        41: {
            title: "Infinite Repeating",
            description: "Same as last upgrade, but thrice.",
            cost: new Decimal("6"),
            unlocked() { return player.univ.challenges[22] >= 16 },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
        42: {
            title: "Eternal Repeating",
            description: "Same as last upgrade, but tenfold.",
            cost: new Decimal("1e45"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 16 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        43: {
            title: "Can you repeat?",
            description: "Same as last upgrade, but hundredfold. Also, Black Hole's cap is instantly reached.",
            cost: new Decimal("1e61"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 26 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        44: {
            title: "I am a repeater. Help.",
            description: "Same as last upgrade, but thousandfold.",
            cost: new Decimal("2e65"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.univ.challenges[22] >= 26 },
            canAfford() { return player.points.gte(this.cost) },
            pay() {}
        },
        51: {
            title: "Repeating.",
            description: "x1e10,000,000 money cap in Black Hole.",
            cost: new Decimal("7"),
            unlocked() { return player.univ.challenges[22] >= 29 },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
        52: {
            title: "...",
            description: "^50 money cap in Black Hole.",
            cost: new Decimal("3200"),
            unlocked() { return player.univ.challenges[22] >= 34 },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {}
        },
    },
    branches:['sup'],
    row: 10, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasChallenge('univ',12) && !inChallenge('univ',12) && !inChallenge('univ',22)},


})

addLayer("ult", {
    name: "ult", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "μ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#aa00ff",
    //nodeStyle: {
    //    background: "linear-gradient( #ff0000, #0000ff)",
    //    backgroundOrigin: "border-box",
    //    borderColor: "rgba(0,0,0,0.5)",
    //    color: "rgb(255, 255, 255)",
    //},
    tooltip() { 
        return formatWhole(player[this.layer].points) + " Ultra Generators"; 
    },
    requires: new Decimal(1e6),
    resource: "ultra generators", // Name of prestige currency
    baseResource: "money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return hasMilestone('univ',2)},
    effectDescription() {
        return "update... soon.<br>true endgame: prestige 3 in uni 2"
    },
    branches:['abs'],
    row: 11, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',4) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',11) || hasMilestone('univ',2)},


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
    layerShown(){return hasMilestone('p',12) || hasMilestone('univ',2)},


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
        let spoilerHTML = `
            <br><br>
            <details style="background: #1c1c1c; border: 2px solid #66ff47; padding: 8px 12px; border-radius: 6px; cursor: pointer; max-width: 280px; margin: 8px auto; text-align: center; display: inline-block;">
                <summary style="font-weight: bold; color: #dfdfdf; outline: none; user-select: none; font-size: 0.95em;">stuck? click here to reveal answer</summary>
                <div style="margin-top: 6px; color: #ff6b6b; font-size: 1.15em; font-weight: bold; letter-spacing: 2px;">2763</div>
            </details>
        `;
        if (order.length >= 4) {
            return "and unfortunately, that code was wrong. Hint: a battle for an island. (code: " + order.join("") + ")" + spoilerHTML;
        }
        return "and a code is required to progress further. (code: " + (order.join("") || "...i'm still waiting") + ")" + spoilerHTML;
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
    layerShown(){return hasMilestone('p',30) || hasMilestone('univ',2)},


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
    update(diff) {
        if (player.a.points.gte(1)) {
            player[this.layer].typedCode = "THECOOLCOOKIE366";
        }
    },
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
        let spoilerHTML = `
            <br><br>
            <details style="background: #1c1c1c; border: 2px solid #66ff47; padding: 8px 12px; border-radius: 6px; cursor: pointer; max-width: 280px; margin: 8px auto; text-align: center; display: inline-block;">
                <summary style="font-weight: bold; color: #dfdfdf; outline: none; user-select: none; font-size: 0.95em;">stuck? click here to reveal answer</summary>
                <div style="margin-top: 6px; color: #ff6b6b; font-size: 1.15em; font-weight: bold; letter-spacing: 2px;">thecoolcookie366</div>
            </details>
        `;
        return "and you're doing something... but what are you doing?<br> (code: " + (player[this.layer].typedCode || "...i'm being patient") + ")<br> Hint: Think outside the box, maybe... who made this?<br><small>Note: code is supposed to be lowercase, but there is only uppercase.</small>" + spoilerHTML;
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
    layerShown(){return hasMilestone('p',31) || hasMilestone('univ',2)},


})

addLayer("ter", {
    name: "third", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "3rd", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ec5f30",
    nodeStyle: {
        background: "radial-gradient( #ec5f30, #000000)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(0, 0, 0)",
    },
    tooltip() { 
        return formatWhole(player[this.layer].points) + "/∞ Tertiary"; 
    },
    requires() {
        return new Decimal("1e105000");
    },
    resource: "tertiary", // Name of prestige currency
    baseResource: "prestiges", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        if (player[this.layer].points.gte("6.66e666")) {
            return 6.66e-66
        }
        if (player[this.layer].points.toNumber() >= 3.4e38) {
            return 0.01
        }
        if (player[this.layer].points.toNumber() >= 4000) {
            return 0.1
        }
        if (player[this.layer].points.toNumber() >= 3) {
            return 1
        }
        return 10
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    effectDescription() {
        if (hasUpgrade('ter', 11) && hasUpgrade('ter', 12) && hasUpgrade('ter', 13) && hasUpgrade('ter', 14)) {
            return "that was not the puzzle??";
        }
        if (hasUpgrade('exc', 13)) {
            return "maybe this is the puzzle?";
        }
        if (player.ter.points.gte("6.66e666")) {
            return "you're limitless now. Go for the 3rd ascension! But i still don't see the puzzle???";
        }
        if (player.ter.points.gte(3.4e38)) {
            return "and welcome back to inflation! But... where's the puzzle? Get 6.66e666 tertiary.";
        }
        if (player.ter.points.gte(4e3)) {
            return "but i still don't see a puzzle! Try getting 3.4e38 tertiary...";
        }
        if (player.ter.points.gte(3)) {
            return "but where is the puzzle? Try getting 4,000 tertiary...";
        }
        let spoilerHTML = `
            <br><br>
            <details style="background: #1c1c1c; border: 2px solid #66ff47; padding: 8px 12px; border-radius: 6px; cursor: pointer; max-width: 280px; margin: 8px auto; text-align: center; display: inline-block;">
                <summary style="font-weight: bold; color: #dfdfdf; outline: none; user-select: none; font-size: 0.95em;">stuck? click here to reveal answer</summary>
                <div style="margin-top: 6px; color: #ff6b6b; font-size: 1.15em; font-weight: bold; letter-spacing: 2px;">i actually don't remember the code for this... you know what, just get 3 tertiary, you'll figure it out.</div>
            </details>
        `;
        return "what do you think?" + spoilerHTML;
    },
    upgrades: {
        11: {
            title: "Third",
            description: "First",
            cost: new Decimal("1e1.22e66"),
            unlocked() { return hasUpgrade('exc', 13) }
        },
        12: {
            title: "First",
            description: "Fourth",
            cost: new Decimal("1e1.2e66"),
            unlocked() { return hasUpgrade('exc', 13) }
        },
        13: {
            title: "Second",
            description: "Third",
            cost: new Decimal("1e1.21e66"),
            unlocked() { return hasUpgrade('exc', 13) }
        },
        14: {
            title: "Fourth",
            description: "Second",
            cost: new Decimal("1e1.23e66"),
            unlocked() { return hasUpgrade('exc', 13) }
        },
        21: {
            title: "What are you doing?!",
            description: "^1e1,000,000 money.",
            cost: new Decimal("1e1.24e66"),
            unlocked() { return hasUpgrade('ter', 11) && hasUpgrade('ter', 12) && hasUpgrade('ter', 13) && hasUpgrade('ter', 14)}
        },
    },
    resetsNothing() {return hasUpgrade('exc',11)},
    autoPrestige() {return player.ter.points.gte("6.66e666")},
    canBuyMax() {return hasUpgrade('exc',11)},
    branches:['exc'],
    row: 7, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('exc',11) || hasMilestone('univ',2)},


})

addLayer("qua", {
    name: "last", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "4th", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f5ac22",
    nodeStyle: {
        background: "radial-gradient( #f5ac22, #000000)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(0, 0, 0)",
    },
    tooltip() { 
        return formatWhole(player[this.layer].points) + "/∞ Quaternary"; 
    },
    requires() {
        return new Decimal("1e2e502");
    },
    resource: "quaternary", // Name of prestige currency
    baseResource: "prestiges", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 10000,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal (1)
        return exp
    },
    effectDescription() {
        if (player.qua.points.gte(2)) {
            return "sorry man there isn't a puzzle... but there's an upgrade, at least.";
        }
        let spoilerHTML = `
            <br><br>
            <details style="background: #1c1c1c; border: 2px solid #66ff47; padding: 8px 12px; border-radius: 6px; cursor: pointer; max-width: 280px; margin: 8px auto; text-align: center; display: inline-block;">
                <summary style="font-weight: bold; color: #dfdfdf; outline: none; user-select: none; font-size: 0.95em;">stuck? click here to reveal answer</summary>
                <div style="margin-top: 6px; color: #ff6b6b; font-size: 1.15em; font-weight: bold; letter-spacing: 2px;">get 1 perfect generator, then get 2 quaternary.</div>
            </details>
        `;
        return "what is happening." + spoilerHTML;
    },
    upgrades: {
        11: {
            title: "The end of a long adventure",
            description: "You'll never notice the ^^1.000000000000001 money.",
            cost: new Decimal("1e1e2e504"),
            currencyInternalName: "points",
            currencyLocation() { return player },
            currencyDisplayName: "money",
            unlocked() { return player.qua.points.gte(2) }
        },
    },
    resetsNothing() {return hasMilestone('a',4)},
    canBuyMax() {return hasMilestone('a',4)},
    branches:['flw'],
    row: 8, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasMilestone('a',4) || hasMilestone('univ',2)},


})

addLayer("rad", {
    name: "rad",
    symbol: "☢",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        generating: false,
        overloadtimer: 0,
        currentGain: 0,
        cooldownTimer: 0,
        bonusCap: new Decimal(0),
    }},
    color: "#39ff14",
    nodeStyle: {
        background: "linear-gradient(135deg, #1a4d00, #000000)",
        backgroundOrigin: "border-box",
        borderColor: "#39ff14",
        borderWidth: "2px",
        color: "#39ff14",
        boxShadow: "0 0 15px #39ff14, inset 0 0 10px #1a4d00",
        textShadow: "0 0 5px #39ff14",
    },
    tooltip() { 
        return formatWhole(player[this.layer].points) + "% Radioactivity"; 
    },
    requires: new Decimal("1e1e1e1e1e1e6"),
    resource: "radioactivity",
    baseResource: "money",
    baseAmount() {return player.points},
    type: "static",
    exponent: 2,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        exp = new Decimal (1)
        return exp
    },
    maxRadiation() {
        let levels = getBuyableAmount(this.layer, 11)
        let baseCap = new Decimal(100).add(levels.times(5))
        return baseCap.add(player[this.layer].bonusCap || 0)
    },
    maxExpandCoreLevels() {
        let stabilizerLevels = getBuyableAmount(this.layer, 12)
        return new Decimal(3).add(stabilizerLevels)
    },
    effect() {
        return player[this.layer].points.times(0.01).add(1)
    },
    effectDescription() {
        if (player[this.layer].overloadtimer > 0) {
            return "oh noes! you got too much radioactivity and money gain is raised to ^0.001 for " + format(player[this.layer].overloadtimer) + "s!"
        }
        return "boosting money gain by ^" + format(this.effect()) + ". (this is kinda unsafe...)"
    },
    update(diff) {
        let maxRad = tmp[this.layer].maxRadiation

        if (player[this.layer].cooldownTimer > 0) {
            player[this.layer].cooldownTimer = Math.max(0, player[this.layer].cooldownTimer - diff)
        }

        if (hasUpgrade(this.layer, 12)) {
            let bonus = new Decimal(player[this.layer].bonusCap || 0)
            let maxClickableCap = hasUpgrade(this.layer, 22) ? 300 : 60
            
            if (player[this.layer].cooldownTimer <= 0 && player[this.layer].overloadtimer <= 0 && bonus.lt(maxClickableCap)) {
                player[this.layer].bonusCap = new Decimal(player[this.layer].bonusCap || 0).add(1)
                let currentCooldown = 60
                if (hasUpgrade(this.layer, 22)) currentCooldown = 1
                else if (hasUpgrade(this.layer, 21)) currentCooldown = 6
                player[this.layer].cooldownTimer = currentCooldown
            }
        }

        if (hasUpgrade(this.layer, 13)) {
            if (tmp[this.layer].buyables[11].canAfford) {
                buyBuyable(this.layer, 11)
            }
            if (tmp[this.layer].buyables[12].canAfford) {
                buyBuyable(this.layer, 12)
            }
        }

        if (hasUpgrade(this.layer, 14)) {
            player[this.layer].generating = false 
            player[this.layer].overloadtimer = 0  
            player[this.layer].currentGain = 0
            let difference = new Decimal(5).sub(getBuyableAmount(this.layer, 13))
            player[this.layer].points = maxRad.sub(difference).max(0) 
        }
        else {
            if (player[this.layer].overloadtimer > 0) {
                player[this.layer].overloadtimer = player[this.layer].overloadtimer - diff
                if (player[this.layer].overloadtimer <= 0) {
                    player[this.layer].overloadtimer = 0
                    player[this.layer].points = new Decimal(0)
                    player[this.layer].generating = false
                    player[this.layer].currentGain = 0
                }
            }
            if (player[this.layer].generating) {
                player[this.layer].currentGain = Math.random() * 30 - 10
                let gain = new Decimal(player[this.layer].currentGain)
                let nextpoints = player[this.layer].points.add(gain.times(diff))
                if (nextpoints.gte(maxRad)) {
                    player[this.layer].points = maxRad
                    player[this.layer].generating = false
                    player[this.layer].overloadtimer = 10
                    player[this.layer].currentGain = 0
                } else {
                    player[this.layer].points = nextpoints
                }
            } else {
                if (player[this.layer].overloadtimer <= 0) {
                    player[this.layer].currentGain = 0
                }
            }
        }
    },
    clickables: {
        11: {
            display() { 
                let displayValue = format(player[this.layer].currentGain)
                return "<h2>start generating</h2><br>get " + displayValue + " radioactivity/s." 
            },
            canClick() { 
                let maxRad = tmp[this.layer].maxRadiation
                return !player[this.layer].generating && player[this.layer].points.lt(maxRad) && player[this.layer].overloadtimer <= 0 && !hasUpgrade(this.layer, 14) 
            },
            unlocked() { return !hasUpgrade(this.layer, 14) },
            onClick() { player[this.layer].generating = true },
            style: {
                "border-radius": "30px",
                "height": "140px",
                "width": "140px",
                "font-family": "monospace"
            }
        },
        12: {
            display() { 
                return "<h2>stop generating</h2><br>you no longer get radioactivity." 
            },
            canClick() { return player[this.layer].generating && !hasUpgrade(this.layer, 14) },
            unlocked() { return !hasUpgrade(this.layer, 14) },
            onClick() { player[this.layer].generating = false },
            style: {
                "border-radius": "30px",
                "height": "140px",
                "width": "140px",
                "font-family": "monospace"
            }
        },
        13: {
            display() { 
                return "<h2>restart</h2><br>set radioactivity to 0, just in case." 
            },
            canClick() { return player[this.layer].points.gt(0) && player[this.layer].overloadtimer <= 0 },
            onClick() { 
                player[this.layer].points = new Decimal(0)
                player[this.layer].generating = false
            },
            style: {
                "border-radius": "30px",
                "height": "140px",
                "width": "140px",
                "font-family": "monospace"
            }
        },
        14: {
            unlocked() { return hasUpgrade(this.layer, 11) },
            display() { 
                let bonus = new Decimal(player[this.layer].bonusCap || 0)
                let maxClickableCap = hasUpgrade(this.layer, 22) ? 300 : 60
                
                if (bonus.gte(maxClickableCap)) {
                    return "<h2>add</h2><br>maximum limit reached (+" + maxClickableCap + ")"
                }
                if (player[this.layer].cooldownTimer > 0) {
                    return "<h2>overheating</h2><br>cooldown: " + format(player[this.layer].cooldownTimer) + "s.<br> progress: " + formatWhole(bonus) + "/" + maxClickableCap
                }
                return "<h2>add</h2><br>adds +1 to radioactivity cap.<br><br>progress: " + formatWhole(bonus) + "/" + maxClickableCap 
            },
            canClick() { 
                let bonus = new Decimal(player[this.layer].bonusCap || 0)
                let maxClickableCap = hasUpgrade(this.layer, 22) ? 300 : 60
                return player[this.layer].cooldownTimer <= 0 && player[this.layer].overloadtimer <= 0 && bonus.lt(maxClickableCap) 
            },
            onClick() { 
                player[this.layer].bonusCap = new Decimal(player[this.layer].bonusCap || 0).add(1)
                let currentCooldown = 60
                if (hasUpgrade(this.layer, 22)) currentCooldown = 1
                else if (hasUpgrade(this.layer, 21)) currentCooldown = 6
                
                player[this.layer].cooldownTimer = currentCooldown
            },
            style: {
                "border-radius": "30px",
                "height": "140px",
                "width": "140px",
                "font-family": "monospace"
            }
        },
        21: {
            unlocked() { return hasUpgrade(this.layer, 24) },
            display() { 
                return "<h2>the most useless(?) feature</h2><br>adds +0.001 money per click." 
            },
            canClick() { return player[this.layer].overloadtimer <= 0 },
            onClick() { 
                player.points = player.points.add(0.001)
            },
            style: {
                "border-radius": "30px",
                "height": "140px",
                "width": "140px",
                "font-family": "monospace"
            }
        },
    },
    upgrades: {
        11: {
            title: "too radioactive!!",
            description: "unlock a new clickable that increases your radioactivity cap.",
            cost: new Decimal(124.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        12: {
            title: "the afk universe",
            description: "autoclicks the last clickable!",
            cost: new Decimal(149.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        13: {
            title: "the greatest automator that's ever lived.",
            description: "automates the buyables! does NOT automate the 3rd buyable.",
            cost: new Decimal(174.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        14: {
            title: "riskgrade? idk",
            description() {
                let currentPercent = new Decimal(5).sub(getBuyableAmount(this.layer, 13))
                return "you can no longer start/stop radioactivity generation, but radioactivity is always " + formatWhole(currentPercent) + "% below the cap."
            },
            cost: new Decimal(199.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        21: {
            title: "i'm impatient",
            description: "reduces the cooldown of the last clickable to 6s, from 60s.",
            cost: new Decimal(204.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        22: {
            title: "no, i'm like REALLY impatient.",
            description: "increase cap of the last clickable to 300 from 60, and reduce the cooldown AGAIN to 1s, from 6s.",
            cost: new Decimal(236.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        23: {
            title: "can finally forget about it",
            description: "automate absurd generator gain.",
            cost: new Decimal(599.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
        24: {
            title: "the final",
            description: "unlock a clickable that gives +0.001 money per click. how is this useful?",
            cost: new Decimal(723.5),
            currencyDisplayName: "radioactivity",
            currencyInternalName: "points",
            currencyLayer: "rad",
        },
    },
    buyables: {
        11: {
            title: "the greatest upgrade that's ever lived",
            cost(x) { 
                return new Decimal(98).add(x.times(5)) 
            },
            display() { 
                let maxLevels = tmp[this.layer].maxExpandCoreLevels
                return "increase maximum radioactivity cap by +5.\n\n" +
                    "amount: " + formatWhole(player[this.layer].buyables[this.id]) + "/" + formatWhole(maxLevels) + "\n" +
                    "current cap: " + formatWhole(tmp[this.layer].maxRadiation) + "%\n\n" +
                    "cost: " + formatWhole(this.cost()) + " radioactivity"
            },
            canAfford() { 
                let maxLevels = tmp[this.layer].maxExpandCoreLevels
                return player[this.layer].points.gte(this.cost()) && player[this.layer].buyables[this.id].lt(maxLevels)
            },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style: {
                "border-radius": "30px",
                "height": "220px",
                "width": "190px",
                "font-family": "monospace"
            }
        },
        12: {
            title: "peak upgrade",
            cost(x) { 
                return new Decimal(108).add(x.times(10)) 
            },
            display() { 
                return "increase the maximum level cap of the greatest upgrade that's ever lived by +1.\n\n" +
                    "amount: " + formatWhole(player[this.layer].buyables[this.id]) + "\n\n" +
                    "cost: " + formatWhole(this.cost()) + " radioactivity"
            },
            canAfford() { 
                return player[this.layer].points.gte(this.cost()) 
            },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style: {
                "border-radius": "30px",
                "height": "220px",
                "width": "190px",
                "font-family": "monospace"
            }
        },
        13: {
            title: "broke the cap",
            unlocked() { return hasUpgrade(this.layer, 14) },
            cost(x) { 
                return new Decimal(215).add(x.times(15)) 
            },
            display() { 
                let currentDiff = new Decimal(5).sub(player[this.layer].buyables[this.id])
                return "reduces the difference between the 'riskgrade? idk' upgrade cap and radioactivity by 1% per level.\n\n" +
                    "amount: " + formatWhole(player[this.layer].buyables[this.id]) + " / 4\n" +
                    "difference: -" + formatWhole(currentDiff) + "%\n\n" +
                    "cost: " + formatWhole(this.cost()) + " radioactivity"
            },
            canAfford() { 
                return player[this.layer].points.gte(this.cost()) && player[this.layer].buyables[this.id].lt(4)
            },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style: {
                "border-radius": "30px",
                "height": "220px",
                "width": "190px",
                "font-family": "monospace"
            }
        },
    },
    tabFormat: [
        "main-display",
        "blank",
        "effect-description",
        "blank",
        "clickables",
        "blank",
        "upgrades",
        "milestones",
        "blank",
        "buyables"
    ],
    branches:['abs'],
    row: 10,
    layerShown(){return hasChallenge('univ',32)},
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
            rewardsText += "Stage 5 completion reward: You deserve a ^1 money boost, in this economy.<br>";
        }
        if (hasAchievement(this.layer, 22)) {
            rewardsText += "Stage 6 completion reward: hey man i kinda ran out of boosts... uhh<br>";
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
        21: {
            name: "Stage 5 Complete",
            done() { return player.points.gte(1000) && player.a.points.gte(4) },
            tooltip: "Get 1,000 money in Ascension 4+.",
            unlocked() { return player.a.points.gte(1)},
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #00ffff',
                        'border-color': '#00ffff'
                    }
                }
            },
        },
        22: {
            name: "Stage 6 Complete",
            done() { return player.points.gte("(e^1000)2") },
            tooltip: "Reach F1,000 money.",
            unlocked() { return player.a.points.gte(4)},
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #0000ff',
                        'border-color': '#0000ff'
                    }
                }
            },
        },
        23: {
            name: "Stage 7 Complete",
            done() { return false },
            tooltip: "Uh, NO.",
            unlocked() { return player.points.gte("(e^1000)2")},
            style() {
                if (hasAchievement(this.layer, this.id)) {
                    return {
                        'background-color': '#000000',
                        'color': '#ffffff',
                        'box-shadow': '0px 0px 15px #aa00ff',
                        'border-color': '#aa00ff'
                    }
                }
            },
        },
    },
})

addLayer("cmg", {
    symbol: "⛏",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        timeAccumulated: new Decimal(0),
        cooldown: new Decimal(0),
        lastRunLog: "",
        bestDrop: "None",
        bestDropChance: 0,
        currentTab: "mining",
        cookies: new Decimal(0),
        cookieActive: 0,
        currentPickaxe: "default",
        unlockedPickaxes: {
            drill: false,
            black_hole: false
        },
        luck1: new Decimal(0),
        speed1: new Decimal(0),
        luck2: new Decimal(0),
        speed2: new Decimal(0),
        luck3: new Decimal(0),
        speed3: new Decimal(0),
        luck4: new Decimal(0),
        speed4: new Decimal(0),
        luck5: new Decimal(0),
        speed5: new Decimal(0),
        minedOres: {
            p0: new Decimal(0), p0_ionized: new Decimal(0), p0_spectral: new Decimal(0),
            p1: new Decimal(0), p1_ionized: new Decimal(0), p1_spectral: new Decimal(0),
            p2: new Decimal(0), p2_ionized: new Decimal(0), p2_spectral: new Decimal(0),
            p3: new Decimal(0), p3_ionized: new Decimal(0), p3_spectral: new Decimal(0),
            p4: new Decimal(0), p4_ionized: new Decimal(0), p4_spectral: new Decimal(0),
            p5: new Decimal(0), p5_ionized: new Decimal(0), p5_spectral: new Decimal(0),
            p6: new Decimal(0), p6_ionized: new Decimal(0), p6_spectral: new Decimal(0),
            p7: new Decimal(0), p7_ionized: new Decimal(0), p7_spectral: new Decimal(0),
            p8: new Decimal(0), p8_ionized: new Decimal(0), p8_spectral: new Decimal(0),
            p9: new Decimal(0), p9_ionized: new Decimal(0), p9_spectral: new Decimal(0),
            p10: new Decimal(0), p10_ionized: new Decimal(0), p10_spectral: new Decimal(0),
            p11: new Decimal(0), p11_ionized: new Decimal(0), p11_spectral: new Decimal(0),
            p12: new Decimal(0), p12_ionized: new Decimal(0), p12_spectral: new Decimal(0)
        }
    }},
    color: "#89e188",
    nodeStyle: {
        background: "linear-gradient( #89e188, #315131)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "rgb(0, 0, 0)",
    },
    resource: "ores",
    row: "side",
    tooltip() { 
        return "Cookie's Mining Game" 
    },
    processCookieDrops(currentHighest, currentTopName) {
        let cookieBlocks = player.cmg.cookieActive || 0;
        
        let pool = [
            { id: "p12", name: "10^12", chance: 1000000000000, value: new Decimal("1e12") },
            { id: "p11", name: "10^11", chance: 10000000000,  value: new Decimal("1e11") },
            { id: "p10", name: "10^10", chance: 1000000000,   value: new Decimal("1e10") },
            { id: "p9",  name: "10^9",  chance: 100000000,    value: new Decimal("1e9") },
            { id: "p8",  name: "10^8",  chance: 10000000,     value: new Decimal("1e8") },
            { id: "p7",  name: "10^7",  chance: 1000000,      value: new Decimal("1e7") },
            { id: "p6",  name: "10^6",  chance: 100000,       value: new Decimal("1e6") },
            { id: "p5",  name: "10^5",  chance: 10000,        value: new Decimal("1e5") },
            { id: "p4",  name: "10^4",  chance: 1000,         value: new Decimal("1e4") },
            { id: "p3",  name: "10^3",  chance: 100,          value: new Decimal("1e3") },
            { id: "p2",  name: "10^2",  chance: 10,           value: new Decimal("1e2") },
            { id: "p1",  name: "10^1",  chance: 5,            value: new Decimal("1e1") },
            { id: "p0",  name: "10^0",  chance: 1,             value: new Decimal("1e0") },
        ];

        let results = {
            oresGained: new Decimal(0),
            highestRarity: currentHighest,
            topOreName: currentTopName,
            counts: {}
        };

        pool.forEach(ore => {
            results.counts[ore.id] = 0;
            results.counts[ore.id + "_ionized"] = 0;
            results.counts[ore.id + "_spectral"] = 0;
        });

        if (cookieBlocks <= 0) return results;

        let b = player.cmg.buyables || {};

        let ionizedDiv = 50;
        if (b[52] >= 1) ionizedDiv /= 2;
        if (b[61] >= 1) ionizedDiv /= 2;
        if (b[62] >= 1) ionizedDiv /= 1.5;
        if (b[71] >= 1) ionizedDiv /= 2;
        if (b[72] >= 1) ionizedDiv /= 2.5;

        let spectralDiv = 2500;
        if (b[52] >= 1) spectralDiv /= 2;
        if (b[61] >= 1) spectralDiv /= 2;
        if (b[62] >= 1) spectralDiv /= 1.5;
        if (b[71] >= 1) spectralDiv /= 2;
        if (b[72] >= 1) spectralDiv /= 2.5;

        for (let c = 0; c < cookieBlocks; c++) {
            for (let ore of pool) {
                let luckyChance = ore.chance / 1000000000;

                if (Math.random() < (1 / Math.max(1, luckyChance))) {
                    let specCount = 0; 
                    let ionCount = 0; 
                    let normCount = 0;
                    let r = Math.random();
                    
                    if (r < (1 / spectralDiv)) specCount++;
                    else if (r < (1 / ionizedDiv)) ionCount++;
                    else normCount++;

                    results.counts[ore.id] += normCount;
                    results.counts[ore.id + "_ionized"] += ionCount;
                    results.counts[ore.id + "_spectral"] += specCount;

                    results.oresGained = results.oresGained.add(ore.value.mul(normCount));
                    results.oresGained = results.oresGained.add(ore.value.mul(50).mul(ionCount));
                    results.oresGained = results.oresGained.add(ore.value.mul(2500).mul(specCount));

                    let runChanceScore = ore.chance;
                    if (specCount > 0) runChanceScore *= spectralDiv;
                    else if (ionCount > 0) runChanceScore *= ionizedDiv;

                    if (runChanceScore > results.highestRarity) {
                        results.highestRarity = runChanceScore;
                        if (specCount > 0) results.topOreName = "Spectral " + ore.name;
                        else if (ionCount > 0) results.topOreName = "Ionized " + ore.name;
                        else results.topOreName = ore.name;
                    }
                    break; 
                }
            }
        }
        return results;
    },
    getMiningRate() {
        let rate = new Decimal(16);
        if (player.cmg.speed1.gte(1)) rate = rate.add(50);
        if (player.cmg.speed3.gte(1)) rate = rate.add(500);
        if (player.cmg.speed5.gte(1)) rate = rate.add(5000);
        
        if (player.cmg.speed2.gte(1)) rate = rate.mul(2);
        if (player.cmg.speed4.gte(1)) rate = rate.mul(3);

        if (player.cmg.currentPickaxe === "drill") rate = rate.mul(2.5);
        if (player.cmg.currentPickaxe === "black_hole") rate = rate.mul(5);

        return rate;
    },
    update(diff) {
        if (player.cmg.unlocked) {
            player.cmg.timeAccumulated = player.cmg.timeAccumulated.add(new Decimal(diff));
            if (player.cmg.timeAccumulated.gt(172800)) {
                player.cmg.timeAccumulated = new Decimal(172800);
            }
            if (player.cmg.cooldown.gt(0)) {
                player.cmg.cooldown = player.cmg.cooldown.sub(diff).max(0);
            }
        }
    },
    clickables: {
        11: {
            title() { return "<h2>press here to mine</h2>" },
                display() { 
                if (player.cmg.cooldown.gt(0)) {
                    return `<br><b style="color: #ff4444; font-size: 1.1em;">to prevent stupidity there's a cooldown: ${player.cmg.cooldown.toFixed(1)}s</b>`;
                }
                
                let currentRate = layers.cmg.getMiningRate();
                let ops = player.cmg.timeAccumulated.mul(currentRate).floor(); 
                
                let seconds = player.cmg.timeAccumulated.toNumber();
                let days = Math.floor(seconds / 86400);
                let hours = Math.floor((seconds % 86400) / 3600);
                let minutes = Math.floor((seconds % 3600) / 60);
                let secs = Math.floor(seconds % 60);
                
                let timeString = "";
                if (days > 0) timeString += days + "d ";
                if (hours > 0 || days > 0) timeString += hours + "h ";
                if (minutes > 0 || hours > 0 || days > 0) timeString += minutes + "m ";
                timeString += secs + "s";

                return `<br>ready: you will mine <b>${formatWhole(ops)}</b> ores if you click now<br>time waiting for good ores: <b>${timeString}</b><br>(+${format(currentRate)}/sec, max 2 days)`;
            },
            canClick() { 
                return player.cmg.timeAccumulated.gte(1) && player.cmg.cooldown.lte(0); 
            },
            onClick() {
                let currentRate = layers.cmg.getMiningRate();
                let ops = player.cmg.timeAccumulated.mul(currentRate).floor().toNumber();
                let secondsConsumed = ops / currentRate.toNumber();
                player.cmg.timeAccumulated = player.cmg.timeAccumulated.sub(secondsConsumed);
                
                player.cmg.cooldown = new Decimal(10);

                let pool = [
                    { id: "p12", name: "10^12", chance: 1000000000000, value: new Decimal("1e12") },
                    { id: "p11", name: "10^11", chance: 100000000000,  value: new Decimal("1e11") },
                    { id: "p10", name: "10^10", chance: 10000000000,   value: new Decimal("1e10") },
                    { id: "p9",  name: "10^9",  chance: 1000000000,    value: new Decimal("1e9") },
                    { id: "p8",  name: "10^8",  chance: 100000000,     value: new Decimal("1e8") },
                    { id: "p7",  name: "10^7",  chance: 10000000,      value: new Decimal("1e7") },
                    { id: "p6",  name: "10^6",  chance: 1000000,       value: new Decimal("1e6") },
                    { id: "p5",  name: "10^5",  chance: 100000,        value: new Decimal("1e5") },
                    { id: "p4",  name: "10^4",  chance: 10000,         value: new Decimal("1e4") },
                    { id: "p3",  name: "10^3",  chance: 1000,          value: new Decimal("1e3") },
                    { id: "p2",  name: "10^2",  chance: 100,           value: new Decimal("1e2") },
                    { id: "p1",  name: "10^1",  chance: 10,            value: new Decimal("1e1") },
                    { id: "p0",  name: "10^0",  chance: 1,             value: new Decimal("1e0") },
                ];

                let counts = {};
                pool.forEach(ore => {
                    counts[ore.id] = 0;
                    counts[ore.id + "_ionized"] = 0;
                    counts[ore.id + "_spectral"] = 0;
                });

                let totalOresGained = new Decimal(0);
                let highestRarityThisRun = 0;
                let topOreNameThisRun = "None";

                let remainingOps = ops;

                for (let ore of pool) {
                    if (remainingOps <= 0) break;
                    let b = player.cmg.buyables || {};
                    
                    let ionizedDiv = 50;
                    if (b[52] >= 1) ionizedDiv /= 2;
                    if (b[61] >= 1) ionizedDiv /= 2;
                    if (b[62] >= 1) ionizedDiv /= 1.5;
                    if (b[71] >= 1) ionizedDiv /= 2;
                    if (b[72] >= 1) ionizedDiv /= 2.5;

                    let spectralDiv = 2500;
                    if (b[52] >= 1) spectralDiv /= 2;
                    if (b[61] >= 1) spectralDiv /= 2;
                    if (b[62] >= 1) spectralDiv /= 1.5;
                    if (b[71] >= 1) spectralDiv /= 2;
                    if (b[72] >= 1) spectralDiv /= 2.5;

                    let expected = remainingOps / ore.chance;
                    let amountFound = 0;

                    if (expected > 20 || remainingOps > 50000) {
                        let sd = Math.sqrt(expected * (1 - 1 / ore.chance));
                        let u1 = Math.random(); let u2 = Math.random();
                        let normalValue = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
                        amountFound = Math.max(0, Math.floor(expected + normalValue * sd));
                    } else {
                        for (let j = 0; j < remainingOps; j++) {
                            if (Math.random() < (1 / ore.chance)) amountFound++;
                        }
                    }

                    if (amountFound > remainingOps) amountFound = remainingOps;
                    
                    if (amountFound > 0) {
                        remainingOps -= amountFound;

                        let specCount = 0; let ionCount = 0; let normCount = 0;

                        if (amountFound > 20) {
                            let expSpec = amountFound / spectralDiv;
                            let sdSpec = Math.sqrt(expSpec * (1 - 1 / spectralDiv));
                            let nu1 = Math.random(); let nu2 = Math.random();
                            let normSpec = Math.sqrt(-2.0 * Math.log(nu1)) * Math.cos(2.0 * Math.PI * nu2);
                            specCount = Math.max(0, Math.floor(expSpec + normSpec * sdSpec));
                            if (specCount > amountFound) specCount = amountFound;

                            let remAfterSpec = amountFound - specCount;
                            let expIon = remAfterSpec / ionizedDiv;
                            let sdIon = Math.sqrt(expIon * (1 - 1 / ionizedDiv));
                            let ni1 = Math.random(); let ni2 = Math.random();
                            let normIon = Math.sqrt(-2.0 * Math.log(ni1)) * Math.cos(2.0 * Math.PI * ni2);
                            ionCount = Math.max(0, Math.floor(expIon + normIon * sdIon));
                            if (ionCount > remAfterSpec) ionCount = remAfterSpec;

                            normCount = remAfterSpec - ionCount;
                        } else {
                            for (let k = 0; k < amountFound; k++) {
                                let r = Math.random();
                                if (r < (1 / spectralDiv)) specCount++;
                                else if (r < (1 / ionizedDiv)) ionCount++;
                                else normCount++;
                            }
                        }

                        counts[ore.id] = normCount;
                        counts[ore.id + "_ionized"] = ionCount;
                        counts[ore.id + "_spectral"] = specCount;

                        totalOresGained = totalOresGained.add(ore.value.mul(normCount));
                        totalOresGained = totalOresGained.add(ore.value.mul(50).mul(ionCount));
                        totalOresGained = totalOresGained.add(ore.value.mul(2500).mul(specCount));

                        if (specCount > 0 && (ore.chance * spectralDiv) > highestRarityThisRun) {
                            highestRarityThisRun = ore.chance * spectralDiv;
                            topOreNameThisRun = "Spectral " + ore.name;
                        }
                        if (ionCount > 0 && (ore.chance * ionizedDiv) > highestRarityThisRun) {
                            highestRarityThisRun = ore.chance * ionizedDiv;
                            topOreNameThisRun = "Ionized " + ore.name;
                        }
                        if (normCount > 0 && ore.chance > highestRarityThisRun) {
                            highestRarityThisRun = ore.chance;
                            topOreNameThisRun = ore.name;
                        }
                    }
                }

                let cookieResults = layers.cmg.processCookieDrops(highestRarityThisRun, topOreNameThisRun);
                
                totalOresGained = totalOresGained.add(cookieResults.oresGained);
                highestRarityThisRun = cookieResults.highestRarity;
                topOreNameThisRun = cookieResults.topOreName;
                for (let id in cookieResults.counts) {
                    counts[id] += cookieResults.counts[id];
                }

                player.cmg.cookieActive = 0;

                player.cmg.points = player.cmg.points.add(totalOresGained);
                for (let id in counts) {
                    player.cmg.minedOres[id] = player.cmg.minedOres[id].add(counts[id]);
                }

                if (highestRarityThisRun > 0 && (player.cmg.bestDrop === "None" || highestRarityThisRun > player.cmg.bestDropChance)) {
                    player.cmg.bestDrop = `${topOreNameThisRun} (1/${format(highestRarityThisRun)})`;
                    player.cmg.bestDropChance = highestRarityThisRun;
                }

                let log = `welcome back! you have mined ${formatWhole(ops)} ores!\n`;
                log += `--------------------------------------------------\n`;
                pool.forEach(ore => {
                    if (counts[ore.id + "_spectral"] > 0) {
                        if (ore.id === "p12") {
                            log += `<span style="color: #660000; font-weight: bold;">Spectral 10^12: ${formatWhole(counts[ore.id + "_spectral"])} found!!!</span>\n`;
                        } else {
                            log += `<span style="color: #e100ff;">Spectral ${ore.name}: ${formatWhole(counts[ore.id + "_spectral"])} found!!!</span>\n`;
                        }
                    }
                    if (counts[ore.id + "_ionized"] > 0) {
                        if (ore.id === "p12") {
                            log += `<span style="color: #aa0000; font-weight: bold;">Ionized 10^12: ${formatWhole(counts[ore.id + "_ionized"])} found!</span>\n`;
                        } else {
                            log += `<span style="color: #00b8ff;">Ionized ${ore.name}: ${formatWhole(counts[ore.id + "_ionized"])} found!</span>\n`;
                        }
                    }
                    if (counts[ore.id] > 0) {
                        if (ore.id === "p12") {
                            log += `<span style="color: #ff0000; font-weight: bold;">10^12: ${formatWhole(counts[ore.id])} found!</span>\n`;
                        }
                        else {
                            log += `<span>${ore.name}: ${formatWhole(counts[ore.id])} found</span>\n`;
                        }
                    }
                });
                log += `--------------------------------------------------\n`;
                if (highestRarityThisRun > 0) {
                    log += `<span style="color: #ffee33; font-weight: bold; text-shadow: 0 0 5px rgba(255,238,51,0.3);">rarest ore: ${topOreNameThisRun} (1/${format(highestRarityThisRun)})</span>`;
                }
                player.cmg.lastRunLog = log;
            },
            style() {
                let baseStyle = {
                    width: "400px",
                    height: "115px",
                    borderRadius: "8px",
                    color: "#89e188",
                    borderColor: "#89e188",
                    transition: "all 0.2s",
                    cursor: "pointer"
                };
                if (player.cmg.cooldown.gt(0)) {
                    baseStyle.backgroundColor = "#241414";
                    baseStyle.borderColor = "#ff4444";
                    baseStyle.color = "#ff4444";
                    baseStyle.cursor = "not-allowed";
                } else {
                    baseStyle.backgroundColor = "#315131";
                }
                return baseStyle;
            }
        },
        12: {
        title() { return "press here to use ability" },
        display() {
            let seconds = player.cmg.timeAccumulated.toNumber();
            if (player.cmg.currentPickaxe !== "black_hole") {
                return `<span style="color: #666;">you need the black hole for this!</span>`;
            }
            if (seconds < 28800) {
                let displayDays = Math.floor(seconds / 86400);
                let displayHours = Math.floor((seconds % 86400) / 3600);
                let displayMinutes = Math.floor((seconds % 3600) / 60);
                let displaySeconds = Math.floor(seconds % 60);

                let timePart = "";
                if (displayDays > 0) timePart += displayDays + "d ";
                timePart += displayHours + "h " + displayMinutes + "m " + displaySeconds + "s";

                return `<span style="color: #ff9999; font-weight: bold;">not ready yet! wait at least 8 hours!<br>Charge: ${timePart} / 8h 0m 0s</span>`;
            }
            return `<span style="color: #ffffff; font-weight: bold; text-shadow: 0 0 5px #ff0000;">ready...</span><br><span style="color: #ffb3b3;">all ores will turn ionized and gain an ore with x1e11 luck</span>`;
        },
        canClick() {
            return true;
        },
        onClick() {
            if (player.cmg.currentPickaxe !== "black_hole") return;
            
            let seconds = player.cmg.timeAccumulated.toNumber();
            if (seconds < 28800) {
                let currentHours = Math.floor(seconds / 3600);
                player.cmg.lastRunLog = `<div style="color: #ff4444; font-weight: bold; text-align: center; font-family: monospace;">[ nuh uh ]<br>that ability of yours isn't charged yet. wait until 8 hours and then we'll see.</div>`;
                return;
            }

            let currentRate = layers.cmg.getMiningRate();
            let ops = player.cmg.timeAccumulated.mul(currentRate).floor().toNumber();
            let secondsConsumed = ops / currentRate.toNumber();
            player.cmg.timeAccumulated = player.cmg.timeAccumulated.sub(secondsConsumed);
            
            player.cmg.cooldown = new Decimal(10);

            let pool = [
                { id: "p12", name: "10^12", chance: 1000000000000, value: new Decimal("1e12") },
                { id: "p11", name: "10^11", chance: 100000000000,  value: new Decimal("1e11") },
                { id: "p10", name: "10^10", chance: 10000000000,   value: new Decimal("1e10") },
                { id: "p9",  name: "10^9",  chance: 1000000000,    value: new Decimal("1e9") },
                { id: "p8",  name: "10^8",  chance: 100000000,     value: new Decimal("1e8") },
                { id: "p7",  name: "10^7",  chance: 10000000,      value: new Decimal("1e7") },
                { id: "p6",  name: "10^6",  chance: 1000000,       value: new Decimal("1e6") },
                { id: "p5",  name: "10^5",  chance: 100000,        value: new Decimal("1e5") },
                { id: "p4",  name: "10^4",  chance: 10000,         value: new Decimal("1e4") },
                { id: "p3",  name: "10^3",  chance: 1000,          value: new Decimal("1e3") },
                { id: "p2",  name: "10^2",  chance: 100,           value: new Decimal("1e2") },
                { id: "p1",  name: "10^1",  chance: 10,           value: new Decimal("1e1") },
                { id: "p0",  name: "10^0",  chance: 1,             value: new Decimal("1e0") },
            ];

            let counts = {};
            pool.forEach(ore => {
                counts[ore.id] = 0;
                counts[ore.id + "_ionized"] = 0;
                counts[ore.id + "_spectral"] = 0;
            });

            let totalOresGained = new Decimal(0);
            let highestRarityThisRun = 0;
            let topOreNameThisRun = "None";
            let remainingOps = ops;

            for (let ore of pool) {
                if (remainingOps <= 0) break;
                let expected = remainingOps / ore.chance;
                let amountFound = 0;

                if (expected > 20 || remainingOps > 100000) {
                    let sd = Math.sqrt(expected * (1 - 1 / ore.chance));
                    let u1 = Math.random(); let u2 = Math.random();
                    let normalValue = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
                    amountFound = Math.max(0, Math.floor(expected + normalValue * sd));
                } else {
                    for (let j = 0; j < remainingOps; j++) {
                        if (Math.random() < (1 / ore.chance)) amountFound++;
                    }
                }

                if (amountFound > remainingOps) amountFound = remainingOps;
                
                if (amountFound > 0) {
                    remainingOps -= amountFound;
                    
                    counts[ore.id + "_ionized"] = amountFound;
                    totalOresGained = totalOresGained.add(ore.value.mul(50).mul(amountFound));

                    let runChanceScore = ore.chance * 50;
                    if (runChanceScore > highestRarityThisRun) {
                        highestRarityThisRun = runChanceScore;
                        topOreNameThisRun = "Ionized " + ore.name;
                    }
                }
            }

            for (let ore of pool) {
                let luckyChance = ore.chance / 100000000000;
                if (Math.random() < (1 / Math.max(1, luckyChance))) {
                    counts[ore.id] += 1;
                    totalOresGained = totalOresGained.add(ore.value);
                    
                    if (ore.chance > highestRarityThisRun) {
                        highestRarityThisRun = ore.chance;
                        topOreNameThisRun = ore.name;
                    }
                    break;
                }
            }

            player.cmg.points = player.cmg.points.add(totalOresGained);
            for (let id in counts) {
                player.cmg.minedOres[id] = player.cmg.minedOres[id].add(counts[id]);
            }

            if (highestRarityThisRun > 0 && (player.cmg.bestDrop === "None" || highestRarityThisRun > player.cmg.bestDropChance)) {
                player.cmg.bestDrop = `${topOreNameThisRun} (1/${format(highestRarityThisRun)})`;
                player.cmg.bestDropChance = highestRarityThisRun;
            }

            let log = `you used the abil! just about ${formatWhole(ops)} ores have been turned into ionized ores!\n`;
            log += `--------------------------------------------------\n`;
            pool.forEach(ore => {
                if (counts[ore.id + "_ionized"] > 0) {
                    if (ore.id === "p12") {
                        log += `<span style="color: #0000aa; font-weight: bold;">Ionized 10^12: ${formatWhole(counts[ore.id + "_ionized"])} found!</span>\n`;
                    } else {
                        log += `<span style="color: #00b8ff;">Ionized ${ore.name}: ${formatWhole(counts[ore.id + "_ionized"])} found!</span>\n`;
                    }
                }
                if (counts[ore.id] > 0) {
                    if (ore.id === "p12") {
                        log += `<span style="color: #0000ff; font-weight: bold;">10^12: ${formatWhole(counts[ore.id])} found</span>\n`;
                    } else {
                        log += `<span style="color: #ff00ff; font-weight: bold;">${ore.name}: ${formatWhole(counts[ore.id])} found</span>\n`;
                    }
                }
            });
            log += `--------------------------------------------------\n`;
            if (highestRarityThisRun > 0) {
                log += `<span style="color: #ffee33; font-weight: bold; text-shadow: 0 0 5px rgba(255,238,51,0.3);">rarest ore: ${topOreNameThisRun} (1/${format(highestRarityThisRun)})</span>`;
            }
            player.cmg.lastRunLog = log;
        },
        style() {
            let isReady = player.cmg.timeAccumulated.toNumber() >= 28800;
            let backColor = isReady ? "#4a1212" : "#221111";
            let borderColor = isReady ? "#ff3333" : "#552222";
            
            if (player.cmg.currentPickaxe !== "black_hole") {
                backColor = "#111";
                borderColor = "#333";
            }
            
            return {
                "width": "180px",
                "height": "60px",
                "border-radius": "5px",
                "font-family": "monospace",
                "border": `1px solid ${borderColor}`,
                "background-color": backColor,
                "cursor": "pointer",
                "color": "#ffffff",
                "margin-top": "10px"
            };
        }
        },
        21: {
            title() { return "mining" },
            canClick() { return player.cmg.currentTab !== "mining" },
            onClick() { player.cmg.currentTab = "mining" },
            style() {
                return {
                    width: "180px", height: "40px", borderRadius: "5px", margin: "5px",
                    backgroundColor: player.cmg.currentTab === "mining" ? "#315131" : "#151a15",
                    color: player.cmg.currentTab === "mining" ? "#89e188" : "#a0a0a0",
                    borderColor: "#315131", cursor: "pointer"
                }
            }
        },
        22: {
            title() { return "upgrades" },
            canClick() { return player.cmg.currentTab !== "upgrades" },
            onClick() { player.cmg.currentTab = "upgrades" },
            style() {
                return {
                    width: "180px", height: "40px", borderRadius: "5px", margin: "5px",
                    backgroundColor: player.cmg.currentTab === "upgrades" ? "#315131" : "#151a15",
                    color: player.cmg.currentTab === "upgrades" ? "#89e188" : "#a0a0a0",
                    borderColor: "#315131", cursor: "pointer"
                }
            }
        },
        31: {
            title() { return "<h3>Mining go brr</h3>" },
            display() {
                let bought = player.cmg.speed1.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>+50 ores/s</span>" : 
                "<br>very simple upgrade. +50 ores/s.<br><br>Cost:<br><span style='color:#ff4933; font-weight: bold;'>1,000 of 10^1</span>";
            },
            canClick() { return player.cmg.speed1.lt(1) && player.cmg.minedOres.p1.gte(1000) },
            onClick() {
                player.cmg.minedOres.p1 = player.cmg.minedOres.p1.sub(1000);
                player.cmg.speed1 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.speed1.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        32: {
            title() { return "<h3>:shock:</h3>" },
            display() {
                let bought = player.cmg.speed2.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>ore speed has automagically doubled</span>" : 
                "<br>x2 ores/s.<br><br>Cost:<br><span style='color:#ff9633; font-weight: bold;'>500 of 10^2</span><br><span style='color:#00b8ff; font-weight: bold;'>5 of Ionized 10^2</span>";
            },
            canClick() { return player.cmg.speed2.lt(1) && player.cmg.minedOres.p2.gte(500) && player.cmg.minedOres.p2_ionized.gte(5) },
            onClick() {
                player.cmg.minedOres.p2 = player.cmg.minedOres.p2.sub(500);
                player.cmg.minedOres.p2_ionized = player.cmg.minedOres.p2_ionized.sub(5);
                player.cmg.speed2 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.speed2.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        41: {
            title() { return "<h3>lag machine >:)</h3>" },
            display() {
                let bought = player.cmg.speed3.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>+500 ores/s</span>" : 
                "<br>+500 ores/s. warning: this will increaase lag.<br><br>Cost:<br><span style='color:#b5ff33; font-weight: bold;'>5,000 of 10^4</span>";
            },
            canClick() { return player.cmg.speed3.lt(1) && player.cmg.minedOres.p4.gte(5000) },
            onClick() {
                player.cmg.minedOres.p4 = player.cmg.minedOres.p4.sub(5000);
                player.cmg.speed3 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.speed3.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        42: {
            title() { return "<h3>how much lag do you want? cookie: yes</h3>" },
            display() {
                let bought = player.cmg.speed4.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>x3 ores/s! how wonderful</span>" : 
                "<br>x3 ores/s. why do you need this?<br><br>Cost:<br><span style='color:#33ffcc; font-weight: bold;'>500 of 10^6</span><br><span style='color:#e100ff; font-weight: bold;'>2 of Spectral 10^4</span>";
            },
            canClick() { return player.cmg.speed4.lt(1) && player.cmg.minedOres.p6.gte(500) && player.cmg.minedOres.p4_spectral.gte(2) },
            onClick() {
                player.cmg.minedOres.p6 = player.cmg.minedOres.p6.sub(500);
                player.cmg.minedOres.p4_spectral = player.cmg.minedOres.p4_spectral.sub(2);
                player.cmg.speed4 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.speed4.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        51: {
            title() { return "<h3>it's the FINAL lag machine!</h3>" },
            display() {
                let bought = player.cmg.speed5.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>+5,000 ores/s. man is your device that good or...</span>" : 
                "<br>+5,000 ores/s. big warning: a full 2 day mine can take a minute to load<br><br>Cost:<br><span style='color:#b833ff; font-weight: bold;'>5 of 10^10</span>";
            },
            canClick() { return player.cmg.speed5.lt(1) && player.cmg.minedOres.p10.gte(5) },
            onClick() {
                player.cmg.minedOres.p10 = player.cmg.minedOres.p10.sub(5);
                player.cmg.speed5 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.speed5.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        52: {
            title() { return "<h3>Magnet</h3>" },
            display() {
                let bought = player.cmg.luck1.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>you now get x2 luck on ore variants!</span>" : 
                "<br>ionized and spectral ores are x2 more common.<br><br>Cost:<br><span style='color:#00b8ff; font-weight: bold;'>50 of Ionized 10^0</span>";
            },
            canClick() { return player.cmg.luck1.lt(1) && player.cmg.minedOres.p0_ionized.gte(50) },
            onClick() {
                player.cmg.minedOres.p0_ionized = player.cmg.minedOres.p0_ionized.sub(50);
                player.cmg.luck1 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.luck1.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        61: {
            title() { return "<h3>Magnet but it's the same</h3>" },
            display() {
                let bought = player.cmg.luck2.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>enjoy this luck boost!</span>" : 
                "<br>x2 variant luck again. what<br><br>Cost:<br><span style='color:#00b8ff; font-weight: bold;'>10 of Ionized 10^6</span>";
            },
            canClick() { return player.cmg.luck2.lt(1) && player.cmg.minedOres.p6_ionized.gte(10) },
            onClick() {
                player.cmg.minedOres.p6_ionized = player.cmg.minedOres.p6_ionized.sub(10);
                player.cmg.luck2 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.luck2.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        62: {
            title() { return "<h3>how much variant luck?!!?</h3>" },
            display() {
                let bought = player.cmg.luck3.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>it's all variant luck! x1.5 of it.</span>" : 
                "<br>x1.5 variant luck. you're insane.<br><br>Cost:<br><span style='color:#9e271b; font-weight: bold;'>750,000,000 of 10^0</span>";
            },
            canClick() { return player.cmg.luck3.lt(1) && player.cmg.minedOres.p0.gte(750e6) },
            onClick() {
                player.cmg.minedOres.p0 = player.cmg.minedOres.p0.sub(750e6);
                player.cmg.luck3 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.luck3.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        71: {
            title() { return "<h3>yo chill</h3>" },
            display() {
                let bought = player.cmg.luck4.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>that's too much luck man.. but fine, x2.</span>" : 
                "<br>variants are x2 more common, again!<br><br>Cost:<br><span style='color:#00b8ff; font-weight: bold;'>1 of Ionized 10^9</span>";
            },
            canClick() { return player.cmg.luck4.lt(1) && player.cmg.minedOres.p9_ionized.gte(1) },
            onClick() {
                player.cmg.minedOres.p9_ionized = player.cmg.minedOres.p9_ionized.sub(1);
                player.cmg.luck4 = new Decimal(1);
            },
            style() {
                let bought = player.cmg.luck4.gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        72: {
            title() { return "<h3>if you buy this, you're insane</h3>" },
            display() {
                let bought = player.cmg.luck5.gte(1);
                return bought ? "<br><b style='color:#89e188;'>you bought it!</b><br><br><span style='color:#89e188;'>ur did it, if you see this you got x2.5 variant luck and a special role in the discord server</span>" : 
                "<br>x2.5 variant luck. it's so over<br><br>Cost:<br><span class='special-12'>1 of 10^12</span>";
            },
            canClick() { return player.cmg.luck5.lt(1) && player.cmg.minedOres.p12.gte(1) },
            onClick() {
                player.cmg.minedOres.p12 = player.cmg.minedOres.p12.sub(1);
                player.cmg.luck5 = new Decimal(1);
            },
            style() {
                let bought = (player.cmg.luck5 || new Decimal(0)).gte(1);
                return {
                    width: "220px", height: "140px", borderRadius: "6px", margin: "10px", padding: "10px",
                    backgroundColor: bought ? "#1d2d1d" : (this.canClick() ? "#315131" : "#222"),
                    color: bought ? "#89e188" : "#fff", borderColor: "#315131", cursor: bought ? "not-allowed" : (this.canClick() ? "pointer" : "not-allowed")
                }
            }
        },
        81: {
            title() { return "Cookie" },
            display() { 
                return `
                    <div style="font-size: 11px; color: #a0a0a0; font-family: monospace;">
                        <b>Boost:</b>
                        mine 1 ore with <span style="color: #ffee33; font-weight: bold;">x1e10 Luck!</span>(woah dmg reference)<br>
                        you got this many: <span style="color: #fff; font-weight: bold;">${formatWhole(player.cmg.cookies)}</span>
                    </div>
                `;
            },
            canClick() { return true }, 
            onClick() { 
            },
            style() { 
            return { 
                "width": "180px", 
                "height": "140px", 
                "border-radius": "5px 0 0 5px", 
                "border": "1px solid #315131", 
                "background-color": "#111111", 
                "color": "#fff",
                "pointer-events": "none", 
                "transform": "none",
                "box-shadow": "none",
                //"transform": "translateY(9.05px) !important" 
            };
        }
        },
        82: {
                title() { return "Buy" },
                display() { 
                    return `
                        <div style="font-size: 11px; font-family: monospace; line-height: 1">
                            <b>Cost:</b>
                            <span style="color: #666;">3,125x</span> <span style="color: #33ff57; font-weight: bold;">10^5</span>
                            <span style="color: #666;">625x</span> <span style="color: #33ffcc; font-weight: bold;">10^6</span>
                            <span style="color: #666;">125x</span> <span style="color: #33b8ff; font-weight: bold;">10^7</span>
                            <span style="color: #666;">25x</span> <span style="color: #335eff; font-weight: bold;">10^8</span>
                            <span style="color: #666;">5x</span> <span style="color: #6e33ff; font-weight: bold;">10^9</span>
                        </div>
                    `;
                },
                canClick() { 
                    let ores = player.cmg.minedOres;
                    if (!ores || !ores["p5"] || !ores["p6"] || !ores["p7"] || !ores["p8"] || !ores["p9"]) return false;
                    return ores["p5"].gte(3125) && ores["p6"].gte(625) && ores["p7"].gte(125) && ores["p8"].gte(25) && ores["p9"].gte(5);
                },
                onClick() {
                    let ores = player.cmg.minedOres;
                    ores["p5"] = ores["p5"].sub(3125);
                    ores["p6"] = ores["p6"].sub(625);
                    ores["p7"] = ores["p7"].sub(125);
                    ores["p8"] = ores["p8"].sub(25);
                    ores["p9"] = ores["p9"].sub(5);

                    player.cmg.cookies = player.cmg.cookies.add(1);
                },
                style() {
                    return { 
                        "width": "130px", 
                        "height": "140px", 
                        "border-radius": "0", 
                        "font-family": "monospace",
                        "border-top": "1px solid #315131", 
                        "border-bottom": "1px solid #315131", 
                        "border-left": "none", 
                        "border-right": "none",
                        "background-color": this.canClick() ? "#1c301c" : "#131313", 
                        "cursor": this.canClick() ? "pointer" : "not-allowed",
                        "color": "#ffffff"
                    };
                }
        },
        83: {
        title() { return "Use" },
        display() { 
            let activeCount = player.cmg.cookieActive || 0;
            if (activeCount >= 10) return "<b style='color:#ff33ec;'>Woah! You maxed it out!</b><br><br>+10 ores with x1e10 luck ready";
            if (activeCount > 0) return `<b>active: ${activeCount}/10</b><br><br>click to use one more cookie!!`;
            return "use a cookie to get +1 ore with x1e10 luck!";
        },
        canClick() { 
            if (!player.cmg.cookies) return false;
            let activeCount = player.cmg.cookieActive || 0;
            return player.cmg.cookies.gte(1) && activeCount < 10;
        },
        onClick() {
            player.cmg.cookies = player.cmg.cookies.sub(1);
            if (player.cmg.cookieActive === undefined) player.cmg.cookieActive = 0;
            player.cmg.cookieActive += 1; 
        },
        style() {
            let activeCount = player.cmg.cookieActive || 0;
            return { 
                "width": "160px", 
                "height": "140px", 
                "border-radius": "0 5px 5px 0", 
                "font-family": "monospace", 
                "border": "1px solid #315131",
                "background-color": this.canClick() ? "#1c241c" : (activeCount > 0 ? "#2d1c30" : "#111111"), 
                "cursor": this.canClick() ? "pointer" : "default",
                "color": "#ffffff"
            };
        }
        },
        91: {
        title() {
            return player.cmg.currentPickaxe === "default" ? "default" : "default";
        },
        display() {
        if (player.cmg.currentPickaxe === "default") {
            return `<div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                we all started here! <span style="color: #89e188; font-weight: bold;">x1 ores/s.</span><br>
                it's equipped!
                </div>
            `;
            }
        return `
            <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                we all started here! <span style="color: #89e188; font-weight: bold;">x1 ores/s.</span><br>
                click to equip!
                </div>
            `;
        },
        canClick() {
            return player.cmg.currentPickaxe !== "default";
        },
        onClick() {
            player.cmg.currentPickaxe = "default";
        },
        style() {
            return {
                "width": "180px",
                "height": "160px",
                "border-radius": "5px",
                "font-family": "monospace",
                "border": "1px solid #315131",
                "background-color": player.cmg.currentPickaxe === "default" ? "#152a15" : "#1c301c",
                "cursor": this.canClick() ? "pointer" : "default",
                "color": "#ffffff"
            };
        }
        },
        92: {
        title() {
            if (player.cmg.currentPickaxe === "drill") return "drill";
            if (player.cmg.unlockedPickaxes.drill) return "drill";
            return "drill";
        },
        display() {
            if (player.cmg.currentPickaxe === "drill") {
                return `
                <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                    ore multi is now <span style="color: #89e188; font-weight: bold;">x2.5/s!</span><br>
                    it's equipped!
                `;
            }
            if (player.cmg.unlockedPickaxes.drill) {
                return `
                <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                    ore multi is now <span style="color: #89e188; font-weight: bold;">x2.5/s!</span><br>
                    click to equip!
                </div>
                `;
            }
            return `
                <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                    increases ore multi to <span style="color: #89e188; font-weight: bold;">x2.5/s!</span><br>
                    <b>cost:</b><br>
                    <span style="color: #666;">125,000x</span> <span style="color: #ffee33; font-weight: bold;">10^3</span>
                    <span style="color: #666;">30,000x</span> <span style="color: #b5ff33; font-weight: bold;">10^4</span>
                </div>
            `;
        },
        canClick() {
            if (player.cmg.currentPickaxe === "drill") return false;
            if (player.cmg.unlockedPickaxes.drill) return true;
            let ores = player.cmg.minedOres;
            if (!ores || !ores["p3"] || !ores["p4"]) return false;
            return ores["p3"].gte(125e3) && ores["p4"].gte(30e3);
        },
        onClick() {
            if (player.cmg.unlockedPickaxes.drill) {
                player.cmg.currentPickaxe = "drill";
                return;
            }
            let ores = player.cmg.minedOres;
            ores["p3"] = ores["p3"].sub(125e3);
            ores["p4"] = ores["p4"].sub(30e3);
            player.cmg.unlockedPickaxes.drill = true;
            player.cmg.currentPickaxe = "drill";
        },
        style() {
            let activeColor = "#131313";
            if (player.cmg.currentPickaxe === "drill") activeColor = "#152a15";
            else if (this.canClick()) activeColor = "#1c301c";
            
            return {
                "width": "180px",
                "height": "160px",
                "border-radius": "5px",
                "font-family": "monospace",
                "border": "1px solid #315131",
                "background-color": activeColor,
                "cursor": this.canClick() ? "pointer" : "not-allowed",
                "color": "#ffffff"
            };
        }
        },
        93: {
        title() {
            if (player.cmg.currentPickaxe === "black_hole") return "black hole";
            if (player.cmg.unlockedPickaxes.black_hole) return "black hole";
            return "black hole";
        },
        display() {
            if (player.cmg.currentPickaxe === "black_hole") {
                return `
                <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                    ore multi is now <span style="color: #89e188; font-weight: bold;">x5/s!</span><br>
                    it's equipped!
                </div>
                `;
            }
            if (player.cmg.unlockedPickaxes.black_hole) {
                return `
                <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                    ore multi is now <span style="color: #89e188; font-weight: bold;">x5/s!</span><br>
                    click to equip!
                </div>
                `;
            }
            return `
                <div style="font-size: 11px; font-family: monospace; line-height: 1; padding-top: 5px;">
                    ore multi goes brr again. <span style="color: #89e188; font-weight: bold;">x5 ores/s!</span> also unlocks... the ability button?<br>
                    <b>cost:</b><br>
                    <span style="color: #666;">1x</span> <span style="color: #b833ff; font-weight: bold;">10^10</span>
                    <span style="color: #666;">1.00e10x</span> <span style="color: #9e271b; font-weight: bold;">10^0</span>
                </div>
            `;
        },
        canClick() {
            if (player.cmg.currentPickaxe === "black_hole") return false;
            if (player.cmg.unlockedPickaxes.black_hole) return true;
            let ores = player.cmg.minedOres;
            if (!ores || !ores["p10"] || !ores["p0"]) return false;
            return ores["p10"].gte(1) && ores["p0"].gte(10000000000);
        },
        onClick() {
            if (player.cmg.unlockedPickaxes.black_hole) {
                player.cmg.currentPickaxe = "black_hole";
                return;
            }
            let ores = player.cmg.minedOres;
            ores["p10"] = ores["p10"].sub(1);
            ores["p0"] = ores["p0"].sub(10000000000);
            player.cmg.unlockedPickaxes.black_hole = true;
            player.cmg.currentPickaxe = "black_hole";
        },
        style() {
            let activeColor = "#131313";
            if (player.cmg.currentPickaxe === "black_hole") activeColor = "#152a15";
            else if (this.canClick()) activeColor = "#1c301c";

            return {
                "width": "180px",
                "height": "160px",
                "border-radius": "5px",
                "font-family": "monospace",
                "border": "1px solid #315131",
                "background-color": activeColor,
                "cursor": this.canClick() ? "pointer" : "not-allowed",
                "color": "#ffffff"
            };
        }
        },
    },
    tabFormat: [
    "blank",
    ["display-text", function() {
        return `
        <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 20px;">
            <button onclick="player.cmg.currentTab = 'mining'" 
                    style="width: 140px; height: 40px; border-radius: 5px; border: 1px solid #315131; cursor: pointer; font-family: monospace; font-size: 14px; font-weight: bold; transition: all 0.2s;
                    background-color: ${player.cmg.currentTab === 'mining' ? '#315131' : '#151a15'};
                    color: ${player.cmg.currentTab === 'mining' ? '#89e188' : '#a0a0a0'};">
                mining
            </button>
            <button onclick="player.cmg.currentTab = 'upgrades'" 
                    style="width: 140px; height: 40px; border-radius: 5px; border: 1px solid #315131; cursor: pointer; font-family: monospace; font-size: 14px; font-weight: bold; transition: all 0.2s;
                    background-color: ${player.cmg.currentTab === 'upgrades' ? '#315131' : '#151a15'};
                    color: ${player.cmg.currentTab === 'upgrades' ? '#89e188' : '#a0a0a0'};">
                upgrades
            </button>
            <button onclick="player.cmg.currentTab = 'items'" 
                    style="width: 140px; height: 40px; border-radius: 5px; border: 1px solid #315131; cursor: pointer; font-family: monospace; font-size: 14px; font-weight: bold; transition: all 0.2s;
                    background-color: ${player.cmg.currentTab === 'items' ? '#315131' : '#151a15'};
                    color: ${player.cmg.currentTab === 'items' ? '#89e188' : '#a0a0a0'};">
                items
            </button>
            <button onclick="player.cmg.currentTab = 'pickaxes'" 
                    style="width: 140px; height: 40px; border-radius: 5px; border: 1px solid #315131; cursor: pointer; font-family: monospace; font-size: 14px; font-weight: bold; transition: all 0.2s;
                    background-color: ${player.cmg.currentTab === 'pickaxes' ? '#315131' : '#151a15'};
                    color: ${player.cmg.currentTab === 'pickaxes' ? '#89e188' : '#a0a0a0'};">
                pickaxes
            </button>
        </div>
        `;
    }],
    "blank", 
    ["column", [
        ["row", [["clickable", function() { return player.cmg.currentTab === "mining" ? 11 : null }]]],
        ["row", [["clickable", function() { return player.cmg.currentTab === "mining" ? 12 : null }]]],
        ["display-text", function() {
           if (player.cmg.currentTab !== "mining") return "";
            return `
                <div style="height: 30px;"></div>
                <h3 style="margin: 0 auto; display: block;">[ last mine ]</h3>
            `
        }],
        "blank",
        ["display-text", function() {
            if (player.cmg.currentTab !== "mining") return "";
            return player.cmg.lastRunLog ? 
                `<div style="text-align: left; background: #0c0f0c; color: #89e188; padding: 15px; border-radius: 5px; font-family: monospace; border: 1px solid #315131; width: 450px; margin: 0 auto; white-space: pre-wrap; font-size: 13px;">${player.cmg.lastRunLog}</div>` : 
                `<div style="color: #a0a0a0; font-style: italic; margin-bottom: 10px;">hi bro are you ready to mine</div>`;
        }],
        ["display-text", function() {
            if (player.cmg.currentTab !== "upgrades") return "";
            return "<h3>[ upgrades oooooo ]<h3><br>";
        }],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 31 : null }],
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 52 : null }]
        ]],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 32 : null }],
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 61 : null }]
        ]],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 41 : null }],
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 62 : null }]
        ]],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 42 : null }],
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 71 : null }]
        ]],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 51 : null }],
            ["clickable", function() { return player.cmg.currentTab === "upgrades" ? 72 : null }]
        ]],
        ["display-text", function() {
            if (player.cmg.currentTab !== "items") return "";
            let activeCount = player.cmg.cookieActive || 0;
            return `
                <h3>[ items ]</h3><br>
                <div style="color: #ffee33; font-family: monospace; margin-bottom: 20px; font-size: 15px;">
                    boosts: ` + (activeCount > 0 ? 
                        `<span style="color:#ff33ec; font-weight:bold;">Cookie (` + activeCount + `) - you will now get ` + activeCount + ` ores with x1e10 luck! [not used on ability!!]</span>` : 
                        '<span style="color:#666;">nothing yet...</span>') + `
                </div>
            `;
        }],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "items" ? 81 : null }],
            ["clickable", function() { return player.cmg.currentTab === "items" ? 82 : null }],
            ["clickable", function() { return player.cmg.currentTab === "items" ? 83 : null }]
        ]],
        ["display-text", function() {
            if (player.cmg.currentTab !== "pickaxes") return "";
            return `
                <h3>[ do you like pickaxes? ]</h3><br>
                <div style="color: #ffee33; font-family: monospace; margin-bottom: 20px; font-size: 14px;">
                currently equipped: <span style="color:#89e188; font-weight:bold;">${player.cmg.currentPickaxe.replace('_', ' ')}</span>
                </div>
            `;
        }],
        ["row", [
            ["clickable", function() { return player.cmg.currentTab === "pickaxes" ? 91 : null }],
            ["clickable", function() { return player.cmg.currentTab === "pickaxes" ? 92 : null }],
            ["clickable", function() { return player.cmg.currentTab === "pickaxes" ? 93 : null }]
        ]]
    ]],
        "blank",
        "blank",
        ["display-text", "<h3>[ ores ]</h3>"],
        "blank",
        ["display-text", function() {
            let listHTML = "";
            let pool = [
                { id: "pinf",  label: "10^NaN",  chanceStr: "1/NaN",    baseColor: "style='color: #000000;'" },
                { id: "p12", label: "10^12", chanceStr: "1/1e12", baseColor: "class='special-12'" },
                { id: "p11", label: "10^11", chanceStr: "1/1e11", baseColor: "style='color: #ff33ec;'" },
                { id: "p10", label: "10^10", chanceStr: "1/1e10", baseColor: "style='color: #b833ff;'" },
                { id: "p9",  label: "10^9",  chanceStr: "1/1e9",  baseColor: "style='color: #6e33ff;'" },
                { id: "p8",  label: "10^8",  chanceStr: "1/100,000,000",  baseColor: "style='color: #335eff;'" },
                { id: "p7",  label: "10^7",  chanceStr: "1/10,000,000",  baseColor: "style='color: #33b8ff;'" },
                { id: "p6",  label: "10^6",  chanceStr: "1/1,000,000",  baseColor: "style='color: #33ffcc;'" },
                { id: "p5",  label: "10^5",  chanceStr: "1/100,000",  baseColor: "style='color: #33ff57;'" },
                { id: "p4",  label: "10^4",  chanceStr: "1/10,000",  baseColor: "style='color: #b5ff33;'" },
                { id: "p3",  label: "10^3",  chanceStr: "1/1,000",  baseColor: "style='color: #ffee33;'" },
                { id: "p2",  label: "10^2",  chanceStr: "1/100",  baseColor: "style='color: #ff9633;'" },
                { id: "p1",  label: "10^1",  chanceStr: "1/10",   baseColor: "style='color: #ff4933;'" },
                { id: "p0",  label: "10^0",  chanceStr: "1/1",    baseColor: "style='color: #9e271b;'" },
            ];

            let currentIonModifier = 50;
            if (player.cmg.luck1.gte(1)) currentIonModifier /= 2;
            if (player.cmg.luck2.gte(1)) currentIonModifier /= 2;
            if (player.cmg.luck3.gte(1)) currentIonModifier /= 1.5;
            if (player.cmg.luck4.gte(1)) currentIonModifier /= 2;
            if (player.cmg.luck5.gte(1)) currentIonModifier /= 2.5;

            let currentSpecModifier = 2500;
            if (player.cmg.luck1.gte(1)) currentSpecModifier /= 2;
            if (player.cmg.luck2.gte(1)) currentSpecModifier /= 2;
            if (player.cmg.luck3.gte(1)) currentSpecModifier /= 1.5;
            if (player.cmg.luck4.gte(1)) currentSpecModifier /= 2;
            if (player.cmg.luck5.gte(1)) currentSpecModifier /= 2.5;

            pool.forEach(ore => {
                let oreChance = ore.id === "p2" ? 100 : (ore.id === "p1" ? 10 : (ore.id === "p0" ? 1 : Number("1e" + ore.id.substring(1))));
                let ionChanceValue = oreChance * currentIonModifier;
                let specChanceValue = oreChance * currentSpecModifier;

                listHTML += `<div style="margin-bottom: 8px; border-left: 2px solid #252d25; padding-left: 6px;">`;
                listHTML += `<span ${ore.baseColor}>${ore.label} (${ore.chanceStr}):</span> <span style="font-weight: bold; color:#fff;">${formatWhole(player.cmg.minedOres[ore.id])}</span><br>`;
                listHTML += `<span style="color: #00b8ff; font-size: 0.9em; padding-left: 10px;">! Ionized ${ore.label} (1/${format(ionChanceValue)}):</span> <span style="color: #00b8ff; font-weight: bold; font-size: 0.9em;">${formatWhole(player.cmg.minedOres[ore.id + "_ionized"])}</span><br>`;
                listHTML += `<span style="color: #e100ff; font-size: 0.9em; padding-left: 10px;">!!! Spectral ${ore.label} (1/${format(specChanceValue)}):</span> <span style="color: #e100ff; font-weight: bold; font-size: 0.9em;">${formatWhole(player.cmg.minedOres[ore.id + "_spectral"])}</span>`;
                listHTML += `</div>`;
            });

            return `
            <style>
                @keyframes rainbow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .special-12 {
                    background: linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff);
                    background-size: 300% 300%;
                    animation: rainbow 4s ease infinite;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: bold;
                    text-shadow: 0 0 8px rgba(255,255,255,0.2);
                }
            </style>
            <div style="text-align: left; background: #151a15; padding: 15px; border-radius: 5px; border: 1px solid #315131; width: 450px; margin: 0 auto; line-height: 1.4; font-family: monospace; max-height: 500px; overflow-y: auto;">
                <b>Best:</b> <span style="color: #ffcc00">${player.cmg.bestDrop}</span><br>
                <hr style="border-color: #315131; margin: 10px 0;">
                <b>Inventory:</b><br><br>
                ${listHTML}
            </div>
            `;
        }],
        "blank"
    ]
})

addLayer("mas", {
    symbol: "☉",
    position: 3,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        cookies: new Decimal(0),
        chocolateCookies: new Decimal(0),
        darkChocolateCookies: new Decimal(0),
        money: new Decimal(0),
        conveyorCash: new Decimal(0),
        dropperTimer: new Decimal(0),
        starDust: new Decimal(0),
        stars: new Decimal(0),
        stardustThrown: new Decimal(0),
        quantumShards: new Decimal(0),
        quantumDiceCharges: 0,
        quantumDiceTimer: 0,
        quantumDiceLastRoll: 0,
        quantumDiceEffect: new Decimal(1),
        timeFlux: new Decimal(0),
        timeSpeed: new Decimal(1),
    }},
    color: "#ffd700",
    nodeStyle: {
        background: "linear-gradient(#ffe259, #ffa751)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(212, 175, 55, 0.8)",
        color: "rgb(0, 0, 0)",
    },
    resource: "power", 
    row: "side",
    tooltip() { 
        return "Extra" 
    },
    update(diff) {
        let currentSpeed = new Decimal(player.mas.timeSpeed || 1)
        if (currentSpeed.gt(1)) {
            let fluxInSeconds = new Decimal(player.mas.timeFlux || 0).mul(60)
            let consumptionRate = currentSpeed.sub(1).div(currentSpeed)
            let newFluxSeconds = fluxInSeconds.sub(consumptionRate.mul(diff))
            
            if (newFluxSeconds.lte(0)) {
                player.mas.timeFlux = new Decimal(0)
                player.mas.timeSpeed = new Decimal(1) 
                currentSpeed = new Decimal(1)
            }
            else {
                player.mas.timeFlux = newFluxSeconds.div(60) 
            }
        }
        else if (currentSpeed.eq(1) && player.mas) {
            let currentFlux = new Decimal(player.mas.timeFlux || 0)
            let lvl92 = getBuyableAmount("mas", 92)
            let rawBonusGen = lvl92.mul(0.00138889)
            if (rawBonusGen.gt(1)) {
                rawBonusGen = new Decimal(1).add(rawBonusGen.sub(1).sqrt())
            }
            let finalFluxGainRate = new Decimal(0.00277778).add(rawBonusGen)
            let fluxGain = finalFluxGainRate.mul(diff)
            let capUpgradeLevel = getBuyableAmount("mas", 91)
            let dynamicCap = new Decimal(360).mul(new Decimal(2).pow(capUpgradeLevel))
            player.mas.timeFlux = currentFlux.add(fluxGain).min(dynamicCap)
        }
        if (player.mas && player.mas.timeSpeed) {
            player.devSpeed = new Decimal(player.mas.timeSpeed).toNumber()
        }
        if (player.mas.dropperTimer.gt(0)) {
            player.mas.dropperTimer = player.mas.dropperTimer.sub(diff).max(0)
        }
        let baseDropperGen = new Decimal(0)
        if (getBuyableAmount("mas", 51).gte(1)) {
            baseDropperGen = baseDropperGen.add(0.01)
        }
        if (getBuyableAmount("mas", 52).gt(0)) {
            baseDropperGen = baseDropperGen.add(buyableEffect("mas", 52))
        }
        if (getBuyableAmount("mas", 53).gt(0)) {
            baseDropperGen = baseDropperGen.add(buyableEffect("mas", 53))
        }
        if (getBuyableAmount("mas", 54).gt(0)) {
            baseDropperGen = baseDropperGen.add(buyableEffect("mas", 54))
        }
        if (getBuyableAmount("mas", 55).gt(0)) {
            baseDropperGen = baseDropperGen.add(buyableEffect("mas", 55))
        }
        if (getBuyableAmount("mas", 61).gt(0) || getBuyableAmount("mas", 64).gt(0)) {
            let redAmt = getBuyableAmount("mas", 61).add(getBuyableAmount("mas", 64))
            let redEffect = new Decimal(1).add(redAmt.mul(0.15))
            baseDropperGen = baseDropperGen.mul(redEffect)
        }
        if (getBuyableAmount("mas", 62).gt(0) || getBuyableAmount("mas", 64).gt(0)) {
            let greenAmt = getBuyableAmount("mas", 62).add(getBuyableAmount("mas", 64))
            let greenEffect = new Decimal(1).add(greenAmt.mul(0.15))
            baseDropperGen = baseDropperGen.mul(greenEffect)
        }
        if (getBuyableAmount("mas", 63).gt(0) || getBuyableAmount("mas", 64).gt(0)) {
            let blueAmt = getBuyableAmount("mas", 63).add(getBuyableAmount("mas", 64))
            let blueEffect = new Decimal(1).add(blueAmt.mul(0.15))
            baseDropperGen = baseDropperGen.mul(blueEffect)
        }
        if (getBuyableAmount("mas", 64).gt(0)) {
            baseDropperGen = baseDropperGen.mul(buyableEffect("mas", 64))
        }
        if (getBuyableAmount("mas", 71).gt(0)) {
            baseDropperGen = baseDropperGen.mul(buyableEffect("mas", 71))
        }
        if (getBuyableAmount("mas", 69).gte(1) && player.mas.conveyorCash.gt(0)) {
            player.mas.money = player.mas.money.add(player.mas.conveyorCash)
            player.mas.conveyorCash = new Decimal(0)
        }
        if (getBuyableAmount("mas", 75).gte(1)) {
            if (player.mas.money.gte("1e90")) {
                let resetStardustGain = player.mas.money.div("1e90").floor()
                if (getBuyableAmount("mas", 72).gt(0)) {
                    resetStardustGain = resetStardustGain.mul(buyableEffect("mas", 72)).floor()
                }
                let passiveStardustRate = resetStardustGain.mul(0.001)
                player.mas.starDust = player.mas.starDust.add(passiveStardustRate.mul(diff))
            }
        }
        if (player.mas.quantumDiceTimer > 0) {
            player.mas.quantumDiceTimer = Math.max(0, player.mas.quantumDiceTimer - diff)
            if (player.mas.quantumDiceTimer <= 0) {
                player.mas.quantumDiceEffect = new Decimal(1)
            }
        }
        let activeDiceEffect = new Decimal(player.mas.quantumDiceEffect || 1)
        if (player.mas.quantumDiceTimer > 0 && !activeDiceEffect.eq(1)) {
            baseDropperGen = baseDropperGen.mul(activeDiceEffect)
        }
        player.mas.conveyorCash = player.mas.conveyorCash.add(baseDropperGen.mul(diff))
        if (hasUpgrade("mas", 11)) {
            let gain = (hasUpgrade("mas", 62) || hasUpgrade("mas", 103)) ? new Decimal(1) : new Decimal(0.01)
            if (hasUpgrade("mas", 21)) gain = gain.mul(2)
            if (hasUpgrade("mas", 23)) gain = gain.mul(3)
            if (hasUpgrade("mas", 31)) gain = gain.mul(5)
            if (hasUpgrade("mas", 33)) gain = gain.mul(3.33333333)
            if (hasUpgrade("mas", 51)) gain = gain.mul(15)
            if (hasUpgrade("mas", 61)) gain = gain.pow(2)
            if (hasUpgrade("mas", 63)) gain = gain.pow(3)
            if (hasUpgrade("mas", 71)) gain = gain.mul(upgradeEffect("mas", 71))
            if (hasUpgrade("mas", 73)) gain = gain.mul(upgradeEffect("mas", 73))
            if (hasUpgrade("mas", 101)) gain = gain.pow(0.25)
            if (hasUpgrade("mas", 101) && getBuyableAmount("mas", 41).gt(0)) {
                gain = gain.pow(buyableEffect("mas", 41))
            }
            if (hasUpgrade("mas", 101) && getBuyableAmount("mas", 42).gt(0)) {
                gain = gain.pow(buyableEffect("mas", 42))
            }
            if (hasUpgrade("mas", 101) && getBuyableAmount("mas", 43).gt(0)) {
                gain = gain.pow(buyableEffect("mas", 43))
            }
            if (hasUpgrade("mas", 113)) gain = gain.mul("1e171320")
            if (hasUpgrade("mas", 111)) gain = gain.pow(upgradeEffect("mas", 111))
            if (hasUpgrade("mas", 121)) gain = gain.pow(upgradeEffect("mas", 121))
            player.mas.cookies = player.mas.cookies.add(gain.mul(diff))
        }
        if (hasUpgrade("mas", 91)) {
            for (let id = 11; id <= 81; id++) {
                if (tmp.mas.upgrades[id] && tmp.mas.upgrades[id].unlocked && !hasUpgrade("mas", id)) {
                    let cost = tmp.mas.upgrades[id].cost
                    let currency = tmp.mas.upgrades[id].currencyInternalName || "cookies"
                    
                    if (currency === "cookies" && player.mas.cookies.gte(cost)) {
                        player.mas.cookies = player.mas.cookies.sub(cost)
                        player.mas.upgrades.push(id)
                        if (tmp.mas.upgrades[id].onPurchase) tmp.mas.upgrades[id].onPurchase()
                    } else if (currency === "chocolateCookies" && player.mas.chocolateCookies.gte(cost)) {
                        player.mas.chocolateCookies = player.mas.chocolateCookies.sub(cost)
                        player.mas.upgrades.push(id)
                        if (tmp.mas.upgrades[id].onPurchase) tmp.mas.upgrades[id].onPurchase()
                    }
                }
                if (hasUpgrade("mas", 121)) {
                    if (player.mas.chocolateCookies.gte("1e37")) {
                        let resetGain = player.mas.chocolateCookies.div("1e37").log(2).floor().add(1)
                        if (hasUpgrade("mas", 112)) resetGain = resetGain.mul(upgradeEffect("mas", 112))
                        
                        let passiveDarkGain = resetGain.mul(0.001)
                        player.mas.darkChocolateCookies = player.mas.darkChocolateCookies.add(passiveDarkGain.mul(diff))
                    }
                }
            }
            if (player.mas.cookies.gte(1000)) {
                let resetGain = player.mas.cookies.div(1000).floor()
                if (hasUpgrade("mas", 72)) resetGain = resetGain.mul(upgradeEffect("mas", 72))
                let passiveGain = resetGain.mul(0.001)
                player.mas.chocolateCookies = player.mas.chocolateCookies.add(passiveGain.mul(diff))
            }
        }
    },
    buyMaxTycoon() {
        if (getBuyableAmount(this.layer, 73).lt(1)) return;
        let ids = [52, 53, 54, 55]; 
        for (let id of ids) {
            let buyable = layers[this.layer].buyables[id];
            if (!buyable || !buyable.unlocked()) continue;
            while (buyable.canAfford() && getBuyableAmount(this.layer, id).lt(40)) {
                buyable.buy();
            }
        }
    },
    buyMaxUpgraders() {
        if (getBuyableAmount(this.layer, 74).lt(1)) return; 
        let ids = [61, 62, 63, 64]; 
        for (let id of ids) {
            let buyable = layers[this.layer].buyables[id];
            if (!buyable || !buyable.unlocked()) continue;
            while (buyable.canAfford() && getBuyableAmount(this.layer, id).lt(255)) {
                buyable.buy();
            }
        }
    },
    tabFormat: [
        "subtabs", 
        "blank",
        ["row", [
            ["column", [
                ["microtabs", "stuff"]
            ]]
        ]]
    ],
    microtabs: {
        stuff: {
            "Main": {
                buttonStyle: {
                    "background-color": "#181a1b",
                    "color": "#e8e6e3",
                    "border": "2px solid #535a5c",
                    "font-weight": "bold"
                },
                content: [
                    "blank",
                    ["display-text", function() { 
                        return "You have <h2 style='color: #ffd700; text-shadow: 0 0 10px rgba(255,215,0,0.4)'>" + formatWhole(player.mas.points) + "</h2> " + tmp.mas.resource + "."
                    }],
                    "blank",
                    ["display-text", function() { 
                        let completedMilestones = Object.keys(tmp.mas.milestones).filter(id => hasMilestone("mas", id)).length
                        let romanNumerals = ["0", "I", "II", "III", "IV", "V", "VI", "VII"]
                        let romanLevel = romanNumerals[completedMilestones] || "0"
                        let colorfulRoman = "<span style='background: linear-gradient(90deg, #ffe259, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0px 0px 5px rgba(255,167,81,0.6)); font-weight: bold'>" + romanLevel + "</span>"
                        return "<h2>You are at Mastery Level " + colorfulRoman + "</h2>"
                    }],
                    "blank",
                    ["buyables", [1,2,3]],
                ]
            },
            "Currencies": {
                buttonStyle: {
                    "background-color": "#0d2613",
                    "color": "#a9dfbf",
                    "border": "2px solid #27ae60",
                    "font-weight": "bold"
                },
                unlocked() { 
                    return hasMilestone("mas", 0) 
                },
                content: [
                    "blank",
                    ["display-text", "<h2><span>Full list of currencies :)</span></h2>"],
                    "blank",
                    ["display-text", "<h3><span style='color: #a0a0a0;'>--- Main ---</span></h3>"],
                    "blank",
                    ["display-text", function() { 
                        return "Money: <span style='color: #ffffff; font-weight: bold;'>" + format(player.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.plv && tmp.plv.layerShown)) return ""
                        return "Player Level: <span style='color: #c388e1; font-weight: bold;'>" + formatWhole(player.plv.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        return "Power: <span style='color: #ffd700; font-weight: bold;'>" + formatWhole(player.mas.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        let completedMilestones = Object.keys(tmp.mas.milestones).filter(id => hasMilestone("mas", id)).length
                        let romanNumerals = ["0", "I", "II", "III", "IV", "V", "VI", "VII"]
                        let romanLevel = romanNumerals[completedMilestones] || "0"
                        
                        return "Mastery Level: <span style='color: #ff5722; font-weight: bold;'>" + romanLevel + "</span>"
                    }],
                    "blank",
                    ["display-text", function() { 
                        if (!(tmp.cmg && tmp.cmg.layerShown)) return ""
                        return "CMG Ores: <span style='color: #89e188; font-weight: bold;'>" + formatWhole(player.cmg.points) + "</span><br><small style='color: #666666'>might be inaccurate</small>"
                    }],
                    "blank",
                    ["display-text", function() {
                        if (!hasMilestone("mas", 1)) return ""
                        return "Cookies: <span style='color: #ffb366; font-weight: bold;'>" + format(player.mas.cookies) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!hasUpgrade("mas", 42)) return ""
                        return "Chocolate Cookies: <span style='color: #d27d2d; font-weight: bold;'>" + formatWhole(player.mas.chocolateCookies || 0) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!hasUpgrade("mas", 81)) return ""
                        return "Dark Chocolate Cookies: <span style='color: #4a2711; font-weight: bold;'>" + formatWhole(player.mas.darkChocolateCookies || 0) + "</span>"
                    }],
                    "blank",
                    ["display-text", function() { 
                        if (!hasMilestone("mas", 2)) return ""
                        return "Cash: <span style='color: #85bb65; font-weight: bold;'>$" + format(player.mas.money || 0) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!hasMilestone("mas", 2)) return ""
                        return "Cash to claim: <span style='color: #00ff00; font-weight: bold;'>$" + format(player.mas.conveyorCash || 0) + "</span>"
                    }],
                    "blank",
                    ["display-text", function() { 
                        if (!hasMilestone("mas", 3)) return ""
                        return "Stardust: <span style='color: #9bf6ff; font-weight: bold; text-shadow: 0px 0px 4px #00b4d8;'>" + formatWhole(player.mas.starDust || 0) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!hasMilestone("mas", 3)) return ""
                        return "Stars: <span style='color: #ffd166; font-weight: bold; text-shadow: 0px 0px 4px #f77f00;'>" + formatWhole(player.mas.stars || 0) + "</span>"
                    }],
                    "blank",
                    ["display-text", function() { 
                        if (!hasMilestone("mas", 4)) return ""
                        return "Quantum Shards: <span style='color: #ffb7ff; font-weight: bold; text-shadow: 0px 0px 4px #d800dc;'>" + formatWhole(player.mas.quantumShards || 0) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!hasMilestone("mas", 4)) return ""
                        return "Rolls: <span style='color: #ff4da6; font-weight: bold; text-shadow: 0px 0px 4px #ff00ff;'>" + formatWhole(player.mas.quantumDiceCharges || 0) + "</span>"
                    }],
                    "blank",
                    ["display-text", "<h3><span style='color: #a0a0a0;'>--- Resets ---</span></h3>"],
                    "blank",
                    ["display-text", function() { 
                        if (!(tmp.p && tmp.p.layerShown)) return ""
                        return "Prestige <span style='color: #545454; font-weight: bold;'>" + formatWhole(player.p.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.a && tmp.a.layerShown)) return ""
                        return "Ascension <span style='color: #9a9797; font-weight: bold;'>" + formatWhole(player.a.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.univ && tmp.univ.layerShown)) return ""
                        return "Universe <span style='color: #d6d5d5; font-weight: bold;'>" + formatWhole(player.univ.points) + "</span>"
                    }],
                    "blank",
                    ["display-text", "<h3><span style='color: #a0a0a0;'>--- Generators ---</span></h3>"],
                    "blank",
                    ["display-text", function() { 
                        if (!(tmp.terri && tmp.terri.layerShown)) return ""
                        return "Terrible Generators: <span style='color: #ff0000; font-weight: bold;'>" + formatWhole(player.terri.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.awf && tmp.awf.layerShown)) return ""
                        return "Awful Generators: <span style='color: #d42a00; font-weight: bold;'>" + formatWhole(player.awf.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.med && tmp.med.layerShown)) return ""
                        return "Mediocre Generators: <span style='color: #a95600; font-weight: bold;'>" + formatWhole(player.med.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.alr && tmp.alr.layerShown)) return ""
                        return "Alright Generators: <span style='color: #7e8100; font-weight: bold;'>" + formatWhole(player.alr.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.dec && tmp.dec.layerShown)) return ""
                        return "Decent Generators: <span style='color: #53ac00; font-weight: bold;'>" + formatWhole(player.dec.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.good && tmp.good.layerShown)) return ""
                        return "Good Generators: <span style='color: #28d700; font-weight: bold;'>" + formatWhole(player.good.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.per && tmp.per.layerShown)) return ""
                        return "Perfect Generators: <span style='color: #00ff00; font-weight: bold;'>" + formatWhole(player.per.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.exc && tmp.exc.layerShown)) return ""
                        return "Exquisite Generators: <span style='color: #00aa55; font-weight: bold;'>" + formatWhole(player.exc.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.flw && tmp.flw.layerShown)) return ""
                        return "Flawless Generators: <span style='color: #0055aa; font-weight: bold;'>" + formatWhole(player.flw.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.sup && tmp.sup.layerShown)) return ""
                        return "Supreme Generators: <span style='color: #0000ff; font-weight: bold;'>" + formatWhole(player.sup.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.abs && tmp.abs.layerShown)) return ""
                        return "Absurd Generators: <span style='color: #5500ff; font-weight: bold;'>" + formatWhole(player.abs.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.ult && tmp.ult.layerShown)) return ""
                        return "Ultra Generators: <span style='color: #aa00ff; font-weight: bold;'>" + formatWhole(player.ult.points) + "</span>"
                    }],
                    "blank",
                    ["display-text", "<h3><span style='color: #a0a0a0;'>--- Side ---</span></h3>"],
                    "blank",
                    ["display-text", function() { 
                        if (!(tmp.dia && tmp.dia.layerShown)) return ""
                        return "Diamonds: <span style='color: #00ffff; font-weight: bold;'>" + formatWhole(player.dia.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.xp && tmp.xp.layerShown)) return ""
                        return "XP: <span style='color: #0000bb; font-weight: bold;'>" + formatWhole(player.xp.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.lv && tmp.lv.layerShown)) return ""
                        return "Level: <span style='color: #bb0000; font-weight: bold;'>" + formatWhole(player.lv.points) + "</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.pri && tmp.pri.layerShown)) return ""
                        return "Primary: <span style='color: #455666; font-weight: bold;'>" + formatWhole(player.pri.points) + "/5</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.snd && tmp.snd.layerShown)) return ""
                        return "Secondary: <span style='color: #35658d; font-weight: bold;'>" + formatWhole(player.snd.points) + "/1</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.ter && tmp.ter.layerShown)) return ""
                        return "Tertiary: <span style='color: #ec5f30; font-weight: bold;'>" + formatWhole(player.ter.points) + "/∞</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.qua && tmp.qua.layerShown)) return ""
                        return "Quaternary: <span style='color: #f5ac22; font-weight: bold;'>" + formatWhole(player.qua.points) + "/∞</span>"
                    }],
                    ["display-text", function() { 
                        if (!(tmp.rad && tmp.rad.layerShown)) return ""
                        return "Radioactivity: <span style='color: #39ff14; font-weight: bold;'>" + formatWhole(player.rad.points) + "%" + "</span>"
                    }],,
                    "blank"
                ]
            },
            "Upgrade Tree (1/3)": {
                buttonStyle: {
                    "background-color": "#4a1c00",
                    "color": "#ffffff",
                    "border": "2px solid #e65100",
                    "font-weight": "bold"
                },
                unlocked() { 
                    return hasMilestone("mas", 1) 
                },
                content: [
                    "blank",
                    ["display-text", "<h2>The <i>Cookie</i> Tree</h2>"],
                    "blank",
                    ["display-text", function() { 
                        return "You have <h3 style='color: #ffb366; display: inline;'>" + format(player.mas.cookies) + "</h3> cookies."
                    }],
                    ["display-text", function() {
                        if (!hasUpgrade("mas", 11)) return "<span style='color: #a0a0a0;'>0 cookies/s</span>"
                        let gain = (hasUpgrade("mas", 62) || hasUpgrade("mas", 103)) ? new Decimal(1) : new Decimal(0.01)
                        if (hasUpgrade("mas", 21)) gain = gain.mul(2)
                        if (hasUpgrade("mas", 23)) gain = gain.mul(3)
                        if (hasUpgrade("mas", 31)) gain = gain.mul(5)
                        if (hasUpgrade("mas", 33)) gain = gain.mul(3.33333333)
                        if (hasUpgrade("mas", 51)) gain = gain.mul(15)
                        if (hasUpgrade("mas", 61)) gain = gain.pow(2)
                        if (hasUpgrade("mas", 63)) gain = gain.pow(3)
                        if (hasUpgrade("mas", 71)) gain = gain.mul(upgradeEffect("mas", 71))
                        if (hasUpgrade("mas", 73)) gain = gain.mul(upgradeEffect("mas", 73))
                        if (hasUpgrade("mas", 101)) gain = gain.pow(0.25)
                        if (hasUpgrade("mas", 101) && getBuyableAmount("mas", 41).gt(0)) {
                            gain = gain.pow(buyableEffect("mas", 41))
                        }
                        if (hasUpgrade("mas", 101) && getBuyableAmount("mas", 42).gt(0)) {
                            gain = gain.pow(buyableEffect("mas", 42))
                        }
                        if (hasUpgrade("mas", 101) && getBuyableAmount("mas", 43).gt(0)) {
                            gain = gain.pow(buyableEffect("mas", 43))
                        }
                        if (hasUpgrade("mas", 113)) gain = gain.mul("1e171320")
                        if (hasUpgrade("mas", 111)) gain = gain.pow(upgradeEffect("mas", 111))
                        if (hasUpgrade("mas", 121)) gain = gain.pow(upgradeEffect("mas", 121))
                        return "<span style='color: #666666; font-size: 0.9em;'>" + format(gain) + " cookies/s</span>"
                    }],
                    "blank",
                    ["upgrades", [1, 2, 3, 4]]
                ]
            },
            "Upgrade Tree (2/3)": {
                unlocked() { 
                    return hasMilestone("mas", 1) && hasUpgrade("mas", 42)
                },
                buttonStyle: {
                    "background-color": "#4a0000",
                    "color": "#ffcccc",
                    "border": "2px solid #cc0000",
                    "font-weight": "bold"
                },
                content: [
                    "blank",
                    ["display-text", "<h2>The <i>Chocolate Cookie</i> Tree</h2>"],
                    "blank",
                    ["display-text", function() { 
                        return "You have <h3 style='color: #ffb366; display: inline;'>" + format(player.mas.cookies) + "</h3> cookies."
                    }],
                    ["display-text", function() { 
                        return "You have <h3 style='color: #d27d2d; display: inline;'>" + format(player.mas.chocolateCookies || 0) + "</h3> chocolate cookies."
                    }],
                    "blank",
                    ["clickables", [1]],
                    ["upgrades", [5, 6, 7, 8]]
                ]
            },
            "Upgrade Tree (3/3)": {
                unlocked() { 
                    return hasMilestone("mas", 1) && hasUpgrade("mas", 81)
                },
                buttonStyle: {
                    "background-color": "#1a0033",
                    "color": "#f0dbff",
                    "border": "2px solid #8a2be2",
                    "font-weight": "bold"
                },
                content: [
                    "blank",
                    ["display-text", "<h2>The <i>Dark Chocolate Cookie</i> Tree</h2>"],
                    "blank",
                    ["display-text", function() { 
                        return "You have <h3 style='color: #ffb366; display: inline;'>" + format(player.mas.cookies) + "</h3> cookies."
                    }],
                    ["display-text", function() { 
                        return "You have <h3 style='color: #d27d2d; display: inline;'>" + format(player.mas.chocolateCookies || 0) + "</h3> chocolate cookies."
                    }],
                    ["display-text", function() { 
                        return "You have <h3 style='color: #4a2711; display: inline;'>" + format(player.mas.darkChocolateCookies || 0) + "</h3> dark chocolate cookies."
                    }],
                    "blank",
                    ["clickables", [2]],
                    "blank",
                    ["upgrades", [9, 10, 11, 12]],
                    "blank",
                    ["buyables", [4]],
                    "blank",
                ]
            },
            "Tycoon": {
                unlocked() { return hasMilestone("mas", 2)}, 
                buttonStyle: {
                    "background-color": "#060011",
                    "color": "#ffd700",
                    "border": "2px solid #ffd700",
                    "font-weight": "bold",
                    "text-shadow": "0px 0px 4px #b39200"
                },
                content: [
                    "blank",
                    ["display-text", "<h2>The <span style='color: #ffd700; text-shadow: 0px 0px 6px #b39200;'>Tycoon</span></h2>"],
                    "blank",
                    ["display-text", function() {
                        return "Cash: <span style='color: #85bb65; font-weight: bold; font-size: 1.4em;'>$" + format(player.mas.money) + "</span>"
                    }],
                    "blank",
                    ["display-text", function() {
                        return "<div style='background-color: #111; border: 2px solid #333; padding: 15px; border-radius: 6px; width: 300px; margin: 0 auto;'>" +
                               "Cash ready to claim: <br><span style='color: #00ff00; font-weight: bold; font-size: 1.2em;'>$" + format(player.mas.conveyorCash) + "</span>" +
                               "</div>"
                    }],
                    "blank",
                    ["clickables", [3]],
                    "blank",
                    ["display-text", "<h3>Droppers & Upgraders</h3>"],
                    "blank",
                    ["display-text", function() {
                        if (getBuyableAmount("mas", 73).lt(1)) return ""
                        return "<button onclick='layers.mas.buyMaxTycoon()' style='background-color: #ffd700; color: #000; border: 2px solid #b39200; font-weight: bold; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-bottom: 12px; font-family: inherit;'>Buy Max Droppers is on!</button>"
                    }],
                    ["display-text", function() {
                        if (getBuyableAmount("mas", 74).lt(1)) return ""
                        return "<button onclick='layers.mas.buyMaxUpgraders()' style='background-color: #ff3333; color: #fff; border: 2px solid #b30000; font-weight: bold; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-bottom: 12px; font-family: inherit; box-shadow: 0px 0px 6px rgba(255,51,51,0.2);'>Buy Max Upgraders is on!</button>"
                    }],
                    ["buyables", [5,6]],
                ]
            },
            "Space": {
                unlocked() { return hasMilestone("mas", 3) },
                buttonStyle: {
                    "background-color": "#03071e",
                    "color": "#9bf6ff",
                    "border": "2px solid #00b4d8",
                    "font-weight": "bold",
                    "text-shadow": "0px 0px 5px #9bf6ff"
                },
                content: [
                    "blank",
                    ["display-text", "<h2>The <span style='color: #9bf6ff; text-shadow: 0px 0px 6px #00b4d8;'>Space</span> Center</h2>"],
                    "blank",
                    ["display-text", function() {
                        return "You have <h3 style='color: #9bf6ff; display: inline;'>" + formatWhole(player.mas.starDust || 0) + "</h3> stardust."
                    }],
                    ["display-text", function() {
                        return "You have <h3 style='color: #ffd166; text-shadow: 0px 0px 4px #f77f00; display: inline;'>" + formatWhole(player.mas.stars || 0) + "</h3> stars."
                    }],
                    "blank",
                    ["display-text", "Tired of a boring tycoon? Reset it and get stardust!"],
                    "blank",
                    ["clickables",[4]],
                    "blank",
                    ["buyables",[7]],
                    "blank",
                ]
            },
            "Quantum": {
                unlocked() { return hasMilestone("mas", 4) },
                buttonStyle: {
                    "background-color": "#1c0024",
                    "color": "#ffb7ff",
                    "border": "2px solid #d800dc",
                    "font-weight": "bold"
                },
                content: [
                    "blank",
                    ["display-text", "<h2>Quantum <span style='color: #ff00ff; text-shadow: 0px 0px 6px #ff00ff;'>Glitching</span></h2>"],
                    "blank",
                    ["display-text", function() {
                        return "You have <h3 style='color: #ff00ff; text-shadow: 0px 0px 4px #ff00ff; display: inline;'>" + formatWhole(player.mas.quantumShards || 0) + "</h3> Quantum Shards."
                    }],
                    "blank",
                    ["display-text", "Even space isn't big enough. Using special shards, the space can be enlarged!"],
                    "blank",
                    ["clickables", [5]],
                    "blank",
                ]
            },
            "Time Travel": {
                unlocked() { return hasMilestone("mas", 5) },
                buttonStyle: {
                    "background-color": "#241400",
                    "color": "#ffd166",
                    "border": "2px solid #f77f00",
                    "font-weight": "bold"
                },
                content: [
                    "blank",
                    ["display-text", "<h2><span style='color: #f77f00; text-shadow: 0px 0px 6px #f77f00;'>Time</span> Travel</h2>"],
                    ["display-text", function() {
                        let flux = player.mas.timeFlux || new Decimal(0)
                        let totalSeconds = Math.floor(flux.toNumber() * 60)
                        
                        let hours = Math.floor(totalSeconds / 3600)
                        let mins = Math.floor((totalSeconds % 3600) / 60)
                        let secs = Math.floor(totalSeconds % 60)
                        
                        return "You have stored <h3 style='color: #f77f00; text-shadow: 0px 0px 6px #f77f00; display: inline;'>" + 
                                hours + "h " + mins + "m " + secs + "s</h3> of Time Flux."
                    }],
                    ["display-text", function() {
                        let amt = getBuyableAmount("mas", 91)
                        let dynamicCapMinutes = new Decimal(360).mul(new Decimal(2).pow(amt))
                        let flux = player.mas.timeFlux || new Decimal(0)
                        if (flux.gte(dynamicCapMinutes)) return "<span style='color: #ff3333; font-weight: bold;'>You have reached the cap!</span>" 
                        let fluxNeeded = dynamicCapMinutes.sub(flux)
                        if (fluxNeeded.gt("1e10")) {
                            return "<span style='color: #90e0ef;'>Will reach the cap in: </span><b style='color: #ffd166;'>A very long time</b>"
                        }
                        let realSecondsLeft = fluxNeeded.toNumber() * 6 * 60
                        let capDate = new Date(Date.now() + realSecondsLeft * 1000)
                        if (isNaN(capDate.getTime())) {
                            return "<span style='color: #90e0ef;'>Will reach the cap in: </span><b style='color: #ffd166;'>A very long time</b>"
                        }
                        let options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
                        let formattedDate = capDate.toLocaleDateString('en-US', options)
                        return "<span style='color: #90e0ef;'>Will reach the cap in: </span><b style='color: #ffd166;'>" + formattedDate + "</b>"
                    }],
                    "blank",
                    ["display-text", function() {
                        let speed = new Decimal(player.mas.timeSpeed || 1)
                        let spending = speed.gt(1) ? speed.sub(1) : new Decimal(0)
                        let capLevel = getBuyableAmount("mas", 91)
                        let currentCapHours = new Decimal(6).mul(new Decimal(2).pow(capLevel))
                        let lvl92 = getBuyableAmount("mas", 92)
                        let rawBonusGen = lvl92.mul(5)
                        let actualBonus = rawBonusGen
                        if (rawBonusGen.gt(60)) {
                            actualBonus = new Decimal(60).add(new Decimal(rawBonusGen).sub(60).sqrt())
                        }
                        let finalGenSpeed = new Decimal(10).add(actualBonus)
                        
                        return "<div style='background-color: #000814; border: 1px solid #0077b6; border-radius: 6px; padding: 10px; width: 450px; margin: 0 auto; text-align: left; font-family: monospace; font-size: 13px; line-height: 1.6;'>" +
                               "• <span style='color: #90e0ef;'>Storage Cap      :</span> <b style='color: #ff3333;'>" + formatWhole(currentCapHours) + "h 0m 0s</b><br>" +
                               "• <span style='color: #90e0ef;'>Generation Speed :</span> <b style='color: #00f5d4;'> " + format(finalGenSpeed) + "m/hour</b><br>" +
                               "• <span style='color: #90e0ef;'>Using            :</span> <b style='color: #f77f00;'>" + formatWhole(spending) + "s/second</b>" +
                               "</div>"
                    }],
                    "blank",
                    ["display-text", "Just like The Cookie Tree. Wait no. <i>Better</i> than The Cookie Tree."],
                    "blank",
                    ["display-text", "<h3>Speed Controls</h3>"],
                    "blank",
                    ["clickables", [6,7,8]],
                    "blank",
                    ["buyables", [9]],
                    "blank",
                ]
            },
            "Hall of Fame": {
                unlocked() { 
                    return hasMilestone("mas", 6) 
                },
                buttonStyle: {
                    "background-color": "#0a0a0a",
                    "color": "#e5e5e5",
                    "border": "2px solid #b0c4de",
                    "font-weight": "bold",
                    "text-shadow": "0px 0px 5px #ffffff"
                },
                content: [
                    "blank",
                    ["display-text", "<h2>The <span style='color: #ffffff; text-shadow: 0px 0px 8px #b0c4de;'>Hall of Fame</span></h2>"],
                    "blank",
                    ["display-text", "There is literally nothing left for you to do. If you see this, give cookie a DM and he will put you on here!<br>Leave your own message, if you want.<br><br><br><br><h1>People who were here:</h1><br><h3>- Nobody yet!<br>- ...</h3>"],
                    "blank",
                ]
            },
            "Milestones": {
                buttonStyle() {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #ff0000, #000000, #0000ff)",
                        "color": "#ffffff",
                        "border": "2px solid #ffffff",
                        "font-weight": "bold",
                        "text-shadow": "0px 0px 4px #000000"
                    }
                },
                content: [
                    "blank",
                    "milestones"
                ]
            }
        }
    },
    componentStyles: {
        "main-display"() { return { display: "none" } },
        "resource-display"() { return { display: "none" } }
    },
    milestones: {
        0: {
            requirementDescription: "5 power",
            effectDescription: "Mastery Level increases to I. Unlock the Currencies tab.",
            done() { return player[this.layer].points.gte(5) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #a77044, #d49a6a, #8a5229, #d49a6a, #a77044)",
                        "color": "#000000",
                        "font-weight": "bold"
                    }
                }
            }
        },
        1: {
            requirementDescription: "14 power",
            effectDescription: "Mastery Level increases to II. Unlock the Upgrade Tree tab.",
            done() { return player[this.layer].points.gte(14) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #bcc6cc, #e2e8f0, #9aa2a6, #e2e8f0, #bcc6cc)",
                        "color": "#000000",
                        "font-weight": "bold"
                    }
                }
            }
        },
        2: {
            requirementDescription: "19 power",
            effectDescription: "Mastery Level increases to III. Unlock the Tycoon tab.",
            done() { return player[this.layer].points.gte(19) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #d4af37, #f3e5ab, #aa8416, #f3e5ab, #d4af37)",
                        "color": "#000000",
                        "font-weight": "bold"
                    }
                }
            }
        },
        3: {
            requirementDescription: "28 power",
            effectDescription: "Mastery Level increases to IV. Unlock the Space tab.",
            done() { return player[this.layer].points.gte(28) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #001fff, #00bfff, #00ffff, #00bfff, #001fff)",
                        "color": "#000000",
                        "font-weight": "bold"
                    }
                }
            }
        },
        4: {
            requirementDescription: "33 power",
            effectDescription: "Mastery Level increases to V. Unlock the Quantum tab.",
            done() { return player[this.layer].points.gte(33) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #00a53c, #50c878, #a3f7bf, #50c878, #00a53c)",
                        "color": "#000000",
                        "font-weight": "bold"
                    }
                }
            }
        },
        5: {
            requirementDescription: "42 power",
            effectDescription: "Mastery Level increases to VI. Unlock the Time Travel tab.",
            done() { return player[this.layer].points.gte(42) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #b3003b, #e0115f, #ff7c9c, #e0115f, #b3003b)",
                        "color": "#000000",
                        "font-weight": "bold"
                    }
                }
            }
        },
        6: {
            requirementDescription: "47 power",
            effectDescription: "Mastery Level increases to VII. Unlock the Hall of Fame tab.",
            done() { return player[this.layer].points.gte(47) },
            style() {
                if (hasMilestone(this.layer, this.id)) {
                    let shift = (Date.now() / 10) % 360
                    return {
                        "background": "linear-gradient(" + shift + "deg, #ff1493, #ff4500, #ffd700, #32cd32, #00bfff, #4b0082, #ee82ee)",
                        "color": "#ffffff",
                        "font-weight": "bold",
                        "text-shadow": "0px 0px 4px #000000"
                    }
                }
            }
        }
    },
    buyables: {
        11: {
            title: "Ascension Power", 
            purchaseLimit: 7, 
            cost(x) { 
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(1).add(amt) 
            },
            display() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(this.purchaseLimit)
                return "Using ascension, it somehow gives you... power?\n" +
                        "(doesn't spend ascension)\n\n" +
                        (maxReached ? "max!!\n" : "you need to be in Ascension " + formatWhole(this.cost()) + "+\n") +
                        "level: " + formatWhole(amt) + " / " + this.purchaseLimit
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.a.points.gte(this.cost()) && amt.lt(this.purchaseLimit)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                setBuyableAmount(this.layer, this.id, amt.add(1))
                player.mas.points = player.mas.points.add(1)
            },
            unlocked() { 
                return true 
            },
        },
        12: {
            title: "Universe Power", 
            purchaseLimit: 10, 
            cost(x) { 
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(1).add(amt) 
            },
            display() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(this.purchaseLimit)
                return "The energy contained in universes.. make power?\n" +
                        "(doesn't spend universes)\n\n" +
                        (maxReached ? "max!!\n" : "you need to be in Universe " + formatWhole(this.cost()) + "+\n") +
                        "level: " + formatWhole(amt) + " / " + this.purchaseLimit
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.univ.points.gte(this.cost()) && amt.lt(this.purchaseLimit)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                setBuyableAmount(this.layer, this.id, amt.add(1))
                player.mas.points = player.mas.points.add(1)
            },
            unlocked() { 
                return true 
            },
        },
        21: {
            title: "Mining Power", 
            purchaseLimit: 12, 
            cost(x) { 
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(1).mul(Decimal.pow(25, amt))
            },
            display() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(this.purchaseLimit)
                return "Maybe AFKing wasn't so useless after all! Those powers give.. power! What a coincidence.\n" +
                        "(doesn't spend CMG Ores)\n\n" +
                        (maxReached ? "max!!\n" : "you need to have " + formatWhole(this.cost()) + " CMG Ores\n") +
                        "level: " + formatWhole(amt) + " / " + this.purchaseLimit
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.cmg.points.gte(this.cost()) && amt.lt(this.purchaseLimit)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                setBuyableAmount(this.layer, this.id, amt.add(1))
                player.mas.points = player.mas.points.add(1)
            },
            unlocked() { 
                return true 
            },
        },
        22: {
            title: "Radioactive Power", 
            purchaseLimit: 8, 
            cost(x) { 
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(100).add(amt.mul(85))
            },
            display() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(this.purchaseLimit)
                return "This power doesn't feel so good... It's radioactive...\n" +
                        "(doesn't spend Radioactivity)\n\n" +
                        (maxReached ? "max!!\n" : "you need to have " + formatWhole(this.cost()) + "% Radioactivity\n") +
                        "level: " + formatWhole(amt) + " / " + this.purchaseLimit
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.rad.points.gte(this.cost()) && amt.lt(this.purchaseLimit)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                setBuyableAmount(this.layer, this.id, amt.add(1))
                player.mas.points = player.mas.points.add(1)
            },
            unlocked() { 
                return true 
            },
        },
        31: {
            title: "Meta Power",
            purchaseLimit: 6, 
            cost(x) { 
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(5).add(amt.mul(5))
            },
            display() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(this.purchaseLimit)
                return "Power gives power. How.\n" +
                        "(doesn't spend power)\n\n" +
                        (maxReached ? "max!!\n" : "you need to have " + formatWhole(this.cost()) + " power\n") +
                        "level: " + formatWhole(amt) + " / " + this.purchaseLimit
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.points.gte(this.cost()) && amt.lt(this.purchaseLimit)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                setBuyableAmount(this.layer, this.id, amt.add(1))
                player.mas.points = player.mas.points.add(1)
            },
            unlocked() { 
                return true 
            },
        },
        32: {
            title: "Meta++ Power", 
            purchaseLimit: 4, 
            cost(x) { 
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(3).add(amt)
            },
            display() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(this.purchaseLimit)
                let completedMilestones = Object.keys(tmp.mas.milestones).filter(id => hasMilestone("mas", id)).length
                
                return "This is even more meta. The mastery levels not only unlock tabs, but give power!\n\n" +
                        (maxReached ? "max!!\n" : "you need " + formatWhole(this.cost()) + " Mastery Levels (You have " + completedMilestones + " Mastery Levels)\n") +
                        "level: " + formatWhole(amt) + " / " + this.purchaseLimit
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                let completedMilestones = Object.keys(tmp.mas.milestones).filter(id => hasMilestone("mas", id)).length
                return new Decimal(completedMilestones).gte(this.cost()) && amt.lt(this.purchaseLimit)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                setBuyableAmount(this.layer, this.id, amt.add(1))
                player.mas.points = player.mas.points.add(1)
            },
            unlocked() { 
                return true
            },
        },
        41: {
            title: "Speeding Up",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                if (amt.eq(0)) return new Decimal(10)
                return new Decimal(10).pow(new Decimal(2).pow(amt))
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.eq(0)) return new Decimal(1)
                if (amt.eq(1)) return new Decimal(1.5)
                if (amt.eq(2)) return new Decimal(2.0)
                return new Decimal(2.0).add(amt.sub(2).mul(0.75))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(50)
                return "Powering! First level gives ^1.5 cookies, 2nd gives +0.5 to that, and every level after that is +0.75.\n\n" +
                       "Boost: ^" + format(this.effect()) + " cookies\n\n" +
                       (maxReached ? "max?!!?!\n" : "Cost: " + formatWhole(this.cost()) + " cookies\n") +
                       "Level: " + formatWhole(amt) + " / 50"
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.cookies.gte(this.cost()) && amt.lt(50)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.cookies = player.mas.cookies.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return hasUpgrade("mas", 101)
            }
        },
        42: {
            title: "Really Speeding Up",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                if (amt.eq(0)) return new Decimal(1e49)
                return new Decimal(1e49).pow(new Decimal(9).pow(amt))
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.eq(0)) return new Decimal(1)
                if (amt.eq(1)) return new Decimal(4)
                if (amt.eq(2)) return new Decimal(6)
                return new Decimal(6).add(amt.sub(2).mul(3))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(50)
                return "Big Powering! First level gives ^4 cookies, 2nd gives +2 to that, and every level after that is +3.\n\n" +
                       "Boost: ^" + format(this.effect()) + " cookies\n\n" +
                       (maxReached ? "max?!!?!\n" : "Cost: " + formatWhole(this.cost()) + " cookies\n") +
                       "Level: " + formatWhole(amt) + " / 50"
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.cookies.gte(this.cost()) && amt.lt(50)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.cookies = player.mas.cookies.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return hasUpgrade("mas", 101)
            }
        },
        43: {
            title: "Final Push",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                if (amt.eq(0)) return new Decimal(1e249)
                return new Decimal(1e249).pow(new Decimal(27).pow(amt))
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.eq(0)) return new Decimal(1)
                return new Decimal(10).pow(amt)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(50)
                return "Going crazy. Each level x10's the power.\n\n" +
                       "Boost: ^" + format(this.effect()) + " cookies\n\n" +
                       (maxReached ? "max?!!?!\n" : "Cost: " + formatWhole(this.cost()) + " cookies\n") +
                       "Level: " + formatWhole(amt) + " / 50"
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.cookies.gte(this.cost()) && amt.lt(50)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.cookies = player.mas.cookies.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return hasUpgrade("mas", 101)
            }
        },
        51: {
            title: "autoclicker",
            cost(x) {
                return new Decimal(0.1)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(1)
                return "automates the manual dropper!! no more clicking\n\n" +
                       (maxReached ? "bought!" : "cost: $0.10")
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(1)
            },
            buy() {
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, new Decimal(1))
            },
            unlocked() {
                return getBuyableAmount(this.layer, this.id).lt(1)
            }
        },
        52: {
            title() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.gte(40)) return "[maxed] Bronze Dropper"
                return (amt.gte(20) ? "[softcapped] " : "") + "Bronze Dropper"
            },
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                let baseCost = new Decimal(2).mul(new Decimal(1.4).pow(amt))
                if (amt.gte(20)) {
                    let over = amt.sub(20)
                    baseCost = baseCost.mul(new Decimal(3).pow(over))
                }
                return baseCost
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let isSoftcapped = amt.gte(20) && amt.lt(40)
                let isHardcapped = amt.gte(40)
                
                let statusText = ""
                if (isHardcapped) statusText = "<div style='color: #ff3333; font-weight: bold; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; border: 1px solid #ff0000; margin: 6px 0;'> hardcap!!</div>"
                else if (isSoftcapped) statusText = "<div style='color: #ff6b6b; background: rgba(0,0,0,0.4); padding: 4px; border-radius: 4px; font-weight: bold; border: 1px solid #ff4d4d; margin: 6px 0;'> softcap!! (x3.00/lvl)</div>"

                return "Some studs are better than other studs.\n\n" +
                       "generation: +$1.00/s each\n" +
                       "total: +$" + format(this.effect()) + "/s\n\n" +
                       statusText + "\n" +
                       (isHardcapped ? "max level" : "cost for next dropper: $" + formatWhole(this.cost())) + "\n" +
                       "amount: " + formatWhole(amt) + " / 40"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return amt.mul(1)
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(40) 
            },
            buy() {
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return getBuyableAmount("mas", 51).gte(1) },
            style() { return { "background-color": "#cd7f32", "color": "#000000", "border": "2px solid #e6a15c", "border-radius": "8px", "font-weight": "bold" } }
        },
        53: {
            title() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.gte(40)) return "[maxed] Silver Dropper"
                return (amt.gte(20) ? "[softcapped] " : "") + "Silver Dropper"
            },
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                let baseCost = new Decimal(150).mul(new Decimal(1.45).pow(amt))
                if (amt.gte(20)) {
                    let over = amt.sub(20)
                    baseCost = baseCost.mul(new Decimal(3.5).pow(over))
                }
                return baseCost
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let isSoftcapped = amt.gte(20) && amt.lt(40)
                let isHardcapped = amt.gte(40)
                
                let statusText = ""
                if (isHardcapped) statusText = "<div style='color: #ff3333; font-weight: bold; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; border: 1px solid #ff0000; margin: 6px 0;'> hardcap!!</div>"
                else if (isSoftcapped) statusText = "<div style='color: #ff6b6b; background: rgba(0,0,0,0.4); padding: 4px; border-radius: 4px; font-weight: bold; border: 1px solid #ff4d4d; margin: 6px 0;'> softcap!! (x3.50/lvl)</div>"

                return "Drops some 99.9% real silver. What's the 0.1% though?\n\n" +
                       "generation: +$10.00/s each\n" +
                       "total: +$" + format(this.effect()) + "/s\n\n" +
                       statusText + "\n" +
                       (isHardcapped ? "max level" : "cost for next dropper: $" + formatWhole(this.cost())) + "\n" +
                       "amount: " + formatWhole(amt) + " / 40"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return amt.mul(10)
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(40) 
            },
            buy() {
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return getBuyableAmount("mas", 52).gt(0) },
            style() { return { "background-color": "#e0e0e0", "color": "#000000", "border": "2px solid #ffffff", "border-radius": "8px", "font-weight": "bold" } }
        },
        54: {
            title() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.gte(40)) return "[maxed] Gold Dropper"
                return (amt.gte(20) ? "[softcapped] " : "") + "Gold Dropper"
            },
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                let baseCost = new Decimal(1500).mul(new Decimal(1.5).pow(amt))
                if (amt.gte(20)) {
                    let over = amt.sub(20)
                    baseCost = baseCost.mul(new Decimal(4).pow(over))
                }
                return baseCost
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let isSoftcapped = amt.gte(20) && amt.lt(40)
                let isHardcapped = amt.gte(40)
                
                let statusText = ""
                if (isHardcapped) statusText = "<div style='color: #ff3333; font-weight: bold; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; border: 1px solid #ff0000; margin: 6px 0;'> hardcap!!</div>"
                else if (isSoftcapped) statusText = "<div style='color: #ff6b6b; background: rgba(0,0,0,0.4); padding: 4px; border-radius: 4px; font-weight: bold; border: 1px solid #ff4d4d; margin: 6px 0;'> softcap!! (x4.00/lvl)</div>"

                return "Real gold, exactly 1kg. Wonder why it's only 75$, shouldn't this be 100,000$?\n\n" +
                       "generation: +$75.00/s each\n" +
                       "total: +$" + format(this.effect()) + "/s\n\n" +
                       statusText + "\n" +
                       (isHardcapped ? "max level" : "cost for next dropper: $" + formatWhole(this.cost())) + "\n" +
                       "amount: " + formatWhole(amt) + " / 40"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return amt.mul(75)
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(40) 
            },
            buy() {
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return getBuyableAmount("mas", 53).gt(0) },
            style() { return { "background-color": "#ffd700", "color": "#000000", "border": "2px solid #b39200", "border-radius": "8px", "font-weight": "bold" } }
        },
        55: {
            title() {
                let amt = getBuyableAmount(this.layer, this.id)
                if (amt.gte(40)) return "[maxed] Diamond Dropper"
                return (amt.gte(20) ? "[softcapped] " : "") + "Diamond Dropper"
            },
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                let baseCost = new Decimal(500000).mul(new Decimal(1.65).pow(amt))
                if (amt.gte(20)) {
                    let over = amt.sub(20)
                    baseCost = baseCost.mul(new Decimal(5).pow(over))
                }
                return baseCost
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let isSoftcapped = amt.gte(20) && amt.lt(40)
                let isHardcapped = amt.gte(40)
                
                let statusText = ""
                if (isHardcapped) statusText = "<div style='color: #ff3333; font-weight: bold; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; border: 1px solid #ff0000; margin: 6px 0;'> hardcap!!</div>"
                else if (isSoftcapped) statusText = "<div style='color: #ff6b6b; background: rgba(0,0,0,0.4); padding: 4px; border-radius: 4px; font-weight: bold; border: 1px solid #ff4d4d; margin: 6px 0;'> softcap!! (x5.00/lvl)</div>"

                return "Drops gems. Wait, gems? How do gems even fit inside a dropper?\n\n" +
                       "generation: +$1,250.00/s each\n" +
                       "total: +$" + format(this.effect()) + "/s\n\n" +
                       statusText + "\n" +
                       (isHardcapped ? "max level" : "cost for next dropper: $" + formatWhole(this.cost())) + "\n" +
                       "amount: " + formatWhole(amt) + " / 40"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return amt.mul(1250)
            },
            canAfford() { 
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(40) 
            },
            buy() {
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {
                return getBuyableAmount("mas", 61).gte(200) && 
                       getBuyableAmount("mas", 62).gte(200) && 
                       getBuyableAmount("mas", 63).gte(200)
            },
            style() { 
                return { 
                    "background-color": "#b9f2ff", 
                    "color": "#000000", 
                    "border": "2px solid #e0faff", 
                    "border-radius": "8px", 
                    "font-weight": "bold",
                    "box-shadow": "0px 0px 8px rgba(185, 242, 255, 0.6)"
                } 
            }
        },
        61: {
            title: "Red Upgrader",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(5000).mul(new Decimal(1.05).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(255)
                return "Your materials become warmer when going through this upgrader.\n\n" +
                       "multiplies cash value by: x" + format(this.effect()) + "\n\n" +
                       (maxReached ? "maxed!\n" : "cost for next upgrader: $" + formatWhole(this.cost()) + "\n") +
                       "amount: " + formatWhole(amt) + " / 255"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return new Decimal(1).add(amt.mul(0.15))
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(255)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return getBuyableAmount("mas", 54).gt(0)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                let redValue = Math.min(255, Math.floor((amt.toNumber() / 255) * 255))
                
                return {
                    "background-color": "rgb(" + redValue + ", 0, 0)",
                    "color": "#ffffff",
                    "border": "2px solid rgb(" + Math.min(255, redValue) + ", 0, 0)",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "text-shadow": "0px 1px 3px #000000"
                }
            }
        },
        62: {
            title: "Green Upgrader",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(10000).mul(new Decimal(1.05).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(255)
                return "Your materials become perfect when going through this upgrader.\n\n" +
                       "multiplies cash value by: x" + format(this.effect()) + "\n\n" +
                       (maxReached ? "maxed!\n" : "cost for next upgrader: $" + formatWhole(this.cost()) + "\n") +
                       "amount: " + formatWhole(amt) + " / 255"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return new Decimal(1).add(amt.mul(0.15))
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(255)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return getBuyableAmount("mas", 54).gt(0)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                let greenValue = Math.min(255, Math.floor((amt.toNumber() / 255) * 255))
                
                return {
                    "background-color": "rgb(0, " + greenValue + ", 0)",
                    "color": "#ffffff",
                    "border": "2px solid rgb(0, " + Math.min(255, greenValue) + ", 0)",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "text-shadow": "0px 1px 3px #000000"
                }
            }
        },
        63: {
            title: "Blue Upgrader",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(20000).mul(new Decimal(1.05).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(255)
                return "Your materials become colder when going through this upgrader.\n\n" +
                       "multiplies cash value by: x" + format(this.effect()) + "\n\n" +
                       (maxReached ? "maxed!\n" : "cost for next upgrader: $" + formatWhole(this.cost()) + "\n") +
                       "amount: " + formatWhole(amt) + " / 255"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return new Decimal(1).add(amt.mul(0.15))
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(255)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return getBuyableAmount("mas", 54).gt(0)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                let blueValue = Math.min(255, Math.floor((amt.toNumber() / 255) * 255))
                
                return {
                    "background-color": "rgb(0, 0, " + blueValue + ")",
                    "color": "#ffffff",
                    "border": "2px solid rgb(0, 0, " + Math.min(255, blueValue) + ")",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "text-shadow": "0px 1px 3px #000000"
                }
            }
        },
        64: {
            title: "RGB Upgrader",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal("1e10").mul(new Decimal(1.25).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(255)
                return "All 3 previous upgraders at once. This is the best upgrader you will get.\n\n" +
                       "multiplies cash value by: x" + format(this.effect()) + "\n" +
                       "adds fake levels to all RGB upgraders: +" + formatWhole(amt) + " levels\n\n" +
                       (maxReached ? "maxed!\n" : "cost for next upgrader: $" + formatWhole(this.cost()) + "\n") +
                       "amount: " + formatWhole(amt) + " / 255"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return new Decimal(2).pow(amt)
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(255)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return getBuyableAmount("mas", 61).gte(255) && 
                       getBuyableAmount("mas", 62).gte(255) && 
                       getBuyableAmount("mas", 63).gte(255)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                let rgbVal = Math.min(255, Math.floor((amt.toNumber() / 255) * 255))
                
                return {
                    "background-color": "rgb(" + rgbVal + ", " + rgbVal + ", " + rgbVal + ")",
                    "color": rgbVal > 150 ? "#000000" : "#ffffff",
                    "border": "2px solid rgb(" + Math.min(255, rgbVal) + ", " + Math.min(255, rgbVal) + ", " + Math.min(255, rgbVal) + ")",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "box-shadow": "0px 0px 10px rgba(" + rgbVal + "," + rgbVal + "," + rgbVal + ", 0.5)"
                }
            }
        },
        69: {
            title: "auto claim",
            cost(x) {
                return new Decimal(1000)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(1)
                return "saves one or two clicks, maybe.\n\n" +
                       "effect: automates money claiming!\n\n" +
                       (maxReached ? "maxed!!" : "cost: $1,000")
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.money.gte(this.cost()) && amt.lt(1)
            },
            buy() {
                player.mas.money = player.mas.money.sub(this.cost())
                setBuyableAmount(this.layer, this.id, new Decimal(1))
            },
            unlocked() {
                return getBuyableAmount(this.layer, this.id).lt(1) && getBuyableAmount("mas", 54).gt(0)
            },
            style() {
                return {
                    "background-color": "#37474f",
                    "color": "#ffffff",
                    "border": "2px solid #ffffff",
                    "border-radius": "8px",
                    "font-weight": "bold"
                }
            }
        },
        71: {
            title: "Stardust to Money",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(1).mul(new Decimal(2).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(10)
                return "All that stardust turns into money! A fair cost to pay for this boost.\n\n" +
                       "effect: x25 money per level.\n" +
                       "boost: x" + format(this.effect()) + "\n\n" +
                       (maxReached ? "maxed!\n" : "cost: " + formatWhole(this.cost()) + " Stardust\n") +
                       "level: " + formatWhole(amt) + " / 10"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return new Decimal(25).pow(amt)
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.starDust.gte(this.cost()) && amt.lt(10)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.starDust = player.mas.starDust.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return player.mas.stardustThrown.gte(1)
            },
            style() {
                return {
                    "background-color": "#021c08",
                    "color": "#a8ffb2",
                    "border": "2px solid #00e676",
                    "border-radius": "8px",
                    "font-weight": "bold"
                }
            }
        },
        72: {
            title: "Stardust to Stardust",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(10).mul(new Decimal(5).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(10)
                return "Stardust has made stardust, the newest product by stardust!\n\n" +
                       "effect: x1.5 stardust per level.\n" +
                       "boost: x" + format(this.effect()) + "\n\n" +
                       (maxReached ? "maxed!\n" : "cost: " + formatWhole(this.cost()) + " Stardust\n") +
                       "level: " + formatWhole(amt) + " / 10"
            },
            effect() {
                let amt = getBuyableAmount(this.layer, this.id)
                return new Decimal(1.5).pow(amt)
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.starDust.gte(this.cost()) && amt.lt(10)
            },
            buy() {
                let amt = getBuyableAmount(this.layer, this.id)
                player.mas.starDust = player.mas.starDust.sub(this.cost())
                setBuyableAmount(this.layer, this.id, amt.add(1))
            },
            unlocked() {
                return player.mas.stardustThrown.gte(2)
            },
            style() {
                return {
                    "background-color": "#13001f",
                    "color": "#ffb7ff",
                    "border": "2px solid #d800dc",
                    "border-radius": "8px",
                    "font-weight": "bold"
                }
            }
        },
        73: {
            title: "The Official™ Buy Max Button",
            cost(x) {
                return new Decimal(250)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(1)
                return "Unlock a simple yet useful buy max button for droppers.\n\n" +
                       "effect: buy max in the tycoon!\n\n" +
                       (maxReached ? "unlocked" : "cost: 250 Stardust")
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.starDust.gte(this.cost()) && amt.lt(1)
            },
            buy() {
                player.mas.starDust = player.mas.starDust.sub(this.cost())
                setBuyableAmount(this.layer, this.id, new Decimal(1))
            },
            unlocked() {
                return player.mas.stardustThrown.gte(5)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                return {
                    "background-color": amt.gte(1) ? "#0d1b2a" : "#1a1a1a",
                    "color": "#ffffff",
                    "border": "2px solid #e0e0e0",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "box-shadow": amt.gte(1) ? "0px 0px 8px rgba(255,255,255,0.3)" : "none"
                }
            }
        },
        74: {
            title: "The Unofficial™ Buy Max Button",
            cost(x) {
                return new Decimal(1000)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(1)
                return "A simple and very useful button.\n\n" +
                       "effect: buy max, but for upgraders!\n\n" +
                       (maxReached ? "unlocked" : "Cost: 1,000 Stardust")
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.starDust.gte(this.cost()) && amt.lt(1)
            },
            buy() {
                player.mas.starDust = player.mas.starDust.sub(this.cost())
                setBuyableAmount(this.layer, this.id, new Decimal(1))
            },
            unlocked() {
                return player.mas.stardustThrown.gte(10)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                return {
                    "background-color": amt.gte(1) ? "#1a0505" : "#1a1a1a",
                    "color": "#ffffff",
                    "border": "2px solid #ff3333",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "box-shadow": amt.gte(1) ? "0px 0px 8px rgba(255,51,51,0.3)" : "none"
                }
            }
        },
        75: {
            title: "The Power Of Stars",
            cost(x) {
                return new Decimal(1)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let maxReached = amt.gte(1)
                return "With just a single star, what could you do?\n\n" +
                       "effect: 0.1% of stardust/s.\n\n" +
                       (maxReached ? "unlocked" : "Requires: 1 Star")
            },
            canAfford() {
                let amt = getBuyableAmount(this.layer, this.id)
                return player.mas.stars.gte(1) && amt.lt(1)
            },
            buy() {
                setBuyableAmount(this.layer, this.id, new Decimal(1))
            },
            unlocked() {
                return player.mas.stardustThrown.gte(50)
            },
            style() {
                let amt = getBuyableAmount(this.layer, this.id)
                return {
                    "background-color": amt.gte(1) ? "#332200" : "#14110a",
                    "color": "#ffd166",
                    "border": "2px solid #f77f00",
                    "border-radius": "8px",
                    "font-weight": "bold",
                    "box-shadow": amt.gte(1) ? "0px 0px 8px rgba(247,127,0,0.4)" : "none"
                }
            }
        },
        91: {
            title: "Time Flux Cap",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                let baseCapForLevel = new Decimal(360).mul(new Decimal(2).pow(amt))
                return baseCapForLevel.mul(0.9)
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let currentCap = new Decimal(6).mul(new Decimal(2).pow(amt))
                return "best upgrade in the game\n\n" +
                       "effect: x2 time flux capacity per level!\n" +
                       "current limit: " + formatWhole(currentCap) + " hours\n\n" +
                       "cost: " + format(this.cost()) + " minutes of Time Flux\n" +
                       "level: " + formatWhole(amt)
            },
            canAfford() {
                return player.mas.timeFlux.gte(this.cost())
            },
            buy() {
                player.mas.timeFlux = player.mas.timeFlux.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return true },
            style() {
                return {
                    "background-color": "#001d3d",
                    "color": "#90e0ef",
                    "border": "2px solid #00b4d8",
                    "border-radius": "8px",
                    "font-weight": "bold"
                }
            }
        },
        92: {
            title: "Time Flux Generation Speed",
            cost(x) {
                let amt = x !== undefined ? x : getBuyableAmount(this.layer, this.id)
                return new Decimal(10).mul(new Decimal(2).pow(amt))
            },
            display() {
                let amt = getBuyableAmount(this.layer, this.id)
                let rawBonusGen = amt.mul(5)
                let isSoftcapped = rawBonusGen.gt(60)
                let actualBonus = rawBonusGen
                if (rawBonusGen.gt(60)) {
                    actualBonus = new Decimal(60).add(new Decimal(rawBonusGen).sub(60).sqrt())
                }
                return "i love this boost :D\n\n" +
                       "effect: adds +5min/hour to generation speed.\n" +
                       "total boost: +" + format(actualBonus) + "min/hour " + (isSoftcapped ? "<span style='color: #ff3333; font-weight: bold;'>(softcapped)</span>" : "") + "\n\n" +
                       "cost: " + format(this.cost()) + " minutes of Time Flux\n" +
                       "level: " + formatWhole(amt)
            },
            canAfford() {
                return player.mas.timeFlux.gte(this.cost())
            },
            buy() {
                player.mas.timeFlux = player.mas.timeFlux.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return true },
            style() {
                return {
                    "background-color": "#001d3d",
                    "color": "#90e0ef",
                    "border": "2px solid #00f5d4",
                    "border-radius": "8px",
                    "font-weight": "bold"
                }
            }
        },
    },
    upgrades: {
        11: {
            title: "The <i>Actual</i> Cookie Tree",
            description: "Start getting 0.01 cookies/s.",
            cost: new Decimal(0),
            currencyDisplayName: "cookies",
            currencyInternalName: "cookies",
            currencyLayer: "mas",
            branches: [21, 23], 
            unlocked() { return true }
        },
        21: {
            title: "aaa boring :P",
            description: "x2 cookies!!",
            cost: new Decimal(5),
            currencyDisplayName: "cookies",
            currencyInternalName: "cookies",
            currencyLayer: "mas",
            branches: [31],
            unlocked() { return hasUpgrade('mas', 11) },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        23: {
            title: "this is nothing like the real cookie tree!!",
            description: "x3 cookies!",
            cost: new Decimal(10),
            currencyDisplayName: "cookies",
            currencyInternalName: "cookies",
            currencyLayer: "mas",
            branches: [33],
            unlocked() { return hasUpgrade('mas', 11) },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        31: {
            title: "chocolate cookies soon?",
            description: "x5 cookies :)",
            cost: new Decimal(25),
            currencyDisplayName: "cookies",
            currencyInternalName: "cookies",
            currencyLayer: "mas",
            branches: [42],
            unlocked() { return hasUpgrade('mas', 21) },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        33: {
            title: "finally, a full cookie per second!",
            description: "x3.333333... cookies!!! wow.",
            cost: new Decimal(200),
            currencyDisplayName: "cookies",
            currencyInternalName: "cookies",
            currencyLayer: "mas",
            branches: [42],
            unlocked() { return hasUpgrade('mas', 23) },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        42: {
            title: "chocolate cookies, the expansion.",
            description: "unlock chocolate cookies.",
            cost: new Decimal(7500),
            currencyDisplayName: "cookies",
            currencyInternalName: "cookies",
            currencyLayer: "mas",
            unlocked() { return hasUpgrade('mas', 31) && hasUpgrade('mas', 33) || hasUpgrade('mas',51)},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        51: {
            title: "greatest cookies ever.",
            description: "x15 cookies.",
            cost: new Decimal(1),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [61],
            unlocked() { return true},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        61: {
            title: "that was fast",
            description: "^2 cookies. however this is actually a debuff at the start.",
            cost: new Decimal(5),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [62],
            unlocked() { return hasUpgrade('mas', 51)},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        62: {
            title: "balancing change",
            description: "the base cookies are now 1.",
            cost: new Decimal(50),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [63],
            unlocked() { return hasUpgrade('mas', 61)},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        63: {
            title: "woah.",
            description: "^3 cookies.",
            cost: new Decimal(250000),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [71],
            unlocked() { return hasUpgrade('mas', 62)},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        71: {
            title: "great boosts",
            description: "chocolate cookies boost cookies. capped at 1e33 chocolate cookies.",
            cost: new Decimal(1e18),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [72],
            unlocked() { return hasUpgrade('mas', 63) },
            effect() {
                let cappedCookies = player.mas.chocolateCookies.min(1e33)
                return cappedCookies.sqrt().add(1)
            },
            effectDisplay() { 
                return "x" + format(this.effect()) 
            },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        72: {
            title: "reverse boosts",
            description: "cookies boost chocolate cookies.",
            cost: new Decimal("1e34"),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [73],
            unlocked() { return hasUpgrade('mas', 71) },
            effect() {
                if (player.mas.cookies.lt(10)) return new Decimal(1)
                return player.mas.cookies.log10().sqrt().add(1)
            },
            effectDisplay() { 
                return "x" + format(this.effect()) 
            },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        73: {
            title: "the meta",
            description: "cookies boost cookies.",
            cost: new Decimal("1e36"),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            branches: [81],
            unlocked() { return hasUpgrade('mas', 72) },
            effect() {
                if (player.mas.cookies.lt(1)) return new Decimal(1)
                return player.mas.cookies.log10().add(1)
            },
            effectDisplay() { 
                return "x" + format(this.effect()) 
            },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        81: {
            title: "abc",
            description: "unlock dark chocolate cookies!!!!",
            cost: new Decimal("3.8e38"),
            currencyDisplayName: "chocolate cookies",
            currencyInternalName: "chocolateCookies",
            currencyLayer: "mas",
            unlocked() { return hasUpgrade('mas', 73) || hasUpgrade('mas',91)},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        91: {
            title: "let's afk",
            description: "auto cookie/chocolate cookie upgrades and 0.1% chocolate cookies on reset per second.",
            cost: new Decimal("1"),
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            branches: [101,102,103],
            unlocked() { return true},
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        101: {
            title: "Timewall Path",
            description: "The tree becomes much slower, but unlock something new. The other path becomes x50,000 more expensive.",
            cost() {
                if (hasUpgrade("mas", 103)) return new Decimal(500000)
                return new Decimal(10)
            },
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            unlocked() { return hasUpgrade('mas', 91) },
            style() {
                return {
                    "margin": "35px 50px",
                }
            }
        },
        102: {
            title: "Inflation Path",
            description: "Unlock one final upgrade.",
            cost: new Decimal(2.22e222),
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            branches: [121],
            unlocked() { 
                return hasUpgrade("mas", 101) && hasUpgrade("mas", 103)
            },
            style() {
                return {
                    "margin": "35px 50px",
                    "background-color": "#a349a4",
                    "color": "#ffffff",
                    "border-radius": "20px",
                    "border": "2px solid #f0dbff"
                }
            }
        },
        103: {
            title: "Boring Path",
            description: "The same old upgrades. The other path becomes x50,000 more expensive.",
            cost() {
                if (hasUpgrade("mas", 101)) return new Decimal(500000)
                return new Decimal(10)
            },
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            branches: [113],
            unlocked() { return hasUpgrade('mas', 91) },
            style() {
                return {
                    "margin": "35px 50px",
                }
            }
        },
        111: {
            title: "Ultimate Boost",
            description: "Dark chocolate cookies boost cookies.",
            cost: new Decimal(1e15),
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            branches: [101],
            unlocked() { return hasUpgrade('mas', 112) },
            effect() {
                if (player.mas.darkChocolateCookies.lt(1)) return new Decimal(1)
                return player.mas.darkChocolateCookies.sqrt().sqrt().max(1)
            },
            effectDisplay() { 
                return "^" + format(this.effect()) 
            },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        112: {
            title: "It's all together.",
            description: "Cookies boost dark chocolate cookies.",
            cost: new Decimal(100e6),
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            branches: [111],
            unlocked() { return hasUpgrade('mas', 113) },
            effect() {
                if (player.mas.cookies.lt(10)) return new Decimal(1)
                return player.mas.cookies.log10().max(1)
            },
            effectDisplay() { 
                return "x" + format(this.effect()) 
            },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        113: {
            title: "What",
            description: "x1e171,320 cookies.",
            cost: new Decimal(0),
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            branches: [112],
            unlocked() { return hasUpgrade('mas', 103) },
            style() {
                return {
                    "margin": "20px 40px",
                }
            }
        },
        121: {
            title: "The End, gg!",
            description: "Cookies boost themselfs. You get 0.1% of dark chocolate cookies/s. This is end of the upgrade tree, good job!",
            cost: new Decimal("1e224"),
            currencyDisplayName: "dark chocolate cookies",
            currencyInternalName: "darkChocolateCookies",
            currencyLayer: "mas",
            unlocked() { return hasUpgrade('mas', 102) },
            effect() {
                if (player.mas.cookies.lt(1)) return new Decimal(1)
                return player.mas.cookies
            },
            effectDisplay() { 
                return "^" + format(this.effect()) 
            },
            style() {
                return {
                    "margin": "20px 40px",
                    "background-color": "#a349a4",
                    "color": "#ffffff",
                    "border-radius": "20px",
                    "border": "2px solid #f0dbff"
                }
            }
        },
    },
    clickables: {
        11: {
            title: "Chocolate-ify",
            display() {
                let gain = player.mas.cookies.div(1000).floor()
                if (hasUpgrade("mas", 72)) gain = gain.mul(upgradeEffect("mas", 72))
                return "Dip your cookies in chocolate. However, only 1/1,000 make it through. Unfortunate!\n\n" +
                       "On reset you will gain +" + formatWhole(gain) + " Chocolate Cookies.\n" +
                       "Requires at least 1,000 cookies."
            },
            canClick() {
                return player.mas.cookies.gte(1000)
            },
            onClick() {
                let gain = player.mas.cookies.div(1000).floor()
                if (hasUpgrade("mas", 72)) gain = gain.mul(upgradeEffect("mas", 72))
                player.mas.chocolateCookies = player.mas.chocolateCookies.add(gain)
                player.mas.cookies = new Decimal(0)           
                let upgradesToKeep = [42]
                player.mas.upgrades = player.mas.upgrades.filter(upg => {
                    let id = Number(upg)
                    return id >= 50 || upgradesToKeep.includes(id)
                })
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#7a431d",
                        "color": "#ffffff",
                        "border": "2px solid #d27d2d",
                        "border-radius": "8px",
                        "height": "80px",
                        "width": "220px",
                        "font-weight": "bold",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#361d0d",
                        "color": "#735c4f",
                        "border": "2px solid #543725", 
                        "border-radius": "8px",
                        "height": "80px",
                        "width": "220px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        21: {
            title: "Dark-ify",
            display() {
                let gain = new Decimal(0)
                if (player.mas.chocolateCookies.gte("1e37")) {
                    gain = player.mas.chocolateCookies.div("1e37").log(2).floor().add(1)
                    if (hasUpgrade("mas", 112)) gain = gain.mul(upgradeEffect("mas", 112))
                }
                return "Those chocolate cookies are really light. Let's fix that!\n\n" +
                       "On reset you will gain +" + formatWhole(gain) + " Dark Chocolate Cookies.\n" +
                       "Requires at least 1e37 chocolate cookies."
            },
            canClick() {
                return player.mas.chocolateCookies.gte("1e37")
            },
            onClick() {
                let gain = player.mas.chocolateCookies.div("1e37").log(2).floor().add(1)
                if (hasUpgrade("mas", 112)) gain = gain.mul(upgradeEffect("mas", 112))
                player.mas.darkChocolateCookies = player.mas.darkChocolateCookies.add(gain)
                player.mas.cookies = new Decimal(0)
                player.mas.chocolateCookies = new Decimal(0)
                let upgradesToKeep = [42, 81]
                player.mas.upgrades = player.mas.upgrades.filter(upg => {
                    let id = Number(upg)
                    return id >= 80 || upgradesToKeep.includes(id)
                })
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#4a2711",
                        "color": "#ffffff",
                        "border": "2px solid #391600",
                        "border-radius": "8px",
                        "height": "80px",
                        "width": "220px",
                        "font-weight": "bold",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#211208", 
                        "color": "#5c493e", 
                        "border": "2px solid #100107",
                        "border-radius": "8px",
                        "height": "80px",
                        "width": "220px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        31: {
            title: "Collect Cash",
            display() {
                return "Click to collect all cash!"
            },
            canClick() {
                return player.mas.conveyorCash.gt(0)
            },
            onClick() {
                player.mas.money = player.mas.money.add(player.mas.conveyorCash)
                player.mas.conveyorCash = new Decimal(0)
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#00e676",
                        "color": "#000000",
                        "border": "3px solid #00c853",
                        "border-radius": "12px",
                        "height": "65px",
                        "width": "220px",
                        "font-weight": "bold",
                        "cursor": "pointer",
                        "box-shadow": "0px 4px 10px rgba(0, 230, 118, 0.4)"
                    }
                }
                else {
                    return {
                        "background-color": "#222222",
                        "color": "#555555",
                        "border": "3px solid #333333",
                        "border-radius": "12px",
                        "height": "65px",
                        "width": "220px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        32: {
            title: "Manual Dropper",
            display() {
                let timer = new Decimal(player.mas.dropperTimer || 0)
                if (timer.gt(0)) {
                    return "Cooldown: " + format(timer) + "s"
                }
                return "The absolute basics. Click to drop a stud!\n\n+$0.01 per click."
            },
            canClick() {
                let timer = new Decimal(player.mas.dropperTimer || 0)
                return timer.lte(0)
            },
            onClick() {
                player.mas.conveyorCash = player.mas.conveyorCash.add(0.01)
                player.mas.dropperTimer = new Decimal(1)
            },
            style() {
                let timer = new Decimal(player.mas.dropperTimer || 0)
                if (timer.lte(0)) {
                    return {
                        "background-color": "#424242",
                        "color": "#ffffff",
                        "border": "2px solid #ffd700",
                        "border-radius": "8px",
                        "height": "65px",
                        "width": "180px",
                        "font-weight": "bold",
                        "cursor": "pointer"
                    }
                } else {
                    return {
                        "background-color": "#212121",
                        "color": "#888888",
                        "border": "2px solid #555555",
                        "border-radius": "8px",
                        "height": "65px",
                        "width": "180px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        41: {
            title: "Tycoon Prestige",
            display() {
                let gain = player.mas.money.div("1e90").floor()
                if (getBuyableAmount("mas", 72).gt(0)) gain = gain.mul(buyableEffect("mas", 72)).floor()
                
                return "Prestige your Tycoon to get stardust!\n\n" +
                       "You will gain: +" + formatWhole(gain) + " Stardust\n" +
                       "Requires at least $" + format(player.mas.money) + "/$1.00e90."
            },
            canClick() {
                return player.mas.money.gte("1e90")
            },
            onClick() {
                let gain = player.mas.money.div("1e90").floor()
                if (getBuyableAmount("mas", 72).gt(0)) gain = gain.mul(buyableEffect("mas", 72)).floor()
                
                player.mas.starDust = player.mas.starDust.add(gain)
                
                player.mas.money = new Decimal(0)
                player.mas.conveyorCash = new Decimal(0)
                player.mas.dropperTimer = new Decimal(0)
    
                setBuyableAmount("mas", 52, new Decimal(0))
                setBuyableAmount("mas", 53, new Decimal(0))
                setBuyableAmount("mas", 54, new Decimal(0))
                setBuyableAmount("mas", 55, new Decimal(0))
                setBuyableAmount("mas", 61, new Decimal(0))
                setBuyableAmount("mas", 62, new Decimal(0))
                setBuyableAmount("mas", 63, new Decimal(0))
                setBuyableAmount("mas", 64, new Decimal(0))
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#03071e",
                        "color": "#9bf6ff",
                        "border": "3px solid #00b4d8",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "pointer",
                        "box-shadow": "0px 0px 12px rgba(0, 180, 216, 0.5)"
                    }
                } else {
                    return {
                        "background-color": "#111116",
                        "color": "#444455",
                        "border": "3px solid #222233",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        42: {
            title: "Create a Star",
            display() {
                return "Compress the stardust. And it's getting closer. And it's getting closer. And it's getti- IT'S A STAR!\n\n" +
                       "Requires: 1.00e15 Stardust\n" +
                       "Reward: +1 Star"
            },
            canClick() {
                return player.mas.starDust.gte("1e15")
            },
            onClick() {
                player.mas.starDust = player.mas.starDust.sub("1e15")
                player.mas.stars = player.mas.stars.add(1)
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#ffd166",
                        "color": "#03071e",
                        "border": "3px solid #f77f00",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "pointer",
                        "box-shadow": "0px 0px 15px rgba(255, 209, 102, 0.7)"
                    }
                } else {
                    return {
                        "background-color": "#161411",
                        "color": "#554a3a",
                        "border": "3px solid #332a1c",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        43: {
            title: "Throw Stardust",
            cost() {
                let amt = player.mas.stardustThrown || new Decimal(0)
                if (amt.eq(0)) return new Decimal(1)
                return new Decimal(2).pow(amt)
            },
            display() {
                let amt = player.mas.stardustThrown || new Decimal(0)
                return "Throw some stardust. What could possibly happen?\n\n" +
                       "Total times you've wasted stardust: " + formatWhole(amt) + "\n\n" +
                       "Cost: " + formatWhole(this.cost()) + " Stardust"
            },
            canClick() {
                return player.mas.starDust.gte(this.cost())
            },
            onClick() {
                player.mas.starDust = player.mas.starDust.sub(this.cost())
                player.mas.stardustThrown = player.mas.stardustThrown.add(1)
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#260404",
                        "color": "#ffb3b3",
                        "border": "3px solid #ff1a1a",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "pointer",
                        "box-shadow": "0px 0px 10px rgba(255, 26, 26, 0.4)"
                    }
                }
                else {
                    return {
                        "background-color": "#1a0505",
                        "color": "#664444",
                        "border": "3px solid #4d1313",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        51: {
            title: "Quantum Prestige",
            display() {
                let gain = player.mas.starDust.div("1e16").floor()
                return "Reset everything before this for Quantum Shards. Are you sure this is safe?\n\n" +
                       "You will gain: +" + formatWhole(gain) + " Quantum Shards\n" +
                       "Requires at least " + format(player.mas.starDust) + "/1.00e16 Stardust."
            },
            canClick() {
                return player.mas.starDust.gte("1e16")
            },
            onClick() {
                let gain = player.mas.starDust.div("1e16").floor()
                player.mas.quantumShards = player.mas.quantumShards.add(gain)
                
                player.mas.starDust = new Decimal(0)
                player.mas.stars = new Decimal(0)
                player.mas.stardustThrown = new Decimal(0)
                
                setBuyableAmount("mas", 71, new Decimal(0))
                setBuyableAmount("mas", 72, new Decimal(0))
                setBuyableAmount("mas", 73, new Decimal(0))
                setBuyableAmount("mas", 74, new Decimal(0))
                setBuyableAmount("mas", 75, new Decimal(0))

                player.mas.money = new Decimal(0)
                player.mas.conveyorCash = new Decimal(0)
                player.mas.dropperTimer = new Decimal(0)
    
                setBuyableAmount("mas", 52, new Decimal(0))
                setBuyableAmount("mas", 53, new Decimal(0))
                setBuyableAmount("mas", 54, new Decimal(0))
                setBuyableAmount("mas", 55, new Decimal(0))
                setBuyableAmount("mas", 61, new Decimal(0))
                setBuyableAmount("mas", 62, new Decimal(0))
                setBuyableAmount("mas", 63, new Decimal(0))
                setBuyableAmount("mas", 64, new Decimal(0))
            },
            style() {
                if (this.canClick()) {
                    return {
                        "background-color": "#1c0024",
                        "color": "#ffb7ff",
                        "border": "3px solid #ff00ff",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "pointer",
                        "box-shadow": "0px 0px 12px rgba(255, 0, 255, 0.5)"
                    }
                } else {
                    return {
                        "background-color": "#120b14",
                        "color": "#523b54",
                        "border": "3px solid #2e1c30",
                        "border-radius": "12px",
                        "height": "95px",
                        "width": "240px",
                        "font-weight": "bold",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        52: {
            title() {
                if (player.mas.quantumDiceCharges <= 0) return "Buy Rolls"
                return "Roll the d20"
            },
            display() {
                let timer = player.mas.quantumDiceTimer || 0
                let effect = player.mas.quantumDiceEffect || new Decimal(1)
                let roll = player.mas.quantumDiceLastRoll || 0
                
                let info = "Roll a d20 to get a buff/debuff for 5 minutes.\n\n" +
                           "Rolls Left: " + player.mas.quantumDiceCharges + "\n\n"
                
                if (timer > 0) {
                    info += "Effect: (You rolled " + roll + "): x" + format(effect) + " Cash\n" +
                            "Time Left: " + Math.floor(timer / 60) + "m " + Math.floor(timer % 60) + "s\n\n"
                }
                
                if (player.mas.quantumDiceCharges <= 0) info += "Cost: 1 Quantum Shard (+10 Rolls)"
                else info += "Cost: 1 Roll (0.1 Shards equivalent)"
                
                return info
            },
            canClick() {
                if (player.mas.quantumDiceCharges > 0) return true
                return player.mas.quantumShards.gte(1)
            },
            onClick() {
                if (player.mas.quantumDiceCharges <= 0) {
                    player.mas.quantumShards = player.mas.quantumShards.sub(1)
                    player.mas.quantumDiceCharges += 10
                    return
                }

                player.mas.quantumDiceCharges -= 1
                let roll = Math.floor(Math.random() * 20) + 1
                player.mas.quantumDiceLastRoll = roll
                player.mas.quantumDiceTimer = 300 
                
                if (roll === 1) player.mas.quantumDiceEffect = new Decimal(0.01)
                else if (roll <= 5) player.mas.quantumDiceEffect = new Decimal(0.5)
                else if (roll <= 10) player.mas.quantumDiceEffect = new Decimal(1)
                else if (roll <= 15) player.mas.quantumDiceEffect = new Decimal(2)
                else if (roll <= 19) player.mas.quantumDiceEffect = new Decimal(10)
                else if (roll === 20) player.mas.quantumDiceEffect = new Decimal(100)
            },
            style() {
                let hasCharges = player.mas.quantumDiceCharges > 0
                return {
                    "background-color": hasCharges ? "#3a0007" : "#1c0024",
                    "color": "#ffb7ff",
                    "border": "3px solid #ff4da6",
                    "border-radius": "12px",
                    "height": "115px",
                    "width": "250px",
                    "font-weight": "bold",
                    "cursor": "pointer"
                }
            }
        },
        61: {
            title: "Speed x1",
            canClick() { return !new Decimal(player.mas.timeSpeed || 1).eq(1) },
            onClick() { player.mas.timeSpeed = new Decimal(1) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(1) ? "#0077b6" : "#001220", "color": "#90e0ef", "border": "2px solid #00f5d4", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        62: {
            title: "Speed x2",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(2) },
            onClick() { player.mas.timeSpeed = new Decimal(2) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(2) ? "#d00000" : "#4a0000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        63: {
            title: "Speed x4",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(4) },
            onClick() { player.mas.timeSpeed = new Decimal(4) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(4) ? "#d00000" : "#3d0000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        64: {
            title: "Speed x8",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(8) },
            onClick() { player.mas.timeSpeed = new Decimal(8) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(8) ? "#d00000" : "#300000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        71: {
            title: "Speed x16",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(16) },
            onClick() { player.mas.timeSpeed = new Decimal(16) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(16) ? "#d00000" : "#260000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        72: {
            title: "Speed x32",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(32) },
            onClick() { player.mas.timeSpeed = new Decimal(32) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(32) ? "#d00000" : "#1f0000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        73: {
            title: "Speed x64",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(64) },
            onClick() { player.mas.timeSpeed = new Decimal(64) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(64) ? "#d00000" : "#1a0000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        74: {
            title: "Speed x128",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(128) },
            onClick() { player.mas.timeSpeed = new Decimal(128) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(128) ? "#d00000" : "#150000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        81: {
            title: "Speed x256",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(256) },
            onClick() { player.mas.timeSpeed = new Decimal(256) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(256) ? "#d00000" : "#110000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        82: {
            title: "Speed x512",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(512) },
            onClick() { player.mas.timeSpeed = new Decimal(512) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(512) ? "#d00000" : "#0d0000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        83: {
            title: "Speed x1,024",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(1024) },
            onClick() { player.mas.timeSpeed = new Decimal(1024) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(1024) ? "#d00000" : "#080000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
        84: {
            title: "Speed x2,048",
            canClick() { return new Decimal(player.mas.timeFlux || 0).gt(0) && !new Decimal(player.mas.timeSpeed || 1).eq(2048) },
            onClick() { player.mas.timeSpeed = new Decimal(2048) },
            style() { return { "background-color": new Decimal(player.mas.timeSpeed || 1).eq(2048) ? "#d00000" : "#030000", "color": "#ffb3b3", "border": "2px solid #ffb703", "border-radius": "8px", "height": "75px", "width": "140px", "font-weight": "bold", "margin": "4px" } }
        },
    },
})