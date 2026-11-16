document.addEventListener("DOMContentLoaded", () => {
  const contactText = document.getElementById("contactText");
  const whatsappLink = document.getElementById("whatsappLink");
  const whatsappText = document.getElementById("whatsappText");
  const mapContainer = document.getElementById("mapContainer");

  // Mantiene la información y el mapa que se mostraban por defecto en Brasil.
  if (contactText) contactText.textContent = "📍 São Paulo – SP | Remote or Hybrid.";
  if (whatsappLink) whatsappLink.href = "https://wa.me/5511924525919";
  if (whatsappText) whatsappText.textContent = "WhatsApp: +55 11 9 2452-5919";
  if (mapContainer) {
    mapContainer.innerHTML = `<iframe
      src="https://www.google.com/maps?q=Sao%20Paulo&output=embed"
      width="400" height="300" style="border:0;" loading="lazy"
      title="Mapa de São Paulo"></iframe>`;
  }
});
