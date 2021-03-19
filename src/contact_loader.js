class ContactPage{
    constructor(){

    }

    showPage(){
        let contentBar = document.querySelector("#contentBar");
        //clean the contentbar
        contentBar.innerHTML = '';

        let p1 = document.createElement("p");
        p1.textContent = "Phone: (+91)95318252";
        contentBar.appendChild(p1);

        let p2 = document.createElement("p");
        p2.textContent = "Address: 189 Advent child, north pole";
        contentBar.appendChild(p2);

        let p3 = document.createElement("p");
        p3.textContent = "Email: santaclaus89th@noth.com";
        contentBar.appendChild(p3);
    }
}

export default (new ContactPage()).showPage;