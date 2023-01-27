const clickToButton = (props) => {
    let elementById = document.getElementById("buttonGroup");
    for (let i = 1; i < 10; i++) {
        let element = document.createElement("div");
        let text = document.createTextNode(i);
        element.id = i;
        element.onclick = button_click;
        element.appendChild(text);
        element.className = "calc-button-1";
        elementById.appendChild(element);

    }
}
const button_click = (props) => {
    // let text = document.createTextNode("click");
    // props.appendChild(text);
    let target = props.target;
    fetch("http://localhost:8080/button", {
        method: "POST",
        body: target.id
    })
        .then((value) => {
        console.log(value)
        // let elementById = document.getElementById("calc_input");
        // let innerText = elementById.innerText;
        // elementById.innerText = innerText + value;
    })
}


clickToButton();