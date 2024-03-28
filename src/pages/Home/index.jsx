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
      <div className="grid-container">
        <div className="grid-item">
          <img src={Image2} alt="Image 2" />
        </div>
        <div className="grid-item">
          <p>
            WHO AM I?<br></br>
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
         <div className="grid-item">
          <img src={Image3} alt="Image 3" />
        </div>
        <div className="grid-item">
          <p>
            WHAT WILL YOU FIND ON MY BLOG? <br></br>Trot into our blog for
            insightful articles, personal stories, and practical tips from
            parents, educators, and experts in the fields of special education
            and the equine community. Whether you&apos;re seeking advice on
            managing meltdowns or inspiration for inclusive activities, our blog
            is your go-to resource for support and encouragement.
          </p>
        </div>
        <div className="grid-item">
          <img src={Image4} alt="Image 4" />
        </div>
        <div className="grid-item">
          <p>
            WHY DID I START THIS BLOG? <br></br>I started SENDponymum because of
            my own experience as a parent raising children with special
            educational needs. Navigating the challenges of supporting my
            daughters, who have a deep love for horses and the outdoors, while
            also seeking out resources and connections within our rural
            community, inspired me to create a platform where others facing
            similar situations could find support and guidance.
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
        <p><strong>New services Coming Soon!</strong></p>
        <p>Online Appointments</p>
        <p>Blog Spot</p>
      </div>
    </div>
  );
}

export default Home;
