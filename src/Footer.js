
const Footer=()=>{
    const today=new Date();

    return(
     <footer className='Footer'>
        <p>
            Copyright &copy; Sanjay_Binnar {today.getFullYear()}
        </p>


     </footer>
    )
}

export default Footer