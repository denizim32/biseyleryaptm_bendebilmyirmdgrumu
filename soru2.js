function tahminGirFn(event) {
  event.preventDefault();

  const data = Array.from(new FormData(event.target).values());

  const sayiDogruMu = data.every(
    (element) => Number(element) > 0 && Number(element) < 49
  );

  const ayniMi = data.some((element, index) => {
    return data.indexOf(element) !== index;
  });

  if (!sayiDogruMu) {
    alert("Sayıları Kontrol et");
  }
  console.log(data);
  console.log(sayiDogruMu, "dogru mu");
  console.log(ayniMi, "Aynimi");
}
