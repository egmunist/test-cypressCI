import 'cypress-plugin-api'

describe('2 ', () => {

    it('Petstore Create user 2', () => {
       
       
        const postData = {
            "id": 78799797,
            "username": "testbo21",
            "firstName": "test",
            "lastName": "run",
            "email": "testqapet1223@yopmail.com",
            "password": "test123",
            "phone": "54545454545",
            "userStatus": 1
          }
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
          }
    
          cy.api({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: postData,
            headers: headers
          })
          .then((response) => {
            expect(response.status).to.eq(200)
          })
    });

    it("delete user", () => {

 
        cy.api({
            method: 'Delete',
            url: 'https://petstore.swagger.io/v2/user/testbo21',
            body: { 
               
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
              },
          })
          .then((response) => {
            expect(response.status).to.eq(200)
          })
       
    });


});