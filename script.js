const api = "https://api.dictionaryapi.dev/api/v2/entries/en";
const btn = document.querySelector(".btn");
const search = document.querySelector("#input");
const message = document.querySelector("#message");
const table = document.querySelector("#table")

btn.addEventListener("click", async () => {
  const res = await fetch(`${api}/${search.value}`);
  const data = await res.json();
  if (data.message) {
    message.innerHTML = data.message;
    message.style.display = "block";
    table.style.display = "none";
  } else {
    message.style.display = "none";
    table.style.display = "table";
    document.querySelector("#word").innerHTML = data[0].word;
    document.querySelector("#phonetic").innerHTML = data[0].phonetic;
    document.querySelector("#definition").innerHTML =
      data[0].meanings[0].definitions[1].definition;
    document.querySelector("#source").innerHTML = data[0].sourceUrls[0];
    if (data[0].meanings[0].definitions[1].definition.example) {
      document.querySelector("#example").innerHTML =
        data[0].meanings[0].definitions[1].definition.example;
    } else {
      document.querySelector("#example").innerHTML =
        data[0].meanings[0].definitions[0].definition;
      document.querySelector("#source").href =
        data[0].meanings[0].definitions[0].definition;
    }
  }
});
