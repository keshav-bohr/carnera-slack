const axios = require('axios')
const branchingStrategyHandler = async (req, res, next) => {
    const { text, response_url } = req.body;
    res.status(200).end();

    // Send a message back to Slack
    try {
        await axios.post(response_url, {
            response_type: 'ephemeral', // 'in_channel' makes the response visible to everyone in the channel
            text: `You sent the message: ${text}`
        });
    } catch (error) {
        console.error('Error sending message to Slack:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    branchingStrategyHandler
}