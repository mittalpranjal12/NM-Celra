class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <script>
        
        </script>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&display=swap');
        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        @import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');
        
        .section-header{
            padding-top: 0.7rem!important;
            padding-bottom: 0rem!important ;
          }
          
          .nm-celra{
            color: rgb(29, 56, 29);
            font-family: 'Cormorant Garamond', serif; 
            font-size: 30px;
            font-weight:600; 
            font-style:bold;
          }
          
          .nm-celra-1{
            color: rgb(29, 56, 29);
            font-family: 'Cormorant Garamond', serif; 
            font-size: 20px;
            font-weight:600; 
            font-style:bold;
          }
          
          .celra{
            float: left;
            height: 80px;
            width: 100px;
          }
        
          .navbar a{
            padding: 3px;
            text-align: center;
          }
          
          .nav-item{
            text-align: center;
            padding-top: 15px;
            padding-bottom: 10px;
            padding-left: 15px;
            padding-right: 5px;
          }
          .sb-example-3{
            padding-right: 0px;
          }
          
          .sb-example-3 .search__title {
            font-size: 22px;
            font-weight: 900;
            text-align: center;
            color: #ff8b88;
          }
          
          .sb-example-3 .search__input {
            width: 100%;
            padding: 10px 20px;
          
            background-color: transparent;
            transition: transform 250ms ease-in-out;
            font-size: 14px;
            line-height: 18px;
          
            color: #575756;
            background-color: transparent;
          /*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */
          
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: 18px 18px;
            background-position: 95% center;
            border-radius: 50px;
            border: 1px solid #575756;
            transition: all 250ms ease-in-out;
            backface-visibility: hidden;
            transform-style: preserve-3d;
          }
          
          .sb-example-3 .search__input::placeholder {
                color: rgba(87, 87, 86, 0.8);
                text-transform: uppercase;
                letter-spacing: 1.5px;
            }
          
          .sb-example-3 .search__input:hover,
            .search__input:focus {
                padding: 12px 0;
                outline: 0;
                border: 1px solid transparent;
                border-bottom: 1px solid #575756;
                border-radius: 0;
                background-position: 100% center;
            }
        </style>
        <!-- ========================= SECTION CONTENT ========================= -->
    
        <nav class="navbar navbar-light navbar-expand-lg sticky-top overlay" id="navOverlay" style="background-color: white;">
          <!-- <div style="background-color: antiquewhite;"> -->
          <div class="container-fluid">
            <div>
              <a href="../index.html"><img src="../images/logo.png" alt="Celra Logo" class="img-responsive celra"></a>
            </div>
              <div class="text">
                <h2 class="nm-celra">Niti Manthan</h2>
                <h3 class="nm-celra-1">Centre for Environmental Law, Research and Action</h3>
              </div>
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!--1-->
                <li class="nav-item dropdown">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="../index/team-section.html" type="button" aria-current="page">
                    About Us
                  </a>
                </li>
                <!--2-->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle btn btn-outline-secondary btn-sm" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Events
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="../index.html#Events">Ongoing</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Upcoming</a></li>
                  </ul>
                </li>
                
                <!--3-->
                <li class="nav-item">
                  <a class="nav-link btn btn-outline-secondary btn-sm" aria-current="page" href="../index.html#Blog-Media" type="button">Blog & Media</a>
                </li>
                <!--4-->
                <li class="nav-item">
                  <a class="nav-link btn btn-outline-secondary btn-sm" aria-current="page" href="../index.html#News" type="button">News</a>
                </li>
                <!--5-->
                <li class="nav-item">
                  <a class="nav-link btn btn-outline-secondary btn-sm" aria-current="page" href="https://nitimanthan.in/" type="button">Opportunities</a>
                </li>
              </ul>
              <!-- <div class="col-rt-3 equal-height"> -->
                <div class="sb-example-3">
                  <!-- partial:index.partial.html -->
                  <div class="search__container">
                    
                    <input class="search__input" type="text" placeholder="Search">
                  </div>
                </div>
            </div>
          </div>
        </nav>
        `;
    }
}

customElements.define('header-component', Header);
