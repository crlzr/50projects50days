const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        if (document.querySelectorAll('.tag').length > 0) {
            randomSelect()
        }
    }
})

function createTags(input) {
    const tags = input.split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');


tagsEl.innerHTML = ''

tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
})
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        if (randomTag) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            if (randomTag) {
                highlightTag(randomTag);
            }
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}