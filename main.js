//Javascript
document.getElementById("goButton").addEventListener("click", function () {
    var selectedOption = document.getElementById("optionDropdown").value;

    if (selectedOption === "Lukasz Chojecki") {
        window.location.href = "https://web.miniextensions.com/Bwk6PtCv1a4zbRONadUU?prefill_Mechanic=ŁUKASZ_CHOJECKI&prefill_Station=D3"; // 
    } else if (selectedOption === "Aleks Czarnecki") {
        window.location.href = "https://google.com"; // Redirect dla Aleks Czarnecki
    } else if (selectedOption === "Kacper Wydra") {
        window.location.href = "https://youtube.com"; // Redirect dla Kacper Wydra
   } else if (selectedOption === "Sebastian Widulinski") {
        window.location.href = "https://google.com"; // Redirect Dla Sebastian Widuliński
    } else if (selectedOption === "Mateusz Gryglicki") {
        window.location.href = "https://youtube.com"; // Redirect dla Mateusz Gryglicki
   } else if (selectedOption === "Mateusz Wiatr") {
        window.location.href = "https://google.com"; // Redirect  dla Mateusz Wiatr
    } else if (selectedOption === "Lysy") {
        window.location.href = "https://www.youtube.com/watch?v=RfhNDyjsW8Y";
    }
});
