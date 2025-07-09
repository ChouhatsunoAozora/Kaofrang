document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tweetButton").addEventListener("click", tweetMessage);
});

function tweetMessage() {
    const message = "Kaofrang ChouhatsunoAozora\n#KaofrangBNK48\n#คำท้าทายที่ปลายฟ้าConceptDay4";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}
