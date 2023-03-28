// [233, 83, 30]
const colors = [
	[246, 161, 23],
	[242, 131, 39],
	[237, 107, 29],
	[233, 83, 30]
]

const middleSection = []
const leftCircleSection = []
const rightCircleSection = []

const sectionWidth = 50
const circleWidth = (3 * sectionWidth + sectionWidth / 2) * 2

function setup() {
	let widthRatio = 1
	let heightRatio = 1.4142
	let baseWidth = 1000
	createCanvas(baseWidth, (baseWidth * heightRatio) / widthRatio)

	for (let i = 7, c = 0; i >= 1; i -= 2, c++) {
		middleSection.push(new Section(width / 2, 0, width / 2, height, i * sectionWidth, colors[c], sectionWidth))
	}

	for (let i = 6, c = 0; i >= 0; i -= 2, c++) {
		leftCircleSection.push(new LeftCircle(width / 2 - circleWidth / 2, height / 3, circleWidth - sectionWidth * i, sectionWidth, colors[c]))
	}

	for (let i = 6, c = 0; i >= 0; i -= 2, c++) {
		rightCircleSection.push(new RightCircle(width / 2 + circleWidth / 2, height - height / 3, circleWidth - sectionWidth * i, sectionWidth, colors[c]))
	}
}

function draw() {
	background(26, 55, 95)

	for (let i = 0; i < middleSection.length; i++) {
		if (middleSection[i].isMouseInside(mouseX)) {
			stroke(255)
			leftCircleSection[i].color = [255, 255, 255]
			rightCircleSection[i].color = [255, 255, 255]
		} else {
			stroke(middleSection[i].color)
			leftCircleSection[i].color = colors[i]
			rightCircleSection[i].color = colors[i]
		}
		middleSection[i].draw()

		leftCircleSection[i].draw()
		rightCircleSection[i].draw()
	}
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
		strokeCap(SQUARE)
		strokeWeight(this.w)
		stroke(this.color)

		let c1 = {
			x1: this.x + this.d / 2,
			y1: this.y,
			x2: this.x + this.d / 2,
			y2: this.y - (this.d / 2) * 0.5523,
			x3: this.x + (this.d / 2) * 0.5523,
			y3: this.y - this.d / 2,
			x4: this.x,
			y4: this.y - this.d / 2
		}
		// if (this.isMouseOverBezier(c1.x1, c1.y1, c1.x2, c1.y2, c1.x3, c1.y3, c1.x4, c1.y4)) {
		// 	stroke(255, 0, 0)
		// } else {
		// 	stroke(this.color)
		// }
		bezier(c1.x1, c1.y1, c1.x2, c1.y2, c1.x3, c1.y3, c1.x4, c1.y4)

		let c2 = {
			x1: this.x - this.d / 2,
			y1: this.y,
			x2: this.x - this.d / 2,
			y2: this.y + (this.d / 2) * 0.5523,
			x3: this.x - (this.d / 2) * 0.5523,
			y3: this.y + this.d / 2,
			x4: this.x,
			y4: this.y + this.d / 2
		}
		// if (this.isMouseOverBezier(c2.x1, c2.y1, c2.x2, c2.y2, c2.x3, c2.y3, c2.x4, c2.y4)) {
		// 	stroke(255, 0, 0)
		// } else {
		// 	stroke(this.color)
		// }
		bezier(c2.x1, c2.y1, c2.x2, c2.y2, c2.x3, c2.y3, c2.x4, c2.y4)

		let c3 = {
			x1: this.x + this.d / 2,
			y1: this.y - 1,
			x2: this.x + this.d / 2,
			y2: this.y + (this.d / 2) * 0.5523,
			x3: this.x + (this.d / 2) * 0.5523,
			y3: this.y + this.d / 2,
			x4: this.x,
			y4: this.y + this.d / 2
		}
		// if (this.isMouseOverBezier(c3.x1, c3.y1, c3.x2, c3.y2, c3.x3, c3.y3, c3.x4, c3.y4)) {
		// 	stroke(255, 0, 0)
		// } else {
		// 	stroke(this.color)
		// }
		bezier(c3.x1, c3.y1, c3.x2, c3.y2, c3.x3, c3.y3, c3.x4, c3.y4)
	}

	isMouseOverBezier(x1, y1, x2, y2, x3, y3, x4, y4, w) {
		// Calculate points along curve and check distance to mouse
		for (let t = 0; t <= 1; t += 0.01) {
			let x = bezierPoint(x1, x2, x3, x4, t)
			let y = bezierPoint(y1, y2, y3, y4, t)
			if (dist(x, y, mouseX, mouseY) < w) {
				return true
			}
		}
		return false
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
		strokeWeight(this.w)
		bezier(this.a, this.b, this.a, this.b, this.c, this.d, this.c, this.d)
	}

	isMouseInside(mx) {
		let x1 = this.a - this.w / 2
		let x2 = this.a + this.w / 2
		return (mx >= x1 && mx <= x1 + this.initialWidth) || (mx >= x2 - this.initialWidth && mx <= x2)
	}
}
