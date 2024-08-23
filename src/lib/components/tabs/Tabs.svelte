<script lang="ts">
  import type { Category, Question, TabData } from "../models/tabs";
  import TabContent from "./TabContent.svelte";
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";

  export let tabsToSee: TabData[];
  export let containerWidth = "200vw";
  export let categories: Category[];
  export let itemWidth = "5em";
  export let questions: Question[];

  let tab: TabData;

  const flipDurationMs = 300;
  function handleDndConsider(e: CustomEvent) {
    tabsToSee = e.detail.items;
  }
  function handleDndFinalize(e: CustomEvent) {
    tabsToSee = e.detail.items;
  }

  function onOpen(t: TabData) {
    tab = t;
  }
</script>

<section class="flex flex-col flex-1 bg-gray-200 p-2">
  <div
    style="width:{containerWidth}; height: 2.5em;"
    class="flex flex-row gap-3"
    use:dndzone={{ items: tabsToSee, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each tabsToSee as tab (tab.id)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        style="flex: 0 0 {itemWidth}"
        class=" bg-slate-300 text-center bg-white font-bold rounded-lg px-4 py-2 hover:bg-slate-300 capitalize cursor-pointer transition duration-300 ease-in-out"
        on:click={() => onOpen(tab)}
        animate:flip={{ duration: flipDurationMs }}
      >
        {tab.name}
      </div>
    {/each}
  </div>

  {#if tab}
    <TabContent bind:tab bind:questions bind:categories containerWidth="50vw" itemWidth="25vw" />
  {/if}
</section>
