require("dotenv").config();

console.log(process.env.WEATHER_API_KEY);

function sendMessage() {
    const webhookUrl = process.env.DISCORD_WEBHOOK;
    const data = { content: messageInput.value };
    
    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
})
}
