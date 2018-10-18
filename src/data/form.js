const form = {
  "title": "This is a title for the form Header",
  "questions": [
    {
      "id": 2447,
      "question_type": "TextQuestion",
      "prompt": "What is your first answer?",
      "is_required": false,
      "min_char_length": 3
    },
    {
      "id": 2448,
      "question_type": "TextQuestion",
      "prompt": "What is your second answer?",
      "is_required": true,
      "min_char_length": 1
    },
    {
      "id": 2420,
      "question_type": "CheckQuestion",
      "prompt": "What is your check answer?",
      "options": ["opt1", "opt2", "opt3", "opt4"],
      "is_required": true,
    },
    {
      "id": 2490,
      "question_type": "RadioQuestion",
      "prompt": "What is your radio answer?",
      "options": ["opt1", "opt2", "opt3", "opt4"],
      "is_required": true,
    }
  ]
}
export default form;