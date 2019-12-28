import React from 'react';
import classes from './AnswersList.module.scss';
import AnswersItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswersItem 
        answer={answer} 
        key={index}
        onAnswerClick={props.onAnswerClick}
        state={props.state ? props.state[answer.id] : null}
      />
    ))}
  </ul>
)

export default AnswersList;