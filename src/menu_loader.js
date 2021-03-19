const MenuPage = (() => {
    let showPage = () => {
        let contentBar = document.querySelector("#contentBar");
        contentBar.innerHTML = "";
        let p1 = document.createElement("p");
        p1.textContent = "We serve the most exquisite dish on earth: Banana";
        contentBar.appendChild(p1);
    };

    return {
        showPage
    }
})();

export default MenuPage.showPage