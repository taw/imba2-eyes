# NOTE:
# Can't inherit from svg:g yet in imba2
# so this is a bit awkward

tag spooky-eye
	def render
		let max_eye_movement = 0.3 * data.sz
		let rx = data.x
		let ry = data.y
		if mx != null && my != null
			let dx = mx - data.x
			let dy = my - data.y
			let dl = Math.sqrt(dx*dx + dy*dy)
			if dl > max_eye_movement
				dx = max_eye_movement * dx/dl
				dy = max_eye_movement * dy/dl
			rx += dx
			ry += dy
		<self>
			<svg>
				<svg:circle.eye1 cx=(data.x) cy=(data.y) r=(data.sz)>
				<svg:circle.eye2 cx=(rx) cy=(ry) r=(data.sz * 0.5) css:fill=(data.color)>
				<svg:circle.eye3 cx=(rx) cy=(ry) r=(data.sz * 0.2)>

tag app-root
	def eye_distance(eye1, eye2)
		let dx = eye1.x - eye2.x
		let dy = eye1.y - eye2.y
		Math.sqrt((dx * dx) + (dy * dy))

	def can_place_eye(new_eye)
		eyes.every do |eye|
			eye_distance(eye, new_eye) >= eye.sz + new_eye.sz + 5

	def random_color()
		let h = Math.random() * 360
		let s = Math.round(50 + Math.random() * 50)
		let l = Math.round(30 + Math.random() * 40)
		"hsl({h}, {s}%, {l}%)"

	# FIXME: This doesn't work
	def onmousemove(event)
		console.log("OMM")

		let native_event = event._event
		let svg = document.get-element-by-id("eyes")
		let rect = svg.get-bounding-client-rect()
		mx = native_event.pageX - rect.x
		my = native_event.pageY - rect.y

	def mount
		console.log("SC")
		# FIXME: This doesn't work
		schedule(raf: true)

	def constructor
		super
		let wh = window.inner-height
		let ww = window.inner-width
		mx = Math.random() * ww
		my = Math.random() * wh
		eyes = []
		for i in [1 .. 1000]
			let sz = 20 + Math.random() * 60
			let x = sz + Math.random() * (ww - 2 * sz)
			let y = sz + Math.random() * (wh - 2 * sz)
			let new_eye = {x: x, y: y, sz: sz, color: random_color()}
			if can_place_eye(new_eye)
				eyes.push(new_eye)

		console.log(eyes)

	def render
		console.log("R")
		<self>
			for eye in eyes
				<spooky-eye data=eye mx=mx my=my>
