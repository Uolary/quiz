import React from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: {},
      isFinished: false,
      activeQuistion: 0,
      answerState: null,
      activeH1: 'Ответьте на вопросы',
      quiz: [],
      loading: true
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
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      
      this.setState({
        answerState: {[answerId]: 'success'},
        results: results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
            activeH1: 'Результаты:'
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
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results: results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuistion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuistion: 0,
      answerState: null,
      activeH1: 'Ответьте на вопросы',
      isFinished: false,
      results: {}
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz: quiz,
        loading: false
      })
    } catch(error) {
      console.log(error)
    }

    console.log('Quiz ID = ', this.props.match.params.id)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>{this.state.activeH1}</h1>
          {
            this.state.loading
            ? <Loader />
            : this.state.isFinished
                ? <FinishedQuiz 
                    results={this.state.results}
                    quiz={this.state.quiz}
                    onRetry={this.retryHandler}
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