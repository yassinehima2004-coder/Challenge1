import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Aboutsection = () => {
    return ( 
        <section className="mx-auto max-w-6xl px-6">
            <div className="border-b border-slate-700 pt-20 pb-16  md:pb-20 lg:pb-28  flex flex-wrap justify-center items-center">
                <div className="max-w-[570px] ">
                    <h1 className="font-bold text-4xl lg:text-[45px] ">Crafted for Startup, SaaS and Business Sites.</h1>
                    <p className="text-lg py-6">The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</p>
                    <div className="flex flex-wrap  gap-5 py-6">
                        <div className="w-[250px]">
                            <h2><FontAwesomeIcon icon={faSquareCheck} className="bg-blue-50 text-blue-600"/> Premium quality</h2>
                            <h2><FontAwesomeIcon icon={faSquareCheck} className="bg-blue-50 text-blue-600"/> Tailwind CSS</h2>
                            <h2><FontAwesomeIcon icon={faSquareCheck} className="bg-blue-50 text-blue-600"/> Use for lifetime</h2>
                        </div>
                        <div>
                            <h2><FontAwesomeIcon icon={faSquareCheck} className="bg-blue-50 text-blue-600"/> Next.js</h2>
                            <h2><FontAwesomeIcon icon={faSquareCheck} className="bg-blue-50 text-blue-600"/> Rich documentation</h2>
                            <h2><FontAwesomeIcon icon={faSquareCheck} className="bg-blue-50 text-blue-600"/> Developer friendly</h2>
                        </div>
                    </div>

                </div>
                <div className="py-20">
                    <img src="https://startup.demo.nextjstemplates.com/images/about/about-image.svg" alt="" />
                </div>
            </div>

        </section>
     );
}
 
export default Aboutsection;