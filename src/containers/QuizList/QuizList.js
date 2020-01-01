import React from 'react';
import classes from './QuizList.module.scss';
import {NavLink} from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import axios from 'axios';

class QuizList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quizes: [],
      loading: true
    }
  }

  renderQuizes() {
    return (
      this.state.quizes.map((quiz) => {
        return (
          <li key={quiz.id}>
            <NavLink to={'/quiz/' + quiz.id}>
              {quiz.name}
            </NavLink>
          </li>
        )
      })
    )
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://react-quiz-f80b5.firebaseio.com/quizes.json')

      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест ${index + 1}`
        })
      })

      this.setState({
        quizes: quizes,
        loading: false
      })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          {
            this.state.loading
            ? <Loader />
            : <ul>
                {this.renderQuizes()}
              </ul>
          }
        </div>
      </div>
    )
  }
}

export default QuizList;