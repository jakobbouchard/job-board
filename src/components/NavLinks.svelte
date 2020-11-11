<script>
  export let segment;
</script>

<a href="." class="nav-link" aria-current="{segment === undefined ? 'page' : undefined}">Home</a>
<a href="/jobs" class="nav-link" aria-current="{segment === 'jobs' ? 'page' : undefined}">Jobs</a>
<a href="/about" class="nav-link" aria-current="{segment === 'about' ? 'page' : undefined}">About</a>
<a href="/dashboard" class="nav-link" aria-current="{segment === 'dashboard' ? 'page' : undefined}">Dashboard</a>
