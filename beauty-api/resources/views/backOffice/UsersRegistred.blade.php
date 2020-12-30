@extends('layout.back')
@section('content')

<div class="main-panel">
    <div class="content-wrapper">
      <!-- Page Title Header Starts-->
      <div class="row page-title-header">
        <div class="col-12">
          <div class="page-header">
            <h4 class="page-title">List Of Users</h4>
            <div class="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
            </div>
          </div>
        </div>
      </div>
      <!-- Page Title Header Ends-->
      <div class="row">
        <div class="col-md-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="d-flex">
                    <div class="wrapper">
                      
                    </div>
                    <div class="wrapper my-auto ml-auto ml-lg-4">
                      
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                  <div class="d-flex">
                    <div class="wrapper">
                     
                    </div>
                    <div class="wrapper my-auto ml-auto ml-lg-4">
                      
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                  <div class="d-flex">
                    <div class="wrapper">
                      
                    </div>
                    <div class="wrapper my-auto ml-auto ml-lg-4">
                  
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                  <div class="d-flex">
                    <div class="wrapper">
                     
                    </div>
                    <div class="wrapper my-auto ml-auto ml-lg-4">
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-0 text-center">Dashboard Admin Beauty Lab</h4>
              <div class="d-flex flex-column flex-lg-row">
                <p></p>

              </div>
              <div class="d-flex flex-column flex-lg-row">
                <div class="data-wrapper d-flex mt-2 mt-lg-0">
                  <div class="wrapper pr-5">
                    <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                        @foreach ($user as $data)
                              <tr>
                                <td style="width: 20%">{{ $data->nombres }}</td>
                                <td style="width: 20%">{{ $data->apellidos }}</td>
                                <td style="width: 20%">{{ $data->email }}</td>
                                <td style="width: 20%">{{ $data->ciudad }}</td>
                                <td style="width: 20%">{{ $data->movil }}</td>
                              </tr>
                          @endforeach
                        </tbody>
                      </table>
                  </div>
                  <div class="wrapper">
                  </div>
                </div>
                <div class="ml-lg-auto" id="sales-statistics-legend"></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      

    </div>
</div>

</div>

</div>
@endsection