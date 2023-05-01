let slideIndex = 0; // 初始化幻燈片(圖片)的索引

// 計時器：setInterval；每經過3秒，觸發一次showSlides函數(切換一張幻燈片)
setInterval(showSlides, 3000);

/* 使用 querySelectorAll 方法從 HTML 文檔中找出所有擁有 mySlides 類別的元素，
並將它們存儲在一個名為 slides 的類陣列對象中。
 這個類陣列對象可以被當作一個陣列使用，可以通過索引值訪問其中的元素，
 例如 slides[0] 就代表第一個 mySlides 元素。*/
function showSlides() {
  const slides = document.querySelectorAll(".mySlides");
  console.log(slides);
  // 遍歷每個幻燈片，並隱藏
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 增加幻燈片的索引
  slideIndex++;

  // 如果幻燈片的索引大於幻燈片的總數，則重新從第一張開始
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // 顯示當前幻燈片
  slides[slideIndex - 1].style.display = "block";
}

/*
1.首先在HTML程式碼中，創建一個包含多個幻燈片的
父容器“slideshow-container”，每個幻燈片都被包裝在一個“mySlides”的子容器中。

2.在JavaScript中，先定義一個名為“slideIndex”的變量，用於跟踪當前顯示的幻
燈片的索引。然後，使用“showSlides”的函數。

3.在“showSlides”函數中，通過document.querySelectorAll(".mySlides")”獲
取所有具有“mySlides”類的元素，並通過遍歷每個幻燈片，將它們全部隱藏。

4.接下來，增加幻燈片的索引，並檢查它是否超出了幻燈片的總數。如果超出了，
就重新從第一張幻燈片開始。接著，設定當前幻燈片的display屬性為 "block"，讓它顯示
出來。最後，使用setInterval()函數設定一個定時器，以便在3秒後運行
showSlides()函數，以顯示下一張幻燈片。
*/
