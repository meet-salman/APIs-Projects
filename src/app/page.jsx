import Link from "next/link"

const Home = () => {

  return (
    <>
      <div className='layout'>

        <h1 className='home_heading'> API's Explorer  Hub </h1>

        <div className='flex flex-wrap justify-center gap-6 mt-14'>

          <Link href="/joke" className='project_link' > Random Jokes </Link>
          <Link href="/dictionary" className='project_link' > Dictionary </Link>
          <Link href="/quote" className='project_link' > Random Qoutes </Link>

        </div>

      </div>



    </>
  )
}

export default Home