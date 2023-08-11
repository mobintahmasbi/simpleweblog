### Installation Guide
* Clone this repository On GitHub.com, navigate to the main page of the repository. [https://github.com/mobintahmasbi/simpleweblog].
* Run yarn install to install all dependencies

### CRUD User
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | users/register | Register new user |
| POST | users/login | Login user to profile |
| PATCH | users/updateUser/:id | Update information user by id |
| DELETE | users/delete/:id | Delete information user by id |

### CRUD Blog
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | blog/ | create new comment |
| GET | blog/ | All comment create by user |
| GET | blog/:id | find one comment by id |
| PATCH | blog/:id | Update comment by id |
| DELETE | blog/:id | delete comment by id |

### CRUD Comment
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | comment/ | create new comment |
| GET | comment/ | All comment create by user |
| GET | comment/:id | find one comment by id |
| PATCH | comment/:id | Update comment by id |
| DELETE | comment/:id | delete comment by id |

### CRUD Category
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | category/ | create new category |
| GET | category/ | All category create by user |
| GET | category/:id | find one category by id |

### Technologies Used
* NestJs
* Typeorm
* Database --> postgreSQL
* bcrypt
* jsonwebtoken
* class-validator
* class-tranformer

### Experience works on project
* Selection as a database in order to quickly search and find data and update and delete from a lot of data and the existence of relationships between the tables made in the database in front of two other databases

* Use authorization and auhtorization user

* Use bcrypt for hash password and Create high security

* class-validator and class-tranformer for validate inputs data by users To prevent the entry of incomplete and problematic information

* Environmental variables For high project security and hiding sensitive information in the project

* Use Exception Filter NestJs in project

* Test own Project

### Author
* Mobin Tahmasbi
* Amirreza Ahmadzade
* Arezoo Ghorbanzade