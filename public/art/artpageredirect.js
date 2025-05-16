if (window.self == window.top) {
    // The page is not inside an iframe
    localStorage.setItem("redirectartPage", window.location.href);
    window.location.href = "/art/art.html";
  }