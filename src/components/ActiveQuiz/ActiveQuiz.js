import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
    <div className={classes.ActiveQuiz}>
      <div className={classes.Question}>
        <div>
          <span>2. </span>
          Первый вопрос
        </div>
        <div>4 из 10</div>
      </div>
      <AnswersList answers={props.answers}/>
    </div>
)

export default ActiveQuiz;