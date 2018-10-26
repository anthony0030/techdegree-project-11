
# React Photo Gallery with Flicker API
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/630d8b9691f349d5bd6f37c534a23498)](https://www.codacy.com/app/anthony0030/techdegree-project-11?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=anthony0030/techdegree-project-11&amp;utm_campaign=Badge_Grade)

In this project, I built an image gallery using React and the Flickr API. I used [create-react-app](https://github.com/facebook/create-react-app). You can see a [running copy of my project on Github pages](https://anthony0030.github.io/techdegree-project-11).

The project had a few requirements:

*	it had to use the flicker.photos.search endpoint/method
*  it had to have links that changed the list of photos matching some criteria
*  it had to include a search function allowing the user to search for photos
*  React Router was to be used to set up routes for each navigation link
*  Axios was needed to fetch data from the Flickr API
*  all data fetching was to be done from a container component that passed data down to presentational components responsible for displaying images

#### Instructions to run locally

1. In  order to view the project locally, clone or download the project into your working directory.
2. Create a ```.env``` file in the root of the project file with the following contents:
	```
	REACT_APP_FLICKR_API_KEY=abdf5b6303423d73193915048fd12ef9
	```
3. Run the following commands within the project folder.

	```
	npm install
	npm start
	```
	 
4. You can now visit the project via the URL provided after running the 'npm start' command.


#### Instructions to publish to github pages

In order to publish to github pages, run the following command within the project folder.

```
npm run-script deploy
```
 

