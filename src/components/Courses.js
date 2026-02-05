import './Courses.css'
function Courses() {
    return (
        <div id='courses-main'>
            <div id='courses-left'>
                <h2>
                    <span class='white'>Courses</span>
                    <span class='orange'> &</span>
                    <br/>
                    <span class='outline'>Certificates</span>
                
                </h2>

            </div>
            <div id='courses-right'>
                <p class='courses-link'>Full Stack Carreer Path | 105 hours</p>
                <p class='courses-link'>Frontend Carreer Path | 70 hours</p>
                <p class='courses-link'>Learn Tailwind CSS | 3 hours</p>
                <p class='courses-link'>Responsive Web Design | 15 hours</p>
                <p class='courses-link'>Learn TypeScript | 14 hours</p>
                <p class='courses-link'>Learn HTLM and CSS | 8 hours</p>
                

            </div>
        </div>


    )


}


export default Courses;