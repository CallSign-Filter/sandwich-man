class FooterText extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `    
        <div id="footer-wrapper">
            <footer id="footer" class="container">
                    <div class="row">
                        <div class="col-12" style="text-align: center">
                            <a class="image"><img src="../../images/yelp.png"/> </a>
                        </div>
                    </div>
                <div class="row">
                    <div class="col-12" style="text-align: center">
                        <ul class="menu">
                            <li>
                                <button class="icon social" style="margin-bottom: 5px"><a
                                    href="https://www.yelp.com/biz/the-sandwich-man-ventura" target="_blank"
                                    class="icon brands fa-yelp"><span class="label">Yelp</span></a></button>
                            </li>
                            <li>
                                <button class="icon social"><a
                                    href="https://m.facebook.com/profile.php?id=119440948066339" target="_blank"
                                    class="icon brands fa-facebook-f"><span class="label">Facebook</span></a>
                                </button>
                            </li>
                            <li><span>1575 Los Angeles Ave, Ventura, CA 93004</span></li>
                            <li><span><a href="tel:805-647-5374">(805) 647-5374</a></span></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div id="copyright">
                            <ul class="menu">
                                <li>&copy;<a href="mailto:website@brandonhessler.com">Brandon Hessler. All rights
                                    reserved</a></li>
                                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>        
        `
    }

}

customElements.define('footer-bar', FooterText)

