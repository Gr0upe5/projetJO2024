<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Olympics Traveler</title>
    <link rel="stylesheet" type="text/css" href="assets/css/theme.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body class='bg-jo'>

    <!--Navbar verticale
		<div class="float-lg-left">
			<nav id="side-navbar" class="bg-light text-center">
				<a class="navbar-brand mx-auto" href="#"><?php include 'assets/svg/logoJO2024.php'?></a>
				<div id="navbar">
					<ul class="nav flex-column">
						<li class="nav-item active"><a class="nav-link border-top" href="#">Accueil</a></li>
						<li class="nav-item border-top"><a class="nav-link disabled" href="#">Résultats des épreuves</a></li>
						<li class="nav-item border-top"><a class="nav-link" href="#">Langue</a></li>
					</ul>
				</div>
			</nav>
		</div>-->
    <!--Header
    <div class='container text-center'>
        <h1 class="text-light position-relative mt-3 bg-light text-dark p-2">Olympics' Traveler</h1>
    </div>-->
    
        <!--Carte gmaps -->
        <div class="container-lg mt-1" style="background-color: #FCD066; ">
            <div class="row-lg">
                <table class=" nav nav-map pt-2 rounded-top ">
                    <tr class="menu-filters">
                        <td class="nav-item">
                            <div class="dropdown">
                                <a class="btn dropdown-toggle btn-light menu-list" href="#" role="button"
                                    id="dropdownMenuSports" data-toggle="dropdown">Sports</a>
                                <div class="dropdown-menu select-menu overflow-auto" id="sport-select">
                                </div>
                            </div>
                        </td>
                        <td class="nav-item">
                            <div class="dropdown">
                                <a class="btn dropdown-toggle btn-light menu-list" href="#" role="button"
                                    id="dropdownMenuSports" data-toggle="dropdown">Villes</a>
                                <div class="dropdown-menu select-menu overflow-auto" id="city-select">
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="row mx-auto">
                    <div id="map" class="col"></div>
                    <div class="col">
                        <div id="results"></div>
                    </div>
                </div>
                <div class="col-lg row-md row-sm">
                    <div id="show-filters" id="" class=" menu-filters text-light">
                            <table class="">
                                <td><b>Résultats</b>: <span id="nb-markers"></span> sites trouvés</td>
                                <tr>
                                    <td><span id="city-filter" class="hidden"></span></td>
                                    <td><span id="sport-filter"></span></td>
                                    <button onclick="initMarkers()"
                                    class="mx-auto float-right site-button" style="background-color: #FCD066;">Reinitialiser les
                                    filtres</button>
                                </tr>
                            </table>
                            <td>
                                
                            </td>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    <!--Présentation du site-->
    <div id="fiche-site" class="container mx-auto hidden mt-3">
        <div class="bg-light rounded-top">
            <button id="quit-button" class="bg-light float-left rounded-top">✕</button>
            <button id="prev-button" class="bg-light float site-button ">&laquo;</button>
            <button id="next-button" class="bg-light float-right justify-content-end site-button rounded-top">&raquo;</button>

        </div>

        <div class="p-2 pt-0 text-center inner-site">
            <h2 class="bg-light" id="site-title"></h2>
            <div class="row text-left">
                <div class="col-sm">
                    <h4>Description</h4>
                    <p id="descr-site">

                    </p>
                </div>
                <div id="carouselPhotosSite" class="carousel slide w-50 float-right col-sm" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..." id="img-site1">
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." id="img-site2">
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." id="img-site3">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselPhotosSite" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselPhotosSite" role="button" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-sm">
                    <h4>Epreuves</h4>
                    <p id="epr-site">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni magnam, alias laborum
                        necessitatibus suscipit perferendis enim hic, nesciunt fugit aperiam blanditiis voluptas
                        architecto labore iusto repudiandae distinctio! Molestias, nulla?
                    </p>
                </div>
                <div class="col-sm">
                    <h4>Lieux à visiter</h4>
                    <p id="visit-site">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic eius ab. Accusantium,
                        culpa
                        ducimus eveniet laborum, dolores a fugiat error facere officia praesentium eaque nulla
                        voluptatibus! Voluptates, doloremque ut!
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div id="socials-footer" class="container mt-5">
        <ul class="nav justify-content-center">
            <li>
                <a href="https://www.paris2024.org/fr/"><img src="assets/svg/olympicRings.svg" alt="Site Officiel"
                        height="70px" width="150px" class="nav-item social-icon"></a>
            </li>
            <li>
                <a href="https://www.instagram.com/paris2024/?hl=fr"><img src="assets/svg/instagram.svg" alt="Instagram"
                        height="70px" width="70px" class="nav-item social-icon ml-4"></a>
            </li>
            <a href="https://www.instagram.com/paris2024/?hl=fr"><img src="assets/svg/twitter.svg" alt="Twitter"
                    height="70px" width="70px" class="nav-item social-icon ml-4"></a>
            <li>

            </li>
        </ul>
    </div>

    <!--Resultats derniere épreuve / Actu ?
		<section id="result-epr" class="mt-2">
			<div class="bg-secondary container">
				<h2 class="bg-light text-center">Résultats de la dernière épreuve</h2>
				<div class="row">
					<div class="col">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ipsa corporis suscipit reprehenderit, quaerat ratione architecto sit asperiores ullam dolore expedita culpa minus quasi ipsam officiis? Ab eos in nisi?
						</p>
						<ol>
							<li></li>
							<li></li>
							<li></li>
						</ol>
					</div>
				</div>
			</div>
		</section>-->

    <!--Footer link vers reseaux sociaux jo
    <footer class="container bg-light mt-5">
        <div>
            <p id="footer-descr">
                Cette application web a été developpé dans le cadre d'un hackathon organisé par l'école DORANCO sur le
                theme des Jeux Olympiques de 2024.<br>
                <b>Membres de l'équipe: Didier PRADEL, Adel TERKI, Racim TAMGLIT.</b>
            </p>
        </div>
        <nav>
            <ul class="nav justify-content-end">
                <li class="nav-item"><a class="nav-link active" href="#">A propos</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Nous Contacter</a></li>
            </ul>
        </nav>
    </footer>-->

    <!--SCRIPTS-->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous">
    </script>
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyAX6pUQMV4uWw7isouqkNfVs7xqrglMjoY&callback=initMap"
        type="text/javascript"></script>
    <script src="assets/js/gmaps.js"></script>

    <script src="assets/js/script.js"></script>
    <script src="assets/js/app.js"></script>

</body>

</html>