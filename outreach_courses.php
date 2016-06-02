<?php include('header.php');?>


  <!-- start page content -->

    <main class="container-fluid">

        <div class="jumbotron text-center">
            TRAINING
        </div>

        <div class="row margin-bottom-3 top-link">
            <div class="col-md-12">
                <a href="index.php">Home</a>  |  <a href="outreach.php">Outreach</a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <!--div class="col-md-3">
                    <a href="outreach_courses.php">
                        <div class="button-selector active">
                            <div>Courses</div>
                        </div>
                    </a>
                    <a href="outreach_seminars.php">
                        <div class="button-selector" style="margin-top: 33px;">
                            <div>Seminars</div>
                        </div>
                    </a>
                    <div class="button-selector" style="margin-top: 33px;">
                        <div>Meetings</div>
                    </div>
                    <a href="outreach_symposia.php">
                        <div class="button-selector" style="margin-top: 33px;">
                            <div>Symposia</div>
                        </div>
                    </a>
                </div-->
                <!--div class="col-md-5">
                    <div id="datepicker"></div>
                </div-->
                <!--div class="col-md-4 calendar-dates">
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
        </div-->

        <!-- results -->
        <div id="1" class="row">
            <div class="col-md-12 calendar-detail">
                <div class="col-md-4 left">
                    <div class="date">
                        3 JUN 2016 · 12:00 am
                    </div>
                    <div class="subtitle">
                        <img src="img/mcib.png" class="img-responsive margin-top-1" style="height:25px;" />
                    </div>
                    <div class="title">
                        Place
                    </div>
                    <div class="subtitle">
                        Centro de Investigaciones Biológicas (CIB)
                    </div>
                    <div class="title">
                        CIB contact
                    </div>
                    <div class="contact">
                        <span><img src="img/User.svg" /></span>
                        <span>Vancanneyt , Guy</span>
                    </div>
                </div>
                <div class="col-md-8 right" style="padding-bottom: 22px;">
                    <div class="topic">
                        Master in Molecular and Cellular Integrative Biology
                    </div>
                    <div class="title">
                        Speakers (MCIB Directors)
                    </div>
                    <div class="subtitle">
                        Rafael Giraldo Suarez
                    </div>
                    <div class="subtitle">
                        Germán Rivas Caballero
                    </div>
                    <div class="title">
                        More info
                    </div>
                    <div class="department">
                        <a href="http://www.cib.csic.es/repositorio_bd/curso/38/html/MCIB-Infoday.pdf" target="_blank">
                            Info Day
                        </a>
                    </div>
                    <div class="department">
                        <a href="http://www.cib.csic.es/repositorio_bd/curso/38/html/MCIB-Brochure.pdf" target="_blank">
                             Brochure Master Programme
                        </a>
                    </div>
                    <!--div class="title">
                        Poster
                    </div>
                    <div class="poster">
                        <a href="#">
                            <img src="img/print.svg" alt="" />
                        </a>
                    </div-->
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
  <script type="text/javascript">
      $( "#datepicker" ).datepicker({
          inline: true
      });
  </script>
