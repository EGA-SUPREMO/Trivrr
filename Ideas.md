Users can create their collections of words 
Words can be classified by themes

Current tasks(unorganized, this will moved):

* Create an user data base with the rows:
	* Username
	* Email
	* Password
	* Id
* Create two word data bases with the rows, one name en_words and the another es_words:
	* id
	* word
	* id_answer_es: The id of the right answer from the Spanish database version.
	* difficulty
	* topic
Note: Keep in mind there's high possibility that it change a lot through the time and I don't know the difference between NoSQL and SQL, and I don't know which kind of database is better for this.

And the last two ones will be empty until the app is fully functional.

* Make a Python API:
	I'm not sure how it will be, it should be or what exactly have to do except handle the requests from the client like if the encripted password from a login form and the encryted password from the database are the same, or send a set of 4 words with certain data

	Tasks

1

show 4 buttons in which each one will have a boolean to determine the right answer and then after the user click on a button, the current state(just a page with 4 buttons) will be set to the post-game state(just an empty page with text saying Test) 

2

Make a database with a table named users with named columns as "//TODO" and a table named 'words' with named columns as: 'words_<the name of the language>', 'id', 'dificulty', 'definition' and 'answer_id_<the name of other language>', 'topic'.

"answer_id_<the name of other language>" Will be the id of a word from another language that is right answer

3

add an small collection of 20 words at the languages EN(english) and ES(Spanish) to database and test the app


after user selects a word make that if the user hovers a button show whithin the button the right word and an small definition.
