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
            display: inline;
            height: 80px;
            width: 100px;
        }
        
        .navbar a{
            padding: 7px;
            text-align: center;
        }
        
        .nav-item{
            text-align: center;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 20px;
            padding-right: 20px;
        }
        </style>
        <header class="section-header bg-light">
        <div class="container">
        <div class="row">
        <div class="col-4" style="text-align: right;">
        <a href="../index.html"><img src="../images/logo.PNG" alt="Celra Logo" class="celra"></a>
        </div>
        <div class="col-8">
        <div class="text">
        <h2 class="nm-celra">The Niti Manthan</h2>
        <h3 class="nm-celra-1">Centre for Environmental Law, Research and Action</h3>
        </div>
        </div>
        </div></div>
        </header> <!-- section-header.// -->
        <!-- ========================= SECTION CONTENT ========================= -->
        <!--<div class="overlay" id="nav-overlay">-->
        <nav class="navbar navbar-expand-lg navbar-light sticky-top overlay" id="nav-overlay" style="background: #ece8e8;">
        <div class="container-fluid" style="padding: 0 5rem 0 5rem;">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!--1-->
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle btn btn-outline-secondary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        About Us
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="../index/team-section.html">Our Team</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="../index.html#Contact-Us">Contact-Us</a></li>
        </ul>
        </li>
        <!--2-->
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle btn btn-outline-secondary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
        <a class="nav-link btn btn-outline-secondary" aria-current="page" href="../index.html#Blog-Media" type="button">Blog & Media</a>
        </li>
        <!--4-->
        <li class="nav-item">
        <a class="nav-link btn btn-outline-secondary" aria-current="page" href="../index.html#News" type="button">News</a>
        </li>
        <!--5-->
        <li class="nav-item">
        <a class="nav-link btn btn-outline-secondary" aria-current="page" href="https://nitimanthan.in/" type="button">Opportunities</a>
        </li>
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        </div>
        </nav>
        <!--</div>-->
        `;
    }
}

customElements.define('header-component', Header);