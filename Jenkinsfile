pipeline {
    agent any
    tools {
        nodejs 'node'
        }

    stages {
        stage('Checkout') {
            steps {
                // Checks out the source code from the repository
                checkout scm
            }
        }

        stage('Build Docker image') {
            steps {
                // Run npm install to install dependencies
                sh 'docker build -t dockertest .'
            }
        }

        stage('Run Docker image') {
            steps {
                // Run npm install to install dependencies
                sh 'docker run --name champignions -d dockertest 3000:3000'
            }
        }

        
        stage('Run Jest Tests') {
            steps {
                // Run Jest tests
                sh 'docker exec -it champignions npm run test'
            }
        }
    }

    post {
        always {
            // Actions to perform after pipeline completion
            echo 'Pipeline execution is complete.'
        }
    }
}
