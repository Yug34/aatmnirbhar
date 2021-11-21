function GoodSite(props) {
    return (
      <div className="good-site">
          Hey I'm not a professor!
          <button onClick={() => props.switchSite(false)}>Click Me!</button>
      </div>
    );
  }
  
  export default GoodSite;