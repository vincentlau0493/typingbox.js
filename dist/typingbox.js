
/*
 * @author: jiayu
 * @description: a jquery plugin simulating typing effect
 * @example: http://codepen.io/vincentliu/pen/mKIvc
 */

(function($){

	var delay_after_typing, typing_interval, interval_for_word, keep_final_word, cursor_interval, delay, infinite, contents, word_times;

	$.fn.typingBox = function(options) {

		return this.each(function(){

			var $typing_box = $(this);

			var defaults = {
				delay_after_typing : 7, //how many times of typing_interval
				typing_interval : 100,
				interval_for_word : 1500,
				keep_final_word : true,
				cursor_interval : 300,
				delay : 1000, //when to begin typing
				infinite : true,
          contents : ["Hi there!", "This is typingbox.js", "Let's rock!"]
			}

			var opt = $.extend({},defaults,options);

			var methods = {
				setCursor: function(){
					//set cursor
					var visible_flag = true;
					$typing_box.after("<span class='box-cursor'>|</span>");
					setInterval(function(){
						if(visible_flag) {
							$(".box-cursor").css("opacity",1);
							visible_flag = false;
						} else {
							$(".box-cursor").css("opacity",0);
							visible_flag = true;
						}
					},opt.cursor_interval);					
				},
				typingWord: function(word,isKeep) {
				  var index = 0;
				  var typing_finish = false;
				  var remove_finish = false;
				  var counter = 0;
				  setInterval(function(){
				    //typing
				    if(index < word.length && !typing_finish) {
				      $(".typing-box").text(word.slice(0,index+1));
				      index++;
				    } else {
				      typing_finish = true;
				      //don't cross out
				      if(isKeep) {
				        clearInterval(this);
				      }
				      //remove
				      if(!isKeep && typing_finish && index>0) {
							if(counter <= opt.delay_after_typing) {
				        counter++;
				      } else {
				        index--;
				      }
				         $(".typing-box").text(word.slice(0,index));
				      } else {
				        clearInterval(this);
				      }
				    }
				    
				  },opt.typing_interval)
				},
				showWords:function(word,time,isKeep) {
				    setTimeout(function(){
				      //alert(time);
				      methods.typingWord(word,isKeep);
				    },time) 
				},
				init:function(){
            var target_contents = opt.contents;
            //alert(opt.contents)
					word_times = [opt.delay];
					var time = opt.delay;
					for(var i=0;i<opt.contents.length;i++) {
            
						var word = opt.contents[i];
						time += word.length*opt.typing_interval+opt.delay_after_typing*opt.typing_interval+word.length*opt.typing_interval+opt.interval_for_word;
						word_times.push(time);
					}

					for(var i=0;i<word_times.length-1;i++) {
						var isKeep = false;
						if(i==opt.contents.length-1) 
						  isKeep = opt.keep_final_word;
						methods.showWords(opt.contents[i],word_times[i],isKeep);

					}
					if(opt.infinite) {
						setTimeout(function(){
							methods.init();
						},word_times[word_times.length-1])
					}

				}
			} //method end
			methods.setCursor();
			methods.init();


		})
	}//
})(jQuery);