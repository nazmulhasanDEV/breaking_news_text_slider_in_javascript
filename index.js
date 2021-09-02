const text_slider_main_div = document.getElementById('text-slider-main-div');
const textSliderContent = document.getElementById('text-slider-content');

const main_div_width = text_slider_main_div.clientWidth; // main_div width
const textSliderContentWidth = textSliderContent.clientWidth; // content width 
const total_width = main_div_width + (textSliderContentWidth*2); // main_div + content width * 2


textSliderContent.style.transform = 'translateX(-' + textSliderContentWidth +'px)'; // moved left and out of the main div based on content width of the slider 

var get_back_to_original_position = Number(textSliderContentWidth)-1; // textSliderTwo.clientWidth == Total Text Width

var move_to_right_from_original_position = 1;

const sliderFunc = (element)=>{
    get_back_to_original_position = get_back_to_original_position - 1;
    if(get_back_to_original_position <= 0){

        element.style.transform = 'translateX('+ (move_to_right_from_original_position) +'px)';
        move_to_right_from_original_position = move_to_right_from_original_position + 1;

        if(move_to_right_from_original_position >= main_div_width){
            element.style.transform = 'translateX(-'+ total_width +'px)';
            move_to_right_from_original_position = 15;
            get_back_to_original_position = textSliderContentWidth - 1;
        }

    }
    
    else{
        element.style.position = 'relative';
        element.style.transform = 'translateX(-'+ (get_back_to_original_position) +'px)';
    }

};

var calling_slider = setInterval(()=>{
    sliderFunc(textSliderContent);
}, 10);

const stopSlider = () =>{
    clearInterval(calling_slider);
};

textSliderContent.onmouseover = ()=>{
    stopSlider();
};

textSliderContent.onmouseout = ()=> {
    calling_slider = setInterval(()=>{
        sliderFunc(textSliderContent);
    }, 10);
};





