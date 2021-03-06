<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>CIB</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/jquery-ui.css">
    <!-- fonts -->
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700,100|Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/style.css">

    <link rel="shortcut icon" href="img/ico/favicon.ico" type="image/x-icon"/>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <![endif]-->
  </head>
  <body>

    <!-- nav-menu -->
    <!-- top language bar -->
    <div class="container-fluid ">
        <div class="row pull-right nav-top" style="height:40px">
            <img src="img/fill-110.png" alt=""/>
            <span class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">
                    EN
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                    <li role="presentation">
                        <a role="menuitem" tabindex="-1" href="#">ES</a>
                    </li>
                </ul>
            </span>
        </div>
    </div>

    <!-- navbar -->
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Logo and hamburger -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php"><img src="img/logo-cib.svg" alt="logo"/></a>
            </div>
          <!-- Menu Items -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="about.php">ABOUT US</a>
                     </li>
                    <li>
                        <a href="research.php">RESEARCH</a>
                    </li>
                    <li>
                        <a href="services.php">FACILITIES</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">TRAINING</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="mcib-img" href="outreach_courses.php#1">
                                    <img src="img/mcib.png" alt="mcib" />
                                </a>
                            </li>
                            <li>
                                <a href="outreach_courses.php">
                                    COURSES
                                </a>
                            </li>
                        </ul>
                    </li>
                     <li>
                        <a href="outreach.php">OUTREACH</a>
                    </li>
                    <li>
                        <a href="news.php">NEWS</a>
                    </li>
                    <li>
                        <form class="navbar-form" role="search">
                            <div class="form-group">
                                <input id="directory" type="text" class="form-control" placeholder="directory">
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
