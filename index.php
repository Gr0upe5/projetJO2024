<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Olympics Traveler</title>  
    <link rel="stylesheet" type="text/css" href="assets/css/theme.css">
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyAX6pUQMV4uWw7isouqkNfVs7xqrglMjoY&callback=initMap" type="text/javascript"></script>
    <script src="assets/js/gmaps.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  </head>
  <body class='bg-dark'>

  <!--Navbar verticale-->
    <div id="side-navbar" class="float-lg-left">
      <nav class="bg-light text-center" style="min-height: 100%; position: fixed;">
        <a class="navbar-brand mx-auto" href="#"><?php include 'assets/svg/logoJO2024.php'?></a>
        <div id="navbar">
          <ul class="nav flex-column">
            <li class="nav-item active">
              <a class="nav-link border-top" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link border-top" href="#">Actualités</a>
            </li>
            <li class="nav-item border-top">
              <a class="nav-link disabled" href="#">Résultats des épreuves</a>
            </li>
            <li class="nav-item border-top">
              <a class="nav-link" href="#">Langue</a>
            </li>
          </ul>
        </div>
      </nav>
    </div> 
    
    <div class='container text-center'>
      <!--Header-->
      <div id='logo' class=" container-xl" style="background-image: url('assets/img/banniere.jpg')"> 
        <?php include 'assets/svg/olympicRings.php'?>
        <h1 class="text-light">Olympics Traveler</h1>
      </div>

      <!--Carte gmaps -->
      <div id="map" class=""><script src="assets/js/carteJO.js"></script></div>  
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle mr-3" href="#" role="button" id="dropdownMenuSports" data-toggle="dropdown">Sports</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Basket-Ball</a>
              <a class="dropdown-item" href="#">Natation</a>
              <a class="dropdown-item" href="#">Athlétisme</a>
            </div>
          </div>
        </li>
        <li class="nav-item">
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuSports" data-toggle="dropdown">Villes</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Paris</a>
              <a class="dropdown-item" href="#">Versailles</a>
              <a class="dropdown-item" href="#">Saint-Denis</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class='container'>

      <!--Présentation du site-->
      <section id="fiche-site" class="mt-5">
        <div class="bg-secondary h-50 container">
          <h2 class="bg-light text-center">Présentation du site</h2>
          <div class="row">
            <div class="col-sm" id="desc-site">
              <h4>Description</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ipsa corporis suscipit reprehenderit, quaerat ratione architecto sit asperiores ullam dolore expedita culpa minus quasi ipsam officiis? Ab eos in nisi?</p>
            </div>
            <div id="carouselPhotosSite" class="carousel slide w-50 float-right col-sm" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="...">
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
          <div class="row">
            <div class="col-sm" id="epr-site">
              <h4>Epreuves</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni magnam, alias laborum necessitatibus suscipit perferendis enim hic, nesciunt fugit aperiam blanditiis voluptas architecto labore iusto repudiandae distinctio! Molestias, nulla?</p>
            </div>
            <div class="col-sm">
              <h4>Lieux à visiter</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic eius ab. Accusantium, culpa ducimus eveniet laborum, dolores a fugiat error facere officia praesentium eaque nulla voluptatibus! Voluptates, doloremque ut!</p>
            </div>
          </div>
        </div>
      </section>

      <!--Resultats derniere épreuve / Actu ?-->
      <section id="Resultats de la dernière épreuve">
        <div class="bg-secondary container">
          <h2 class="bg-light text-center">Résultats de la dernière épreuve</h2>
          <div class="row">
            <div class="col-sm">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ipsa corporis suscipit reprehenderit, quaerat ratione architecto sit asperiores ullam dolore expedita culpa minus quasi ipsam officiis? Ab eos in nisi?</p>
              <ol>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!--Footer-->
    <footer class="container-xl bg-light">
      <div>
        <p id="mentions-leg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut culpa? Debitis, quod? Magni tempore voluptate repellendus facere eum sint sunt optio animi natus obcaecati quibusdam quaerat, ipsam corrupti a.</p>
      </div>
      <nav>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">A propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <script src="assets/js/script.js"></script>
  </body>
</html>