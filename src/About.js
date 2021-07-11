import siteImage from './images/siteImage.png';

const About = () => {
  return ( 
    <div className="about">
      <h2>Content</h2>
        <article>A web app that is made from React that shows the simple use of React hooks, Custom hooks,
          JSON-server, Communicating with API's, Routing, Javascript logics added. In the meantime this does not work beacuse in this site I used
          a JSON-server which acts as an API for me to handle requests such as fetch, post, delete.....
          Don't worry about the Loading on the blogs page
          its an added logic to see that if the server takes too long a Loading text appears, it is set to prolong 
          to see the effect. To see what is looks like its just below.</article>
          <p>Andre Gonzales</p>
          <img src={siteImage} alt="site-image" />
    </div>
   );
}
 
export default About;