import express from 'express'

const app = express.Router()
const question = {
    _id: 1,
    title: '¿Como reutilizo un componente en Android?',
    description: 'Esta es mi Pregunta...',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
        firtName: 'Danny',
        lastName: 'Rivadeneira',
        email: 'danny@danny.com',
        password: '123456'
    }
}

const questions = new Array(10).fill(question)
// GET/api/questions
app.get('/', (req, res)=> res.status(200).json(questions))
// GET/api/questions/:id
app.get('/:id',(req,res)=>{
    const { id } = req.params
    const q = questions.find(({ _id }) => _id === +id)
    res.status(200).json(q)
})
// POST/api/questions
app.post('/', (req, res)=>{
    const question = req.body
    question._id = +new Date()
    question.user = {
        email : 'danny@danny.com',
        password: '123456',
        firstName: 'danny',
        lastName: 'rivadeneira'
    }
    question.createdAt = new Date()
    question.answers = []
    questions.push(question)
    res.status(201).json(question)
})
export default app