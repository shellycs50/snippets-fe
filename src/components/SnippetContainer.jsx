import Snippet from "./Snippet"
function SnippetContainer({data}) {
    return (
        <div className="flex row justify-evenly flex-wrap w-full border-2 border-gray-500 p-5 gap-10">
            {data.map((snip, index) => (
                <Snippet key={index} name={snip.name} language={snip.language} content={snip.content} />
            ))}
        </div>
    )
}
export default SnippetContainer