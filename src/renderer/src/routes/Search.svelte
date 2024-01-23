<script lang="ts">
  import { IconSearch, IconX } from '@tabler/icons-svelte'
  let input = ''
</script>

<div class="w-full h-10 relative">
  <IconSearch class="absolute top-0 bottom-0 my-auto left-2" />
  <input class="w-full h-full py-auto px-10 bg-bg-1 rounded-md" type="text" bind:value={input} />
  {#if input.length > 0}
    <button on:click={() => (input = '')}>
      <IconX class="absolute top-0 bottom-0 my-auto right-2" />
    </button>
  {/if}
</div>
