document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
        <nav class="navbar bg-body-black">
            <div class="container-fluid">
                <a class="navbar-brand text-white titulo max-auto" href="#">Bitshop Venezuela</a>
                <div class="search-bar d-flex  gap-2  ">
                    <span class="navText"> Jordan </span>
                    <span class="navText" > Camisetas </span>
                    <span class="navText" > Shoes </span>
                    <span class="navText" > Sobre Nosotros </span>
                </div>
            </div>
        </nav>
    `;

    document.getElementById('navbar-container').innerHTML = navbarHTML;
});