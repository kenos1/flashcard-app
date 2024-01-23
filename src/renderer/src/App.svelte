<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Sidebar from './components/navigation/Sidebar.svelte'
  import { sidebarOpen } from './lib/store.ts'
  import { fly } from 'svelte/transition'
  import { sineIn } from 'svelte/easing'
  import { APP_ROUTES } from './lib/util.ts'

  export let url = ''
</script>

<Router {url}>
  <div
    class="flex flex-row select-none overflow-hidden font-sans bg-bg text-fg min-w-screen min-h-screen dark"
  >
    {#if sidebarOpen}
      <Sidebar />
    {/if}
    {#key url}
      <div
        in:fly={{ y: 200, duration: 500, easing: sineIn }}
        class="mx-auto max-w-screen-md w-full p-4"
      >
        {#each APP_ROUTES as route}
          <Route path={route.path} component={route.component} />
        {/each}
      </div>
    {/key}
  </div>
</Router>
