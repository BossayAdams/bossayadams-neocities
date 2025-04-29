if (localStorage.getItem("redirectPage") !== "null" && !!localStorage.getItem("redirectPage")) {
    const elem = document.getElementById("content");
    elem.src = localStorage.getItem("redirectPage");
    localStorage.setItem("redirectPage", null);
}   
