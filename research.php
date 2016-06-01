<?php include('header.php');?>

  <!-- start page content -->

    <main class="container-fluid">

        <div class="jumbotron text-center research">
            RESEARCH
        </div>

        <!-- sticky sidebar -->
        <div class="row">
  			<div class="col-md-3" id="leftCol">

              	<ul class="nav nav-stacked" id="sidebar">
                    <li>
                        <a href="#sec0">INTRO</a>
                    </li>
                    <li>
                        <a href="#sec1">PROGRAMS</a>
                    </li>
                    <li>
                        <a href="#sec2">DEPARTMENTS</a>
                    </li>
                    <li>
                        <a href="#sec3">SEARCH GROUPS</a>
                    </li>
              	</ul>

      		</div>

            <!-- Page content -->
            <div class="col-md-9">

                <div id="sec0" class="row margin-bottom-3">
                    <div class="col-md-12 top-link">
                        <a href="index.php">Home</a>  |  <a href="research.php">Research</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            Embryonic Stem Cell The basic unit of life, and an
                            understanding of biology requires insight into the
                            structure and function of cells. The Cell Proliferation
                            and Development Line up the United Nations Group of
                            Independent Laboratories working closely with the goal
                            of advancing m m knowledge of the basic processes such
                            as cell replication and diversification.
                            Cell proliferation is an attribute of All Forms of
                            life intimately associated with the processes of
                            growth and division, and in multicellular organisms
                            also linked to the development of specialized cell
                            types. A large number of mechanisms Regulators
                            were selected evolutionarily to ensure cell
                            proliferation and diversification of different
                            cell types during embryogenesis and various
                            stages of adult life. Alteration of some of these
                            regulatory networks characterize important human
                            diseases.
                        </p>
                    </div>
                </div>

                <div id="sec2" class="row section-title margin-bottom-2">
                    <div class="col-md-12">
                        <span class="marker"></span>
                        <span>DEPARTMENTS</span>
                    </div>
                </div>
                <div class="row departments">
                    <div class="col-md-4 text-center">
                        <div id="dep1" class="img">
                            <img src="img/c-i-b-illustrations-00.png" alt="" />
                        </div>
                        <div class="subtitle">
                            <a href="cellular_molecular_biology.php">Cellular and Molecular Biology</a>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div id="dep2" class="img">
                            <img src="img/group-10.png" alt="" />
                        </div>
                        <div class="subtitle">
                            <a href="chemical_physical_biology.php">Chemical & Physical Biology</a>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div id="dep3" class="img">
                            <img src="img/group-32-group-38-mask.png" alt="" />
                        </div>
                        <div class="subtitle">
                            <a href="environmental_biology.php">Environmental Biology</a>
                        </div>
                    </div>
                </div>
                <div class="row departments">
                    <div class="col-md-4 text-center">
                        <div id="dep4" class="img">
                            <img src="img/c-i-b-illustrations-medicine.png" alt="" />
                        </div>
                        <div class="subtitle">
                            <a href="cellular_molecular_medicine.php">Cellular and Molecular Medicine</a>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div id="dep5" class="img">
                            <img src="img/c-i-b-illustrations-medicine.png" alt="" />
                        </div>
                        <div class="subtitle">
                            <a href="molecular_microbiology_infection_biology.php">Molecular Microbiology and Infection Biology</a>
                        </div>
                    </div>
                </div>

                <div id="sec3" class="row section-title margin-bottom-2">
                    <div class="col-md-12">
                        <span class="marker"></span>
                        <span>SEARCH GROUPS</span>
                    </div>
                </div>
                <div class="row search-form">
                    <div class="col-md-12">
                        <form role="form">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm" placeholder="Search for groups in any department">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="submit"><img src="img/Lupa.svg" alt="" />Search</button>
                                </span>
                            </div>
                        </form>
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
    // adapt sidebar to rsearch page layout
      $(document).ready(function($){
          $(window).scroll(function(){
              if ($(document).scrollTop() > 770) {
                  $('#sidebar').hide();
              }else {
                  $('#sidebar').show();
              }
          });
      });
    </script>
