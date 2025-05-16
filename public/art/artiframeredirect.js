if (localStorage.getItem("redirectartPage") !== "null" && !!localStorage.getItem("redirectartPage")) {
    const elem = document.getElementById("artframe");
    elem.src = localStorage.getItem("redirectartPage");
    localStorage.setItem("redirectartPage", null);
}   
