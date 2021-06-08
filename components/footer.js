class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        /**********************************************footer**********************************/
        /*footer*/
        .contact-us{
          padding: 20px;
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
          border-radius: 50%;
        }
        
        
        .footer-widget{
          width: 200px;
          float: left;
        }
        
        .links, .follow{
          color: #05480c;
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
          display: block;
          margin-bottom: 10px;
        }
        .footer-social-icon a {
          margin-right: 15px;
        }
        
          
        .linkedin-bg{
          margin-left: 10px;
        }
        
        .subscribe{
          width: 218px;
          height: 40px;
        }
        
        
        *,
        *::before,
        *::after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        
        
        a#instagram {
          float: left;
          margin: 0px;
          position: relative;
          display: block;
          width:  47px;
          height: 47px;
          outline: none;
          -webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          background: -webkit-radial-gradient(32% 106%, circle cover, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), -webkit-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
          background: -moz-radial-gradient(32% 106%, circle cover, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), -moz-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
          background: -ms-radial-gradient(32% 106%, circle cover, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), -ms-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
          background: -o-radial-gradient(32% 106%, circle cover, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), -o-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
          background: radial-gradient(circle farthest-corner at 32% 106%, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), linear-gradient(135deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
        }
        
        a#instagram i#logo {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          position: absolute;
          display: block;
          width: 35px;
          height: 35px;
          border: 4px solid rgb(255, 255, 255);
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
        }
        
        a#instagram i#logo::before {
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          position: absolute;
          display: block;
          width: 20px;
          height: 20px;
          border: 4px solid rgb(255, 255, 255);
          -webkit-border-radius: 27px;
          -moz-border-radius: 27px;
          border-radius: 27px;
        }
        
        a#instagram i#logo::after {
          content: "";
          top: 2px;
          right: 2px;
          position: absolute;
          display: block;
          width: 4px;
          height: 4px;
          background: rgb(255, 255, 255);
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
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
          <!--<div class="container" style="padding-top: 1em;">-->
            <div class="row contact-us" style="--bs-gutter-x: 0rem;">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="footer-logo">
                <a href="https://nitimanthan.in/"><img src="../images/logo_tiny.png" class="img-fluid-1" alt="logo"></a>
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
                      <a id="instagram" href="https://instagram.com/nitimanthan?igshid=zwcvvix2ibw" target="_blank">
                        <i id="logo"></i>
                      </a>
                      
                      <a class="linkedin-bg" href="https://www.linkedin.com/company/nm-celra"><i class="fa fa-linkedin-square" style="font-size:48px;color:#0e76a8"></i></a><br><br>
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
            <!--</div>-->
          </footer>
        </section>
        `;
    }
}

customElements.define('footer-component', Footer);