# The Movie Db App

## Project Overview


## Project Description
This is a full stack React Router JS app.  Uses The Movie Data Base (TMDB) API to list trending movies and to search by user inputs. Two different API endpoints are used to do this.  Deatils can be seen for both trending or search results by clicking on a individual movie image.

## Project Links

- GitHub Repo URL https://github.com/jwheeler75/Movie_db_Project_3
- Heroku Production URL TBD

## Wireframes and Flowcharts

This is the wireframe for the app

- TBD

## User Stories
- As a user, I want a button to see trending movies.
- As a user, I want to search for movies by my inputs.
- As a user, I want a button to see search results.
- As a user, I want the movie poster for any results (trending or search).
- As a user, I want basic information about each movies on the results (trening or search).
- As a user, I want to click on any movie poster and see a detail screen for that movie.
- As a user, I want detail movie screen to have a larger image of the movie poster than results pages.
- As a user, I want detail movie screen to have overview, original title and original language in addition to basic info on results pages.
- As a user, I want a button to go back to home page from all pages.
- As a user, I want a page title (ex. "Trending") on each page.
- As a user, I want the entire app to have a consistent look and feel.
- As a user, I want clickable elements to change color/highlight when I hover over them.
- As a user, Marc wants an alternate "flat-tire" image to display when a movie poster is not available in the API.
    

### MVP/PostMVP

 #### MVP
- Create homepage with 2 React routes to a Trending Movies page and a Search Results page
- Call to API to get data
- Enter user inputs to guide search API endpoint call
- Render data for the max 20 movies returned from Trending Movies or for Serrach Results
- Allow user to interact with all pages.

#### PostMVP

- Create a detail page which displays any movie whose image is clicked on results pages
- Handle/limit extra long movie titles.

##start here
## Code Snippet

This code allows you create multiline form input.  In this application, I'm also prepopulating the input boxes with a value from the db.

<form action="/recipes/<%=recipe.id%>?_method=PUT" method="POST">
    Type of Meat:<br />
    <textarea rows="1" cols="8"><%=recipe.typeOfMeat%></textarea>
    <br />
    Recipe:<br />
    <textarea name="recipeName" rows="1" cols="40"><%=recipe.recipeName%></textarea>
    <br />
    Ingredients:<br />
    <textarea name="ingredients" rows="10" cols="50"><%=recipe.ingredients%></textarea>
    <br />
    Instructions:<br />
    <textarea name="instructions" rows="40" cols="50"><%=recipe.instructions%></textarea>
    <br />
    <input type="submit" name="" value="Submit Changes" />
  </form>

## Issues and Resolutions

**ERROR**: Unwanted spacing in the textarea boxes causing issues with hardcoded drop box options.                               
**RESOLUTION**: Using the prettier extention in VS Code moved the input value to the next line, and I indented it to make it flow with the rest of the code.  This added the unwanted spaces when it was rendered.
