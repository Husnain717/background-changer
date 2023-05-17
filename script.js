const getColor = () => {
	const randomNumber = Math.floor(Math.random()*16777215).toString(16);
	const randomCode = "#" + randomNumber;
	document.body.style.backgroundColor = randomCode;
	document.getElementById("color-code").innerText = randomCode;
}

document.getElementById("btn").addEventListener(
	"click",
	getColor
)


getColor();