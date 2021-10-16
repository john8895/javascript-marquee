window.onload = function () {
    
    function marquee() {
        let timeId;
        
        function marqueeHandler() {
            const marquee = document.querySelector('.marquee');
            const content = marquee.querySelector('.marquee-content');
            const movingDistance = content.clientWidth - marquee.clientWidth;  // 文字總寬 - 顯示範圍總寬 = 總移動距離
            let currentStep = content.style.left.replace('px', '') || 0;  // 獲取當前的 left 值，要去掉px才能計算 || 0 判斷如果DOM沒有值給0
            
            currentStep = parseInt(currentStep) - 10;  // Offset 偏移量
            currentStep--;  // 因為要往左邊跑，所以 left 等於負數，同理如果要往右就是++
            
            // 如果移動距離大於總顯示範圍就要停下來(沒有要讓文字跑到最左邊，因這樣會剩下一片空白)
            // Math.abs 將負數轉正數
            if (Math.abs(currentStep) > movingDistance) {
                clearInterval(timeId);
            }
            content.style.left = `${currentStep}px`;
        }
        
        timeId = setInterval(marqueeHandler, 100);
    }
    
    marquee();
}