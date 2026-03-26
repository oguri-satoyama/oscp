// スライドショーの制御用変数
let slideIndex = 0;

/**
 * スライドショーの表示を制御する関数
 */
function showSlides() {
    let i;
    // HTMLの全ての .mySlides 要素を取得
    let slides = document.getElementsByClassName("mySlides"); 
    
    // 要素がない場合はエラーを避けて終了
    if (slides.length === 0) {
        // console.error("mySlides 要素が見つかりません。HTMLを確認してください。");
        return; 
    }

    // 全てのスライドを非表示にする
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // 次のスライドへインデックスを進める (0 -> 1, 1 -> 2, ...)
    slideIndex++;
    
    // 最後のスライドを超えたら最初 (1) に戻す
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    // 現在のスライドを表示する (配列は0から始まるため -1 が必要)
    slides[slideIndex - 1].style.display = "block";  
    
    // 5秒後に再び showSlides を呼び出す
    setTimeout(showSlides, 5000); 
}

// ページコンテンツが完全に読み込まれてから実行する
document.addEventListener('DOMContentLoaded', function() {
    // 1. スライドショーの開始
    showSlides();
    
    // 2. お問い合わせフォームの送信処理 (既存機能)
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // フォームのリセットと完了メッセージの表示
        form.reset();
        form.style.display = 'none';
        formMessage.style.display = 'block';

        // 5秒後にメッセージを非表示にし、フォームを再表示する
        setTimeout(() => {
            formMessage.style.display = 'none';
            form.style.display = 'block';
        }, 5000);
    });

    // 3. スムーズスクロール (既存機能)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});