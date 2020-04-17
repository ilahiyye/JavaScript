function answer_1(){

    return alert("Saat 7:00-da yuxudan durmalisan və məktəbə hazirlaşmaq üçün 1 saatin var!");

}function answer_2(){

    return alert("Saat 8:00-da evi terk et. Saat 9-a kimi məktəbdə olmalisan!");

}function answer_3(){
    return alert("Saat 9:00-da Riyaziyyat fənnin başlayacaq. Dərsə cavab verməlisən!");

}function answer_4(){
    return alert("14:00-da Volleybol yarışına qatılmalısan!");

}function answer_5(){
    return alert("Saat 16:00-da evdə olmalısan!");

}function answer_6(){
    return alert("Saat 18:00-da dərslərini oxumağa başla!");

}function answer_7(){
    return alert("Saat 23:00-da yatmalısan!");

}
for (var i=1; i++;){
    var q = prompt("Günün 1-ci yarsina olan planına baxmaq üçün: 1; 2-ci yarısına olan planına baxmaq üçün: 2; 3-cü yarısına olan planına baxmaq üçün: 3 rəqəmini daxil edin");
    var answer;

    if (q == 1){
        answer == answer_1();
        answer == answer_2();
        answer == answer_3();


    } else if (q == 2) {
        answer == answer_4();
        answer == answer_5();

    } else if (q == 3) {
        answer == answer_6();
        answer == answer_7();

    } else {

        alert("Səhv seçim edmisən!");
    }

    var n = confirm("Davam etmək istəyirsən?");
        if(!n){
            break;
        }
}
