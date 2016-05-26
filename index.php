<?php include('header.php');?>

  <!-- start page content -->

    <!-- Carousel -->
    <div class="container-fluid -carousel">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="img-responsive" src="img/slider1.png" alt="research">
                    <div id="research" class="carousel-caption">
                        <div class="title">Centre for Biological Research</div>
                        <p class="margin-top-2">Spanish National Research Council</p>
                    </div>
                </div>
                <div class="item">
                    <img class="img-responsive" src="img/slider2.png" alt="report">
                    <div id="download" class="carousel-caption">
                        <div class="title">Download our latest report</div>
                    <p>
                        <button class="button-primary" type="button"><img src="img/fill-107.png" alt=""/>
                            <span>Scientific report 2015</span>
                        </button>
                    </p>
                    </div>
                </div>
                <div class="item">
                    <img class="img-responsive big" src="img/slider3.png" alt="Flower">
                    <img class="img-responsive small" src="img/slider1.png" alt="research" style="display:none;">
                    <div id="development" class="carousel-caption">
                        <div class="title">Research & Development</div>
                        <p>Collaboration, Management and Technology transfer</p>
                        <p>
                            <a href="#">Learn more</a>
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img class="img-responsive" src="img/slider4.png" alt="Flower">
                    <div id="outreach" class="carousel-caption">
                        <div class="title">Outreach</div>
                        <p>
                            Schools, press, get to know all the things we do
                        </p>
                        <p>
                            <a href="#">Learn more</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Content -->
    <main class="container-fluid">
        <!-- CIB -->
        <div class="row section-title">
            <div class="col-md-12">
            <span class="marker"></span>
            <span>CIB</span>
            <span class="pull-right"><a href="about.php#sec4">Contact us</a></span>
            </div>
        </div>
        <div class="row margin-top-1">
            <div class="col-md-12">
                The Center for Biological Research (CIB) is one of the research
                centers with greater prestige and tradition in the Superior
                Council for Scientific Research (CSIC) State Agency.
                The CIB has been at the forefront of research in biology since
                its inception in 1953. The initial activity of the CIB was
                primarily oriented studies in biology and biomedicine but
                currently is a multidisciplinary center, which brings together
                researchers from the areas of Biology, Agricultural Sciences
                and Chemical. It is an active and dynamic center,
                constantly evolving.
            </div>
        </div>
        <!-- SEARCH -->
        <div class="row section-title">
            <div class="col-md-12">
                <span class="marker"></span>
                <span>SEARCH</span>
            </div>
        </div>
        <div class="row search-form">
            <div class="col-md-12">
                <form role="form">
                    <div class="input-group">
                        <input type="text" class="form-control input-sm" placeholder="Search the entire site">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit"><img src="img/Lupa.svg" alt="" />Search</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <!-- NEWS -->
        <div class="row section-title">
            <div class="col-md-12">
            <span class="marker"></span>
            <span>NEWS</span>
            <span class="pull-right"><a href="news.php">See more</a></span>
            </div>
        </div>
        <div class="row news">
            <div class="col-md-4">
                <div class="title">
                    <a href="#">RESEARCH</a>
                </div>
                <div class="img">
                    <img src="img/home-op-2.png" alt="" />
                </div>
                <div class="subtitle">
                    The CIB contributes to a better understanding of the
                    processes of mRNA degradation
                </div>
                <div class="date">
                    24 SEP 2016
                </div>
                <div class="footnote">
                    Chromatography Service Biological Research Center was
                    established in 1988 to meet the demand of domestic or
                    from other centers and institutions users.
                </div>
            </div>
            <div class="col-md-4">
                <div class="title">
                    <a href="#">SERVICES</a>
                </div>
                <div class="img">
                    <img src="img/photo-1430933964450-0-aefb-85717-c-8.png" alt="" />
                </div>
                <div class="subtitle">
                    Identified new molecules that regulate progression
                    of B-cell malignancies
                </div>
                <div class="date">
                    24 SEP 2016
                </div>
                <div class="footnote">
                    Chromatography Service Biological Research Center was
                    established in 1988 to meet the demand of domestic or
                    from other centers and institutions users.
                </div>
            </div>
            <div class="col-md-4">
                <div class="title">
                    <a href="#">OUTREACH</a>
                </div>
                <div class="img">
                    <img src="img/photo-1451186859696-371-d-9477-be-93.png" alt="" />
                </div>
                <div class="subtitle">
                    The CIB contributes to a better understanding
                </div>
                <div class="date">
                    24 SEP 2016
                </div>
                <div class="footnote">
                    Chromatography Service Biological Research Center was
                    established in 1988.
                </div>
            </div>
        </div>
        <!-- EVENTS -->
        <div class="row section-title">
            <div class="col-md-12">
                <span class="marker"></span>
                <span>EVENTS</span>
                <span class="pull-right"><a href="outreach.php">See more</a></span>
            </div>
        </div>
        <div class="row events margin-top-2">
            <div class="col-md-12">
                <div class="col-md-2 schedule">
                    <ul>
                        <li id="3" class="schedule-head">
                            <div class="title">
                                TOLLERANT 2ND MEETING
                            </div>
                            <div class="date">
                                27 MAY 2016
                            </div>
                        </li>
                        <li id="1">
                            <div class="title">
                                Ligno Biotech IV
                            </div>
                            <div class="date">
                                19-21 JUN 2016 · 12:00 am
                            </div>
                        </li>
                        <li id="2">
                            <div class="title">
                                ISBP 15th
                            </div>
                            <div class="date">
                                30 JUN 2016
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 detail">
                    <div class="col-md-12">
                        <img src="img/event1.png" alt="" />
                        <div class="title">
                            19-21 JUNE 2016 MADRID - Palacio de congresos de Madrid
                        </div>
                        <div class="subtitle">
                            4th Symposium on Biotechnology applied to lignocelluloses
                        </div>
                        <div class="detail-link">
                            <a href="http://lignobiotech.es/">More details</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 calendar">
                    <div id="datepicker"></div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="row section-title margin-top-10">
            <div class="col-md-12 title">
                <span class="marker"></span>
                <span>LINKS OF INTEREST</span>
            </div>
        </div>
        <div class="row footer">
            <div class="col-md-4">
                <ul>
                    <li>
                        <a href="http://www.sebc.es/">Sociedad Española de Biología Celular</a>
                    </li>
                    <li>
                        <a href="http://www.semicrobiologia.org/">Sociedad Española de Microbiología</a>
                    </li>
                    <li>
                        <a href="http://www.sebiot.org/">Sociedad Española de Biotecnología</a>
                    </li>
                    <li>
                        <a href="http://www.secugen.es/">SECUGEN Servicio de Secuenciación DNA</a>
                    </li>
                    <li>
                        <a href="http://apored.bq.uam.es/">Red Española de Apotosis</a>
                    </li>
                    <li>
                        <a href="http://www.geirli.net/">Grupo Español de Radicales Libres</a>
                    </li>
                    <li>
                        <a href="http://www.alkaptonuria.cib.csic.es/index.htm">Aku Database</a>
                    </li>
                    <li>
                        <a href="http://www.proretina.com/">Proretina Therapeutics</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-8 logos">
                <div class="col-md-6">
                    <ul>
                        <li class="margin-bottom-5">
                            <a href="#"><img src="img/logo-pie-eu.png" alt=""/></a>
                        </li>
                        <li class="margin-bottom-5">
                            <a href="#"><img src="img/4-i-n-n-p-a-c-t-o-logo.png" alt=""/></a>
                        </li>
                        <li>
                            <a href="#"><img src="img/3-logo-ce-horizontal-en-quadri-jpg.png" alt=""/></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul>
                        <li class="margin-bottom-5">
                            <a href="#"><img src="img/2-madrid.png" alt=""/></a>
                        </li>
                        <li class="margin-bottom-5">
                            <a href="#"><img src="img/logo-c-d-t-i.png" alt=""/></a>
                        </li>
                        <li>
                            <a href="#"><img src="img/logo-isciii.png" alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </main>

<?php include('footer.php');?>
<!-- JS Imports -->
    <script src="js/vendor/jquery-1.11.2.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/vendor/jquery-ui.js"></script>
    <script src="js/app.js"></script>
    <script src='js/calendarConfig.js'></script>
