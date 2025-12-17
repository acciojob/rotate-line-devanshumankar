//your JS code here. If required.
const line = document.querySelector("#line");
		let deg = 0;
		setInterval(() => {
			line.style.transform = `rotate(${deg}deg)`;
			deg += 2;
		}, 200);