pipeline {
    agent any
    tools {nodejs 'node'}

    stages {
        stage('Checkout') {
            steps {
                // Checks out the source code from the repository
                checkout scm
            }
        }

        stage('Install jest') {
            steps {
                // Run npm install to install dependencies
                sh 'npm install jest-cli --g'
            }
        }

        stage('Install dependencies') {
            steps {
                // Run npm install to install dependencies
                sh 'npm install'
            }
        }

        stage('Run Jest Tests') {
            steps {
                // Run Jest tests
                sh 'jest'
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
