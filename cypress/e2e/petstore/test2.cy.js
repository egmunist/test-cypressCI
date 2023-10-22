import 'cypress-plugin-api'

describe('White label - Create a transaction ', () => {

   

    it("delete user 2", () => {

 
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