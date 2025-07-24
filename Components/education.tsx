
import Image from "next/image";


export default function Education() {
    return (
        <div className="border-2 dark:border-1 font-sans p-10">
            <div className="flex flex-row justify-between">
                <h2 className="text-5xl underline">Education</h2>
                <Image src='/IU.png' width={50} height={50} alt="IU Symbol" />
            </div>


            <div className="p-5">
                <div className="flex flex-row justify-between">
                    <p><span className="font-bold">Indiana University,</span> Bachelor of Science, Dual Degree</p>
                    <p className="font-bold">Aug 2019 - Jul 2023</p>
                </div>
                <div className="p-5">
                    <p><span className="font-bold">Informatics</span> - Luddy School of Informatics, Computing and Engineering</p>
                    <ul className="list-disc list-inside">
                        <li>Co-led major event planning and created 100+ digital assets to enhance engagement for 16,000+ attendees</li>
                        <li>Recipient of the B.J. Walls Scholarship, awarded for exceptional leadership, initiative, and impact on team outcomes</li>
                    </ul>
                </div>

                <div className="p-5 pb-0">
                    <p><span className="font-bold">Audio Engineering and Sound Production</span> - Jacobs School of Music</p>
                    <ul className="list-disc list-inside">
                        <li><span className="font-bold">Herbert Presidential Scholar</span> - a top merit award recognizing academic excellence and leadership potential</li>
                        <li><span className="font-bold">Music Faculty Award</span> - given for outstanding contributions to the Jacobs School of Music&apos;s engineering team</li>
                        <li><span className="font-bold">Indiana Premier Young Talent Scholar</span> - awarded for exceptional performance in interdisciplinary studies</li>
                    </ul>
                </div>

            </div>
        </div>
    )

}