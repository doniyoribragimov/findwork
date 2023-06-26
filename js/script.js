$(function () {

   

    // SLIDER WIDTH FIX


    // SLICK SLIDERS
    $('.starter__slider').slick({
        prevArrow: `<button class="slider__arrow slider__arrow_next">
                        <img src="images/arrow-right.svg" alt="arrow icon">
                    </button>`,
        nextArrow: `<button class="slider__arrow slider__arrow_prev">
                        <img src="images/arrow-left.svg" alt="arrow icon">
                    </button>`,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1201,
                settings: 'unslick'
            },
        ]
    });


    // -----------------

    function checkMedia(x) {
        if (x.matches) {
            $('.reviews__box').unwrap('div')
        }
    }

    let x = window.matchMedia("(max-width: 1200px)")
    checkMedia(x)
    x.addListener(checkMedia)


    $('.reviews__inner').slick({
        prevArrow: `<button class="slider__arrow slider__arrow_next">
                        <img src="images/arrow-right.svg" alt="arrow icon">
                    </button>`,
        nextArrow: `<button class="slider__arrow slider__arrow_prev">
                        <img src="images/arrow-left.svg" alt="arrow icon">
                    </button>`,
        adaptiveHeight: true,
        fade: true,
        responsive: [
            {
                breakpoint: 100000000,
                settings: 'unslick'
            },

            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            },

            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });

    $('.blog__inner').slick({
        prevArrow: `<button class="slider__arrow slider__arrow_next">
                        <img src="images/arrow-right.svg" alt="arrow icon">
                    </button>`,
        nextArrow: `<button class="slider__arrow slider__arrow_prev">
                        <img src="images/arrow-left.svg" alt="arrow icon">
                        </button>`,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 100000000,
                settings: 'unslick'
            },

            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });

    // SWITCHER

    $('.switcher').on('click', function () {
        let switcher = $(this);
        let switcherInput = switcher.find('input');
        let switcherOn = switcherInput.prop('checked');

        switcherOn = !switcherOn;

        if (switcherOn) {
            switcherInput.prop('checked', true);
            switcher.addClass('active');
        } else {
            switcherInput.prop('checked', false);
            switcher.removeClass('active');
        }
    });


    //  CABINET CATEGOIRIES

    $('.cabinet__categories-item').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).siblings().find('input').removeAttr('checked')

        $(this).addClass('active')
        $(this).find('input').attr('checked', 'checked')
    })

    $('.cabinet__tab').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).siblings().find('input').removeAttr('checked')

        $(this).addClass('active')
        $(this).find('input').attr('checked', 'checked')
    })

    $('.cabinet__but').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).siblings().find('input').removeAttr('checked')

        $(this).addClass('active')
        $(this).find('input').attr('checked', 'checked')
    })




    $('.cabinet__seltype').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).siblings().find('input').removeAttr('checked')

        $(this).addClass('active')
        $(this).find('input').attr('checked', 'checked')
    })

    // PASSWORD CHECK UP

    let isVisible = false;
    let iconUrl = $('.modal-profile__input img').attr('src');
    $('.modal-profile__input img').on('click', function () {
        isVisible = !isVisible;
        if (isVisible) {
            $(this).attr('src', $(this).attr('data-src'))
            $(this).parent().find('input').attr('type', 'text')
        } else {
            $(this).attr('src', iconUrl)
            $(this).parent().find('input').attr('type', 'password')
        }
    })



    // FILTER TASK

    $('.tasks__slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
    });

    $('.freelancer-gallery__content').slick({
        prevArrow: `<button class="slider__arrow slider__arrow_prev">
                        <img src="images/arrow-left.svg" alt="arrow icon">
                    </button>`,
        nextArrow: `<button class="slider__arrow slider__arrow_next">
                        <img src="images/arrow-right.svg" alt="arrow icon">
                    </button>`,
        speed: 400,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });



    $('.details-flags__slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
    });


    // $(window).on('load', function(){
    //     $('.modal-select').addClass('active')
    // })

    $('.modal-select .modal__close, .modal__btn_close').on('click', function () {
        $('.modal-select').removeClass('active')
    })


    $('#openSelect, .header-location').on('click', function () {
        $('.modal-location').addClass('active')
        $('.modal-select').removeClass('active')
    })

    $('.sign-up').on('click', function () {
        $('.modal-auth__content, .modal-auth__tab').removeClass('active')
        $('.modal-auth__content').first().addClass('active')
        $('.modal-auth__tab').first().addClass('active')
    })

    $('.sign-in').on('click', function () {
        $('.modal-auth__content, .modal-auth__tab').removeClass('active')
        $('.modal-auth__content').last().addClass('active')
        $('.modal-auth__tab').last().addClass('active')
    })


    // ASIDE SLIDE UP

    let collapseActive = false;
    $('.filter__collapse').on('click', function () {
        $(this).parent().siblings('.filter__content').slideToggle(500)
        collapseActive = !collapseActive;
        if (collapseActive) {
            $('.filter__collapse').text('Развернуть')
        } else {
            $('.filter__collapse').text('Свернуть')
        }
    })

    // SEARCHBAR CHECK

    $('.searchbar__content, .searchbar__content input').on('click', function () {
        $('.searchbar__content').addClass('active')
    })


    //  ARROW CHECK



    function arrowDisable(arrow) {
        $('.slick-disabled').addClass('active')

        $(arrow).on('click', function () {
            $(this).parent().find(arrow).removeClass('active')
            if ($(this).hasClass('slick-disabled')) {
                $(this).addClass('active')
            }
        })
    }

    arrowDisable('.slider__arrow')


    function scrollProgressBar() {
        var getMax = function () {
            return $(document).height() - $(window).height();
        };

        var getValue = function () {
            return $(window).scrollTop();
        };

        var progressBar = $(".line"),
            max = getMax(),
            value,
            width;

        var getWidth = function () {
            // Calculate width in percentage
            value = getValue();
            width = (value / max) * 100;
            width = width + "%";
            return width;
        };

        var setWidth = function () {
            progressBar.css({ width: getWidth() });
        };

        $(document).on("scroll", setWidth);
        $(window).on("resize", function () {
            // Need to reset max
            max = getMax();
            setWidth();
        });
    }

    scrollProgressBar()
    // FILTER ACCORDION

    $('.filter__arrow').on('click', function () {
        $(this).siblings('.filter__accordion').toggleClass('active')
        $(this).toggleClass('active')
        $(this).prev().toggleClass('active')
    })


    $('input').attr('autocomplete', 'off')

    $('.tasks__wrapper').on('click', function () {
        $(this).parent('.tasks__item').addClass('visited')
        $(this).addClass('visited')
    })


    // ds

    $('.preloader__inner').addClass('pre-active')
    $('.preloader').addClass('active')
    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader__inner').addClass('active')
            $('.preloader__second').addClass('active')
            $('.preloader__logo').addClass('active')
        }, 500)

        setTimeout(function () {
            $('.preloader').removeClass('active')
            $('.preloader__inner').removeClass('pre-active')
            $('.preloader__inner').removeClass('active')
            $('.preloader__second').removeClass('active')
            $('.preloader__logo').removeClass('active')
        }, 1500)
    })


    // SCROLLSPY
    let clientBox = $('.client__box');

    $(document).on('scroll', function () {
        var sTop = $(window).scrollTop();
        $(clientBox).each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                $('.client-sidebar__link').removeClass('active');
                $('.divider').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });

    // MODAL UNFOCUS    

    $('.searchbar-category, .searchbar-filter').on('click', function () {
        $(this).toggleClass('active')
    })

    $(document).on('click', function () {
        $('.searchbar-category, .searchbar-filter').removeClass('active')
    })

    $('.searchbar-category, .searchbar-category__inner, .searchbar-filter, .searchbar-filter__inner').on('click', function (e) {
        e.stopPropagation()
    })

    // MAP SHOW

    let mapShow = false;
    $('.duty__mapshow').on('click', function () {
        mapShow = !mapShow;

        if (mapShow) {
            $(this).find('span').text('Закрыть карту')
            $('.duty__item_map').addClass('active')
        } else {
            $(this).find('span').text('Открыть карту')
            $('.duty__item_map').removeClass('active')
        }
    })


    // INPUT EMPTY
    $('.duty-app__circle').on('click', function () {
        $(this).siblings('input').val('')
    })


    //----------------------------------------------------------------------------------------------------------------------------------------------------------

    // LIST SHOW

    function itemsRow(list, listItem, hideClass, limit, trigger) {
        let classItem = listItem;
        list = document.querySelectorAll(list)
        listItem = document.querySelectorAll(listItem)

        for (let listOne of list) {
            let listChild = Array.from(listOne.children);

            listChild.map(function (el, index) {
                if (index >= limit) {
                    el.classList.add(hideClass)
                } else {
                    el.classList.remove(hideClass)
                }
                let btnActive = false;
                let btnText = $(trigger).find('span').text()
                $(trigger).on('click', function () {

                    console.log(btnText)

                    btnActive = !btnActive
                    if (btnActive) {
                        $(this).addClass('active')

                        $(this).find('span').text('Свернуть');

                        $(this).prev().find(listItem).removeClass(hideClass)

                    } else {
                        $(this).find('span').text('Свернуть');

                        $(this).removeClass('active')

                        $(this).find('span').text(btnText);

                        let listArray = Array.from(this.previousElementSibling.querySelectorAll(classItem))

                        listArray.map(function (element, index) {
                            if (index >= limit) {
                                element.classList.add(hideClass)
                            } else {
                                element.classList.remove(hideClass)
                            }
                        })
                    }

                })


                if (index < limit) {
                    el.parentElement.nextElementSibling.style.display = 'none'
                } else {
                    el.parentElement.nextElementSibling.style.display = 'flex'
                }
            })

        }
    }

    itemsRow('.freelancer-service__items', '.freelancer-service__item', 'freelancer-service__item_hidden', 4, '.freelancer-service__link')
    itemsRow('.categories-aside__list', '.categories-aside__li', 'categories-aside__li_hidden', 11, '.more')

});


//  PHOTOS UPLOAD

let uploadingImages = document.querySelectorAll('.cabinet__photoupload')
for (let uploadingImage of uploadingImages) {
    uploadingImage.addEventListener('click', function () {
        this.querySelector('input').click()
    })
}




let body = document.querySelector('body')
// MODAL CLOSING FUNCTION

function closeModal(modalName, reverse = false) {
    modalName = document.querySelector(modalName)
    window.addEventListener('click', function (e) {
        if (reverse) {
            if (e.target === modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        } else {
            if (e.target !== modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        }

    })
}

closeModal('#modalLogin', true)
closeModal('#modalPassword', true)
closeModal('#modalLeave', true)
closeModal('#modalDelete', true)
closeModal('.modal-profile_order', true)


closeModal('.process__modal', true)
closeModal('.modals', true)
closeModal('.modal-map', true)
closeModal('.notification', true)
closeModal('.modal-location', true)
closeModal('.duty-modal', true)
closeModal('.filter-modal', true)
closeModal('.modal-details', true)
closeModal('.modal-tasks', true)
closeModal('#modalExpired', true)

// STARTER TABS

function createTab(tabName, contentName) {
    tabName = document.querySelectorAll(tabName);
    contentName = document.querySelectorAll(contentName);

    let tabsArray = Array.from(tabName)
    tabsArray.map((tab, tabIndex) => {
        tab.addEventListener('click', function () {
            for (let tabAll of tabName) tabAll.classList.remove('active')
            this.classList.add('active')

            for (let tabsContents of contentName) tabsContents.classList.remove('active')
            contentName[tabIndex].classList.add('active')
        })
    })
}

createTab('.starter__tab', '.starter__content')
createTab('.modal-auth__tab', '.modal-auth__content')
createTab('.cabinet__categories-item', '.cabinet__viewing')
createTab('.client-page__tab', '.client-page__content')



// DESELECT OPENED MODALS

function deselectAll(activeElement, secondELement, isToggle = false) {
    activeElement = document.querySelector(activeElement)
    secondELement = document.querySelector(secondELement)

    if (activeElement) {
        if (isToggle) {
            activeElement.addEventListener('click', function (event) {
                event.stopPropagation()
                activeElement.classList.toggle('active')
            })

            secondELement.addEventListener('click', function (event) {
                event.stopPropagation()
                activeElement.classList.toggle('active')
            })

            document.addEventListener('click', function () {
                activeElement.classList.remove('active')
            })
        }

        else {
            activeElement.addEventListener('click', function (event) {
                event.stopPropagation()
                activeElement.classList.add('active')
            })

            secondELement.addEventListener('click', function (event) {
                event.stopPropagation()
                activeElement.classList.add('active')
            })

            document.addEventListener('click', function () {
                activeElement.classList.remove('active')
            })
        }
    }
}

deselectAll('.header-languages', '.header-languages__current', true)
deselectAll('.header-profile', '.header-profile__current', true)
deselectAll('.header-nav', '.header-nav__current', true)
deselectAll('.header-nav__alert', '.header-nav__message', true)
deselectAll('.header-nav__alert-2', '.header-nav__message', true)
deselectAll('.categories-dropup', '.categories-btn', true)



// MASKING 

let maskedPhones = document.getElementsByClassName("phone-mask");
for (var i = 0; i < maskedPhones.length; i++) {
    new IMask(maskedPhones[i], {
        mask: '+{998}(00) 000 00 00',
        placeholder: {
            show: 'always'
        }
    });
}




// WORD TRIMMER

function wordTrimmer(items, number, symbol) {

    items = document.querySelectorAll(items)
    for (let item of items) {
        let normalText = item.innerText;
        let changedText = '';
        if (normalText.length >= number) {
            changedText = normalText.substring(0, number) + symbol
        } else {
            changedText = normalText.substring(0, number)
        }
        item.innerText = changedText
    }
}

wordTrimmer('.freelancer__limited', 250, '...')
wordTrimmer('.details-sidebar__fullname', 17, '...')
wordTrimmer('.client__feedback', 140, '...')


// 4 DIGIT CODE

let codeInputs = document.querySelectorAll('.modal-code__inputs input')

for (let input of codeInputs) {
    input.addEventListener('input', function () {
        if (input.value.length >= 1) {
            input.nextElementSibling.focus()
        }

        if (input.value.length <= 0) {
            input.previousElementSibling.focus()
        }
    })
}

// ACCORDION 

function createAccordion(target, content, singleOn, startFrom) {
    const styleSheet = document.styleSheets[0]
    styleSheet.insertRule('.accordion-style { max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out }', styleSheet.cssRules.length);
    target = document.querySelectorAll(target)
    content = document.querySelectorAll(content)


    for (let contentItem of content) {
        // parent creating
        let parentElement = document.createElement('div');

        // adding class to parent
        parentElement.classList.add('accordion-content');

        contentItem.parentNode.insertBefore(parentElement, contentItem);
        parentElement.appendChild(contentItem);
        parentElement.classList.add('accordion-style')
    }

    if (target[startFrom]) {
        target[startFrom].classList.add('active')
        let nextElement = target[startFrom].nextElementSibling
        nextElement.style.maxHeight = nextElement.scrollHeight + "px";
    }



    if (singleOn) {
        for (let targetItem of target) {
            targetItem.addEventListener('click', function () {
                for (let targetItem of target) {
                    targetItem.classList.remove('active')
                    targetItem.nextElementSibling.style.maxHeight = null;
                }

                this.classList.toggle('active')
                itemContent = this.nextElementSibling;

                if (itemContent.style.maxHeight) {
                    itemContent.style.maxHeight = null;
                } else {
                    itemContent.style.maxHeight = itemContent.scrollHeight + "px";
                }
            })
        }

    } else {
        for (let targetItem of target) {
            targetItem.addEventListener('click', function () {
                this.classList.toggle('active')
                itemContent = this.nextElementSibling;
                if (itemContent.style.maxHeight) {
                    itemContent.style.maxHeight = null;
                } else {
                    itemContent.style.maxHeight = itemContent.scrollHeight + "px";
                }
            })
        }
    }


}

createAccordion('.question__head', '.question__mains', false)
createAccordion('.step-accordion__head', '.step-accordion__body', true, 2)
createAccordion('.modal-profile__show', '.modal-profile__accordion', false)
createAccordion('.info__trigger', '.info__location', false)


// CUSTOM FILE

function customFile(customBtn) {
    customBtn = document.querySelector(customBtn)
    if (customBtn) {
        customBtn.addEventListener('click', function () {
            this.nextElementSibling.click()
        })
    }
}

customFile('.step__uploading')
customFile('.details-chat__uploadbtn')
customFile('.client__changing')
customFile('.cabinet__photoupload img')
customFile('.duty-app__upbtn')
customFile('#uploadbtn')
customFile('.modal-profile__upload')


// UPLOAD & NAME

let fileTriggers = document.querySelector('.modal-profile__downbtn')
if (fileTriggers) {
    let fileInput = document.querySelector('.modal-profile__download input')
    let fileName = document.querySelector('.modal-profile__downname')

    fileTriggers.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            fileName.innerText = fileInput.files[0].name;
        }
        else {
            fileName.innerText = "";
        }
    });
}



// REVIEW POPOVER

function createPopover(element, isSingle = false) {

    if (isSingle) {
        element = document.querySelector(element)

        element.addEventListener('mouseenter', function () {
            this.nextElementSibling.classList.add('active')
        })
        element.addEventListener('mouseleave', function () {
            this.nextElementSibling.classList.remove('active')
        })

    } else {
        element = document.querySelectorAll(element)
        for (let el of element) {
            el.addEventListener('mouseenter', function () {
                this.nextElementSibling.classList.add('active')
            })
            el.addEventListener('mouseleave', function () {
                this.nextElementSibling.classList.remove('active')
            })
        }

    }

}

createPopover('.freelancer-review__question')
createPopover('.client__popover img')
createPopover('.client__overall span')


// REVIEWS MORES

let reviewsComment = document.querySelectorAll('.reviews__comment')
let reviewsMores = document.querySelectorAll('.reviews__mores')

window.addEventListener('load', function () {
    for (let review of reviewsComment) {
        if (review.clientHeight >= 100) {
            review.classList.add('active')
            review.nextElementSibling.classList.add('active')
        }
    }
})

for (let mores of reviewsMores) {
    mores.addEventListener('click', function () {
        this.previousElementSibling.classList.add('collapse')
        this.previousElementSibling.classList.remove('active')
        this.remove()
    })
}




function activeToggler(items) {
    items = document.querySelectorAll(items)
    for (let item of items) {
        item.addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }
}

activeToggler('.modal-profile__rates .rate-btn')

// MODAL CREATE FUNCTION

function createModal(modalName, modalClose, modalTrigger) {
    modalName = document.querySelector(modalName)
    modalClose = document.querySelector(modalClose)
    modalTrigger = document.querySelector(modalTrigger)

    if (modalTrigger) {
        modalTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            modalName.classList.add('active')
            body.style.overflowY = 'hidden'
        })

        if (modalClose) {
            modalClose.addEventListener('click', function () {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'
            })
        }

    }


}

createModal('#modalLogin', '#modalLogin .modal-profile__close', '#trigger-login')
createModal('#modalLogin', '#modalLogin .modal-profile__cancel', '#trigger-login')

createModal('#modalPassword', '#modalPassword .modal-profile__close', '#trigger-password')
createModal('#modalPassword', '#modalPassword .modal-profile__cancel', '#trigger-password')

createModal('#modalLeave', '#modalLeave .modal-profile__close', '#trigger-leave')
createModal('#modalLeave', '#modalLeave .modal-profile__cancel', '#trigger-leave')

createModal('#modalDelete', '#modalDelete .modal-profile__close', '#trigger-delete')
createModal('#modalDelete', '#modalDelete .modal-profile__cancel', '#trigger-delete')

createModal('.duty-modal', '.duty__close', '.details-chat__open')
createModal('.modal-tasks', '.modal__close', '.searchbar__textresults')
createModal('.modal-chat', '.modal-chat__back', '.details-sidebar__user')
createModal('.modal-chat', '.modal-chat__back', '.chat-people__item')
createModal('.modal-details', '.modal-details__close', '.modal-chat__detail')
createModal('.modal-map', '.modal-map .btn', '.details-content__geo')
createModal('.process__modal', '.process__close', '.process__video')
createModal('.modal-auth', '.modal__close', '.sign-up')
createModal('.modal-auth', '.modal__close', '.sign-in')
createModal('.modal-code', '.modal__close')
createModal('.modal-step', '.modal__close', '.step__example')
createModal('.modal-map', '.modal-map .btn', '.cabinet__address img')
createModal('.notification', '.notification__close', '.header-mini__notification')
createModal('.duty-modal', '.duty__close', '.chat__details')
createModal('.filter-modal', '.filter-modal__close', '.filters__btn')

createModal('#order-modal', '.modal-profile__close', '#pass-order')
createModal('#order-modal', '.modal-profile__cancel', '#pass-order')

createModal('#modal-resume', '.modal-profile__close', '.info__btn')
createModal('#modal-resume', '.modal-profile__cancel', '.info__btn')

createModal('#modalExpired', '.modal-info .modal-profile__close', '#checkTrigger')

