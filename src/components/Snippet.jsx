function Snippet({name, content, language}){
    return (
        <div className="flex flex-col gap-3 border-2 border-red-400 p-4">
        <h3 className="text-2xl text-bold">{name}</h3>
        <p className="text-lg">{language}</p>
        <p className="border-2 p-4 text-base max-w-96">{content}</p> 
        </div>
    )
}
export default Snippet