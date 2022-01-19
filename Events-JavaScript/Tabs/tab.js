const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs_item = $$('.tab-item');
const tabs_pane = $$('.tab-pane');
console.log(tabs_item, tabs_pane);

tabs_item.forEach((element, index) => {

    const tab_pane = tabs_pane[index];
    element.onclick = function () {
        $('.tab-item.active').classList.remove("active");
        $('.tab-pane.active').classList.remove("active");
        this.classList.add("active");
        tab_pane.classList.add("active");
    }
});