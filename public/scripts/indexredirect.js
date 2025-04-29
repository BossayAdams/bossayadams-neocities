if (window.self == window.top) {
    // The page is not inside an iframe
    localStorage.setItem("redirectPage", window.location.href);
    window.location.href = "/index.html";
  }