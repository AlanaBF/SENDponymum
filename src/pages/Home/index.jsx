import Image1 from "/SENDponymumFront.png";
import Image2 from "/whoamI.png";
import Image3 from "/whatwillyoufind.png";
import Image4 from "/whydidIstart.png";
function Home() {
  return (
    <div className="page-background">
      <h1>SENDponymum</h1>
      <img src={Image1} className="main-image"></img>
      <p>
        Empowering children with special educational needs in the equine
        community.
      </p>
      <div>
        <div>
          <img className="about-me-images" src={Image2} alt="Image 2" />
        </div>
        <div>
          <br />
          <h1>WHO AM I?</h1>
          <p>
            At SENDponymum, we understand the unique challenges and joys of
            raising a child with special needs along with a love of horses. Our
            founder, Rebecca Moore, a devoted mother and advocate, established
            this platform to share her journey and provide valuable resources to
            families like yours. Rebecca has 20+ years experience as a teacher,
            educational leader and school governor and understands the
            frustrations and challenges both as an educator and a parent. At
            SENDponymum, we aim to bridge the gap between the special education
            needs community and the equine world, offering a space where
            families like ours can access valuable resources, share stories, and
            connect with others who understand the unique joys and challenges of
            raising a child with special needs in a rural setting.{" "}
          </p>
        </div>
        <div>
          <img className="about-me-images" src={Image3} alt="Image 3" />
        </div>
        <div>
          <br />
          <h1>WHAT WILL YOU FIND ON MY BLOG?</h1>
          <p>
            Trot into our blog for insightful articles, personal stories, and
            practical tips from parents, educators, and experts in the fields of
            special education and the equine community. Whether you&apos;re
            seeking advice on managing meltdowns or inspiration for inclusive
            activities, our blog is your go-to resource for support and
            encouragement.
          </p>
        </div>
        <div>
          <img className="about-me-images" src={Image4} alt="Image 4" />
        </div>
        <div>
          <br />
          <h1>WHY DID I START THIS BLOG? </h1>
          <p>
            I started SENDponymum because of my own experience as a parent
            raising children with special educational needs. Navigating the
            challenges of supporting my daughters, who have a deep love for
            horses and the outdoors, while also seeking out resources and
            connections within our rural community, inspired me to create a
            platform where others facing similar situations could find support
            and guidance.
          </p>
        </div>
      </div>
      <div className="journey-grid-container">
        <p>
          Journey with SENDponymum: navigating the daily challenges and finding
          the joy{" "}
        </p>

        <p>
          On SENDponymum, you&apos;ll find a wealth of resources and information
          aimed at supporting children with special education needs in the
          countryside and equine community. Our blog covers a variety of topics,
          including:{" "}
        </p>
        <p>
          <strong>Inspiring Stories:</strong> Heartfelt narratives from parents,
          caregivers, and individuals with special needs, sharing their
          journeys, triumphs, and challenges.{" "}
        </p>
        <p>
          <strong>Educational Resources:</strong> Practical tips, strategies,
          and advice for navigating the educational system, accessing support
          services, and advocating for your child&apos;s needs.{" "}
        </p>
        <p>
          <strong>Equine Therapy Insights:</strong> In-depth articles exploring
          the benefits of equine therapy for children with special needs,
          including personal anecdotes, expert interviews, and research
          findings.{" "}
        </p>
        <p>
          <strong>Community Connections:</strong> Opportunities to connect with
          other parents, caregivers, and professionals in the special education
          needs community, through forums, networking events, and guest
          contributions.{" "}
        </p>
        <p>
          <strong>Resource Recommendations:</strong> Curated lists of
          recommended books, websites, apps, and tools to help families access
          additional support and information.{" "}
        </p>
        <p>
          <strong>Inclusive Activities:</strong> Ideas and suggestions for
          inclusive activities and experiences that promote sensory engagement,
          social interaction, and physical development for children with special
          needs.{" "}
        </p>
        <p>
          <strong>Advocacy Initiatives:</strong> Updates on advocacy efforts,
          legislative developments, and community initiatives aimed at promoting
          inclusivity, accessibility, and support for individuals with special
          needs.{" "}
        </p>
        <p>
          Whether you&apos;re seeking practical advice, heartfelt inspiration,
          or opportunities to connect with others who share your journey,
          SENDponymum is your go-to destination for all things related to
          supporting children with special education needs in the countryside
          and equine community
        </p>
      </div>

      <div className="new-services">
        <p>
          <strong>New services Coming Soon!</strong>
        </p>
        <h1>Subscribe</h1>
        <p>
          Sign up for blogs and access to SEND help and advice, plus
          pony-related links and fun. Please check your junk/spam. We promise
          not to bombard you and really appreciate your interest.
        </p>
        <h1>Blog Spot</h1>
        <h1>Gallery</h1>
        <h1>Resources</h1>  
        <h1>Online Appointments</h1>
      </div>
    </div>
  );
}

export default Home;
