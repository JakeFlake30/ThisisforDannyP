document.addEventListener("DOMContentLoaded", function () {
    var scrollContainer = document.getElementById("scroll-container");
    var gradientContainer = document.getElementById("gradient-container");
  
    window.addEventListener("scroll", (e) => {
      SCTop = Math.abs(scrollContainer.getBoundingClientRect().top);
      SCUsedHeight = scrollContainer.getBoundingClientRect().height / 2;
  
      // reveal text fully until scrollContainer's top position is less than half of its height,
      // it means reveal text fully when scroll of scrollContainer reach half of its height
      if (SCTop <= SCUsedHeight) {
        //convert these numbers with respect to 100
        //ex 0-900 to 0-100
  
        //cross multiplication
        // SCUsedHeight ---> SCTop
        //      100     --->   ?
        percentageValue = Math.round((SCTop * 100) / SCUsedHeight);
  
        //adjust backgroundsize and opacity values of gradientContainer for visible effect and change it as one scrolls
        // 4 is used to increase backgroundsize
        backgroundSize = `${percentageValue * 6}% ${percentageValue * 4}%`;
  
        gradientContainer.style.backgroundSize = backgroundSize;
        gradientContainer.style.opacity = percentageValue / 100;
        // divide by 100 because opacity ranges from 0 to 1
      }
    });
  });
  