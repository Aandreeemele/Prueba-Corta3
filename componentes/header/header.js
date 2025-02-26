export function mostrarMenu() {
    const menu = document.createElement("header");

    let img = document.createElement("img");
    img.src = "data:image/jpeg;base64,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";
    img.alt = "Logo"; 
    img.style.height = "45px"; 

    menu.innerHTML = `
        <nav>
            <button>Productos marcados <span>5</span></button>
        </nav>
    `;

    menu.prepend(img);
    document.body.prepend(menu);
}
