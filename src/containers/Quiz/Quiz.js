import React from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFinished: true,
      activeQuistion: 0,
      answerState: null,
      quiz: [
        {
          question: 'Какого цвета небо?',
          rightAnswerId: 2,
          id: 1,
          answers: [
            {text: 'Черный', id: 1},
            {text: 'Синий', id: 2},
            {text: 'Красный', id: 3},
            {text: 'Зеленый', id: 4}
          ]
        },
        {
          question: 'Как называется столица Беларуси?',
          rightAnswerId: 1,
          id: 2,
          answers: [
            {text: 'Минск', id: 1},
            {text: 'Москва', id: 2},
            {text: 'Брест', id: 3},
            {text: 'Гомель', id: 4}
          ]
        }
      ]
    }
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return 
      }
    }

    const question = this.state.quiz[this.state.activeQuistion]
    
    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuistion: this.state.activeQuistion + 1,
            answerState: null
          })
        }
        
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuistion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.isFinished
            ? <FinishedQuiz 

              />
            : <ActiveQuiz 
                question={this.state.quiz[this.state.activeQuistion].question}
                answers={this.state.quiz[this.state.activeQuistion].answers}
                onAnswerClick = {this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuistion + 1}
                state={this.state.answerState}
              /> 
          }
        </div>
      </div>
    )
  }
}

export default Quiz;