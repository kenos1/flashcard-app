<script lang="ts">
  import { Link } from 'svelte-routing'
  import { fly } from 'svelte/transition'
  import { IconMenu, IconFolderOpen } from '@tabler/icons-svelte'
  import FolderSelector from './FolderSelector.svelte'

  import { APP_ROUTES } from '../../lib/util.ts'
  import { sidebarOpen } from '../../lib/store.ts'
</script>

<div transition:fly={{ x: '-100%' }} class="min-w-[12rem] bg-bg-1 flex flex-col p-2 gap-4">
  <div class="flex flex-row">
    <button class="p-2 hover:bg-bg-2 rounded-md" on:click={() => sidebarOpen}><IconMenu /></button>
    <FolderSelector />
  </div>
  {#each APP_ROUTES as route}
    <Link to={route.path}>
      <div class="flex flex-row p-2 hover:bg-bg-2 rounded-md gap-2">
        <svelte:component this={route.icon} />
        {route.name}
      </div>
    </Link>
  {/each}
</div>
