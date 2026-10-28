// NutriMet Prototype Front-End Interactive Script
document.addEventListener('DOMContentLoaded', () => {
    console.log("NutriMet Prototype Loaded Successfully!");

    // Simple interaction simulation for buttons
    const logMealBtn = document.querySelector('.btn-primary');
    if (logMealBtn) {
        logMealBtn.addEventListener('click', () => {
            alert("Opening Meal Logging Simulation Dialog...");
        });
    }

    const contextBtn = document.querySelector('.btn-outline');
    if (contextBtn) {
        contextBtn.addEventListener('click', () => {
            window.location.href = 'context.html';
        });
    }
});
