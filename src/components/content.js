function Content() {
    return (
        //call this in App.js to display in in the app
        //put curly brackets around javascript when inside HTML
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;