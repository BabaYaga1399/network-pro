let tc = document.getElementById("tc")
function toastify(type, msg) {
    let icon
    if (type == "bg-danger") {
        icon = `<i class="bi bi-emoji-angry fs-4 me-2"></i>`
    }
    if (type == "bg-success") {
        icon = `<i class = "bi bi-emoji-laughing fs-4 me-2"></i>`
    }
    if (type == "bg-info") {
        icon = `<i class = "bi bi-emoji-wink fs-4 me-2"></i>`
    }
    if (type == "bg-dark") {
        icon = `<i class = "bi bi-emoji-sunglasses fs-4 me-2"></i>`
    }


    let toast = document.createElement("div")
    toast.classList.add("toastify", "p-4", type)
    toast.innerHTML = icon + msg

    tc.appendChild(toast)
    setTimeout(function () {
        toast.remove()
    }, 5000)
}