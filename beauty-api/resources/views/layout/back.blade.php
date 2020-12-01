<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>BeautyLab Admin</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{asset('vendors/iconfonts/mdi/css/materialdesignicons.min.css')}}">
    <link rel="stylesheet" href="{{asset('vendors/iconfonts/ionicons/dist/css/ionicons.css')}}">
    <link rel="stylesheet" href="{{asset('vendors/iconfonts/flag-icon-css/css/flag-icon.min.css')}}">
    <link rel="stylesheet" href="{{asset('vendors/css/vendor.bundle.base.css')}}">
    <link rel="stylesheet" href="{{asset('vendors/css/vendor.bundle.addons.css')}}">
    <!-- endinject -->
    <!-- plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="{{asset('css/shared/style.css')}}">
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="{{asset('css/demo_1/style.css')}}">
    <!-- End Layout styles -->
    <link rel="shortcut icon" href="{{asset('images/favicon.ico')}}" />
  </head>
  <body>
    <!-- BEGIN: Content-->
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
            <a class="navbar-brand brand-logo" href="index.html">
              Beauty Lab Admin</a>
            <a class="navbar-brand brand-logo-mini" href="">
              <img src="images/logo-mini.svg" alt="logo" /> </a>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center">
            
            <form class="ml-auto search-form d-none d-md-block" action="#">
              <div class="form-group">
                <input type="search" class="form-control" placeholder="Search Here">
              </div>
            </form>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
    
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
    
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <img src="images/faces/face10.jpg" alt="image" class="img-sm profile-pic"> </div>
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                      <p class="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <img src="images/faces/face12.jpg" alt="image" class="img-sm profile-pic"> </div>
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                      <p class="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <img src="images/faces/face1.jpg" alt="image" class="img-sm profile-pic"> </div>
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                      <p class="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                  <a class="dropdown-item preview-item py-3">
                    <div class="preview-thumbnail">
                      <i class="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                      <p class="font-weight-light small-text mb-0"> Just now </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item py-3">
                    <div class="preview-thumbnail">
                      <i class="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                      <p class="font-weight-light small-text mb-0"> Private message </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item py-3">
                    <div class="preview-thumbnail">
                      <i class="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                      <p class="font-weight-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown">
                <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                  <img class="img-xs rounded-circle" src="images/faces/face8.jpg" alt="Profile image"> </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                  <div class="dropdown-header text-center">
                    <img class="img-md rounded-circle" src="images/faces/face8.jpg" alt="Profile image">
                    <p class="mb-1 mt-3 font-weight-semibold">Richard Betancur</p>
                    <p class="font-weight-light text-muted mb-0">richard.betancur@gmail.com</p>
                  </div>
                  <a class="dropdown-item">Sign Out<i class="dropdown-item-icon ti-power-off"></i></a>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span class="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
          <!-- partial:partials/_sidebar.html -->
          <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <li class="nav-item nav-profile">
                <a href="#" class="nav-link">
                  <div class="profile-image">
                    <img class="img-xs rounded-circle" src="images/faces/face8.jpg" alt="profile image">
                    <div class="dot-indicator bg-success"></div>
                  </div>
                  <div class="text-wrapper">
                    <p class="profile-name">Richard Betancur</p>
                    <p class="designation">User Admin</p>
                  </div>
                </a>
              </li>
              <li class="nav-item nav-category">Main Menu</li>
              <li class="nav-item">
                <a class="nav-link" href="{{ route('backoffice') }}">
                  <i class="menu-icon typcn typcn-document-text"></i>
                  <span class="menu-title">Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="menu-icon typcn typcn-coffee"></i>
                  <span class="menu-title">Procedures</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('procedurelist') }}">List Procedures</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('ProcedureAdmin') }}">Create</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="menu-icon typcn typcn-coffee"></i>
                  <span class="menu-title">Plans</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                    <a class="nav-link" href="{{ route('planlist') }}">List Plans</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('PlanAdmin') }}">Create</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="menu-icon typcn typcn-coffee"></i>
                  <span class="menu-title">Rooms</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="pages/ui-features/buttons.html">List Rooms</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('RoomsAdmin') }}">Create</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="menu-icon typcn typcn-coffee"></i>
                  <span class="menu-title">Medics</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('medics') }}">List Medics</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('registermedics') }}">Create</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="menu-icon typcn typcn-coffee"></i>
                  <span class="menu-title">Users Registered</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                    <a class="nav-link" href="{{ route('ListUsers') }}">List Users</a>
                    </li>
                    <li class="nav-item">
                      {{-- <a class="nav-link" href="{{ route('RoomsAdmin') }}">Create</a> --}}
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="menu-icon typcn typcn-coffee"></i>
                  <span class="menu-title">Bookings</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="pages/ui-features/buttons.html">List Bookings</a>
                    </li>
                    <li class="nav-item">
                      {{-- <a class="nav-link" href="{{ route('RoomsAdmin') }}">Create</a> --}}
                    </li>
                  </ul>
                </div>
              </li>


            </ul>
          </nav>
    @yield('content')

    <!-- END: Content-->





  <script src="{{asset('vendors/js/vendor.bundle.base.js')}}"></script>
  <script src="{{asset('vendors/js/vendor.bundle.addons.js')}}"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="{{asset('js/shared/off-canvas.js')}}"></script>
  <script src="{{asset('js/shared/misc.js')}}"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="{{asset('js/demo_1/dashboard.js')}}"></script>

</body>

</html>