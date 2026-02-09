document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const country = data.country_code;

    const contactText = document.getElementById("contactText");
    const whatsappLink = document.getElementById("whatsappLink");
    const whatsappText = document.getElementById("whatsappText");
    const mapContainer = document.getElementById("mapContainer");

    // 🇧🇷 BRAZIL
    if (country === "BR") {
      contactText.textContent = "📍 São Paulo – SP | Remote or Hybrid";
      whatsappLink.href = "https://wa.me/5511995739180";
      whatsappText.textContent = "WhatsApp: +55 11 99573-9180";

      mapContainer.innerHTML = `
        <iframe
            src="https://www.google.com/maps?q=São%20Paulo&output=embed"
            width="400"
            height="300"
            style="border:0;"
            loading="lazy">
        </iframe>
      `;
    }

    // 🇬🇧 UK — FORZADO
    else {
      contactText.textContent = "📍 Southwark, London | Onsite, Remote or Hybrid";
      whatsappLink.href = "https://wa.me/447935218331";
      whatsappText.textContent = "WhatsApp: +44 7935 218331";

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

  } catch (err) {
    console.warn("Geo detection skipped:", err.message);
  }
});
