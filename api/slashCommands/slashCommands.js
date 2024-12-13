const branchingStrategyHandler = async (req, res, next) => {
    // Send a message back to Slack
    try {
        res.status(200).json({
            response_type: 'ephemeral', // 'ephemeral' makes the response visible to the one who triggered the command
            text: `Here, in Carnera, we follow  a branching strategy that involves creating  \n\n1. main branch (default) - used for production \n2. stg branch (taken out from main) - used for staging \n3. dev branch (taken out from stg) -  used for dev \n\nAll 3 branch will be protected and no one can directly merge into it. \n\nAll the feature branch will be first merged into dev, then dev to stg, and then stg to main`
        });
    } catch (error) {
        console.error('Error sending message to Slack:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    branchingStrategyHandler
}