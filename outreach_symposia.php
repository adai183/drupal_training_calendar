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
                    <a href="outreach_seminars.php">
                        <div class="button-selector" style="margin-top: 33px;">
                            <div>Seminars</div>
                        </div>
                    </a>
                    <div class="button-selector" style="margin-top: 33px;">
                        <div>Meetings</div>
                    </div>
                    <a href="outreach_symposia.php">
                        <div class="button-selector active" style="margin-top: 33px;">
                            <div>Symposia</div>
                        </div>
                    </a>
                </div>
                <div class="col-md-5">
                    <div id="datepicker"></div>
                </div>
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
                </div-->
            </div>
        </div>

        <!-- results -->


        <div class="row">
            <div class="col-md-12 calendar-detail">
                <div class="col-md-4 left">
                    <div class="date">
                        19 - 20 JUN 2016
                    </div>
                    <div class="title">
                        Place
                    </div>
                    <div class="subtitle">
                        Palacio de congresos de Madrid
                    </div>
                </div>
                <div class="col-md-8 right" style="padding-bottom: 22px;">
                    <div class="topic">
                        Ligno Biotech IV
                    </div>
                    <div class="title">
                        Info
                    </div>
                    <div class="subtitle">
                        4th Symposium on Biotechnology applied to lignocelluloses
                    </div>
                    <div class="title">
                        <div class="detail-link">
                            <a href="http://lignobiotech.es/"  target="_blank">More details</a>
                        </div>
                    </div>
                    <div class="department">

                    </div>
                </div>
            </div>
        </div>



        <div class="row">
            <div class="col-md-12 calendar-detail">
                <div class="col-md-4 left">
                    <div class="date">
                        30 JUN 2016
                    </div>
                    <div class="title">
                        Place
                    </div>
                    <div class="subtitle">
                        Rafaelhoteles Atocha
                    </div>
                </div>
                <div class="col-md-8 right" style="padding-bottom: 22px;">
                    <div class="topic">
                        ISBP 15th
                    </div>
                    <div class="title">
                        Info
                    </div>
                    <div class="subtitle">
                        15th International Symposium on Biopolymers
                    </div>
                    <div class="title">
                        <div class="detail-link">
                            <a href="http://www.isbp2016.com/"  target="_blank">More details</a>
                        </div>
                    </div>
                    <div class="department">

                    </div>
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
