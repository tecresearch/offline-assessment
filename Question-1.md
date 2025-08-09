"# tutorials-management" 
```
Problem Statement
The goal of this project is to develop a RESTful API for managing tutorials on an educational platform. The API will allow users to perform operations such as creating, retrieving, updating, deleting, and publishing tutorials with unique titles. The system must handle duplicates, provide meaningful error messages, and ensure smooth interaction through well-defined endpoints.

API Documentation
Overview
This documentation describes the API for managing tutorials, detailing the endpoints, request/response formats, and examples.

Classes Overview
This API consists of three main classes:

TutorialRequest: Data transfer object (DTO) for incoming tutorial creation and update requests.
TutorialResponse: DTO for returning tutorial data from the API.
ErrorResponse: DTO for returning error information from the API.
Class Definitions
1. TutorialRequest
Purpose: Represents the input data for creating or updating a tutorial.
Fields:
String title: The title of the tutorial.
String description: A description of the tutorial content.
Boolean status: Indicates whether the tutorial is published (true) or unpublished (false).
Constructor: Default and parameterized constructors.
Getters/Setters: Methods for accessing and modifying fields.
Sample Implementation:
package com.hcl.turorial.dto;

public class TutorialRequest {
    private String title;
    private String description;
    private Boolean status;

    public TutorialRequest() {}

    public TutorialRequest(String title, String description, Boolean status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

    // Getters and Setters
}
2. TutorialResponse
Purpose: Represents the returned data for a tutorial from the API.
Fields:
Long id: Unique identifier for the tutorial.
String title: The title of the tutorial.
String description: A description of the tutorial content.
Boolean status: Indicates whether the tutorial is published.
Constructor: Default and parameterized constructors.
Getters/Setters: Methods for accessing and modifying fields.
Sample Implementation:
package com.hcl.turorial.dto;

public class TutorialResponse {
    private Long id;
    private String title;
    private String description;
    private Boolean status;

    public TutorialResponse() {}

    public TutorialResponse(Long id, String title, String description, Boolean status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }

    // Getters and Setters
}
3. ErrorResponse
Purpose: Represents error messages returned by the API.
Fields:
int status: HTTP status code.
String error: Short description of the error.
String message: Detailed error message.
String path: The API path that was accessed.
Constructor: Parameterized constructor.
Getters/Setters: Methods for accessing and modifying fields.
Sample Implementation:
package com.hcl.turorial.dto;

public class ErrorResponse {
    private int status;
    private String error;
    private String message;
    private String path;

    public ErrorResponse(int status, String error, String message, String path) {
        this.status = status;
        this.error = error;
        this.message = message;
        this.path = path;
    }

    // Getters and Setters
}
Tutorial Controller
Purpose
Handles all HTTP requests related to tutorials.

Endpoints
Create Tutorial

Method: POST
Endpoint: /api/platform/v1/tutorials/create
Request Body: TutorialRequest
Response: TutorialResponse (201 Created)
Get Tutorial by ID

Method: GET
Endpoint: /api/platform/v1/tutorials/get/{id}
Response: TutorialResponse (200 OK)
Update Tutorial by ID

Method: PUT
Endpoint: /api/platform/v1/tutorials/update/{id}
Request Body: TutorialRequest
Response: TutorialResponse (200 OK)
Delete Tutorial by ID

Method: DELETE
Endpoint: /api/platform/v1/tutorials/delete/{id}
Response: (204 No Content)
Get All Tutorials

Method: GET
Endpoint: /api/platform/v1/tutorials/get-all
Response: List of TutorialResponse (200 OK)
Sample Input/Output
1. Create Tutorial
Request:

{
    "title": "Java Basics",
    "description": "An introduction to Java programming.",
    "status": true
}
Response (201 Created):

{
    "id": 1,
    "title": "Java Basics",
    "description": "An introduction to Java programming.",
    "status": true
}
2. Get Tutorial by ID
Request: GET /api/platform/v1/tutorials/get/1 Response (200 OK):

{
    "id": 1,
    "title": "Java Basics",
    "description": "An introduction to Java programming.",
    "status": true
}
3. Update Tutorial by ID
Request:

{
    "title": "Advanced Java",
    "description": "Deep dive into Java programming.",
    "status": false
}
Response (200 OK):

{
    "id": 1,
    "title": "Advanced Java",
    "description": "Deep dive into Java programming.",
    "status": false
}
Conclusion
This document serves as a complete reference for creating and managing tutorials via a RESTful API. It includes the necessary classes, endpoints, sample inputs, and expected outputs, enabling students to understand and implement the functionality clearly.
```