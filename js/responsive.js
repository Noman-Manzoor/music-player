document.getElementById("responsive_menu").addEventListener("click", () => {
    if (document.getElementById("menu_list").style.display == "none") {
        document.getElementById("menu_list").style.display = "block";
        document.getElementById("for_responsive_use").style.marginTop = "143px";
    } else {
        document.getElementById("menu_list").style.display = "none";
        document.getElementById("for_responsive_use").style.marginTop = "20px";

    }
});