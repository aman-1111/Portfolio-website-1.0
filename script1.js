function openModal(imageSrc) {
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    const modal = document.getElementById("certificateModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openModal(imagePath) {
    // Create modal container
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";

    // Create image inside modal
    const img = document.createElement("img");
    img.src = imagePath;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 10px white";

    // Append image to modal
    modal.appendChild(img);

    // Close modal when clicking outside the image
    modal.onclick = function () {
        document.body.removeChild(modal);
    };

    // Append modal to the document
    document.body.appendChild(modal);
}
