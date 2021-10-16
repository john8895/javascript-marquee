window.onload = function () {
    
    function marquee() {
        let timeId;
        
        function marqueeHandler() {
            const marquee = document.querySelector('.marquee');
            const contentElement = marquee.querySelector('.marquee-content');
            const movingDistance = contentElement.clientWidth - marquee.clientWidth;  // 文字總寬 - 顯示範圍總寬 = 總移動距離
            let currentStep = contentElement.style.left.replace('px', '') || 0;  // 獲取當前的 left 值，要去掉px才能計算 || 0 判斷如果DOM沒有值給0
            
            // console.log(contentElement);  // TEST
            // console.log(movingDistance);  // TEST
            // console.log(new Date());  // TEST
            
            currentStep = parseInt(currentStep) - 10;  // Offset 偏移量
            currentStep--;  // 因為要往左邊跑，所以 left 等於負數，同理如果要往右就是++
            // console.log(currentStep);  // TEST
            
            // 如果移動距離大於總顯示範圍就要停下來(沒有要讓文字跑到最左邊，因這樣會剩下一片空白)
            if (Math.abs(currentStep) > movingDistance) {
                clearInterval(timeId);
            }
            
            // 一組跟多組跑馬燈只差在這裡
            const targetElements = document.querySelectorAll('.marquee-content');
            const targetArray = [...targetElements];
            
            targetArray.forEach(item => {
                item.style.left = `${currentStep}px`;
            })
        }
        
        timeId = setInterval(marqueeHandler, 100);  // clearInterval要作用，setInterval一定要指定給一個變數
    }
    
    if (document.querySelector('.marquee')) marquee();
}