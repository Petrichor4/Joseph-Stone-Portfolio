const frontEnd = ['Typescript','CSS','HTML','Responsive Design','React','Tailwindcss'];
const BackEnd = ['APIs','Node','PostSql','REST']

export default function Resume() {
    return (
        <main>
            <section id="resume" className="flex text-nowrap p-20 flex-col">
                <h2 className="text-2xl mb-4 text-[#86bbd8] hover:underline"><a href="https://docs.google.com/document/d/1RbTF9Yi5fpGwJ9U8Igtr-jU7NeGwLt2m/edit">[Resume]</a></h2>
                <h3 className="sm:text-3xl text-xl">Front end proficiencies:</h3>
                <ul className="flex flex-col">
                    {frontEnd.map((skill, index) => (
                        <li className="sm:text-xl list-disc ml-6 m-2" key={index}>{skill}</li>
                    ))}
                </ul>
                <h3 className="sm:text-3xl text-xl">Front end proficiencies:</h3>
                <ul className="felx flex-col">
                    {BackEnd.map((skill, index) =>(
                        <li className="sm:text-xl list-disc ml-6 m-2" key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </main>
    )
}