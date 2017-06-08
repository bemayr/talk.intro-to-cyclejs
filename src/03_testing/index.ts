import * as htmlLooksLike from "html-looks-like";

const actual = `
  <div class="fe10c23a">
    <h1 class="aab058a7">This is a title</h1>
    <p>This is some text content</p>
  </div>
`;

// I just want to know if there is a highlighted <p> inside a <div>
const expected = `
  <div>
    {{ ... }}
    <p class="highlighted">This is some text content</p>
    {{ ... }}
  </div>
`;

htmlLooksLike(actual, expected);
