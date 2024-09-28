document.addEventListener("DOMContentLoaded", () => {
    const fanForm = document.getElementById("fan-form");
    const voteForm = document.getElementById("vote-form");

    // Handle story submission
    fanForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const story = document.getElementById("story").value;
        // You can add further processing or send the story to the server here

        // For now, just show an alert
        alert("Your story has been submitted: ");
        fanForm.reset(); // Clear the form
    });

    // Handle voting
    voteForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const selectedPlayer = voteForm.player.value;
        // You can add further processing or send the vote to the server here

        // For now, just show an alert
        alert("You voted for: " + selectedPlayer);
        voteForm.reset(); // Clear the form
    });
});
