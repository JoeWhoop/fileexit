// JavaScript to handle button click and redirection
document.getElementById("goButton").addEventListener("click", function () {
    var selectedOption = document.getElementById("optionDropdown").value;

    if (selectedOption === "piotr") {
        window.location.href = "https://example.com/piotr"; // Replace with the desired URL for Piotr
    } else if (selectedOption === "Lukasz Chojecki) {
        window.location.href = "https://web.miniextensions.com/Bwk6PtCv1a4zbRONadUU?prefill_Mechanic=ŁUKASZ_CHOJECKI&prefill_Station=D3"; // Updated URL for Krzysztof
    } else if (selectedOption === "Aleks Czarnecki") {
        window.location.href = "https://google.com"; // Redirect to Google for Dzik
    } else if (selectedOption === "Kacper Wydra ") {
        window.location.href = "https://youtube.com"; // Redirect to YouTube for Joe
   } else if (selectedOption === "Sebastian Widuliński") {
        window.location.href = "https://google.com"; // Redirect to Google for Dzik
    } else if (selectedOption === "Mateusz Gryglicki") {
        window.location.href = "https://youtube.com"; // Redirect to YouTube for Joe
   } else if (selectedOption === "Mateusz Wiatr") {
        window.location.href = "https://google.com"; // Redirect to Google for Dzik
    } else {
        alert("Please select an option before clicking Go.");
    }
});
