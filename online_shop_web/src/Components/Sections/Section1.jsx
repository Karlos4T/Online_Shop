import '../../Styles/Section1.scss'
import '../../Styles/Common.scss'
import img1 from '../../Images/img1.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'


export const Section1 = () => {
    
    return(
        <div className="container-fluid p-2 bg-fith d-flex">
            <div className='card m-5'>
                <div className='onhover w-100 h-100 text-light d-flex align-items-center justify-content-center'>
                    <h4>
                        <b>
                            Oasis Collection
                        </b>
                    </h4>
                </div>
                <img className='w-100 h-100' src={img1} alt="" />
            </div>
            <div className='card m-5'>
                <div className='onhover w-100 h-100 text-light d-flex align-items-center justify-content-center'>
                    <h4>
                        <b>
                            Royal Capis
                        </b>
                    </h4>
                </div>
                <img className='w-100 h-100' src={img2} alt="" />
            </div>
            <div className='card m-5'>
                <div className='onhover w-100 h-100 text-light d-flex align-items-center justify-content-center'>
                    <h4>
                        <b>
                            Sonic King
                        </b>
                    </h4>
                </div>
                <img className='w-100 h-100' src={img3} alt="" />
            </div>
            <div className='card m-5'>
                <div className='onhover w-100 h-100 text-light d-flex align-items-center justify-content-center'>
                    <h4>
                        <b>
                            Tedy Blinder
                        </b>
                    </h4>
                </div>
                <img className='w-100 h-100' src={img4} alt="" />
            </div>
        </div>
    )
}