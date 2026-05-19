document.addEventListener("DOMContentLoaded", () => {

  const contactText =
    document.getElementById("contactText");

  const whatsappLink =
    document.getElementById("whatsappLink");

  const whatsappText =
    document.getElementById("whatsappText");

  const mapContainer =
    document.getElementById("mapContainer");

  // DEFAULT UK
  function setUK() {

    contactText.textContent =
      "📍 Southwark, London | Onsite, Remote or Hybrid.";

    whatsappLink.href =
      "https://wa.me/447935218331";

    whatsappText.textContent =
      "WhatsApp: +44 7935 218331";

    mapContainer.innerHTML = `
      <iframe
        src="https://www.google.com/maps?q=Southwark%20London&output=embed"
        width="400"
        height="300"
        style="border:0;"
        loading="lazy">
      </iframe>
    `;
  }

  // BRAZIL
  function setBrazil() {

    contactText.textContent =
      "📍 São Paulo – SP | Remote or Hybrid.";

    whatsappLink.href =
      "https://wa.me/5511924525919";

    whatsappText.textContent =
      "WhatsApp: +55 11 9 2452-5919";

    mapContainer.innerHTML = `
      <iframe
        src="https://www.google.com/maps?q=Sao%20Paulo&output=embed"
        width="400"
        height="300"
        style="border:0;"
        loading="lazy">
      </iframe>
    `;
  }

  // Default first
  setBrazil();

  // REAL browser geolocation
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat, lon);

        // Brazil approximate region
        if (
          lat < 6 &&
          lat > -35 &&
          lon < -30 &&
          lon > -75
        ) {

          setBrazil();
        }

      },

      (error) => {

        console.log("Location denied");

      }

    );
  }

});