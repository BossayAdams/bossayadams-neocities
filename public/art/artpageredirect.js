if (window.self == window.top) {
    // The page is not inside an iframe
    localStorage.setItem("redirectartPage", window.location.href);
    localStorage.setItem("redirectPage", url(/art/art.html));
    window.location.href = "/index.html";
  }