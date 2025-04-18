var tablerows = document.getElementsByClassName("tr");

for (i = 0; i < tablerows.length; i++) {
    const element = tablerows[i]
    const classList = element.classList;

    let str = classList.value;
    str = str.substring(0, str.length - 3);

    if (str === "sky") {
        element.style.backgroundImage = "url(../images/pokemon/" + str + ".jpg)";
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "100% 100%";
    } else {
        element.style.backgroundImage = "url(../images/pokemon/" + str + ".jpg)";
    }


}
