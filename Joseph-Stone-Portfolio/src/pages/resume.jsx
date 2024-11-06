const frontEnd = ['Typescript','CSS','HTML','Responsive Design','React','Tailwindcss'];
const BackEnd = ['APIs','Node','PostSql','REST']

export default function Resume() {
    return (
        <main>
            <section id="resume" className="flex text-nowrap p-20 flex-col">
                <h3 className="sm:text-3xl text-xl">Front end proficiencies:</h3>
                <ul className="flex flex-col">
                    {frontEnd.map((skill, index) => (
                        <li className="sm:text-xl list-disc" key={index}>{skill}</li>
                    ))}
                </ul>
                <h3 className="sm:text-3xl text-xl">Front end proficiencies:</h3>
                <ul className="felx flex-col">
                    {BackEnd.map((skill, index) =>(
                        <li className="sm:text-xl list-disc" key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </main>
    )
}