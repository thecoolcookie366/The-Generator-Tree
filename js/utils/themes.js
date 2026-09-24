// ************ Themes ************
function getAvailableThemes() {
	let list = ["default", "binary"]
	if (player.points.gte("1e1e9")) {
		list.push("softcap")
	}
	if (player.points.gte("1e1e33")) {
		list.push("softcap2")
	}
	if (player.points.gte("1e1.796e308")) {
		list.push("softcap3")
	}
	if (player.points.gte("eeeeee2")) {
		list.push("hardcap")
	}
	if (player.points.eq("10") || player.points.gte("1e1.796e308")) {
		list.push("purelight")
	}
	if (player.points.eq("10") || player.points.gte("1e1.796e308")) {
		list.push("puredark")
	}
	if (tmp.terri && tmp.terri.layerShown) {
		list.push("terrible")
	}
	if (tmp.awf && tmp.awf.layerShown) {
		list.push("awful")
	}
	if (tmp.med && tmp.med.layerShown) {
		list.push("mediocre")
	}
	if (tmp.alr && tmp.alr.layerShown) {
		list.push("alright")
	}
	if (tmp.dec && tmp.dec.layerShown) {
		list.push("decent")
	}
	if (tmp.good && tmp.good.layerShown) {
		list.push("good")
	}
	if (tmp.per && tmp.per.layerShown) {
		list.push("perfect")
	}
	if (tmp.exc && tmp.exc.layerShown) {
		list.push("exquisite")
	}
	if (false) {
		list.push("flawless")
	}
	if (false) {
		list.push("supreme")
	}
	if (false) {
		list.push("absurd")
	}
	if (false) {
		list.push("ultra")
	}
	if (false) {
		list.push("hyper")
	}
	if (false) {
		list.push("super")
	}
	if (false) {
		list.push("insane")
	}
	if (false) {
		list.push("crazy")
	}
	if (false) {
		list.push("omega")
	}
	if (false) {
		list.push("astonishing")
	}
	if (false) {
		list.push("phenomenal")
	}
	if (false) {
		list.push("ludicrous")
	}
	if (false) {
		list.push("illegal")
	}
	if (false) {
		list.push("based")
	}
	if (false) {
		list.push("overclocked")
	}
	if (false) {
		list.push("sigma")
	}
	if (false) {
		list.push("goated")
	}
	if (false) {
		list.push("peak")
	}
	if (options.theme && !list.includes(options.theme)) {
		list.push(options.theme)
	}
	return list
}

var themes = ["default", "binary", "softcap", "softcap2", "softcap3", "hardcap", "purelight", "puredark", "terrible", "awful", "mediocre", "alright", "decent", "good", "perfect","exquisite", "flawless", "supreme", "absurd", "ultra", "hyper", "super", "insane", "crazy", "omega", "astonishing", "phenomenal", "ludicrous", "illegal", "based", "overclocked", "sigma", "goated", "peak"]

var colors = {
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	binary: {
		1: "#005400",
		2: "#005400",
		3: "#005400",
		color: "#878686",
		points: "#09ff00",
		locked: "#ffffff",
		background: "#000000",
		background_tooltip: "rgba(13, 37, 1, 0.75)",
	},
	softcap: {
		1: "#990000",
		2: "#660000",
		3: "#440000",
		color: "#d1c7a5",
		points: "#ffcc00",
		locked: "#555555",
		background: "#1c1c1c",
		background_tooltip: "rgba(40, 40, 40, 0.85)",
	},
	softcap2: {
		1: "#ff6600",
		2: "#b34700",
		3: "#803300",
		color: "#e6ccb3",
		points: "#ff5500",
		locked: "#3d3d3d",
		background: "#140e0a",
		background_tooltip: "rgba(41, 23, 12, 0.85)",
	},
	softcap3: {
		1: "#00b3ff",
		2: "#0077aa",
		3: "#004466",
		color: "#cccccc",
		points: "#e6e6e6",
		locked: "#1a1a1a",
		background: "#12151c",
		background_tooltip: "rgba(18, 21, 28, 0.9)",
	},
	hardcap: {
		1: "#9900ee",
		2: "#6600aa",
		3: "#330066",
		color: "#e6ccff",
		points: "#cc00ff",
		locked: "#222222",
		background: "#050008",
		background_tooltip: "rgba(25, 0, 35, 0.9)",
	},
	purelight: {
		1: "#ffffff",
		2: "#ffffff",
		3: "#ffffff",
		color: "#ffffff",
		points: "#ffffff",
		locked: "#ffffff",
		background: "#ffffff",
		background_tooltip: "#ffffff",
	},
	puredark: {
		1: "#000000",
		2: "#000000",
		3: "#000000",
		color: "#000000",
		points: "#000000",
		locked: "#000000",
		background: "#000000",
		background_tooltip: "#000000",
	},
	terrible: {
		1: "#ff0000",
		2: "#cc0000",
		3: "#990000",
		color: "#dfdfdf",
		points: "#ff0000",
		locked: "#bf8f8f",
		background: "#140505",
		background_tooltip: "rgba(20, 5, 5, 0.75)",
	},
	awful: {
		1: "#d42a00",
		2: "#aa2100",
		3: "#801900",
		color: "#dfdfdf",
		points: "#d42a00",
		locked: "#bf8f8f",
		background: "#140705",
		background_tooltip: "rgba(20, 7, 5, 0.75)",
	},
	mediocre: {
		1: "#a95600",
		2: "#874500",
		3: "#663400",
		color: "#dfdfdf",
		points: "#a95600",
		locked: "#bf8f8f",
		background: "#140f05",
		background_tooltip: "rgba(20, 15, 5, 0.75)",
	},
	alright: {
		1: "#7e8100",
		2: "#656700",
		3: "#4c4d00",
		color: "#dfdfdf",
		points: "#7e8100",
		locked: "#bf8f8f",
		background: "#131405",
		background_tooltip: "rgba(19, 20, 5, 0.75)",
	},
	decent: {
		1: "#53ac00",
		2: "#428a00",
		3: "#326900",
		color: "#dfdfdf",
		points: "#53ac00",
		locked: "#bf8f8f",
		background: "#0f1405",
		background_tooltip: "rgba(15, 20, 5, 0.75)",
	},
	good: {
		1: "#28d700",
		2: "#20ac00",
		3: "#188100",
		color: "#dfdfdf",
		points: "#28d700",
		locked: "#bf8f8f",
		background: "#071405",
		background_tooltip: "rgba(7, 20, 5, 0.75)",
	},
	perfect: {
		1: "#00ff00",
		2: "#00cc00",
		3: "#009900",
		color: "#dfdfdf",
		points: "#00ff00",
		locked: "#bf8f8f",
		background: "#051405",
		background_tooltip: "rgba(5, 20, 5, 0.75)",
	},
	exquisite: {
		1: "#00aa55",
		2: "#008844",
		3: "#006633",
		color: "#dfdfdf",
		points: "#00aa55",
		locked: "#bf8f8f",
		background: "#030e05",
		background_tooltip: "rgba(3, 14, 5, 0.85)",
	},
	flawless: {
		1: "#0055aa",
		2: "#004488",
		3: "#003366",
		color: "#dfdfdf",
		points: "#0055aa",
		locked: "#bf8f8f",
		background: "#000b14",
		background_tooltip: "rgba(0, 11, 20, 0.75)",
	},
	supreme: {
		1: "#0000ff",
		2: "#0000cc",
		3: "#000099",
		color: "#dfdfdf",
		points: "#0000ff",
		locked: "#bf8f8f",
		background: "#000014",
		background_tooltip: "rgba(0, 0, 20, 0.75)",
	},
	absurd: {
		1: "#5500ff",
		2: "#4400cc",
		3: "#330099",
		color: "#dfdfdf",
		points: "#5500ff",
		locked: "#bf8f8f",
		background: "#0b0014",
		background_tooltip: "rgba(11, 0, 20, 0.75)",
	},
	ultra: {
		1: "#aa00ff",
		2: "#8800cc",
		3: "#660099",
		color: "#dfdfdf",
		points: "#aa00ff",
		locked: "#bf8f8f",
		background: "#0d0014",
		background_tooltip: "rgba(13, 0, 20, 0.75)",
	},
	hyper: {
		1: "#ff00ff",
		2: "#cc00cc",
		3: "#990099",
		color: "#dfdfdf",
		points: "#ff00ff",
		locked: "#bf8f8f",
		background: "#140014",
		background_tooltip: "rgba(20, 0, 20, 0.75)",
	},
	super: {
		1: "#ff69c3",
		2: "#cc549c",
		3: "#993f75",
		color: "#dfdfdf",
		points: "#ff69c3",
		locked: "#bf8f8f",
		background: "#14080f",
		background_tooltip: "rgba(20, 8, 15, 0.75)",
	},
	insane: {
		1: "#988fff",
		2: "#7a72cc",
		3: "#5c5699",
		color: "#dfdfdf",
		points: "#988fff",
		locked: "#bf8f8f",
		background: "#0f0e14",
		background_tooltip: "rgba(15, 14, 20, 0.75)",
	},
	crazy: {
		1: "#74fff3",
		2: "#5cccaf",
		3: "#469983",
		color: "#dfdfdf",
		points: "#74fff3",
		locked: "#bf8f8f",
		background: "#0b1413",
		background_tooltip: "rgba(11, 20, 19, 0.75)",
	},
	omega: {
		1: "#02ffaf",
		2: "#02cc8c",
		3: "#019969",
		color: "#dfdfdf",
		points: "#02ffaf",
		locked: "#bf8f8f",
		background: "#00140e",
		background_tooltip: "rgba(0, 20, 14, 0.75)",
	},
	astonishing: {
		1: "#73ff00",
		2: "#5ccc00",
		3: "#459900",
		color: "#dfdfdf",
		points: "#73ff00",
		locked: "#bf8f8f",
		background: "#0b1400",
		background_tooltip: "rgba(11, 20, 0, 0.75)",
	},
	phenomenal: {
		1: "#ff7d00",
		2: "#cc6400",
		3: "#994b00",
		color: "#dfdfdf",
		points: "#ff7d00",
		locked: "#bf8f8f",
		background: "#140a00",
		background_tooltip: "rgba(20, 10, 0, 0.75)",
	},
	ludicrous: {
		1: "#ff1491",
		2: "#cc1074",
		3: "#990c57",
		color: "#dfdfdf",
		points: "#ff1491",
		locked: "#bf8f8f",
		background: "#14010b",
		background_tooltip: "rgba(20, 1, 11, 0.75)",
	},
	illegal: {
		1: "#969696",
		2: "#787878",
		3: "#5a5a5a",
		color: "#dfdfdf",
		points: "#969696",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(15, 15, 15, 0.75)",
	},
	based: {
		1: "#fcffc3",
		2: "#cacc9c",
		3: "#979975",
		color: "#dfdfdf",
		points: "#fcffc3",
		locked: "#bf8f8f",
		background: "#14140f",
		background_tooltip: "rgba(20, 20, 15, 0.75)",
	},
	overclocked: {
		1: "#2332ff",
		2: "#1c28cc",
		3: "#151e99",
		color: "#dfdfdf",
		points: "#2332ff",
		locked: "#bf8f8f",
		background: "#030414",
		background_tooltip: "rgba(3, 4, 20, 0.75)",
	},
	sigma: {
		1: "#d2be4b",
		2: "#a8983c",
		3: "#7e722d",
		color: "#dfdfdf",
		points: "#d2be4b",
		locked: "#bf8f8f",
		background: "#141207",
		background_tooltip: "rgba(20, 18, 7, 0.75)",
	},
	goated: {
		1: "#f0b4ff",
		2: "#c090cc",
		3: "#906c99",
		color: "#dfdfdf",
		points: "#f0b4ff",
		locked: "#bf8f8f",
		background: "#130f14",
		background_tooltip: "rgba(19, 15, 20, 0.75)",
	},
	peak: {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#141414",
		background_tooltip: "rgba(20, 20, 20, 0.75)",
	},
}
function changeTheme() {

	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "default";
}

function switchTheme() {
	let available = getAvailableThemes()
	let index = available.indexOf(options.theme)
	if (options.theme === null || index >= available.length-1 || index < 0) {
		options.theme = available[0];
	}
	else {
		index ++;
		options.theme = available[index];
	}
	changeTheme();
	resizeCanvas();
}
