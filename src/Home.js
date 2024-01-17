import Feed from './Feed';

const Home = ({posts,data,fetchError,isLoading}) => {
  return (
    <main className="Home">
     {isLoading && <p className="statusMsg">Loading Posts.......</p>}
     {fetchError && <p className="statusMsg" style={{color:"red"}}>{fetchError}</p>}
     {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} />: 
     <p className="statusMsg">No Posts to Display</p>)}

    </main>
  )
}

export default Home