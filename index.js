function sendMessage() {
    // Get the message input element
    const messageInput = document.getElementById('message-input');
    
    // Get the webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1082766354328858655/0lRO3S6FfC0Zhoh4xfCF89gR0RyDsbYGSbaBNcI12el14iHUh3uizhLmGbEsgmxng7Ae';
    
    // Create the data to send to the webhook
    const data = { content: messageInput.value };
    
    // Send the HTTP request to the webhook URL
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Error sending message:', response.status, response.statusText);
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  }