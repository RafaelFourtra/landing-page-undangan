import {Button} from "@nextui-org/react";


const SectionThree = () => {
    return(
        <>
        <div className={`container mx-auto px-10 mt-20`}>
            <div className="grid grid-cols-2">
                <div className='p-4'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h4 className={`text-[3rem] leading-[4rem] font-black`}>
                                Keunggulan dan fitur
                                <br />
                                pelayanan kami
                            </h4>                           
                        </div>
                    </div>
                </div>
                <div>
                    <img className='block mx-auto' src="https://res.cloudinary.com/practicaldev/image/fetch/s--l4Ne9mZQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--1uwa-GMK--/c_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbqud1ltn46amch1q6jy.jpg" />
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionThree