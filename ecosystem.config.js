module.exports = {
    apps: [{
        name: 'weather-app-v2',
        script: 'npx',
        interpreter: 'none',
        args: 'serve -p 8080 -T'
    }],
    deploy: {
        production: {
            "user": 'SSH_USERNAME',
            "host": 'SSH_HOSTMACHINE',
            "ref": 'origin/master',
            "repo": 'GIT_REPOSITORY',
            "path": 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};
