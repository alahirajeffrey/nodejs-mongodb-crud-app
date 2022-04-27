const chai = require('chai')
const server = require('../server')
const chaiHttp = require('chai-http')

// assertion style
chai.should()

chai.use(chaiHttp)

describe('User API', () => {

    /**
     * Test POST route
     */
    describe('POST /api/v1/users/register', () => {
        it('Should create a new user', (done) => {

            const user = {
                "username": "jeffreyalahira",
                "email": "jeffreyemail",
                "password": "jeffreypassword"
            }

            chai.request(server)
                .post('/api/v1/users/register')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201)
                    response.should.be.a('object')
                    response.body.should.have.property('username')
                    response.body.should.have.property('email')
                    response.body.should.have.property('password')
                    done()
                })
        })

    })

    /**
     * Test GET route
     */
    describe('GET /api/v1/users/findAll', () => {
        it('Should get all users', (done) => {
            chai.request(server)
                .get('/api/v1/users/findAll')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    done()
                })
        })
    })


    /**
     * Test GET by username route
     */

    describe('GET /api/v1/users/findOne', () => {
        it('Should get single user with id : 6269676c918a57cc887fd130', (done) => {

            const id = "6269676c918a57cc887fd130"

            chai.request(server)
                .get('/api/v1/users/findOne/' + id)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    done()
                })
        })
    })

    /**
     * Test PUT route
     */

    describe('PUT /api/v1/users/update/:id', () => {
        it('Should delete user with id : 6269676c918a57cc887fd130', (done) => {

            const id = "6269676c918a57cc887fd130"

            const user = {
                "username": "debby",
                "password": "debbypassword"
            }

            chai.request(server)
                .get('/api/v1/users/update/' + id)
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    done()
                })
        })
    })
    /**
     * Test DELETE route
     */

    describe('DELETE /api/v1/users/delete/:id', () => {
        it('Should delete user with id : 6269676c918a57cc887fd130', (done) => {

            const id = "6269676c918a57cc887fd130"

            chai.request(server)
                .get('/api/v1/users/delete/' + id)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    done()
                })
        })
    })
})