/list slide
const listSlide = (list_slide_id, _main_list_slide, animate, duration) => {
        let slide_id, main_slide_list, activeX_slide, number_slide, max_wid, wid_item, wid_items;
        slide_id = document.getElementById(list_slide_id);
        if (!slide_id) return false;
        main_slide_list = slide_id.querySelector(_main_list_slide);
        number_slide = main_slide_list.querySelectorAll(".slide-item");
        wid_item = main_slide_list.querySelector(".slide-item");
        activeX_slide = slide_id.querySelector(".ic-next");
        wid_items = number_slide.length * wid_item.offsetWidth;
        wid_max = main_slide_list.offsetWidth;

        if (wid_items < wid_max) {
            main_slide_list.style.overflowX = "unset";
            activeX_slide.style.display = "none";
            return false;
        }
        if (!activeX_slide) return false;
        activeX_slide.addEventListener('click', function(e) {
            let start, end;
            if (this.getAttribute("data-start") < main_slide_list.scrollWidth) {
                start = this.getAttribute("data-start");
                end = parseInt(start) + main_slide_list.offsetWidth;

                tween(main_slide_list, start, end, duration, easings[animate]);
                this.setAttribute("data-start", parseInt(end) + main_slide_list.offsetWidth);
            } else {
                this.setAttribute("data-start", 0);
                tween(main_slide_list, main_slide_list.scrollWidth - main_slide_list.offsetWidth, 0, duration, easings[animate]);
            }

        });
    }
