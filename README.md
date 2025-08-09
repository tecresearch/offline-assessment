"# assessment" 
```
Tutorial Management API
Overview
This project implements a RESTful API for managing tutorials within an educational platform. The API allows users to create, retrieve, update, delete, and publish tutorials, ensuring a seamless experience for managing educational content.

Table of Contents
Technology Stack
API Endpoints
Classes Overview
Error Handling
Setup and Installation
Contributing
Questions
Technology Stack
Java: Programming language used for the API.
Spring Boot: Framework for building the API.
Spring Data JPA: For database interactions.
ModelMapper: For object mapping between DTOs and entities.
H2 Database (or other): For data persistence during development.
JUnit / Mockito: For unit testing.
Swagger: For API documentation and testing.
API Endpoints
Base URL: http://<your_base_url>/api/platform/v1/tutorials

HTTP Method	Endpoint	Description
POST	/create	Create a new tutorial
GET	/get/{id}	Get a tutorial by ID
PUT	/update/{id}	Update a tutorial by ID
DELETE	/delete/{id}	Delete a tutorial by ID
DELETE	/delete-all	Delete all tutorials
GET	/get-all	Retrieve a list of all tutorials
GET	/get?title={title}	Retrieve a tutorial by title
PUT	/publish/{id}	Publish a tutorial by ID
PUT	/unpublish/{id}	Unpublish a tutorial by ID
GET	/published	Get only published tutorials
Classes Overview
TutorialRequest: DTO for incoming tutorial data during creation or updates.
TutorialResponse: DTO for returning tutorial data from the API.
ErrorResponse: DTO for returning error messages from the API.
TutorialServiceImpl: Service layer implementation that handles business logic related to tutorials.
TutorialController: Handles HTTP requests and routes them to the appropriate service methods.
Error Handling
The API employs custom exceptions for handling errors:

ResourceNotFoundException: Thrown when a requested resource could not be found.
DuplicateResourceException: Thrown when attempting to create a resource that already exists.
Setup and Installation
Clone the repository:
git clone <repository_url>
cd assessment-1-restapi-easy
Build the project:
mvn install
Run the application:
mvn spring-boot:run
Access the API: Open your browser or API client (like Postman) and navigate to the Swagger UI:
http://localhost:8080/swagger-ui.html
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new feature branch (git checkout -b feature/my-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/my-feature).
Open a pull request.
Questions
If you have any questions regarding the API, please raise issues in the repository or contact the project maintainer directly:

Name: [Mr.Brijesh Nishad@HCLTech-Software Engineer (Java FullStack Developer)]
Email: [Bnlv1212@gmailcom]

License
This project is licensed under the MIT License. See the LICENSE file for details.```"# offline-assessment" 
