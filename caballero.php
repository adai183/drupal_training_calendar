<?php include('header.php');?>

  <!-- start page content -->

    <main class="container-fluid">

        <div class="jumbotron text-center dep1 ">
            BIOCHEMICAL SYSTEMS BACTERIAL DIVISION
        </div>
        
        <!-- sticky sidebar -->
        <div class="row">
  			<div class="col-md-3" id="leftCol">

              	<ul class="nav nav-stacked" id="sidebar">
                    <li style="border: 0 !important;">
                        <a href="biosysbacdiv.php#sec0">DESCRIPTION</a>
                    </li>
                    <li style="border-left: 3px #ec111a solid;">
                        <a href="biosysbacdiv.php#sec1">MEMBERS</a>
                    </li>
                    <li>
                        <a href="biosysbacdiv.php#sec2">PROJECTS</a>
                    </li>
                    <li>
                        <a href="biosysbacdiv.php#sec3">PUBLICATIONS</a>
                    </li>
                    <li>
                        <a href="biosysbacdiv.php#sec4">FUNDING</a>
                    </li>
              	</ul>

      		</div>

            <!-- Page content -->
            <div class="col-md-9">

                <main class="container-fluid" style="height: 68vh;">

                    <div id="sec0" class="row margin-bottom-2 margin-top-2">
                        <div class="col-md-12 top-link">
                            <a href="index.php">Home</a>
                            <a href="research.php"> | Research</a>
                            <a href="research.php"> | Departments</a>
                            <a href="celmolbio.php" style="color: #c08de0;"> | Cellular and Molecular Biology</a>
                            <a href="biosysbacdiv.php" style="color: #c08de0;"> | Biochemical Systems Bacterial Division</a>
                            <a href="#" style="color: #c08de0;"> | Germán Rivas Caballero</a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 calendar-detail" >
                            <div class="col-md-6 left">
                                <div class="date">
                                    <img src="img/german_caballero.png" alt="" />
                                    <span>Germán Rivas Caballero</span>
                                </div>
                                <div class="title">
                                    Position
                                </div>
                                <div class="subtitle">
                                    Head of Lab
                                </div>
                                <div class="title">
                                    Department of facility
                                </div>
                                <div class="subtitle">
                                    Cellular and Molecular Biology
                                </div>
                                <div class="title">
                                    Lab
                                </div>
                                <div class="subtitle">
                                    CBiochemical Systems Bacterial Division
                                </div>
                            </div>
                            <div class="col-md-6 right" style="padding-bottom: 22px;">
                                <div class="topic">
                                    Contact
                                </div>
                                <div class="title">
                                    Extension
                                </div>
                                <div class="subtitle">
                                    4358 / 4357
                                </div>
                                <div class="title">
                                    Email
                                </div>
                                <div class="subtitle">
                                    gerrica@cib.csic.es
                                </div>
                                <div class="title">
                                    Laboratory number
                                </div>
                                <div class="subtitle">
                                    246 / 247
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row margin-top-2">
                        <div class="col-md-12">
                            <span class="input-group-btn">
                                <a href="biosysbacdiv.php">
                                    <button class="btn btn-default button-secondary" type="submit">Back</button>
                                </a>
                            </span>
                        </div>
                    </div>

                </main>
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
    // adapt sidebar to rsearch department page layout
      $(document).ready(function($){
          $(window).scroll(function(){
              if ($(document).scrollTop() > 2100) {
                  $('#sidebar').hide();
              }else {
                  $('#sidebar').show();
              }
          });
      });
    </script>