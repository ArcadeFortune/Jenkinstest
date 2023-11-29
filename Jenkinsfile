pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checks out the source code from the repository
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                // Use Node.js environment, specify the version if necessary
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    // Run npm install to install dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Jest Tests') {
            steps {
                // Again, specifying Node.js environment
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    // Run Jest tests
                    sh 'jest'
                }
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
