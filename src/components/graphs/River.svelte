<script>
  import P5 from "p5-svelte";

  let screenSize;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const getColor = () => {
    let a = ["#94855f", "#ccb58a", "#76958d", "#707070", "#69a0a4"];
    return a[getRandomInt(a.length)];
  };

  const create_square = (x, y, wh) => {
    return { x: x, y: y, wh: wh, rate: 0.5 * Math.random(), clr: getColor() };
  };

  let started = false;

  let width = 1500;
  let height = 400;

  if (screenSize < 600) {
    width = width * 0.5;
    height = height * 0.5;
  } else if (screenSize < 1200 && screenSize > 600) {
    width = width * 0.75;
    height = height * 0.75;
  }

  const nf = 0.005;
  const wave = 0;
  const speed = 0.5;

  const bg = "#ffffff";
  let sq = [];
  const remove = [];
  let removed = 0;
  const n = 1000;
  const diff = width / n / width;

  const p = [];

  for (let j = 0; j < n; j++) {
    sq.push(
      create_square(
        width * diff * j,
        height * 0.1 + Math.random() * 0.8 * height,
        10
      )
    );
    remove.push(true);
    p.push(0.03);
  }

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(bg);
      p5.noStroke();
    };

    p5.draw = () => {
      p5.background(bg);
      for (let i = 0; i < sq.length; i++) {
        if (remove[i]) {
          p5.fill("#ccb58a");
        } else {
          p5.fill(p5.lerpColor(p5.color("#ccb58a"), p5.color("#800020"), p[i]));
          p[i] = p[i] < 1 ? p[i] + 0.03 : 1;
        }
        p5.push();
        p5.translate(sq[i].x, sq[i].y);
        const nfx = p5.noise(sq[i].x * nf, sq[i].y * nf);
        p5.rotate(p5.TWO_PI * nfx);
        p5.rect(nfx * wave, 0, sq[i].wh, sq[i].wh);
        if (started && removed < n / 2 && Math.random() < 0.001) {
          removed += 1;
          remove[i] = false;
        }
        if (started && remove[i]) {
          sq[i].x += speed + p5.sin(p5.frameCount * sq[i].rate) * 0.01;
          sq[i].y += p5.cos(p5.frameCount * sq[i].rate) * 0.01;
          if (sq[i].x > width || sq[i].x < 0) {
            sq[i].x = 0;
          }
        } else if (started && sq[i].y <= height - 3) {
          sq[i].y += 0.5;
        }
        p5.pop();
        p5.fill(255);
      }
    };
  };
</script>

<svelte:window bind:innerWidth={screenSize} />

<button
  class="btn"
  on:click={() => {
    started = !started;
  }}
>
  {#if started}
    Pause Animation
  {:else}
    Start Animation
  {/if}
</button>
<div id="river">
  <P5 {sketch} />
</div>

<style>
  .btn {
    display: inline-block;
    width: 200px;
    padding: 10px 15px;
    background-color: #fff;
    padding: 10px 15px;
    border: 1px solid #053e69;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.35s ease-out;
    transition-property: background-color;
    font-family: "libre franklin";
    font-size: 0.8rem;
    transition: background-color 0.3s ease;
  }
  .btn:hover {
    background-color: #707070;
  }

  @media only screen and (max-width: 600px) {
    #river {
      width: 50%;
      overflow: hidden;
    }
  }

  /* For screens between 600px and 1200px */
  @media only screen and (min-width: 600px) and (max-width: 1200px) {
    #river {
      width: 75%;
      overflow: hidden;
    }
  }
</style>
