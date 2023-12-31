<script>
  import * as d3 from "d3";
  import { results } from "../../data/results_collected";

  const width = 620;
  const height = 620;
  const defaultOpacity = 0.3;
  const radius = 300;
  const upperX = 60;
  const lowerX = -60;

  let arc = d3.arc()
              .innerRadius(radius)
              .outerRadius(radius)
              .startAngle(Math.PI/2 - Math.PI/12)
              .endAngle(Math.PI/2 + Math.PI/6);

  let checks = [
    "x_259.8076211353316_y_149.99999999999997",
    "x_273.108882289844_y_124.14321735154174",
    "x_283.8444470627251_y_97.1201826174963",
    "x_291.91346117394716_y_69.18476122273206",
    "x_297.2401210094536_y_40.59938992503933",
    "x_299.774385751269_y_11.632611377045015",
    "x_299.49244748138045_y_-17.44344867314272",
    "x_296.3969548430427_y_-46.35563784235212",
    "x_290.51698815834175_y_-74.83234321739437",
  ];

  let selected = [
    "x_259.8076211353316_y_149.99999999999997",
    "x_273.108882289844_y_124.14321735154174",
    "x_283.8444470627251_y_97.1201826174963",
    "x_291.91346117394716_y_69.18476122273206",
    "x_297.2401210094536_y_40.59938992503933",
    "x_299.774385751269_y_11.632611377045015",
    "x_299.49244748138045_y_-17.44344867314272",
    "x_296.3969548430427_y_-46.35563784235212",
    "x_290.51698815834175_y_-74.83234321739437",
  ];

  let labels = {
    "x_259.8076211353316_y_149.99999999999997": "Food purchase",
    "x_273.108882289844_y_124.14321735154174": "Health expenses",
    "x_283.8444470627251_y_97.1201826174963": "Education expenses",
    "x_291.91346117394716_y_69.18476122273206": "Housing",
    "x_297.2401210094536_y_40.59938992503933":
      "Purchase of agricultural inputs",
    "x_299.774385751269_y_11.632611377045015": "Saving",
    "x_299.49244748138045_y_-17.44344867314272":
      "Payment of commitments abroad",
    "x_296.3969548430427_y_-46.35563784235212":
      "Payment of the sender's travel debt",
    "x_290.51698815834175_y_-74.83234321739437": "Other",
  };

  const list_label = [
    "Food purchase",
    "Health expenses",
    "Education expenses",
    "Housing",
    "Purchase of agricultural inputs",
    "Saving",
    "Payment of commitments abroad",
    "Payment of the sender's travel debt",
    "Other",
  ];

  const labelOnCircle = function (index) {
    const angleDeg = 50 / list_label.length;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = radius * Math.cos(Math.PI / 6 - index * angleRad);
    const y = radius * Math.sin(Math.PI / 6 - index * angleRad);
    return { x: x, y: y };
  };

  const labelOnLine = function (index) {
    const y = upperX - (index * (upperX - lowerX)) / list_label.length;
    return { x: radius * 2, y: y };
  };

  const hoverables = [];
  const captions = new Map();
  for (let i = 4990; i < list_label.length + 4990; i++) {
    const circ = labelOnCircle(i - 4990);
    hoverables.push({
      caption: list_label[i - 4990],
      id: i,
      x: circ.x,
      y: circ.y,
    });
    captions.set(`x_${circ.x}_y_${circ.y}`, list_label[i - 4990]);
  }

  var d3line = d3
    .line()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    })
    .curve(d3.curveBasis);

  const colors = [
    "#94855f",
    "#76958d",
    "#69a0a4",
    "#188977",
    "#0E4D64",
    "#BFE1B0",
    "#0A2F51",
    "#B29D4E",
    "#9F635D",
  ];

  const color_legend = {
    "x_259.8076211353316_y_149.99999999999997": "#94855f",
    "x_273.108882289844_y_124.14321735154174": "#76958d",
    "x_283.8444470627251_y_97.1201826174963": "#69a0a4",
    "x_291.91346117394716_y_69.18476122273206": "#188977",
    "x_297.2401210094536_y_40.59938992503933": "#0E4D64",
    "x_299.774385751269_y_11.632611377045015": "#BFE1B0",
    "x_299.49244748138045_y_-17.44344867314272": "#0A2F51",
    "x_296.3969548430427_y_-46.35563784235212": "#B29D4E",
    "x_290.51698815834175_y_-74.83234321739437": "#9F635D",
  };

  const colorScale = d3
    .scaleOrdinal()
    .domain(hoverables.map((v) => `x_${v.x}_y_${v.y}`))
    .range(colors);
</script>

<div class="visualization">
  <div class="edge-bundle-plot">
    <svg {width} {height}>
      <g transform="translate(310, 310)">
        <path d={arc()} fill='none' stroke-width=1 stroke='#808080' stroke-opacity=0.75></path>
        {#each [...captions.entries()] as [id, label]}
          <g
            stroke={selected.includes(id) ? colorScale(id) : "#808080"}
            stroke-opacity={selected.includes(id) ? 0.15 : 0.05}
          >
            {#each results[id] as data}
              <path d={d3line(data)} fill="none" stroke-width="1" />
            {/each}
          </g>
        {/each}
      </g>
    </svg>
  </div>

  <div class="check-box">
    {#each checks as key}
      <label class="check-box-item">
        <input
          type="checkbox"
          bind:group={selected}
          name="selected"
          value={key}
        />
        <span class="check-box-input"
          >{labels[key]}
          <div
            class="check-box-color"
            style="background-color: {color_legend[key]}"
          />
        </span>
      </label>
    {/each}
  </div>
</div>

<style>
  .check-box-color {
    display: inline-block;
    width: 10px;
    height: 10px;
    /* background-color: #707070; */
  }
  .check-box {
    display: flex;
    width: 500px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    height: 100px;
    text-align: start;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .check-box-input {
    font-family: "libre franklin", "sans serif";
    font-size: 0.8rem;
  }
  .check-box-item {
    display: block;
    width: 250px;
  }
</style>
