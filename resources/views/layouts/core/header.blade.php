<nav class="app-header navbar navbar-expand bg-body" style="background-color: #57afb3ff;">
                <!--begin::Container-->
                <div class="container-fluid ">
                    <!--begin::Start Navbar Links-->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nav class="navbar navbar-expand-lg " >
                                <div class="container-fluid">
                                    <!-- Brand -->
                                    <a class="navbar-brand d-flex align-items-center" href="./index.html">
                                        <img src="{{ url('assets/img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image opacity-75" style="height: 30px;" />
                                        <span class="brand-text fw-light">IRIS</span>
                                    </a>
                                    <!-- Toggler for mobile -->
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbarNav" aria-controls="topbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <!-- Navigation Items -->
                                    <div class="collapse navbar-collapse" id="topbarNav">
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ url('home') }}">
                                                    <i class="bi bi-house-fill"></i> Dashboard
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('client.applicants.index') }}">
                                                    <i class="bi bi-people-fill"></i> Applicants
                                                </a>
                                            </li>

                                            <!-- Dropdown for Manage Applicants -->
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="manageApplicantsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Manage Applicants
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="manageApplicantsDropdown">
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('client.work_experiences.index') }}">
                                                            Work Experiences
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('client.educations.create') }}">
                                                            Add Educational Backgrounds
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('client.medicals.index') }}">
                                                            Medical Records
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('client.jobs.index') }}">
                                                    Job Openings
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('client.job_applications.index') }}">
                                                    Job Applications
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('client.finances.index') }}">
                                                    Finances
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ url('client/users') }}">
                                                    Manage User
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('client.audit_logs.index') }}">
                                                    Logs
                                                </a>
                                            </li>
                                    </div>
                                </div>

                        </li>  
                    </ul>
                    <!--end::Start Navbar Links-->
                    <!--begin::End Navbar Links-->
                    <ul class="navbar-nav ms-auto">
                        <!--begin::Fullscreen Toggle-->
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-lte-toggle="fullscreen">
                                <i data-lte-icon="maximize" class="bi bi-arrows-fullscreen"></i>
                                <i data-lte-icon="minimize" class="bi bi-fullscreen-exit" style="display: none;"></i>
                            </a>
                        </li>
                        <!--end::Fullscreen Toggle-->
                        <!--begin::User Menu Dropdown-->
                        <!-- User Menu Dropdown -->
                            <li class="nav-item dropdown user-menu">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <img src="{{ url('assets/img/user2-160x160.jpg') }}" class="user-image rounded-circle shadow" alt="User  Image" />
                                    <span class="d-none d-md-inline">{{ auth()->check() ? auth()->user()->name : 'Guest' }}</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <!-- User Image -->
                                    <li class="user-header text-bg-primary">
                                        <img src="{{ url('assets/img/user2-160x160.jpg') }}" class="rounded-circle shadow" alt="User  Image" />
                                        <p>
                                            {{ auth()->check() ? auth()->user()->name : 'Guest' }} - Web Developer
                                            <small>Active User</small>
                                        </p>
                                    </li>
                                    <!-- Menu Body -->
                                    <!-- Menu Footer -->
                                    <li class="user-footer">
                                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="btn btn-default btn-flat float-end">Sign out</a>
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>
                                    </li>
                                </ul>
                            </li>

                        <!--end::User Menu Dropdown-->
                    </ul>
                    <!--end::End Navbar Links-->
                </div>
                <!--end::Container-->
            </nav>