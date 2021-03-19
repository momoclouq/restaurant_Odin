import myRestaurant from './restaurant.jpg';

class InitialPage {
    constructor(){

    }

    showPage(){
        let content = document.querySelector("#contentBar");
        content.innerHTML = "";
        let restaurantImg = document.createElement("img");
        restaurantImg.src = myRestaurant;

        let header = document.createElement("h1");
        header.textContent = "The alpha quaratic restaurant";

        let p1 = document.createElement("p");
        p1.textContent = "amskdmcoasdknblasdlknvoqweknvsl;avlsndvkla;sdknvkals;dknvaksldvknaksdlvkasdqwkronvasdvasdvasd";

        let p2 = document.createElement("p");
        p2.textContent = "This is the best restaurant I have every eaten at. Highly recommend";

        content.appendChild(restaurantImg);
        content.appendChild(header);
        content.appendChild(p1);
        content.appendChild(p2);
    }
}

export default (new InitialPage()).showPage;