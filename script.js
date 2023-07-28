function changeMode() {
    let
    mode = document.getElementsByClassName("mode")[0];
    background = document.querySelectorAll(".nav-bar, .vid-container, .com-search-wrap, .vid-content, .vid-wrap, .side-bar");
    hamburgerIcon = document.querySelectorAll(".hamburger");
    notification = document.querySelector(".notif");
    color = document.querySelectorAll("a, h1, h2, p, .logo, .title");
    vidWrap = document.getElementsByClassName("vid-container");
    ancourText = document.getElementsByClassName(".link")[0];
    if(mode.getAttribute("src") == "moon.png" ){
        mode.setAttribute("src", "sun.png");
        background.forEach(element => {
            element.style.backgroundColor = "black";
        });
        hamburgerIcon.forEach(element => {
            element.setAttribute("src", "hamburger-light.png")
        })
        color.forEach(element => {
            element.style.color = "white";
        });
        notification.setAttribute("src", "noti-white.png")
        ancourText.style.display = "block";
    }else{
        mode.setAttribute("src", "moon.png");
        background.forEach(element => {
            element.style.backgroundColor = "white";
        });
        color.forEach(element => {
            element.style.color = "black";
        });
        hamburgerIcon.forEach(element => {
            element.setAttribute("src", "hamburger-dark.png")
        })
        notification.setAttribute("src", "noti-black.png")
    }
}

function hamburgerLeft(){    
      let sideBar = document.querySelector(".side-bar");
    if(sideBar.style.display == "block"){
        sideBar.style.display = "none";
    }else{
        sideBar.style.display = "block";
    }

}

function hamburgerRight(){    
      let sideBar = document.querySelector(".side-bar");
     let hamburgerIcon = document.querySelector(".hamburger-right");
      let phoneSidebar = document.querySelector(".phone-sidebar");
    if(phoneSidebar.style.display == "none"){
        phoneSidebar.style.display = "block";
        hamburgerIcon.setAttribute("src", "cancel.png");
    }else{
        phoneSidebar.style.display = "none";
        hamburgerIcon.setAttribute("src", "hamburger-dark.png");
    }

}