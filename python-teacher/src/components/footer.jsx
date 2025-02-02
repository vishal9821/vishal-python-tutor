import './footer.css'

var date = new Date;
date = date.getFullYear();
function FOOTER(){
    return (<footer className='footer'>
      <p> &copy; {date} <a href="https://vishal9821.github.io/vishal-aagwani/">Vishal Aagwani</a></p>
      <p>This project is open-source and built for learning purposes.</p>
    </footer>)
    }

export default FOOTER;