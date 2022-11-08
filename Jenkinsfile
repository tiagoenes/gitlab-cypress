pipeline{
    agent any
    tools{
        nodejs "19.0.1"
    }
    stages{
        stage('example'){
            step{
                sh 'npm version'
            }
        }
    }
}