   
   
                                                        localhost:3000/post/                 find the data
    call api(localhost:3000/post/[id])    --------> s  receive api server(jon-server) ----> processing ----->|
                                                                                                            |
                                            response back with data {postData}                      <------------
                                                                                         
                    
                    
        if data not found throw error

                    +-------------------+       HTTP Request         +--------------------+
                    |                   |  ----------------------->  |                    |
                    |     Client        |  GET /greet?name=John      |     API Server     |
                    |  (Web App)        |                            |     (receive)
                    |                   |                            |                    |
                    +-------------------+                            +--------------------+
                            |                                                |
                            |                                                |
                            |                                                |
                            |                                                |
                            |        HTTP Response (JSON)                    |
                            |  <-----------------------                      |
                            |  { "message": "Hello, John!" }                 |
                            |                                                |
                            v                                                v
                    +-------------------+                            +--------------------+
                    |                   |                            |                    |
                    |  Display Greeting |                            |  Process Request   |
                    |  Message to User  |                            |  and Create Message|
                    |                   |                            |                    |
                    +-------------------+                            +--------------------+




1.GET : get data

2.POST | store in external server or database

3.PUT  update data or create data

4.PATCH  update the data

5.DELETE delete the data
