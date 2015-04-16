# typingbox.js
A jquery plugin simulating typing effect

### Example

###### codepen: 
> http://codepen.io/vincentliu/pen/mKIvc

### Get Started

Download the plugin and inlude it into your project.

###### Just use these links: 
```html
<!-- Typingbox CSS -->
<link rel="stylesheet" href="dist/typingbox.css">

<!-- JavaScript -->
<script src="dist/typingbox.js"></script>
```
###### HTML:
```html
<!-- use inline or inline-block elements -->
<span class="typing-box"></span>
```

###### Javascript:
```javascript
var options = {
  delay_after_typing : 10, //how many times of typing_interval
  typing_interval : 100,
  interval_for_word : 2000,
  keep_final_word : false,
  cursor_interval : 400,
  delay : 1000, //when to begin typing
  infinite : true,
  contents : ["Designer","Developer", "Software Engineer","Please contact me!"]
}

$(".typing-box").typingBox(options);
```

### Options

>**contents**: The contents shown on the typingbox. Default is \["Hi there!", "This is typingbox.js", "Let's rock!"\] (array)

>**typing_interval**: The interval for typing. Default is 100 (ms)

>**interval_for_word**: The interval for each word. Default is 1500 (ms)

>**cursor_interval**: The interval for cursor flashing. Default is 300 (ms)

>**delay**: When the typing starts at the very beginning. Default is 1000 (ms)

>**infinite**: The whole typing is loop or not. Default is true (is infinite)

>**keep_final_word**: Keep the last word or not when a loop finishing. Default is true (keep it)

>**delay_after_typing**: The delay period for begining another loop if typing is infinite. Default is 7 (times of typing_interval)


### Override Style

```
.typing-box
.box-cursor
```
