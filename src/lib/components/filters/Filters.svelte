<script lang="ts">
  import { Accordion, AccordionItem } from "flowbite-svelte";
  import type { Category, Question, TabData } from "../models/tabs";
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";

  export let tabs: TabData[];
  export let categories: Category[];
  export let questions: Question[];

  const flipDurationMs = 200;

  function handleDndConsiderColumnsTabs(e: CustomEvent) {
    tabs = e.detail.items;
  }
  function handleDndFinalizeColumnsTabs(e: CustomEvent) {
    tabs = e.detail.items;
  }

  function handleDndConsiderColumnsCategories(e: CustomEvent) {
    categories = e.detail.items;
  }
  function handleDndFinalizeColumnsCategories(e: CustomEvent) {
    categories = e.detail.items;
  }

  function handleDndConsiderColumnsQuestions(e: CustomEvent) {
    questions = e.detail.items;
  }
  function handleDndFinalizeColumnsQuestions(e: CustomEvent) {
    questions = e.detail.items;
  }
</script>

<section class="bg-gray-200">
  <div class="overflow-x-auto py-2">
    <Accordion class="text-black p-2 rounded-lg   ">
      <AccordionItem>
        <span slot="header" class="text-xl font-bold">Pestañas</span>
        <section
          use:dndzone={{ items: tabs, flipDurationMs }}
          on:consider={handleDndConsiderColumnsTabs}
          on:finalize={handleDndFinalizeColumnsTabs}
          class="space-y-2 mt-2"
        >
          {#each tabs as tab (tab.id)}
            <div
              animate:flip={{ duration: flipDurationMs }}
              class=" bg-slate-300 hover:text-white rounded-lg px-4 py-2 hover:bg-slate-400 capitalize cursor-pointer transition duration-300 ease-in-out"
            >
              {tab.name}
            </div>
          {/each}
        </section>
      </AccordionItem>
    </Accordion>
  </div>

  <div class="overflow-x-auto py-2">
    <Accordion class="text-black p-2 rounded-lg   ">
      <AccordionItem>
        <span slot="header" class="text-xl font-bold">Categorías</span>
        <section
          use:dndzone={{ items: categories, flipDurationMs }}
          on:consider={handleDndConsiderColumnsCategories}
          on:finalize={handleDndFinalizeColumnsCategories}
          class="space-y-2 mt-2"
        >
          {#each categories as cat (cat.id)}
            <div
              animate:flip={{ duration: flipDurationMs }}
              class=" bg-slate-300 hover:text-white rounded-lg px-4 py-2 hover:bg-slate-400 capitalize cursor-pointer transition duration-300 ease-in-out"
            >
              {cat.name}
            </div>
          {/each}
        </section>
      </AccordionItem>
    </Accordion>
  </div>

  <div class="overflow-x-auto py-2">
    <Accordion class="text-black p-2 rounded-lg   ">
      <AccordionItem>
        <span slot="header" class="text-xl font-bold">Preguntas</span>
        <section
          use:dndzone={{ items: questions, flipDurationMs, type: "columns" }}
          on:consider={handleDndConsiderColumnsQuestions}
          on:finalize={handleDndFinalizeColumnsQuestions}
          class="space-y-2 mt-2"
        >
          {#each questions as question (question.id)}
            <div
              animate:flip={{ duration: flipDurationMs }}
              class=" bg-slate-300 hover:text-white rounded-lg px-4 py-2 hover:bg-slate-400 capitalize cursor-pointer transition duration-300 ease-in-out"
            >
              {question.name}
            </div>
          {/each}
        </section>
      </AccordionItem>
    </Accordion>
  </div>
</section>
