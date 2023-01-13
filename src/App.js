import './styles.css'
//
import BusinessSignUpForm from './Components/Forms/BusinessSignUpForm';
import Banner from './Components/Banner/Banner'

function App() {
  return (
    <>

      <div className=" bg-auto bg-no-repeat bg-right bg-[url('./images/banner.png')] ">

      <div className='container'>
        <div>
            <BusinessSignUpForm />
          </div>      
    
          <div>
            <Banner />
          </div>
      </div>

      </div>

    </>
  );
}

export default App;
