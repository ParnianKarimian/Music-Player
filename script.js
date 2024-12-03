const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const sidebar = document.querySelector('.container .sidebar')

menuOpen.addEventListener('click', () => sidebar.style.left = '0')
menuClose.addEventListener('click', () => sidebar.style.left = '-100%')


const progress = document.getElementById('progress');
const song = document.getElementById('song');
const ctrlIcon = document.getElementById('ctrlIcon');

song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration;
});

song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

progress.addEventListener('input', () => {
    song.currentTime = progress.value;
});

function playPause() {
    if (ctrlIcon.classList.contains('bx-pause')) {
        song.pause();
        ctrlIcon.classList.remove('bx-pause');
        ctrlIcon.classList.add('bx-play');
    } else {
        song.play();
        ctrlIcon.classList.add('bx-pause');
        ctrlIcon.classList.remove('bx-play');
    }
}

song.addEventListener('play', () => {
    const interval = setInterval(() => {
        progress.value = song.currentTime;

        if (song.currentTime >= song.duration) {
            clearInterval(interval);
        }
    }, 500);
});
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".items .item");
    const musicPlayer = document.querySelector(".music-player");
    const playerImage = musicPlayer.querySelector(".song-info img");
    const playerTitle = musicPlayer.querySelector(".song-info h3");
    const playerArtist = musicPlayer.querySelector(".song-info p");
    const song = document.getElementById("song");
    const audioSource = song.querySelector("source");
    let currentAudio = null;

    items.forEach((item) => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            const title = item.querySelector(".details h5").innerText;
            const artist = item.querySelector(".details p").innerText;
            const audioElement = item.querySelector("audio");

            playerImage.src = imgSrc;
            playerTitle.innerText = title;
            playerArtist.innerText = artist;
            audioSource.src = audioElement.querySelector("source").src;
            song.load();

            if (currentAudio && currentAudio !== song) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            song.play();
            currentAudio = song;
        });
    });

    const ctrlIcon = document.getElementById("ctrlIcon");
    function playPause() {
        if (song.paused) {
            song.play();
            ctrlIcon.classList.remove('bx-play');
            ctrlIcon.classList.add('bx-pause');
        } else {
            song.pause();
            ctrlIcon.classList.remove('bx-pause');
            ctrlIcon.classList.add('bx-play');
        }
    }

    ctrlIcon.addEventListener("click", playPause);

    const progress = document.getElementById("progress");
    song.addEventListener("timeupdate", () => {
        progress.value = song.currentTime;
        progress.max = song.duration;
    });

    progress.addEventListener("input", () => {
        song.currentTime = progress.value;
    });
});

function playPause() {
    if (audioElement.paused) {
        audioElement.play();
        ctrlIcon.classList.remove('bx-play');
        ctrlIcon.classList.add('bx-pause');
    } else {
        audioElement.pause();
        ctrlIcon.classList.remove('bx-pause');
        ctrlIcon.classList.add('bx-play');
    }
}


// const seeAll = document.querySelector('.header>a')
// const TrendImg = document.querySelector('.trending>img')
// const MusicList = document.querySelector('.music-list')

// if (!seeAll) console.error('Element .header > a not found');
// if (!TrendImg) console.error('Element .trending > img not found');
// if (!MusicList) console.error('Element .music-list not found');

// window.onload = () => {
//     const seeAll = document.querySelector('.header');
//     const TrendImg = document.querySelector('.trending > img');
//     const MusicList = document.querySelector('.music-list');

//     console.log(MusicList);
//     console.log(TrendImg);
//     console.log(seeAll);

//     seeAll.addEventListener('click', (event) => {
//         event.preventDefault();
//         TrendImg.style.display = 'none';
//         MusicList.style.height = '600px';
//         console.log(seeAll);

//     });
// };


