const sounds = ['cuphead-1', 'cuphead-2', 'zelda-1', 'zelda-2', 'zelda-3', 'smash-1', 'smash-2', 'smash-3', 'smash-4', 'smash-5'];

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})