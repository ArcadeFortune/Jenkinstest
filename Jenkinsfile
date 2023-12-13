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
                sh 'docker build -t champignions --no-cache .'
            }
        }

        stage('Run Docker image') {
            steps {
                sh 'docker run --name champignions -d champignions 3000:3000'
            }
        }
        
        stage('Run Jest Tests') {
            steps {
                // Run Jest tests
                sh 'docker exec -it champignions npm run test'
            }
        }

        stage('delete docker container') {
            steps {
                sh 'docker rm -f champignions'
            }
        }

        stage('delete docker image') {
            steps {
                sh 'docker rmi -f champignions'
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
