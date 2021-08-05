const panels = document.querySelectorAll('.panel');
function toggleOpen() {
    this.classList.toggle('open');
    // console.log(this);
}
function toggleActive(e) {
    // this.classList.toggle('open-active');
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');

    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panal => panal.addEventListener('transitionend', toggleActive));
