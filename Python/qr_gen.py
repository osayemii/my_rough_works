import qrcode

def generate_qr_code(text, file_name):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=3
    )

    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#4b8bbe", back_color="#ffffff")
    img.save(file_name)

if __name__ == "__main__":
    text = "https://www.waybyclassicfurniture.com"
    file_name = "Wayby_QR.png"

    generate_qr_code(text, file_name)
    print(f"QR code saved as {file_name}")