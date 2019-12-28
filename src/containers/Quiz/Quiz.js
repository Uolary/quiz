import React from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeQuistion: 0,
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
    console.log('Answer Id:', answerId)

    this.setState({
      activeQuistion: this.state.activeQuistion + 1
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
            question={this.state.quiz[this.state.activeQuistion].question}
            answers={this.state.quiz[this.state.activeQuistion].answers}
            onAnswerClick = {this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuistion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;