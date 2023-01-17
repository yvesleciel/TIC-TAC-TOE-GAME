pipeline {
    agent any
   options {
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '15'))
		     timestamps()
    }
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                git credentialsId: 'devopsSSHKey', url: 'git@github.com:yvesleciel/TIC-TAC-TOE-GAME.git'
                echo pwd()
                sh 'docker build -t tic-tac-toe:0.0.1  .'
            }
        }
    }
}

