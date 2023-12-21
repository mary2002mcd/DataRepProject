function Content() {
    return (
        //call this in App.js to display in in the app
        //put curly brackets around javascript when inside HTML
        //this is what is shown in the home page
        <div style={{backgroundImage: `url("https://www.onlygfx.com/wp-content/uploads/2020/07/blank-post-it-note-on-pin-board-2-1024x768.jpg")`}}>
            <h1>Welcome to your personalised To-Do List App</h1>
            <br></br>
            {/*This will display the current time*/}
            <h2>The Time is {new Date().toLocaleTimeString()}, so you better get started</h2>

            <h2>Having trouble? Click the image below to get some top tips!</h2>
            <br></br>
            {/* this is an image that will take the user to a website when clicked */}
            <a href="https://zapier.com/blog/task-management-strategies/">
                <img src="https://cdn1.vectorstock.com/i/1000x1000/60/50/increase-productivity-concept-vector-10586050.jpg" alt="Productivity" width="500" height="500"></img>
            </a>
        </div>
    );
}

export default Content;