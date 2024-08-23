<script lang="ts">
  import Filters from "./lib/components/filters/Filters.svelte";
  import type {
    Category,
    Question,
    TabData,
  } from "./lib/components/models/tabs";
  import Tabs from "./lib/components/tabs/Tabs.svelte";
  import { v4 as uuidv4 } from "uuid";

  let tabs: TabData[] = [
    {
      id: uuidv4(),
      name: "Tab 1",
    },
    {
      id: uuidv4(),
      name: "Tab 2",
    },
  ];

  let tabsToSee: TabData[] = [];

  let categories: Category[] = [
    {
      id: uuidv4(),
      name: "Category 1",
    },
    {
      id: uuidv4(),
      name: "Category 2",
    },
  ];

  let questions: Question[] = [
    {
      id: uuidv4(),
      name: "Question 1",
      answer: "Answer 1",
      categories: [
        {
          id: uuidv4(),
          name: "Category 1",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Question 1",
      answer: "Answer 1",
      categories: [
        {
          id: uuidv4(),
          name: "Category 1",
        },
        {
          id: uuidv4(),
          name: "Category 2",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Question 1",
      answer: "Answer 1",
      categories: [
        {
          id: uuidv4(),
          name: "Category 1",
        },
      ],
    },
  ];
</script>

<main>
  <div class="w-full p-5">
    <h1 class="text-3xl font-bold text-center">Crear historia</h1>
  </div>

  <body class="flex p-4 gap-3 h-screen">
    <Tabs
      bind:tabsToSee
      containerWidth="50vw"
      itemWidth="8vw"
      bind:questions
      bind:categories
    />
    <Filters bind:tabs bind:categories bind:questions />
  </body>
</main>
