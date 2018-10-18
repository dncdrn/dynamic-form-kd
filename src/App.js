import React, { Component } from 'react';
import './App.css';
import FormData from '../src/data/form';
import { Steps } from 'antd';
import CheckboxComponent from './components/CheckboxComponent';
import RadioButtonComponent from './components/RadioButtonComponent';
import UploadPictureComponent from './components/UploadPictureComponent';
import TextAreaComponent from './components/TextAreaComponent';
import ShowResult from './components/ShowResult';
import NavigationBtn from './components/NavigationBtn';

const Step = Steps.Step;

class App extends Component {
  constructor(props) {
    super(props);
    const { questions } = FormData;
    const formQuestions = questions.map(question => ({ ...question, answer: '' }));
    this.state = {
      current: 0,
      formQuestions,
      radioValue: '',
      checkBoxValue: [],
      previewVisible: false,
      previewImage: '',
      fileList: [],
      isShowResult: false
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  checboxOnChange = (checkedValues) =>{
    const {current} = this.state;
    const items = this.state.formQuestions;
    items[current].answer = checkedValues;
    this.setState({
      formQuestions: items
    });
  }

  radioOnChange = (e) =>{
    const {current} = this.state;
    const items = this.state.formQuestions;
    items[current].answer = e.target.value;
    this.setState({
      formQuestions: items
    });
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  textOnChange(i, e) {
    const items = this.state.formQuestions;
    items[i].answer = e.target.value;
    console.log('i', i)
    this.setState({
      formQuestions: items
    });
  }

  next (event) {
    event.preventDefault();
    const item = this.state.formQuestions[this.state.current]
    if (item.is_required && item.answer.length === 0) {
      this.setState({error: 'The field is required'})
      return;
    }
    if (item.answer.length < item.min_char_length) {
      this.setState({error: `The minimum length of this field should be ${item.min_char_length}`})
      return;
    }
    const current = this.state.current + 1;
    this.setState({ current, error: '' });
}

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
    this.setState({ current, error: '' });
    }
  showResult = () => {
    this.setState({isShowResult: true})
  }

  renderSwitch(param){
    const { current, formQuestions, previewVisible, previewImage, fileList } = this.state;
    const item = formQuestions[current];
    switch(param){
      case 'CheckQuestion':
      return <CheckboxComponent options={item.options}
              checboxOnChange={this.checboxOnChange}
              checkedValues={this.state.formQuestions[current].answer}/>
      case 'RadioQuestion':
      return <RadioButtonComponent options={item.options}
              radioOnChange={this.radioOnChange}
              radioValue={this.state.formQuestions[current].answer}/>
      case 'UploadQuestion':
      return <UploadPictureComponent fileListLength={fileList.length}
              fileList={fileList}
              previewVisible={previewVisible}
              handleCancel={this.handleCancel}
              previewImage={previewImage}/>
    default:
      return <TextAreaComponent 
              answer={this.state.formQuestions[current].answer}
              onChange={this.textOnChange.bind(this, current)}/>
    }
  }

  render() {
    const { current, formQuestions, error , isShowResult  } = this.state;
    const {questions, title}= FormData;
    const item = formQuestions[current];
    return (
      <div className="form-container">
        <div className="card p-5">
        { isShowResult ?
            <ShowResult formQuestions={formQuestions}/>
          :
          <div>
          <h1>{title}</h1>
          <Steps progressDot current={current}>
            {FormData.questions.map(item => <Step key={item.id} title={item.question_type} />)}
          </Steps>
          <div className="steps-content question-container">
              <h2>{item.prompt}</h2>
              {this.renderSwitch(item.question_type)}
              {error && <div className="text-danger">{error}</div>}
          </div>
            <NavigationBtn current={current}
              prev={this.prev}
              questions={questions}
              showResult={this.showResult}
              next={this.next}/>
        </div>
        }
        </div>
        </div>
    );
  }
}

export default (App);
