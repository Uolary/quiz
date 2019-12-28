import React from 'react';
import classes from './AnswersList.module.scss';
import AnswersItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswersItem answer={answer} key={index}/>
    ))}
  </ul>
)

export default AnswersList;