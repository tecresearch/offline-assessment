"# tutorials-management" 
```Problem Statement
To build an efficient backend service for managing tutorials within an educational application, we need to implement service-level functionality that interacts with a database. This service must handle creating, reading, updating, and deleting tutorials, as well as managing their publication status. It should also ensure that appropriate exceptions are thrown for specific scenarios, such as when a requested resource is not found or when there is an attempt to create a tutorial with a duplicate title.

API Documentation
Overview
This documentation outlines the implementation of the TutorialServiceImpl class, which encapsulates the business logic for managing tutorials. It interacts with a data repository and provides various methods for handling tutorial-related operations.

Class Overview
1. TutorialServiceImpl
   Package: com.hcl.turorial.service.impl
   Purpose: Implements the TutorialService interface to provide service-level logic for tutorial management.
   Dependencies:
   TutorialRepository: For data persistence operations.
   ModelMapper: For mapping between entity and DTO.
   Method Descriptions
1. Create Tutorial
   Method: createTutorial(TutorialRequest tutorialRequest)
   Description: Creates a new tutorial entry in the database.
   Parameters:
   TutorialRequest tutorialRequest: Contains title, description, and status.
   Returns: TutorialResponse - The created tutorial data.
   Throws: DuplicateResourceException if the title already exists.
   Sample Implementation:
   @Override
   public TutorialResponse createTutorial(TutorialRequest tutorialRequest) {
   if (tutorialRepository.existsByTitle(tutorialRequest.getTitle())) {
   throw new DuplicateResourceException("Duplicate title: " + tutorialRequest.getTitle());
   }
   Tutorial tutorial = new Tutorial();
   tutorial.setTitle(tutorialRequest.getTitle());
   tutorial.setDescription(tutorialRequest.getDescription());
   tutorial.setStatus(tutorialRequest.getStatus());
   return modelMapper.map(tutorialRepository.save(tutorial), TutorialResponse.class);
   }
2. Get Tutorial by ID
   Method: getTutorialById(Long id)
   Description: Retrieves a tutorial by its unique ID.
   Parameters:
   Long id: The ID of the tutorial to fetch.
   Returns: TutorialResponse - The retrieved tutorial data.
   Throws: ResourceNotFoundException if the tutorial with the given ID does not exist.
   Sample Implementation:
   @Override
   public TutorialResponse getTutorialById(Long id) {
   Tutorial tutorial = tutorialRepository.findById(id)
   .orElseThrow(() -> new ResourceNotFoundException("Tutorial with id " + id + " not found!"));
   return modelMapper.map(tutorial, TutorialResponse.class);
   }
3. Update Tutorial
   Method: updateTutorial(Long id, TutorialRequest tutorialRequest)
   Description: Updates an existing tutorial's details.
   Parameters:
   Long id: The ID of the tutorial to update.
   TutorialRequest tutorialRequest: Updated data for the tutorial.
   Returns: TutorialResponse - The updated tutorial data.
   Throws: ResourceNotFoundException if the tutorial does not exist.
   Sample Implementation:
   @Override
   public TutorialResponse updateTutorial(Long id, TutorialRequest tutorialRequest) {
   Tutorial oldTutorial = tutorialRepository.findById(id)
   .orElseThrow(() -> new ResourceNotFoundException("Tutorial with id " + id + " not found!"));
   oldTutorial.setTitle(tutorialRequest.getTitle());
   oldTutorial.setDescription(tutorialRequest.getDescription());
   oldTutorial.setStatus(tutorialRequest.getStatus());
   return modelMapper.map(tutorialRepository.save(oldTutorial), TutorialResponse.class);
   }
4. Delete Tutorial by ID
   Method: deleteTutorialById(Long id)
   Description: Deletes a tutorial by its ID.
   Parameters:
   Long id: The ID of the tutorial to delete.
   Throws: ResourceNotFoundException if the tutorial does not exist.
   Sample Implementation:
   @Override
   public void deleteTutorialById(Long id) {
   if (tutorialRepository.existsById(id)) {
   tutorialRepository.deleteById(id);
   } else {
   throw new ResourceNotFoundException("Tutorial with id " + id + " not found!");
   }
   }
5. Delete All Tutorials
   Method: deleteAllTutorials()
   Description: Deletes all tutorials from the database.
   Throws: ResourceNotFoundException if no tutorials exist.
   Sample Implementation:
   @Override
   public void deleteAllTutorials() {
   if (!tutorialRepository.findAll().isEmpty()) {
   tutorialRepository.deleteAll();
   } else {
   throw new ResourceNotFoundException("No Tutorial found!");
   }
   }
6. Get All Tutorials
   Method: getAllTutorials()
   Description: Retrieves all tutorials from the database.
   Returns: List of TutorialResponse - All available tutorials.
   Throws: ResourceNotFoundException if no tutorials are found.
   Sample Implementation:
   @Override
   public List<TutorialResponse> getAllTutorials() {
   if (tutorialRepository.findAll().isEmpty()) {
   throw new ResourceNotFoundException("No Tutorial found!");
   }
   List<Tutorial> tutorials = tutorialRepository.findAll();
   List<TutorialResponse> tutorialResponses = new ArrayList<>();
   for (Tutorial tutorial : tutorials) {
   tutorialResponses.add(modelMapper.map(tutorial, TutorialResponse.class));
   }
   return tutorialResponses;
   }
7. Get Published Tutorials
   Method: getTutorialPublished()
   Description: Retrieves all tutorials that are published.
   Returns: List of TutorialResponse - All published tutorials.
   Throws: ResourceNotFoundException if no published tutorials exist.
   Sample Implementation:
   @Override
   public List<TutorialResponse> getTutorialPublished() {
   if (tutorialRepository.findAll().isEmpty()) {
   throw new ResourceNotFoundException("No Tutorial Published found!");
   }
   List<Tutorial> publishedTutorials = tutorialRepository.findAllByStatus(true);
   List<TutorialResponse> tutorialResponses = new ArrayList<>();
   for (Tutorial tutorial : publishedTutorials) {
   tutorialResponses.add(modelMapper.map(tutorial, TutorialResponse.class));
   }
   return tutorialResponses;
   }
8. Publish Tutorial by ID
   Method: tutorialPublishedById(Long id)
   Description: Publishes a tutorial by its ID.
   Parameters:
   Long id: The ID of the tutorial to publish.
   Returns: Boolean - indicates success or failure.
   Throws: ResourceNotFoundException if the tutorial is not found or already published.
   Sample Implementation:
   @Override
   public Boolean tutorialPublishedById(Long id) {
   Tutorial oldTutorial = tutorialRepository.findById(id)
   .orElseThrow(() -> new ResourceNotFoundException("Tutorial with id " + id + " not found!"));
   if (!oldTutorial.getStatus()) {
   oldTutorial.setStatus(true);
   tutorialRepository.save(oldTutorial);
   return true;
   } else {
   throw new ResourceNotFoundException("Tutorial with id " + id + " has been already published!");
   }
   }
9. Unpublish Tutorial by ID
   Method: tutorialUnPublishedById(Long id)
   Description: Unpublishes a tutorial by its ID.
   Parameters:
   Long id: The ID of the tutorial to unpublish.
   Returns: Boolean - indicates the new status after unpublishing.
   Throws: ResourceNotFoundException if the tutorial is not found or already unpublished.
   Sample Implementation:
   @Override
   public Boolean tutorialUnPublishedById(Long id) {
   Tutorial oldTutorial = tutorialRepository.findById(id)
   .orElseThrow(() -> new ResourceNotFoundException("Tutorial with id " + id + " not found!"));
   if (oldTutorial.getStatus()) {
   oldTutorial.setStatus(false);
   tutorialRepository.save(oldTutorial);
   return oldTutorial.getStatus();
   } else {
   throw new ResourceNotFoundException("Tutorial with id " + id + " has been already unpublished!");
   }
   }
   Conclusion
   The TutorialServiceImpl class encapsulates the business logic for tutorial management. It provides a robust API service that reliably handles CRUD operations, ensures proper error handling, and maintains the integrity of tutorial data. This documentation serves as a reference for students to understand the service implementation and effectively write test cases based on the functionality described.```