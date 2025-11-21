const convertHTML = (string) => {
  let newString = string
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;")

  return newString;
}

console.log(convertHTML("Dolce & Gabbana"));