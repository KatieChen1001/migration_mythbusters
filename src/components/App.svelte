<script>
  import Title from "./Title.svelte";
  import Hero from "./Hero.svelte";
  import Intro from "./Intro.svelte";
  import MigrateMyth from "./MigrateMyth.svelte";
  import AidMyth from "./AidMyth.svelte";
  import RemitMyth from "./RemitMyth.svelte";
  import Outro from "./Outro.svelte";

  import "@fontsource/domine";
</script>

<body>
  <Title />
  <Hero />
  <Intro />
  <MigrateMyth />
  <AidMyth />
  <RemitMyth />
  <Outro />
</body>

<style>
  body {
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
  body {
    margin: 0 auto;
  }
}
</style>
