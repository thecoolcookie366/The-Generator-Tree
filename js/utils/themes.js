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
	if (options.theme && !list.includes(options.theme)) {
		list.push(options.theme)
	}
	return list
}

var themes = ["default", "binary", "softcap", "softcap2", "softcap3", "hardcap", "purelight", "puredark", "terrible", "awful", "mediocre", "alright", "decent", "good", "perfect","exquisite"]

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
