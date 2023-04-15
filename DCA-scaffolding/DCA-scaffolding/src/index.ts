import "./components/export"
import categories,{Attributes} from "./components/categories/categories"
import {getApi} from "./data"
import {getData} from "./data2" 

class AppContainer extends HTMLElement {

    categories?: string
    

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    
   async connectedCallback() {
    const category = await getApi();  
    const categor = await getData();  
    this.render(category)
    
    }

    render(category:any) {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ''

        category.forEach( (category:any) => { 
            const categoryCard = this.ownerDocument.createElement("my-categories");
            categoryCard.setAttribute(Attributes.categoriesname, category)
            this.shadowRoot?.appendChild(categoryCard)
            
        });
        
        
         

  
    }
    }
 


customElements.define('app-container', AppContainer)


