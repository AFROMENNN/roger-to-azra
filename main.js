onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function () {
        // Temukan elemen audio
        var audio = document.querySelector('audio');
    
        // Periksa apakah audio ditemukan
        if (audio) {
            // Mulai pemutaran otomatis
            audio.play();
        }
    });
    