class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        /*footer*/
footer .container{
  overflow: hidden;
  
}
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: #ece8e8;
  position: relative;
}

.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}

.img-fluid-1{
  position: relative;
  width: 100px;
  height: 80px;
}

.img-fluid-2{
  position: relative;
  width: 100px;
  border-radius: 50%;
}


.footer-widget{
  width: 200px;
  float: left;
}

.footer-widget-heading{
  text-shadow: 2px 2px;
}

.footer-widget ul li {
  display: inline-block;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: #1c6812;
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}

.footer-social-icon {
  color: rgb(255, 255, 255);
  /* width: 430px; */
  display: block;
  /* font-size: 20px; */
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  margin-right: 15px;
}


.instagram-bg{
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  -webkit-background-clip: text;
  /* Also define standard property for compatibility */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  font-size: 45px; /* change this to change the size*/
}
.linkedin-bg{
  color: #fff;
  font-size: 45px;
  height: 45px;
  width: 50px;
  text-align: center;
  border-radius: 20%;
  background: #0e76a8;
}

.subscribe{
  width: 218px;
  height: 40px;
}


/*copyright area*/
.copyright-area{
  background: #202020;
  padding: 20px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a{
  color: #ff5e14;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color:  #1c6812;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
        </style>
        <!-------------------------Contact us------------------------------>
        <section id="Contact-Us">
        <footer class="footer-section">
          <div class="container" style="padding-top: 1em;">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="footer-logo">
                  <!-- <a href="#"><img src="../images/logo.png" class="img-fluid-1" alt="logo"></a><br><br> -->
                  <a href="https://nitimanthan.in/"><img src="../images/logo_tiny.png" class="img-fluid-2" alt="logo"></a>
                  <p><a href="https://nitimanthan.in/" style="text-decoration: none; color:black;">Niti Manthan</a></p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget">
                  <div class="footer-widget-heading links">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../index/team-section.html">About us</a></li>
                    <li><a href="../index.html#Blog-Media">Blog & Media</a></li>
                    <li><a href="../index.html#News">Latest News</a></li>
                  </ul>
                </div>
                <!-- <div class="footer-widget-social"> -->
                  <div class="footer-social-icon" >
                    <div class="footer-widget-heading follow">
                      <h3>Follow us</h3>
                    </div>
                    
                    <a href="https://instagram.com/nitimanthan?igshid=zwcvvix2ibw"><i class="fab fa-instagram instagram-bg"></i></a>
                    <a href="https://www.linkedin.com/company/nm-celra"><i class="fab fa-linkedin-in linkedin-bg"></i></a><br><br>
                    <button type="button" class="btn btn-outline-success btn-sm subscribe" data-toggle="modal" data-target="#myModal">
                      <p style="margin-top: 0;margin-bottom:0;"><b>Subscribe to our Newsletter</b></p>
                    </button>
                  </div>
                  <!-- </div> -->
                  
                </div>
              </div>
            </div>
            
            <div class="copyright-area">
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-sm-12 col-md-6">
                    <div class="copyright-text">
                      <p>Copyright &copy; 2021, All Right Reserved <a href="#">NM CELRA</a></p>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-sm-12 col-md-6">
                    <div class="footer-menu">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
        `;
    }
}

customElements.define('footer-component', Footer);