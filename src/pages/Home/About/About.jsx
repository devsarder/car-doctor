import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="relative lg:w-1/2">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="max-w-sm lg:absolute top-1/2 border-8 border-red-500 right-5 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            
            <div className='lg:w-3/4'>
                <p className='text-red-500 text-lg font-bold'>About Us</p>
                <h1 className="text-5xl font-bold">
                  We are qualified & of experience in this field
                </h1>
            </div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-red-500 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;