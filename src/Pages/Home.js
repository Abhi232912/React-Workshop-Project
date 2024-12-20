import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <!--Main Banner / Hero Section--> */}

<section class="main-banner" style={{backgroundImage:"url('images/banneer.img.jpg')"}} >
    <div class="main-content">
        <h1>WELCOME TO<span> DIGIT </span> INSTITUTE</h1>
        <p>We provide always our best training for our learners and
            always try to achieve our learner's trust and satisfaction</p>
        <button class="btn-one">Right Place for Learning</button>
        <button class="btn-two">View Details</button>
    </div>
</section>
{/* <!--Main Banner / Hero Section--> */}


{/* <!--About us Section--> */}

<section class="about-us">
    <div class="about-content">
        <h4>About Us</h4>
        <p>DIGIT institute is an advanced platform for learners and jobseekers enabled by customized learning paths,
            expert coaches and abundant opportunities.</p>
        <p>Our mission is to personalize & provide high quality training for your career, help you realise true
            potential and meet your career dreams.</p>
    </div>
    <div class="about-img">
        <img src="images/about-us.jpg" alt="about-image" width="100%" height="200px" />

    </div>

</section>
{/* <!--About us Section--> */}

{/* <!--Course Section Section--> */}
<section class="our-courses">
    <h2>Our Courses</h2>
    <p>Connect with top career trainers/industry experts for your personalized growth and get access to various
        career opportunities.</p>
    <div class="all-courses">
        {/* <!--Courses Card One--> */}
        <div class="course-card">
            <img src="images/microsoft-sql.jpg" alt="" width="100%" />
            <div class="course-content">
                <h4>Microsoft SQL</h4>
                <p>Microsoft SQL Server is a relational database management system</p>
            </div>
            <div class="course-btn">
                <button>Enroll now</button>

            </div>

        </div>
        {/* <!--Courses Card One--> */}

        {/* <!--Courses Card two--> */}
        <div class="course-card">
            <img src="images/oracle-sql.jpg" alt="" width="100%" />
            <div classs="course-content">
                <h4>Microsoft SQL</h4>
                <p>Microsoft SQL Server is a relational database management system</p>
            </div>
            <div class="course-btn">
                <button>Enroll now</button>

            </div>

        </div>
        {/* <!--Courses Card two--> */}


        {/* <!--Courses Card three--> */}
        <div class="course-card">
            <img src="images/my-sql.jpg" alt="" width="100%" />
            <div classs="course-content">
                <h4>Microsoft SQL</h4>
                <p>Microsoft SQL Server is a relational database management system</p>
            </div>
            <div class="course-btn">
                <button>Enroll now</button>

            </div>

        </div>
        {/* <!--Courses Card three--> */}

        {/* <!--Courses Card five--> */}
        <div class="course-card">
            <img src="images/ui-development.jpg" alt="" width="100%" />
            <div classs="course-content">
                <h4>Microsoft SQL</h4>
                <p>Microsoft SQL Server is a relational database management system</p>
            </div>
            <div class="course-btn">
                <button>Enroll now</button>

            </div>

        </div>
        {/* <!--Courses Card four--> */}

        {/* <!--Courses Card five--> */}
        <div class="course-card">
            <img src="images/coreandadvanced-java.jpg" alt="" width="100%" />
            <div classs="course-content">
                <h4>Microsoft SQL</h4>
                <p>Microsoft SQL Server is a relational database management system</p>
            </div>
            <div class="course-btn">
                <button>Enroll now</button>

            </div>

        </div>
        {/* <!--Courses Card five--> */}


        {/* <!--Courses Card six--> */}
        <div class="course-card">
            <img src="images/python-fullstack.jpg" alt="" width="100%" />
            <div classs="course-content">
                <h4>Microsoft SQL</h4>
                <p>Microsoft SQL Server is a relational database management system</p>
            </div>
            <div class="course-btn">
                <button>Enroll now</button>

            </div>

        </div>
        {/* <!--Courses Card six--> */}
    </div>
</section>

{/* <!--Course Section Section--> */}
      <Footer />
    </div>
  )
}

export default Home