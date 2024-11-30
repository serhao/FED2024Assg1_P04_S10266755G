/*
Practical 5
Name: Tee Qi Xiang
Student No: S10269001F
*/
CREATE DATABASE NewNP40Book;

USE NewNP40Book;

/*qn4)*/
CREATE TABLE BookCategory
(
BookCat CHAR(2) NOT NULL,
Description VARCHAR(100)	NOT NULL,
CONSTRAINT PK_BookCategory PRIMARY KEY (BookCat)
)

/*DROP TABLE BookCategory*/

/*qn5)*/
CREATE TABLE Publisher
(
PublisherID SMALLINT	NOT NULL,
Name	VARCHAR(50) NOT NULL,
CONSTRAINT PK_Publisher PRIMARY KEY(PublisherID)
)

/*qn6)*/
CREATE TABLE Book 
(
ISBN	CHAR(10)	NOT NULL,
Title	VARCHAR(200)	NOT NULL,
YearPublish CHAR(4)	NOT NULL,
PublisherID SMALLINT	NULL,
BookCat CHAR(2) NULL,
CONSTRAINT PK_Book PRIMARY KEY(ISBN),
CONSTRAINT FK_Book_PublisherID FOREIGN KEY(PublisherID) REFERENCES Publisher(PublisherID),
CONSTRAINT FK_Book_BookCat FOREIGN KEY(BookCat) REFERENCES BookCategory(BookCat)
)


/*qn7)*/
INSERT INTO BookCategory SELECT * FROM NP40Book.dbo.BookCategory;
INSERT INTO Publisher SELECT * FROM NP40Book.dbo.Publisher;
INSERT INTO Book SELECT * FROM NP40Book.dbo.Book;

/*qn8)*/
INSERT INTO Book (ISBN, Title, YearPublish, PublisherID, BookCat)
VALUES('0385605196','Not the end of the world', '2002', '4', 'F'),
('0385605196','The Devil wears Prada', '2003', '4', 'F')

/*Msg 2627, Level 14, State 1, Line 39
Violation of PRIMARY KEY constraint 'PK_Book'. Cannot insert duplicate key in object 'dbo.Book'. The duplicate key value is (0385605196).
The statement has been terminated.

Completion time: 2024-11-22T13:34:35.1649188+08:00

The database rejected the insertion and threw an error. 
Because ISBN Column is the primary key in the table. This means it must be unique. As the 
Second entry has the same isbn, the database rejected it 
*/

/*qn9) in order to maintain referential integrity, Publisher must be inserted first. Book table has a
foreign key that references publisher ID in publisher table. hence, publisher must be inserted first */
INSERT INTO Book (ISBN, Title, YearPublish, PublisherID, BookCat)
VALUES('981244579X','Database', '2003', '9', 'NF')
INSERT INTO Publisher(PublisherID, Name)
VALUES('9', 'Pearson Prentice Hall')

/*qn10)*/
UPDATE Publisher
SET Name = 'Happy Day'
WHERE Name LIKE'%Happyday%'

/*qn11)*/ 
UPDATE BookCategory
SET Description = 'Comedy'
WHERE Description LIKE'%Children%'

/*qn12)*/
UPDATE Book
SET PublisherID = (SELECT PublisherID FROM Publisher WHERE Name = 'Addison Wesley'),
    BookCat = 'NF'
WHERE Title = 'Database Systems';

/*qn13)*/
UPDATE Book
SET Book.PublisherID = Publisher.PublisherID
FROM Book
INNER JOIN Publisher ON Publisher.Name = 'Heinz'
WHERE Book.Title = 'The Best of Catherine Lim';

/*qn14)*/
DELETE FROM Book
WHERE ISBN = '0072126949';

/*qn15)*/
DELETE FROM Book
WHERE ISBN = '981244579X';
DELETE FROM Publisher
WHERE PublisherID = 9;


/* Must remove dependent rows first */