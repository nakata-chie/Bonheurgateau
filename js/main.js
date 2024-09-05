$(function () {
  $(".toggle_btn").on("click", function () {
    ($("#header").toggleClass("open"));
  });
  $("#mask").on("click", function () {
    $("#header").toggleClass("open");
  });
  $("#nav a").on("click", function () {
    $("#header").toggleClass("open");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う ページトップからpositionだけスク

    // 600はスクロール速度で単位はミリ秒 swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 900, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });


  $(window).scroll(function () {
    // fade-inクラスに対して順に処理を行う
    $(".fade-in").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fade-inクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fade-inクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
      /*  if (scroll > target - windowHeight + $('.fade-in').height()/2) {
         $(this).css("opacity", "1");
         $(this).css("transform", "translateY(0)");
       } */
    });
  });

  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $("#to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });
});
