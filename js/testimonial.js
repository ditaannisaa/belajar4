let hamburgerIsOpen = false;

const openHamburger = () =>{
  let hamburgerNavCon = document.getElementById("hamburger-nav-container") ;

  if (!hamburgerIsOpen) {
    hamburgerNavCon.style.display = "block";
    hamburgerIsOpen = true
  }
    else {
      hamburgerNavCon.style.display = "none";
      hamburgerIsOpen = false
    }
}

class Testi {
    #image = "";
    #quote = "";

    constructor (image, quote){
        this.#image = image;
        this.#quote = quote;
    }

    get image (){
        return this.#image;
    }
    get quote (){
        return this.#quote;
    }

    get testiHTML () {
        return `<div class="testi">
                     <img src="${this.image}" >
                     <p class="quote">${this.quote}</p>
                     <p class="author">${this.company}</p>
                 </div>`
     }
}

class AuthorTesti extends Testi{
    #author = "";

    constructor(image, quote, author){
        super(image, quote);
        this.#author = author;
    }

    get author(){
        return this.#author;
    }
}

class CompanyTesti extends Testi{
    #company = "";

    constructor(image, quote, author){
        super(image, quote);
        this.#company = author;
    }

    get company(){
        return this.#company + "company";
    }
}

const testimonial1 = new CompanyTesti(
    "image/ahmed-yameen-K-HhBxMhgr0-unsplash.jpg",
    "Mantap banget jasanya",
    "- Surya"
);

const testimonial2 = new CompanyTesti(
    "image/annie-spratt-FSFfEQkd1sc-unsplash.jpg",
    "Makasih banyak kakak",
    "- farah"
);

let testimonialData = [testimonial1, testimonial2];
let testiHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testiHTML += testimonialData[i].testiHTML;
}

document.getElementById("testimonial").innerHTML = testiHTML;
