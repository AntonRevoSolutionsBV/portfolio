import './Courses.css'
function Courses() {
    return (
        <div id='courses-main'>
            <div id='courses-left'>
                <h2>
                    <span className='white'>Courses</span>
                    <span className='orange'> &</span>
                    <br/>
                    <span className='outline'>Certificates</span>
                
                </h2>

            </div>
            <div id='courses-right'>
                <p className='courses-link'>Full Stack Carreer Path | 105 hours</p>
                <p className='courses-link'>Frontend Carreer Path | 70 hours</p>
                <p className='courses-link'>Learn Tailwind CSS | 3 hours</p>
                <p className='courses-link'>Responsive Web Design | 15 hours</p>
                <p className='courses-link'>Learn TypeScript | 14 hours</p>
                <p className='courses-link'>Learn HTLM and CSS | 8 hours</p>
                

            </div>
        </div>


    )


}


export default Courses;