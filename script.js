let qrCode;

function generateQR() {
    let concertLink = document.getElementById("concertLink").value;

    if (!concertLink) {
        alert("Please enter a concert link!");
        return;
    }

    if (qrCode) {
        qrCode._canvas.innerHTML = "";
    }

    qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: concertLink,
        dotsOptions: { color: "#000", type: "rounded" },
        backgroundOptions: { color: "#fff" }
    });

    qrCode.append(document.getElementById("qrCode"));
}

function downloadQR() {
    if (!qrCode) {
        alert("Please generate a QR code first!");
        return;
    }
    qrCode.download({ name: "concert_qr", extension: "png" });
}