import initialShow from "./initial_loader";
import contactShow from "./contact_loader";
import menuShow from "./menu_loader";

let NavigationBar = (() => {
    let showBar = () => {
        let content = document.querySelector("div#content");
        
        let navigationBar = document.createElement("div");
        navigationBar.id = "navigationBar";
        
        let initialPageBtn = document.createElement("button");
        initialPageBtn.textContent = "Homepage";
        initialPageBtn.addEventListener("click", initialShow);
        navigationBar.appendChild(initialPageBtn);

        let contactPageBtn = document.createElement("button");
        contactPageBtn.textContent = "Contact";
        contactPageBtn.addEventListener("click", contactShow);
        navigationBar.appendChild(contactPageBtn);

        let menuPageBtn = document.createElement("button");
        menuPageBtn.textContent = "View Menu";
        menuPageBtn.addEventListener("click", menuShow);
        navigationBar.appendChild(menuPageBtn);

        content.appendChild(navigationBar);
    };

    return {
        showBar
    }
})();

export default NavigationBar;