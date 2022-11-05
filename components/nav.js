class NavBarMenu extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
            <nav id="nav">
                <ul>
                    <li id="home"><a href="index.html">Home</a></li>                    
                    <li id="menus">
                        <a href="menu.html">Menus</a>
                        <ul>
                            <li>
                                <a href="menu.html#Breakfast">Breakfast</a>                                
                            </li>
                            <li>
                                <a href="menu.html#Lunch">Lunch</a>                                
                            </li>                            
                        </ul>
                    </li>
<!--                    <li id="location"><a href="location.html">Location</a></li>-->
                    <li id="catering"><a href="catering.html">Catering</a></li>
                    <li id="about"><a href="about.html">About us</a></li>
                </ul>
            </nav>
        `
    }

}

customElements.define('nav-bar-menu', NavBarMenu)

