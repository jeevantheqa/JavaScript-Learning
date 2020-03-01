var supertest = require('supertest');
var expect = require('chai').expect;
var puppeteer = require('puppeteer');


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
                    expect(res.body.id).to.eql(1);
                    done(err);
                });

});

                it('returns status 404 when id is not found', function(done) {
                    var task = {
                        id: 'fakeId'
                    }
                    request.get('/tasks/' + task.id)
                        .expect(404)
                        .end(function(err, res) {
                            done(err);
                        });
                });

                describe('PUT /tasks/:id', function() {
                    it('updates a task', function(done) {
                        
                        request.put('/tasks/' + 1)
                            .send({
                                title: 'travel',
                                done: false
                            })
                            .expect(200)
                            .end(function(err, res) {
                                done(err);
                            });
                    });
                });

                   // Testing how to delete a task expecting status 201 of success
    describe('DELETE /tasks/:id', function() {
        it('removes a task', function(done) {
            
            request.put('/tasks/' + 1)
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });
});

    describe('Puppeteer test',function(){
        it.only('click action',async function(done){
            const browser = await puppeteer.launch({
                headless:false,
                slowMo:80
                
            });
            const page = browser.newPage();
            (await page).goto('https://www.google.com/');
            (await page).type("[name='q']",'Data Structure');
            //(await  page).$("[name='q']").type("Data Structures");
            (await page).click("[name='btnk']");
            //(await  page).$("[name='btnk']").click();
            const finalText = (await  page).$eval("[title='Search']",el => el.textContent);
            expect(finalText).to('Data Structure');
            browser.close();
            done(err);
        });


    });
});
