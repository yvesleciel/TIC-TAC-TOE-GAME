pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                git credentialsId: 'devopsSSHKey', url: 'git@github.com:yvesleciel/TIC-TAC-TOE-GAME.git'
                echo pwd()
                sh 'npm install'
            }
        }
    }
}
