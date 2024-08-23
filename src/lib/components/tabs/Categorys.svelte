<script lang="ts">
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import type { Category } from "../models/tabs";
  export let categories: Category[];

  const flipDurationMs = 200;

  function handleDndConsiderCategories(e: CustomEvent) {
    categories = e.detail.items;
  }
  function handleDndFinalizeCategories(e: CustomEvent) {
    categories = e.detail.items;
  }
</script>

<div
  use:dndzone={{ items: categories, flipDurationMs }}
  on:consider={handleDndConsiderCategories}
  on:finalize={handleDndFinalizeCategories}
  class="flex flex-wrap gap-3"
>
  {#each categories as cat (cat.id)}
    <div
      animate:flip={{ duration: flipDurationMs }}
      class="rounded px-2 text-sm text-white inline-block flex gap-1 items-center"
      style="background-color: black; color: white; flex: 0 0 6.5em"
    >
      <span>{cat.name}</span>
    </div>
  {/each}
</div>
