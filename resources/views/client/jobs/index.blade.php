@extends('layouts.app')

@section('content')
<div class="container-fluid"><p></p>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h3>Job Openings</h3>
        <a href="{{ route('client.jobs.create') }}" class="btn btn-primary">Add New Job</a>
    </div>

    {{-- Search & Filters --}}
    <form action="{{ route('client.jobs.index') }}" method="GET" class="row g-2 mb-4">
        <div class="col-md-2">
            <input type="text" name="job_title" class="form-control" placeholder="Job Title" value="{{ request('job_title') }}">
        </div>
        <div class="col-md-2">
            <input type="text" name="location" class="form-control" placeholder="Location" value="{{ request('location') }}">
        </div>
        <div class="col-md-2">
            <select name="status" class="form-select">
                <option value="">All Status</option>
                <option value="active" {{ request('status') == 'active' ? 'selected' : '' }}>Active</option>
                <option value="inactive" {{ request('status') == 'inactive' ? 'selected' : '' }}>Inactive</option>
                <option value="expired" {{ request('status') == 'expired' ? 'selected' : '' }}>Expired</option>
            </select>
        </div>
        <div class="col-md-1">
            <input type="date" name="date_from" class="form-control" value="{{ request('date_from') }}">
        </div>
        <div class="col-md-1">
            <input type="date" name="date_to" class="form-control" value="{{ request('date_to') }}">
        </div>
        <div class="col-md-2">
            <button type="submit" class="btn btn-success w-100">Filter</button>
        </div>
        <div class="col-md-2">
            <a href="{{ route('client.jobs.index') }}" class="btn btn-secondary w-100">Reset</a>
        </div>
    </form>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table table-bordered">
    <thead>
        <tr>
            <th>Job Title</th>
            <th>Location</th>
            <th>Status</th>
            <th>Description</th>
            <th>Date Needed</th>
            <th>Expiry Date</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($jobs as $job)
        <tr>
            <td>{{ $job->job_title }}</td>
            <td>{{ $job->location }}</td>
            <td>{{ ucfirst($job->status) }}</td>
            <td>{{ \Illuminate\Support\Str::limit($job->job_description, 50) }}</td>
            <!-- Limit description length for neatness -->
            <td>{{ \Carbon\Carbon::parse($job->date_needed)->format('F d, Y') }}</td>
            <td>{{ $job->date_expiry ? \Carbon\Carbon::parse($job->date_expiry)->format('F d, Y') : '—' }}</td>
            <td>
                <div class="d-flex justify-content-center gap-1">
                <a href="{{ route('client.jobs.edit', $job->id) }}" class="btn btn-sm btn-secondary" style="color: white; text-shadow: 2px 2px 4px #000000;">Edit</a>
                <form action="{{ route('client.jobs.destroy', $job->id) }}" method="POST" class="d-inline">
                    @csrf @method('DELETE')
                    <button type="submit" class="btn btn-sm btn-danger" style="color: white; text-shadow: 2px 2px 4px #000000;" onclick="return confirm('Are you sure?')">Delete</button>
                </form>
                </div>
            </td>
        </tr>
        @empty
        <tr>
            <td colspan="7" class="text-muted text-center">No job openings found.</td>
        </tr>
        @endforelse
    </tbody>
</table>


    <div class="d-flex justify-content-center mt-3">
        {{ $jobs->appends(request()->query())->links() }}
    </div>
</div>
@endsection
