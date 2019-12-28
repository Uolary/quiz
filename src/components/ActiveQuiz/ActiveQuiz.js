import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
    <div className={classes.ActiveQuiz}>
      <div className={classes.Question}>
        <div>
          <span>{props.answerNumber}. </span>
          {props.question}
        </div>
        <div>{props.answerNumber} из {props.quizLength}</div>
      </div>
      <AnswersList 
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
)

export default ActiveQuiz;