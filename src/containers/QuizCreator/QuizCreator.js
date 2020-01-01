import React from 'react';
import classes from './QuizCreator.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {createControl} from '../form/formFramework';
import Auxillary from '../../hoc/Auxillary/Auxillary';

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не верно',
    id: number 
  }, {required: true})
}

function creaateFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

class QuizCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: [],
      formControls: creaateFormControls() 
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  onChangeHandler = (value, controlName) => {

  }

  renderControls () {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <Auxillary key={controlName + index}>
          <Input 
            label={control.label}
            defaultValue={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) => this.onChangeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </Auxillary>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>

            {this.renderControls()}
            <select>

            </select>
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuizCreator;