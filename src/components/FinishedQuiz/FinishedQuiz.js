import React from 'react';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <span>1.</span>
          Hopwdw wd 
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <span>1.</span>
          Hopwdw wd 
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>
      <p>Правильно 4 из 10</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz;