var supertest = require('supertest');
var expect = require('chai').expect;


var request = supertest("http://localhost:9000");

describe('Task API Routes', function() {

        // In this test it's expected a task list of two tasks
        describe('GET /tasks', function() {
            it('returns a list of tasks', function(done) {
                request.get('/tasks')
                    .expect(200)
                    .end(function(err, res) {
                        expect(res.body).to.have.lengthOf(4);
                        done(err);
                    });
            });
        });

            // Testing the save task expecting status 201 of success
    describe.skip('POST /tasks', function() {
        it('saves a new task', function(done) {
            request.post('/tasks')
                .send({
                    title: 'run',
                    done: false
                })
                .expect(201)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

       // Here it'll be tested two behaviors when try to find a task by id
       describe('GET /tasks/:id', function() {
        // Testing how to find a task by id
        it('returns a task by id', function(done) {

            request.get('/tasks/' + 1)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.id).to.eql(2);
                    done(err);
                });

});
});
});
