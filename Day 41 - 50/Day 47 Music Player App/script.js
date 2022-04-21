// Let's access all the elements through DOM

const songName = document.querySelector('.music-title')
let musicContainer = document.querySelector('.container')
let progressDiv = document.querySelector('.progress-div')
let progressBar = document.querySelector('.progress-bar')
let image = document.querySelector('.cover')
let playBtn = document.querySelector('.play')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let audio = document.querySelector('.audio')


// Let's create an array for the song titles

const songs = ['Hey', 'Summer', 'Ukulele']

//Let's  Keep track of the songs
let songIndex = 2

// Initially load songs info to DOM

// let songIndexx = songs[songIndex] To check if i'm actually getting the index
// console.log(songIndexx)

loadSongs(songs[songIndex])

function loadSongs (gaana) {
        // In this function we will access and change the name and image and audio through our parameter
    songName.innerText = gaana
    image.src = `/images/${gaana}.jpg`
    audio.src = `/audio/${gaana}.mp3`
}

function stopPlaying() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function keepPlaying() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

playBtn.addEventListener('click', ()=> {
    let isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        stopPlaying()
    }
    else {
        keepPlaying()
    }
})

prevBtn.addEventListener('click', ()=> {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSongs(songs[songIndex])
    keepPlaying()
})

nextBtn.addEventListener('click', ()=> {
    songIndex++
    if (songIndex > 2) {
        songIndex = 0
    }
    loadSongs(songs[songIndex])
    keepPlaying()
})

function changeBar(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

audio.addEventListener('timeupdate', (e)=> {
    console.log(e.srcElement.currentTime) // this will give us the currentTime of the song in numbers in the console
    console.log(e.srcElement.duration) // this will give us the total Duration of the audio

    const {duration , currentTime} = e.srcElement
    const progressPercentage = (currentTime / duration) * 100
    progressBar.style.width = `${progressPercentage}%`
})

progressDiv.addEventListener('click', changeBar)