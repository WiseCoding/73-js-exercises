(function () {
  //1: SET INTERVALS - milliseconds
  const colorInterval = 100;
  let colorRange = [70, 100];
  const waveInterval = 50;
  const waveDelay = 50;
  const stretchInterval = 50;
  const stretchDelay = 40;
  const delay = (ms) => new Promise((res) => setTimeout(res, ms)); //Used promise to set delay
  const spans = textToSpanElements(); // Get html input and place into individual spans

  //2: CALL FUNCTIONS
  setInterval(() => {
    colorChangeAnimation(spans, colorRange);
  }, colorInterval);
  stretchAnimation(spans, stretchInterval, stretchDelay);
  waveAnimation(spans, waveInterval, waveDelay);

  //3: CLICK HANDLER
  document.querySelector('#target').onclick = () => {
    colorRange = [~~(Math.random() * 250) + 1, ~~(Math.random() * 150) + 1];
  };

  // FUNCTIONS
  function textToSpanElements() {
    // Get html, Place each letter in an array, Wrap an span with unique ID around every letter
    const target = document.querySelector('#target');
    const array = [...target.textContent];
    let html = '';
    let index = 0;

    // Reset textcontent
    target.textContent = '';

    // Insert Span for each letter in array
    array.forEach((letter) => {
      index++;
      html += `<span id="char${index}">${letter}</span>`;
    });
    target.innerHTML = html;

    // Array has to be returned for other functions to work with
    return array;
  }

  // Color Every Letter with a random color in a cycle
  function colorChangeAnimation(letters, range) {
    const array = letters;
    const range1 = range[0];
    const range2 = range[1];

    for (let i = 1; i < array.length + 1; i++) {
      const [r, g, b] = [
        ~~(Math.random() * range1) + range2,
        ~~(Math.random() * range1) + range2,
        ~~(Math.random() * range1) + range2,
      ];
      const fontColor = `rgb(${r},${g},${b})`;
      document.querySelector(`#char${i}`).style.color = fontColor;
    }
  }

  // Make each letter move up and down and create a wave
  async function waveAnimation(letters, interval, wait) {
    const array = letters;
    const waveInterval = interval;
    const waveDelay = wait;

    for (let i = 0; i < array.length; i++) {
      let item = document.getElementById(`char${i + 1}`).style;
      item.position = 'relative';
      let horizontal = 0;

      // Make individual letter bounce up and down
      setInterval(() => {
        if (horizontal === 360) {
          horizontal = 0;
        } else {
          horizontal++;
        }
        let vertical = 0;
        item.top = `${vertical + Math.sin(5 * Math.PI * (horizontal / 50)) * 8}px`;
      }, waveInterval);

      // Set delay between each letter
      await delay(waveDelay);
    }
  }

  // Stretch the wave horizontally
  async function stretchAnimation(letters, interval, wait) {
    const array = letters;
    const waveInterval = interval;
    const stretchDelay = wait;

    for (let i = 0; i < array.length; i++) {
      let item = document.getElementById(`char${i + 1}`).style;
      item.position = 'relative';
      let horizontal = 0;

      // Make individual letter bounce up and down
      setInterval(() => {
        if (horizontal === 360) {
          horizontal = 0;
        } else {
          horizontal++;
        }
        let vertical = 0;
        item.fontSize = `${
          vertical + Math.sin(2 * Math.PI * (horizontal / 50)) * 13 + 30
        }px`;
      }, waveInterval);

      // Set delay between each letter
      await delay(stretchDelay);
    }
  }
})();
