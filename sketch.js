// [233, 83, 30]
const colors = [
	[246, 161, 23],
	[242, 131, 39],
	[237, 107, 29],
	[233, 83, 30]
]

const sections = []
const sectionWidth = 50
const circleWidth = (3 * sectionWidth + sectionWidth / 2) * 2

function setup() {
	let widthRatio = 1
	let heightRatio = 1.4142
	let baseWidth = 1000
	createCanvas(baseWidth, (baseWidth * heightRatio) / widthRatio)

	for (let i = 7, c = 0; i >= 1; i -= 2, c++) {
		sections.push(new Section(width / 2, 0, width / 2, height, i * sectionWidth, colors[c], sectionWidth))
	}
}

function draw() {
	background(26, 55, 95)

	for (let i = 0; i < sections.length; i++) {
		sections[i].draw()
	}
	new LeftCircle(width / 2 - circleWidth / 2, height / 3, circleWidth, sectionWidth, colors[3]).draw()
	new LeftCircle(width / 2 - circleWidth / 2, height / 3, circleWidth - sectionWidth * 2, sectionWidth, colors[2]).draw()
	new LeftCircle(width / 2 - circleWidth / 2, height / 3, circleWidth - sectionWidth * 4, sectionWidth, colors[1]).draw()
	new LeftCircle(width / 2 - circleWidth / 2, height / 3, circleWidth - sectionWidth * 6, sectionWidth, colors[0]).draw()

	new RightCircle(width / 2 + circleWidth / 2, height - height / 3, circleWidth, sectionWidth, colors[3]).draw()
	new RightCircle(width / 2 + circleWidth / 2, height - height / 3, circleWidth - sectionWidth * 2, sectionWidth, colors[2]).draw()
	new RightCircle(width / 2 + circleWidth / 2, height - height / 3, circleWidth - sectionWidth * 4, sectionWidth, colors[1]).draw()
	new RightCircle(width / 2 + circleWidth / 2, height - height / 3, circleWidth - sectionWidth * 6, sectionWidth, colors[0]).draw()
}

class LeftCircle {
	constructor(x, y, d, w, color) {
		this.x = x
		this.y = y
		this.d = d
		this.w = w
		this.color = color
	}

	draw() {
		noFill()
		stroke(this.color)
		strokeWeight(this.w)
		strokeCap(SQUARE)
		bezier(
			this.x + this.d / 2,
			this.y,
			this.x + this.d / 2,
			this.y - (this.d / 2) * 0.5523,
			this.x + (this.d / 2) * 0.5523,
			this.y - this.d / 2,
			this.x,
			this.y - this.d / 2
		)
		bezier(
			this.x - this.d / 2,
			this.y,
			this.x - this.d / 2,
			this.y - (this.d / 2) * 0.5523,
			this.x - (this.d / 2) * 0.5523,
			this.y - this.d / 2,
			this.x,
			this.y - this.d / 2
		)
		bezier(
			this.x - this.d / 2,
			this.y - 1,
			this.x - this.d / 2,
			this.y + (this.d / 2) * 0.5523,
			this.x - (this.d / 2) * 0.5523,
			this.y + this.d / 2,
			this.x,
			this.y + this.d / 2
		)
	}
}

class RightCircle {
	constructor(x, y, d, w, color) {
		this.x = x
		this.y = y
		this.d = d
		this.w = w
		this.color = color
	}

	draw() {
		noFill()
		stroke(this.color)
		strokeWeight(this.w)
		strokeCap(SQUARE)
		bezier(
			this.x + this.d / 2,
			this.y,
			this.x + this.d / 2,
			this.y - (this.d / 2) * 0.5523,
			this.x + (this.d / 2) * 0.5523,
			this.y - this.d / 2,
			this.x,
			this.y - this.d / 2
		)
		// bezier(
		// 	this.x - this.d / 2,
		// 	this.y,
		// 	this.x - this.d / 2,
		// 	this.y - (this.d / 2) * 0.5523,
		// 	this.x - (this.d / 2) * 0.5523,
		// 	this.y - this.d / 2,
		// 	this.x,
		// 	this.y - this.d / 2
		// )
		bezier(
			this.x - this.d / 2,
			this.y - 1,
			this.x - this.d / 2,
			this.y + (this.d / 2) * 0.5523,
			this.x - (this.d / 2) * 0.5523,
			this.y + this.d / 2,
			this.x,
			this.y + this.d / 2
		)
		bezier(
			this.x + this.d / 2,
			this.y - 1,
			this.x + this.d / 2,
			this.y + (this.d / 2) * 0.5523,
			this.x + (this.d / 2) * 0.5523,
			this.y + this.d / 2,
			this.x,
			this.y + this.d / 2
		)
	}
}

class Section {
	constructor(a, b, c, d, w, color, initialWidth) {
		this.a = a
		this.b = b
		this.c = c
		this.d = d
		this.w = w
		this.color = color
		this.initialWidth = initialWidth
	}

	draw() {
		if (this.isMouseInside(mouseX)) {
			stroke(255)
		} else {
			stroke(this.color)
		}
		strokeWeight(this.w)
		bezier(this.a, this.b, this.a, this.b, this.c, this.d, this.c, this.d)
	}

	isMouseInside(mx) {
		let x1 = this.a - this.w / 2
		let x2 = this.a + this.w / 2
		return (mx >= x1 && mx <= x1 + this.initialWidth) || (mx >= x2 - this.initialWidth && mx <= x2)
	}
}
