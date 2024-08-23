<script lang="ts">
  import type { Category, Question, TabData } from "../models/tabs";
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import Categorys from "./Categorys.svelte";

  export let tab: TabData;
  export let questions: Question[];
  export let categories: Category[];
  export let containerWidth = "50vw";
  export let itemWidth = "25vw";

  const flipDurationMs = 200;
  function handleDndConsiderColumns(e: CustomEvent) {
    questions = e.detail.items;
  }
  function handleDndFinalizeColumns(e: CustomEvent) {
    questions = e.detail.items;
  }


</script>

{#if tab}
  <section
    use:dndzone={{ items: questions, flipDurationMs, type: "columns" }}
    on:consider={handleDndConsiderColumns}
    on:finalize={handleDndFinalizeColumns}
    style="width:{containerWidth};"
    class="bg-gray-200 p-4 w-full space-y-2"
  >
    {#each questions as question (question.id)}
      <div
        animate:flip={{ duration: flipDurationMs }}
        style="flex: 0 0 {itemWidth}"
        class="bg-white p-4 rounded-lg space-y-2"
      >
        <p class="font-bold">{question.name} {tab.name}</p>
        <p class="text-sm">{question.answer}</p>
        <Categorys bind:categories={question.categories} />
      </div>
    {/each}
  </section>
{/if}
