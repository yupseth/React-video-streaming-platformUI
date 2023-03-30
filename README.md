<p align="center">
<img src="https://github.com/yupseth/React-video-streaming-platformUI/blob/main/src/img/Anima_Logo.png"/>
<p/>

### _Single Page Movie Trailer Application_

📱💻 → [Click here to try it out](https://anima-trailer.netlify.app/)

> This is the most ambitious project I have done so far in my still on-going React learning journey. It has offered the opportunity of applying both familiar and unfamiliar concepts, adding depth to my web development understanding, as well as offering a brutally honest perspective on the development process of a large, complex application.

## Screenshots
<p align="center">
<img src="https://github.com/yupseth/React-video-streaming-platformUI/blob/main/Anima%20screenshots/1.png" width=700 height=auto/>
</p>
<p align="center">
<img src="https://github.com/yupseth/React-video-streaming-platformUI/blob/main/Anima%20screenshots/2.png" width=350 height=auto/>
<img src="https://github.com/yupseth/React-video-streaming-platformUI/blob/main/Anima%20screenshots/4.png" width=350 height=auto/>
<p/>
<p align="center">
<img src="https://github.com/yupseth/React-video-streaming-platformUI/blob/main/Anima%20screenshots/3.png" width=700 height=auto/>

<p/>

## About

Anima is a mobile first, responsive single page web application using HTML, SCSS module and React JS. 

Most of the media content is quantitatively limited, displaying the top 20 items in the selected category or page in a descending popularity order.
The only exhaustive list of movies and/or TV shows is found in the search functionality. However, the displayed content is still limited to 20 items per page until further detailed specifications.

It uses axios for fetching movie and tv shows data from [The Movie Database API](https://www.themoviedb.org/), then it dynamically displays it according to the components' necessities.



## Functionality

Anima is built using progressively more specific components, starting from the core sections of interest.

### Nav Bar
- Responsive, changes aspect on scroll 
- Responsive and collapsable menu for page-browsing
- The Anima logo servers as a home button
- Responsive and collapsable search bar 
- A mock profile section (collapsable, as well)

### Home Page
#### The Banner Section
- Dynamically sets the background according to the current week's most popular movie/TV show
- The play button navigates to the individual page of the respective movie/TV show
- The more info button shows/hides the synopsis

#### The Content Section
- Dynamically generates responsive and scrollable rows of content for each category
- On desktop, the rows can also be controlled through left/right buttons
- Clicking a thumbnail sends the user to the movie/TV show individual page
- Fetched data is filtered to have a poster (and every poster has a fallback image)

### The Movies/Series Sections
- Dynamically generates a flex-grid of 20 movies/TV series in descending popularity order
- Clicking a thumbnail sends the user to the movie/TV show individual page

### The Search Results Section
- Dynamically generates a flex-grid of maximum 20 movies/TV series
- The grid updates for every new search specificity
- Clicking a thumbnail sends the user to the movie/TV show individual page
- The user can use the back button to navigate back, and the Anima logo to navigate home

### The Individual Page Section
- Dynamically renders the selected element trailer, title and description
- The data is persistent on page reload
- It uses react-youtube to show the trailer (if existing)

> The autoplay function could be inconsistent at times, as react-youtube prevents it while the video is unmuted.
However, I managed to bypass it by keeping autoplay active and using a setTimeout to unmute the video after a few moments.

### The Footer Section
- Responsive
- Displays the Anima Icon
- The copyright date updates dynamically
- Contains a dummy list of Privacy, Terms, Help


## Knowledge Aquisitions

### React Highlights:
> 90% of the implementation of this app happened before properly learning the concepts in a cohesive course

> When I started developing this app, my abilities with respect to React were very modest to say the least. I had just started Maximilian Schawrmuller's React course and I hardly had any experience with react hooks other than useState. Most of the solutions I had to come up with were the result of a self-driven navigation of the world wide web. Hence, they were not optimal. But I am happy they worked. 

- React Routing (Link and useNavigate)
- Using generator functions for creating unique IDs for same-nature elements
- Managing data via prop drilling (but also finding out about useContext hook, even though I ended up not using it)
- Being more aware of the importance and necessity of reusable components


### SCSS Modules:

- Learning SCSS (I had previously only used CSS)
- Using it in combination with modules (very minimal previous interaction with CSS modules)

### Git:

- Working with local and remote branches
- Various ways of deleting uncommited changes

### Miscellaneous
- Using Axios for fetch requests
- Deploying with Netlify
- Using Material Icons
- (Hopefully) Filtering out Asian mature content that slipped TMDB's endopint filtering options
- Finding out pre-made react sliders exist after ending a very long labour of converting a horizontally scrollable div into a slider.

## Thanks
Cristian Taloi for guiding and continuous feedback <br/>
Ciprian Pitorac for the logo and icon

## License

**MIT**
Copyright (c) 2023 Cristina Șuică

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
