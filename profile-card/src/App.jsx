
const App =()=>{
   const yourName="Maliha Anjum Siddiqa";
   const yourAim="I want to become a software engineer";
   const description="A sharp front-end student learning modern web development."
   const funFact="(I'm taking Japanese courses because I hope to visit Japan soon.)";
  return (
    <div className='profile-card'>
    <h1>{yourName}</h1>
    <h3>{yourAim}</h3>
    <h4>{description}</h4>
    <p>{funFact}</p>
    </div>
  )
}

export default App
