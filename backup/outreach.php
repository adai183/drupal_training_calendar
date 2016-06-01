<?php include('header.php');?>


  <!-- start page content -->

    <main class="container-fluid">

        <div class="jumbotron text-center">
            OUTREACH
        </div>

        <div class="row margin-bottom-3 top-link">
            <div class="col-md-12">
                <a href="index.php">Home</a>  |  <a href="outreach.php">Outreach</a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="col-md-3">
                    <div class="button-selector">
                        <div>Courses</div>
                    </div>
                    <div class="button-selector active" style="margin-top: 33px;">
                        <div>Seminars</div>
                    </div>
                    <div class="button-selector" style="margin-top: 33px;">
                        <div>Meetings</div>
                    </div>
                    <div class="button-selector" style="margin-top: 33px;">
                        <div>Symposia</div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div id="datepicker"></div>
                </div>
                <div class="col-md-4 calendar-dates">
                    <div class="title">
                        19 JUN
                    </div>
                    <div class="subtitle active">
                        Autophagy during development and diffrentiation
                        <p class="date">
                            19-22 JUN 2016 · 12:00 am
                        </p>
                    </div>
                    <div class="subtitle">
                        Down-regulation of DNA damage-tolerance mechanisms at
                        replication forks in Saccharomyces cerevisiae.
                        <p class="date">
                            30 JUN 2016 · 12:00 am
                        </p>
                    </div>
                    <div class="subtitle">
                        Assembly and regulation of the DNA damge checkpoint
                        <p class="date">
                            30 JUN 2016 · 12:00 am
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 calendar-detail">
                <div class="col-md-5 col-md-offset-3 left">
                    <div class="date">
                        24 SEPT 2016 · 12:00 am
                    </div>
                    <div class="title">
                        Place
                    </div>
                    <div class="subtitle">
                        Salón de actos CIB
                    </div>
                    <div class="title">
                        CIB contact
                    </div>
                    <div class="contact">
                        <span><img src="img/User.svg" /></span>
                        <span>Boya</span>
                    </div>
                    <div class="contact">
                        <span><img src="img/User.svg" /></span>
                        <span>Patricia</span>
                    </div>
                </div>
                <div class="col-md-4 right">
                    <div class="topic">
                        Autophagy during development and differentiation
                    </div>
                    <div class="title">
                        Speaker
                    </div>
                    <div class="subtitle">
                        Lorena Esteban Martínez ·  CIB CSIC
                    </div>
                    <div class="title">
                        Department
                    </div>
                    <div class="department">
                        <a href="celmolbio.php">
                            CELLULAR AND MOLECULAR BIOLOGY
                        </a>
                    </div>
                    <div class="title">
                        Poster
                    </div>
                    <div class="poster">
                        <a href="#">
                            <img src="img/print.svg" alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-md-12 calendar-detail">
                <div class="col-md-5 col-md-offset-3 left">
                    <div class="date">
                        24 SEPT 2016 · 12:00 am
                    </div>
                    <div class="title">
                        Place
                    </div>
                    <div class="subtitle">
                        Salón de actos CIB
                    </div>
                    <div class="title">
                        CIB contact
                    </div>
                    <div class="contact">
                        <span><img src="img/User.svg" /></span>
                        <span>Boya</span>
                    </div>
                    <div class="contact">
                        <span><img src="img/User.svg" /></span>
                        <span>Patricia</span>
                    </div>
                </div>
                <div class="col-md-4 right">
                    <div class="topic">
                        Down-regulation of DNA damage-tolerance mechanisms at
                        replication forks in Saccharomyces cerevisiae.
                    </div>
                    <div class="title">
                        Speaker
                    </div>
                    <div class="subtitle">
                        Lorena Esteban Martínez ·  CIB CSIC
                    </div>
                    <div class="title">
                        Department
                    </div>
                    <div class="department">
                        <a href="celmolbio.php">
                            CELLULAR AND MOLECULAR BIOLOGY
                        </a>
                    </div>
                    <div class="title">
                        Poster
                    </div>
                    <div class="poster">
                        <a href="#">
                            <img src="img/print.svg" alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>






    <?php include('footer.php');?>
      <!-- JS Imports -->
  <script src="js/vendor/jquery-1.11.2.min.js"></script>
  <script src="js/vendor/bootstrap.min.js"></script>
  <script src="js/vendor/jquery-ui.js"></script>
  <script src="js/app.js"></script>
  <script type="text/javascript">
      $( "#datepicker" ).datepicker({
          inline: true
      });
  </script>
