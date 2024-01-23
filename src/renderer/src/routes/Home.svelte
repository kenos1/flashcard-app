<script lang="ts">
  import { IconPencil, IconCards } from '@tabler/icons-svelte'
  import { Link } from 'svelte-routing'

  const MOCK_DECKS = [
    { name: 'Chemistry', todo: 5, total: 120 },
    { name: 'Biology', todo: 7, total: 34 },
    { name: 'Math', todo: 69, total: 520 },
    { name: 'History', todo: 420, total: 1000 }
  ]
</script>

<div class="text-center">
  <h1 class="font-bold text-2xl">Welcome back!</h1>
  <h2>What will you study today?</h2>
</div>

<div class="mt-8">
  <h1 class="font-bold text-lg">Recent Decks</h1>

  <div class="flex flex-col gap-4 mt-4">
    {#each MOCK_DECKS as deck}
      <button class="flex flex-row p-4 gap-4 bg-bg-1 hover:bg-bg-2 rounded-md">
        <span class="w-full text-left">
          {deck.name}
        </span>
        <div class="flex flex-row min-w-30 gap-4">
          <IconPencil />
          {deck.todo} to do
        </div>
        <div class="flex flex-row min-w-43 gap-4">
          <IconCards />
          {deck.total > 999 ? '999+' : deck.total} cards total
        </div>
      </button>
    {/each}
    <div>Can't find what you are looking for? Go to <Link to="/search">Search</Link></div>
  </div>
</div>
