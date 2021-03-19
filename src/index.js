import InitialPage from "./initial_loader";
import contactShow from "./contact_loader";
import NavigationBar from "./navigation_loader";
import './style.css';

class BoneStructure{
    constructor(){

    }

    //just to show the content bar
    showContentBar(){
        let content = document.querySelector("div#content");

        let contentBar = document.createElement("div");
        contentBar.id = "contentBar";

        content.appendChild(contentBar);
    }

    start(){
       NavigationBar.showBar();
       this.showContentBar();
       contactShow();
    }
}

let system = new BoneStructure();
system.start();